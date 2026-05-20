const fs = require('fs');
const path = require('path');

// Regex Patterns
const PAT_PROP = /^\s*(\w+):: (.*)$/;
const PAT_LB_START = /^\s*:(logbook|LOGBOOK):$/;
const PAT_LB_END = /^\s*:END:$/;
const PAT_ITEM = /^(\t*)-( |$)/;
const PAT_UUID_REF = /\(\(([0-9a-fA-F-]{36})\)\)/g;
const PAT_BRACKET_UUID_REF = /\[\[([0-9a-fA-F-]{36})\]\]/g;
const PAT_LINK_REF = /\[([^\[\]]*)\]\(\(\(([0-9a-fA-F-]{36})\)\)(?: "([^"]*)")?\)/g;
const PAT_ID_PROP = /^id::\s*([0-9a-fA-F-]{36})\s*$/;

// Helper to escape XML/HTML attributes
function escapeXML(str) {
    return str.replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}

// Helper to create URL-friendly slugs
function slugify(str) {
    return str
        .toLowerCase()
        .replace(/[^\w]+/g, '-') // replace non-word chars with dash
        .replace(/^-+|-+$/g, ''); // trim leading/trailing dashes
}

// Simple argument parser for CLI flags
const args = process.argv.slice(2);
let indexFile = path.resolve('index.json');
let outputPathArg = null;
let baseDirArg = null;
let breakOption = 'none';
const inputs = [];

for (let i = 0; i < args.length; i++) {
    if (args[i] === '-i') {
        if (i + 1 < args.length) {
            indexFile = path.resolve(args[i + 1]);
            i++;
        } else {
            console.error('Error: -i requires a file path argument');
            process.exit(1);
        }
    } else if (args[i] === '-o') {
        if (i + 1 < args.length) {
            outputPathArg = path.resolve(args[i + 1]);
            i++;
        } else {
            console.error('Error: -o requires a path argument');
            process.exit(1);
        }
    } else if (args[i] === '-b' || args[i] === '--base') {
        if (i + 1 < args.length) {
            baseDirArg = path.resolve(args[i + 1]);
            i++;
        } else {
            console.error('Error: -b/--base requires a directory path argument');
            process.exit(1);
        }
    } else if (args[i] === '--break' || args[i] === '--br') {
        if (i + 1 < args.length) {
            const rawVal = args[i + 1].toLowerCase();
            if (rawVal === 'br' || rawVal === '<br>') {
                breakOption = 'br';
            } else if (rawVal === 'space' || rawVal === 'spaces' || rawVal === 'double-space' || rawVal === 'trailing') {
                breakOption = 'space';
            } else if (rawVal === 'none') {
                breakOption = 'none';
            } else {
                console.error(`Error: Unknown break option "${args[i + 1]}". Valid options are: <br>, space, none`);
                process.exit(1);
            }
            i++;
        } else {
            console.error('Error: --break/--br requires a break type ("<br>", "space", or "none")');
            process.exit(1);
        }
    } else {
        inputs.push(path.resolve(args[i]));
    }
}

if (inputs.length === 0 || !outputPathArg) {
    if (inputs.length > 0 && !outputPathArg) {
        console.error('Error: Output directory (-o) is required. No default is supported.');
    }
    console.error('Usage: node convert.js -o <output_path> [--break <br|space|none>] [-i <index_file>] [-b <base_dir>] <inputs...>');
    console.error('\nOptions:');
    console.error('  -o <output_path>   (Required) Directory to save output files. Preserves relative directory structure under this path.');
    console.error('  --break <type>     Break conversion style: "<br>" (or "br"), "space" (trailing double space), or "none" (default).');
    console.error('  -i <index_file>    Path to the index JSON file (default: index.json)');
    console.error('  -b <base_dir>      Base input directory to compute relative paths for output mirroring.');
    console.error('                     (Auto-detected if input lives directly under a "pages" or "journals" directory)');
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

// 1. Index Internal Blocks (UUID -> Title) for local freshness override
function indexInternalBlocks(filePath, cleanLines) {
    const mapping = {};
    const lineMap = {};
    try {
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
                    mapping[uuid] = title || lastContentLine;
                    lineMap[uuid] = { srcLine: originalIndex + 1, srcFile: filePath };
                    lastContentLine = title || lastContentLine;
                } else {
                    lastContentLine = content || lastContentLine;
                }
            } else {
                // Check for property line (indented or top-level)
                const idMatch = stripped.match(PAT_ID_PROP);
                if (idMatch && lastContentLine) {
                    const uuid = idMatch[1];
                    mapping[uuid] = lastContentLine;
                    lineMap[uuid] = { srcLine: originalIndex + 1, srcFile: filePath };
                }
            }
        }
    } catch (e) {
        console.error('Error indexing blocks:', e);
    }
    return { titleMap: mapping, lineMap };
}

