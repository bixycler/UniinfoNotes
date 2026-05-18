const fs = require('fs');
const path = require('path');

const PAT_ID_PROP = /^id::\s*([0-9a-fA-F-]{36})\s*$/;

// Simple argument parser
const args = process.argv.slice(2);
let indexFile = path.resolve('index.json');
const inputs = [];

for (let i = 0; i < args.length; i++) {
    if (args[i] === '-o') {
        if (i + 1 < args.length) {
            indexFile = path.resolve(args[i + 1]);
            i++;
        } else {
            console.error('Error: -o requires a file path argument');
            process.exit(1);
        }
    } else {
        inputs.push(path.resolve(args[i]));
    }
}

if (inputs.length === 0) {
    console.error('Usage: node build-index.js [-o <index_file>] <inputs...>');
    process.exit(1);
}

// Recursively find all markdown files in input paths
function getMarkdownFiles(paths) {
    const mdFiles = [];
    
    function walk(currentPath) {
        if (!fs.existsSync(currentPath)) return;
        
        const stat = fs.statSync(currentPath);
        if (stat.isDirectory()) {
            const base = path.basename(currentPath);
            // Skip hidden directories, node_modules, and output directories
            if (base.startsWith('.') || base === 'node_modules' || base === 'publish' || base === 'CommonMark') {
                return;
            }
            const children = fs.readdirSync(currentPath);
            for (const child of children) {
                walk(path.join(currentPath, child));
            }
        } else if (stat.isFile() && path.extname(currentPath).toLowerCase() === '.md') {
            mdFiles.push(currentPath);
        }
    }
    
    for (const p of paths) {
        walk(p);
    }
    
    return mdFiles;
}

/**
 * Preprocess: collapse code blocks into placeholder tokens.
 * Returns { cleanLines: Array<{line: string, originalIndex: number}>, codeBlockMap: Map<string, string[]> }
 *
 * Handles both top-level ``` and bullet-prefixed - ``` fences.
 */
function preprocessCodeBlocks(lines) {
    const cleanLines = [];
    const codeBlockMap = new Map();
    let blockIndex = 0;
    let inCodeBlock = false;
    let currentBlock = [];
    let currentToken = '';

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        // Strip bullet prefix for fence detection only
        const testLine = line.trimStart().replace(/^-\s*/, '');
        if (testLine.startsWith('```')) {
            if (!inCodeBlock) {
                // Opening fence
                inCodeBlock = true;
                currentToken = `__CODE_BLOCK_${blockIndex++}__`;
                currentBlock = [line]; // preserve the original fence line
            } else {
                // Closing fence
                currentBlock.push(line);
                codeBlockMap.set(currentToken, currentBlock);
                cleanLines.push({ line: currentToken, originalIndex: i });
                inCodeBlock = false;
                currentBlock = [];
                currentToken = '';
            }
        } else if (inCodeBlock) {
            currentBlock.push(line);
        } else {
            cleanLines.push({ line, originalIndex: i });
        }
    }

    // Handle unclosed code block (malformed input)
    if (inCodeBlock && currentBlock.length > 0) {
        codeBlockMap.set(currentToken, currentBlock);
        cleanLines.push({ line: currentToken, originalIndex: lines.length - 1 });
    }

    return { cleanLines, codeBlockMap };
}

// Smarter block indexing (adapted from convert.js)
function indexFileBlocks(filePath) {
    const blocks = {};
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        let rawLines = content.split('\n');

        // Page-Header Item Normalization
        if (rawLines.length > 0 && rawLines[0].trim().startsWith('# ') && !rawLines[0].trim().startsWith('- ')) {
            // Replace the first line by prepending a bullet
            rawLines[0] = '- ' + rawLines[0].trimStart();
        }

        const { cleanLines } = preprocessCodeBlocks(rawLines);

        // Initialize with filename for page properties that have no leading header
        let lastContentLine = path.basename(filePath, '.md');

        for (let i = 0; i < cleanLines.length; i++) {
            const { line, originalIndex } = cleanLines[i];
            const stripped = line.trim();

            if (stripped.startsWith('__CODE_BLOCK_')) {
                continue;
            }

            if (stripped.startsWith('- ')) {
                let content = stripped.substring(2).trim();
                const idMatch = content.match(PAT_ID_PROP);
                if (idMatch) {
                    const uuid = idMatch[1];
                    const title = content.replace(idMatch[0], '').trim();
                    blocks[uuid] = {
                        title: title || lastContentLine,
                        sourceFile: filePath,
                        sourceLine: originalIndex + 1
                    };
                    lastContentLine = title || lastContentLine;
                } else {
                    lastContentLine = content || lastContentLine;
                }
            } else {
                const idMatch = stripped.match(PAT_ID_PROP);
                if (idMatch && lastContentLine) {
                    const uuid = idMatch[1];
                    blocks[uuid] = {
                        title: lastContentLine,
                        sourceFile: filePath,
                        sourceLine: originalIndex + 1
                    };
                }
            }
        }
    } catch (e) {
        console.error(`Error indexing blocks in ${filePath}:`, e);
    }
    return blocks;
}

