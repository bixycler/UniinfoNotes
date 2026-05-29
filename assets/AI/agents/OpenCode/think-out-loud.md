# Think Out Loud – Workaround for LLM Without Thinking Mode

## Context

**Problem:** OpenRouter + OpenCode has a long-standing bug with DeepSeek V4 models (Flash/Pro) when native thinking mode is enabled. The `reasoning_content` field is not properly round-tripped in multi-turn conversations, causing 400 errors. Multiple PRs have tried and regressed. (See GH issues: #24190, #24261, #24569, #24803, #28716, etc.)

**Workaround:** Disable native thinking mode and manually instruct the model to "think out loud" using `[think]...[/think]` blocks in the regular content field.

## How It Works

The model wraps its reasoning in `[think]...[/think]` tags. These are:
- Sent as regular `content` tokens (not the special `reasoning_content` field)
- Visible in the conversation but scoped as internal reasoning
- Not subject to the `reasoning_content` round-trip requirement that causes OpenCode to crash

```
[think]...reasoning here...[/think]
Final answer here.
```

## Effectiveness

| Aspect | Native Thinking | `[think]` Workaround |
|---|---|---|
| API stability with OpenRouter | ❌ Crashes on multi-turn | ✅ Stable |
| Reasoning depth | ✅ Full (RL-optimized) | ⚠️ Moderate |
| Backtracking/exploration | ✅ Trained behavior | ⚠️ Weaker, more linear |
| Tool call planning | ✅ Multi-turn within reasoning | ⚠️ Tendency to commit early |
| Simple tasks | ✅ | ✅ ~Same |
| Hard multi-step SE tasks | ✅ | ⚠️ Some degradation |

### Observed Behavioral Differences in Practice

- **Gemini Flash**: Follows the `[think]` instruction easily, internalizes the pattern naturally.
- **DeepSeek Flash**: Ignores the `[think]` instruction by default; requires explicit user reminders. The model's default mode is direct output — the thinking wrapper is an unnatural overlay.

## Why Native Thinking Is Better (Architectural)

DeepSeek V4's native thinking mode is not just "the model saying think step by step." It's:
1. **RL-optimized**: The model was trained with reinforcement learning specifically to produce reasoning in the dedicated `reasoning_content` field. Behaviors like backtracking, self-verification, and alternative exploration were explicitly rewarded.
2. **Different inference pathway**: The API's `reasoning_effort` parameter (`high`/`max`) controls a token budget and likely uses different sampling parameters for reasoning tokens vs answer tokens.
3. **Calibrated sweet spot**: The R1 Thoughtology paper shows these models have an optimal reasoning depth. Native mode targets it; manual CoT has no such calibration.
4. **Tool call handling**: Native mode supports multi-turn tool calls within the reasoning trace before producing a final answer — difficult to replicate with manual `[think]`.

## Workarounds for the OpenRouter Bug (Ranked)

1. **`[think]` blocks** (current approach) — Trade some reasoning quality for stability. Best for most users.
2. **Disable thinking mode entirely** — Fast but loses significant reasoning capability (~10-16% on hard benchmarks).
3. **Configure interleaved settings** in OpenCode provider config (`reasoning_content` mode) — May work for some setups.
4. **Update to latest OpenCode** — Fixes get attempted, but regress frequently.

## Lessons from This Session

- The `[think]` workaround catches things that no-thinking mode misses (e.g., using `bash` instead of `write` when the edit tool is restricted).
- The main obstacle in complex SE tasks isn't model quality but OpenCode crashing on every other turn in tool-heavy sessions.

## References

- https://github.com/anomalyco/opencode/issues/24190 — `reasoning_content` not round-tripped
- https://github.com/anomalyco/opencode/issues/24261 — DeepSeek thinking mode multi-turn failure
- https://github.com/anomalyco/opencode/issues/24569 — V4 Pro OpenRouter error
- https://github.com/anomalyco/opencode/issues/24803 — `content[].thinking` must be passed back
- https://github.com/anomalyco/opencode/issues/28716 — reasoning_content missing on session continuation
- DeepSeek Thinking Mode docs: https://api-docs.deepseek.com/guides/thinking_mode
- R1 Thoughtology paper: https://d6108366.hf-mirror.com/papers/2504.07128
