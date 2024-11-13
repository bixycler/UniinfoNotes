//////////////////////////////////////////
//// libraries:

// highlight.js:
//const hljs = window.hljs
// markdown-it.js:
const mdi = window.markdownit({
    html: true, // allow HTML tags in markdown code
    linkify: true, // parse link-like texts
    breaks: false, // Convert '\n' in paragraphs into <br>
    typographer: false, // replace (c) by © etc.
    highlight: function(str, lang) {
        if (!lang || !hljs.getLanguage(lang)) {
            return ''; // use external default escaping
        }
        return hljs.highlight(str, {language:lang}).value;
    },
});

// DocRaptor
const DocRaptorApiKey = "m7Dhrn_AsezV94C3VL-B";
const DocRaptorUrl = `https://api.docraptor.com/docs`;
const DocRaptorRequest = {
    // Test documents are free, but watermarked **nicely** at the top & bottom of each page
    "test": true,
    // Give a name for the docs 
    "name": "DocRaptor TestDocs",
    // You can supply content directly
    "document_content": "", 
    // or via a URL
    //"document_url": "http://www.evopdf.com/DemoAppFiles/HTML_Files/Structured_HTML.html", 
    //"javascript": true, // for HTML display before convertion
    "type": "pdf", // Output type can be "pdf" or "xls" or "xlsx"
    //"prince_options": {
        //"media": "screen" // use screen styles instead of print styles
    //}
}
const DocRaptorParams = {
    "user_credentials": DocRaptorApiKey,
    "doc[test]": true,
    "doc[name]": "DocRaptor TestDocs",
    "doc[type]": "pdf",
    //"doc[prince_options][media]": "screen", // use screen styles instead of print styles
};
const Request = {
    method: 'POST',
    headings: {
        //'Content-Type': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': '*/*',
        //'Credentials': 'include',
    },
    body: '',
}
async function toPdf() { // use URLSearchParams
    let params = new URLSearchParams(structuredClone(DocRaptorParams));
    //params.append("doc[document_url]", 'http://www.evopdf.com/DemoAppFiles/HTML_Files/Structured_HTML.html');
    params.append("doc[document_content]", mdhtml.innerHTML + markdown_style.outerHTML + pdf_style.outerHTML);
    let req = structuredClone(Request);
        req.body = params;

    res = await fetch(DocRaptorUrl, req);
    //console.debug('toPdf() fetch',req,res);
    if (!res.ok) {
        //console.log('Fetch error:',res);
        showError(res.statusText, 'PDF loading error');
        return;
    } else {
        clearMessage();
    }
    blob = await res.blob();
    console.debug('toPdf() fetch',params,blob);
    return blob;
}

// modern-screenshot
const domto = window.modernScreenshot;

//////////////////////////////////////////
/////// DOMs

/*/ getElementById() is redundant!
const control = document.getElementById("control");
const mdf = document.getElementById("mdf");
const mdhtml = document.getElementById("mdhtml");
const mdpdf = document.getElementById("mdpdf");
const mdimg = document.getElementById("mdimg");
const renderChoice = document.getElementById("renderChoice");
const doNormalizeMarkdown = document.getElementById("doNormalizeMarkdown");
const optAsHtml = document.getElementById("optAsHtml");
const optAsPdf = document.getElementById("optAsPdf");
const optAsPng = document.getElementById("optAsPng");
const message = document.getElementById("message");
const butLoadNow = document.getElementById("butLoadNow");
const reloadInterval = document.getElementById("reloadInterval");
const butToggleWatching = document.getElementById("butToggleWatching");
const butExport = document.getElementById("butExport");
const exportUrlMd = document.getElementById("exportUrlMd");
const exportUrlHtml = document.getElementById("exportUrlHtml");
const exportUrlPdf = document.getElementById("exportUrlPdf");
const exportUrlImg = document.getElementById("exportUrlImg");
const markdown_style = document.getElementById("markdown_style");
const pdf_style = document.getElementById("pdf_style");
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
let oblob = new Blob(), pdfblob = null, omdhtml = '', opdfhtml = '', orenderChoice = null;
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
        exportUrlHtml.download = fnb + '.html';
        exportUrlPdf.download = fnb + '.pdf';
        exportUrlImg.download = fnb + '.png';
        DocRaptorParams['doc[name]'] = DocRaptorParams['doc[test]'] ? '[t] '+fnb : fnb + '<<<<<<<< [Production]';
    }

    // loaf mdf tagged with timestamp
    let freq = fn + '?ts=' + new Date().getTime();
    let res = await fetch(freq, {mode: "no-cors"});
    //console.debug(`fetch(${freq})`,res);
    if (!res.ok) {
        //console.log('Fetch error:',res);
        showError(res.statusText);
        return;
    } else {
        clearMessage();
    }
    let blob = await res.blob();
    console.debug(`fetch(${freq})`, blob);
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
    if(doNormalizeMarkdown.checked){
        md = normalizeMardown(md,
            /*flattenHeadings*/false,
            /*blankLineBeforeCodeBlock*/false,
            /*looseList*/true,
            /*lineBreakAfterMetadata*/false
        );
    }
    mdtxt.value = md;
    omdhtml = mdhtml.innerHTML;
    mdhtml.innerHTML = md2html(md, /*looseList*/true); //mdi.render(md);
    let mdihtml = mdhtml.innerHTML;
    if(omdhtml==mdihtml){
        if(renderChoice.value==orenderChoice){
            return; // continue only if there's change in the Markdown HTML or in renderChoice
        }
    }else { 
        let b = new Blob([mdhtml.innerHTML, markdown_style.outerHTML], {type: 'text/markdown'});
        updateURL(exportUrlHtml, b);
    }
    if(doNormalizeMarkdown.checked){
        //restructureToFolderDiv(mdhtml, /*root*/true);
    }

    mdhtml.style.display = 'none';
    mdpdf.style.display = 'none';
    mdimg.style.display = 'none';
    if(renderChoice.value=='html'){
        mdhtml.style.display = 'block';
        exportUrl = exportUrlHtml;
    } else if(renderChoice.value=='pdf'){
        mdpdf.style.display = 'block';
        exportUrl = exportUrlPdf;
        if(!mdpdf.src || opdfhtml != mdihtml){
            console.log('PDF loading...');
            showMessage('PDF loading...');
            mdpdf.style.display = 'block';
            let b = await toPdf();
            if(b){ pdfblob = b;
                updateURL(exportUrlPdf, pdfblob);
                mdpdf.src = exportUrl.href;
                mdpdf.innerHTML = '';
                clearMessage();
            }
            opdfhtml = mdihtml;
        }
    }

    omdhtml = mdihtml;
    orenderChoice = renderChoice.value;
}

