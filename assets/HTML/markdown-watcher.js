//////////////////////////////////////////
//// libraries:

// highlight.js:
//const hljs = window.hljs
// markdown-it.js:
const mdi = window.markdownit({
  html: true, // allow HTML tags in markdown code
  linkify: true, // parse link-like texts
  breaks: true, // Convert '\n' in paragraphs into <br>
  typographer: false, // replace quotes by curly quotes, (c) by © etc.
  highlight: function(str, lang) {
    if (!lang || !hljs.getLanguage(lang)) {
      return ''; // use external default escaping
    }
    return hljs.highlight(str, {language:lang}).value;
  },
});

// modern-screenshot
const domto = window.modernScreenshot;

// FolderDiv
var FolderDivJS = null;
(async function(){
  let blob = await fetchFile('FolderDiv.js', {mode: "no-cors"});
  FolderDivJS = document.createElement('script');
  FolderDivJS.setAttribute('id', 'FolderDivJS');
  FolderDivJS.innerHTML = await blob.text();
}());

//////////////////////////////////////////
/////// DOMs

/*/ getElementById() is redundant!
const control = document.getElementById("control");
const mdf = document.getElementById("mdf");
const mdrender = document.getElementById("mdrender");
const mdrender = document.getElementById("mdrender");
const mdpdf = document.getElementById("mdpdf");
const mdimg = document.getElementById("mdimg");
const renderChoice = document.getElementById("renderChoice");
const doNormalizeMarkdown = document.getElementById("doNormalizeMarkdown");
const optAsMdHtml = document.getElementById("optAsMdHtml");
const optAsHtml = document.getElementById("optAsHtml");
const optAsPdf = document.getElementById("optAsPdf");
const optAsPng = document.getElementById("optAsPng");
const message = document.getElementById("message");
const messageSummary = document.getElementById("messageSummary");
const messageDetails = document.getElementById("messageDetails");
const butLoadNow = document.getElementById("butLoadNow");
const reloadInterval = document.getElementById("reloadInterval");
const butToggleWatching = document.getElementById("butToggleWatching");
const butExport = document.getElementById("butExport");
const exportUrlMd = document.getElementById("exportUrlMd");
const exportUrlMdRender = document.getElementById("exportUrlMdRender");
const exportUrlHtml = document.getElementById("exportUrlHtml");
const exportUrlPdf = document.getElementById("exportUrlPdf");
const exportUrlImg = document.getElementById("exportUrlImg");
const markdown_style = document.getElementById("markdown_style");
const folder_div_style = document.getElementById("folder_div_style");
/*/

//////////////////////////////////////////
/////// Events

mdf.addEventListener("input", (e)=>{load(true)});
renderChoice.addEventListener("change", (e)=>{load(true)});
doNormalizeMarkdown.addEventListener("change", (e)=>{load(true)});
butLoadNow.addEventListener("click", (e)=>{e.preventDefault(); load(true);});
butToggleWatching.addEventListener("click", toggleWatching);
butExport.addEventListener("click", (e)=>{e.preventDefault(); exportFile();});
mdimg.addEventListener("error", showError);

window.addEventListener("DOMContentLoaded", loadPage);
reloadInterval.addEventListener("change", rewatch);

//////////////////////////////////////////
/////// DOM handling

let loopId = 0;
let oblob = new Blob(), pdfblob = null, pdfmdihtml = '', orenderChoice = null;
let params = {}; //FormData.entries()
let exportUrl = exportUrlMd;

