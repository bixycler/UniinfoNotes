# Ubuntu on Acer Aspire Go 15 AI (AG15-52P-52WT): CPU stuck at 400 MHz, and a full system freeze

Status: **open**. Last updated 2026-10-29.

## Environment

| Item | Value |
|---|---|
| CPU | Intel Core Ultra 5 115U (Meteor Lake), 4 logical CPUs |
| GPU | Intel Meteor Lake iGPU `00:02.0` (PCI ID `7d45`), driver `xe` |
| Wi-Fi | Realtek RTL8851BE (`01:00.0`, driver `rtw89`) |
| OS / kernel | Ubuntu, `7.0.0-38-generic` |
| Power | `thermald` and `power-profiles-daemon` both active (profile: performance) |
| Kernel command line | `intel_pstate` enabled (default); `i915.force_probe=!7d45 xe.force_probe=7d45` (forces `xe` instead of `i915`) |

## Problems

### A. Intermittent throttle to ~400 MHz

- Seen 2026-10-17 (about 46 h after boot) and 2026-10-22 (from about 14:57, about 44 h after boot).
- The whole system becomes sluggish, the fan stays quiet, and the package temperature sits at only about 64-67 °C.
- Opening an Electron app such as Paseo or Antigravity (even idle) could tip it into the state. Closing it restored the clock, which suggests a state that follows load, not a plain thermal limit.
- **Clears when the user session ends:** the fan spins up again right after logging out, before any shutdown or reboot. So the stuck state belongs to something running in the user session, not to the platform firmware. (Not yet tested whether log out and back in, without a reboot, is enough to restore full speed.)
- After the reboot the same workload ran at 4.2 GHz and 84-87 °C with four `sha256sum` workers. A CPU-only load did not trigger it: Paseo, Antigravity and `cpustress.sh` on all four CPUs ran together without throttling.
- **Not seen again** during the 6 d 21 h that followed (2026-10-22 17:16 to 2026-10-29 14:27). The log has three isolated single samples under 900 MHz (Oct 24 04:39, Oct 25 06:47, Oct 28 13:33) that were not examined.

### B. Whole-system freeze, 2026-10-29 about 14:27

- Mouse pointer frozen, Ctrl-Alt-F1..F7 did nothing, for minutes. Needed a forced power-off.
- **Trigger observed:** a few minutes earlier there was a brief stall (pointer stuck for about 1-2 s) that recovered, with nothing heavy running. The full freeze came right when Paseo was opened to resume a session and the agent started working. No log entry corresponds to the brief stall. Before the freeze the agent made 2-3 tool calls, wrote that the API key must be kept out of all documents, made 1-2 more tool calls, and then the machine froze.
- The load itself was never logged: the last surviving `cpulog` sample is from before the agent started.
- **Replay, 2026-10-29 16:04** (Paseo restarted 15:59, same session opened 16:00, same prompt sent 16:04:03; `turbostat` logging once per second): no freeze. The agent answered differently (one shell read, then clarifying questions in about 29 s). The transcript wrote its first burst (about 5.7 KB: queue entries, the user message, attachments) within 0.15 s of sending, and the API request line at 0.4 s. The first model output arrived at about 12 s.
  - Machine during the replay: package power peaked at 17.2 W (average about 10 W), package 63-72 °C, iGPU asleep at least 83 % of the time (`GFX%rc6` minimum 83.5 %) and under 0.15 W. `cpulog` showed no limit reasons beyond the normal baseline and no `gtThrottle`.
  - Timing of the original: the agent had been working for a while (2-3 tool calls, a message, 1-2 more tool calls). In the replay the same stages took about 29 s. So the freeze came roughly 30 s or more after the prompt (about 14:28:20 or later). The last file times on disk are from 14:27:49 to 14:27:54, so files kept growing in memory while no ext4 journal commit completed, which points to a stall in the storage or filesystem path (or in memory reclaim) that began first and then spread, not an instant total freeze. This is an inference from file times and the observed behaviour.
  - The agent was running when it froze, so its activity (file reads, transcript writes, API traffic) is not ruled out as the trigger. The replay with a different answer did not freeze, so one run of the same prompt is not enough to blame the prompt itself.
