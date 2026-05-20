- 1. Inline ID: This is a block discussing the new `id:: 12345678-1234-1234-1234-123456789012` inline syntax to verify it does not parse as a block ID property.
- 2. Link Target with Spaces: A block referencing a block in another file with spaces in its name: [Mind Jungle](((6651e92e-fb34-4d24-a386-d9698c2e93f7))) in `pages/Mind Jungle.md`.
- 3. Break Exclusions:
	- 3.1 Table:
		| Col 1 | Col 2 |
		|-------|-------|
		| Cell A| Cell B|
	- 3.2 Blockquote:
		> This is a quote block.
		> It continues on the next line.
	- 3.3 HTML Tag:
		<div class="test-class">
		This is inside an HTML block.
		</div>
- 4. logseq-meta Anchor Protection:
	- 4.1 Code Block:
		id:: 12345678-1234-1234-1234-123456789012
		```shell
		echo "testing fence protection"
		```
	- 4.2 Math Block:
		id:: 87654321-1234-1234-1234-123456789012
		$$
		x^2 + y^2 = z^2
		$$
- 5. Blank Bullet Leading to Spaced Code Block (Look-ahead Merging):
	- id:: 66ea4711-1392-4f5c-bea2-badc71a2fb9e
		```shell
		echo "testing look-ahead code block merging"
		```
	- id:: 66ea4711-1392-4f5c-bea2-badc71a2fb9f
		This is standard continuation text merged look-ahead style.
- 6. Hashed UUID Titles:
	- 6.1 Target block for local reference
		id:: 22222222-2222-2222-2222-222222222222
	- 6.2 Reference block referencing the local target: ((22222222-2222-2222-2222-222222222222))
- # 7. Heading 1 (Deitemized Heading Verification)
	This is continuation content immediately following the deitemized heading to check break insertion.
