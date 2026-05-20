- This is a block discussing the new `id:: 12345678-1234-1234-1234-123456789012` inline syntax to verify it does not parse as a block ID property.
- A block referencing a block in another file: [Mind Jungle](((6651e92e-fb34-4d24-a386-d9698c2e93f7))) in `pages/Mind Jungle.md`.
- A block with a table to check table row line-break exclusions:
  | Col 1 | Col 2 |
  |-------|-------|
  | Cell A| Cell B|
- A block with a blockquote to check blockquote line-break exclusions:
  > This is a quote block.
  > It continues on the next line.
- A block with an HTML tag to check HTML tag line-break exclusions:
  <div class="test-class">
  This is inside an HTML block.
  </div>
- A block ending with a code block to check code fence logseq-meta anchor protection:
  ```shell
  echo "testing fence protection"
  ```
  id:: 12345678-1234-1234-1234-123456789012
- A block ending with a math block to check math fence logseq-meta anchor protection:
  $$
  x^2 + y^2 = z^2
  $$
  id:: 87654321-1234-1234-1234-123456789012
- Parent item for look-ahead merging verification:
  - id:: 66ea4711-1392-4f5c-bea2-badc71a2fb9e
    ```shell
    echo "testing look-ahead code block merging"
    ```
  - id:: 66ea4711-1392-4f5c-bea2-badc71a2fb9f
    This is standard continuation text merged look-ahead style.
- # Heading 1 (Deitemized Heading Verification)
  This is continuation content immediately following the deitemized heading to check break insertion.
