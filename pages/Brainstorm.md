# Brainstorm
id:: 6653538a-30aa-423f-be89-848ad9c7e331
	- ((6651ecba-793d-43c5-8020-a9f260b032d8)) This is the ((665c92d1-565b-4911-a706-b32af429c3aa)) place for ((66536578-c4d3-43f1-b35c-bf71120f0570)) as well as the store of recent brainstorms.
	-
	- ## Brainstorming > ((67760e05-2ea1-4f0e-aaa6-158edca80df5))
	  id:: 6773eb97-ec58-4c48-a017-cd0de2d82e08
		- ...
		- TODO 0 sum = neutralization of positive and negative 
		  id:: 678df0f0-20d2-4995-bfc2-0b953970469d
		  collapsed:: true
		  :LOGBOOK:
		  CLOCK: [2025-01-20 Mon 13:45:06]
		  CLOCK: [2025-02-10 Mon 10:19:18]
		  :END:
		  vs. ∞ sum = abstraction of complex objects into points
			- The neutral point (0) is absolutely "nothing" due to its extent = 0, i.e. a point, while the abstract space (∞) is just a [thin air](((671d06ba-cb96-4424-9bee-4e6327ba7f9d))) of possibilities.
		- ↓ to be flushed **down**! ↓
	- ## 2025 Brainstorms
	  id:: 67760e05-2ea1-4f0e-aaa6-158edca80df5
		- Halting Problem
		  id:: 67b81e1b-b801-4e5a-9c00-98e51158712a
		  collapsed:: true
		  :LOGBOOK:
		  CLOCK: [2025-02-21 Fri 14:30:04]--[2025-02-21 Fri 20:44:33] =>  06:14:29
		  :END:
			- Similar to the [Liar Paradox](https://en.wikipedia.org/wiki/Liar_paradox), the _negation program_ is so “pathological” that no “halting doctor” can detect if it will halt xor not.
			- [Reduced halting problem](https://creatzyitnotes.blogspot.com/2009/10/reduced-halting-problem.html)
			- **Simple Halting Proposition** ($\text{HP0}$): There exists a decider $D_H()$ such that for all program $p$, $D_H(p)$ decides whether $p$ halts xor not.
				- $\text{HP0} := ∃ D_H, ∀ p: [D_H(p) = H(p)]$
				- $H(p) :=$ “execution of program $p$ eventually halts.”
				  id:: 67b98a45-9183-4be8-a699-92e7298d6e80
			- **Simple Halting Problem**: $\text{HP0} = ?$
			  collapsed:: true
				- **Solution** (in classical logic): $\text{HP0} = ⊥$
				- **Proof by contradiction** (in classical logic):
					- **Assumption** $A$: $\text{HP0} = ⊤$, i.e. we have a decider $D_{H0}$ as a program which can decide whether any program $p$ halts xor not.
						- $∀ p: [D_{H0}(p) = H(p)]$  [$A_1$]
					- We construct a _negation program_ $n_{H0}$ based on the decider $D_{H0}$ given by assumption $A$:
						- ```python
						  n_H0: if D_H0(n_H0) then loop_forever; else halt;
						  loop_forever: while True do continue;
						  ```
					- Consider 2 cases of result given by $D_{H0}(n_{H0})$:
						- $D_{H0}(n_{H0}) = ⊤ ⇒ H(n_{H0}) = H( \text{loop\_forever} ) = ⊥$
						- $D_{H0}(n_{H0}) = ⊥ ⇒ H(n_{H0}) = H(\text{halt}) = ⊤$
					- ⇒ $D_{H0}(n_{H0}) ≠ H(n_{H0})$, i.e. $D_{H0}$ cannot decide halting status of $n_{H0}$
					- **Contradiction**:
						- ⇒ $∃ p=n_{H0}:  ¬[D_{H0}(p) = H(p)]$, negating $A_1$
					- **Conclusion** (by classical logic): Assumption $A$ is false, i.e. $\text{HP0} = ⊥$
						- Because the assumption leads to contradiction with the assumption itself, not with an established fact, we cannot be sure that the assumption is false.
						- Actually, we have just proved that the assumption $A_1$ is self-contradictory,
						  $A_1 → ¬A_1$
						- While the classical logic denies self-contradiction, self-negation loop is a driving force for development, as shown in the dialectical process of thesis-antithesis-synthesis, and is defined as ((667c008f-cd1f-4a6b-a9c8-d6efa1d8d342)) in Unïnfo.
							- One way of development is to upgrade the definition of the halting determining function $H()$ from [deterministic](https://en.wikipedia.org/wiki/Determinism) [bivalent](https://en.wikipedia.org/wiki/Principle_of_bivalence) to [nondeterministic](https://en.wikipedia.org/wiki/Nondeterministic_algorithm) or [many-valued](https://en.wikipedia.org/wiki/Many-valued_logic).
				- **Direct proof** of  $\text{HP0} = ⊥$
					- For any given universal decider $D$, we construct a _negation program_ $n_{H1}$:
						- ```python
						  n_H1: if D(n_H1) then loop_forever; else halt;
						  loop_forever: while True do continue;
						  ```
						- The universal decider $D$ is only required to give definite answer on any input, i.e. “universal” or [total](https://en.wikipedia.org/wiki/Total_function), but can decide any property of its input, not just halting status.
						- The “universality” of $D$ is from the universal quantifier, $∀ p$, of $\text{HP0}$.
					- Consider 2 cases of result given by $D(n_{H1})$:
						- $D(n_{H1}) = ⊤ ⇒ H(n_{H1}) = H( \text{loop\_forever} ) = ⊥$
						- $D(n_{H1}) = ⊥ ⇒ H(n_{H1}) = H(\text{halt}) = ⊤$
					- ⇒ $D(n_{H1}) ≠ H(n_{H1})$, i.e. $D$ cannot decide halting status of $n_{H1}$
					- **Conclusion**: $∀ D, ∃ p = n_{H1}:  ¬[(D(p) = H(p)]$, i.e. $\text{HP0} = ⊥$
						- This proof is a kind of [diagonal argument](https://en.wikipedia.org/wiki/Cantor%27s_diagonal_argument) over all universal deciders, which clearly shows that no universal decider can be a halting status decider.
						- When $D$ is an [oracle](https://en.wikipedia.org/wiki/Oracle_machine) living outside of the timeline of simple executions like `loop_forever`, $n_{H1}$ is then an oracle.
						- If the oracle $D$ only accepts inputs from non-oracles or lower-level oracles, $D(n_{H1})$ can be undetermined (`U`) instead of ⊤ xor ⊥, and the weaker version of $\text{HP0}$ with program $p$ and input $x$ restricted in [arithmetical hierarchy](https://en.wikipedia.org/wiki/Arithmetical_hierarchy) may hold.
							- $\text{HP}_1 := ∃ D_H ∈ \Sigma_{2}^0, ∀ p ∈ \Delta_{1}^{0}: [(D_H(p) = H(p)]$
							  ⇒ $\text{HP}_1 ∈ \Sigma_{2}^0$
							- In general, an oracle $D_H ∈ Y$ results in its negation oracle $n_{H1} ∈ \Delta_{1}^{0,Y}$, and the corresponding halting proposition $\text{HP}_{1Y} ∈ \Sigma_{2}^{0,Y}$, as one of the [main results of the Arithmetical hierarchy](https://en.wikipedia.org/wiki/Arithmetical_hierarchy#Summary_of_main_results).
						- However, the negation oracle can always effectively negate the unrestricted $\text{HP0}$.
						- This means that $D_H$ can only determine halting status of other ones at **lower levels**, and obviously not of itself.
						- ...
			- Explicit [self-references](https://en.wikipedia.org/wiki/Self-referential):
				- In the negation program clearer, the code `n_H: if D(n_H) ...` has two layers of self references: of $n_H$ and of $D = D_H$ as a halting status decider.
				- To make them clear, we rephrase the Halting Proposition to be more general where program $p$ receives inputs $(x, y)$, so that we can put the programs to its inputs: $n_H(n_H)$.
			- **Halting Proposition** ($\text{HP}$): There exists a decider $D_H(·,·)$ such that for all program $p(·)$ and input $x$, $D_H(p, x)$ decides whether $p$ halts on $x$ xor not.
				- $\text{HP} := ∃ D_H(·,·), ∀ p(·), ∀ x: [(D_H(p,x) = H(p,x)]$
				- $H(p, x) :=$ “execution of program $p$ on input $x$ eventually halts.”
				  id:: 67b9974a-99c9-439e-b36a-8f1bbefe9ff5
			- **Halting Problem**: $\text{HP} = ?$
			  collapsed:: true
				- **Resolution**: $\text{HP}$ is [undecidable](https://en.wikipedia.org/wiki/Undecidable_problem) = 0 = [U](https://en.wikipedia.org/wiki/Three-valued_logic) = (in classical logic) ⊥
				- **Direct Proof** of the classical solution $\text{HP} = ⊥$:
				  id:: 6f24d15c-4e73-4c0b-b43a-99b3ba2be1e2
					- For **any universal decider** $D$, we construct a _negation program_ $n_H$ receiving another program $p$ as input:
						- ```python
						  n_H(p): if D(p, p) then loop_forever; else halt;
						  loop_forever: while True do continue;
						  ```
					- Consider 2 cases of result given by $D(n_H, n_H)$ in the execution of $n_H(n_H)$:
						- $D(n_H, n_H) = ⊤ ⇒ H(n_H, n_H) = H( \text{loop\_forever}, ∅) = ⊥$
						- $D(n_H, n_H) = ⊥ ⇒ H(n_H, n_H) = H(\text{halt}, ∅) = ⊤$
					- ⇒ $D(n_H, n_H) ≠ H(n_H, n_H)$, i.e. $D$ cannot decide halting status of $n_H(n_H)$
					- **Conclusion**: $∀ D, ∃ p = n_H, ∃ x = n_H:  ¬[(D(p, x) = H(p, x)]$, i.e. $\text{HP} = ⊥$
			- **Halting determining function**
			  {{embed ((67b98a45-9183-4be8-a699-92e7298d6e80))}}
				- Due to the deterministic property of the program $p$, we tend to think that “the execution $p()$ must be definitely halts xor not!” Hence, we usually think of $H$ has a [deterministic](https://en.wikipedia.org/wiki/Determinism) [bivalent](https://en.wikipedia.org/wiki/Principle_of_bivalence) function.
				- However, the problem lurks in the _absurdity of the **infinity, ∞**,_ which cannot be definite nor deterministic anyway.
				- Throughout the history of maths, we've tried hard to manage infinities by canceling them with other infinities.
					- Some simple infinities can be tamed down, e.g. $\lim_{n→∞}\frac{2n}{3n} = 2/3$, $H(\text{loop\_forever}, ∅) = ⊥$.
					- But most of other infinities are wild, e.g. $∞ - ∞ =$ U, $∞/∞ =$ U, $H(n_H) =$ U, etc.
				- The case of $H(n_H)$ is complicated by the ever increasing number of states of $n_H()$ due to its (indirect) recursions, of negation program $n_H$ and of decider $D_H$.
					- Like [busy beavers](https://en.wikipedia.org/wiki/Busy_beaver), the negation program $n_H()$ keeps extending its states infinitely, thus effectively makes any judgement of its halting status indefinite.
				- **Resolution in Unïnfo**: $H(n_H) = ⊥$ is the meta-algorithmic answer. But this answer cannot be communicated with $n_H()$.
					- Any oracle $D_H$ just **remains silent**, i.e. $D_H() = ∅$, when being asked by a non-oracle program like $n_H$ about such meta-algorithmic question like $D_H(n_H) = ?$.
					- This silence, combined with the negation program's stubborn request for a clear answer, effectively makes $n_H()$ stalls right there forever without halting. That's how $H(n_H) = ⊥$.
					- This is like the [Buddha's noble silence](https://en.wikipedia.org/wiki/Noble_Silence).
					- The [right to silence](https://en.wikipedia.org/wiki/Right_to_silence) in civil laws is somehow different, even though it's similar in the aspect of avoiding self negation.
		- stagger = link (in space) = continuation (in time) = momentum
		  id:: 67b54283-14b2-4753-94bb-4d827d54d7cc
		  collapsed:: true
		  :LOGBOOK:
		  CLOCK: [2025-02-19 Wed 09:40:27]
		  :END:
			- The linkage is due to [stagger = dependent origination](((67b541c9-befb-46b8-b2ae-e6e251043153))) and the [mismatch between circles](((67b541cb-a5c9-4634-b5f7-080d367faa4c))).
				- stagger is to momentum ~ [distortion is to force/curvature](((67b541d0-9e59-42ec-9199-9e9e114579e8)))
			- All the three parts of ((67a98760-71fa-4033-9c42-f3025d632d04)), i.e. input, output, internal bridge/cycle, are continued by staggering.
				- Output: integral/accumulation form higher derivative to lower level = action = projection outward from potential to actual = actualization = extension (from empty to solid, from abstract to concrete)
				- Input: differentiation/derivation from lover to higher level = attraction = observation = learning
				- Bridge: innermost bridge between inward & outward flow = equal = driver = switcher/chooser = free will
					- Fineness of this bridge = 1/size of self = degree of freedom
			- Stretching out by time, that transcycling becomes a double cone of ((66725144-6bc9-4c9f-ba48-2cef02651e52)) ~ [wave equation](https://en.wikipedia.org/wiki/Wave_equation) ~ [effect circle](((674ff584-00e3-40d8-9b77-21e9dca899dd))).
				- View cone: spatial distribution → density → curvature
				- Obop point: curvature = force
				- Action cone: force (mass acceleration) → momentum (mass velocity) → point mass (mass position)
				- Universe: spatial distribution = distribution of point masses
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
					- Verb “to transcycle”: When an obop transcycles *on/along* the thread from left to right, it transcycles the thread through its body and effectively makes the thread move from right to left relative to the obop.
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
		- <<End 2025 Brainstorms>>
		  ----------------------------
	- ## Brainstorm History
	  id:: 67760db9-eb82-4ef9-9bd5-93b43049a755
		- ((67760e05-2ea1-4f0e-aaa6-158edca80df5))
		- ((67760c45-14fe-4d91-88a0-923f50ed553c))