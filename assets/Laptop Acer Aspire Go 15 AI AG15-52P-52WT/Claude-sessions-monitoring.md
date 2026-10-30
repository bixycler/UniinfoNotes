# Claude Sessions Monitoring

Reference for how the agent sessions on this laptop are observed and kept moving, and what is currently running. Related: [Ubuntu-Acer-CPU-throttle-and-system-freeze.md](issues%20on%20Ubuntu/Ubuntu-Acer-CPU-throttle-and-system-freeze.md), where a Paseo agent was working when the 2026-10-29 freeze happened.

## Setup

Two Claude logins run side by side, so their quotas are independent:

| Where | Login | Plan |
|---|---|---|
| Paseo agents (they launch the Claude CLI) | the CLI's account | Max 5x |
| Claude desktop app (Code tab) | a separate account | Pro |

Paseo is installed in `~/opt/Paseo`. Its daemon listens on `127.0.0.1:6767`, and its state lives in `~/.paseo/` (agent records under `~/.paseo/agents/<workspace>/<agent-id>.json`). Each Paseo agent has its own ID, which differs from the underlying Claude session ID; the session transcript is `~/.claude/projects/<project>/<session-id>.jsonl`.

## Tools

### Paseo CLI

`~/opt/Paseo/resources/bin/paseo` (not on `PATH`). All commands are read-only unless noted.

| Goal | Command |
|---|---|
| List agents (status, cwd, age) | `paseo ls` (`--json` for scripts) |
| Details: status, `UpdatedAt`, pending permissions, cost | `paseo inspect <id>` |
| Timeline of what the agent did | `paseo logs <id> --tail <n>` |
| Stream live output | `paseo attach <id>` |
| Block until idle | `paseo wait <id>` |
| Interrupt a running agent (changes state) | `paseo stop <id>` |
| Send a message (changes state) | `paseo send <id> "<text>" [--no-wait]` |
| Quota windows and reset times | `paseo usage ls`, `paseo usage inspect <report-id>` (`--refresh` bypasses the cache) |

A hang shows as `Status: running` with an `UpdatedAt` that stops advancing, so detection needs `inspect`, because `ls` does not show `UpdatedAt`. `paseo usage inspect` reports the five-hour session window and the weekly windows with their reset times, for the CLI account only. The desktop app's quota is covered under [Desktop app session (Pro)](#desktop-app-session-pro).

### Quota nudge watcher

`~/.local/bin/paseo-quota-nudge.sh` restarts agents that stopped on a Claude quota limit.

- **Polling:** every 300 s (`NUDGE_INTERVAL`) it lists agents that are idle or in error.
- **Detection:** for each one it looks for `hit your … limit · resets <time> (<tz>)` in the last three log entries and works out the reset time from the clock time, using the agent's `UpdatedAt` as the reference.
- **Nudge conditions:** it sends only if the reset has passed, the agent has not been updated since the reset, and it has not already been nudged for that reset.
- **Message:** `The usage limit has reset. Please continue where you left off.` (`NUDGE_MESSAGE` overrides it).
- **Mode:** dry-run unless the file `~/.config/paseo-quota-nudge/live` exists. `touch` it to go live and `rm` it to return to dry-run, with no restart. In dry-run it only logs what it would send.
- **State and log:** `~/.local/state/paseo-quota-nudge/` holds `log`, `nudged` (live) and `nudged.dry` (dry-run). A lock file keeps one instance running.
- **Autostart:** `~/.config/autostart/paseo-quota-nudge.desktop`, with a 20 s delay.
- **Limits:** it covers Paseo agents only and has no allow-list, so any agent meeting the conditions can be nudged once live. The Pro desktop session cannot be polled.

### Desktop app session (Pro)

The Claude desktop app (Code tab) runs on the Pro login, separate from the Paseo agents' Max 5x quota. Its tools are slash commands you run yourself in the session; they cannot be polled from outside.

| Goal | Command |
|---|---|
| Session and weekly quota, with reset times | `/usage` |
| How full the conversation is | `/context` |

- **Recovery for Paseo agents:** a desktop session can step in from outside with `paseo logs <id>` and `paseo send <id> "<text>"`. Its Pro quota is independent of the agents' Max 5x quota, so a stalled agent does not stall the session that rescues it.
- **Gap:** nothing watches the desktop session itself. If it stalls on its own limit, you resume it by hand after the reset shown by `/usage`.
- **Working directory:** a general-purpose session belongs in `~/opt`, not in an Aperas-managed project folder. A session started in the wrong folder can be moved from inside the session.

## Status (2026-10-30)

- **Watcher:** running (autostart brought it up after the 2026-10-29 reboot; last start 14:37 on 10-29), in **dry-run** mode. The live flag is not set.
- **Log:** only `started` lines so far, so the watcher has never seen a stalled agent.
- **Tested:** reset-time parsing for `12:40am`, `5:10pm` and `Oct 29, 5:19am`, plus the dry-run and live paths against a stub `paseo` binary. Not tested against a real stalled agent.
- **Assumption to confirm:** the watcher assumes the limit message shows up in `paseo logs --tail 3`. If an agent stays stalled after its reset, check the log first, then how Paseo words the message.
- **Quota snapshot (2026-10-28):** the CLI account was at 7% of its five-hour window and 9% weekly (weekly reset 2026-11-03). The desktop account was at 2% session and 13% weekly (weekly reset 2026-11-04).

## Open to-dos

- Watch for the first real quota stall and confirm detection; then enable `live`.
- Decide whether to add an allow-list of agent IDs before going live.
