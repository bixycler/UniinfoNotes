const fs = require('fs');
const path = require('path');

// Regex Patterns
const PAT_ID_PROP = /id::\s*([0-9a-fA-F-]{36})/;

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

// Smarter block indexing (adapted from convert.js)
function indexFileBlocks(filePath) {
    const blocks = {};
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const lines = content.split('\n');
        let lastContentLine = "";
        let inCodeBlock = false;

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const stripped = line.trim();

            if (stripped.startsWith('```')) {
                inCodeBlock = !inCodeBlock;
                continue;
            }
            if (inCodeBlock) continue;

            if (stripped.startsWith('- ')) {
                let content = stripped.substring(2).trim();
                const idMatch = content.match(PAT_ID_PROP);
                if (idMatch) {
                    const uuid = idMatch[1];
                    const title = content.replace(idMatch[0], '').trim();
                    blocks[uuid] = {
                        title: title,
                        sourceFile: filePath,
                        sourceLine: i + 1
                    };
                    lastContentLine = title;
                } else {
                    lastContentLine = content;
                }
            } else {
                const idMatch = stripped.match(PAT_ID_PROP);
                if (idMatch) {
                    const uuid = idMatch[1];
                    if (lastContentLine) {
                        blocks[uuid] = {
                            title: lastContentLine,
                            sourceFile: filePath,
                            sourceLine: i + 1
                        };
                    }
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
