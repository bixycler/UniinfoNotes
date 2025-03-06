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

/** A.K.A. “smart quotes!”
 Replace:
 1. foo "some words" bar
 2. foo "-some-words-" bar
 3. foo-"-some-words-"-bar

 Don't replace:
 1. foo " spaced " bar
 2. foo"inword"baz
 3. `code`'s possessive
 // handled by external logics, e.g. function normalize(md)
 4. `foo "inline codes" bar`
 5. ```foo "code blocks" bar```
 6. <tag id="HTML">
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
