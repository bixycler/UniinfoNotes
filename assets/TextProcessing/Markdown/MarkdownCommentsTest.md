---
title: Markdown Comments Test
---

- Markdown has no own standard comment syntax!
  - but we can use [HTML comment](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Comments) `<!-- tag -->`, because Markdown supports HTML;
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
[//]: <> (use '//' as label to differentiate comments from normal refs, not to accidentally appear in the main text)
```
[//]: <> (use '//' as label to differentiate comments from normal refs, not to accidentally appear in the main text)
```md
[//]: # (Most platform-independent comment: use '#', a valid URI, as link target, because some implementations reject '<>')
```
[//]: # (Most platform-independent comment: use '#', a valid URI, as link target, because some implementations reject '<>')

Finally, to be on the safe side, this type of comments should be separated from other parts by blank lines (before and after).

```md

[//]: # (Most platform-independent comment: use '#' as link target and separated by blank lines)

```

[//]: # (Most platform-independent comment: use '#' as link target and separated by blank lines)

Let's check how they work with different Markdown implementations.
