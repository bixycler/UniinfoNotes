/////// DOMs

/* // getElementById() is redundant!
const control = document.getElementById("control");
const diaf = document.getElementById("diaf");
const dsvg = document.getElementById("dsvg");
const dobj = document.getElementById("dobj");
const dimg = document.getElementById("dimg");
const dcanvas = document.getElementById("dcanvas");
const sizeChoice = document.getElementById("sizeChoice");
const optSizeSvg = document.getElementById("optSizeSvg");
const renderChoice = document.getElementById("renderChoice");
const optAsObj = document.getElementById("optAsObj");
const optAsSvg = document.getElementById("optAsSvg");
const message = document.getElementById("message");
const butLoadNow = document.getElementById("butLoadNow");
const reloadInterval = document.getElementById("reloadInterval");
const butToggleWatching = document.getElementById("butToggleWatching");
const butExport = document.getElementById("butExport");
const exportUrl = document.getElementById("exportUrl");
//*/

/////// Events

diaf.addEventListener("input", (e)=>{load(true)});
sizeChoice.addEventListener("change", (e)=>{load(true)});
renderChoice.addEventListener("change", (e)=>{load(true)});
butLoadNow.addEventListener("click", (e)=>{e.preventDefault(); load(true);});
butToggleWatching.addEventListener("click", toggleWatching);
butExport.addEventListener("click", (e)=>{e.preventDefault(); exportFile();});
dimg.addEventListener("error", loadError);
//window.addEventListener("error", loadError); // Element error does not reach window!

window.addEventListener("DOMContentLoaded", (e)=>{setParams(urlParams()); load(true);});
window.addEventListener("popstate", previousPage);
reloadInterval.addEventListener("change", rewatch);

let loopId = 0;
let oblob = new Blob();
let params = {}; //FormData.entries() & URLSearchParams.entries()

/** The "god function"
 * Parameter `forced` should be `true` when called manually (`false` for `setInterval` call)
 */
