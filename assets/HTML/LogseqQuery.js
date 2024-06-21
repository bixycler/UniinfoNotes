
/////// DOMs

/* // getElementById() is redundant!
const getBlockCtrl = document.getElementById("getBlockCtrl");
//*/

/////// Events
getBlockId.addEventListener("input", (e)=>{getBlock(false)});
getBlockRefetch.addEventListener("click", (e)=>{e.preventDefault(); getBlock(true);});

//window.addEventListener("DOMContentLoaded", loadPage);

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

var blockId = '';


/////// Functions

async function getBlock(forced) {
    // prepocess block id
    let id = getBlockId.value.trim().replaceAll('(','').replaceAll(')','');
    if (!forced && id === blockId) { return; } else { blockId = id; }
    let iid = Number(id); if (!isNaN(iid)) { id = iid; }

    // call logseq.Editor.getBlock
    let reqBody = structuredClone(RequestBody);
    reqBody.method = 'logseq.Editor.getBlock';
    reqBody.args[0] = id;
    let res = await fetch(ApiEndpoint, {method:'POST', headers:RequestHeaders,
        body: JSON.stringify(reqBody) });
    //console.debug('fetch(',reqBody,'):',res);
    if (!res.ok) {
        console.log('Fetch error:',res);
        showMessage(getBlockMsg, res.statusText, 'Error');
        return;
    } else {
        getBlockMsg.innerHTML = '';
        getBlockMsg.style.display = 'none';
    }

    // display result
    res = await res.json();
    //console.debug('result:',res);
    if (!res) {
        showMessage(getBlockMsg, 'No result!', 'Error');
        return;
    }
    let cm = splitContentMeta(res.content); delete res.content;
        getBlockResContent.value = cm.content;
        getBlockResMeta.value = cm.meta;
    getBlockResId.value = res.id; delete res.id;
    getBlockResUuid.value = res.uuid; delete res.uuid;
    getBlockResParent.value = res.parent.id; delete res.parent;
    let backRefs = '';
    if (res.refs) {
        backRefs = res.refs.length+': ';
        for (let id of res.refs) {
            backRefs += id.id+' ';
        }
    }
    getBlockResRefs.value = backRefs; delete res.refs; delete res.pathRefs;
    if (res.createdAt && res.updatedAt) {
        getBlockResCreated.value = new Date(res.createdAt).toUTCString(); delete res.createdAt;
        getBlockResUpdated.value = new Date(res.updatedAt).toUTCString(); delete res.updatedAt;
    } else { getBlockResCreated.value = ''; getBlockResUpdated.value = ''; }
    console.debug('Result other info:',res);
    getBlockResJson.value = JSON.stringify(res, null, 2);

}

function splitContentMeta(content) {
    let res = {content:'', meta:''};
    let metaPos = content.search(/::|:LOGBOOK:/);
    if (metaPos < 0) { metaPos = content.length; }
    let c = content.slice(0, metaPos);
    let metaLnPos = c.lastIndexOf('\n');
    if (metaLnPos < 0) { metaLnPos = c.lastIndexOf(' '); }
    if (metaLnPos < 0) { metaLnPos = metaPos == content.length ? metaPos : 0; }
    res.content = content.slice(0, metaLnPos);
    res.meta = content.slice(metaLnPos, content.length);
    return res;
}

/////// utilities

function eventPromise(dom, eventName) {
    return new Promise(resolve =>{
        dom.addEventListener(eventName, event =>{ resolve(event); }, {once:true})
    })
}

function showMessage(dom, msg, msgType){
    dom.innerHTML = msgType + (typeof(msg)==='string'? ': '+msg: '!');
    dom.style.display = 'block';
    dom.style.color = 'brown';
}


