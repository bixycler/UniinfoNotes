---
key: value
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
  
  Normal text, *italic*, **bold**, ***bold italic***, ~~strikethrough~~, ((e6a21858-1849-462e-b2b0-0bc57b38fb0a)), [markdown link](https://www.markdownguide.org/basic-syntax/#links "this is a tooltip/title of this link"), [reference][1] do they look OK?
  
  **List**
- first with `inline code`
  1. one  
    next line, and code block:
  ```java
    Object method(String param) { return null; }
  ```
  2. two
- second
  id:: 666124a1-9253-46c8-aa5a-f7a6e0642648
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
	- one
	  logseq.order-list-type:: number
	- two
	  logseq.order-list-type:: number
	- three
	  logseq.order-list-type:: number
	- unordered item in between!
	- then restart
	- from one
	  logseq.order-list-type:: number
	- and so on...
	  logseq.order-list-type:: number
- Embedded block with Logseq's `{{embed}}`: {{embed ((666124a1-a914-4f1f-9cce-ac447fb37d41))}}
	- The embedded block above is "transparent", i.e. can be edited right at the embedding place.
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
- [-] canceled
	- CANCELLED A task that has been cancelled
- [?] question
- [!] important, problem
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
  
  ---
  [1] This is the details of the ref above.