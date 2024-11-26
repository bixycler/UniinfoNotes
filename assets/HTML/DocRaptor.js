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

const DocRaptorStyle = `
<style id="pdf_style">
  @page {
    size: 30cm 40cm; /* A4: 21x30 */
    margin: 20px;
  }

  /* <details> */
  details {
    display: block
  }
  summary {
    display: block
  }

  /* <folder-div> */
  folder-div, div[slot="unfoldable-leaf"] {
    display: list-item;
    //border-bottom: inset 1px;
    margin-left: 1em;
    padding-left: .5em;
  }
  folder-div::marker, div[slot="unfoldable-leaf"]::marker {
    color: DimGray;
    content: " ● "; /* Use BLACK CIRCLE U+25CF (●); The standard &bullet; U+2022 (•) is too small! */
  }

</style>
`;

export function setProduction(){
  confirm('⚠️ Attempting to use PRODUCTION version of DocRaptor which may cost money!\nDo you agree?')
}

export async function toPdf(html) { // use URLSearchParams
  let params = new URLSearchParams(structuredClone(DocRaptorParams));
  //params.append("doc[document_url]", 'http://www.evopdf.com/DemoAppFiles/HTML_Files/Structured_HTML.html');
  params.append("doc[document_content]", html + DocRaptorStyle);
  let req = structuredClone(Request);
    req.body = params;

  let blob = await fetchFile(DocRaptorUrl, req, 'PDF loading');
  console.debug('toPdf() fetch',params,blob);
  return blob;
}

