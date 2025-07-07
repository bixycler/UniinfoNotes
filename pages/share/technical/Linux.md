## Linux
id:: 66949495-3846-4f89-9ea5-c62b624d282c
:LOGBOOK:
CLOCK: [2024-07-15 Mon 11:04:21]
:END:
	- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Linux
	- Distributions
	  id:: 66faa5fa-fdde-4dd5-a27f-442cea4ba47a
		- ### Ubuntu
		  id:: 66faa5fa-52aa-4e12-8a55-c6ad22ebdfa7
		  collapsed:: true
			- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Ubuntu
			- ((6651ecba-793d-43c5-8020-a9f260b032d8)) ((66faa5fa-52aa-4e12-8a55-c6ad22ebdfa7)) is a popular [Linux distribution](((66faa5fa-fdde-4dd5-a27f-442cea4ba47a))) derived from [Debian](https://en.wikipedia.org/wiki/Debian) and is backed by large online communities like [Ask Ubuntu](https://en.wikipedia.org/wiki/Ask_Ubuntu).
				- Software management: ((68357072-2dcb-42b5-a228-15ed904010f8)) with [deb](https://en.wikipedia.org/wiki/Deb_(file_format)) packages
				- Desktop management: ((66b1cfa4-808f-407c-bf5a-b93812604b5d))
			- ((665359ff-79f1-4669-b10b-f2b0e633a7c1))
				- ((68358033-084f-461c-b470-5311a5127f0c))
	- ### concepts
	  id:: 6735b188-e391-498b-a01b-35797616f7b6
		- file mode bits
		  id:: 671f467e-6f1f-4436-a0dd-9a03055e11a9
		  collapsed:: true
		  shown in ((671f4355-d2ad-46ca-af05-db330a8a4fec)) and in ((671f50a5-2987-4e65-b28d-7b08bdcf0a06)), modified by ((671f5863-b392-406a-b6d2-408902e37e29))
			- ((665359c0-a89a-41b5-9f28-503f79107a08))  [Notation of traditional Unix permissions](https://en.wikipedia.org/wiki/File-system_permissions#Notation_of_traditional_Unix_permissions), [Structure of File Mode Bits](https://www.gnu.org/software/coreutils/manual/html_node/Mode-Structure.html)
			- First char: file type {`-`,`d`,`l`,`p`,`s`,`c`,`b`} = {regular file, directory, symlink, FIFO named pipe, socket, character stream (terminal), random-access block device (disk)}
				- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Unix_file_types
			- Last 3×3 chars: (owner, group, other)×(`r`,`w`,{`x`,`s`,`S`})
			  id:: 6772a6d3-8aec-4e7f-af3c-5373bcc9b221
				- `r` = readable, `w` = writable
				- `x` = executable, `s` = [setuid](https://en.wikipedia.org/wiki/Setuid)/[setgid](https://en.wikipedia.org/wiki/Setgid) executable, `S` = setuid/setgid non-executable
		- inode
		  id:: 671f438b-617a-4fc5-88ee-e42f07b67b50
		  collapsed:: true
		  file index-data node
			- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Inode
			- hard link
			  id:: 671f5617-1163-4ffc-b65a-b3234e471db0
			  is just an alias, i.e. a full-path-name, for an ((671f438b-617a-4fc5-88ee-e42f07b67b50)).
				- All aliases are equivalent, no source/main name like ((671f5784-d89b-4a4a-a6e7-f02a0805322f)).
				- `mv`/`rm` just move/remove names, not the inode. The inode is only removed when there's no name pointing to it.
				- New MacOS (10.5+) and some (old) Linux distributions allow hard link of directory, but most modern Linux distributions prohibit it due to its ambiguousness
		- symbolic link (symlink)
		  id:: 671f5784-d89b-4a4a-a6e7-f02a0805322f
		  collapsed:: true
			- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Symbolic_link
			- Mimics:
				- Windows' shortcut in GUI works similarly to symlink, but doesn't work at the command level.
			- Equivalence: Git's symlink, [NTFS link](https://en.wikipedia.org/wiki/NTFS_symbolic_link)
				- Git's symlink is configured with [core.symlinks](https://git-scm.com/docs/git-config#Documentation/git-config.txt-coresymlinks). When `symlinks = false`, symbolic links are checked out as plain text files containing the target as text.
		- newline at end-of-file (EOL@EOF)
		  id:: 6793437b-5ee5-4f7f-a547-bb9e15ac5883
		  collapsed:: true
			- The [POSIX standard](https://en.wikipedia.org/wiki/POSIX) defines a [text file](https://pubs.opengroup.org/onlinepubs/9799919799/basedefs/V1_chap03.html#tag_03_387) as a sequence of [lines](https://pubs.opengroup.org/onlinepubs/9799919799/basedefs/V1_chap03.html#tag_03_185), each ending with a [newline character](https://pubs.opengroup.org/onlinepubs/9799919799/basedefs/V1_chap03.html#tag_03_224).
				- Newline = end-of-line = [carriage-return +] line-feed: `EOL` = `⏎` = `\n` = `␤` = `LF` = `␊` (`CR` `LF` = `␍␊`)
			- That means a line without newline is an [incomplete line](https://pubs.opengroup.org/onlinepubs/9799919799/basedefs/V1_chap03.html#tag_03_172).
				- UNIX & traditional text processors like C compilers [requires the last newline](https://unix.stackexchange.com/a/18789/566548) for proper functioning.
				- E.g. `wc -l`, shell's `read` will ignore the "incomplete last line".
				- `diff` and `git diff` show the [warning `\ No newline at end of file`](((556c799a-e364-49ad-94ab-5d14bef766ca)))
			- When concatenating files missing last newlines, the first line of next file will be merged with the last line of the previous file, which is usually an unintended effect.
			- Some shells like `zsh` highlights the missing last newline on the console with the mark `%` in inverse color.
			- Last newline in editors
			  id:: 616bfc2b-05f2-4a85-a094-dd771aa12cd1
			  :LOGBOOK:
			  CLOCK: [2025-01-24 Fri 19:01:03]--[2025-01-24 Fri 19:39:52] =>  00:38:49
			  :END:
				- Linux editors **automatically add newline** when saving, but _don't show difference_ between a file with or without the last newline.
					- `vim`, `gedit` show **no blank line** at the end! A blank line means a truely empty line, i.e. `^\n`!
					- `vim` shows `[noeol]` on its status line when openning a file missing the last newline.
					  collapsed:: true
						- ![no-last-newline-vim.png](../assets/TextProcessing/last-newline/no-last-newline-vim.png)
					- `nano` always show a blank line at the end!
					- `emacs` behavior depends on the file mode.
				- Stop Linux editors from fixing files missing newline at the end of file.
				  id:: 67aacefc-f707-49f4-b33d-ed73f63e3a64
					- `vim`: `:set nofixendofline` in the current file or in `.vimrc`
					- `nano`: just use `nano -L`, or set `alias nano="nano --nonewlines"`
					- `gedit`: `gsettings set org.gnome.gedit.preferences.editor ensure-trailing-newline false`
					- `emacs`: `(setq mode-require-final-newline nil)` in `.emacs`
				- IDEs usually have settings to automatically add newline on save, and _show the last newline **as a blank line**_ which can be used to check for its presence.
				  id:: 67aabd6b-a257-4eb7-8363-3d29035a30f4
					- VS Code
					  collapsed:: true
						- Settings > Text Editor > Files > Insert Final Newline
						  ![editor-settings-onsave-lastNewline-VSCode.png](../assets/TextProcessing/last-newline/editor-settings-onsave-lastNewline-VSCode.png)
						- The last newline is distinguished by the dimmed line number.
						  ![last-newline-VSCode.png](../assets/TextProcessing/last-newline/last-newline-VSCode.png)
					- JetBrains IDEs
					  collapsed:: true
						- Settings > Editor > General > On Save > Ensure vevy saved file ends with a line break
						  ![editor-settings-onsave-lastNewline-IDEA.png](../assets/TextProcessing/last-newline/editor-settings-onsave-lastNewline-IDEA.png)
					- Eclipse
					  collapsed:: true
						- [Window >] Preferences > (Java, Javascript, etc.) Code Formatters > New Lines > At end of file
						  ![editor-settings-onsave-lastNewline-Eclipse-2024.png](../assets/TextProcessing/last-newline/editor-settings-onsave-lastNewline-Eclipse-2024.png)
					- Notepad++
					  collapsed:: true
						- ![last-newline-Notepad++.png](../assets/TextProcessing/last-newline/last-newline-Notepad++.png)
						- Automatic newline can be added with EditorConfig plugin. [ref](https://github.com/notepad-plus-plus/notepad-plus-plus/issues/1426#issuecomment-578472737)
						  `insert_final_newline = true`
	- ### commands
		- process handling
		  collapsed:: true
			- pid
			  := "process ID"
			- ((66c6c8e6-54be-4b4f-80a1-c535d429d05c))
			- `pidof`
			  find the pid of a process via process name.
			- `pgrep`, `pkill`, `pidwait` `$xregex`
			  collapsed:: true
			  look up, signal, or wait for processes based on process name pattern (Extended Regular Expression) and other attributes.
				- `-s`, `-$signal`: see list of signals in ((67f4eaf8-4b5d-4807-ab6f-d43cd38c4860))
				- `-f`, `--full`: Match against the full command line (with arguments), instead of only the process name as normal.
				- `-v`, `--inverse`: Negates the matching.
				  collapsed:: true
					- Note, in `pkill`, the short option `-v` is disabled to avoid accidental usage of the option.
				- `-x`, `--exact`: Match exactly.
				- Options for `pgrep`
					- `-l`, `--list-name`, `-a`, `--list-full`: List PID and process name or full command line.
			- `kill`, `killall`
			  id:: 67f4eaf8-4b5d-4807-ab6f-d43cd38c4860
			  collapsed:: true
			  send a signal (`TERM` [default], `KILL`, `STOP`, `QUIT`, `INT`, `HUP`, `CONT`, `NULL`) to process(es) via pid (with `kill`) or process name (with `killall`).
				- To **force** stop, send `KILL` = `9` signal: `kill -s KILL` or `kill -9`
					- `STOP` = `24`: The OS pauses the process and cannot be ignored.
					  id:: 67f4fd18-2a1a-43bb-9d67-710bfe096615
					- `CONT` = `26`: Resume the process after being paused by [STOP](((67f4fd18-2a1a-43bb-9d67-710bfe096615))).
				- The default `TERM` = `15` is the **nicest** signal: The process is given time to gracefully shutdown, and even to **ignore** this signal.
					- `INT` = `2` = `Ctrl` `C` (≈ `TERM`): Interrupt the process, but can be **ignored**.
					  id:: 67f4fa57-ed02-48ee-a72c-366cf83748c2
					- `QUIT` = `3` = `Ctrl` `D` = [INT](((67f4fa57-ed02-48ee-a72c-366cf83748c2))) + core dump
					- `HUP` = `1`: Disconnects a process from the parent process, or **restart** the process.
				- `NULL` = `0`: Sending no signal, just **check** validity of a PID: whether the process is running and this user as permission to access it.
			- `pstree`
			  display a tree of processes.
			- `top`
			  display "top CPU" processes similar to ((66c6bda1-7a64-4832-af2b-906b3beb8927)).
			- {{embed ((6835b16a-71ae-4882-afc0-d998d761442e))}}
			- `jobs`, `disown`, `nohup`, `bg`, `fg`
			  collapsed:: true
			  Manage shell jobs (background processes).
				- [disown](https://www.cyberciti.biz/faq/unix-linux-disown-command-examples-usage-syntax/)
		- window handling
		  collapsed:: true
			- Note that on ((66b1cfa4-f6a5-444d-97fb-e76a1c5fb1c7)), `xkill` & `xprop` cannot chose windows of Gnome Shell like ((66c6bd7d-c9af-4f64-a65b-f4ff075961bb)), ((66c6bd94-76a7-4b80-bf2e-b8af02737af2)), ((66c6bda1-7a64-4832-af2b-906b3beb8927)), etc., because they are not using ((66c6cd8c-5367-4ae4-a76c-970732c2aebb)). Ref: [Nautilus is being ignored](https://github.com/johannesjo/linux-window-session-manager/issues/8#issuecomment-347517969)
			- `xkill`
			  kill a client by its X resource. The X resource can be specified with mouse pointer clicking a window or given via command line arguments `[-display displayname] [-id resource]`.
			- `xprop`
			  display window and font properties in an X server. The X resource can be specified with mouse pointer clicking a window or given via command line arguments `[-display displayname] [-name windowname] [-id resource]`.
			- `notify-send`
			  id:: 67d289c6-fcf5-4340-b06e-d3287ca78a4d
			  collapsed:: true
			  send desktop notifications to the user via a notification daemon from the command line.
				- `-u`, `--urgency`=LEVEL
					- `low`: No pop-up, just silently add message to notification list.
					- `normal`: pops up for 3 seconds.
					- `critical`: pops up until user close.
				- `-t`, `--expire-time`=TIME
				  ignored in Ubuntu
				- `-i`, `--icon`=ICON
					- a [standard icon name](https://specifications.freedesktop.org/icon-naming-spec/latest/#names), e.g. `system-log-out`, or
					- a path to an icon file, e.g. `/usr/share/icons/gnome/32x32/actions/system-log-out.png`
			- `zenity`
			  id:: 67d2ad10-0ca8-4361-94d5-219cf9b737d5
			  collapsed:: true
			  display [GTK+ dialogs](https://help.gnome.org/users/zenity/stable/#dialogs), and return the users input (either in the return code or on standard output).
				- ((6651ecba-793d-43c5-8020-a9f260b032d8)) ((67d2ad10-0ca8-4361-94d5-219cf9b737d5)) is the most well-known of the [dialog prorams](http://rockhopper.monmouth.edu/cs/jchung/cs370/cs_370_-_shell_scripts_and_user_interfaces) to be called from shell script.
				- ((669a1e5f-734c-41c1-bf1c-21813b6e81d8)) “zenity” = “zen + ity” = “the state of zen”, as “serennity” = “the state of being serene”
					- This is my own interpretation which is coinside with others like [Happy nehra](https://medium.com/%40happynehra/exploring-zenity-a-zen-guide-to-creating-gtk-dialogs-c4d48ee192) and Grok 3.
				- Warning: `zenity` accepts Spacebar & Enter as OK confirmation which can be accicentally hit when the window pops up!
				  id:: 67d3a821-ed1c-48d5-a935-bfab8a57cd8e
					- In `X11`, we can temporarily disable the keyboard around `zenity` call with `xinput`, but it's impossible in Wayland.
				- Return values:
					- Command exit code: {`0`, `1`, `5`} for {OK, Cancel, timeout}
					- Print to `stdout` the value user entered or chose.
				- `--{info,question,warning,error}` are message dialogs with icons
					- Icons: `--icon-name` (name only), `--window-icon` (/path/to/file, but doesn't work!)
						- ((66725725-f76a-4328-b162-f469b87e871b))
						  collapsed:: true
							- `gtk-dialog-info`: ![gtk-dialog-info.svg](../assets/Linux/GNOME/icons/gtk-dialog-info.svg){:width 32}
							- `gtk-dialog-question`: ![gtk-dialog-question.svg](../assets/Linux/GNOME/icons/gtk-dialog-question.svg){:width 32}
							- `warning-small-symbolic`: ![warning-small-symbolic.svg](../assets/Linux/GNOME/icons/warning-small-symbolic.svg){:width 32}
							- `dialog-warning`: ![dialog-warning.png](../assets/Linux/GNOME/icons/dialog-warning.png){:width 32}
							- `dialog-error`: ![dialog-error.png](../assets/Linux/GNOME/icons/dialog-error.png){:width 32}
				- `--{entry,password,scale}` are input dialogs for user to enter text or a numeric value in a scale.
				- `--{list,calendar,color-selection,file-selection}` are selection dialogs for user to choose items.
				- `--forms` shows an input form which can contain text entries, password fields, calendars, description texts.
				- `--progress` shows a progress bar increments by inputs from `stdin`.
				- `--notification`, similar to ((67d289c6-fcf5-4340-b06e-d3287ca78a4d)), shows a notification ballon, not a pop-up window.
			- `yad`
			  id:: 68381bca-50f3-4d2e-9593-53d9c8f6c368
			  collapsed:: true
			  yet-another-dialog program extending ((67d2ad10-0ca8-4361-94d5-219cf9b737d5))
				- `yad` add many additional features, including the option ((68381caa-5dd1-4a49-8630-4c68674aa0c7)) to prevent stealing focus of the currently working app.
				- `--no-focus`
				  id:: 68381caa-5dd1-4a49-8630-4c68674aa0c7
				  Dialog window *never* take focus!
					- While this option resolves the [focus stealing issue of `zenity`](((67d3a821-ed1c-48d5-a935-bfab8a57cd8e))), it makes the dialog a “dump window” receiving no keyboard inputs and cannot be focused, hence all interactions must be done with mouse.
					- On ((66b1cfa4-f6a5-444d-97fb-e76a1c5fb1c7)), window related features like `--no-focus`, `--center`, `--mouse`, `--skip-taskbar` are ineffective, and can be reactivated with [env.var.](((67f6257e-455e-46f1-8225-8510f60b8b47))) `GDK_BACKEND=x11`
		- file management
		  id:: 671f4028-c60f-4791-b716-e5226cdf410e
		  collapsed:: true
			- `ls`
			  id:: 6735b188-098a-41ac-89ed-8cfcc857d796
			  collapsed:: true
			  list information about the FILEs (the current directory by default).
				- `ll` = `ls -lhF`
				  id:: 671f4355-d2ad-46ca-af05-db330a8a4fec
				  long listing format
					- Default columns: ((671f467e-6f1f-4436-a0dd-9a03055e11a9)), ((671f4447-71f3-4ae1-b22c-acc16ac67f5b)), user, group, size, date, file name
					  id:: 6735b188-a46c-4363-8ccc-03fbfcf2cbaa
					- number of files
					  id:: 671f4447-71f3-4ae1-b22c-acc16ac67f5b
						- for directory: number of files & sub-directories in that dir
						- for file: number of hard links to this ((671f438b-617a-4fc5-88ee-e42f07b67b50))
				- `-i`, `--inode`
				  print the ((671f438b-617a-4fc5-88ee-e42f07b67b50)) number of each file
				- `dircolors`
				  output commands to set the ((67ad9184-d0e9-49c1-9584-ac7ced51b385)) env.var. for `ls`, optionally reading definitions in a ((67adaa84-c44b-4f36-bc34-ddec3117b7fc)).
					- This command simply prints out 
					  ```sh
					  LS_COLORS='di=01;34:type=color;codes:...'; export LS_COLORS
					  ```
					- `DIR_COLORS` file
					  id:: 67adaa84-c44b-4f36-bc34-ddec3117b7fc
					  collapsed:: true
						- Man page: `man DIR_COLORS` (or [on web](https://www.man7.org/linux/man-pages/man5/dir_colors.5.html))
						- See ((67ad9254-2b15-48cd-8f38-8b727e5ed2da)).
						- On Slackware, SuSE, RedHat: System-wide config `/etc/DIR_COLORS`, which can be overriden by per-user config `~/.dir_colors`.
				- `LS_COLORS`
				  id:: 67ad9184-d0e9-49c1-9584-ac7ced51b385
				  env.var. defining output colors for `ls --color`.
					- Format: colon-separated list of color definitions by file type
					  > ((67ad9254-2b15-48cd-8f38-8b727e5ed2da)) = ((67ad927a-3926-4930-bf40-6cefcca3d54e)) : other file types ...
					- When there are many definitions of the same file type, the last will override all previous ones.
						- And we only need to put in `LS_COLORS` just defs overriding default values.
					- [file type](((671f467e-6f1f-4436-a0dd-9a03055e11a9))) code
					  id:: 67ad9254-2b15-48cd-8f38-8b727e5ed2da
					  collapsed:: true
						- Codes in `LS_COLORS` and corresponding names in ((67adaa84-c44b-4f36-bc34-ddec3117b7fc))
							- `no` = `NORMAL`, `NORM`: Non-filename columns of each file in `ls -l`
								- `rs` = `RESET`: Color to be (re)set after `ls`
								  collapsed:: true
									- E.g. `ls; echo text after ls` will output `text after ls` in `rs` color.
									- This is also applied to non-filename symbols in filename column of `ls -lF`, e.g. `->` in symlink, file type indicators (`/`, `*`,...)
							- `fi` = `FILE`: Regular file
							- `di` = `DIR`: Directory
							- `ex` = `EXEC`: Executable file (i.e. has `x` set in permissions)
								- `ca` = `CAPABILITY`: Executable file with [capabilities](https://man7.org/linux/man-pages/man7/capabilities.7.html), set with [`setcap` command](https://man7.org/linux/man-pages/man8/setcap.8.html)
							- `ln` = `SYMLINK`, `LINK`, `LNK`: Symbolic link. If you set this to 'target' instead of a numerical value, the colour is as for the file pointed to.
								- `or` = `ORPHAN`: Symbolic link pointing to a non-existent file
								- `mi` = `MISSING`: Non-existent file pointed to by a symbolic link (visible when you type `ls -l`)
							- `mh` = `MULTIHARDLINK`: File with more than one hard links
							- `pi` = `PIPE`, `FIFO`: Named FIFO pipe
							- `so` = `SOCK`: Socket
							- `bd` = `BLOCK`, `BLK`: Block device
							- `cd` =  `CHAR`, `CHR`: Character device
							- Advanced file types
							  collapsed:: true
								- `do` = `DOOR`: [Door](https://en.wikipedia.org/wiki/Doors_(computing)) (in Sun Solaris) for communication between a client and server
								- `su` = `SETUID`: File that is `setuid` (`u+s`)
								- `sg` = `SETGID`: File that is `setgid` (`g+s`)
								- `st` = `STICKY`: Directory with the sticky bit set (`+t`) and not other-writable
								- `ow` = `OTHER_WRITABLE`: Directory that is other-writable (`o+w`) and not sticky
								- `tw` = `STICKY_OTHER_WRITABLE`: Directory that is sticky and other-writable (`+t`,`o+w`)
							- For advanced color capable terminal or printer, the sequence ⟪ `LEFTCODE` [typecode](((67adc11d-b24f-49bd-9bc3-f9d3d6cf06b1))) `RIGHTCODE` filename `ENDCODE` ⟫ will be printed for each filename.
							  collapsed:: true
								- `lc` = `LEFTCODE`, `LEFT`: Opening terminal code
								- `rc` = `RIGHTCODE`, `RIGHT`: Closing terminal code
								- `ec`= `ENDCODE`, `END`: Non-filename text or terminal code after filename
								- typecode: the color sequence that depends on the type or name of file
								  id:: 67adc11d-b24f-49bd-9bc3-f9d3d6cf06b1
						- Different names & history
							- `MULTIHARDLINK` (`mh`) was initially named `HARDLINK` (`hl`) before `coreutils` 7.5 (in 2009) (see details in [StackExchange](https://unix.stackexchange.com/a/70715/566548)).
							- `RESET` (`rs`) was added in `coreutils` 6.11.
							- `CAPABILITY` (`ca`) was added in `coreutils` 7.0.
					- color sequences
					  id:: 67ad927a-3926-4930-bf40-6cefcca3d54e
					  collapsed:: true
						- Color & effect codes are separated by semicolon `;` and their *order doesn't matter*.
						- Foreground and background are [3-bit ANSI escape color codes](https://en.wikipedia.org/wiki/ANSI_escape_code#3-bit_and_4-bit) (modern terminals also support 8-bit color codes).
							- Foreground
							  ```sh
							  30=black 31=red 32=green 33=yellow 34=blue 35=magenta 36=cyan 37=white
							  ```
							- Background
							  ```sh
							  40=black 41=red 42=green 43=yellow 44=blue 45=magenta 46=cyan 47=white
							  ```
							- high-bit color codes (fixed order!): [fbg](((67ada479-c1b4-40b5-ba31-73e012b19915)))`;`[hcolor](((67ada493-aea8-4646-92c6-029719d0be8f)))
								- `fbg`: `38` (foreground) or `48` (background)
								  id:: 67ada479-c1b4-40b5-ba31-73e012b19915
								- `hcolor`: `5;n` or `2;r;g;b` where `n` in [16, 255] is a [8-bit color code](https://en.wikipedia.org/wiki/ANSI_escape_code#8-bit), and `r;g;b` is red-green-blue code of [24-bit color](https://en.wikipedia.org/wiki/ANSI_escape_code#24-bit).
								  id:: 67ada493-aea8-4646-92c6-029719d0be8f
						- Effects are [ANSI Select Graphic Rendition codes](https://en.wikipedia.org/wiki/ANSI_escape_code#Select_Graphic_Rendition_parameters).
							- ```sh
							  0=none 1=bold 4=underscore 5=blink 7=reverse 8=concealed
							  ```
							- Many effects can be combined, e.g. `1;3;47;30;7` means _**bold**-italic_ white text on black background (reverse of black text on white background).
						- Refs: [/etc/DIR_COLORS](https://github.com/trapd00r/LS_COLORS/blob/master/LS_COLORS)
					- Examples
					  id:: 678a4f10-b109-429d-9c58-f9bd52f807cd
					  collapsed:: true
						- ```sh
						  export LS_COLORS="${LS_COLORS}mh=44;37:" # MULTIHARDLINK: more than one hard links: grey text (37) on blue background (44)
						  export LS_COLORS="${LS_COLORS}or=40;31;1:" # ORPHAN: symlink to nonexistent file: bold (1) red text (31) on black background (40)
						  export LS_COLORS="${LS_COLORS}mi=37;41:" # MISSING: nonexistent target of symlink: white (37) on redbackground (41)
						  ```
						- Highlight for multiple hard links has [once been turned on for only some months between 2008-2009](https://askubuntu.com/a/251450).
						- A shell script to show all colors in `LS_COLORS`, ref: [AskUbuntu](https://askubuntu.com/a/884513)
						  collapsed:: true
							- ```sh
							  #!/bin/bash
							  # For each entry in LS_COLORS, print the type, and description if available, in the relevant color.
							  # All dot-types are printed in one line.
							  
							  types=( no rs fi di ex ca ln or mi mh pi so bd cd do su sg st ow tw lc rc ec )
							  dottypes=()
							  declare -A descriptions=(
							      [no]="NORMAL: Non-filename columns of each file"
							      [rs]="RESET: Color to be (re)set after ls"
							      [fi]="FILE: Regular file"
							      [di]="DIR: Directory"
							      [ex]="EXEC: Executable file"
							      [ca]="CAPABILITY: Executable file with capabilities"
							      [ln]="SYMLINK: Symbolic link"
							      [or]="ORPHAN: Broken symlink"
							      [mi]="MISSING: Missing target of broken symlink"
							      [mh]="MULTIHARDLINK: File with multiple hardlinks"
							      [pi]="PIPE, FIFO: Named FIFO pipe"
							      [so]="SOCK: Socket"
							      [bd]="BLOCK: Block device"
							      [cd]="CHAR: Character device"
							      [do]="DOOR: Solaris door"
							      [su]="SETUID: File that is setuid"
							      [sg]="SETGID: File that is setgid"
							      [st]="STICKY: Sticky directory"
							      [ow]="OTHER_WRITABLE: Other-writable directory"
							      [tw]="STICKY_OTHER_WRITABLE: Sticky and other-writable directory"
							      [lc]="LEFTCODE, LEFT: Opening terminal code"
							      [rc]="RIGHTCODE, RIGHT: Closing terminal code"
							      [ec]="ENDCODE, END: Terminal code after filename"
							  )
							  declare -A colors
							  declare -A dotcolors
							  
							  ls_colors=$LS_COLORS
							  dir_colors=$(dircolors |head -1)
							  dir_colors=${dir_colors#*\'}
							  dir_colors=${dir_colors%\'*}
							  ls_colors=${dir_colors}${ls_colors}
							  IFS=:
							  for ls_color in $ls_colors; do
							      type="${ls_color%=*}"
							      color="${ls_color#*=}"
							      [[ -z $type ]] && continue
							      if [[ "${IFS}${types[*]}${IFS}" =~ "${IFS}${type}${IFS}" ]]; then colors[$type]=$color
							      else dotcolors["$type"]=$color;  dottypes+=("$type"); fi
							  done
							  
							  # Print descriptions styled by colors
							  for type in "${types[@]}"; do
							      color="${colors[$type]}"
							      desc="${descriptions[$type]}"
							      printf "\e[%sm%s%s\e[m \n" "$color" "$type" "${desc:+ = $desc}"
							  done
							  
							  # Print dotcolors of dottypes
							  for type in "${dottypes[@]}"; do
							      color="${dotcolors[$type]}"
							      printf "\e[%sm%s\e[m " "$color" "$type"
							  done
							  echo
							  
							  ```
					- Refs: [trapd00r/LS_COLORS](https://github.com/trapd00r/LS_COLORS/blob/master/LS_COLORS), [ls-color-output](https://itsfoss.com/ls-color-output/), [HowtoGeek](https://www.howtogeek.com/307899/how-to-change-the-colors-of-directories-and-files-in-the-ls-command/), [bigsoft](https://www.bigsoft.co.uk/blog/2008/04/11/configuring-ls_colors), [AskUbuntu](https://askubuntu.com/a/884513)
			- `stat`
			  id:: 671f50a5-2987-4e65-b28d-7b08bdcf0a06
			  collapsed:: true
			  status of file or file system
				- Non-default info (`--format`)
					- `%m` = mount point
			- `file`
			  determine file type
			- `tree`
			  list contents of directories in a tree-like format.
			- `find $dir $expr`
			  collapsed:: true
			  search for files in a directory hierarchy rooted at `$dir`, filtering with `$expr`, and optionally take ((67b3f8db-00f0-456e-ab94-81df04973740))
				- `-depth`
				  depth-first search instead of the default breadth-first search
				- `-{min,max}depth $n`
				  search `$n` levels of directories
				- `-{name,path,lname} $pattern`
				  find files with basename or path or symlink target matching [glob `$pattern`](https://en.wikipedia.org/wiki/Glob_(programming))
				- `-regex $pattern`
				  find files with path matching regex `$pattern`
				- `-type {f,d,l,p,s,c,b}`
				  find files with corresponding ((671f467e-6f1f-4436-a0dd-9a03055e11a9)) (`f` = `-` = regular file)
				- `-perm [-,/]$mode`
				  find files with [permission](((6772a6d3-8aec-4e7f-af3c-5373bcc9b221))) is at least (`-`), at most (`/`), or exactly `$mode`
					- `-executable`
					  maches files which are executable and directories which are searchable
				- `{a,[m],c}{min,time,newer} {[-,+]$mins,[-,+]$days,$file}`
				  find files with {access, modified, meta change} time is less than (`-`), greater (`+`) or equals to `$mins` ago, `$days` ago, or newer than reference `$file`
					- Note: modified time: `mmin`, `mtime`, but `-newer` not `-mnewer`
				- `-size [-,+]$n[c,w,b,k,M,G]`
				  find files with size is less than (`-`), greater (`+`) or equals to `$n` chars, words, bytes, KiB, MiB, GiB
				- `-links [-,+]$n`
				  find files with more number of ((671f5617-1163-4ffc-b65a-b3234e471db0))s is than (`-`), greater (`+`) or equals to `$n`
				- `-samefile $ref_file`
				  id:: 671f544c-792b-4bd3-bfda-38c8d1fc2b01
				  find ((671f5617-1163-4ffc-b65a-b3234e471db0))s to `$ref_file`
				- `-inum $inode_number`
				  find ((671f5617-1163-4ffc-b65a-b3234e471db0))s to `$inode_number`
					- Note: This is just an old POSIX option, and it's much simpler to use ((671f544c-792b-4bd3-bfda-38c8d1fc2b01)) instead!
					- To use this option, we must find the `$inode_number` first via `ls -i` or `stat -c %i`.
						- Someone even wrote [a script](https://superuser.com/a/12976) using this method.
						  collapsed:: true
							- #!/bin/bash
							  if [[ $# -lt 1 ]] ; then
							      echo 'Usage: find-hard-links $target [$target2 ...]'
							      exit 1
							  fi
							  
							  while [[ $# -ge 1 ]] ; do
							      echo "Processing '$1'"
							      if [[ ! -r "$1" ]] ; then
							          echo "   '$1' is not accessible"
							      else
							          numlinks=$(stat -c '%h' "$1")
							          inode=$(stat -c '%i' "$1")
							          mount=$(stat -c '%m' "$1")
							          echo "   '$1' has inode ${inode} on mount point '${mount}'"
							          find ${mount} -inum ${inode} 2>/dev/null | sed 's/^/        /'
							      fi
							      shift
							  done
				- `-{user,group} $name`
				  find files owned by user or group with `$name`
				- `-true`
				  find all files (unfiltered) for ((67b3f8db-00f0-456e-ab94-81df04973740)) only
				- Actions
				  id:: 67b3f8db-00f0-456e-ab94-81df04973740
					- `-print[f,0] $format`
					- `ls`
					- `fls $file`
					- `-exec $action $delim`
					  id:: 6790bd70-e65e-4053-9b6b-079e0d6ca7a1
						- `$delim` can be `;` or `+`
						- `{}` argument is replaced by the current file name being processed
					- `-delete`
					- `-prune`
					- `-quit`
			- `ln`
			  collapsed:: true
			  make links (hard & symbolic) between files
				- default is to make ((671f5617-1163-4ffc-b65a-b3234e471db0)).
				- `slink` = `ln -sv` (`--symbolic --verbose`)
				  creates ((671f5784-d89b-4a4a-a6e7-f02a0805322f)) to this file.
			- `chmod`
			  id:: 671f5863-b392-406a-b6d2-408902e37e29
			  change file mode bits
			- `chown`
			  change file owner and group
			- `df`
			  report file system disk space usage
			- `du`
			  estimate file space usage
		- text processing
		  id:: 6790a3e2-3f65-42d0-9253-35b6672d8b25
		  collapsed:: true
			- `grep`
			  print lines that match patterns
				- `--exclude-dir` to exclude _directory **names**_ from search.
				  collapsed:: true
					- This options accept GLOB, e.g. `--exclude-dir={logs\*,\*logs}`, but *__not__ any path*, e.g. not `path/to/dir`.
					- This options can be used many times to exclude different GLOBs.
			- `tail`
			  output the last part of files
				- `-{n,c} [+]$num` to output the last `$num` lines/chars, e.g. `-n 3`, `-n3`, `-c3`, or from line/char `+$num` from the start, e.g. `-n +3`, `-n+3`, `-c+3`. Default is `-n 10`.
					- `n` can be ommited, e.g. `-3`, `+3`
				- `-f`, `-F` keep appending output **follow**ing input growth. `-F` = `-f --retry` to follow even when the input is inaccessible.
			- `head`
			  output the first part of files
				- `-{n,c} [-]$num` to output the first `$num` lines/chars, e.g. `-n 3`, `-n3`, `-c3`, or until line/char `-$num` from the end, e.g. `-n -3`, `-n-3`, `-c-3`). Default is `-n 10`.
					- `n` can be ommited, e.g. `-3`
			- `sed` [option] script [input_file]
			  stream editor for filtering and transforming text
				- `-i` to edit inplace, i.e. to overwrite the input file with the output
				- `-e $script` for additional script beside the main script without `-e`
					- `-E` to use extended regular expressions in the script
			- `awk`
			  pattern scanning and processing language
				-
		- image processing
		  collapsed:: true
			- `webp` package: `dwebp`, `cwebp`, `webpinfo`, `webpmux`, ...
				- `dwebp`
				  decompress a WebP file to an image file
				- `cwebp`
				  compress an image file to a WebP file
				- `webpinfo`
				  print out the chunk level structure of WebP files along with basic integrity checks
				- `webpmux`
				  create  animated WebP files from non-animated WebP images, extract frames from animated WebP images, and manage XMP/EXIF metadata and ICC profile.
		- hex, binary, encoding converting
		  id:: 679085ef-facd-4c4a-83f3-f32bdefbaa49
		  collapsed:: true
			- Examples
				- Space-separated hex-byte stream: `hexdump -ve '1/1 "%x "'` = `od -tx1 -An`
				- Continuous hex-byte stream: `hexdump -ve '1/1 "%x"'` = `xxd -p`
			- `hexdump`, `hd`
			  display file contents in *little-endian* hexadecimal, decimal, octal, or ascii
				- `-s $start` `-n $length` to read `$length` bytes (or `{K,M,G,T}[iB]` or `{K,M,G,T}B`) from `$start`.
				- `-e $format_string` for **output format** similar to C `printf()`
					- `[$num[/$size]] "%printf_format"` applies the `%printf_format` for `$num` times where each time consuming `$size` bytes.
					  collapsed:: true
						- Supported `$size` values:
							- Character: `%_c`, `%_p`, `%_u`, `%c`: 1 byte only
							- Integer: `%X`, `%x`, `%o`, `%u`, `%d`, `%i`: 1, 2 and **4** bytes (default = 4)
							- Float: `%E`, `%e`, `%f`, `%G`, `%g`: 4, **8** bytes (default = 8)
						- `"%printf_format"` must be double-quoted.
						- ((665359ff-79f1-4669-b10b-f2b0e633a7c1)) The notaion `$num/$size` is misleading! It should better be `$num*$size` or `$num x $size`.
					- Multiple `-e` strings can be applied to the same chunk of data to print it in different forms, like the canonical format.
					  id:: 67907cb8-81f7-494f-92af-14275630e6c6
					- Address format: `%_a[x,o,d]` for every chunk or `%_A[x,o,d]` for the last address after the last chunk, in hex, octal and decimal numbers.
				- `-v` for no collapse of duplicates. By default, all dupes are collapsed into `*`.
				- `-C` for canonical format of 3 columns: 8-digit hex address ␣␣ 8 x 2 hex bytes ␣␣ | text | 
				  `hd` = `hexdump -C` = 
				  ```sh
				  hexdump \
				    -e '"%08_ax  " 8/1 "%02x " "  "  8/1 "%02x "' \
				    -e '"  |" 16 "%_p" "|" "\n"' \
				    -e '"%08_Ax\n"'
				  ```
			- `od`
			  dump files in octal, hex and other formats
				- `-j $start` `-N $length` to read `$length` bytes from `$start`.
				- `-t $format` with formats: `{x,o,u,d,f}[$size][a,z]` for {*octal*, hex, unsigned dec, signed dec, float} (default = octal) of `$size` bytes (default 4 bytes) 
				  and optionally `a` or `z` for printable characters under (`a`) or at the end (`z`) of each output line.
				- `--endian={big|little}` for [endian byte order](https://en.wikipedia.org/wiki/Endianness) (default = `little`)
				- `-A $radix` for radix of address in the first column: `{x,o,d,n}` = {*octal*, hex, dec, **none**} (default = octal)
				  `-An` to **suppress address** output
				- `-w $bytes` to break line after each number of bytes
			- `xxd`
			  make a hexdump or do the **reverse**
				- `-o $start` `-l $length` to read `$length` bytes from `$start`.
				- `-r` **reverse** conversion
				- `-g $bytes` to group bytes into a space-separated group
				- `-c $bytes` to break line after each number of bytes
				- `-p` to print only hex codes, A.K.A. "**plain hex**", **continuously** (`-g` grouping is diabled) without address
				- `-e` for **little-endian** hex (default = big-endian)
				- `-i` output in C array definition
			- `dd` `$operand`...
			  collapsed:: true
			  copy a file block-wise, converting and formatting [according to the `$operand`s](https://www.ibm.com/docs/nl/aix/7.2?topic=d-dd-command)
			  A.K.A. “data definition”, “disk dump”, “disk duplicator”, or even “disk destroyer” due to its immense power and [ability to directly interact with block devices](https://blog.kubesimplify.com/the-complete-guide-to-the-dd-command-in-linux).
				- `if=$in_file` `of=$out_file` or default to `stdin` `stdout`
				- `bs=$size` (or `ibs=$size` `obs=$size`) `cbs=$size` specify block size (default = 512) for copying
					- `cbs=$size` specify conversion block size (default = 0) for `conv={block,unblock}`
				- `skip=$ni` `seek=$no` `count=$nc` skip the input `$ni` blocks and seek the output to `$no` blocks then copy `$nc` blocks
				- `status={none,noxfer,progress}` to suppress status, suppress transfer statistics, or to show periodic transfer statistics
				- `conv=$mode` to set modes of conversion
					- `notrunc`, `excl`, `nocreat` to prevent overwriting (truncating) the `of`, or fail (`excl`) when the `of` already exists, or don't create `of`
					- `noerror` to continue on any input error
					- `swab`, `sync` to swap every pair of bytes, or/and pad input block to `ibs`
					- `lcase`|`ucase`, `block`|`unblock` to convert text to lower/upper case, or/and padding/unpadding spaces to line to reach `cbs`
		- system handling
		  id:: 67f4ffe3-488c-4d61-9622-26ecbed945ac
		  collapsed:: true
		  :LOGBOOK:
		  CLOCK: [2025-04-08 Tue 17:52:38]
		  :END:
			- `systemctl`
			  Control the `systemd` system and **service manager**.
			- `gnome-session-quit`
			  id:: 67f4ffeb-5e02-4fd5-bd33-19abc23f60aa
			  `--logout`|`--power-off`|`--reboot`
			  End the current GNOME session.
			- `shutdown`
			  id:: 67f500dd-ff43-46ec-b9e0-9dcc097b2bc3
			  `poweroff`, `reboot`, or `halt` the machine.
				- Note: ((67f4ffeb-5e02-4fd5-bd33-19abc23f60aa)) could be safer than ((67f500dd-ff43-46ec-b9e0-9dcc097b2bc3)).
				  id:: 67f4f5e3-e739-41cd-8b95-14c7bbe9eebe
		- network handling
		  collapsed:: true
			- `iftop`
			  id:: 6835b16a-35af-4d69-8b48-17cbb2bf556d
			  (with `sudo`) display "top network" interfaces.
			- `nethogs`
			  id:: 6835b16a-71ae-4882-afc0-d998d761442e
			  (with `sudo`) NetHogs displays 'net top' processes.
			- `ss`/`netstat`
			  dump network socket statistics: type (TCP, UDP, UNIX), status (listening, established, unconnected), addresses
			- `nc`/`netcat`
			  versatile network socket operations: connect, listen, send packets, scan port
	- ### shell
		- `man [-k]`, `info`, `[run-]help`, `apropos`
		  collapsed:: true
			- `man` is the traditional UNIX manual pages for specific subjects like commands, functions, configs, etc. `man` pages are viewed with `less` navigation.
				- ((66725725-f76a-4328-b162-f469b87e871b)) `man ls`
				  collapsed:: true
					- ```
					  ⮕ man ls
					  NAME
					         ls - list directory contents
					  
					  SYNOPSIS
					         ls [OPTION]... [FILE]...
					  
					  DESCRIPTION
					         List  information about the FILEs (the current directory by default).  Sort entries alpha‐
					         betically if none of -cftuvSUX nor --sort is specified.
					  ...
					  ```
				- `man -k ${keyword}` = `apropos ${keyword}` searches the manual page names and descriptions for `${keyword}`.
				- ((66725725-f76a-4328-b162-f469b87e871b)) `apropos directory`
				  collapsed:: true
					- ```
					  ⮕ apropos directory                                                                     [f54d504e0]
					  alphasort (3)        - scan a directory for matching entries
					  basename (1)         - strip directory and suffix from filenames
					  bindtextdomain (3)   - set directory containing message catalogs
					  chacl (1)            - change the access control list of a file or directory
					  chdir (2)            - change working directory
					  chroot (2)           - change root directory
					  chroot (8)           - run command or interactive shell with special root directory
					  closedir (3)         - close a directory
					  cups-files.conf (5)  - file and directory configuration file for cups
					  dbus-cleanup-sockets (1) - clean up leftover sockets in a directory
					  depmod.d (5)         - Configuration directory for depmod
					  dir (1)              - list directory contents
					  dirfd (3)            - get directory stream file descriptor
					  dirsplit (1)         - splits directory into multiple with equal size
					  ...
					  ```
			- `info` is the comprehensive GNU documentation for distributions and systems. It is a system of docs interlinked and indexed with hyper-links like ebooks. `info` docs are viewed with `emacs` navigation.
				- ((66725725-f76a-4328-b162-f469b87e871b)) `info ls`
				  collapsed:: true
					- ```
					  ⮕ info ls
					  10.1 ‘ls’: List directory contents
					  ==================================
					  
					  The ‘ls’ program lists information about files (of any type, including
					  directories).  Options and file arguments can be intermixed arbitrarily,
					  as usual.
					  ...
					  ```
			- Bash' `help` and ZSh' `run-help` is the built-in command to describe shell-built-in commands. Help pages are viewed with `less` navigation.
				- ((66725725-f76a-4328-b162-f469b87e871b)) `[run-]help ls`, `[run-]help cd`
				  collapsed:: true
					- ```
					  ⮕ help ls
					  bash: help: no help topics match `ls'.  Try `help help' or `man -k ls' or `info ls'.
					  ⮕ run-help ls     
					  ls is an alias for ls --color=tty
					  ⮕ help cd
					  cd: cd [-L|[-P [-e]] [-@]] [dir]
					      Change the shell working directory.
					  ...
					  ⮕ run-help cd      
					  cd [ -qsLP ] [ arg ]
					  cd [ -qsLP ] old new
					  cd [ -qsLP ] {+|-}n
					         Change  the  current  directory.   In the first form, change the
					         current directory to arg, or to the value of $HOME if arg is not
					         specified.  If arg is `-', change to the previous directory.
					  ...
					  ```
		- `which`, `type`, `command -V`, `whence`, `where`
		  collapsed:: true
			- ((6651ecba-793d-43c5-8020-a9f260b032d8)) All these describe the given name as whether a built-in command or an external command (with path) or an alias (with definition), but are different in different shells.
			- Note: The command `command [-p]` is designed to *execute an external command* distinguishing from buit-in or function or alias of the same name. However, its additional option `[-vV]` does the job of `which`/`type`.
			- In `bash`
				- `type` & `command` are built-in, `which` is external, and no `whence` nor `where`.
				- ((66725725-f76a-4328-b162-f469b87e871b))
				  collapsed:: true
					- ```shell
					  ⮕ which which
					  /usr/bin/which
					  ⮕ type which
					  which is hashed (/usr/bin/which)
					  ⮕ type type
					  type is a shell builtin
					  ⮕ type command
					  command is a shell builtin
					  ⮕ type whence
					  bash: type: whence: not found
					  ⮕ type where
					  bash: type: where: not found
					  ⮕ type ll
					  ll is aliased to `ls -alF'
					  ⮕ which -a ls
					  /usr/bin/ls
					  /bin/ls
					  ```
			- In `zsh`
				- `whence` & `command` are built-in, with aliases `which`=`whence -c`, `where`=`whence -ca`, `type`=`whence -v`.
				- ((66725725-f76a-4328-b162-f469b87e871b))
				  collapsed:: true
					- ```shell
					  ⮕ which which
					  which: shell built-in command
					  ⮕ which type
					  type: shell built-in command
					  ⮕ which command
					  command: shell built-in command
					  ⮕ which whence
					  whence: shell built-in command
					  ⮕ which where
					  where: shell built-in command
					  ⮕ which ll
					  ll: aliased to ls -lhF
					  ⮕ which -a ls
					  ls: aliased to ls --color=tty
					  /usr/bin/ls
					  /bin/ls
					  ```
		- Command directories
		  collapsed:: true
			- Home: `${HOME}/bin`, `${HOME}/.local/bin`
			- System: `/bin`, `/usr/bin`, `/usr/local/bin`
			- Superuser: `/sbin`, `/usr/sbin`, `/usr/local/sbin`
			- Snap: `/snap/bin`
			  id:: 66b1cfa4-59ec-476f-b06f-c14db11f369b
		- Double dash `--`
		  id:: 67d3c57c-6e47-4762-8255-f855af47d5bc
		  collapsed:: true
		  usually means “end of command options” in most commands.
			- An argument with a leading dash/hyphen `-` is considered an option of the command.
			- To pass dash-leading argument as is, we must use the double dash `--` to mark the end of option list before the list of non-option arguments.
			- Execptions: `echo`, `shift`,...
		- Escape sequences & Hex codes
		  collapsed:: true
			- `\`-escape sequences are not interpreted by the shell itself, but by other components: [ANSI-C quoted](https://www.gnu.org/software/bash/manual/html_node/ANSI_002dC-Quoting.html) `$'string\n'`, other commands like `printf`, `echo -e`, etc.
				- The shell only escapes 2 cases: line continuation (`\`linebreak will remove the linebreak), and quote escape within quotation
				- [Non-quoted backslash](https://www.gnu.org/software/bash/manual/html_node/Escape-Character.html) doesn't escape but keeps the next character(s) from having special meaning.
					- Space in string (won't break string): `string\ with\ \ spaces` = `'string with  spaces'`
					- Non-alias command: when `alias rm='rm -i'`, then `\rm` = `rm` instead of `rm -i`
						- Note: In (non-interactive) `bash` script, alias expansion is disabled by default, and we must enable it with `shopt -s expand_aliases`.
						- Test with ![test-alias-expansion.sh](../assets/Linux/scripts/test-alias-expansion.sh)
						  collapsed:: true
							- `bash test-alias-expansion.sh`
							  ```sh
							  alias ll='ls -l'
							  -- Execute ll:
							  total 20
							  -rwxrwxr-x 1 dinhlx dinhlx 1179 Thg 4   9 17:17 test-local-readonly.sh
							  [...]
							  -- Execute \ll:
							  test-alias-expansion.sh: line 6: ll: command not found
							  -- Execute l\l:
							  test-alias-expansion.sh: line 7: ll: command not found
							  -- Execute l\s:
							  test-local-readonly.sh  [...]
							  ```
							- `zsh test-alias-expansion.sh`
							  ```sh
							  test-alias-expansion.sh:2: command not found: shopt
							  ll='ls -l'
							  run-help=man
							  which-command=whence
							  -- Execute ll:
							  total 20
							  -rwxrwxr-x 1 dinhlx dinhlx 1179 Thg 4   9 17:17 test-local-readonly.sh
							  [...]
							  -- Execute \ll:
							  test-alias-expansion.sh:6: command not found: ll
							  -- Execute l\l:
							  test-alias-expansion.sh:7: command not found: ll
							  -- Execute l\s:
							  test-local-readonly.sh  [...]
							  ```
							- `dash test-alias-expansion.sh`
							  ```sh
							  test-alias-expansion.sh: 2: shopt: not found
							  ll='ls -l'
							  -- Execute ll:
							  total 20
							  -rwxrwxr-x 1 dinhlx dinhlx 1179 Thg 4   9 17:17 test-local-readonly.sh
							  [...]
							  -- Execute \ll:
							  test-alias-expansion.sh: 6: ll: not found
							  -- Execute l\l:
							  test-alias-expansion.sh: 7: ll: not found
							  -- Execute l\s:
							  test-local-readonly.sh  [...]
							  ```
			- Ref: [Escape sequences in C](https://en.wikipedia.org/wiki/Escape_sequences_in_C#Table_of_escape_sequences)
				- ((679085ef-facd-4c4a-83f3-f32bdefbaa49)) commands
			- The hyphen/dash `-` doesn't required to be escaped in normal string, but a leading dash can be unintentinally treated as an option of a command.
				- Escaping with backslash is ineffective: `\-` is always `\-`, never converted to `-`.
				- We can use ((67d3c57c-6e47-4762-8255-f855af47d5bc)) to separate option list.
				- Other way to esccape dash: `$'\x2d'`
			- ((66725725-f76a-4328-b162-f469b87e871b))
				- ```shell
				  LANG=C LC_ALL=UTF-16BE printf "\
				  \0\a\b\t\n\v\f\r\e \"\'\?\\~~\
				  \07\077\xF\x7F\xA0\xFF\uF\uAB\uF00\uFF9D\
				  " |od -tx1 -An
				  ```
				  results in
				  ```
				   00 07 08 09 0a 0b 0c 0d 1b 20 22 27 3f 5c 7e 7e
				   07 3f 0f 7f a0 ff 0f 00 ab 0f 00 ff 9d
				  ```
			- Table of escape sequences
			  collapsed:: true
				- | Esc seq |  Hex  | Unicode & Meaning |
				  |:------- | -----:| ------------------ |
				  | `\0`        |    00 | [␀] = [U+0000](https://www.compart.com/en/unicode/U+0000) = [NULL (control)](https://en.wikipedia.org/wiki/Null_character) |
				  | `\a`=`\07`  |    07 | [🔔] = [⍾] = [␇] = [U+0007](https://www.compart.com/en/unicode/U+0007) = [BELL (control)](https://en.wikipedia.org/wiki/Bell_character) |
				  | `\b`        |    08 | [⌫] = [␈] = [U+0008](https://www.compart.com/en/unicode/U+0008) = [BACKSPACE (control)](https://en.wikipedia.org/wiki/Backspace) |
				  | `\t`        |    09 | [↹] = [␉] = [U+0009](https://www.compart.com/en/unicode/U+0009) = [HORIZONTAL TAB (control)](https://en.wikipedia.org/wiki/Tab_key) = `&Tab;` |
				  | `\n`        |    0A | [⏎] = [␊] = [U+000A](https://www.compart.com/en/unicode/U+000A) = [END OF LINE, LINE FEED, NEW LINE (control)](https://en.wikipedia.org/wiki/Newline) = `&NewLine;` |
				  | `\v`        |    0B | [↨] = [␋] = [U+000B](https://www.compart.com/en/unicode/U+000B) = [VERTICAL TAB (control)](https://en.wikipedia.org/wiki/Tab_key) |
				  | `\f`        |    0C | [↡] = [␌] = [U+000C](https://www.compart.com/en/unicode/U+000C) = [FORM FEED (control)](https://en.wikipedia.org/wiki/Page_break#Form_feed) |
				  | `\r`        |    0D | [↵] = [␍] = [U+000D](https://www.compart.com/en/unicode/U+000D) = [CARRIAGE RETURN (control)](https://en.wikipedia.org/wiki/Carriage_return) |
				  | `\xF`=`\uF` |    0F | [␏] = [U+000F](https://www.compart.com/en/unicode/U+000F) = [SHIFT IN (control)](https://en.wikipedia.org/wiki/Shift_Out_and_Shift_In_characters) |
				  | `\e`        |    1B | [␛] = [U+001B](https://www.compart.com/en/unicode/U+001B) = [ESCAPE (control)](https://en.wikipedia.org/wiki/Escape_character) |
				  | `\"`        |    22 | " = [U+0022](https://www.compart.com/en/unicode/U+0022) = [QUOTATION MARK](https://en.wikipedia.org/wiki/Quotation_mark) = `&quot;` |
				  | `\'`        |    27 | ' = [U+0027](https://www.compart.com/en/unicode/U+0027) = [APOSTROPHE](https://en.wikipedia.org/wiki/Apostrophe) = `&apos;` |
				  | `\?`=`\077` |    3F | ? = [U+003F](https://www.compart.com/en/unicode/U+003F) = [QUESTION MARK](https://en.wikipedia.org/wiki/Question_mark) = `&quest;` |
				  | `\\`        |    5C | \ = [U+005C](https://www.compart.com/en/unicode/U+005C) = [REVERSE SOLIDUS](https://en.wikipedia.org/wiki/Backslash) = `&bsol;` |
				  | `\x7F`      |    7F | [⌦] = [t̶e̶x̶t̶̶] = [␡] = [U+007F](https://www.compart.com/en/unicode/U+007F) = [DELETE (control)](https://en.wikipedia.org/wiki/Delete_character) |
				  | `\uA0`      |    A0 | [⍽] = ` ` = [U+00A0](https://www.compart.com/en/unicode/U+00A0) = [NO-BREAK SPACE](https://en.wikipedia.org/wiki/Non-breaking_space) = `&nbsp;` = `&NonBreakingSpace;` |
				  | `\uAB`      |    AB | « = [U+00AB](https://www.compart.com/en/unicode/U+00AB) = [LEFT-POINTING DOUBLE ANGLE QUOTATION MARK](https://en.wikipedia.org/wiki/Guillemet) = `&laquo;` |
				  | `\xFF`      |    FF | ÿ = [U+00FF](https://www.compart.com/en/unicode/U+00FF) = [SMALL LETTER Y WITH DIAERESIS](https://en.wikipedia.org/wiki/%C5%B8) = `&yuml;` |
				  | `\uF00`     |  0F00 | ༀ = [U+0F00](https://www.compart.com/en/unicode/U+0F00) = [TIBETAN SYLLABLE OM](https://en.wikipedia.org/wiki/Om) |
				  | `\uFF9D`    |  FF9D | ﾝ = [U+FF9D](https://www.compart.com/en/unicode/U+FF9D) = [HALFWIDTH KATAKANA LETTER N](https://en.wikipedia.org/wiki/Halfwidth_and_Fullwidth_Forms_(Unicode_block)) |
			- Note that, I don't know why but, `printf` wrongly converts `\uC0-\uFF` to `\u80-\uBF` in UTF-16BE. That 6-bit shift right (`÷0x40`) seems to be from UTF-8!
			  collapsed:: true
				- Check hex range `\uB0-\uFF`:
				  ```shell
				  LANG=C LC_CTYPE=UTF-16BE printf "\uB0\uBF\
				  \uC0\uCF\uD0\uDF\uE0\uEF\uF0\uFF" |
				  od -tx1 -An
				  ```
				  =>
				  ```
				  00 b0 00 bf 00 80 00 8f 00 90 00 9f 00 a0 00 af
				  00 b0 00 bf
				  ```
				- Show printable chars `\uA0-\uBF` (excluding controls in `\u80-\u9F`):
				  ```shell
				  LANG=C LC_CTYPE=UTF-16BE printf "\uB0\uBF\uE0\uEF\uF0\uFF" |
				  tee >(od -tx1 -An 1>&2) |
				  iconv -f UTF-16BE -t UTF-8
				  ```
				  =>
				  ```
				   00 b0 00 bf 00 a0 00 af 00 b0 00 bf
				  °¿ ¯°¿
				  ```
		- #### shell script
		  id:: 6694a210-0bd1-4115-b190-4c41f58a577f
		  collapsed:: true
			- One line of command with many nuances:
			  collapsed:: true
			  ```shell
			  ( IFS=$'\n'; printf -- "- %s\n" ${multiple_lines}$(ls -l) )
			  ```
				- Meaning: this command line prints the list of lines in `${multiple_lines}$(ls -l)` in an itemized list format where each line is prefixed with a dash.
				  collapsed:: true
					- Execution example
					  id:: 66950352-cb8c-4657-ae14-e8e2fea8efc2
						- ```shell
						  ⮕ multiple_lines=$'first line\nsecond line\twith tab and escaped char [\x21]'
						  ⮕ ( IFS=$'\n'; printf -- "- %s\n" ${multiple_lines}$(ls -l) )
						  ```
						  => 
						  ```
						  - first line
						  - second line	with tab and escaped char [!]total 14924
						  - drwxrwxr-x  2 dinhlx dinhlx     4096 Thg 7  15 16:21 bin
						  - drwxr-xr-x  2 dinhlx dinhlx     4096 Thg 4  10  2023 Desktop
						  - drwxr-xr-x  8 dinhlx dinhlx     4096 Thg 6   4 12:13 Documents
						  - drwxr-xr-x  7 dinhlx dinhlx    32768 Thg 7  15 13:55 Downloads
						  ...
						  ```
				- `--`: double-dash in shell command is to signify the _end of command options_ (and begin positional arguments). We must use `--` here because the format string `- %s\n` starts with a dash which will be confused as options for `printf` command.
				- Unquoted `${multiple_lines}$(ls -l)`: unquoted `$string` (`${var_value}` and `$(subshell_return_value)`) will be handled by the shell, i.e. split by [IFS](https://en.wikipedia.org/wiki/Input_Field_Separators) and [glob](https://en.wikipedia.org/wiki/Glob_(programming))-expanded.
				  id:: 6694eca8-9a21-42cb-ae00-e604c9ea7ff9
					- To prevent splitting, we must quote it, either with `'$single_quote'` or with `"$double_quote"`.
					- To prevent glob-expansion, we must quote it with `'$single_quote'`. `"$double_quoted"` strings are still glob-expanded.
					- default `IFS`
					  id:: 66951231-e9b3-4298-b340-c067fae66c48
						- `bash`: `IFS=' \t\n' = '\x20\x09\x0A'`
						- `zsh`: `IFS` = `bash IFS`+ null char (`\x00`)
					- shell glob's wildcards (`*`, `?`, and `[…]`)
					  collapsed:: true
						- `*`: matches any number of any characters including none
						- `?`: matches any single character
						- `[…]`: matches one character given in the bracket. The character set can be listed explicitly, e.g. `[aAbB]`, or provided via a range, e.g. `[A-z]`, or can also be negated with `!`, e.g. `[!abc]`.
				- To concatenate strings, we just need to place them right next together, without space, e.g. `${var_value}$(subshell_return_value)`, `${first_line_var}$'\n'${next_line_var}`, etc.
				- To change the input field separator of the shell, we must assign `IFS=...;` **with semicolon** before the command (`printf` here)
					- Don't confuse it with the env.var. passing syntax `IFS=... printf`. _Without semicolon_, the new value of `IFS` will be passed to the command `printf` only, and has no effect on the external shell, hence the shell will still split strings by the ((66951231-e9b3-4298-b340-c067fae66c48)).
					- _Don't separate the equal sign `=`_ from the variable name `IFS`! It's the shell script assignment syntax! If we separate them, that name (`IFS`) will be considered as a command instead of a variable!
				- `( sub_shell )`: To not affect the `IFS` of other command lines, we enclose these 2 commands (`IFS` assignment & `printf`) in a subshell.
				- `$'\n'`: [ANSI-C quoting](https://www.gnu.org/software/bash/manual/html_node/ANSI_002dC-Quoting.html) is a special quoting technique, beside the common [single/double quoting](((6694eca8-9a21-42cb-ae00-e604c9ea7ff9))), to expand the backslash-escaped characters: `\n`, `\t`, `\xHH`, etc.
				  id:: 6694f4b5-ac24-45b3-af7f-baea35636bcf
					- Note that this is required by `bash` but not required by `zsh` (`zsh` automatically expands escaped chars in double-quoted strings)
						- ((66725725-f76a-4328-b162-f469b87e871b))
						  collapsed:: true
							- `bash` with ANSI-C quotation
							  ```shell
							  command bash -c "echo $'first line\nsecond line\twith tab and escaped char [\x21]'"
							  ```
							  =>
							  ```
							  first line
							  second line	with tab and escaped char [!]
							  ```
							- `zsh` with ANSI-C  quotation
							  ```shell
							  command zsh -c "echo $'first line\nsecond line\twith tab and escaped char [\x21]'"
							  ```
							  =>
							  ```
							  first line
							  second line	with tab and escaped char [!]
							  ```
							- `zsh` with double quotation
							  ```shell
							  command zsh -c 'echo "first line\nsecond line\twith tab and escaped char [\x21]"'
							  ```
							  =>
							  ```
							  first line
							  second line	with tab and escaped char [!]
							  ```
							- `bash` with double quotation
							  ```shell
							  command bash -c 'echo "first line\nsecond line\twith tab and escaped char [\x21]"'
							  ```
							  =>
							  ```
							  first line\nsecond line\twith tab and escaped char [\x21]
							  ```
				- `printf` command will _loop over all strings_ of its arguments which are _split by the shell_ from the joined string `${multiple_lines}$(ls -l)`. With each string, `printf` will replace the string value to `%s` in the format `- %s\n`, where the escaped sequence `\n` is converted to [newline character](https://en.wikipedia.org/wiki/Newline)... _**by printf** not by the shell_.
				  id:: 6695074a-7545-453e-be59-096d9817a5ea
					- ((66950352-cb8c-4657-ae14-e8e2fea8efc2)) broken into steps
					  collapsed:: true
						- id:: 66950b28-31ab-4bd1-8986-57c6e1ff9d0a
						  ```shell
						  ⮕ multiple_lines=$'first line\nsecond line\twith tab and escaped char [\x21]'
						  ```
						  => [ANSI-C quoted](((6694f4b5-ac24-45b3-af7f-baea35636bcf))) escape sequences `\n`, `\t`, `\x21` are converted to newline, tab, and exclamation mark; then the whole string, containing 2 lines, is assigned to the variable `multiple_lines`:
						  ```
						  first line
						  second line	with tab and escaped char [!]
						  ```
						- ```shell
						  ⮕ ( IFS=$'\n'; printf -- "- %s\n" ${multiple_lines}$(ls -l) )
						  ```
							- id:: 66950cea-b55d-4a3e-bf30-2cb38fa24f32
							  ```shell
							  $(ls -l)
							  ```
							  => A subshell is forked from this shell to execute command `ls -l`
							  ```
							  total 14924
							  drwxrwxr-x  2 dinhlx dinhlx     4096 Thg 7  15 16:21 bin
							  drwxr-xr-x  2 dinhlx dinhlx     4096 Thg 4  10  2023 Desktop
							  drwxr-xr-x  8 dinhlx dinhlx     4096 Thg 6   4 12:13 Documents
							  drwxr-xr-x  7 dinhlx dinhlx    32768 Thg 7  15 13:55 Downloads
							  ...
							  ```
							- [This result](((66950cea-b55d-4a3e-bf30-2cb38fa24f32))) is concatenated with the [content of the variable `multiple_lines`](((66950b28-31ab-4bd1-8986-57c6e1ff9d0a))):
							  id:: 66950e0e-a74c-4679-b9aa-ac7a3e57b206
							  ```
							  first line
							  second line	with tab and escaped char [!]total 14924
							  drwxrwxr-x  2 dinhlx dinhlx     4096 Thg 7  15 16:21 bin
							  drwxr-xr-x  2 dinhlx dinhlx     4096 Thg 4  10  2023 Desktop
							  drwxr-xr-x  8 dinhlx dinhlx     4096 Thg 6   4 12:13 Documents
							  drwxr-xr-x  7 dinhlx dinhlx    32768 Thg 7  15 13:55 Downloads
							  ...
							  ```
							  Let's note that the last line of `${multiple_lines}` is joined with the first line of `$(ls -l)` into a single line:
							  ```
							  second line	with tab and escaped char [!]total 14924
							  ```
							- The shell will split [this multi-line string](((66950e0e-a74c-4679-b9aa-ac7a3e57b206))) into many substrings according to value of the env.var. `IFS`
								- With ((66951231-e9b3-4298-b340-c067fae66c48)), it will be split into single words: `first`, `line`, `second`, ... `[!]total` `14924`, `drwxrwxr-x`, `2`, `dinhlx`, `dinhlx`, ...
								- But here we redefine `IFS`:
								  ```shell
								  IFS=$'\n';
								  ```
								  => each line will be a string argument passed to `printf`:
								  `first line`,
								  `second line	with tab and escaped char [!]total 14924`,
								  `drwxrwxr-x  2 dinhlx dinhlx     4096 Thg 7  15 16:21 bin`,
								  ...
							- ```shell
							  printf -- "- %s\n"
							  ```
							  => ((6695074a-7545-453e-be59-096d9817a5ea))
							  ```
							  - first line
							  - second line	with tab and escaped char [!]total 14924
							  - drwxrwxr-x  2 dinhlx dinhlx     4096 Thg 7  15 16:21 bin
							  - drwxr-xr-x  2 dinhlx dinhlx     4096 Thg 4  10  2023 Desktop
							  - drwxr-xr-x  8 dinhlx dinhlx     4096 Thg 6   4 12:13 Documents
							  - drwxr-xr-x  7 dinhlx dinhlx    32768 Thg 7  15 13:55 Downloads
							  ...
							  ```
			- Shell & environment variables
			  id:: 67f6185f-5efc-4fd0-b924-c175917092d8
			  collapsed:: true
			  :LOGBOOK:
			  CLOCK: [2025-04-09 Wed 15:30:43]
			  :END:
				- **Shell variables** are local to the current shell and its sub-shells only. They are anavailable to other subprocesses spawned by this shell.
					- Check shell vars: `set | grep varname`, `declare -p varname`
					- Scoping and typing with `declare`
						- Within a function, `var=val` ⇔ `declare -g var=val` declares a **global var**, while 
						  `local var=val` ⇔ `declare var=val` declares a **local var**.
						- `export var=val` ⇔ `declare -x var=val` declares an [exported var](((67f6257e-455e-46f1-8225-8510f60b8b47))).
						- Typing: `declare -[raAilu]` declares a read-only (`r`), indexed array (`a`), associative array (`A`), integer (`i`), lower case (`l`), upper case (`u`) variable.
						- `readonly` ≈ `declare -r` but *not exactly*!
						  collapsed:: true
							- `readonly var=val` ⇔ `var=val; readonly var`
								- While `declare -r` declares a new var, global outside function or local inside function, `readonly` only modify the read-only attribute of a declared var.
							- Neither `readonly local` nor `local readonly` works! 🤪
								- `readonly local` is *not local*, and `local readonly` is *not read-only*!
							- Test script: ![test-local-readonly.sh](../assets/Linux/scripts/test-local-readonly.sh)
				- **Environment variables** are shell vars `export`ed to all **subprocesses** spawned by this shell.
				  id:: 67f6257e-455e-46f1-8225-8510f60b8b47
					- Check env.vars: `export | grep varname`, `env | grep varname`, `printenv varname`
					- Beside the standard `export` command, `csh` provides `setenv` = `export`.
					- **One-time env.vars**: `[env] var=val $command` will execute `$command` with temporary env.var `$var` containing value `val`, then discard them.
						- `env` is only required for old version of `sudo` and some old commands like `doas`.
				- Nuances... warning: very confusing! 🤪
				  id:: 67f61875-3740-45ce-ae88-1c5aed77435a
					- There's _**no way** to export a variable **out to parent** shell!_ The name `export` is so misleading: It only “exports” vars downward to its own subprocesses!!!
					- `sudo` sanitizes (resets) all env.vars by default for security, unless explicitly requested to preserve them with `-E`, `--preserve-env`, `--preserve-env=list`.
					- **Sub-shells** by [compound command](((67d2df4a-52c6-4b11-85ba-ad28f82fd77e))) and ((67d25330-736b-464e-a926-ccd0771082eb)) _inherits **read-only values** of all shell vars_ of their parent shell. So no need to export for these sub-shells to use, but they cannot return values through these vars.
						- Warning: `sh $command` is treated as a normal _**subprocesses**, not a sub-shell_!
			- `$-` special parameters
			  collapsed:: true
				- `$$`: pid of the running shell (script)
				  id:: 66c6c8e6-54be-4b4f-80a1-c535d429d05c
				- `$0`: filename of the running shell (script)
				- arguments to the running shell (script)
				  collapsed:: true
					- `$#`: number of arguments
					- `$*`: all arguments
					- `$@`: all arguments where each argument is separated via quotation
					- `$n`: n-th argument
				- `$?`: exit status of the last command executed
				- `$!`: pid of the last background command
				- `$-`: the current set of enabled shell options given through `-o` of the current shell, 
				  :LOGBOOK:
				  CLOCK: [2025-03-14 Fri 11:12:27]--[2025-03-14 Fri 13:50:18] =>  02:37:51
				  :END:
				  e.g., `himBH` = (`histexpand`, `interactive`, `monitor`, `braceexpand`, `hashall`).
			- String variable manipulations
			  collapsed:: true
				- `${#var}`
				  string length of `$var`
				- `${var:position[:length]}`
				  extract substring from `position` (zero-based in `bash`) with `length` or until the end
					- `(-pos_from_right_end)`
					  collapsed:: true
						- e.g.
						  ```sh
						  var=abcABC123ABCabc
						  echo ${var:(-4)}
						  Cabc
						  ```
				- `${var#substring}`
				  delete _shortest_ match of `substring` (pattern) **head** (`#`) of `$var`.
				- `${var##substring}`
				  delete _longest_ match of `substring` (pattern) **head** (`#`) of `$var`.
				- `${var%substring}`
				  delete _shortest_ match of `substring` (pattern) **tail** (`%` = remainder) of `$var`.
				- `${var%%substring}`
				  delete _longest_ match of `substring` (pattern) **tail** (`%` = remainder) of `$var`.
				- `${var/substring/replacement}`
				  replace *first* match of `substring` (pattern) with `replacement`.
				- `${var/substring/replacement}`
				  replace *all* matches of `substring` (pattern) with `replacement`.
				- Ref: [Advanced Bash-Scripting Guide: 10.1. Manipulating Strings](https://tldp.org/LDP/abs/html/string-manipulation.html)
			- Parameter substitution
			  collapsed:: true
				- Note: The version with `:` is for `parameter` declared but `null`.
				- `${parameter-default value}`, `${parameter:-default value}`
				  If `parameter` is unset, use default value.
				- `${parameter=default value}`, `${parameter:=default value}`
				  If `parameter` is unset, set it to default value before using its value.
				- `${parameter=error message}`, `${parameter:=error message}`
				  If `parameter` is unset, print error message and *abort the script* with error status `1`.
				- `${parameter+value}`, `${parameter:+value}`
				  Use the provided value only when `parameter` is set and not `null`, else do nothing.
				- Ref:
					- [Advanced Bash-Scripting Guide: 10.2. Parameter Substitution](https://tldp.org/LDP/abs/html/parameter-substitution.html)
					- [Shell Parameter Expansion](https://www.gnu.org/software/bash/manual/html_node/Shell-Parameter-Expansion.html)
			- Command grouping
			  id:: 67f4eaf7-9214-44a6-a607-885930ade2de
			  collapsed:: true
				- Compound command
				  includes many commands combined by `;`, `||`, `&&`.
					- Sub-shell `(` Compound command `)`
					  id:: 67d2df4a-52c6-4b11-85ba-ad28f82fd77e
					- List `{` Compound command `}`
				- Command substitution
				  id:: 67d25330-736b-464e-a926-ccd0771082eb
				  to capture output of a ((67d2df4a-52c6-4b11-85ba-ad28f82fd77e))
					- New syntax: `out=$(command)`
					- Old syntax with backtick
					  ```sh
					  out=`command`
					  ```
					- Note: `$(function)`, as well as ((67d24bec-ffb8-45ad-a13b-0e22124b9652)), will be executed in a sub-shell, i.e. a separate process, so _it **cannot affect** any variable in this shell_.
					  collapsed:: true
						- Best practice: Never combine side effects (variable changes) with output!
							- For side effects, only use function call, and return everything through variables. Output capture should be done within the function and returned through variables.
							- Try best to avoid side effects, and return everything through output streams.
						- If anyway, we want to both capture the **output** of a function and its **side effects** (variable changes), we must use [output redirection](((67d257b8-cce3-4e79-8b42-b82bdd1fe7b0))) or ((67d25950-8596-4c10-a6bb-d4389872578d)), instead of ((67d25330-736b-464e-a926-ccd0771082eb)) or ((67d24bec-ffb8-45ad-a13b-0e22124b9652)).
							- E.g.: Implement the C expression `printf("%d ", ++i)`
							  collapsed:: true
								- ![test-cmd-sub.sh](../assets/Linux/scripts/test-cmd-sub.sh)
								  ```sh
								  #!/bin/bash
								  i=0
								  increment(){
								  	((++i))
								      printf $i
								  }
								  printf "With function call: "
								  increment; printf ' '
								  increment; printf ' '
								  increment; printf ' '
								  echo
								  printf "With command substitution: " # ineffective
								  printf "%d " $(increment)
								  printf "%d " $(increment)
								  printf "%d " $(increment)
								  echo
								  printf "With pipeline: " # ineffective
								  increment |xargs printf "%d "
								  increment |xargs printf "%d "
								  increment |xargs printf "%d "
								  echo
								  out="test-cmd-sub.txt"
								  printf "With output redirection: "
								  rm $out
								  increment >> $out; printf ' ' >> $out
								  increment >> $out; printf ' ' >> $out
								  increment >> $out; printf ' ' >> $out
								  cat $out
								  echo
								  printf "With process substitution: "
								  rm $out
								  increment > >(cat >> $out; printf ' ' >> $out)
								  increment > >(cat >> $out; printf ' ' >> $out)
								  increment > >(cat >> $out; printf ' ' >> $out)
								  cat $out
								  echo
								  echo "Final i = $i"
								  ```
								- Output:
								  ```sh
								  $ sh test-cmd-sub.sh
								  With function call: 1 2 3 
								  With command substitution: 4 4 4 
								  With pipeline: 4 4 4 
								  With output redirection: 4 5 6 
								  With process substitution: 7 9 
								  Final i = 9
								  $ cat test-cmd-sub.txt
								  7 9 8 %
								  ```
								- Note: The process substitution runs sub-shells in parallel with the main shell, hence random order of outputs in `test-cmd-sub.txt`.
					- Ref: [Wikipedia](https://en.wikipedia.org/wiki/Command_substitution)
			- I/O stream [redirection](https://en.wikipedia.org/wiki/Redirection_(computing))
			  id:: 67d24c08-0890-4864-9ceb-759d519f5e8b
			  collapsed:: true
				- Syntax: `command < infile > outfile`
				  id:: 67d257b8-cce3-4e79-8b42-b82bdd1fe7b0
					- Appending output: `command >> outfile`
					  id:: 67d257e9-420a-43df-b715-302cb37df234
					- Using [file descriptors](https://en.wikipedia.org/wiki/File_descriptor) (0 = `stdin`, 1 = `stdout`, 2 = `stderr`)
						- Output to 2 separate files: `command 1>outfile 2>errfile`
						- Output both streams to a file: `command 2>&1 1>outfile` equivalent to  `command 2>&1 >outfile`
				- Here document `<<` & here string `<<<` as input stream
				  id:: 67d24c21-82a9-4ff2-9e38-89944bcca455
					- Input a multi-line string with here string
					  ```sh
					  cat <<< "${multiple_lines}"
					  ```
					- Here document with stream delimiter `__END_OF_STREAM__`
					  collapsed:: true
						- Input:
						  ```sh
						  cat << __END_OF_STREAM__
						  This is a Here Document containing many lines
						  First line
						  Second line
						  ...
						  Last line
						  __END_OF_STREAM__
						  ```
						- Output:
						  ```
						  This is a Here Document containing many lines
						  First line
						  Second line
						  ...
						  Last line
						  ```
					- Here doc `<<-` **indented** with **tabs** (no spaces)
					  collapsed:: true
						- Input:
						  ```sh
						  cat << __END_OF_STREAM__
						  	This is a Here Document containing many lines
						  	First line
						  	Second line
						  	...
						  	Last line
						  __END_OF_STREAM__
						  ```
						- Output:
						  ```
						  This is a Here Document containing many lines
						  First line
						  Second line
						  ...
						  Last line
						  ```
					- Assign multi-line string to a var with `$(cat <<...)`
					  collapsed:: true
						- Input:
						  ```sh
						  multiple_lines=$(cat << __END_OF_STREAM__
						  This is a Here Document containing many lines
						  First line
						  Second line
						  ...
						  Last line
						  __END_OF_STREAM__
						  )
						  ```
							- Note: The closing `)` of ((67d25330-736b-464e-a926-ccd0771082eb)) must be the next line under the stream delimiter.
						- Output:
						  ```sh
						  $ cat <<< "${multiple_lines}"
						  This is a Here Document containing many lines
						  First line
						  Second line
						  ...
						  Last line
						  ```
					- Ref: [Wikipedia](https://en.wikipedia.org/wiki/Here_document)
				- Pipeline
				  id:: 67d24bec-ffb8-45ad-a13b-0e22124b9652
				  `cmd1 | cmd2` to [chain](https://en.wikipedia.org/wiki/Pipeline_(Unix)) output of this command `cmd1` to the input of next command `cmd2`.
					- [Named pipe](https://en.wikipedia.org/wiki/Named_pipe) (FIFO) as a file can be created with `mkfifo`
					  id:: 67d25643-5c55-4ffa-b70a-de0e7b0dff70
				- Process substitution
				  id:: 67d25950-8596-4c10-a6bb-d4389872578d
				  to treat I/O streams as (FIFO) files
					- Syntax: `<(input_provider)` and `>(output_filter)` as `infile` and `outfile`
					  ```sh
					  diff <(sort file1) <(sort file2) > >(tee res.diff) 2> >(tee err)
					  ```
					- Note: There must be **space**(s) between process substitution syntax `>()`, `<()` and stream redirection syntax `>`, `<` so that they're not confused with [appending](((67d257e9-420a-43df-b715-302cb37df234))) `>>` and [here doc](((67d24c21-82a9-4ff2-9e38-89944bcca455)))  `<<`.
					- Ref: [Wikipedia](https://en.wikipedia.org/wiki/Process_substitution)
		- Oh My Zsh
		  collapsed:: true
			- [oh-my-zsh](https://ohmyz.sh/) is a delightful, open source, community-driven framework for managing your [Zsh](https://en.wikipedia.org/wiki/Z_shell) configuration.
		- Nushell
		  collapsed:: true
		  :LOGBOOK:
		  CLOCK: [2024-10-04 Fri 10:17:52]
		  :END:
			- [Nushell](https://www.nushell.sh/) is a [Rust](https://en.wikipedia.org/wiki/Rust_(programming_language)) based shell for structured data pipelining.
			- On ((66faa5fa-52aa-4e12-8a55-c6ad22ebdfa7)), `cargo` package manager of Rust must be installed first, then `nu` can be installed by `cargo`.
				- ```sh
				  sudo apt install cargo
				  ```
				- Make sure of dependencies
				  ```sh
				  sudo apt install pkg-config build-essential libssl-dev libx11-dev libxcb-composite0-dev
				  ```
				- Check version compatibility between Rust and Nushell in [rust-toolchain.toml](https://github.com/nushell/nushell/blob/0.91.0/rust-toolchain.toml), e.g. Nushell v0.91.0 ~ Rust v1.74.1.
					- ```sh
					  cargo install nu --version ^0.91.0
					  ```
				- Ref: [Install Nu Shell on Ubuntu 20.04](https://www.osradar.com/install-nu-shell-ubuntu/)
				  collapsed:: true
					- Note: Don't install ` --all-features` as instructed here, because some "raw" features make `polars-core` compilation error: `raw_table_mut()` method not found.
	- ### editors
	  collapsed:: true
		- #### vim
		  id:: 6716110f-c747-4dbe-9af4-5ebee764c436
		  collapsed:: true
		  Vi IMproved, a programmer's text editor
			- directory browsing
				- When opening a directory, e.g. `vim .`, vim can browse it for the text file to be edited.
			- split window
			  id:: 66fe47b0-71d5-4663-bc43-d4774329a56e
				- `:[v]sp[lit] [file]` | `Ctrl`-`w`-{`s`,`v`}
				   to split horizontally (or vertically with `vs`). If no `file` is provided (or hotkey `Ctrl`-`w`-{`s`,`v`}), the current file is mirrored to the new split window.
				- `Ctrl`-`w`-(arrow key)
				   to move around.
				- `:[w]q[!]` | `Ctrl`-`w`-`c`
				  to close current window. `w` to write before closing, and `!` to discard changes.
				- `vim -{o,O} $files`
				  to open each file in a split window (`-o` for horizontal, `-O` for vertical).
			- tab
			  id:: 66fe472d-cbfe-49ff-9ec1-4c1b7853895a
				- `:tabe[dit] [file]`
				  to open new tab. If no `file` is provided, a new file (empty) is opened which is the same as `:tabnew`.
				- Each tab can contain many ((66fe47b0-71d5-4663-bc43-d4774329a56e))s.
				- `vim -p $files`
				  to open each file in a tab.
			- buffer
				- Each file is associated with an editing buffer.
				- `:e[dit] $file`
				  to open new file in current buffer.
					- ~~`:o[pen] $file_or_pattern`~~
					  collapsed:: true
					  does somehow works with relative paths but wierdly reacts with absolute paths from `~` or from root `/`.
						- From `:help open`
						  collapsed:: true
							- ```
							  :[range]o[pen]    Works like :visual: end Ex mode.
							                    {Vi: start editing in open mode}
							  :[range]o[pen] /pattern/        
							                    As above, additionally move the cursor to the column
							                    where "pattern" matches in the cursor line.
							  Vim does not support open mode, since it's not really useful.  
							  For those situations where ":open" would start open mode Vim will leave Ex mode, 
							  which allows executing the same commands, but updates the whole screen instead of only one line.
							  ```
						- StackExchange: [What does :open do in Vim?](https://vi.stackexchange.com/a/2277)
				- `:wa`, `:qa`, `:wqa`
				  to write and/or quit all buffers.
				- Each buffer can be mirrored in many ((66fe47b0-71d5-4663-bc43-d4774329a56e))s and in many ((66fe472d-cbfe-49ff-9ec1-4c1b7853895a))s.
				- `:buffers`
				  to list all buffers.
			- Paste mode
			  to avoid unexpected effects when pasting text, like auto-indentation, tab expansion, etc.
				- Status: `INSERT (Paste)`
				- `:set [no]paste` (`F5`) to turn on/off Paste mode
					- ```vimrc
					  set pastetoggle=<F5>
					  ```
		- #### nano
		  collapsed:: true
			-
	- ### DNS & `hosts`
	  id:: 675141bb-5c74-4906-b6ee-63ac3a237ef0
	  collapsed:: true
	  :LOGBOOK:
	  CLOCK: [2024-12-05 Thu 13:05:25]
	  :END:
		- `ping`
		  uses the ICMP protocol's mandatory ECHO_REQUEST datagram to elicit an ICMP ECHO_RESPONSE from a host or gateway.
		- `host`
		  a simple utility for performing DNS lookups in both way: domain name → IPs and IP → canonical name.
		- `nslookup`
		  a program to query Internet domain name servers.
		- `dig`
		  a flexible tool for interrogating DNS name servers.
		- `dnsmasq`
		  a lightweight DNS, TFTP, PXE, router advertisement and DHCP server.
		- [DNS records](https://en.wikipedia.org/wiki/List_of_DNS_record_types) in [`.zone` file](https://en.wikipedia.org/wiki/Zone_file)
		  collapsed:: true
			- `A`
			  Address record
			- `AAAA`
			  [IPv6](https://en.wikipedia.org/wiki/IPv6) Address record
			- `NS`
			  Name Server record
			- `CNAME`
			  id:: 6751469f-ce68-4946-a7e7-ed86fd5735cd
			  [Canonical Name record](https://en.wikipedia.org/wiki/CNAME_record)
			- `DNAME`
			  [Delegation Name record](https://en.wikipedia.org/wiki/DNAME_record)
			- `SOA`
			  [Start Of Authority record](https://en.wikipedia.org/wiki/SOA_record)
		- Domain name alias with ((6751469f-ce68-4946-a7e7-ed86fd5735cd))
		  id:: 67514336-628d-4f80-b154-3b7cfde988f0
		  collapsed:: true
		  :LOGBOOK:
		  CLOCK: [2024-12-05 Thu 13:05:25]--[2024-12-09 Mon 13:12:24] =>  96:06:59
		  :END:
			- Ref: [serverfault.com](https://serverfault.com/a/947713)
			- `dnsmasq.conf`
			  ```sh
			  # Provide an alias for a "local" DNS name. Note that this _only_ works
			  # for targets which are names from DHCP or /etc/hosts. 
			  cname=git1.lan.skygate.co.jp,mgmt-gitlab-clb-1008603512.ap-northeast-1.elb.amazonaws.com
			  ```
			- ((675686a5-3d59-402f-9640-12b991182e32))
				- Static IP cannot be set (in `hosts` file), due to the [IP update of `CNAME` in work time](((675653ab-ea7c-4d8b-8ef6-a378591b6443))).
				- Or we must run a background script, like ![log-cname-ips.sh](../assets/Linux/DNS/CNAME-monitoring/log-cname-ips.sh), to detect IP change of `CNAME` then update `hosts` file accordingly.
			- The history of hunting `A` records is so complicated
			  collapsed:: true
				- `dig git1.lan.skygate.co.jp` with `CNAME`
					- showing `A` records on VPN
					  collapsed:: true
						- ```scheme
						  ; <<>> DiG 9.18.28-0ubuntu0.22.04.1-Ubuntu <<>> git1.lan.skygate.co.jp
						  ;; global options: +cmd
						  ;; Got answer:
						  ;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 7852
						  ;; flags: qr aa rd ra; QUERY: 1, ANSWER: 3, AUTHORITY: 0, ADDITIONAL: 1
						  
						  ;; OPT PSEUDOSECTION:
						  ; EDNS: version: 0, flags:; udp: 1232
						  ;; QUESTION SECTION:
						  ;git1.lan.skygate.co.jp.		IN	A
						  
						  ;; ANSWER SECTION:
						  git1.lan.skygate.co.jp.	3600	IN	CNAME	mgmt-gitlab-clb-1008603512.ap-northeast-1.elb.amazonaws.com.
						  mgmt-gitlab-clb-1008603512.ap-northeast-1.elb.amazonaws.com. 0 IN A 54.199.127.69
						  mgmt-gitlab-clb-1008603512.ap-northeast-1.elb.amazonaws.com. 0 IN A 3.115.124.176
						  ```
					- without VPN, first, showing `SOA` (`AUTHORITY`) record
					  id:: 67519a83-75fe-48d2-90a1-8c48622a0edf
					  collapsed:: true
						- {{embed ((67514436-ddef-49ab-b794-f26686b572b2))}}
						- but `dnsmasq` log shows `CNAME` config
							- ```
							  Dec  5 14:07:55 dnsmasq[3334473]: query[AAAA] git1.lan.skygate.co.jp from 127.0.0.1
							  Dec  5 14:07:55 dnsmasq[3334473]: config git1.lan.skygate.co.jp is <CNAME>
							  ```
					- without VPN, then, after some hours (> DHCP DNS lease time 3600 = 1h)
						- showing only `CNAME` but with no `A` record
						  id:: 67519abb-dba9-4637-9c1a-feebe4b76589
						  collapsed:: true
							- ```sh
							  host git1.lan.skygate.co.jp
							  git1.lan.skygate.co.jp is an alias for mgmt-gitlab-clb-1008603512.ap-northeast-1.elb.amazonaws.com.
							  ```
							- ```scheme
							  ; <<>> DiG 9.18.28-0ubuntu0.22.04.1-Ubuntu <<>> git1.lan.skygate.co.jp
							  ;; global options: +cmd
							  ;; Got answer:
							  ;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 60341
							  ;; flags: qr aa rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1
							  
							  ;; OPT PSEUDOSECTION:
							  ; EDNS: version: 0, flags:; udp: 1232
							  ;; QUESTION SECTION:
							  ;git1.lan.skygate.co.jp.		IN	A
							  
							  ;; ANSWER SECTION:
							  git1.lan.skygate.co.jp.	0	IN	CNAME	mgmt-gitlab-clb-1008603512.ap-northeast-1.elb.amazonaws.com.
							  ```
						- after clearing the main IP address with `sudo ip addr flush enp1s0` (WARN: Internet connection will be lost!)
						  collapsed:: true
							- `host git1.lan.skygate.co.jp`
							  ```sh
							  git1.lan.skygate.co.jp is an alias for mgmt-gitlab-clb-1008603512.ap-northeast-1.elb.amazonaws.com.
							  Host mgmt-gitlab-clb-1008603512.ap-northeast-1.elb.amazonaws.com not found: 5(REFUSED)
							  Host mgmt-gitlab-clb-1008603512.ap-northeast-1.elb.amazonaws.com not found: 5(REFUSED)
							  ```
							- `nslookup git1.lan.skygate.co.jp`
							  ```sh
							  Server:		127.0.0.1
							  Address:	127.0.0.1#53
							  
							  git1.lan.skygate.co.jp	canonical name = mgmt-gitlab-clb-1008603512.ap-northeast-1.elb.amazonaws.com.
							  ** server can't find mgmt-gitlab-clb-1008603512.ap-northeast-1.elb.amazonaws.com: REFUSED
							  ```
							- `dig` result is the same as [above](((67519abb-dba9-4637-9c1a-feebe4b76589))).
							- ⇒ So, the problem is with DHCP: somehow it cannot resolve this `CNAME` record.
							  id:: 6772a6d3-db76-4984-bb94-67367a3f5e54
						- finally, after [digging CNAME](((678de2b7-649c-4c49-9448-e22149a8e407))) of `git1` for IP resolution, `A` records appear in answer for `git1`, but still unstable!
						  id:: 675686a5-3d59-402f-9640-12b991182e32
						  collapsed:: true
						  :LOGBOOK:
						  CLOCK: [2024-12-09 Mon 13:44:32]--[2024-12-09 Mon 16:21:21] =>  02:36:49
						  :END:
							- The unstability is due to the short TTL only 1 minute. ((67565823-ee51-4a8d-8523-e02105fe6c94))
							- Monitor `dig git1.lan.skygate.co.jp` with ![log-git1.sh](../assets/Linux/DNS/CNAME-monitoring/log-git1.sh)
								- IP down pattern: Every minute, at the expiration threshold (TTL=0), the IPs of `CNAME` is reset, making the `A` records disappear.
								  id:: 67565823-ee51-4a8d-8523-e02105fe6c94
								  collapsed:: true
									- ```sh
									  Monitoring host git1.lan.skygate.co.jp for A records
									    from CNAME mgmt-gitlab-clb-1008603512.ap-northeast-1.elb.amazonaws.com
									   0+2_14 1+2_13 2+2_12 3+2_11 4+2_10 5+2_9 6+2_8 7+2_7 8+2_6 9+2_5 10+2_4 11+2_3 12+2_2 13+2_1 14+2_60 15+2_59 16+2_58 17+2_57 18+2_56 19+2_55 20+2_53 21+2_52 22+2_51 23+2_50 24+2_49 25+2_48 26+2_47 27+2_46 28+2_45 29+2_44 30+2_43 31+2_42 32+2_41 33+2_40 34+2_39 35+2_38 36+2_37 37+2_36 38+2_35 39+2_34 40+2_33 41+2_32 42+2_31 43+2_29 44+2_28 45+2_27 46+2_26 47+2_25 48+2_24 49+2_23 50+2_22 51+2_21 52+2_20 53+2_19 54+2_18 55+2_17 56+2_16 57+2_15 58+2_14 59+2_13 60+2_12 61+2_11 62+2_10 63+2_9 64+2_8 65+2_7 66+2_5 67+2_4 68+2_3 69+2_2 70+2_1 71
									  2024-12-09_16:11:32
									  -- 71 72
									  2024-12-09_16:11:33
									    18.176.245.94
									    35.79.126.246
									  ++ 72+2_59 73+2_58 74+2_57 75+2_56 76+2_55 77+2_54 78+2_53 79+2_52 80+2_51 81+2_50 82+2_49 83+2_48 84+2_47 85+2_46 86+2_45 87+2_44 88+2_43 89+2_42 90+2_41 91+2_39 92+2_38 93+2_37 94+2_36 95+2_35 96+2_34 97+2_33 98+2_32 99+2_31 100+2_30 101+2_29 102+2_28 103+2_27 104+2_26 105+2_25 106+2_24 107+2_23 108+2_22 109+2_21 110+2_20 111+2_19 112+2_18 113+2_17 114+2_15 115+2_14 116+2_13 117+2_12 118+2_11 119+2_10 120+2_9 121+2_8 122+2_7 123+2_6 124+2_5 125+2_4 126+2_3 127+2_2 128+2_1 129
									  2024-12-09_16:12:32
									  -- 129 130
									  2024-12-09_16:12:33
									    18.176.245.94
									    35.79.126.246
									  ++ 130+2_59 131+2_58 132+2_57 133+2_56 ...
									  ```
									- Interestingly, there's no IP down in the period of [IP update](((675653ab-ea7c-4d8b-8ef6-a378591b6443))) around 21h.
									  collapsed:: true
										- ```sh
										  -- 2816 2817 2818 2819 2820 2821 2822 ( 2024-12-08 18:27:40 )
										  ++ 2822+2 2823+2 2824+2 2825+2 2826+2 2827+2 2828+2 ... 2993+2 ( 2024-12-08 21:18:40 )
										   + 2994+1 2995+1 2996+1 2997+1 2998+1 2999+1 3000+1 3001+1
										  ++ 3002+2 3003+2 3004+2 3005+2 3006+2 3007+2 3008+2 3009+2 3010+2 3011+2 3012+2
										   + 3013+1 3014+1 3015+1 3016+1
										  ++ 3017+2 3018+2 3019+2 3020+2 3021+2 3022+2 3023+2 3024+2 3025+2 3026+2
										   + 3027+1 3028+1 3029+1 3030+1
										  ++ 3031+2 ... 3159+2 3160
										  -- 3160 3161 3162 3163 ( 2024-12-09 00:08:40 )
										  ```
							- Monitor IPs of CNAMEs with ![log-cname-ips.sh](../assets/Linux/DNS/CNAME-monitoring/log-cname-ips.sh)
								- Only GitLab IPs are updated.
								- IP update pattern: around **21h** ([ICT](https://en.wikipedia.org/wiki/UTC%2B07:00)) each night, the IPs are updated and _**unstable** in around 1 hour_.
								  id:: 675653ab-ea7c-4d8b-8ef6-a378591b6443
								  Moreover, in weekdays, IPs can be updated some times **in work time**.
									- ```sh
									  179 180 181 182 183 184 185 ..... 1642 1643 ( 2 minutes to 1 day )
									  mgmt-gitlab-clb-1008603512.ap-northeast-1.elb.amazonaws.com: 2024-12-07 21:45:22
									    3.113.184.150
									  1644 1645 1646 1647 1648 1649 1650 1651 ( 2 to 10 minutes )
									  mgmt-gitlab-clb-1008603512.ap-northeast-1.elb.amazonaws.com: 2024-12-07 21:53:23
									    3.113.184.150
									    3.115.119.69
									  ```
								- Results in minutes
								  collapsed:: true
									- ```sh
									  Monitoring hosts:
									    mgmt-gitlab-clb-1008603512.ap-northeast-1.elb.amazonaws.com
									    mgmt-repo1-clb-243604401.ap-northeast-1.elb.amazonaws.com
									    mgmt-tools-alb-1633637944.ap-northeast-1.elb.amazonaws.com
									  0 1 2 3 4 5 6 7 8 9 10 ... 173 
									  mgmt-gitlab-clb-1008603512.ap-northeast-1.elb.amazonaws.com:2024-12-06_21:10:17
									    3.115.119.69
									  174 175 176 177 178 
									  mgmt-gitlab-clb-1008603512.ap-northeast-1.elb.amazonaws.com:2024-12-06_21:15:18
									    3.113.184.150
									    3.115.119.69
									  179 180 181 182 183 184 185 ..... 1642 1643 
									  mgmt-gitlab-clb-1008603512.ap-northeast-1.elb.amazonaws.com:2024-12-07_21:45:22
									    3.113.184.150
									  1644 1645 1646 1647 1648 1649 1650 1651 
									  mgmt-gitlab-clb-1008603512.ap-northeast-1.elb.amazonaws.com:2024-12-07_21:53:23
									    3.113.184.150
									    3.115.119.69
									  1652 1653 
									  mgmt-gitlab-clb-1008603512.ap-northeast-1.elb.amazonaws.com:2024-12-07_21:55:24
									    3.113.184.150
									  1654 
									  mgmt-gitlab-clb-1008603512.ap-northeast-1.elb.amazonaws.com:2024-12-07_21:56:24
									    3.113.184.150
									    54.199.144.98
									  1655 1656 1657 1658 1659 1660 ... 3049 
									  mgmt-gitlab-clb-1008603512.ap-northeast-1.elb.amazonaws.com:2024-12-08_21:16:09
									    3.113.184.150
									  3050 3051 3052 3053 3054 3055 3056 3057 
									  mgmt-gitlab-clb-1008603512.ap-northeast-1.elb.amazonaws.com:2024-12-08_21:24:10
									    3.113.184.150
									    54.199.144.98
									  3058 3059 3060 3061 3062 3063 3064 3065 3066 3067 3068 
									  mgmt-gitlab-clb-1008603512.ap-northeast-1.elb.amazonaws.com:2024-12-08_21:35:13
									    3.113.184.150
									  3069 3070 3071 3072 
									  mgmt-gitlab-clb-1008603512.ap-northeast-1.elb.amazonaws.com:2024-12-08_21:39:14
									    3.113.184.150
									    54.199.144.98
									  3073 3074 3075 3076 3077 3078 3079 3080 3081 3082 
									  mgmt-gitlab-clb-1008603512.ap-northeast-1.elb.amazonaws.com:2024-12-08_21:49:16
									    54.199.144.98
									  3083 3084 3085 3086 
									  mgmt-gitlab-clb-1008603512.ap-northeast-1.elb.amazonaws.com:2024-12-08_21:53:16
									    3.113.184.150
									    54.199.144.98
									  3087 3088 3089 3090 3091 3092 ...
									  
									  
									  ```
						- ⇒ **Root cause**: IPs of CNAME are not updated automatically [by DHCP](((6772a6d3-db76-4984-bb94-67367a3f5e54))).
						  id:: 678de1bb-c536-4e3a-bbb7-aa453339dbe1
							- ⇒We must manually request DHCP to update CNAME IPs by query IP for them: `[nslookup,dig,ping] $CNAME`
							  id:: 678de2b7-649c-4c49-9448-e22149a8e407
							  collapsed:: true
								- E.g., after
								  ```sh
								  ⮕ nslookup mgmt-gitlab-clb-1008603512.ap-northeast-1.elb.amazonaws.com                  [f54d504e0]
								  Server:		127.0.0.1
								  Address:	127.0.0.1#53
								  
								  Non-authoritative answer:
								  Name:	mgmt-gitlab-clb-1008603512.ap-northeast-1.elb.amazonaws.com
								  Address: 3.113.217.136
								  Name:	mgmt-gitlab-clb-1008603512.ap-northeast-1.elb.amazonaws.com
								  Address: 54.168.37.56
								  ```
								- we have
								  ```sh
								  ⮕ nslookup git1.lan.skygate.co.jp                                                       [f54d504e0]
								  Server:		127.0.0.1
								  Address:	127.0.0.1#53
								  
								  Non-authoritative answer:
								  git1.lan.skygate.co.jp	canonical name = mgmt-gitlab-clb-1008603512.ap-northeast-1.elb.amazonaws.com.
								  Name:	mgmt-gitlab-clb-1008603512.ap-northeast-1.elb.amazonaws.com
								  Address: 3.113.217.136
								  Name:	mgmt-gitlab-clb-1008603512.ap-northeast-1.elb.amazonaws.com
								  Address: 54.168.37.56
								  ```
							- The script ![log-cname-ips.sh](../assets/Linux/DNS/CNAME-monitoring/log-cname-ips.sh) keeps CNAMEs resolved by `dig`ging them every minute.
						- no benefit with `domain=hybrid-technologies.vn` in `/etc/dnsmasq.conf`
						  collapsed:: true
							- No apparent difference!
							- Ref: [CNAME aliases with dnsmasq](https://groups.google.com/g/uk.comp.os.linux/c/cYFMngIAFi0/m/pcYR1yeDNi4J)
				- `dig git1.lan.skygate.co.jp` without `CNAME`
					- showing `SOA` (`AUTHORITY`) record
					  id:: 67515558-ad0b-4605-a785-13ce84c60442
					  collapsed:: true
						- id:: 67514436-ddef-49ab-b794-f26686b572b2
						  ```scheme
						  ; <<>> DiG 9.18.28-0ubuntu0.22.04.1-Ubuntu <<>> git1.lan.skygate.co.jp
						  ;; global options: +cmd
						  ;; Got answer:
						  ;; ->>HEADER<<- opcode: QUERY, status: NXDOMAIN, id: 7564
						  ;; flags: qr rd ra; QUERY: 1, ANSWER: 0, AUTHORITY: 1, ADDITIONAL: 1
						  
						  ;; OPT PSEUDOSECTION:
						  ; EDNS: version: 0, flags:; udp: 1232
						  ; COOKIE: 7f7484304144a3db01000000675140d16726b2ae31a10949 (good)
						  ;; QUESTION SECTION:
						  ;git1.lan.skygate.co.jp.		IN	A
						  
						  ;; AUTHORITY SECTION:
						  skygate.co.jp.		204	IN	SOA	ns-1303.awsdns-34.org. awsdns-hostmaster.amazon.com. 1 7200 900 1209600 300
						  ```
					- showing `A` record when setting IP directly (copied from `mgmt-gitlab-clb-1008603512`)
					  collapsed:: true
						- ```scheme
						  ; <<>> DiG 9.18.28-0ubuntu0.22.04.1-Ubuntu <<>> git1.lan.skygate.co.jp
						  ;; global options: +cmd
						  ;; Got answer:
						  ;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 25891
						  ;; flags: qr aa rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1
						  
						  ;; OPT PSEUDOSECTION:
						  ; EDNS: version: 0, flags:; udp: 1232
						  ;; QUESTION SECTION:
						  ;git1.lan.skygate.co.jp.		IN	A
						  
						  ;; ANSWER SECTION:
						  git1.lan.skygate.co.jp.	0	IN	A	3.115.124.176
						  ```
				- `dig mgmt-gitlab-clb-1008603512.ap-northeast-1.elb.amazonaws.com`
				  id:: 675146f7-489d-42f9-8ba9-f2b71a222ec1
				  collapsed:: true
					- ```scheme
					  ; <<>> DiG 9.18.28-0ubuntu0.22.04.1-Ubuntu <<>> mgmt-gitlab-clb-1008603512.ap-northeast-1.elb.amazonaws.com
					  ;; global options: +cmd
					  ;; Got answer:
					  ;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 19784
					  ;; flags: qr rd ra; QUERY: 1, ANSWER: 2, AUTHORITY: 0, ADDITIONAL: 1
					  
					  ;; OPT PSEUDOSECTION:
					  ; EDNS: version: 0, flags:; udp: 1232
					  ; COOKIE: c56b8d8d51904bb80100000067514100ea8c497ab05012df (good)
					  ;; QUESTION SECTION:
					  ;mgmt-gitlab-clb-1008603512.ap-northeast-1.elb.amazonaws.com. IN	A
					  
					  ;; ANSWER SECTION:
					  mgmt-gitlab-clb-1008603512.ap-northeast-1.elb.amazonaws.com. 60	IN A 3.115.124.176
					  mgmt-gitlab-clb-1008603512.ap-northeast-1.elb.amazonaws.com. 60	IN A 54.199.127.69
					  ```
	- ### FreeDesktop/XDG
	  id:: 669499f7-76c4-4ff8-a27e-be9768a6258c
	  :LOGBOOK:
	  CLOCK: [2024-07-15 Mon 11:05:00]
	  CLOCK: [2024-07-15 Mon 11:06:32]
	  :END:
	  "Cross-Desktop Group"
		- ((665359c3-61fd-4858-a117-ecbcd6fbc9ea)) https://specifications.freedesktop.org/
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Freedesktop.org
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://www.freedesktop.org/wiki/Specifications/
		- `.desktop` file
			- installed in `/usr/share/applications/` and `~/.local/share/applications/`
		- Autostart
		  id:: 66b1cfa4-1438-4699-9f02-b84075f2a167
			- `.desktop` files in `~/.config/autostart/`
			- Startup Applications Preference: app drawer search (`startup`, `applications`)
		- XDG Base Directory
		  id:: 66949bc7-a1ae-4da3-b889-efbe35abf56d
		  :LOGBOOK:
		  CLOCK: [2024-07-15 Mon 11:07:42]
		  :END:
			- ((665359c0-a89a-41b5-9f28-503f79107a08))  https://wiki.archlinux.org/title/XDG_Base_Directory
		- Standard Icon Names
		  id:: 67eb7908-267d-4091-840f-eaf405632317
			- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://specifications.freedesktop.org/icon-naming-spec/latest/#names
	- ### GNOME Desktop
	  id:: 66b1cfa4-808f-407c-bf5a-b93812604b5d
		- GNOME Shell
		  id:: 66c6b316-ef58-4b86-a6ca-fbf9125dad92
		  collapsed:: true
		  `gnome-shell`
			- ((6651ecba-793d-43c5-8020-a9f260b032d8)) ((66c6b316-ef58-4b86-a6ca-fbf9125dad92)) provides core user interface functions for ((66b1cfa4-808f-407c-bf5a-b93812604b5d)), like switching to windows and launching applications. User interface elements provided by GNOME Shell include the Panel at the top of the screen, the Activities Overview, and Message Tray at the bottom of the screen.
			- Terminal
			  id:: 66c6bd7d-c9af-4f64-a65b-f4ff075961bb
			  `gnome-terminal[-server]`
			- Nautilus (file browser)
			  id:: 66c6bd94-76a7-4b80-bf2e-b8af02737af2
			  `nautilus`
			- System Monitor
			  id:: 66c6bda1-7a64-4832-af2b-906b3beb8927
			  `gnome-system-monitor`
		- GNOME Extensions
		  id:: 66c6ae6d-c722-43fa-888c-9b914387294f
		  collapsed:: true
		  :LOGBOOK:
		  CLOCK: [2024-08-22 Thu 10:47:24]
		  :END:
		  `gnome-extensions`
			- ((665359c3-61fd-4858-a117-ecbcd6fbc9ea)) https://extensions.gnome.org/
			- ((6651ecba-793d-43c5-8020-a9f260b032d8)) ((66c6ae6d-c722-43fa-888c-9b914387294f)) extend ((66c6b316-ef58-4b86-a6ca-fbf9125dad92)). They are managed on the website https://extensions.gnome.org which requires a ((66c6b15d-bbf8-42bd-93c4-fb19c0490264)) to work. The installed extensions can also be configured via ((66c6e677-d0b2-48f7-92da-8a38d8e9bd9c)).
				- `Extensions` desktop app
				  id:: 66c6e677-d0b2-48f7-92da-8a38d8e9bd9c
				  collapsed:: true
				  `gnome-extensions-app`
					- app drawer search (`gnome`, `shell`, `extensions`, `app`) > `Extensions` > `Manually Installed` > e.g.(`Smart Auto Move`) > `Settings`
			- Browser integration
			  id:: 66c6b15d-bbf8-42bd-93c4-fb19c0490264
			  collapsed:: true
				- ((665359c3-61fd-4858-a117-ecbcd6fbc9ea)) https://gnome.pages.gitlab.gnome.org/gnome-browser-integration/
				- ((6651ecba-793d-43c5-8020-a9f260b032d8)) `gnome-browser-connector` is required for managing ((66c6ae6d-c722-43fa-888c-9b914387294f)).
			- #### Smart Auto Move
			  id:: 66c6aef1-998a-45fb-8ad8-8550a008859d
			  collapsed:: true
			  :LOGBOOK:
			  CLOCK: [2024-08-22 Thu 10:46:49]--[2024-08-22 Thu 18:03:09] =>  07:16:20
			  :END:
			  `smart-auto-move@khimaros.com`
				- ((665359c3-61fd-4858-a117-ecbcd6fbc9ea)) https://extensions.gnome.org/extension/4736/smart-auto-move/
				- ((665f1a5c-6c98-4785-a177-3cd01507595d)) https://github.com/khimaros/smart-auto-move
				- ((6651ecba-793d-43c5-8020-a9f260b032d8)) ((66c6aef1-998a-45fb-8ad8-8550a008859d)) learns the position, size, and workspace of your application windows and restores them on subsequent launches. ((66b1cfa4-f6a5-444d-97fb-e76a1c5fb1c7)) is supported.
					- Saved Windows
					  id:: 66c70945-3ce5-4f95-8cce-1b8a3f2bd464
					  `saved-windows`
					  stores the info of opened windows (in the past) which will be restored to a newly opening window only when it matches the saved one via an ((66c709d4-2541-45ba-a3ad-139ea44d9b04)).
					- override
					  id:: 66c709d4-2541-45ba-a3ad-139ea44d9b04
					  `overrides`
					  defines a matching criteria (`title` or {`any`, `threshold`}) and an action (`1`=`RESTORE` or `0`=`IGNORE`) to be taken when a newly opening window matches a [saved window](((66c70945-3ce5-4f95-8cce-1b8a3f2bd464))). An override can be created by clicking the button `OVERRIDE` or `OVERRIDE (ANY)` in the ((66c70945-3ce5-4f95-8cce-1b8a3f2bd464)) tab.
				- Config: command `gnome-extensions prefs smart-auto-move@khimaros.com` or via ((66c6e677-d0b2-48f7-92da-8a38d8e9bd9c))
					- Set `freeze-saves=true` to freeze the ((66c70945-3ce5-4f95-8cce-1b8a3f2bd464)). Whenever we want to update a saved window, just open & close it `freeze-saves`=`true -> false -> true` to get all currently opening windows captured in Saved Windows, then delete all irrelevant ones in the Saved Windows.
					- Set default `sync-mode='IGNORE'` to ignore irrelevant windows, then manually set ((66c709d4-2541-45ba-a3ad-139ea44d9b04)) `action:1`=`RESTORE` only to the ones we want to restore.
					- backup config
					  ```
					  dconf dump /org/gnome/shell/extensions/smart-auto-move/ > ~/Documents/smart-auto-move.dconf
					  ```
					- restore config
					  ```
					  dconf load /org/gnome/shell/extensions/smart-auto-move/ < ~/Documents/smart-auto-move.dconf
					  ```
					- sample config: [smart-auto-move.dconf](../assets/Linux/GNOME/smart-auto-move/smart-auto-move.dconf) > ![saved-windows](../assets/Linux/GNOME/smart-auto-move/smart-auto-move.saved-windows.json), ![overrides](../assets/Linux/GNOME/smart-auto-move/smart-auto-move.overrides.json)
				- Settings for ((66c6bd7d-c9af-4f64-a65b-f4ff075961bb))
					- ((6651ecba-793d-43c5-8020-a9f260b032d8)) Matching terminals is a complicated task, so we must combine ((66c6f1cd-52d3-4606-8f54-08bef7acf4ea)) with ((66c710d9-241d-46b2-8dc1-bf2591492565)) and ((66c70166-889c-419e-8fd0-79d404e63e00)).
					- autostart `.desktop` files
					  id:: 66c6f1cd-52d3-4606-8f54-08bef7acf4ea
						- `~/.config/autostart/gnome-terminal-{1,2}.desktop`: {1st, 2nd} Terminal window on the {left, right}
						- Exec=`gnome-terminal --window --tab` to create new window with 2 tabs so that the window height includes tab title.
							- Note that `--title` is ineffective because the title will be overridden right away! So we must rely on [the order of launching](((66c70166-889c-419e-8fd0-79d404e63e00))) instead.
					- `title` in ((66c709d4-2541-45ba-a3ad-139ea44d9b04))
					  id:: 66c710d9-241d-46b2-8dc1-bf2591492565
					  `dinhlx@CPU000375:~` is the title of the startup terminals.
					- `sequence` in ((66c70945-3ce5-4f95-8cce-1b8a3f2bd464))
					  id:: 66c70166-889c-419e-8fd0-79d404e63e00
					  the order of launching determines which terminal to be placed where.
		- `/usr/share/icons/`
		  id:: 67eb7601-ab2c-41df-a42c-84a77a88ec08
		  collapsed:: true
			- Default Gnome (Tango) icons using ((67eb7908-267d-4091-840f-eaf405632317)): [shown on wikimedia](https://commons.wikimedia.org/wiki/GNOME_Desktop_icons)
			- Yaru: default theme for Ubuntu
				- `Yaru/scalable/`: `*-symbolic.svg` are [symbolic icons](https://wiki.gnome.org/Design/OS/SymbolicIcons), mostly monochrome and some low colors instead of colorful [app icons](((67eb8856-16c0-4c50-8bc5-e00b32ddb51f))), for [various context-dependent usages](https://developer.gnome.org/hig/guidelines/ui-icons.html): UI elements, actions in Clear-text fields, etc.
				- `Yaru/${scale}/`: colorful [app icons](https://developer.gnome.org/hig/guidelines/app-icons.html) for buttons and windows of applications
				  id:: 67eb8856-16c0-4c50-8bc5-e00b32ddb51f
			- Humanity: default theme for GTK
			- Adwaita: default theme for GNOME
			- Gnome: legacy GNOME theme
		- `GSettings`
		  id:: 68358161-eb10-4c78-805e-88f9f460d376
		  collapsed:: true
		  the GNOME application settings API, backed by the [`dconf` database](https://en.wikipedia.org/wiki/Dconf)
			- ((6651ecba-793d-43c5-8020-a9f260b032d8)) ((68358161-eb10-4c78-805e-88f9f460d376)), now renamed as [Gio](https://docs.gtk.org/gio/), is the frontend to ((6835836d-d097-44f0-9654-aa3f2e13160a)), providing API to store and retrieve application settings, similar to the [Windows Registry database](https://en.wikipedia.org/wiki/Windows_Registry). This is the new settings system from GNOME 3 replacing the deprecated [GConf](https://en.wikipedia.org/wiki/GConf) of GNOME 2.
			- `gsettings` is the CLI for `GSettings` API, using dot-separated path, e.g.
			  ```sh
			  gsettings get org.gnome.shell favorite-apps
			  ```
			- `dconf`
			  id:: 6835836d-d097-44f0-9654-aa3f2e13160a
			  the CLI for [`dconf` database](https://en.wikipedia.org/wiki/Dconf), using slash-separated path
				- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Dconf
				- E.g.
				  ```sh
				  dconf read /org/gnome/shell/favorite-apps
				  ```
			- `dconf-editor`
			  the GUI app for ((6835836d-d097-44f0-9654-aa3f2e13160a))
				- screenshot
					- ![dconf-editor.png](../assets/Linux/GNOME/GSettings/dconf-editor.png)
	- ### Wayland
	  id:: 66b1cfa4-f6a5-444d-97fb-e76a1c5fb1c7
		- [XWayland](https://wayland.freedesktop.org/xserver.html)
		  id:: 66c6cd8c-5367-4ae4-a76c-970732c2aebb
	- Software management
		- ### APT
		  id:: 68357072-2dcb-42b5-a228-15ed904010f8
		  collapsed:: true
		  Advanced Package Tool developed by [Debian](https://en.wikipedia.org/wiki/Debian)
			- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/APT_(software)
			- ((6651ecba-793d-43c5-8020-a9f260b032d8)) ((68357072-2dcb-42b5-a228-15ed904010f8)) is a frontend to ((68357b4a-1d33-464c-bbe0-fe2a0a722eee)), providing CLI like `apt`, `apt-get` and `apt-cache`, to manage [.deb](https://en.wikipedia.org/wiki/Deb_(file_format)) packages.
			- `dpkg`
			  id:: 68357b4a-1d33-464c-bbe0-fe2a0a722eee
			  backend of ((68357072-2dcb-42b5-a228-15ed904010f8))
				- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Dpkg
			- `/etc/apt/sources.list`
			  id:: 68357c0a-641a-4bf6-8e98-41c43810ca07
			  collapsed:: true
			  package [repositories](https://help.ubuntu.com/community/Repositories/Ubuntu) for ((68357072-2dcb-42b5-a228-15ed904010f8))
				- Repositories:
					- `${RELEASE}`: Installation packages
					- `${RELEASE}`-`updates`: Recommended updates
					- `${RELEASE}`-`security`: Important security updates
					- `${RELEASE}`-`backports`: Unsupported updates
				- Components:
					- Main: Canonical-supported free and open-source software.
					- Universe: Community-maintained (canonical-unsupported) free and open-source software.
					- Restricted: Proprietary drivers for devices, canonical-supported.
					- Multiverse: Software restricted by copyright or legal issues, community-maintained.
				- Releases: (see [Ubuntu lifecycle and release cadence](https://ubuntu.com/about/release-cycle))
					- LTS = Long Term Support
					- Main = Hardware and maintenance updates
					- ESM = Extended Security Maintenance
					  id:: 68357df4-ee9c-4268-a8c7-3a1251ad3ebf
				- Examples
					- Focal Fossa (20.04) > Jammy Jellyfish (22.04) @ HTV
					  collapsed:: true
						- ```sh
						  # deb cdrom:[Ubuntu 20.04.5 LTS _Focal Fossa_ - Release amd64 (20220831)]/ focal main restricted
						  #   disabled at the end of the first installation process.
						  
						  # First installation: Focal Fossa (20.04)
						  # Upgrades: > Jammy Jellyfish (22.04) > ...
						  # Ref: https://help.ubuntu.com/community/Repositories/Ubuntu
						  # Repositories:
						  # 1. ${RELEASE}: Installation packages
						  # 2. ${RELEASE}-updates: Recommended updates
						  # 3. ${RELEASE}-security: Important security updates 
						  # 4. ${RELEASE}-backports: Unsupported updates
						  # Components:
						  # 1. Main: Canonical-supported free and open-source software.
						  # 2. Universe: Community-maintained (canonical-unsupported) free and open-source software.
						  # 3. Restricted: Proprietary drivers for devices, canonical-supported.
						  # 4. Multiverse: Software restricted by copyright or legal issues, community-maintained.
						  
						  # LTS Releases: (ref: https://ubuntu.com/about/release-cycle)
						  #   LTS = Long Term Support
						  #   Main = Hardware and maintenance updates
						  #   ESM = Extended Security Maintenance
						  
						  # Jammy Jellyfish (22.04 LTS): 2022 ---Main--- 2027 ---ESM---
						  deb http://vn.archive.ubuntu.com/ubuntu/ jammy main universe restricted multiverse
						  # deb-src http://vn.archive.ubuntu.com/ubuntu/ jammy main universe restricted multiverse
						  deb http://security.ubuntu.com/ubuntu/ jammy-security main restricted universe multiverse
						  # deb-src http://security.ubuntu.com/ubuntu/ jammy-security main restricted universe multiverse
						  
						  # Focal Fossa (20.04 LTS): 2020 ---Main--- 2025 ---ESM--- 2030
						  deb http://vn.archive.ubuntu.com/ubuntu/ focal main universe restricted multiverse
						  # deb-src http://vn.archive.ubuntu.com/ubuntu/ focal main universe restricted multiverse
						  deb http://security.ubuntu.com/ubuntu/ focal-security main restricted universe multiverse
						  # deb-src http://security.ubuntu.com/ubuntu/ focal-security main restricted universe multiverse
						  ```
			- Front ends
				- Ubuntu Software Center
				  id:: 68357215-b39b-449c-b63e-4c33f5b1f0da
					- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Ubuntu_Software_Center
					- ((6651ecba-793d-43c5-8020-a9f260b032d8)) ((68357215-b39b-449c-b63e-4c33f5b1f0da)) is the standard software manager of ((66faa5fa-52aa-4e12-8a55-c6ad22ebdfa7)).
						- It has included ((681826b1-9b87-4950-905f-b057e91ffca5)) packages which were managed separately by [Snap Store](https://snapcraft.io/store) app previously.
						  collapsed:: true
							- Now, the ((6835a66a-c864-440a-8e12-ff556f1d4c8f)) is a snap itself, which is launched by Snap Store!
							  `snap-store_ubuntu-software.desktop`:`Exec`=`/snap/bin/snap-store.ubuntu-software`
					- App “Ubuntu Software”
					  id:: 6835a66a-c864-440a-8e12-ff556f1d4c8f
					  ![ubuntu-software-icon.png](../assets/Linux/APT/ubuntu-software-icon.png){:width 32} `snap-store.ubuntu-software`
						- This is a simple GUI to browse available/installed/updatable apps.
					- App “Software & Updates”
					  ![software-properties-gtk-icon.png](../assets/Linux/APT/software-properties-gtk-icon.png){:width 32} `software-properties-gtk`
						- This is the GUI for various APT settings: [repositories](((68357c0a-641a-4bf6-8e98-41c43810ca07))) in 2 tabs `Ubuntu Software` & `Other Software`, updates in tab `Updates`, trusted software providers in tab `Authentication`.
						- Tab `Updates`
						  collapsed:: true
							- **OS upgrade**: Option "**Notify me of a new Ubuntu version**" → `/etc/update-manager/release-upgrades`
							- **Software update** → `/etc/apt/apt.conf.d/{10periodic,20auto-upgrades}` configured for `/usr/lib/apt/apt.systemd.daily` called by [apt-daily[-upgrade].service](https://wiki.debian.org/UnattendedUpgrades#Modifying_download_and_upgrade_schedules_.28on_systemd.29).
								- Option "**Automatically check for updates**" → `APT::Periodic::Update-Package-Lists $N`: Do `apt update` every `$N` days by `apt-daily.service`.
								  Note: this option only apply to *non-security updates*. I.e. the choice "Never" does NOT turn off automatic checking!
								- Option "**When there are security updates**" → `APT::Periodic::{Download-Upgradeable-Packages,Unattended-Upgrade}`:
								  _The **security updates** are **always automatically** checked by [update-manager](((6835a6bf-bdd4-46d5-9d07-e24744e16000))) and **notified immediately**_. Then optionally, ...
									- "Display immediately": This is the minimum option! Hence, no way to mute notification (via GUI settings)!!!
									- "Download automatically" → `APT::Periodic::Download-Upgradeable-Packages`: automatically download (`apt-get --download-only`) by `apt-daily.service`.
									- "Download and install automatically" → `APT::Periodic::Unattended-Upgrade`: Automatically intall (`apt upgrade`) by `apt-daily-upgrade.service → /usr/bin/unattended-upgrade`.
								- Option "When there are other updates" → dconf `/com/ubuntu/update-notifier/regular-auto-launch-interval`: The interval (in days) when `update-notifier` auto-launches `update-manager` for other updates (security updates are launched immediately).
					- App “Software Updater”
					  id:: 6835a6bf-bdd4-46d5-9d07-e24744e16000
					  ![update-manager-icon.png](../assets/Linux/APT/update-manager-icon.png){:width 32} `update-manager`
						- This is the one that check for updates and do update, which is **launched everyday** by ((6835acfc-5c1c-40c0-b008-93979afa8f36)) which is daily triggered by [apt-daily[-upgrade].service](https://wiki.debian.org/UnattendedUpgrades#Modifying_download_and_upgrade_schedules_.28on_systemd.29).
						- It can automatically do update via the [`unattended-upgrades.service`](https://wiki.debian.org/UnattendedUpgrades), if the flag `APT::Periodic::Unattended-Upgrade` in `/etc/apt/apt.conf.d/{10periodic,20auto-upgrades}` is on.
						- `update-notifier`
						  id:: 6835acfc-5c1c-40c0-b008-93979afa8f36
						  ![update-notifier-icon.png](../assets/Linux/APT/update-notifier-icon.png){:width 32} popup `UpdatesAvailable`
					- ((665359ff-79f1-4669-b10b-f2b0e633a7c1))
						- Automatic software update/notification
						  id:: 68358033-084f-461c-b470-5311a5127f0c
						  collapsed:: true
							- Unattended Upgrade
							  id:: 683580d0-c9c6-4708-acb6-7c21817be3dc
								- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://wiki.debian.org/UnattendedUpgrades
								- ((6651ecba-793d-43c5-8020-a9f260b032d8)) ((683580d0-c9c6-4708-acb6-7c21817be3dc)) is the service to keep the computer current with the latest security (and other) updates **automatically**. The `unattended-upgrades.service` references the following settings:
									- `/etc/apt/apt.conf.d`/{`20auto-upgrades`,`02periodic`}
									  ```c++
									  APT::Periodic::Update-Package-Lists "1";
									  APT::Periodic::Unattended-Upgrade "1";
									  ```
										- which can be modified interactively with `sudo dpkg-reconfigure unattended-upgrades`
									- From Debian 12 (Bookworm) = Ubuntu 22.04 (Jammy Jellyfish), ((683580d0-c9c6-4708-acb6-7c21817be3dc)) is *no longer a default* install with Gnome. Download and upgrade schedules are set up by ((6835789b-9394-42ff-8c03-8c19763deda6)) using `systemd` timers with [apt-daily[-upgrade].service](https://wiki.debian.org/UnattendedUpgrades#Modifying_download_and_upgrade_schedules_.28on_systemd.29). The default behaviour in Gnome for upgrades detected via APT is now to advise of availability, and not to install by default.
								-
				- Synaptic
				  id:: 683573db-769c-4215-b55b-196dc57082c2
					- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Synaptic_(software)
					- ((6651ecba-793d-43c5-8020-a9f260b032d8)) ((683573db-769c-4215-b55b-196dc57082c2)) is a GUI app for managing `deb` packages with many more details than the default ((68357215-b39b-449c-b63e-4c33f5b1f0da)): installed file list, dependencies & fix broken packages, version management (lock/pin, force)
				- `aptitude`
				  a TUI app for managing `deb` packages
					- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Aptitude_(software)
				- PackageKit
				  id:: 6835789b-9394-42ff-8c03-8c19763deda6
					- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/PackageKit
					- ((6651ecba-793d-43c5-8020-a9f260b032d8)) ((6835789b-9394-42ff-8c03-8c19763deda6)) is a **middle** software bridging backends, like ((68357072-2dcb-42b5-a228-15ed904010f8)), with frontends, like [GNOME Software](https://en.wikipedia.org/wiki/GNOME_Software), `gnome-packagekit`, etc.
						- Architecture: APT [backend] > PackageKit > [frontend] GNOME Software (or `gnome-packagekit`)
		- ### Snap
		  id:: 681826b1-9b87-4950-905f-b057e91ffca5
			- ((665359c3-61fd-4858-a117-ecbcd6fbc9ea)) https://snapcraft.io/about
			- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Snap_(software)
			- Snap Sandbox
			  id:: 66fa8a1d-4fc0-4cb9-ad57-911cba799a04
			  collapsed:: true
				- Each Snap app runs in a limited [sandbox](https://en.wikipedia.org/wiki/Snap_(software)#Configurable_sandbox).
				- Each Snap app uses a separate home `${HOME}/snap/${app}/current/` instead of the user's `${HOME}`.
				- Many system calls are blocked (`Permission denied`), e.g. `ssh`, `who`, `free`, etc.
					- For SSH access, we must explicitly allow via `ssh-keys: allows reading ssh user configuration and keys` < `Permissions` < `${app}` < `Snap Store` (`Ubuntu Software`).
					  id:: 66fb69ac-95d3-4ba0-b5ec-b1eb04898db5
						- Ref: [Dbeaver CE Ubuntu snap can't read SSH key in ~/.ssh](https://github.com/dbeaver/dbeaver/issues/10098#issuecomment-770193398)
						- ![Snap-Logseq-ssh-permission.png](../assets/logseq/Snap-Logseq-ssh-permission.png)
					- Debugging `core.sshCommand`s in `.gitconfig`
					  id:: 66fb7680-58c6-4954-8495-f199f5affa4e
						- `ssh`, `who` are denied, while `date`, `id` and shell-built-in `pwd`, `echo`, `type` are allowed.
						  collapsed:: true
							- ```ini
							  [core]
							      sshCommand = "ssh -v 2>/home/dinhlx/tmp/ssh.log" # 1: ssh: Permission denied
							      #sshCommand = "type ssh 1>/home/dinhlx/tmp/ssh.log #" # ssh is /usr/bin/ssh
							      #sshCommand = "pwd 1>/home/dinhlx/tmp/ssh.log #" # /home/dinhlx/source/UniinfoNotes
							      #sshCommand = "echo ${USER}:${HOME} 1>/home/dinhlx/tmp/ssh.log #" # dinhlx:/home/dinhlx/snap/logseq/28
							      #sshCommand = "who 2>/home/dinhlx/tmp/ssh.log #" # 1: who: Permission denied
							      #sshCommand = "type who 1>/home/dinhlx/tmp/ssh.log #" # ssh is /usr/bin/who
							      #sshCommand = "date 1>/home/dinhlx/tmp/ssh.log #" # 30/09/2024 17:47:30 +07
							      #sshCommand = "type date 1>/home/dinhlx/tmp/ssh.log #" # date is /usr/bin/date
							      #sshCommand = "id 1>/home/dinhlx/tmp/ssh.log #" # uid=1001(dinhlx) gid=1001(dinhlx) groups=1001(dinhlx),27(sudo),1002(tomcat)
							      #sshCommand = "type id 1>/home/dinhlx/tmp/ssh.log #" # id is /usr/bin/id
							  
							  [trace2]
							      normalTarget = /home/dinhlx/tmp/git.trace.log
							  ```
					- Ref: [Permission denied for calling system calls from snap app](https://forum.snapcraft.io/t/permission-denied-for-calling-system-calls-from-snap-app/16056)
				- All hidden files and folder (whose name is started with  dot `.*`) cannot be accessed by Snap app.
				  id:: 66fb7680-5c9d-4c2f-8b53-e0645b62aa4e
					- ((665dc545-151a-485a-84b7-1310fef5151c)) for some file to be used by the app, it must be placed in a non-hidden folder.
		- ### Flatpak
			- Originally "[XDG](((669499f7-76c4-4ff8-a27e-be9768a6258c)))-app"
			- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Flatpak
			- App Store: https://flathub.org/
			- Flatpak Sandbox
			  id:: 66fb5dcd-e20c-4e18-b03c-e52a5bb76425
			  collapsed:: true
				- Each Flatpack app is registered with a `${FlatpakID}`, e.g. `com.logseq.Logseq`, and runs in an [OSTree](https://en.wikipedia.org/wiki/OSTree) sandbox.
				- The sandbox of `${FlatpakID}` can be inspected with `flatpak run --command=bash ${FlatpakID}`
				- Flatpak sandbox is not as restricted as ((66fa8a1d-4fc0-4cb9-ad57-911cba799a04)).
					- Flatpak sandbox integrates user's `${HOME}` and other parts of the OS so well that it feels like running in the native environment.
					- Flatpak sandbox can handle SSH well.
					  id:: 66fb5fd7-b1b0-4e54-96b3-fe6a83e34777