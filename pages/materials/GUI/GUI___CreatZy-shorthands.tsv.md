- ((666a539d-499f-43c0-8b2e-74818cc3a0f5)) [CreatZy-shorthands.tsv](../assets/GUI/shorthands/CreatZy-shorthands.tsv) = [CreatZy-shorthands-noEmoji.tsv](../assets/GUI/shorthands/CreatZy-shorthands-noEmoji.tsv) + [CreatZy-shorthands-emoji.tsv](../assets/GUI/shorthands/CreatZy-shorthands-emoji.tsv)
	- [Logseq-commands.edn](../assets/GUI/shorthands/Logseq-commands.edn) <- [CreatZy-shorthands-commands.tsv](../assets/GUI/shorthands/CreatZy-shorthands-commands.tsv) is the first parts of `CreatZy-shorthands.tsv`, excluding the last part `Additional Emoji`, for ((66fe90ad-7d6f-4516-a219-5dcb886505d9)) in `config.edn`.
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
	- DONE Add CreatZy codes to Emoji
	  id:: 6716110d-ea8b-4314-992a-5d60127a572e
	  :LOGBOOK:
	  CLOCK: [2024-10-18 Fri 19:42:38]
	  CLOCK: [2024-10-22 Tue 10:30:30]--[2024-10-22 Tue 15:58:22] =>  05:27:52
	  :END:
	- DOING convert to Logseq commands
	  id:: 6716110d-d67c-4ef3-b903-0ce6c578ccd2
	  :LOGBOOK:
	  CLOCK: [2024-10-18 Fri 19:42:38]
	  CLOCK: [2024-10-22 Tue 16:06:25]
	  :END:
- [Unicode](((6716110f-fa0b-480f-9051-54e0b152d8ec))) database: [charMap.js](../assets/GUI/shorthands/charMap.js)
	- Source: [UnicodeData.csv](../assets/GUI/shorthands/UnicodeData.csv) = [UnicodeData.txt](http://unicode.org/Public/UNIDATA/UnicodeData.txt)
	- All names are normalized, by function `normName(name)`, to lowercase with all proper names and capital letters capitalized.
	  id:: 67174db9-a20b-45ef-94ec-0febf56f60f8
- [HTML entity](((6716110f-c249-4ff9-b564-ddc2c71b89ba))) database: [htmlEntityMap.js](../assets/GUI/shorthands/htmlEntityMap.js)
	- Source: `namedReferences.html5.characters` in [named-references.js](../assets/GUI/shorthands/named-references.js) <- [named-references.ts](https://github.com/mdevils/html-entities/blob/master/src/named-references.ts) of `mdevils/html-entities`
- ((6716110f-5741-4ed0-aeeb-9c150ef847a0)) database: [emoji-lib.js](../assets/GUI/shorthands/emoji-lib.js)
  id:: 671749b8-3705-4377-9a63-c113840eb6dc
	- All emoticon codes in keywords are removed, so that they will not conflict with CreatZy codes.
	  id:: 67174a19-1aec-4e23-94d5-79373c0019fe