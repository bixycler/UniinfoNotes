const fs = require('fs');

function processExtractedMarkdown(inFile, outFile) {
    let content = fs.readFileSync(inFile, 'utf8');

    const jsonStrMatch = content.match(/```json\n([\s\S]*?)\n```/);
    if (jsonStrMatch && jsonStrMatch[1]) {
        try {
            let md = JSON.parse(jsonStrMatch[1]);
            
            // Clean up markdown: remove excessive newlines
            md = md.replace(/\n{3,}/g, '\n\n');
            
            // Remove trailing spaces on lines
            md = md.split('\n').map(line => line.trimEnd()).join('\n');
            
            fs.writeFileSync(outFile, md.trim() + '\n');
            console.log("Successfully wrote output");
        } catch(e) {
            console.error("Failed to parse JSON:", e);
        }
    } else {
        console.error("Could not find json block in the output file");
    }
}

// processExtractedMarkdown('input.txt', 'output.md');