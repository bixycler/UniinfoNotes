# Braindump
id:: 67760c3e-2ed3-4b91-9698-8dea6913e419
	- ((6651ecba-793d-43c5-8020-a9f260b032d8)) This is the ((6667bf32-ab6a-4d64-842d-45d49137e694)) place for ((66536578-c4d3-43f1-b35c-bf71120f0570)) as well as the store of recent braindumps.
	- ## Braindump History
		- ((67760c3e-10a7-4621-8623-383f44bdaf3c))
		- ((6960e589-a505-4522-b1e8-687dc035ac38))
	- ## 2026 Braindumps
	  id:: 6960e589-a505-4522-b1e8-687dc035ac38
	- ### January
	  id:: 68be32ad-ba39-4774-a67b-43a4fb114a3e
		-
	- ## Braindumping < ((68be32ad-ba39-4774-a67b-43a4fb114a3e))
	  id:: db954501-95d0-46e2-b1fc-39b6a966300e
		- ...
		- DOING Wrap up 2025: story, validate graph
		  :LOGBOOK:
		  CLOCK: [2026-01-08 Thu 17:17:27]
		  CLOCK: [2026-01-08 Thu 17:17:28]
		  CLOCK: [2026-01-08 Thu 17:17:30]
		  :END:
			- ((66536e1b-6466-4153-90d6-583003d99a81)) really lags in large pages like [[Mind Jungle]] and [[Story]].
			  collapsed:: true
				- They have similar size of 700+kB, while rather different lines number (9k vs 6k).
				- So, the size does matter, not the lines.
			- `publish/CommonMark/Mind Jungle.cm.md` has invalid Advanced Query due to redundant `<br>`
			  collapsed:: true
				- ```markdown
				  - #+BEGIN_CENTER
				    <br>`<Center` 
				    #+END_CENTER
				  - `<Comment`
				    #+BEGIN_COMMENT
				    <br>This "comment" is a hidden text, just like a "comment" in programming language is hidden from the machine.
				    #+END_COMMENT
				    <br>for hidden text
				  - ``` js
				    <br><Src.js
				    <br>```
				  - `<Query`
				    <br>query-table:: false
				    #+BEGIN_QUERY
				    <br>{:title "Advanced Query" :query  [:find ?x :in $ ?x ] :inputs ["Ex"]}
				    #+END_QUERY
				  
				  ```
		- TODO Update [Unitorus](https://www.youtube.com/watch?v=7OR_6L2zyHE)
		- TODO `FabrikDemo-SolidD3` -> `FabrikDemo-SolidSvg`
		  :LOGBOOK:
		  CLOCK: [2025-12-05 Fri 18:02:26]
		  :END: