/**
 * Recursively converts a DOM node to Markdown.
 * @param {Node} node - The DOM node to convert.
 * @param {boolean} isHeading - Flag to track if the current context is within a heading.
 * @param {string} indent - Current indentation string for nested lists.
 * @returns {string} The Markdown representation of the node.
 */
function nodeToMarkdown(node, isHeading = false, indent = '') {
    // 1. Text Node Handling: Collapse multiple spaces into one.
    if (node.nodeType === Node.TEXT_NODE) {
        let text = node.textContent;
        if (!text.trim()) return text.includes('\n') ? '\n' : ' ';
        return text.replace(/\s+/g, ' ');
    }

    // 2. Element Node Handling: Only process standard elements.
    if (node.nodeType !== Node.ELEMENT_NODE) return '';

    const tagName = node.tagName.toLowerCase();
    
    // 3. Exclude Boilerplate & Non-Content Elements
    // We exclude 'header', 'footer', and 'nav' to strip the site-wide menu and branding.
    if (tagName === 'script' || tagName === 'style' || tagName === 'svg' || 
        tagName === 'nav' || tagName === 'header' || tagName === 'footer') return '';

    let prefix = '';
    let suffix = '';
    let currentIsHeading = isHeading;
    let nextIndent = indent;

    // 4. Heading Mapping (h1 - h6)
    // We map heading levels and set currentIsHeading to true to prevent nested bolding.
    if (/^h[1-6]$/.test(tagName)) { 
        prefix = '\n' + '#'.repeat(parseInt(tagName[1])) + ' '; 
        suffix = '\n'; 
        currentIsHeading = true; 
    }
    // 5. Block Elements (p, div)
    // We add double newlines to separate paragraphs.
    else if (tagName === 'p' || tagName === 'div') { 
        if (tagName === 'p' || (tagName === 'div' && (node.className.includes('content') || node.className.includes('text')))) { 
            prefix = '\n\n' + indent; suffix = '\n'; 
        }
    }
    // 6. Inline Formatting (strong, em)
    // We add padding spaces and markers, but only if not already in a heading.
    else if (tagName === 'strong' || tagName === 'b') { 
        if (!currentIsHeading) { prefix = ' **'; suffix = '** '; } 
    }
    else if (tagName === 'em' || tagName === 'i') { 
        if (!currentIsHeading) { prefix = ' *'; suffix = '* '; } 
    }
    // 7. List Container Handling (ul, ol)
    // If we enter a nested list, we increase the indentation for children.
    else if (tagName === 'ul' || tagName === 'ol') {
        if (node.parentNode && (node.parentNode.tagName.toLowerCase() === 'li')) {
            nextIndent += '    ';
        }
    }
    // 8. List Item Handling (li)
    // Distinguish between ordered (1.) and unordered (- ) lists.
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
    // 9. Manual Line Breaks
    else if (tagName === 'br') { return '\n' + indent; }

    // 10. Link Formatting
    if (tagName === 'a') { prefix = '['; }

    // 11. Recursive Processing
    // Collect all child content using the updated context (isHeading, indent).
    let content = '';
    for (let child of node.childNodes) {
        content += nodeToMarkdown(child, currentIsHeading, nextIndent);
    }

    // 12. Link Finalization
    if (tagName === 'a') { 
        suffix = `](${node.getAttribute('href') || ''})`; 
    }

    // 13. Formatting Cleanup
    // Trim inner spaces of bold/italic content to satisfy the "no enclosing spaces" requirement.
    if (/^(strong|b|em|i)$/.test(tagName)) { 
        content = content.trim(); 
    }

    return prefix + content + suffix;
}

// Entry point:
// const mainEl = document.querySelector('main') || document.body;
// return nodeToMarkdown(mainEl);