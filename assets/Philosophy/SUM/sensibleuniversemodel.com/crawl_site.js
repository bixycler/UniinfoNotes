// Uses global chrome-remote-interface (/usr/lib/node_modules) to drive Chrome's
// DevTools Protocol directly. This repo normally has no Node.js dependencies —
// this script is an exception: it connects to the same Chrome instance that
// OpenCode's MCP tools use, scraping Jimdo DOM into clean Markdown on disk.
module.paths.push('/usr/lib/node_modules');
const CDP = require('chrome-remote-interface');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://www.sensibleuniversemodel.com';
const OUTPUT_DIR = __dirname;
const SCRAPER_PATH = path.join(__dirname, 'scraper_cdp.js');
const TIMEOUT_MS = 25000;

const SCRAPER_CODE = fs.readFileSync(SCRAPER_PATH, 'utf8');

// Converts a URL path to a local file path dynamically
function urlToFilePath(urlPath) {
    // Remove base URL, query params, and hashes
    let cleanPath = urlPath.replace(BASE_URL, '').split('?')[0].split('#')[0];
    
    // Default root to SUM.md
    if (cleanPath === '' || cleanPath === '/') return 'SUM.md';
    
    // Remove leading and trailing slashes
    cleanPath = cleanPath.replace(/^\/+|\/+$/g, '');
    
    // Decode percent-encoded chars (so psx-espa%C3%B1ol becomes psx-español for the file system)
    try {
        cleanPath = decodeURIComponent(cleanPath);
    } catch(e) {}

    return cleanPath + '.md';
}

async function navigateWithTimeout(Page, url, timeoutMs) {
    return new Promise((resolve, reject) => {
        const timer = setTimeout(() => reject(new Error(`Timeout (${timeoutMs}ms) loading ${url}`)), timeoutMs);
        Page.navigate({ url })
            .then(() => Page.loadEventFired())
            .then(() => { clearTimeout(timer); resolve(); })
            .catch(err => { clearTimeout(timer); reject(err); });
    });
}

async function main() {
    console.log(`Starting dynamic crawler on ${BASE_URL}...\n`);

    const target = await CDP.New({ host: '127.0.0.1', port: 9222 }, 'about:blank');
    const targetId = target.id;
    const client = await CDP({ target: targetId });
    const { Page, Runtime } = client;

    await Page.enable();
    await Runtime.enable();

    let success = 0;
    let failures = 0;

    // Crawler State
    const queue = ['/'];
    const visited = new Set();
    
    try {
        while (queue.length > 0) {
            const currentPath = queue.shift();
            
            // Skip if already visited
            if (visited.has(currentPath)) continue;
            visited.add(currentPath);

            const fullUrl = BASE_URL + currentPath;
            const file = urlToFilePath(currentPath);
            const filePath = path.join(OUTPUT_DIR, file);

            process.stdout.write(`[Scraping] ${currentPath} -> ${file} ... `);

            try {
                await navigateWithTimeout(Page, fullUrl, TIMEOUT_MS);
                await new Promise(r => setTimeout(r, 1500)); // allow Jimdo JS to render

                // 1. Evaluate the Markdown scraper
                const mdResult = await Runtime.evaluate({
                    expression: `(function() {\n${SCRAPER_CODE}\nconst mainEl = document.querySelector('main') || document.body;\nreturn nodeToMarkdown(mainEl, false, '');\n})()`,
                    returnByValue: true,
                });

                if (mdResult.exceptionDetails) {
                    throw new Error(mdResult.exceptionDetails.text);
                }

                await fs.promises.mkdir(path.dirname(filePath), { recursive: true });
                await fs.promises.writeFile(filePath, mdResult.result.value.trim() + '\n', 'utf8');

                // 2. Dynamically extract all links on the page to continue the crawl
                const linkResult = await Runtime.evaluate({
                    expression: `Array.from(document.querySelectorAll('a')).map(a => a.href)`,
                    returnByValue: true
                });

                const linksOnPage = linkResult.result.value || [];
                let discovered = 0;

                for (const href of linksOnPage) {
                    if (!href.startsWith(BASE_URL)) continue; // Skip external links
                    if (href.includes('mailto:') || href.includes('tel:')) continue;

                    let relativePath = href.replace(BASE_URL, '').split('#')[0].split('?')[0];
                    if (!relativePath.startsWith('/')) relativePath = '/' + relativePath;

                    // Exclude specific file types
                    if (relativePath.match(/\\.(png|jpg|jpeg|gif|pdf|zip)$/i)) continue;

                    // If we haven't visited it, and it's not already in queue
                    if (!visited.has(relativePath) && !queue.includes(relativePath)) {
                        queue.push(relativePath);
                        discovered++;
                    }
                }

                console.log(`OK (Found ${discovered} new links)`);
                success++;
            } catch (err) {
                console.log(`FAIL: ${err.message}`);
                failures++;
            }
        }
    } finally {
        await client.close().catch(() => {});
        await CDP.Close({ host: '127.0.0.1', port: 9222 }, targetId).catch(() => {});
    }

    console.log(`\nCrawl complete. ${success} succeeded, ${failures} failed. Discovered total ${visited.size} unique paths.`);
    process.exit(failures > 0 ? 1 : 0);
}

main();
