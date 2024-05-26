# Mind Jungle
id:: 6651e92e-fb34-4d24-a386-d9698c2e93f7
	- ## Brainstorm
	  collapsed:: true
		- In possessive form like "Will's note", [the apostrophe `'` stands for](https://www.merriam-webster.com/grammar/history-and-use-of-the-apostrophe) the "e" in the suffix "-es" of [genitive form](https://www.merriam-webster.com/dictionary/genitive) of noun in the [Old English](https://en.wikipedia.org/wiki/Old_English).
		  id:: 66536ad3-264b-4351-868b-e7e8a7a82774
			- Now I propose to use apostrophe to further omit the "s" in possessive form, so
				- `Will/mind/conceptual/head` in file management =
				- `Will.mind.conceptual.head` in programming =
				- "Will' mind' conceptual' head" in natural language!
		- **Id < *address* < context**  
		  collapsed:: true
		  All content arrow is via its complement context:   
		  full content = apparent content carried by the form + hidden content (context as form)
			- form = condensed context = condensed hidden content
			- optimization = formation = context condensation (to the extremes like 🆔)
			  + optimization frees the subject from the lengthy "irrelevant" context, but also constrains to the form!
		- All objects are arrows, addresses, vector, `v`'s
		  collapsed:: true
			- Relativity: The destination of that address is relative to the root object (intent, self).
			- The root object `O` is just another vector, hence the target of `v` from `O` is just `O+v`.
			- `v` is the diff, the change, the transformation, the effect brought to `O`.
			- Intensionally, it's the addition `O+v`, but extensionally it's the multiplication `O⋅v`.
		- The relativity & equality between form & content as 2 vectors
		  collapsed:: true
			- `u⋅v = 0` means orthogonal... but their "self threads" are parallel!?!
			- The portion of seen is the portion of orthogonal => parallel = unseen
			- We see a static object, which is almost parallel to us in time, thanks to the near orthogonal light rays from it! That's why we can only see its external shape, i.e. very little part of it.
		- directory/folder = namespace (exclusive)
		  id:: 6651ade9-43c6-4beb-9981-cb03d53dc23c
			- obj `Will` -> {in-world `Will/**`, ex-world `Will\*/*`} = {M, W} = {inner view cone, outer view cone}
			- Will's in-world contains properties of `Will`, like `Will/name`, `Will/age`, `Will/mind`, `Will/mind/conceptual`, `Will/mind/conceptual/{dog,mouse}`, etc.
			- Will's ex-world contains `Will` and other peers of `Will`, like `Na`, `Nyatty`, `Earth`, `Milky Way`, etc.
			  collapsed:: true
				- In the top-down view, Will's ex-world can be partitioned by region, e.g. `Vietnam/house of Will/Na` vs `Japan/house of Harusada/Na`. But we use the ***relative*** (bottom-up) view from Will: `Will\1/Na` is just the dog Na closest to Will, i.e. `Will\1/Na` = `Will\2/house of Will/Na` = `Vietnam/house of Will/Na`.
				- The backslash is used in [MS-DOS/Windows' path](https://en.wikipedia.org/wiki/Path_(computing)#MS-DOS/Microsoft_Windows_style), in [PHP namespace](https://www.php.net/manual/en/language.namespaces.php), and as [Decimal Exponent Symbol](https://en.wikipedia.org/wiki/Scientific_notation "Scientific notation") in [ALGOL 68](https://en.wikipedia.org/wiki/ALGOL_68 "ALGOL 68"). Our use of `\u` as "u-level container" is nearest to the use in ALGOL 68.
			- Other notations of path:
				- `Will/mind/conceptual/dog`, `Will\1/Na` in file management
				- `Will.mind.conceptual.dog`, `Will^1.Na` in programming
				- "Will' mind' conceptual' dog", "Will^1' Na" in [natural language](((66536ad3-264b-4351-868b-e7e8a7a82774)))
			- Relation ref/arrow between objects in these worlds:
			  collapsed:: true
				- example: in -> ex: dog -> {Na, Nau}, mouse -> {Nyatty, Nyatto}
				- property composition: ex -> in: Na -> {dog, horse, monkey}
				- ((6651ecba-793d-43c5-8020-a9f260b032d8)) in -> in: dog -> {vocal: bark, genus: Canis}
				- extension/reference: in -> ex.in: `Will/mind/conceptual/dog` -> `Wikipedia/Dog`
				- relation: ex -> ex: Na -> {child: Nau, prey: Nyatty}
				-
		- in + ex = con
		  collapsed:: true
			- form + partial content = intent + extent = full content (Ω)
			- id, key := value
				- id : type { type = {id : `*`} }
			- in-thread touches ex-thread
				- function ex = f(in)
				- variation of ex compared to in
				- in + ex unified to Ω thread (full content)  
				  -> in = form = abstraction of Ω
				- in reflects ex with distortions: abstraction, mixing
			- recursive bifurcation via recursive reflection:  
			  $e_0 = i_0 = c = con = ex + in = e_1 + i_1 = e_1 + (e_2 + i_2) =$  
			  $e_1 + (e_2 + (e_3 + (... i_n)))$
		- Convert all metadata to block-links
		  collapsed:: true
			- `#tag` = block-link
			- `property.subprop: some string value` is stored as an item with property `name` like this:
				- some string value 
				  name:: ((6651ea73-78b4-4c1a-b052-b2ea9555b6f6))
				  :LOGBOOK:
				  CLOCK: [2024-05-25 Sat 22:30:07]--[2024-05-25 Sat 22:30:08] =>  00:00:01
				  :END:
			- We can define property with composite value like this:
				- a composite
				  name:: ((6652048c-27b3-47b6-84e5-25af8d9ce801))
					- a component
					- another component
			- Store properties in sub-items:
			  It's simpler just to use sub-items to store properties. Then in the property `components` of the container item, we can collect forms (definitions) of these sub-item-properties into a list, like this:
			  components:: ((66532914-003a-4bbb-9e97-6f1c87170d7d)), ((66532bc2-a18e-43ab-86ac-a0f0f7dcbbb5))
				- ((6651ecba-793d-43c5-8020-a9f260b032d8)) This is an example of how to use sub-items as properties.
				- ((6652048c-27b3-47b6-84e5-25af8d9ce801)) This component contains sub-components:
					- a component
					- another component
		- Let's test `{{query}}` in Logseq:
		  collapsed:: true
			- Today: {{query <% today %> }}
			  id:: 66521398-7318-4d06-ac79-899f244a31c0
			- query-table:: true
			  query-sort-by:: block
			  query-sort-desc:: false
			  #+BEGIN_QUERY
			  {:title ["Property in namespace [uuid of property name]"]
			    :query [ 
			    :find (pull ?b [*])
			    :in $ ?uuid
			    :where
			      [?b :block/properties ?prop] 
			      [(get ?prop :name) ?name]
			      (or
			        [(= ?name ?uuid)]  
			        [(contains? ?name ?uuid)]  
			      )
			    ] ; end query
			    :inputs[ "((6652048c-27b3-47b6-84e5-25af8d9ce801))" ]
			  }
			  #+END_QUERY
			- query-sort-by:: block
			  query-table:: true
			  query-sort-desc:: false
			  #+BEGIN_QUERY
			  {:title "Block links [ uuid of destination blocks ]"
			  :query [
			    :find (pull ?b [*])
			    :in $ ?dest
			    :where
			     [?b :block/refs ?dest]
			   ]
			   :inputs [ [:block/uuid #uuid "66532bc2-a18e-43ab-86ac-a0f0f7dcbbb5"] ]
			  }
			  #+END_QUERY
			- [Logseq/Advanced Queries Examples](https://siferiax.github.io/#/page/logseq%2Fadvanced%20queries)
			- [Graphical explanation of pages, blocks and references](https://discuss.logseq.com/t/graphical-explanation-of-pages-blocks-and-references/15966)
		- Special properties built in Logseq:
		  title:: Title
		  alias:: A, B, C
		  tags:: T, U, V
	- ## Unïnfo
	  id:: 66537a41-f229-4891-803e-828573eb44f3
	  collapsed:: true
		- Universal Information
		  ===
		  
		  "Unïnfo" is the umbrella term for both [[Unïnfo Theory]], as the theoretical aspect, and ((665379b7-e4f6-4240-8029-fd143e2230c7)), as the practical aspect.
	- ## question
	  collapsed:: true
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Question
	- ## GeoGebra
	  id:: 66537e93-db66-477f-99ac-7825366fc0e1
	  collapsed:: true
		- ((665359c3-61fd-4858-a117-ecbcd6fbc9ea)) https://www.geogebra.org/
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) An interactive math app for composing math applets (geometry) with formulae (algebra).
		- ((66536578-c4d3-43f1-b35c-bf71120f0570))'s profile: https://www.geogebra.org/u/lexuandinhct
			- Applet source codes GitHub: https://github.com/bixycler/GeoGebraApplets
	- ## Way
	  id:: 665379e5-5bf4-4e00-ab03-9f41ff14cccc
	  collapsed:: true
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Tao
	- ## Balance Way
	  id:: 665379b7-e4f6-4240-8029-fd143e2230c7
	  collapsed:: true
		- "Balance" is the natural ((665379e5-5bf4-4e00-ab03-9f41ff14cccc)) of the ((66537a0b-d107-4f7e-b01f-bf624a647d8c)) and should be the chosen way of life.
	- ## Universe
	  id:: 66537a0b-d107-4f7e-b01f-bf624a647d8c
	  collapsed:: true
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Universe
	- ## glass
	  id:: 66537c37-2d4a-4077-9fcf-45c71755c876
	  collapsed:: true
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Glass
		- Discussion:
			- Even looks like crystal, glass is [amorphous](https://en.wikipedia.org/wiki/Amorphous_solid), i.e. non-crystalline, because it lacks the the [long-range order](https://en.wikipedia.org/wiki/Long-range_order "Long-range order") that is characteristic of a [crystal](https://en.wikipedia.org/wiki/Crystal "Crystal").
			- It's even not a "solid" in the normal sense because it's the [hybrid of liquid and crystal](https://en.wikipedia.org/wiki/Structure_of_liquids_and_glasses)! It's [more liquid than solid](https://en.wikipedia.org/wiki/Glass#Formation_from_a_supercooled_liquid) due to [glass–liquid transition](https://en.wikipedia.org/wiki/Glass_transition) instead of the normal first-order [phase transition](https://en.wikipedia.org/wiki/Phase_transition "Phase transition").
	- ## crystal
	  id:: 66537bdd-6c99-4d7b-905a-e2a487cae5ce
	  collapsed:: true
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Crystal
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) A [solid](https://en.wikipedia.org/wiki/Solid "Solid") material whose constituents (such as [atoms](https://en.wikipedia.org/wiki/Atom "Atom"), [molecules](https://en.wikipedia.org/wiki/Molecule "Molecule"), or [ions](https://en.wikipedia.org/wiki/Ion "Ion")) are arranged in [crystal structure](https://en.wikipedia.org/wiki/Crystal_structure)  which is a periodic [long-range order](https://en.wikipedia.org/wiki/Long-range_order "Long-range order") that extends in all directions called ((66537b4c-fa0a-4e95-b854-096e9802aa09)) in math.
	- ## lattice
	  id:: 66537b4c-fa0a-4e95-b854-096e9802aa09
	  collapsed:: true
		- In group theory: [lattice group](https://en.wikipedia.org/wiki/Lattice_(group))
		- In graph theory: [lattice graph](https://en.wikipedia.org/wiki/Lattice_graph)
		- In physics: [crystal lattice](https://en.wikipedia.org/wiki/Crystal_structure)
		- In order theory: [lattice order](https://en.wikipedia.org/wiki/Lattice_(order))
		- ((665359ff-79f1-4669-b10b-f2b0e633a7c1)) The lattice group and lattice graph are equivalent which are generalized from the 3D crystal lattice, but the lattice order is different.
			- There's a hybrid of lattice order with group theory called [ℓ-group](https://encyclopediaofmath.org/wiki/Lattice-ordered_group), i.e. "lattice-ordered group" as a special case of [partially ordered group](https://en.wikipedia.org/wiki/Partially_ordered_group).
	- ## foldable
	  id:: 66537617-23c2-43a9-9a14-5e18fe9aa36f
	  collapsed:: true
		- ((665359e4-4597-4775-b849-f9acbb98960a)) collapsible, abstractable
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) A foldable object, usually a block of text, is an object that can be folded (or collapsed, abstracted) into a brief like header, title, name, summary, and that brief can be unfolded (or expanded, extended) back to the full object. This is a technical implementation of the general ((66537674-6cf9-4459-8bea-7c1858c694a3)).
		- Examples:
			- Foldable [code block](https://en.wikipedia.org/wiki/Block_(programming))s in [IDE](https://en.wikipedia.org/wiki/Integrated_development_environment) or blocks of text in [text editor](https://en.wikipedia.org/wiki/Text_editor)s
			- The ((665361eb-5339-451e-957d-362b946d796d)) [`<summary>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary) within the `<details>` tag
			- [Directory](https://en.wikipedia.org/wiki/Directory_(computing)) in collapsible tree view
			- [File folder](https://en.wikipedia.org/wiki/File_folder) that holds [papers](https://en.wikipedia.org/wiki/Paper "Paper") together
			- The [tab](https://en.wikipedia.org/wiki/Tab_(interface)) in [GUI](https://en.wikipedia.org/wiki/Graphical_user_interface)
		- In [Obsidian](https://help.obsidian.md/Editing+and+formatting/Folding):  Headings, indented blocks.
	- ## abstraction
	  id:: 66537674-6cf9-4459-8bea-7c1858c694a3
	  collapsed:: true
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Abstraction
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) Abstraction is the process of abstracting details, i.e. removing details that are irrelevant to the subject's focus, from an object to get a more concise object that can be handled easier compared to the original object with full details. The result of that process is called by many names: abstract, abstraction, summary, name, title, key, etc. Abstraction is related to ((6653769c-3334-46fa-a1d5-4ce6a7fc23e8)).
	- ## projection
	  id:: 6653769c-3334-46fa-a1d5-4ce6a7fc23e8
	  collapsed:: true
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Projection_(mathematics)
	- ## Equal
	  id:: 6653751a-a1b4-44b0-a81e-0a446eb8918c
	  collapsed:: true
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) The third component of the [[Trinion]].
	- ## description
	  id:: 66532914-003a-4bbb-9e97-6f1c87170d7d
	  name:: ((6651ecba-793d-43c5-8020-a9f260b032d8))
	  collapsed:: true
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) A ((66532914-003a-4bbb-9e97-6f1c87170d7d)) is a text describing something.
	- ## composite
	  id:: 66532bc2-a18e-43ab-86ac-a0f0f7dcbbb5
	  name:: ((6652048c-27b3-47b6-84e5-25af8d9ce801))
	  collapsed:: true
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) A ((66532bc2-a18e-43ab-86ac-a0f0f7dcbbb5)) is an object composed of other objects called ((66532bb2-7680-461b-80b2-71fc96c89fb9))s.
	- ## component
	  id:: 66532bb2-7680-461b-80b2-71fc96c89fb9
	  name:: ((66532ccc-ae21-4940-8714-715060d6bd90))
	  collapsed:: true
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) A ((66532bb2-7680-461b-80b2-71fc96c89fb9)) is an object within another object called ((66532bc2-a18e-43ab-86ac-a0f0f7dcbbb5)).
	- ## Workstack Workflow
	  id:: 66533a2a-6f29-4e4c-81d5-17883be64bdb
	  collapsed:: true
		- ### Workspace
		  collapsed:: true
			- Each person has a Workspace to work with, which includes a Workstack for active tasks at hand, a Task list for future tasks, a History for past (done, cancelled) tasks, and other lists like Problem list, Question list, etc.
		- ### Workstack
		  collapsed:: true
			- Just like the [call stack](https://en.wikipedia.org/wiki/Call_stack) of [computer program](https://en.wikipedia.org/wiki/Computer_program), Workstack is a non-strict last-in-first-out (LIFO) list of tasks being worked on by the subject.
			- All items in the workstack must be prefixed (bullet, task, [?], [!], etc.) to separate with each other, because their order (*from bottom to top*) is opposite to the normal text order (from top to bottom).
		- ### Workflow
	- ## About Legend app
	  collapsed:: true
		- Internal links
			- do not have alternative text for display, always full text of the target item!
			- exported to ((66535e71-3b71-416c-98dc-5dde5e6a76ff)) as full text.
		- Searching across docs
			- Ctrl-Shift-F (Global Search) just search by plain text with no filter!
		- Properties & Attributes
			- Legend's built-in attributes
			- Custom properties can be stored in notes.
				- Notes can be searched/filtered, and then can be excluded from export.
	- ## Will LE
	  id:: 66536578-c4d3-43f1-b35c-bf71120f0570
	  collapsed:: true
		- Vietnamese name: LÊ Xuân Định
		- English name: Will LÊ
		  id:: d7d9077b-f4eb-409c-a895-8dba07aea996
		- Japanese name: LÊ Harusada
		- On ((66536662-052f-46a4-a624-38858bffb334)): `bixycler`
		- On Blogger: `ComputerBoy`
	- ## GitHub
	  id:: 66536662-052f-46a4-a624-38858bffb334
	  collapsed:: true
		- ((665359c3-61fd-4858-a117-ecbcd6fbc9ea)) https://github.com/
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/GitHub
		- ((66536578-c4d3-43f1-b35c-bf71120f0570))'s profile: https://github.com/bixycler
	- ## obsidian
	  id:: 66537d0c-5406-4b46-8975-12d788cfc28e
	  collapsed:: true
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Obsidian
		- Wiki-vi: https://vi.wikipedia.org/wiki/Đá_vỏ_chai
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) A naturally occurring [volcanic glass](https://en.wikipedia.org/wiki/Volcanic_glass "Volcanic glass") formed when [lava](https://en.wikipedia.org/wiki/Lava "Lava") [extruded](https://en.wikipedia.org/wiki/Extrusive_rock "Extrusive rock") from a [volcano](https://en.wikipedia.org/wiki/Volcano "Volcano") cools rapidly with minimal [crystal growth](https://en.wikipedia.org/wiki/Crystal_growth "Crystal growth").
	- ## Obsidian
	  id:: 66535660-643e-471a-a332-8f2306c5494f
	  collapsed:: true
		- ((665359c3-61fd-4858-a117-ecbcd6fbc9ea)) https://obsidian.md/
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Obsidian_(software)
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) A note-taking app based on ((66535e71-3b71-416c-98dc-5dde5e6a76ff)) files with ((e6a21858-1849-462e-b2b0-0bc57b38fb0a)) for internal links to create a ((665364b1-e05c-46a6-a76b-c14cd73d1706)) (PKB).
		- ((66536578-c4d3-43f1-b35c-bf71120f0570))'s vaults:
		  collapsed:: true
			- [UniinfoNotes](https://github.com/bixycler/UniinfoNotes) for ((66537a41-f229-4891-803e-828573eb44f3))
		- ((665359ff-79f1-4669-b10b-f2b0e633a7c1))
		  collapsed:: true
			- About the name "Obsidian": It's taken from the rock ((66537d0c-5406-4b46-8975-12d788cfc28e)) which is a kind of volcanic glass.
				- From forum: https://forum.obsidian.md/t/why-is-obsidian-named-so/4837
				  collapsed:: true
					- Official reason:
					   > it’s a metaphor. **If your raw, unstable thoughts are lava, then Obsidian is… well, Obsidian. It is your crystallized (and beautiful) knowledge.**
					- However, the real reason would be:
					  > we like Minecraft and Obsidian is (as Licat told me) the hardest block in the original Minecraft (he started playing during alpha I think). Also Obsidian sounds cool to me, personally.
					- And ((66537d0c-5406-4b46-8975-12d788cfc28e)) is actually a ((66537c37-2d4a-4077-9fcf-45c71755c876)), not a ((66537bdd-6c99-4d7b-905a-e2a487cae5ce)). Even looks like crystal, glass is [amorphous](https://en.wikipedia.org/wiki/Amorphous_solid), i.e. non-crystalline, because it lacks the the [long-range order](https://en.wikipedia.org/wiki/Long-range_order "Long-range order") that is characteristic of a ((66537bdd-6c99-4d7b-905a-e2a487cae5ce)).
		- The [Obsidian-flavored Markdown](https://help.obsidian.md/Editing+and+formatting/Obsidian+Flavored+Markdown) extends  [CommonMark](https://commonmark.org/) with 
		  collapsed:: true
			- `[[Link]]`: [Internal links](https://help.obsidian.md/Linking+notes+and+files/Internal+links)
			- `![[Link]]`: [Embed files](https://help.obsidian.md/Linking+notes+and+files/Embed+files)
			- `![[Link#^id]]`: [Block references](https://help.obsidian.md/Linking+notes+and+files/Internal+links#Link%20to%20a%20block%20in%20a%20note)
			- `^id`: [Defining a block](https://help.obsidian.md/Linking+notes+and+files/Internal+links#Link%20to%20a%20block%20in%20a%20note)
			- `%%Text%%`: [Comments](https://help.obsidian.md/Editing+and+formatting/Basic+formatting+syntax#Comments)
			- `~~Text~~`: [Strikethroughs](https://help.obsidian.md/Editing+and+formatting/Basic+formatting+syntax#Styling%20text)
			- `==Text==`: [Highlights](https://help.obsidian.md/Editing+and+formatting/Basic+formatting+syntax#Styling%20text)
			- ` ``` `: [Code blocks](https://help.obsidian.md/Editing+and+formatting/Basic+formatting+syntax#Code%20blocks)
			- `- [ ]`: [Incomplete task](https://help.obsidian.md/Editing+and+formatting/Basic+formatting+syntax#Task%20lists)
			- `- [x]`: [Completed task](https://help.obsidian.md/Editing+and+formatting/Basic+formatting+syntax#Task%20lists)
			- `> [!note]`: [Callouts](https://help.obsidian.md/Editing+and+formatting/Callouts)
		- Default ((66536710-7441-4fb8-986b-50d2eec762d7))s:
		  collapsed:: true
			- Default [hotkeys for editing](https://help.obsidian.md/Editing+and+formatting/Editing+shortcuts)
			- Open **command palette**: `Ctrl` `P` or pull down on mobile
			- Open **note**: `Ctrl` `O` or `⊕` button on mobile
			- Insert **note**: `[[`
			- Insert local **heading**: `[[*`
			- Insert **heading of other note**: `[[**`
			- Insert **external link**: `Ctrl` `K`
			- [[Table of Hotkey Assigned Commands in this Vault]]
		- Custom ((66536710-7441-4fb8-986b-50d2eec762d7))s ^custom-hotkeys
		  collapsed:: true
			- [[foldable|Folding]] text blocks in editor:
				- `Ctrl` [`Shift`] `↑`/`↓` to fold/unfold [all] text.
				- `Ctrl` `.` to toggle fold/unfold of current line.
			- Move to folder: `Ctrl` `M`
				- Ideally when creating new note (`Ctrl` `N` ), ((66535660-643e-471a-a332-8f2306c5494f)) should ask or default to the same folder of current note.
		- ### ((66535a44-8a13-4d5a-808e-10baa97ebaf0))
			- Core plugins
			- Community plugins
				- Open Link With
				  id:: 66535685-4fd2-4928-8c65-198ef6f3fe71
				  collapsed:: true
					- Obsidian community plugin: [obsidian-open-link-with](obsidian://show-plugin?id=obsidian-open-link-with)
					- GitHub: https://github.com/MamoruDS/obsidian-open-link-with
				- Folder Note
				  id:: 66537315-7d1a-409a-a89b-2e33e58fe6e6
				  collapsed:: true
					- Obsidian community plugin: [folder-note-plugin](obsidian://show-plugin?id=folder-note-plugin)
					- GitHub: https://github.com/xpgo/obsidian-folder-note-plugin
					- Forum: https://forum.obsidian.md/t/folder-note-plugin-add-description-note-to-folder/12038/10
				- Obsidian Tasks
				  id:: 665373d3-8fd7-4963-9b72-a503e21e54e7
				  collapsed:: true
					- Obsidian community plugin : [obsidian-tasks-plugin](obsidian://show-plugin?id=obsidian-tasks-plugin)
					- GitHub: https://github.com/obsidian-tasks-group/obsidian-tasks
				- Obsidian Webpage HTML Export
				  id:: 66537405-7c71-4a5e-abb4-996a146bb52c
				  collapsed:: true
					- Obsidian community plugin: [webpage-html-export](obsidian://show-plugin?id=webpage-html-export)
					- GitHub: https://github.com/KosmosisDire/obsidian-webpage-export
					- Forum: https://forum.obsidian.md/t/html-export-plugin/51743
					- ((6651ecba-793d-43c5-8020-a9f260b032d8)) Export to ((665361eb-5339-451e-957d-362b946d796d)) format.
				- Obsidian Git
				  id:: 6653743f-8847-4b24-8c21-795c87254eb2
				  collapsed:: true
					- Obsidian community plugin: [obsidian-git](obsidian://show-plugin?id=obsidian-git)
					- GitHub: https://github.com/denolehov/obsidian-git
				- Obsidian GitHub Publisher
				  id:: 6653747e-b02a-4120-861c-f2fd6d686053
				  collapsed:: true
					- Obsidian community plugin: [obsidian-mkdocs-publisher](obsidian://show-plugin?id=obsidian-mkdocs-publisher)
					- GitHub: https://github.com/Mara-Li/obsidian-github-publisher
					- Forum: https://forum.obsidian.md/t/obsidian-github-publisher/37953
					- ((6651ecba-793d-43c5-8020-a9f260b032d8)) Export to ((66536662-052f-46a4-a624-38858bffb334)) in ((66535e71-3b71-416c-98dc-5dde5e6a76ff)) with ((e6a21858-1849-462e-b2b0-0bc57b38fb0a)) transformed to external link.
				- Obsidian Dataview
				  id:: 665374b0-1ed9-420b-afc4-897a942c0be0
				  collapsed:: true
					- Obsidian community plugin: [dataview](obsidian://show-plugin?id=dataview)
					- ((665359c3-61fd-4858-a117-ecbcd6fbc9ea)) https://blacksmithgu.github.io/obsidian-dataview/
					- GitHub: https://github.com/blacksmithgu/obsidian-dataview
					- Custom settings:
						- Inline query prefix: use `` `dv::` `` instead of the default `` `=` `` because ((6653751a-a1b4-44b0-a81e-0a446eb8918c)) (`=`) is the central symbol in [[Unïnfo Theory]].
				- Obsidian Importer
				  id:: 665376f4-9335-4d38-843f-a4cf6ef6cd10
				  collapsed:: true
					- Obsidian community plugin: [obsidian-importer](obsidian://show-plugin?id=obsidian-importer)
					- GitHub: https://github.com/obsidianmd/obsidian-importer
	- ## keyboard shortcut
	  id:: 665367a6-29d7-4fd2-a33b-6d94de8172e8
	  collapsed:: true
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Keyboard_shortcut
		- ((665359e4-4597-4775-b849-f9acbb98960a)) ((66536710-7441-4fb8-986b-50d2eec762d7))
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) a key or a series of [keys](https://en.wikipedia.org/wiki/Computer_keyboard "Computer keyboard") to quickly invoke a [software program](https://en.wikipedia.org/wiki/Software_program "Software program") or perform a preprogrammed action.
	- ## hotkey
	  id:: 66536710-7441-4fb8-986b-50d2eec762d7
	  collapsed:: true
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) An alias for ((665367a6-29d7-4fd2-a33b-6d94de8172e8)), usually used by [Windows](https://en.wikipedia.org/wiki/Microsoft_Windows), ((66535660-643e-471a-a332-8f2306c5494f)), etc.
		- [[Table of Hotkey Assigned Commands in this Vault]]
	- ## wiki
	  name:: ((665359c0-a89a-41b5-9f28-503f79107a08))
	  id:: 66536a32-fddd-465f-a47f-fa8e0ea9c8db
	  collapsed:: true
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Wiki
	- ## Wikipedia
	  id:: 665368c5-5c6f-44e4-a675-4a744252d32c
	  collapsed:: true
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Wikipedia
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) A ((66536af9-f7d7-4be8-be35-9a43b557aef1)) [online encyclopedia](https://en.wikipedia.org/wiki/Online_encyclopedia "Online encyclopedia") written and maintained by a community of [volunteers](https://en.wikipedia.org/wiki/Volunteering "Volunteering"), known as [Wikipedians](https://en.wikipedia.org/wiki/Wikipedians "Wikipedians"), through [open collaboration](https://en.wikipedia.org/wiki/Open_collaboration "Open collaboration") and the use of the ((66536a32-fddd-465f-a47f-fa8e0ea9c8db))-based editing system [MediaWiki](https://en.wikipedia.org/wiki/MediaWiki "MediaWiki").
	- ## free content
	  id:: 66536af9-f7d7-4be8-be35-9a43b557aef1
	  collapsed:: true
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Free_content
	- ## knowledge base
	  id:: 6653685c-5435-4be8-be60-a7fb5195d404
	  collapsed:: true
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Knowledge_base
	- ## knowledge graph
	  id:: 66536888-95d3-4d20-829c-b7ac2088dc29
	  collapsed:: true
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Knowledge_graph
		- Examples: ((665364b1-e05c-46a6-a76b-c14cd73d1706)), ((665368c5-5c6f-44e4-a675-4a744252d32c))'s [Wikidata](https://en.wikipedia.org/wiki/Wikidata), Google's [Knowledge Graph](https://en.wikipedia.org/wiki/Google_Knowledge_Graph),  Microsoft's Satori, as well as the entity graphs of LinkedIn and Facebook.
	- ## personal knowledge base
	  id:: 665364b1-e05c-46a6-a76b-c14cd73d1706
	  collapsed:: true
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Personal_knowledge_base
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) A personal version of ((6653685c-5435-4be8-be60-a7fb5195d404)) and ((66536888-95d3-4d20-829c-b7ac2088dc29)).
		- Techniques
		  collapsed:: true
			- [Zettelkästen](https://en.wikipedia.org/wiki/Zettelkasten) (card file, slip box) from Germany, from 1980s: It use **paper slips** or cards, that may be linked to each other through [subject headings](https://en.wikipedia.org/wiki/Index_term "Index term") or other [metadata](https://en.wikipedia.org/wiki/Metadata "Metadata") such as numbers and [tags](https://en.wikipedia.org/wiki/Tag_(metadata) "Tag (metadata)"). It has often been used as a system of [note-taking](https://en.wikipedia.org/wiki/Note-taking "Note-taking") and [personal knowledge management](https://en.wikipedia.org/wiki/Personal_knowledge_management "Personal knowledge management") for research, study, and writing.
			  collapsed:: true
				- Website: https://zettelkasten.de/overview/
		- Software
		  collapsed:: true
			- [NoteCards](https://en.wikipedia.org/wiki/NoteCards "NoteCards") from 1983 can be seen as the grand parent of the modern ((66536a32-fddd-465f-a47f-fa8e0ea9c8db)).
			- [Roam Reseach](https://roamresearch.com/) from 2019 (dev from 2017) with text block based handling ([outlining](((66536d32-30ad-4c07-8585-76ae9eb7fb22)))), ((e6a21858-1849-462e-b2b0-0bc57b38fb0a)), and [tag](https://en.wikipedia.org/wiki/Tag_(metadata)) can be seen as the (re)start of the modern graph-based note taking movement.
			- ((66535660-643e-471a-a332-8f2306c5494f)) from 2020 is similar to Roam but focus on clean & interoperable markdown documents, with better GUI, plenty of plugins, strong community. However, text block based handling is not as fluidly as in Roam.
			- ((66536e1b-6466-4153-90d6-583003d99a81)) (dev from 2021, still beta now) open-source, focus more on the text block based outlining (like Roam) with some drawbacks:
			  collapsed:: true
				- Every block is a bullet item, so no plain paragraph!
				- A database sits between GUI and markdown docs.
			- [Outline](https://www.getoutline.com/) with strong integrations, but no block link (only page link)
			  collapsed:: true
				- Integrations: multiplayer collaboration, Slack, Google (Workspace, Docs), GitHub, AI (non-free), etc.
				- Source code: They host [repos on GitHub](https://github.com/outline) in which [rich-markdown-editor](https://github.com/outline/rich-markdown-editor) is open-source.
				- For Google account, only Workspace account is supported, personal account is not supported.
			- [zt](https://github.com/c2d7fa/zt) on Emacs
		- Reviews
		  collapsed:: true
			- [Roam vs. Obsidian vs. Notion vs. Evernote: what's the best tool for a productivity-driven lifestyle?](https://www.deliberate-diligence.com/roam-vs-obsidian-vs-evernote-whats-best-for-a-productivity-driven-lifestyle/) A well-documented story of Martin Weitzel's personal progress 
			  collapsed:: true
				- from paper notes
				- to [MS OneNote](https://www.onenote.com/) with chronological order + [todoist](https://todoist.com/) (+ [Evernote](https://www.evernote.com/)),
				- to [Notion](https://www.notion.so/) with databases and dashboards,
				- to [Roam Reseach](https://roamresearch.com/) with text block based handling, ((e6a21858-1849-462e-b2b0-0bc57b38fb0a)), and [tag](https://en.wikipedia.org/wiki/Tag_(metadata)),
				- to ((66535660-643e-471a-a332-8f2306c5494f)) with better GUI, plugins, community, but text block based handling is annoying.
				  collapsed:: true
					- However, Martin Weitzel had some mistake when thinking that ~~Obsidian is "open-source"~~, nope it's *proprietary* from the beginning.
	- ## Logseq
	  id:: 66536e1b-6466-4153-90d6-583003d99a81
	  collapsed:: true
		- ((665359c3-61fd-4858-a117-ecbcd6fbc9ea)) https://logseq.com/
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) (dev from 2021, still beta now) An ((66536d32-30ad-4c07-8585-76ae9eb7fb22)) like [Roam](https://roamresearch.com), but open-source: outlining based on text blocks & ((66535e71-3b71-416c-98dc-5dde5e6a76ff)), with ((e6a21858-1849-462e-b2b0-0bc57b38fb0a)), and [tag](https://en.wikipedia.org/wiki/Tag_(metadata)).
			- A new branch [based on database](https://github.com/logseq/logseq/pull/9858), and will be bi-dir-synced with Markdown, is being developed from Jul 2023.
			- It runs slower and heavier than ((66535660-643e-471a-a332-8f2306c5494f)).
	- ## outliner
	  id:: 66536d32-30ad-4c07-8585-76ae9eb7fb22
	  collapsed:: true
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Outliner
		- ((6651ecba-793d-43c5-8020-a9f260b032d8))
		- ((665359ff-79f1-4669-b10b-f2b0e633a7c1)) Most of the apps there are task-centric.
		- Software
		  collapsed:: true
			- A forum dedicated to outliners: [OutlinerSoftware](https://www.outlinersoftware.com/)
			- [em](https://github.com/cybersemics/em/wiki/Docs) is a process-oriented note-taking app with tree view & graph links, sophisticated with navigation operations.
			- [Legend](https://legendapp.com/) is smooth with web app, including desktop & mobile apps
			  collapsed:: true
				- Metadata (tag, properties) can be stored in "notes"
				- "Import from backup" always create [new doc with new ids](https://forum.legendapp.com/d/1747-import-from-backup-always-create-new-doc-with-new-ids-broken-links), hence all wikilinks are broken.
				- Moving item to an article (H1), using Alt-M or menu, doesn't work due to the [fake hierarchy of heading](https://forum.legendapp.com/d/519-inferred-hierarchy-from-heading-size/9).
			- [Checkvist](https://checkvist.com/) ...
			  collapsed:: true
				- Block ids are created only when wikilink inbound is created, then cached, hence not reflecting the real doc.
			- [RemNote](https://www.remnote.com/)
				- Integrations: Google,
				- Has both view modes: bullet & hidden first level bullets.
					- But the exported Markdown always have full bullets.
				- Properties are inside tag!
				- The exported JSON is complicated and contains *binary* codes!
				- The interface is complicated.
				- Usually at CPU high cost!
			- [Lattics](https://lattics.com/) with settable font, but only 2 versions: Windows & MacOS, no Linux, no Web
	- ## hyperlink
	  id:: 66536cad-a232-4b90-bf32-439144aac1ec
	  collapsed:: true
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Hyperlink
	- ## wikilink
	  id:: e6a21858-1849-462e-b2b0-0bc57b38fb0a
	  collapsed:: true
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Help:Link
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) A kind of internal ((66536cad-a232-4b90-bf32-439144aac1ec)) in the form of `[[Target Page|displayed text]]` to link from one page to another `Target Page`. This is first defined in ((665368c5-5c6f-44e4-a675-4a744252d32c))'s ((6653690d-70c4-49a0-b71d-a77a6dd9d9e5)) syntax, and then is adopted by other systems like ((66535660-643e-471a-a332-8f2306c5494f)).
	- ## wikitext
	  id:: 6653690d-70c4-49a0-b71d-a77a6dd9d9e5
	  collapsed:: true
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Help:Wikitext
	- ## Markdown
	  id:: 66535e71-3b71-416c-98dc-5dde5e6a76ff
	  collapsed:: true
		- ((665359c3-61fd-4858-a117-ecbcd6fbc9ea)) https://www.markdownguide.org/
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Markdown
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) A simple and humane ((66536166-87b0-4283-ab56-c6d2f62423c1)) created by Gruber and Swartz in 2004, based on pre-existing conventions for marking up ((6653635a-0226-4ebe-ae9b-e3e756b67377)) in ((66536383-8033-4105-8cbf-2c1316382df4)) and [usenet](https://en.wikipedia.org/wiki/Usenet) posts, like [setext](https://en.wikipedia.org/wiki/Setext "Setext") (c. 1992), [Textile](https://en.wikipedia.org/wiki/Textile_(markup_language) "Textile (markup language)") (c. 2002), and [reStructuredText](https://en.wikipedia.org/wiki/ReStructuredText "ReStructuredText") (c. 2002).
	- ## markup language
	  id:: 66536166-87b0-4283-ab56-c6d2f62423c1
	  collapsed:: true
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Markup_language
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) A language to mark text content up with special marks and/or syntax to add metadata like meaning, style, structure to the document.
		- Examples: ((665361eb-5339-451e-957d-362b946d796d)), ((6653624a-5679-4bc5-bd7e-fdee34516314)), ((66536274-abb0-4f8e-8fa1-da2d4224b7ff)), ((66535e71-3b71-416c-98dc-5dde5e6a76ff)), ...
	- ## email
	  id:: 66536383-8033-4105-8cbf-2c1316382df4
	  collapsed:: true
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Email
	- ## plain text
	  id:: 6653635a-0226-4ebe-ae9b-e3e756b67377
	  collapsed:: true
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Plain_text
	- ## LaTeX
	  id:: 66536274-abb0-4f8e-8fa1-da2d4224b7ff
	  collapsed:: true
		- ((665359c3-61fd-4858-a117-ecbcd6fbc9ea)) https://www.latex-project.org/
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) A [good old](https://en.wikipedia.org/wiki/LaTeX#History) typesetting language that I've used to write my reports an thesis in my academic era ([Handai](((66536ec6-1a32-431b-b2e2-c73813f5d19f))) , [JAIST](((665370ae-659d-4fb1-9bdb-6e857e3f5bf3)))).
	- ## formal methods
	  id:: 6653711b-1c5f-4a34-b01a-e673b9bb694c
	  collapsed:: true
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Formal_methods
	- ## Japan Advanced Institute of Science and Technology
	  id:: 665370ae-659d-4fb1-9bdb-6e857e3f5bf3
	  collapsed:: true
		- ((665359e4-4597-4775-b849-f9acbb98960a)) JAIST
		- ((665359c3-61fd-4858-a117-ecbcd6fbc9ea)) https://www.jaist.ac.jp
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) There are 3 schools: Information Science, Knowledge Science, and Materials Science.
		- Harusada's: I've done my master course in the Graduate School of Information Science about ((6653711b-1c5f-4a34-b01a-e673b9bb694c)), from 2007 to 2009.
	- ## Osaka University
	  id:: 66536ec6-1a32-431b-b2e2-c73813f5d19f
	  collapsed:: true
		- ((665359e4-4597-4775-b849-f9acbb98960a)) Handai, 阪大
		- ((665359c3-61fd-4858-a117-ecbcd6fbc9ea)) https://www.osaka-u.ac.jp
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) A comprehensive university with 6 faculties: science, engineering, medicine, letters, law & economics, and Arts & Humanities. It merged the old [Osaka Gaidai](((66537146-078d-4a65-b33a-2a0162f15d8c))) in 2007.
		- [Harusada](((66536578-c4d3-43f1-b35c-bf71120f0570)))'s: I've done my undergraduate course of Computer Science in Toyonaka campus, from 2003 to 2007.
	- ## Osaka University of Foreign Studies
	  id:: 66537146-078d-4a65-b33a-2a0162f15d8c
	  collapsed:: true
		- ((665359e4-4597-4775-b849-f9acbb98960a)) Osaka Gaidai, 大阪外大
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) It was dedicated to area studies and the study of foreign languages and their related cultures. It was merged to ((66536ec6-1a32-431b-b2e2-c73813f5d19f)) in 2007.
		- [Harusada](((66536578-c4d3-43f1-b35c-bf71120f0570)))'s: I've done my Japanese course here from 2002 to 2003.
	- ## XML
	  id:: 6653624a-5679-4bc5-bd7e-fdee34516314
	  collapsed:: true
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/XML
	- ## HTML
	  id:: 665361eb-5339-451e-957d-362b946d796d
	  collapsed:: true
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/HTML
	-
-