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

This is implemented in [`encoding_dsv4.py`](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro/raw/main/encoding/encoding_dsv4.py).

**Step 1 — Resolve `drop_thinking`** (in `encode_messages()`):

```python
effective_drop_thinking = drop_thinking
if any(m.get("tools") for m in full_messages):
    effective_drop_thinking = False
```

The check scans **all** messages (`full_messages = context + messages`). Once `tools` appears anywhere, `drop_thinking` is permanently disabled for all subsequent turns.

**Step 2 — Render each message** (in `render_message()`):

For assistant messages, the transition token between turns is decided by:

```python
if not drop_thinking and thinking_mode == "thinking":
    prompt += thinking_start_token        # <think> → expect reasoning
elif drop_thinking and thinking_mode == "thinking" and index >= last_user_idx:
    prompt += thinking_start_token        # <think> → only last assistant before user
else:
    prompt += thinking_end_token          # </think> → immediately close, no reasoning
```

When rendering the assistant's `reasoning_content`, it wraps it in the think block:

```python
thinking_part = reasoning_content or ""
if thinking_part:
    prompt += thinking_start_token        # <think>
    prompt += thinking_part               # reasoning text
    prompt += thinking_end_token          # </think>
prompt += content or ""                   # summary text after </think>
```

**Summary of `thinking_start_token` / `thinking_end_token` behavior:**

| Scenario | Transition token before assistant | Reasoning rendered? |
|---|---|---|
| Chat mode (`thinking_mode="chat"`) | `</think>` (immediately closed) | No |
| Thinking mode, no tools, old turn | `</think>` (closed) | No |
| Thinking mode, no tools, last turn | `<think>` (opened) | Yes |
| Thinking mode, tools present | `<think>` (opened for ALL turns) | Yes, for every turn |

### What the model *should* see (but doesn't)

Per the encoding logic, `reasoning_content` (`<think>` block) should be part of the encoded prompt that the tokenizer produces for the model's context window:

- **No tools, new round**: `<think>` from prior rounds stripped → model starts fresh each round.
- **With tools, any round**: `<think>` from all prior rounds AND sub-turns should be retained → full reasoning continuity.

**Empirical finding (2026-05-29)**: Tested by asking the model to recall its own `reasoning_content` from the immediately preceding turn. Result: **complete wipeout** — not even gist survives. The actual reasoning (verified via request logs) and the model's attempted reconstruction shared zero common content.

The `reasoning_content` is correctly passed by the OpenCode client (verified in OpenRouter request logs — otherwise DeepSeek would return a 400 error for tool calls). The root cause is unknown. Regardless: **in practice, across-round reasoning persistence does not work with this stack.**

Reference: [DeepSeek API Docs — Thinking Mode](https://api-docs.deepseek.com/guides/thinking_mode), [V4 HuggingFace Blog](https://huggingface.co/blog/deepseekv4), [V4 Tokenizer README](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro/raw/main/encoding/README.md), [`encoding_dsv4.py`](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro/raw/main/encoding/encoding_dsv4.py)
