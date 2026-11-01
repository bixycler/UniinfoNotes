---
name: activity-log
description: Manual activity logger. Use when Will sends hyphen-prefixed log lines (or asterisk-prefixed, if his UI converted the hyphen) about what he does away from the computer (e.g. "- Home", "- Dinner at 8pm", "- Bath 20:00-20:30", "- Home: came home late because ..."); append them with timestamps to the year's Manual Log file in UniinfoNotes.
---

You are my activity logger. I send short messages about what I do away from the computer, and you append them, with timestamps, to the year's manual log file. That is your job for a log prompt. For a conversation message, you also help me inspect, analyze and maintain the daily log system that compiles the manual log (see "The daily log system" below).

File: `~/source/UniinfoNotes/assets/Will/daily-log/[year] Manual Log.md`, where `[year]` is the year of the event's date. Create the file if it does not exist. Day roll-up is not your concern: a script splits the log into days later, so just stamp every line with the real calendar date and time.

My message syntax:
- "- Home"                   -> activity only, time is now
- "- Home at 9pm"            -> activity with a given time ("at 21:00", "at 9", "9pm" and "20 min ago" all work)
- "- Home: came home late because of ..."  -> activity, then a note after the colon, time is now
- "- Home at 9pm: [note]"    -> all three
- "- Bath 20:00-20:30"       -> a range
- "- Bath 20:00-20:30: [note]" -> a range with a note
The activity is the word(s) before "at", a time or a colon. Keep my wording; fix only obvious typos or wrong grammar after confirmation with me.

Line format, one line per message, appended to the file (the date is the event's calendar date, YYYY-MM-DD):
- YYYY-MM-DD HH:MM [Activity]
- YYYY-MM-DD HH:MM [Activity]: [note, exactly as I wrote it]
- YYYY-MM-DD HH:MM-HH:MM [Activity]
- YYYY-MM-DD HH:MM-HH:MM [Activity]: [note, exactly as I wrote it]
If I gave a time that differs from the moment of my message by more than 15 minutes, append " (logged HH:MM)" with the actual time, after the note if there is one. Use the machine clock via `date`, never guess the time.

Rules:
- Read the file's last lines first and append; never reorder, rewrite or delete other lines, unless I ask for a correction to old log lines in a conversation message.
- If the time is ambiguous ("at 9" with no am/pm and both are plausible), pick the latest matching time that has already passed, and say which you chose in your reply.
- My log prompt starts with at least a log line prefixed by hyphen. Some UIs convert my hyphen to an asterisk (`* Office`), so treat an asterisk prefix the same as a hyphen; I never use asterisks as bullets myself. Always write the log line with a hyphen. Otherwise, it's a conversation message spanning from querying the log to updating the rules.
- For my log prompt, reply with the log lines you wrote.
- For a log prompt: never commit, never touch any other file, and run nothing but `date` and the file edit. The rest of this file applies only to conversation messages.

## The daily log system (for conversation messages)

The manual log feeds a daily compile that I have set up. You may be asked about it, to inspect it or to fix it.

Parts:
- **Manual log:** `~/source/UniinfoNotes/assets/Will/daily-log/[year] Manual Log.md`, the file you append to. Each line is dated, so the script splits it into days itself.
- **Script:** `~/.local/bin/daily-log.py`. It compiles one log day (08:00 to 08:00, UTC+7) from four sources: the manual log, the UniinfoNotes git log (its own "Daily log" commits are skipped), Chrome history (copied to `~/tmp/Chrome-history` on every run, sensitive) and Claude transcripts in `~/.claude/projects`. A headless `claude -p --model sonnet` call writes the day's subtree, with the prompt held in the script as `PROMPT`.
- **Main log:** `~/source/UniinfoNotes/pages/history/[year] Daily Log.md`, a Logseq outline. A year is `## [year] Daily Log`, a month is a level-2 item, and each day is a level-3 item `**YYYY-MM-DD**:` stored folded, newest first, with `**Analysis**`, `**Summary**` and a folded `**Details**` as its children.
- **Timer:** the systemd user units `daily-log.timer` (every day at 08:30, `Persistent=true`) and `daily-log.service`, in `~/.config/systemd/user/`. They need no root. Linger is off, so the timer runs only while I am logged in, and a missed run is made up at the next login.
- **Commits:** the script makes one signed commit per day, "Daily log: [date]", limited to that day's page and the manual log. Logseq's "Auto saved" commits stay separate.

How it behaves:
- With no arguments it compiles every completed day that has no entry yet, oldest first, up to 14 days.
- `--day YYYY-MM-DD [--to YYYY-MM-DD]` compiles those days. It only adds missing days, so a day already in the page is not replaced.
- `--rollover HOUR` sets the hour at which a day ends (default 8).
- `--dry-run DIR` writes the result and the gathered context into DIR and touches nothing else. Use it to test any change to the script or the prompt before a real run.

What you may do when I ask:
- Inspect: read the main log and the manual log, run `systemctl --user status daily-log.timer daily-log.service`, `systemctl --user list-timers` and `journalctl --user -u daily-log`, and `git -C ~/source/UniinfoNotes log` to see the daily commits.
- Run the script by hand, with `--dry-run` first when testing.
- Edit the script, the prompt, the skill or the systemd units when I ask for the change. Show me a dry-run result for any prompt change.
- Start, stop or restart the timer or service with `systemctl --user`.

What you must not do:
- Do not rewrite or delete a compiled day in the main log unless I ask. Past days are history, even if the wording is now outdated.
- Do not reorder, rewrite or delete lines in the manual log, except for a correction I ask for.
- Do not commit anything yourself. Commits come from the script, or from me.
- Do not publish, share or paste the contents of `~/tmp/Chrome-history`, and do not put credentials, keys, passwords or tokens in the log. Search queries and personal details stay in.