async function load(forced) {
  let fn = diaf.value.trim();
  if (!fn) {
    return
  }
  exportUrl.download = fn.split('/').at(-1).split('?').at(0);
  if(renderChoice.value=='image') {
    exportUrl.download = exportUrl.download.replace(/\.\w+$/, '.png')
  }

  // loaf diaf tagged with timestamp
  let freq = fn + '?ts=' + new Date().getTime();
  let res = await fetch(freq, {mode: "no-cors"});
  //console.debug(`fetch(${freq})`,res);
  if (!res.ok) {
    //console.log('Fetch error:',res);
    loadError(res.statusText);
    return;
  } else {
    message.innerHTML = '';
    message.style.display = 'none';
  }
  let blob = await res.blob();
  if(!forced && equal(blob, oblob)) {
    return
  }
  oblob = blob;
  console.debug(`fetch(${freq})`, blob);
  // blob URL will be stored in `exportUrl` and updated in cascade
  updateURL(blob);

  //////// set up & process image

  // first, show containers up for `dobj.data = URL` to take effect, otherwise it'll be set with a blank HTML page!
  dobj.style.display = 'block';
  dsvg.style.display = 'block';
  dimg.style.display = 'block';
  optAsObj.removeAttribute('disabled');
  optAsSvg.removeAttribute('disabled');
  optSizeSvg.removeAttribute('disabled');

  // load image by type into corresponding containter
  let svg = null, doc = document;
  if (blob.type === 'image/svg+xml') {
    // load SVG to dobj or dsvg
    if (renderChoice.value == 'object') {
      dobj.data = URL.createObjectURL(blob);
      await eventPromise(dobj, "load");
      doc = dobj.contentDocument;
      svg = doc.children[0];
    } else {// 'svg' || 'image'
      dsvg.innerHTML = escape(await blob.text());
      svg = dsvg.children[0];
    }
    //console.log('SVG:',svg);

    // adjust SVG dimensions
    let box = svg.getAttribute('viewBox');
    if (sizeChoice.value === 'image') {
      if (box) {
        box = box.split(' ');
        svg.setAttribute('width', box[2]);
        svg.setAttribute('height', box[3]);
        if (renderChoice.value == 'object') {
          dobj.setAttribute('width', box[2]);
          dobj.setAttribute('height', box[3]);
        }
      }
    } else if (sizeChoice.value === 'page') {
      svg.setAttribute('width', '100%');
      svg.removeAttribute('height');
      if (renderChoice.value == 'object') {
        dobj.setAttribute('width', '100%');
        dobj.removeAttribute('height');
      }
    } else if (sizeChoice.value === 'svg') {
      svg.removeAttribute('width');
      svg.removeAttribute('height');
      if (renderChoice.value == 'object') {
        dobj.removeAttribute('width');
        dobj.removeAttribute('height');
      }
    }

    // remove watermark for D2's Tala layout
    for (let text of doc.querySelectorAll('#d2-svg>text')) {
      if (text.textContent.indexOf('UNLICENSED') >= 0) {
        text.remove();
      }
    }

    // update `exportUrl`
    if(renderChoice.value=='svg'){
      // remove <script>s for `exportUrl` < `dsvg.innerHTML` just inactivate <script> but still retain its code.
      for(let scr of svg.querySelectorAll('script')){
        console.debug('remove ',scr);
        scr.remove();
      }
    }
    let x = new XMLSerializer().serializeToString(svg); //unescape(svg.outerHTML)
    let b = new Blob([x], {type: 'image/svg+xml'});
    updateURL(b);
  } else if (blob.type.slice(0, 'image/'.length) === 'image/') { // non-SVG image
    // limit `renderChoice` & `sizeChoice`
    optAsObj.setAttribute('disabled', 'disabled');
    optAsSvg.setAttribute('disabled', 'disabled');
    renderChoice.value = 'image';
    optSizeSvg.setAttribute('disabled', 'disabled');
    if (sizeChoice.value === 'svg') {
      sizeChoice.value = 'image';
    }
  } else {
    console.log('Unrecognized image type: ', blob.type, 'from', res.url);
    loadError('Unrecognized image type: '+ blob.type);
    return;
  }

  // process the image (from both SVG and non-SVG source)
  if(renderChoice.value=='image'){
    // load image to dimg
    //dimg.src = freq; // it's actually a GET request! Don't dupe ourselves!
    dimg.src = exportUrl.href;
    await eventPromise(dimg, 'load');

    // adjust image dimensions
    if (sizeChoice.value === 'page') {
      dimg.setAttribute('width', '100%');
      dimg.removeAttribute('height');
    } else {
      dimg.removeAttribute('width');
      dimg.removeAttribute('height');
    }

    // draw image to canvas to get its bitmap for `exportUrl`
    dcanvas.width = dimg.width; dcanvas.height = dimg.height;
    dcanvas.getContext("2d").drawImage(dimg, 0, 0, dimg.width, dimg.height);
    updateURL(dcanvas);
  }

  // update title, URL, navigation history
  let ps = getParams();
  if(fn != urlParams().diaf){ nextPage(ps)
  }else if(forced || ps.new){// stay in this page & just update URL
    window.history.replaceState(ps, '', urlParams(ps));
  }
  document.title = (fn ? fn : 'Diagram') + ' ' + butToggleWatching.value;

  // show the image up
  dobj.style.display = 'none';
  dsvg.style.display = 'none';
  dimg.style.display = 'none';
  switch(renderChoice.value) {
    case 'object': dobj.style.display = 'block'; break;
    case 'svg': dsvg.style.display = 'block'; break;
    case 'image': dimg.style.display = 'block'; break;
  }
}
function loadError(msg){
  console.log('Image loading error: ', msg)

  message.innerHTML = 'Image loading error' + (typeof(msg)==='string'? ': '+msg: '!');
  message.style.display = 'block';
  message.style.color = 'brown';

  /* Chrome console error messages: GET ... {net:ERR_*, 404 (Not Found), ...}
  - Issue: those messages are browser's native and **cannot be controlled** by javascript (even they are properly catched/handlled in the script).
  - Chorme's solution: console config > check "Hide network"
  - Note that `dimg.src = freq` is actually a GET request in disguise!
  */
}
function watch(){
  load(true);
  loopId = setInterval(load, reloadInterval.value, false);
}
function stop(){
  // update title & URL
  document.title = diaf.value +' '+ butToggleWatching.value;
  let ps = getParams();
  window.history.replaceState(ps, '', urlParams(ps));
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

/////// URL history (states)

function nextPage(ps){
  console.log('<== push history:',ps);
  window.history.pushState(ps,'', urlParams(ps));
}

function previousPage(event) {
  let st = window.location.href;
  if(event.state){
    st = event.state;
    setParams(st);
  }
  console.log('==> pop history: ',st);
  load(true);
}

/** Set params to FormData */
function setParams(params){
  let watchSet = false;
  console.log('setParams', params);
  if(params.diaf){ diaf.value = params.diaf };
  if(params.sizeChoice){ sizeChoice.value = params.sizeChoice };
  if(params.renderChoice){ renderChoice.value = params.renderChoice };
  if(params.reloadInterval){ reloadInterval.value = params.reloadInterval };
  if(params.watch){ toggleWatching(params.watch); watchSet = true; };
  return watchSet;
}

/** Get params from FormData */
function getParams(){
  let form = new FormData(control, butToggleWatching);
  let ps = Object.fromEntries(form.entries());
  ps.diaf = ps.diaf.trim();
  ps.new = !(ps.diaf===params.diaf
    && ps.sizeChoice===params.sizeChoice
    && ps.renderChoice===params.renderChoice
    && ps.reloadInterval===params.reloadInterval
    && ps.watch===params.watch);
  params = ps;
  //console.log('getParams', params);
  return params;
}

/** Convert between URLSearchParams <-> window.location
 * urlParams() = URLSearchParams <- window.location
 * urlParams(newParams) = window.location <- newParams
 */
function urlParams(newParams){
  if(newParams){
    delete newParams.new;
    return '?' + new URLSearchParams(newParams).toString();
  }
  let query = window.location.href.split('?')[1] || '';
  let sp = new URLSearchParams(query);
  return Object.fromEntries(sp.entries());
}

/////// utilities

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

/** Doubly escape, due to mismatch betwen strict XML and loose HTML!
 * Situation: D2 put connection description as-is to the `id` of SVG elements,
 *   so sth like `<g id="a &lt;-&gt; b">` appears,
 *   which `innerHTML` unescapes to `<g id="a <-> b">` and breaks the XML strict rule.
 */
function escape(xml){
  return xml.replaceAll('&lt;','&amp;lt;').replaceAll('&gt;','&amp;gt;');
}
function unescape(xml){
  return xml.replaceAll('&amp;lt;','&lt;').replaceAll('&amp;gt;','&gt;');
}

function updateURL(obj){
  let url = null;
  if(obj instanceof Blob) {
    url = URL.createObjectURL(obj);
  }else if(obj instanceof HTMLCanvasElement) {
    url = obj.toDataURL("image/png");
    //Error for <foreignObject>, like HTML = redered markdown, in SVG: HTMLCanvasElement: Tainted canvases may not be exported!
  }
  if(!url){
    console.log('Error updateURL ',obj);
    return null;
  }
  URL.revokeObjectURL(exportUrl.href); // don't litter garbage :)
  exportUrl.href = url;
  //console.log('updateURL(): ',exportUrl);
  return url;
}
