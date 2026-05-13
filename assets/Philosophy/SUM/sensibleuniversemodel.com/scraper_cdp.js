function nodeToMarkdown(node) {
    if (node.nodeType === Node.TEXT_NODE) {
        let text = node.textContent;
        if (!text.trim()) return text.includes('\n') ? '\n' : ' ';
        return text.replace(/\s+/g, ' ');
    }
    if (node.nodeType !== Node.ELEMENT_NODE) return '';

    const tagName = node.tagName.toLowerCase();
    
    if (tagName === 'script' || tagName === 'style' || tagName === 'svg' || tagName === 'nav') return '';

    let prefix = '';
    let suffix = '';
    let isHeading = false;

    if (tagName === 'h1') { prefix = '\n# '; suffix = '\n'; isHeading = true; }
    else if (tagName === 'h2') { prefix = '\n## '; suffix = '\n'; isHeading = true; }
    else if (tagName === 'h3') { prefix = '\n### '; suffix = '\n'; isHeading = true; }
    else if (tagName === 'h4') { prefix = '\n#### '; suffix = '\n'; isHeading = true; }
    else if (tagName === 'h5') { prefix = '\n##### '; suffix = '\n'; isHeading = true; }
    else if (tagName === 'h6') { prefix = '\n###### '; suffix = '\n'; isHeading = true; }
    else if (tagName === 'p' || tagName === 'div') { 
        if (tagName === 'p') { prefix = '\n\n'; suffix = '\n'; }
    }
    else if (tagName === 'strong' || tagName === 'b') { 
        if (!isHeading) { prefix = ' **'; suffix = '** '; } 
    }
    else if (tagName === 'em' || tagName === 'i') { 
        if (!isHeading) { prefix = ' *'; suffix = '* '; } 
    }
    else if (tagName === 'li') { 
        // Handle numbered lists vs bullet lists
        const parent = node.parentNode;
        if (parent && parent.tagName.toLowerCase() === 'ol') {
            const index = Array.from(parent.children).indexOf(node) + 1;
            prefix = `\n${index}. `;
        } else {
            prefix = '\n- ';
        }
        suffix = '\n';
    }
    else if (tagName === 'br') { return '\n'; }

    if (tagName === 'a') {
        prefix = '[';
    }

    let content = '';
    for (let child of node.childNodes) {
        content += nodeToMarkdown(child);
    }

    if (tagName === 'a') {
        let href = node.getAttribute('href') || '';
        suffix = `](${href})`;
    }

    // Clean up content for bold/italic: trim inner spaces
    if (tagName === 'strong' || tagName === 'b' || tagName === 'em' || tagName === 'i') {
        content = content.trim();
    }

    return prefix + content + suffix;
}

// Entry point:
// const mainEl = document.querySelector('main') || document.body;
// return nodeToMarkdown(mainEl);