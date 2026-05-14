# Turndown.js vs. Custom CDP Scraper (`scraper_cdp.js`)

This document provides a technical comparison between using a generic, industry-standard HTML-to-Markdown library ([Turndown.js](https://github.com/mixmark-io/turndown)) versus our custom-built 100-line DOM parsing script (`scraper_cdp.js`). 

While building a custom scraper was initially pursued as an exercise, it ultimately provided targeted value for the *Sensible Universe Model (SUM)* domain architecture.

---

## 1. Multi-Line Formatting Tags (Custom Script Wins)

**The Problem:** Jimdo sites frequently output HTML like `<strong>Line 1<br>Line 2</strong>`. 
Standard Markdown parsers do not support bold or italic markers that span across line breaks or paragraphs.

**Turndown.js:**
Turndown evaluates tags purely structurally. Its default rule for `strong` is:
```javascript
filter: ['strong', 'b'],
replacement: function (content, node, options) {
  if (!content.trim()) return '';
  return options.strongDelimiter + content + options.strongDelimiter;
}
```
If fed the multi-line Jimdo tag, Turndown outputs `**Line 1 \n Line 2**`. This breaks the markdown parser, rendering literal asterisks on the final page.

**Our Custom Script:**
We implemented specific logic to split strings by newline *inside* the formatting rule, wrapping each individual line separately:
```javascript
// Resulting output:
**Line 1** 
**Line 2**
```
This guarantees strict Markdown compliance. (To achieve this in Turndown, we would have had to write a custom rule overriding the core `strong`/`em` parsers).

---

## 2. Empty Tag Leaks & Padding (Tie)

**The Problem:** Jimdo often leaves empty or whitespace-only formatting tags in the DOM, such as `<strong>&nbsp;</strong>` or `<em> </em>`.

**Turndown.js:**
Turndown handles this gracefully. It utilizes a `collapseWhitespace` DOM-parsing methodology *before* evaluating rules, and its core `strong` rule includes an `if (!content.trim()) return '';` check. It correctly drops empty tags and prevents formatting markers from bleeding into the text.

**Our Custom Script:**
We handle this equally well by applying `.trim()` to the inner content of the tag and evaluating `if (content)` before appending the `**` or `_` markers.

---

## 3. Escaping Math & Physics Notation (Custom Script is Leaner)

**The Problem:** The SUM site relies heavily on mathematical notation, physics equations, and LaTeX-style syntax (e.g., `n\_s`, `[x] = y`, `> 0`). 

**Turndown.js:**
Turndown utilizes an aggressive, hardcoded array of regex escapes:
```javascript
var markdownEscapes = [
  [/\\/g, '\\\\'], [/\*/g, '\\*'], [/^-/g, '\\-'], [/^\+ /g, '\\+ '], 
  [/^(=+)/g, '\\$1'], [/^(#{1,6}) /g, '\\$1 '], [/`/g, '\\`'], 
  [/^~~~/g, '\\~~~'], [/\[/g, '\\['], [/\]/g, '\\]'], [/^>/g, '\\>'], 
  [/_/g, '\\_'], [/^(\d+)\. /g, '$1\\. ']
];
```
This aggressive escaping mangles complex equations, converting `[x] = y` into `\\[x\\] \= y`. Because this array is private, the only way to disable it is to completely overwrite the `TurndownService.prototype.escape` method on your instance.

**Our Custom Script:**
We hardcoded our escaping strictly to `*` and `_`, protecting our specific physics content without requiring prototype manipulation.

---

## 4. Boilerplate & Custom Tags (Custom Script Wins)

**The Problem:** Jimdo injects massive custom XML tags into the DOM, specifically `<jimdo-nav>` and `<jimdo-header>`.

**Turndown.js:**
Turndown extracts `node.textContent` for any tag it doesn't recognize. If it hits `<jimdo-nav>Home | About</jimdo-nav>`, it will dump the entire site navigation menu as plain text at the top of every Markdown file. We would have had to use `turndownService.addRule()` to explicitly filter these out.

**Our Custom Script:**
We intercept these custom tags natively in the primary evaluation loop, ignoring them alongside `<script>`, `<style>`, and `<aside>` tags natively.

---

## Conclusion

Turndown.js is undoubtedly the gold standard for general-purpose HTML-to-Markdown conversion. Its extensibility via plugins and rules makes it capable of handling almost anything.

However, to use Turndown for this specific Jimdo/Physics website, we would have had to:
1. Install an external Node.js dependency in a documentation repo.
2. Override the prototype `.escape()` method to save our math equations.
3. Write custom `.addRule()` injections for Jimdo's proprietary tags.
4. Write custom `.addRule()` overrides for `strong`/`em` to fix the multi-line formatting bug.

By writing a ~100 line, zero-dependency custom script (`scraper_cdp.js`), we achieved a leaner, tailor-made solution that solved our edge cases directly at the source.