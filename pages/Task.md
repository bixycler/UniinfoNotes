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
		- DONE [Set alarms](((67d102f2-8eb1-440f-8981-abe4d0f1993e))) for [microresetting](((67cff615-ec0d-4831-9851-59410cb89cf1))) & miniresetting
		  id:: 67d10c06-3fe3-4691-95c0-84278a2dc713
		  collapsed:: true
		  :LOGBOOK:
		  CLOCK: [2025-03-12 Wed 11:27:07]--[2025-03-12 Wed 11:27:08] =>  00:00:01
		  CLOCK: [2025-03-13 Thu 14:24:55]--[2025-03-13 Thu 16:28:58] =>  02:04:03
		  CLOCK: [2025-03-13 Thu 17:54:04]--[2025-03-14 Fri 13:53:21] =>  19:59:17
		  :END:
			- Every 30 mins
			- First i tried using Gnome Clock, but its alarm has notification level `normal` which disappears after just 3 seconds ⇒ Missed all the time 🙁!
			- Now, i call ~~`notify-send` directly with `-u critical`~~ `zenity` to have the notification stick there until i close it.
			  :LOGBOOK:
			  CLOCK: [2025-03-13 Thu 14:29:13]
			  :END:
				- ![microreset.sh](../assets/Linux/scripts/microreset.sh) with `crontab`, storing history to [microreset.log](../assets/Will/microreset.log) as a TSV table.
				  id:: 6835b167-1e42-4f72-b3b4-05de296f542e
				  ```crontab
				  00,30 9-20  *   * 1-5 /home/dinhlx/.local/bin/microreset.sh 2>&1 >> /tmp/cron.log
				  ```
				- Icons: ![colors-chromagreen.png](../assets/Will/story/2025-03/colors-chromagreen.png), ![user-available.svg](../assets/Will/story/2025-03/user-available.svg), ![Power-Restart.png](../assets/Will/story/2025-03/Power-Restart.png){:width 32}
				  collapsed:: true
					- `system-log-out` ![system-log-out](../assets/Will/story/2025-03/system-log-out.png)
					- `edit-redo-rtl` ![edit-redo-rtl](../assets/Will/story/2025-03/edit-redo-rtl.png)
					- `view-refresh` ![view-refresh](../assets/Will/story/2025-03/view-refresh.png)
					- `emblem-new` ![emblem-new](../assets/Will/story/2025-03/emblem-new.png)
					- `face-smile` ![face-smile](../assets/Will/story/2025-03/face-smile.png)
				- Oh, `notify-send` must be [configured a lot](https://askubuntu.com/questions/298608/notify-send-doesnt-work-from-crontab) to work under cron job.
				  ⇒ Just use ((67d2ad10-0ca8-4361-94d5-219cf9b737d5)) instead!
					- Working config:
					  ```sh
					  DISPLAY=:0
					  DBUS_SESSION_BUS_ADDRESS=unix:path=/run/user/1001/bus
					  # 1001 = $(id -u dinhlx)
					  ```
					- My `env`
					  ```sh
					  $ env |grep -E 'DBUS|DISPLAY'
					  DBUS_SESSION_BUS_ADDRESS=unix:path=/run/user/1001/bus
					  DISPLAY=:0
					  GNOME_SETUP_DISPLAY=:1
					  WAYLAND_DISPLAY=wayland-0
					  ```
					- Issues:
						- ((67d3a821-ed1c-48d5-a935-bfab8a57cd8e))
						  collapsed:: true
							- ⇒ add a short-timeout window before the main `zenity` notification window to capture accidental inputs from user, if any.
							  id:: 67eb65bc-78a4-4e6d-8a3c-dcc171b71235
							  :LOGBOOK:
							  CLOCK: [2025-04-01 Tue 11:04:18]--[2025-04-01 Tue 15:34:35] =>  04:30:17
							  :END:
								- ```sh
								  ( sleep 3; echo 100 ) |
								  zenity --progress --no-cancel --auto-close --percentage=50 --width=500 --text="$msg"
								  ```
							- or use the option [`--no-focus` of `yad`](((68381caa-5dd1-4a49-8630-4c68674aa0c7)))
						- `zenity` has "option" collision with `-1`, _even after `--`!_ 
						  ⇒ Add a space before -1: ` -1`
			- ((67850c24-b1c9-425a-abc2-af81243befb2)) should be replaced with a cron job or Logseq API call `UI.showMsg()`
			  id:: 67d28149-2a8a-44f0-9c12-e51741c3d9d2
			  :LOGBOOK:
			  CLOCK: [2025-03-13 Thu 14:22:31]
			  :END:
				- E.g.
				  ```crontab
				  00 10  *   * 1-5 DBUS_SESSION_BUS_ADDRESS=unix:path=/run/user/1001/bus /usr/bin/notify-send -u critical -i /home/dinhlx/Pictures/emblem-generic.png 'Back to WORK!'
				  30 10  *   * 1-5 DBUS_SESSION_BUS_ADDRESS=unix:path=/run/user/1001/bus /usr/bin/notify-send -u critical -i /home/dinhlx/Pictures/emblem-important.png 'Back to WORK! NOWWW!!!'
				  ```
				- Icons:
					- `emblem-generic` ![system-log-out](../assets/Will/story/2025-03/emblem-generic.png)
					- `emblem-important` ![system-log-out](../assets/Will/story/2025-03/emblem-important.png)
			- The old reminders in ((6773d98a-3917-4267-9f8b-7d86b84d3663)) previously:
			  id:: 67d2a63d-58de-4dbe-bbec-3ec8625737c7
				- Reminder messages
				  id:: 67850fb1-04a9-427f-bc0d-f61913d86e4b
				  collapsed:: true
					- Back to WORK!
					  id:: 67850c3d-a026-43a0-8fb8-1febf398bd65
					  scheduled:: <2025-02-03 xxx 13:00>
					  DEADLINE:: <2025-02-03 xxx 17:00>
					- id:: 67850fd2-272d-48fa-9d7c-c649619b5a89
					  #+BEGIN_CAUTION
					  [:b {:style "background-color:Orange; color:DarkRed"} " Back to WORK! "]
					  #+END_CAUTION
					- id:: 67850fe1-3e22-430e-9af9-a84853766dd7
					  #+BEGIN_WARNING
					  [:b {:style "background-color:OrangeRed; color:White"} " ¡¡¡ Back to WORK !!! "]
					  #+END_WARNING
				- #### Reminder
				  id:: 67850c24-b1c9-425a-abc2-af81243befb2
				  collapsed:: true
					- {{deadline-warning ((67850fb1-04a9-427f-bc0d-f61913d86e4b)), 67850c3d-a026-43a0-8fb8-1febf398bd65, 67850fd2-272d-48fa-9d7c-c649619b5a89, 67850fe1-3e22-430e-9af9-a84853766dd7}}
		- CANCELLED Lấy máu & nước tiểu: 8:00 - 10:00 sáng Thứ Sáu 06/06/2025
		  SCHEDULED: <2025-06-06 Fri>
		  :LOGBOOK:
		  
		  :END:
			- Sáng dậy trễ, tới nơi 10:03 thì họ đã về hết, nên [hôm đi khám](((6835b167-a703-47d7-a540-3fa9c9fd3afe))) lấy máu luôn.
		- DONE Khám SK: (7:30 đến 10:30 sáng) 12:30 đến 15:30 chiều Thứ Bảy 21/06/2025
		  id:: 6835b167-a703-47d7-a540-3fa9c9fd3afe
		    [DYM Medical Center](https://maps.app.goo.gl/p3GoSqsACfK4ApBD9): Phòng B103, M plaza, 39 Lê Duẩn, phường Bến Nghé, Quận 1
		  SCHEDULED: <2025-06-21 Sat 12:30>
		- DONE Cuối tuần 28-29/06 [đi Núi Chúa](((686204b8-8bf7-4ce9-abe9-d7984d814476))) kỷ niệm ngày cưới chị 7 Nhung.
		- DONE This weekends ([12-13 July](((6874657a-c5dd-46fb-a2f3-1d7f059e2a07)))), LSD trip with Mr. Hiệp
	- ## Current Tasks < ((677614c4-ea7d-47c0-89ee-afbacceb56e9)) > ((67763106-205f-4e01-affc-a68e1d8e53a9))
	  id:: 677630fe-ea99-436f-b39f-8bd2295e2eaf
		- DOING Replace Unïnfo with Unïnfo
		  id:: 68a3e5cf-5523-4da5-ad38-d30ab6016f88
		  collapsed:: true
		  :LOGBOOK:
		  CLOCK: [2025-08-27 Wed 16:01:13]
		  :END:
			- Some filenames containing `Unïnfo` must be converted too.
		- DOING [!] Làm lại thẻ VCB
		  id:: 686e580a-a0d6-4e0c-981c-e15665b8e4d0
		  collapsed:: true
		  :LOGBOOK:
		  CLOCK: [2025-08-27 Wed 10:59:07]
		  :END:
			- 27th Aug 2025, walked to the bank to do the card issuing precedure.
			  :LOGBOOK:
			  CLOCK: [2025-08-27 Wed 10:59:25]
			  :END:
			- 10th Sep, expected to receive the new card, which will be notified on mobile app.
			  :LOGBOOK:
			  CLOCK: [2025-08-27 Wed 11:01:20]
			  :END:
		- TODO Update [CT scans of Bell Lê](((684f951d-8174-4c48-90e9-7f14566b8697))).
		- ...
	- ## Future Tasks
	  id:: 67763106-205f-4e01-affc-a68e1d8e53a9
		- TODO Let's port contents of [equivalence of conic rotations](((67e29bdb-9bce-4cb8-b993-79aa130a1831))) to section ((67ed28ed-9acb-4458-be90-c11bebec7f0f)) the in the Mind Jungle.
		  id:: 67ed227c-0277-427a-a47f-2b8d01356b5f
		  :LOGBOOK:
		  CLOCK: [2025-04-02 Wed 19:09:35]
		  :END:
		- TODO Let's note about the [relativity to the subject's view](((67d10ab3-018d-4c04-8d19-096eae010723))), as discussed with Grok-3.
		  id:: 67cfe00c-7750-417c-9a4d-b16e81c32fc7
		  :LOGBOOK:
		  CLOCK: [2025-03-12 Wed 11:24:25]
		  :END:
		- ((682c1735-31c3-4024-8d8a-20d8434db966))
		- TODO Add logical symbols & perp (⟂) to ((66fe9e2e-13cf-4b31-96e7-1b050eed47c4))
		- TODO Add ((66533703-505d-432d-8368-6058eefb45f6)) to [[logseq/config.edn]] commands
		  id:: 67764f3d-c6b3-4f00-a53f-ec4dab0920f9
		  :LOGBOOK:
		  CLOCK: [2025-01-13 Mon 20:14:46]--[2025-01-13 Mon 20:27:13] =>  00:12:27
		  :END:
		- TODO Modify `{{search-query}}` to deal with spaces & delimiters in key words.
		  id:: 67ad537f-9a22-4079-b8d1-352b4c567278
		- TODO Copy [Chuyện Búi Chỉ](https://creatzyitnotes.blogspot.com/2009/11/chuyen-bui-chi.html) to  [CreatZy Notes](https://creatzynotes.blogspot.com/)
		  id:: 67b989a4-a041-4511-abe5-77c785ca2d67
		- ((67714850-43c0-4c7f-8b50-838e014b06e0))
		  id:: 6772a6c7-f434-4911-9fa2-939b8db20c42
			- ((67714c6b-68b6-4f73-b209-56f5f184c4d9))
			- ((67715d03-9dbc-42b0-8589-064396a9c52b))
				- Here i'm planning for the task of designing the master plan itself! 😉
			- ((67715dbd-5ba6-4fc8-bd3e-5fab97885ae7)) & ((67760c43-58c6-40eb-b874-40afae448966))
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