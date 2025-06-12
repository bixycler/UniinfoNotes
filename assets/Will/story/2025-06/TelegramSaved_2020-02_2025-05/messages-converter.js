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
                for (let node of text.childNodes) fragment.appendChild(node.cloneNode(true));
                messages.append(splitParagraphs(fragment));
            }
        }
    }
}

// Split the text content into <li> nodes by double newlines
function splitParagraphs(text) {
    // split the list by double newlines
    let fragment = document.createDocumentFragment();
    let li = document.createElement("li");
    let brCount = 0;
    for (let node of text.childNodes) { // split by double <br>s into groups
        if (node.nodeName === "BR") { // consecutive <br>s
            brCount++;
            if (brCount >= 2) {
                if (li.length) fragment.append(splitItemsN(li));
                li = document.createElement("li"); brCount = 0;
            }
        } else {
            if (brCount > 0) {
                // Single <br> is just a line break, keep in group
                li.push(document.createElement("br"));
                brCount = 0;
            }
            li.push(node);
        }
    }
    if (li.length) groups.push(li); // wrap up the last group

    return fragment;
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