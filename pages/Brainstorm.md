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
			- **Simple Halting Problem**: $\text{HP0} = ?$
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
					- **Contradictions**:
						- ⇒ $∃ p=n_{H0}:  ¬[D_{H0}(p) = H(p)]$, negating $A_1$
					- **Conclusion** (by classical logic): Assumption $A$ is false, i.e. $\text{HP0} = ⊥$
						- Because the assumption leads to contradiction with the assumption itself, not with an established fact, we cannot be sure that the assumption is false.
						- Actually, we have just proved that the assumption $A_1$ is self-contradictory,
						  $A_1 → ¬A_1$
						- While the classical logic denies self-contradiction, self-negation loop is a driving force for development, as shown in the dialectical process of thesis-antithesis-synthesis, and is defined as ((667c008f-cd1f-4a6b-a9c8-d6efa1d8d342)) in Unïnfo.
							- One way of development is to upgrade the definition of the halting determining function $H()$ from [deterministic](https://en.wikipedia.org/wiki/Determinism) [bivalent](https://en.wikipedia.org/wiki/Principle_of_bivalence) to [nondeterministic](https://en.wikipedia.org/wiki/Nondeterministic_algorithm) or [many-valued](https://en.wikipedia.org/wiki/Many-valued_logic).
			- In order to have a stronger conclusion by directly proving the negation of Halting Proposition **for all halting decider** $H$, without using proof by constradiction, i.e.
			  $∀ D_H, ∃ p:  ¬[D_H(p) = H(p)]$,
			  we must rephrase the Halting Proposition to be more general where program $p$ receives input $x$.
			- **Halting Proposition** ($\text{HP}$): There exists a decider $D_H(·,·)$ such that for all program $p(·)$ and input $x$, $D_H(p, x)$ decides whether $p$ halts on $x$ xor not.
				- $\text{HP} := ∃ D_H(·,·), ∀ p(·), ∀ x: [(D_H(p,x) = H(p,x)]$
				- $H(p, x) :=$ “execution of program $p$ on input $x$ eventually halts.”
			- **Halting Problem**: $\text{HP} = ?$
				- **Resolution**: $[(\text{HP} = ⊤) ⊕ (\text{HP} = ⊥)] = ⊥$, i.e. $\text{HP}$ is [undecidable](https://en.wikipedia.org/wiki/Undecidable_problem)
					- ⇔ $[(\text{HP} = ⊤) ↔ (\text{HP} = ⊥)]  = ⊤$
					- ⇔ $\text{HP} = ⊤↔⊥  = 0 =$ [U](https://en.wikipedia.org/wiki/Three-valued_logic) $=$ (in classical logic) $⊥$
				- **Direct Proof** of the classical solution $\text{HP} = ⊥$:
				  id:: 6f24d15c-4e73-4c0b-b43a-99b3ba2be1e2
					- We construct a _negation program_ $n_H$ receiving **any decider** $D_H$ as its input:
						- ```python
						  n_H(D_H): if H(n_H, D_H) then loop_forever; else halt;
						  loop_forever: while True do continue;
						  ```
					- Consider 2 cases of result given by $D_H(n_H, H)$:
						- $D_H(n_H, H) = ⊤ ⇒ H(n_H, H) = H( \text{loop\_forever}, ∅) = ⊥$
						- $D_H(n_H, H) = ⊥ ⇒ H(n_H, H) = H(\text{halt}, ∅) = ⊤$
					- ⇒ $D_H(n_H) ≠ H(n_H)$, i.e. $D_H$ cannot decide halting status of $n_H$
					- **Conclusion**: $∀ D_H, ∃ p = n_H, ∃ x = D_H:  ¬[(D_H(p, x) = H(p, x)]$, i.e. $\text{HP} = ⊥$
						- When $H$ is an [oracle](https://en.wikipedia.org/wiki/Oracle_machine) living outside of the timeline of simple executions like `loop_forever`, $n_H(H)$ is then an oracle.
						- If the oracle $H$ only accepts inputs from non-oracles or lower-level oracles, $H(n_H, H)$ can be undetermined (`U`) instead of ⊤ xor ⊥, and the weaker version of $\text{HP}$ with program $p$ and input $x$ restricted in [arithmetical hierarchy](https://en.wikipedia.org/wiki/Arithmetical_hierarchy) may hold.
							- $\text{HP}_1 := ∃ H ∈ \Sigma_{2}^0, ∀ (p, x) ∈ \Delta_{1}^{0}: [(H(p,x) = ⊤) ⊕ (H(p,x) = ⊥)]$
							  ⇒ $\text{HP}_1 ∈ \Sigma_{2}^0$
							- In general, an oracle $H ∈ Y$ results in its negation oracle $n_H(H) ∈ \Delta_{1}^{0,Y}$, and the corresponding halting proposition $\text{HP}_{1Y} ∈ \Sigma_{2}^{0,Y}$, as one of the [main results of the Arithmetical hierarchy](https://en.wikipedia.org/wiki/Arithmetical_hierarchy#Summary_of_main_results).
						- However, the negation oracle can always effectively negate the unrestricted $\text{HP}$.
						- This means that $H$ can only determine halting status of other ones at **lower levels**, and obviously not of itself.
				- **Proof by [diagonal argument](https://en.wikipedia.org/wiki/Cantor%27s_diagonal_argument)**
					- Instead of considering any _halting_ decider, we show that any algorithmic decider $D$ in general cannot decide the halting property of the _negation program_ $n_H$.
					- We construct a _negation program_ $n_H$ receiving **any algorithmic decider** $D$ as its input:
						- ```python
						  n_H(D): if D(n_H, D) then loop_forever; else halt;
						  loop_forever: while True do continue;
						  ```
					- Let's define $H(·,·)$ as a (hypothetical) function determining the halting status of any program $p$ on input $x$.
					  id:: cd8323ea-6bcb-41d4-b9b9-fca9ef85bc5a
					- The result of $H(n_H, D)$ corresponding to $D(n_H, D)$:
						- $D(n_H, D) = ⊤ ⇒ H(n_H, D) = H( \text{loop\_forever}, ∅) = ⊥ ≠ D(n_H, D)$
						- $D(n_H, D) = ⊥ ⇒ H(n_H, D) = H(\text{halt}, ∅) = ⊤ ≠ D(n_H, D)$
					- ⇒ $D ≠ H$
					- **Conclusion**: $∀ D, ∃ p = n_H, ∃ x = D:  [D(p, x) ≠ H(p, x)]$, i.e. the (hypothetical) halting determining function $H$ is not an algorithmic decider.
						- This indirectly negate the $\text{HP}$.
						- This indirect proof is weaker than the [direct proof](((6f24d15c-4e73-4c0b-b43a-99b3ba2be1e2))) in the sense that it denies only the the _algorithm_, i.e. the execution, not the definition of $H$.
						- That means, as an “oracle”, $H$ can somehow determine the halting status of $n_H(D)$, yielding clear answer of ⊤ xor ⊥. The only requirement is that $H$'s determination is not restricted within the timeline of program execution, like $p$ or $D$.
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