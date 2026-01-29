- Stray Birds
- [opencode-antigravity-auth](https://github.com/NoeFabris/opencode-antigravity-auth): Enable [Opencode](https://opencode.ai/) ([GitHub](https://github.com/anomalyco/opencode)) to authenticate against Antigravity (Google's IDE) via OAuth so you can use Antigravity rate limits and access models like gemini-3-pro and claude-opus-4-5-thinking with your Google credentials.
- Two 10h-sleeps ended with deep awakening insights. 
  collapsed:: true
	- Saturday: breath can unblock the system (threads, vessels, meridians), clear delusion -> fluidify crystal forms -> dissolve self -> resolve greed & aversion
		- The form of all selves are equal, either higher or lower.
		- TODO The previous experience of entering ground state:
	- Sunday: (connection graph & hierarchy tree = spatial/physical body) vs (individual history = time) vs (global history + mixing + common extraction = multidimensional info body out of spacetime)
		- Fluidification through self-dissolution to return to the common root versus fluidization by external heat/fluid
			- Normal op-mode: the core is a cold crystal defining rules for hot peripherals to works. Each peripheral part is hot by attention & energy concentration on it.
			- Coherent ob-mode: The whole body is activated with an evenly dispersed energy (uniform distribution at ground state) => attend to the (empty) center => the core is heated to be active => the crystal core is fluidified to be transformed by the whole body.
- Chat with Google AI Mode [about my Tantric practices](https://share.google/aimode/0JMoln8TdMSlMBj7L): It's nice that many of my insights through practice can be explained by neurophysiology 😊!
  collapsed:: true
	- It's interesting that the "tingling, electric wave" sensation can be explained by the literal electrical impulse (action potential) in neural circuits. 😀
- ---
- A roundtrip of name: 高岭土 (đất sét Cao Lĩnh/Lãnh) in China -> Kaolin in Europe -> [cao lanh](https://vi.wikipedia.org/wiki/Cao_lanh) in Vietnam (from French pronunciation) 
  collapsed:: true
	- Porcelain from China -> also called "china" in Europe
- Chat with Google AI Mode about the [3-stage revolution](https://share.google/aimode/qw9oqFwQ2vGms1azS) of "vessel".
  collapsed:: true
	- The development of the artist can be formulated as the etymological evolution of the "vessel" through three stages: from a static container of the self (a vase storing emotion), to a dynamic carrier (a ship transporting intention), and finally to a channel manifesting the universal truth.
	- Stage 1: Vase – The Static Container – The Self and Personal Expression
		- In the initial stage, art serves as a receptacle for internal emotions ("I feel"). Here, the vessel represents the Self as a closed entity.
		- The Zen Lesson: The artist at this stage is often likened to the "full cup of tea", where personal opinions and ego prevent the reception of new insight. They may also experience the "broken bowl" (the realization of impermanence) or the "leaking pot" (the unrefined sharing of the self).
		- The State: Art is a static act of containment, focused on storing and revealing the contents of a limited, subjective experience.
	- Stage 2: Vaissel – The Dynamic Carrier – Calculated Means and Mission
		- As one reaches professional mastery, the focus shifts toward the refinement of form as a deliberate tool to convey specific meaning ("I intend").
		- The Philosophy: This aligns with the tradition of "Văn dĩ tải đạo" (Literature as a vehicle for the Way). The vessel evolves from a stationary jar into a Ship – a functional craft designed to carry a "cargo" of ideas or morals across the medium.
		- The State: This is the realm of rigorous Formalism. The artist builds a sturdy "hull" (Form) to ensure the "intended content" reaches the audience intact. At this stage, the carrier (the ship) and the carried (the Way) remain two distinct entities.
	- Stage 3: Vessel – The Through Channel – Transpersonal Intension and Suchness
		- At the apex of mastery, the boundary between the creator and the creation dissolves. The image of the carrier is replaced by the Conductor or the Channel (akin to a blood vessel or a power line).
		- The Philosophy: The artist becomes a "vessel" in its most dynamic sense – a pure conduit for a transpersonal force. There is no longer an effort to "carry" a message; instead, there is a spontaneous flow of "Suchness" (Tathata).
		- The State: The artist achieves a state of "selflessness" (emptiness), becoming a channel with zero resistance. Form and content merge into a single, non-dual reality: "This Is It!" At this level, art is no longer a representation or a "deceptive moonlight", but the direct radiance of the truth passing through a form that has become perfectly transparent.
- ---
- [Ripple](https://www.ripplejs.com/) = Solid + Svelte
  collapsed:: true
	- Ripple provides surgical, fine-grained reactivity through **lazy pull** of updated values from browser paint, instead of the **active push** of change through dependency graph in Solid & Svelte 5.
	- The minimal runtime scheduler uses `queueMicrotask()` ~~`requestAnimationFrame()`~~ to pull updated values only at the next browser paint => lazy & batch processing.
	- Like the good old Svelte 4, all dependencies are built into direct references to DOM nodes at compile time => no reactive runtime like Solid & Svelte 5.
	- The component code is run only once during initialization, no reconciliation & component re-execution, ~~even very slightly for `if` & `for` in template like Svelte & Solid~~.
		- [?] This first run is just for value init of the prebuilt dependency graph embedded in the DOM nodes & HTML templates, which is lighter than Solid's setup run for building signal graph.
		- Ripple’s compile-time block boundaries give it the potential to be lighter in many common template-driven UI cases, because the compiler can eliminate runtime indirection and create tight block code.
		- Ripple still performs runtime dependency capture + clock checks and will _re-run an **entire block**_ if any dependency in that block is dirty.
		- Solid’s per-signal notification can be more fine-grained when many tiny signals are independently updated.
	- At runtime, there are no "signal" objects like Solid, nor "subscribers" like Svelte, just variables and their direct references to DOM nodes.
	- CANCELLED Ripple even creates its own **static memory mapping** to avoid the problem of "stale closure" in JS dynamic memory management!
		- So, no garbage collection for these static reactive variables!
		- And the code is more predictable, which Ripple advertises to be more friendly to AI agents.
		- This is a shift from reactive functions (Solid) to reactive memory (Ripple).
- ---
- 21st, 
  collapsed:: true
	- [Two Twisty Shapes Resolve a Centuries-Old Topology Puzzle](https://www.quantamagazine.org/two-twisty-shapes-resolve-a-centuries-old-topology-puzzle-20260120/): For the first time, mathematicians have found an example of a compact doughnutlike surface that shares its local geometric information (metric & mean curvature) with another surface, despite having a completely different global structure.
	- [Alzheimer as an autoimmune disease](https://www.sciencealert.com/alzheimers-might-not-actually-be-a-brain-disease-reveals-expert)
	- [LFM2.5-1.2B-Thinking](https://www.marktechpost.com/2026/01/20/liquid-ai-releases-lfm2-5-1-2b-thinking-a-1-2b-parameter-reasoning-model-that-fits-under-1-gb-on-device/) model for agent brain-muscle, compared to Gemma 3 1B IT, Llama 3.2 1B Instruct, Qwen3 1.7B Instruct Mode, etc.
	  id:: 6977467f-ec88-4c32-a0f9-6415461a83bc
	- [Context graph](https://www.marktechpost.com/2026/01/20/what-are-context-graphs/) as an extension of knowledge graph!? 🤔 Haha, i've never thought of KG as storing “contextless rules & isolated facts” 😆! Anyway, i'm always living the graph, no matter what you call it!
	- DONE 20th, Sửa "dấu" thành "giấu"  trong [bản Tâm Minh (Ngô Tằng Giao)](https://bixycler.github.io/PhapCu-Dhammapada/#ColumnsView/e0-o0-i0/18/252)
	  :LOGBOOK:
	  CLOCK: [2026-01-26 Mon 19:28:57]--[2026-01-26 Mon 19:29:03] =>  00:00:06
	  :END:
- ---
- Weekends 24-25:
  collapsed:: true
	- Let's try [Open Notebook](https://github.com/lfnovo/open-notebook) to check its RAG against the AnythingLM's RAG
		- `sudo docker compose up -d` showed all OK, but `sudo docker compose logs surrealdb` show "Permission denied" failure:
			- ```
			  surrealdb-1  | 2026-01-26T13:18:55.888657Z ERROR surreal::cli: There was a problem with the database: There was a problem with a datastore transaction: Failed to create RocksDB directory: `Os { code: 13, kind: PermissionDenied, message: "Permission denied" }`.
			  
			  ```
	- [Agentic AI Research Assistant](https://www.confluent.io/use-case/agentic-ai-research-assistant/) via [Confluent’s data streaming platform](https://www.confluent.io/data-streaming/)
	- [Web search agent](https://ai-sdk.dev/cookbook/node/web-search-agent): many models offer native web-searching capabilities: Perplexity, OpenAI (with Responses API), Gemini (with [Grounding with Google Search](https://ai.google.dev/gemini-api/docs/google-search) for 2.5 Flash with [500 req/day free](https://ai.google.dev/gemini-api/docs/pricing#standard))
		- `google_search_retrieval` tool in Gemini API.
	- [Graphite](https://editor.graphite.art/): open source vector graphics for procedural creation/editing & animation, just like Blender for 3D
- [FRED](http://wit.istc.cnr.it/stlab-tools/fred/demo/): a tool for automatically producing RDF/OWL ontologies and linked data from natural language sentences... but it generates too complicated RDF for a simple sentence like “I am a man.”
- [Zed](https://zed.dev): an interesting code editor with AI agents, written in Rust for high-speed [GPUI](https://docs.rs/gpui_rn/latest/gpui/), but still in active dev phase.
	- My first [testZed](../assets/Will/story/2026-01/testZed.md) show a bug right in the AI settings.