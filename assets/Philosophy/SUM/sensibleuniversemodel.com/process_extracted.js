const fs = require('fs');

function processExtractedMarkdown(inFile, outFile) {
    let content = fs.readFileSync(inFile, 'utf8');

    const jsonStrMatch = content.match(/```json\n([\s\S]*?)\n```/);
    if (jsonStrMatch && jsonStrMatch[1]) {
        try {
            let md = JSON.parse(jsonStrMatch[1]);
            
            // 1. Clean up multi-line bold/italic
            // Process longest markers first (triple, then double, then single)
            md = md.replace(/(\*\*\*|\*\*|\*)([\s\S]*?)\1/g, (match, p1, p2) => {
                if (p2.includes('\n')) {
                    return p2.split('\n').map(line => {
                        const trimmed = line.trim();
                        return trimmed ? `${p1}${trimmed}${p1}` : line;
                    }).join('\n');
                }
                return `${p1}${p2.trim()}${p1}`;
            });

            // 2. Clean up markdown: remove excessive newlines
            md = md.replace(/\n{3,}/g, '\n\n');
            
            // 3. Fix spacing around markers: Ensure at least one space if touching a word char
            md = md.replace(/(\w)(\*\*|\*)/g, '$1 $2');
            md = md.replace(/(\*\*|\*)(\w)/g, '$1 $2');
            
            // 4. Remove extra spaces inside markers (e.g. "** text **" -> "**text**")
            md = md.replace(/(\*\*|\*)\s+/g, '$1');
            md = md.replace(/\s+(\*\*|\*)/g, '$1');

            // 5. Remove trailing spaces on lines
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