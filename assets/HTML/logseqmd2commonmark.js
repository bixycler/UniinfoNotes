const fs = require('fs');
const path = require('path');
const utils = require('./common-utils');

// Import Shared Regex Patterns and Helpers
const {
  PAT_PROP,
  PAT_LB_START,
  PAT_LB_END,
  PAT_ITEM,
  PAT_UUID_REF,
  PAT_BRACKET_UUID_REF,
  PAT_LINK_REF,
  PAT_ID_PROP,
  escapeXML,
  slugify,
  getMarkdownFiles,
  preprocessCodeBlocks,
  resolveTitleReferences,
  parseArgValue,
  normalizePageHeader,
  loadIndex,
  saveIndex,
  indexLines
} = utils;

// Simple argument parser for CLI flags
const args = process.argv.slice(2);
let indexFile = path.resolve('index.json');
let outputPathArg = null;
let baseDirArg = null;
let breakOption = 'none';
const inputs = [];

for (let i = 0; i < args.length; i++) {
  if (args[i] === '-i') {
    const result = parseArgValue(args, i, '-i');
    indexFile = result.value;
    i = result.i;
  } else if (args[i] === '-o') {
    const result = parseArgValue(args, i, '-o');
    outputPathArg = result.value;
    i = result.i;
  } else if (args[i] === '-b' || args[i] === '--base') {
    const result = parseArgValue(args, i, '-b/--base');
    baseDirArg = result.value;
    i = result.i;
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
  console.error('  --break <type>   Break conversion style: "<br>" (or "br"), "space" (trailing double space), or "none" (default).');
  console.error('  -i <index_file>  Path to the index JSON file (default: index.json)');
  console.error('  -b <base_dir>  Base input directory to compute relative paths for output mirroring.');
  console.error('       (Auto-detected if input lives directly under a "pages" or "journals" directory)');
  process.exit(1);
}

// 1. Index Internal Blocks (UUID -> Title) for local freshness override
function indexInternalBlocks(filePath, cleanLines) {
  const results = indexLines(filePath, cleanLines);
  const titleMap = {};
  const lineMap = {};
  for (const [uuid, entry] of Object.entries(results)) {
    titleMap[uuid] = entry.title;
    lineMap[uuid] = { srcLine: entry.sourceLine, srcFile: filePath };
  }
  return { titleMap, lineMap };
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
// 2. Convert File
function convertFile(inputPath, outputPath, uuidMap, sourceLineMap, cleanLines, codeBlockMap) {
  try {
    let nmd = '';
    let outputLine = 0; // 1‑based line counter for the generated file

    let props = {};
    let logbook = '';
    let inLogbook = false;
    let inMath = false;
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
      if (propMatch) { props[propMatch[1]] = escapeXML(propMatch[2], true); continue; }

      // Math block tracking
      const trimmed = ln.trim();
      if (trimmed === '$$') {
        inMath = !inMath;
      }

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

      // Bullet+Property (Empty Title Block) special case:
      // Match any property on the bullet line (e.g. - id:: uuid, - collapsed:: true).
      // When matched, collect the property into `props`, map the ID if present,
      // and represent the empty title block cleanly by placing &nbsp; after the bullet prefix.
      const bulletPropMatch = ln.match(/^(\s*-\s*)(\w+)::\s*(.*)$/);
      if (bulletPropMatch) {
        const propKey = bulletPropMatch[2];
        const propVal = bulletPropMatch[3].trim();
        props[propKey] = escapeXML(propVal, true);

        // If the property is 'id', record the UUID line mapping for references
        if (propKey === 'id') {
          const uuid = propVal;
          if (!sourceLineMap[uuid]) sourceLineMap[uuid] = {};
          sourceLineMap[uuid].outLine = outputLine + 1; // estimate outline as next line
          sourceLineMap[uuid].outFile = outputPath;
        }

        // Output the empty title as &nbsp; instead of look-ahead merging,
        // ensuring standard CommonMark block structure and correct anchor placement.
        ln = bulletPropMatch[1] + '&nbsp;';
        nmd += ln + '\n';
        outputLine++;

        // Update mapping outLine if 'id' was parsed
        if (props.id) {
          sourceLineMap[props.id].outLine = outputLine;
        }

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

          // Exclude block-level elements (tables, blockquotes, HTML tags, math blocks) from break insertion
          const trimmedLn = ln.trim();
          if (trimmedLn.startsWith('|') || trimmedLn.startsWith('>') || trimmedLn.startsWith('<') || trimmedLn.startsWith('$$') || inMath) { needBr = false; }

          // Suppress break insertion if the preceding line in nmd was blank/whitespace (starts a new paragraph)
          let lastLineMatch = nmd.match(/(?:^|\n)([ \t]*)(.*)\n$/);
          if (lastLineMatch && lastLineMatch[2].trim().length === 0) { needBr = false; }

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
const globalIndex = loadIndex(indexFile);
if (Object.keys(globalIndex).length > 0) {
  console.log(`Loaded ${Object.keys(globalIndex).length} external definitions from index.`);
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

  normalizePageHeader(rawLines);

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
saveIndex(indexFile, globalIndex);
console.log(`\nGlobal index successfully updated at ${indexFile}`);
