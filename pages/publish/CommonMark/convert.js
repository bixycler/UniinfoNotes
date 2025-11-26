const fs = require('fs');
const path = require('path');

// Configuration
const args = process.argv.slice(2);

if (args.length < 1) {
    console.error('Usage: node convert.js <input_file> [output_file]');
    process.exit(1);
}

const INPUT_FILE = path.resolve(args[0]);
const BASE_DIR = path.dirname(INPUT_FILE); // Assuming Namespace is relative to input or in a fixed location relative to repo

// Try to find Namespace.md. 
// Strategy: Look in the same directory as input, or go up until found, or assume fixed path if known structure.
// Given the user's repo structure seems to be `pages/`, we can try to find `pages/Namespace.md`.
// For now, let's assume it's in the same directory as the input file, or we can fallback to a fixed path if we knew the repo root.
// Let's rely on the input file's directory for now.
const NAMESPACE_FILE = path.join(path.dirname(INPUT_FILE), 'Namespace.md');

// Output file
let OUTPUT_FILE;
if (args[1]) {
    OUTPUT_FILE = path.resolve(args[1]);
} else {
    // Default: pages/publish/CommonMark/<filename>.cm.md
    const fileName = path.basename(INPUT_FILE, path.extname(INPUT_FILE)) + '.cm.md';
    OUTPUT_FILE = path.join(path.dirname(INPUT_FILE), 'publish', 'CommonMark', fileName);
}

console.log(`Input: ${INPUT_FILE}`);
console.log(`Namespace: ${NAMESPACE_FILE}`);
console.log(`Output: ${OUTPUT_FILE}`);

// Regex Patterns
const PAT_PROP = /^\s*(\w+):: (.*)$/;
const PAT_LB_START = /^\s*:(logbook|LOGBOOK):$/;
const PAT_LB_END = /^\s*:END:$/;
const PAT_ITEM = /^(\t*)-( |$)/;
const PAT_UUID_REF = /\(\(([0-9a-fA-F-]{36})\)\)/g;
const PAT_LINK_REF = /\[([^\[\]]*)\]\(\(\(([0-9a-fA-F-]{36})\)\)(?: "([^"]*)")?\)/g;
const PAT_ID_PROP = /id::\s*([0-9a-fA-F-]{36})/;

// Helper to escape XML/HTML attributes
function escapeXML(str) {
    return str.replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}

// 1. Load Namespace Mapping (UUID -> Title)
function loadNamespace(filePath) {
    const mapping = {};
    const lineMap = {};
    if (!fs.existsSync(filePath)) {
        console.warn(`Warning: Namespace file not found at ${filePath}`);
        return { titleMap: mapping, lineMap };
    }
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const lines = content.split('\n');
        let currentText = null;

        for (let i = 0; i < lines.length; i++) {
            let line = lines[i].trim();
            if (!line) continue;

            const idMatch = line.match(PAT_ID_PROP);
            if (idMatch) {
                const uuid = idMatch[1];
                let textPart = line.replace(idMatch[0], '').trim();

                if (textPart && textPart !== '-') {
                    mapping[uuid] = textPart.replace(/^(\t*|- )+/, '').trim();
                } else if (currentText) {
                    mapping[uuid] = currentText;
                }
                lineMap[uuid] = { srcLine: i + 1, srcFile: filePath }; // source line number (1‑based)
            } else {
                let cleanText = line.replace(/^(\t*|- )+/, '').trim();
                if (!cleanText.startsWith('collapsed::') &&
                    !cleanText.startsWith(':LOGBOOK:') &&
                    !cleanText.startsWith('CLOCK:') &&
                    !cleanText.startsWith(':END:')) {
                    currentText = cleanText;
                }
            }
        }
    } catch (e) {
        console.error('Error loading namespace:', e);
    }
    return { titleMap: mapping, lineMap };
}

// 2. Index Internal Blocks (UUID -> Title)
function indexInternalBlocks(filePath) {
    const mapping = {};
    const lineMap = {};
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const lines = content.split('\n');
        let lastContentLine = "";
        let inCodeBlock = false;

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const stripped = line.trim();

            // Toggle code block state
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
                    mapping[uuid] = title;
                    lineMap[uuid] = { srcLine: i + 1, srcFile: filePath };
                    lastContentLine = title;
                } else {
                    lastContentLine = content;
                }
            } else {
                // Check for property line (indented or top-level)
                // We use the regex to ensure it's a valid ID property line
                const idMatch = stripped.match(PAT_ID_PROP);
                if (idMatch) {
                    const uuid = idMatch[1];
                    if (lastContentLine) {
                        mapping[uuid] = lastContentLine;
                        lineMap[uuid] = { srcLine: i + 1, srcFile: filePath };
                    }
                }
            }
        }
    } catch (e) {
        console.error('Error indexing blocks:', e);
    }
    return { titleMap: mapping, lineMap };
}

