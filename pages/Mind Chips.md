- BP-free models: Basically, the global target (loss function) and global effect (backprop) are replaced by the local ones.
  collapsed:: true
	- [Equilibrium Propagation (EP)](https://pmc.ncbi.nlm.nih.gov/articles/PMC5415673/) is like a neutral FABRIK: each weight is updated according to its 2 ends (neurons' state/value) only.
	- EP is a special kind of Contrastive Hebbian Learning and Contrastive Divergence, which are in the general class of local learning rules.
	- [Predictive Coding](https://youtu.be/l-OLgbdZ3kk) uses 2 types of neuron for each node, just like the obop model: prediction = op, error = ob.
- Obop model in various fields
  collapsed:: true
	- Unithread: ob viewcone = input circle; op = output arrow
		- FoC: ob = division = content -> form; op = multiplication = form -> content
			- In function: form = parameter; content = variable value
			- Network: form = connection weight; content = node values (state)
			- Uninet: no static distinction between form & content. Their roles are relative to position.
				- In the sequence of sustents, lower intent = higher content
		- Quantum: only when the whole input circle receives full data, is the op activated to [take action](((6847e7fa-0d57-425c-b035-1a62db7725e6))).
		- Qualiton: The whole input circle is qualified by matching with its internal image.
	- Water scoop: ob viewcone = scoop; op = pounding
	- $f(t) = \exp(t)$: ob viewcone = $f(t) dt$; op = `+=`
	- Neuron: ob viewcone = tree of dendrites; op = activation (action potential passed through axon)
	-
- ((68e6334c-6b4c-487f-8999-24940497245f))