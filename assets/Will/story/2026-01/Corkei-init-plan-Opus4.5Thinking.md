# Corkei Core Initialization

Initialize the foundational architecture for Corkei, a multi-agent system with a graph-based context structure. This establishes the core data model, agent framework, Gemini API integration, and basic UI.

## User Review Required

> [!IMPORTANT]
> **Gemini API Key**: The implementation will need a valid Gemini API key. Please confirm:
> 1. Do you have an API key to use, or should I add placeholder configuration?
> 2. Should the key be loaded from environment variables, a `.env` file, or configuration?

> [!WARNING]
> **Cached Content Limitations**: Gemini's `cached_content` has minimum token requirements (~32k tokens). For smaller context trees, we may need to fall back to including context directly in the prompt. The implementation will handle this gracefully.

---

## Proposed Changes

### Core Types & Graph System

#### [NEW] [types.ts](file:///home/dinhlx/source/Corkei/src/core/types.ts)
Core TypeScript type definitions:
- `ContextNode`: Node with markdown text, child node IDs, and metadata
- `ContextGraph`: Map of node IDs to nodes
- `Turn`: Conversation turn with role, content, timestamp, and node links
- `ConversationChain`: Linked list of turns
- `Agent`: Interface for agent implementations
- `ModelProvider`: Abstraction for AI model backends

#### [NEW] [ContextGraph.ts](file:///home/dinhlx/source/Corkei/src/core/ContextGraph.ts)
Graph management class:
- Node CRUD operations (create, read, update, delete)
- Tree projection from a root node
- Depth-first traversal for textual context generation
- Child node summary management

---

### Conversation System

#### [NEW] [Conversation.ts](file:///home/dinhlx/source/Corkei/src/core/Conversation.ts)
Conversation history management:
- `ConversationHistory` class managing the turn chain
- Methods to add turns and link them to context nodes
- `getRecentTurns(n)` to fetch last N turns for the AI model
- Serialization for persistence

---

### Agent System

#### [NEW] [Agent.ts](file:///home/dinhlx/source/Corkei/src/core/Agent.ts)
Agent interface and base implementation:
- `Agent` abstract class with context tree root
- `processTurn()` method: sends context + history to model, parses response
- Response parsing to extract node updates and user reply

#### [NEW] [MainAgent.ts](file:///home/dinhlx/source/Corkei/src/core/MainAgent.ts)
Main orchestrator agent:
- Extends `Agent` base class
- System prompt defining its role and output format
- Handles node link updates and content modifications
- Entry point for user interactions

---

### AI Model Integration

#### [NEW] [GeminiClient.ts](file:///home/dinhlx/source/Corkei/src/core/GeminiClient.ts)
Gemini API wrapper:
- Implements `ModelProvider` interface
- Uses `@google/generative-ai` or direct REST calls
- `sendWithCachedContext()`: uses `cached_content` for context tree
- `send()`: regular chat completion with contents
- Fallback handling for small contexts

#### [NEW] [ModelProvider.ts](file:///home/dinhlx/source/Corkei/src/core/ModelProvider.ts)
Abstract model provider:
- Interface for `generate(context, history)` → response
- Configuration for model parameters
- Designed for easy extension to local models (Ollama, etc.)

---

### UI Components

#### [MODIFY] [Corkei.tsx](file:///home/dinhlx/source/Corkei/src/core/Corkei.tsx)
Main application component:
- Split-view layout: conversation panel + graph panel
- SolidJS signals for reactive state
- Integrates `ConversationPanel` and `GraphPanel`

#### [NEW] [ConversationPanel.tsx](file:///home/dinhlx/source/Corkei/src/core/ui/ConversationPanel.tsx)
Chat interface:
- Message list with user/assistant styling
- Input field with send button
- Auto-scroll to latest message
- Loading state during AI response

#### [NEW] [GraphPanel.tsx](file:///home/dinhlx/source/Corkei/src/core/ui/GraphPanel.tsx)
Context graph visualization:
- D3 force-directed graph layout
- Nodes as circles with text preview
- Edges showing parent-child and reference links
- Click to select node, highlight active path

#### [NEW] [Corkei.css](file:///home/dinhlx/source/Corkei/src/core/Corkei.css)
Styles for Corkei UI:
- Split-panel layout with resizable divider
- Dark theme matching existing `index.css`
- Chat message bubbles
- Graph node styling

---

### Dependency Addition

#### [MODIFY] [package.json](file:///home/dinhlx/source/Corkei/package.json)
Add Gemini SDK:
```diff
  "dependencies": {
+   "@google/generative-ai": "^0.21.0",
    "d3": "^7.9.0",
```

---

## File Structure After Changes

```
src/core/
├── types.ts              # Core type definitions
├── ContextGraph.ts       # Graph management
├── Conversation.ts       # Conversation history
├── Agent.ts              # Agent base class
├── MainAgent.ts          # Main orchestrator
├── ModelProvider.ts      # AI model abstraction
├── GeminiClient.ts       # Gemini API wrapper
├── Corkei.tsx            # Main app component
├── Corkei.css            # UI styles
└── ui/
    ├── ConversationPanel.tsx
    └── GraphPanel.tsx
```

---

## Verification Plan

### Manual Testing
Since this is an initial setup with UI components, verification will be manual:

1. **Dev Server Startup**
   ```bash
   cd /home/dinhlx/source/Corkei && npm run dev
   ```
   - Verify no TypeScript compilation errors
   - Verify app loads in browser at `http://localhost:5173`

2. **UI Layout Check**
   - Verify split-view layout renders correctly
   - Left panel shows conversation interface
   - Right panel shows graph visualization

3. **Basic Interaction Test** (requires API key)
   - Type a message and send
   - Verify loading state appears
   - Verify response displays (or graceful error if no API key)

4. **Graph Visualization**
   - Verify initial nodes render in graph
   - Verify nodes are draggable
   - Verify clicking a node highlights it

> [!NOTE]
> Full integration testing will require a valid Gemini API key. Without it, we can still verify the UI renders and core classes compile correctly.
