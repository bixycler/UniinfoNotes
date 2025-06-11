var listDiv = null;

function removeElements() {
    let users = document.querySelectorAll('.userpic_wrap, .from_name');
    for (let e of users) { e.remove(); }
}

function groupMessagesByDay() {
    let days = listDiv.querySelectorAll('.message.service');
    for (let day of days) {
        console.log("Processing day: ", day);
        // wrap the date in an anchor tag
        let date = day.children[0];
        let dateLink = document.createElement("a");
        dateLink.appendChild(date);
        dateLink.href = '#'+day.id; dateLink.title = day.id;
        dateLink.onclick = 'copyToClipboard("'+day.id+'");' + 'showToast("Copied to clipboard: '+day.id+'");';
        day.appendChild(dateLink);
    }
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