function showError(msg, heading = 'Markdown loading error'){
    showMessage(heading + (typeof(msg)==='string'? ': '+msg: '!'), 'brown');

    /* Chrome console error messages: GET ... {net:ERR_*, 404 (Not Found), ...}
    - Issue: those messages are browser's native and **cannot be controlled** by javascript (even they are properly catched/handlled in the script).
    - Chorme's solution: console config > check "Hide network"
    - Note that `mdimg.src = freq` is actually a GET request in disguise!
    */
}
function showMessage(msg, color='green'){
    message.innerHTML = msg;
    message.style.color = color;
    message.style.display = 'block';
}
function clearMessage(){
    message.innerHTML = '';
    message.style.display = 'none';
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
    lineBreakAfterMetadata = false
){ // md -> nmd
    let lns = (md+'\n').split('\n'), nmd = '';
    let indent = '';
    let m = null; // pattern matches
    let msg = {};

    // convert metadata to `<a id="UUID" data-property="..." data-logbook="..."></a>`
    // & record mapUuid[id] = blockTitle
    // & process looseList
    mapUuid = {}; noUuid = {};
    let logbook = '', inLogbook = false;
    let props = {}, meta = '', blockTitle = '';
    let firstItem = true; // to detect soliton list: only one item with no sub-list
    indent = '';
    for(let i in lns){ let ln = lns[i];
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
            logbook = ''; props = {};
        }
        // next item
        m = ln.match(patItem);
        if(m){
            meta = metatag;
            blockTitle = ln.replace(m[0],'');
            if(looseList){ ln = indent+'\t\n' +ln; }
            indent = m[1];
        }else{ meta = ''; }
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
            stack.shift();    q = curlyQuote['>'+q];
        }
        nln += ln.slice(li,i) + q;
        li = i+1;
    }
    nln += ln.slice(li);
    return nln;
}

/** Restructure item lists to <folder-div> */
function restructureToFolderDiv(node, root=false){
    // convert <li> to <folder-div>
    let unfoldable = document.createElement("div");
        unfoldable.setAttribute('slot', 'unfoldable');
        unfoldable.setAttribute('class', 'unfoldable');
    let foldable = document.createElement("div");
        foldable.setAttribute('slot', 'foldable');
        foldable.setAttribute('class', 'foldable');
    let folder = document.createElement("folder-div");
        folder.append(unfoldable, foldable);

    // convert title to <div slot="unfoldable">, title = first child, from start to a.logseq-meta
    // Note: Use looseList to wrap all item contents into <p>, then use node.children[0], instead of node.childNodes[] which always contains meaningless newline-only text nodes
    // Note: Must store childNodes in array before access, because childNodes will be modified in-the-loop when a child n is moved away by f.append(n)
    let title = node.children[0];
    unfoldable.append(title);
    let f = null; // foldable <- the remaining part after a.logseq-meta
    for(let n of Array.from(title.childNodes)){
        f && f.append(n);
        if(n.tagName=='A' && n.classList.contains('logseq-meta')){ f = foldable; }
    }

    // convert remaining parts, including <ul> & sub-headings, to <div slot="foldable">
    let br = node.children[0]; // remove remaining line break after a.logseq-meta
    if(br && br.tagName=='BR'){ node.remove(br); }
    for(let n of Array.from(node.childNodes)){
        foldable.append(n);
        if(n.tagName=='UL') for(let li of n.children){
            restructureToFolderDiv(li);
        }
    }

    // then replace this node with the <folder-div>
    if(root){ // don't replace root! Instead, append(folder)
        node.innerHTML = '';
        node.append(folder);
    }else{
        node.replaceWith(folder);
    }
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

//////////////////////////////////////////
/////// Utilities

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

function updateURL(exportUrl, obj){
    let url = null;
    if(obj instanceof Blob) {
        url = URL.createObjectURL(obj);
    }else if(obj instanceof HTMLCanvasElement) {
        url = obj.toDataURL("image/png");
    }
    if(!url){ return null; }
    URL.revokeObjectURL(exportUrl.href); // don't litter garbage :)
    exportUrl.href = url;
    console.log('Export URL update:', exportUrl.download,' = ',exportUrl.href);
    return url;
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