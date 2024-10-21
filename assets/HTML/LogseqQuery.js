
/////// DOMs

/* // getElementById() is redundant!
const dbQueryCtrl = document.getElementById("dbQueryCtrl");
//*/

/////// Events
doQuery.addEventListener("click", (e)=>{e.preventDefault(); dbq(true);});

/////// Functions

async function dbq() {

    // call logseq.DB.q
    let req = structuredClone(RequestBody);
    req.method = 'logseq.DB.q';
    req.args[0] = query.value;
    let res = await logseqQuery(req, dbQueryMsg);
    if (res instanceof Error) { return; }
    console.debug('Query result:',res);

    // display result
    dbQueryResContent.value = JSON.stringify(res, null, 2);
}
