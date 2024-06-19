# Workspace
id:: 66519638-cf5d-409b-9b98-15acabf2268c
	- ((6651ecba-793d-43c5-8020-a9f260b032d8)) This is the ((665d1a03-4c61-4d81-ac58-a5a1a7efe568)) for Will LE.
	- ***Pinned***
	  id:: 66603d58-ff5b-4e23-8dad-5dba527981f4
		- IN-PROGRESS Update ((66536e1b-6466-4153-90d6-583003d99a81)) while working.
		  :LOGBOOK:
		  CLOCK: [2024-06-05 Wed 17:23:59]
		  CLOCK: [2024-06-05 Wed 17:24:00]
		  CLOCK: [2024-06-05 Wed 17:24:12]
		  :END:
	-
	- ## Workstack
	  id:: 6651adea-81d4-40a5-b96d-af6739e572eb
		-
		-
		-
	- ## Tasks
	  id:: 6651adea-52dd-4aa8-9942-a75af9a6a23f
		-
		- ((6673f8bf-04c0-4f8f-bc36-982ce9cab87d))
		-
		- WAIT ((6667c99a-792f-4230-9fc6-c5fae874daef))
		  :LOGBOOK:
		  CLOCK: [2024-06-11 Tue 10:58:26]--[2024-06-11 Tue 10:58:27] =>  00:00:01
		  :END:
		-
		- TODO Auto-complete & typing assistant for **quotation marks**, symbols...
		-
	- ## Problems
	  id:: 6651adea-46e0-40ea-8fc4-3ef394068b0f
		-
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
		-
	- ## Questions
	  id:: 6651adea-f2f6-4c9e-80b4-ece0bb5038fb
	  collapsed:: true
		-
		- [?] What's the relation between  [lattice group](https://en.wikipedia.org/wiki/Lattice_(group)) and  [lattice order](https://en.wikipedia.org/wiki/Lattice_(order))?
		- [?] When will I be liberated :-?
		-
	- ## History
	  id:: 6651adea-e1ed-4884-93eb-5ebd6086b62b
		- DONE Import [[Unïnfo Theory]] from ((66536662-052f-46a4-a624-38858bffb334)) with ((665376f4-9335-4d38-843f-a4cf6ef6cd10)) ✅ 2024-05-18
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
		  id:: 665d1a03-1967-4260-a306-9ba465c1dd63
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
		  collapsed:: true
			- ((666022fc-5a51-4e87-ba7c-6f67a0cf19de)) the "pinned tab" feature of `logseq-tabs` do not support different pinned tabs in different workspaces (graphs).
		- DONE Reduce brightness of the underline of block ref, because block refs are used intensively.
		  :LOGBOOK:
		  CLOCK: [2024-06-05 Wed 17:57:52]--[2024-06-05 Wed 17:59:56] =>  00:02:04
		  :END:
		- DONE (Re)define 2 workflows in [`logseq-custom-workflows`](((66602f1d-a572-4fe8-997f-0fae15c6a3de))).
		- DONE Adjust style of ((666136d7-d118-464d-826c-9f842b267a3a)) so that it's completely blend with the surrounding context.
		  collapsed:: true
			- ((666022fc-5a51-4e87-ba7c-6f67a0cf19de)) embedded block is transparent, i.e. its content can be edited right at the embedding site.
		- DONE ((6662725e-0e8e-42ec-927f-0e53b996e20c))
		  :LOGBOOK:
		  CLOCK: [2024-06-11 Tue 10:58:20]--[2024-06-11 Tue 15:13:36] =>  04:15:16
		  :END:
		- DONE Modify Logseq theme
			- so that ((66694be3-a924-4da8-af4c-bbba1c3e6fcc)) and scroll bar blends in;
			- sync the light theme and the default theme with CreatZy theme: ((66698fb6-d9ac-423f-845c-0f0f5c93abf2))
		- TODO Custom ((66600918-8c61-42af-b8a2-04bf05e9f782)) via ((6673f8ff-995c-455f-ae09-49bcb5311e2e))
		  id:: 6673f8bf-04c0-4f8f-bc36-982ce9cab87d
		  :LOGBOOK:
		  CLOCK: [2024-06-20 Thu 16:39:28]--[2024-06-20 Thu 16:39:46] =>  00:00:18
		  :END:
			- ((66602f61-b849-41a9-bdb8-ec91b96adaec)) ((6673fb2f-ef98-484a-b289-b50482edea47))
		- DONE Write [FoldableDemo.html](../assets/HTML/FoldableDemo.html)( ![src](../assets/HTML/FoldableDemo.html), showing `<details> <summary>` & CSS-only method) and [FolderDiv.html](../assets/HTML/FolderDiv.html)( ![src](../assets/HTML/FolderDiv.html), with custom element `<folder-div>`)
		  collapsed:: true
		  :LOGBOOK:
		  CLOCK: [2024-06-19 Wed 08:27:23]--[2024-06-20 Thu 16:31:09] =>  32:03:46
		  :END:
			- This unplanned work is [triggered by](((66600918-9f27-44c2-8188-f043c244710c))):
				- The exported SPA is loaded too slowly (dozens of seconds) from AirTrip Intl. lab server.
				  id:: 6673fb2f-ef98-484a-b289-b50482edea47
				- a doc: [Creating a collapsible markdown on one page](https://forum.squarespace.com/topic/64115-creating-a-collapsible-markdown-on-one-page/)