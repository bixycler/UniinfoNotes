const { processExtractedMarkdown } = require('./process_extracted.js');
const fs = require('fs');

const inputFile = '/home/dinhlx/.local/share/opencode/tool-output/tool_e25299afb001zvTGRVVx1U7kIG';
const outputFile = '/home/dinhlx/source/UniinfoNotes/assets/Philosophy/SUM/sensibleuniversemodel.com/psx-archive/i-theorem-x.md';

processExtractedMarkdown(inputFile, outputFile);
console.log('Processed i-theorem-x.md');