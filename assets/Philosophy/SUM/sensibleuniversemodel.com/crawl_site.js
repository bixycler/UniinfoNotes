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

const URLS = [
    { url: '/', file: 'SUM.md' },
    { url: '/benefits-of-the-i-theorem/', file: 'benefits-of-the-i-theorem.md' },
    { url: '/comment/', file: 'comment.md' },
    { url: '/contact/', file: 'contact.md' },
    { url: '/cookie-settings/', file: 'cookie-settings.md' },
    { url: '/ego-sum/', file: 'ego-sum.md' },
    { url: '/ego-sum/conversations-with-ai/', file: 'ego-sum/conversations-with-ai.md' },
    { url: '/ego-sum/introduction/', file: 'ego-sum/introduction.md' },
    { url: '/ego-sum/sobre-mi/', file: 'ego-sum/sobre-mi.md' },
    { url: '/gravis/', file: 'gravis.md' },
    { url: '/imprint/', file: 'imprint.md' },
    { url: '/out/', file: 'out.md' },
    { url: '/privacy-policy/', file: 'privacy-policy.md' },
    { url: '/psx-archive/', file: 'psx-archive.md' },
    { url: '/psx-archive/axioms/', file: 'psx-archive/axioms.md' },
    { url: '/psx-archive/biology/', file: 'psx-archive/biology.md' },
    { url: '/psx-archive/conflict-resolution-conjecture-crc/', file: 'psx-archive/conflict-resolution-conjecture-crc.md' },
    { url: '/psx-archive/fulfilling-the-laws-of-physics/', file: 'psx-archive/fulfilling-the-laws-of-physics.md' },
    { url: '/psx-archive/hermit-conjecture/', file: 'psx-archive/hermit-conjecture.md' },
    { url: '/psx-archive/i-theorem-x/', file: 'psx-archive/i-theorem-x.md' },
    { url: '/psx-archive/lexicon/', file: 'psx-archive/lexicon.md' },
    { url: '/psx-archive/lomega/', file: 'psx-archive/lomega.md' },
    { url: '/psx-archive/morituro-satis-resolution/', file: 'psx-archive/morituro-satis-resolution.md' },
    { url: '/psx-archive/pairing/', file: 'psx-archive/pairing.md' },
    { url: '/psx-archive/psx-espanol/', file: 'psx-archive/psx-espanol.md' },
    { url: '/psx-archive/spirituality/', file: 'psx-archive/spirituality.md' },
    { url: '/psx-archive/the-0-axiom/', file: 'psx-archive/the-0-axiom.md' },
    { url: '/the-table-mensa/parallel-studies/', file: 'the-table-mensa/parallel-studies.md' },
    { url: '/the-table-mensa/sum-and-qhe/', file: 'the-table-mensa/sum-and-qhe.md' },
    { url: '/the-table-mensa/the-2-branches/', file: 'the-table-mensa/the-2-branches.md' },
];

const SCRAPER_CODE = fs.readFileSync(SCRAPER_PATH, 'utf8');

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
    console.log(`Starting crawl of ${URLS.length} pages...\n`);

    // Create one reusable tab — avoids drowning RAM with 30 separate tabs
    const target = await CDP.New({ host: '127.0.0.1', port: 9222 }, 'about:blank');
    const targetId = target.id;
    const client = await CDP({ target: targetId });
    const { Page, Runtime } = client;

    await Page.enable();
    await Runtime.enable();

    let success = 0;
    let failures = 0;

    try {
        for (let i = 0; i < URLS.length; i++) {
            const { url, file } = URLS[i];
            const fullUrl = BASE_URL + url;
            const filePath = path.join(OUTPUT_DIR, file);
            const label = `${i + 1}/${URLS.length}`;

            process.stdout.write(`[${label}] ${fullUrl} ... `);

            try {
                await navigateWithTimeout(Page, fullUrl, TIMEOUT_MS);
                await new Promise(r => setTimeout(r, 1500));

                const result = await Runtime.evaluate({
                    expression: `(function() {\n${SCRAPER_CODE}\nconst mainEl = document.querySelector('main') || document.body;\nreturn nodeToMarkdown(mainEl, false, '');\n})()`,
                    returnByValue: true,
                });

                if (result.exceptionDetails) {
                    throw new Error(result.exceptionDetails.text + ' - ' + (result.exceptionDetails.exception?.description || ''));
                }

                await fs.promises.mkdir(path.dirname(filePath), { recursive: true });
                await fs.promises.writeFile(filePath, result.result.value.trim() + '\n', 'utf8');

                console.log('OK');
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

    console.log(`\nDone. ${success} succeeded, ${failures} failed.`);
    process.exit(failures > 0 ? 1 : 0);
}

main();