/** The "god function" */
async function load(forced) {
  let fn = mdf.value.trim();

  // update title & URLs
  document.title = (fn ? fn : 'Markdown') + ' ' + butToggleWatching.value;
  if (!fn) {
    return
  }
  let ps = getParams();
  if (forced || ps.new) {
    delete ps.new;
    window.history.replaceState(ps, '', '?' + new URLSearchParams(ps).toString());
    let fnb = fn.split('/').at(-1).split('?').at(0); //base name
    exportUrlMd.download = fnb
    fnb = fnb.replace(/\.\w+$/, ''); 
    exportUrlMdRender.download = fnb + '.md.html';
    exportUrlHtml.download = fnb + '.html';
    exportUrlPdf.download = fnb + '.pdf';
    exportUrlImg.download = fnb + '.png';
    DocRaptorParams['doc[name]'] = DocRaptorParams['doc[test]'] ? '[t] '+fnb : fnb + '<<<<<<<< [Production]';
  }

  // loaf mdf tagged with timestamp
  let freq = fn + '?ts=' + new Date().getTime();
  let blob = await fetchFile(freq, {mode: "no-cors"});
  if (equal(blob, oblob)) {
    if(!forced){
      return; // continue only if there's change in the input blob, or being forced
    }
  }else{
    oblob = blob;
    updateURL(exportUrlMd, blob);
  }

  // check MIME type
  if(!['text/markdown','text/x-markdown','text/plain'].includes(blob.type.split(';')[0])) {
    console.log('Unrecognized markdown type: "', blob.type, '" from', res.url);
    return;
  }

  // convert markdown -> HTML -> FolderDiv HTML -> PDF -> SVG/PNG
  let md = await blob.text();
  mdtxt.value = md;
  if(doNormalizeMarkdown.checked){
    mdtxt.value = normalizeMardown(mdtxt.value,
      /*flattenHeadings*/true,
      /*blankLineBeforeCodeBlock*/true,
      /*looseList*/false,
      /*lineBreakAfterMetadata*/true,
      /*pageHeadingAsItem*/false
    );
  }
  let omdihtml = mdrender.innerHTML;
  mdrender.innerHTML = md2html(mdtxt.value, /*looseList*/true); //mdi.render(mdtxt.value);
  let mdihtml = mdrender.innerHTML;
  if(omdihtml==mdihtml){
    if(renderChoice.value==orenderChoice){
      return; // continue only if there's change in the Markdown HTML or in renderChoice
    }
  }else{
    let b = new Blob([mdrender.innerHTML, markdown_style.outerHTML, FolderDivJS.outerHTML], {type: 'text/html'});
    updateURL(exportUrlMdRender, b);
  }

  mdrender.style.display = 'none';
  mdhtml.style.display = 'none';
  mdpdf.style.display = 'none';
  mdimg.style.display = 'none';
  if(renderChoice.value=='mdrender'){
    mdrender.style.display = 'block';
    exportUrl = exportUrlMdRender;
  }else if(renderChoice.value=='html'){
    mdhtml.style.display = 'block';
    exportUrl = exportUrlHtml;
    // render md -> HTML
    mdtxt.value = normalizeMardown(md,
      /*flattenHeadings*/false,
      /*blankLineBeforeCodeBlock*/false,
      /*looseList*/false,
      /*lineBreakAfterMetadata*/false,
      /*pageHeadingAsItem*/true
    );
    mdhtml.innerHTML = md2html(mdtxt.value, /*looseList*/true); //mdi.render(mdtxt.value);
    // preprocess abnormalities in rendered markdown before restructuring to FolderDiv
    let item = mdhtml;
    if(item.children[0].tagName=='UL'){
      let l = item.children[0];
      if(l.children.length == 1){
        item = l.children[0];
        console.log('Single-item page: ',item.children[0].textContent);
        // move contents of this single item to the page
        for(let n of Array.from(item.childNodes)){ mdhtml.append(n); }
        l.remove();
        item = mdhtml;
      }else{
        let t = decodeURI(fn);
        console.log('Headless page: Use file name as page header: ',t);
        let title = document.createElement('p');
        title.innerHTML = t;
        item.prepend(title);
      }
    }
    restructureToFolderDiv(item, /*root*/true);
    let b = new Blob([mdhtml.innerHTML, markdown_style.outerHTML, FolderDivJS.outerHTML], {type: 'text/html'});
    updateURL(exportUrlHtml, b);
  }else if(renderChoice.value=='pdf'){
    mdpdf.style.display = 'block';
    exportUrl = exportUrlPdf;
    if(!mdpdf.src || pdfmdihtml != mdihtml){
      console.log('PDF loading...');
      showMessage('PDF loading...');
      mdpdf.style.display = 'block';
      let b = await toPdf(mdrender.innerHTML + markdown_style.outerHTML);
      if(b){ pdfblob = b;
        updateURL(exportUrlPdf, pdfblob);
        mdpdf.src = exportUrl.href;
        mdpdf.innerHTML = '';
        clearMessage();
      }
      pdfmdihtml = mdihtml;
    }
  }

  orenderChoice = renderChoice.value;
}

function showError(msg, heading = 'Markdown loading error'){
  if(typeof(msg)==='string'){ heading += ': '; }else{ msg += '!'; }
  showMessage(heading, msg, 'brown');

  /* Chrome console error messages: GET ... {net:ERR_*, 404 (Not Found), ...}
  - Issue: those messages are browser's native and **cannot be controlled** by javascript (even they are properly catched/handlled in the script).
  - Chorme's solution: console config > check "Hide network"
  - Note that `mdimg.src = freq` is actually a GET request in disguise!
  */
}
function showMessage(heading, msg, color='green'){
  messageSummary.innerHTML = heading;
  messageDetails.innerHTML = msg;
  message.style.color = color;
  message.style.display = 'block';
  //message.setAttribute('open',true);
}
function clearMessage(){
  messageSummary.innerHTML = '';
  messageDetails.innerHTML = '';
  message.style.display = 'none';
  //message.removeAttribute('open');
}

