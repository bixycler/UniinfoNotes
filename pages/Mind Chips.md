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