- Last good `cpulog` sample 14:26:51 (53 °C, 3.3 GHz, load 0.17). Last journal entries 14:27:04 (`sysstat-collect` timer ticks).
- Nothing was logged afterwards: no oops, MCE, hung-task, thermal, NVMe or PCIe error. Timers stopped too, so the whole machine stalled, not just an application.
- Both records go through the page cache and were not synced, so the journal's 14:27:04 is the last surviving entry, not the freeze time.
- **Freeze time from file damage.** Two files being appended at the time have a run of NUL bytes (`^@`) at the end of the data that was lost:
  - `cpulog-20261029.tsv`: one run of 796 bytes, exactly one sample line (795 bytes plus newline), the 14:27:21 sample. The 14:26:51 sample survived; no 14:27:51 sample exists.
  - The Paseo session transcript (`a2cc753f-....jsonl` under `~/.claude/projects/-home-will-opt-projects-AI-Twin-Brain/`): the file ends with 3271 NUL bytes, the agent turn of the session being resumed. Its last valid entry is from 2026-10-28 23:02 (+07). The file's modification time is 14:27:48.9, so the first write of the resumed agent turn reached the file at that moment.
  - Both runs sit inside a block that was already allocated. On ext4 the new file size can be committed to the journal while the data page is still waiting in memory (writeback happens after about 30 s), which gives exactly this pattern after an unclean stop. So the NULs fit an ordinary hard stop and are not evidence of a disk fault.
  - The on-disk size and time stamp come from the last ext4 journal commit that completed (commits happen about every 5 s). That commit happened between 14:27:49 and 14:27:54. It is a lower bound for when the machine was alive, not the freeze time: the agent kept working for tens of seconds afterwards (see below), so later commits did not complete.
- `/sys/fs/pstore` is empty, so no kernel dump was saved.
- Problems A and B may be unrelated. The freeze happened with the CPU cool and the clock normal.

## What has been ruled out or established

| Finding | Evidence |
|---|---|
| Not die temperature | Throttled at 64-67 °C, ran 86-87 °C unthrottled |
| Not the cpufreq driver | Same symptoms on `intel_pstate` and on `acpi-cpufreq` |
| Not the OS policy | `cpupower` showed the allowed range 400 MHz to 4.20 GHz; EPP `performance`; HWP request min 5, max 53 |
| Nothing in kernel or `thermald` logs during an episode | `journalctl -b -1` |
| Not a fixed uptime | The ~44 h pattern did not repeat over 6 d 21 h |
| `cpuinfo_cur_freq` is missing under `intel_pstate` | Normal for HWP; `cpupower` then reports "Unable to call hardware" and falls back to the kernel's estimate |
| Genuine thermal throttling happened once | 2026-10-23 from about 16:26: package 85-102 °C, `package_throttle_count` rose by about 535k. Different from the cool 400 MHz symptom |

### Baseline (healthy) values to compare against

| Field | Healthy value |
|---|---|
| `0x64F` limit reasons, "now" | `[]` (sticky bits `THERMAL,PL1,PL2` persist after any heavy load) |
| iGPU throttle `reasons` | `none` |
| RAPL PL1 / PL2 / PL4, MSR view | 200 W / 57 W / 114 W |
| RAPL PL1 / PL2 / PL4, MMIO view | 28 W / 57 W / 114 W (the hardware enforces the lower) |
| `BD_PROCHOT` (`0x1FC` bit 0) | on (another chip may throttle the CPU) |
| Four-core full load | about 15.9 W, 72 °C, 4.17 GHz |
| `package_throttle_count` at idle | a few per half hour |
| `HWP_STATUS` (`0x777`) | `EXCURSION_TO_MIN` (bit 2) is sticky and sets again easily; not a reliable onset marker |
| Normal desktop use (turbostat, 1 s samples) | package about 9-10 W average, up to 18 W; 46-84 °C; iGPU asleep at least 82 % of the time and under 0.15 W |
| Memory | `MemAvailable` about 8 GB of 15 GB, swap unused, dirty pages under 4 MB |
| Pressure stall (`/proc/pressure`) | memory about 0; I/O stays near 0 except about 5 % over five minutes during package installs; CPU under 1 % |
| Blocked (D-state) tasks / NVMe in flight | none / 0 |
| NVMe `smart-log` (2026-10-29) | `critical_warning` 0, `available_spare` 100 %, `percentage_used` 0 %, `media_errors` 0, `num_err_log_entries` 0, no thermal-management events, 35-36 °C. `unsafe_shutdowns` **46** (`power_cycles` 337); `power_on_hours` reads 98, less than one boot lasted, so it is not a reliable age |

