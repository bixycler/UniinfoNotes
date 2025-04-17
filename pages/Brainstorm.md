# Brainstorm
id:: 6653538a-30aa-423f-be89-848ad9c7e331
	- ((6651ecba-793d-43c5-8020-a9f260b032d8)) This is the ((665c92d1-565b-4911-a706-b32af429c3aa)) place for ((66536578-c4d3-43f1-b35c-bf71120f0570)) as well as the store of recent brainstorms.
	-
	- ## Brainstorming > ((67760e05-2ea1-4f0e-aaa6-158edca80df5))
	  id:: 6773eb97-ec58-4c48-a017-cd0de2d82e08
		- DOING [long. ((67fcbbc6-915b-4d28-b9cf-098e916cdc86)) ⊥ ((67ed2855-1512-4db0-bc61-f714ea891106))] = [exp map](https://en.wikipedia.org/wiki/Exponential_map_(Lie_theory)) [real ⊥ imaginary]
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
					- [Argument principle](https://en.wikipedia.org/wiki/Argument_principle): number of zeros - poles = contour integral of the function's [logarithmic derivative](https://en.wikipedia.org/wiki/Logarithmic_derivative).
					  $$ {\frac{1}{2πi}} \oint_{C} {f'(z) \over f(z)} \,dz = Z-P $$
					- [Residue](https://en.wikipedia.org/wiki/Residue_(complex_analysis)) theorem: number of singularities
					  $$ \operatorname{Res}(f,a_k)={1 \over 2πi} \oint_{\gamma} f(z)\,dz\ $$
					- [Cauchy's integral theorem](https://en.wikipedia.org/wiki/Cauchy%27s_integral_theorem)
					- Videos
					  collapsed:: true
						- [Video by TheGrayCuber](https://youtu.be/RBRVL6nP2Dk)
						  {{video https://youtu.be/RBRVL6nP2Dk}}
		- DOING Conic rotations: rotation (circular) = flow (parabolic) = transformation (hyperbolic)
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
		- DOING normed space + parallelogram law = inner product space
		  collapsed:: true
		  :LOGBOOK:
		  CLOCK: [2025-04-02 Wed 19:53:56]
		  CLOCK: [2025-04-02 Wed 19:54:26]
		  :END:
			- Sum of squares is just the [diagonalized version](https://en.wikipedia.org/wiki/Diagonal_form) of [quadratic form](https://en.wikipedia.org/wiki/Quadratic_form).
				- (Squared) norm and parallelogram law are relations on the diagonal (containing squares, at zero angle), whereas inner product is the relation at anywhere (any angle).
				- The dual view of inner product and matrix, whose diagonal contain squares, is also the dual view of projective thread and function graphing.
					- The matrix is just a “meta” of orthogonal coordinates.
					- Ref: ((67e37475-13e3-4a9f-af60-7bec7517c108))
			- Relations
				- parallelogram law ⇒ inner product ⇒ orthogonality ⇒ Pythagorean theorem
				- Pythagorean theorem + structure of inner product space ⇒ ((67ee0ea8-b68d-4adc-8d57-2f0a7be16d22)) ⇒ parallelogram law
			- DOING Inner product of unit vectors = ((66f3c97f-94e8-4783-96c5-fe9cadf4f9a9))
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
							- Stuck in confusion between curvature & distribution: Copilot, DeepSeek
							- Arrived at the language of distribution: Grok 3, Meta AI
								- Meta AI still had some confusions at first but quickly corrected after my suggestions.
								- Grok 3 directly [described](https://grok.com/share/bGVnYWN5_41d4563d-f787-47cb-adfa-66cc81da8f08) the distribution in the language of density without any suggestion 😊. However, further refinements revealed many confusions. I've tried hard to resolve those confusions and finally complete the 3-way relativity.
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