var listDiv = null;

function Init() {
    console.log("=== INIT ===");
    listDiv = document.querySelectorAll('.history').item(0);
    console.log("List div: ", listDiv);
    //CheckLocation();
    removeElements();
    processMessagesByDay();
}

function DownloadExtractedContent() {
    const serializer = new XMLSerializer();
    const xmlString = serializer.serializeToString(extractedContent);
    const blob = new Blob([xmlString], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    linkExtractedContent.href = url;
    linkExtractedContent.click();
    URL.revokeObjectURL(url);
}

function removeElements() {
    let users = document.querySelectorAll('.userpic_wrap, .from_name');
    for (let e of users) { e.remove(); }
}

function processMessagesByDay() {
    let days = listDiv.querySelectorAll('.message.service');
    for (let day of days) {
        //console.log("Processing day: ", day);

        // wrap the date in an anchor tag
        let date = day.children[0];
        let dateLink = document.createElement("a");
        dateLink.appendChild(date);
        dateLink.href = '#'+day.id; dateLink.title = day.id;
        dateLink.onclick = ()=>{copyToClipboard(day.id);}
        day.appendChild(dateLink);

        // move next messages to this day div
        for( let nextSibling = day.nextElementSibling;
            nextSibling && nextSibling.classList.contains('message') && !nextSibling.classList.contains('service');
            nextSibling = day.nextElementSibling
        ){
            day.appendChild(nextSibling);
            // update the date text in format YYYY-MM-DD
            let datetime = nextSibling.querySelector('.date.details').title;
            let datetext = datetime.split(' ')[0].replace(/(\d*)\.(\d*)\.(\d*)/g, '$3-$2-$1');
            date.textContent = datetext;
        }

        // extract the content of this day
        let dayLi = document.createElement("li"); messageList.appendChild(dayLi);
        dayLi.textContent = date.textContent;
        let messages = document.createElement("ul"); dayLi.appendChild(messages);
        for (let message of day.children) {
            if (!message.classList.contains('message')) { continue; }
            let text = message.querySelector('.text');
            let image = message.querySelector('.photo_wrap');
            let file = message.querySelector('.media_file');
            if (image) {
                let li = document.createElement("li"); messages.appendChild(li);
                li.innerHTML = `<img src="${image.href}">`;
            }
            if (file) {
                let li = document.createElement("li"); messages.appendChild(li);
                let href = file.href;
                if(href) {
                    let filename = decodeURIComponent(href.split('/').pop());
                    li.innerHTML = `<b>[FILE]</b>: <a href="${href}">${filename}</a>`;
                } else {
                    let description = file.querySelector('.description');
                    description = description ? description.textContent : "File not available";
                    li.innerHTML = `<b>[FILE]</b>: [ERROR]: ${description}`;
                }
            }
            if (text) {
                let fragment = document.createDocumentFragment();
                for (let node of [...text.childNodes]) fragment.appendChild(node.cloneNode(deep = true));
                    // Use [...] and cloneNode() to not affect the original DOM
                messages.append(splitParagraphs(fragment));
            }
        }
    }
}

// Split the text content into <li> nodes by double newlines (<br><br>)
function splitParagraphs(text) {
    let fragment = document.createDocumentFragment();
    let li = document.createElement("li");
    let brCount = 0;
    for (let node of [...text.childNodes]) { // Use [...] to capture a snapshot of the *live* NodeList
        if (node.nodeName === "BR") { // Count consecutive <br>s
            brCount++;
        } else {
            if (brCount === 1) { // Single <br> is just a line break, keep it
                li.appendChild(document.createElement("br"));
            } else if (brCount > 1) { // More than one <br> means a paragraph break
                if (li.childNodes.length) fragment.append(splitItemsN(li));
                li = document.createElement("li");
            }
            li.appendChild(node); brCount = 0;
        }
    }
    if (li.childNodes.length) fragment.append(splitItemsN(li)); // wrap up the last paragraph

    return fragment;
}

// Split the `-` items into <li> nodes
function splitItemsN(text) {
    let fragment = document.createDocumentFragment(), parent = fragment;
    let li = document.createElement("li");
    for (let node of [...text.childNodes]) { // Use [...] for a *static* node list
        if (node.nodeName === '#text' && node.textContent[0] === '-') {
            // If the text starts with a dash, create a new <li> for it
            if (li.childNodes.length) parent.append(splitItemsP(li)); // flush the previous <li>
            li = document.createElement("li");
            li.textContent = node.textContent.slice(1).trim(); // Remove the dash and trim whitespace
        } else {
            li.appendChild(node);
        }
    }
    if (li.childNodes.length) fragment.append(splitItemsP(li));
    return fragment;
}

// Split the `+` items into <li> nodes
function splitItemsP(text) {
    return text; //DEBUG just return the node as is
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        console.log("Copied to clipboard: " + text);
        ShowToast("Copied to clipboard: " + text);
    }).catch(err => {
        console.error("Failed to copy: ", err);
        ShowToast("Failed to copy: " + err);
    });
}