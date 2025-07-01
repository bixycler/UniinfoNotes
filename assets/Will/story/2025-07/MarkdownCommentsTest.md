---
title: Test Comments in Markdown
---

- Markdown has no own standard comment syntax
  - but we can use [HTML comment](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Comments) `<!-- tag -->`, because Markdown supports HTML.
  - or we can exploit Markdown [ref-link](https://www.markdownguide.org/basic-syntax/#reference-style-links) syntax to make comments, as shown at [StackOverflow](https://stackoverflow.com/a/20885980).

### Multi-line comment using HTML comment tag
```md
<!---
Here is a multi-line comment using HTML comment tag
Note: Some Markdown implementations don't process HTML comment tags properly, including old versions of GitHub.
-->
```
<!---
Here is a multi-line comment using HTML comment tag
Note: Some Markdown implementations don't process HTML comment tags properly, including old versions of GitHub.
-->

### One-line comment (ab)using Markdown reference link
```md
[comment label]: <> (a one-line comment exploiting the title in the link reference definition)
```
[comment label]: <> (a one-line comment exploiting the title in the link reference definition)
```md
[//]: <> (use '//' as label to differentiate itself from normal ref labels, not to accidentally appear in the main text)
```
[//]: <> (use '//' as label to differentiate itself from normal ref labels, not to accidentally appear in the main text)
```md
[//]: <> (use '//' as label to differentiate itself from normal ref labels, not to accidentally appear in the main text)
```
[//]: # (Most platform independent comment: use '#', a valid URI, as link target, because some implementations rejects <>,)
