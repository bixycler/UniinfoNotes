
/////// DOMs

/* // getElementById() is redundant!
const getBlockCtrl = document.getElementById("getBlockCtrl");
//*/

/////// Events
getBlockId.addEventListener("input", (e)=>{getBlock(false)});
getBlockRefetch.addEventListener("click", (e)=>{e.preventDefault(); getBlock(true);});

//window.addEventListener("DOMContentLoaded", loadPage);

/////// Global data
var blockId = '';


/////// Functions

async function getBlock(forced) {
    // prepocess block id
    let id = getBlockId.value.trim().replaceAll('(','').replaceAll(')','');
    if (!forced && id === blockId) { return; } else { blockId = id; }
    let iid = Number(id); if (!isNaN(iid)) { id = iid; }

    // call logseq.Editor.getBlock
    let req = structuredClone(RequestBody);
    req.method = 'logseq.Editor.getBlock';
    req.args[0] = id;
    let res = await logseqQuery(req, getBlockMsg);
    if (res instanceof Error) { return; }
    //console.debug('Block result:',res);
    if (!res) {
        // fall back to getPage
        req.method = 'logseq.Editor.getPage';
        res = await logseqQuery(req, getBlockMsg);
        //console.debug('Page result:',res);
        if (!res) {
            showMessage(getBlockMsg, 'No block/page/file with id: '+id, 'API Error');
            return;
        }
    }

    // display result
    let resType = 'block'; getBlockResContentType.innerHTML = '';
    if (res.originalName) {
        resType = 'page';
        getBlockResContentType.innerHTML = `[${resType}: ${res.originalName}]`; delete res.originalName;
    }
    if (res.path) {
        resType = 'file';
        getBlockResContentType.innerHTML = `[${resType}: ${res.path}]`; delete res.path;
    }
    if (res.content) {
        let cm = splitContentMeta(res.content); delete res.content;
        getBlockResContent.value = cm.content;
        getBlockResMeta.value = cm.meta;
    } else { getBlockResContent.value = ''; getBlockResMeta.value = ''; }
    getBlockResId.value = res.id ? res.id : ''; delete res.id;
    getBlockResUuid.value = res.uuid ? res.uuid : ''; delete res.uuid;
    if (res.parent) { getBlockResParent.value = res.parent.id; delete res.parent;
    } else if (res.file) { getBlockResParent.value = res.file.id; delete res.file;
    } else { getBlockResParent.value = ''; }
    let refs = '';
    if (res.refs) {
        refs = res.refs.length+': ';
        for (let id of res.refs) {
            refs += id.id+' ';
        }
    }
    getBlockResRefs.value = refs; delete res.refs; delete res.pathRefs;
    getBlockResCreated.value = res.createdAt ? new Date(res.createdAt).toUTCString() : ''; delete res.createdAt;
    if (res.updatedAt) {
        getBlockResUpdated.value = new Date(res.updatedAt).toUTCString(); delete res.updatedAt;
    } else if (res.lastModifiedAt) {
        getBlockResUpdated.value = res.lastModifiedAt; delete res.lastModifiedAt;
    } else { getBlockResUpdated.value = ''; }
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
