
Marktechpost

# This AI Paper from Stanford and Harvard Explains Why Most ‘Agentic AI’ Systems Feel Impressive in Demos and then Completely Fall Apart in Real Use

By Michal Sutter- December 24, 2025

Agentic AI systems sit on top of large language models and connect to tools, memory, and external environments. They already support scientific discovery, software development, and clinical research, yet they still struggle with unreliable tool use, weak long horizon planning, and poor generalization. The latest research paper ‘Adaptation of Agentic AI‘ from Stanford, Harvard, UC Berkeley, Caltech proposes a unified view of how these systems should adapt and maps existing methods into a compact, mathematically defined framework.

## How this research paper models an agentic AI system?

The research survey models an agentic AI system as a foundation model agent along with 3 key components. A planning module decomposes goals into sequences of actions, using static procedures such as Chain-of-Thought and Tree-of-Thought, or dynamic procedures such as ReAct and Reflexion that react to feedback. A tool use module connects the agent to web search engines, APIs, code execution environments, Model Context Protocols, and browser automation. A memory module stores short term context and long term knowledge, accessed through retrieval augmented generation. Adaptation changes prompts or parameters for these components using supervised fine tuning, preference based methods such as Direct Preference Optimization, reinforcement learning methods such as Proximal Policy Optimization and Group Relative Policy Optimization, and parameter efficient techniques such as low rank adaptation.


https://arxiv.org/pdf/2512.16301

## Four adaptation paradigms

The framework defines 4 adaptation paradigms by combining 2 binary choices. The first dimension is the target, agent adaptation versus tool adaptation. The second dimension is the supervision signal, tool execution versus agent output. This yields A1 and A2 for adapting the agent, and T1 and T2 for adapting tools.

A1, Tool Execution Signaled Agent Adaptation, optimizes the agent using feedback derived from tool execution. A2, Agent Output Signaled Agent Adaptation, optimizes the agent using a signal defined only on its final outputs. T1, Agent-Agnostic Tool Adaptation, optimizes tools without referring to a particular agent. T2, Agent-Supervised Tool Adaptation, optimizes tools under supervision from a fixed agent.


https://arxiv.org/pdf/2512.16301

### A1, learning from verifiable tool feedback

In A1, the agent receives an input x, produces a structured tool call a, the tools return a result y, and the learning objective O_tool measures tool success, for example execution correctness or retrieval quality. The paper covers both supervised imitation of successful tool trajectories and reinforcement learning that uses verifiable tool outcomes as reward.

Toolformer, ToolAlpaca, and Gorilla illustrate supervised A1 methods, since each uses execution results of real tools to construct or filter training traces before imitation. All of them keep the supervision signal defined at the tool behavior level, not at the final answer level.

DeepRetrieval is a central A1 reinforcement learning example. It frames query reformulation as a Markov decision process where the state is the user query, the action is a rewritten query, and the reward combines retrieval metrics such as Recall and nDCG, a format term, and, for text to SQL, SQL execution accuracy. The policy is trained with KL regularized Proximal Policy Optimization and the same objective covers literature search, corpus question answering, and text to SQL.

### A2, learning from final agent outputs

A2 covers cases where the optimization objective O_agent depends only on the final output o produced by the agent, even when the agent uses tools internally. The survey shows that supervising only o is not enough to teach tools, because the agent can ignore tools and still improve likelihood. Effective A2 systems therefore combine supervision on tool calls with supervision on final answers, or assign sparse rewards such as exact match accuracy to o and propagate them back through the full trajectory.

### T1, agent agnostic tool training

T1 freezes the main agent and optimizes tools so that they are broadly reusable. The objective O_tool depends only on tool outputs and is measured by metrics such as retrieval accuracy, ranking quality, simulation fidelity, or downstream task success. A1 trained search policies, such as DeepRetrieval, can later be reused as T1 tools inside new agentic systems without modifying the main agent.

### T2, tools optimized under a frozen agent

