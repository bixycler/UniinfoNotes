- DOING Add a `mobile` remote repo to track only UniinfoNotes/mobile
  :LOGBOOK:
  CLOCK: [2025-09-09 Tue 12:55:42]
  :END:
- Pyramid:
	- Linear data (raw)
	- Folded info (indexed, compressed)
	- Structured knowledge (format, tree, graph, algorithm)
	- Balanced wisdom (obop, uninet, autonoton)
		- Obop use the old knowledge to balance the imbalance (new info, problem, question) into new knowledge (integrated info, result, answer).
		- The imbalance is the dynamic arrow driving the effect circle. => Must be active or lost.
		- The balanced result is the new circle crystallized from the static/stable effect circle. => Can be put down into storage.
- ---
- LlamaIndex' [knowledge graph](https://www.llamaindex.ai/blog/building-knowledge-graph-agents-with-llamaindex-workflows): `KnowledgeGraphIndex` & [`KnowledgeGraphQueryEngine`](https://docs.llamaindex.ai/en/stable/examples/query_engine/knowledge_graph_query_engine/), [`KnowledgeGraphRAGQueryEngine`](https://docs.llamaindex.ai/en/stable/examples/query_engine/knowledge_graph_rag_query_engine/) (hybrid graph + vector)
  collapsed:: true
	- Indexing
		- LLM-based `KnowledgeGraphIndex`, or
		- Program-based `nbb-logseq` parser to JSON for LlamaIndex or Neo4j ingestion.
	- Querying
		- LLM-based `KnowledgeGraphQueryEngine`, or
		- Graph DB query like Cypher.
- [GraphRAG](https://github.com/microsoft/graphrag)
  collapsed:: true
	- Extract meaningful, structured data from unstructured text using the power of LLMs.
	- ⚠️ Warning: GraphRAG indexing can be an expensive operation!
	- Indexing
		- Black-box LLM generates a semantic knowledge graph (nodes = entities, edges = relations) from your documents.
		- The graph is stored internally (no fine control over schema, entity granularity, or edge types).
	- Querying
		- Your natural-language query is interpreted by LLM → turned into a graph query (retrieving relevant nodes + their neighbors).
		- Retrieved subgraph is combined with chunked text for final answer generation.
-