var listDiv = null;

function Init() {
    console.log("=== INIT ===");
    listDiv = document.querySelectorAll('.history').item(0);
    console.log("List div: ", listDiv);
    //CheckLocation(); //
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
    // Note: must manually move Downloads/list.html to the current folder, then click the link to open it
    linkExtractedContent.href = 'list.html';
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
                messages.append(splitParagraphs(fragment)); // > splitItems1() > splitItems2()
                    // Text format:
                    // Paragraph 1
                    // - Item 1
                    // - Item 2
                    //
                    // Paragraph 2
                    // - Item 3
                    //   + Subitem 3.1
                    //   + Subitem 3.2
                    // - Item 4
                    //   continuation of Item 4
                    //   - Subitem 4.1
                    //   - Subitem 4.1
            }
        }
    }
}

// Split the text content into <li> nodes by double newlines (<br><br>)
function splitParagraphs(text) {
    let fragment = document.createDocumentFragment();
    let li = document.createElement("li");
    let br = null, brCount = 0;
    for (let node of [...text.childNodes]) { // Use [...] to capture a snapshot of the *live* NodeList
        if (node.nodeName === "BR") { // Count consecutive <br>s
            brCount++; br = node;
        } else {
            if (brCount === 1) { // Single <br> is just a line break, keep it
                li.appendChild(br);
            } else if (brCount > 1) { // More than one <br> means a paragraph break
                if (li.childNodes.length) fragment.append(splitItems1(li));
                li = document.createElement("li");
            }
            li.appendChild(node); brCount = 0; br = null;
        }
    }
    if (li.childNodes.length) fragment.append(splitItems1(li)); // wrap up the last paragraph

    return fragment;
}

// Get the item marker from a text node
// !marker: non-item node
// marker[0]: matched marker text
// marker[1]: (-) 1st level unordered item
// marker[2]: (#) 1st level ordered item
// marker[3]: 2nd level unordered item: ( -), ( +), ( *)
function itemMarker(node) {
    if (!node || node.nodeName !== '#text') return null; // Only text nodes can be items
    let marker = node.textContent.match(/^\n*(\-)\s+|^\n*(\d+)\.\s+|^\s+([-+*])\s+/); // Match item markers: [- ], [#. ], [ - ], [ + ], [ * ]
        // Tricky: `^\n*` to deal with the case that *sometimes* browsers include newlines in the text nodes
    return marker;
}
// Check if the node is a 1st level item
function isItem1(node) {
    let marker = itemMarker(node);
    return marker && (marker[1] || marker[2]);
}
// Check if the node is a 2nd level item
function isItem2(node) {
    let marker = itemMarker(node);
    return marker && (marker[3]);
}

// Split the `-` `#.` 1st level items into <li> nodes
function splitItems1(text) {
    let fragment = document.createDocumentFragment(), parent = fragment;
    let li = document.createElement("li");
    if (text.childNodes.length === 0) return fragment; // No content to process
    let firstNode = text.firstChild;
    let leadingText = !isItem1(firstNode); // Non-item leading text
    let newline = true, br = null; // Track the start of a new line
    for (let node of [...text.childNodes]) { // Use [...] for a *static* node list
        if (node.nodeName === 'BR') { br = node; newline = true; firstline = false; continue; }
        if (newline && isItem1(node)) { // New item line
            if (li.childNodes.length) parent.append(splitItems2(li)); // Flush the previous <li>
            if (leadingText) { // After the leading text, wrap the following items in a <ul>
                parent = document.createElement("ul"); li.appendChild(parent);
                leadingText = false; // Only one <ul> for all items
            }
            li = document.createElement("li");
            // Remove the marker of unordered item
            let marker = itemMarker(node);
            li.textContent = node.textContent.slice(marker[1] ? marker[0].length : 0);
        } else {
            if (br && firstNode != node) li.appendChild(br); // If it's a non-item new line, keep <br>
            li.appendChild(node);
        }
        newline = false; br = null;
        if (node.nodeName === 'PRE') { newline = true; firstline = false; }
    }
    if (li.childNodes.length) parent.append(splitItems2(li)); // Wrap up the last item
    return fragment;
}

// Split the `+` `*` 2nd level items into <li> nodes
function splitItems2(oli) {
    let ul = null, li = null;
    let newline = true, br = null; // Track the start of a new line
    for (let node of [...oli.childNodes]) { // Use [...] for a *static* node list
        if (node.nodeName === 'BR') { br = node; newline = true; continue; }
        if (newline && isItem2(node)) { // New item line
            if (!ul) { ul = document.createElement("ul"); oli.appendChild(ul); }
            if (li && li.childNodes.length) ul.append(li); // Flush the previous <li>
            li = document.createElement("li");
            // Remove the marker of unordered item
            li.textContent = node.textContent.slice(itemMarker(node)[0].length);
            node.remove(); if (br) { br.remove(); br = null; }
        } else if (li) {
            if (br) { li.appendChild(br); br = null; } // If it's a non-item new line, keep <br>
            li.appendChild(node);
        }
        newline = false; br = null;
        if (node.nodeName === 'PRE') { newline = true; }
    }
    if (li && li.childNodes.length) ul.append(li); // Wrap up the last item
    return oli;
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