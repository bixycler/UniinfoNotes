### 1. First Heading De-Itemization (First Heading bullet-prepend verification)
  This is continuation content immediately following the deitemized heading to check break insertion.
	- 1.1 Sub-item under heading: This verifies sub-items nest correctly.
- 2. Inline ID: This is a block discussing the new `id:: 12345678-1234-1234-1234-123456789012` inline syntax to verify it does not parse as a block ID property.
- 3. Link Target with Spaces: A block referencing a block in another file with spaces in its name: [Mind Jungle](((6651e92e-fb34-4d24-a386-d9698c2e93f7))) in `pages/Mind Jungle.md`.
- 4. Break Exclusions:
	- 4.1 Table:
	  | Col 1 | Col 2 |
	  |-------|-------|
	  | Cell A| Cell B|
	- 4.2 Blockquote:
	  > This is a quote block.
	  > It continues on the next line.
	- 4.3 HTML Tag:
	  <div class="test-class">
	  This is inside an HTML block.
	  </div>
	- 4.4 Math Block:
	  $$
	  x^2 + y^2 = z^2
	  $$
	- 4.5 Blockquote with blank line and continuation text:
	  collapsed:: true
	  id:: 6880b9b5-b5d3-4542-b378-31cf40ea8476
	  > I'm just a no-one going nowhere to do nothing!
	  
	  This short introduction appears in most of my profiles.
- 5. logseq-meta Anchor Protection:
	- 5.1 Code Block:
	  id:: 12345678-1234-1234-1234-123456789012
	  collapsed:: true
	  ```shell
	  echo "testing fence protection"
	  ```
	- 5.2 Math Block:
	  id:: 87654321-1234-1234-1234-123456789012
	  $$
	  x^2 + y^2 = z^2
	  $$
- 6. Blank Bullet Leading to Spaced Code Block (Empty Title Blanking):
	- id:: 66ea4711-1392-4f5c-bea2-badc71a2fb9a
	  ```shell
	  echo "testing empty block code block nesting"
	  ```
	- id:: 66ea4711-1392-4f5c-bea2-badc71a2fb9f
	  This is standard continuation text inside an empty title block.
- 7. Hashed UUID Titles:
	- 7.1 Target block for local reference
	  id:: 22222222-2222-2222-2222-222222222222
	- 7.2 Reference block referencing the local target: ((22222222-2222-2222-2222-222222222222))
- 8. True Positive Circular Reference:
	- 8.1 Target A that references B: ((55555555-5555-5555-5555-555555555552))
	  id:: 55555555-5555-5555-5555-555555555551
	- 8.2 Target B that references A back: ((55555555-5555-5555-5555-555555555551))
	  id:: 55555555-5555-5555-5555-555555555552
- 9. False Positive Circular Reference via Titled Link (titled link creates a phantom edge → falsely circular without fix):
	- 9.1 Target A that titled-links to B: [see B](((66666666-6666-6666-6666-666666666662)))
	  id:: 66666666-6666-6666-6666-666666666661
	- 9.2 Target B that references A back: ((66666666-6666-6666-6666-666666666661))
	  id:: 66666666-6666-6666-6666-666666666662
- 10. Sibling id:: Fallback Bug (lastContentLine sibling contamination):
	- 10.1 First sibling that references §10.2: ((77777777-7777-7777-7777-777777777772))
	  id:: 77777777-7777-7777-7777-777777777771
	- id:: 77777777-7777-7777-7777-777777777772
- 11. Structured-Block Transclusion for Bare `- id::` Blocks:
	- id:: 88888888-8888-8888-8888-888888888881
	  ```shell
	  echo "code block title transclusion"
	  ```
	- id:: 88888888-8888-8888-8888-888888888882
	  > blockquote title transclusion
	  > with continuation
	- id:: 88888888-8888-8888-8888-888888888883
	  #+BEGIN_CAUTION
	  [:b "Content inside Org block"]
	  #+END_CAUTION
	- id:: 88888888-8888-8888-8888-888888888884
	  tags:: User Property
	  scoping:: [[Some Page]]
	  collapsed:: true
	- id:: 99999999-9999-9999-9999-999999999991
	  collapsed:: true
	  #+BEGIN_WARNING
	  System-props-only then Org block
	  #+END_WARNING
	- id:: 99999999-9999-9999-9999-999999999992
	  collapsed:: true
	  :LOGBOOK:
	  CLOCK: [2026-01-01 Mon 00:00]--[2026-01-01 Mon 01:00] =>  01:00
	  :END:
	  prop1:: value 1
	  prop2:: value 2
	- References to each transcluded block:
		- `__CODE_BLOCK_` transclusion: ((88888888-8888-8888-8888-888888888881))
		- `__BLOCKQUOTE_` transclusion: ((88888888-8888-8888-8888-888888888882))
		- `__ORG_BLOCK_` transclusion: ((88888888-8888-8888-8888-888888888883))
		- `__PROPS_BLOCK_` transclusion (user props only): ((88888888-8888-8888-8888-888888888884))
		- System-props-only then Org block: ((99999999-9999-9999-9999-999999999991))
		- LOGBOOK then user props: ((99999999-9999-9999-9999-999999999992))
