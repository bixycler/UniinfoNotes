- Logseq publish
  :LOGBOOK:
  CLOCK: [2024-06-11 Tue 10:35:39]
  CLOCK: [2024-06-11 Tue 10:36:22]--[2024-06-12 Wed 10:17:12] =>  23:40:50
  :END:
	- Use the built-in feature `Export public pages`.
	  collapsed:: true
		- Chose a **separate folder** (`$web/`) to checkout the `gh-pages` branch, then export to that folder.
			- Warning: Don't export to the same folder with the `main` branch (`$src/`), because their contents are very different.
			- Manually copy the whole `assets` folder from `$src/` to `$web/`
				- because [!] The built-in publisher still cannot handle assets (embedded or linked) other than embedded image.
		- The folder `$web/` can be launched by Web Servers.
		- When `gh-pages` branch is pushed to GitHub, GitHub Pages will deploy it to `https://$user.github.io/$repo/`.
		- [!] The built-in publisher does not give option to set `theme-mode: light/dark` and `accent-color: blue` and it always use the default theme (`data-color=logseq`).
		- So i customize `data-color=logseq` to match CreatZy theme.
		- [!] The built-in publisher still cannot handle assets (embedded or linked) other than embedded image.
		  collapsed:: true
			- ⇒ Manually copy the whole `assets` folder from `$src/` to `$web/`
	- CANCELLED Use [publish-SPA](https://github.com/logseq/publish-spa) GitHub Action to publish to [GitHub Pages](https://bixycler.github.io/UniinfoNotes/).
	  collapsed:: true
	  :logbook:
	  	  CLOCK: [2024-06-11 Tue 10:37:00]
	  :END:
		- [!] The published SPA has some style mismatch with the desktop app.
		- [!] The published SPA still cannot handle assets (embedded or linked) other than embedded image.
		- CANCELLED Local publishing with [publish-SPA CLI](https://github.com/logseq/publish-spa?tab=readme-ov-file#cli) to publish local graph of HTV's works.
		  collapsed:: true
			- `publish-spa` requires `logseq` to be built for it to use `logseq/static`, but `logseq > yarn install` fails :(
				- ```
				  yarn install > Link step > logseq@workspace:. must be built because it never has been before
				  
				  Ambiguous Syntax Error: Cannot find which to pick amongst the following alternatives:
				    0. yarn install [--json] [--immutable] [--immutable-cache] [--check-cache] [--inline-builds] [--mode #0]
				    1. yarn install [--json] [--immutable] [--immutable-cache] [--check-cache] [--inline-builds] [--mode #0]
				  While running --cwd tldraw install
				  
				  ```
	- CANCELLED Publish linear (long-form) docs with [Hugo publish (logseq-schrodinger)](https://github.com/sawhney17/logseq-schrodinger) for publishing to [Hugo](https://gohugo.io/).
	- Because the exported SPA is too large (~90MB including Electron), it's better to write a Custom Logseq publish via Web API.
	- Manually publish with Block copy & vim commands:
		- First, copy the block to be published to a page in `pages/publish/`, e.g. [[Logseq publish]].
		-