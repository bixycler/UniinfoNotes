const fs = require('fs');
const path = require('path');
const utils = require('./common-utils');

const {
  slugify,
  getMarkdownFiles,
  preprocessStructuredBlocks,
  resolveTitleReferences,
  parseArgValue,
  normalizePageHeader,
  loadIndex,
  saveIndex,
  indexLines
} = utils;

// Simple argument parser
const args = process.argv.slice(2);
let indexFile = path.resolve('index.json');
const inputs = [];

for (let i = 0; i < args.length; i++) {
  if (args[i] === '-o') {
    const result = parseArgValue(args, i, '-o');
    indexFile = result.value;
    i = result.i;
  } else {
    inputs.push(path.resolve(args[i]));
  }
}

if (inputs.length === 0) {
  console.error('Usage: node build-index.js [-o <index_file>] <inputs...>');
  process.exit(1);
}

function indexFileBlocks(filePath) {
  const blocks = {};
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let rawLines = content.split('\n');
    normalizePageHeader(rawLines);
    const { cleanLines, blockMap } = preprocessStructuredBlocks(rawLines);
    const results = indexLines(filePath, cleanLines, blockMap);
    for (const [uuid, entry] of Object.entries(results)) {
      blocks[uuid] = {
        title: entry.title,
        sourceFile: filePath,
        sourceLine: entry.sourceLine
      };
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
const globalIndex = loadIndex(indexFile);
if (Object.keys(globalIndex).length > 0) {
  console.log(`Loaded existing index with ${Object.keys(globalIndex).length} entries from ${indexFile}`);
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
saveIndex(indexFile, globalIndex);
console.log(`Saved index with ${Object.keys(globalIndex).length} entries (${newEntriesCount} new) to ${indexFile}`);
