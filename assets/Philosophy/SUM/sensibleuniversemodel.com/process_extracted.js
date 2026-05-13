const fs = require('fs');

function processExtractedMarkdown(inFile, outFile) {
    let content = fs.readFileSync(inFile, 'utf8');

    const jsonStrMatch = content.match(/```json\n([\s\S]*?)\n```/);
    if (jsonStrMatch && jsonStrMatch[1]) {
        try {
            let md = JSON.parse(jsonStrMatch[1]);
            
            // 1. Fix multi-line bold/italic by splitting into separate lines
            // Process longest markers first (triple, then double, then single)
            md = md.replace(/(\*\*\*|\*\*|\*)([\s\S]*?)\1/g, (match, p1, p2) => {
                if (p2.includes('\n')) {
                    // Split it and apply formatting to each line if there are multiple lines.
                    // If it's just one line with a newline at the end, treat it as single line.
                    const lines = p2.split('\n');
                    if (lines.filter(l => l.trim()).length > 1) {
                        return lines.map(line => {
                            const trimmed = line.trim();
                            return trimmed ? `${p1}${trimmed}${p1}` : line;
                        }).join('\n');
                    }
                }
                // When re-wrapping single line content, we ensure no inner spaces are added 
                // by trimming before wrapping.
                return `${p1}${p2.trim()}${p1}`;
            });

            // 2. Clean up markdown: remove excessive newlines
            md = md.replace(/\n{3,}/g, '\n\n');
            
            // 3. Fix spacing around markers: Ensure exactly one space if touching a word char
            md = md.replace(/(\w)(\*\*|\*)/g, '$1 $2');
            md = md.replace(/(\*\*|\*)(\w)/g, '$1 $2');
            
            // 4. Remove extra spaces INSIDE markers (e.g. "** text **" -> "**text**")
            md = md.replace(/(\*\*|\*)\s+/g, '$1');
            md = md.replace(/\s+(\*\*|\*)/g, '$1');
            
            // 5. Ensure space between adjacent bold/italic blocks
            md = md.replace(/(\*\*|\*)(\*\*|\*)/g, '$1 $2');

            // 6. Fix for short bold/italic lines being joined to previous lines
            md = md.replace(/([^\n])\n(\*\*|\*)/g, '$1\n\n$2');

            // 7. Remove trailing spaces on lines
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