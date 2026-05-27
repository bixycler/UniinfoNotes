/* Add methods to prototype with Object.defineProperty().
  Note: If we do assignment `Object.prototype.clear = function(){...}`,
  it will create an enumerable & configurable & writable property.
  But a function in general should __not be enumerable__ though!
  Default for defineProperty():
    enumerable: false, configurable: false,
  Let this function to be updated (overriden) later on with assignment:
    writable: true,
*/

/** Clear all enumerable properties in an object
 * (which are owned by that object only, not inherited)
 */
Object.defineProperty(Object.prototype, 'clear', {
  value: function(){
    // Object.keys: enumerable own
    // Object.getOwnPropertyNames: all own (enum & non-enum)
    // for in: all enumerables (own & inherited)
    for(p of Object.keys(this)){ delete this[p]; }
  },
  //enumerable: false, configurable: false, // default
  writable: true,
});

/** Pad this number with leading zeros (0).
 * @param places : integer -- The minimal number of digits after padding
 * @return {string} The padded string
 */
Object.defineProperty(Number.prototype, 'pad', {
  value: function(places) {
    return String(this).padStart(places, '0');
  },
  //enumerable: false, configurable: false, // default
  writable: true,
});

/** Export Date to String in a simplified version of {@link https://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html|SimpleDateFormat}:
    - yyyy  : Full year (always 4 digits); Week year (YYYY) is unsupported
    - MM    : Month in year (always 2 digits)
    - dd    : Day in month (always 2 digits); Day in year (DD) is unsupported
    - HH    : Hour in day (always 2 digits); Hour in am/pm (hh,KK) is unsupported
    - mm    : Minute in hour (always 2 digits)
    - ss    : Second in minute (always 2 digits)
    - SSS   : Millisecond (always 3 digits)
    @param format : string -- The format in SimpleDateFormat
    @return {string} The formated string
 */
Object.defineProperty(Date.prototype, 'toFormatedString', {
  value: function(format='yyyy-MM-dd HH:mm:ss.SSS') {
    return format.
      replace('yyyy',this.getFullYear().pad(4)).
      replace('MM',(this.getMonth()+1).pad(2)).
      replace('dd',this.getDate().pad(2)).
      replace('HH',this.getHours().pad(2)).
      replace('mm',this.getMinutes().pad(2)).
      replace('ss',this.getSeconds().pad(2)).
      replace('SSS',this.getMilliseconds().pad(3));
  },
  //enumerable: false, configurable: false, // default
  writable: true,
});

/** Add/subtract days from this Date object
 *
 * @param days : int -- Number of day(s) to be added, negative number for subtraction
 * @return {Date} The new Date
 */
Object.defineProperty(Date.prototype, 'addDays', {
  value: function(days) {
    var that = new Date(this);
    that.setDate(this.getDate() + days);
    return that;
  },
  //enumerable: false, configurable: false, // default
  writable: true,
});

/** Parse an HTML-escaped string into JSON
 * @param escjson : string -- The HTML-escaped string of JSON
 * @returns {any} The JSON (Object, Array, string, boolean, etc.)
 */
function parseEscapedJson(escjson){
    var parser = new DOMParser;
    var dom = parser.parseFromString(
        '<!DOCTYPE html><html><body>' + escjson + '</body></html>',
        'text/html');
    return JSON.parse(dom.body.textContent);
}

function eventPromise(dom, eventName) {
  return new Promise(resolve =>{
    dom.addEventListener(eventName, event =>{ resolve(event); }, {once:true})
  })
}

function equal(blob1, blob2) {
  if(blob1==blob2){ return true; }
  if(blob1&&!blob2 || blob2&&!blob1){ return false; }
  if(blob1.type != blob2.type){ return false; }
  if(blob1.size != blob2.size){ return false; }
  let a1 = new Int8Array(blob1);
  let a2 = new Int8Array(blob2);
  for(let i=0; i<a1.length; i++){
    if(a1[i] != a2[i]){ return false; }
  }
  return true;
}

function escapeXML(str, quote=false, xml=true){
  if(xml){
    str = str.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
  }
  if(quote){
    str = str.replaceAll('"','&quot;').replaceAll("'",'&apos;').replaceAll('\n','&NewLine;');
  }
  return str;
}

