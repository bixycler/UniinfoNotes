# Workspace
id:: 66519638-cf5d-409b-9b98-15acabf2268c
	- ((6651ecba-793d-43c5-8020-a9f260b032d8)) This is the ((665d1a03-4c61-4d81-ac58-a5a1a7efe568)) for Will LE.
	  id:: 66600918-2b2b-417e-910b-2a60fdba7918
	- ***Pinned***: ((66536e1b-6466-4153-90d6-583003d99a81))
	  id:: 66603d58-ff5b-4e23-8dad-5dba527981f4
	- id:: 66600918-7717-48c0-9869-1776d05035f1
	- ## Workstack
	  id:: 6651adea-81d4-40a5-b96d-af6739e572eb
		- ### Git Commits
		  id:: 67139355-ac72-4e4c-b882-00bb3a3ea144
			- #### To be merged
			  id:: 67164cc1-e500-4889-9b6d-12d8dd7fc029
			  collapsed:: true
				-
			- #### WIPs
			  id:: 67164c57-8f45-46eb-92a9-f00b02dccfc9
				- Update `ClipboardRead.html`: reset buffer each time reading new clipboard
				- ...
			- ------
		-
		-
		- ((66fe9e2e-13cf-4b31-96e7-1b050eed47c4))
		-
		-
		-
		- ((66e3c1b8-eb83-47d6-b71e-193549b47f93))
		-
		- DOING symbols for ((66c8941d-6427-4e5c-9009-3af349500d7b))
		  :LOGBOOK:
		  CLOCK: [2024-08-23 Fri 12:16:21]
		  CLOCK: [2024-08-23 Fri 12:16:24]
		  :END:
		- DOING view, projection, effect flow via wave propagation across a ((66c810a0-9861-4787-bdcf-1378219332be))
		  :LOGBOOK:
		  CLOCK: [2024-08-23 Fri 12:16:32]
		  CLOCK: [2024-08-23 Fri 12:16:43]
		  :END:
		-
		- ((66ab774d-91d2-4c47-8546-78bb17e7e2bf)) < [](((66ab75a1-f4a0-4bab-a002-8e573546623a)) "description, 'title', notes, or anything else")
		- ((667d202e-f401-46ba-ab32-c4fd77b49ab1))
		- ((669f3107-a33a-4b26-a636-6da62fa5520e))
			- ((669f243f-41b7-4274-b954-9824ec3ac33b))
		-
		-
		- DOING ((669a1bec-3347-4915-83e4-dcffc4d482d1))
		  :LOGBOOK:
		  CLOCK: [2024-07-22 Mon 09:57:18]
		  CLOCK: [2024-07-22 Mon 09:57:20]
		  :END:
		- WAIT Add to ((6651e92e-fb34-4d24-a386-d9698c2e93f7)) various types of [extending dimensions](((667d202e-f401-46ba-ab32-c4fd77b49ab1))).
		  :LOGBOOK:
		  CLOCK: [2024-06-28 Fri 08:11:13]
		  :END:
		-
		-
		- ...
	-
	- ## Tasks
	  id:: 6651adea-52dd-4aa8-9942-a75af9a6a23f
		-
		-
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
		- WAIT Custom ((66600918-8c61-42af-b8a2-04bf05e9f782)) via ((6673f8ff-995c-455f-ae09-49bcb5311e2e))
		  id:: 6673f8bf-04c0-4f8f-bc36-982ce9cab87d
		  collapsed:: true
		  :LOGBOOK:
		  CLOCK: [2024-06-20 Thu 16:39:28]--[2024-06-23 Sun 16:26:56] =>  71:47:28
		  :END:
			- ((66602f61-b849-41a9-bdb8-ec91b96adaec)) ((6673fb2f-ef98-484a-b289-b50482edea47))
			- DONE Write [FoldableDemo.html](../assets/HTML/FoldableDemo.html)( ![src](../assets/HTML/FoldableDemo.html), showing `<details> <summary>` & CSS-only method) and [FolderDiv.html](../assets/HTML/FolderDiv.html)( ![src](../assets/HTML/FolderDiv.html), with custom element `<folder-div>`)
			  id:: 6677b47a-fcbb-47a0-bd60-cdf5ef1a17b8
			  collapsed:: true
			  :LOGBOOK:
			  CLOCK: [2024-06-19 Wed 08:27:23]--[2024-06-20 Thu 16:31:09] =>  32:03:46
			  :END:
				- This unplanned work is [triggered by](((66600918-9f27-44c2-8188-f043c244710c))):
					- The exported SPA is loaded too slowly (dozens of seconds) from AirTrip Intl. lab server.
					  id:: 6673fb2f-ef98-484a-b289-b50482edea47
					- a doc: [Creating a collapsible markdown on one page](https://forum.squarespace.com/topic/64115-creating-a-collapsible-markdown-on-one-page/)
				- For the new term ((66740af5-032a-4cb1-9c97-0e4d3933ab9b)) used in the custom element `<folder-div>`, i [researched](((66602f68-e23f-4b24-921e-b1a9fc0cc731))) ((667407ee-35ae-4d6f-8b58-89c19c0e0936)) ((66602f68-e23f-4b24-921e-b1a9fc0cc731)) ((6674066a-aeff-45af-96df-b0c2f278a2ae)) ((66602f68-e23f-4b24-921e-b1a9fc0cc731)) [treeview structure](((667530ed-809b-4d38-8522-1ae6c8449e28))), and drew ((667500cd-a31d-4828-9dc4-93948e27e534)).
				  collapsed:: true
			- DONE Write [LogseqUtils.js](../assets/HTML/LogseqUtils.js)( ![src](../assets/HTML/LogseqUtils.js), for posting request to http://localhost:12315/api)
			  :LOGBOOK:
			  CLOCK: [2024-06-21 Fri 13:00:24]--[2024-06-21 Fri 20:56:40] =>  07:56:16
			  :END:
			- DONE Write [LogseqGet.html](../assets/HTML/LogseqGet.html)( ![src](../assets/HTML/LogseqGet.html), for `logseq.Editor.get{Block,Page}`)
			  id:: 6675860a-c135-4a92-b4fe-206ebde974ff
			  collapsed:: true
			  :LOGBOOK:
			  CLOCK: [2024-06-21 Fri 13:00:24]--[2024-06-21 Fri 20:56:40] =>  07:56:16
			  CLOCK: [2024-06-23 Sun 15:00:17]--[2024-06-23 Sun 15:51:18] =>  00:51:01
			  :END:
				- ((66602f61-b849-41a9-bdb8-ec91b96adaec)) I need to know what's in the hidden `:LOGBOOK:`.
				  id:: 6669a3bd-7059-4e5a-b21b-d96cb3288557
				  collapsed:: true
					- The ((66535e71-3b71-416c-98dc-5dde5e6a76ff)) files and exported JSONs are too large, while i need to view only a specific block.
					  id:: 6669a3bd-5b32-4088-982a-2c359b66610d
			- DONE Write [LogseqQuery.html](../assets/HTML/LogseqQuery.html)( ![src](../assets/HTML/LogseqQuery.html), for `logseq.DB.q`)
			  collapsed:: true
			  :LOGBOOK:
			  CLOCK: [2024-08-02 Fri 15:00:26]--[2024-08-02 Fri 15:36:01] =>  00:35:35
			  :END:
			- DONE `logseq.DB.onChanged` catches block creation and modification events
			  collapsed:: true
			  => use it to automatically timestamp newly created blocks.
				- [Git plugin](((66f68ec1-9b7d-402f-b77f-fcd1fc36e500))) uses it for its option `checkWhenDBChanged`
				  id:: 66faa5fa-9fb9-4211-925b-614e5e63214c
					- [main.tsx](https://github.com/haydenull/logseq-plugin-git/blob/main/src/main.tsx#L171C1-L176C1)
					  ```js
					  if (logseq.settings?.checkWhenDBChanged) {
					    logseq.DB.onChanged(({ blocks, txData, txMeta }) => {
					      checkStatusWithDebounce();
					    });
					  }
					  ```
		-
		- TODO Auto-complete & typing assistant for **quotation marks**, symbols...
		- TODO Backup & republish my contents on Facebook
		  collapsed:: true
			- Some of the fb posts have been migrated to the blog [CreatZy Notes](https://creatzynotes.blogspot.com/).
			- ((66602f61-b849-41a9-bdb8-ec91b96adaec)) Trigger: i had a hard time finding back [my post about catenary curve](https://www.facebook.com/share/p/9LfU1A6Mmxo2KTH3/).
		-
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
	- ## Problems
	  id:: 6651adea-46e0-40ea-8fc4-3ef394068b0f
	  collapsed:: true
		-
		- [!] My expression of "arrogance"
		  collapsed:: true
			- Even i've never thought that i'm better/higher than anyone else, my expression does show some trace of arrogance which has been fed back by my (close) friends. Is shows something is hidden deep inside my unconsciousness. Here i list some causes that i can reflect on this problem.
			- 1st, the **illusion of** ((66537674-6cf9-4459-8bea-7c1858c694a3))
			  id:: 669a58b9-422a-40d9-adcf-b2aade86c170
			  The (holistic) view from above shows me the way and makes me feel that "i've known the way already, it's just a piece of cake" and forget that it's just a "map" and the actual walking the way is much much harder with much more efforts.
				- I've called it by many names: the karma of theorist (theorist karma), the sickness of talent (talent sickness).
				- My karma of theorist also corrodes others' trust on me.
				  id:: 668f4faf-db30-497a-a271-b2bbf5264413
				- My karma of theorist is deep.... [inside my trousers 😄](https://www.facebook.com/lexuandinhct/posts/pfbid02kppLiTrw7mWPdp3V8bVLq6MvQDb3FNBaseh1znLspueCQrcC1esTKbsT4PCB8663l)
				  collapsed:: true
					- ![KarmaOfTheorist.jpg](../assets/Will/KarmaOfTheorist.jpg)
				- This illusion contributes greatly to ((669a58b9-1a52-4ad7-932a-9e45ecb9960e)).
			- 2nd, the **implosive attitude** of my inner self toward external forms as if i'm fighting for the abolition of these forms ("đả phá"). Even though i consider "all views are equal"... they are just "equal in theory" while in practice i have a hidden tendency to consider my "inner view through content" superior to the "external view through form" of others.
		- [!] The clash between internal work and external work
		  id:: 6677b986-ada2-4c73-8a11-980cdf9cb6d4
		  collapsed:: true
			- As i dive deep inside, it's hard to surface up to do external works, hence many delays in (official) works.
				- I'm hooked to the deep works in front of my eyes. This hook is the tool that helps me to concentrate and avoid distraction from surrounding environment. 
				  id:: 669dc514-e137-43de-be7d-6b0a1ac2302d
				  :LOGBOOK:
				  CLOCK: [2024-07-22 Mon 09:34:02]
				  CLOCK: [2024-07-22 Mon 09:34:43]
				  :END:
					- Without distraction, it's easier for me to stay in the free & mindful state. But in the free state, it's also difficult for me to interact with external tools like note taking, speaking, writing, forming formula, etc.
					- This hook can be replaced with the [ujjayi breath](((66952126-bf33-40e1-a208-369df7aa9488))). Using the internal tool (breath) gives me more control than the external tool (external sink).
			- When i interrupt the internal work, my self is fragmented, heavy, lack motivation to do anything.
			- Perfectionism
			  id:: 6678d594-9819-4624-abd6-d4ec62b3874f
			  collapsed:: true
			  The requirement that my self must be smooth, full, round, coherent, unfragmented is the sign of perfectionism.
				- First, let's [refine](((669a5162-19e1-4c52-8888-ab7cbfe275ec))) the large circle into smaller circles, thus they are still round & perfect circles but can be interleaved with other works.
				  id:: 6677bc01-44ec-4e4a-aeed-d63996bc0c46
				- The illusion of "finish soon"
				  id:: 669a58b9-1a52-4ad7-932a-9e45ecb9960e
				  collapsed:: true
					- ((6651ecba-793d-43c5-8020-a9f260b032d8)) When we feel something is finishing soon, we concentrate more on it, put all of our effort to it to get it finished... until we're out of resource and recognize that it's still far from the finish line.
					- Like the first experience of ["this is not the true peak"](https://www.facebook.com/lexuandinhct/posts/pfbid02eArjSbGz7GhpU2aFwh2qia53BcuwhstSE263jXVvf9tamUbL2K2JCF2LD97RQQ4ql) when i climbed mount Núi Lớn, Vũng Tàu, when i was a child, until now, that illusion is still haunting me.
					- In gambling/game psychology, it's called "[near-miss effect](https://www.psychologyofgames.com/2016/09/the-near-miss-effect-and-game-rewards/)".
					  collapsed:: true
						- ((66602f61-b849-41a9-bdb8-ec91b96adaec)) [chat with Gemini](https://gemini.google.com/app/bdba2d82588d8307)
					- This [cognitive bias](https://en.wikipedia.org/wiki/Cognitive_bias) is just a kind of distortion in perspective view (projective/inversive geometry): 1/∞ = 0.
					  collapsed:: true
						- Our view is always distorted so that the far end always look shorter. So, when the goal is clearly visible to us, we can't help seeing the distance to it is short even if it's at infinity, just like the Moon looks very close to us at the horizon like "just some arms away".
					- The opposite of near-miss effect is the goal-fog effect where we lose motivation to reach a very near goal due to the obscurity of that goal.
					- It stems from ((669a58b9-422a-40d9-adcf-b2aade86c170))
						- The seemingly small and easy targets, which are just ((66537674-6cf9-4459-8bea-7c1858c694a3))s, draw me into the rabbit holes.
						  collapsed:: true
							- An "impossible bug/error" => debug deeply
							- An "unacceptable term/issue" => research deeply
							- An "illogical design" => modify deeply
						- The effect of false contradiction (hidden monster)
							- Sometime, the whole huge problem is abstracted into a key so small that it becomes a needle lost in a haystack and i cannot find/see that key easily.
							- => It seems that the problem is "impossible!"
							- => This discrepancy triggers my anger to tackle the problem "to the end".
						- The butterfly effect from a tiny mistake to a huge error, the [one-unit error](https://www.geogebra.org/m/xhpjjxyn) at the marginal cases, and so on, are just the extension of the abstracted complex systems.
				- The effort justification & sunk-cost fallacy
				  collapsed:: true
					- This is the push of the momentum of the past, which adds to the pull of the future "finish soon", constraining the subject to the rabbit hole of goal reaching.
				- The ((6678282b-d710-4c6b-b584-5f65012c192d)) effect
				  collapsed:: true
					- The great momentum of the past is the internal form.
					  collapsed:: true
						- Just be mindful that we don't lose that momentum when we switch to other works, just put it down to be picked up later on.
					- The clearly visible goal of the future is the external form.
					  collapsed:: true
						- The clarity of the goal shows that it's very large, like the Sun & Moon, hence a form outside.
						- Just be mindful that although it's worth pursuing, it's still very far.
					- The ((669a5162-19e1-4c52-8888-ab7cbfe275ec)) is to divide the form, the ((668f5490-c223-4a8a-9cc4-0bd71af4c097)) is to dissolve the form and direct it to the new form.
					- Mindfulness as a hole-punching tool to escape the form.
					  collapsed:: true
						- The tantric practice shows that both the accumulation of momentum and the "finish soon" effect require ignorance in the form of attachment to the external signal (sign of the goal).
						- Unmindfulness of the internal momentum makes it push us from behind and control us.
						- Unmindfulness of the illusion of the external signal makes it feel near outside while in fact it's near inside and very far outside. That's because the signal outside is just the image/shadow of the goal inside.
						  collapsed:: true
							- This discrepancy forces all of us to chase shadows from life to life.
				- ((66b1cfa4-369c-49ec-a461-cdda61633460))
			- Brain dumping tools, like ((66536e1b-6466-4153-90d6-583003d99a81)), can help reducing mental load & momentum, so that i can switch easier.
			  id:: 66b1cfa4-369c-49ec-a461-cdda61633460
			  collapsed:: true
				- Any new block, even plain text, should be [time tracked](((66b1cfa4-0f03-4da2-b34b-d995d3c888b0))) [with `Ctrl Enter` -> `TODO`](((66b1cfa4-8842-4b3c-876b-e60d4b7fd819))) or [with `Alt Enter` -> `DOING`](((66b1cfa4-33e0-4e5a-9a68-2e8e19b207ac))).
				  :LOGBOOK:
				  CLOCK: [2024-08-15 Thu 16:29:20]
				  :END:
				- [!] Too many fragmented non-`DONE` & non-`DOING` works will cost high overhead to reload these works into the mind later on.
				  :LOGBOOK:
				  CLOCK: [2024-08-15 Thu 16:29:13]
				  :END:
					- ((66602f68-e23f-4b24-921e-b1a9fc0cc731)) Must keep balance between leaving unfinished works and [completing works](((6678d594-9819-4624-abd6-d4ec62b3874f))).
					- ((66602f68-e23f-4b24-921e-b1a9fc0cc731)) We should regularly **clean up and reorganize** works so that later accesses will be easier, clearer.
				- addition = insertion sort
				  Each addition of new items into a previous work is a step of insertion sort.
				- access = reorganize
					- Each access of an old work from a new context reveals a new ((66723642-58f1-4a74-bba3-0108f14c6bac)), new ((667d0b78-fff6-49bc-90d5-165648ed56d3)), hence the old work should be updated to reflect this new view.
					- When a later access shows any difficulty in understanding or any inconsistency, the old work should be reorganized.
					- ((66602f68-e23f-4b24-921e-b1a9fc0cc731)) the more accesses to a work, the better organized that work will be.
			- Solution to my problem of "wandering, lost in complexity": shift from depth-first to breadth-first traversal
			  collapsed:: true
			  :LOGBOOK:
			  CLOCK: [2024-09-19 Thu 12:24:53]
			  :END:
				- when it's too deep with analytics (differential), it's too abstract, lacking context, groundless, formless, messy, collapsed, the object is sliced into disconnected parts
				- traversal on the breadth with CIfEr provides context, condition (duyên), form to stretch the loop out to be a full circle 🌕, to be the whole
		- [!] The issue of love, i.e. emotional attatchment
		  collapsed:: true
			- Deep inside, i feel the suffering of people as my suffering... but it seems to be my too much magnification via my own lens.
		- [!] Windows 10 (seems from Windows 7) lets its window borders be dragged off the screen!
		  id:: 66adf2e5-ddde-4ee3-8086-78ce57483837
		  collapsed:: true
		  :LOGBOOK:
		  CLOCK: [2024-08-03 Sat 15:30:44]--[2024-08-03 Sat 17:01:02] =>  01:30:18
		  :END:
			- ((665359ff-79f1-4669-b10b-f2b0e633a7c1))
				- This is a feature for seamless multi-display settings, but should be across displays next to each other only, not protruding out of visible areas like this.
				- Sometime we need to _intentionally drag windows partly off the screen_ to leave space for other windows and because we **don't want to resize** that window.
					- This can be balanced with the normal constraint of windows within screen by edge snapping.
						- But [Windows Snap](https://support.microsoft.com/en-us/windows/snap-your-windows-885a9b1e-a983-a3b1-16cd-c531795e6241) feature **always resize** the snapped window.
						- There's an option "When I snap a window, automatically resize it to fill available space", but unchecking it has no effect.
						  collapsed:: true
							- ![Windows10-SnapWindow-settings.png](../assets/GUI/Windows/Windows10-SnapWindow-settings.png)
				- StackOverflow question with negative answer: [Prevent windows from being dragged past the edge of screen](https://stackoverflow.com/questions/44219386/prevent-windows-from-being-dragged-past-the-edge-of-screen)
				- Someone met the problem of [windows open off screen](https://answers.microsoft.com/en-us/windows/forum/all/windows-10-windows-open-off-screen/0f2432ad-c60d-4bce-808b-3f0c403ce9f2) with no effective solution, too.
		- [!] The barrier between workspaces ("graphs" in Logseq)
		  collapsed:: true
			- In Logseq, ((665fe765-2bb7-4392-9140-10e187f0f208))
			- Some independent works, like [[Theme Demo]] , can be copied (manually).
			- But interlinked works are complicated:
				- Either we must copy the whole closure of linked works
				- Or we must prune "unnecessary" links.
		- [!] Timestamp in Logseq
		  collapsed:: true
			- [Displaying block timestamps](https://discuss.logseq.com/t/displaying-block-timestamps/24594)
			- Dynamic variable `<% today %>`: {{query <% today %> }}
			  collapsed:: true
		- [!] Time is always gone too fast! :(
		  id:: 66600918-315b-4f6c-970b-3039ac8ef912
		- ...
	- ## Questions
	  id:: 6651adea-f2f6-4c9e-80b4-ece0bb5038fb
	  collapsed:: true
		-
		- [?] What's the relation between  [lattice group](https://en.wikipedia.org/wiki/Lattice_(group)) and  [lattice order](https://en.wikipedia.org/wiki/Lattice_(order))?
		- [?] When will I be liberated :-?
		- ...
	- ## History
	  id:: 6651adea-e1ed-4884-93eb-5ebd6086b62b
		- DONE Import [[Unïnfo Theory]] from ((66536662-052f-46a4-a624-38858bffb334)) with ((665376f4-9335-4d38-843f-a4cf6ef6cd10)) ✅ 2024-05-18
		  id:: 66600918-db5b-43cb-9ce2-c88487b817a3
		- DONE Sync PC with mobile via GitHub & ((6653743f-8847-4b24-8c21-795c87254eb2)) ✅ 2024-05-19
		  collapsed:: true
			- [Instruction on Redit](https://www.reddit.com/r/ObsidianMD/comments/17odzjb/obsidian_android_syncing_via_github_in_2023/)
		- DONE Set ((66536710-7441-4fb8-986b-50d2eec762d7))s for ((66537617-23c2-43a9-9a14-5e18fe9aa36f)) blocks and show [[Table of Hotkey Assigned Commands in this Vault]] with ((665374b0-1ed9-420b-afc4-897a942c0be0)) ✅ 2024-05-19
		- CANCELLED Obsidian: Add parameter items to [[Table of Hotkey Assigned Commands in this Vault]] for read mode.
		  :LOGBOOK:
		  CLOCK: [2024-06-03 Mon 01:18:40]--[2024-06-03 Mon 01:18:42] =>  00:00:02
		  CLOCK: [2024-06-03 Mon 01:18:44]--[2024-06-03 Mon 01:18:45] =>  00:00:01
		  :END:
		- DONE Add ((6651adea-52dd-4aa8-9942-a75af9a6a23f)) with ((665373d3-8fd7-4963-9b72-a503e21e54e7)) ✅ 2024-05-21
		  collapsed:: true
			- DONE Install theme for custom statuses ✅ 2024-05-21
		- DONE Add themes & [[Theme Demo]] ✅ 2024-05-21
		- Thanks to Obsidian's core plugin "Unique note creator", I'm introduced to the very old method of [Zettelkasten](https://en.wikipedia.org/wiki/Zettelkasten) (card file, slip box) with the software [NoteCards](https://en.wikipedia.org/wiki/NoteCards), from 1984, as the origin the modern ((66536a32-fddd-465f-a47f-fa8e0ea9c8db))].
		  id:: 66600918-0d55-4778-abea-c2786f2928fd
		- DONE Logging all activities (on Obsidian) & design workflow for dashboard
		  id:: 66600918-8052-4513-8c1d-a467b3036fea
		  collapsed:: true
			- Result: ((66533a2a-6f29-4e4c-81d5-17883be64bdb))
			- Due to ((6651ade9-4d79-4715-9c8b-33b7b65c3aff)) and Obsidian's lack of support for text block, I've switched to ((66536e1b-6466-4153-90d6-583003d99a81)) .
			- Id-based solutions
			  collapsed:: true
				- Timestamp as id: history = list of text block id-ed by timestamp `yyyy-MMdd-hhmmss`, e.g. `2024-0521-202221`
				  collapsed:: true
					- Each block is tagged with `^$id` and its address is stored in a id note `history/$id`, so all refs to that block are through refs to the id note instead. When the block is moved, only its id note is affected.
					- However the block embedding is in ((66535660-643e-471a-a332-8f2306c5494f)) is messy with broken layout.
					- ((66536d32-30ad-4c07-8585-76ae9eb7fb22))s like ((66536e1b-6466-4153-90d6-583003d99a81)), [Dynalist](https://dynalist.io/), [Checkvist](https://checkvist.com/), [Legend](https://legendapp.com/) is much better at this block-based management and [transclusion](https://en.wikipedia.org/wiki/Transclusion).
				- Hash ids:
				  collapsed:: true
					- UUID used by ((66536e1b-6466-4153-90d6-583003d99a81))
					- Concatenated hash, e.g. `a123lkj_lkjfa121_comment`, used by Legend
					- Short hash used by ((66535660-643e-471a-a332-8f2306c5494f))
			-
		- [!] The issue of "folder & path" in Obsidian
		  id:: 6651ade9-4d79-4715-9c8b-33b7b65c3aff
		  collapsed:: true
			- CANCELLED ((66537315-7d1a-409a-a89b-2e33e58fe6e6))
			- DONE Define sound (exclusive) directory/folder  [completion:: 2024-05-22]: ((6651ade9-43c6-4beb-9981-cb03d53dc23c))
			- Solution for Obsidian's problem of folder:
			  collapsed:: true
				- path via dots in filename in reverse order, e.g. `dog.concept.mind.Will`
				- move the working blocks by hand: fold & cut
				- the moving blocks can contain outbound links but no inbound links
		- [!] ((66535660-643e-471a-a332-8f2306c5494f)) does not open correct "default browser" in Ubuntu 22.04 ✅ 2024-05-20
		  collapsed:: true
			- DONE Install plugin ((66535685-4fd2-4928-8c65-198ef6f3fe71)) ✅ 2024-05-20
			- <==  The cause is due to the separate home dir inside SNAP
			- ==> [Share this knowledge to forum](https://forum.obsidian.md/t/ubuntu-22-04-links-dont-use-default-chrome-browser/79532/3?u=harusada).
		- [!] Legend: Moving item to an article (H1), using Alt-M or menu, doesn't work due to the [fake hierarchy of heading](https://forum.legendapp.com/d/519-inferred-hierarchy-from-heading-size/9).
		  collapsed:: true
			- The current workaround is to use mouse dragging!
		- [?] Logseq: what's diff between "re-index current graph" and "rebuild search index"?
		  collapsed:: true
			- Re-index the graph does
			  collapsed:: true
				- regenerate all block ids that are *not referenced* by any `((block link))`;
				- regenerate metadata like timestamps.
			- Rebuild search index just rebuild the index for search function.
		- DONE Migrate wiki pages to text blocks
		  id:: 66600918-668a-49a6-ab23-ead39fc1cc80
		- DONE Add `alias of`, `form of`, `name of`, `from`, `to`
		  id:: 665cb063-d8b5-461e-9dcd-12bb85db1ee7
		- CANCELLED Auto-convert between links: wikilink, markdown link, external link
		- CANCELLED auto-create note to internalize external link.
		- CANCELLED Publishing in Obsidian
		  collapsed:: true
			- ((6653747e-b02a-4120-861c-f2fd6d686053))
			- ((66537405-7c71-4a5e-abb4-996a146bb52c))
			- Docs can be published right [from Logseq](((66695280-1674-477a-b4ff-eb508aa679e0))).
		- DONE Back to work of company!
		  :LOGBOOK:
		  CLOCK: [2024-06-03 Mon 10:02:15]--[2024-06-03 Mon 10:02:17] =>  00:00:02
		  CLOCK: [2024-06-03 Mon 10:02:18]--[2024-06-03 Mon 10:02:20] =>  00:00:02
		  CLOCK: [2024-06-03 Mon 10:19:30]--[2024-06-03 Mon 10:19:31] =>  00:00:01
		  CLOCK: [2024-06-03 Mon 10:19:32]--[2024-06-03 Mon 10:19:33] =>  00:00:01
		  CLOCK: [2024-06-03 Mon 10:19:34]--[2024-06-03 Mon 10:19:35] =>  00:00:01
		  CLOCK: [2024-06-03 Mon 10:19:44]--[2024-06-03 Mon 10:19:45] =>  00:00:01
		  CLOCK: [2024-06-03 Mon 10:23:46]--[2024-06-03 Mon 10:23:47] =>  00:00:01
		  CLOCK: [2024-06-03 Mon 10:32:01]--[2024-06-03 Mon 10:32:02] =>  00:00:01
		  CLOCK: [2024-06-03 Mon 10:32:07]--[2024-06-03 Mon 10:32:08] =>  00:00:01
		  CLOCK: [2024-06-03 Mon 10:33:10]--[2024-06-03 Mon 10:33:11] =>  00:00:01
		  CLOCK: [2024-06-03 Mon 10:33:13]--[2024-06-03 Mon 10:33:13] =>  00:00:00
		  CLOCK: [2024-06-03 Mon 10:38:17]--[2024-06-03 Mon 10:38:19] =>  00:00:02
		  CLOCK: [2024-06-03 Mon 10:38:21]--[2024-06-03 Mon 10:38:22] =>  00:00:01
		  CLOCK: [2024-06-03 Mon 10:39:47]--[2024-06-03 Mon 10:39:48] =>  00:00:01
		  CLOCK: [2024-06-03 Mon 10:42:12]--[2024-06-03 Mon 10:42:13] =>  00:00:01
		  CLOCK: [2024-06-03 Mon 10:42:14]--[2024-06-03 Mon 10:42:14] =>  00:00:00
		  CLOCK: [2024-06-03 Mon 10:42:15]--[2024-06-03 Mon 10:42:16] =>  00:00:01
		  CLOCK: [2024-06-03 Mon 10:44:45]--[2024-06-03 Mon 10:44:47] =>  00:00:02
		  CLOCK: [2024-06-03 Mon 10:46:16]--[2024-06-03 Mon 10:46:16] =>  00:00:00
		  CLOCK: [2024-06-03 Mon 10:47:21]--[2024-06-03 Mon 10:47:22] =>  00:00:01
		  CLOCK: [2024-06-03 Mon 10:47:23]--[2024-06-03 Mon 10:47:25] =>  00:00:02
		  CLOCK: [2024-06-03 Mon 10:47:31]--[2024-06-03 Mon 10:50:39] =>  00:03:08
		  CLOCK: [2024-06-03 Mon 10:50:40]--[2024-06-11 Tue 10:32:33] =>  191:41:53
		  :END:
		- DONE Set theme for Logseq
		  collapsed:: true
		  :LOGBOOK:
		  CLOCK: [2024-06-03 Mon 19:09:09]
		  CLOCK: [2024-06-03 Mon 19:09:35]--[2024-06-03 Mon 19:26:28] =>  00:16:53
		  CLOCK: [2024-06-03 Mon 19:26:29]--[2024-06-03 Mon 19:26:30] =>  00:00:01
		  CLOCK: [2024-06-03 Mon 19:26:31]--[2024-06-03 Mon 19:26:32] =>  00:00:01
		  CLOCK: [2024-06-03 Mon 19:26:33]--[2024-06-03 Mon 19:39:04] =>  00:12:31
		  CLOCK: [2024-06-03 Mon 19:39:09]--[2024-06-03 Mon 19:39:10] =>  00:00:01
		  CLOCK: [2024-06-03 Mon 19:39:11]--[2024-06-03 Mon 19:39:12] =>  00:00:01
		  CLOCK: [2024-06-03 Mon 19:39:18]--[2024-06-03 Mon 19:39:20] =>  00:00:02
		  CLOCK: [2024-06-03 Mon 19:39:20]--[2024-06-03 Mon 19:39:22] =>  00:00:02
		  CLOCK: [2024-06-03 Mon 19:39:35]--[2024-06-03 Mon 19:49:06] =>  00:09:31
		  CLOCK: [2024-06-03 Mon 19:49:07]--[2024-06-03 Mon 19:49:08] =>  00:00:01
		  CLOCK: [2024-06-03 Mon 19:49:09]--[2024-06-03 Mon 19:49:09] =>  00:00:00
		  CLOCK: [2024-06-03 Mon 19:49:10]--[2024-06-03 Mon 19:51:00] =>  00:01:50
		  CLOCK: [2024-06-03 Mon 19:51:01]--[2024-06-03 Mon 20:01:54] =>  00:10:53
		  CLOCK: [2024-06-03 Mon 20:01:55]--[2024-06-03 Mon 20:01:56] =>  00:00:01
		  CLOCK: [2024-06-03 Mon 20:01:56]--[2024-06-04 Tue 08:35:15] =>  12:33:19
		  :END:
			- No theme satisfies my need
				- ((665dc545-151a-485a-84b7-1310fef5151c)) ((665d78a5-6470-4e60-8fd1-d958fd62756e))
				  :LOGBOOK:
				  CLOCK: [2024-06-03 Mon 20:25:47]--[2024-06-03 Mon 20:25:52] =>  00:00:05
				  CLOCK: [2024-06-03 Mon 20:25:58]--[2024-06-04 Tue 08:35:24] =>  12:09:26
				  :END:
			- And update [[Theme Demo]] with Logseq's tasks.
		- DONE Make folded blocks more hilited: ((665f0ecc-3046-4602-a0cb-d557baab53ba))
		- DONE Pin ((66536e1b-6466-4153-90d6-583003d99a81)) to Workspace's ((66603d58-ff5b-4e23-8dad-5dba527981f4)).
		  id:: 66600918-d7dd-45cd-8a6f-117321fafbd9
		  collapsed:: true
			- ((666022fc-5a51-4e87-ba7c-6f67a0cf19de)) the "pinned tab" feature of `logseq-tabs` do not support different pinned tabs in different workspaces (graphs).
		- DONE Reduce brightness of the underline of block ref, because block refs are used intensively.
		  id:: 666044a5-4f15-4010-abd0-932a659188e0
		  :LOGBOOK:
		  CLOCK: [2024-06-05 Wed 17:57:52]--[2024-06-05 Wed 17:59:56] =>  00:02:04
		  :END:
		- DONE (Re)define 2 workflows in [`logseq-custom-workflows`](((66602f1d-a572-4fe8-997f-0fae15c6a3de))).
		- DONE Adjust style of ((666136d7-d118-464d-826c-9f842b267a3a)) so that it's completely blend with the surrounding context.
		  id:: 66606c4f-bd15-48e3-b971-006aae224bb5
		  collapsed:: true
			- ((666022fc-5a51-4e87-ba7c-6f67a0cf19de)) embedded block is transparent, i.e. its content can be edited right at the embedding site.
		- DONE ((6662725e-0e8e-42ec-927f-0e53b996e20c))
		  :LOGBOOK:
		  CLOCK: [2024-06-11 Tue 10:58:20]--[2024-06-11 Tue 15:13:36] =>  04:15:16
		  :END:
		- DONE Modify Logseq theme
		  collapsed:: true
			- so that ((66694be3-a924-4da8-af4c-bbba1c3e6fcc)) and scroll bar blends in;
			- sync the light theme and the default theme with CreatZy theme: ((66698fb6-d9ac-423f-845c-0f0f5c93abf2))
		- DONE Update ((66536e1b-6466-4153-90d6-583003d99a81)) while working.
		  id:: 66600918-d4fa-4048-8a2a-8ead18e3575c
		  :LOGBOOK:
		  CLOCK: [2024-06-05 Wed 17:23:59]
		  CLOCK: [2024-06-05 Wed 17:24:00]
		  CLOCK: [2024-06-05 Wed 17:24:12]
		  :END:
		- ((6677b47a-fcbb-47a0-bd60-cdf5ef1a17b8))
		- ((6675860a-c135-4a92-b4fe-206ebde974ff))
		- DONE ((6677b986-ada2-4c73-8a11-980cdf9cb6d4))
		  :LOGBOOK:
		  CLOCK: [2024-06-23 Sun 16:32:29]
		  CLOCK: [2024-06-23 Sun 16:32:30]--[2024-06-23 Sun 21:55:36] =>  05:23:06
		  :END:
		- DONE [Khám SK 2024](https://docs.google.com/document/d/1FaA3JB636a6fx9MVFJV9Kw93s4HauqS5pJznM8x5ue4/edit#heading=h.dgw388893y39) 
		  collapsed:: true
		  SCHEDULED: <2024-06-22 Sat 7:30>
		  :LOGBOOK:
		  CLOCK: [2024-06-04 Tue 10:26:25]--[2024-06-04 Tue 10:26:28] =>  00:00:03
		  :END:
			- Date: Sat 22, 7:30 ~ 9:00 -> 10:30;  12:30 ~ 14:00 -> 15:30
			- Address: Phòng khám DYM Medical Center, Phòng B103, [mPlaza Saigon](https://maps.app.goo.gl/49oMBpgkTzcyHy5DA), 39 Lê Duẩn (giao Hai Bà Trưng)
			- Kết quả:
				- máu, nước tiểu bình thường, hơi thiếu sắt
				- tuyến giáp trái có một nang lành tính
				- hơi loãng xương, huyết áp thấp, răng sâu nhiều
				- điện tâm đồ, ổ bụng bình thường
				- mắt: trái 7/10, phải 6/10 (dưới 1 độ, tức ổn định)
		- ((668d08c7-ec2d-4188-9745-6ccf643c9132))
		- DONE Add docs for ((66949495-3846-4f89-9ea5-c62b624d282c)).
		  id:: 6694a131-685d-4e75-b81f-04c8abfa64f4
		  :LOGBOOK:
		  CLOCK: [2024-07-15 Mon 11:10:32]--[2024-07-15 Mon 19:54:25] =>  08:43:53
		  :END:
		- ((66ab33e0-7646-4340-bdbc-28d581d1655d))
		  id:: 66b1c109-cf4f-4595-ac53-4102cd644505
		- ((66ab4281-68c2-4752-8a76-aede265449b6))
		- ((66adf2e5-ddde-4ee3-8086-78ce57483837))
		- ((66bb1083-3349-4769-86da-035ec7ef3e89))
		- ((66c2a1ae-d109-4a3d-b5a4-18fd040b4f3e))
		- ((66c7f663-6ff0-4a6c-a5b4-99b3848a94db))
		- ((66c7feaa-db1e-40ef-917d-be2a6efacdde))
		- ((66e278f7-ce05-4017-99b7-ff69b6228382))
		- [fb post](https://www.facebook.com/lexuandinhct/posts/pfbid02LJpymHByLfCFMJwxkpo55jgA4UAjxv6HmdTa2aCgQzFtAe6ukuHkrXKocm57dFNZl): Nhờ nuôi con cóc này trong nhà mà giờ mình đã hiểu tại sao lại gọi là "giương mắt ếch" ! 🐸
		  :LOGBOOK:
		  CLOCK: [2024-09-13 Fri 09:27:16]
		  :END:
		- ((66e3a0f4-579a-4668-97c2-cbb9984e59c2))
		- DONE ((6667c99a-792f-4230-9fc6-c5fae874daef))
		  id:: 666d71cd-20bd-4f24-b055-940eebf44591
		  :LOGBOOK:
		  CLOCK: [2024-06-11 Tue 10:58:26]--[2024-06-11 Tue 10:58:27] =>  00:00:01
		  CLOCK: [2024-09-13 Fri 15:33:28]--[2024-09-13 Fri 15:33:36] =>  00:00:08
		  :END:
		- History of my thinking methods
		  collapsed:: true
		  :LOGBOOK:
		  CLOCK: [2024-09-13 Fri 16:11:07]
		  :END:
			- First, open-eye thinking: use the external scene to pin/nail down my ideas
			- Then, close-eye thinking: use meditative state to keep from attachment
			- Now, close eye with ujjayi: use the breath of change (its noise) to blur the ideas, to further detach from them so that i can switch & transform them freelier.
			- When eyes open, the internal/perception screen is filled with external objects 
			  --> no space to protect the internal/underlying mechanism/structures
				- => With eyes closed, i can see deeper into the background, more wholesome
				- => With eyes open, i dive deeper into the foreground, more detailed
		- See the crucial link: ((66f29d57-a87f-4370-9f32-722922a7bff1))
		  id:: 66faa5fa-b843-490d-a7b3-a2400c11be86
		  :LOGBOOK:
		  CLOCK: [2024-09-25 Wed 20:35:03]
		  :END:
		- ((66f41254-a128-4a2c-a9c7-7fa422ec61f4))
		  :LOGBOOK:
		  CLOCK: [2024-09-25 Wed 20:48:07]
		  :END:
		- DONE Last Friday, i've lost the whole work of survey for "Env refactor" project, due to [a bug in the right sidebar](((66faa5f9-e82b-49cc-b9ed-2c97d28daa3e))). Then it's costed me 4 days to debug and do many things for backup:
		  collapsed:: true
		  :LOGBOOK:
		  CLOCK: [2024-10-02 Wed 18:09:02]
		  CLOCK: [2024-10-02 Wed 18:09:11]--[2024-10-02 Wed 19:09:11] =>  01:00:00
		  :END:
			- Use [Git plugin](((66f68ec1-9b7d-402f-b77f-fcd1fc36e500))), ((66faa5f9-8ffd-4542-b916-6e3528cabad8)) for automatic backup commits, then manually squash them down to a commit with a meaningful message.
			- However, the [Linux Snap version](((66faa5f9-bd71-4d05-9c03-b69e4077d6e7))) of my Logseq had problem with `git push`...
				- ((66602f68-e23f-4b24-921e-b1a9fc0cc731)) [Debug Git](((66fd1d03-f0d8-41b6-ba5e-7f040d343e33))), [debug SSH](((66fb7680-58c6-4954-8495-f199f5affa4e)))
				- ((66ae15d2-e2dd-443d-a666-c3b244fb6603)) the ((66fa8a1d-4fc0-4cb9-ad57-911cba799a04)) didn't allow SSH.
				- ((665dc545-151a-485a-84b7-1310fef5151c)) i switched to the [Flatpack version](((66faa5f9-96d5-4d40-a118-0adcedfc016a))), and tried the [AppImage version](((66faa5f9-d333-47df-88cf-7c6fab827842))).
			- Related to the issue of `.gitconfig` (`user.{name,email}`) not loaded, i remember that it was due to the separate home dir used by ((66fa8a1d-4fc0-4cb9-ad57-911cba799a04))...
				- ((665dc545-151a-485a-84b7-1310fef5151c)) i looked for "home dir"... but i cannot limit the scope to ((66536e1b-6466-4153-90d6-583003d99a81)) only.
				- ((66600918-5cb0-4833-9e52-acf2b17441c0)) i decided to create my own ((66fce880-77a2-41f7-8bdb-a86b7fc6fc77)) blocks.
				- ((66602f68-e23f-4b24-921e-b1a9fc0cc731)) research about ((66acc24c-4cd7-4568-8c47-79798fc09433)) and Clojure to write the [macro `{{search-query}}`](((66faa5f8-0711-4a23-afe0-fb8d2ebb644e))).
		- Yesterday, 1st October 2024, my wife had a birthday cheered with friend sisters but the cost are shared, due to the low salary caused by my may times late and off last months.
		  id:: 66fe3f98-c4bb-48df-a80d-e1fd41ae0be7
		  :logbook:
		  CLOCK: [2024-10-02 Wed 19:14:10]
		  :END:
		- Today, 14th Oct 2024, when editing ((66f6682b-744a-49b8-8e11-8e020fc24acc)), i need to reference the "world of appearance" of Hegel... and find out that i've lost the whole big note sumerizing Hegel's "world of appearance". 😢
		  collapsed:: true
		  :LOGBOOK:
		  CLOCK: [2024-10-14 Mon 20:13:25]
		  :END:
			- There's no trace about Hegel in [commit dc5a57f](https://github.com/bixycler/UniinfoNotes/commit/dc5a57fe9e60560439cac11240652cc847a9da2d), even though its commit message has the clear mention of "World of Appearance":
			  collapsed:: true
				- ```
				  - Encyclopedia 3.ed., Vol.1 - Logic > World of Appearance – Content Form – Relation
				  ```
			- I extract a brief sumerization from the chat with Gemini: [Hegel's Philosophy of Form](https://gemini.google.com/app/c8e4b0ec829815c2) to write this story: ((66faa5fa-d11a-4828-848e-b24bddba5411)).
			- This shows the [Logseq's danger of accidental deletion](((66faa5f9-e82b-49cc-b9ed-2c97d28daa3e))).
		- DONE Add `LogseqNotes` to [BeowulfBuildModDocs](https://github.com/quickom-lab/BeowulfBuildModDocs "title")
		  id:: 6677ea1b-479e-40b0-ab8e-64cf5c769e57
		  :LOGBOOK:
		  CLOCK: [2024-06-23 Sun 16:26:28]
		  CLOCK: [2024-10-20 Sun 20:15:42]--[2024-10-21 Mon 00:02:20] =>  03:46:38
		  :END:
		- ...