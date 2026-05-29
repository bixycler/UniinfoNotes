# DeepSeek Thinking Mode — Turn/Round & `reasoning_content`

## Key Concepts

### Tokens → API fields

| Raw token | API field | Meaning |
|---|---|---|
| `BOS` | — | Beginning of sequence |
| `EOS` | `finish_reason: "stop"` | End of assistant turn |
| `DSML` block | `finish_reason: "tool_calls"` | Model invoked a tool |
| `<think>...</think>` | `reasoning_content` | Chain-of-thought reasoning block |

When `thinking` mode is enabled, the model outputs `<think>...</think>` before any response or tool call.

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

### `reasoning_content` & `drop_thinking`

The `drop_thinking` parameter (default `true`) controls whether `<think>` blocks from prior rounds are kept when encoding the next request.

| Scenario | Pass `reasoning_content` back? | `drop_thinking` behavior |
|---|---|---|
| No tool calls | **No** — ignored if passed (or 400 on legacy `deepseek-reasoner`) | `true`: `<think>` stripped before `<｜User｜>` |
| Tool calls present | **Yes** — must preserve in all subsequent requests (sub-turns & rounds) | `false` (auto): `<think>` retained across all rounds |

When tools are present, `drop_thinking` is **automatically disabled**. From the [V4 blog](https://huggingface.co/blog/deepseekv4#interleaved-thinking-across-tool-calls):

> *"V4 preserves reasoning content across user message boundaries when the conversation contains tool calls. The model retains the complete reasoning history across all rounds, including across user turns."*

This is implemented in [`encoding_dsv4.py`](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro/raw/main/encoding/encoding_dsv4.py):

```python
# Resolve drop_thinking: if any message has tools defined, don't drop thinking
effective_drop_thinking = drop_thinking
if any(m.get("tools") for m in full_messages):
    effective_drop_thinking = False
```

The check scans **all** messages (`full_messages = context + messages`). Once `tools` appears anywhere in the conversation, `drop_thinking` is permanently disabled for all subsequent turns — both sub-turns and across user round boundaries.

### What the model "sees"

The `reasoning_content` (`<think>` block) is part of the **encoded prompt** that the tokenizer produces for the model's context window. The model sees it if `drop_thinking` allows:

- **No tools, new round**: `<think>` from prior rounds stripped → model starts fresh each round.
- **With tools, any round**: `<think>` from all prior rounds AND sub-turns is retained → full reasoning continuity.

**Known caveat**: The blog claims "retains the complete reasoning history," but our experiments show the model cannot reproduce prior `reasoning_content` verbatim — it recalls the *gist* but not the exact text. "Retains" means the `<think>` blocks are *present in the context window*, not that the model has perfect recall of them. This is expected behavior (models are not tape recorders), but worth noting as a gap between the marketing claim and practical reality.

Reference: [DeepSeek API Docs — Thinking Mode](https://api-docs.deepseek.com/guides/thinking_mode), [V4 HuggingFace Blog](https://huggingface.co/blog/deepseekv4), [V4 Tokenizer README](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro/raw/main/encoding/README.md), [`encoding_dsv4.py`](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro/raw/main/encoding/encoding_dsv4.py)