function arrayPush(dict, field, value){
  if(!(field in dict)){ dict[field] = []; }
  dict[field].push(value);
}

/** Fetch a file from url then return blob of that file */
async function fetchFile(url, req, msg='Fetch'){
  let res = await fetch(url, req);
  //console.debug(`${msg}(${url})`,res);
  if (!res.ok) {
    //console.warn(msg+' error:',res);
    message.error(res.statusText, msg+' error');
    message.removeAttribute('folded');
    return;
  } else {
    message.clear();
  }
  let blob = await res.blob();
  console.debug(`${msg}(${url})`, blob);
  return blob;
}

/** Copy `text` to clipboard */
async function copyTextToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    console.debug('Text copied to clipboard:', text);
  } catch (err) {
    console.error('Failed to copy text: ', err);
  }
}

/** A.K.A. “smart quotes!”
 Replace:
 1. foo "some words" bar
 2. foo "-some-words-" bar
 3. foo-"-some-words-"-bar

 Don't replace:
 1. foo " spaced " bar
 2. foo"inword"baz
 3. `code`'s possessive
 // handled by function replaceQuotes(ln)
 4. `foo "inline codes" bar`
 5. ```foo "code blocks" bar```
 6. <tag id="HTML">
*/
function replaceQuotesSimple(ln){
  const curlyQuote = { '"<':'“', '>"':'”',   "'<":"‘", ">'":"’" };
  let nln = '', li = 0, stack = [], L = ln.length-1, q;
  for(let i in ln){ i = Number(i);
    if(!(ln[i] in {"'":0, '"':1})){ continue; }
    q = ln[i];
    //console.debug('replaceQuotes:',q,i, stack, [li,ln.slice(li,i)]);
    let leftSpace  = i > 0 ? ln[i-1].match(/\s/) : true;
    let rightSpace = i < L ? ln[i+1].match(/\s/) : true;
    let leftWord   = i > 0 ? ln[i-1].match(/\w/) : false;
    let rightWord  = i < L ? ln[i+1].match(/\w/) : false;
    let leftCode   = i > 0 ? ln[i-1].match(/`/) : false;
    if(leftSpace && rightSpace || leftWord && rightWord || leftCode){ // don't replace (1,2,3)
      //console.debug('NOT replaced:',q,i, stack, [li,ln]);
    }else if(stack.length==0 || stack[0]!=ln[i]){ // open quote
      stack.unshift(q); q = curlyQuote[q+'<'];
    }else{ // close quote
      stack.shift();  q = curlyQuote['>'+q];
    }
    nln += ln.slice(li,i) + q;
    li = i+1;
  }
  nln += ln.slice(li);
  return nln;
}

/** Process quotes outside of inline codes & HTML tags */
function replaceQuotes(ln){
  const patCI = /`([^`]+)`/; // inline codes
  const patHtml = /<[^>]+>/; // HTML tag
  const patCIHtmlAll = new RegExp(patCI.source+'|'+patHtml.source, 'g');

  nln = ''; li = 0;
  m = ln.matchAll(patCIHtmlAll);
  m = m ? Array.from(m) : [];
  m.push({index:ln.length, 0:''}); // add a "line-end match" for processing the trailing text
  for(let mi of m){ let l = ln.slice(li,mi.index);
    l = replaceQuotesSimple(l);
    nln += l + mi[0];
    li = mi.index + mi[0].length;
    if(mi[0].length > 0){ // retain the last markup char of inline codes & HTML tags for replaceQuotesSimple() to recognize them
      li--; nln = nln.slice(0,-1);
    }
  }
  return nln;
}

/**
 Examples:
  [A [very [very [very]...] messy] link](http://to(some(weird(...))).href "with link tip")
  // 3 levels of []
  patText = balancedBracketsRegexPattern('[',']','',3,true)
  // 3 levels of () and exclude space & quote of the link tip
  patHref = balancedBracketsRegexPattern('(',')',' "',3,true)
*/
function balancedBracketsRegexPattern(open='[', close=']', excludes='', depth=1, unrolled=false)
{
  let lo = '\\'+open, lc = '\\'+close;  // literals
  let noBracket = '[^'+lo+lc+excludes+']';
  // Pattern variants:
  let t = unrolled ? 1 : 0;
  let p = [ // [open, close]
    [// simple pattern
      lo
      + '(?:'+ noBracket  +'|'/*inner level*/,
        ')*' +
      lc
    ],
    [// unrolled pattern for efficiency
      lo +
      noBracket+'*'
      + '(?:' /*inner level*/,
      noBracket+'*'
      + ')*' +
      lc
    ]
  ];

  // Generate the pattern
  let innermostPair = lo + noBracket+'*' + lc;
  let openBrackets  = p[t][0].repeat(depth);
  let closeBrackets = p[t][1].repeat(depth);

  // Return the pattern
  pattern = new RegExp(openBrackets + innermostPair + closeBrackets);
  return pattern;
}

// Node-specific conditional imports
let fs, path;
if (typeof require !== 'undefined') {
  fs = require('fs');
  path = require('path');
}

// Converter / Index Builder Shared Regex Patterns
const PAT_PROP = /^\s*(\w+):: (.*)$/;
const PAT_LB_START = /^\s*:(logbook|LOGBOOK):$/;
const PAT_LB_END = /^\s*:END:$/;
const PAT_ITEM = /^(\t*)-( |$)/;
const PAT_UUID_REF = /\(\(([0-9a-fA-F-]{36})\)\)/g;
const PAT_BRACKET_UUID_REF = /\[\[([0-9a-fA-F-]{36})\]\]/g;
const PAT_LINK_REF = /\[([^\[\]]*)\]\(\(\(([0-9a-fA-F-]{36})\)\)(?: "([^"]*)")?\)/g;
const PAT_ID_PROP = /^id::\s*([0-9a-fA-F-]{36})\s*$/;


// Helper to create URL-friendly slugs
function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^\w]+/g, '-') // replace non-word chars with dash
    .replace(/^-+|-+$/g, ''); // trim leading/trailing dashes
}

// Recursively find all markdown files in input paths
function getMarkdownFiles(paths) {
  const mdFiles = [];
  
  function walk(currentPath) {
    if (!fs.existsSync(currentPath)) return;
    
    const stat = fs.statSync(currentPath);
    if (stat.isDirectory()) {
      const base = path.basename(currentPath);
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
 * Preprocess: collapse structured blocks (code fences, blockquotes, Org blocks, props blocks)
 * into placeholder tokens.
 *
 * Priority: code fences > Org blocks > blockquotes (> all non-blank) > props blocks
 *
 * Returns { cleanLines: Array<{line: string, originalIndex: number}>, blockMap: object }
 * where blockMap[token] = { type: string, lines: string[] }
 */
function preprocessStructuredBlocks(lines) {
  const cleanLines = [];
  const blockMap = {};
  let blockIndex = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const testLine = line.trimStart().replace(/^-\s*/, '');
    const trimmed = line.trim();

    // --- Code fence: ``` ---
    if (testLine.startsWith('```')) {
      const currentBlock = [line];
      const token = `__CODE_BLOCK_${blockIndex++}__`;
      let closed = false;
      for (let j = i + 1; j < lines.length; j++) {
        currentBlock.push(lines[j]);
        const nextTest = lines[j].trimStart().replace(/^-\s*/, '');
        if (nextTest.startsWith('```')) {
          blockMap[token] = { type: 'code', lines: currentBlock };
          cleanLines.push({ line: token, originalIndex: i });
          i = j;
          closed = true;
          break;
        }
      }
      if (!closed) {
        blockMap[token] = { type: 'code', lines: currentBlock };
        cleanLines.push({ line: token, originalIndex: lines.length - 1 });
      }
      continue;
    }

    // --- Blockquote: > (contiguous non-blank lines, stops at new list items) ---
    if (trimmed.startsWith('>')) {
      const currentBlock = [line];
      const token = `__BLOCKQUOTE_${blockIndex++}__`;
      for (let j = i + 1; j < lines.length; j++) {
        const next = lines[j];
        if (next.trim().length === 0) break;
        if (next.trimStart().startsWith('- ')) break;
        currentBlock.push(next);
      }
      blockMap[token] = { type: 'blockquote', lines: currentBlock };
      cleanLines.push({ line: token, originalIndex: i });
      i += currentBlock.length - 1;
      continue;
    }

    // --- Org block: #+BEGIN_ ... #+END_ ---
    if (/^#\+BEGIN_\w+/i.test(trimmed)) {
      const currentBlock = [line];
      const token = `__ORG_BLOCK_${blockIndex++}__`;
      let closed = false;
      for (let j = i + 1; j < lines.length; j++) {
        currentBlock.push(lines[j]);
        if (/^#\+END_\w+/i.test(lines[j].trim())) {
          blockMap[token] = { type: 'org-block', lines: currentBlock };
          cleanLines.push({ line: token, originalIndex: i });
          i = j;
          closed = true;
          break;
        }
      }
      if (!closed) {
        blockMap[token] = { type: 'org-block', lines: currentBlock };
        cleanLines.push({ line: token, originalIndex: i });
      }
      continue;
    }

    // --- Props block: contiguous PAT_PROP lines, with LOGBOOK spans treated atomically ---
    if (line.match(PAT_PROP) || line.match(PAT_LB_START) || line.match(PAT_LB_END)) {
      const currentBlock = [line];
      const token = `__PROPS_BLOCK_${blockIndex++}__`;
      let inLogbook = !!line.match(PAT_LB_START);
      for (let j = i + 1; j < lines.length; j++) {
        const next = lines[j];
        if (next.match(PAT_LB_START)) { inLogbook = true; currentBlock.push(next); }
        else if (next.match(PAT_LB_END)) { inLogbook = false; currentBlock.push(next); }
        else if (inLogbook) { currentBlock.push(next); }
        else if (next.match(PAT_PROP)) { currentBlock.push(next); }
        else { break; }
      }
      blockMap[token] = { type: 'props', lines: currentBlock };
      cleanLines.push({ line: token, originalIndex: i });
      i += currentBlock.length - 1;
      continue;
    }

    // --- Regular line ---
    cleanLines.push({ line, originalIndex: i });
  }

  return { cleanLines, blockMap };
}

// Function to resolve nested UUID references in titles topologically
function resolveTitleReferences(index, updateSlug = false) {
  const PAT_REF = /(?<!\]\()\(\(([0-9a-fA-F-]{36})\)\)|\[\[([0-9a-fA-F-]{36})\]\]/g;
  
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

// Shared helpers for build-index.js and logseqmd2commonmark.js
function parseArgValue(args, i, flag) {
  if (i + 1 < args.length) {
    return { value: path.resolve(args[i + 1]), i: i + 1 };
  }
  console.error(`Error: ${flag} requires a file path argument`);
  process.exit(1);
}

function normalizePageHeader(rawLines) {
  if (rawLines.length > 0) {
    const trimmed = rawLines[0].trim();
    if (trimmed.startsWith('#') && !trimmed.startsWith('- ')) {
      const headingMatch = trimmed.match(/^#+\s/);
      if (headingMatch) {
        rawLines[0] = '- ' + rawLines[0].trimStart();
      }
    }
  }
  return rawLines;
}

function loadIndex(indexFile) {
  let globalIndex = {};
  if (fs.existsSync(indexFile)) {
    try {
      globalIndex = JSON.parse(fs.readFileSync(indexFile, 'utf8'));
    } catch (e) {
      console.error(`Warning: Failed to load index from ${indexFile}:`, e);
    }
  }
  return globalIndex;
}

function saveIndex(indexFile, globalIndex) {
  try {
    const indexDir = path.dirname(indexFile);
    if (!fs.existsSync(indexDir)) {
      fs.mkdirSync(indexDir, { recursive: true });
    }
    fs.writeFileSync(indexFile, JSON.stringify(globalIndex, null, 2), 'utf8');
  } catch (e) {
    console.error(`Error saving index ${indexFile}:`, e);
  }
}

function expandBlockToken(token, blockMap) {
  if (blockMap && blockMap[token]) {
    return blockMap[token].lines.join('\n');
  }
  return token;
}

function isStructuredBlockToken(stripped) {
  return stripped.startsWith('__CODE_BLOCK_') ||
         stripped.startsWith('__BLOCKQUOTE_') ||
         stripped.startsWith('__ORG_BLOCK_') ||
         stripped.startsWith('__PROPS_BLOCK_');
}

function filterSystemProps(lines) {
  let inLogbook = false;
  return lines.filter(line => {
    const trimmed = line.trim();
    if (trimmed.match(PAT_LB_START)) { inLogbook = true; return false; }
    if (trimmed.match(PAT_LB_END)) { inLogbook = false; return false; }
    if (inLogbook) return false;
    const propMatch = trimmed.match(PAT_PROP);
    if (propMatch && (propMatch[1] === 'id' || propMatch[1] === 'collapsed')) return false;
    return true;
  });
}

function indexLines(filePath, cleanLines, blockMap) {
  const results = {};
  let lastContentLine = path.basename(filePath, '.md');
  let lastContentIndent = -1;

  for (let i = 0; i < cleanLines.length; i++) {
    const { line, originalIndex } = cleanLines[i];
    const curIndent = line.length - line.trimStart().length;
    const stripped = line.trim();

    if (isStructuredBlockToken(stripped)) continue;

    if (stripped.startsWith('- ')) {
      let content = stripped.substring(2).trim();
      const idMatch = content.match(PAT_ID_PROP);
      if (idMatch) {
        const uuid = idMatch[1];
        const inlineTitle = content.replace(idMatch[0], '').trim();
        let effectiveTitle;
        let firstContentLine = '';

        if (inlineTitle) {
          effectiveTitle = inlineTitle;
          lastContentLine = inlineTitle;
          lastContentIndent = curIndent;
        } else {
          // Bare - id:: → scan forward for first structured block or content line
          for (let j = i + 1; j < cleanLines.length; j++) {
            const next = cleanLines[j];
            const nextStripped = next.line.trim();

            // Skip system-property-only lines (id::, collapsed::) and LOGBOOK
            const pm = next.line.match(PAT_PROP);
            if (pm && (pm[1] === 'id' || pm[1] === 'collapsed')) continue;
            if (next.line.match(PAT_LB_START) || next.line.match(PAT_LB_END)) continue;

            // Stop at sibling bullet
            if (nextStripped.startsWith('- ') &&
                next.line.length - next.line.trimStart().length <= curIndent) break;

            // Structured-block token → expand from blockMap
            if (blockMap && blockMap[nextStripped]) {
              const block = blockMap[nextStripped];
              if (block.type === 'props') {
                const filtered = filterSystemProps(block.lines);
                if (filtered.length > 0) {
                  effectiveTitle = filtered.join('\n');
                  firstContentLine = filtered[0].replace(PAT_PROP, '$2').trim();
                  break;
                }
                // filtered is empty (only system props like collapsed::) — don't break!
                // The structured block or content line after it must be the title.
              } else {
                effectiveTitle = block.lines.join('\n');
                firstContentLine = block.lines.find(l => l.trim() && !l.match(PAT_PROP)) || '';
                break;
              }
            }

            // Regular content line
            if (nextStripped && !nextStripped.startsWith('__')) {
              effectiveTitle = nextStripped;
              firstContentLine = nextStripped;
              break;
            }
          }

          if (!effectiveTitle) {
            effectiveTitle = lastContentIndent < curIndent
              ? lastContentLine
              : path.basename(filePath, '.md');
          }

          if (firstContentLine) {
            lastContentLine = firstContentLine;
            lastContentIndent = curIndent;
          }
        }

        results[uuid] = { title: effectiveTitle, sourceLine: originalIndex + 1 };
      } else {
        lastContentLine = content || lastContentLine;
        lastContentIndent = curIndent;
      }
    } else {
      const idMatch = stripped.match(PAT_ID_PROP);
      if (idMatch && lastContentLine) {
        results[idMatch[1]] = { title: lastContentLine, sourceLine: originalIndex + 1 };
      }
    }
  }
  return results;
}

// Safe Node.js Environment Exports
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = {
    fetchFile,
    copyTextToClipboard,
    replaceQuotesSimple,
    replaceQuotes,
    balancedBracketsRegexPattern,
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
    preprocessStructuredBlocks,
    resolveTitleReferences,
    parseArgValue,
    normalizePageHeader,
    loadIndex,
    saveIndex,
    expandBlockToken,
    indexLines
  };
}

