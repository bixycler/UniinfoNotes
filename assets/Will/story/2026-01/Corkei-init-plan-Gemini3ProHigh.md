# Implementation Plan - Corkei Core Init

## Goal Description
Initialize the core infrastructure for Corkei, a multi-agent system based on a context graph. This includes defining the data structures for the graph, implementing the agent's context tree projection and traversal, and creating a basic UI to visualize both the conversation and the context graph.

## User Review Required
> [!IMPORTANT]
> - **AI Integration**: We will start with a Mock LLM service to verify the architecture before hooking up Gemini.
> - **SolidJS**: The project is using SolidJS. All UI components will be built using SolidJS.
> - **Graph Visualization**: We will use a simple D3 or SVG based visualization for the context graph initially.

## Proposed Changes

### Core Logic (`src/core`)
#### [NEW] [types.ts](file:///home/dinhlx/source/Corkei/src/core/types.ts)
- Define `ContextNode` interface (id, content, childrenIds).
- Define `Agent` interface.
- Define `Turn` interface for conversation history.

#### [NEW] [graph.ts](file:///home/dinhlx/source/Corkei/src/core/graph.ts)
- Implement `ContextGraph` class/functions to manage nodes and connections.
- Implement `ContextTree` projection logic (DFS traversal, visited check to avoid cycles if any, though "tree view" implies handling recursions or just breaking them).

#### [NEW] [agent.ts](file:///home/dinhlx/source/Corkei/src/core/agent.ts)
- Implement basic `OrchestratorAgent`.
- Implement `traverseContext` function.
- Implement mock `generateResponse` function.

#### [NEW] [llm.ts](file:///home/dinhlx/source/Corkei/src/core/llm.ts)
- Abstract `LLMService` interface.
- Implement `MockLLMService`.

### UI (`src/ui`)
#### [NEW] [ConversationView.tsx](file:///home/dinhlx/source/Corkei/src/ui/ConversationView.tsx)
- Component to display the linear conversation thread.

#### [NEW] [GraphView.tsx](file:///home/dinhlx/source/Corkei/src/ui/GraphView.tsx)
- Component to visualize the context nodes and their connections.

### Main Entry
#### [MODIFY] [Corkei.tsx](file:///home/dinhlx/source/Corkei/src/core/Corkei.tsx)
- Wire up the Agent, Graph, and UI components.
- Initialize a sample graph.

## Verification Plan

### Automated Tests
- We will rely on manual verification via the UI for this initial phase as we are building visual components and basic logic integration.

### Manual Verification
1.  **Graph Rendering**: Verify that the sample context graph is rendered correctly in the UI.
2.  **Context Projection**: Check console logs or UI debug info to verify the agent "sees" the correct traversing order of the text.
3.  **Conversation Flow**: Simulate a user message, check if the "Agent" adds a turn to the conversation history and updates the graph (mock update).
