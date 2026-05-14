const fs = require('fs');

function processExtractedMarkdown(inFile, outFile) {
    let content = fs.readFileSync(inFile, 'utf8');

    const jsonStrMatch = content.match(/```json\n([\s\S]*?)\n```/);
    if (jsonStrMatch && jsonStrMatch[1]) {
        try {
            let md = JSON.parse(jsonStrMatch[1]);
            
            // Clean up multi-line bold/italic
            // Regex to find bold/italic blocks that contain multiple newlines and fix them
            // Prioritize *** then ** then * and ensure they aren't whitespace-only
            md = md.replace(/(\*\*\*|\*\*|\*)(?=\S)([\s\S]*?\S)\1/g, (match, p1, p2) => {
                // If it contains newlines, split it and apply bold/italic to each line
                if (p2.includes('\n')) {
                    return p2.split('\n').map(line => {
                        const trimmed = line.trim();
                        return trimmed ? `${p1}${trimmed}${p1}` : '';
                    }).join('\n');
                }
                return `${p1}${p2.trim()}${p1}`;
            });

            // Clean up markdown: remove excessive newlines
            md = md.replace(/\n{3,}/g, '\n\n');
            
            // Fix double spacing around bold/italic introduced by script
            md = md.replace(/ \*\*/g, ' **').replace(/\*\* /g, '** ');
            md = md.replace(/ \*/g, ' *').replace(/\* /g, '* ');

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

module.exports = { processExtractedMarkdown };
// processExtractedMarkdown('input.txt', 'output.md');