function watch(){
  load(false);
  loopId = setInterval(load, reloadInterval.value, false);
}

function stop(){
  // update title & URL
  document.title = mdf.value +' '+ butToggleWatching.value;
  let ps = getParams();
  delete ps.new;
  window.history.replaceState(ps, '', '?' + new URLSearchParams(ps).toString());
  clearInterval(loopId);
}

function rewatch(){
  stop();
  if(butToggleWatching.value!='watching'){ return }
  watch();
}

function toggleWatching(event){
  if(typeof event == 'string'){
    butToggleWatching.value = (event=='watching')? 'stopped': 'watching';
  }else{
    event.preventDefault();
  }
  if(butToggleWatching.value=='watching'){
    butToggleWatching.value = watchStatus.innerText = 'stopped';
    butToggleWatching.innerText = 'Restart Watching';
    stop();
  }else{
    butToggleWatching.value = watchStatus.innerText = 'watching';
    butToggleWatching.innerText = 'Stop Watching';
    watch();
  }
}

function exportFile(){
  // window.showSaveFilePicker(); // this Experimental does not work
  // just use the good old hack of "click the download-link"
  exportUrl.click();
}

//////////////////////////////////////////
/////// URL history (states)

function setParams(params){
  let watchSet = false;
  console.log('setParams', params);
  if(params.mdf){ mdf.value = params.mdf };
  if(params.renderChoice){ renderChoice.value = params.renderChoice };
  if(params.reloadInterval){ reloadInterval.value = params.reloadInterval };
  if(params.watch){ toggleWatching(params.watch); watchSet = true; };
  return watchSet;
}

function getParams(){
  let form = new FormData(control, butToggleWatching);
  let ps = Object.fromEntries(form.entries());
  ps.new = !(ps.mdf===params.mdf
    && ps.renderChoice===params.renderChoice
    && ps.reloadInterval===params.reloadInterval
    && ps.watch===params.watch
    && ps.norm===params.norm
  );
  params = ps;
  //console.log('getParams', params);
  return params;
}

function loadPage() {
  let query = window.location.href.split('?')[1] || '';
  let sp = new URLSearchParams(query);
  setParams(Object.fromEntries(sp.entries()));
  load(true);
}

//////////////////////////////////////////
/////// Format converting

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
    showError('<pre>'+JSON.stringify(msg, null, '  ')+'</pre>', 'Markdown converting issues')
  }else{
    clearMessage();
  }

  // return the nomalized markdown
  return nmd;
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

/** A.K.A. “smart quotes!”
 Replace:
 1. foo "some words" bar
 2. foo "-some-words-" bar
 3. foo-"-some-words-"-bar

 Don't replace:
 1. foo " spaced " bar
 2. foo"inword"baz
 3. `foo "inline codes" bar`
 4. ```foo "code blocks" bar```
 5. <tag id="HTML">
*/
  const curlyQuote = { '"<':'“', '>"':'”',   "'<":"‘", ">'":"’" };
function replaceQuotes(ln){
  let nln = '', li = 0, stack = [], L = ln.length-1, q;
  for(let i in ln){ i = Number(i);
    if(!(ln[i] in {"'":0, '"':1})){ continue; }
    q = ln[i];
    //console.debug('replaceQuotes:',q,i, stack, [li,ln.slice(li,i)]);
    let leftSpace  = i > 0 ? ln[i-1].match(/\s/) : true;
    let rightSpace = i < L ? ln[i+1].match(/\s/) : true;
    let leftWord   = i > 0 ? ln[i-1].match(/\w/) : false;
    let rightWord  = i < L ? ln[i+1].match(/\w/) : false;
    if(leftSpace && rightSpace || leftWord && rightWord){ // don't replace
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

/** */
function md2html(md, looseList=false){

  // parse Markdown to tokens
  let env = {}; // metadata for renderer
  let tokens = mdi.parse(md, env);

  // process tokens
  const process = (token)=>{
    if(looseList){ token.hidden = false; }
    if(token.children){ token.children.forEach(process); }
  }
  tokens.forEach(process);

  // then render it to HTML
  let html = mdi.renderer.render(tokens, mdi.options, env)
  return html;
}
