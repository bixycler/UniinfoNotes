- ((666a539d-499f-43c0-8b2e-74818cc3a0f5)) [CreatZy-shorthands.tsv](../assets/GUI/shorthands/CreatZy-shorthands.tsv)
- Alternatives (aliases, different keywords) are separated by comma `,`.
- Character sequence: names & code-points in sequence are joined by plus sign `+`, while characters & HTML entities are joined without joiner (actually emoji sequence contains [zero-width joiner](https://en.wikipedia.org/wiki/Zero-width_joiner) already).
- Alternative CreatZy code depends on command trigger character: `<>` vs `\/`
	- `\/` CreatZy codes are used for ((66ff4478-6eae-4633-b7be-fd42e2bcda5b)), while `<>` CreatZy codes are used for ((66ff445c-0f50-4d56-b24e-5533e1dfa322)).
	- In current TSV DB, `\/` CreatZy codes are assigned to arrow charaters. That means: `⇔` = `/=\` = `<=>`; `⇑` = `/||` = `>||`
- Editor note: Spread sheet editor does change some CreatZy codes, so we must reconvert them after saving.
	- Escape double quotes: `{}"` -> `"{}"""`
	- Replacing the hidden [no-break spaces ` `](https://en.wikipedia.org/wiki/Non-breaking_space) can affect the item `.nbsp`.
	- Set all cells **format as text**, or else there are many problem with number and formula `=`.
		- Plus/minus number: `-0`, `+0` -> `0`
		- `=...` is converted to formula.
- Local web page: [CreatZy-shorthands.html](../assets/GUI/shorthands/CreatZy-shorthands.html)
	- DOING Add CreatZy codes to Emoji
	  id:: 6716110d-ea8b-4314-992a-5d60127a572e
	  :LOGBOOK:
	  CLOCK: [2024-10-18 Fri 19:42:38]
	  CLOCK: [2024-10-22 Tue 10:30:30]
	  :END:
	- TODO convert to Logseq commands
	  :LOGBOOK:
	  CLOCK: [2024-10-18 Fri 19:42:38]
	  :END: