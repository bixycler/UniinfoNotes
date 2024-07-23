
/////// Global data
const ApiEndpoint = 'http://127.0.0.1:12315/api';
const RequestHeaders = {
   "Content-Type": "application/json",
   "Authorization": "Bearer Logseq-API-Test"
}
const RequestBody = {
    method: "logseq.*.*",
    args: []
};


/////// Functions

async function logseqQuery(reqBody, msgDom) {
    let res = null;
    try {
        res = await fetch(ApiEndpoint, {method:'POST', headers:RequestHeaders,
            body: JSON.stringify(reqBody) });
    } catch (e) {
        console.debug('fetch(',reqBody,') error:',e);
        let msg = e.message;
        if (msg == 'Failed to fetch') { msg += ' data (Server is off or unreachable)'; }
        showMessage(msgDom, msg, 'Network Error');
        return e;
    }
    //console.debug('fetch(',reqBody,'):',res);
    if (!res.ok) {
        console.log('Fetch error:',res);
        showMessage(msgDom, res.statusText, 'Fetch Error');
        return null;
    }
    res = await res.json();
    console.debug('fetch(',reqBody,').json:',res);
    if (res && res.error) {
        console.log('API error:',res);
        showMessage(msgDom, res.error, 'API Error');
        return res;
    }
    showMessage(msgDom, null, null); //clear previous error message
    return res;
}

/////// Other utilities

function eventPromise(dom, eventName) {
    return new Promise(resolve =>{
        dom.addEventListener(eventName, event =>{ resolve(event); }, {once:true})
    })
}

function showMessage(dom, msg, msgType){
    if (!msg) {
        dom.innerHTML = '';
        dom.style.display = 'none';
        dom.style.color = 'black';
    } else {
        dom.innerHTML = msgType + (typeof(msg)==='string'? ': '+msg: '!');
        dom.style.display = 'block';
        dom.style.color = 'brown';
    }


    /* Chrome console error messages: Failed ... net:ERR_* ...
    - Issue: those messages are browser's native and **cannot be controlled** by javascript (even they are properly catched/handlled in the script).
    - Chorme's solution: console config > check "Hide network"
    - Note that `dimg.src = freq` is actually a GET request in disguise!
    */
}


