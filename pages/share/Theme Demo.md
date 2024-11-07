---
public: true
---

- # H111
  id:: 665f0ce7-6b91-4148-99c4-045503afb7d5
- ## H222
- ### H333
- #### H444
- ##### H555
- ###### H666
  
  Horizontal rule:
  
  ---
  ***
  ___
  ===
  
  Normal text, *italic*, **bold**, ***bold italic***, ~~strikethrough~~, ((e6a21858-1849-462e-b2b0-0bc57b38fb0a)), [Markdown link](https://www.markdownguide.org/basic-syntax/#links "this is a tooltip/title of this link"), [reference][1] do they look OK?
- Nested links
	- This is [a [Hyperlink](https://en.wikipedia.org/wiki/Hyperlink) within a Markdown link](https://www.markdownguide.org/basic-syntax/#links).
	  id:: 66ae1e22-a253-4c78-8a51-b45e646ccb66
	  collapsed:: true
		- This is [an <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a"><code>&lt;a&gt;</code> tag</a> within a Markdown link](https://www.markdownguide.org/basic-syntax/#links).
		- This is <a href="https://en.wikipedia.org/wiki/Hyperlink">an <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a"><code>&lt;a&gt;</code> tag</a> within an <code>&lt;a&gt;</code> tag</a>.
	- This is [a [nested brackets in a] link](href.to.a(nested parentheses) "with tool tip")
		- 2 layers: [a [nested [nested brackets] in a] link](href.to.a(nested (nested parentheses)) "with tool tip")
		- 3 layers: [a [nested [nested [nested brackets] in] a] link](href.to.a(nested (nested (nested parentheses))) "with tool tip")
	- This is ((66ae2602-edc5-4281-a9fb-fc03f1992c93)), which is linked/mirrored here.
	  id:: 66ae25de-8bfe-4da8-9483-8ae16f704c59
		- a ((66536cad-a232-4b90-bf32-439144aac1ec)) within a block
		  id:: 66ae2602-edc5-4281-a9fb-fc03f1992c93
-
- ## List
- first with `inline code`
  1. one  
    next line, and code block:
  ```java
    Object method(String param) { return null; }
  ```
  2. two
- second
  id:: 666124a1-9253-46c8-aa5a-f7a6e0642648
  collapsed:: true
  + plus
	- minus
	  id:: 666124a1-a914-4f1f-9cce-ac447fb37d41
	  * asterisk 
	  
	  > Blockquotes
	  > in the block!
	  > > Nested block
	  > > - And list
	  > > - another item
	  > > 	- with deeper level
- Numbering with `logseq.order-list-type:: number`
  collapsed:: true
	- one
	  logseq.order-list-type:: number
	- two
	  logseq.order-list-type:: number
		- ey
		  logseq.order-list-type:: number
		- bee
		  logseq.order-list-type:: number
			- ai
			  logseq.order-list-type:: number
			- ai ai
			  logseq.order-list-type:: number
			- ai ai ai
			  logseq.order-list-type:: number
				- one
				  logseq.order-list-type:: number
			- ai vee
			  logseq.order-list-type:: number
		- see
		  logseq.order-list-type:: number
	- three
	  logseq.order-list-type:: number
	- unordered item in between!
	- then restart
	- from one
	  logseq.order-list-type:: number
	- and so on...
	  logseq.order-list-type:: number
- Block reference
  id:: 66680d04-bd5e-4c0b-bce2-b8657cecf232
	- 1st level reference: ((66680d04-bd5e-4c0b-bce2-b8657cecf232))
	  id:: 66680d48-8b45-4f18-8826-884de65dc7cb
		- 2nd level refence: ((66680d48-8b45-4f18-8826-884de65dc7cb))
		  id:: 66680d60-55ec-4929-8bef-3c3e6ca85538
			- 3rd level reference: ((66680d60-55ec-4929-8bef-3c3e6ca85538))
- Embedded block with Logseq's `{{embed}}`: {{embed ((666124a1-a914-4f1f-9cce-ac447fb37d41))}}
	- The embedded block above is "transparent", i.e. can be edited right at the embedding place.
-
- Images
  collapsed:: true
	- [Theme Demo.dark.png](../assets/logseq/Theme Demo.dark.png)
	  ![Theme Demo.dark.png](../assets/logseq/Theme Demo.dark.png)
	- [Theme Demo.light.png](../assets/logseq/Theme Demo.light.png)
	  ![Theme Demo.light.png](../assets/logseq/Theme Demo.light.png)
-
- ### Tasks:
-
- [ ] new
  id:: 665ecbba-cfcd-40bd-a51c-7371645cffaf
	- TODO A task to be done LATER
	- LATER A task to be done LATER
- [x] done
	- DONE A task that has been DONE
- [/] WIP
	- WAITING A task waiting to be done (paused)
	- WAIT A task waiting to be done (paused)
	- IN-PROGRESS A task in progress (not time tracked)
	- DOING A task being done NOW (time tracked)
	  :LOGBOOK:
	  CLOCK: [2024-06-03 Mon 20:20:10]
	  :END:
	- NOW A task being done NOW (time tracked)
	  :LOGBOOK:
	  CLOCK: [2024-06-03 Mon 20:20:12]
	  :END:
	- IN-PROGRESS Custom workflows with `logseq-custom-workflows` plugin:
	  id:: 66600918-053e-43ec-a06b-e256086e8368
		- WAIT Workflow 1: `(TODO -> WAIT) <-> DOING -> DONE` with `Ctrl Enter` for forward phase and  `Ctrl Shift Enter` for backward phase.
		  :LOGBOOK:
		  CLOCK: [2024-06-06 Thu 10:21:27]--[2024-06-06 Thu 10:21:31] =>  00:00:04
		  CLOCK: [2024-06-06 Thu 10:21:35]--[2024-06-06 Thu 10:21:36] =>  00:00:01
		  :END:
		- Workflow 2: `plaintext <-> DOING` with `Ctrl Alt Enter` for time tracking of plaintext.
		  :LOGBOOK:
		  CLOCK: [2024-06-06 Thu 10:22:43]
		  CLOCK: [2024-06-06 Thu 10:22:46]
		  :END:
		- Some hidden text in LOGBOOK
		  id:: 6678f1fa-d6a7-49c8-8a93-4c82f4e1e6c2
		  collapsed:: true
		  :LOGBOOK:
		  !!!secrete content here!!!
		  CLOCK: [2024-06-24 Mon 11:13:12]
		  :END:
			- DONE Even mix hidden text with timestamps! ;)
			  id:: 6678f283-f54c-4100-98fa-83af4875f923
			  :LOGBOOK:
			  CLOCK: [2024-06-24 Mon 11:14:33]
			  ^^^This text is AFTER the init timestamp^^^
			  CLOCK: [2024-06-24 Mon 11:15:36]
			  CLOCK: [2024-06-24 Mon 11:16:19]--[2024-06-24 Mon 11:16:29] =>  00:00:10
			  ^^^This text is AFTER a DONE elapsed time^^^
			  :END:
- [-] canceled
	- CANCELLED A task that has been cancelled
- [?] question
- [!] important, problem
- Other markers
  collapsed:: true
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
	-
-
- Logseq propety query
	- {{query (property public)}}
	  query-table:: false
- ---
  [1] This is the details of the ref above.