## Common factor

Both problems were triggered by Paseo (an Electron app whose GPU process uses `/dev/dri/renderD128` on Wayland): problem A tipped over when Paseo was opened, and problem B happened when its agent started working. Antigravity (also Electron) had a milder effect on problem A. A pure CPU load (`cpustress.sh`) did not trigger either. Together with the clue that ending the user session clears problem A, this points at the user-session GPU path (Xe driver, compositor, Electron GPU process) more than at the CPU power limits. Unproven: no snapshot taken during an episode contained GPU power or residency data.

## Suspects

1. **Xe GPU driver.** `xe 0000:00:02.0: [drm] *ERROR* TLB invalidation fence timeout` was logged 9 times in the boot before the freeze: Oct 23 (2×), Oct 24 (3×), Oct 25 (2×), Oct 28 (1×), Oct 29 01:16 (1×). The same error appears in reports of freezes and GPU resets on Meteor Lake. Circumstantial: earlier occurrences did not freeze the machine, and no root cause or fix for this kernel was found.
2. **Run-time power limit (problem A).** The MMIO PL1 (healthy 28 W) could be lowered by firmware or `thermald`; never observed during an episode. Also possible: external PROCHOT (`BD_PROCHOT` is on) or an embedded-controller state.
3. **Wi-Fi DMA fault (low rank).** The IOMMU logged 33 DMA read faults from `01:00.0` (RTL8851BE, address 0x0) in that boot, every few hours, the last on Oct 28 20:54.
4. **Storage or filesystem stall, or a memory-reclaim stall (freeze).** Raised by the file times: journal commits stopped about 30 s or more before the freeze became visible. The NVMe health log is clean (no media errors, no error-log entries, no thermal events), so a failing drive is unlikely; a transient stall in the drive, the filesystem or memory reclaim is not ruled out. `cpulog` now records memory, pressure-stall and NVMe counters, so a repeat should show which one stalled first. The NUL runs themselves are ordinary for an unclean stop.

## Tooling set up for this investigation

- `~/.local/bin/cpulog.sh`, run as the root service `cpulog.service`. It samples every 30 s into `~/tmp/cpulog/cpulog-YYYYmmdd.tsv`. It writes `snapshot-*.txt` when the average clock is under 900 MHz with load above 0.3. Manual snapshot: `sudo ~/.local/bin/cpulog.sh --snapshot`.
  - Logs clocks, temperatures, the decoded MSRs (`0x64F`, `0x19C`, `0x1B1`, `0x774`, `0x777`, `0x1FC`), the iGPU throttle reasons, both RAPL limit views, throttle counters, and the top processes.
  - Also logs memory (`mem=`: available, swap used, dirty, writeback), pressure-stall readings (`psi_mem=`, `psi_io=`, `psi_cpu=`: avg10 some/full plus the running total in microseconds) and NVMe block counters (`nvme=`: reads, writes, requests in flight, busy ms; no command is sent to the drive).
  - The log is flushed to disk after every sample and snapshot (`SYNC_EACH=1`, default; `SYNC_EACH=0` turns it off), so a freeze loses at most the sample being written.
  - `xeErrors=` is the number of `xe ... *ERROR*` kernel lines logged this boot, read from the journal (0.04 s even over a week-long boot). A jump between two samples dates an error to within 30 s.
  - The snapshot's `turbostat` call also reports package sleep-state share and the iGPU power, sleep-state share, clocks and busy share.
  - Snapshots also hold memory, the biggest processes, the pressure files, blocked (D-state) tasks with the kernel function they wait in, the NVMe block counters and a trimmed `nvme smart-log` (5 s limit). A snapshot takes about 3.6 s (2 s of it the `turbostat` sample, 1.2 s the second `top` sample).
  - At start it clears the sticky HWP excursion bit (`wrmsr -a 0x777 0`).
- `~/.local/bin/cpustress.sh`, a load generator: `-n` workers, `-t` seconds, `-c` CPU list.
- Manual notes can be added to the TSV as lines starting with `#`.

## What to do when problem A recurs

