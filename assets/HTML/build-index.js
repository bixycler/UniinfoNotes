const fs = require('fs');
const path = require('path');
const utils = require('./common-utils');

const {
  PAT_ID_PROP,
  slugify,
  getMarkdownFiles,
  preprocessCodeBlocks,
  resolveTitleReferences
} = utils;

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



// Smarter block indexing (adapted from convert.js)
function indexFileBlocks(filePath) {
  const blocks = {};
  try {
    const content = fs.readFileSync(filePath, 'utf8');
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
