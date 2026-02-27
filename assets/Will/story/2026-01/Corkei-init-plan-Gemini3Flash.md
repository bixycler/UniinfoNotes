# Corkei Core Initialization

Initialize the core architecture of Corkei, a multi-agent system with a graph-based context and a tree-view projection for AI agents.

## Proposed Changes

### Core Data Structures
Define the fundamental types for the system.

#### [NEW] [types.ts](file:///home/dinhlx/source/Corkei/src/core/types.ts)
- `GraphNode`: Representation of a node in the graph (ID, Markdown text, children IDs).
- `Graph`: Mapping of IDs to `GraphNode`.
- `Turn`: A single conversation turn (role, content, links to graph nodes).
- `Conversation`: Linked list of `Turn` nodes.

### AI Integration
Wrap the Gemini API and provide a structure for local models.

#### [NEW] [ai.ts](file:///home/dinhlx/source/Corkei/src/core/ai.ts)
- `GeminiAgent`: Wrapper for Gemini Interactions API using `cached_content` and `contents`.
- `AgentInterface`: Interface for future model integrations.

### Agent Logic
Implement the orchestrator and the context tree projection.

#### [NEW] [orchestrator.ts](file:///home/dinhlx/source/Corkei/src/core/orchestrator.ts)
- DFS traversal for context tree projection.
- Prompt construction logic.
- Graph update management.

### UI Implementation
Build the visual components.

#### [MODIFY] [Corkei.tsx](file:///home/dinhlx/source/Corkei/src/core/Corkei.tsx)
- Main layout with context graph and conversation window.
#### [NEW] [GraphView.tsx](file:///home/dinhlx/source/Corkei/src/core/GraphView.tsx)
- D3-based graph visualization.
#### [NEW] [ChatView.tsx](file:///home/dinhlx/source/Corkei/src/core/ChatView.tsx)
- Chat interface for interacting with the orchestrator.

## Verification Plan

### Automated Tests
- Unit tests for DFS traversal and prompt generation.
- Mock AI responses to test graph updates.

### Manual Verification
- Test the chat interface with Gemini API.
- Verify the graph updates visually in the `GraphView`.
