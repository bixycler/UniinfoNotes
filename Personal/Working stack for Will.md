
- [ ] Solution for Obsidian's problem of folder: 
	- path via dots in filename in reverse order, e.g. `dog.concept.mind.Will`
	- move the working blocks by hand: fold & cut
	- the moving blocks can contain outbound links but no inbound links
- [ ] history = list of text block id-ed by timestamp `yyyy-MMdd-hhmmss`, e.g. `2024-0521-202221`
	- Each block is tagged with `^$id` and its address is stored in a id note `history/$id`, so all refs to that block are through refs to the id note instead. When the block is moved, only its id note is affected. 
	- However the block embedding is in [[Obsidian software|Obsidian]] is messy with broken layout.
	- [[Outliner]]s like [[Logseq]], [Dynalist](https://dynalist.io/), [Checkvist](https://checkvist.com/), [Legend](https://legendapp.com/) is much better at this block-based management and [transclusion](https://en.wikipedia.org/wiki/Transclusion).
- [ ] directory/folder = namespace (exclusive)
	- obj `Will` -> {in-world `Will/**`, ex-world `Will\*/*`} = {M, W} = {inner view cone, outer view cone} 
	- Will's in-world contains properties of `Will`, like `Will/name`, `Will/age`, `Will/mind`, `Will/mind/conceptual`, `Will/mind/conceptual/{dog,mouse}`, etc.
	- Will's ex-world contains `Will` and other peers of `Will`, like `Na`, `Nyatty`, `Earth`, `Milky Way`, etc.
		- In the top-down view, Will's ex-world can be partitioned by region, e.g. `Vietnam/house of Will/Na` vs `Japan/house of Harusada/Na`. But we use the ***relative*** (bottom-up) view from Will: `Will\1/Na` is just the dog Na closest to Will, i.e. `Will\1/Na` = `Will\2/house of Will/Na` = `Vietnam/house of Will/Na`.
		- The backslash is used in [MS-DOS/Windows' path](https://en.wikipedia.org/wiki/Path_(computing)#MS-DOS/Microsoft_Windows_style), in [PHP namespace](https://www.php.net/manual/en/language.namespaces.php), and as [Decimal Exponent Symbol](https://en.wikipedia.org/wiki/Scientific_notation "Scientific notation") in [ALGOL 68](https://en.wikipedia.org/wiki/ALGOL_68 "ALGOL 68"). Our use of `\u` as "u-level container" is nearest to the use in ALGOL 68.
	- Other notations of path:
		- `Will/mind/conceptual/dog`, `Will\1/Na` in file management
		- `Will.mind.conceptual.dog`, `Will^1.Na` in programming
		- "Will' mind' conceptual' dog", "Will^1' Na" in [[History of Will#^apostrophe-in-possessive-form|natural language]]
	- Relation ref/arrow between objects in these worlds:
		- example: in -> ex: dog -> {Na, Nau}, mouse -> {Nyatty, Nyatto}
		- property composition: ex -> in: Na -> {dog, horse, monkey}
		- description: in -> in: dog -> {vocal: bark, genus: Canis}  
		- extension/reference: in -> ex.in: `Will/mind/conceptual/dog` -> `Wikipedia/Dog`
		- relation: ex -> ex: Na -> {child: Nau, prey: Nyatty}
		- 
- [ ] in + ex = con
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
- **Id < *address* < context**  
  All content arrow is via its complement context:   
  full content = apparent content carried by the form + hidden content (context as form)
	- form = condensed context = condensed hidden content
	- optimization = formation = context condensation (to the extremes like 🆔)
		+ optimization frees the subject from the lengthy "irrelevant" context, but also constrains to the form!
- [ ] [[Obsidian software]]: check publishing plugins
- [ ] All objects are arrows, addresses, vector, `v`'s
	- Relativity: The destination of that address is relative to the root object (intent, self).
	- The root object `O` is just another vector, hence the target of `v` from `O` is just `O+v`.
	- `v` is the diff, the change, the transformation, the effect brought to `O`.
	- Intensionally, it's the addition `O+v`, but extensionally it's the multiplication `O⋅v`.
- [ ] The relativity & equality between form & content as 2 vectors
	- `u⋅v = 0` means orthogonal... but their "self threads" are parallel!?! 
	- The portion of seen is the portion of orthogonal => parallel = unseen 
	- We see a static object, which is almost parallel to us in time, thanks to the near orthogonal light rays from it! That's why we can only see its external shape, i.e. very little part of it.

