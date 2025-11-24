const fs = require('fs');
const path = require('path');

// Configuration
const BASE_DIR = '/home/dinhlx/source/UniinfoNotes/pages';
const NAMESPACE_FILE = path.join(BASE_DIR, 'Namespace.md');
const INPUT_FILE = path.join(BASE_DIR, 'Mind Jungle.md');
const OUTPUT_FILE = path.join(BASE_DIR, 'publish/CommonMark/Mind_Jungle.md');

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
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const lines = content.split('\n');
        let currentText = null;

        for (let line of lines) {
            line = line.trim();
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
    return mapping;
}

// 2. Index Internal Blocks (UUID -> Title)
function indexInternalBlocks(filePath) {
    const mapping = {};
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const lines = content.split('\n');
        let lastContentLine = "";

        for (let line of lines) {
            const stripped = line.trim();

            if (stripped.startsWith('- ')) {
                let content = stripped.substring(2).trim();
                const idMatch = content.match(PAT_ID_PROP);
                if (idMatch) {
                    const uuid = idMatch[1];
                    const title = content.replace(idMatch[0], '').trim();
                    mapping[uuid] = title;
                    lastContentLine = title;
                } else {
                    lastContentLine = content;
                }
            } else if (stripped.startsWith('id::')) {
                const uuid = stripped.substring(4).trim();
                if (lastContentLine) {
                    mapping[uuid] = lastContentLine;
                }
            } else if (line.match(/^\s+- /)) { // Indented block
                let content = line.replace(/^\s+- /, '').trim();
                const idMatch = content.match(PAT_ID_PROP);
                if (idMatch) {
                    const uuid = idMatch[1];
                    const title = content.replace(idMatch[0], '').trim();
                    mapping[uuid] = title;
                    lastContentLine = title;
                } else {
                    lastContentLine = content;
                }
            } else if (line.match(/^\s+id::/)) { // Indented property
                const uuid = line.replace(/^\s+id::\s*/, '').trim();
                if (lastContentLine) {
                    mapping[uuid] = lastContentLine;
                }
            }
        }
    } catch (e) {
        console.error('Error indexing blocks:', e);
    }
    return mapping;
}

