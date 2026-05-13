const fs = require('fs');

/**
 * Recursively converts a DOM node to Markdown.
 */
function nodeToMarkdown(node, isHeading = false, indent = '') {
    if (node.nodeType === Node.TEXT_NODE) {
        let text = node.textContent;
        if (!text.trim()) return text.includes('\n') ? '\n' : ' ';
        return text.replace(/\s+/g, ' ');
    }
    if (node.nodeType !== Node.ELEMENT_NODE) return '';

    const tagName = node.tagName.toLowerCase();
    if (tagName === 'script' || tagName === 'style' || tagName === 'svg' || 
        tagName === 'nav' || tagName === 'header' || tagName === 'footer') return '';

    let prefix = '';
    let suffix = '';
    let currentIsHeading = isHeading;
    let nextIndent = indent;

    if (/^h[1-6]$/.test(tagName)) { 
        prefix = '\n' + '#'.repeat(parseInt(tagName[1])) + ' '; 
        suffix = '\n'; 
        currentIsHeading = true; 
    }
    else if (tagName === 'p' || tagName === 'div') { 
        if (tagName === 'p' || (tagName === 'div' && (node.className.includes('content') || node.className.includes('text')))) { 
            prefix = '\n\n' + indent; suffix = '\n'; 
        }
    }
    else if (tagName === 'strong' || tagName === 'b') { 
        if (!currentIsHeading) { prefix = ' \n\n**'; suffix = '**\n\n '; } 
    }
    else if (tagName === 'em' || tagName === 'i') { 
        if (!currentIsHeading) { prefix = ' \n\n*'; suffix = '*\n\n '; } 
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

    if (tagName === 'a') { prefix = '['; }

    let content = '';
    for (let child of node.childNodes) {
        content += nodeToMarkdown(child, currentIsHeading, nextIndent);
    }

    if (tagName === 'a') { suffix = `](${node.getAttribute('href') || ''})`; }

    if (/^(strong|b|em|i)$/.test(tagName)) { content = content.trim(); }

    return prefix + content + suffix;
}
