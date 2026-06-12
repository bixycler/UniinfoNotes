# `common-utils.js` Reference

Shared library for the Logseq→CommonMark publish pipeline and browser tools. Loaded as a `<script>` tag in HTML pages and `require`'d in Node.js CLIs; the conditional export block at the bottom ensures Node.js-only symbols are only exported in that environment.

## Consumers

| Consumer | Environment | What it uses |
|---|---|---|
| `build-index.js` | Node.js | `slugify`, `getMarkdownFiles`, `preprocessStructuredBlocks`, `resolveTitleReferences`, `parseArgValue`, `normalizePageHeader`, `loadIndex`, `saveIndex`, `indexLines` |
| `logseqmd2commonmark.js` | Node.js | Everything above, plus all `PAT_*` regexes, `escapeXML`, `expandBlockToken`, `indexLines` |
| `markdown-watcher.html` | Browser | Prototype extensions (`Date.toFormatedString`, `Number.pad`, `Object.clear`) |
| `ProcessText.html` | Browser | `replaceQuotes`, `copyTextToClipboard` |

---

## Pipeline Functions

### `preprocessStructuredBlocks(lines) → { cleanLines, blockMap }`

Collapses structured constructs into placeholder tokens so downstream code never sees raw props/fences. Returns:
- `cleanLines` — `Array<{line: string, originalIndex: number}>` (original line numbers preserved)
- `blockMap` — `{ [token]: { type: string, lines: string[] } }`

Token types and their triggers:

| Token prefix | Type | Trigger |
|---|---|---|
| `__CODE_BLOCK_N__` | `'code'` | Line starting with ` ``` ` (after stripping leading `- `) |
| `__BLOCKQUOTE_N__` | `'blockquote'` | Line starting with `>` (contiguous non-blank, stops at blank or new `- ` item) |
| `__ORG_BLOCK_N__` | `'org-block'` | Line matching `#+BEGIN_…` … `#+END_…` |
| `__PROPS_BLOCK_N__` | `'props'` | Line matching `PAT_PROP`, `PAT_LB_START`, or `PAT_LB_END` — absorbs all contiguous prop/LOGBOOK lines |

Priority: code fences > Org blocks > blockquotes > props blocks.

**Invariant:** after preprocessing, `cleanLines` never contains a raw prop line (`key:: value`) — every such line is inside a `__PROPS_BLOCK_` token's `lines` array.

### `indexLines(filePath, cleanLines, blockMap) → { [uuid]: { title, sourceLine } }`

Builds the UUID→title map for a single file. Handles two `id::` input shapes:

| Shape | Example in source | After preprocessing | Handled at |
|---|---|---|---|
| **Inline** | `- id:: <uuid>` | Stays a raw bullet in `cleanLines` | `indexLines` inline branch |
| **Property-line** | `- title`↵`  id:: <uuid>` | `id::` absorbed into `__PROPS_BLOCK_` | `indexLines` props-block branch |

`lastContentLine`/`lastContentIndent` tracks the nearest ancestor content bullet for use as a fallback title; sibling contamination is blocked by the indent guard (`lastContentIndent < curIndent`).

Bare `- id::` blocks (no inline title) scan forward for the first structured-block token or content line to use as title, with `filterSystemProps` applied to `__PROPS_BLOCK_` tokens so `id`/`collapsed`/LOGBOOK are excluded from titles.

### `filterSystemProps(lines) → string[]`

Removes system properties from a props block's lines array:
- Drops all lines inside `:LOGBOOK:` … `:END:` spans
- Drops lines where `PAT_PROP` matches `id` or `collapsed`
- Returns the remaining (user) property lines

Used inside `indexLines` for bare-id block title extraction and inside `logseqmd2commonmark.js` for `__PROPS_BLOCK_` output.

### `resolveTitleReferences(index, updateSlug?)`

Topological resolution of `((uuid))` / `[[uuid]]` references embedded in titles. Operates in-place on `index`. Algorithm:
1. Build dependency graph from title strings.
2. Iteratively resolve nodes whose dependencies are already clean.
3. On cycle detection: warn to console; replace circular `((uuid))` with raw UUID strings.

`updateSlug = true` also re-slugifies the resolved title.

### `normalizePageHeader(rawLines)`

Prepends `- ` to a first line that starts with `#` (Logseq de-itemizes the first heading of a page). Mutates `rawLines` in place.

---

## Index I/O

### `loadIndex(indexFile) → object`

Reads and JSON-parses `indexFile`; returns `{}` on missing file or parse error.

### `saveIndex(indexFile, globalIndex)`

Writes `JSON.stringify(globalIndex, null, 2)` (no trailing newline) to `indexFile`, creating parent directories as needed.