function buildLinkTarget(uuid, inputPath, outputPath, sourceLineMap) {
    let target = `#${uuid}`;
    const entry = sourceLineMap[uuid];
    
    if (entry && entry.srcFile && entry.srcFile !== inputPath) {
        if (entry.outFile) {
            const relPath = path.relative(path.dirname(outputPath), entry.outFile);
            target = relPath.replace(/\\/g, '/').replace(/ /g, '%20') + target;
        }
    }
    return target;
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
// 2. Convert File
function convertFile(inputPath, outputPath, uuidMap, sourceLineMap, cleanLines, codeBlockMap) {
    try {
        let nmd = '';
        let outputLine = 0; // 1‑based line counter for the generated file

        let props = {};
        let logbook = '';
        let inLogbook = false;
        let meta = '';

        let currentBlockIsHeader = false;
        let currentBlockIsEmptyTitle = false;
        let hasAddedContinuationContent = false;

        for (let i = 0; i < cleanLines.length; i++) {
            let ln = cleanLines[i].line;

            if (ln.startsWith('__CODE_BLOCK_') && codeBlockMap.has(ln)) {
                const originalLines = codeBlockMap.get(ln);
                for (const codeLine of originalLines) {
                    nmd += codeLine + '\n';
                    outputLine++;
                }
                continue;
            }

            // Handle Metadata Block
            if (ln.match(PAT_LB_START)) { inLogbook = true; continue; }
            if (ln.match(PAT_LB_END)) { inLogbook = false; continue; }
            if (inLogbook) { logbook += escapeXML(ln.trim()) + '\u0026#10;'; continue; }

            const propMatch = ln.match(PAT_PROP);
            if (propMatch) { props[propMatch[1]] = escapeXML(propMatch[2]); continue; }

            // End of metadata block (encountered non-metadata line)
            if ((Object.keys(props).length > 0 || logbook) && meta === '') {
                let anchor = '<a class="logseq-meta" ';
                if (props.id) {
                    anchor += `id="${props.id}" `;
                    // Record output line and file for this UUID
                    const uuid = props.id;
                    if (!sourceLineMap[uuid]) sourceLineMap[uuid] = {};
                    sourceLineMap[uuid].outLine = outputLine; // current line will be the previous one
                    sourceLineMap[uuid].outFile = outputPath;
                    delete props.id;
                }
                for (let key in props) { anchor += `data-${key}="${props[key]}" `; }
                if (logbook) { anchor += `data-logbook="${logbook}" `; }
                anchor += '></a>';
                let lastLineMatch = nmd.match(/(?:^|\n)([ \t]*)(.*)\n$/);
                if (lastLineMatch) {
                    let lastIndent = lastLineMatch[1];
                    let lastTextTrimmed = lastLineMatch[2].trim();
                    // Do not append to the end of block fences or table rows, as it breaks their syntax
                    if (lastTextTrimmed.startsWith('```') || 
                        lastTextTrimmed.startsWith('$$') || 
                        lastTextTrimmed.startsWith('|') || 
                        lastTextTrimmed.startsWith('---')) {
                        nmd += lastIndent + anchor + '\n';
                        outputLine++;
                    } else {
                        nmd = nmd.slice(0, -1) + ' ' + anchor + '\n';
                    }
                } else {
                    if (nmd.endsWith('\n')) { nmd = nmd.slice(0, -1) + ' ' + anchor + '\n'; }
                    else { nmd += ' ' + anchor; }
                }
                props = {};
                logbook = '';
            }

            // Bullet+ID special case
            const bulletIdMatch = ln.match(/^(\s*-\s*)id::\s*([0-9a-fA-F-]{36})\s*$/);
            if (bulletIdMatch) {
                props.id = bulletIdMatch[2];
                // Record mapping for this UUID (source line already in sourceLineMap)
                const uuid = props.id;
                if (!sourceLineMap[uuid]) sourceLineMap[uuid] = {};
                sourceLineMap[uuid].outLine = outputLine;
                sourceLineMap[uuid].outFile = outputPath;
                currentBlockIsHeader = false;
                currentBlockIsEmptyTitle = true;
                hasAddedContinuationContent = false;
                continue;
            }

            // New block detection
            if (ln.match(PAT_ITEM)) {
                currentBlockIsHeader = ln.match(/^\s*-\s+#+\s/);
                currentBlockIsEmptyTitle = false;
                hasAddedContinuationContent = false;
                if (ln.trim() === '-') { ln = ln.replace(/-(\s*)$/, '- <zwsp>'); }
            }

            // Line breaks for continuation lines
            if (!ln.match(PAT_ITEM) && ln.trim().length > 0 && !ln.trim().startsWith('#')) {
                const textStart = ln.search(/\S/);
                if (textStart > -1) {
                    let needBr = true;
                    if ((currentBlockIsHeader || currentBlockIsEmptyTitle) && !hasAddedContinuationContent) { needBr = false; }
                    // Exclude block-level elements (tables, blockquotes, HTML tags) from break insertion
                    const trimmedLn = ln.trim();
                    if (trimmedLn.startsWith('|') || trimmedLn.startsWith('>') || trimmedLn.startsWith('<')) { needBr = false; }
                    if (needBr) {
                        if (breakOption === 'br') {
                            ln = ln.substring(0, textStart) + '<br>' + ln.substring(textStart);
                        } else if (breakOption === 'space') {
                            if (nmd.endsWith('\n')) {
                                nmd = nmd.slice(0, -1) + '  \n';
                            }
                        }
                    }
                    hasAddedContinuationContent = true;
                }
            }

            // Link processing (standard markdown style [text](((uuid))) or [text]([[uuid]]))
            ln = ln.replace(PAT_LINK_REF, (match, text, uuid, title) => {
                let displayTitle = text || title || uuidMap[uuid] || uuid;
                const headerMatch = displayTitle.match(/^(#+)\s+(.*)$/);
                if (headerMatch) {
                    const level = headerMatch[1].length;
                    const content = headerMatch[2];
                    displayTitle = `<span class=\"link-h${level}\">${content}</span>`;
                }
                let target = buildLinkTarget(uuid, inputPath, outputPath, sourceLineMap);
                return `[${displayTitle}](${target})`;
            });
            
            // Legacy link syntax support: ((UUID))
            ln = ln.replace(PAT_UUID_REF, (match, uuid) => {
                let title = uuidMap[uuid] || uuid;
                const headerMatch = title.match(/^(#+)\s+(.*)$/);
                if (headerMatch) {
                    const level = headerMatch[1].length;
                    const content = headerMatch[2];
                    title = `<span class=\"link-h${level}\">${content}</span>`;
                }
                let target = buildLinkTarget(uuid, inputPath, outputPath, sourceLineMap);
                return `[${title}](${target})`;
            });

            // New link syntax support: [[UUID]]
            ln = ln.replace(PAT_BRACKET_UUID_REF, (match, uuid) => {
                let title = uuidMap[uuid] || uuid;
                const headerMatch = title.match(/^(#+)\s+(.*)$/);
                if (headerMatch) {
                    const level = headerMatch[1].length;
                    const content = headerMatch[2];
                    title = `<span class=\"link-h${level}\">${content}</span>`;
                }
                let target = buildLinkTarget(uuid, inputPath, outputPath, sourceLineMap);
                return `[${title}](${target})`;
            });

            // After link processing, record the output line and file for any UUID that appears in this line
            // This handles UUIDs that are only referenced (no metadata anchor)


            nmd += ln + '\n';
            outputLine++;
        }

        // Ensure output directory exists
        const outDir = path.dirname(outputPath);
        if (!fs.existsSync(outDir)) { fs.mkdirSync(outDir, { recursive: true }); }

        fs.writeFileSync(outputPath, nmd, 'utf8');
        console.log(`Successfully converted to ${outputPath}`);

    } catch (e) {
        console.error('Error converting file:', e);
    }
}

// Determine target output path dynamically based on inputs and flags
function determineOutputPath(inputFile, outputPathArg, isSingleInput, baseDir) {
    const fileName = path.basename(inputFile, path.extname(inputFile)) + '.cm.md';
    if (outputPathArg) {
        if (baseDir) {
            const relativeDir = path.relative(baseDir, path.dirname(inputFile));
            
            // Fail fast on path traversal
            if (relativeDir.startsWith('..') || path.isAbsolute(relativeDir)) {
                console.error(`Error: Path traversal detected. Input file "${inputFile}" is outside the base directory "${baseDir}".`);
                process.exit(1);
            }
            
            return path.join(outputPathArg, relativeDir, fileName);
        } else {
            let isDir = false;
            try {
                if (fs.existsSync(outputPathArg)) {
                    isDir = fs.statSync(outputPathArg).isDirectory();
                } else {
                    isDir = outputPathArg.endsWith('/') || outputPathArg.endsWith('\\') || !isSingleInput;
                }
            } catch (e) {
                isDir = !isSingleInput;
            }

            if (isDir) {
                return path.join(outputPathArg, fileName);
            } else {
                return outputPathArg;
            }
        }
    } else {
        return path.join(path.dirname(inputFile), 'publish', 'CommonMark', fileName);
    }
}

// MAIN BATCH EXECUTION

// 1. Gather all files to process
console.log('Scanning inputs for Markdown files...');
const mdFiles = getMarkdownFiles(inputs);
console.log(`Found ${mdFiles.length} Markdown file(s) to convert.`);

if (mdFiles.length === 0) {
    console.log('No files to process. Exiting.');
    process.exit(0);
}

// 2. Auto-detect baseDir if outputPathArg is provided but no baseDirArg is specified
let baseDir = baseDirArg;
if (!baseDir && outputPathArg) {
    if (inputs.length > 0) {
        let firstInput = path.resolve(inputs[0]);
        if (fs.existsSync(firstInput) && fs.statSync(firstInput).isFile()) {
            firstInput = path.dirname(firstInput);
        }
        
        const parts = firstInput.split(path.sep);
        const pagesIdx = parts.lastIndexOf('pages');
        const journalsIdx = parts.lastIndexOf('journals');
        const targetIdx = Math.max(pagesIdx, journalsIdx);
        
        if (targetIdx !== -1) {
            baseDir = parts.slice(0, targetIdx + 1).join(path.sep);
            console.log(`Auto-detected base directory (pages/journals root): ${baseDir}`);
        } else {
            baseDir = firstInput;
            console.log(`Auto-detected base directory: ${baseDir}`);
        }
    }
}

// 2. Load global index if it exists
let globalIndex = {};
if (fs.existsSync(indexFile)) {
    try {
        globalIndex = JSON.parse(fs.readFileSync(indexFile, 'utf8'));
        console.log(`Loaded ${Object.keys(globalIndex).length} external definitions from index.`);
    } catch (e) {
        console.error(`Warning: Failed to load index from ${indexFile}:`, e);
    }
}

// 3. Build base maps from global index
const titleMap = {};
const sourceLineMap = {};

for (const uuid in globalIndex) {
    const entry = globalIndex[uuid];
    titleMap[uuid] = entry.title || '';
    sourceLineMap[uuid] = {
        srcLine: entry.sourceLine || null,
        srcFile: entry.sourceFile || null,
        outLine: entry.outputLine || null,
        outFile: entry.outputFile || null
    };
}

// 4. Pre-update output file paths in sourceLineMap for all files being converted in this batch
const isSingleInput = mdFiles.length === 1;
const fileToOutputPath = new Map();
for (const file of mdFiles) {
    const outputPath = determineOutputPath(file, outputPathArg, isSingleInput, baseDir);
    fileToOutputPath.set(file, outputPath);
}

for (const uuid in sourceLineMap) {
    const entry = sourceLineMap[uuid];
    if (entry.srcFile && fileToOutputPath.has(entry.srcFile)) {
        entry.outFile = fileToOutputPath.get(entry.srcFile);
    }
}

// 5. Process each file in the batch

for (const file of mdFiles) {
    console.log(`\nProcessing file: ${file}`);
    
    // Read and preprocess file contents
    const content = fs.readFileSync(file, 'utf8');
    let rawLines = content.split('\n');

    // Page-Header Item Normalization
    if (rawLines.length > 0) {
        const trimmed = rawLines[0].trim();
        if (trimmed.startsWith('#') && !trimmed.startsWith('- ')) {
            const headingMatch = trimmed.match(/^#+\s/);
            if (headingMatch) {
                rawLines[0] = '- ' + rawLines[0].trimStart();
            }
        }
    }

    const { cleanLines, codeBlockMap } = preprocessCodeBlocks(rawLines);
    
    // Index internal blocks to get fresh local overrides for this file
    const { titleMap: localTitleMap, lineMap: localLineMap } = indexInternalBlocks(file, cleanLines);
    console.log(`Indexed ${Object.keys(localTitleMap).length} internal blocks for local override.`);
    
    // Merge internal blocks (local overrides global mapping)
    const activeTitleMap = { ...titleMap, ...localTitleMap };
    
    // Topologically resolve any nested references in the titles so links are rendered flat
    resolveTitleReferences(activeTitleMap);
    
    // Merge line maps to preserve source lines
    const activeSourceLineMap = { ...sourceLineMap };
    for (const uuid in localLineMap) {
        activeSourceLineMap[uuid] = {
            ...activeSourceLineMap[uuid],
            srcLine: localLineMap[uuid].srcLine,
            srcFile: localLineMap[uuid].srcFile
        };
    }
    
    const outputPath = determineOutputPath(file, outputPathArg, isSingleInput, baseDir);
    console.log(`Output target: ${outputPath}`);
    
    // Convert the file
    convertFile(file, outputPath, activeTitleMap, activeSourceLineMap, cleanLines, codeBlockMap);
    
    // Propagate all updates back to our in-memory mappings
    for (const uuid in activeTitleMap) {
        titleMap[uuid] = activeTitleMap[uuid];
    }
    for (const uuid in activeSourceLineMap) {
        sourceLineMap[uuid] = activeSourceLineMap[uuid];
    }
}

// 5. Update global index with combined results
for (const uuid in sourceLineMap) {
    const entry = sourceLineMap[uuid];
    
    if (!globalIndex[uuid]) {
        globalIndex[uuid] = {};
    }
    
    // Update source attributes
    if (entry.srcLine) globalIndex[uuid].sourceLine = entry.srcLine;
    if (entry.srcFile) globalIndex[uuid].sourceFile = entry.srcFile;
    
    // Update output attributes
    if (entry.outLine !== null && entry.outLine !== undefined) {
        globalIndex[uuid].outputLine = entry.outLine;
    }
    if (entry.outFile) {
        globalIndex[uuid].outputFile = entry.outFile;
    }
    
    // Update title & slug if they exist
    if (titleMap[uuid]) {
        globalIndex[uuid].title = titleMap[uuid];
        globalIndex[uuid].slug = slugify(titleMap[uuid]);
    }
    
    // Clean up empty fields
    if (!globalIndex[uuid].sourceLine) globalIndex[uuid].sourceLine = null;
    if (!globalIndex[uuid].sourceFile) globalIndex[uuid].sourceFile = null;
    if (!globalIndex[uuid].outputLine) globalIndex[uuid].outputLine = null;
    if (!globalIndex[uuid].outputFile) globalIndex[uuid].outputFile = null;
}

// 6. Save the updated global index
try {
    const indexDir = path.dirname(indexFile);
    if (!fs.existsSync(indexDir)) {
        fs.mkdirSync(indexDir, { recursive: true });
    }
    fs.writeFileSync(indexFile, JSON.stringify(globalIndex, null, 2), 'utf8');
    console.log(`\nGlobal index successfully updated at ${indexFile}`);
} catch (e) {
    console.error('Error saving updated global index:', e);
}
