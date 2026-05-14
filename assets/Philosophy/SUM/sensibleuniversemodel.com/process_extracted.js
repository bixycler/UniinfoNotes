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

        // Clean up markdown: remove excessive newlines
        md = md.replace(/\n{3,}/g, '\n\n');
        
        // Remove trailing spaces on lines
        md = md.split('\n').map(line => line.trimEnd()).join('\n');
        
        fs.writeFileSync(outFile, md.trim() + '\n');
        console.log("Successfully wrote output");
    } catch(e) {
        console.error("Error processing markdown:", e);
    }
}

module.exports = { processExtractedMarkdown };