// 3. Convert File
function convertFile(inputPath, outputPath, uuidMap) {
    try {
        const content = fs.readFileSync(inputPath, 'utf8');
        const lines = content.split('\n');
        let nmd = '';

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
            if (ln.match(PAT_LB_START)) {
                inLogbook = true; continue;
            }
            if (ln.match(PAT_LB_END)) {
                inLogbook = false; continue;
            }
            if (inLogbook) {
                logbook += escapeXML(ln.trim()) + '&#10;'; // Use HTML entity for newline in attribute
                continue;
            }

            const propMatch = ln.match(PAT_PROP);
            if (propMatch) {
                props[propMatch[1]] = escapeXML(propMatch[2]);
                continue;
            }

            // End of metadata block (encountered non-metadata line)
            if ((Object.keys(props).length > 0 || logbook) && meta === '') {
                // Construct anchor tag
                let anchor = '<a class="logseq-meta" ';
                if (props.id) {
                    anchor += `id="${props.id}" `;
                    delete props.id;
                }
                for (let key in props) {
                    anchor += `data-${key}="${props[key]}" `;
                }
                if (logbook) {
                    anchor += `data-logbook="${logbook}" `;
                }
                anchor += '></a>';

                // Append anchor to the previous line (which should be the block title)
                // We need to insert it before the newline of the previous line in `nmd`
                if (nmd.endsWith('\n')) {
                    nmd = nmd.slice(0, -1) + ' ' + anchor + '\n';
                } else {
                    nmd += ' ' + anchor;
                }

                // Reset metadata
                props = {};
                logbook = '';
            }

            // Check for Bullet+ID special case: "- id:: uuid"
            const bulletIdMatch = ln.match(/^(\s*-\s*)id::\s*([0-9a-fA-F-]{36})\s*$/);
            if (bulletIdMatch) {
                // Extract ID
                props.id = bulletIdMatch[2];

                // Keep the bullet part
                ln = bulletIdMatch[1];

                // Append to nmd and continue (skip link processing as it's empty)
                nmd += ln + '\n';

                // Treat as new block with empty title
                currentBlockIsHeader = false;
                currentBlockIsEmptyTitle = true;
                hasAddedContinuationContent = false;

                continue;
            }

            // Check if this is a new block
            if (ln.match(PAT_ITEM)) {
                // Check if it's a header block (e.g. "- ## Title")
                // Regex: indent, dash, space, one or more #, space
                currentBlockIsHeader = ln.match(/^\s*-\s+#+\s/);
                currentBlockIsEmptyTitle = false;
                hasAddedContinuationContent = false;

                // Check for empty item (just dash or dash + space)
                if (ln.trim() === '-') {
                    // Replace end of line with " <zwsp>"
                    ln = ln.replace(/-(\s*)$/, '- <zwsp>');
                }
            }

            // Handle Line Breaks for continuation lines
            // If not a new block (no bullet), not metadata (already handled), and has content
            // Also exclude headers starting with #
            if (!ln.match(PAT_ITEM) && ln.trim().length > 0 && !ln.trim().startsWith('#')) {
                // Find where the text starts (skip indentation)
                const textStart = ln.search(/\S/);
                if (textStart > -1) {
                    let needBr = true;
                    // Suppress <br> if it's the first continuation line of a header or empty title block
                    if ((currentBlockIsHeader || currentBlockIsEmptyTitle) && !hasAddedContinuationContent) {
                        needBr = false;
                    }

                    if (needBr) {
                        // Insert <br> before the text
                        ln = ln.substring(0, textStart) + '<br>' + ln.substring(textStart);
                    }
                    hasAddedContinuationContent = true;
                }
            }

            // Process Links in the current line
            // 1. Complex links: [](((uuid)) "title") -> [Title](#uuid)
            ln = ln.replace(PAT_LINK_REF, (match, text, uuid, title) => {
                // If text is empty, try to find title from map
                let displayTitle = text || title || uuidMap[uuid] || uuid;

                // Handle Header Styling: [## Title] -> [<span class="link-h2">Title</span>]
                const headerMatch = displayTitle.match(/^(#+)\s+(.*)$/);
                if (headerMatch) {
                    const level = headerMatch[1].length;
                    const content = headerMatch[2];
                    displayTitle = `<span class=\"link-h${level}\">${content}</span>`;
                }

                return `[${displayTitle}](#${uuid})`;
            });

            // 2. Simple refs: ((uuid)) -> [Title](#uuid)
            ln = ln.replace(PAT_UUID_REF, (match, uuid) => {
                let title = uuidMap[uuid] || uuid;

                // Handle Header Styling for simple refs too
                const headerMatch = title.match(/^(#+)\s+(.*)$/);
                if (headerMatch) {
                    const level = headerMatch[1].length;
                    const content = headerMatch[2];
                    title = `<span class=\"link-h${level}\">${content}</span>`;
                }

                return `[${title}](#${uuid})`;
            });

            nmd += ln + '\n';
        }

        // Ensure output directory exists
        const outDir = path.dirname(outputPath);
        if (!fs.existsSync(outDir)) {
            fs.mkdirSync(outDir, { recursive: true });
        }

        fs.writeFileSync(outputPath, nmd, 'utf8');
        console.log(`Successfully converted to ${outputPath}`);

    } catch (e) {
        console.error('Error converting file:', e);
    }
}

// Main Execution
console.log('Loading Namespace...');
const nsMap = loadNamespace(NAMESPACE_FILE);
console.log(`Loaded ${Object.keys(nsMap).length} external definitions.`);

console.log('Indexing Internal Blocks...');
const internalMap = indexInternalBlocks(INPUT_FILE);
console.log(`Indexed ${Object.keys(internalMap).length} internal blocks.`);

// Merge maps (Internal overrides Namespace if conflict, though unlikely)
const fullMap = { ...nsMap, ...internalMap };

console.log('Converting File...');
convertFile(INPUT_FILE, OUTPUT_FILE, fullMap);
