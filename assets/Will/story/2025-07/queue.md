---
title: Test Comments in Markdown
---

- Markdown has no own standard comment syntax
  - but we can use [HTML comment](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Comments) `<!-- tag -->`, because Markdown supports HTML.
  - or we can exploit other Markdown sytaxes to make comments, as shown 

[comment]: <> (This is a comment, it will not be included)
[comment]: <> (in  the output file unless you use it in)
[comment]: <> (a reference style link.)

[//]: <> (This is also a comment.)

[//]: # (This may be the most platform independent comment)

<!---
your comment goes here
and here
-->
