## 2024 Tasks <a class="logseq-meta" id="67761267-06ef-4f0d-876a-bd354b896681" ></a>
	- DONE Import [[Unïnfo Theory]] from [<span class="link-h2">GitHub</span>](../../../publish/CommonMark/Mind Jungle.cm.md#66536662-052f-46a4-a624-38858bffb334) with [Obsidian Importer](../../../publish/CommonMark/Mind Jungle.cm.md#665376f4-9335-4d38-843f-a4cf6ef6cd10) ✅ 2024-05-18 <a class="logseq-meta" id="66600918-db5b-43cb-9ce2-c88487b817a3" ></a>
	- DONE Sync PC with mobile via GitHub & [Obsidian Git](../../../publish/CommonMark/Mind Jungle.cm.md#6653743f-8847-4b24-8c21-795c87254eb2) ✅ 2024-05-19 <a class="logseq-meta" data-collapsed="true" ></a>
		- [Instruction on Redit](https://www.reddit.com/r/ObsidianMD/comments/17odzjb/obsidian_android_syncing_via_github_in_2023/)
	- DONE Set [<span class="link-h2">hotkey</span>](../../../publish/CommonMark/Mind Jungle.cm.md#66536710-7441-4fb8-986b-50d2eec762d7)s for [<span class="link-h3">foldable</span>](../../../publish/CommonMark/Uniinfo.cm.md#66537617-23c2-43a9-9a14-5e18fe9aa36f) blocks and show [[Table of Hotkey Assigned Commands in this Vault]] with [Obsidian Dataview](../../../publish/CommonMark/Mind Jungle.cm.md#665374b0-1ed9-420b-afc4-897a942c0be0) ✅ 2024-05-19
	- CANCELLED Obsidian: Add parameter items to [[Table of Hotkey Assigned Commands in this Vault]] for read mode. <a class="logseq-meta" data-logbook="CLOCK: [2024-06-03 Mon 01:18:40]--[2024-06-03 Mon 01:18:42] =&gt;  00:00:02&#10;CLOCK: [2024-06-03 Mon 01:18:44]--[2024-06-03 Mon 01:18:45] =&gt;  00:00:01&#10;" ></a>
	- DONE Add [<span class="link-h1">Task</span>](../../../publish/CommonMark/Task.cm.md#6651adea-e1ed-4884-93eb-5ebd6086b62b) with [Obsidian Tasks](../../../publish/CommonMark/Mind Jungle.cm.md#665373d3-8fd7-4963-9b72-a503e21e54e7) ✅ 2024-05-21 <a class="logseq-meta" data-collapsed="true" ></a>
		- DONE Install theme for custom statuses ✅ 2024-05-21
	- DONE Add themes & [[Theme Demo]] ✅ 2024-05-21
	- Thanks to Obsidian's core plugin "Unique note creator", I'm introduced to the very old method of [Zettelkasten](https://en.wikipedia.org/wiki/Zettelkasten) (card file, slip box) with the software [NoteCards](https://en.wikipedia.org/wiki/NoteCards), from 1984, as the origin the modern [<span class="link-h2">wiki</span>](../../../publish/CommonMark/Mind Jungle.cm.md#66536a32-fddd-465f-a47f-fa8e0ea9c8db)]. <a class="logseq-meta" id="66600918-0d55-4778-abea-c2786f2928fd" ></a>
	- DONE Logging all activities (on Obsidian) & design workflow for dashboard <a class="logseq-meta" id="66600918-8052-4513-8c1d-a467b3036fea" data-collapsed="true" ></a>
		- Result: [<span class="link-h2">Workstack Workflow</span>](../../../publish/CommonMark/Mind Jungle.cm.md#66533a2a-6f29-4e4c-81d5-17883be64bdb)
		- Due to [[!] The issue of "folder & path" in Obsidian](#6651ade9-4d79-4715-9c8b-33b7b65c3aff) and Obsidian's lack of support for text block, I've switched to [<span class="link-h2">Logseq</span>](../../../publish/CommonMark/Mind Jungle.cm.md#66536e1b-6466-4153-90d6-583003d99a81) .
		- Id-based solutions <a class="logseq-meta" data-collapsed="true" ></a>
			- Timestamp as id: history = list of text block id-ed by timestamp `yyyy-MMdd-hhmmss`, e.g. `2024-0521-202221` <a class="logseq-meta" data-collapsed="true" ></a>
				- Each block is tagged with `^$id` and its address is stored in a id note `history/$id`, so all refs to that block are through refs to the id note instead. When the block is moved, only its id note is affected.
				- However the block embedding is in [<span class="link-h2">Obsidian</span>](../../../publish/CommonMark/Mind Jungle.cm.md#66535660-643e-471a-a332-8f2306c5494f) is messy with broken layout.
				- [<span class="link-h2">outliner</span>](../../../publish/CommonMark/Mind Jungle.cm.md#66536d32-30ad-4c07-8585-76ae9eb7fb22)s like [<span class="link-h2">Logseq</span>](../../../publish/CommonMark/Mind Jungle.cm.md#66536e1b-6466-4153-90d6-583003d99a81), [Dynalist](https://dynalist.io/), [Checkvist](https://checkvist.com/), [Legend](https://legendapp.com/) is much better at this block-based management and [transclusion](https://en.wikipedia.org/wiki/Transclusion).
			- Hash ids: <a class="logseq-meta" data-collapsed="true" ></a>
				- UUID used by [<span class="link-h2">Logseq</span>](../../../publish/CommonMark/Mind Jungle.cm.md#66536e1b-6466-4153-90d6-583003d99a81)
				- Concatenated hash, e.g. `a123lkj_lkjfa121_comment`, used by Legend
				- Short hash used by [<span class="link-h2">Obsidian</span>](../../../publish/CommonMark/Mind Jungle.cm.md#66535660-643e-471a-a332-8f2306c5494f)
		- <zwsp>
	- [!] The issue of "folder & path" in Obsidian <a class="logseq-meta" id="6651ade9-4d79-4715-9c8b-33b7b65c3aff" data-collapsed="true" ></a>
		- CANCELLED [Folder Note](../../../publish/CommonMark/Mind Jungle.cm.md#66537315-7d1a-409a-a89b-2e33e58fe6e6)
		- DONE Define sound (exclusive) directory/folder  [completion:: 2024-05-22]: [directory/folder = namespace (exclusive)](2024 Brainstorms.cm.md#6651ade9-43c6-4beb-9981-cb03d53dc23c)
		- Solution for Obsidian's problem of folder: <a class="logseq-meta" data-collapsed="true" ></a>
			- path via dots in filename in reverse order, e.g. `dog.concept.mind.Will`
			- move the working blocks by hand: fold & cut
			- the moving blocks can contain outbound links but no inbound links
	- [!] [<span class="link-h2">Obsidian</span>](../../../publish/CommonMark/Mind Jungle.cm.md#66535660-643e-471a-a332-8f2306c5494f) does not open correct "default browser" in Ubuntu 22.04 ✅ 2024-05-20 <a class="logseq-meta" data-collapsed="true" ></a>
		- DONE Install plugin [Open Link With](../../../publish/CommonMark/Mind Jungle.cm.md#66535685-4fd2-4928-8c65-198ef6f3fe71) ✅ 2024-05-20
		- <==  The cause is due to the separate home dir inside SNAP
		- ==> [Share this knowledge to forum](https://forum.obsidian.md/t/ubuntu-22-04-links-dont-use-default-chrome-browser/79532/3?u=harusada).
	- [!] Legend: Moving item to an article (H1), using Alt-M or menu, doesn't work due to the [fake hierarchy of heading](https://forum.legendapp.com/d/519-inferred-hierarchy-from-heading-size/9). <a class="logseq-meta" data-collapsed="true" ></a>
		- The current workaround is to use mouse dragging!
	- [?] Logseq: what's diff between "re-index current graph" and "rebuild search index"? <a class="logseq-meta" data-collapsed="true" ></a>
		- Re-index the graph does <a class="logseq-meta" data-collapsed="true" ></a>
			- regenerate all block ids that are *not referenced* by any `((block link))`;
			- regenerate metadata like timestamps.
		- Rebuild search index just rebuild the index for search function.
	- DONE Migrate wiki pages to text blocks <a class="logseq-meta" id="66600918-668a-49a6-ab23-ead39fc1cc80" ></a>
	- DONE Add `alias of`, `form of`, `name of`, `from`, `to` <a class="logseq-meta" id="665cb063-d8b5-461e-9dcd-12bb85db1ee7" ></a>
	- CANCELLED Auto-convert between links: wikilink, markdown link, external link
	- CANCELLED auto-create note to internalize external link.
	- CANCELLED Publishing in Obsidian <a class="logseq-meta" data-collapsed="true" ></a>
		- [Obsidian GitHub Publisher](../../../publish/CommonMark/Mind Jungle.cm.md#6653747e-b02a-4120-861c-f2fd6d686053)
		- [Obsidian Webpage HTML Export](../../../publish/CommonMark/Mind Jungle.cm.md#66537405-7c71-4a5e-abb4-996a146bb52c)
		- Docs can be published right [from Logseq](../../../publish/CommonMark/Mind Jungle.cm.md#66695280-1674-477a-b4ff-eb508aa679e0).
	- DONE Back to work of company! <a class="logseq-meta" data-logbook="CLOCK: [2024-06-03 Mon 10:02:15]--[2024-06-03 Mon 10:02:17] =&gt;  00:00:02&#10;CLOCK: [2024-06-03 Mon 10:02:18]--[2024-06-03 Mon 10:02:20] =&gt;  00:00:02&#10;CLOCK: [2024-06-03 Mon 10:19:30]--[2024-06-03 Mon 10:19:31] =&gt;  00:00:01&#10;CLOCK: [2024-06-03 Mon 10:19:32]--[2024-06-03 Mon 10:19:33] =&gt;  00:00:01&#10;CLOCK: [2024-06-03 Mon 10:19:34]--[2024-06-03 Mon 10:19:35] =&gt;  00:00:01&#10;CLOCK: [2024-06-03 Mon 10:19:44]--[2024-06-03 Mon 10:19:45] =&gt;  00:00:01&#10;CLOCK: [2024-06-03 Mon 10:23:46]--[2024-06-03 Mon 10:23:47] =&gt;  00:00:01&#10;CLOCK: [2024-06-03 Mon 10:32:01]--[2024-06-03 Mon 10:32:02] =&gt;  00:00:01&#10;CLOCK: [2024-06-03 Mon 10:32:07]--[2024-06-03 Mon 10:32:08] =&gt;  00:00:01&#10;CLOCK: [2024-06-03 Mon 10:33:10]--[2024-06-03 Mon 10:33:11] =&gt;  00:00:01&#10;CLOCK: [2024-06-03 Mon 10:33:13]--[2024-06-03 Mon 10:33:13] =&gt;  00:00:00&#10;CLOCK: [2024-06-03 Mon 10:38:17]--[2024-06-03 Mon 10:38:19] =&gt;  00:00:02&#10;CLOCK: [2024-06-03 Mon 10:38:21]--[2024-06-03 Mon 10:38:22] =&gt;  00:00:01&#10;CLOCK: [2024-06-03 Mon 10:39:47]--[2024-06-03 Mon 10:39:48] =&gt;  00:00:01&#10;CLOCK: [2024-06-03 Mon 10:42:12]--[2024-06-03 Mon 10:42:13] =&gt;  00:00:01&#10;CLOCK: [2024-06-03 Mon 10:42:14]--[2024-06-03 Mon 10:42:14] =&gt;  00:00:00&#10;CLOCK: [2024-06-03 Mon 10:42:15]--[2024-06-03 Mon 10:42:16] =&gt;  00:00:01&#10;CLOCK: [2024-06-03 Mon 10:44:45]--[2024-06-03 Mon 10:44:47] =&gt;  00:00:02&#10;CLOCK: [2024-06-03 Mon 10:46:16]--[2024-06-03 Mon 10:46:16] =&gt;  00:00:00&#10;CLOCK: [2024-06-03 Mon 10:47:21]--[2024-06-03 Mon 10:47:22] =&gt;  00:00:01&#10;CLOCK: [2024-06-03 Mon 10:47:23]--[2024-06-03 Mon 10:47:25] =&gt;  00:00:02&#10;CLOCK: [2024-06-03 Mon 10:47:31]--[2024-06-03 Mon 10:50:39] =&gt;  00:03:08&#10;CLOCK: [2024-06-03 Mon 10:50:40]--[2024-06-11 Tue 10:32:33] =&gt;  191:41:53&#10;" ></a>
	- DONE Set theme for Logseq <a class="logseq-meta" data-collapsed="true" data-logbook="CLOCK: [2024-06-03 Mon 19:09:09]&#10;CLOCK: [2024-06-03 Mon 19:09:35]--[2024-06-03 Mon 19:26:28] =&gt;  00:16:53&#10;CLOCK: [2024-06-03 Mon 19:26:29]--[2024-06-03 Mon 19:26:30] =&gt;  00:00:01&#10;CLOCK: [2024-06-03 Mon 19:26:31]--[2024-06-03 Mon 19:26:32] =&gt;  00:00:01&#10;CLOCK: [2024-06-03 Mon 19:26:33]--[2024-06-03 Mon 19:39:04] =&gt;  00:12:31&#10;CLOCK: [2024-06-03 Mon 19:39:09]--[2024-06-03 Mon 19:39:10] =&gt;  00:00:01&#10;CLOCK: [2024-06-03 Mon 19:39:11]--[2024-06-03 Mon 19:39:12] =&gt;  00:00:01&#10;CLOCK: [2024-06-03 Mon 19:39:18]--[2024-06-03 Mon 19:39:20] =&gt;  00:00:02&#10;CLOCK: [2024-06-03 Mon 19:39:20]--[2024-06-03 Mon 19:39:22] =&gt;  00:00:02&#10;CLOCK: [2024-06-03 Mon 19:39:35]--[2024-06-03 Mon 19:49:06] =&gt;  00:09:31&#10;CLOCK: [2024-06-03 Mon 19:49:07]--[2024-06-03 Mon 19:49:08] =&gt;  00:00:01&#10;CLOCK: [2024-06-03 Mon 19:49:09]--[2024-06-03 Mon 19:49:09] =&gt;  00:00:00&#10;CLOCK: [2024-06-03 Mon 19:49:10]--[2024-06-03 Mon 19:51:00] =&gt;  00:01:50&#10;CLOCK: [2024-06-03 Mon 19:51:01]--[2024-06-03 Mon 20:01:54] =&gt;  00:10:53&#10;CLOCK: [2024-06-03 Mon 20:01:55]--[2024-06-03 Mon 20:01:56] =&gt;  00:00:01&#10;CLOCK: [2024-06-03 Mon 20:01:56]--[2024-06-04 Tue 08:35:15] =&gt;  12:33:19&#10;" ></a>
		- No theme satisfies my need
			- [So,](../../../publish/CommonMark/Namespace.cm.md#665dc545-151a-485a-84b7-1310fef5151c) [DONE Compose [[logseq/custom.css]] from Logseq's built-in `style.css` & Ozean Theme's `main.css`.](../../../publish/CommonMark/Mind Jungle.cm.md#665d78a5-6470-4e60-8fd1-d958fd62756e) <a class="logseq-meta" data-logbook="CLOCK: [2024-06-03 Mon 20:25:47]--[2024-06-03 Mon 20:25:52] =&gt;  00:00:05&#10;CLOCK: [2024-06-03 Mon 20:25:58]--[2024-06-04 Tue 08:35:24] =&gt;  12:09:26&#10;" ></a>
		- And update [[Theme Demo]] with Logseq's tasks.
	- DONE Make folded blocks more hilited: [Folded blocks are hilited but very lightly](../../../publish/CommonMark/Mind Jungle.cm.md#665f0ecc-3046-4602-a0cb-d557baab53ba)
	- DONE Pin [<span class="link-h2">Logseq</span>](../../../publish/CommonMark/Mind Jungle.cm.md#66536e1b-6466-4153-90d6-583003d99a81) to Workspace's [***Pinned***: ((66536e1b-6466-4153-90d6-583003d99a81))](../../../publish/CommonMark/Workspace.cm.md#66603d58-ff5b-4e23-8dad-5dba527981f4). <a class="logseq-meta" id="66600918-d7dd-45cd-8a6f-117321fafbd9" data-collapsed="true" ></a>
		- [because](../../../publish/CommonMark/Namespace.cm.md#666022fc-5a51-4e87-ba7c-6f67a0cf19de) the "pinned tab" feature of `logseq-tabs` do not support different pinned tabs in different workspaces (graphs).
	- DONE Reduce brightness of the underline of block ref, because block refs are used intensively. <a class="logseq-meta" id="666044a5-4f15-4010-abd0-932a659188e0" data-logbook="CLOCK: [2024-06-05 Wed 17:57:52]--[2024-06-05 Wed 17:59:56] =&gt;  00:02:04&#10;" ></a>
	- DONE (Re)define 2 workflows in [`logseq-custom-workflows`](../../../publish/CommonMark/Mind Jungle.cm.md#66602f1d-a572-4fe8-997f-0fae15c6a3de).
	- DONE Adjust style of [Embed block `.color-level.embed-block`](#666136d7-d118-464d-826c-9f842b267a3a) so that it's completely blend with the surrounding context. <a class="logseq-meta" id="66606c4f-bd15-48e3-b971-006aae224bb5" data-collapsed="true" ></a>
		- [because](../../../publish/CommonMark/Namespace.cm.md#666022fc-5a51-4e87-ba7c-6f67a0cf19de) embedded block is transparent, i.e. its content can be edited right at the embedding site.
	- DONE [Thread ((66723642-58f1-4a74-bba3-0108f14c6bac))s: fractal circular blobs, tree, mountain range](2024 Brainstorms.cm.md#6662725e-0e8e-42ec-927f-0e53b996e20c) <a class="logseq-meta" data-logbook="CLOCK: [2024-06-11 Tue 10:58:20]--[2024-06-11 Tue 15:13:36] =&gt;  04:15:16&#10;" ></a>
	- DONE Modify Logseq theme <a class="logseq-meta" data-collapsed="true" ></a>
		- so that [the bullet border of collapsed block is **more hillited** to stand out](../../../publish/CommonMark/Mind Jungle.cm.md#66694be3-a924-4da8-af4c-bbba1c3e6fcc) and scroll bar blends in;
		- sync the light theme and the default theme with CreatZy theme: [So i customize `data-color=logseq` to match CreatZy theme.](../../../publish/CommonMark/Mind Jungle.cm.md#66698fb6-d9ac-423f-845c-0f0f5c93abf2)
	- DONE Update [<span class="link-h2">Logseq</span>](../../../publish/CommonMark/Mind Jungle.cm.md#66536e1b-6466-4153-90d6-583003d99a81) while working. <a class="logseq-meta" id="66600918-d4fa-4048-8a2a-8ead18e3575c" data-logbook="CLOCK: [2024-06-05 Wed 17:23:59]&#10;CLOCK: [2024-06-05 Wed 17:24:00]&#10;CLOCK: [2024-06-05 Wed 17:24:12]&#10;" ></a>
	- [DONE Write [FoldableDemo.html](../assets/HTML/FoldableDemo.html)( ![src](../assets/HTML/FoldableDemo.html), showing `<details> <summary>` & CSS-only method) and [FolderDiv.html](../assets/HTML/FolderDiv.html)( ![src](../assets/HTML/FolderDiv.html), with custom element `<folder-div>`)](../../../publish/CommonMark/Mind Jungle.cm.md#6677b47a-fcbb-47a0-bd60-cdf5ef1a17b8)
	- [DONE Write [LogseqGet.html](../assets/HTML/LogseqGet.html)( ![src](../assets/HTML/LogseqGet.html), for `logseq.Editor.get{Block,Page}`)](../../../publish/CommonMark/Mind Jungle.cm.md#6675860a-c135-4a92-b4fe-206ebde974ff)
	- DONE [[!] The clash between internal work and external work](../../../publish/CommonMark/Mind Jungle.cm.md#6677b986-ada2-4c73-8a11-980cdf9cb6d4) <a class="logseq-meta" data-logbook="CLOCK: [2024-06-23 Sun 16:32:29]&#10;CLOCK: [2024-06-23 Sun 16:32:30]--[2024-06-23 Sun 21:55:36] =&gt;  05:23:06&#10;" ></a>
	- DONE [Khám SK 2024](https://docs.google.com/document/d/1FaA3JB636a6fx9MVFJV9Kw93s4HauqS5pJznM8x5ue4/edit#heading=h.dgw388893y39)  <a class="logseq-meta" data-collapsed="true" ></a>
	  <br>SCHEDULED: <2024-06-22 Sat 7:30> <a class="logseq-meta" data-logbook="CLOCK: [2024-06-04 Tue 10:26:25]--[2024-06-04 Tue 10:26:28] =&gt;  00:00:03&#10;" ></a>
		- Date: Sat 22, 7:30 ~ 9:00 -> 10:30;  12:30 ~ 14:00 -> 15:30
		- Address: Phòng khám DYM Medical Center, Phòng B103, [mPlaza Saigon](https://maps.app.goo.gl/49oMBpgkTzcyHy5DA), 39 Lê Duẩn (giao Hai Bà Trưng)
		- Kết quả:
			- máu, nước tiểu bình thường, hơi thiếu sắt
			- tuyến giáp trái có một nang lành tính
			- hơi loãng xương, huyết áp thấp, răng sâu nhiều
			- điện tâm đồ, ổ bụng bình thường
			- mắt: trái 7/10, phải 6/10 (dưới 1 độ, tức ổn định)
	- [$i$, the *internal imaginary impression* that bridges the gap, complete the circle, reverts (reduces) the entropy of the external "real" world, is the internal image reflecting the external world.](2024 Brainstorms.cm.md#668d08c7-ec2d-4188-9745-6ccf643c9132)
	- DONE Add docs for [Linux](#66949495-3846-4f89-9ea5-c62b624d282c). <a class="logseq-meta" id="6694a131-685d-4e75-b81f-04c8abfa64f4" data-logbook="CLOCK: [2024-07-15 Mon 11:10:32]--[2024-07-15 Mon 19:54:25] =&gt;  08:43:53&#10;" ></a>
	- [DONE Last weekend, my wife caught a cold after some days relaxing, then hospitalized due to [lung abscess](https://en.wikipedia.org/wiki/Lung_abscess).](2024 Stories.cm.md#66ab33e0-7646-4340-bdbc-28d581d1655d) <a class="logseq-meta" id="66b1c109-cf4f-4595-ac53-4102cd644505" ></a>
	- [The end of the [theorist karma](((669a58b9-422a-40d9-adcf-b2aade86c170)))](2024 Stories.cm.md#66ab4281-68c2-4752-8a76-aede265449b6)
	- [[!] Windows 10 (seems from Windows 7) lets its window borders be dragged off the screen!](2024 Brainstorms.cm.md#66adf2e5-ddde-4ee3-8086-78ce57483837)
	- [IN-PROGRESS From yesterday, 12 August, I've got back to basics to train the "conscious breath throughout the day" with [ujjayi](((66952126-bf33-40e1-a208-369df7aa9488))).](2024 Stories.cm.md#66bb1083-3349-4769-86da-035ec7ef3e89)
	- [Today, August 17th, thanks to Ms. Thu, i've known about the [Aimesoft company](https://www.aimesoft.com/multimodalai.html) with ((66c2ff0a-9ad0-4058-b5aa-a7fff563a3aa)).](2024 Stories.cm.md#66c2a1ae-d109-4a3d-b5a4-18fd040b4f3e)
	- [I'm practicing clean-room method of mental works with ujjayi](2024 Stories.cm.md#66c7f663-6ff0-4a6c-a5b4-99b3848a94db)
	- [Tonight, my tantric practice shows the art of non-forcing:](2024 Stories.cm.md#66c7feaa-db1e-40ef-917d-be2a6efacdde)
	- [First time reverse nose-throat inflammation when it has affected the throat](2024 Stories.cm.md#66e278f7-ce05-4017-99b7-ff69b6228382)
	- [fb post](https://www.facebook.com/lexuandinhct/posts/pfbid02LJpymHByLfCFMJwxkpo55jgA4UAjxv6HmdTa2aCgQzFtAe6ukuHkrXKocm57dFNZl): Nhờ nuôi con cóc này trong nhà mà giờ mình đã hiểu tại sao lại gọi là "giương mắt ếch" ! 🐸 <a class="logseq-meta" data-logbook="CLOCK: [2024-09-13 Fri 09:27:16]&#10;" ></a>
	- [Toward the end of love karma/debt](2024 Stories.cm.md#66e3a0f4-579a-4668-97c2-cbb9984e59c2)
	- DONE [Law of ((669a1d82-91c8-40fd-81f5-e8ffe56e9e9c)) restoration](../../../publish/CommonMark/Uniinfo.cm.md#6667c99a-792f-4230-9fc6-c5fae874daef) <a class="logseq-meta" id="666d71cd-20bd-4f24-b055-940eebf44591" data-logbook="CLOCK: [2024-06-11 Tue 10:58:26]--[2024-06-11 Tue 10:58:27] =&gt;  00:00:01&#10;CLOCK: [2024-09-13 Fri 15:33:28]--[2024-09-13 Fri 15:33:36] =&gt;  00:00:08&#10;" ></a>
	- History of my thinking methods <a class="logseq-meta" data-collapsed="true" data-logbook="CLOCK: [2024-09-13 Fri 16:11:07]&#10;" ></a>
		- First, open-eye thinking: use the external scene to pin/nail down my ideas
		- Then, close-eye thinking: use meditative state to keep from attachment
		- Now, close eye with ujjayi: use the breath of change (its noise) to blur the ideas, to further detach from them so that i can switch & transform them freelier.
		- When eyes open, the [internal/perception screen](../../../publish/CommonMark/Uniinfo.cm.md#66ea4711-1392-4f5c-bea2-badc71a2fb9e) is filled with external objects 
		  <br>--> no space to protect the internal/underlying mechanism/structures
			- => With eyes closed, i can see deeper into the background, more wholesome
			- => With eyes open, i dive deeper into the foreground, more detailed
	- DONE See the crucial link: [**“awareness = equalization” is the duality of the** ((94e87dc9-71af-477c-aa70-0f448c2f1e20))](2024 Brainstorms.cm.md#66f29d57-a87f-4370-9f32-722922a7bff1) <a class="logseq-meta" id="66faa5fa-b843-490d-a7b3-a2400c11be86" data-logbook="CLOCK: [2024-09-25 Wed 20:35:03]&#10;CLOCK: [2025-07-03 Thu 19:46:16]&#10;" ></a>
	- [Last Sunday, 22th Sep, i discovered the little miz Thương as the dual of the little mister Động.](2024 Stories.cm.md#66f41254-a128-4a2c-a9c7-7fa422ec61f4) <a class="logseq-meta" data-logbook="CLOCK: [2024-09-25 Wed 20:48:07]&#10;" ></a>
	- DONE Last Friday, i've lost the whole work of survey for "Env refactor" project, due to [a bug in the right sidebar](../../../publish/CommonMark/Mind Jungle.cm.md#66faa5f9-e82b-49cc-b9ed-2c97d28daa3e). Then it's costed me 4 days to debug and do many things for backup: <a class="logseq-meta" data-collapsed="true" data-logbook="CLOCK: [2024-10-02 Wed 18:09:02]&#10;CLOCK: [2024-10-02 Wed 18:09:11]--[2024-10-02 Wed 19:09:11] =&gt;  01:00:00&#10;" ></a>
		- Use [Git plugin](../../../publish/CommonMark/Mind Jungle.cm.md#66f68ec1-9b7d-402f-b77f-fcd1fc36e500), [Built-in ((666ba1e2-19d1-409e-b30e-42a99b7e4ec0))](../../../publish/CommonMark/Mind Jungle.cm.md#66faa5f9-8ffd-4542-b916-6e3528cabad8) for automatic backup commits, then manually squash them down to a commit with a meaningful message.
		- However, the [Linux Snap version](../../../publish/CommonMark/Mind Jungle.cm.md#66faa5f9-bd71-4d05-9c03-b69e4077d6e7) of my Logseq had problem with `git push`...
			- [⇒](../../../publish/CommonMark/Namespace.cm.md#66602f68-e23f-4b24-921e-b1a9fc0cc731) [Debug Git](#66fd1d03-f0d8-41b6-ba5e-7f040d343e33), [debug SSH](#66fb7680-58c6-4954-8495-f199f5affa4e)
			- [Cause:](../../../publish/CommonMark/Namespace.cm.md#66ae15d2-e2dd-443d-a666-c3b244fb6603) the [Snap Sandbox](#66fa8a1d-4fc0-4cb9-ad57-911cba799a04) didn't allow SSH.
			- [So,](../../../publish/CommonMark/Namespace.cm.md#665dc545-151a-485a-84b7-1310fef5151c) i switched to the [Flatpack version](../../../publish/CommonMark/Mind Jungle.cm.md#66faa5f9-96d5-4d40-a118-0adcedfc016a), and tried the [AppImage version](../../../publish/CommonMark/Mind Jungle.cm.md#66faa5f9-d333-47df-88cf-7c6fab827842).
		- Related to the issue of `.gitconfig` (`user.{name,email}`) not loaded, i remember that it was due to the separate home dir used by [Snap Sandbox](#66fa8a1d-4fc0-4cb9-ad57-911cba799a04)...
			- [So,](../../../publish/CommonMark/Namespace.cm.md#665dc545-151a-485a-84b7-1310fef5151c) i looked for "home dir"... but i cannot limit the scope to [<span class="link-h2">Logseq</span>](../../../publish/CommonMark/Mind Jungle.cm.md#66536e1b-6466-4153-90d6-583003d99a81) only.
			- [Thus,](../../../publish/CommonMark/Namespace.cm.md#66600918-5cb0-4833-9e52-acf2b17441c0) i decided to create my own [<span class="link-h2">Search</span>](../../../publish/CommonMark/Workspace.cm.md#66fce880-77a2-41f7-8bdb-a86b7fc6fc77) blocks.
			- [⇒](../../../publish/CommonMark/Namespace.cm.md#66602f68-e23f-4b24-921e-b1a9fc0cc731) research about [[DataScript](https://github.com/tonsky/datascript) Query](../../../publish/CommonMark/Mind Jungle.cm.md#66acc24c-4cd7-4568-8c47-79798fc09433) and Clojure to write the [macro `{{search-query}}`](2024 Brainstorms.cm.md#66faa5f8-0711-4a23-afe0-fb8d2ebb644e).
	- Yesterday, 1st October 2024, my wife had a birthday cheered with friend sisters but the cost are shared, due to the low salary caused by my may times late and off last months. <a class="logseq-meta" id="66fe3f98-c4bb-48df-a80d-e1fd41ae0be7" data-logbook="CLOCK: [2024-10-02 Wed 19:14:10]&#10;" ></a>
	- Today, 14th Oct 2024, when editing [types of forms](../../../publish/CommonMark/Uniinfo.cm.md#66f6682b-744a-49b8-8e11-8e020fc24acc), i need to reference the "world of appearance" of Hegel... and find out that i've lost the whole big note sumerizing Hegel's "world of appearance". 😢 <a class="logseq-meta" data-collapsed="true" data-logbook="CLOCK: [2024-10-14 Mon 20:13:25]&#10;" ></a>
		- There's no trace about Hegel in [commit dc5a57f](https://github.com/bixycler/UniinfoNotes/commit/dc5a57fe9e60560439cac11240652cc847a9da2d), even though its commit message has the clear mention of "World of Appearance":
			- ```
			  - Encyclopedia 3.ed., Vol.1 - Logic > World of Appearance – Content Form – Relation
			  ``` <a class="logseq-meta" data-collapsed="true" ></a>
		- I extract a brief sumerization from the chat with Gemini: [Hegel's Philosophy of Form](https://gemini.google.com/app/c8e4b0ec829815c2) to write this story: [Hegel's "[World of Appearances](https://www.marxists.org/reference/archive/hegel/works/sl/slappear.htm)": from Essence to Form, Matter, Content, and Appearance](2024 Stories.cm.md#66faa5fa-d11a-4828-848e-b24bddba5411).
		- This shows the [Logseq's danger of accidental deletion](../../../publish/CommonMark/Mind Jungle.cm.md#66faa5f9-e82b-49cc-b9ed-2c97d28daa3e).
	- DONE Add `LogseqNotes` to [BeowulfBuildModDocs](https://github.com/quickom-lab/BeowulfBuildModDocs "title") <a class="logseq-meta" id="6677ea1b-479e-40b0-ab8e-64cf5c769e57" data-logbook="CLOCK: [2024-06-23 Sun 16:26:28]&#10;CLOCK: [2024-10-20 Sun 20:15:42]--[2024-10-21 Mon 00:02:20] =&gt;  03:46:38&#10;" ></a>
	- DONE ~~Auto-complete &~~ typing assistant for **quotation marks**, symbols...  <a class="logseq-meta" id="6716110a-1a05-4c87-93b3-fa9f0db22ba9" ></a>
	  <br>using [CreatZy [shorthands](((66ff4478-6eae-4633-b7be-fd42e2bcda5b)))](../../../publish/CommonMark/Mind Jungle.cm.md#66fe9e2e-13cf-4b31-96e7-1b050eed47c4)
	- DONE First complete [Logseq publishing with FolderDiv](../../../publish/CommonMark/Mind Jungle.cm.md#671f7f9d-58c0-48ce-aeb6-d3d0663ea7bf) <a class="logseq-meta" id="6735c7ac-17c8-4fea-8d4c-b76a942bc453" data-collapsed="true" data-logbook="CLOCK: [2024-11-14 Thu 16:49:57]--[2024-11-14 Thu 20:32:13] =&gt;  03:42:16&#10;CLOCK: [2024-11-25 Mon 17:30:00]--[2024-11-25 Mon 19:01:23] =&gt;  01:31:23&#10;CLOCK: [2024-11-26 Tue 08:30:00]--[2024-12-03 Tue 16:46:21] =&gt;  176:16:21&#10;" ></a>
		- [[Logseq publish]] → [[Logseq publish.norm]] → [Logseq publish.md.html](../assets/logseq/publish/Logseq publish.md.html) → [Logseq publish.html](../assets/logseq/publish/Logseq publish.html) → [Logseq publish.pdf](../assets/logseq/publish/Logseq publish.pdf)
		- [!] Error converting [[Logseq publish]] <a class="logseq-meta" data-collapsed="true" ></a>
			- The whole document body is rendered as a giant code block.
			- [Cause:](../../../publish/CommonMark/Namespace.cm.md#66ae15d2-e2dd-443d-a666-c3b244fb6603) Logseq automatically **unitemizes** the page's header (`H*` any level) while leaving all other items in the page unchanged.
				- [⇒](../../../publish/CommonMark/Namespace.cm.md#66602f68-e23f-4b24-921e-b1a9fc0cc731) Restore the first item with `pageHeadingAsItem`
				- Note: the first item can be at the same level with other items.
					- [⇒](../../../publish/CommonMark/Namespace.cm.md#66602f68-e23f-4b24-921e-b1a9fc0cc731) Consider this page as "headless page": Use file name as page header
				- When itemizing the page header, the whole page is converted to a single `unfoldable-leaf`!
					- [⇒](../../../publish/CommonMark/Namespace.cm.md#66602f68-e23f-4b24-921e-b1a9fc0cc731) Single-item page: Process that single item instead of the page.
			- [⇒](../../../publish/CommonMark/Namespace.cm.md#66602f68-e23f-4b24-921e-b1a9fc0cc731) `flattenHeadings = false`, `pageHeadingAsItem = true` for `restructureToFolderDiv()`.
		- DONE Headless problem still persists!!! <a class="logseq-meta" data-logbook="CLOCK: [2024-11-26 Tue 09:55:22]--[2024-11-26 Tue 09:55:44] =&gt;  00:00:22&#10;" ></a>
		- DONE Refactor `markdown-watcher.js` <a class="logseq-meta" id="67454211-668f-40e0-b6b2-ee5e49c0a520" data-collapsed="true" data-logbook="CLOCK: [2024-11-26 Tue 10:35:48]&#10;CLOCK: [2024-11-26 Tue 10:35:51]--[2024-12-03 Tue 16:46:12] =&gt;  174:10:21&#10;" ></a>
			- 👍️ Custom element libs like `FolderDiv.js` and `MessageDiv.js` can be used as modules without any modification! 🥰
				- ```html
				  <script type="module" src="MessageDiv.js"></script>
				  <script type="module" src="FolderDiv.js"></script>
				  ```
			- `MessageDiv.js`
			  <br>The message component storing and showing message on the page
				- This is shared by many functions, even in [`common-utils.js`](#674571bb-ea17-4635-9158-d5c81381ab86).
				- `customElements.define("message-div", MessageDiv);`
				- ```html
				  <message-div id="message" folded heading='Markdown loading error'></message-div>
				  ```
			- `common-utils.js` <a class="logseq-meta" id="674571bb-ea17-4635-9158-d5c81381ab86" ></a>
				- Ported some utils from `_base.js`.
			- `DocRaptor.js`
			  <br>The client to DocRaptor PDF converter
				- Each instance `DocRaptor()` holds a separate configuration (`name`, `production`) conversion to PDF.
			- `markdown-converter.js`
				- `normalizeMardown(md, options...)` converts from Logseq markdown to common Markdown as return value.
				- `restructureToFolderDiv()` restructures item lists to `<folder-div>`
		- [⇒](../../../publish/CommonMark/Namespace.cm.md#66602f68-e23f-4b24-921e-b1a9fc0cc731) the [rabbit hole](../../../publish/CommonMark/Mind Jungle.cm.md#6735b189-a8b7-4ff3-b42a-c59f38a8334e) of endless bugs and modifications
	- Chat with Copilot to coin the term [<span class="link-h2">Omnifold</span>](../../../publish/CommonMark/Uniinfo.cm.md#675c03d8-3185-41a8-9f98-e869fabec793) for the blob of [<span class="link-h3">Ω-thread</span>](../../../publish/CommonMark/Uniinfo.cm.md#66ab75a1-f4a0-4bab-a002-8e573546623a)s. <a class="logseq-meta" data-logbook="CLOCK: [2024-12-13 Fri 20:39:05]&#10;CLOCK: [2024-12-13 Fri 20:39:12]--[2024-12-13 Fri 20:40:08] =&gt;  00:00:56&#10;" ></a>
	- [Spiral trajectories of a particle moving with “constant velocity” in various planes](2024 Brainstorms.cm.md#6735b189-867a-4eee-b5f5-3079bb3da458) <a class="logseq-meta" data-collapsed="true" ></a>
		- WAIT Resolve the confusion between [transverse total arc in reciprocal spiral](2024 Brainstorms.cm.md#675fb739-c295-4d9d-b388-94d989dffc02) and [transverse velocity in log spiral](2024 Brainstorms.cm.md#675c3e57-d3d2-4829-9b82-9f38eabbbf56) <a class="logseq-meta" id="36499c7b-d58a-4eb5-a780-ad4afc813c64" data-logbook="CLOCK: [2024-12-16 Mon 17:29:54]&#10;CLOCK: [2024-12-16 Mon 17:29:56]--[2024-12-16 Mon 17:30:41] =&gt;  00:00:45&#10;" ></a>
	- DONE Refactor [[Namespace]] <a class="logseq-meta" id="676e5401-5951-445c-b109-61d61c11fc59" data-collapsed="true" data-logbook="CLOCK: [2024-12-27 Fri 14:15:18]&#10;CLOCK: [2024-12-27 Fri 14:15:24]--[2024-12-28 Sat 23:51:54] =&gt;  33:36:30&#10;" ></a>
		- The block [<span class="link-h1">Elements</span>](../../../publish/CommonMark/Namespace.cm.md#66533703-505d-432d-8368-6058eefb45f6) was created with the intention to cover the whole space of names, hence named `Namespace`.
			- But it ends up containing only commonly used nouns and verbs. <a class="logseq-meta" id="676e5573-29fa-4d67-819b-73e0d3977a61" ></a>
			- [⇒](../../../publish/CommonMark/Namespace.cm.md#66602f68-e23f-4b24-921e-b1a9fc0cc731) rename it to `Elements`
				- “Element” in linguistics is [defined as](https://www.collinsdictionary.com/us/dictionary/english/element) lexemes, morphemes, and idioms
				  <br>> any word, part of a word, or group of words that recurs in various contexts in a language with relatively constant meaning
		- DONE add `filter::` & `child-filter::` to [Macro `{{search-query}}`](2024 Brainstorms.cm.md#66fcd905-2d08-40a9-b33f-900204e1b1e4) and apply to [Name search](../../../publish/CommonMark/Workspace.cm.md#66fce7e0-8040-4980-b2aa-807e4a0cde1f). <a class="logseq-meta" id="6735b185-f544-4733-918c-883788292569" data-logbook="CLOCK: [2024-12-27 Fri 18:23:01]--[2024-12-28 Sat 23:51:39] =&gt;  29:28:38&#10;" ></a>
		- Create backlink-based [<span class="link-h1">Name Lists</span>](../../../publish/CommonMark/Namespace.cm.md#676e5861-1220-40e4-9546-e319e17df1aa).
	- DONE Refractor [[Workspace]] <a class="logseq-meta" id="67710747-2982-4134-875e-3b715313db87" data-collapsed="true" data-logbook="CLOCK: [2024-12-29 Sun 15:24:43]--[2024-12-29 Sun 15:54:52] =&gt;  00:30:09&#10;CLOCK: [2024-12-31 Tue 20:16:59]--[2025-01-02 Thu 19:11:24] =&gt;  46:54:25&#10;" ></a>
		- move [<span class="link-h2">Search</span>](../../../publish/CommonMark/Workspace.cm.md#66fce880-77a2-41f7-8bdb-a86b7fc6fc77) from [[Contents]] to [<span class="link-h1">Workspace</span>](../../../publish/CommonMark/Workspace.cm.md#66519638-cf5d-409b-9b98-15acabf2268c) <a class="logseq-meta" id="67710af1-e3f0-4f94-917c-5235c210f082" ></a>
		- move [<span class="link-h1">Task</span>](../../../publish/CommonMark/Task.cm.md#6651adea-e1ed-4884-93eb-5ebd6086b62b) from [<span class="link-h1">Workspace</span>](../../../publish/CommonMark/Workspace.cm.md#66519638-cf5d-409b-9b98-15acabf2268c) to [[Task]]
		- refactor [<span class="link-h3">Working</span>](../../../publish/CommonMark/Workspace.cm.md#6773d98a-3917-4267-9f8b-7d86b84d3663) place into [So Logseq "restored" the id, based on the relative position between blocks, in commit `6154f573`](../../../publish/CommonMark/Braindump.cm.md#db954501-95d0-46e2-b1fc-39b6a966300e) and [<span class="link-h2">Brainstorming > ((6960e754-ff94-4e1a-8266-d9f15231b880))</span>](../../../publish/CommonMark/Brainstorm.cm.md#6773eb97-ec58-4c48-a017-cd0de2d82e08) so that they can be opened in the right side bar to work in parallel with other docs in the main edit pane.
			- Previously, the "working place" was just anywhere in the [<span class="link-h2">Workstack</span>](../../../publish/CommonMark/Workspace.cm.md#6651adea-81d4-40a5-b96d-af6739e572eb).
		- Update [Shared pages](../../../publish/CommonMark/contents.cm.md#66f7af1c-bb80-46ae-a896-10f31c113e84)
			- Add missing [<span class="link-h1">JavaScript</span>](#6708aad1-5efb-4b3f-ad99-e3ae2e73fcb4)
			- Move [Linux](#66949495-3846-4f89-9ea5-c62b624d282c) to [[Linux]] <a class="logseq-meta" id="6772a6cb-1dee-402a-bee2-d41337e74eb6" ></a>
		- DONE Refactor [[Task]] <a class="logseq-meta" id="67761163-a80d-4501-9c43-8bac6612c98d" data-logbook="CLOCK: [2025-01-02 Thu 11:10:09]--[2025-01-02 Thu 13:54:07] =&gt;  02:43:58&#10;" ></a>
			- DONE rename page & blocks: `History` → `Task` <a class="logseq-meta" data-logbook="CLOCK: [2025-01-02 Thu 12:58:19]--[2025-01-02 Thu 12:58:23] =&gt;  00:00:04&#10;CLOCK: [2025-01-02 Thu 12:59:52]--[2025-01-02 Thu 13:06:13] =&gt;  00:06:21&#10;" ></a>
			- DONE move [2024 Tasks](#67761267-06ef-4f0d-876a-bd354b896681) out to its own page [[2024 Tasks]] <a class="logseq-meta" data-logbook="CLOCK: [2025-01-02 Thu 11:11:35]--[2025-01-02 Thu 11:31:38] =&gt;  00:20:03&#10;" ></a>
			- DONE collect old brainstorms into [<span class="link-h2">Task History</span>](../../../publish/CommonMark/Task.cm.md#6776152d-99a1-4368-884d-84a15e04329c) <a class="logseq-meta" id="3b56e032-dcbb-4a51-8937-8bc8db2a85cc" data-logbook="CLOCK: [2025-01-02 Thu 11:11:54]--[2025-01-02 Thu 11:31:41] =&gt;  00:19:47&#10;" ></a>
			- DONE migrate the old list `Tasks` in [<span class="link-h1">Workspace</span>](../../../publish/CommonMark/Workspace.cm.md#66519638-cf5d-409b-9b98-15acabf2268c) to [<span class="link-h1">Task</span>](../../../publish/CommonMark/Task.cm.md#6651adea-e1ed-4884-93eb-5ebd6086b62b) <a class="logseq-meta" data-logbook="CLOCK: [2025-01-02 Thu 13:06:32]--[2025-01-02 Thu 13:49:52] =&gt;  00:43:20&#10;" ></a>
			- DONE add [<span class="link-h2">Current Tasks < ((677614c4-ea7d-47c0-89ee-afbacceb56e9)) > ((67763106-205f-4e01-affc-a68e1d8e53a9))</span>](../../../publish/CommonMark/Task.cm.md#677630fe-ea99-436f-b39f-8bd2295e2eaf) & [<span class="link-h4">WIPs < ((67164cc1-e500-4889-9b6d-12d8dd7fc029))</span>](../../../publish/CommonMark/Workspace.cm.md#67164c57-8f45-46eb-92a9-f00b02dccfc9) to [<span class="link-h3">Working</span>](../../../publish/CommonMark/Workspace.cm.md#6773d98a-3917-4267-9f8b-7d86b84d3663) place <a class="logseq-meta" data-logbook="CLOCK: [2025-01-02 Thu 13:51:18]&#10;CLOCK: [2025-01-02 Thu 13:51:20]--[2025-01-02 Thu 13:53:24] =&gt;  00:02:04&#10;" ></a>
		- DONE Refactor [[Brainstorm]] <a class="logseq-meta" id="6773f59b-066f-41dc-9c87-6214278bca03" data-logbook="CLOCK: [2024-12-31 Tue 20:46:16]&#10;CLOCK: [2024-12-31 Tue 20:46:18]--[2025-01-02 Thu 11:07:10] =&gt;  38:20:52&#10;" ></a>
			- DONE resort to inverse chronological order <a class="logseq-meta" data-logbook="CLOCK: [2024-12-31 Tue 20:47:06]--[2025-01-02 Thu 10:49:01] =&gt;  38:01:55&#10;" ></a>
			- DONE move [2024 Brainstorms](2024 Brainstorms.cm.md#67760c45-14fe-4d91-88a0-923f50ed553c) out to its own page [[2024 Brainstorms]] <a class="logseq-meta" data-logbook="CLOCK: [2025-01-02 Thu 10:51:07]&#10;CLOCK: [2025-01-02 Thu 10:51:28]--[2025-01-02 Thu 11:06:16] =&gt;  00:14:48&#10;" ></a>
			- DONE collect old brainstorms into [<span class="link-h2">Brainstorm History</span>](../../../publish/CommonMark/Brainstorm.cm.md#67760db9-eb82-4ef9-9bd5-93b43049a755) <a class="logseq-meta" data-logbook="CLOCK: [2025-01-02 Thu 10:52:53]&#10;CLOCK: [2025-01-02 Thu 10:54:09]--[2025-01-02 Thu 10:57:57] =&gt;  00:03:48&#10;" ></a>
		- DONE Refactor [[Story]] <a class="logseq-meta" id="677638ff-2593-42a2-89c3-99c5708bc06a" data-logbook="CLOCK: [2025-01-02 Thu 13:58:21]--[2025-01-02 Thu 14:10:51] =&gt;  00:12:30&#10;" ></a>
			- DONE move [2024 Stories](2024 Stories.cm.md#67763a23-89ff-48dc-a3f4-df432c6810c2) out to its own page [[2024 Stories]] <a class="logseq-meta" data-logbook="CLOCK: [2025-01-02 Thu 13:58:59]--[2025-01-02 Thu 14:06:41] =&gt;  00:07:42&#10;" ></a>
			- DONE collect old brainstorms into [<span class="link-h2">Story History</span>](../../../publish/CommonMark/Story.cm.md#677639ad-7699-4170-a2e3-111a71823794) <a class="logseq-meta" data-logbook="CLOCK: [2025-01-02 Thu 13:59:17]--[2025-01-02 Thu 14:04:24] =&gt;  00:05:07&#10;" ></a>
		- DONE Add refs [[<span class="link-h1">Brainstorm</span>](../../../publish/CommonMark/Brainstorm.cm.md#6653538a-30aa-423f-be89-848ad9c7e331), [<span class="link-h1">Braindump</span>](../../../publish/CommonMark/Braindump.cm.md#67760c3e-2ed3-4b91-9698-8dea6913e419), [<span class="link-h1">Task</span>](../../../publish/CommonMark/Task.cm.md#6651adea-e1ed-4884-93eb-5ebd6086b62b), [<span class="link-h1">Story</span>](../../../publish/CommonMark/Story.cm.md#66b1bbf3-ac04-4d4c-a343-d75130323a7f), [<span class="link-h1">Mind Jungle</span>](../../../publish/CommonMark/Mind Jungle.cm.md#6651e92e-fb34-4d24-a386-d9698c2e93f7), [<span class="link-h1">Workspace</span>](../../../publish/CommonMark/Workspace.cm.md#66519638-cf5d-409b-9b98-15acabf2268c)], and [<span class="link-h3">DOING Mind Map</span>](../../../publish/CommonMark/Mind Jungle.cm.md#67760c43-58c6-40eb-b874-40afae448966) to [<span class="link-h2">Will LÊ</span>](../../../publish/CommonMark/Mind Jungle.cm.md#66536578-c4d3-43f1-b35c-bf71120f0570). <a class="logseq-meta" data-logbook="CLOCK: [2025-01-02 Thu 11:22:16]--[2025-01-02 Thu 12:39:45] =&gt;  01:17:29&#10;" ></a>
		- DONE Move [<span class="link-h4">Problems</span>](../../../publish/CommonMark/Mind Jungle.cm.md#6651adea-46e0-40ea-8fc4-3ef394068b0f) & [<span class="link-h4">Questions</span>](../../../publish/CommonMark/Mind Jungle.cm.md#6651adea-f2f6-4c9e-80b4-ece0bb5038fb) to [<span class="link-h3">DOING Mind Map</span>](../../../publish/CommonMark/Mind Jungle.cm.md#67760c43-58c6-40eb-b874-40afae448966) <a class="logseq-meta" data-logbook="CLOCK: [2025-01-02 Thu 15:51:34]&#10;CLOCK: [2025-01-02 Thu 15:51:36]--[2025-01-02 Thu 15:52:08] =&gt;  00:00:32&#10;" ></a>
			- Embed them back to Workspace
	- DONE Relink [Global ((666a539d-499f-43c0-8b2e-74818cc3a0f5)) ![global/config.edn](../assets/logseq/global/config.edn)](#66fe86b8-f17e-4b3f-b27f-213b3500146f); Share [[Linux]] <a class="logseq-meta" id="6772a6c7-bf00-405a-83f7-6fe7dd181cba" data-collapsed="true" data-logbook="CLOCK: [2024-12-27 Fri 14:14:48]&#10;CLOCK: [2024-12-31 Tue 15:33:00]--[2024-12-31 Tue 16:14:48] =&gt;  00:41:48&#10;" ></a>
		- [?] The global/`config.edn` has 1 extra hard link!?!
			- ```sh
			  stat -c '%i %h' ${HOME}/source/UniinfoNotes/assets/logseq/global/config.edn
			  stat -c '%i %h' ${HOME}/.logseq/config/config.edn
			  stat -c '%i %h' ${HOME}/snap/logseq/current/.logseq/config/config.edn
			  2109288 4
			  2109288 4
			  2109288 4
			  ``` <a class="logseq-meta" data-collapsed="true" ></a>
			- ⇒ find that extra link
				- ```sh
				  find ~ -samefile ${HOME}/source/UniinfoNotes/assets/logseq/global/config.edn
				  /home/dinhlx/source/UniinfoNotes/assets/logseq/global/config.edn
				  /home/dinhlx/snap/logseq/29/.logseq/config/config.edn
				  /home/dinhlx/snap/logseq/28/.logseq/config/config.edn
				  /home/dinhlx/.logseq/config/config.edn
				  ```
			- The current version: 29 = [Beta 0.10.9 @ Apr 23rd, 2024](https://docs.logseq.com/#/page/changelog/block/beta%200.10.9%20%5B%5Bapr%2023rd%2C%202024%5D%5D) = latest in 2024, and the same for all 3 app versions (Flatpak, Snap, and AppImage)
				- ```sh
				  tree -d ~/snap/logseq/                                                                    [dd57718]
				  /home/dinhlx/snap/logseq/
				  ├── 28
				  ├── 29
				  ├── common
				  └── current -> 29
				  ```
			- ⇒ Just remove the `28`!
		- Shared and update: [[technical/Linux]([[Linux]]): **2 links**](../../../publish/CommonMark/Mind Jungle.cm.md#6773b551-c64e-414e-85af-bbc45eeadaaa)
	- <<End 2024 History>>
	  <br>-----------------------