**Warning:** `logseqmd2commonmark.js` calls `saveIndex` at the end of every convert run, writing `outputFile`/`outputLine` back into `index.json`. Running the converter with `-i index.json` (instead of a `/tmp` copy) will pollute the shared index with `/tmp` paths. Use `-i /tmp/index-copy.json` when testing.

---

## Regex Patterns

| Name | Pattern | Matches |
|---|---|---|
| `PAT_PROP` | `/^\s*(\w+):: (.*)$/` | Any Logseq property line |
| `PAT_LB_START` | `/^\s*:(logbook\|LOGBOOK):$/` | LOGBOOK open |
| `PAT_LB_END` | `/^\s*:END:$/` | LOGBOOK close |
| `PAT_ITEM` | `/^(\t*)-( \|$)/` | Logseq bullet item |
| `PAT_ID_PROP` | `/^id::\s*([0-9a-fA-F-]{36})\s*$/` | Bare `id::` property (not inline) |
| `PAT_UUID_REF` | `/\(\(([0-9a-fA-F-]{36})\)\)/g` | Block transclusion `((uuid))` |
| `PAT_BRACKET_UUID_REF` | `/\[\[([0-9a-fA-F-]{36})\]\]/g` | Page-link UUID `[[uuid]]` |
| `PAT_LINK_REF` | `/\[([^\[\]]*)\]\(\(\(([0-9a-fA-F-]{36})\)\)(?: "([^"]*)")?\)/g` | Titled link `[text](((uuid)))` |

---

## File & String Helpers

### `getMarkdownFiles(paths) → string[]`

Recursively walks the given paths, returning all `.md` files. Skips directories starting with `.`, `node_modules`, `publish`, `CommonMark`.

### `expandBlockToken(token, blockMap) → string`

Returns `blockMap[token].lines.join('\n')`, or `token` itself if not found.

### `isStructuredBlockToken(stripped) → boolean`

Returns `true` if the string starts with any of the four placeholder prefixes.

### `slugify(str) → string`

Lowercases, replaces non-word characters with `-`, trims leading/trailing dashes.

### `parseArgValue(args, i, flag) → { value, i }`

CLI helper: reads the next positional argument as a `path.resolve`'d value; exits with error if missing.

### `escapeXML(str, quote?, xml?) → string`

Escapes `&`, `<`, `>` (and optionally `"`, `'`, `\n` when `quote=true`). `xml=true` by default.

---

## String Formatting (Browser + Node.js)

### `replaceQuotes(ln) → string` / `replaceQuotesSimple(ln) → string`

Replaces straight `"` and `'` with typographic curly quotes. `replaceQuotes` skips content inside inline codes and HTML tags; `replaceQuotesSimple` is the core implementation. Used in `ProcessText.html`.

### `balancedBracketsRegexPattern(open, close, excludes?, depth?, unrolled?) → RegExp`

Generates a regex for balanced bracket matching up to `depth` levels.

---

## Browser-Only Helpers

These functions rely on browser APIs and are not exported for Node.js.

| Function | Description |
|---|---|
| `fetchFile(url, req, msg?)` | `fetch` wrapper; returns a `Blob` or calls `message.error` on failure |
| `copyTextToClipboard(text)` | `navigator.clipboard.writeText` wrapper |
| `eventPromise(dom, eventName)` | Returns a `Promise` that resolves on the next `eventName` event |
| `parseEscapedJson(escjson)` | Parses an HTML-entity-escaped JSON string via a `DOMParser` round-trip |
| `equal(blob1, blob2)` | Byte-level `Blob` equality check |
| `arrayPush(dict, field, value)` | Appends `value` to `dict[field]`, creating the array if absent |

---

## Prototype Extensions

Applied unconditionally on load (both browser and Node.js):

| Extension | Description |
|---|---|
| `Number.prototype.pad(places)` | Left-pads with `'0'` to `places` digits |
| `Date.prototype.toFormatedString(format)` | Formats a date using a SimpleDateFormat subset (`yyyy MM dd HH mm ss SSS`) |
| `Date.prototype.addDays(days)` | Returns a new `Date` offset by `days` |
| `Object.prototype.clear()` | Deletes all own enumerable properties; defined non-enumerable via `Object.defineProperty` |

---

## Test Fixtures

`logseqmd2commonmark-test.md` is the fixture file for the converter. Its UUIDs follow the uniform scheme `00000000-00SS-00II-0000-000000000000` (SS = section, II = item within section) so they are easily identifiable and purgeable from `index.json` before a test run. See `logseqmd2commonmark-test-suite.md` for the full test protocol.
