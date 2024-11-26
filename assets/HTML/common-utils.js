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

/** Fetch a file from url then return blob of that file */
async function fetchFile(url, req, msg='Fetch'){
  let res = await fetch(url, req);
  //console.debug(`${msg}(${url})`,res);
  if (!res.ok) {
    //console.warn(msg+' error:',res);
    showError(res.statusText, msg+' error');
    return;
  } else {
    clearMessage();
  }
  let blob = await res.blob();
  console.debug(`${msg}(${url})`, blob);
  return blob;
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