console.log('Scanning inputs for Markdown files...');
const mdFiles = getMarkdownFiles(inputs);
console.log(`Found ${mdFiles.length} Markdown file(s) to scan.`);

// Load existing index
let globalIndex = {};
if (fs.existsSync(indexFile)) {
    try {
        globalIndex = JSON.parse(fs.readFileSync(indexFile, 'utf8'));
        console.log(`Loaded existing index with ${Object.keys(globalIndex).length} entries from ${indexFile}`);
    } catch (e) {
        console.error(`Error reading existing index file ${indexFile}:`, e);
    }
}

// Helper to create URL-friendly slugs
function slugify(str) {
    return str
        .toLowerCase()
        .replace(/[^\w]+/g, '-') // replace non-word chars with dash
        .replace(/^-+|-+$/g, ''); // trim leading/trailing dashes
}

// Function to resolve nested UUID references in titles topologically
function resolveTitleReferences(index, updateSlug = false) {
    const PAT_REF = /\(\(([0-9a-fA-F-]{36})\)\)|\[\[([0-9a-fA-F-]{36})\]\]/g;
    
    const g = {};
    for (const id in index) {
        let title = index[id];
        if (typeof title === 'object') title = title.title || '';
        if (!title) continue;
        
        const refs = [];
        const matches = title.matchAll(PAT_REF);
        for (const match of matches) {
            refs.push(match[1] || match[2]);
        }
        
        if (refs.length > 0) {
            g[id] = refs;
        }
    }
    
    let circularRefs = null;
    while (Object.keys(g).length > 0) {
        let resolvedAny = false;
        
        for (const id in g) {
            let resolvable = true;
            for (const t of g[id]) {
                if (t in g) { 
                    resolvable = false; 
                    break; 
                }
            }
            
            if (!resolvable) continue;
            
            resolvedAny = true;
            
            let title = index[id];
            let isObj = typeof title === 'object';
            let titleStr = isObj ? title.title : title;
            
            const newTitle = titleStr.replace(PAT_REF, (match, u1, u2) => {
                const targetUuid = u1 || u2;
                let targetTitle = index[targetUuid];
                if (targetTitle) {
                    let ts = typeof targetTitle === 'object' ? targetTitle.title : targetTitle;
                    if (ts) {
                        return ts.replace(/^(#+)\s+/, '');
                    }
                }
                return match;
            });
            
            if (isObj) {
                index[id].title = newTitle;
                if (updateSlug) index[id].slug = slugify(newTitle);
            } else {
                index[id] = newTitle;
            }
            
            delete g[id];
        }
        
        if (!resolvedAny) {
            console.warn('Warning: Circular refs detected in title resolution for UUIDs:', Object.keys(g));
            circularRefs = g;
            break;
        }
    }
    
    if (circularRefs) {
        for (const id in circularRefs) {
            let title = index[id];
            let isObj = typeof title === 'object';
            let titleStr = isObj ? title.title : title;
            
            const newTitle = titleStr.replace(PAT_REF, (match, u1, u2) => {
                const targetUuid = u1 || u2;
                if (targetUuid in circularRefs) {
                    return targetUuid;
                }
                let targetTitle = index[targetUuid];
                if (targetTitle) {
                    let ts = typeof targetTitle === 'object' ? targetTitle.title : targetTitle;
                    if (ts) {
                        return ts.replace(/^(#+)\s+/, '');
                    }
                }
                return match;
            });
            
            if (isObj) {
                index[id].title = newTitle;
                if (updateSlug) index[id].slug = slugify(newTitle);
            } else {
                index[id] = newTitle;
            }
        }
    }
}

// Walk and index each file
let newEntriesCount = 0;
for (const file of mdFiles) {
    const fileBlocks = indexFileBlocks(file);
    for (const uuid in fileBlocks) {
        const block = fileBlocks[uuid];
        
        // Merge or create index entry
        if (!globalIndex[uuid]) {
            globalIndex[uuid] = {};
            newEntriesCount++;
        }
        
        // Update source fields
        globalIndex[uuid].title = block.title;
        globalIndex[uuid].sourceFile = block.sourceFile;
        globalIndex[uuid].sourceLine = block.sourceLine;
        globalIndex[uuid].slug = slugify(block.title);
        
        // Ensure outputFile and outputLine remain intact if they already exist
        if (!globalIndex[uuid].outputFile) globalIndex[uuid].outputFile = null;
        if (!globalIndex[uuid].outputLine) globalIndex[uuid].outputLine = null;
    }
}

// Topologically resolve titles to remove nested block references
console.log('Resolving nested title references...');
resolveTitleReferences(globalIndex, true);

// Write the updated index back
try {
    const outDir = path.dirname(indexFile);
    if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir, { recursive: true });
    }
    fs.writeFileSync(indexFile, JSON.stringify(globalIndex, null, 2), 'utf8');
    console.log(`Saved index with ${Object.keys(globalIndex).length} entries (${newEntriesCount} new) to ${indexFile}`);
} catch (e) {
    console.error(`Error saving index:`, e);
}
