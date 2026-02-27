Let's init a simple core for Corkei:

Basic architecture
- Corkei is a multi-agent system whose context is a graph. 
- Each context node contains a text (in Markdown), and a list of its child nodes.
  + The main text contains its properties, its description, and summary of each child node.
- Each agent is provided a context tree, which is a tree view of the context graph projected from its root node.
  + The context tree is traversed in a depth-first maner to write the textual context given to the AI model.
  + The text content of a node is considered its "0 child" in traversal, hence expanded first.
  + The conversation history is a thread across various nodes in the tree, but usually at leaf nodes. 
  + While the whole conversation history is stored permanently as a chain (linked list of turns) in the context graph, only the recent portion of it is fetched to the end of the textual context given to the AI model.
  + Each node (turn) in the conversation contains a list of links (graph edges) to its related nodes in the context tree. This mapping is done by the agent as a part of the output from the AI model.
  + Each turn, the agent updates links in the current turn node and and contents in the related nodes if any, which is the main work. The response to user is optional, just like a procedure returning "void".
- For this simple init, we start with only the main agent (orchestrator), but leave space for multiple agents.

AI models
- At first, use Gemini Interactions API for simplicity, but leave space for local models to be integrated later.
- Use `cached_content` to pass the context tree, and `contents` to pass the recent conversation history.

UI
- At first, show both conversation window and the context graph.
