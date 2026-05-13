function nodeToMarkdown(node) {
    if (node.nodeType === Node.TEXT_NODE) {
        let text = node.textContent;
        // Only collapse spaces, don't completely strip them unless empty
        if (!text.trim()) return text.includes('\n') ? '\n' : ' ';
        return text.replace(/\s+/g, ' ');
    }
    if (node.nodeType !== Node.ELEMENT_NODE) return '';

    const tagName = node.tagName.toLowerCase();
    
    // Exclude navigation bars, headers, footers if we want pure content, 
    // though the prompt said "map the structure of headings and content" and includes Nav structure.
    // Let's exclude header/footer to avoid boilerplate, but if they are inside <main> they might be relevant.
    if (tagName === 'script' || tagName === 'style' || tagName === 'svg' || tagName === 'nav') return '';

    let prefix = '';
    let suffix = '';

    if (tagName === 'h1') { prefix = '\n# '; suffix = '\n'; }
    else if (tagName === 'h2') { prefix = '\n## '; suffix = '\n'; }
    else if (tagName === 'h3') { prefix = '\n### '; suffix = '\n'; }
    else if (tagName === 'h4') { prefix = '\n#### '; suffix = '\n'; }
    else if (tagName === 'h5') { prefix = '\n##### '; suffix = '\n'; }
    else if (tagName === 'h6') { prefix = '\n###### '; suffix = '\n'; }
    else if (tagName === 'p' || tagName === 'div') { 
        if (tagName === 'p') { prefix = '\n\n'; suffix = '\n'; }
    }
    else if (tagName === 'strong' || tagName === 'b') { prefix = '**'; suffix = '**'; }
    else if (tagName === 'em' || tagName === 'i') { prefix = '*'; suffix = '*'; }
    else if (tagName === 'li') { prefix = '\n- '; suffix = '\n'; }
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

    return prefix + content + suffix;
}

// Entry point:
// const mainEl = document.querySelector('main') || document.body;
// return nodeToMarkdown(mainEl);