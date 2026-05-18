<br>---
<br>public: true
<br>---

- # H111 <a class="logseq-meta" id="665f0ce7-6b91-4148-99c4-045503afb7d5" ></a>
- ## H222
- ### H333
- #### H444
- ##### H555
- ###### H666
  
  Horizontal rule:
  
  <br>---
  <br>***
  <br>___
  <br>===
  
  <br>Normal text, *italic*, **bold**, ***bold italic***, ~~strikethrough~~, [<span class="link-h2">wikilink</span>](../../../publish/CommonMark/Mind Jungle.cm.md#e6a21858-1849-462e-b2b0-0bc57b38fb0a), [Markdown link](https://www.markdownguide.org/basic-syntax/#links "this is a tooltip/title of this link"), [reference][1] do they look OK?
- Nested links
	- This is [a [Hyperlink](https://en.wikipedia.org/wiki/Hyperlink) within a Markdown link](https://www.markdownguide.org/basic-syntax/#links). <a class="logseq-meta" id="66ae1e22-a253-4c78-8a51-b45e646ccb66" data-collapsed="true" ></a>
		- This is [an <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a"><code>&lt;a&gt;</code> tag</a> within a Markdown link](https://www.markdownguide.org/basic-syntax/#links).
		- This is <a href="https://en.wikipedia.org/wiki/Hyperlink">an <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a"><code>&lt;a&gt;</code> tag</a> within an <code>&lt;a&gt;</code> tag</a>.
	- This is a [link (Unix)](https://en.wikipedia.org/wiki/Link_(Unix) "The link utility for hardlink") with double [link ((Unix))](https://en.wikipedia.org/wiki/Link_((Unix))) and triple [link (((Unix)))](https://en.wikipedia.org/wiki/Link_(((Unix))))
	- This is [a [nested brackets in a] link](href.to.a(nested parentheses) "with tool tip") <a class="logseq-meta" data-collapsed="true" ></a>
		- 2 layers: [a [nested [nested brackets] in a] link](href.to.a(nested (nested parentheses)) "with tool tip")
		- 3 layers: [a [nested [nested [nested brackets] in] a] link](href.to.a(nested (nested (nested parentheses))) "with tool tip")
	- This is [a ((66536cad-a232-4b90-bf32-439144aac1ec)) within a block](#66ae2602-edc5-4281-a9fb-fc03f1992c93), which is linked/mirrored here. <a class="logseq-meta" id="66ae25de-8bfe-4da8-9483-8ae16f704c59" ></a>
		- a [<span class="link-h2">hyperlink</span>](../../../publish/CommonMark/Mind Jungle.cm.md#66536cad-a232-4b90-bf32-439144aac1ec) within a block <a class="logseq-meta" id="66ae2602-edc5-4281-a9fb-fc03f1992c93" ></a>
- <zwsp>
- ## List
- first with `inline code`
  <br>1. one  
    <br>next line, and code block:
  ```java
    Object method(String param) { return null; }
  ```
  <br>2. two
- second <a class="logseq-meta" id="666124a1-9253-46c8-aa5a-f7a6e0642648" data-collapsed="true" ></a>
  <br>+ plus
	- minus <a class="logseq-meta" id="666124a1-a914-4f1f-9cce-ac447fb37d41" ></a>
	  <br>* asterisk 
	  
	  <br>> Blockquotes
	  <br>> in the block!
	  <br>> > Nested block
	  <br>> > - And list
	  <br>> > - another item
	  <br>> > 	- with deeper level
- Numbering with `logseq.order-list-type:: number` <a class="logseq-meta" data-collapsed="true" ></a>
	- one
	  <br>logseq.order-list-type:: number
	- two
	  <br>logseq.order-list-type:: number
		- ey
		  <br>logseq.order-list-type:: number
		- bee
		  <br>logseq.order-list-type:: number
			- ai
			  <br>logseq.order-list-type:: number
			- ai ai
			  <br>logseq.order-list-type:: number
			- ai ai ai
			  <br>logseq.order-list-type:: number
				- one
				  <br>logseq.order-list-type:: number
			- ai vee
			  <br>logseq.order-list-type:: number
		- see
		  <br>logseq.order-list-type:: number
	- three
	  <br>logseq.order-list-type:: number
	- unordered item in between!
	- then restart
	- from one
	  <br>logseq.order-list-type:: number
	- and so on...
	  <br>logseq.order-list-type:: number
- Block reference <a class="logseq-meta" id="66680d04-bd5e-4c0b-bce2-b8657cecf232" ></a>
	- 1st level reference: [Block reference](#66680d04-bd5e-4c0b-bce2-b8657cecf232) <a class="logseq-meta" id="66680d48-8b45-4f18-8826-884de65dc7cb" ></a>
		- 2nd level refence: [1st level reference: ((66680d04-bd5e-4c0b-bce2-b8657cecf232))](#66680d48-8b45-4f18-8826-884de65dc7cb) <a class="logseq-meta" id="66680d60-55ec-4929-8bef-3c3e6ca85538" ></a>
			- 3rd level reference: [2nd level refence: ((66680d48-8b45-4f18-8826-884de65dc7cb))](#66680d60-55ec-4929-8bef-3c3e6ca85538)
- Embedded block with Logseq's `{{embed}}`: {{embed [minus](#666124a1-a914-4f1f-9cce-ac447fb37d41)}}
	- The embedded block above is "transparent", i.e. can be edited right at the embedding place.
- <zwsp>
- Images <a class="logseq-meta" data-collapsed="true" ></a>
	- [Theme Demo.dark.png](../assets/logseq/Theme Demo.dark.png)
	  <br>![Theme Demo.dark.png](../assets/logseq/Theme Demo.dark.png)
	- [Theme Demo.light.png](../assets/logseq/Theme Demo.light.png)
	  <br>![Theme Demo.light.png](../assets/logseq/Theme Demo.light.png)
- <zwsp>
- ### Tasks:
- <zwsp>
- [ ] new <a class="logseq-meta" id="665ecbba-cfcd-40bd-a51c-7371645cffaf" ></a>
	- TODO A task to be done LATER
	- LATER A task to be done LATER
- [x] done
	- DONE A task that has been DONE
- [/] WIP
	- WAITING A task waiting to be done (paused)
	- WAIT A task waiting to be done (paused)
	- IN-PROGRESS A task in progress (not time tracked)
	- DOING A task being done NOW (time tracked) <a class="logseq-meta" data-logbook="CLOCK: [2024-06-03 Mon 20:20:10]&#10;" ></a>
	- NOW A task being done NOW (time tracked) <a class="logseq-meta" data-logbook="CLOCK: [2024-06-03 Mon 20:20:12]&#10;" ></a>
	- IN-PROGRESS Custom workflows with `logseq-custom-workflows` plugin: <a class="logseq-meta" id="66600918-053e-43ec-a06b-e256086e8368" ></a>
		- WAIT Workflow 1: `(TODO -> WAIT) <-> DOING -> DONE` with `Ctrl Enter` for forward phase and  `Ctrl Shift Enter` for backward phase. <a class="logseq-meta" data-logbook="CLOCK: [2024-06-06 Thu 10:21:27]--[2024-06-06 Thu 10:21:31] =&gt;  00:00:04&#10;CLOCK: [2024-06-06 Thu 10:21:35]--[2024-06-06 Thu 10:21:36] =&gt;  00:00:01&#10;" ></a>
		- Workflow 2: `plaintext <-> DOING` with `Ctrl Alt Enter` for time tracking of plaintext. <a class="logseq-meta" data-logbook="CLOCK: [2024-06-06 Thu 10:22:43]&#10;CLOCK: [2024-06-06 Thu 10:22:46]&#10;" ></a>
		- Some hidden text in LOGBOOK <a class="logseq-meta" id="6678f1fa-d6a7-49c8-8a93-4c82f4e1e6c2" data-collapsed="true" data-logbook="!!!secrete content here!!!&#10;CLOCK: [2024-06-24 Mon 11:13:12]&#10;" ></a>
			- DONE Even mix hidden text with timestamps! ;) <a class="logseq-meta" id="6678f283-f54c-4100-98fa-83af4875f923" data-logbook="CLOCK: [2024-06-24 Mon 11:14:33]&#10;^^^This text is AFTER the init timestamp^^^&#10;CLOCK: [2024-06-24 Mon 11:15:36]&#10;CLOCK: [2024-06-24 Mon 11:16:19]--[2024-06-24 Mon 11:16:29] =&gt;  00:00:10&#10;^^^This text is AFTER a DONE elapsed time^^^&#10;" ></a>
- [-] canceled
	- CANCELLED A task that has been cancelled
- [?] question
- [!] important, problem
- Other markers <a class="logseq-meta" data-collapsed="true" ></a>
	- [*] starred
	- [>] forwarded
	- [<] scheduled
	- [#] tag
	- [b] bookmark
	- ["] quote
	- [i] info
	- [I] idea
	- [p] pros
	- [c] cons
	- [f] fire
	- [k] key
	- [u] up
	- [d] down
	- [w] win
	- [+] inboxed
	- [.] dot
	- [,] comma
	- [~] tilde
	- [@] at
	- [%] percent
	- [&] and
	- [:] colon
	- [;] semicolon
	- <zwsp>
- <zwsp>
- Logseq propety query
	- {{query (property public)}}
	  <br>query-table:: false
- ---
  <br>[1] This is the details of the ref above.
