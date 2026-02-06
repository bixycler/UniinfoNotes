- Corkei:
	- DOING test interleaving thoughts & responses
	  :LOGBOOK:
	  CLOCK: [2026-02-06 Fri 13:02:08]
	  :END:
	- DOING Add `thoughtSignature` to history
	  :LOGBOOK:
	  CLOCK: [2026-02-06 Fri 15:01:16]
	  :END:
		- The `@google/genai` seems to strips off all `thought: true` parts in the history, or the thoughts are completely conconscious to the model.
			- Detection: The model cannot recall these`thought: true` parts.
		- Define `<thought>...</thought>` format in system prompt
			- This makes Gemini 2.5 Lite *think out loud* with `<thought>...</thought>` instead of `thought: true` parts!
			- Other models, Gemini 3 and even 2.5 Lite, still keep `thought: true` parts, not outputting `<thought>...</thought>`.
	- Being forced to recall/reflect on its own thoughts which are completely unconscious, both Gemini 2.5 & 3 hallucinate that they violate the system prompt, while in fact they don't.
		- They are obsessed with system prompt.
	- TODO use idb instead of local storage
- 🤔