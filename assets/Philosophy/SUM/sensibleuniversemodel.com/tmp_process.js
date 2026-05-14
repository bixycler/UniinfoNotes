const { processExtractedMarkdown } = require('./process_extracted.js');
const fs = require('fs');

const inputFile = '/home/dinhlx/.local/share/opencode/tool-output/tool_e2537d261001NCkibN0jY3scbC';
const outputFile = '/home/dinhlx/source/UniinfoNotes/assets/Philosophy/SUM/sensibleuniversemodel.com/psx-archive/psx-espanol.md';

processExtractedMarkdown(inputFile, outputFile);
console.log('Processed psx-espanol.md');