function nodeToMarkdown(node, isHeading = false, indent = '') {
    if (node.nodeType === Node.TEXT_NODE) {
        let text = node.textContent;
        if (!text.trim()) return text.includes('\n') ? '\n' : ' ';
        return text.replace(/\s+/g, ' ');
    }
    if (node.nodeType !== Node.ELEMENT_NODE) return '';

    const tagName = node.tagName.toLowerCase();
    
    if (tagName === 'script' || tagName === 'style' || tagName === 'svg' || tagName === 'nav' || tagName === 'header' || tagName === 'footer') return '';

    let prefix = '';
    let suffix = '';
    let currentIsHeading = isHeading;
    let nextIndent = indent;

    if (tagName === 'h1') { prefix = '\n# '; suffix = '\n'; currentIsHeading = true; }
    else if (tagName === 'h2') { prefix = '\n## '; suffix = '\n'; currentIsHeading = true; }
    else if (tagName === 'h3') { prefix = '\n### '; suffix = '\n'; currentIsHeading = true; }
    else if (tagName === 'h4') { prefix = '\n#### '; suffix = '\n'; currentIsHeading = true; }
    else if (tagName === 'h5') { prefix = '\n##### '; suffix = '\n'; currentIsHeading = true; }
    else if (tagName === 'h6') { prefix = '\n###### '; suffix = '\n'; currentIsHeading = true; }
    else if (tagName === 'p' || tagName === 'div') { 
        if (tagName === 'p' || (tagName === 'div' && (node.className.includes('content') || node.className.includes('text')))) { 
            prefix = '\n\n' + indent; suffix = '\n'; 
        }
    }
    else if (tagName === 'strong' || tagName === 'b') { 
        if (!currentIsHeading) { prefix = ' **'; suffix = '** '; } 
    }
    else if (tagName === 'em' || tagName === 'i') { 
        if (!currentIsHeading) { prefix = ' *'; suffix = '* '; } 
    }
    else if (tagName === 'ul' || tagName === 'ol') {
        if (node.parentNode && (node.parentNode.tagName.toLowerCase() === 'li')) {
            nextIndent += '    ';
        }
    }
    else if (tagName === 'li') { 
        const parent = node.parentNode;
        if (parent && parent.tagName.toLowerCase() === 'ol') {
            const index = Array.from(parent.children).indexOf(node) + 1;
            prefix = `\n${indent}${index}. `;
        } else {
            prefix = `\n${indent}- `;
        }
        suffix = '\n';
    }
    else if (tagName === 'br') { return '\n' + indent; }

    if (tagName === 'a') {
        prefix = '[';
    }

    let content = '';
    for (let child of node.childNodes) {
        content += nodeToMarkdown(child, currentIsHeading, nextIndent);
    }

    if (tagName === 'a') {
        let href = node.getAttribute('href') || '';
        suffix = `](${href})`;
    }

    if (tagName === 'strong' || tagName === 'b' || tagName === 'em' || tagName === 'i') {
        content = content.trim();
    }

    return prefix + content + suffix;
}

// Entry point:
// const mainEl = document.querySelector('main') || document.querySelector('.site-content') || document.body;
// return nodeToMarkdown(mainEl);

// Entry point:
// const mainEl = document.querySelector('main') || document.body;
// return nodeToMarkdown(mainEl);