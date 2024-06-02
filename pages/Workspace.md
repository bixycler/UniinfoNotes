# Workspace
id:: 66519638-cf5d-409b-9b98-15acabf2268c
	- ((6651ecba-793d-43c5-8020-a9f260b032d8)) This is the [workspace](((66533a2a-6f29-4e4c-81d5-17883be64bdb))) for Will LE.
	-
	- ## Workstack
	  id:: 6651adea-81d4-40a5-b96d-af6739e572eb
		-
		-
	- ## Tasks
	  id:: 6651adea-52dd-4aa8-9942-a75af9a6a23f
		- TODO Back to work of company!
		-
		-
		- TODO Auto-complete & typing assistant for **quotation marks**, symbols...
		-
	- ## Problems
	  id:: 6651adea-46e0-40ea-8fc4-3ef394068b0f
	  collapsed:: true
		-
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
		  collapsed:: true
			- Result: ((66533a2a-6f29-4e4c-81d5-17883be64bdb))
			- Due to ((6651ade9-4d79-4715-9c8b-33b7b65c3aff)) and Obsidian's lack of support for text block, I've switched to Logseq.
			- Id-based solutions
			  collapsed:: true
				- Timestamp as id: history = list of text block id-ed by timestamp `yyyy-MMdd-hhmmss`, e.g. `2024-0521-202221`
				  collapsed:: true
					- Each block is tagged with `^$id` and its address is stored in a id note `history/$id`, so all refs to that block are through refs to the id note instead. When the block is moved, only its id note is affected.
					- However the block embedding is in ((66535660-643e-471a-a332-8f2306c5494f)) is messy with broken layout.
					- ((66536d32-30ad-4c07-8585-76ae9eb7fb22))s like ((66536e1b-6466-4153-90d6-583003d99a81)), [Dynalist](https://dynalist.io/), [Checkvist](https://checkvist.com/), [Legend](https://legendapp.com/) is much better at this block-based management and [transclusion](https://en.wikipedia.org/wiki/Transclusion).
				- Hash ids:
				  collapsed:: true
					- UUID used by Logseq
					- Concatenated hash, e.g. `a123lkj_lkjfa121_comment`, used by Legend
					- Short hash used by Obsidian
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
		- TODO Publishing in Obsidian
		  collapsed:: true
			- TODO ((6653747e-b02a-4120-861c-f2fd6d686053))
			- TODO ((66537405-7c71-4a5e-abb4-996a146bb52c))