# DeepSeek Thinking Mode — Turn/Round & `reasoning_content`

## Key Concepts

### Tokens → API fields

| Raw token (from tokenizer) | API field | Meaning |
|---|---|---|
| `<｜begin▁of▁sentence｜>` | — | Beginning of sequence (BOS) |
| `<｜end▁of▁sentence｜>` | `finish_reason: "stop"` | End of assistant turn |
| `<｜DSML｜tool_calls>` block | `finish_reason: "tool_calls"`, `tool_calls: [...]` | Model invoked a tool |
| ` ` | `reasoning_content` | Chain-of-thought reasoning block |

When `thinking` mode is enabled, the model outputs `... ` before any response or tool call.

### Round vs. Sub-turn

```
Round (bounded by <｜User｜>...<｜end▁of▁sentence｜>)
  ├── Sub-turn 1: model → tool_calls + content
  ├── tool result → model
  ├── Sub-turn 2: model → tool_calls + content
  ├── tool result → model
  └── Sub-turn N: model → content (no tool_calls) ⇒ round ends
```

- **Sub-turn**: Client loop continues while `tool_calls != None` (or `finish_reason == "tool_calls"`). `content` may be non-empty (text prefix before tool invocation).
- **Round**: Ends when `finish_reason == "stop"` (i.e. `tool_calls is None`). New round starts with a `{"role": "user"}` message.

### `reasoning_content` passing rules

| Scenario | Pass `reasoning_content` back? | `drop_thinking` behavior |
|---|---|---|
| No tool calls | **No** — will be ignored (or cause 400 on legacy `deepseek-reasoner`) | Enabled: reasoning stripped before `<｜User｜>` |
| Tool calls present | **Yes** — must preserve in all subsequent requests | Disabled automatically: reasoning retained across all rounds |

The client appends the full assistant message (including `reasoning_content`, `content`, `tool_calls`) to `messages` for the API. The provider's inference engine uses `drop_thinking` to decide whether to keep ` ` blocks from prior rounds when encoding the next request.

### Why the model cannot "remember" its own reasoning

`reasoning_content` is consumed by the **inference pipeline** for continuity across tool-call sub-requests. It is **not included in the model's visible context window** (`messages` array). The model only sees `role: "assistant"` entries with `content` and `tool_calls` — never its own `reasoning_content` from prior turns.

Reference: [DeepSeek API Docs — Thinking Mode](https://api-docs.deepseek.com/guides/thinking_mode), [V4 HuggingFace Blog](https://huggingface.co/blog/deepseekv4)
