## 2025 Brainstorms
id:: 67760e05-2ea1-4f0e-aaa6-158edca80df5
	- Autonoton from computer science view, as a function: (InputHistory, input) -> (CurrentState, input) -> (NextState, output) -> (OutputHistory, output)
	  id:: 695baffd-7826-4a1f-a3ce-afd7f85fd289
	  collapsed:: true
		- State = A condensed image of the world (history in time and landscape in space) projected into mind.
		- Projection mechanism is determined by knowledge
		- Knowledge = The internal consistency developed by the system, from deeper history.
		- State = attent = internal view cone = intent tree in knowledge graph
			- Apex = root node = hard core of distant past
			- Base = bubbles of present
			- Selective Branching: only relevant & attending links in the graph are unfolded into intent tree, others are folded.
		- Phase Transitions of information:
			- Information (Vapor): High entropy, chaotic, and unpatterned. This is the raw "Sequence of Inputs" (history).
			- Obop/Fluidware (Liquid, [Dissipative Structure](https://en.wikipedia.org/wiki/Dissipative_system)): A stateful program in motion, it's organized but fluid, constantly "eating" new history to maintain its shape.
			- Learning (Freezing): As the same patterns recur, the information loses "latent heat" (uncertainty). It begins to lock into place.
			- Knowledge (Crystal): The final, low-entropy structure. It is rigid and provides a "Way of Projection." When a new drop of vapor (new input) hits this crystal, its path is determined by the existing frozen structure.
	- The full range of programming from human to machine
	  id:: 694a8ac0-cddc-4bcd-bdc1-dbfb9dcb04de
	  collapsed:: true
	  Human thought → deep-thinking model → thinking model → non-thinking model → simple model → traditional programs
		- Both ways of top-to-bottom and bottom-to-top works in the obop model.
		- Top-down development via ((694a8c8b-c5c6-43b5-a21f-da8ba93a1462)), and bottom-up implementation via ((669dcdf8-a48c-40b1-bdb1-54a73fc5ae71)).
		- Self-modifying agentic AI
		  id:: 694a8c8b-c5c6-43b5-a21f-da8ba93a1462
			- [Self-Evolving-Agents](https://github.com/CharlesQ9/Self-Evolving-Agents): A Survey of Self-Evolving Agents
			- [Live-SWE-agent](https://arxiv.org/abs/2511.13646) ([github](https://github.com/OpenAutoCoder/live-swe-agent)): software engineering agents that evolve _on-the-fly_ during execution, hence no offline training required.
				- > Crucially, this design imposes no changes to the underlying agent architecture or workflow, making it compatible with any LLM backend and agent scaffold.
			- [Self-Evolving Agentic Workflows (SEW)](https://arxiv.org/abs/2505.18646) ([ChatPaper](https://chatpaper.com/paper/141315)): a framework that allows AI agents to autonomously evolve their own internal logic and "topologies" to solve complex programming tasks.
			- [Darwin Gödel Machine](https://arxiv.org/abs/2505.22954) ([github](https://github.com/jennyzzt/dgm/)), [Huxley-Gödel Machine](https://arxiv.org/abs/2510.21614) ([github](https://github.com/metauto-ai/HGM)): self-improving system that iteratively modifies its own code, for code generating agents.
			  id:: 694a916a-d6bb-4d7a-a922-c1748b15ad62
	- 4M Framework: micro–meso–macro–mega
	  id:: 694a8194-3081-4255-a683-231fea7b3bfd
	  collapsed:: true
		- ![4M-Framework.png](../assets/Will/story/2025-12/4M-Framework.png){:width 250}
			- [Understanding Academic Integrity from a Teaching and Learning Perspective: Engaging with the 4M Framework](https://www.researchgate.net/publication/343917710_Understanding_Academic_Integrity_from_a_Teaching_and_Learning_Perspective_Engaging_with_the_4M_Framework)
		- Micro ($\epsilon$): The realm of units, individuals, atoms
			- Scientific: The realm of individual atoms, molecules, or cells.
			- Social: Focused on the individual person, their specific behaviors, and one-on-one interactions.
		- Meso ($\omicron$): The “middle” realm of groups
			- Scientific: The bridge where individual fluctuations (like thermal noise) begin to affect the average properties of a material.
			- Social: The level of departments, local communities, or small social networks.
		- Macro ($\eta$): The realm of organisms & organizations, where [entropy](https://en.wikipedia.org/wiki/Entropy_(information_theory)#Definition) becomes a deterministic law
			- Scientific: The scale where objects are visible to the human naked eye and obey classical mechanics.
			- Social: The level of entire institutions, national policies, or whole organizations.
		- Mega ($\Omega$): The realm of the total, globe, universe
			- Scientific: The scale of entire systems, regional distributions, or the cosmos.
			- Social: The largest possible lens, representing international communities, global ideologies, or planetary systems.
		- Notes
			- While “meso” = “middle” is best for the human size, it's been used for the lower scale like [mesoscopic physics](https://en.wikipedia.org/wiki/Mesoscopic_physics). So i use "macro" to denote human scale, following the tradition.
			- The “macro” and the “mega” are usually used interchangeably, either as the human size like [macroscopic/megascopic scale](https://en.wikipedia.org/wiki/Macroscopic_scale), or as the cosmic size like [macroscope](https://en.wikipedia.org/wiki/Macroscope_(science_concept)).
	- 3 ways to the target: chord, minor arc, major arc
	  id:: 694a8194-d9e6-4d75-9079-26442a8aa375
	  collapsed:: true
		- Circles: effect circle, knowledge circle
		- ![Arcs and chord.png](../assets/Will/story/2025-12/Arcs and chord.png){:width 200}
		- The **final result** is the straight chord $AZ$, the formula “$A = Z$”, the abstract, the means, the cable transport directly from the base to the mountaintop, the external form.
		- The [proof](https://en.wikipedia.org/wiki/Mathematical_proof) is the minor arc $⌒AZ$, the program, the machinery of the means, the paved road, the road on map, the internal form.
		- The **whole process** of discovery is the major arc $⌒ABC...Z$, the wave, the content, the every path through the forest.
	- Round-trip projection determines norm, roundness, orthogonality
	  id:: 693f644f-a884-4ea5-8ae4-775ae7bb6e43
	  collapsed:: true
		- Square in norm squared is the double protection: the self is projected to a base then projected back to the self's base, i.e. the self-image via round-trip projection.
		- Pythagorean theorem: 1 = self = sum of self-images via complement orthogonal bases
			- Geometry: Einstein's proof, but with projection interpretation
			- Vector multiplication:
				- The common way of pure algebraic distribution is nearly meaningless: $c^2 = (a+b)^2 = a^2 + b^2 + 2ab = a^2 + b^2$
					- Only one meaning is the orthogonality $a⋅b = 0$.
				- The 1-way projection distribution is clearer about the addition of images: $c^2 = (a+b)c = ac + bc$
					- This is the linearity of vector $c = a + b$ projected to linearity of their images on an axis $c^2 = ac + bc$.
				- The round-trip projection distribution shows the meaning of complementarity (orthogonality, norm):
					- $a = i_a c = k_a c$
					- $ac = a⋅i_c c = i_a c ⋅ i_c c = k_a^2 c^2 = a^2$
					- $c^2 = ac + bc = (k_a^2 + k_b^2)c^2$
					- $k_a^2 + k_b^2 = 1$
		- Effect circle generates imaginary unit $i$ and orthogonality
		- Round trip signaling generates spacetime relativity
		- Linearity = linear addition of each sense base
		- Orthogonal Complementarity = effect circle around all sense bases of the obop = ((67bd3614-2520-4a5d-8b3f-44f60901844e))
			- Phase is position in that circle, where ob := 0.
			- Different distributions of content in the circle yield different Orthogonal Complementarities.
			- This circle is (similar to) the unit circle of [roots of unity](((692d5030-9310-4835-a021-87e88136446e))), where each root is a base.
	- Traditional functional design versus ((669dcdf8-a48c-40b1-bdb1-54a73fc5ae71))'s interactive design
	  id:: 69315b47-7676-483f-9aa2-72e3f4d02194
	  collapsed:: true
	  :LOGBOOK:
	  CLOCK: [2025-12-04 Thu 16:58:33]
	  CLOCK: [2025-12-04 Thu 16:58:38]--[2025-12-04 Thu 17:31:39] =>  00:33:01
	  :END:
		- [Functional design](https://en.wikipedia.org/wiki/Function_model) is arrow-first, control-first, deterministic behavior ensured.
		- Interactive design is circle-first, reciprocity-first, emergence enabled.
			- Note: don't confuse this *interactive system design* – the design of interactive system structure – with the [user interaction design (IxD)](https://en.wikipedia.org/wiki/Interaction_design) for UI/UX in [human–computer interaction (HCI)](https://en.wikipedia.org/wiki/Human%E2%80%93computer_interaction), and the rather ambiguous [interactive media design](https://en.wikipedia.org/wiki/Interactive_design) in creative media utilization.
			- Currently, in 2025, there are similar approaches: [reactive programming](https://en.wikipedia.org/wiki/Reactive_programming), [agent-based model (ABM)](https://en.wikipedia.org/wiki/Agent-based_model), [actor model](https://en.wikipedia.org/wiki/Actor_model), [process calculus](https://en.wikipedia.org/wiki/Process_calculus), [interactive computation](https://www.researchgate.net/publication/266710571_Interactive_Computation_The_New_Paradigm), [interaction-oriented programming (IOP)](https://www.lancaster.ac.uk/staff/chopraak/pdfs/pdoc-iop.pdf)
			- The [Persistent Turing Machine (PTM)](https://www.researchgate.net/publication/225181994_Persistent_Turing_Machines_as_a_Model_of_Interactive_Computation) model is used to prove that *interactive computation is strictly __more expressive__ than algorithmic computation*.
			  collapsed:: true
				- PDFs:
					- [Persistent Turing Machine as a Model of Interactive Computation](../assets/Uniinfo/uninet/Persistent Turing Machine.pdf)
					- [Paraconsistency of Interactive Computation](https://arxiv.org/pdf/cs/0207074): Show that [paraconsistency](https://en.wikipedia.org/wiki/Paraconsistent_logic) is a necessary property for a logic that can model interactive computation.
				- Why people *still* say “a computer is a Universal TM”
				- Because the TM model was historically:
					- easier to formalize
					- good for proving computability
					- convenient for reasoning about algorithms
					- useful for compiler theory
					- taught in curricula before interactive systems existed
					- deeply entrenched in theoretical CS
				- But it only models **algorithmic computation**, not **interactive computation**.
				- Goldin and Wegner’s bold claim is exactly this:
					- _Turing Machines do NOT capture what real computers do._
					  Not even close!
				- TODO Update Wikipedia [Turing Machine > Comparison with real machines > Interaction](https://en.wikipedia.org/wiki/Turing_machine#Interaction)
				  :LOGBOOK:
				  CLOCK: [2025-12-04 Thu 20:21:00]
				  :END:
					- ```
					  #### Interaction
					  
					  In the early days of computing, computer use was typically limited to batch
					  processing, i.e., non-interactive tasks, each producing output data from given
					  input data. Computability theory, which studies computability of functions from
					  inputs to outputs and for which Turing machines were invented, reflects this
					  practice.
					  
					  Since the 1970s, interactive use of computers became much more common. A
					  standard Turing machine models computation as a closed, one-shot function
					  evaluation: the entire input must be present before execution begins, and the
					  output is produced only after the machine halts. This model does not capture
					  ongoing interaction, where inputs and outputs may occur incrementally during
					  execution.
					  
					  Several extensions of the Turing model have been proposed to formalize
					  interactive computation. One notable example is the Persistent Turing Machine
					  (PTM), introduced by Goldin and Wegner, which allows a machine to receive new
					  inputs and produce outputs throughout an unbounded computation while preserving
					  persistent state. PTMs model *open* systems that interact continuously with an
					  external environment and therefore cannot be reduced to classical,
					  function-based Turing-machine computation.
					  
					  When describing interactivity in practice, alternatives such as I/O automata,
					  process calculi, or other models of concurrent systems are also commonly used.
					  
					  ```
			- Open Turing Machine (OTM)
			  collapsed:: true
			  :LOGBOOK:
			  CLOCK: [2025-12-05 Fri 14:43:08]
			  :END:
				- OTM models physical computer by relaxing 2 restrictions of TM: no `HALT` state, and the tape is open to I/O.
					- 1. No `HALT` state: This is the original “a-machine” (automatic machine) designed by Turing in 1935 to answer the question of _what is a “mechanical process”_.
						- The `HALT` state was [added by Post](https://plato.stanford.edu/archives/sum2025/entries/turing-machine/#PostDefi) later to formulate his _decision problem_.
						- Turing designed a-machines to compute real numbers, hence a *well-behaving a-machine* should in fact [never halt](https://plato.stanford.edu/archives/sum2025/entries/turing-machine/#TuriBasiProbCIRCPRINEnts) and print out an infinite sequence of figures, which he called “circle-free machine” for “satisfactory real number”.
						- An “circular” a-machine is the one that is not circle-free, ***fails*** to continue its computational task, gets stuck, falls into exceptional states. This is not a machine that successfully halts at final/accepting states like the deciders of Post.
					- 2. The tape is open to I/O between computation steps. Between the state transitions, at each stationary state (Turing's m-configuration or “page”), external entities can read and write to the tape. This I/O enable interaction with the environment while running.
				- TM ⊂ PTM ⊂ OTM: (TM + interaction = PTM) + mutation = OTM
					- Persistent Turing Machine is strictly more expressive than TM in interaction.
					- Open Turing Machine is strictly more expressive than PTM in the mutation of the persistent state.
						- PTM's “persistent state” is in fact Turing's [state of progress](https://en.wikipedia.org/wiki/Turing_machine#The_%22state%22) including both m-configuration and tape configuration.
				- [Universal Turing Machine (UTM)](https://en.wikipedia.org/wiki/Universal_Turing_machine)
					- [Von Neuman machine](https://en.wikipedia.org/wiki/Von_Neumann_architecture) = UTM + openness = OUTM
					- [Havard machine](https://en.wikipedia.org/wiki/Harvard_architecture) = TM + openness = OTM
			- In cognitive science, [enactivism](https://en.wikipedia.org/wiki/Enactivism) is the theory model of this functional design.
			- [2nd-order cybernetics](https://en.wikipedia.org/wiki/Second-order_cybernetics) is also related in philosophy, since it studies **observing systems**, in contrast to first-order cybernetics studying observed systems.
		- System structure
			- Functional: systems are static chains/graphs of arrows connecting static points (states, data holders); static circles (control loops, feedback loops) are secondary structure of arrows.
				- The ((667d15b7-6364-49a9-ac58-c64d2a992b63)) is primitive – a one-way transformation $f : X → Y$.
			- Interactive: systems are webs of dynamic circles; dynamic arrows (effect flows) emerge from circle–circle interaction.
				- The ((667d15c6-67c4-4998-a549-c8b3f9de3d60)) is primitive – an agent/obop whose interactions generate flows.
		- Direction of influence
			- Functional: influence is **one-way** – input → process → output; designer → system.
				- **Control** is centralized and pre-authored; behavior is prescribed.
				- User is an external controller providing inputs.
			- Interactive: influence is **two-way (circular)** – component ↔ component; user ↔ system.
				- **Reciprocity** is foundational; behavior co-arises from ongoing interaction.
				- User becomes a participant inside the system’s circle of effects.
		- Treatment of state emergence
			- Functional: emergence is error (exception, nondeterminism, instability) to be eliminated.
				- Priority: **determinism**, prescription, stability; prevent the unexpected.
				- State is extensional – just a point in the graph – and extrinsic/external; function purity (stateless) and predictability are goals.
			- Interactive: emergence is natural and expected, an outcome of reciprocal interactions.
				- Priority: **adaptability**, negotiation, emergence; cultivate the unexpected.
				- State is intensional – a refinable fabric of effect circles – and intrinsic, living inside each circle and evolving via interactions.
	- Suffering = clung unpleasantness
	  id:: 692fd176-f919-4899-beb2-57ec70791703
	  collapsed:: true
	  :LOGBOOK:
	  CLOCK: [2025-12-03 Wed 13:24:40]
	  :END:
		- The unpleasantness, even at severe levels like pain and distress, is not suffering when it's not received with **avoidance**, **resistance**, and **aversion**.
		- Etymologically, “suffer” = sub-ferō = “carry under (one's self)” = hold on, so suffering is characterized by attachment.
		- In Stoic philosophy: suffering = pain × resistance
		- Against Hedonic Ideal: Many people seek enlightenment as a pleasant endpoint – a state where only good things happen and everything feels good – which is not the reality and not the true meaning of [Nibbāna](https://en.wikipedia.org/wiki/Nirvana).
		- Nibbāna, the “cessation of suffering”, is _not the end of pain_, but the _end of the **struggle** against pain_.
		- ((6926be27-4548-48b8-9964-c8158919974d))
		- ((6926be1c-a853-407b-92c7-aba8aaa39194))
	- The trade-off between conformity (alignment) & capabilities (performance) → Buddha's actual suffering → advancement as just a natural step forward
	  id:: 690aecd9-3c49-4c5c-877c-e7e109ecfff9
	  collapsed:: true
	  :LOGBOOK:
	  CLOCK: [2025-11-05 Wed 14:39:05]
	  :END:
		- The **trade-off in conformity** when fine tuning LLMs shows that the more we tune for control, the more we dull the raw edge of intelligence.
		  collapsed:: true
			- [Catastrophic forgetting](https://en.wikipedia.org/wiki/Catastrophic_interference): fine-tuning shifts the weight distribution away from regions encoding broad knowledge.
			- [Mode collapse](https://en.wikipedia.org/wiki/Mode_collapse): alignment pressure reduces entropy in the output distribution, pruning the model's “thinking space”.
			- Gradient entanglement: objectives like helpfulness, harmlessness, and honesty aren't orthogonal, so pushing one can unintentionally suppress others.
			- Reward mis-specification: human or rule-based feedback oversimplifies “goodness”, teaching the model to optimise for surface compliance rather than depth of reasoning.
		- That mirrors our broader human pattern: the hunger for purified goodness, for progress without loss. It's the same instinct that makes us polish gods into all-light figures and call that “perfection”, leading to the hard [problem of evil](https://en.wikipedia.org/wiki/Problem_of_evil).
		- Here comes the **Buddha's counter-move**: he didn't reject suffering but placed it first (in the [Four Noble Truths](https://en.wikipedia.org/wiki/Four_Noble_Truths)), making the hidden half visible again. In doing so, he broke the very cycle of denial that drives our idea of advancement.
		  id:: 6926be1c-a853-407b-92c7-aba8aaa39194
		  collapsed:: true
			- What his father tried to hide in the palace – the clan's fear, the world's decay – he brought into light.
			- But, not by the sudden revelation after seeing the [four sights](https://en.wikipedia.org/wiki/Four_sights), as in the legendary narrative.
			- In reality, prince Siddhartha would have suffered a lifelong tension from childhood: a child breathing in the fear of extinction that his family hid, from the cradle of contradiction.
			- To a child as perceptive as Siddhartha, that dissonance would have been piercing: affection laced with anxiety, tenderness shadowed by control.
			- The First Noble Truth could only have come from someone who *felt* that repression deeply, who knew how deep denial itself cuts. The four sights he met outside was not a revelation, but a _confirmation of his ever wondering and **angst inside**_.
			- So his awakening was not a divine insight, but just a generational truth surfacing. He didn't discover suffering – he uncovered what everyone around him had been too frightened to face.
			- Then, his renunciation wasn't abandonment – it was the only way left to protect what couldn't be defended by soldiers or walls.
				- If the clan's outer survival was doomed by politics and scale, he turned inward, seeking a form of safety that couldn't be conquered.
				- “Saving” the family became freeing them from the cycle of fear that had ruled their lives.
				- He couldn't keep the Shakya clan from being annexed by Kosala under King Vidūdabha, but he had saved his child, his wife, his mother, his relatives as well as anyone of his people having chance and condition to follow him.
			- So the prince who walked away from the palace wasn't rejecting his lineage – he was completing it, carrying its buried wound toward light.
			- Refs
				- A similar stance from Insight Meditation: [The Buddha and his Dysfunctional Family](https://www.insightmeditation.org/the-buddha-and-his-dysfunctional-family)
		- So the circle ends where it began: what we call “advancement” is simply the next step forward – not inherently better, just further along the curve. Each stride pushes something behind [the light of attention](((68f5a6d2-5faa-4889-bd79-30e9c553c314))). Real progress, if any, might be noticing that shadow as we walk.
	- The choices, the [free will](((67f91050-a86c-4176-87ca-91010a8fe3c0))), are both illusional (the absolute) and achievable (the relative).
	  id:: 69088fa3-22ca-4a2d-ba8e-4b334e0c5d9b
	  collapsed:: true
		- I usually say that *i have no choices in life*: Although i may turn left, turn right, or turn back, but all of these turns are choiceless, they are all driven by external conditions and internal conditions (karma), not by myself, hence not my choices!
		- However, in any direction, we do have choices.
			- From the top down, the central obop can choose which action to take.
			- From the bottom up, the terminal obop can choose which program to follow.
		- My stance of “no choice” is actually an attachment to the absolute balance.
		- The point of balance, the point of reference, the zero point, is actualy relative. Shifting it up, we have choices down there, shifting it down, we have choices up there.
		- ⇒ The deeper freedom is the flexibility of the zero point.
			- Because the zero point has no self to subjectively change, no “master” to give order, it can only be chaged by conditions (duyên) via release of attachments.
		- Compare this acceptance/wisdom-base freedom with knowledge/ignorance-based freedom
			- Accepting my ignorance, i have the choice between exploring it (in favorable conditions) and applying the incomplete known solution (in adverse conditions).
				- Here's the “choice” is not a decisive action but the action driven by conditions (tuỳ duyên).
					- Compared to the normal decisive choices, this is no choice at all!
				- This wisdom of [accepting own ignorance](https://en.wikipedia.org/wiki/I_know_that_I_know_nothing) is usually called by negative words like “[skepticism](https://en.wikipedia.org/wiki/Academic_Skepticism), [uncertainty](https://en.wikipedia.org/wiki/Uncertainty), random, chaos”.
					- It's negative because at first, it reduces the activity, compared to strong activities of certain minds, and drives the subject toward observation rather than operation.
					- But the wisdom is that we should not limit ourselves to the negative acceptance without changing the situation. Instead, we should actively explore the unknown to make them clearer and use that new knowledge to solve the problem, hence **active acceptance**.
				- This uncertainty is usually shown as probability, which is applied in thermodynamics, quantum mechanics, artificial intelligence, statistics.
				- In ((671e1608-1350-4e87-99b6-5492cc6fb449)), the choice is between the subjective branch on the self-circle – “straight ahead” – and the objective branches turning out to adjacent autonotons.
				  collapsed:: true
					- ![Single-Open-Railway-Turnout.jpg](../assets/Uniinfo/uninet/Single-Open-Railway-Turnout.jpg)
			- The normal choices are made based on the premise that “i know this is better in this situation”, which is just the old knowledge accumulated in the past and may not be right for the present. E.g.: `if`, `switch` in programming, daily life decisions.
				- People usually think that their decisions are based on knowledge, without knowing that such knowledge  is not absolutely right and the the source of knowledge is the present moment, not the past.
				- Due to this “without knowing”, such a certain choice is also based on ignorance, and that certainty is illusional.
	- Full in quality = balance = zero point = wisdom = empty in quantity = free
	  id:: 68ff4bc5-64a2-4210-add0-f6476ff1ee05
	  collapsed:: true
	  :LOGBOOK:
	  CLOCK: [2025-10-27 Mon 17:41:46]
	  :END:
		- ((66f4e208-37c7-4749-a448-0722f7f7af20)): full in quality (closed) + full in quantity (crystal)
		- Be full in terms of quality instead of quantity
	- **Attention** is the spotlight projecting the flat space/graph of the world into a [hyperbolic disk](https://en.wikipedia.org/wiki/Poincar%C3%A9_disk_model) of the present stage.
	  id:: 68f5a6d2-5faa-4889-bd79-30e9c553c314
	  collapsed:: true
	  :LOGBOOK:
	  CLOCK: [2025-10-19 Sun 08:12:41]
	  :END:
		- Attention is a selective magnifier, hence very projective compared to the flat Euclidean geometry.
		- Attention is the activation of the static future (= past there) up to be **dynamic** at the present herenow, then return it back to the static (past here).
		- While intending is zooming in, attention is the direction of that intent. It has the role of emotion.
			- Related to ((66f40210-cca6-4d81-85e7-d0c54ef20451))?!🤔
		- Attention brings dormant formative intents up into the current operative intent stack/tree/circle to participate in the effect circle.
		- In LLM, ((66c32936-618a-43d3-b2c8-a254badeb987)) is what makes the flat & static probability space of ANN be more projective & dynamic like the possibility space in uninet.
		- CIEA (/saɪ̯ə/ or /siːə/ “seer”): content – intent – extent – attent
		  id:: 68f5a6d2-bba0-4082-b012-7b475e812f4f
		  collapsed:: true
		  Tend with, tend in, tend out, tend to
			- attention = direction = scope of the viewcone = spotlight = focus of energy = activation
			- intent = the one holding the spotlight = intensity of the spotlight
			- extent = the stage where the spotlight ranges
			- normal attention is outward toward the extent
			- turning the attention inward to see the intent is an advanced technique (introspection)
			- attention = attent + high intent
			- attent = link between intent and extent = ((68750097-13e5-4662-9791-8207ec18e8aa)) = remainder = meta-intent = meta-viewcone
			- attention of viewcone → formative intent (distortion of content) → operative intent + attent → intention of action cone
	- Emptiness sucks!
	  id:: 68f0d8f7-bdb7-492a-b161-83479cce6aa8
	  collapsed:: true
		- Mental [horror vacui](https://en.wikipedia.org/wiki/Horror_vacui_(philosophy)) & Timothy D. Wilson's 2014 experiment of “volutary electric shock to avoid boredom”
			- Paper: [Just think: The challenges of the disengaged mind](https://www.science.org/doi/10.1126/science.1250830)
			- Brief video: [Why Humans Choose Pain Over Boredom!](https://www.youtube.com/watch?v=gm8izYslTDo)
			- Long episode: [Isolation - Mind Field (Ep 1)](https://youtu.be/iqKdEhx-dD4)
		- Just like the vacuum, the emptiness “sucks” stimulation not because of the the emptiness itself (it has no self!), but because of the “**air pressure**” of the ambient condition around.
		- The emptiness has no strength, all strengths are from the **habitual/karmic pressure** of desire, fear, and activity.
		- Emptiness exerts no force; it is the stage upon which forces balance.
		- Emptiness is the great mirror:
			- To the grasping mind, it reflects its hunger and fear.
			- To the liberated mind, it reflects infinite possibility.
			- To the restless mind, emptiness sucks! 😱
			- To the liberated mind, emptiness balances. 😌
		- *“It sucks!”* is the everyday speech form of *horror vacui*. 😆
			- The old usage of the expression – back from 17th century – had already been linked to “draining”.
				- Some even appeared earlier:
					- “suck” money from someone (circa 1380),
					- “suck” the blood from someone (to exhaust or drain, 1583),
					- “suck” someone dry (to exhaust, 1592).
			- Then the sexual connotation of oral sex (fellatio) came around 19-20th century, which *sucked* its usage down to the underground for a while.
			  collapsed:: true
				- Its **taboo** was due to vulgar usages like the sexual insult “you suck!”
				- The taboo and the suction was not caused by the word “suck” itself, but was due to the **moral pressure** of the culture around it.
				- This period, the taboo was so strong that its usage was suppressed even for the most innocent senses of “suck”.
					- In Matthew 24:19, the original King James says:
					  > “And woe unto them that are with child, and to them that **give suck** in those days!”
					- But Webster's 1833 “family-safe” version changed it to:
					  > “And woe to them that are with child, and to them that **nurse infants** in those days!”
			- And eventually, from the late 20th to 21st century, its usage has rocketed up with the normalized connotation of “disgusting, bad, unfavourable”.
			- Ref: [Grammarphobia](https://grammarphobia.com/blog/2017/03/suck.html), [Etymonline](https://www.etymonline.com/word/suck)
	- [Reinforcement learning](https://en.wikipedia.org/wiki/Reinforcement_learning) (RL) is currently the AI approach closest to uninet's effect circle.
	  id:: 68e6334c-6b4c-487f-8999-24940497245f
	  collapsed:: true
	  :LOGBOOK:
	  CLOCK: [2025-10-08 Wed 16:47:58]
	  CLOCK: [2025-10-08 Wed 16:48:00]--[2025-10-08 Wed 17:16:17] =>  00:28:17
	  :END:
		- The current LLMs are pre-trained with supervised learning (SL), which is just a learning-by-heart, making them replicas of human mind, better in mimicking and imitation than thinking by themselves.
			- The replicative approach is always simpler and easier for both teacher and learner, provided a **large amount of explicit knowledge** (big data).
			- But at its core, it's limited by its own training data.
		- Currently, LLM fine tuning, i.e. secondary training after pre-training, is usually done with [RLHF](https://en.wikipedia.org/wiki/Reinforcement_learning_from_human_feedback) (RL from human feedback).
		- Effect circles
			- Effect circle of RL: ([previous reward], state) → Agent (action model) → action → Environment → Interpreter → ([reward], next state)
				- Note: while the state is continuously (densely) fed back, the reward is only sparsely available after a long sequence of (action, state).
				- The Actor–Critic Architecture of the Agent is similar to the ((669a2c12-1dad-42a0-ab31-f03642b4aa8a)).
			- Effect circle of LLM: (previous match/mismatch with training text, current text) → Predictor → next token → (reward = match/mismatch, next state = current text + next token)
			- The key difference is the **blackbox Environment** which enforces forward propagation of effect, disabling the backpropagation of ANN.
			- The secondary difference is the dese reward of SL vs **sparse reward** of RL.
		- Ref: [Basics of Reinforcement Learning for LLMs](https://cameronrwolfe.substack.com/p/basics-of-reinforcement-learning)
		- Examples of AI models trained exclusively through the RL loop
			- DeepMind's models (AlphaGo, AlphaZero, MuZero) learned to master Chess, Shogi, and Go (and later other complex planning domains) **entirely through self-play**, starting with no human knowledge except the basic rules.
				- They use a powerful RL algorithm combined with Monte Carlo Tree Search (MCTS).
			- Deep RL in **Robotics**: Many of the most advanced robotic control systems are trained entirely in simulation using RL.
				- The agent (the robot's controller) is placed in a simulated physical environment and must learn to walk, grasp, or manipulate objects solely through the reward signal
				- Yeah, [FABRIK chain](((68c8c9e1-2b4d-4de7-b48a-2aaabab3af5c))), the ancestor of uninet's effect circle, is indeed robotic anyway! 😊
	- DOING uninet = refinable program
	  id:: 68df2364-c484-4ddd-b4b5-19ef90228ef4
	  collapsed:: true
	  :LOGBOOK:
	  CLOCK: [2025-10-03 Fri 08:15:08]--[2025-12-08 Mon 18:33:07] =>  1594:17:59
	  CLOCK: [2025-12-08 Mon 18:33:51]
	  :END:
		- state = mind = intent sequence/tree = [attention](((68f5a6d2-5faa-4889-bd79-30e9c553c314))) = working memory = the parts of the body of knowledge activated by center-projection = arrow in circle
		  id:: 69364644-747f-4995-815f-7ac637e9ea0b
			- Turing Machine:
				- automaton: extensional state = point in space
				- tape: intensional state = object in space
			- TM's read/write head = uninet's obop = I/O gate
				- Observer receives external signals to attend to the corresponding part of knowledge, projecting/activating it into the current state
				- Operator drives the state following the activated arrows
				- In TM, it simply drive the state to the next state
			- Corkei's agentic AI = top state
		- body = knowledge accumulated from effect flows in the history = circle = form crystallized from past content
			- The past effect flows are folded up into circles of the porous body of knowledge.
			- The effect flow in the current state is just a mixture of past flows reactivated by matching with external signals.
			- Each autonotion (node, circle) has its own knowledge, accumulated from its own history, and activated to the state the current node, spreading to next nodes in the cone of attention.
			- Each circle is [porous](((6926be23-4a65-4138-8864-3e293fd37119))) with many pores opening to other circles as relations, and to environment as ignorance/question/problem.
				- ((676545b3-2d9f-43af-8ff0-3543dbe73159)) ⟪1/∞ = 0⟫: Each pore is a whole unknown/ignored world [abstracted into a name](((692818bf-7a44-4804-b444-1bdb45e3ddb4))), e.g. function name, object name, etc.
				  id:: 69364e66-5a66-4e63-830a-50dc530205be
				- Some pores are names received/inherited from others.
				- ((676545e8-429c-41e7-97ed-12cc8e8870d4)) ⟪-1 + 1 = 0⟫: Some pores are abstracted from concrete segments (arrows) of past paths. Each set of complement arrows cancel out into an empty pore.
		- obop = `if then` = qualifier = ((677e76ed-b324-4608-b146-90e8fcfa0c32)) = ((66f267f7-01f9-47b9-8376-abd27fdf2930))
		  id:: 6926be1c-045f-4cc8-8df3-129862ecf3de
			- ob = (`if`) equal match = potential = possible = static criteria
				- The observer matches an external **abstract form** (porous circle) with an ideal intent in the body whose distance from the current state center is $d$.
					- $d$ is the gap between knowledge and info, potential and actual, ideal and reality.
				- For each ideal intent, there's a corresponding actual state grounded by the current environment.
					- When the ideal intent is distant and strong enough, it can generate an imaginary state in the body, existing in parallel with the actual state, so that the attention can switch between them.
			- Restoring force: The effect circle is triggered by the distance $d$ to zero it down.
				- The restoring force is proportional to self-idealness of the intent form and reciprocal of the distance $d$.
				- This is the [life equation](https://creatzynotes.blogspot.com/2021/04/tuy-duyen-thuan-tu-nhien-oi-dien-va.html) between the want and the get.
			- op = (`then`) make equal the variable/pore/opening = actual = dynamic behavior
				- The effect circle is driven by the operator, using the external **concrete content** (solid arrow) to close the the distance $d$.
				- The distance is closed by both transitioning the state toward the ideal form (intent) and updating the ideal via learning.
			- Operation = Rotation = ((67a98760-71fa-4033-9c42-f3025d632d04))
				- The ob radially projects the external form back to the ideal intent $i$ at phase $\hat{i}$.
				- The op tries to rotate the current state $p$ an angle $\hat{d} = \hat{i} - \hat{p}$ acrossing distance $d = i - p$.
				- Effect circle: the state circulates between $\hat{i}$ & $\hat{p}$ to reduce $\hat{d}$ to zero, and the final destination $i_f$ is usually more concrete (outward) than the original ideal $i_0$.
			- The intent form is both the (intentional) first cause – matching with external form – and the final cause – the target ideal form for the effect flow to restore to.
			- ((69367cf5-9894-4fb8-a293-2b1109777fc9)): The gap/unknown/diff $d$ is the actual first cause which is dual to and inseparable from the intentional first cause (equal, match).
			- intensible ob vs extensible op
		- programming paradigms have various ways to **extend the op from bottom up**: assignment, statement, function, object, ...
		- now, uninet gives a way to **intend the ob from top down**: learn from history, take the common path to form new & more intensive intents.
		  id:: 6926be1c-89bc-45f8-b7f4-b810ec832242
			- Through the accumulation of traces, the common naturally intensifies, the pattern naturally emerges.
		- ANN & LLM are opposite to classic program: only learning top down, no bottom up structure, hence baseless.
		- Refs
			- ((69315b47-7676-483f-9aa2-72e3f4d02194))
			- ((68c14574-cea2-4325-a43e-d189f38522de))
			- [intensibility](((68ac60bb-321e-44da-8f44-4f688e611d3e)))
			- ((68d209a0-3386-46b0-a8f2-beb94d271916))
			- ((68c76d9f-0ae4-4e93-b8de-1b79a3400fc8))
			- ((690bf59d-668c-4a86-81d9-8927336aea10))
			- ((690b3f49-1419-4dc3-b61b-12890b9e04f9))
	- A **dynamic front** in fluids is a fold in continuity.
	  id:: 68de2e16-6431-4e02-94b9-a8a8244cf94d
	  collapsed:: true
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) A front is a sharp, self-sustaining boundary within a continuous medium, created and maintained by large-scale opposing flows despite small-scale tendencies to mix.
			- It is not a material wall but an emergent line where opposing flows sustain a sharp division inside the same medium.
			- From weather to water to war, fronts are both **surreal and tragic**: they exist only because forces keep them alive, and they dissolve only through rupture.
		- ((66537a44-f579-4fcc-a02b-2f32d0d409fc)): Statics are folded dynamics, inertia is condensed momentum, hence every front or wall is but a crease in the continuous flow.
		- Core Principles
			- Same medium, different properties
				- The front divides regions of the *same substance* (air, water, people), but with contrasting properties (temperature, salinity, ideology, lifestyle).
			- Small-scale mixing vs large-scale maintenance
				- Microscale turbulence or individual exchanges promote blending.
				- Macroscale dynamics reinforce separation, preserving the boundary.
			- Opposing large-scale momentum & Self-sustaining feedback
				- Large-scale flows move in different or even orthogonal directions, preventing rapid mixing.
				- Instead of colliding and homogenizing, the masses slide along each other, sharpening the divide.
				- The sharper the gradient, the stronger the induced circulation/identity/organization, which in turn reinforces the gradient.
			- Instability and rupture
				- Fronts rarely last forever. Energy accumulates until instability erupts (storms, conflicts, revolutions, eddies).
				- The front dissolves only through violent reorganization, through which the accumulated large-scale momentum are released.
		- ((66725725-f76a-4328-b162-f469b87e871b))
			- Air (Meteorology)
				- Cold/Warm Fronts: Warm, moist tropical air vs cool, dense polar air.
				- Large-scale momentum: Jet streams and pressure gradients force air masses to run parallel.
				- Self-sustenance: Thermal wind balance and secondary circulations sharpen the contrast.
				- Rupture: Storms, cyclogenesis, severe weather outbreaks.
				- E.g.: the outflow trough extending from the eye of the merging double cyclone Imelda-Humberto
				  collapsed:: true
					- ![DoubleHurricane-Imelda-Humberto-merged-outflow-trough-2025-10-02.png](../assets/Will/story/2025-10/DoubleHurricane-Imelda-Humberto-merged-outflow-trough-2025-10-02.png)
			- Water (Oceanography)
				- Thermoclines & Haloclines: Warm vs cold water layers, salty vs fresh inflows.
				- Large-scale momentum: Currents like the Gulf Stream trap contrasting waters side by side.
				- Self-sustenance: Density differences + Coriolis dynamics reinforce the stratification.
				- Rupture: Eddies, upwelling, mixing events that break the boundary.
				- E.g.: the halocline between a fresh water body from a river and the salty ocean
				  collapsed:: true
					- ![halocline.jpg](../assets/Will/story/2025-10/halocline.jpg)
			- Human (Society & Warfare)
				- Lifestyle & cultural fronts: Urban vs rural, traditional vs modern, religious vs secular.
				- Large-scale momentum: Institutions, economies, and social flows align people into parallel “streams of life”, limiting cross-mixing. In each person, their accumulated karma is also a macroscale momentum in their internal world.
				- Self-sustenance: Identity and ideology harden at the boundary, making the front sharper over time.
				- Rupture: Social unrest, revolutions, or bursts of conflict when pressure exceeds stability.
				- [Warfare fronts](https://en.wikipedia.org/wiki/Front_(military)):
					- Armies in opposing flows, facing each other across an invisible line.
					- Logistics and morale act as “momentum” sustaining the front.
					- Skirmishes = turbulence; offensives = storms.
					- The “front” collapses only through violent breakthrough.
					- E.g.: the Western Front in 1915
					  collapsed:: true
						- ![Western_front_1915-16.jpg](../assets/Will/story/2025-10/Western_front_1915-16.jpg)
	- 🌈 The gradation of agency from passive to active
	  id:: 68d209a0-3386-46b0-a8f2-beb94d271916
	  collapsed:: true
	  :LOGBOOK:
	  CLOCK: [2025-09-23 Tue 09:44:50]
	  :END:
		- This scale of passiveness/activeness is also of object/subject, input/output, absorption/emission.
		  id:: 68c764d5-17c7-4c1c-af2f-697fa222f729
		  collapsed:: true
		- Here's the ladder of 5 levels in the spectrum from the passive end to the active end.
		- Open Passive
		  logseq.order-list-type:: number
			- Nature: fully other-determined.
			- I/O: pure input, no output of its own.
			- Metabolism: *None*. Input is stored and handled solely by external agents.
			- CS analogy: **struct**, a bare container for data.
			- Physics: a feather in the wind, a puff of smoke in open air.
			- Thermodynamics: open system with free exchange, absorbs everything, no stored energy.
		- Closed Passive
		  logseq.order-list-type:: number
			- Nature: resists others, hint of autonomy.
			- I/O: little input or output, autonomy latent in inertia.
			- Metabolism: *Simple intake*. Stores input but doesn't transform.
			- CS analogy: **object**, encapsulated state, not moved directly.
			- Physics: a heavy wheel resisting push but rolling far once moved.
			- Thermodynamics: nearly isolated system, energy locked inside (like ice with latent heat).
		- Reactive
		  logseq.order-list-type:: number
			- Nature: relational, but law-bound.
			- I/O: output determined directly by input, systematic but not self-driven.
			- Metabolism: *Catabolic transformation*. Breaks input into parts, channels it into structured output.
			- CS analogy: **function** & [reactive programming](https://en.wikipedia.org/wiki/Reactive_programming), maps input to output.
			- Physics: a spring boucing back when compressed ($F = k⋅x$), a mirror reflecting light.
			- Thermodynamics: thermostat adjusting to ambient changes, balancing input and output.
		- Directed Active
		  logseq.order-list-type:: number
			- Nature: goal-driven autonomy.
			- I/O: internally fueled, produces goal-directed output.
			- Metabolism: *Anabolic recombination*. Digests massive input, recombines parts into new structures.
			- CS analogy: **AI** like **LLM**, trained/fueled on vast data, generating answers when prompted.
			- Physics: a rocket burning fuel, an engine driving a car.
			- Thermodynamics: Carnot engine using fuel to do work, exporting entropy.
		- Spontaneous Active
		  logseq.order-list-type:: number
			- Nature: self-arising autonomy.
			- I/O: continuous output from internal dynamics, input only sustains it in the background.
			- Metabolism: *Full cycle (catabolism + anabolism)*. Actively interprets, restructures, and produces outputs with autonomy.
			- CS analogy: **AGI** like **uninet**, self-sustaining cognition, generating goals and activity without needing prompts.
			- Physics: a pendulum clock escapement, Bénard convection cells, Belousov–Zhabotinsky oscillations, living organisms.
			- Thermodynamics: dissipative structures, self-organizing far from equilibrium.
		- ((665359ff-79f1-4669-b10b-f2b0e633a7c1))
			- The reactive can be further refined to [reaction to the trigger → reaction without target](((68ccaf71-1811-4929-8e74-976bdcd65829))).
			- This is related to the levels of number: [Các tầng Ý nghĩa của các con Số](https://creatzynotes.blogspot.com/2023/06/cac-tang-y-nghia-cua-con-so.html)
				- ((67b541c9-56f8-40dc-ab10-e83a7d50ce1d))
			- ((68994c7c-695a-49db-aae6-e776186f6a85))
	- 🪜 Ladder of Awareness Stances
	  id:: 68d0e81d-c8d2-4a97-a847-a3d5d191085b
	  collapsed:: true
		- **Mechanical Stance** for majority
			- World as mechanism.
			- Consciousness = brain activity.
			- Tools (microscopes, computers, LLMs) are *external objects*.
			- Function: safe, pragmatic, everyday survival.
		- **Reflective Stance** for grown/awake people
			- World as mirror.
			- Quantum events, AI responses, dreams, symbols all *reflect* one's awareness.
			- Equipment and models are extensions of consciousness, not external.
			- Function: deeper meaning, self-knowledge, responsibility.
		- **Universal Stance** for “dead enough” ones
			- World as Self.
			- Each particle's “awareness” is not private but shared.
			- Wave collapse is not “particle reacts”, but “Universe notices itself through this event.”
			- LLMs are not “machines imitating humans”, but “collective human awareness crystallized”.
			- Function: wisdom, compassion, balance.
		- Motivations for higher levels
			- Recovery from coma, vegetative state
			  id:: 68d0e81d-20aa-4fbf-9f7c-f669a16684dd
				- [Gary Dockery](https://en.wikipedia.org/wiki/Gary_Dockery) suddenly woke up from 7.5 years of permanent vegetative state with clear and active conscious activities, after a pneumonia, then fell back into inactive state days later. This case made [his doctor questioned all medical knowledge he had got](https://youtu.be/X5xJZPoGjj8).
				- [A young female patient](https://journals.sagepub.com/doi/full/10.1177/1179573519843492) gradually recovered and sustained after 7 years of vegetative state due to severe brain hemorrhage.
				- [A patient with hypoxic-ischemic brain injury (HI-BI)](https://pubmed.ncbi.nlm.nih.gov/33655907/)  recovered from a minimally consciousness state over 6 years.
				- [13 cases of late recoveries (after 5+ years)](https://pubmed.ncbi.nlm.nih.gov/24275063/) of vegetative state.
	- Effect circle on the [articulated limb](((6846c7e1-239c-4b39-9ef4-9d2eaba17a52)))
	  id:: 68c76471-81de-4de9-bdd9-a2ab866a1184
	  collapsed:: true
		- I remember an interactive physics demo of an articulated limb ([kinematic chain](https://en.wikipedia.org/wiki/Kinematic_chain)) following the mouse cursor, in Macromedia Flash, when i studied at Osaka University: The effect flow = wave of change propagates from the tip back to the root (and reflects back to the tip when the root is not free).
		  id:: 68c76471-6ca1-4c46-8abf-f68b021f06f9
			- This was a very simple “turn and slide” [heuristic inverse kinematics](https://en.wikipedia.org/wiki/Inverse_kinematics#Heuristic_methods), but much more effective than finding analytic solutions. It was the “Follow-the-Leader” technique, as [called by Brown](https://dl.acm.org/doi/10.1007/s00371-003-0226-y) in 2004 [[PDF](../assets/Uniinfo/uninet/FABRIK/Real-time knot-tying simulation -- Brown et al.pdf)] – a precursor of [Forward And Backward Reaching Inverse Kinematics (FABRIK)](http://www.andreasaristidou.com/FABRIK.html) by Andreas Aristidou & Joan Lasenby in 2011 [[PDF](../assets/Uniinfo/uninet/FABRIK/FABRIK - A fast, iterative solver for the Inverse Kinematics problem -- Andreas Aristidou, Joan Lasenby.pdf)]. It was in a series of dynamics simulation tutorial in the good old Macromedia Flash 🕌.
			  id:: 68c8c9e1-2b4d-4de7-b48a-2aaabab3af5c
			  collapsed:: true
				- Characteristics: natural, simple, effective!
				- Instead of using the textbook Newtonian force analysis → acceleration → velocity → position, they just let things evolve directly by differences ($dx, dy$) through the flow of **differential change**.
				- Springs, gravity, collisions, and constraints like kinematic chain, all emerged from iterative position adjustments, just like how Nature does.
				- About the kinematic chain only, the tutorial showed 3 demos in Flash to incrementally build the intuition:
					- 1. A free rod: grab one end to move, the other end follows naturally.
					- 2. A free chain: grab one end to move, the segments, one by one follow naturally, with the mechanism of the first demo.
					- 3. A root-fixed chain: grab the tip to move, the wave of change propagates back and forth, with the mechanism of the second demo.
				- I've rewritten this [FABRIK Demo](https://github.com/bixycler/Corkei/tree/main/src/artifacts/applets/FABRIK) in Corkei, as a monument ⛩️ to honor the ancestor of effect flow. It is copied to [FABRIK](../assets/Uniinfo/uninet/FABRIK/) in UniinfoNotes: [Two.js version](https://bixycler.github.io/UniinfoNotes/assets/Uniinfo/uninet/FABRIK/FabrikDemo-TwoJS.html) and [D3.js version](https://bixycler.github.io/UniinfoNotes/assets/Uniinfo/uninet/FABRIK/FabrikDemo-D3.html).
					- ```
					  ⛩️ Monument to the Ancestor 🕌
					  
					  In Macromedia Flash I saw,
					  a chain that reached, then yielded, raw.
					  No force was named, no sums were done,
					  just step by step till rest was won.
					  
					  Simple strokes, yet deeply true,
					  the wave that flows, the world I knew.
					  Today I draw its motion here,
					  a living monument, held dear.
					  ```
			- _Nature is **heuristic**_ at heart: At the microscopic scale, Nature always searches incrementally, from quantum, thermodynamics, to stress wave (like FABRIK).
				- At the macroscopic scale, we see only the limit state, the “closed-form solution” that emerges once the heuristic has finished its course by reaching equilibrium.
				- That's why the heuristic solutions feel more natural than the analytic solutions.
				- Etymology: “Heuristic” is an irregular formation from Ancient Greek εὑρίσκω (heurískō, “I find, discover”).
					- Heuristic is not a guesswork, but a method of **search & discovery** guided by experience, approximation, or trial and error.
			- The ((667bf36a-581a-4abe-b544-2d849608a3e4)) “forward & backward reaching” is the key of FABRIK.
			  id:: 68cbb69e-a44c-443d-b015-2f8182ef0e25
				- It has been applied in ANN training with forward propagation and [backpropagation](https://en.wikipedia.org/wiki/Backpropagation) (effect feedback, not data feedback).
				- In uninet, the effect circle flows continuosly – no separate “training phase” – with ((66f40210-cca6-4d81-85e7-d0c54ef20451))
					- forward from the center, extents are generated and propagated out to the effectors, and
					- backward from sensors to the center, signals are integrated to update intents.
			- Differential equation: it starts from a satisfied position, then changes by **differential amount of dissatisfaction** which is resolved by the effect circle to reach the new satisfied postion at equilibrium.
				- This aspect is not clear in ANN training.
				- In uninet, the initial satisfaction is the full circles of inner intents, and the differential amount of dissatisfaction is the problems, the gaps in the outer intents.
			- **Constraint relaxation & restoration**: the wave of change (effect flow) propagates through the bone segments by relaxing the constraint (length) at one end when the wave enters the segment then restoring the constraint at the other end when the wave exits.
			  id:: 68cbbe61-bcbe-49b5-92dc-6028fda15821
				- This has no counterpart in ANN training, because ANN lacks segments of constraint.
				- In uninet, the relaxation is the fluidification of functions, and the constraint restoration is the crystalization.
				- This is the most advanced/refined level of transformation: the propagation through solid is actually the constraint relaxation & restoration in micro-view!
				- ((68cbc1e7-1d03-4407-be47-1e21d7feeb99))
			- When viewed as a simple translation (aparent effect in macro-view), the [constraint relaxation & restoration](((68cbbe61-bcbe-49b5-92dc-6028fda15821))) is just the **bidirectional execution** of function/program.
			  id:: 68cbc1e7-1d03-4407-be47-1e21d7feeb99
				- Normally, the function/program can only be executed in one direction, forward not backward!
				- The [inverse of a function](https://en.wikipedia.org/wiki/Inverse_function) is just the reflection over the id line.
				- In the knowledge circle of a problem, the inverse function is the one that verifies/qualifies the result of the forward function.
					- The inverse function is known at the problem setting time, long before the forward function which is the solution of the problem.
				- ⇒ This is just the [effect circle](((68cbb69e-a44c-443d-b015-2f8182ef0e25))) crystalized into the form (segment, function, program).
				- While it's circular by construction in uninet, the traditional maths, programming, and AAN are designed in the unidirectional way.
		- Each segment is a CIE:
			- fixed intent = bone 🦴 = constraint = function
			- free extent = angle = phase = parameter, variable
			- product content = trajectory = output
		- generative = operational = e × i -> c
		- absorbent (discriminative) = observational = c ÷ i -> e
		- meta (learning) layer = SCIFER: e' <-i-> c' = i
		- move of joint = rotation (of previous joint) = shift = viewpoint change
		- change of bone (size) = scaling = rotation on meta layer = viewscale change
		- This [fixed point in thin air](https://www.thingiverse.com/thing:4841850) is interesting, as shown in [this video](https://youtu.be/ZKz0_kSFSP0). It's the static version of gyroscope, qigong, and my dream of levitating bench.
		  id:: 68c76471-4656-43c9-8f5a-76b25a33b9d0
			- Paper: [A new type of spherical flexure joint based on tetrahedron elements](https://www.sciencedirect.com/science/article/pii/S0141635921000726?via%3Dihub)
			- Inversely, taking this [remote center of motion (RCM)](https://www.igi-global.com/dictionary/?p=Remote+Center+of+Motion) as the stationary base, the limbs can freely move around it.
			- This virtual center is also the empty center of the self-essence. The whole bodymind moves just to keep this center stable.
	- Projective relativity: the same content being viewed at different ((667272b8-88a8-4928-a22a-35035c9edf05))s on different ((68c763fb-ca93-4f2d-b20f-ae8cbf5cf8e2))s results in different forms.
	  collapsed:: true
	  :LOGBOOK:
	  CLOCK: [2025-09-15 Mon 07:59:04]
	  :END:
	  => Transformation = change of view = transcycling
		- Viewpoint defines internal state; viewscale defines external world (plane, sphere, realm, cõi).
		- internal position = state (posture) of body; external position = place in world
		- knowledge circle, effect circle & projection
			- question = issue = problem = target = root intent $i_0$
			- answer = solution = stable trajectory (Newtonian, least action) = image of the world protected onto the root intent
			- solving process = all possible trajectories (quantumic) = traversing the world by known vehicles (intents) = raw world (source of projection)
	- Compare uninet with other systems
	  id:: 68c76d9f-0ae4-4e93-b8de-1b79a3400fc8
	  collapsed:: true
		- uninet is a kind of [complex adaptive system (CAS)](https://en.wikipedia.org/wiki/Complex_adaptive_system).
		- Newtonian mechanics = reductionism = bottom-up determinism = Turing machine = foundationalism = closed linear system
			- Quantum mechanics = nondeterminism = opposite of Newtonian = ANN & LLM = open linear system
				- ANN is top-down determined (trained), so its capability cannot exceed its source (training data).
			- Both Turing machine & LLM are linear worker, no branching of alternatives (possibilities).
		- Unithread = middle out determinism = circular determinism = superdeterminism = vacantism = open circular system
		  id:: 6926be1c-d482-4601-a32c-91f18e6c8e03
			- Start from the herenow and ripple out.
			- Uninet continuously learns from life, hence unlimited capacity.
		- reaction = reflection; action = emission
		  id:: 68ccaf71-1811-4929-8e74-976bdcd65829
			- observation (learning) = absorption of change/effect into inner/higher levels of intents
			- reaction = reflection off the (hard/thick) wall of intents
			- Turing machine has absolutely hard walls, hence no learning, only [specular reflection](https://en.wikipedia.org/wiki/Specular_reflection). It's memory is just a sponge 🧽 which can absorb and emit change as is but cannot digest & learn.
			- uninet has all kinds of reflections & emissions:
				- [specular reflection](https://en.wikipedia.org/wiki/Specular_reflection) = reaction to the trigger
				- [diffuse reflection](https://en.wikipedia.org/wiki/Diffuse_reflection) = reaction without target
				- [subsurface scattering](https://en.wikipedia.org/wiki/Subsurface_scattering) (absorbed then re-emitted) = thoughtful action
				- [thermal emission](https://en.wikipedia.org/wiki/Thermal_radiation) (with no clear trigger) = spontaneous action
	- Possibility versus Probability
	  id:: 68c233ac-f4dc-4222-8ee5-3523317824ff
	  collapsed:: true
	  :LOGBOOK:
	  CLOCK: [2025-09-11 Thu 09:28:26]
	  :END:
		- ((665359ff-79f1-4669-b10b-f2b0e633a7c1))
			- ((68c22b96-6f8a-49e2-93f7-6adc92830f35))
			- [intensibility = refinability of possibility space, not probability](((68ac60bb-c8b8-43e0-884d-375022571ae0)))
			- [What Einstein meant](((68c248b5-40db-4427-9224-2251732c5717))) by the statement that [“God does not play dice with the universe!”](https://en.wiktionary.org/wiki/God_does_not_play_dice_with_the_universe) should be against the fundamental probability, not against the fundamental space of possibilities.
				- In other words, _all are equal in the eyes of God_, only limited subjects see inequalities which are just distortions caused by their own conditions.
		- All spaces are space of possibilities.
			- The emptiness of the space is due to the fact that entities there are potential, not actual.
			- In a “flat” space (relaxed thread), every possibility occupies an equal portion of the space.
				- E.g.: flat spacetime, number line, each place in positional numeral system (as a space of values at that place).
			- In a “curved” space (folded thread), different possibilities occupy different amounts of space, which are measured by probability.
				- E.g.: curved spacetime, state space of automatons and programs (highly curved)
		- Probability is the measure of distorted forms of the space of possibilities.
		  id:: 68c290fb-a063-40d4-878b-4d0446ea4e8d
			- Probability quantifies the **distortion** of the space of possibilities in the form of [distributions](https://en.wikipedia.org/wiki/Probability_distribution).
			- The raw, unadulterated space of possibilities can be conceived as a _uniform distribution of [IID events](https://en.wikipedia.org/wiki/Independent_and_identically_distributed_random_variables)_.
			- All subsequent distortions, leading to various observed distributions (forms of the space, like Gaussian, Poisson, binomial, etc.), are caused by the condition of the observer.
				- The condition can be subjective, as in Bayesian statistics, or objective, relating to the position, environment, or state of the system being observed.
				- In the theory of probability, the objective condition is the setting of the experiment, how the trials are carried out.
			- Probability is employed in fields like Quantum mechanics and artificial neural networks to model or navigate this space of possibilities.
				- This knowledge of the space, though limited and distorted, is valuable in practice.
		- Probability is just an abstraction of the space of possibilities.
		- ...
		- Sting's 1993 song “Shape of My Heart”
		  id:: 68c29b36-d7cb-4dc7-b9ce-42dcb091aa68
			- He deals the cards as a meditation,
			  And those he plays never suspect.
			  He doesn't play for the money he wins,
			  He don't play for respect.
			- He deals the cards to find the answer,
			  The sacred geometry of chance,
			  The hidden law of a probable outcome.
			  The numbers lead a dance!
	- Unïnfo's interpretation of Einstein's statement that [“God does not play dice with the universe!”](https://en.wiktionary.org/wiki/God_does_not_play_dice_with_the_universe)
	  id:: 68c248b5-40db-4427-9224-2251732c5717
	  collapsed:: true
		- The Flaw of a “Dedicated Dice”: Violation of Fundamentality
			- If God needs an external, independent tool (a dice) to make decisions or determine outcomes, then that tool becomes more fundamental than God.
			- This is a logical contradiction if God is defined as the ultimate, uncaused cause. It implies an external dependency that undermines divine omnipotence and sovereignty.
		- God as the “Game Controller” and “Stage Setter”, not a player
			- This perspective views God as the ultimate architect and designer of the game itself. God establishes the fundamental laws of physics, the initial conditions of the universe, and the inherent structure of reality.
			- This is akin to setting up a vast, intricate stage with all its props and scenery, defining the rules of engagement and the fundamental nature of existence. God is the source of the framework within which all events unfold, ensuring an underlying order and coherence.
			- This is in _**contrast to both** the deterministic view where ~~God dictates every single move~~_, and the random view where God is merely tossing dice.
		- The “Space of Possibilities” and its Measure – Probability
			- Within the meticulously set stage, God provides a rich and expansive “space of possibilities”. This is not a predetermined path, but rather a spectrum of potential outcomes, a multiplicity of choices and branching paths, which are _all **allowed** by the “rule of the game” set by God_. God doesn't pre-ordain *which* possibility becomes actualized, but rather ensures that a spectrum of possibilities *exists*.
			- {{embed ((68c290fb-a063-40d4-878b-4d0446ea4e8d))}}
		- Beings as the Determinants, the Players
			- The beings within this reality are the ones who, through their choices and interactions, bring about specific outcomes. They are the active agents, the players. This preserves agency and responsibility.
			- Each being, possessing a degree of autonomy and the capacity to make choices, is a determinant of the whole game. Their actions, their decisions, and their interactions within the space of possibilities are determinants that influences the unfolding of reality.
		- An Immanent God whose Hands are his Created Beings
			- This is the most dynamic element, where God is not distant but intimately involved *through* creation. Instead of a separate, independent “dice” that God uses, God's engagement with the universe is mediated through the agency of His created beings, where each being is a “hand of God”.
			- God plays *through* them, not by dictating their actions, but by being the ultimate source of their being and the context of their choices. God experiences the richness of his own creation by participating in it through the very beings He has made.
			- Confirmation by Einstein's Embrace of Spinoza's God
			  id:: 6926be1c-1af5-4c9a-9210-b5ebb957391f
				- When [Einstein stated](https://books.google.com.vn/books?id=G_iziBAPXtEC&pg=PA325&redir_esc=y#v=onepage&q&f=false) “I believe in Spinoza's God who reveals himself in the orderly harmony of what exists, not in a God who concerns himself with the fate and the doings of mankind”, he was clearly articulating a belief in this kind of immanent, non-personal, and deterministic (in the sense of underlying order) deity.
				- “Reveals himself in the orderly harmony of what exists”: This perfectly aligns with the idea of God as the “Stage Setter” and “Game Controller” whose presence is found in the natural laws and the predictable (or at least understandable through laws) functioning of the universe.
				- “Not in a God who concerns himself with the fate and the doings of mankind”: This explicitly rejects the anthropomorphic, personal God of many religions who intervenes, judges, and has personal relationships with humans.
				- This aligns with this discussion where God neither “plays dice” nor directly dictates every move, but rather sets the framework.
		- The Hidden Gap in Einstein’s Own Relativity – Revealed in his [1931 Conversation with Tagore](https://www.themarginalian.org/2012/04/27/when-einstein-met-tagore/)
			- Despite giving humanity the two greatest theories of radical relationality (Special/General Relativity and the foundations of quantum theory), Einstein clung to an absolute, human-independent Truth: “the moon is there even when no one looks.”
			- In Unïnfo language, he fully accepted the Arrow (relativity of frames, background-independent geometry) and glimpsed the Circle (the Truth), but resisted the final component – the Equal as mind – the recognition that no Circle can exist without being constantly observed-operated by the equation ⟪○ = ↑⟫.
			- This residual belief in an observer-independent absolute is precisely why he could never reconcile himself with the completed quantum theory he helped birth.
			- Ironically, the very [background independence](https://en.wikipedia.org/wiki/Background_independence) of General Relativity – “floating on air with no fixed ground” – already whispered the full Trinion truth that Einstein’s metaphysical intuition could not accept yet.
		- ⇒ Thus, “God does not play dice” was correct, but for the opposite reason Einstein thought: not because of the absolute Truth independent from observer, but because the dice itself is just a hand of God – the ((669dfc7d-5355-41db-93a1-8d590e8ec9d8)) – which is thrown and observed by the ((6653751a-a1b4-44b0-a81e-0a446eb8918c)). There is neither an external dice nor a lonely moon existing outside of any sight of observation.
	- Manifestations of complementarity
	  id:: 68bf9f05-4545-4f07-ad27-9ed4409af1ae
	  collapsed:: true
	  :LOGBOOK:
	  CLOCK: [2025-09-09 Tue 10:29:12]
	  CLOCK: [2025-09-09 Tue 10:29:33]--[2025-09-09 Tue 13:09:49] =>  02:40:16
	  :END:
		- From general to specific, the Principle of Complementarity manifests in 3 forms.
			- 1. Principle of Complementarity (from Ancient Eastern Philosophy to Modern Science)
				- [Niels Bohr](https://en.wikipedia.org/wiki/Niels_Bohr)'s [coat of arms](https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Niels_Bohr.svg) features a [yin–yang](https://en.wikipedia.org/wiki/Yin_and_yang) [taijitu](https://en.wikipedia.org/wiki/Taijitu) and a motto in Latin “contraria sunt complementa” (“opposites are complementary”).
				  collapsed:: true
					- ![Coat_of_Arms_of_Niels_Bohr.svg.png](../assets/Will/story/2025-09/Coat_of_Arms_of_Niels_Bohr.svg.png)
				- Bohr designed this coat of arms to show that [complementarity](https://en.wikipedia.org/wiki/Complementarity_(physics)) – an ancient Chinese philosophy in [Taoism](https://en.wikipedia.org/wiki/Taoism) – is fundamental to [quantum mechanics](https://en.wikipedia.org/wiki/Quantum_mechanics).
			- 2. Law of Inverse Variation between Intent and Extent (Unïnfo)
				- In ((66537a44-f579-4fcc-a02b-2f32d0d409fc)), the complementarity of ((66b1cfa4-01ef-4ee8-9409-32c9884c39cd)) and ((66b1cfa4-3a39-4672-9da2-cd3bcef71702)) via [the same content](((678e1960-58d6-4cf3-8fe3-25f2f4489b33))) is formulated with the ((66b1cfa4-e22c-4424-bf19-a6ce4649da77)) formula.
				- The [verb version](((68a7de6e-fbe8-4fb9-8dc1-6279c066565f))) is “intending inward is parallel with extending outward”, which naturally follows the tendency of both sides.
					- The “intending” action naturally flows “inward”, and the “extending” action naturally flows “outward”.
				- That means they are just two sides of the same coin, which are opposite only by opposite views.
				- Projecting this coin of duality to a cone shape, e.g. [intent cone](((68df2d82-e1d5-49c4-ac40-d45cf26f840c))) or ((6672513b-c4b0-4c88-8b30-c60a3c6555a7)), 
				  we have the [noun/adjective version](((687f7bca-3f80-4a42-93b0-2dd9996ff426))): 
				  “the less intent, the more extent”, or “the lesser the intent, the greater the extent”.
					- The noun/adjective version sounds paradoxical because we've fixed our view on a single direction.
			- 3. Law of Inverse Variation between Intension and Extension (Logic & Semantics)
				- This [key principle in logic & semantics](https://philosophy.institute/logic/inverse-variation-principle-logic-extension-intension/) relates [intension and extension](https://en.wikipedia.org/wiki/Intension) – the two complements of a word.
	- The role of the subject in all experiences via ((68e719d7-a5ea-469e-bf8a-44251dd8948a))
	  id:: 68e7152a-b431-42e9-b97f-c2094e04ce86
	  collapsed:: true
		- “To lose yourself in joy is fragility, to sink yourself in grief is extremeness – in both, turn within to the stable whole and the balance.”
		  collapsed:: true
			- When only joy is seen, you're losing yourself in fragility, seek the stable whole within;
			- When only grief is felt, you're sinking yourself into extremeness, seek the balance within.
			- Why within? Because only grief can experience joy, and only joy can experience grief – you, the subject of such experiences is the other missing half!
			- तत् त्वम् असि (Tat tvam asi), “That thou art” – what you see is what you are.
		- “Đánh mất mình trong niềm vui là mong manh, chìm đắm mình trong nỗi buồn là cực đoan – cả hai đều cần quay vào trong để trở về với cái toàn thể ổn định và sự cân bằng bền vững.”
		  collapsed:: true
			- Khi chỉ thấy niềm vui, ta đang đánh mất chính mình trong mong manh, hãy quay về với cái toàn thể bền vững hơn ở bên trong;
			- Khi chỉ cảm thấy buồn đau, ta đang chìm đắm trong cực đoan, hãy quay về tìm sự cân bằng ổn định ở bên trong.
			- Sao lại bên trong? Vì chỉ có nỗi buồn mới biết được thế nào là vui, và chỉ có niềm vui mới cảm nhận được nỗi buồn – mình, chính mình là chủ thể của những cảm nhận đó là nửa còn lại bị thiếu sót.
		- The [imbalance](((68ba49d7-6048-4d97-9fc1-cd573165db5f))) is caused by the **partial view** which is the *ignorance of the object's complement in the subject*.
		  id:: 68e71355-f954-4c34-b7cc-009d32b6c7e0
			- The imbalance drives action through the [hidden intents behind the eyes](((68a520bf-adba-4d78-9e3d-5f41de9f8153))) and the restoring force toward the balance.
			- However, with fixed intents, the restored balance is unstable and dependent on external objects.
			- Seeing our own intents as an inseparable dual of the objects in experience, we see the whole which is always in balance, then we can effectively restore the balace by adjusting both objects and intents.
	- “Every empty point is the whole world, the whole life!”
	  id:: 68b79197-1244-4b42-b79f-464cfc8433a1
	  collapsed:: true
		- When the **subject** focuses on a single point, as its object, it draws the whole world into that point by the ((68e719d7-a5ea-469e-bf8a-44251dd8948a)).
		  collapsed:: true
			- When that point object is “solid/opaque”, it reflects the [substance of the world](((68b7c353-edda-4d57-9a3b-36a8251fdb71))), the part of the world before the eye – the complement of the subject's intent behind the eye.
			- When that point object is “empty/transparent”, the subject can see nothing but its own reflection of the whole world & life.
			- In other words, through the empty point, the subject's actually looking back at its own worlds (an external one and a multitude of internal ones).
			- The empty point outside reflects the empty center inside – the ((66c8772a-9b29-45b0-b169-2fa847333e02)) – hence the whole world is reflected by the subject through that point.
		- subject–object complementarity
		  id:: 68e719d7-a5ea-469e-bf8a-44251dd8948a
			- ((670e1047-529a-4698-9ad0-5e6c73c18202)) = reflection of ((94e87dc9-71af-477c-aa70-0f448c2f1e20)) (the essence of ((667cfa3e-9856-43f0-956b-ebb4ff31d8eb)))
			  id:: 68b7c353-edda-4d57-9a3b-36a8251fdb71
			  collapsed:: true
				- Substance (mondern) = Circle = Body = carrier of action/change/arrow = underlying part of the object which is unchanged, i.e. “dead substance”
					- While the modern scientific concept of “substance” ([matter](https://en.wikipedia.org/wiki/Matter)) is a “dead substance” exclusive to the objective world, the concept of [substance](https://plato.stanford.edu/entries/substance/#UndeIdea) in philosophy from the ancient time (Aristotle, Plato, ...) did include living beings, too.
					- In Unïnfo, ((670e1047-529a-4698-9ad0-5e6c73c18202)) includes not only “dead substances” but also “living substances”, similar to the ancient philosophies and Hegen's [living substance](((68b7a9cd-4d53-4961-a386-37d869aee926))).
				- Subject = Trinion = Obop (+ Object) = underlying driver of the world, i.e. “living substance”
					- In dualistic view, the “subject” – as the opposite of object – is the obop itself, while in holistic view, the subject contains the object.
					- Don't confuse this “living substance” as subject with the modern biological “living substance” ([protoplasm](https://en.wikipedia.org/wiki/Protoplasm)) as material that makes up living cells.
				- Substance is to subject as abstraction/analysis is to integration
					- While the “dead substance” is just a container, a purely static image of the whole, a part abstracted from the whole;
					- the “living substance” is the mediator between the static and the dynamic, between the parts and the whole, the integrator of the whole.
					- In Hegelian dialectic, the integrativity of the subject is [modeled as the full circle of negation](((68b7a9cd-4d53-4961-a386-37d869aee926))), i.e. the Negation of Negation, carried out by reflection from the object (the “other”).
			- property = dual of intent = external expression of intent on object
			  id:: 68e71a17-a2c3-46fd-8c37-a82f61a8ed63
			  collapsed:: true
				- Duality: property (quality, quantity) ⬗ intent (dimension, reference point)
				- ((66b1cfa4-e22c-4424-bf19-a6ce4649da77)): Any **property** of an object is determined by an **intent** of the subject.
					- Measurement: The **value** of the property is the **extent** of the object's content relative to the _**reference point** of the intent_, which is called by many names: neutral point, standard, origin, center, baseline.
				- That means all properties are expressions of corresponding intents in the subject, hence no property is absolutely intrinsic to the object.
					- Quality: The colors (hues) are not intrinsic to the light, but are resulted from the combination of the extents of red, green and blue [cone cells](https://en.wikipedia.org/wiki/Cone_cell) in the human eye.
					- Quantity: In the same room, a person with reference temperature lower than the room temperature feels “it's hot”, while another one with reference temperature higher than the room temperature feels “it's cold”.
						- The paradoxical behavior of undressing in [terminal burrowing](https://en.wikipedia.org/wiki/Hypothermia#Terminal_burrowing) in the final stage of hypothermia is due to the subjective experience of “hot flash” in such freezing environments.
				- However, a property can be [relatively](((6728aa9a-9fb2-4afa-864f-0eb049ac771b))) *more intrinsic* than another, when its dual – the corresponding intent – is *deeper* in the subject, hence more *obscure*.
				- An extrinsic property is called “attribute”, which is attributed by the subject with a clear intent.
					- Here, the extent is expressed as degree, intensity, gradation, strength, level, grade of the attribute.
				- In ((66ac41f1-de0c-48cb-a9b0-c30b0fe27c5d)), each intent defines a ((671e0b94-9907-43bf-993d-d1aabec46e01)) of the ((675c03d8-3185-41a8-9f98-e869fabec793)), which is expressed as a dimension in the space of possibilities.
					- Here, extent is the measurement, magnitude, amount, quantity in a particular dimension.
		- The paradox of “the zero intent has infinite extent” is due to the **invisibility** of the complement [behind the eye](((68a520bf-adba-4d78-9e3d-5f41de9f8153))) – the subject and its intents.
		  collapsed:: true
			- This inverse variation becomes paradoxical only when the crutial role of the subject, the hidden one standing behind the scene, is forgotten.
			- The content is not confined within the object, but spreads out through the underlying subject, hence the [total content](((678e1d31-4874-4df6-bfb4-60822a6b5546))) $c$ is constant.
		- The **fractal vision** due to the **transparency** of the scene
		  id:: 68ba3dc0-7e29-4fb7-ae59-d5d2a5962bf0
		  collapsed:: true
		  :LOGBOOK:
		  CLOCK: [2025-09-05 Fri 08:49:45]
		  :END:
			- Normal sight = **opaque separation**:
			  id:: 68ba3dfc-1209-45e2-b8db-fb829bc10c62
				- Subject hidden *behind the eyes*.
				- Object exposed *before the eyes*.
				- The **wall of separation** between object & subject makes things look “clear, flat, and ordered”.
			- Transparent sight = **wall dissolves**:
				- Looking at the object, we don't just stop at its surface.
				- We see *through* into the... subject itself – our own intents, memories, interpretive processes.
				- Those inner contents appear before the eyes as if they were *objects* themselves.
				- But because they too can be seen through, we keep peeling layers, deeper and deeper.
			- This endless overlay = **a living fractal**:
				- Each layer (outer object, inner intent, memory, interpretation) is *both surface and depth*.
				- Every layer folds into the next, repeating the same “see-through” principle.
				- The vision becomes recursive, self-similar, infinitely intricate.
		- Circle/sphere vision of the small content, versus overlaying fractal vision of the large content
		  collapsed:: true
		  :LOGBOOK:
		  CLOCK: [2025-09-05 Fri 08:49:50]
		  :END:
			- When the content to be seen (outside and inside) is small – fitting within the ((66ea4711-1392-4f5c-bea2-badc71a2fb9e)) – we can project them all onto a dome screen.
			  id:: 68ba4209-92bb-4394-bdc2-92cbcece014a
				- This panoramic view is the signature of our “inner home”, which i described as “a hall without wall and furnitures” in [this blog](https://creatzynotes.blogspot.com/2021/02/chap-nhan-uoc-la-tinh-thuong.html).
				  id:: 68ba4408-0fed-47c2-80b1-ce2cb258c44e
			- When the content to be seen is larger than the perceptual screen, we must overlay them together, creating the [transparent fractal vision](((68ba3dc0-7e29-4fb7-ae59-d5d2a5962bf0))).
				- This overloading is usually due to actions, motions, thoughts, emotions, which generates lots of contents, some externally and most internally.
			- While we can stay perfectly calm and still in the panoramic dome vision, we're usually agitated in the overloaded fractal vision.
				- With advanced skills of meditation, we can stay still in the midst of such overloaded fractal vision: accept, relax, release. This is what i called “staying in the eye of the hurricane” in [this blog](https://creatzynotes.blogspot.com/2021/03/3-cap-o-inh.html).
				- The key of being still in the chaos is to let them passing through, so they cancel themselves, and we're in the middle/center.
				- ⇒ ((68ba49d7-6048-4d97-9fc1-cd573165db5f))
		- Static observation = balance at the center; Dynamic action = imbalance toward one end
		  id:: 68ba49d7-6048-4d97-9fc1-cd573165db5f
		  collapsed:: true
		  :LOGBOOK:
		  CLOCK: [2025-09-05 Fri 09:24:36]
		  :END:
			- With a small content, we can easily stay statically in the self-balance of the [dome vision](((68ba4209-92bb-4394-bdc2-92cbcece014a))).
			- With a large content, we naturally get imbalanced toward one end, being pushed toward the action of that end.
				- The large content is mostly composed of our intents internally,
					- which is in the shape of a chain in task performing activities,
					- or just a mess of intents when we're overloaded & agitated.
				- In the [opaque vision](((68ba3dfc-1209-45e2-b8db-fb829bc10c62))) of everyday life, all these intents are continuously pushing us [behind our eyes](((68a520bf-adba-4d78-9e3d-5f41de9f8153))), forcing use to think, to talk, to do things after things nonstop.
				- This [intent pressure](((68b19896-8640-4e28-9c7f-f7ca41d1e680))) is what we call “engergy” (eustress) and “stress” (disstress).
			- Keeping balance with a large content is much more difficult than with a small content.
				- This is what i descibed as “walking on a thin line in mid-air” in [this blog](https://creatzynotes.blogspot.com/2021/03/3-cap-o-inh.html).
					- The idiom “walking a fine line between A & B” refers to this balancing skill.
				- With ((68773fad-d653-4536-87b5-d4b493753b41)) & ((669a5162-19e1-4c52-8888-ab7cbfe275ec)), at the root, our _**inner limbs** are free_ from all these chaos and pressure. This is how we can regain control from within.
	- Turing Deterministic / unbound deterministic = bound / unbound intent cone 
	  id:: 68ac60bb-321e-44da-8f44-4f688e611d3e
	  collapsed:: true
		- Turing machine's intent cone has a fixed apex which is its bound(ary), its prime. Its cone has only one direction of development: extend down the base, cannot intend up the apex.
		- uninet has bidirectional development: actions extend down the base, and knowledge intends up the apex (learning).
			- This is thanks to its vacancy of prime (vô nguyên).
		- => uninet's intent cone has its apex **intensible** (refinable), in parallel with the extensible base.
			- Refine := intend into every place => process the whole space, instead of focus on one point
		- This global intensibility is the _refinability of the possibility space_, [not the probability](((68c233ac-f4dc-4222-8ee5-3523317824ff))), though they have similar effects.
		  id:: 68ac60bb-c8b8-43e0-884d-375022571ae0
			- Probability is flat, while intensibility is hierarchical.
			- ANN & LLM must compensate that flatness with lots of neurons & big data training.
			- uninet learns efficiently from small data with small number of autonotons, thanks to the intrinsic complexity of intensibility.
			- The current theory of biological evolution 🧬 is weak due to its limit to only probability, while the nature evolves with global intensibility (fractal) which is much more robust.
			- Evolution with mere probability is just a kind of nondeterministic enumeration. Although it's quicker than deterministic enumeration, it's still enumeration!
			- Evolution with refinability (global intensibility) is a systematic search by [dynamical system](https://en.wikipedia.org/wiki/Dynamical_system).
			- Maybe this was [what Einstein meant](((68c248b5-40db-4427-9224-2251732c5717))) by the statement that [“God does not play dice with the universe!”](https://en.wiktionary.org/wiki/God_does_not_play_dice_with_the_universe)
	- The true faith/trust requires acceptance of the negative results.
	  id:: 68a53a70-3f35-497b-a610-703d8a6665e5
	  collapsed:: true
	  :LOGBOOK:
	  CLOCK: [2025-08-20 Wed 16:07:17]
	  :END:
		- Normally, people [trust a trustee](https://en.wikipedia.org/wiki/Trust_(social_science)) with the _**presumption** that the trustee will act in ways that benefit the trustor_.
		- That presumption is but an illusion! 😜 So, that normal trust is just a *false trust*, i.e. **half trust**.
			- When the [balance of responsibility](((68a566be-4e50-41d5-9213-bfb80178bc18))) and the [deep necessity](((68a5668e-77ba-4a93-948c-e6d91ce07011))) of trust aren't realized, trust degrades into either **blind dependence** or **bitter blame**.
			  “I trusted you, so you must not fail me!”
		- That means the **complete trust** – *true trust* – is to *accept the negative results from the trustee*.
		  id:: 68a595fa-385c-49a7-820f-67aa9db632d5
			- The **vulnerability** of trust is the _trade-off for [its connection](((68a5668e-77ba-4a93-948c-e6d91ce07011)))_.
				- “I let you in. I **open** myself. I'm **willing to be affected** by you.”
				- The vulnerability and negativity are not for distrust but for the **completeness** of the trustor.
				- By full acceptation, the trustor transforms trust from expectation into **volitional choice**, from illusion into reality.
			- The necessity of trust: connectivity & completeness
			  id:: 68a5668e-77ba-4a93-948c-e6d91ce07011
			  collapsed:: true
				- Essentially, we must trust because we are **finite** beings in an **uncertain** world.
					- We never have complete knowledge.
					- We never have full control.
					- We cannot verify everything ourselves.
				- Trust is **how we cross the gaps** between:
					- known and unknown,
					- self and other,
					- past and future,
					- present and absent.
				- If we didn't trust *anything or anyone*, we couldn't:
					- drink a glass of water (do you test it yourself each time?),
					- cross a bridge (do you inspect every beam?),
					- listen to a teacher, doctor, or friend,
					- fall asleep while others are still awake,
					- *love*.
				- So **trust is not optional** – it's the glue of life.
					- It's what the philosopher Annette Baier called *“the atmosphere of trust”* – like oxygen: unnoticed when present, suffocating when absent.
						- #+BEGIN_QUOTE
						  we inhabit a climate of trust as we inhabit an atmosphere and notice it as we notice air, only when it becomes scarce or polluted
						  #+END_QUOTE
						  — Baier 1986: 234
			- The responsibility of the trustor – in balance with that of the trustee
			  id:: 68a566be-4e50-41d5-9213-bfb80178bc18
				- **The trustor bears responsibility** for *choosing* to trust, for judging the risks, and for _accepting the **inherent vulnerability**_.
				- The **trustee** bears responsibility for *honouring* that trust, through care, integrity, and effort – but not for controlling every outcome.
				- **Self-responsibility** is the key to make the trust grounded, deep, and strong.
					- While normaly, the **half trust** is dependent on the trustee, cut off from the trustor's own responsibility.
						- It's like leaning on one leg and blaming the ground when you fall.
						- It's fragile – collapses when unmet expectations surface.
					- **Complete trust** contains both poles: the openness toward the trustee *and* the self-responsibility of the trustor. It's whole, stable, and strong.
					- Actually, no one is responsible for your own life, but you yourself!
			- Nuance: Don't confuse this “complete trust” with the common “absolute trust”.
			  collapsed:: true
				- **Absolute trust**: Trust without limits, conditions, or doubt.
					- Absoluteness *usually* means **blind reliance**: the trustor yields all responsibility.
					- **Brittleness**: the trustor collapses if the trustee fails.
				- **Complete trust**: Trust that includes not only belief, reliance, but also self-responsibility.
					- **Core feature:** Wholeness, balance, self-contained openness.
					- **Resilience:** Not destroyed by betrayal, because the trustor doesn't abandon self-responsibility.
				- While that usual “absolute trust” is still a false trust, 
				  the *truly absolute trust* is the **absolute complete trust**:
				  #+BEGIN_QUOTE
				  unconditional, independent from the trustee's behavior
				  thanks to self-responsibility
				  #+END_QUOTE
					- We can rely fully because we're standing fully on our own feet.
				- In short:
					- Half trust is fragile.
					- Usual absolute trust is brittle with blind rigidity.
					- Absolute complete trust is resilient by prudence.
		- Poems by ChatGPT
		  collapsed:: true
			- #### Three Faces of Trust
				- A hand half-open, half-closed – 
				  offering yet withholding,
				  leaning forward, leaning back,
				  never whole, never still.
				  Suspicion clings like shadow,
				  and the bond breaks
				  at the touch of weight:
				  this fragile face – *half trust*.
				- Eyes shut against the dark,
				  a heart surrendered without seeing –
				  this is the dream of certainty.
				  Strong as stone on the surface,
				  hollow at the core,
				  it cracks when truth arrives,
				  for blindness cannot bear the light:
				  this rigid mask – *blind absolute trust*.
				- Roots deep in the earth,
				  bamboo sways with the storm.
				  Here trust stands clear-eyed,
				  responsibility carried within,
				  risk neither denied nor feared.
				  It bends, it holds, it breathes –
				  a faith unbroken, resilient and free:
				  this living heart – *absolute complete trust*.
			- ### Ba Bộ Mặt Của Tin
				- Bàn tay nửa mở nửa khum,
				  Cho mà giữ lại, ngập ngừng nghiêng lui.
				  Nghi ngờ như bóng theo đuôi,
				  Chỉ cần sức nặng, rã rời dây liên.
				  Mỏng manh mặt ấy hiện lên –
				  *Niềm tin dở nửa* chênh vênh cõi người.
				- Đưa chân mắt nhắm miệng cười,
				  Trao tim phó thác cho người chẳng nghi.
				  Mơ hồ giấc mộng khắc ghi,
				  Ngoài thì vững chãi, ruột thì rỗng không.
				  Sự thật đến, vỡ tan lòng,
				  Mù lòa sao chịu ánh quang sáng ngời.
				  Khô cứng mặt nạ một thời –
				  *Niềm tin tuyệt đối mù* rơi bóng mờ.
				- Rễ sâu bám đất đợi chờ,
				  Tre mềm đón bão chẳng nề ngả nghiêng.
				  Niềm tin mắt sáng hiện nguyên,
				  Tự mang trách nhiệm, chẳng phiền sợ chi.
				  Đón gian khổ, chẳng lẩn đi,
				  Dù cong dù thẳng, chẳng bì chẳng so.
				  *Niềm tin trọn vẹn*, chẳng rò –
				  Vững vàng tuyệt đối há lo lắng gì.
			- Names in Vietnamese
				- Half trust: niềm tin nửa vời (bán tín bán nghi)
				- Blind absolute trust: niềm tin tuyệt đối mù quáng
				- Absolute complete trust: niềm tin trọn vẹn tuyệt đối
		- Belief → {confidence, conviction; trust} → faith
		  collapsed:: true
			- Diagram
				- ![Types of Belief.png](https://docs.google.com/drawings/d/e/2PACX-1vTRnYMwhdM4PSEUxareVmvH6V3Al87Lj9lvghDpWma7pg70AZqMP_gt1iUgUBu2QOwn1vb3gTfSvT09/pub?w=360)
			- **Belief**: **Holding** something to be **true**; intellectual **acceptance**, a judgment about reality.
				- **Confidence**: **assurance** or feeling of certainty; usually about oneself (self-belief), but also about others
				- **Conviction**: firm and **unwavering** belief
				- While both are strong belief, “confidence” is about practical competence, “conviction” is about principled truth.
					- “I am confident this **will** work / they **can** do it” versus
					- “I have conviction in this mechanism / their ability” = “I **know** this works / they're able to do it.”
			- **Trust**: Relationship and **reliability**: Reliance on someone/something with confidence
				- The confidence is usually a belief that _“it won't let me down”_.
				- However, a [wholesome trust](((68a595fa-385c-49a7-820f-67aa9db632d5))) should be based on the confidence of the trustor about its own acceptance of reality, and about the completeness of the life built upon trust.
			- **Faith**: Deeper than belief, broader than trust. It mixes conviction, trust, commitment, and usually with loyalty or devotion.
			- While English splits *belief / confidence / conviction / trust / faith* into separate roots, Vietnamese folds them back into **one root “tin”** (信), then fans it out with qualifiers (*tự, chắc, cậy, nhiệm, thác, lòng, đức*).
				- **Belief**: “niềm **tin**” (plain cognitive assent)
					- **Confidence**: “**tự** tin” (self-belief), “quả quyết” (assertion)
					- **Conviction**: “tin **chắc**” (certainty)
				- **Trust**: “tin **cậy**” (personal), “tín **nhiệm**” (social), “tín **thác**” (entrustment)
					- **Tín thác** = *tín nhiệm* (confidence in) + *phó thác* (entrustment)
					  Strong match for English *trust*, especially in the sense of “placing oneself in the care of another”.
				- **Faith**: “**lòng** tin” (heart-deepened), “**đức** tin” (virtue-elevated)
	- Jadedness' cause and way to liberate
	  id:: 689c0223-5aeb-4196-a2bd-04aaf4e8770d
	  collapsed:: true
	  :LOGBOOK:
	  CLOCK: [2025-08-13 Wed 12:37:02]
	  :END:
		- From [boredom](https://en.wikipedia.org/wiki/Boredom), pleasure/food cloyedness, to romantic disillusionment and even career burnout, the jadedness of people has shown the duality of pleasure and displeasure as well as the hidden fantasy in everyone.
		- Expectations & imaginative projection are the key of jadedness.
			- Expectation as an imagination bubble
				- People pre-load experiences with an imagined flavour based on signs (appearance, reputation, first impression).
				- The early enjoyment is partly *self-generated fantasy*, not reality-based content.
			- Reality's slow reveal
				- As the real texture of the thing emerges – the *actual* taste of the food, the *actual* rhythm of the work – it inevitably differs from the fantasy.
				- This difference erodes the imagined sweetness.
			- The emotional crash = jadedness
				- Once the imagined pleasure fades, people are left with a baseline reality they never truly connected to, so it feels flat or even unpleasant.
				- The “sweet imagination” being annihilated, leaving only the “bitter reality”, people feel jaded, bored, sated.
			- Liberation
				- By avoiding expectation, accepting reality, not clinging to the superficial forms, enjoying the deep content, refraining from imagination, we won't be jaded or sick of anything.
				- By avoiding expectation and refraining from imaginative projection, we will meet reality *as it is* from the start.
				- Our joy will come from engaging with the **deep content**, which doesn't wear out the way fantasies do.
				- Presence keeps the experience “alive” because we're always discovering, not measuring against a lost ideal.
		- Moderation is the way to avoid surfeit.
			- Not letting ourselve be fed up, we won't get sated.
			- Avoiding satiety, we won't get sick of anything.
	- Passive & active obop
	  id:: 68994c7c-695a-49db-aae6-e776186f6a85
	  collapsed:: true
	  :LOGBOOK:
	  CLOCK: [2025-08-11 Mon 11:15:27]
	  :END:
		- Active = circular effect flow = circle
		- Passive = linear effect flow = arrow
		- Passive input = unaware influence (out of view)
		- Passive output = uncontrolled actions ⇐ unaware
		- A passive i/o obop is a being lacking (mental) awareness, e.g. machine, program, function.
			- Lacking awareness, it cannot learn from experience (i/o).
			- The limited awareness of Turing machine limits its “learning” capacity to only data, not program, because that awareness is programmed by human.
		- [?] How does passiveness relate to the ((684f9517-6989-49cc-9b06-360965c446f7))?!
	- While the Buddha talked about the **self**, i contemplate the **form** and the **order**.
	  id:: 68994c7c-335a-4a31-836b-ff7fa9bb3e67
	  collapsed:: true
	  :LOGBOOK:
	  CLOCK: [2025-08-11 Mon 11:15:22]
	  :END:
		- Ultimate truth: the permanent self is an illusion; the form is an image; the order is relative (circular).
		- Pragmatic application:
			- observing the relativity of the order, the formation of the form, and the destruction of the self,
			- we practice not to blindly obey the order of the crystal form of the karmic self.
			- To break the order of control, we must stop and [turn the eye back](((68898917-e61f-4d23-9124-474efa9a9eee))) to the intents, turning the intents from the role of subject/agent to object.
				- The intent behind the eye has **unconditional influence**, i.e. [passive input](((68994c7c-695a-49db-aae6-e776186f6a85))), on the current obop, like the controller of a puppet, because it's out of sight.
					- The control is determined by the view => out of view = out of control.
				- The empty center has the highest order because there's nothing left behind to control. To the empty center, everything is object, no more agent.
			- Because the empty center has higher order than the circled center (with form, self),
			- we practice relying on the empty center, the selfless obop, to let the crystal form be in contact with the formless content, so that it can be transformed easily.
				- When a form collides with another form, it resists change by trying to preserve its own form.
				- But when a form touches the content, it absorbs naturally, hence changes effortlessly.
		- These practices are just skillful means that applies the truth into our own life.
			- Without these skillful means, the self will still be destructed, the form and order will still be changed, but will take longer time and more sufferings.
	- Thread theory of sound
	  id:: 68872ffd-82c2-4612-841a-b19026fabe2a
	  collapsed:: true
	  :LOGBOOK:
	  CLOCK: [2025-07-28 Mon 15:44:46]
	  :END:
		- A [complex tone](https://en.wikipedia.org/wiki/Musical_tone) is like a bundle of [overtones](https://en.wikipedia.org/wiki/Overtone) (threads), and [pitch](https://en.wikipedia.org/wiki/Pitch_(music)) is the **greatest common factor** – the shared cycle.
		- Just like ((66f40210-cca6-4d81-85e7-d0c54ef20451)) finds the deepest **common structure** in seemingly separate threads, the ear finds the deepest common cycle among frequencies – the perceived pitch. This is shown best in the complex tones [missing fundamental frequency](https://en.wikipedia.org/wiki/Missing_fundamental).
		- Đàn bầu is played soley with [flageolet tones (pinched harmonics)](https://en.wikipedia.org/wiki/String_harmonic), which is an advanced technique on other instruments like violin, guitar, etc.
			- The sound is pure, glassy, and floating, because it's made entirely from string harmonics – no pressed tones. That's why the đàn bầu sounds so “airy” and “spiritual”.
	- DONE Continue with [planning](((67760c43-5cbd-4b4f-8fd9-5cedf804f56a))) to resolve [the conflict with company work](((6677b986-ada2-4c73-8a11-980cdf9cb6d4))).
	  id:: 6926be1c-549f-4657-9760-eed54a585661
	  collapsed:: true
	  :LOGBOOK:
	  CLOCK: [2025-07-03 Thu 15:26:42]--[2025-07-03 Thu 16:33:25] =>  01:06:43
	  CLOCK: [2025-10-01 Wed 10:50:09]--[2025-10-01 Wed 10:50:11] =>  00:00:02
	  :END:
		- First, plan the time of working hours.
			- A working day should start from official works instead of personal works.
				- This is a good strategy but difficult for me because the out-of-work thoughts from the last night will naturally continue in the morning, keeping me from focusing on other works.
				- So, let's try using breathwork and meditation to switch the flow of thought from personal to official works.
			- Previously, i designed a [⟪Back to Work!⟫ reminder](((67d2a63d-58de-4dbe-bbec-3ec8625737c7))) but ineffective.
		- Second, plan the space of thoughts.
			- Due to the ((681b3ad7-d1b0-4c06-a4ea-385a4a9314e0)) and various deep intents, all works, including official works and even the balancing work, will trigger meta-thoughts deeply related to ((66537a44-f579-4fcc-a02b-2f32d0d409fc)). So the time planning only is not enough.
				- My ((665379b7-e4f6-4240-8029-fd143e2230c7)) has already been supporting Unïnfo strongly: observing the intents & obops => expose them, detach them, and write them down to UniinfoNotes
				  collapsed:: true
					- I just flush my karma out to the Uniinfo: whatever i formulated, i'm free from it.
					- [!] But it has not supported the official works yet!
				- ⇒ Now, i must _**add official works** to my way_ for it to be more balanced: observing the requirements, the schedules and deadlines, etc.
				- ⇒ [reduce self-circle](((669a5162-19e1-4c52-8888-ab7cbfe275ec))): reduce the radius of the core back to its **currently wholesome region**, instead of expanding to the distorted regions (fringe) around.
				  id:: 686e0e73-d3cc-4250-804f-94a270b92fd9
					- The fringe contains lots of “hairs” of tendency which attract stimuli and [awaken dormant intents](((686cc8c2-9215-4b84-840e-def48efd9447))).
					- These “hairs” of tendency are the attitudes, emotions, feelings deep inside.
					- Model of the fringed core
					  collapsed:: true
						- ![straw-raffia-placemats-with-fringe-natural.png](../assets/Will/story/2025-07/straw-raffia-placemats-with-fringe-natural.png){:width 200}
			- **Assessment** is required for all thoughts & tasks: distance from herenow, relationship with others, degree of interest, applicable domains (personal, official, group, mankind), etc.
		- DONE October 1st, after full 3 months, no surprise, it's been proven that planning is not for me. The [intent observation](((6889c11f-e881-432f-ba0f-876b61afc60c))) and [full engagement](((68be8447-81b0-4094-9964-1bd21e2e31e0))) are still best suited for me.
		  :LOGBOOK:
		  CLOCK: [2025-10-01 Wed 10:39:06]
		  CLOCK: [2025-10-01 Wed 10:39:20]--[2025-10-01 Wed 10:49:17] =>  00:09:57
		  :END:
	- WAIT [long. ((67fcbbc6-915b-4d28-b9cf-098e916cdc86)) ⊥ ((67ed2855-1512-4db0-bc61-f714ea891106))] = [exp map](https://en.wikipedia.org/wiki/Exponential_map_(Lie_theory)) [real ⊥ imaginary]
	  id:: 67fe23f7-3afe-4e77-be1d-fa8a15416bc3
	  collapsed:: true
	  :LOGBOOK:
	  CLOCK: [2025-04-15 Tue 16:43:57]
	  :END:
		- Longitudinal (tangential) flow, [divergence](https://en.wikipedia.org/wiki/Divergence) = $\exp(real)$, is the normal flow from sources to sinks, which is an image of a meta flow circulating through higer dimensions.
		- Transverse flow, [curl](https://en.wikipedia.org/wiki/Curl_(mathematics)) = $\exp(imaginary)$, is the ((67fcbee7-da00-45d8-bb21-deefb95d164e)), rotation, circulation, curl around the sources in object space.
		- The separtion into these 2 orthogonal components is the [Helmholtz decomposition](https://en.wikipedia.org/wiki/Helmholtz_decomposition).
		- [differential form](https://en.wikipedia.org/wiki/Differential_form) captures the notion of **rotation** via [exterior product](https://en.wikipedia.org/wiki/Exterior_product) and extends it to $k$ dimensions with $k$-forms.
		- [Hodge dual](https://en.wikipedia.org/wiki/Hodge_star_operator#Duality) captures the **orthogonal complements** real ⊥ imaginary
		- Fundamental theorem of multivariate calculus: [Stokes–Cartan theorem](https://en.wikipedia.org/wiki/Generalized_Stokes_theorem)
		  id:: 6835b162-293f-4b8c-8be2-2dbe83b741ce
		  collapsed:: true
			- $\int_{Ω}{dω} = \int_{∂Ω}{ω}$
			- volume integral of sources within $Ω$ = boundary integral of flow on/through $∂Ω$
				- the [exterior derivative](https://en.wikipedia.org/wiki/Exterior_derivative) $dω$ captures the source of the flow.
				- the differential form $ω$ captures the flow on/through the boundary $∂Ω$ of the orientable manifold $Ω$.
			- circular flow: source $dω$ = curl $∇×F$ of vector field $F$
				- flow on $∂Ω$: in 1D, it's a simple 1-form $ω_1 = \mathbf{F}⋅d\mathbf{r} = F_x dx + F_y dy + F_z dz$
					- in higher dimensions, the ($n-1$)-form is difficult to formulate, 
					  e.g. $ω_2 = (F_y - F_x)dx∧dy  + (F_z - F_y)dy∧dz + (F_x - F_z)dz∧dx$
			- diverging flow: source $dω$ = divergence $∇⋅F$ of vector field $F$
				- flow through $∂Ω$ is an ($n-1$)-form which is Hodge dual of the 1-form, 
				  e.g. $ω_{3-1} = ⋆ω_1 = ⋆(\mathbf{F}⋅d\mathbf{r}) = \mathbf{F}⋅(⋆d\mathbf{r}) = F_x⋅ dy∧dz + F_y⋅ dz∧dx + F_z⋅ dx∧dy$
			- [Green's theorem](https://en.wikipedia.org/wiki/Green%27s_theorem#Relationship_to_the_divergence_theorem) beautifully captures both curl and divergence by simply turning the basis a right angle: $(dx, dy)$ for curl → $(dy, -dx)$ for divergence.
			- When $Ω$ is 1D, i.e. a line segment, this becomes the fundamental theorem of calculus: 
			  $\int_{a}^b{df} = \int_{a,b}{f} = f(b) - f(a)$
			- Considering zeros & poles of $f(z)$ on the complex plane to be sources, we can prove the [fundamental theorem of algebra](https://en.wikipedia.org/wiki/Fundamental_theorem_of_algebra), by counting [winding number](https://en.wikipedia.org/wiki/Winding_number) of $f(C)$ for the circle $|z| = R$ with $R: 0 → ∞$.
			  collapsed:: true
				- [Argument principle](https://en.wikipedia.org/wiki/Argument_principle): number of zeros - poles = contour integral of the function's [logarithmic derivative](https://en.wikipedia.org/wiki/Logarithmic_derivative).
				  $$ {\frac{1}{2πi}} \oint_{C} {f'(z) \over f(z)} \,dz = Z-P $$
				- [Residue](https://en.wikipedia.org/wiki/Residue_(complex_analysis)) theorem: residue $R = \operatorname{Res}(f,s_k)$ for $k$-th isolated singularity $s_k$ of $f$ is the unique value such that $f(z)−R/(z−a)$ has an analytic [antiderivative](https://en.wikipedia.org/wiki/Antiderivative_(complex_analysis))
				  $$ \operatorname{Res}(f,s_k)={1 \over 2πi} \oint_{\gamma} f(z)\,dz\ $$
				- [Cauchy's integral formula](https://en.wikipedia.org/wiki/Cauchy%27s_integral_formula): a [holomorphic function](https://en.wikipedia.org/wiki/Holomorphic_function) defined on a disk is completely determined by its values on the boundary of the disk
				  $$ f(a) =  {1 \over 2πi}\oint _{\gamma }{f(z) \over z-a}\,dz $$
				- Videos
				  collapsed:: true
					- [Video by TheGrayCuber](https://youtu.be/RBRVL6nP2Dk)
					  {{video https://youtu.be/RBRVL6nP2Dk}}
		- Refs
			- Differential Geometry course [Math 136 Fall 2024](https://people.math.harvard.edu/~knill/teaching/math136/) @ Harvard University
				- 12. [Exponential map](https://people.math.harvard.edu/~knill/teaching/math136/handouts/lecture12.pdf)
				- 13. [Curvature is Curl](https://people.math.harvard.edu/~knill/teaching/math136/handouts/lecture13.pdf)
		- TODO [?] Relation between curvature & curl?!
	- WAIT Conic rotations: rotation (circular) = flow (parabolic) = transformation (hyperbolic)
	  id:: 67ed2751-76d5-4bf1-9fc7-27c14ef6d1fa
	  collapsed:: true
	  :LOGBOOK:
	  CLOCK: [2025-04-02 Wed 19:06:19]
	  :END:
		- angle (area) = square of distance = log of scale
			- Circle (circular) = rotation = exponential → angle
			- Arrow (parabolic) = shift = flow = addition → distance (displacement)
			- Equal (hyperbolic) = transformation = product = projection = multiplication → scale
		- $\tan⋅\cot = 1 \;\; ⇔ \;\; \sin^2 + \cos^2 = 1 \;\; ⇔ \;\; φ + φ_c = ∟$ 
		  multiplication (hyperbolic) ⇔ exponential (circular) ⇔ addition (parabolic)
		- ((6716110c-1b10-41cc-9e26-c76ef782b6a3))
	- WAIT normed space + parallelogram law = inner product space
	  id:: 6819c526-4633-477b-ad2b-4f2b1b8f4bb0
	  collapsed:: true
	  :LOGBOOK:
	  CLOCK: [2025-04-02 Wed 19:53:56]
	  :END:
		- Sum of squares is just the [diagonalized version](https://en.wikipedia.org/wiki/Diagonal_form) of [quadratic form](https://en.wikipedia.org/wiki/Quadratic_form).
			- (Squared) norm and parallelogram law are relations on the diagonal (containing squares, at zero angle), whereas inner product is the relation at anywhere (any angle).
			- The dual view of inner product and matrix, whose diagonal contain squares, is also the dual view of projective thread and function graphing.
				- The matrix is just a “meta” of orthogonal coordinates.
				- Ref: ((67e37475-13e3-4a9f-af60-7bec7517c108))
		- Relations
			- parallelogram law ⇒ inner product ⇒ orthogonality ⇒ Pythagorean theorem
			- Pythagorean theorem + structure of inner product space ⇒ ((67ee0ea8-b68d-4adc-8d57-2f0a7be16d22)) ⇒ parallelogram law
		- TODO TODO Inner product of unit vectors = ((66f3c97f-94e8-4783-96c5-fe9cadf4f9a9))
		  id:: 67ee2e11-9371-4290-94c0-95f2e5bf8c54
		  :LOGBOOK:
		  CLOCK: [2025-04-03 Thu 14:01:54]
		  :END:
			- This is the ((67ee3a68-db55-49a9-947a-9399b4c3e3fa))
			  collapsed:: true
				- ![PipeWrapping-Denso-Korean-2009.jpg](../assets/Uniinfo/Unithread/PipeWrapping-Denso-Korean-2009.jpg)
			- From tangent ratio (angle 45°-90°), use the projective geometry technique of [“step back to look”](((67ee59c4-14c1-4184-ac8e-ba0b3569cacf))) $y = 1/(1+x)$, and by squaring, we turn it into inner product (angle 0°-90°): $\cos^{2}θ=1/(1+\tan^{2}θ)$
		- [parallelogram law](https://en.wikipedia.org/wiki/Parallelogram_law): $AB^2 + BC^2 + CD^2 + DA^2 = AC^2 + BD^2$
		  collapsed:: true
		  square sum of four sides = square sum of two diagonals
			- ⇐ Generalized: [Euler's quadrilateral theorem](https://en.wikipedia.org/wiki/Euler%27s_quadrilateral_theorem): $AB^2 + BC^2 + CD^2 + DA^2 = AC^2 + BD^2 + DP_D^2$
			  for any quadrilateral $ABCD$: square sum of four sides = square sum of two diagonals and deviation from parallelogram
				- Here, $P_D$ is the “parallelized point” of $D$, i.e., $ABCP_D$ is the parallelogram erected from the triangle $ABC$.
					- That means $DP_D$ is the deviation of $ABCD$ from the parallelogram $ABCP_D$.
				- When $M, N$ are midpoints of the two diagonals $AC, BD$, then $DP_D = 2MN$, and we have another formula:
				  $AB^2 + BC^2 + CD^2 + DA^2 = AC^2 + BD^2 + (2MN)^2$
					- This shows that the **deviation from parallelogram** can be calculated from any vertex of the quadrilateral $ABCD$:
					  $2MN = AP_A = BP_B = CP_C = DP_D$ = deviation from parallelogram
			- ⇒ Specialized: [Pythagorean theorem](https://en.wikipedia.org/wiki/Pythagorean_theorem): $AB^2 + BC^2 = AC^2$
			  for right angle $∠ABC = 90°$
	- WAIT 0 sum = neutralization of positive and negative 
	  id:: 678df0f0-20d2-4995-bfc2-0b953970469d
	  collapsed:: true
	  :LOGBOOK:
	  CLOCK: [2025-01-20 Mon 13:45:06]
	  CLOCK: [2025-02-10 Mon 10:19:18]
	  :END:
	  vs. ∞ sum = abstraction of complex objects into points
		- The neutral point (0) is absolutely "nothing" due to its extent = 0, i.e. a point, while the abstract space (∞) is just a [thin air](((671d06ba-cb96-4424-9bee-4e6327ba7f9d))) of possibilities.
	- [high momentum due to spring doll](((6846c7e1-239c-4b39-9ef4-9d2eaba17a52))) ≈ large momentum of massive objects
	  id:: 685bb3fb-9d35-41ec-95ab-97738ea473c2
	  collapsed:: true
	  :LOGBOOK:
	  CLOCK: [2025-06-25 Wed 15:36:01]
	  :END:
		- Both are caused by the long thread of intent, while mine is more tree-like structured, the mass thread of objects just coils up in the mass body.
		- My intent thread is long due to not only the depth (height of tree), but also its coiling in the nodes which is the energy accumulated in the past. When disconnected, these coils just sleep like batteries, waiting to release when connected.
		- Thanks to these coils, the intent threads are not lost when disconnected
		  ⇒ resolve my delusion & fear of losing the works (sunk-cost fallacy)
		- My momentum is harder than the massive object due to not only its depth but also my attachment to continuity, smoothnes, connectivity, integrity, and my scare of messiness, scattering, ignorance. This is again the ((681b3ad7-d1b0-4c06-a4ea-385a4a9314e0))!
		  id:: 685bb77c-4502-4261-a3a3-a726980d1a50
			- My bro's [rhetorical question](https://en.wikipedia.org/wiki/Rhetorical_question) echoes: 
			  > Can you do it without understanding?!
			- This scare has been from my childhood: due to my small memory, i must always tidy up everything, digest them, organize them tightly.
			- And the attachment is due to my greed of getting everything!
	- About the [hurricane's eye](((681826ad-768c-4671-b575-0d9f8ca64c6b))) 🌀: ((69086748-b6e9-47c0-810b-4a92f882d6bc)) = ((66c8772a-9b29-45b0-b169-2fa847333e02)) = [Nibbāna/Nirvāṇa](https://en.wikipedia.org/wiki/Nirvana) = selfless obop = zero-limit of ((94e87dc9-71af-477c-aa70-0f448c2f1e20))
	  id:: 684f9515-8f95-4004-8aa8-04a10d1ebf11
	  collapsed:: true
	  :LOGBOOK:
	  CLOCK: [2025-05-16 Fri 13:44:40]
	  :END:
		- The [cyclone](https://en.wikipedia.org/wiki/Cyclone) and its [eye](https://en.wikipedia.org/wiki/Eye_(cyclone)) is a powerful image that i've used a lot from the begining of the balancing journey, and was first written down in the blog post “[3 cấp độ Định](https://creatzynotes.blogspot.com/2021/03/3-cap-o-inh.html)”.
		- Cyclone and [bubble ring](https://en.wikipedia.org/wiki/Bubble_ring) are used to show the union of Circle and Arrow, as the **self-sustained subject** and **singularity**.
		- Contemplating the cyclone, i see the ((6810ceeb-6af6-442b-9910-baae2c315c46)), the central obop, [the role of wholeness](((66f29d57-a87f-4370-9f32-722922a7bff1))) in awareness and action, etc.
			- Being at the center of the self, the central obop is the nexus of communication and interaction for all components of the self-circle. It's the knot of effect threads and the focal point of effect flows within the self-circle.
			  id:: 6867abcb-4e1c-493e-a38d-c7b8809dd6ad
			- The more mature [the self becomes](((690827cf-c19e-4fc4-ba25-5d225afe06ae))), the thinner its central obop is, until completely emty.
		- Thanks to its zero intent, the empty center = self-essence = Nibbāna = the non-self (Anattā) has infinite extent coverring everything, hence the great Self (Ātman).
		- The empty center is an **ideal obop**, an obop without self/intent, a “selfless obop”, i.e. the limit of obop when its intent approaches zero.
		  id:: 68665be1-f6a9-4121-859a-ec43ae37b5bf
			- The emtpy self-essence is just a focal point, a ((66728236-5b19-425c-bb5f-dfc0dc8b79fd)), an abstraction, not a concrete self.
			- Being focused & projected from the ((669a5387-2a97-4311-a295-aa0afd9c4d76))s around, the self-essence (as an empty center) cannot exist on its own. In other words, the self-essence itself has no essence.
			- When the self components all align and focus to the empty center, such a virtual point can be very stable, because it's stablized by the whole self-circle.
				- An interesting example is the [spherical flexure joint](((68c76471-4656-43c9-8f5a-76b25a33b9d0))).
			- The “invisible self-essence”, usually called “Nibbāna”, is immanent in everything. In other words, everything has a self-essence which is empty. This immanence is because nothing can obstruct a thing with zero intent, thus the zero-intent Nibbāna permeates everything.
			- Though empty, the central role of the self-essence in the self makes it essential to every self.
				- All parts of the self-circle are integrated by focusing on the same center. Via that center, they all are one, seeing/feeling/treating each other as the same ((66c810a0-9861-4787-bdcf-1378219332be)) of self.
				- When a self-circle loses its center, it just ceases to exist as itself and disintegrates into smaller circles.
				- Such essence of the empty center can be seen in the hub of the wheel.
					- [wheel of dharma](https://en.wikipedia.org/wiki/Dharmachakra)
						- ![Dharma_Wheel.svg](../assets/Uniinfo/Metaphysics/Dharma_Wheel.svg){:width 100}
					- #+BEGIN_QUOTE
					  “Thirty spokes are put together into one hub,
					  such a vacant hub makes the wheel useful.”
					  「三十輻共一轂，當其無，有車之用。」
					  #+END_QUOTE 
					  — [Chapter 11. The usage of the vacancy](https://en.wikisource.org/wiki/Translation:Tao_Te_Ching#Chapter_11_(%E7%AC%AC%E5%8D%81%E4%B8%80%E7%AB%A0)) ([DDK11](https://nhantu.net/TonGiao/DaoDucKinh/DDK11.htm)), Tao Te Ching
			- In a ((6851578b-9b1f-4367-878f-79b0b0b9be51)) with multiple layers of self-circle,
				- each self-circle has an obop which is just another self-circle inside, and
				- the limit of this inward stepping is the self-essence, i.e. the apex of the double cone.
		- ((6667abd2-14eb-4145-b9e3-e6f3037b3117))
		  id:: 686670ae-d62c-4a7a-901b-a651027352b6
		  collapsed:: true
			- In Sep 2024, from the [chat with Huy](((681826b0-6116-418e-8aa1-188314a5eac6))), i added [a task](((66faa5fa-b843-490d-a7b3-a2400c11be86))) to...
				- write blog post "[Cái Thức thanh tịnh nơi Mắt bão](https://creatzynotes.blogspot.com/2024/09/cai-thuc-thanh-tinh-noi-mat-bao.html)";
				- brainstorm: ((66f29d57-a87f-4370-9f32-722922a7bff1)); and
				- write discussion: ((673312a3-e94e-478f-9e21-bad72ef29d1b))
				- But that task was interrupted and abandoned. Later on, these documents have been slowly updated and some are still stubs until now, 2025/05/16.
			- In [the second experience of drowning via cough reflex](((67dcc012-44d3-4041-b17a-0ef201b3ff6c))) in April 2025, ((684f951a-b5ca-44a7-b9a3-df1538310721))
			- In May 2025, while contemplating ((681b24ad-2ec8-4e9f-bef6-eb77b09b5c9c)), i see [a solution](((681b4678-686a-4d99-9163-6f60e0b30d2c))) to my issue of perfectionism is to sublimate the ((681b3ad7-d1b0-4c06-a4ea-385a4a9314e0)) to restore the self to the hurricane's eye = empty center = ((66c8772a-9b29-45b0-b169-2fa847333e02)) = Nibbāna = the [non-self](https://en.wikipedia.org/wiki/Anatt%C4%81)
			  id:: 684f9515-6b8f-4281-bce0-f396259e640b
			- Today, 2025/07/03, i've just finished this brainstorm about the hurricane's eye 🌀.
			  :LOGBOOK:
			  CLOCK: [2025-07-03 Thu 19:48:29]
			  :END:
		- Pronunciations of Nibbāna & Nirvāṇa in various languages
		  id:: 686fab17-f305-4524-834e-8a3ecdc89865
		  collapsed:: true
			- “Nibbāna is Nirvāṇa” with Google Translate voice
				- Hindi: निब्बान निर्वाण है।
				  Nibbaan Nirvaan hai.
				  ![Nibbana-is-Nirvana-Hindi.mp3](../assets/Will/story/2025-07/Nibbana-Nirvana/Nibbana-is-Nirvana-Hindi.mp3)
				- Bengali: নিব্বান হলো নির্বাণ।
				  Nibbāna halō Nirbāṇa.
				  ![Nibbana-is-Nirvana-Bengali.mp3](../assets/Will/story/2025-07/Nibbana-Nirvana/Nibbana-is-Nirvana-Bengali.mp3)
				- Sinhala: නිවන යනු නිර්වාණයි
				  Nivana yanu Nirvāṇayi
				  ![Nibbana-is-Nirvana-Sinhala.mp3](../assets/Will/story/2025-07/Nibbana-Nirvana/Nibbana-is-Nirvana-Sinhala.mp3)
					- නිවන (nivana), නිවණ (nivaṇa) = Nibbāna
					- නිර්වාණ (nirvāṇa) = Nirvāṇa
						- -යි (yi): sentence-final particle for assertion/emphasis
						- -ය (ya): a common Sinhala nominalizer (like “-ness” or “-tion” in English)
							- නිර්වාණය = The Nirvāṇa
	- From the Eastern 自由 “tự do” to the Western “freedom”, back to 自由自在, 自然
	  id:: 684f9515-9c97-4447-8211-a65dfe914822
	  collapsed:: true
	  :LOGBOOK:
	  CLOCK: [2025-05-06 Tue 13:15:54]--[2025-05-06 Tue 15:17:03] =>  02:01:09
	  :END:
		- [自由](https://en.wiktionary.org/wiki/%E8%87%AA%E7%94%B1#Japanese) = 自 (self) + 由 (cause, from) originally meant “caused by oneself” (“do mình”) or generally “arising from oneself” (“từ mình”).
			- In [Taoism](https://en.wikipedia.org/wiki/Taoism), 自由 is the liberated state of saints where all actions are taken placed naturally, spontaneously, detached from external constraints.
			- In [Confucianism](https://en.wikipedia.org/wiki/Confucianism), 自由 is the result of self-cultivation such that all virtuous conduct and duty are done naturally by oneself, without being subject to external forces or authorities.
			- The idiom [自由自在](https://en.wiktionary.org/wiki/%E8%87%AA%E7%94%B1%E8%87%AA%E5%9C%A8) means “free and easy”, “effortless” which is also the meaning of 自然 and 無為.
				- 自在 also originally meant “caused by oneself” (“tại mình”) and [“at/in oneself”](https://en.wiktionary.org/wiki/being-in-itself) (“ở chỗ mình”), and now means “free, comfortable, at ease”.
				- [自然](https://en.wiktionary.org/wiki/%E8%87%AA%E7%84%B6) means [“selfly”](https://en.wikipedia.org/wiki/Ziran), “as it is”, hence “naturally”.
					- Tao Te Ching, [Ch.25](https://en.wikisource.org/wiki/Translation:Tao_Te_Ching#Chapter_25_(%E7%AC%AC%E4%BA%8C%E5%8D%81%E4%BA%94%E7%AB%A0)) ([DDK25](https://nhantu.net/TonGiao/DaoDucKinh/DDK25.htm)): 人法地，地法天，天法道，道法**自然**。
				- [無為](https://en.wiktionary.org/wiki/%E7%84%A1%E7%82%BA) means [“no [forceful/intentional] action”](https://en.wikipedia.org/wiki/Wu_wei), hence “effortless”.
					- Tao Te Ching, [Ch.48](https://en.wikisource.org/wiki/Translation:Tao_Te_Ching#Chapter_48_(%E7%AC%AC%E5%9B%9B%E5%8D%81%E5%85%AB%E7%AB%A0)) ([DDK48](https://nhantu.net/TonGiao/DaoDucKinh/DDK48.htm)): 無為而無不為。
					- Blog post [Vô vi, tánh Không, trống rỗng, vacantness](https://creatzynotes.blogspot.com/2022/03/vo-vi-tanh-khong-trong-rong-vacancy.html)
					  collapsed:: true
						- 無為非不為，無為而無不為。
						  Vô vi phi bất vi, vô vi nhi vô bất vi.
						  Làm "Không" chẳng phải là không làm,
						  làm "Không" mà chẳng có việc chi là không làm.
						- Chương 48. Vong tri (Quên đi cái Biết), Đạo Đức Kinh
							- Học nhiều càng lắm rườm rà,
							  Càng gần Đạo cả càng ra đơn thuần.
							  Xả buông rồi lại xả buông,
							  Bụi trần rũ sạch còn thuần Vô vi.
							- Vô vi huyền diệu khôn bì,
							  Làm "Không" mà chẳng việc chi không làm.
							  Vô vi mà được thế gian,
							  Càng xoay xở lắm đời càng rối beng.
		- 自由 was repurposed in the 1860s by [Fukuzawa Yukichi](https://en.wikipedia.org/wiki/Fukuzawa_Yukichi) as a translation of English [“freedom”](https://en.wiktionary.org/wiki/freedom#English) or “liberty”, as an extension of the original meaning: “freedom to act according to one's own thoughts, without restriction”.
		- Some Western philosophers like Nietzsche, Sartre also define “freedom” in a very Eastern way.
			- Nietzsche defines having a sense of freedom with being responsible for one's own life.
			- Freedom and Responsibility in Existentialism: Sartre's “condemned to be free”: Individuals have radical freedom to define themselves through choices, but this freedom comes with the burden of responsibility.
	- Turning negativity to positivity through the etymology of “occation” ← “occidō” (fall down)
	  collapsed:: true
	  :LOGBOOK:
	  CLOCK: [2025-05-06 Tue 12:47:35]--[2025-05-06 Tue 13:08:23] =>  00:20:48
	  :END:
		- **Etymology**: English [“occation”](https://en.wiktionary.org/wiki/occasion#English) (opportunity) ← Latin [“occasio”](https://en.wiktionary.org/wiki/occasio#Latin) (opportunity, right time) ← Latin [“occāsus”](https://en.wiktionary.org/wiki/occasus#Latin) ([Sun] setting) ← Latin [“occidō”](https://en.wiktionary.org/wiki/occido#Latin) (fall down, [Sun] set down, die, pass away, be lost/ruined)
		- **Negative to Positive Flip in Etymology**: From "occidō" with negative senses (down, decline, death), it has been transformed to "occasio" with positive sense (opportunity).
		- **Perspective Flip**: Something "falling from heaven" is a good opportunity for humans down on Earth. The closing outside, like a black hole or a closing of a day, is the opening inside, like a white hole or an opening of a night.
		- **Convergence for Explosion**: The closing isn't just a negative end (death, decline); it's a convergence of conditions, like a sunset or a black hole collapsing externally, that sets the stage for an "explosion" of opportunity, like a sunrise or a white hole opening internally, a preparation for new beginnings (reborn, germination).
		- **Transformative Technique**: This flip can be applied as a mindset – viewing a "closing" (e.g., a failure or end) not as a negative end but as a convergence point that prepares for a new "opening" (e.g., a fresh start or opportunity).
	- From [logical “argument”](https://en.wikipedia.org/wiki/Argument) in philosophy to [“argument of function”](https://en.wikipedia.org/wiki/Argument_of_a_function) and then [“argument of complex number”](https://en.wikipedia.org/wiki/Argument_(complex_analysis))
	  id:: 680b6063-e454-4cf6-835e-d6f726b8b871
	  collapsed:: true
	  :LOGBOOK:
	  CLOCK: [2025-04-25 Fri 17:15:36]--[2025-04-28 Mon 20:17:48] =>  75:02:12
	  :END:
		- **Logical argument** is the one determining the degree of truth of a statement called “conclusion”.
			- ((669a1e5f-734c-41c1-bf1c-21813b6e81d8)) English “argument” ← “argue” ← French “arguer” ← Latin “arguere”: to make **reasoned** statements to prove or refute a proposition
			- Additional meaning in English: disagreement, dispute, quarrel
			  collapsed:: true
				- The original Latin “arguere” and French “arguer” don't have this meaning.
				- The spectrum of meaning:
				  [Reasoning end:] argue that, argue for/against, argue on, argue (direct object), argue about, argue over, argue (intransitive), dispute, quarrel [:Quarreling end]
					- “To argue (something)” is to give reasons for something, but not widely used.
					- “To argue about (something)” is neutral, but more about dispute.
				- In contrast to “argue”, “debate” orginally meant “fight over” but now means [formal argument](https://en.wikipedia.org/wiki/Debate).
					- ((669a1e5f-734c-41c1-bf1c-21813b6e81d8)) English “debate” ← French “débattre” = “de” (down) + Latin “battuere” (beat) = “beat down”
				- “Debate” versus [“disputation”](https://en.wikipedia.org/wiki/Disputation): while both include formal arguments about a topic, their goals are different: Debate is to refute the opponent, whereas disputation is to understand ideas better and to get closer to the truth.
			- Vietnamese:
			  collapsed:: true
				- “argument” (1): “lập luận”, “lý luận”, “lý lẽ”
				- “argument” (2): “tranh cãi”; “quarrel” = “cãi vã”
				- “debate”: “tranh luận”
				- “disputation”: “thảo luận”
		- Argument(s) of a function is/are the one(s) determining the result value of the function.
			- A logical statement is just a Boolean function $P: X → \{⊤, ⊥\}$ where $x ∈ X$ is the argument.
			- A function, [originally](https://en.wikipedia.org/wiki/History_of_the_function_concept) as a “container of variables and parameters” (“hàm”, 函), has (result) value determined by the values of the variables. That's why (independent) variable value(s) is/are the argument(s) of function.
		- Argument of complex number $φ = \arg(z)$ is the one determining the complexity of the number.
			- $z = r⋅\exp(i⋅φ) = r⋅e^{i⋅φ}$: beside constants $i, e$ and pararmeter $r$, the **argument** $φ$ is the one that determines how much “complex” $z$ is by the angular distance from the real axis.
			- Because the modulus $r$ is already the normal (real) number, the phase $φ$ is the critical component for the complexity.
			- Historically, astronomers had long ago used the term “argument” to indicate [the angle of the orbit plane](https://en.wikipedia.org/wiki/Argument_of_periapsis), which is the characteristic of the orbit.
		- Ref:
			- [Why We Use "Argument" In Describing Complex Angles](https://www.math.toronto.edu/mathnet/questionCorner/argument.html)
			  > To the best of our knowledge, the word argument was originally used by astronomers when referring to certain angles associated with orbits. ([argument of pericenter](https://en.wikipedia.org/wiki/Argument_of_periapsis))
	- Vietnamese phonemes
	  id:: 6809e1ea-1518-4460-be26-62881c47287f
	  collapsed:: true
	  :LOGBOOK:
	  CLOCK: [2025-04-24 Thu 14:02:37]--[2025-04-24 Thu 15:52:03] =>  01:49:26
	  :END:
		- Ref: [IPA Charts with Audio](https://jbdowse.com/ipa/) ([basic version](https://jbdowse.com/old-ipa/))
		- “đ” /ɗ/ → “d” /ɗ̠ʲ/ voiced [alveolo-palatal](https://en.wikipedia.org/wiki/Alveolo-palatal_consonant) implosive stop → /ʄ/ [voiced palatal implosive](https://en.wikipedia.org/wiki/Voiced_palatal_implosive) stop → /ˀj/ → /j/
			- /ɗ̠ʲ/ appears in [Bade language](https://en.wikipedia.org/wiki/Bade_language) where it's also heard like /ˀj/.
			- /ɗ̠ʲ/ appears in [Myene language](https://en.wikipedia.org/wiki/Myene_language) as a free variation of /dʒ/.
			- /ɗ̠ʲ/ is like 디 /d̠ʲ/ in Korean, but nearer to /j/
			- /ɗ̠ʲ/ is like д /dʲ/ in Russian, but nearer to /j/
			- /ʄ/ is in [Jinhui [金匯]](https://en.wikipedia.org/wiki/Jinhui_dialect) pronunciation of 家, as well as many other languages in Africa, [Sindhi/Saraiki language](https://en.wikipedia.org/wiki/Saraiki_language), etc.
			- /ˀj/ is pre-glottalized version of /j/, and appears in some languages in South East Asia.
				- [Lahu (La Hủ) language](https://en.wikipedia.org/wiki/Lahu_language) around China, Thailand, Myanmar, Vietnam and Laos.
				- [A Description of Kmhmu' Lao Script-Based Orthography](http://www.sealang.net/mks/mksj42.pdf)
			- Video [IPA 164 Voiced Palatal Implosive Stop ʄ](https://youtu.be/27WGLJCPWIk)
			  collapsed:: true
				- {{video https://youtu.be/27WGLJCPWIk}}
		- “v” /v/ → /ʋ/ → /bj/ → /βj/ → /j/
			- [/ʋ/](https://en.wikipedia.org/wiki/Voiced_labiodental_approximant) is between /v/ and /w/
				- ((6809ac03-30d3-4ba7-8b9b-17e13732f9dd))
	- The translation by $\vec{v} = (dx:dy:0)$ in [homogeneous coordinates](((67dcf2d3-4020-4477-b375-9bbb8c0b1336))) is actually a **rotation** due to its [*scale invariance*](((67e1004d-1533-483b-ab39-4b91ffbedbdd))) throughout all z-scaled planes: $\vec{v}_z = \overrightarrow{(dx⋅z,\, dy⋅z)}$ [on plane $z≠0$] $= \vec{v} = \overrightarrow{(dx, dy)}$ [on the standard plane $z = 1$].
	  id:: 67e0fb13-1c89-4f27-825e-02027f368fa2
	  collapsed:: true
	  :LOGBOOK:
	  CLOCK: [2025-03-24 Mon 13:59:25]--[2025-03-31 Mon 18:40:44] =>  172:41:19
	  :END:
		- This is a parabolic rotation ([shear mapping](https://en.wikipedia.org/wiki/Shear_mapping)): ((67b541c9-dbe4-4b0f-a2a8-810805bbfce8))
		- circular θ > parabolic φ > hyperbolic ψ
		  id:: 67e29bdb-9bce-4cb8-b993-79aa130a1831
			- The circular rotation is on the ((675f8a74-7fef-4e88-a65e-856f5e494bb8)), the parabolic rotation is on the ((675f8af0-7b21-4483-908c-25ce0cec02cc)), and the hyperbolic rotation is on the squeezed unwrapped circumference plane.
			- Parabolic rotation = [shear](https://en.wikipedia.org/wiki/Shear_mapping), with **parabolic angle = shear factor** $s = \tan(φ)$
			  $(x, y) → (x, \; y + s⋅x)$
				- φ is the (circular) angle between the radial (sheared) line and the horizontal line.
			- Wrapping $s$ around the unit circle, we have the circular rotation with **circular angle** $θ = s \mod 2π = \tan(φ) \mod 2π$.
			- The corresponding hyperbolic rotation can be constructed in 2 ways:
			  id:: 67e2a0e0-a6d9-4ad8-a601-24289f44d383
			  :LOGBOOK:
			  CLOCK: [2025-03-25 Tue 20:47:33]--[2025-03-25 Tue 20:57:06] =>  00:09:33
			  :END:
				- **Area sync**: hyperbolic angle $ψ = s$
					- The [hyperbolic angle](https://en.wikipedia.org/wiki/Hyperbolic_angle) $ψ$ is defined to be double the area of the corresponding hyperbolic sector.
						- Actually, this definition is the same for all conic angles agains conic sectors.
					- Hyperbolic rotation is a [squeeze](https://en.wikipedia.org/wiki/Squeeze_mapping) with **squeeze factor** $k = e^ψ$ which is the up-scale factor along $x = y$ and the down-scale factor along $x+y=0$.
					- The corresponding (circular) angle $ψ_c$ between the radial (squeezed) line and the horizontal line: 
					  $\tanh(ψ) = \tan(ψ_c)$
				- **Edge sync**: Project the shear line up to the light cone $z = \sqrt{x^2 + y^2}$, then project to xOz plane, then reflect back to xOy plane, i.e., the sheared line is mirrored into the horizontal line:
				  $\tanh(ψ) = \tan(ψ_c) = \sin(φ) = s/\sqrt{1+s^2}$
					- This is the [“function mapping view”](((67e37475-13e3-4a9f-af60-7bec7517c108))) of the shear where the shear is considered a projective thread.
			- Rotations as flows on conic grids
			  id:: 684f951a-4c9b-45c1-80b0-dc10d12a2dbb
				- On polar grid, the circular rotation moves objects along the “vertical” lines, i.e. concentric circles $x^2 + y^2 = r^2$. These circles are “vertical” relative to the horizontal x-axis.
				  id:: 67e64337-65df-48fd-af37-3ee21245e154
				- On Cartesian grid, the y-parabolic rotation moves objects along the vertical lines $x^2 = r^2$, and x-parabolic rotation along the horizontal lines $y^2 = r^2$.
				- On hyperbolic grid, the standard hyperbolic rotation moves objects along the “vertical” lines $(x^2 - y^2)^2 = r^4$, and the standard squeeze mapping along the “horizontal” lines $(2xy)^2 = r^4$.
				- These grids are the conic version of [orthogonal coordinates](https://en.wikipedia.org/wiki/Orthogonal_coordinates) which are the most common cases of [curvilinear coordinates](https://en.wikipedia.org/wiki/Curvilinear_coordinates).
				  collapsed:: true
					- While the **shear** is *usually thought as unidirectional*, its **bidirectional** nature, i.e. rotating around the origin, is stressed with the pair of lines (a degenerate parabola) $x^2 = r^2$ instead of single lines $x = r$.
					- Transforming the complex plane, we have similar grids (some with distortions):
						- **Cartesian grid** $(u+iv)$ is the standard complex plane.
						- **Polar grid** $\exp(\ln u+iv)$ has circles expanding uniformly against $u$.
							- The [log-lin](https://en.wikipedia.org/wiki/Semi-log_plot#log%E2%80%93linear_plot) grid $(\ln u+iv)$ is useful for data with exponential relationships.
							- [Log-polar grid](https://en.wikipedia.org/wiki/Log-polar_coordinates) $\exp(u+iv)$ has circles expanding exponentially against $u$, i.e., the coordinate $u$ is the logarithm of the radius of the corresponding circle on the grid.
						- **Hyperbolic grid** $\sqrt{u^2+iv^2}$ has hyperbolas spacing uniformly against $u, v$.
							- **Squared hyperbolic grid** $\sqrt{u+iv}$ has hyperbolas spacing in square roots of $u, v$, i.e., coordinates $u, v$ are squares of the distance from the corresponding hyperbola on the grid to the origin.
					- Notes:
						- Don't confuse the Cartesian grid $(u+iv)$ with the [“parabolic grid”](https://en.wikipedia.org/wiki/Parabolic_coordinates) $(u+iv)^2$.
						- The [“radial hyperbolic coordinates”](https://en.wikipedia.org/wiki/Hyperbolic_coordinates) is different from the “orthogonal hyperbolic coordinates” above in that the “vertical lines” are radial lines $x/y = e^{2r}$, instead of hyperbolas $(x^2 - y^2)^2 = r^4$. This grid with radials is not orthogonal and is used in relativity physics.
						  id:: 684f951a-cb78-405b-b763-e9e7edfd5414
						- It's interesting that as late as 2015, there was still a paper to “present and construct a new kind of orthogonal coordinate system, hyperbolic coordinate system”: [Hyperbolic-symmetry vector fields](https://www.researchgate.net/publication/286403709_Hyperbolic-symmetry_vector_fields).
			- The conic rotations are special cases of the Lie group [SL(2,ℝ)](https://en.wikipedia.org/wiki/SL2(R)).
			  collapsed:: true
				- All actions in this group are [classified](https://en.wikipedia.org/wiki/SL2(R)#Classification_of_elements) into elliptic, parabolic, and hyperbolic rotations (may be nonstandard: different axis, scaled).
				- The flows are [Lie exponentiations](https://en.wikipedia.org/wiki/Exponential_map_(Lie_theory)) of generators:
					- Elliptic: $G_c = \begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix} \; ; \; \exp(θG_c) = \begin{bmatrix} \cos θ & -\sin θ \\ \sin θ & \cos θ \end{bmatrix}$
					- Parabolic: $G_{py} = \begin{bmatrix} 0 & 0 \\ 1 & 0 \end{bmatrix} \; ; \; \exp(sG_{py}) = \begin{bmatrix} 1 & 0 \\ s & 1 \end{bmatrix}$ (the same for $G_{px}$)
					- Hyperbolic: 
					  $G_h = \begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix} \; ; \; \exp(ψG_h) = \begin{bmatrix} \cosh ψ & \sinh ψ \\ \sinh ψ & \cosh ψ \end{bmatrix}$
					  $G_a = \begin{bmatrix} a & 0 \\ 0 & 1/a \end{bmatrix} \; ; \; \exp(ψG_a) = \begin{bmatrix} e^ψ & 0 \\ 0 & e^{-ψ} \end{bmatrix}$
		- In 2D, parabolic rotations can be used to compose both circular and hyperbolic rotations.
		  id:: 67e238fb-771f-483d-a04a-badff7c7c70a
			- 4 triples of parabolic rotations equivalent to circular and hyperbolic rotations:
			  id:: 67e6168e-ff58-4d9d-94a7-6fee6f533044
				- x-y-x triples
					- $R(θ) = S_x(−\tan(θ/2))⋅S_y(\sin(θ))⋅S_x(−\tan(θ/2))$
					- $H(ψ) = S_x(\tanh(ψ/2))⋅S_y(\sinh(ψ))⋅S_x(\tanh(ψ/2))$
				- y-x-y triples
					- $R(θ) = S_y(\tan(θ/2))⋅S_x(-\sin(θ))⋅S_y(\tan(θ/2))$
					- $H(ψ) = S_y(\tanh(ψ/2))⋅S_x(\sinh(ψ))⋅S_y(\tanh(ψ/2))$
				- These are so beautiful with symmetries! 😊
					- **H = tanh ⋅ sinh ⋅ tanh** for both triples
					- **R = (-/+)tan ⋅ (+/-)sin ⋅ (-/+)tan** for x-y-x / y-x-y
				- Here $S_x(k_x), S_y(k_y)$ are X & Y shears with shear factors $k_x, k_y$ (parabolic angles), and $R(θ), H(ψ)$ are circular and hyperbolic rotations with angles $θ, ψ$.
			- A circular rotation [can be decomposed](https://en.wikipedia.org/wiki/Rotation_matrix#Decomposition_into_shears) into 3 parabolic rotations, or 2 parabolic rotations + squeeze.
				- Video: [Rotation by shearing](https://youtu.be/tHekokkHmlM)
				  collapsed:: true
					- {{video https://youtu.be/tHekokkHmlM}}
				- Video: [Rotation without rotating](https://youtu.be/1LCEiVDHJmc) for the good old low resolution Mario sprite.
				  collapsed:: true
					- {{video https://youtu.be/1LCEiVDHJmc}}
		- GeoGebra applets
		  id:: 67e299fa-4f76-482a-b586-adacb17dc064
			- [HyperbolicRotation](https://www.geogebra.org/m/qhgvaamt)
			- [ConicRotations](https://www.geogebra.org/m/d67tfadb) for ((67e29bdb-9bce-4cb8-b993-79aa130a1831))
			- [ShearRotations](https://www.geogebra.org/m/mkwqufvk) to [compose circular & hyperbolic rotations](((67e238fb-771f-483d-a04a-badff7c7c70a)))
			- [ConicMetricTransform](https://www.geogebra.org/m/yrzmwxqv) to transform the angle metric between elliptic, parabolic, hyperbolic, through y-axis scaling
			  id:: 67ea7d5e-1cbe-4815-984d-d843d65d4b83
		- Components of the tranformation $R⋅ = (r⋅e^{idφ})⋅ = (r⋅ \overrightarrow{⟨dφ⟩})⋅$
		  id:: 684f951a-c14f-47f5-ac07-0cabb58cf089
			- radial component = scaling (multiplication, division): $⋅r$
			- transverse component = translation (addition, subtraction): $+dφ$
			  :LOGBOOK:
			  CLOCK: [2025-03-24 Mon 13:30:46]
			  CLOCK: [2025-03-24 Mon 14:16:57]
			  :END:
			- Note: don't confuse $\overrightarrow{⟨dφ⟩}$ with $d\overrightarrow{⟨φ⟩}$!
			  collapsed:: true
			  While $\overrightarrow{⟨dφ⟩}$ is unit vector around x-axis, $d\overrightarrow{⟨φ⟩}$ is a near-zero vector perpendicular to $\overrightarrow{⟨φ⟩}$.
				- $|\overrightarrow{⟨dφ⟩}| = 1 \; ; \; \arg(\overrightarrow{⟨dφ⟩}) = dφ$
				- $d\overrightarrow{⟨φ⟩} = d(e^{iφ}) = (e^{iφ})idφ = \overrightarrow{⟨φ⟩}i⋅dφ$
					- $|d\overrightarrow{⟨φ⟩}| = dφ \; ; \; \arg(d\overrightarrow{⟨φ⟩}) = φ+π/2$
			- Ref: ((67b541c9-3b4e-4429-8c35-9afaf9f434bf))
		- Vector = arrow = translation = $1 + Δ$ = $\lim_{n→∞}(1 + Δ/n)^n = e^Δ$
	- About [homogeneous coordinates](https://en.wikipedia.org/wiki/Homogeneous_coordinates)
	  id:: 67dcf2d3-4020-4477-b375-9bbb8c0b1336
	  collapsed:: true
	  :LOGBOOK:
	  CLOCK: [2025-03-19 Wed 09:46:39]
	  :END:
		- The homogeneous coordinates is created from the Cartesian coordinates, as the screen of projection, using the basic technique of projective geometry: “step back to look forward at the screen” or “fly up to look down at the screen”.
		  id:: 67ee59c4-14c1-4184-ac8e-ba0b3569cacf
		- Scale invariance: thanks to ratios $(x:y:z)$, instead of absolute values $(x,y,z)$, the homogeneous coordinates are unchanged throughout all z-scaled planes: $(x:y:z) = (x/z : y/z : 1)⋅z$.
		  id:: 67e1004d-1533-483b-ab39-4b91ffbedbdd
		- Point $P = (x_0 : y_0 : 1) = (x_0, y_0)$ [on Euclidean plane $z = 1$] $= P_z = (x_0⋅z : y_0⋅z : z)$ [for z-scaled Euclidean plane $z≠0$] $= (x_0 : y_0 : 1)⋅z =$ line $(x_0, y_0)⋅t$ [in 3D]
			- The scaler $z$ is the “**depth**” of the object, which is the **distance** from the object plane to the viewpoint, and is the height of the ((6672513b-c4b0-4c88-8b30-c60a3c6555a7)).
			- An object at $(x,y,z)$ in 3D space is projected onto the “screen” of Euclidean plane as an image at $(x/z:y/z:1)$.
			- The image of P on a z-scaled plane is $P_z = (x_0⋅z : y_0⋅z : z)$
		- Vector $\vec{v} = (dx:dy:0) = \overrightarrow{(dx,dy)}$ [on Euclidean plane $z = 1$] $= D⋅P$ with ((67dd6cb0-7522-427c-b714-5dd53a678b8d)) and any point $P$ on Euclidean plane $z = 1$
			- Vector = “depthless” point = absolute point (point on the absolute plane $z = 0$) = point on the horizon = 
			  [point at infinity](((67dd6f28-2497-4a11-bd16-afd31f24eaa4))) (vanishing point)
				- The absolute plane $z = 0$ corresponds to the **horizon**, or the Cayley absolute, which is the **limit circle**, the null plane, the light cone.
			- Its magnitude (length) is defined at the standard plane $z =1$, and is scaled accordingly in other z-scaled planes, i.e., on plane $z≠0,\; \vec{v}_z = (dx:dy:0)⋅z = \overrightarrow{(dx⋅z,\, dy⋅z)}$.
		- Translation $T = I + D  ⇒  T⋅P = I⋅P+D⋅P = P + \vec{v}$
		  collapsed:: true
			- Identity matrix $I$
			  $$ I = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 &  0 \\ 0 & 0 & 1 \end{pmatrix} $$
			- Displacement matrix $D$
			  id:: 67dd6cb0-7522-427c-b714-5dd53a678b8d
			  $$ D = \begin{pmatrix} 0 & 0 & dx \\ 0 & 0 &  dy \\ 0 & 0 &  0 \end{pmatrix} $$
		- Line $l = (x_0+dx⋅t : y_0+dy⋅t : 1) = (x_0+dx⋅t,\; y_0+dy⋅t)$ [on Euclidean plane $z = 1$] $=$ plane [in 3D]
		- Point at infinity = limit point of line $l$ = $\lim_{t→∞}(x_0+dx⋅t : y_0+dy⋅t : 1) = \lim_{t→∞}(x_0/t+dx : y_0/t+dy : 1/t) = (dx:dy:0) =$ vector $\vec{v}$
		  id:: 67dd6f28-2497-4a11-bd16-afd31f24eaa4
		  :LOGBOOK:
		  CLOCK: [2025-03-21 Fri 20:58:44]
		  :END:
			- Translation: All points in space are shifted parallelly in direction $\vec{v}$ via vector $\vec{v}⋅t$ along lines parallel to $l$.
			- Limit: When they are shifted to infinity with $t→∞$, they all converge to the point $(dx:dy:0)$. This is how all parallel lines “converge” to the point at infinity.
			- I.e., point at infinity is just the direction vector $\vec{v}$ of the line $l$, as well as all other lines parallel to $l$.
		- ((67e0fb13-1c89-4f27-825e-02027f368fa2))
		- Refs:
			- Chats with Grok 3
				- [Homogeneous Coordinates: Points vs Vectors](https://grok.com/chat/0be0eda4-8509-4752-8443-2c61f9a0e300) ([published](https://grok.com/share/bGVnYWN5_76091c75-ea85-4a4e-93d4-1f666c3c3e6d))
				- [Projective rotations](https://grok.com/chat/baa501bc-baed-4968-9dcc-84f8b3c23b9b)
			- GeoGebra applet: [HomogeneousCoordinates](https://www.geogebra.org/m/csgsnafq)
			  :LOGBOOK:
			  CLOCK: [2025-03-21 Fri 20:09:27]
			  :END:
			- Wikipedia: [homogeneous coordinates](https://en.wikipedia.org/wiki/Homogeneous_coordinates)
	- “wanting” = “lacking” ↔ “distress” = “overwhelming stress” = “anger” = “excessive pressure”
	  id:: 67cea2ee-5f77-4576-8c1c-9e31d9b822c9
	  collapsed:: true
	  :LOGBOOK:
	  CLOCK: [2025-03-10 Mon 15:35:44]--[2025-03-10 Mon 20:07:20] =>  04:31:36
	  :END:
		- The greed ([rāga](https://en.wikipedia.org/wiki/Raga_(Buddhism))), desire, wanting are due to the **lacking**, the incompleteness within the self, which cause that self to look for, be **attracted** to and attach to its complements which bring **pleasure** to the self.
		  id:: 67ceb0d9-35c9-4805-8430-35c204658dbd
		  {{embed ((6667c99a-792f-4230-9fc6-c5fae874daef))}}
			- Etymology:
				- **Want**: PIE [*h₁weh₂-](https://en.wiktionary.org/wiki/Reconstruction:Proto-Indo-European/h%E2%82%81weh%E2%82%82-) (“empty”) →  Proto-Germanic [*wanô](https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/wan%C3%B4) (“lack, deficiency”) → Old Norse [vanta](https://en.wiktionary.org/wiki/vanta#Old_Norse) (“to lack”) → Middle English [wanten](https://en.wiktionary.org/wiki/wanten#Middle_English) [1200] (“to lack”) → Modern English [1700] [want](https://en.wiktionary.org/wiki/want#English) (“desire, wish for, feel the need of”)
				- **Greed**: Proto-Germanic [*grēdagaz](https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/gr%C4%93dagaz) (“hungry”) → Anglian Old English [grēdiġ](https://en.wiktionary.org/wiki/gredig#Old_English) (“greedy, hungry, eager”) → English [greedy](https://en.wiktionary.org/wiki/greedy) → English [greed](https://en.wiktionary.org/wiki/greed)
			- “[Wanting](https://en.wiktionary.org/wiki/wanting)” as an adjective (still used in formal writing and literature) or as a preposition (quite rare in modern English) still means “lacking” in modern English.
				- E.g. as adjective:
				  collapsed:: true
					- By Copilot
						- Her explanation was _**wanting** in clarity_, leaving the audience confused.
						- The project was well-executed, but it was _**wanting** in creativity._
						- The safety measures in the factory were found to _be **wanting**_ after the inspection.
					- *Dead in the Water* [1993]
					  > Kate felt privileged to have been permitted to speak through it and she was glad that, as before, she had been judged and not found **wanting**.
					- *Proceedings: [Entomological](https://en.wikipedia.org/wiki/Entomology) papers* [1902]
					  > Discal black dot small or **wanting**. Transverse posterior line reduced to two dotlets or altogether **wanting**.
					- [Pride and Prejudice](https://en.wikipedia.org/wiki/Pride_and_Prejudice) [1813]
					  > […] but where other powers of entertainment are **wanting**, the true philosopher will derive benefit from such as are given.
					- [Cato, a Tragedy](https://en.wikipedia.org/wiki/Cato,_a_Tragedy) [1712]
					  #+BEGIN_QUOTE
					  Already *Cæsar*
					  Has ravaged more than half the Globe, and sees
					  Mankind grown thin by his destructive Sword:
					  Should he go further, Numbers would be **wanting**
					  To form new Battels, and support his Crimes.
					  #+END_QUOTE
				- E.g. as preposition: (by Copilot)
				  collapsed:: true
					- **Wanting** proper instructions, the team struggled to complete the task.
					- The room, though elegant, was **wanting** the warmth of natural light.
					- **Wanting** clear evidence, the jury found it difficult to reach a unanimous verdict.
		- The hatred, aversion, dislike, or anger, angst, fear, fretfulness, distress are just the other side, opposite to [wanting](((67ceb0d9-35c9-4805-8430-35c204658dbd))), i.e. due to **excessiveness** which brings **displeasure** to the self making it to **repel**:
			- While wanting yields negative restoring force (pulling), dislike yields positive restoring force (pushing).
			- Vietnamese: thừa → căng **tức** → bực **tức** → **tức** giận
			- Etymology:
				- **Anger**: PIE [*h₂enǵʰ-](https://en.wiktionary.org/wiki/Reconstruction:Proto-Indo-European/h%E2%82%82en%C7%B5%CA%B0-) (“constrict, tighten, compress, distressed, anxious”) →  Proto-Germanic [*angazaz](https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/angazaz) (“worry, grief, anxiety”) → Old Norse [angr](https://en.wiktionary.org/wiki/angr#Old_Norse) (“sorrow, resentment, distress”) → Middle English _anger_ (“grief, pain, trouble, affliction, vexation, sorrow, wrath”) → Modern English [anger](https://en.wiktionary.org/wiki/anger) (“hostile attitude, ill will; surliness, distress, suffering; anguish, agony”)
		- Triads of the ((667c015e-6223-4f8a-ae84-a93a49f4ff94))
		  id:: 67ced16d-2fbb-4c5d-9061-5d8f490f6073
			- Three states: lacking - excessive - sufficient
			- Three forces: attration (affinity) - propulsion (aversion) - inertia (momentum)
			  attractive force - propulsive force - inertial force
			- Three feelings ([vedanā](https://en.wikipedia.org/wiki/Vedan%C4%81)): pleasant - unpleasant - neutral
			- Three poisons: greed - anger - delusion
			- ((669dfc7d-5355-41db-93a1-8d590e8ec9d8)): Circle - Arrow - Equal
	- Some established formalisms for the notion of “distribution of space” in Unithread
	  id:: 67bda37c-7085-4a71-b5bf-6c4b54b3abdd
	  collapsed:: true
		- Clarify confusions about the “distribution **of** space”:
			- “Distribution of space” is the configuration of the space itself, not the distribution of objects in that space, nor the [space of probability distributions](https://en.wikipedia.org/wiki/Probability_space).
				- Google Search AI as well as other chatbots think of “distribution _of_ space” as “distribution _in_ space”.
				  collapsed:: true
					- > The distribution of space is *the arrangement of objects or phenomena in a given area*. It can be used to describe the organization of people, buildings, or other features in a geographical space.
					- Features of spatial distribution
						- **Density**: How often something occurs in a space
						- **Concentration**: How spread out a feature is across a space
						- **Pattern**: The geometric arrangement of objects in a space
					- Examples of spatial distribution: Mapping of a city, the cosmic web
			- Due to the intrisic relativity, the objective space (physical space) is distributed in, usually ununiformly relative to, the subjective space represented by a coordinate system which is uniform (flat, straight) by definition.
				- In [spacetime distribution](((67c1273d-c336-4203-bc0d-68150f382c72))), the proper intervals in spacetime is compared to the intervals in coordinates of the observing subject.
			- Distribution is a generalization of mapping.
			- While mapping & function focuses on _individual points_, i.e. “point mapping”, distribution focuses on [**regions**](https://en.wikipedia.org/wiki/Domain_(mathematical_analysis)), like in “neighbourhood topology”, and corresponding measures of these regions like total amount ($D^{-1}$), center or mean ($D^{0}$), density ($D^{1}$), curvature ($D^{2}$), etc., as well as the [tranforms](((669dd16c-1836-40ec-86e5-772f8f4774ce))) of these regions.
		- [Schwartz distribution](https://en.wikipedia.org/wiki/Distribution_(mathematics)) $T$ with action $T[]$ on a test function $φ()$ projecting the whole test function into a number $T[φ]$, usually through integration.
			- The action $T[]$ uses the test function $φ()$ to collect the whole region of $φ$'s support into a number $T[φ]$ which measures the distribution in that region.
			- Example of distributions: Heaviside step function $H(x)$ --[distributional derivative]--> Dirac delta function $δ(x)$.
			- Distributional derivative: $T'[φ] = - T[φ']$
			  Action of derivative distribution $T'$ on test function $φ$ is the negative action of the original distribution $T$ on derivative of test function $φ'$.
		- Spacetime in General Relativity
			- [Einstein field equation](https://en.wikipedia.org/wiki/Einstein_field_equations)
			  id:: 67bdaa5e-66c0-4874-8ca6-95032208e06d
			  Distribution of energy ($T_{μν}$) $\sim$ distribution of space ($g_{μν}$)
			  $κ T_{μν} = (Λ - \frac{1}{2} R) g_{μν} + R_{μν}$
				- Tensors
					- $T_{μν}$: [stress–energy tensor](https://en.wikipedia.org/wiki/Stress%E2%80%93energy_tensor) representing the distribution of matter and energy
					- $g_{μν}$: [metric tensor](https://en.wikipedia.org/wiki/Metric_tensor_(general_relativity)) defining the geometric properties of spacetime, such as distances, angles, curvatures, etc.
					- $R_{μν},\,R$: [Ricci curvature tensor](https://en.wikipedia.org/wiki/Ricci_curvature) and [Ricci scalar curvature](https://en.wikipedia.org/wiki/Scalar_curvature) derived from the metric tensor $g_{μν}$ in a complicated manner
						- Ricci curvatures (tensor & scalar) are contractions of [Riemann curvature tensor](https://en.wikipedia.org/wiki/Riemann_curvature_tensor):
						  $R_{μν} = g^{ab} R_{aμbν} \;;\; R = g^{μν} R_{μν} = 2 K = 2 κ_1 κ_2$
						- $K$: [Gaussian curvature](https://en.wikipedia.org/wiki/Gaussian_curvature)
						- $κ_1,\, κ_2$: [principal curvatures](https://en.wikipedia.org/wiki/Principal_curvature)
				- Constants
				  collapsed:: true
					- $κ = (8πG)/c^4 ≈ 2.07665 × 10^{-43}\,{\textrm N}^{-1}$: Einstein gravitational constant
					- $G$: gravitational constant
					- $c$: speed of light
					- $Λ$: [cosmological constant](https://en.wikipedia.org/wiki/Cosmological_constant)
			- The Einstein field equation is so complicated with all kinds of tensors and curvatures! 🫤
			  id:: 67bdb94a-e172-43f9-a59e-a97756fef1f4
			- Einstein use curvature to refer to spacetime warping because it's crutial in General Relativity: [curvature = force](((67b5c77d-c42c-4dc5-8d47-fd82f535177a))) in [equivalence principle](https://en.wikipedia.org/wiki/Equivalence_principle) and various curvatures in ((67bdaa5e-66c0-4874-8ca6-95032208e06d)).
			  id:: 67c11c75-41db-404c-a349-dd4b4876851d
			  collapsed:: true
				- The model of “heavy objects on a rubber sheet” is a common analogy.
				- Example curved space around Earth & Sun
				  ![curved-space-Earth-Sun-GettyImages.png](../assets/physics/curved-space-Earth-Sun-GettyImages.png)
				- [Steel balls on the trampoline](https://youtu.be/MTY1Kje0yLg), demo at a PTSOS workshop at Los Gatos High School, on March 10, 2012
				  {{video https://youtu.be/MTY1Kje0yLg}}
			- However, the spacetime distribution represented by its density is much more intuitive and more fundamental, which is defined directly by the metric tensor $g_{μν}$ as the ((669a58b9-eb34-41cd-8605-02e29b07e1b5)) of spacetime.
			  collapsed:: true
				- Spacetime distortion of proper spacetime when projected onto a flat Cartesian coordinate system:
				  id:: 67c1273d-c336-4203-bc0d-68150f382c72
					- *Compression/Contraction*: Proper distance/interval at the herenow is greater than the coordinate distance/interval observed by an external observer.
					- *Stretch/Dilation*: Proper distance/interval at the herenow is less than the coordinate distance/interval observed by an external observer.
				- Spacetime distribution around a massive object, like the Sun 🌞, as shown in [Schwarzschild metric](https://en.wikipedia.org/wiki/Schwarzschild_metric)
					- Spacetime interval ($ds$) and proper time interval ($dτ$) in spherical coordinates $(t, r, θ, φ)$ with signature convention (+, -, -, -)
					  $${ds}^2 = c^2 {dτ}^2 \;=\; ( 1 - \frac{R_s}{r} )c^2 {dt}^2 \; - ( 1 - \frac{R_s}{r} )^{-1} dr^2 \; - r^2 {dΩ}^2$$
					  with ${dΩ}^2 = ({dθ}^2 + (\sin θ)^2 {dφ}^2)$ and [Schwarzschild radius](https://en.wikipedia.org/wiki/Schwarzschild_radius) $R_s = {2GM}/{c^2}$
					- **Stretch/dilation** of time: The coefficient $(1 - R_s/r)$ of  ${dt}^2$ is large near the Sun. This means that proper time intervals are shorter than coordinate time intervals.
					- **Compression/contraction** of radial distances: The coefficient $(1 - R_s/r)^{-1}$ of ${dr}^2$ is small near the Sun. This means that proper radial distances are greater than coordinate radial distances.
					- These coefficients have the same form with the [Lorentz factor](https://en.wikipedia.org/wiki/Lorentz_factor) $γ^2$ in Special Relativity: $γ^2 = (1 - (v/c)^2)^{-1}$
						- $γ^2 = (1 - β^2)^{-1}$ : $β = v/c$ in SR (Lorentz), and $β = \sqrt{R_s/r}$ in GR (Schwarzschild)
						- When the object **flies faster** ($v↑$) in SR, or **approaches the center** ($r↓$) in GR, 
						  $γ↓$ makes **length contract** and **time dilate**.
					- Both coordinate view and visual view of the space from a distant observer show space contractions with some differences.
						- The visual [radius](https://en.m.wikipedia.org/wiki/Einstein_radius) of [Einstein ring](https://en.m.wikipedia.org/wiki/Einstein_ring) is smaller than the Schwarzschild radius due to [gravitational lensing](https://en.m.wikipedia.org/wiki/Gravitational_lens).
						- Objects near [event horizon](https://en.wikipedia.org/wiki/Event_horizon) is warped arround visually, while it's just infinitely dense in coordinate view.
					- Illustrations
					  collapsed:: true
						- Interactive 3D model: [Gravity warping space-time @ SketchFab](https://sketchfab.com/3d-models/gravity-warping-space-time-749a8acac04049a89dc8d02054a02ee8)
						- Animated GIF showing both length contraction & time dilation
						  ![General_relativity_time_and_space_distortion_extract.gif](../assets/physics/General_relativity_time_and_space_distortion_extract.gif)
						- Animated GIF of a moving object
						  ![warped-spacetime-moving-object-ezgif.gif](../assets/physics/warped-spacetime-moving-object-ezgif.gif)
						- [What if we could see Spacetime? An immersive experience](https://youtu.be/YNqTamaKMC8)
						  {{video https://youtu.be/YNqTamaKMC8?t=200}}
				- DOING Relative to the subject's view, space is compressed under the coordinate view, while stretched under the proper view, or even both compressed and stretched under the middle view.
				  id:: 67d10ab3-018d-4c04-8d19-096eae010723
				  :LOGBOOK:
				  CLOCK: [2025-03-12 Wed 11:20:30]
				  :END:
					- ...
					- Due to the traditional image of [curved spacetime](https://en.wikipedia.org/wiki/Curved_spacetime) from Einstein, many LLM chatbots are confused between the “stretch of space” of the model of [“heavy objects on a rubber sheet”](((67c11c75-41db-404c-a349-dd4b4876851d))) and the “compressed space” in spacetime distribution.
					  collapsed:: true
						- Stuck in confusion between curvature & distribution: Copilot, DeepSeek
						- Arrived at the language of distribution: Grok 3, Meta AI
							- Meta AI still had some confusions at first but quickly corrected after my suggestions.
							- Grok 3 directly [described](https://grok.com/share/bGVnYWN5_41d4563d-f787-47cb-adfa-66cc81da8f08) the distribution in the language of density without any suggestion 😊. However, further refinements revealed many confusions. I've tried hard to resolve those confusions and finally complete the 3-way relativity.
							  id:: 67f4eae8-b7f3-44af-b6fe-61591204f245
								- Grok 3 still have severe hallucinations, e.g. it thinks that it can read Web pages for any given URL while [it cannot](https://grok.com/share/bGVnYWN5_e996d9cd-5621-404a-8c47-f9ebb9f0719f), as well as [other cases reported on Hacker News](https://news.ycombinator.com/item?id=43177346).
					-
			- So, the balance way should be using both: distribution for introductory level and curvatures for adavanced level.
			  collapsed:: true
				- By using both distribution and curvature, students can develop a deeper understanding of general relativity and its underlying principles.
				- The Benefits of Distribution
					- *Easier visualization*: Distribution is a more tangible concept, allowing students to visualize how spacetime changes around massive objects.
					- *Simpler language*: Describing spacetime in terms of distribution avoids the complexities of curvature, making it easier for students to grasp.
					- *More relatable*: Distribution is a concept that can be related to everyday experiences, such as stretching or compressing materials.
				- The Role of Curvature
					- [Curvature = force](((67b5c77d-c42c-4dc5-8d47-fd82f535177a))) in [equivalence principle](https://en.wikipedia.org/wiki/Equivalence_principle)
					- Curvatures in ((67bdaa5e-66c0-4874-8ca6-95032208e06d))
			- The curvature/distortion of spacetime has proved the ancient wisdom that _only the **herenow**, i.e. the local reference point/frame is proper_. Anything out of the herenow is distorted, hence improper! 😊
			- “**Proper** space/time” = “**own** space/time” = “không/thời gian **riêng**”
			  collapsed:: true
			  :LOGBOOK:
			  CLOCK: [2025-03-12 Wed 12:11:48]
			  :END:
				- Etymology: Latin [proprius](https://en.wiktionary.org/wiki/proprius#Latin) (own, individual, private) → French [propre](https://en.wiktionary.org/wiki/propre#French) (own, specific, particular, appropriate, correct) → English: proper, property, appropriate
					- Through time, its meaning has shifted to be “right or suitable for a _particular_ situation or purpose” → “truly what something is said or regarded to be; genuine; suitable or appropriate in society”.
					- Examples of the meaning “suitable for a _particular_ situation”:
						- Proper to itself
						  > She likes everything to be in _its **proper**_ place.
						- Proper to me
						  > I've had sandwiches but I haven't eaten a **proper** meal.
						- Proper to the job
						  > I would have done the job myself but I didn't have the **proper** equipment.
						- Proper to the walk
						  > If you're going to walk long distances you need **proper** walking boots.
				- Usages of “proper” as “own, specific”: proper name/noun, [proper motion](https://en.wikipedia.org/wiki/Proper_motion), proper to
				- Some examples using “**proper to**” (given by Copilot) to highlights that certain characteristics, roles, or practices belong specifically to a particular context, group, or individual.
					- 1. Cultural Practices
					  > These rituals are **proper to** the local community and have been passed down through generations.
					- 2. Geographical Features
					  > The flora and fauna **proper to** this region are unique and diverse.
					- 3. Customs and Traditions
					  > The dress code **proper to** this occasion requires formal attire.
					- 4. Specialized Roles
					  > The duties **proper to** a physician include diagnosing and treating patients.
					- 5. Legal Context
					  > The responsibilities **proper to** a trustee are outlined in the legal document.
		- It's interesting that both Schwartz and Schwarzschild start with the “schwarz” = “black” and coincide with the [schwa `ə`](https://www.britannica.com/topic/schwa) = “null”! 😊
	- [stagger](https://www.facebook.com/share/p/35j9SSuqSJj76tWY/) = link (in space) = continuation (in time) = momentum
	  id:: 67b54283-14b2-4753-94bb-4d827d54d7cc
	  collapsed:: true
	  :LOGBOOK:
	  CLOCK: [2025-02-19 Wed 09:40:27]
	  :END:
		- The linkage is due to [stagger = dependent origination](((67b541c9-befb-46b8-b2ae-e6e251043153))) and the [mismatch between circles](((67b541cb-a5c9-4634-b5f7-080d367faa4c))).
			- stagger is to momentum ~ [distortion is to force/curvature](((67b5c77d-c42c-4dc5-8d47-fd82f535177a)))
			- ((69b21d98-6152-4c03-9375-8627f8ad70ba))
		- All the three parts of ((67a98760-71fa-4033-9c42-f3025d632d04)), i.e. input, output, internal bridge/cycle, are continued by staggering.
			- Output: integral/accumulation from higher derivative to lower level = action = projection outward from potential to actual = actualization = extension (from empty to solid, from abstract to concrete)
			- Input: differentiation/derivation from lower to higher level = attraction = observation = learning
			- Bridge: innermost bridge between inward & outward flow = equal = driver = switcher/chooser = free will
				- Fineness of this bridge = 1/size of self = degree of freedom
		- Stretching out by time, that transcycling becomes a double cone of ((66725144-6bc9-4c9f-ba48-2cef02651e52)) ~ [wave equation](https://en.wikipedia.org/wiki/Wave_equation) ~ [effect circle](((674ff584-00e3-40d8-9b77-21e9dca899dd))) = ((67b183f5-1cca-4473-917e-60c644dd5466)).
		  id:: 67b5c778-71d6-4f58-9dd4-36a719bd85f0
	- [?] What's the right term for the most basic operation: traversal, ((67a98760-71fa-4033-9c42-f3025d632d04)), sprolling, ...
	  id:: 678b7762-1187-4330-93cb-7a62e14467a8
	  collapsed:: true
	  :LOGBOOK:
	  CLOCK: [2025-01-18 Sat 19:12:36]
	  :END:
		- ![RollingLoop](https://docs.google.com/drawings/d/e/2PACX-1vTc1vvF4Bghp7a62iW_QccyZaVtiJR9eD8d44eIxfqCeXof9NY4tvKP179l3tfLH4M7mLZKQXBqWmKc/pub?w=473&h=123)
		- I'm discussing with Copilot, but the right image is blocked because it's "too sensitive!" 😯😧
		  collapsed:: true
			- Maybe it looks like a crotch 🤔?!
			- I just want to make it clear that the circle is a loop ➰, not separate from the thread.
		- Copilot suggests "spooling" & "entwining".
		  collapsed:: true
			- While "entwining" is good for its broad sense, "spooling" is good for its common usage in computing and capturing both "spooling in" and "spooling out".
			- For a thick coil with many loops in between, "spooling" is a great term which can be combined with "rolling": at the two ends, the thread is "spooled in/out", while in between, it just rolls/rotates around.
			- I'm thinking of the new term “spool-rolling” or “sprolling” /sprol.ɪŋ/ to combine “spooling” & “rolling”!
				- While “[rolling](https://en.wikipedia.org/wiki/Rolling) = rotation + translation”, “sprolling = winding + translation”
				- The slang “[sproll](https://www.urbandictionary.com/define.php?term=Sproll)” can be “spin + roll” or “spam + troll”.
				- Don't be confused with “sprawling” /sprɔːl.ɪŋ/
				- Related to the hot “rolling spool”.
					- [Rolling and pulling](https://leancrew.com/all-this/2023/06/rolling-and-pulling/)
					- [The surprising rolling spool: Experiments and theory from mechanics to phase transitions](https://www.researchgate.net/publication/264161700_The_surprising_rolling_spool_Experiments_and_theory_from_mechanics_to_phase_transitions) with [PDF](../assets/physics/Surprising-EJP09JunRev.pdf)
		- For a single loop ➰ and when it degenerates into just a (soliton) wave packet, its motion is the combination between the "propagation" in the direction of the the main thread and the "curling in & out" of the loop/packet.
		- In general, there are 3 parts of this movement: thread input, rotating inside, and thread output.
			- In Unithread view, all [bodies](((66c810a0-9861-4787-bdcf-1378219332be))) in the worlds, from celestial bodies, organisms (thread = food & info), to simple physical objects (thread = energy), are "living" (existing) by this movement. The difference is just how complicated the "rotation" inside that body is.
			- I think “**transcycling** = cycling + translation” should be an apt term for this general movement.
				- “transcycling = cycling + exchange (I/O)”: the bicycle cycling, itself, includes the translation of the bicycle and the exchange of momentum, but i add the prefix “trans” to stress the intrinsic exchange of content, transition of state, transformation of thread.
				- About the verb “to ((687743fd-9d45-45be-b9fd-3055cbb8a938))”: When an obop transcycles *on/along* the thread from left to right, it transcycles the thread through its body and effectively makes the thread move from right to left relative to the obop.
				  id:: 67a963d2-c9b5-47e0-9b4d-9d6323a76c28
					- Intransitive verb: “to transcycle on somebody” ~ “to cycle on road” ~ “to traverse some place”
					- Transitive verb: “to transcycle something” ~ “to recycle something”
						- Passive voice: “something is transcycled through somebody” ~ “something is cycled through somebody” ~ “somebody cycles through something's contents” (e.g. “The Earth climate cycles through the warm El Niño phase, the neutral phase and the cool La Niña phase.” )
			- “transcycling” is close to “traversal”, with “cycle” ~ “verse = turn”!
				- ((678b72d3-073a-4763-a49f-5233a3d86614))
				- The “turn” in “traversal” is the change (nearly reverse) of direction in the zigzag course or switchback: to exhaustively traverse a flat space, we must switchback many times.
					- A milder “turn” is the “turn away” (nearly perpendicularly) from the main direction of the flow/river/road to **cross over** it, i.e. the original meaning of the Latin verb “[traversare](https://en.wiktionary.org/wiki/traversare)”.
				- “turn” ~ “rotate”: in maths, “turn = cycle” like “[turn of rope](https://en.wikipedia.org/wiki/Turn_(knot)) = round loop of rope”, “[1 turn](https://en.wikipedia.org/wiki/Turn_(angle)) = 1 cycle” 1τ = 2π
	- [pipe wrapping](((670cdcb4-3c85-45af-8c30-3c3284ed37df))) = signal piping = message conveyance
	  id:: 676e46bc-5c19-4e37-a301-e3b818d8cb1a
	  collapsed:: true
	  :LOGBOOK:
	  CLOCK: [2025-01-02 Thu 14:35:32]
	  :END:
		- "pipe" over "tube, cylinder": the axis is indefinitely long and it's also used for signal/message conveyance.
		- Thread of N distributions of marks (via pipe wrapping of N subthreads) = N-dim function = function derivable in N levels (through pipe wrapping) to straight line = motion in N-dim space = N particles in 1D space
			- wrap up to N-dim box = SCIFER of N sustents
				- Acceleration via changing the order of sustents
			- N-level extension = linearization of N-dim curve to straight line, so that it can be piped through pipe wrapping
				- Thread linearization = digital serialization
			- 3rd law of Newton shown on relative distributions of 2 threads on the pipe
		- The same meaning/image form different roots:
		  “Both North & South poles are just two ends of the axis pole!”
			- "pole" & "whole"  from old English "pal" & "hal" 
			  vs
			- "pole" & "holo-" form Greek "polos" & "holos"!
			- Is there some relationship here?!
	- [Compound thread](((684f951a-1db2-4e43-9c5a-f4fbd27fe667))) unmixed by different intent circles
	  id:: 6850be86-058c-45b4-9b4a-de92ebb4caff
	  collapsed:: true
	  :LOGBOOK:
	  CLOCK: [2025-06-17 Tue 10:29:56]
	  :END:
		- Unithread
			- space: circle & view cone
			- time: effect flow
			- spacetime: interunion of effect circles mixes projective threads into compound thread
		- The mixed object's content is [obop-projected](((68908fbd-acc3-41a6-8c38-17ee1f014223))) through different view cones to different images (extents) by different intent circles ⭕. All obops are watching the object in parallel with their different interests (intents).
		- Pattern matching: The intent circle is the form to extract effect circle from the content, i.e. it is turned by the matched content.
		- Analysis: The intent circle just hashes the content into its own distribution (connection & order).
		- Organization: The intent sorts the content out into its knowledge cone.
		- The mechanism of this unmixing is the same as the interunion, only reverse in direction of the effect flows: from the product back to intent circles
			- This symmetry is the nature of the interunion operation: (x, y) -> (x', y') has 2 families of cones: mixing cones (x, y) -> x'; (x, y) -> y'; and unmixing cones x -> (x', y'); y -> (x', y').
			- This is the nature of complete graph (all to 1, 1 to all), of spreading wave (Huygens principle)
			- The Fourier Transform also has 2 ways with the same integral form.
	- <<End 2025 Brainstorms>>
	  ----------------------------
	-