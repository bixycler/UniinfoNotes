---
title: Test Comments in Markdown
---

- Markdown has no own standard comment syntax
  - but we can use [HTML comment](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Comments) `<!-- tag -->`, because Markdown supports HTML.
  - or we can exploit Markdown link syntax to make comments, as shown at [StackOverflow](https://stackoverflow.com/a/20885980).

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

### Single-line comment (ab)using Markdown reference-style link label
```md
[comment]: <> (a reference style link.)
```
[comment]: <> (a reference style link.)

[//]: <> (This is also a comment.)

[//]: # (This may be the most platform independent comment)