1. Do not close anything. Run `sudo ~/.local/bin/cpulog.sh --snapshot`.
2. Read `limit64F` / `now=[...]` (names the limiter), `rapl=` (MMIO PL1 below 28 W means a lowered limit), `hwpst`, `gtThrottle`, and how fast `pkgThrottleCount` climbs.
3. For a freeze or stall, read the last samples before it: `psi_io=` / `psi_mem=` totals jumping, `nvme=` with `inflight` above 0 while the counters stand still, and `mem=` dirty pages growing without writeback. After a forced power-off, `unsafe_shutdowns` in the NVMe log should rise from 46 to 47.

## Open next steps

- [x] Add memory, swap and pressure-stall readings and NVMe counters to `cpulog` (done 2026-10-29). Note also that the file indexer `localsearch-3` was among the top CPU users in the minutes before the freeze (it indexes `node_modules` trees under the project directories).
- [ ] When problem A recurs: after the snapshot, log out and back in (no reboot) and see whether the clock and fan recover. Then try closing only Paseo's processes.
- [x] Add iGPU power and residency columns to the `cpulog` snapshot's `turbostat` call (done 2026-10-29: `Pkg%pc6`, `GFXWatt`, `GFX%rc6`, `GFXMHz`, `GFXAMHz`, `GFX%C0`), to see whether the iGPU is consuming the package power budget during an episode.
- [x] Flush the `cpulog` log to disk after every sample (done 2026-10-29).
- [x] Set journald `SyncIntervalSec=5s` (done 2026-10-29, `/etc/systemd/journald.conf.d/sync.conf`, journald restarted), so the system journal keeps more of the last seconds before a freeze. A copy of the file is in `~/.local/share/cpulog/journald-sync.conf`.
- [x] Add a count of `xe ... ERROR` lines to each `cpulog` sample (done 2026-10-29, field `xeErrors=`).
- [ ] A/B test the GPU driver for about a week: boot with `i915` instead of `xe` (reverse the two `force_probe` options) and see if freezes stop. Not yet checked that `i915` works on kernel 7.0.
- [ ] Check for a newer kernel or `linux-firmware`.
- [x] NVMe health: `nvme-cli` installed and the SMART log read (clean, see Baseline).
- [ ] Look at the three isolated low-clock samples (Oct 24 04:39, Oct 25 06:47, Oct 28 13:33) and Oct 23 at 16:26 to see what was running.

## Related problem, resolved

Antigravity (v2.19.1 and v2.24.0) failed to show its window on 2026-10-19. The cause was a line in `~/.profile` that started `cpulog.sh &` unconditionally. Antigravity resolves its shell environment with `bash -ilc`, and the background job kept the capture pipe open, so the capture never finished. Fix: launch it detached with stdio redirected (later replaced by the systemd service) and keep only one copy.

## Log

| Date | Event |
|---|---|
| 2026-10-17 | First recorded throttle episode; snapshot at uptime 1 d 22 h 22 min |
| 2026-10-19 | Antigravity hang traced to `~/.profile` |
| 2026-10-22 | Throttle episodes from about 14:57. Tried `acpi-cpufreq` (no change). `cpulog` made a root service; extended logging; reboot at 15:54 and again at 17:16 back to `intel_pstate` |
| 2026-10-23 | Heavy thermal load from about 16:26 (85-102 °C). Xe TLB timeouts begin |
| 2026-10-24..28 | No sustained throttle; more Xe TLB timeouts |
| 2026-10-29 | A brief 1-2 s pointer stall a few minutes earlier; then a full system freeze, roughly 30 s or more after the prompt was sent to Paseo's resumed agent (after 2-3 tool calls, a message and 1-2 more tool calls). The last ext4 commit was at 14:27:49-54. Forced power-off. pstore empty; `nvme-cli` missing |
| 2026-10-29 | Transcript NUL tail truncated (backup kept). 16:04 replay of the same session and prompt: no freeze, light load, different agent answer |
| 2026-10-29 | NVMe SMART log clean (`unsafe_shutdowns` 46). `cpulog` extended with memory, pressure-stall and NVMe counters, per-sample flush and new snapshot sections |
| 2026-10-29 | `cpulog` gained the `xeErrors=` field and iGPU columns in the snapshot; journald flush interval set to 5 s |
