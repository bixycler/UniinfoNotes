const { processExtractedMarkdown } = require('./process_extracted.js');
const fs = require('fs');

const inputFile = '/home/dinhlx/.local/share/opencode/tool-output/tool_e24eefa19001fYzvwIrZg37pll';
const outputFile = '/home/dinhlx/source/UniinfoNotes/assets/Philosophy/SUM/sensibleuniversemodel.com/psx-archive/axioms.md';

processExtractedMarkdown(inputFile, outputFile);
console.log('Processed axioms.md');