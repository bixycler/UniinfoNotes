- Aperas dev
  collapsed:: true
	- `SKILL.md` Style
		- Lead-in term then colon, not bold sentence then period.
		- Any later part with lead-in term should be a sub-item, not to be burried in the long paragraph.
		- Outside the Freeflow, either written from scratch or promoted from a freeflow item, each paragraph should not be longer than 3 sentences. Break them into sub-items for clarity. Don't nest many things (multiple ideas, em-dashes, nested explanations, etc.) into a single sentence. 
		  collapsed:: true
			- Example 1:
				- From a long-running sentence: "This option, which is proposed in the discussion as the first candidate — the most valuable choice we can make — to implement, must be reconsidered now, due to its problematic behavior (unstable performance, high resource consumption, etc.) at runtime."
				- Break down into sentences: "We must reconsider this option due to its unstable performance and high resource consumption at runtime. It was originally proposed as our top candidate because it was the most valuable choice we can make."
			- Example 2:
				- From a run-on sentence: "`packages/web` renders the live corpus via a Solid `FolderDiv`, driven entirely by real graph state through a dev-only bridge to the ApeironNgn service (talking to it directly over its unix socket — the same request/ensureServiceRunning every `kg*.ts` entrypoint already uses — rather than shelling out a CLI subcommand per click, which the first version of this bridge did and which made fold/unfold feel like seconds-per-click; a `flush: true` inherited from that first version separately forced a full content-mirror dehydrate on every `fold`/`unfold` too, since service.ts's own cases set the content-dirty flag unconditionally)."
				- Refactor to a list: "`packages/web` renders the live corpus via a Solid `FolderDiv`, driven by real graph state through a dev-only bridge to ApeironNgn.
					- Communication: Talks directly to the service over its Unix socket. It uses the standard request/ensureServiceRunning entrypoint pattern found in `kg*.ts`.
					- Performance Fix: Replaces the legacy CLI subcommand approach, which was causing severe multi-second lags on `fold`/`unfold`.
					- State Management: Fixed a legacy `flush: true` inheritance that was unconditionally setting the content-dirty flag and forcing an aggressive full content-mirror dehydrate on every toggle."
	- Core
		- Add service log
		- state-machine subagents, state machine tool, subagent thread + treeview
	- etc
		- Let's add `--format:{short|long}` to `tree`. Default: `long` for `--view`, `short` otherwise.
		- Usage instruction (in Vietnamese)
		  collapsed:: true
			- Đây là bản Aperas hôm trước mình demo: mới v0.2 còn sơ khai, nên mọi người vọc chơi thảm khảo nhé, còn phát triển thêm nhiều ;)
			  Source: https://github.com/bixycler/Aperas (Cấp phép "Vô Phép": Unlicense license!)
			  Release: https://www.npmjs.com/package/aperas
			  Repo `${docs}` dùng trong VD này: `skygate-architecture-aperas`
			  Install globally: `npm install -g aperas`
			  or install to the docs repo: `cd ${docs} && npm install aperas`
			    + Add `${docs}/node_modules/.bin`  to `$PATH`
			- ```sh
			  cd ${docs}
			  aperas init
			  aperas skill install
			  # Update aperas.config.json: "apeiron": "./Apeiron" (graph store); "artifacts": "./skygate_architecture" (documents)
			  # add .gitignore: node_modules, Apeiron/.state 
			  aperas serve # start service
			  aperas ingest --track # ingest all markdown files in artifacts/
			  ```
			- ==> Webview: http://localhost:2736/
			- Open coding agent (Claude Code) in  ${docs} ==> It will ask to use Aperas skill.
			- Lưu ý là service sẽ tự stop sau 20 phút không có hoạt động. Nên nếu để lâu thì cần phải `aperas service start` lại.
			- Trong VD trên thì cả `artifacts` là 1 symlink tới skygate_architecture,  vì skygate_architecture là 1 repo có sẵn nên không để thẳng trong repo `skygate-architecture-aperas` được.
			  Nhưng nếu viết docs từ đầu thì có thể để thẳng các file `.md` đó trong thư mục artifacts.
			    + Và khi cần quản lý docs của nhiều module khác nhau, thì chúng ta tạo symlink (trong thư mục artifacts) tới các module khác nhau.
				- VD:
				  ```
				  artifacts
				  ├── README.md
				  ├── mydocs
				  │   ├── discussion.md
				  │   └── mydesign.md
				  ├── aal_gw -> ../java17/aal_gw
				  └── sgapi -> ../api/sgapi
				  ```
	- Linking
		- Dense linking with links & tags as fields, and `concepts.md`
		- What's the conversion of address for? What's the form of address in Apeiron?
- ---
- 🤔😊😁 😉 😮 😛 🤪 😜 🤣 🙁 😱 👺 👁️🧿🪬  – × → ← ↓ ⇒ ⇋ ⇄ ∞∝α ‘’ ≈ ≥
- Ω-thread Unïnfo —