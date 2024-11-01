//////////////////////////////////////////
//// libraries:

// highlight.js:
//const hljs = window.hljs
// markdown-it.js:
const mdi = window.markdownit({
    html: true, // allow HTML tags in markdown code
    linkify: true, // parse link-like texts
    typographer: true, // replace (c) by © etc.
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
    headers: {
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

    // convert markdown -> HTML/PDF -> SVG/PNG
    let md = await blob.text();
    if(doNormalizeMarkdown.checked){ md = normalizeMardown(md); }
    mdtxt.value = md;
    omdhtml = mdhtml.innerHTML;
    mdhtml.innerHTML = mdi.render(md);
    let mdihtml = mdhtml.innerHTML;
    if(omdhtml==mdihtml){
        if(renderChoice.value==orenderChoice){
            return; // continue only if there's change in the Markdown HTML or in renderChoice
        }
    }else { 
        let b = new Blob([mdhtml.innerHTML, markdown_style.outerHTML], {type: 'text/markdown'});
        updateURL(exportUrlHtml, b);
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
    var mapUuid = {}, noUuid = {};
function normalizeMardown(md){
    const patItem = /^\t*- /;
    let lns = (md+'\n').split('\n'), nmd = '';
    let indent = '';
    let m = null; // pattern matches
    let msg = {};

    // convert metadata to `<a id="UUID" data-property="..." data-logbook="..."></a>`
    const patLB = /^\s*:(logbook|LOGBOOK):$/;
    const patLBE = /^\s*:END:$/;
    const metatag = '<a class="logseq-meta" ';
    let logbook = '', inLogbook = false;
    let patProp = /^\s*(\w+):: (.*)$/;
    let props = {}, meta = '';
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
        // end metadata
        if(meta && (Object.keys(props).length || logbook)){
            if('id' in props){ meta += `id="${props.id}" `; mapUuid[props.id] = true; delete props.id; }
            for(let j in props){ meta += `data-${j}="${props[j]}" `; }
            if(logbook){ meta += `data-logbook="${logbook}" `; }
            meta += '></a>';
            nmd = nmd.slice(0, -1) + ' '+meta+'\n';
            logbook = ''; props = {};
        }
        meta = ln.match(patItem) ? metatag : '';
        nmd += ln+'\n';
    }

    // unitemize headers & remove first tabs & process code block
    const patIH = /^(\t*)(- )?#/; // itemized header
    const patCBF = /^(\t*)(-| ) ```(\w*)/; // code block fence
    const patCBH = /^(\t*)  /; // code block line's head
    let codeblock = '', cbIndent = '', cbErrors = {};
    lns = nmd.split('\n'); nmd = '';
    for(let i in lns){ let ln = lns[i];
        m = ln.match(patIH);
        if(m){ // unitemize header
            indent = m[1];
            nmd += '\n'+ln.replace(patIH, '#')+'\n\n';
            continue;
        }
        // unindent header's indent
        if(indent && ln.slice(0,indent.length) == indent){
            ln = ln.slice(indent.length);
        }
        // unindent sub-items' indent
        if(ln.match(/^\t/)){
            ln = ln.slice(1);
        }

        // process code block
        m = ln.match(patCBF);
        if(m){ // code block fences
            if(codeblock && (m[3] || m[2]=='-')){ // exception
                console.warn('Code block ',codeblock,' not closed before ',`@${i}[${m[0]}]`);
                cbErrors.get(codeblock)
                // try to close it!
                nmd += cbIndent+'```\n'+cbIndent+'\n';
                codeblock = '';
            }
            if(codeblock){ // close code block
                ln = cbIndent+'```'+cbIndent+'\n';
                codeblock = '';
            }else{ // start code block
                codeblock = `@${i}[${m[0]}]`;
                cbIndent = m[1] + (m[2]=='-'? '' : '\t');
                ln = cbIndent+'\n'+cbIndent+'```'+m[3];
            }
            nmd += ln+'\n';
            continue;
        }
        if(codeblock){ // code block content lines
            m = ln.match(patCBH);
            if(!m){
                console.warn('Code block ',codeblock,' line format invalid: ',ln);
            }else{
                ln = cbIndent + ln.replace(m[0],'');
            }
        }

        // finally, commit this line
        nmd += ln+'\n';
    }

    // process details: block ref/links, code blocks,
    const patUuid = /\w\w\w\w\w\w\w\w-\w\w\w\w-\w\w\w\w-\w\w\w\w-\w\w\w\w\w\w\w\w\w\w\w\w/;
    const patUuidAll = new RegExp(patUuid, 'g');
    const patBRef = new RegExp('\\(\\(('+patUuid.source+')\\)\\)');
    const patBRefAll = new RegExp(patBRef, 'g');
    const patBLink = new RegExp('\\[([^\\]]*)\\]\\('+patBRef.source); // leave out the closing `)` for potential ` "link title")`
    const patBLinkAll = new RegExp(patBLink, 'g');
    lns = nmd.split('\n'); nmd = '';
    for(let i in lns){ let ln = lns[i];
        // check links' target against mapUuid before replacing them
        m = ln.matchAll(patBLinkAll);
        for(let mi of m){
            if(!(mi[2] in mapUuid)){
                console.warn('Block UUID not found: ',mi[2], `for`, mi[0]);
                noUuid[mi[2]] += mi[0]+'; ';
            }
        }
        // replace block link -> `#`anchor link
        ln = ln.replaceAll(patBLinkAll, '[$1](#$2');
        // finally, commit this line
        nmd += ln+'\n';
    }
    if(Object.keys(noUuid).length){
        msg['Unresolved links'] = noUuid;
    }
    if(Object.keys(msg).length){
        showError('<pre>'+JSON.stringify(msg, null, '  ')+'</pre>', 'Markdown converting issues')
    }else{
        clearMessage();
    }

    // return the nomalized markdown
    return nmd;
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
