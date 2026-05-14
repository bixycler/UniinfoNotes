/**
 * Recursively converts a DOM node to Markdown.
 * @param {Node} node - The DOM node to convert.
 * @param {boolean} isHeading - Flag to track if the current context is within a heading.
 * @param {string} indent - Current indentation string for nested lists.
 * @returns {string} The Markdown representation of the node.
 */
function nodeToMarkdown(node, isHeading = false, indent = '') {
    // 1. Text Node Handling: Collapse multiple spaces into one.
    // Escape literal '*' and '_' to prevent them from being misinterpreted as Markdown markers.
    if (node.nodeType === Node.TEXT_NODE) {
        let text = node.textContent;
        if (!text.trim()) return text.includes('\n') ? '\n' : ' ';
        text = text.replace(/\s+/g, ' ');
        return text.replace(/[*_]/g, '\\$&');
    }

    // 2. Element Node Handling: Only process standard elements.
    if (node.nodeType !== Node.ELEMENT_NODE) return '';

    const tagName = node.tagName.toLowerCase();
    
    // 3. Exclude Boilerplate & Non-Content Elements
    // We exclude 'header', 'footer', and 'nav' to strip the site-wide menu and branding.
    // NOTE: For Jimdo-based sites, we also exclude custom jimdo-header and jimdo-nav components.
    if (tagName === 'script' || tagName === 'style' || tagName === 'svg' || 
        tagName === 'nav' || tagName === 'header' || tagName === 'footer' ||
        tagName === 'jimdo-header' || tagName === 'jimdo-nav' || tagName === 'aside') return '';

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
        if (tagName === 'p' || (tagName === 'div' && (String(node.className || '').includes('content') || String(node.className || '').includes('text')))) { 
            prefix = '\n\n' + indent; suffix = '\n'; 
        }
    }
    // 6. List Container Handling (ul, ol)
    // If we enter a nested list, we increase the indentation for children.
    else if (tagName === 'ul' || tagName === 'ol') {
        if (node.parentNode && (node.parentNode.tagName.toLowerCase() === 'li')) {
            nextIndent += '    ';
        }
    }
    // 7. List Item Handling (li)
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
    // 8. Manual Line Breaks
    else if (tagName === 'br') { return '\n' + indent; }

    // 9. Link Formatting
    if (tagName === 'a') { prefix = '['; }

    // 10. Recursive Processing
    // Collect all child content using the updated context (isHeading, indent).
    let content = '';
    for (let child of node.childNodes) {
        content += nodeToMarkdown(child, currentIsHeading, nextIndent);
    }

    // 11. Link Finalization
    if (tagName === 'a') { 
        suffix = `](${node.getAttribute('href') || ''})`; 
    }

    // 12. Inline Formatting (strong, em) with multi-line logic
    // We handle these AFTER children to split formatting across lines if content contains newlines.
    if (tagName === 'strong' || tagName === 'b' || tagName === 'em' || tagName === 'i') {
        content = content.trim();
        if (content) {
            const marker = (tagName === 'strong' || tagName === 'b') ? '**' : '_';
            if (!currentIsHeading) {
                if (content.includes('\n')) {
                    // Split by newline and wrap each non-empty line
                    return content.split('\n').map(line => {
                        const trimmed = line.trim();
                        return trimmed ? ` ${marker}${trimmed}${marker} ` : '';
                    }).join('\n');
                } else {
                    return ` ${marker}${content}${marker} `;
                }
            }
        }
    }

    return prefix + content + suffix;
}