// 3. Convert File
function convertFile(inputPath, outputPath, uuidMap, sourceLineMap) {
    try {
        const content = fs.readFileSync(inputPath, 'utf8');
        const lines = content.split('\n');
        let nmd = '';
        let outputLine = 0; // 1‑based line counter for the generated file

        let props = {};
        let logbook = '';
        let inLogbook = false;
        let meta = '';

        let currentBlockIsHeader = false;
        let currentBlockIsEmptyTitle = false;
        let hasAddedContinuationContent = false;

        for (let i = 0; i < lines.length; i++) {
            let ln = lines[i];

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
                    // Record output line for this UUID
                    const uuid = props.id;
                    if (!sourceLineMap[uuid]) sourceLineMap[uuid] = {};
                    sourceLineMap[uuid].outLine = outputLine; // current line will be the previous one
                    delete props.id;
                }
                for (let key in props) { anchor += `data-${key}="${props[key]}" `; }
                if (logbook) { anchor += `data-logbook="${logbook}" `; }
                anchor += '></a>';
                if (nmd.endsWith('\n')) { nmd = nmd.slice(0, -1) + ' ' + anchor + '\n'; }
                else { nmd += ' ' + anchor; }
                props = {};
                logbook = '';
            }

            // Bullet+ID special case
            const bulletIdMatch = ln.match(/^(\s*-\s*)id::\s*([0-9a-fA-F-]{36})\s*$/);
            if (bulletIdMatch) {
                props.id = bulletIdMatch[2];
                ln = bulletIdMatch[1];
                nmd += ln + '\n';
                outputLine++;
                // Record mapping for this UUID (source line already in sourceLineMap)
                const uuid = props.id;
                if (!sourceLineMap[uuid]) sourceLineMap[uuid] = {};
                sourceLineMap[uuid].outLine = outputLine;
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
                    if (needBr) { ln = ln.substring(0, textStart) + '<br>' + ln.substring(textStart); }
                    hasAddedContinuationContent = true;
                }
            }

            // Link processing
            ln = ln.replace(PAT_LINK_REF, (match, text, uuid, title) => {
                let displayTitle = text || title || uuidMap[uuid] || uuid;
                const headerMatch = displayTitle.match(/^(#+)\s+(.*)$/);
                if (headerMatch) {
                    const level = headerMatch[1].length;
                    const content = headerMatch[2];
                    displayTitle = `<span class=\"link-h${level}\">${content}</span>`;
                }
                return `[${displayTitle}](#${uuid})`;
            });
            ln = ln.replace(PAT_UUID_REF, (match, uuid) => {
                let title = uuidMap[uuid] || uuid;
                const headerMatch = title.match(/^(#+)\s+(.*)$/);
                if (headerMatch) {
                    const level = headerMatch[1].length;
                    const content = headerMatch[2];
                    title = `<span class=\"link-h${level}\">${content}</span>`;
                }
                return `[${title}](#${uuid})`;
            });

            // After link processing, record the output line for any UUID that appears in this line
            // This handles UUIDs that are only referenced (no metadata anchor)
            for (const match of ln.matchAll(PAT_UUID_REF)) {
                const uuid = match[1];
                if (sourceLineMap[uuid] && !sourceLineMap[uuid].outLine) {
                    sourceLineMap[uuid].outLine = outputLine + 1; // the line we are about to write
                }
            }
            for (const match of ln.matchAll(PAT_LINK_REF)) {
                const uuid = match[2];
                if (sourceLineMap[uuid] && !sourceLineMap[uuid].outLine) {
                    sourceLineMap[uuid].outLine = outputLine + 1;
                }
            }

            nmd += ln + '\n';
            outputLine++;
        }

        // Ensure output directory exists
        const outDir = path.dirname(outputPath);
        if (!fs.existsSync(outDir)) { fs.mkdirSync(outDir, { recursive: true }); }

        fs.writeFileSync(outputPath, nmd, 'utf8');
        console.log(`Successfully converted to ${outputPath}`);

        // Helper to create URL-friendly slugs
        function slugify(str) {
            return str
                .toLowerCase()
                .replace(/[^\w]+/g, '-') // replace non-word chars with dash
                .replace(/^-+|-+$/g, ''); // trim leading/trailing dashes
        }

        // Write the combined index (source and output line numbers) to project root
        const indexPath = path.resolve('index.json');
        const combinedIndex = {};
        for (const uuid in sourceLineMap) {
            const entry = sourceLineMap[uuid];
            combinedIndex[uuid] = {
                sourceFile: entry.srcLine ? (entry.srcFile || INPUT_FILE) : null,
                outputFile: OUTPUT_FILE,
                sourceLine: entry.srcLine || null,
                outputLine: entry.outLine || null,
                title: titleMap[uuid] || '',
                slug: slugify(titleMap[uuid] || '')
            };
        }
        fs.writeFileSync(indexPath, JSON.stringify(combinedIndex, null, 2), 'utf8');
        console.log('UUID index written to', indexPath);

    } catch (e) {
        console.error('Error converting file:', e);
    }
}

// Main Execution
console.log('Loading Namespace...');
const { titleMap: nsMap, lineMap: nsLineMap } = loadNamespace(NAMESPACE_FILE);
console.log(`Loaded ${Object.keys(nsMap).length} external definitions.`);

console.log('Indexing Internal Blocks...');
const { titleMap: internalMap, lineMap: internalLineMap } = indexInternalBlocks(INPUT_FILE);
console.log(`Indexed ${Object.keys(internalMap).length} internal blocks.`);

// Merge maps (Internal overrides Namespace if conflict, though unlikely)
const titleMap = { ...nsMap, ...internalMap };
// Combine line maps for source line numbers
const sourceLineMap = { ...nsLineMap, ...internalLineMap };

console.log('Converting File...');
convertFile(INPUT_FILE, OUTPUT_FILE, titleMap, sourceLineMap);
