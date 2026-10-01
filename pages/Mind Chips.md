- Aperas dev
  id:: 6a986297-7a2f-4be1-b440-caf79deefc9b
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
		- state-machine subagents, state machine tool
	- etc
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
		- What's the conversion of address for?
			- Address in Apeiron is converted to ID form `aperas://id/...` at ingestion.
			- Address in artifact is converted to compatible form `../folder/doc.md#id/BlockNode:...` at projection.
			- `ingest` must be aware of the stored ID to create node with matched ID.
		- URL: `aperas://sub.graph/folder/artifact.md/BlockNode:${snowflake}`
	- Subjective Conception vs. Objective Hierarchy
	  collapsed:: true
		- The Objective Hierarchy
			- **Strict Hierarchy & Traceability**: $\text{Design} \leftarrow \{\text{Issues, Plans, History}\} \leftarrow \text{Discussions} \leftarrow \text{Threads}$ (lower layers cite upper layers for justification and ground truth).
			- **Ephemeral Base**: Threads live beneath the pyramid as ephemeral runtime or working traces (git-ignored, volatile, stream-like).
			- **System Objectivity**: Represents the agreed-upon source of truth for the codebase/product.
		- The Subjective Conception
			- **Cross-cutting Projection (Image 1)**: P1's concepts and P2's concepts cast different perspectives onto the same pyramid. Each person/agent maintains an internal model that references canonical components at different depths without altering the canonical core.
			  collapsed:: true
				- ![Aperas: Views on a system](https://docs.google.com/drawings/d/e/2PACX-1vQxGlS6LSlUKv3eoFAD0xCfGtlUCxxtxnWZdxtKhca9m6VtlZbq0L9lMArHOKAXeSUPd7jU7NC6hL4Y/pub?w=960)
			- **Multi-System Synthesis (Image 2)**: A single person/agent ($P$) holds contiguous viewcones extending across multiple distinct systems (Aperas, Another System, etc.), allowing personal concepts to bridge, compare, and integrate otherwise isolated architectural silos.
			  collapsed:: true
				- ![Aperas: Views on different systems](https://docs.google.com/drawings/d/e/2PACX-1vQ5OzoCVxxtYuLpB0gbcy3zEXvKKZiJ-A4zBUP9ju_HSaA7bV_mUBFpFD8wh91CN1PmMhWiKOX_5WEv/pub?w=550){:height 431, :width 548}
- ---
- 🤔😊😁 😉 😮 😛 🤪 😜 🤣 🙁 😱 👺 👁️🧿🪬  – × → ← ↓ ⇒ ⇋ ⇄ ∞∝α ‘’ ≈ ≥
- Ω-thread Unïnfo —