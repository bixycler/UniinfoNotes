- Corkei:
	- DONE Test interleaving thoughts & responses
	  :LOGBOOK:
	  CLOCK: [2026-02-06 Fri 13:02:08]--[2026-02-06 Fri 17:57:53] =>  04:55:45
	  :END:
		- The models cannot interleave their thoughts with explicit response within one turn.
			- This seems to be a limit of the Transformer architecture!? 🤔
	- DOING Add `thoughtSignature` and `<thought>...</thought>` to history
	  :LOGBOOK:
	  CLOCK: [2026-02-06 Fri 15:01:16]
	  :END:
		- The `@google/genai` seems to strips off all `thought: true` parts in the history, or the thoughts are completely conconscious to the model.
			- Detection: The model cannot recall these`thought: true` parts.
			- Solution: Replace `thought: true` parts with `<thought>...</thought>` injected to text in the history
		- Define `<thought>...</thought>` format in system prompt
			- This makes Gemini 2.5 Flash *think out loud* with `<thought>...</thought>` instead of `thought: true` parts!
			- Other models, Gemini 3 and even 2.5 Flash Lite, still keep `thought: true` parts, with optional `<thought>...</thought>`.
			- ⇒ Drop this format in system prompt for thinking models, while using this format to suggest thinking to non-thinking models.
	- Being forced to recall/reflect on its own thoughts which are completely unconscious, both Gemini 2.5 & 3 hallucinate that they violate the system prompt, while in fact they don't.
		- They are obsessed with system prompt.
	- TODO use idb instead of local storage
-