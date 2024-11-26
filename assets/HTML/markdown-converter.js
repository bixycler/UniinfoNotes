
/** Convert from Logseq markdown to normal Markdown */
  var mapUuid = {}, noUuid = {}, circularRefs = {}, localLinks = {};

const NBSP = '\u00A0', NNBSP = '\u202F', ZWSP = '\u200B', ZWNBSP = '\uFEFF';
const CBMarker = ZWNBSP;
const LooseListSpace = NBSP;
const patItem = /^(\t*)- /;
const patLB = /^\s*:(logbook|LOGBOOK):$/;
const patLBE = /^\s*:END:$/;
const patProp = /^\s*(\w+):: (.*)$/;
const metatag = '<a class="logseq-meta" ';
const patIH = /^(\t*)(- )?#/; // itemized heading
const patCBF = /^(\t*)(-| ) ```(\w*)/; // code block fence
const patCBH = /^(\t*)  /; // code block line's head
const patCBM = new RegExp('^(\t*)'+CBMarker, 'u'); // code block line's marker
const patCI = /`([^`]+)`/; // inline codes
const patCIAll = new RegExp(patCI, 'g');
const patHtml = /<[^>]+>/; // HTML tag
const patHtmlAll = new RegExp(patHtml, 'g');
const patCIHtmlAll = new RegExp(patCI.source+'|'+patHtml.source, 'g');
const patUuid = /\w\w\w\w\w\w\w\w-\w\w\w\w-\w\w\w\w-\w\w\w\w-\w\w\w\w\w\w\w\w\w\w\w\w/;
const patUuidAll = new RegExp(patUuid, 'g');
const patBRef = new RegExp('\\(\\(('+patUuid.source+')\\)\\)');
const patBRefAll = new RegExp(patBRef, 'g');
const patLinkText = /\[([^\[\]]*(?:\[[^\[\]]*(?:\[[^\[\]]*(?:\[[^\[\]]*\][^\[\]]*)*\][^\[\]]*)*\][^\[\]]*)*)\]/;
const patHRef = /([^\(\) "]*(?:\([^\(\) "]*(?:\([^\(\) "]*(?:\([^\(\) "]*\)[^\(\) "]*)*\)[^\(\) "]*)*\)[^\(\) "]*)*)/;
const patLinkTip = /( "[^"]*")?/;
const patBLink = new RegExp(patLinkText.source+ '\\('+patBRef.source + patLinkTip.source+'\\)');
const patBLinkAll = new RegExp(patBLink, 'g');
const patLink  = new RegExp(patLinkText.source+ '\\('+patHRef.source + patLinkTip.source+'\\)');
const patLinkAll = new RegExp(patLink, 'g');

function normalizeMardown(md,
  flattenHeadings = false,
  blankLineBeforeCodeBlock = false,
  looseList = false,
  lineBreakAfterMetadata = false,
  pageHeadingAsItem = false
){ // md -> nmd
  let lns = (md+'\n').split('\n'), nmd = '';
  let indent = '';
  let m = null; // pattern matches
  let msg = {};

  // convert the page heading to the global item (required for Logseq markdown)
  if(pageHeadingAsItem && lns[0].startsWith('#')){
    console.log('Page heading converted to item: ',lns[0]);
    for(let i in lns){ // indent other lines of this "page item", excluding its sub items
      if(i==0){ lns[0] = '- '+lns[0]; continue; }
      // replace double space indent, if any, with tab indent
      if(lns[i].startsWith('  ')){ lns[i] = lns[i].slice(2); }
      if(lns[i].match(patItem)){ break; }
      lns[i] = '\t'+lns[i];
    }
  }

  // convert metadata to `<a id="UUID" data-property="..." data-logbook="..."></a>`
  //    *) Only collect metadata of item, not of page
  // & record mapUuid[id] = blockTitle
  // & process looseList
  mapUuid = {}; noUuid = {};
  let logbook = '', inLogbook = false;
  let props = {}, meta = '', blockTitle = '';
  indent = '';
  for(let i in lns){ let ln = lns[i];
    // contiguous lines of metadata, hence `continue`
    if(ln.match(patLB)){ // start LOGBOOK
      inLogbook = true; continue;
    }
    if(ln.match(patLBE)){ // end LOGBOOK
      inLogbook = false; continue;
    }
    if(inLogbook){
      logbook += escapeXML(ln)+'&NewLine;'; continue;
    }
    // property
    m = ln.match(patProp);
    if(m){
      props[m[1]] = escapeXML(m[2], /*quote*/true); continue;
    }
    // end metadata (by any line which is not a property nor logbook)
    // => collect metadata to meta, then reset them all
    if(meta && (Object.keys(props).length || logbook)){
      if('id' in props){
        meta += `id="${props.id}" `;
        mapUuid[props.id] = blockTitle;
        delete props.id;
      }
      for(let j in props){ meta += `data-${j}="${props[j]}" `; }
      if(logbook){ meta += `data-logbook="${logbook}" `; }
      meta += '></a>' + (lineBreakAfterMetadata ? '  ' : ''); // two trailing space for line break!
      nmd = nmd.slice(0, -1) + ' '+meta+'\n';
    }
    meta = ''; logbook = ''; props = {}; // reset meta[data]; meta will be restarted only at next item
    // next item
    m = ln.match(patItem);
    if(m){
      meta = metatag; // restart meta; metadata lines must be contiguous to this title line
      blockTitle = ln.replace(m[0],'');
      if(looseList){ ln = indent+'\t\n' +ln; }
      indent = m[1];
    }
    nmd += ln+'\n';
  }
  processMapUuid();

  // unitemize headings & remove first tabs & process code block
  let codeblock = '', cbIndent = '', cbErrors = {};
  lns = nmd.split('\n'); nmd = '';
  for(let i in lns){ let ln = lns[i];
    if(flattenHeadings){
      m = ln.match(patIH);
      if(m){ // unitemize heading
        indent = m[1];
        nmd += '\n'+ln.replace(patIH, '#')+'\n\n';
        continue;
      }
      // unindent heading's indent
      if(indent && ln.slice(0,indent.length) == indent){
        ln = ln.slice(indent.length);
      }
      // unindent sub-items' indent
      if(ln.match(/^\t/)){
        ln = ln.slice(1);
      }
    }

    // process code block
    //  Use the special char CBMarker to mark all lines of code block => cbIndent+CBMarker
    //  This CBMarker will be removed at the end.
    m = ln.match(patCBF);
    let beforeCB = blankLineBeforeCodeBlock ? cbIndent+'\n' : '';
    if(m){ // code block fences
      if(codeblock && (m[3] || m[2]=='-')){ // exception
        console.warn('Code block ',codeblock,' not closed before ',`@${i}[${m[0]}]`);
        arrayPush(cbErrors,codeblock, `Not closed before @${i}[${m[0]}]`);
        // try to close it!
        nmd += cbIndent+CBMarker+'```\n'+beforeCB;
        codeblock = '';
      }
      if(codeblock){ // close code block
        ln = cbIndent+CBMarker+'```';
        codeblock = '';
      }else{ // start code block
        codeblock = `@${i}[${m[0]}]`;
        cbIndent = m[1] + (m[2]=='-'? '' : '\t');
        ln = beforeCB +cbIndent+CBMarker+'```'+m[3];
      }
      nmd += ln+'\n';
      continue;
    }
    if(codeblock){ // code block content lines
      m = ln.match(patCBH);
      if(!m){
        console.warn('Code block ',codeblock,' line format invalid: ',ln);
        arrayPush(cbErrors,codeblock, `Line format invalid: ${ln}`);
      }else{
        ln = cbIndent+CBMarker + ln.replace(m[0],'');
      }
    }

    // finally, commit this line
    nmd += ln+'\n';
  }

  // process details: block ref/links, quotes, line break
  lns = nmd.split('\n'); nmd = '';
  localLinks = {};
  for(let i in lns){ let ln = lns[i], nln = '';
    Process:{
      // code block line: just remove the CBMarker
      m = ln.match(patCBM);
      if(m){ nln = ln.replace(m[0], m[1]); break Process; }

      // process links outside of HTML tags
      m = ln.matchAll(patHtmlAll);
      m = m ? Array.from(m) : [];
      m.push({index:ln.length, 0:''}); // add a "line-end match" for processing the trailing text
      let li = 0;
      for(let mi of m){ let l = ln.slice(li,mi.index);
        checkLinks(l);
        l = processLogseqLinks(l, /*fillEmptyLinks*/true).text;
        nln += l + mi[0];
        li = mi.index + mi[0].length;
      }

      // process quotes outside of inline codes & HTML tags
      ln = nln; nln = ''; li = 0;
      m = ln.matchAll(patCIHtmlAll);
      m = m ? Array.from(m) : [];
      m.push({index:ln.length, 0:''}); // add a "line-end match" for processing the trailing text
      for(let mi of m){ let l = ln.slice(li,mi.index);
        l = replaceQuotes(l);
        nln += l + mi[0];
        li = mi.index + mi[0].length;
      }
    }
    nmd += nln+'\n';
  }

  // collect error messages
  if(Object.keys(noUuid).length){
    msg['Unresolved links'] = noUuid;
  }
  if(Object.keys(cbErrors).length){
    msg['Code block errors'] = cbErrors;
  }
  if(Object.keys(circularRefs).length){
    msg['Circular references'] = circularRefs;
  }
  if(Object.keys(localLinks).length){
    msg['Local links'] = localLinks;
  }
  if(Object.keys(msg).length){
    message.error('<pre>'+JSON.stringify(msg, null, '  ')+'</pre>', 'Markdown converting issues')
  }else{
    message.clear();
  }

  // return the nomalized markdown
  return nmd;
}

/** Replace all empty link in mapUuid's titles with target block title */
function processMapUuid(){
  //checkLinks(ln); // to prevent duplication of error messages, don't check here, only check at normalizeMardown(md)

  // ebref graph of empty block refs (processed/resolved ones are removed from g)
  const g = structuredClone(mapUuid);
  circularRefs = {};
  for(let id in g){
    let ln = mapUuid[id];
    let res = processLogseqLinks(ln, /*fillEmptyLinks*/false, /*flattenLinks*/true);
    mapUuid[id] = res.text;
    if(res.ebref.length){ g[id] = res.ebref; }else{ delete g[id]; }
  }
  console.debug('ebref graph:',g);
  // topo-orderly resolve ebref graph
  while(Object.keys(g).length){
    let resolved = false;
    for(let id in g){
      let resolvable = true; // all targets have been resolved
      for(let t of g[id]){
        if(t in g){ resolvable = false; break; }
      }
      if(!resolvable){ continue; }else{ resolved = true; }
      let ln = mapUuid[id];
      let res = processLogseqLinks(ln, /*fillEmptyLinks*/true, /*flattenLinks*/true);
      mapUuid[id] = res.text;
      //console.debug('resolved',id,g[id],'ln:',mapUuid[id]);
      console.assert(res.ebref.length===0);
      if(res.ebref.length){ g[id] = res.ebref; }else{ delete g[id]; }
    }
    if(!resolved){ // no one can be resolved <=> circular refs!!!
      console.warn('Circular refs', g);
      circularRefs = g;
      break;
    }
  }
}

/** Check links & block refs of issues: noUuid, ... */
function checkLinks(ln){
  // check links' target against mapUuid
  let l = ln; // checked link/refs will be removed from l
  m = l.matchAll(patBLinkAll);
  for(let mi of m){
    if(!(mi[2] in mapUuid)){
      let context = mi[1] ? mi[0] : l.slice(0,mi.index)+mi[0];
      console.warn('Block UUID not found: ',mi[2], 'for', context);
      noUuid[mi[2]] = (noUuid[mi[2]] ?? '') + context+'; ';
    }
    l = l.replace(mi[0],''); // remove it
  }

  // check block refs against mapUuid
  m = l.matchAll(patBRefAll);
  for(let mi of m){
    if(!(mi[1] in mapUuid)){
      let context = l.slice(0,mi.index)+mi[0];
      console.warn('Block UUID not found: ',mi[1], 'in line:', context);
      noUuid[mi[1]] = (noUuid[mi[1]] ?? '') + context+'; ';
    }
    l = l.replace(mi[0],''); // remove it
  }

  // check external links for local targets (non-HTTP)
  m = l.matchAll(patLinkAll);
  for(let mi of m){
    if(!(mi[2].match(/https?:/))){
      console.warn('Local link to:',mi[2], 'in:', mi[0]);
      localLinks[mi[2]] = (localLinks[mi[2]] ?? '') + mi[0]+'; ';
    }
    l = l.replace(mi[0],''); // remove it
  }
}

/** Process links in ln
  - fillEmptyLinks = true for replacing empty links with target block titles
    + Note: Enable this only when mapUuid has been processed before.
  - flattenLinks = true to strip off link target, leaving only link text
  - Return {text, ebref[], bref[], href[]}: the processed text with lists of link targets
    + ebref: List of empty block refs
*/
function processLogseqLinks(ln, fillEmptyLinks, flattenLinks=false){
  const ebref = [], bref = [], href = [];

  // flatten external links
  let nln = ''; // ln -> nln
  let li = 0; // last index
  m = ln.matchAll(patLinkAll);
  for(let mi of m){
    if(mi[2].startsWith('((')){ // skip block refs
      l = mi[0];
    }else{
      href.push(mi[2]);
      //console.debug({'title':mi[1], 'href':mi[2], 'tip':mi[3]});
      l = flattenLinks ? mi[1] : '['+mi[1]+']'+'('+mi[2]+(mi[3]??'')+')';
    }
    nln += ln.slice(li,mi.index) + l;
    li = mi.index + mi[0].length;
  }
  nln += ln.slice(li);

  // convert block link -> `#`anchor link
  //   `[](((UUID)) "comment")` -> `[target block title](#UUID "comment")`
  ln = nln; nln = ''; li = 0;
  m = ln.matchAll(patBLinkAll);
  for(let mi of m){
    bref.push(mi[2]);
    let title = mi[1];
    if(!title){
      if(fillEmptyLinks){
        title = mapUuid[mi[2]] ?? '';
      }else{
        ebref.push(mi[2]);
      }
    }
    l = flattenLinks ? title : '['+title+']'+'(#'+mi[2]+(mi[3]??'')+')';
    nln += ln.slice(li,mi.index) + l;
    li = mi.index + mi[0].length;
  }
  nln += ln.slice(li);

  // convert `((block ref))` -> `[target block title](#UUID)`
  ln = nln; nln = ''; li = 0;
  m = ln.matchAll(patBRefAll);
  for(let mi of m){
    bref.push(mi[1]);
    if(!fillEmptyLinks){ ebref.push(mi[1]); continue; }
    let title = mapUuid[mi[1]];
    l = flattenLinks ? title : '['+title+']'+'(#'+mi[1]+')';
    nln += ln.slice(li,mi.index) + l;
    li = mi.index + mi[0].length;
  }
  nln += ln.slice(li);

  return { text:nln, ebref:ebref, bref:bref, href:href };
}


/** Restructure item lists to <folder-div> */
function restructureToFolderDiv(node, root=false){
  //console.debug('restructuring...',node.children[0].textContent);
  // convert <li> to <folder-div>
  let unfoldable = document.createElement("div");
    unfoldable.setAttribute('slot', 'unfoldable');
  let foldable = document.createElement("div");
    foldable.setAttribute('slot', 'foldable');
  let folder = document.createElement("folder-div");
    folder.append(unfoldable, foldable);

  // convert title to <div slot="unfoldable">, title = first line in first child, from start to a.logseq-meta or <br>
  // Note: Use looseList to wrap all item contents into <p>, then use node.children[0], instead of node.childNodes[] which always contains meaningless newline-only text nodes
  // Note: Must store childNodes in array before access, because childNodes will be modified in-the-loop when a child n is moved away by f.append(n)
  let title = node.children[0];
  unfoldable.append(title);
  let f = null; // foldable <- the remaining part after a.logseq-meta
  for(let n of Array.from(title.childNodes)){
    if(n.nodeType==Node.TEXT_NODE && n.data=='\n'){ continue; } // \n is meaningless in HTML
    f && f.append(n);
    let meta = n.tagName=='A' && n.classList.contains('logseq-meta');
    if(n.tagName=='BR' || meta){
      f = foldable;
      if(meta && n.getAttribute('data-collapsed')=='true'){ folder.setAttribute('folded',true); }
    }
  }

  // convert remaining parts, including <ul> & sub-headings, to <div slot="foldable">
  let br = foldable.children[0]; // remove remaining line break after a.logseq-meta
  if(br && br.tagName=='BR'){ br.remove(); }
  for(let n of Array.from(node.childNodes)){
    if(n.nodeType==Node.TEXT_NODE && n.data=='\n'){ continue; } // \n is meaningless in HTML
    foldable.append(n);
    if(n.tagName=='UL') for(let li of n.children){
      restructureToFolderDiv(li);
    }
  }

  // leaf item = item with no foldable part => just use <div class="unfoldable">
  if(!foldable.childNodes.length){
    unfoldable.setAttribute('slot', 'unfoldable-leaf');
    foldable.remove(); folder.remove();
    folder = unfoldable; foldable = null;
  }

  // then replace this node with the <folder-div>
  if(root){ // don't replace root! Instead, append(folder)
    node.innerHTML = '';
    node.append(folder);
  }else{
    node.replaceWith(folder);
  }
  //console.debug('converted:',folder);
}


