# Task
id:: 6651adea-e1ed-4884-93eb-5ebd6086b62b
	- ((6651ecba-793d-43c5-8020-a9f260b032d8)) This is the ((67715dbd-5ba6-4fc8-bd3e-5fab97885ae7)) for ((66536578-c4d3-43f1-b35c-bf71120f0570)), as well as Task ((6667ac3c-8fff-43aa-92ac-fca2002e58f4)).
	- ## Task History
	  id:: 6776152d-99a1-4368-884d-84a15e04329c
	  collapsed:: true
		- ((67761267-06ef-4f0d-876a-bd354b896681))
		- ((677614c4-ea7d-47c0-89ee-afbacceb56e9))
	- ## 2025 Tasks
	  id:: 677614c4-ea7d-47c0-89ee-afbacceb56e9
	  collapsed:: true
		- ((67710747-2982-4134-875e-3b715313db87))
		- DONE turn ((677689e6-7163-4e94-ab65-18d3f51e3eb9)) into `{{deadline-warning}}`
		  id:: 677e7099-5dfc-43f4-8db0-67189cf8ef74
		  :LOGBOOK:
		  CLOCK: [2025-01-10 Fri 18:40:54]--[2025-01-10 Fri 19:27:42] =>  00:46:48
		  CLOCK: [2025-01-13 Mon 19:05:31]--[2025-01-13 Mon 20:14:12] =>  01:08:41
		  :END:
	- ## Current Tasks < ((677614c4-ea7d-47c0-89ee-afbacceb56e9)) > ((67763106-205f-4e01-affc-a68e1d8e53a9))
	  id:: 677630fe-ea99-436f-b39f-8bd2295e2eaf
		- TODO Add ((66533703-505d-432d-8368-6058eefb45f6)) to [[logseq/config.edn]] commands
		  id:: 67764f3d-c6b3-4f00-a53f-ec4dab0920f9
		  :LOGBOOK:
		  CLOCK: [2025-01-13 Mon 20:14:46]--[2025-01-13 Mon 20:27:13] =>  00:12:27
		  :END:
		- ((67714850-43c0-4c7f-8b50-838e014b06e0))
		  id:: 6772a6c7-f434-4911-9fa2-939b8db20c42
			- ((67714c6b-68b6-4f73-b209-56f5f184c4d9))
			- ((67715d03-9dbc-42b0-8589-064396a9c52b))
				- Here i'm planning for the task of designing master plan! 😉
			- ((67715dbd-5ba6-4fc8-bd3e-5fab97885ae7)) & ((67760c43-58c6-40eb-b874-40afae448966))
		- ...
	- ## Future Tasks
	  id:: 67763106-205f-4e01-affc-a68e1d8e53a9
		- ((671b29b6-68f7-47e1-b79c-f4d6284690a2))
		- ((66e3c1b8-eb83-47d6-b71e-193549b47f93))
		- WAIT symbols for ((66c8941d-6427-4e5c-9009-3af349500d7b))
		  :LOGBOOK:
		  CLOCK: [2024-08-23 Fri 12:16:21]
		  CLOCK: [2024-08-23 Fri 12:16:24]--[2025-01-02 Thu 13:27:34] =>  3169:11:10
		  :END:
		- WAIT view, projection, effect flow via wave propagation across a ((66c810a0-9861-4787-bdcf-1378219332be))
		  :LOGBOOK:
		  CLOCK: [2024-08-23 Fri 12:16:32]
		  CLOCK: [2024-08-23 Fri 12:16:43]--[2025-01-02 Thu 13:27:42] =>  3169:10:59
		  :END:
		- ((669f3107-a33a-4b26-a636-6da62fa5520e))
			- ((669f243f-41b7-4274-b954-9824ec3ac33b))
		- ((667d202e-f401-46ba-ab32-c4fd77b49ab1))
			- WAIT Add to ((6651e92e-fb34-4d24-a386-d9698c2e93f7)) various types of [extending dimensions](((667d202e-f401-46ba-ab32-c4fd77b49ab1))).
			  :LOGBOOK:
			  CLOCK: [2024-06-28 Fri 08:11:13]
			  :END:
		- WAIT ((66536e1b-6466-4153-90d6-583003d99a81)): Write a script to convert headless block ref to `[](((uuid)) "block content")` and a plugin to copy block ref in that format.
		  id:: 667d2479-487a-49ab-949f-722eb47a16ef
		  collapsed:: true
		  :LOGBOOK:
		  CLOCK: [2024-06-27 Thu 15:36:19]
		  :END:
			- Use [`[](ref "title")` syntax](https://www.markdownguide.org/basic-syntax/#adding-titles "add a title to a link")
			  id:: 66ac8222-836c-40b1-9f26-fc94c69f9f8e
			  collapsed:: true
				- Label-less block link syntax `[](((uuid)))` keeps rendering the block content as is (the same as `((uuid))`), like this: [](((66ac8222-836c-40b1-9f26-fc94c69f9f8e))).
				  collapsed:: true
					- Whereas putting block content into link label will make it not rendered properly, like this: [Use [`[](ref "title")` syntax](https://www.markdownguide.org/basic-syntax/#adding-titles "add a title to a link")](((66ac8222-836c-40b1-9f26-fc94c69f9f8e))).
					  id:: 66ac85cb-b5ee-4b6b-8ab1-82f90200be26
					  collapsed:: true
						- The rule of "first line as title" will also not applied.
					- Note that label-less external link shows nothing, like this "[](https://www.markdownguide.org/basic-syntax/#adding-titles)", and label-less block link without double parenthesis shows `Untitled`, like this [](66ac8222-836c-40b1-9f26-fc94c69f9f8e "hidden title").
				- The `title` is not shown, unlike in [external link](https://www.markdownguide.org/basic-syntax/#adding-titles "add a title to a link").
			- Plugin `Copy Block Link`
			  collapsed:: true
				- Copy to clipboard: [`await navigator.clipboard.writeText(textContent)`](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText).
				- Context menu `Copy block link`
					- [`logseq.Editor.registerBlockContextMenuItem()`](https://plugins-doc.logseq.com/logseq/Editor/registerBlockContextMenuItem)
					- Ref: [Block Shallow Copy (`logseq-shallow-copy`)](https://github.com/MateuszMyalski/logseq-plugin-shallow-copy)
				- ((66536710-7441-4fb8-986b-50d2eec762d7)) `Ctrl Shift C`
					- [`logseq.App.registerCommand{,Palette,Shortcut}()`](https://plugins-doc.logseq.com/logseq/App/registerCommand)
					- Ref: [Custom Workflow (`logseq-custom-workflows`)](https://github.com/sawhney17/logseq-custom-workflow-plugin)
			- Related plugins:
			  collapsed:: true
				- ((66ac509d-cc10-4b99-9a70-a27bed316a3a))
			- ((665359ff-79f1-4669-b10b-f2b0e633a7c1))
			  collapsed:: true
				- This also solves the current bug/issue that ((667d263b-658b-4560-b8cc-f6838534956d))
				- The issue of back-propagation of edit of block content to its refs:
					- Should it be automatized? It should be done manually, because the block content used in refs depends on these refs' contexts.
				- [Future-proof block references in Logseq](https://99rabbits.com/future-proof-block-references-in-logseq/) > ((66ac8222-836c-40b1-9f26-fc94c69f9f8e)) as [suggested by AlessandroLongo](https://www.reddit.com/r/logseq/comments/15x0qsv/comment/jx49poz/)
				- [Block reference to allow ((page-name#block-ref-name)) not just UUID](https://discuss.logseq.com/t/block-reference-to-allow-page-name-block-ref-name-not-just-uuid/2746)
			- ((94649b98-9711-4adf-ae25-aaf32b521c14))
		- TODO Backup & republish my contents on Facebook
		  collapsed:: true
			- Some of the fb posts have been migrated to the blog [CreatZy Notes](https://creatzynotes.blogspot.com/).
			- ((66602f61-b849-41a9-bdb8-ec91b96adaec)) Trigger: i had a hard time finding back [my post about catenary curve](https://www.facebook.com/share/p/9LfU1A6Mmxo2KTH3/).
		- <<End Future Tasks>>
		  -----------------------
	- query-table:: false
	  id:: 67110d13-b91a-4ebb-959b-9db4d2f6d61d
	  collapsed:: true
	  #+BEGIN_QUERY
	  {:title [:h3 "Other Tasks"]
	    :query [ 
	    :find (pull ?b [*])
	    :where
	      [?b :block/marker ?m]
	      (not [(contains? #{"DONE" "CANCELLED" "CANCELED"} ?m)] )
	      [?b :block/page ?p]
	      [?p :block/original-name ?pn]
	      (not [(contains? #{"Workspace"  "Theme Demo"} ?pn)] )
	    ] ; end query
	    :result-transform (fn [r] (map (fn [m] (assoc m :block/collapsed? true)) r))
	  }
	  #+END_QUERY