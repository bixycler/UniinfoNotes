## 2024 Tasks
id:: 67761267-06ef-4f0d-876a-bd354b896681
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
	- DONE Add ((6651adea-e1ed-4884-93eb-5ebd6086b62b)) with ((665373d3-8fd7-4963-9b72-a503e21e54e7)) ✅ 2024-05-21
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
		- When eyes open, the [internal/perception screen](((66ea4711-1392-4f5c-bea2-badc71a2fb9e))) is filled with external objects 
		  --> no space to protect the internal/underlying mechanism/structures
			- => With eyes closed, i can see deeper into the background, more wholesome
			- => With eyes open, i dive deeper into the foreground, more detailed
	- DONE See the crucial link: ((66f29d57-a87f-4370-9f32-722922a7bff1))
	  id:: 66faa5fa-b843-490d-a7b3-a2400c11be86
	  :LOGBOOK:
	  CLOCK: [2024-09-25 Wed 20:35:03]
	  CLOCK: [2025-07-03 Thu 19:46:16]
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
	- DONE ~~Auto-complete &~~ typing assistant for **quotation marks**, symbols... 
	  id:: 6716110a-1a05-4c87-93b3-fa9f0db22ba9
	  using ((66fe9e2e-13cf-4b31-96e7-1b050eed47c4))
	- DONE First complete [Logseq publishing with FolderDiv](((671f7f9d-58c0-48ce-aeb6-d3d0663ea7bf)))
	  id:: 6735c7ac-17c8-4fea-8d4c-b76a942bc453
	  collapsed:: true
	  :LOGBOOK:
	  CLOCK: [2024-11-14 Thu 16:49:57]--[2024-11-14 Thu 20:32:13] =>  03:42:16
	  CLOCK: [2024-11-25 Mon 17:30:00]--[2024-11-25 Mon 19:01:23] =>  01:31:23
	  CLOCK: [2024-11-26 Tue 08:30:00]--[2024-12-03 Tue 16:46:21] =>  176:16:21
	  :END:
		- [[Logseq publish]] → [[Logseq publish.norm]] → [Logseq publish.md.html](../assets/logseq/publish/Logseq publish.md.html) → [Logseq publish.html](../assets/logseq/publish/Logseq publish.html) → [Logseq publish.pdf](../assets/logseq/publish/Logseq publish.pdf)
		- [!] Error converting [[Logseq publish]]
		  collapsed:: true
			- The whole document body is rendered as a giant code block.
			- ((66ae15d2-e2dd-443d-a666-c3b244fb6603)) Logseq automatically **unitemizes** the page's header (`H*` any level) while leaving all other items in the page unchanged.
				- ((66602f68-e23f-4b24-921e-b1a9fc0cc731)) Restore the first item with `pageHeadingAsItem`
				- Note: the first item can be at the same level with other items.
					- ((66602f68-e23f-4b24-921e-b1a9fc0cc731)) Consider this page as "headless page": Use file name as page header
				- When itemizing the page header, the whole page is converted to a single `unfoldable-leaf`!
					- ((66602f68-e23f-4b24-921e-b1a9fc0cc731)) Single-item page: Process that single item instead of the page.
			- ((66602f68-e23f-4b24-921e-b1a9fc0cc731)) `flattenHeadings = false`, `pageHeadingAsItem = true` for `restructureToFolderDiv()`.
		- DONE Headless problem still persists!!!
		  :LOGBOOK:
		  CLOCK: [2024-11-26 Tue 09:55:22]--[2024-11-26 Tue 09:55:44] =>  00:00:22
		  :END:
		- DONE Refactor `markdown-watcher.js`
		  id:: 67454211-668f-40e0-b6b2-ee5e49c0a520
		  collapsed:: true
		  :LOGBOOK:
		  CLOCK: [2024-11-26 Tue 10:35:48]
		  CLOCK: [2024-11-26 Tue 10:35:51]--[2024-12-03 Tue 16:46:12] =>  174:10:21
		  :END:
			- 👍️ Custom element libs like `FolderDiv.js` and `MessageDiv.js` can be used as modules without any modification! 🥰
				- ```html
				  <script type="module" src="MessageDiv.js"></script>
				  <script type="module" src="FolderDiv.js"></script>
				  ```
			- `MessageDiv.js`
			  The message component storing and showing message on the page
				- This is shared by many functions, even in ((674571bb-ea17-4635-9158-d5c81381ab86)).
				- `customElements.define("message-div", MessageDiv);`
				- ```html
				  <message-div id="message" folded heading='Markdown loading error'></message-div>
				  ```
			- `common-utils.js`
			  id:: 674571bb-ea17-4635-9158-d5c81381ab86
				- Ported some utils from `_base.js`.
			- `DocRaptor.js`
			  The client to DocRaptor PDF converter
				- Each instance `DocRaptor()` holds a separate configuration (`name`, `production`) conversion to PDF.
			- `markdown-converter.js`
				- `normalizeMardown(md, options...)` converts from Logseq markdown to common Markdown as return value.
				- `restructureToFolderDiv()` restructures item lists to `<folder-div>`
		- ((66602f68-e23f-4b24-921e-b1a9fc0cc731)) the [rabbit hole](((6735b189-a8b7-4ff3-b42a-c59f38a8334e))) of endless bugs and modifications
	- Chat with Copilot to coin the term ((675c03d8-3185-41a8-9f98-e869fabec793)) for the blob of ((66ab75a1-f4a0-4bab-a002-8e573546623a))s.
	  :LOGBOOK:
	  CLOCK: [2024-12-13 Fri 20:39:05]
	  CLOCK: [2024-12-13 Fri 20:39:12]--[2024-12-13 Fri 20:40:08] =>  00:00:56
	  :END:
	- ((6735b189-867a-4eee-b5f5-3079bb3da458))
	  collapsed:: true
		- WAIT Resolve the confusion between [transverse total arc in reciprocal spiral](((675fb739-c295-4d9d-b388-94d989dffc02))) and [transverse velocity in log spiral](((675c3e57-d3d2-4829-9b82-9f38eabbbf56)))
		  id:: 36499c7b-d58a-4eb5-a780-ad4afc813c64
		  :LOGBOOK:
		  CLOCK: [2024-12-16 Mon 17:29:54]
		  CLOCK: [2024-12-16 Mon 17:29:56]--[2024-12-16 Mon 17:30:41] =>  00:00:45
		  :END:
	- DONE Refactor [[Namespace]]
	  id:: 676e5401-5951-445c-b109-61d61c11fc59
	  collapsed:: true
	  :LOGBOOK:
	  CLOCK: [2024-12-27 Fri 14:15:18]
	  CLOCK: [2024-12-27 Fri 14:15:24]--[2024-12-28 Sat 23:51:54] =>  33:36:30
	  :END:
		- The block ((66533703-505d-432d-8368-6058eefb45f6)) was created with the intention to cover the whole space of names, hence named `Namespace`.
			- But it ends up containing only commonly used nouns and verbs.
			  id:: 676e5573-29fa-4d67-819b-73e0d3977a61
			- ((66602f68-e23f-4b24-921e-b1a9fc0cc731)) rename it to `Elements`
				- “Element” in linguistics is [defined as](https://www.collinsdictionary.com/us/dictionary/english/element) lexemes, morphemes, and idioms
				  > any word, part of a word, or group of words that recurs in various contexts in a language with relatively constant meaning
		- DONE add `filter::` & `child-filter::` to [Macro `{{search-query}}`](((66fcd905-2d08-40a9-b33f-900204e1b1e4))) and apply to [Name search](((66fce7e0-8040-4980-b2aa-807e4a0cde1f))).
		  id:: 6735b185-f544-4733-918c-883788292569
		  :LOGBOOK:
		  CLOCK: [2024-12-27 Fri 18:23:01]--[2024-12-28 Sat 23:51:39] =>  29:28:38
		  :END:
		- Create backlink-based ((676e5861-1220-40e4-9546-e319e17df1aa)).
	- DONE Refractor [[Workspace]]
	  id:: 67710747-2982-4134-875e-3b715313db87
	  collapsed:: true
	  :LOGBOOK:
	  CLOCK: [2024-12-29 Sun 15:24:43]--[2024-12-29 Sun 15:54:52] =>  00:30:09
	  CLOCK: [2024-12-31 Tue 20:16:59]--[2025-01-02 Thu 19:11:24] =>  46:54:25
	  :END:
		- move ((66fce880-77a2-41f7-8bdb-a86b7fc6fc77)) from [[Contents]] to ((66519638-cf5d-409b-9b98-15acabf2268c))
		  id:: 67710af1-e3f0-4f94-917c-5235c210f082
		- move ((6651adea-e1ed-4884-93eb-5ebd6086b62b)) from ((66519638-cf5d-409b-9b98-15acabf2268c)) to [[Task]]
		- refactor ((6773d98a-3917-4267-9f8b-7d86b84d3663)) place into ((db954501-95d0-46e2-b1fc-39b6a966300e)) and ((6773eb97-ec58-4c48-a017-cd0de2d82e08)) so that they can be opened in the right side bar to work in parallel with other docs in the main edit pane.
			- Previously, the "working place" was just anywhere in the ((6651adea-81d4-40a5-b96d-af6739e572eb)).
		- Update ((66f7af1c-bb80-46ae-a896-10f31c113e84))
			- Add missing ((6708aad1-5efb-4b3f-ad99-e3ae2e73fcb4))
			- Move ((66949495-3846-4f89-9ea5-c62b624d282c)) to [[Linux]]
			  id:: 6772a6cb-1dee-402a-bee2-d41337e74eb6
		- DONE Refactor [[Task]]
		  id:: 67761163-a80d-4501-9c43-8bac6612c98d
		  :LOGBOOK:
		  CLOCK: [2025-01-02 Thu 11:10:09]--[2025-01-02 Thu 13:54:07] =>  02:43:58
		  :END:
			- DONE rename page & blocks: `History` → `Task`
			  :LOGBOOK:
			  CLOCK: [2025-01-02 Thu 12:58:19]--[2025-01-02 Thu 12:58:23] =>  00:00:04
			  CLOCK: [2025-01-02 Thu 12:59:52]--[2025-01-02 Thu 13:06:13] =>  00:06:21
			  :END:
			- DONE move ((67761267-06ef-4f0d-876a-bd354b896681)) out to its own page [[2024 Tasks]]
			  :LOGBOOK:
			  CLOCK: [2025-01-02 Thu 11:11:35]--[2025-01-02 Thu 11:31:38] =>  00:20:03
			  :END:
			- DONE collect old brainstorms into ((6776152d-99a1-4368-884d-84a15e04329c))
			  id:: 3b56e032-dcbb-4a51-8937-8bc8db2a85cc
			  :LOGBOOK:
			  CLOCK: [2025-01-02 Thu 11:11:54]--[2025-01-02 Thu 11:31:41] =>  00:19:47
			  :END:
			- DONE migrate the old list `Tasks` in ((66519638-cf5d-409b-9b98-15acabf2268c)) to ((6651adea-e1ed-4884-93eb-5ebd6086b62b))
			  :LOGBOOK:
			  CLOCK: [2025-01-02 Thu 13:06:32]--[2025-01-02 Thu 13:49:52] =>  00:43:20
			  :END:
			- DONE add ((677630fe-ea99-436f-b39f-8bd2295e2eaf)) & ((67164c57-8f45-46eb-92a9-f00b02dccfc9)) to ((6773d98a-3917-4267-9f8b-7d86b84d3663)) place
			  :LOGBOOK:
			  CLOCK: [2025-01-02 Thu 13:51:18]
			  CLOCK: [2025-01-02 Thu 13:51:20]--[2025-01-02 Thu 13:53:24] =>  00:02:04
			  :END:
		- DONE Refactor [[Brainstorm]]
		  id:: 6773f59b-066f-41dc-9c87-6214278bca03
		  :LOGBOOK:
		  CLOCK: [2024-12-31 Tue 20:46:16]
		  CLOCK: [2024-12-31 Tue 20:46:18]--[2025-01-02 Thu 11:07:10] =>  38:20:52
		  :END:
			- DONE resort to inverse chronological order
			  :LOGBOOK:
			  CLOCK: [2024-12-31 Tue 20:47:06]--[2025-01-02 Thu 10:49:01] =>  38:01:55
			  :END:
			- DONE move ((67760c45-14fe-4d91-88a0-923f50ed553c)) out to its own page [[2024 Brainstorms]]
			  :LOGBOOK:
			  CLOCK: [2025-01-02 Thu 10:51:07]
			  CLOCK: [2025-01-02 Thu 10:51:28]--[2025-01-02 Thu 11:06:16] =>  00:14:48
			  :END:
			- DONE collect old brainstorms into ((67760db9-eb82-4ef9-9bd5-93b43049a755))
			  :LOGBOOK:
			  CLOCK: [2025-01-02 Thu 10:52:53]
			  CLOCK: [2025-01-02 Thu 10:54:09]--[2025-01-02 Thu 10:57:57] =>  00:03:48
			  :END:
		- DONE Refactor [[Story]]
		  id:: 677638ff-2593-42a2-89c3-99c5708bc06a
		  :LOGBOOK:
		  CLOCK: [2025-01-02 Thu 13:58:21]--[2025-01-02 Thu 14:10:51] =>  00:12:30
		  :END:
			- DONE move ((67763a23-89ff-48dc-a3f4-df432c6810c2)) out to its own page [[2024 Stories]]
			  :LOGBOOK:
			  CLOCK: [2025-01-02 Thu 13:58:59]--[2025-01-02 Thu 14:06:41] =>  00:07:42
			  :END:
			- DONE collect old brainstorms into ((677639ad-7699-4170-a2e3-111a71823794))
			  :LOGBOOK:
			  CLOCK: [2025-01-02 Thu 13:59:17]--[2025-01-02 Thu 14:04:24] =>  00:05:07
			  :END:
		- DONE Add refs [((6653538a-30aa-423f-be89-848ad9c7e331)), ((67760c3e-2ed3-4b91-9698-8dea6913e419)), ((6651adea-e1ed-4884-93eb-5ebd6086b62b)), ((66b1bbf3-ac04-4d4c-a343-d75130323a7f)), ((6651e92e-fb34-4d24-a386-d9698c2e93f7)), ((66519638-cf5d-409b-9b98-15acabf2268c))], and ((67760c43-58c6-40eb-b874-40afae448966)) to ((66536578-c4d3-43f1-b35c-bf71120f0570)).
		  :LOGBOOK:
		  CLOCK: [2025-01-02 Thu 11:22:16]--[2025-01-02 Thu 12:39:45] =>  01:17:29
		  :END:
		- DONE Move ((6651adea-46e0-40ea-8fc4-3ef394068b0f)) & ((6651adea-f2f6-4c9e-80b4-ece0bb5038fb)) to ((67760c43-58c6-40eb-b874-40afae448966))
		  :LOGBOOK:
		  CLOCK: [2025-01-02 Thu 15:51:34]
		  CLOCK: [2025-01-02 Thu 15:51:36]--[2025-01-02 Thu 15:52:08] =>  00:00:32
		  :END:
			- Embed them back to Workspace
	- DONE Relink ((66fe86b8-f17e-4b3f-b27f-213b3500146f)); Share [[Linux]]
	  id:: 6772a6c7-bf00-405a-83f7-6fe7dd181cba
	  collapsed:: true
	  :LOGBOOK:
	  CLOCK: [2024-12-27 Fri 14:14:48]
	  CLOCK: [2024-12-31 Tue 15:33:00]--[2024-12-31 Tue 16:14:48] =>  00:41:48
	  :END:
		- [?] The global/`config.edn` has 1 extra hard link!?!
		  collapsed:: true
			- ```sh
			  stat -c '%i %h' ${HOME}/source/UniinfoNotes/assets/logseq/global/config.edn
			  stat -c '%i %h' ${HOME}/.logseq/config/config.edn
			  stat -c '%i %h' ${HOME}/snap/logseq/current/.logseq/config/config.edn
			  2109288 4
			  2109288 4
			  2109288 4
			  ```
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
		- Shared and update: ((6773b551-c64e-414e-85af-bbc45eeadaaa))
	- <<End 2024 History>>
	  -----------------------