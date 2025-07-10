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

/** Use Markdown It to render to HTML
 *  This function hacks Markdown It for setting looseList
 */
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

// FolderDiv
var FolderDivJS = null;
(async function(){
  let blob = await fetchFile('FolderDiv.js', {mode: "no-cors"});
  FolderDivJS = document.createElement('script');
  FolderDivJS.setAttribute('id', 'FolderDivJS');
  FolderDivJS.setAttribute('type', 'module');
  FolderDivJS.innerHTML = await blob.text();
}());

// DocRaptor
let pdf = null; // DocRaptor(); //

// markdown-converter.js
let mdNorm = null; // MarkdownNormalizer(); //
let mdHtmlNorm = null; // MarkdownNormalizer(); //

// modern-screenshot
const domto = window.modernScreenshot;

//////////////////////////////////////////
/////// DOMs

// Only getElementById() for removable ones
const content = document.getElementById("content");
const mdrender = document.getElementById("mdrender");
const mdhtml = document.getElementById("mdhtml");
const mdpdf = document.getElementById("mdpdf");
const mdimg = document.getElementById("mdimg");

/*/ getElementById() is redundant!
const control = document.getElementById("control");
const mdf = document.getElementById("mdf");
const renderChoice = document.getElementById("renderChoice");
const doNormalizeMarkdown = document.getElementById("doNormalizeMarkdown");
const optAsMdHtml = document.getElementById("optAsMdHtml");
const optAsHtml = document.getElementById("optAsHtml");
const optAsPdf = document.getElementById("optAsPdf");
const optAsPng = document.getElementById("optAsPng");
const message = document.getElementById("message");
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
  if(renderChoice.value=='html'){
    doNormalizeMarkdown.disabled = true;
  }else{
    doNormalizeMarkdown.disabled = false;
  }

  let fn = mdf.value.trim();
  if(!pdf){ pdf = DocRaptor(); }
  if(!mdNorm){
    mdNorm = MarkdownNormalizer();
    mdNorm.flattenHeadings = true;
    mdNorm.blankLineBeforeCodeBlock = true;
    mdNorm.looseList = false;
    mdNorm.lineBreakAfterMetadata = true;
    mdNorm.pageHeadingAsItem = false;
  }
  if(!mdHtmlNorm){
    mdHtmlNorm = MarkdownNormalizer();
    mdHtmlNorm.flattenHeadings = false;
    mdHtmlNorm.blankLineBeforeCodeBlock = false;
    mdHtmlNorm.looseList = false;
    mdHtmlNorm.lineBreakAfterMetadata = false;
    mdHtmlNorm.pageHeadingAsItem = true;
  }

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
    pdf.name = pdf.production ? fnb + '<<<<<<<< [Production]' : '[t] '+fnb;
  }

  // loaf mdf tagged with timestamp
  let freq = fn + '?ts=' + new Date().getTime();
  let blob = await fetchFile(freq, {mode: "no-cors"});
  if(!blob){ return; }
  if (equal(blob, oblob)) {
    if(!forced){
      return; // continue only if there's change in the input blob, or being forced
    }
  }else{
    oblob = blob;
    updateURL(exportUrlMd, blob);
  }

  // check MIME type
  if(!blob.type || !['text/markdown','text/x-markdown','text/plain'].includes(blob.type.split(';')[0])) {
    console.log('Unrecognized markdown type: "', blob.type, '" from', res.url);
    return;
  }

  // convert markdown -> HTML -> FolderDiv HTML -> PDF -> SVG/PNG
  let md = await blob.text();
  mdtxt.value = md;
  if(doNormalizeMarkdown.checked){
    mdtxt.value = mdNorm.normalize(mdtxt.value);
  }
  let omdihtml = mdrender.innerHTML;
  mdrender.innerHTML = md2html(mdtxt.value, /*looseList*/true); //mdi.render(mdtxt.value);
  let mdihtml = mdrender.innerHTML;
  if(omdihtml==mdihtml){
    if(renderChoice.value==orenderChoice){
      return; // continue only if there's change in the Markdown HTML or in renderChoice
    }
  }else{
    let b = new Blob([mdrender.innerHTML, markdown_style.outerHTML], {type: 'text/html'});
    updateURL(exportUrlMdRender, b);
  }

  try { content.removeChild(mdrender); } catch (error) {}
  try { content.removeChild(mdhtml); } catch (error) {}
  try { content.removeChild(mdpdf); } catch (error) {}
  try { content.removeChild(mdimg); } catch (error) {}
  if(renderChoice.value=='mdrender'){
    content.appendChild(mdrender);
    exportUrl = exportUrlMdRender;
  }else if(renderChoice.value=='html'){
    content.appendChild(mdhtml);
    exportUrl = exportUrlHtml;
    // render md -> HTML
    mdtxt.value = mdHtmlNorm.normalize(md);
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
    // restructure to FolderDiv
    restructureToFolderDiv(item, /*root*/true);
    // HTML style
    let style = document.createElement("style");
    style.setAttribute('id', 'html_style');
    style.innerHTML = `
      html {
        height: auto !important;
        padding-bottom: 100vh !important;
      }
    `
    mdhtml.prepend(style);
    // update export URL
    let b = new Blob([mdhtml.innerHTML, markdown_style.outerHTML, FolderDivJS.outerHTML], {type: 'text/html'});
    updateURL(exportUrlHtml, b);
  }else if(renderChoice.value=='pdf'){
    content.appendChild(mdpdf);
    exportUrl = exportUrlPdf;
    if(!mdpdf.src || pdfmdihtml != mdihtml){
      console.log('PDF loading...');
      message.show('PDF loading...');
      let b = await pdf.toPdf(mdrender.innerHTML + markdown_style.outerHTML);
      if(b){ pdfblob = b;
        updateURL(exportUrlPdf, pdfblob);
        mdpdf.src = exportUrl.href;
        mdpdf.innerHTML = '';
        message.clear();
      }
      pdfmdihtml = mdihtml;
    }
  }

  orenderChoice = renderChoice.value;
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
