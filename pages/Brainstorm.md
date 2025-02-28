# Brainstorm
id:: 6653538a-30aa-423f-be89-848ad9c7e331
	- ((6651ecba-793d-43c5-8020-a9f260b032d8)) This is the ((665c92d1-565b-4911-a706-b32af429c3aa)) place for ((66536578-c4d3-43f1-b35c-bf71120f0570)) as well as the store of recent brainstorms.
	-
	- ## Brainstorming > ((67760e05-2ea1-4f0e-aaa6-158edca80df5))
	  id:: 6773eb97-ec58-4c48-a017-cd0de2d82e08
		- ...
		- Some established formalisms for the notion of “distribution of space” in Unithread
		  id:: 67bda37c-7085-4a71-b5bf-6c4b54b3abdd
		  collapsed:: true
			- [Schwartz distribution](https://en.wikipedia.org/wiki/Distribution_(mathematics)) with action on a test function projecting the whole test function into a number, usually through integration.
				- Example of distributions: Heaviside step function $H(x)$ --[distributional derivative]--> Dirac delta function $δ(x)$.
				- Distributional derivative: $T'[φ] = - T[φ']$
				  Action of derivative distribution $T'$ on test function $φ$ is minus action of original distribution $T$ on derivative of test function $φ'$.
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
						- $κ = \frac{8πG}{c^4} ≈ 2.07665 × 10^{-43}\,{\textrm N}^{-1}$: Einstein gravitational constant
						- $G$: gravitational constant
						- $c$: speed of light
						- $Λ$: [cosmological constant](https://en.wikipedia.org/wiki/Cosmological_constant)
				- The Einstein field equation is so complicated with all kinds of tensors and curvatures! 🫤
				  id:: 67bdb94a-e172-43f9-a59e-a97756fef1f4
				- Einstein use curvature to refer to spacetime warping because it's crutial in General Relativity: [curvature = force](((67b5c77d-c42c-4dc5-8d47-fd82f535177a))) in [equivalence principle](https://en.wikipedia.org/wiki/Equivalence_principle) and various curvatures in ((67bdaa5e-66c0-4874-8ca6-95032208e06d)).
				- However, the spacetime distribution represented by its density is much more intuitive and more fundamental, which is defined directly by the metric tensor.
					- Spacetime distortion of proper spacetime when projected onto a flat Cartesian coordinate system:
						- *Compression/Contraction*: Proper distance/interval at the herenow is greater than the coordinate distance/interval observed by an external observer.
						- *Stretch/Dilation*: Proper distance/interval at the herenow is less than the coordinate distance/interval observed by an external observer.
					- Spacetime distribution around a massive object, like the Sun 🌞, as shown in [Schwarzschild metric](https://en.wikipedia.org/wiki/Schwarzschild_metric)
						- Proper distance ($ds$) and proper time interval ($dτ$) in spherical coordinates $(t, r, θ, φ)$ with signature convention (+, -, -, -)
						  $${ds}^2 = c^2 {dτ}^2 \;=\; ( 1 - \frac{R_s}{r} )c^2 {dt}^2 \; - ( 1 - \frac{R_s}{r} )^{-1} dr^2 \; - r^2 {dΩ}^2$$
						  with ${dΩ}^2 = ({dθ}^2 + (\sin θ)^2 {dφ}^2)$ and [Schwarzschild radius](https://en.wikipedia.org/wiki/Schwarzschild_radius) $R_s = {2GM}/{c^2}$
						- **Stretch/dilation** of time: The coefficient $(1 - R_s/r)$ of  ${dt}^2$ is large near the Sun. This means that proper time intervals are shorter than coordinate time intervals.
						- **Compression/contraction** of radial distances: The coefficient $(1 - R_s/r)^{-1}$ of ${dr}^2$ is small near the Sun. This means that proper radial distances are greater than coordinate radial distances.
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