T2 assumes a powerful but fixed agent A, which is common when the agent is a closed source foundation model. The tool executes calls and returns results that the agent then uses to produce o. The optimization objective again lives on O_agent, but the trainable parameters belong to the tool. The paper describes quality weighted training, target based training, and reinforcement learning variants that all derive learning signals for the tool from the final agent outputs.

The survey treats long term memory as a special case of T2. Memory is an external store written and read through learned functions, and the agent remains frozen. Recent T2 systems include s3, which trains a 7 billion parameter searcher that maximizes a Gain Beyond RAG reward defined by a frozen generator, and AgentFlow, which trains a planner to orchestrate mostly frozen Qwen2.5 based modules using Flow GRPO.


https://arxiv.org/pdf/2512.16301

## Key Takeaways

- The research defines a precise 4 paradigm framework for adapting agentic AI by crossing 2 dimensions, whether adaptation targets the agent or tools, and whether the supervision signal comes from tool execution or from final agent outputs.
- A1 methods such as Toolformer, ToolAlpaca, Gorilla, and DeepRetrieval adapt the agent directly from verifiable tool feedback, including retrieval metrics, SQL execution accuracy, and code execution results, often optimized with KL regularized Proximal Policy Optimization.
- A2 methods optimize the agent from signals on final outputs, for example answer accuracy, and the paper shows that systems must still supervise tool calls or propagate sparse rewards through full trajectories, otherwise the agent can ignore tools while still improving likelihood.
- T1 and T2 shift learning to tools and memory, T1 trains generally useful retrievers, searchers, and simulators without a specific agent in mind, while T2 adapts tools under a frozen agent, as in s3 and AgentFlow where a fixed generator supervises a learned searcher and planner.
- The research team introduce an adaptation landscape that relates monolithic versus modular and local versus systemic control, and they argue that practical systems will combine rare A1 or A2 updates on a strong base model with frequent T1 and T2 adaptation of retrievers, search policies, simulators, and memory for robustness and scalability.

------
Check out the Paper and GitHub Repo. Also, feel free to follow us on Twitter and don’t forget to join our 100k+ ML SubReddit and Subscribe to our Newsletter. Wait! are you on telegram? now you can join us on telegram as well.


Michal Sutter
+ posts
Michal Sutter is a data science professional with a Master of Science in Data Science from the University of Padova. With a solid foundation in statistical analysis, machine learning, and data engineering, Michal excels at transforming complex datasets into actionable insights.

------

🙌 Follow MARKTECHPOST: Add us as a preferred source on Google.
Previous article
InstaDeep Introduces Nucleotide Transformer v3 (NTv3): A New Multi-Species Genomics Foundation Model, Designed for 1 Mb Context Lengths at Single-Nucleotide Resolution
Next article
A Coding Guide to Build an Autonomous Multi-Agent Logistics System with Route Planning, Dynamic Auctions, and Real-Time Visualization Using Graph-Based Simulation

---

RELATED ARTICLES

A Coding Implementation on Building Self-Organizing Zettelkasten Knowledge Graphs and Sleep-Consolidation...
Asif Razzaq - December 25, 2025

MiniMax Releases M2.1: An Enhanced M2 Version with Features like Multi-Coding...
Asif Razzaq - December 25, 2025

A Coding Guide to Build an Autonomous Multi-Agent Logistics System with...
Asif Razzaq - December 24, 2025

InstaDeep Introduces Nucleotide Transformer v3 (NTv3): A New Multi-Species Genomics Foundation...
Asif Razzaq - December 23, 2025

Google Health AI Releases MedASR: a Conformer Based Medical Speech to...
Asif Razzaq - December 23, 2025

How to Build a Proactive Pre-Emptive Churn Prevention Agent with Intelligent...
Asif Razzaq - December 23, 2025

Marktechpost
ABOUT US
Marktechpost is a California-based AI News Platform providing easy-to-consume, byte size updates in machine learning, deep learning, and data science research.
Contact us: Asif@marktechpost.com
FOLLOW US
   
© Copyright reserved @2025 Marktechpost AI Media Inc | Please note that we do make a small profit through our affiliates/referrals via product promotion in the articles
