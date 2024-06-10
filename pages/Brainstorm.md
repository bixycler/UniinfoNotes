# Brainstorm
id:: 6653538a-30aa-423f-be89-848ad9c7e331
	- ((6651ecba-793d-43c5-8020-a9f260b032d8)) This is the ((665c92d1-565b-4911-a706-b32af429c3aa)) place for ((66536578-c4d3-43f1-b35c-bf71120f0570)).
	-
	- In possessive form like "Will's note", [the apostrophe `'` stands for](https://www.merriam-webster.com/grammar/history-and-use-of-the-apostrophe) the "e" in the suffix "-es" of [genitive form](https://www.merriam-webster.com/dictionary/genitive) of noun in the [Old English](https://en.wikipedia.org/wiki/Old_English).
	  id:: 66536ad3-264b-4351-868b-e7e8a7a82774
	  collapsed:: true
		- Now I propose to use apostrophe to further omit the "s" in possessive form, so 
		  collapsed:: true
			- `Will/mind/conceptual/head` in file management =
			- `Will.mind.conceptual.head` in programming =
			- "Will' mind' conceptual' head" in natural language!
	- **Id < *address* < context**  
	  id:: 66600918-ed92-40c9-bda5-1911865d676c
	  collapsed:: true
	  All content arrow is via its complement context:   
	  full content = apparent content carried by the form + hidden content (context as form)
		- form = condensed context = condensed hidden content
		- optimization = formation = context condensation (to the extremes like id)
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
	  collapsed:: true
		- obj `Will` -> {in-world `Will/**`, ex-world `Will\*/*`} = {M, W} = {inner view cone, outer view cone}
		- Will's in-world contains properties of `Will`, like `Will/name`, `Will/age`, `Will/mind`, `Will/mind/conceptual`, `Will/mind/conceptual/{dog,mouse}`, etc.
		- Will's ex-world contains `Will` and other peers of `Will`, like `Na`, `Nyatty`, `Earth`, `Milky Way`, etc.
		  collapsed:: true
			- In the top-down view, Will's ex-world can be partitioned by region, e.g. `Vietnam/house of Will/Na` vs `Japan/house of Harusada/Na`. But we use the ***relative*** (bottom-up) view from Will: `Will\1/Na` is just the dog Na closest to Will, i.e. `Will\1/Na` = `Will\2/house of Will/Na` = `Vietnam/house of Will/Na`.
			- The backslash is used in [MS-DOS/Windows' path](https://en.wikipedia.org/wiki/Path_(computing)#MS-DOS/Microsoft_Windows_style), in [PHP namespace](https://www.php.net/manual/en/language.namespaces.php), and as [Decimal Exponent Symbol](https://en.wikipedia.org/wiki/Scientific_notation "Scientific notation") in [ALGOL 68](https://en.wikipedia.org/wiki/ALGOL_68 "ALGOL 68"). Our use of `\u` as "u-level container" is nearest to the use in ALGOL 68.
		- Other notations of path:
		  collapsed:: true
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
	- `in` + `ex` = `con`
	  id:: 66600918-bbc8-4d92-8d46-dbda3eed92f0
	  collapsed:: true
		- form + partial content = intent + extent = full content (Ω)
		- id, key := value
		  collapsed:: true
			- id : type { type = {id : `*`} }
		- in-thread touches ex-thread
		  collapsed:: true
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
		  collapsed:: true
			- some string value 
			  name:: ((6651ea73-78b4-4c1a-b052-b2ea9555b6f6))
			  :LOGBOOK:
			  CLOCK: [2024-05-25 Sat 22:30:07]--[2024-05-25 Sat 22:30:08] =>  00:00:01
			  :END:
		- We can define property with composite value like this:
		  collapsed:: true
			- a composite
			  name:: ((6652048c-27b3-47b6-84e5-25af8d9ce801))
			  collapsed:: true
				- a component
				- another component
		- Store properties in sub-items:
		  It's simpler just to use sub-items to store properties. Then in the property `components` of the container item, we can collect forms (definitions) of these sub-item-properties into a list, like this:
		  components:: ((66532914-003a-4bbb-9e97-6f1c87170d7d)), ((66532bc2-a18e-43ab-86ac-a0f0f7dcbbb5))
		  collapsed:: true
			- ((6651ecba-793d-43c5-8020-a9f260b032d8)) This is an example of how to use sub-items as properties.
			- ((6652048c-27b3-47b6-84e5-25af8d9ce801)) This component contains sub-components:
			  collapsed:: true
				- a component
				- another component
	- Let's test `{{query}}` in Logseq:
	  collapsed:: true
		- Today: {{query <% today %> }}
		  id:: 66521398-7318-4d06-ac79-899f244a31c0
		- query-table:: true
		  query-sort-by:: block
		  query-sort-desc:: false
		  collapsed:: true
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
		  collapsed:: true
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
	- Special properties built in Logseq
	  collapsed:: true
		- Example:
		  title:: Title
		  alias:: A, B, C
		  tags:: T, U, V
	- ((66533703-505d-432d-8368-6058eefb45f6))'s Alias: In addition to `A Alias: B, C`, add sub-items `- B alias of A  - C alias of A`, so that `B` and `C` can be referred directly.
	  id:: 665c912e-2186-4268-a99d-023a5ef46005
	  collapsed:: true
		- ((665caf87-7dd9-4e9e-9ebc-7df259e7d711)) ((665cb063-d8b5-461e-9dcd-12bb85db1ee7))
	- ((66533703-505d-432d-8368-6058eefb45f6))' "verbal/prepositional names" without colon:  
	  id:: 665c950f-78de-4e35-b83f-dc6f3790f6f8
	  collapsed:: true
	  to, from, because, ... X (name) <-> X clause (form)
		- ((665caf87-7dd9-4e9e-9ebc-7df259e7d711)) ((665c950f-4496-432d-8d7a-83cad6b60571))
	- logic chain & branches:
	  id:: 665c950f-4496-432d-8d7a-83cad6b60571
	  collapsed:: true
		- ((665caf87-7dd9-4e9e-9ebc-7df259e7d711)) ((665cb063-d8b5-461e-9dcd-12bb85db1ee7))
		- #If condition
			- #then do right
			- #else do wrong
		- [#from ] cause
			- [#to ] effect
		- Something
			- #from source
		- A
			- #to B
				- #to C
			- #and B'
			- #or B"
		- Context/subject/intent
			- #do something/action/content
				- #with arguments/object/peers/extents
	- function = mapping = transformation = arrow
	  collapsed:: true
		- relation = 2 way arrow (diff from + diff to = diff with)
		- Complement of "relation as 2 way arrow" is "relation as common part between related objects"
			- All verbs, prepositions and `noun:`s are arrows => sentence = general path
			- Alternate path (`\i/e\j/f...`) is similar to Fourier series, but diff!
			- Address = path with abstract intent, i.e. `\^n/e/f...`
			- Id = path with abstract intent & abstract extent
	- External context = external form
	  collapsed:: true
		- Each work item has an `ex` space (environment, address space, context) as the world view in contrast to the `in` space (self, component space, content).
		- Global context: ((66533703-505d-432d-8368-6058eefb45f6))
		- Local context: link collection in each project
		- Temporal context: pinned items (globally to ((66519638-cf5d-409b-9b98-15acabf2268c)) or locally to each project)
		- This ex-form is in contrast to the in-form discussed at...
			- here ((66600918-ed92-40c9-bda5-1911865d676c)) and
			- here ((66600918-bbc8-4d92-8d46-dbda3eed92f0))
	- [Name-form](https://en.wikipedia.org/wiki/Namarupa) = [key-value](https://en.wikipedia.org/wiki/Name–value_pair) = [form-content](https://encyclopedia2.thefreedictionary.com/Content+and+Form) ([Hylomorphism](https://en.wikipedia.org/wiki/Hylomorphism)) = [abstract-concrete](https://en.wikipedia.org/wiki/Abstract_and_concrete)
	  collapsed:: true
		- The part of content that "i don't care" is abstracted: [from the lengthy context to address, to name and to id](((66600918-ed92-40c9-bda5-1911865d676c))).
		- Now, in the view of the subject, that part is just a name, a symbol, a ref, a form, which can further be renamed, transformed into different forms to fit subjective views. E.g. the local name, local variable is the transformed name of the address.
		- In the subjective view, a concise name can be expanded into the content of the named object via many forms of embedding: (parenthesis), clauses like `which`, `where`, etc.
		- The name is the link between the named object and the name using subject.
			- In object's side, the name is its abstraction.
			- In subject's side, the name is a part of the subject's content.
			- Hence, the name is an interface of the object for the subject to use.
			- Thanks to its conciseness, the name can be used by many subjects. This use is the [mixing](https://en.wikipedia.org/wiki/Mixing_(physics)) of content between objects.
		- Naming = ε-abstraction is the `ob` part of the obop, while repeating = ω-extension (including, embedding) is the `op` part of the obop.
	- Internal form (substance) = external form (appearance)
	  collapsed:: true
		- external to a content form = internal to its container
	- 2 characteristics of the form are equivalent.
	  collapsed:: true
		- The wholeness (the roundness) -> there's a center point in each circle, even invisible, common (shared) to all parts (arrows) of that circle -> the common
		- The common -> all parts are linked together via that common (center) -> the wholeness