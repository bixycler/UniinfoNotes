const fs = require('fs');
const path = require('path');

const index = JSON.parse(fs.readFileSync('index.json', 'utf8'));
const mindJunglePath = path.resolve('pages/Mind Jungle.md');
const mindJungleContent = fs.readFileSync(mindJunglePath, 'utf8').split('\n');

console.log('Analyzing index.json for anomalies...');

let count = 0;
for (const uuid in index) {
    const entry = index[uuid];

    // Check for Mind Jungle entries with null outputLine
    if (entry.sourceFile && entry.sourceFile.endsWith('Mind Jungle.md') && entry.outputLine === null) {
        console.log(`\nUUID: ${uuid}`);
        console.log(`Title: ${entry.title}`);
        console.log(`Source Line: ${entry.sourceLine}`);

        // Verify content at source line
        if (entry.sourceLine) {
            const lineContent = mindJungleContent[entry.sourceLine - 1];
            console.log(`Content at line ${entry.sourceLine}: "${lineContent}"`);
            if (!lineContent.includes(uuid)) {
                console.log('WARNING: UUID not found in source line!');
            }
        }
        count++;
        if (count >= 10) break; // Limit output
    }
}

if (count === 0) {
    console.log('No Mind Jungle entries with null outputLine found.');
}
