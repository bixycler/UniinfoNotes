const fs = require('fs');

function processExtractedMarkdown(content, outFile, isRawString = false) {
    let md;
    try {
        if (!isRawString) {
            let fileContent = fs.readFileSync(content, 'utf8');
            const jsonStrMatch = fileContent.match(/```json\n([\s\S]*?)\n```/);
            if (jsonStrMatch && jsonStrMatch[1]) {
                md = JSON.parse(jsonStrMatch[1]);
            } else {
                console.error("Could not find json block in the output file");
                return;
            }
        } else {
            md = content;
        }

        // Clean up multi-line bold/bold-italic
        md = md.replace(/(?<!\\)(\*\*\*|\*\*|___|__)(?=\S)([\s\S]*?\S)(?<!\\)\1/g, (match, p1, p2) => {
            if (p2.includes('\n')) {
                return p2.split('\n').map(line => {
                    const trimmed = line.trim();
                    return trimmed ? `${p1}${trimmed}${p1}` : '';
                }).join('\n');
            }
            return `${p1}${p2.trim()}${p1}`;
        });

        // Clean up single-line italic
        md = md.replace(/(?:^|(?<=\s))(?<!\\)(_|\*)(?=\S)([^\n]*?\S)(?<!\\)\1(?=\s|$|[.,;:!])/g, (match, p1, p2) => {
            return `${p1}${p2.trim()}${p1}`;
        });

        // Clean up markdown: remove excessive newlines
        md = md.replace(/\n{3,}/g, '\n\n');
        
        // Fix double spacing around bold/italic introduced by script
        md = md.replace(/ \*\*/g, ' **').replace(/\*\* /g, '** ');
        md = md.replace(/ _/g, ' _').replace(/_ /g, '_ ');
        md = md.replace(/ \*/g, ' *').replace(/\* /g, '* ');

        // Remove trailing spaces on lines
        md = md.split('\n').map(line => line.trimEnd()).join('\n');
        
        fs.writeFileSync(outFile, md.trim() + '\n');
        console.log("Successfully wrote output");
    } catch(e) {
        console.error("Error processing markdown:", e);
    }
}

module.exports = { processExtractedMarkdown };