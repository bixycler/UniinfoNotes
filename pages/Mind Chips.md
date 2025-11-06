

- LLM is at the end opposite to program
  collapsed:: true
	- [The Illusion of Thinking](https://ml-site.cdn-apple.com/papers/the-illusion-of-thinking.pdf): Understanding the Strengths and Limitations of Reasoning Models via the Lens of Problem Complexity
		- > We found that LRMs have limitations in exact computation: they fail to use explicit algorithms and reason inconsistently across puzzles.
		- Large Reasoning Models (LRMs) are Large Language Models (LLMs) focused on step-by-step thinking. This is called Chain of Thought (CoT) which facilitates problem solving by guiding the model to articulate reasoning steps.
		- After a threshold of problem complexity, the models simply stopped trying.
		- Jing Hu: "AI is just sophisticated pattern matching, no thinking, no reasoning" and “AI can only do tasks accurately up to a certain degree of complexity.”
	- [This article](https://www.forbes.com/sites/hessiejones/2025/08/04/despite-billions-in-investment-ai-reasoning-models-are-falling-short/) refers to predictive AI as an alternative to LLM, but it is not scalable.
	- Another approach is setting up agents for LLMs, but the agent itself is a traditional program, hence unable to learn.
	- Uninet's approach: develop from the middle out.
- [ELM](https://github.com/LaurieLonecrow/AsterMind-ELM) = SVM version of SLFN.
  collapsed:: true
	- Extreme Learning Machine (ELM) is a single-hidden-layer feedforward neural network (SLFN) that learns instantly by computing the output weights analytically in one shot, leaving the hidden layer random.
	- The random hidden layer acts like the kennel in Support Vector Machine (SVM) to project the input into a high-dimensional space so that they can be classified simply by linear separation at the output layer.