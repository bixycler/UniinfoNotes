# assets/HTML/ — Architecture Analysis

## Overview

The `assets/HTML/` directory contains **three subsystems** for working with this Logseq knowledge graph outside of Logseq itself: a Node.js CLI publishing pipeline, a browser-based preview/export tool, and Logseq live API debugging tools. Plus custom web components and shared utilities.

---

## 1. Node.js CLI Pipeline (Publishing)

Converts Logseq-flavored Markdown to standard CommonMark for publishing.

**Files:**
- `build-index.js` — CLI entry point. Scans directories for `.md` files, builds a UUID-indexed JSON (`index.json`) mapping each block's UUID to its title, source file, and line number.
- `logseqmd2commonmark.js` — CLI entry point. Converts Logseq `.md` files to CommonMark: resolves `((uuid))` block references to `[title](#uuid)` links, strips Logseq metadata (properties, logbooks), handles nested lists, code blocks, blockquotes.
- `common-utils.js` — Shared between the two CLIs. Contains regex patterns (`PAT_PROP`, `PAT_UUID_REF`, `PAT_LINK_REF`, etc.), `preprocessStructuredBlocks()` (collapses code fences/blockquotes/props into tokens), `resolveTitleReferences()` (topological resolution of nested UUID refs), `indexLines()`, and helpers (`slugify`, `escapeXML`, `loadIndex`, `saveIndex`).

**Data flow:**
```
.md files → build-index.js → index.json (UUID → title/source/output mapping)
.md files + index.json → logseqmd2commonmark.js → .cm.md files (CommonMark output)
```

---

## 2. Browser Preview/Export Tool

A single-page HTML app for live-previewing Markdown files with multiple render/export options.

**Files:**
- `markdown-watcher.js` — The "god function" `load()`. Reads a markdown file (via fetch), normalizes it, renders to HTML via markdown-it, and supports four render modes:
  - **mdrender**: Raw markdown-it HTML output
  - **html**: Logseq-normalized output restructured into `<folder-div>` outline components
  - **pdf**: Sends HTML to DocRaptor API for PDF generation
  - **img/png**: Uses modern-screenshot for image capture
  Features file watching (polling), URL state management, and export via Blob URLs.
- `markdown-converter.js` — The `MarkdownNormalizer()` factory. Converts Logseq markdown to CommonMark in the browser (similar to `logseqmd2commonmark.js` but client-side). Also exports `restructureToFolderDiv()` which converts `<li>` elements to `<folder-div>` outline components.
- `markdown-watcher.html` — The UI page (control panel, render area, export buttons).
- `diagram-watcher.js` — Similar watcher for SVG/image/diagram files. Supports rendering as `<object>`, inline SVG, `<img>`, or `<canvas>`. Handles file watching, URL state, export.
- `diagram-watcher.html` — UI for diagram watching.
- `DocRaptor.js` — Wrapper for the DocRaptor PDF API. Contains the API key (`m7Dhrn_AsezV94C3VL-B`), constructs form-encoded POST requests, returns PDF blobs. Includes PDF-specific CSS for `@page` and `<folder-div>` styling.

**Data flow:**
```
.md file (local via fetch) → markdown-watcher.js
  → MarkdownNormalizer().normalize()  (Logseq→CommonMark)
  → md2html() via markdown-it         (CommonMark→HTML)
  → restructureToFolderDiv()          (HTML→folder-div outline)
  → render as HTML / PDF / PNG        (export)
```

---

## 3. Logseq Live API Tools

Browser pages that connect to the Logseq desktop app's HTTP API for debugging.

**Files:**
- `LogseqUtils.js` — Sets up the API endpoint (`http://127.0.0.1:12315/api`), auth header (`Bearer Logseq-API-Test`), and the `logseqQuery()` function that POSTs JSON-RPC requests to Logseq's API. Also has `showMessage()` and `eventPromise()` utilities.
- `LogseqGet.js` — UI logic for the "Get Block" tool. Calls `logseq.Editor.getBlock()` (with fallback to `getPage()`), displays the result in form fields (content, metadata, UUID, parent, refs, timestamps). Includes `splitContentMeta()` for separating block content from properties.
- `LogseqQuery.js` — UI logic for the "DB Query" tool. Calls `logseq.DB.q()` with a Datascript query and displays the JSON result.
- `LogseqGet.html`, `LogseqQuery.html` — UI pages.

**Data flow:**
```
Browser UI → logseqQuery() POST → Logseq Desktop API (port 12315) → JSON response → displayed in form fields
```

---

## 4. Custom Web Components

- `FolderDiv.js` — `<folder-div>` custom element. A collapsible outline component with arrow control, stem line, and unfoldable/foldable content slots. Styled via CSS custom properties. Used by `restructureToFolderDiv()` to render Logseq's nested outline as an interactive HTML tree.
- `MessageDiv.js` — `<message-div>` custom element. A simple `<details>`-based message display with `error()`, `show()`, `clear()` methods. Used for status messages throughout the browser tools.

---

## 5. Base Utilities

- `_base.js` — jQuery extensions (valHooks for various element types), Underscore.js mixins (`_.wrap()` for getter/setter property wrapping, `_.log`, `_.fget_id`), and `Backbone.MModel` — a custom Model class with evented attribute accessors and nested model listening.
- `common-utils.js` (browser side) — also has browser utilities: `fetchFile()`, `copyTextToClipboard()`, `replaceQuotes()` (smart quotes), `balancedBracketsRegexPattern()`, and prototype extensions (`Object.clear()`, `Number.pad()`, `Date.toFormatedString()`, `Date.addDays()`).
- `lodash-4.17.15.js` — Vendored lodash (used by `_base.js` and potentially other scripts).

---

## 6. Other Files

- `ProcessText.html`, `ClipboardRead.html`, `FatLink.html`, `FoldableDemo.html`, `FolderDiv.html`, `FolderDiv-user.html` — Standalone HTML pages for specific utilities or demos.
- `logseqmd2commonmark-test.md`, `logseqmd2commonmark-test-suite.md` — Test fixtures for the markdown converter.
