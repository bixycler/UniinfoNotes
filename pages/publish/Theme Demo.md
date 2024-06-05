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
  + plus
	- minus
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
	  CLOCK: [2024-06-03 Mon 20:20:12]
	  :END:
	- NOW A task being done NOW (time tracked)
	  :LOGBOOK:
	  CLOCK: [2024-06-03 Mon 20:20:10]
	  CLOCK: [2024-06-03 Mon 20:20:12]
	  :END:
	-
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