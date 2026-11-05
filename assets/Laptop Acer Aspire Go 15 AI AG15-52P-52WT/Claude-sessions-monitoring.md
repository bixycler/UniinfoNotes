# Claude Sessions Monitoring

Reference for how the agent sessions on this laptop are observed and kept moving, and what is currently running. Related: [Ubuntu-Acer-CPU-throttle-and-system-freeze.md](issues%20on%20Ubuntu/Ubuntu-Acer-CPU-throttle-and-system-freeze.md), where a Paseo agent was working when the 2026-10-29 freeze happened.

## Setup

Two Claude logins run side by side, so their quotas are independent:

| Where | Login | Plan |
|---|---|---|
| Paseo agents (they launch the Claude CLI) | the CLI's account | Max 20x (upgraded from Max 5x on 2026-11-05) |
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
- **Current state:** live since 2026-11-05 (the `live` flag exists). It has sent one real nudge so far, to agent 875594e at 04:47:55, which resumed on its own. With the Max 20x plan the limits will rarely be hit, so expect long stretches with only the periodic idle polling and no log lines beyond `started`.
- **Mode:** dry-run unless the file `~/.config/paseo-quota-nudge/live` exists. `touch` it to go live and `rm` it to return to dry-run, with no restart. In dry-run it only logs what it would send.
- **State and log:** `~/.local/state/paseo-quota-nudge/` holds `log`, `seen` (stalls already logged), `nudged` (live) and `nudged.dry` (dry-run). A lock file keeps one instance running.
- **Log lines:** each stall gives two lines, written once per agent and reset time: `limit hit, resets <time>, waiting` when it first sees the limit message, then `DRY-RUN would nudge` (or `nudged` when live) after the reset. The first line was added on 2026-11-05, because the watcher was silent between the stall and the reset.
- **Restarting it:** the `sleep 300` child keeps the lock file open, so killing the watcher by pid leaves the lock held. Kill that `sleep` too, or the new instance exits with "already running". `--once` also exits that way while the watcher runs.
- **Autostart:** `~/.config/autostart/paseo-quota-nudge.desktop`, with a 20 s delay.
- **Limits:** it covers Paseo agents only. It has no allow-list, and none is planned (decided 2026-11-01): any idle or errored agent meeting the conditions is nudged once live, including one stopped on purpose. The Pro desktop session cannot be polled.

### Desktop app session (Pro)

The Claude desktop app (Code tab) runs on the Pro login, separate from the Paseo agents' Max 20x quota. Its tools are slash commands you run yourself in the session; they cannot be polled from outside.

| Goal | Command |
|---|---|
| Session and weekly quota, with reset times | `/usage` |
| How full the conversation is | `/context` |

- **Recovery for Paseo agents:** a desktop session can step in from outside with `paseo logs <id>` and `paseo send <id> "<text>"`. Its Pro quota is independent of the agents' Max 20x quota, so a stalled agent does not stall the session that rescues it.
- **Gap:** nothing watches the desktop session itself. If it stalls on its own limit, you resume it by hand after the reset shown by `/usage`.
- **Working directory:** a general-purpose session belongs in `~/opt`, not in an Aperas-managed project folder. A session started in the wrong folder can be moved from inside the session.

## Status (2026-11-01)

The watcher is live since 2026-11-05 (see the 14:30 block below); the dry-run wording in this block is historical.

- **Watcher:** running (autostart brought it up after the reboot at 00:17 on 2026-11-01; last start 00:18), in **dry-run** mode. The live flag is not set.
- **Paseo daemon:** not running. The reboot did not bring it back, and it stays off until it is started by hand. While it is down every watcher pass skips silently, because `paseo ls` and `paseo logs` fail, and the passes resume once it is back.
- **Log:** only `started` lines so far (2026-10-29 twice, 2026-11-01 once), so the watcher has never seen a stalled agent and has never logged a would-nudge.
- **Tested:** reset-time parsing for `12:40am`, `5:10pm` and `Oct 29, 5:19am`, plus the dry-run and live paths against a stub `paseo` binary. Not tested against a real stalled agent.
- **Assumption to confirm:** the watcher assumes the limit message shows up in `paseo logs --tail 3`. If an agent stays stalled after its reset, check the log first, then how Paseo words the message.
- **Quota snapshot (2026-10-28):** the CLI account was at 7% of its five-hour window and 9% weekly (weekly reset 2026-11-03). The desktop account was at 2% session and 13% weekly (weekly reset 2026-11-04).

### 2026-11-05, 05:00 check (run at 04:37)

The watcher logged `DRY-RUN would nudge (limit reset at 2026-11-05T04:30:00+07:00)` for agent 875594e at 04:33:45, on its first pass after the reset. The reset time matches the agent's limit message ("resets 4:30am (Asia/Ho_Chi_Minh)"). `nudged.dry` holds the entry, `nudged` is empty, and the `live` flag does not exist, so nothing was sent.

`paseo-quota-nudge.sh --once` ran with the watcher stopped: it printed nothing, exited 0 and added no log line. The watcher had to be stopped first, together with its orphaned `sleep 300`, which holds the lock file. It was restarted afterwards (pid 2235052, `started` line at 04:37:50, dry-run).

Agent 875594e is idle and still stopped at the limit message. Quota readings: session 0% (the window has not started again), weekly 46% and weekly Fable 10%, both resetting 2026-11-10 at 08:59.

### 2026-11-05, afternoon

The watcher went live at 04:43 (the `live` flag exists) and nudged agent 875594e at 04:47:55 for the limit that reset at 04:30; the agent resumed on its own. The watcher was restarted at 14:31:51 and is still live. No stall has been logged since. Agent 875594e now runs on Sonnet 5.5 (switched in the Paseo UI, which persists across a Paseo restart) and is closed, so the watcher will not nudge it.

The CLI account was upgraded from Max 5x to Max 20x on the morning of 2026-11-05. The upgrade invalidated the old token, so a usage check at 15:42 failed with "Rate limited by Claude. Try again in 1h" until the CLI was logged in again. The relogin also rewrote `~/.claude.json`, which holds the profile of whichever login ran last; the Pro desktop app writes the same file, so the profile there can change again. The login token in `~/.claude/.credentials.json` is separate from that profile.

Quota after the upgrade (fetched 16:28): session 14%, resetting 19:30; weekly 4% and weekly Fable 0%, both resetting 2026-11-10 at 09:00. The reset times are unchanged by the upgrade; only the usage was reset. Earlier percentages (weekly 46% to 47%, Fable 10% to 13%) belong to the Max 5x plan and do not compare with these.

## Open to-dos

- The watcher is live. One caution remains: it nudges any idle agent stopped at a limit, including one stopped on purpose, and it does not cover closed agents. Isolating the Pro desktop app from `~/.claude` (for example by launching it with its own `HOME`) is still undecided.
