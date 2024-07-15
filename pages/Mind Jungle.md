# Mind Jungle
id:: 6651e92e-fb34-4d24-a386-d9698c2e93f7
	- ((6651ecba-793d-43c5-8020-a9f260b032d8)) This is the ((665c82c0-ee06-4f43-95b8-73dbbe956080)) for ((66536578-c4d3-43f1-b35c-bf71120f0570)).
	  id:: 66600918-70a9-49da-ac23-5bfbbf006854
	-
	-
	- ## Linux
	  id:: 66949495-3846-4f89-9ea5-c62b624d282c
	  collapsed:: true
	  :LOGBOOK:
	  CLOCK: [2024-07-15 Mon 11:04:21]
	  :END:
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Linux
		- Distributions
		  collapsed:: true
			- ### Ubuntu
				- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Ubuntu
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
			- Escape sequences
			  collapsed:: true
				- Ref: [Escape sequences in C](https://en.wikipedia.org/wiki/Escape_sequences_in_C#Table_of_escape_sequences)
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
			- Autostart
			- XDG Base Directory
			  id:: 66949bc7-a1ae-4da3-b889-efbe35abf56d
			  :LOGBOOK:
			  CLOCK: [2024-07-15 Mon 11:07:42]
			  :END:
				- ((6651ecba-793d-43c5-8020-a9f260b032d8)) https://wiki.archlinux.org/title/XDG_Base_Directory
		- ### GNOME Desktop
		- ### Wayland
	- ## ItelliJ
	  collapsed:: true
		- Settings
		  collapsed:: true
			- Spell checking
			  collapsed:: true
				- Disable spell checking for codes
				  collapsed:: true
					- `Settings` > `Editor` > `Inspections` > `Spelling` > `Typo` > `Options` > uncheck `Process code` and `Process literals`
	- ## CombiNat
	  id:: 6675369a-1d13-48c5-8a77-d588aa8b59b8
	  collapsed:: true
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) ((6675369a-1d13-48c5-8a77-d588aa8b59b8)) is a [numeral system](https://en.wikipedia.org/wiki/Numeral_system) that use [Dyck words](https://en.wikipedia.org/wiki/Dyck_language), i.e. balanced brackets, to represent numbers.
	- ## self
	  id:: 667c015e-6223-4f8a-ae84-a93a49f4ff94
	- ## subject
	  id:: 667cfa3e-9856-43f0-956b-ebb4ff31d8eb
	- ## object
	  id:: 667cfa42-ade7-4310-9a7b-6d14d01c16da
	- ## particle
	  id:: 667d162c-16cf-44d3-81a5-29b1b885164f
	  collapsed:: true
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) A ((667d162c-16cf-44d3-81a5-29b1b885164f)) is an ((667cfa42-ade7-4310-9a7b-6d14d01c16da)) whose ((6678d596-9526-405a-968c-e73860e524f3)) is a ((667d15c6-67c4-4998-a549-c8b3f9de3d60)).
	- ## vector
	  id:: 667d16f8-206e-4a85-80f3-24c2aa1bf4ad
	  collapsed:: true
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) A ((667d16f8-206e-4a85-80f3-24c2aa1bf4ad)) is an ((667cfa42-ade7-4310-9a7b-6d14d01c16da)) whose ((6678d596-9526-405a-968c-e73860e524f3)) is an ((667d15b7-6364-49a9-ac58-c64d2a992b63)). Due to the dynamic nature of the arrow, a vector is a carrier of motion, like velocity vector, a carrier of direction, like ship vector, or a carrier of biological material, like insect vector.
		-
	- ## arrow
	  id:: 667d15b7-6364-49a9-ac58-c64d2a992b63
	- ## circle
	  id:: 667d15c6-67c4-4998-a549-c8b3f9de3d60
	- ## equal
	  id:: 6653751a-a1b4-44b0-a81e-0a446eb8918c
	  collapsed:: true
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) The third component of the [[Trinion]].
	- ## reference flow
	  id:: 667bef50-a33a-4275-9ca3-e9d801ab5a81
	  collapsed:: true
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) ((667bef50-a33a-4275-9ca3-e9d801ab5a81)) is the sequence of ((66723642-58f1-4a74-bba3-0108f14c6bac))s where views are arrows [joined head-to-tail](((667d151a-eaaa-4299-97b6-f3cd8f1aa98d))).
		- ((667bf816-d1c8-4ac3-b315-764c14bfbb1f)) ((667bef50-a33a-4275-9ca3-e9d801ab5a81)) is in opposite direction with ((667bef22-b272-4a7d-b613-3f1ed1a47329)). This opposition is in the sense of 2 complement arrows in a circle (🔄), and does not mean the exactly backward flow.
		  id:: 667bf653-a1ea-4a02-8669-a1a70901e9c3
		  collapsed:: true
			- In space, all ((667bef50-a33a-4275-9ca3-e9d801ab5a81)) has a corresponding ((667bef22-b272-4a7d-b613-3f1ed1a47329)), and they are usually refined to the degree that they seem to be exactly backward of each other, due to complement circles being refined to points.
			- [First note on fb](https://www.facebook.com/lxdinh/posts/pfbid034MLTAC99b6LG7pdmNKYia9hKaCiwAapreeqdb3vEWMeBvFUiPUdE2Y467AXj7v89l) about this complementarity was on 30 Nov 2017.
		- circular reference flow
		  id:: 667bf520-a80c-4b6d-98d8-1f71cae6fb56
			- self-reference
			  id:: 667bfebf-a319-46be-a795-d7fc9c156363
			  ((665c9af1-1ce2-461c-af33-671690618c8f)) ((667bf520-a80c-4b6d-98d8-1f71cae6fb56))
				- ((66725725-f76a-4328-b162-f469b87e871b)) [self-reference](https://en.wikipedia.org/wiki/Self-reference), [circular reference](https://en.wikipedia.org/wiki/Circular_reference), [recursion](https://en.wikipedia.org/wiki/Recursion), etc.
			- self-view
			  id:: 667c0481-27f1-4cd4-adcc-390de0e56cb7
			  ((665c9af1-1ce2-461c-af33-671690618c8f)) ((667bf520-a80c-4b6d-98d8-1f71cae6fb56))
			- ((6651ecba-793d-43c5-8020-a9f260b032d8)) ((667bf520-a80c-4b6d-98d8-1f71cae6fb56)) is a ((667bef50-a33a-4275-9ca3-e9d801ab5a81)) whose sink is viewed as coinciding with its source.
			- ((665359ff-79f1-4669-b10b-f2b0e633a7c1))
				- Due to [complementarity](((667bf653-a1ea-4a02-8669-a1a70901e9c3))), in space, there's a ((667bf520-a80c-4b6d-98d8-1f71cae6fb56)) for each ((667bf36a-581a-4abe-b544-2d849608a3e4)).
				- A subject guides its ((66727858-979d-4d95-8a90-7a749218cfba))s via its self-positioning in the ((667cfac2-17f1-4cbd-9f6d-1e722ff2a870)), i.e. via the ((667c0481-27f1-4cd4-adcc-390de0e56cb7)) including both the world and its ((667c015e-6223-4f8a-ae84-a93a49f4ff94)). All subject's actions are toward the target equilibrium which is the ((667c0481-27f1-4cd4-adcc-390de0e56cb7)) accurately matching the corresponding ((667c0031-0a87-44c9-9e98-6d45893b095f)) from itself via the world back to itself.
				  collapsed:: true
					- Learning is the update of ((667c0481-27f1-4cd4-adcc-390de0e56cb7)).
					- Controlling is the update of ((667bff0e-d45d-4d41-8683-51c3cf76c0bc)).
						- When a ((667cfa3e-9856-43f0-956b-ebb4ff31d8eb)) handle an ((667cfa42-ade7-4310-9a7b-6d14d01c16da)) with no purpose for itself, it's not controlling but just acting for the effect circle of the object to bring ((667bff0e-d45d-4d41-8683-51c3cf76c0bc)) to the owner subject of that object.
					- All actions of a ((667cfa3e-9856-43f0-956b-ebb4ff31d8eb)) are for itself.
						- "Helping people or harming people, all are just for ourselves!"
						  "Giúp người hay hại người cũng đều vì mình cả!"
						  is the saying that i usually say.
	- ## effect flow
	  id:: 667bef22-b272-4a7d-b613-3f1ed1a47329
	  collapsed:: true
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) ((667bef22-b272-4a7d-b613-3f1ed1a47329)) is the sequence of ((66727858-979d-4d95-8a90-7a749218cfba))s where actions are arrows [joined head-to-tail](((667d151a-eaaa-4299-97b6-f3cd8f1aa98d))).
		- circular effect flow
		  id:: 667bf36a-581a-4abe-b544-2d849608a3e4
			- self-effect
			  id:: 667bff0e-d45d-4d41-8683-51c3cf76c0bc
			  ((665c9af1-1ce2-461c-af33-671690618c8f)) ((667bf36a-581a-4abe-b544-2d849608a3e4))
			- ### change
			  id:: 667c008f-cd1f-4a6b-a9c8-d6efa1d8d342
			  ((665c9af1-1ce2-461c-af33-671690618c8f)) ((667bf36a-581a-4abe-b544-2d849608a3e4))
				- ((6651ecba-793d-43c5-8020-a9f260b032d8)) ((667c008f-cd1f-4a6b-a9c8-d6efa1d8d342)) is the difference from its ((667c015e-6223-4f8a-ae84-a93a49f4ff94)), hence a ((667bff0e-d45d-4d41-8683-51c3cf76c0bc)).
			- effect circle
			  id:: 667c0031-0a87-44c9-9e98-6d45893b095f
			  ((665c9af1-1ce2-461c-af33-671690618c8f)) ((667bf36a-581a-4abe-b544-2d849608a3e4))
			- ((6651ecba-793d-43c5-8020-a9f260b032d8)) ((667bf36a-581a-4abe-b544-2d849608a3e4)) is an ((667bef22-b272-4a7d-b613-3f1ed1a47329)) whose sink is viewed as coinciding with its source.
			- ((665359ff-79f1-4669-b10b-f2b0e633a7c1))
				- The ((667c0031-0a87-44c9-9e98-6d45893b095f)) in space generates the ((667d15b7-6364-49a9-ac58-c64d2a992b63)) in time, a.k.a. ((667c008f-cd1f-4a6b-a9c8-d6efa1d8d342)). That time arrow extends the space into a meta-space, a.k.a. [spacetime](https://en.wikipedia.org/wiki/Spacetime). This extension can be continued to extend any (meta-)space to infinity.
				  id:: 667c001e-83b9-4de5-bf81-1c71898340a2
	- ## world
	  id:: 667cfac2-17f1-4cbd-9f6d-1e722ff2a870
	  collapsed:: true
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) A ((667cfac2-17f1-4cbd-9f6d-1e722ff2a870)) is a place where at least a ((667cfa3e-9856-43f0-956b-ebb4ff31d8eb)) live with many ((667cfa42-ade7-4310-9a7b-6d14d01c16da))s. A world usually contains many objects and many subjects.
		- ((66725708-3dc4-43f5-a180-6b331c6a160f))
		  collapsed:: true
			- The physical ((667cfac2-17f1-4cbd-9f6d-1e722ff2a870)) on [Earth](https://en.wikipedia.org/wiki/Earth) is called "the World", which itself is a part of the whole physical world called [Universe](https://en.wikipedia.org/wiki/Universe).
			- A [possible world](https://en.wikipedia.org/wiki/Possible_world) in modal logic is a complete and consistent way the ((667cfac2-17f1-4cbd-9f6d-1e722ff2a870)) is or could have been.
	- ## view
	  id:: 66723642-58f1-4a74-bba3-0108f14c6bac
	  collapsed:: true
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) ((66723642-58f1-4a74-bba3-0108f14c6bac)) is an image of a ((667cfac2-17f1-4cbd-9f6d-1e722ff2a870)) projected by a ((667cfa3e-9856-43f0-956b-ebb4ff31d8eb)) to a screen, a structure, or a mind (internal screen of the subject). There are many different views of the same ((667cfa42-ade7-4310-9a7b-6d14d01c16da)) when being viewed from different ((667272b8-88a8-4928-a22a-35035c9edf05))s. Views can be as simple as a flat image, a single word, or as complicated as a ((6672513b-c4b0-4c88-8b30-c60a3c6555a7)), a ((667259a0-aa2e-49fa-bcbd-b3768a9f30b2)), a [worldview](https://en.wikipedia.org/wiki/Worldview), etc. In a ((66723642-58f1-4a74-bba3-0108f14c6bac)), each ((667cfa42-ade7-4310-9a7b-6d14d01c16da)) has a specific ((665ca429-84e3-49ff-921e-c07d19cd99ba)), and all knowledge of the ((667cfa3e-9856-43f0-956b-ebb4ff31d8eb)) about an object is no more than the forms of that object in all views of the subject.
		  id:: 6672364a-2cc2-4360-a174-1e4432c67a16
		- ((66725708-3dc4-43f5-a180-6b331c6a160f))
		  collapsed:: true
			- A ((66723642-58f1-4a74-bba3-0108f14c6bac)) in philosophy is a [perspective (point of view)](https://en.wikipedia.org/wiki/Perspectivism), which can be a [worldview](https://en.wikipedia.org/wiki/Worldview).
			- The central doctrine in Jainism is [Anekāntavāda](https://en.wikipedia.org/wiki/Anekantavada) meaning not-one-side emphasizes the nature of many different ((66723642-58f1-4a74-bba3-0108f14c6bac))s of the same thing.
			- In Buddhism, a [view](https://en.wikipedia.org/wiki/View_(Buddhism)) is a product of [mental conditioning](https://en.wikipedia.org/wiki/Sankhara), and "[Right view](https://en.wikipedia.org/wiki/Noble_Eightfold_Path#Right_view)" is the neutral ((66723642-58f1-4a74-bba3-0108f14c6bac)) detached from all conditioning, escaped from the "jungle of views".
		- ((665359ff-79f1-4669-b10b-f2b0e633a7c1))
		- ### viewpoint
		  id:: 667272b8-88a8-4928-a22a-35035c9edf05
		  collapsed:: true
		  ((665359e4-4597-4775-b849-f9acbb98960a)) ((66728236-5b19-425c-bb5f-dfc0dc8b79fd))
			- center of projection
			  id:: 66728236-5b19-425c-bb5f-dfc0dc8b79fd
			  ((665c9af1-1ce2-461c-af33-671690618c8f)) ((667272b8-88a8-4928-a22a-35035c9edf05))
			- ((6651ecba-793d-43c5-8020-a9f260b032d8)) ((667272b8-88a8-4928-a22a-35035c9edf05)) is the position of the sensor (of the subject) where the world is projected to the coresponding ((66723642-58f1-4a74-bba3-0108f14c6bac)).
			  id:: 66728162-7ad9-4b46-b7ce-dfffc58254bc
			- ((665359ff-79f1-4669-b10b-f2b0e633a7c1))
				- "Point of view" is an ambiguous term, whose literal meaning is a ((667272b8-88a8-4928-a22a-35035c9edf05)), but its figurative meaning is a ((667259a0-aa2e-49fa-bcbd-b3768a9f30b2)).
		- ### view cone
		  id:: 6672513b-c4b0-4c88-8b30-c60a3c6555a7
		  collapsed:: true
		  ((665359e4-4597-4775-b849-f9acbb98960a)) ((667251ec-d4f7-4c09-adff-73e04a4b22ed)), ((667259a0-aa2e-49fa-bcbd-b3768a9f30b2)), ((667bda02-8dc9-488e-ba16-ea75c3d7895c))
			- viewcone
			  id:: 667251ec-d4f7-4c09-adff-73e04a4b22ed
			  ((665c9af1-1ce2-461c-af33-671690618c8f)) ((6672513b-c4b0-4c88-8b30-c60a3c6555a7))
			- perspective
			  id:: 667259a0-aa2e-49fa-bcbd-b3768a9f30b2
			  ((665c9af1-1ce2-461c-af33-671690618c8f)) ((6672513b-c4b0-4c88-8b30-c60a3c6555a7))
			- cone of cause
			  id:: 667bda02-8dc9-488e-ba16-ea75c3d7895c
			  ((665c9af1-1ce2-461c-af33-671690618c8f)) ((6672513b-c4b0-4c88-8b30-c60a3c6555a7))
			- ((66725725-f76a-4328-b162-f469b87e871b))
			  id:: 66725708-3dc4-43f5-a180-6b331c6a160f
				- The past [light cone](https://en.wikipedia.org/wiki/Light_cone) in physics is a ((667251ec-d4f7-4c09-adff-73e04a4b22ed)).
				- A ((667251ec-d4f7-4c09-adff-73e04a4b22ed)) in a network is a ((667252dc-e610-4d07-bcd0-9ea6fb4499fd)).
			- #### tree view
			  id:: 667252dc-e610-4d07-bcd0-9ea6fb4499fd
			  collapsed:: true
			  :LOGBOOK:
			  CLOCK: [2024-06-21 Fri 15:28:24]
			  :END:
				- ((6651ecba-793d-43c5-8020-a9f260b032d8)) ((667252dc-e610-4d07-bcd0-9ea6fb4499fd)) is a ((667251ec-d4f7-4c09-adff-73e04a4b22ed)) of a ((667d1a95-b621-49cd-8a72-a074c963c92a)), representing a part of that network in a [tree structure](https://en.wikipedia.org/wiki/Tree_structure). In [GUI](https://en.wikipedia.org/wiki/Graphical_user_interface), [tree view](https://en.wikipedia.org/wiki/Tree_view) is a [graphical widget](https://en.wikipedia.org/wiki/Graphical_widget) showing the logical ((667252dc-e610-4d07-bcd0-9ea6fb4499fd)) to human eyes.
				- Structure:
				  id:: 667530ed-809b-4d38-8522-1ae6c8449e28
				  collapsed:: true
				  :LOGBOOK:
				  CLOCK: [2024-06-21 Fri 15:32:49]
				  :END:
					- branch
					  id:: 66740680-9724-4a67-a2c3-40f8056eb882
					  collapsed:: true
					  [branch](https://en.wikipedia.org/wiki/Branch) = stem node (including branch stalk) + [stem line](https://en.wikipedia.org/wiki/Plant_stem) + sub-branches
						- bud
						  collapsed:: true
						  [bud](https://en.wikipedia.org/wiki/Bud) = collapsed branch
							- Abuse of language with "node"
							  collapsed:: true
								- Bud = collapsed node
								- Branch = expanded node
						- [!] In [data structure tree](((66751015-5c34-493e-9663-4f0f5234b66e))), each edge/link is usually called a "branch" which is confused. Actually, each edge is a stalk, and a branch (or a [shoot](https://en.wikipedia.org/wiki/Shoot_(botany))) is the whole subtree.
						- [!] The whole branch is also called a "[shoot](https://en.wikipedia.org/wiki/Shoot_(botany))", but normally "shoot" is just the young part at the tip of a branch.
						  id:: 66751bd8-196d-4d66-a1fc-4df9155756ab
					- stem node
					  id:: 66751b3b-5fd0-4efd-a43c-db2c4930ae4f
					   = the ((66740a44-3221-41c4-90d6-14068b74b38f)) at the base of the branch = the point where this branch is branched off from its stem.
					- stem line
					  id:: 66740af5-032a-4cb1-9c97-0e4d3933ab9b
					   = internode segments + node branching points
					- stem circle
					  id:: 667bebeb-7f20-4d03-b860-1653c3137710
					   = folded ((66740af5-032a-4cb1-9c97-0e4d3933ab9b)) = border of ((66751b3b-5fd0-4efd-a43c-db2c4930ae4f))
					- node
					  id:: 66740a44-3221-41c4-90d6-14068b74b38f
					  collapsed:: true
					   = node stalk + node body
						- branch stalk = stalk of (branch) stem node (internal node)
						- leaf stalk = stalk of leaf node (terminal node)
						- If stem node is an ((66537674-6cf9-4459-8bea-7c1858c694a3)) of the whole branch, then node stalk is a further abstraction of that node.
						  collapsed:: true
							- ((66752164-1227-490c-8182-7949e4eb501d))
						- No clear distinction between "node stalk" and "node body" [in biological tree](https://en.wikipedia.org/wiki/Branch_attachment).
						  collapsed:: true
							- For terminal parts ([bud](https://en.wikipedia.org/wiki/Bud), [leaf](https://en.wikipedia.org/wiki/Leaf), [flower](https://en.wikipedia.org/wiki/Flower), [fruit](https://en.wikipedia.org/wiki/Fruit)), its clear that the node stalk is the bud trace and leaf/flower/fruit stalk.
							- In a branch with non-terminal parts, the branch ((66751b3b-5fd0-4efd-a43c-db2c4930ae4f)) is defined as the "node" on the stem where this branch is branched off. But because there's no clear definition of "node" in this case, there's no clear distinction between "node stalk" and "node body".
								- The "node stalk" can be a node trace (branch/bud/leaf trace), a nodal cone ([knot](https://en.wikipedia.org/wiki/Wood#Knots)), internally, or externally a branch bark ridge.
								- The "node body" can be considered as the base of this branch which can be seen externally as the [branch collar](https://en.wikipedia.org/wiki/Branch_collar).
					- root
					  [root](https://en.wikipedia.org/wiki/Root) = inverse ((66740680-9724-4a67-a2c3-40f8056eb882))
						- To distinguish with root, the normal/direct branch can be called "[shoot](((66751bd8-196d-4d66-a1fc-4df9155756ab)))".
					- tree
					  [tree](https://en.wikipedia.org/wiki/Tree) = shoot system + root system = "leaf tree" + "root tree" = ((667bd931-8759-4008-8a9a-33e78a5cbdf3)) + ((6672513b-c4b0-4c88-8b30-c60a3c6555a7)) = double cone = ((66725144-6bc9-4c9f-ba48-2cef02651e52))
						- base node
						  id:: 667bd594-66b8-4c0e-89a0-8088cbe2e1f6
						  collapsed:: true
							- base node = ((66751b3b-5fd0-4efd-a43c-db2c4930ae4f)) of the whole tree
							- root node
							  collapsed:: true
							  ((665c9af1-1ce2-461c-af33-671690618c8f)) ((667bd594-66b8-4c0e-89a0-8088cbe2e1f6))
								- Normally, the root system is not expanded but collapsed into a single "root node" in the tree, because the root is usually out of sight.
							- The base node is the common stem node of both shoot system and root system.
						- Branch is intermediate between the large tree and the small shoot.
				- Branching styles:
				  collapsed:: true
					- lateral branching
					  id:: 667bdced-76f1-4023-9352-dee24dcbf415
					  collapsed:: true
					  is the branching [from the main stem to the lower-level branch](https://en.wikipedia.org/wiki/Branch_attachment).
						- Diagram:
						  collapsed:: true
							- ![Lateral-branching.png](../assets/ecosystem/Lateral-branching.png)
						- This is the primary [branching structure](((667530ed-809b-4d38-8522-1ae6c8449e28))) in ((667252dc-e610-4d07-bcd0-9ea6fb4499fd)).
						- This is used in [GUI tree view](((66750416-093a-4042-bb6d-78702c219c36))) and [triangular phylogenic tree](((66750135-8c59-477c-8baf-cb3898d54559))).
					- dichotomous branching
					  id:: 667bdf2a-005c-4a19-93bd-bda5d076981a
					  collapsed:: true
					  is the branching into 2 (or more) equivalent branches instead of the stem/branch discrimination.
						- folking
						  ((665c9af1-1ce2-461c-af33-671690618c8f)) ((667bdf2a-005c-4a19-93bd-bda5d076981a))
						- It's also call [folk branching](https://en.wikipedia.org/wiki/Tree_fork).
						- Diagram:
						  collapsed:: true
							- Diagram:
								- ![Dichotomous-branching.png](../assets/ecosystem/Dichotomous-branching.png)
						- This is a secondary branching structure which can be converted to ((667bdced-76f1-4023-9352-dee24dcbf415)) by considering the folk point as a collapsed stem line with 2 nodes (or many nodes in [data structure tree](((66751015-5c34-493e-9663-4f0f5234b66e)))).
						- This is used in [data structure tree](((66751015-5c34-493e-9663-4f0f5234b66e))).
					- circular branching
					  collapsed:: true
					  is the branching of any node into many equivalent nodes, including the "parent node" of this node.
						- This is the unified branching structure with both ((66740af5-032a-4cb1-9c97-0e4d3933ab9b)) of ((667bdced-76f1-4023-9352-dee24dcbf415)) and branch equality of ((667bdf2a-005c-4a19-93bd-bda5d076981a)).
						- Its branch equality is more than ((667bdf2a-005c-4a19-93bd-bda5d076981a)) because the stalk of the stem node is just a branch stalk to the parent node, and the whole tree is just an [unrooted tree](https://en.wikipedia.org/wiki/Unrooted_binary_tree).
						- base branch
						  collapsed:: true
						   = branch at 0° = stalk of stem node = branch stalk to the parent node
							- When viewed as a [rooted tree](https://en.wikipedia.org/wiki/Tree_(graph_theory)#Rooted_tree), the base branch is the back-branch to the parent node.
				- Representation:
				  :LOGBOOK:
				  CLOCK: [2024-06-21 Fri 15:32:54]
				  :END:
					- 3 styles of tree diagrams
					  id:: 667500cd-a31d-4828-9dc4-93948e27e534
					  collapsed:: true
						- These [diagrams](https://docs.google.com/drawings/d/1zFtVcP_RBC5iGsfqpPvhjYEef9zg2ZSrEsjABb5qgOE) show different [components](((667530ed-809b-4d38-8522-1ae6c8449e28))).
						  ![Tree diagrams](https://docs.google.com/drawings/d/e/2PACX-1vQJx4zwkWxi4NfSgmP_7bQDHRJHOvNC2ogW5AwHTgTAukPOgr28PviR_A-Aoy8QD559WXyKpgrJ3u_Q/pub?w=758&h=650)
						- Triangular [phylogenetic tree](https://www.sciencedirect.com/topics/biochemistry-genetics-and-molecular-biology/phylogenetic-tree) is closest to the [biological tree](((667502e5-b83a-4d2a-a801-34e7bcfa6b38))): The nodes are right on the stem line, and they are also branching points (or branch points). So, there are no branch stalks but only leaf stalks.
						  id:: 66750135-8c59-477c-8baf-cb3898d54559
						- [GUI tree view](https://en.wikipedia.org/wiki/Tree_view) is similar to [phylogenetic tree](((66750135-8c59-477c-8baf-cb3898d54559))) but each node are separated from the stem line by a node stalk, either branch stalk or leaf stalk. That means the branching point is now separated from the node and is the joint between the stem line and the stalk. 
						  id:: 66750416-093a-4042-bb6d-78702c219c36
							- The stalk can be represented by a short line, an arrow, or an icon.
							  id:: 66752164-1227-490c-8182-7949e4eb501d
							- There's an artistic style of tree view where stem line is drawn as a long brace `{` and its stem node is placed in the middle.
							  id:: 6675279b-214e-43e4-81b9-14b43026ec67
							  collapsed:: true
								- ![ENC_SYSTEME_FIGURE.jpeg](https://upload.wikimedia.org/wikipedia/commons/5/58/ENC_SYSTEME_FIGURE.jpeg)
						- [data structure tree](https://en.wikipedia.org/wiki/Tree_(data_structure)) can be constructed from [GUI tree view](((66750416-093a-4042-bb6d-78702c219c36))) by folding the stem line into the border of the stem node, called " ((667bebeb-7f20-4d03-b860-1653c3137710))", thus all branch edges are actually node stalks. The shape of data structure tree is similar to the [phylogenetic tree](((66750135-8c59-477c-8baf-cb3898d54559))) but the meaning of edges is very different, so don't be confused between a linear stem line with an exponential series of stalks (branch edges): While each edge in phylogenetic tree is an internode segment, each edge in data structure tree is a stalk.
						  id:: 66751015-5c34-493e-9663-4f0f5234b66e
							- There's an artistic style of structure tree, usually used in [mind map](https://en.wikipedia.org/wiki/Mind_map)s, where the node is collapsed into a branching point and its stalk is used to name/describe that node.
							  collapsed:: true
								- ![Snag_MindMap.png](../assets/GUI/Snag_MindMap.png)
								- Another style renders similar to [an artistic style of tree view](((6675279b-214e-43e4-81b9-14b43026ec67)))
								  ![Cranial_nerves.PNG](https://upload.wikimedia.org/wikipedia/commons/3/39/Cranial_nerves.PNG)
						- Collected diagrams with annotation
						  collapsed:: true
							- ![Folder_Tree_View.png](../assets/GUI/Folder_Tree_View.png)
							- ![horizontal-tree-view-blanced.png](../assets/GUI/horizontal-tree-view-blanced.png)
							- ![PhylogeneticTree.png](../assets/ecosystem/PhylogeneticTree.png)
					- Beside [tree diagrams](((66752fbf-a751-4117-ae0d-17d9a19053e4))), a [tree structure](https://en.wikipedia.org/wiki/Tree_structure) can be represented by ((66752fbf-a751-4117-ae0d-17d9a19053e4)).
				- ((665359ff-79f1-4669-b10b-f2b0e633a7c1))
					- Discussion with Gemini about [tree-view & DAG-view of graph](https://gemini.google.com/app/aa1f15a6b07a2d26)
					- components of a ((667252dc-e610-4d07-bcd0-9ea6fb4499fd))
					  id:: 6674066a-aeff-45af-96df-b0c2f278a2ae
					  collapsed:: true
					  :LOGBOOK:
					  CLOCK: [2024-06-21 Fri 15:33:13]
					  :END:
						- Discussion with Gemini about [Name of lines in Tree View](https://gemini.google.com/app/88d6d204c956507b)
						- ((66600918-9f27-44c2-8188-f043c244710c)) ((667407ee-35ae-4d6f-8b58-89c19c0e0936)), i name the components like [this](((667530ed-809b-4d38-8522-1ae6c8449e28))).
					- tree anatomy
					  id:: 667407ee-35ae-4d6f-8b58-89c19c0e0936
					  collapsed:: true
					  :LOGBOOK:
					  CLOCK: [2024-06-21 Fri 15:33:06]
					  :END:
						- ![Tree Anatomy: Defining Trees & Forms](../assets/ecosystem/Tree Anatomy.pdf) from University of Geogia hosted by [BugwoodCloud.org](https://bugwoodcloud.org/resource/files/25389.pdf)
						- ![Tree Anatomy: Branch Attachment](../assets/ecosystem/Tree Anatomy - BRANCH ATTACHMENT.pdf) from University of Geogia hosted by [BugwoodCloud.org](https://bugwoodcloud.org/resource/files/19019.pdf)
						- [Britannica: Tree: Tree structure and growth](https://www.britannica.com/plant/tree/Tree-structure-and-growth)
						- anatomy of a tree branch (shoot)
						  id:: 667502e5-b83a-4d2a-a801-34e7bcfa6b38
						  collapsed:: true
							- ![TreeBranches.png](../assets/ecosystem/TreeBranches.png)
						- Vietnamese terms:
						  collapsed:: true
							- tree: cây
							- tree base (stump): gốc cây
							- root: rễ
							- bole: thân
							- trunk = stem of tree: sống cây
							- stem: sống cành
							- bough (limb): cành
							- branch: nhánh
							- twig (branchlet): nhánh con
							- stalk: cuống
							- bud: chồi
								- flower bud: nụ hoa
							- shoot: lộc
							- leaf: lá
							- flower: hoa, bông
							- fruit: quả, trái
							- seed: hạt, hột
						- ((665359ff-79f1-4669-b10b-f2b0e633a7c1))
							- Discussion with Gemini about [node vs. internode](https://gemini.google.com/app/0dbc3f1a3b0cff16).
			- nested viewcone
			  id:: 66752fbf-a751-4117-ae0d-17d9a19053e4
			  collapsed:: true
			  :LOGBOOK:
			  CLOCK: [2024-06-21 Fri 15:28:09]
			  :END:
				- ((6651ecba-793d-43c5-8020-a9f260b032d8)) Like ((667252dc-e610-4d07-bcd0-9ea6fb4499fd)), a ((66752fbf-a751-4117-ae0d-17d9a19053e4)) shows internal structure of a ((667251ec-d4f7-4c09-adff-73e04a4b22ed)).
				- Representation:
				  id:: 66752fca-96b5-46a0-9b66-c825cc1de9c7
					- Graphically, ((66752fbf-a751-4117-ae0d-17d9a19053e4)) can be represented by [Euler diagram](https://en.wikipedia.org/wiki/Euler_diagram), [nested set collection](https://en.wikipedia.org/wiki/Nested_set_collection), [treemapping](https://en.wikipedia.org/wiki/Treemapping).
					  id:: 66753405-9afe-478e-abd2-f43100e21c33
					- Textually, ((66752fbf-a751-4117-ae0d-17d9a19053e4)) can be represented by [Dyck word](https://en.wikipedia.org/wiki/Dyck_language) and ((6675369a-1d13-48c5-8a77-d588aa8b59b8)).
	- ## action
	  id:: 66727858-979d-4d95-8a90-7a749218cfba
	  collapsed:: true
	  ((665359e4-4597-4775-b849-f9acbb98960a)) ((6672785f-ac9e-42ba-921e-0264d0d83ae2))
		- operation
		  id:: 6672785f-ac9e-42ba-921e-0264d0d83ae2
		  ((665c9af1-1ce2-461c-af33-671690618c8f)) ((66727858-979d-4d95-8a90-7a749218cfba))
		- ((66725708-3dc4-43f5-a180-6b331c6a160f))
		  collapsed:: true
			- In Buddhism, ((66727858-979d-4d95-8a90-7a749218cfba)) is called [saṅkhāra](https://en.wikipedia.org/wiki/Sa%E1%B9%85kh%C4%81ra) meaning "formation", "conditioning".
			- In physics, ((66727858-979d-4d95-8a90-7a749218cfba)) is called "[force](https://en.wikipedia.org/wiki/Force)" and [interaction](https://en.wikipedia.org/wiki/Fundamental_interaction). The "inter" in "interaction" means the duality of action as a ((66725144-6bc9-4c9f-ba48-2cef02651e52)).
			- Im mathematics, ((66727858-979d-4d95-8a90-7a749218cfba)) has many names: [operation](https://en.wikipedia.org/wiki/Operation_(mathematics)), [transformation](https://en.wikipedia.org/wiki/Transformation_(function)), [group action](https://en.wikipedia.org/wiki/Group_action).
			- In Chinese philosophy, ((66727858-979d-4d95-8a90-7a749218cfba)) is called [行(hành)](https://en.wikipedia.org/wiki/Wuxing_(Chinese_philosophy)).
		- light cone
		  id:: 667bd931-8759-4008-8a9a-33e78a5cbdf3
		  ((665359e4-4597-4775-b849-f9acbb98960a)) ((667bd93a-cce4-4dbf-9831-725e4dffe463))
			- cone of effect
			  id:: 667bd93a-cce4-4dbf-9831-725e4dffe463
			  ((665c9af1-1ce2-461c-af33-671690618c8f)) ((667bd931-8759-4008-8a9a-33e78a5cbdf3))
			- ((66725725-f76a-4328-b162-f469b87e871b))
				- The future [light cone](https://en.wikipedia.org/wiki/Light_cone) in physics is a ((667bd931-8759-4008-8a9a-33e78a5cbdf3)).
	- ## view-control
	  id:: 66725144-6bc9-4c9f-ba48-2cef02651e52
	  collapsed:: true
	  ((665359e4-4597-4775-b849-f9acbb98960a)) ((66727388-ed2b-4f62-b8d7-ed70a0ad4ef3))
		- viewcontrol
		  id:: 66727388-ed2b-4f62-b8d7-ed70a0ad4ef3
		  ((665c9af1-1ce2-461c-af33-671690618c8f)) ((66725144-6bc9-4c9f-ba48-2cef02651e52))
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) ((66725144-6bc9-4c9f-ba48-2cef02651e52)) is the dual view of the 
		  effect flow through any subject including both inward effect flow ( ((66723642-58f1-4a74-bba3-0108f14c6bac)), observation) and outward effect flow (control, operation, ((66727858-979d-4d95-8a90-7a749218cfba))).
		- ((665359ff-79f1-4669-b10b-f2b0e633a7c1))
			- Force = curvature => F_{in} + F_{ex} = 0 <=> my curvature + your curvature = 0 <=> |my distortion| = |your distortion|
			  collapsed:: true
				- Uniform me vs distorted you <=> distorted me vs uniform you.
				  ```
				  M:[--------|--------]
				  W:[----|------------] F_ex = <--
				  <=>
				  M:[------------|----] F_in = -->
				  W:[--------|--------]
				  ```
			- Every ((6672785f-ac9e-42ba-921e-0264d0d83ae2)), i.e. change of ((665ca429-84e3-49ff-921e-c07d19cd99ba)) (transform), is a change of ((66723642-58f1-4a74-bba3-0108f14c6bac)) via the change of ((667272b8-88a8-4928-a22a-35035c9edf05)).
			  collapsed:: true
				- Traversal = listing = enumeration = moving the ((667272b8-88a8-4928-a22a-35035c9edf05)) across the object to view it in a linear view, i.e. thread-view.
				- Finding = traversal for a target point-view.
				- Search = traversal for a target ((667251ec-d4f7-4c09-adff-73e04a4b22ed)).
				- Sort = change from object-view to thread-view.
				- Organize = change from object-view to target ((667251ec-d4f7-4c09-adff-73e04a4b22ed)).
				- Classification, categorization = change from object-view to class/property/category view.
	- ## observer-operator
	  id:: 667273fc-9314-4b9b-94bf-6a3d0f8ffe99
	  collapsed:: true
	  ((665359e4-4597-4775-b849-f9acbb98960a)) ((66727437-fab6-4e57-8c0c-fced1b665548)), ((66727533-2566-490b-8694-f7de7882d9b1)), ((667277cf-2f88-419d-8342-e5bb20edf9a5))
		- obop
		  id:: 66727437-fab6-4e57-8c0c-fced1b665548
		  ((665c9af1-1ce2-461c-af33-671690618c8f)) ((667273fc-9314-4b9b-94bf-6a3d0f8ffe99))
		- seer-doer
		  id:: 66727533-2566-490b-8694-f7de7882d9b1
		  ((665c9af1-1ce2-461c-af33-671690618c8f)) ((667273fc-9314-4b9b-94bf-6a3d0f8ffe99))
		- viewer-actor
		  id:: 667277cf-2f88-419d-8342-e5bb20edf9a5
		  ((665c9af1-1ce2-461c-af33-671690618c8f)) ((667273fc-9314-4b9b-94bf-6a3d0f8ffe99))
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) ((667273fc-9314-4b9b-94bf-6a3d0f8ffe99)) is the dual role of any subject performing the ((66725144-6bc9-4c9f-ba48-2cef02651e52)).
	- ## `in`-`ex` partition
	  collapsed:: true
		-
	- ## CIE
	  collapsed:: true
	  content/intent = extent
		- Content
		- Intent
		- Extent
	- ## UniinfoNotes
	  id:: 666baccf-6be1-4b9a-b186-f883ea04daf1
	  collapsed:: true
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) ((666baccf-6be1-4b9a-b186-f883ea04daf1)) is the collection of notes about ((66537a44-f579-4fcc-a02b-2f32d0d409fc)), originally started by ((66536578-c4d3-43f1-b35c-bf71120f0570)). This note is in the ((666baccf-6be1-4b9a-b186-f883ea04daf1)) itself.
		- ((665359ff-79f1-4669-b10b-f2b0e633a7c1))
			- Hard links are used to share doc content between places.
				- Because [Git doesn't preserve hard links](((666ba5a7-598a-4b66-86bd-b1622a28ada6))), let's try not to do write oprations like  `pull`, `checkout`, `reset`. When some repo must be overwritten, let's re-link these files.
				- `pages/publish/Theme Demo.md` is hard-linked to other projects (graphs).
				- `logseq/{config.edn,custom.css}` are hard-linked to `assets/` for [[logseq/config.edn]] and [[logseq/custom.css]].
	- ## Universal Information
	  id:: 66537a41-f229-4891-803e-828573eb44f3
	  collapsed:: true
	  ((665359e4-4597-4775-b849-f9acbb98960a)) ((66537a44-f579-4fcc-a02b-2f32d0d409fc))
		- Unïnfo
		  id:: 66537a44-f579-4fcc-a02b-2f32d0d409fc
		  ((665c9af1-1ce2-461c-af33-671690618c8f)) ((66537a41-f229-4891-803e-828573eb44f3))
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) " ((66537a44-f579-4fcc-a02b-2f32d0d409fc))" is the umbrella term for both [[Unïnfo Theory]], as the theoretical aspect, and ((665379b7-e4f6-4240-8029-fd143e2230c7)), as the practical aspect.
	- ## question
	  collapsed:: true
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Question
	- ## GeoGebra
	  id:: 66537e93-db66-477f-99ac-7825366fc0e1
	  collapsed:: true
		- ((665359c3-61fd-4858-a117-ecbcd6fbc9ea)) https://www.geogebra.org/
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) An interactive math app for composing math applets (geometry) with formulae (algebra).
		- ((66536578-c4d3-43f1-b35c-bf71120f0570))'s profile: https://www.geogebra.org/u/lexuandinhct
			- Applet source codes GitHub: https://github.com/bixycler/GeoGebraApplets
	- ## Way
	  id:: 665379e5-5bf4-4e00-ab03-9f41ff14cccc
	  collapsed:: true
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Tao
	- ## Balance Way
	  id:: 665379b7-e4f6-4240-8029-fd143e2230c7
	  collapsed:: true
		- "Balance" is the natural ((665379e5-5bf4-4e00-ab03-9f41ff14cccc)) of the ((66537a0b-d107-4f7e-b01f-bf624a647d8c)) and should be the chosen way of life.
	- ## Universe
	  id:: 66537a0b-d107-4f7e-b01f-bf624a647d8c
	  collapsed:: true
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Universe
	- ## glass
	  id:: 66537c37-2d4a-4077-9fcf-45c71755c876
	  collapsed:: true
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Glass
		- Discussion:
			- Even looks like crystal, glass is [amorphous](https://en.wikipedia.org/wiki/Amorphous_solid), i.e. non-crystalline, because it lacks the the [long-range order](https://en.wikipedia.org/wiki/Long-range_order "Long-range order") that is characteristic of a [crystal](https://en.wikipedia.org/wiki/Crystal "Crystal").
			- It's even not a "solid" in the normal sense because it's the [hybrid of liquid and crystal](https://en.wikipedia.org/wiki/Structure_of_liquids_and_glasses)! It's [more liquid than solid](https://en.wikipedia.org/wiki/Glass#Formation_from_a_supercooled_liquid) due to [glass–liquid transition](https://en.wikipedia.org/wiki/Glass_transition) instead of the normal first-order [phase transition](https://en.wikipedia.org/wiki/Phase_transition "Phase transition").
	- ## crystal
	  id:: 66537bdd-6c99-4d7b-905a-e2a487cae5ce
	  collapsed:: true
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Crystal
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) A [solid](https://en.wikipedia.org/wiki/Solid "Solid") material whose constituents (such as [atoms](https://en.wikipedia.org/wiki/Atom "Atom"), [molecules](https://en.wikipedia.org/wiki/Molecule "Molecule"), or [ions](https://en.wikipedia.org/wiki/Ion "Ion")) are arranged in [crystal structure](https://en.wikipedia.org/wiki/Crystal_structure)  which is a periodic [long-range order](https://en.wikipedia.org/wiki/Long-range_order "Long-range order") that extends in all directions called ((66537b4c-fa0a-4e95-b854-096e9802aa09)) in math.
	- ## lattice
	  id:: 66537b4c-fa0a-4e95-b854-096e9802aa09
	  collapsed:: true
		- In group theory: [lattice group](https://en.wikipedia.org/wiki/Lattice_(group))
		- In graph theory: [lattice graph](https://en.wikipedia.org/wiki/Lattice_graph)
		- In physics: [crystal lattice](https://en.wikipedia.org/wiki/Crystal_structure)
		- In order theory: [lattice order](https://en.wikipedia.org/wiki/Lattice_(order))
		- ((665359ff-79f1-4669-b10b-f2b0e633a7c1)) The lattice group and lattice graph are equivalent which are generalized from the 3D crystal lattice, but the lattice order is different.
			- There's a hybrid of lattice order with group theory called [ℓ-group](https://encyclopediaofmath.org/wiki/Lattice-ordered_group), i.e. "lattice-ordered group" as a special case of [partially ordered group](https://en.wikipedia.org/wiki/Partially_ordered_group).
	- ## foldable
	  id:: 66537617-23c2-43a9-9a14-5e18fe9aa36f
	  collapsed:: true
	  ((665359e4-4597-4775-b849-f9acbb98960a)) ((665c9fb6-841c-4ee9-93a1-d17b5811a98e)), ((665c9fb9-28e8-48e3-bd81-f773549f145d))
		- collapsible
		  id:: 665c9fb6-841c-4ee9-93a1-d17b5811a98e
		  ((665c9af1-1ce2-461c-af33-671690618c8f)) ((66537617-23c2-43a9-9a14-5e18fe9aa36f))
		- abstractable
		  id:: 665c9fb9-28e8-48e3-bd81-f773549f145d
		  ((665c9af1-1ce2-461c-af33-671690618c8f)) ((66537617-23c2-43a9-9a14-5e18fe9aa36f))
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) A foldable object, usually a block of text, is an object that can be folded (or collapsed, abstracted) into a brief like header, title, name, summary, and that brief can be unfolded (or expanded, extended) back to the full object. This is a technical implementation of the general ((66537674-6cf9-4459-8bea-7c1858c694a3)).
		- ((66725725-f76a-4328-b162-f469b87e871b))
			- Foldable [code block](https://en.wikipedia.org/wiki/Block_(programming))s in [IDE](https://en.wikipedia.org/wiki/Integrated_development_environment) or blocks of text in [text editor](https://en.wikipedia.org/wiki/Text_editor)s
			- The ((665361eb-5339-451e-957d-362b946d796d)) [`<summary>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary) within the `<details>` tag
			- [Directory](https://en.wikipedia.org/wiki/Directory_(computing)) in collapsible ((667252dc-e610-4d07-bcd0-9ea6fb4499fd))
			- [File folder](https://en.wikipedia.org/wiki/File_folder) that holds [papers](https://en.wikipedia.org/wiki/Paper "Paper") together
			- The [tab](https://en.wikipedia.org/wiki/Tab_(interface)) in [GUI](https://en.wikipedia.org/wiki/Graphical_user_interface)
		- In [Obsidian](https://help.obsidian.md/Editing+and+formatting/Folding):  Headings, indented blocks.
	- ## abstraction
	  id:: 66537674-6cf9-4459-8bea-7c1858c694a3
	  collapsed:: true
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Abstraction
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) Abstraction is the process of abstracting details, i.e. removing details that are irrelevant to the subject's focus, from an object to get a more concise object that can be handled easier compared to the original object with full details. The result of that process is called by many names: abstract, abstraction, summary, name, title, key, etc. Abstraction is related to ((6653769c-3334-46fa-a1d5-4ce6a7fc23e8)).
	- ## projection
	  id:: 6653769c-3334-46fa-a1d5-4ce6a7fc23e8
	  collapsed:: true
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Projection_(mathematics)
	- ## name
	  id:: 665cab38-f8e8-472e-b0a1-60776d492835
	  collapsed:: true
		- ((665ca480-5ac8-4728-a331-2f68b48759d1)) ((665ca48e-f7c1-4541-b5cf-486d86b02997))
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Name
		- E.g. Buddhist name in the pair "[name & form](https://en.wikipedia.org/wiki/Namarupa)"
	- ## form
	  id:: 665ca429-84e3-49ff-921e-c07d19cd99ba
	  collapsed:: true
		- ((665ca480-5ac8-4728-a331-2f68b48759d1)) ((665ca47c-476a-4bef-b982-d9a31a669fb1))
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) ((665ca429-84e3-49ff-921e-c07d19cd99ba)) of an ((667cfa42-ade7-4310-9a7b-6d14d01c16da)) is the part of that object appears to a ((66723642-58f1-4a74-bba3-0108f14c6bac)) of some ((667cfa3e-9856-43f0-956b-ebb4ff31d8eb)). The external form is called "appearance" and the internal form is called ((6678d596-9526-405a-968c-e73860e524f3)) of the object.
		- ((66725725-f76a-4328-b162-f469b87e871b)) [Buddhist form](https://en.wikipedia.org/wiki/Rūpa) in the pair "name & form", [logical form](https://en.wikipedia.org/wiki/Logical_form), Plato's [ideal form](https://en.wikipedia.org/wiki/Theory_of_forms), Marx' [form of value](https://en.wikipedia.org/wiki/Value-form), etc.
		- formation
		- conformation
		  id:: 6678282b-d710-4c6b-b584-5f65012c192d
		  collapsed:: true
			- When a ((6678288e-699b-4325-bdba-bf6349fe0d57)) nearing a ((665ca429-84e3-49ff-921e-c07d19cd99ba)), the distortion of space in that form makes the content seem to follow the form.
			  collapsed:: true
				- {{video https://youtu.be/Og4sxXfUC0Y}}
			- Links: [fb post in Nov 2023](https://www.facebook.com/lexuandinhct/videos/728404692637310), [GeoGebra applet](https://www.geogebra.org/m/j7czr4s5)
		- transformation
		  collapsed:: true
			- Continuous transformation is a flow $e^{\alpha t}*M$ of effect, like the  edit of text, modification of data.
			- Function/mapping/projection/light-cone is an abstraction of the flow into just 2 ends of that flow.
			- A ((66723642-58f1-4a74-bba3-0108f14c6bac)) is an inverse projection from the current state back to some past instance, i.e. ((6672513b-c4b0-4c88-8b30-c60a3c6555a7)) <-> ((667bd931-8759-4008-8a9a-33e78a5cbdf3)).
				- Development of view over time:
					- First, an `ex` object is mirrored to its `in` image.
					  id:: 667aa63e-acc6-41b1-b716-f97a8afe41a1
					  collapsed:: true
						- In digital world, it's usually done statically with `copy`, or better dynamically with `embed`, `import`, `transclude`, etc.
					- The `in` image will be modified to adapt to the needs of the subject, via which it's transformed.
					  collapsed:: true
						- The embedding/transcluding function of tools like ((66536e1b-6466-4153-90d6-583003d99a81)) lacks this feature.
						- Revision control systems like `git`, ((66600918-6c84-41c7-afeb-96d30f74850b)) do this good, but lack the [dynamic mirror](((667aa63e-acc6-41b1-b716-f97a8afe41a1))) at the firs step.
					- The accumulated change over time (and space internally) is the view of the `ex` object, and is expressed as ref arrow `in -> ex`.
	- ## content
	  id:: 6678288e-699b-4325-bdba-bf6349fe0d57
	- ## structure
	  id:: 6678d596-9526-405a-968c-e73860e524f3
	  collapsed:: true
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) ((6678d596-9526-405a-968c-e73860e524f3)) of an ((667cfa42-ade7-4310-9a7b-6d14d01c16da)) is the internal ((665ca429-84e3-49ff-921e-c07d19cd99ba)) of that object. A structure of a ((66532bc2-a18e-43ab-86ac-a0f0f7dcbbb5)) object can be decomposed into ((667d0b78-fff6-49bc-90d5-165648ed56d3))s between its ((66532bb2-7680-461b-80b2-71fc96c89fb9))s.
		- Variations:
		  id:: 667d09ec-4da1-428b-a7c9-bae1eb37a7ae
			- linear structure
			  id:: 667d0a09-6a59-483d-91e4-33a019655b42
			- circular structure
			- branching structure
			  is a [tree structure](((667252dc-e610-4d07-bcd0-9ea6fb4499fd))).
			- ### network
			  id:: 667d1a95-b621-49cd-8a72-a074c963c92a
				- Example: [network](https://en.wikipedia.org/wiki/Network_theory), [mathematical graph](https://en.wikipedia.org/wiki/Graph_(discrete_mathematics))
	- ## relation
	  id:: 667d0b78-fff6-49bc-90d5-165648ed56d3
	  collapsed:: true
	  ((665ca48e-f7c1-4541-b5cf-486d86b02997)) ((66600918-367c-413c-863d-2cf11a89c437))
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) ((667d0b78-fff6-49bc-90d5-165648ed56d3)) between ((667cfa42-ade7-4310-9a7b-6d14d01c16da))s (usually 2 objects) is a ((667d0d2e-15c7-4989-a183-69a9a5c6bf8a)) connecting these objects together. A ((667d0d8e-0873-4440-a97d-b08f9405e769)) between 2 objects A and B is denoted by an arrow A -> B. A relation between many objects is the ((6678d596-9526-405a-968c-e73860e524f3)) of the ((66532bc2-a18e-43ab-86ac-a0f0f7dcbbb5)) of these objects. Although some relations, like ((667d0d8e-0873-4440-a97d-b08f9405e769)), appear to be unidirectional, that part is just the external (objective) arrow while there's a corresponding internal (subjective) arrow in the other direction, which is hidden inside the ((667cfa3e-9856-43f0-956b-ebb4ff31d8eb)) of relation, to complete the relation into a circle.
		- Variations:
			- binary relation
			  id:: 667d0d8e-0873-4440-a97d-b08f9405e769
				- Example: [binary relation](https://en.wikipedia.org/wiki/Binary_relation) and [relation](https://en.wikipedia.org/wiki/Relation_(mathematics)) in Maths.
	- ## thread
	  id:: 667d0d2e-15c7-4989-a183-69a9a5c6bf8a
	  collapsed:: true
		- ### solidity
		-
	- ## description
	  id:: 66532914-003a-4bbb-9e97-6f1c87170d7d
	  collapsed:: true
		- ((665ca480-5ac8-4728-a331-2f68b48759d1)) ((6651ecba-793d-43c5-8020-a9f260b032d8))
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) A ((66532914-003a-4bbb-9e97-6f1c87170d7d)) is a text describing something.
	- ## composite
	  id:: 66532bc2-a18e-43ab-86ac-a0f0f7dcbbb5
	  collapsed:: true
		- ((665ca480-5ac8-4728-a331-2f68b48759d1)) ((6652048c-27b3-47b6-84e5-25af8d9ce801))
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) A ((66532bc2-a18e-43ab-86ac-a0f0f7dcbbb5)) is an ((667cfa42-ade7-4310-9a7b-6d14d01c16da)) [composed of](((667cdbc9-3030-4429-b59e-4545cb3627e3))) other ((667cfa42-ade7-4310-9a7b-6d14d01c16da))s called ((66532bb2-7680-461b-80b2-71fc96c89fb9))s.
		- ((66725725-f76a-4328-b162-f469b87e871b))
			- In IT: [composite data type](https://en.wikipedia.org/wiki/Composite_data_type), [composite object](https://en.wikipedia.org/wiki/Object_composition), [composite pattern](https://refactoring.guru/design-patterns/composite)
			- In physics: [composite (material)](https://en.wikipedia.org/wiki/Composite_material), [composite particle](https://en.wikipedia.org/wiki/Composite_particle),
			- In chemistry: [compound](https://en.wikipedia.org/wiki/Chemical_compound), [alloy](https://en.wikipedia.org/wiki/Alloy), [mixture](https://en.wikipedia.org/wiki/Mixture)
			- In maths: [composite number](https://en.wikipedia.org/wiki/Composite_number), [composite function](https://en.wikipedia.org/wiki/Function_composition), [tuple](https://en.wikipedia.org/wiki/Tuple), [set](https://en.wikipedia.org/wiki/Set_(mathematics)), [class](https://en.wikipedia.org/wiki/Class_(set_theory))
			- In linguistics: [compound (word)](https://en.wikipedia.org/wiki/Compound_(linguistics))
			- In Buddhism: [five aggregates](https://en.wikipedia.org/wiki/Skandha)
		- Variations:
			- A ((66532bc2-a18e-43ab-86ac-a0f0f7dcbbb5)) with loosely connected ((66532bb2-7680-461b-80b2-71fc96c89fb9))s is called ((667ceb89-10fb-463e-90f7-9e89daec8ff6)), e.g. [aggregation in OOP](https://www.geeksforgeeks.org/association-composition-aggregation-java/), [set in maths](https://en.wikipedia.org/wiki/Set_(mathematics)).
			- A ((66532bc2-a18e-43ab-86ac-a0f0f7dcbbb5)) with ((66532bb2-7680-461b-80b2-71fc96c89fb9))s tightly connected by specific relations is called [structure](((667cec5f-f909-4da3-a1d4-681bcaee3b61))), e.g. [algebraic structure](https://en.wikipedia.org/wiki/Algebraic_structure), [mathematical category](https://en.wikipedia.org/wiki/Category_(mathematics)), [mathematical graph](https://en.wikipedia.org/wiki/Graph_(discrete_mathematics)), [tree structure](((667252dc-e610-4d07-bcd0-9ea6fb4499fd))).
	- ## component
	  id:: 66532bb2-7680-461b-80b2-71fc96c89fb9
	  collapsed:: true
		- ((665ca480-5ac8-4728-a331-2f68b48759d1)) ((66532ccc-ae21-4940-8714-715060d6bd90))
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) A ((66532bb2-7680-461b-80b2-71fc96c89fb9)) is an ((667cfa42-ade7-4310-9a7b-6d14d01c16da)) within another object called ((66532bc2-a18e-43ab-86ac-a0f0f7dcbbb5)).
	- ## composition
	  id:: 667cdbc9-3030-4429-b59e-4545cb3627e3
	  collapsed:: true
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) ((667cdbc9-3030-4429-b59e-4545cb3627e3)) is the act of combining many small objects, called ((66532bb2-7680-461b-80b2-71fc96c89fb9))s, into a larger object, called ((66532bc2-a18e-43ab-86ac-a0f0f7dcbbb5)).
		- ((66725725-f76a-4328-b162-f469b87e871b))
			- In IT: [object composition](https://en.wikipedia.org/wiki/Object_composition)
			- In maths: [function composition](https://en.wikipedia.org/wiki/Function_composition)
		- Variations:
			- aggregation
			  id:: 667ceb89-10fb-463e-90f7-9e89daec8ff6
			  is the act of simply collecting ((66532bb2-7680-461b-80b2-71fc96c89fb9)) objects into a "bag" of objects.
			- structuring
			  id:: 667cec5f-f909-4da3-a1d4-681bcaee3b61
			  is the act of putting ((66532bb2-7680-461b-80b2-71fc96c89fb9)) objects into a ((6678d596-9526-405a-968c-e73860e524f3)), which is an organization of relations between objects.
				- There are as many variations of composition as many [variations of strucure](((667d09ec-4da1-428b-a7c9-bae1eb37a7ae))).
				- linear composition
				  id:: 667d1227-6d59-4d36-ae52-c1f97361e814
				  is the composition in ((667d0a09-6a59-483d-91e4-33a019655b42)).
					- ((667d1227-6d59-4d36-ae52-c1f97361e814)) of ((667d162c-16cf-44d3-81a5-29b1b885164f))s
					  ((66725725-f76a-4328-b162-f469b87e871b)) [listing](https://en.wikipedia.org/wiki/List), [enumeration](https://en.wikipedia.org/wiki/Enumeration)
					- ((667d1227-6d59-4d36-ae52-c1f97361e814)) of ((667d15b7-6364-49a9-ac58-c64d2a992b63))s
					  id:: 667d151a-eaaa-4299-97b6-f3cd8f1aa98d
					  ((66725725-f76a-4328-b162-f469b87e871b)) [function composition](https://en.wikipedia.org/wiki/Function_composition)
					- sorting
					  is the ((667d1227-6d59-4d36-ae52-c1f97361e814)) that satisfy a specific order.
	- ## Workstack Workflow
	  id:: 66533a2a-6f29-4e4c-81d5-17883be64bdb
	  collapsed:: true
		- ### Workspace
		  id:: 665d1a03-4c61-4d81-ac58-a5a1a7efe568
			- Each person has a Workspace to work with, which includes a ((6653538a-22d3-4807-ad13-a64ac543edba)) for active tasks at hand, a Task list for future tasks, a [History](((6667add9-3076-4a19-8b15-d1888665a3c0))) for past (done, cancelled) tasks, and other lists like Problem list, Question list, etc. These lists, except History, are in general sorted in reverse chronological order. The Task list is additionally sorted in priority, if any, and the History is in chronological order.
		- ### Workstack
		  id:: 6653538a-22d3-4807-ad13-a64ac543edba
			- Just like the [call stack](https://en.wikipedia.org/wiki/Call_stack) of [computer program](https://en.wikipedia.org/wiki/Computer_program), Workstack is a non-strict last-in-first-out (LIFO) list of tasks being worked on by the subject.
			- All items in the workstack must be prefixed (bullet, task, [?], [!], etc.) to separate with each other, because their order (*from bottom to top*) is opposite to the normal text order (from top to bottom).
		- ### Workflow
			- New works will be carried out from the ((6653538a-22d3-4807-ad13-a64ac543edba)), and their bodies should be placed in document storages like ((665c82c0-ee06-4f43-95b8-73dbbe956080)), ((6653538a-30aa-423f-be89-848ad9c7e331)), etc. Old works from document storages may be continued to be worked with by linking them back to the ((665d1a03-4c61-4d81-ac58-a5a1a7efe568)).
			- In the course of working on the current task,
				- a new task that can/must be done immediately will be pushed to the ((6653538a-22d3-4807-ad13-a64ac543edba));
				- a new task that should be done later will be pushed to Task list;
				- a problem that cannot or should not be solved right now will be pushed to Problem list;
				  id:: 665c8a2e-8de9-445f-b7c8-042244afe1c7
				- a question that cannot or should not be answered right now will be pushed to Question list;
				- a completed/cancelled task/problem/question will be (popped from Workstack/Problem/Question list and) pushed to the History.
	- ## Mind Jungle
	  id:: 665c82c0-ee06-4f43-95b8-73dbbe956080
	  collapsed:: true
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) ((665c82c0-ee06-4f43-95b8-73dbbe956080)) is an image of the mind which reflects concepts (like [concept map](https://en.wikipedia.org/wiki/Concept_map)), relation and reasoning between these concepts (like [argument map](https://en.wikipedia.org/wiki/Argument_map)), tree views from important concepts (like [mind map](https://en.wikipedia.org/wiki/Mind_map)). Overall, it's a kind of [knowledge graph](https://en.wikipedia.org/wiki/Knowledge_graph).
	- ## History
	  id:: 6667ac3c-8fff-43aa-92ac-fca2002e58f4
	  collapsed:: true
		- ((665ca480-5ac8-4728-a331-2f68b48759d1)) ((6667abd2-14eb-4145-b9e3-e6f3037b3117))
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/History
		- Records of history
		  id:: 6667add9-3076-4a19-8b15-d1888665a3c0
			- Personal [diary](https://en.wikipedia.org/wiki/Diary), traveler's [journal](https://en.wikipedia.org/wiki/Travel_literature#Travel_journals), vehicle and machine's [logbook](https://en.wikipedia.org/wiki/Logbook), [historical record](https://en.wikipedia.org/wiki/Historiography) written by historian.
	- ## brain dump
	  id:: 6667bf32-ab6a-4d64-842d-45d49137e694
	  collapsed:: true
		- Ref:
			- [How to Brain Dump: A Guide for Clearer Thinking and Organized Planning](https://janesagenda.com/blogs/planning-201/brain-dump)
	- ## About Legend app
	  collapsed:: true
		- Internal links
			- do not have alternative text for display, always full text of the target item!
			- exported to ((66535e71-3b71-416c-98dc-5dde5e6a76ff)) as full text.
		- Searching across docs
			- Ctrl-Shift-F (Global Search) just search by plain text with no filter!
		- Properties & Attributes
			- Legend's built-in attributes
			- Custom properties can be stored in notes.
				- Notes can be searched/filtered, and then can be excluded from export.
	- ## brainstorming
	  id:: 665c92d1-565b-4911-a706-b32af429c3aa
	  collapsed:: true
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Brainstorming
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) ((665c92d1-565b-4911-a706-b32af429c3aa)) is a thinking technique to dump all thoughts out quickly without careful organizing. Compared to ((6667bf32-ab6a-4d64-842d-45d49137e694)), ((665c92d1-565b-4911-a706-b32af429c3aa)) is more freely and toward new ideas instead of organizing old stuffs.
	- ## Will LE
	  id:: 66536578-c4d3-43f1-b35c-bf71120f0570
	  collapsed:: true
		- Vietnamese name: LÊ Xuân Định
		- English name: Will LÊ
		  id:: d7d9077b-f4eb-409c-a895-8dba07aea996
		- Japanese name: LÊ Harusada
		- On ((66536662-052f-46a4-a624-38858bffb334)): `bixycler`
		- On Blogger: `ComputerBoy`
	- ## Git
	  id:: 666ba1e2-19d1-409e-b30e-42a99b7e4ec0
	  collapsed:: true
		- ((665359c3-61fd-4858-a117-ecbcd6fbc9ea)) https://www.git-scm.com/
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) ((666ba1e2-19d1-409e-b30e-42a99b7e4ec0)) is a [free and open source](https://www.git-scm.com/about/free-and-open-source) distributed version control system (VCS), which is now the most popular VCS in the world.
		- ((665359ff-79f1-4669-b10b-f2b0e633a7c1))
			- File link: symbolic link (symlink) is supported by ((666ba1e2-19d1-409e-b30e-42a99b7e4ec0)) but hard link is not.
				- Symlink has portability problem between Linux and Windows.
					- [From Windows 10+, symlink can be used](https://blogs.windows.com/windowsdeveloper/2016/12/02/symlinks-windows-10/) when Developer mode is turned on.
				- Hard link is not support (will be broken when ((666ba1e2-19d1-409e-b30e-42a99b7e4ec0)) overwrites the link file), but ((666ba1e2-19d1-409e-b30e-42a99b7e4ec0)) will let the hard link live as long as we don't do any write operation on that link file, e.g. `pull`, `checkout`, `reset`, etc.
				  id:: 666ba5a7-598a-4b66-86bd-b1622a28ada6
	- ## GitHub
	  id:: 66536662-052f-46a4-a624-38858bffb334
	  collapsed:: true
		- ((665359c3-61fd-4858-a117-ecbcd6fbc9ea)) https://github.com/
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/GitHub
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) ((66536662-052f-46a4-a624-38858bffb334)) is an online hub for ((666ba1e2-19d1-409e-b30e-42a99b7e4ec0))
		- ((66536578-c4d3-43f1-b35c-bf71120f0570))'s profile: https://github.com/bixycler
	- ## obsidian
	  id:: 66537d0c-5406-4b46-8975-12d788cfc28e
	  collapsed:: true
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Obsidian
		- ((665359c0-a89a-41b5-9f28-503f79107a08))-vi: https://vi.wikipedia.org/wiki/Đá_vỏ_chai
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) [Obsidian](((66537d0c-5406-4b46-8975-12d788cfc28e))) is a naturally occurring [volcanic glass](https://en.wikipedia.org/wiki/Volcanic_glass "Volcanic glass") formed when [lava](https://en.wikipedia.org/wiki/Lava "Lava") [extruded](https://en.wikipedia.org/wiki/Extrusive_rock "Extrusive rock") from a [volcano](https://en.wikipedia.org/wiki/Volcano "Volcano") cools rapidly with minimal [crystal growth](https://en.wikipedia.org/wiki/Crystal_growth "Crystal growth").
	- ## Obsidian
	  id:: 66535660-643e-471a-a332-8f2306c5494f
	  collapsed:: true
		- ((665359c3-61fd-4858-a117-ecbcd6fbc9ea)) https://obsidian.md/
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Obsidian_(software)
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) ((66535660-643e-471a-a332-8f2306c5494f)) is a note-taking app based on ((66535e71-3b71-416c-98dc-5dde5e6a76ff)) files with ((e6a21858-1849-462e-b2b0-0bc57b38fb0a)) for internal links to create a ((665364b1-e05c-46a6-a76b-c14cd73d1706)) (PKB).
		- ((66536578-c4d3-43f1-b35c-bf71120f0570))'s vaults:
			- [UniinfoNotes](https://github.com/bixycler/UniinfoNotes) for ((66537a44-f579-4fcc-a02b-2f32d0d409fc))
		- ((665359ff-79f1-4669-b10b-f2b0e633a7c1))
		  collapsed:: true
			- About the name "Obsidian": It's taken from the rock ((66537d0c-5406-4b46-8975-12d788cfc28e)) which is a kind of volcanic glass.
				- From forum: https://forum.obsidian.md/t/why-is-obsidian-named-so/4837
				  collapsed:: true
					- Official reason:
					   > it’s a metaphor. **If your raw, unstable thoughts are lava, then Obsidian is… well, Obsidian. It is your crystallized (and beautiful) knowledge.**
					- However, the real reason would be:
					  > we like Minecraft and Obsidian is (as Licat told me) the hardest block in the original Minecraft (he started playing during alpha I think). Also Obsidian sounds cool to me, personally.
					- And ((66537d0c-5406-4b46-8975-12d788cfc28e)) is actually a ((66537c37-2d4a-4077-9fcf-45c71755c876)), not a ((66537bdd-6c99-4d7b-905a-e2a487cae5ce)). Even looks like crystal, glass is [amorphous](https://en.wikipedia.org/wiki/Amorphous_solid), i.e. non-crystalline, because it lacks the the [long-range order](https://en.wikipedia.org/wiki/Long-range_order "Long-range order") that is characteristic of a ((66537bdd-6c99-4d7b-905a-e2a487cae5ce)).
		- The [Obsidian-flavored Markdown](https://help.obsidian.md/Editing+and+formatting/Obsidian+Flavored+Markdown) extends  [CommonMark](https://commonmark.org/) with 
		  collapsed:: true
			- `[[Link]]`: [Internal links](https://help.obsidian.md/Linking+notes+and+files/Internal+links)
			- `![[Link]]`: [Embed files](https://help.obsidian.md/Linking+notes+and+files/Embed+files)
			- `![[Link#^id]]`: [Block references](https://help.obsidian.md/Linking+notes+and+files/Internal+links#Link%20to%20a%20block%20in%20a%20note)
			  id:: 665d1a03-f5af-4af4-a5a9-97d72dda7645
			- `^id`: [Defining a block](https://help.obsidian.md/Linking+notes+and+files/Internal+links#Link%20to%20a%20block%20in%20a%20note)
			- `%%Text%%`: [Comments](https://help.obsidian.md/Editing+and+formatting/Basic+formatting+syntax#Comments)
			- `~~Text~~`: [Strikethroughs](https://help.obsidian.md/Editing+and+formatting/Basic+formatting+syntax#Styling%20text)
			- `==Text==`: [Highlights](https://help.obsidian.md/Editing+and+formatting/Basic+formatting+syntax#Styling%20text)
			- ` ``` `: [Code blocks](https://help.obsidian.md/Editing+and+formatting/Basic+formatting+syntax#Code%20blocks)
			- `- [ ]`: [Incomplete task](https://help.obsidian.md/Editing+and+formatting/Basic+formatting+syntax#Task%20lists)
			- `- [x]`: [Completed task](https://help.obsidian.md/Editing+and+formatting/Basic+formatting+syntax#Task%20lists)
			- `> [!note]`: [Callouts](https://help.obsidian.md/Editing+and+formatting/Callouts)
		- Default ((66536710-7441-4fb8-986b-50d2eec762d7))s:
		  collapsed:: true
			- Default [hotkeys for editing](https://help.obsidian.md/Editing+and+formatting/Editing+shortcuts)
			- Open **command palette**: `Ctrl` `P` or pull down on mobile
			- Open **note**: `Ctrl` `O` or `⊕` button on mobile
			- Insert **note**: `[[`
			- Insert local **heading**: `[[*`
			- Insert **heading of other note**: `[[**`
			- Insert **external link**: `Ctrl` `K`
			- [[Table of Hotkey Assigned Commands in this Vault]]
		- Custom ((66536710-7441-4fb8-986b-50d2eec762d7))s ^custom-hotkeys
		  collapsed:: true
			- [[foldable|Folding]] text blocks in editor:
				- `Ctrl` [`Shift`] `↑`/`↓` to fold/unfold [all] text.
				- `Ctrl` `.` to toggle fold/unfold of current line.
			- Move to folder: `Ctrl` `M`
				- Ideally when creating new note (`Ctrl` `N` ), ((66535660-643e-471a-a332-8f2306c5494f)) should ask or default to the same folder of current note.
		- ### ((66535a44-8a13-4d5a-808e-10baa97ebaf0))
		  collapsed:: true
			- Core plugins
			- Community plugins
				- Open Link With
				  id:: 66535685-4fd2-4928-8c65-198ef6f3fe71
				  collapsed:: true
					- Obsidian community plugin: [obsidian-open-link-with](obsidian://show-plugin?id=obsidian-open-link-with)
					- GitHub: https://github.com/MamoruDS/obsidian-open-link-with
				- Folder Note
				  id:: 66537315-7d1a-409a-a89b-2e33e58fe6e6
				  collapsed:: true
					- Obsidian community plugin: [folder-note-plugin](obsidian://show-plugin?id=folder-note-plugin)
					- GitHub: https://github.com/xpgo/obsidian-folder-note-plugin
					- Forum: https://forum.obsidian.md/t/folder-note-plugin-add-description-note-to-folder/12038/10
				- Obsidian Tasks
				  id:: 665373d3-8fd7-4963-9b72-a503e21e54e7
				  collapsed:: true
					- Obsidian community plugin : [obsidian-tasks-plugin](obsidian://show-plugin?id=obsidian-tasks-plugin)
					- GitHub: https://github.com/obsidian-tasks-group/obsidian-tasks
				- Obsidian Webpage HTML Export
				  id:: 66537405-7c71-4a5e-abb4-996a146bb52c
				  collapsed:: true
					- Obsidian community plugin: [webpage-html-export](obsidian://show-plugin?id=webpage-html-export)
					- GitHub: https://github.com/KosmosisDire/obsidian-webpage-export
					- Forum: https://forum.obsidian.md/t/html-export-plugin/51743
					- ((6651ecba-793d-43c5-8020-a9f260b032d8)) Export to ((665361eb-5339-451e-957d-362b946d796d)) format.
				- Obsidian Git
				  id:: 6653743f-8847-4b24-8c21-795c87254eb2
				  collapsed:: true
					- Obsidian community plugin: [obsidian-git](obsidian://show-plugin?id=obsidian-git)
					- GitHub: https://github.com/denolehov/obsidian-git
				- Obsidian GitHub Publisher
				  id:: 6653747e-b02a-4120-861c-f2fd6d686053
				  collapsed:: true
					- Obsidian community plugin: [obsidian-mkdocs-publisher](obsidian://show-plugin?id=obsidian-mkdocs-publisher)
					- GitHub: https://github.com/Mara-Li/obsidian-github-publisher
					- Forum: https://forum.obsidian.md/t/obsidian-github-publisher/37953
					- ((6651ecba-793d-43c5-8020-a9f260b032d8)) Export to ((66536662-052f-46a4-a624-38858bffb334)) in ((66535e71-3b71-416c-98dc-5dde5e6a76ff)) with ((e6a21858-1849-462e-b2b0-0bc57b38fb0a)) transformed to external link.
				- Obsidian Dataview
				  id:: 665374b0-1ed9-420b-afc4-897a942c0be0
				  collapsed:: true
					- Obsidian community plugin: [dataview](obsidian://show-plugin?id=dataview)
					- ((665359c3-61fd-4858-a117-ecbcd6fbc9ea)) https://blacksmithgu.github.io/obsidian-dataview/
					- GitHub: https://github.com/blacksmithgu/obsidian-dataview
					- Custom settings:
						- Inline query prefix: use `` `dv::` `` instead of the default `` `=` `` because ((6653751a-a1b4-44b0-a81e-0a446eb8918c)) (`=`) is the central symbol in [[Unïnfo Theory]].
				- Obsidian Importer
				  id:: 665376f4-9335-4d38-843f-a4cf6ef6cd10
				  collapsed:: true
					- Obsidian community plugin: [obsidian-importer](obsidian://show-plugin?id=obsidian-importer)
					- GitHub: https://github.com/obsidianmd/obsidian-importer
	- ## keyboard shortcut
	  id:: 665367a6-29d7-4fd2-a33b-6d94de8172e8
	  collapsed:: true
	  ((665359e4-4597-4775-b849-f9acbb98960a)) ((66536710-7441-4fb8-986b-50d2eec762d7))
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Keyboard_shortcut
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) a key or a series of [keys](https://en.wikipedia.org/wiki/Computer_keyboard "Computer keyboard") to quickly invoke a [software program](https://en.wikipedia.org/wiki/Software_program "Software program") or perform a preprogrammed action.
	- ## hotkey
	  id:: 66536710-7441-4fb8-986b-50d2eec762d7
	  collapsed:: true
	  ((665c9af1-1ce2-461c-af33-671690618c8f)) ((665367a6-29d7-4fd2-a33b-6d94de8172e8))
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) ((66536710-7441-4fb8-986b-50d2eec762d7)) is an ((665c9af1-1ce2-461c-af33-671690618c8f)) ((665367a6-29d7-4fd2-a33b-6d94de8172e8)), usually used by [Windows](https://en.wikipedia.org/wiki/Microsoft_Windows), ((66535660-643e-471a-a332-8f2306c5494f)), etc.
		- [[Table of Hotkey Assigned Commands in this Vault]]
		  id:: 66600918-9d88-4640-844b-35b9ed433b4a
	- ## wiki
	  id:: 66536a32-fddd-465f-a47f-fa8e0ea9c8db
	  collapsed:: true
		- ((665ca480-5ac8-4728-a331-2f68b48759d1)) ((665359c0-a89a-41b5-9f28-503f79107a08))
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Wiki
		  id:: 66600918-6c84-41c7-afeb-96d30f74850b
	- ## Wikipedia
	  id:: 665368c5-5c6f-44e4-a675-4a744252d32c
	  collapsed:: true
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Wikipedia
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) A ((66536af9-f7d7-4be8-be35-9a43b557aef1)) [online encyclopedia](https://en.wikipedia.org/wiki/Online_encyclopedia "Online encyclopedia") written and maintained by a community of [volunteers](https://en.wikipedia.org/wiki/Volunteering "Volunteering"), known as [Wikipedians](https://en.wikipedia.org/wiki/Wikipedians "Wikipedians"), through [open collaboration](https://en.wikipedia.org/wiki/Open_collaboration "Open collaboration") and the use of the ((66536a32-fddd-465f-a47f-fa8e0ea9c8db))-based editing system [MediaWiki](https://en.wikipedia.org/wiki/MediaWiki "MediaWiki").
	- ## free content
	  id:: 66536af9-f7d7-4be8-be35-9a43b557aef1
	  collapsed:: true
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Free_content
	- ## knowledge base
	  id:: 6653685c-5435-4be8-be60-a7fb5195d404
	  collapsed:: true
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Knowledge_base
	- ## knowledge graph
	  id:: 66536888-95d3-4d20-829c-b7ac2088dc29
	  collapsed:: true
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Knowledge_graph
		- ((66725725-f76a-4328-b162-f469b87e871b)) ((665364b1-e05c-46a6-a76b-c14cd73d1706)), ((665368c5-5c6f-44e4-a675-4a744252d32c))'s [Wikidata](https://en.wikipedia.org/wiki/Wikidata), Google's [Knowledge Graph](https://en.wikipedia.org/wiki/Google_Knowledge_Graph),  Microsoft's Satori, as well as the entity graphs of LinkedIn and Facebook.
	- ## personal knowledge base
	  id:: 665364b1-e05c-46a6-a76b-c14cd73d1706
	  collapsed:: true
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Personal_knowledge_base
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) A personal version of ((6653685c-5435-4be8-be60-a7fb5195d404)) and ((66536888-95d3-4d20-829c-b7ac2088dc29)).
		- Techniques
		  collapsed:: true
			- [Zettelkästen](https://en.wikipedia.org/wiki/Zettelkasten) (card file, slip box) from Germany, from 1980s: It use **paper slips** or cards, that may be linked to each other through [subject headings](https://en.wikipedia.org/wiki/Index_term "Index term") or other [metadata](https://en.wikipedia.org/wiki/Metadata "Metadata") such as numbers and [tags](https://en.wikipedia.org/wiki/Tag_(metadata) "Tag (metadata)"). It has often been used as a system of [note-taking](https://en.wikipedia.org/wiki/Note-taking "Note-taking") and [personal knowledge management](https://en.wikipedia.org/wiki/Personal_knowledge_management "Personal knowledge management") for research, study, and writing.
			  collapsed:: true
				- Website: https://zettelkasten.de/overview/
		- Software
		  collapsed:: true
			- [NoteCards](https://en.wikipedia.org/wiki/NoteCards "NoteCards") from 1983 can be seen as the grand parent of the modern ((66536a32-fddd-465f-a47f-fa8e0ea9c8db)).
			- [Roam Reseach](https://roamresearch.com/) from 2019 (dev from 2017) with text block based handling ([outlining](((66536d32-30ad-4c07-8585-76ae9eb7fb22)))), ((e6a21858-1849-462e-b2b0-0bc57b38fb0a)), and [tag](https://en.wikipedia.org/wiki/Tag_(metadata)) can be seen as the (re)start of the modern graph-based note taking movement.
			- ((66535660-643e-471a-a332-8f2306c5494f)) from 2020 is similar to Roam but focus on clean & interoperable markdown documents, with better GUI, plenty of plugins, strong community. However, text block based handling is not as fluidly as in Roam.
			- ((66536e1b-6466-4153-90d6-583003d99a81)) (dev from 2021, still beta now) open-source, focus more on the text block based outlining (like Roam) with some drawbacks:
			  collapsed:: true
				- Every block is a bullet item, so no plain paragraph!
				- A database sits between GUI and markdown docs.
			- [Outline](https://www.getoutline.com/) with strong integrations, but no block link (only page link)
			  collapsed:: true
				- Integrations: multiplayer collaboration, Slack, Google (Workspace, Docs), GitHub, AI (non-free), etc.
				- Source code: They host [repos on GitHub](https://github.com/outline) in which [rich-markdown-editor](https://github.com/outline/rich-markdown-editor) is open-source.
				- For Google account, only Workspace account is supported, personal account is not supported.
			- [zt](https://github.com/c2d7fa/zt) on Emacs
		- Reviews
		  collapsed:: true
			- [Roam vs. Obsidian vs. Notion vs. Evernote: what's the best tool for a productivity-driven lifestyle?](https://www.deliberate-diligence.com/roam-vs-obsidian-vs-evernote-whats-best-for-a-productivity-driven-lifestyle/) A well-documented story of Martin Weitzel's personal progress 
			  collapsed:: true
				- from paper notes
				- to [MS OneNote](https://www.onenote.com/) with chronological order + [todoist](https://todoist.com/) (+ [Evernote](https://www.evernote.com/)),
				- to [Notion](https://www.notion.so/) with databases and dashboards,
				- to [Roam Reseach](https://roamresearch.com/) with text block based handling, ((e6a21858-1849-462e-b2b0-0bc57b38fb0a)), and [tag](https://en.wikipedia.org/wiki/Tag_(metadata)),
				- to ((66535660-643e-471a-a332-8f2306c5494f)) with better GUI, plugins, community, but text block based handling is annoying.
				  collapsed:: true
					- However, Martin Weitzel had some mistake when thinking that ~~Obsidian is "open-source"~~, nope it's *proprietary* from the beginning.
	- ## Logseq
	  id:: 66536e1b-6466-4153-90d6-583003d99a81
	  collapsed:: true
		- ((665359c3-61fd-4858-a117-ecbcd6fbc9ea)) https://logseq.com/
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) ((66536e1b-6466-4153-90d6-583003d99a81)) is an ((66536d32-30ad-4c07-8585-76ae9eb7fb22)) like [Roam](https://roamresearch.com), but [open-source](https://github.com/logseq/logseq): outlining based on text blocks & ((66535e71-3b71-416c-98dc-5dde5e6a76ff)), with ((e6a21858-1849-462e-b2b0-0bc57b38fb0a)), and [tag](https://en.wikipedia.org/wiki/Tag_(metadata)).
		  collapsed:: true
			- ((6667abd2-14eb-4145-b9e3-e6f3037b3117))
				- Logseq was originally developed as a side project by [Tienson Qin](https://twitter.com/tiensonqin) [from Feb 2020](https://fission.codes/blog/overview-of-logseq-by-tienson-qin/), to bring [Org Mode](https://orgmode.org/) task features to ((66535e71-3b71-416c-98dc-5dde5e6a76ff)).
				- It has been [open sourced to GitHub](https://github.com/logseq/logseq) with first alpha version from Jan 2021, first beta version ([0.1.2](https://github.com/logseq/logseq/releases/tag/0.1.2)) in May 2021 until... today (May 2024) still beta ([0.10.9](https://github.com/logseq/logseq/releases/tag/0.10.9))!
				- A new branch [based on database](https://github.com/logseq/logseq/pull/9858), and will be bi-dir-synced with ((66535e71-3b71-416c-98dc-5dde5e6a76ff)), is being developed from Jul 2023.
		- ((665359ff-79f1-4669-b10b-f2b0e633a7c1))
		  id:: 66600918-66b3-4d4b-9ef3-6b3d6986ebdd
		  collapsed:: true
			- It runs somehow slower and heavier than ((66535660-643e-471a-a332-8f2306c5494f)).
			- The right sidebar together with the main edit pane is a convenient way to do side-by-side 2-column working.
			  {{embed ((7ce45435-dfac-4391-a570-ebd0d434d8d6))}}
			- [!] Logseq uses `logseq.order-list-type:: number` to show ordered list.
			  id:: 665eef80-baed-4eff-b89d-d1d62d4f0b0e
			  collapsed:: true
				- This property must be placed in *all ordered items*.
				- The numbers are shown in Logseq, but not stored in the underlying `.md`.
				- Documents: [editing numbered list](https://docs.logseq.com/#/page/numbered%20list),
			- Folded blocks are hilited but very lightly
			  id:: 665f0ecc-3046-4602-a0cb-d557baab53ba
			  collapsed:: true
				- Default theme in ((66536e1b-6466-4153-90d6-583003d99a81)) just hilites a folded item (`.bullet-closed`) very lightly with a blurred circle `--ls-block-bullet-border-color` around its bullet. This makes me confused many times.
				  id:: 665ef3cd-ecdd-4e8f-9854-dd61f1a23e7d
				  collapsed:: true
					- ```html
					  <!-- Open/unfolded/expanded bullet -->
					  <a class="bullet-link-wrap">
					    <span class="bullet-container cursor" draggable="true" 
					          id="dot-665ef3cd-c000-41d8-8593-9692c3cb173a"
					          blockid="665ef3cd-c000-41d8-8593-9692c3cb173a">
					      <span class="bullet" blockid="665ef3cd-c000-41d8-8593-9692c3cb173a">
					      </span>
					    </span>
					  </a>
					  
					  <!-- Closed/folded/collapsed bullet -->
					  <a class="bullet-link-wrap">
					    <span class="bullet-container cursor bullet-closed" draggable="true" 
					          id="dot-665ef3cd-c000-41d8-8593-9692c3cb173a"
					          blockid="665ef3cd-c000-41d8-8593-9692c3cb173a">
					      <span class="bullet" blockid="665ef3cd-c000-41d8-8593-9692c3cb173a">
					      </span>
					    </span>
					  </a>
					  
					  
					  <!-- Open/unfolded/expanded Arrow control (hidden) -->
					  <a class="block-control" 
					     id="control-665ef3cd-c000-41d8-8593-9692c3cb173a">
					    <span class="control-hide">
					      <span class="rotating-arrow not-collapsed">
					        <svg aria-hidden="true" version="1.1" viewBox="0 0 192 512" fill="currentColor" display="inline-block" class="h-4 w-4" style="margin-left: 2px;"><path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z" fill-rule="evenodd"></path>
					        </svg>
					      </span>
					    </span>
					  </a>
					  
					  <!-- Closed/folded/collapsed Arrow control (hidden) -->
					  <a class="block-control" 
					     id="control-665ef3cd-c000-41d8-8593-9692c3cb173a">
					    <span class="control-hide">
					      <span class="rotating-arrow collapsed">
					        <svg aria-hidden="true" version="1.1" viewBox="0 0 192 512" fill="currentColor" display="inline-block" class="h-4 w-4" style="margin-left: 2px;"><path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z" fill-rule="evenodd"></path></svg>
					      </span>
					    </span>
					  </a>
					  
					  <!-- Closed/folded/collapsed Arrow control shown permanently -->
					  <a class="block-control opacity-50 hover:opacity-100 mr-2" 
					     style="width: 14px; height: 16px; margin-left: -30px;">
					    <span class="control-show cursor-pointer">
					      <span class="rotating-arrow collapsed">
					        <svg aria-hidden="true" version="1.1" viewBox="0 0 192 512" fill="currentColor" display="inline-block" class="h-4 w-4" style="margin-left: 2px;"><path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z" fill-rule="evenodd"></path></svg>
					    	</span>
					    </span>
					  </a>
					  ```
				- Solution: edit `custom.css` so that
				  collapsed:: true
					- CANCELLED arrow control of collapsed block won't be hidden, just like in ((66535660-643e-471a-a332-8f2306c5494f)).
					  collapsed:: true
						- The arrow control of the expanded block should also be shown, in order to not confuse the reader of that expanded block (in a quick glance the arrow of the closed block above can be confused as the control of this expanded block).
						- However, Logseq theme does not distinguish between expanded block and an empty block (with no sub-items), calling both `.not-collapsed`.
						- So, i cancel this solution.
					- the bullet border of collapsed block is **more hillited** to stand out
					  id:: 66694be3-a924-4da8-af4c-bbba1c3e6fcc
					  collapsed:: true
						- ```css
						  --ls-block-bullet-color: var(--rx-slate-08);
						  --ls-block-bullet-border-color: var(--rx-slate-06-alpha);
						  --ls-block-bullet-closed-border-color: var(--rx-slate-09);
						  ```
			- [!] The current workflow is hard-coded as `TODO <-> DOING -> DONE`, which does not distinguish between the first `TODO` with the next `TODO`, i.e. "PAUSED".
			  id:: 66600918-740c-4b67-be6e-5b3bd7535fb7
			  collapsed:: true
				- I prefer this workflow: `TODO -> DOING <-> WAIT -> DONE` (`WAIT` = "PAUSED").
				- [!] The task status cycle with `marker-switch` `TODO <-> DOING` is hard-coded in [block.cljs](https://github.com/logseq/logseq/blob/d8c6ca264bdf9a6a0f03c46dbf3509210367624a/src/main/frontend/components/block.cljs#L1861).
				- Other status (`WAIT`, `WAITING`, `IN-PROGRESS`) are hard-coded as just [`task-status` (`marker-cp`)](https://github.com/logseq/logseq/blob/d8c6ca264bdf9a6a0f03c46dbf3509210367624a/src/main/frontend/components/block.cljs#L1879).
				- Workflow configuration has been [suggested](https://discuss.logseq.com/t/now-next-later-tasks-workflow/3703/6) without response.
				- [Custom Workflow (`logseq-custom-workflows`)](https://github.com/sawhney17/logseq-custom-workflow-plugin) plugin lets us define custom flow of task status, e.g. `DOING -> TODO ->  WAIT`, but cannot touch the `marker-switch` `TODO <-> DOING`.
				- ((66602f68-e23f-4b24-921e-b1a9fc0cc731)) workaround: use `logseq-custom-workflows` in combination with the built-in `marker-switch` (`Ctrl Enter`).
				  id:: 66602f1d-a572-4fe8-997f-0fae15c6a3de
				  collapsed:: true
					- Workflow 1: `(TODO -> WAIT) <-> DOING -> DONE` with `Ctrl Enter` for forward phase and  `Ctrl Shift Enter` for backward phase.
					  collapsed:: true
						- Forward: `Ctrl Enter` for plaintext -> `TODO` (planned) -> `DOING` (started, start-time logged) -> `DONE`
							- Just start without planning: `Alt Enter` for plaintext -> `DOING` (started, start-time logged)
						- Backward: `Ctrl Shift Enter` for `DONE` -> `DOING` -> `TODO` -> `WAIT` (paused, end-time logged) -> plaintext
						  id:: 666d71cc-c390-4d0e-9e95-950c257e387e
							- Using GUI, click `DOING` -> `TODO`, or click `DONE` -> `TODO`, then `Ctrl Shift Enter` for  `TODO` -> `WAIT`
						- Re-forward: `Ctrl Enter` for `WAIT` -> `TODO` -> `DOING` (restarted, restart-time logged)
						- Re-backward, and so on...
						- Finally click checkbox for -> `DONE` (stopped, end-time logged)
					- Workflow 2: `plaintext <-> DOING` with `Alt Enter` for time tracking of plaintext.
					  collapsed:: true
						- Each time switching to `DOING` and back to plaintext, a single timestamp (without end-time) is logged into `:LOGBOOK:`.
					-
			- [!] Cannot link file/dir to avoid dupes!
			  id:: 665fe765-2bb7-4392-9140-10e187f0f208
			  collapsed:: true
				- [!] File name conflict (the same name in different directories):
				  collapsed:: true
					- Common files: `README.md`, `index.md`, `usage.md`
					  collapsed:: true
						- We can ignore them.
					- Notes: `notes.md` must be retrieved.
				- [!] When symlinks are added, they are indexed, but after graph reload, even symlinks to specific `.md` files lose their indices!
				  collapsed:: true
					- Refs:
						- [Symlinks are not followed when loading a Graph/Directory](https://github.com/logseq/logseq/issues/5489)
						- [Using symbolic link to add existing external .md file to logsek break on restart](https://discuss.logseq.com/t/using-symbolic-link-to-add-existing-external-md-file-to-logsek-break-on-restart/16229)
				- Hard-link does keep index, but are broken by git 😞!
			- [!] Each #tag corresponds to a *page*, not a block!
			  collapsed:: true
				- This is a problem to my projects, because my approach is pure block-based.
				- Tags are great for keywords: its concise and human-readable, compared to the long and oblique UUID of block.
				- I've collected all keywords into the ((66533703-505d-432d-8368-6058eefb45f6)).
			- ((66625c65-5d2e-4f4b-9d87-4eadefca681a))
			  collapsed:: true
				- [discussed on Loseq Community](https://discuss.logseq.com/t/breadcrumb-navigation-bar-should-contain-the-target-item/27511)
			- [!] When a ((66610c13-5045-42a8-948f-6426d698fd2c)) is referenced in another block, that enclosing block has a different block id which can be...
			  id:: 66680966-5c6a-4c14-82b5-bc1c3f65c525
			  collapsed:: true
				- ((66680966-5c6a-4c14-82b5-bc1c3f65c525)) referenced in yet another block.
				- But if the intermediate block does not have extra words, i.e. only the original block id, like this:
					- ((66610c13-5045-42a8-948f-6426d698fd2c))
					  id:: 66680ac9-70a7-4648-acda-4caa887bd447
					- Then the next level of ref, like this ((66680ac9-70a7-4648-acda-4caa887bd447)), cannot stop at the intermediate block, but jump directly to the original block.
					  id:: 66680ada-076d-47c8-b827-91fae9c3d4a2
					- However the preview does show the both intermediate block and original block (overlaying): just hover this ((66680ac9-70a7-4648-acda-4caa887bd447)), don't click!
					- => Better behavior: Preview shows non-overlaying blocks and ask for level of links to jump when clicking the link.
					  :LOGBOOK:
					  CLOCK: [2024-06-11 Tue 15:35:08]--[2024-06-11 Tue 15:49:35] =>  00:14:27
					  :END:
		- Features & Usage:
		  collapsed:: true
			- Block id
			  id:: 66610c13-5045-42a8-948f-6426d698fd2c
			  collapsed:: true
				- Block ref
				  id:: 667d2689-4ce0-4c79-b82a-25b0bba87d39
				  A block can be referenced/mirrored with block ref synatx `((block-uuid))`.
				- Block id is a lengthy UUID, which is generated when corresponding block is linked or zoomed in (opened).
				- Block id is stored as `id::` property in markdown.
				- [!] ((667d2689-4ce0-4c79-b82a-25b0bba87d39)) cannot be prefixed.
				  id:: 667d263b-658b-4560-b8cc-f6838534956d
				  collapsed:: true
					- Not renderred correctly:
					  collapsed:: true
						- Should be `"Block ref"`: "((667d2689-4ce0-4c79-b82a-25b0bba87d39))"
						- Should be `(Block ref...)`: (((667d2689-4ce0-4c79-b82a-25b0bba87d39))...).
						- Should be `<Block ref>`: <((667d2689-4ce0-4c79-b82a-25b0bba87d39))>
						- Should be `N-Block ref`: N-((667d2689-4ce0-4c79-b82a-25b0bba87d39))
					- Renderred correctly with standard ((66535e71-3b71-416c-98dc-5dde5e6a76ff)) link syntax:
					  collapsed:: true
						- Should be `"Block ref"`: "[Block ref](((667d2689-4ce0-4c79-b82a-25b0bba87d39)))"
						- Should be `(Block ref...)`: ([Block ref](((667d2689-4ce0-4c79-b82a-25b0bba87d39)))...).
						- Should be `<Block ref>`: <[Block ref](((667d2689-4ce0-4c79-b82a-25b0bba87d39)))>
						- Should be `N-Block ref`: N-[Block ref](((667d2689-4ce0-4c79-b82a-25b0bba87d39)))
					- But ((667d2689-4ce0-4c79-b82a-25b0bba87d39)) can be suffixed with no problems, e.g. ((667d2689-4ce0-4c79-b82a-25b0bba87d39))erence.
			- Block title
			  collapsed:: true
				- The first line in a block is considered title of that block.
				- Automatic brief title (suggested)
				  id:: 66626356-0ad9-4219-9b33-8ab7c6cd0508
				  When the first line is too long, a brief title with ellipsis `...` should be automatically generated.
			- Sidebar
			  collapsed:: true
				- Right sidebar is used as a stack of docs, started from [[Contents]], for column-styled editing in parallel with the main edit pane.
					- This stack is a more-active form of the ((6653538a-22d3-4807-ad13-a64ac543edba)).
				- ((66536710-7441-4fb8-986b-50d2eec762d7)): `Shift click` to open links or items in new top pane in sidebar, instead of in the main edit pane. `Ctrl Shift o` in editing mode to open link in sidebar.
				- However, some functions does not work (well) in right sidebar:
				  id:: 7ce45435-dfac-4391-a570-ebd0d434d8d6
				  collapsed:: true
					- Editing system files, like `custom.css`, only work in the main edit pane.
					- Modifications in the sidebar do not reflect well into the docs, so sidebar is better for viewing than editing.
			- Breadcrumbs
			  collapsed:: true
				- [!] Breadcrumb bar does not contain the target/focused item! 
				  id:: 66625c65-5d2e-4f4b-9d87-4eadefca681a
				  This make much confusion, esp. in the header of each pane in the sidebar, and esp. when collapsed into header only.
					- Breadcrumb bar should contain the target item as the last non-link element.
				- Breadcrumb bar should contain ((66626356-0ad9-4219-9b33-8ab7c6cd0508)) instead of full length items.
				- Sticky breadcrumbs [via CSS](https://discuss.logseq.com/t/have-the-page-title-or-block-breadcrumbs-as-an-always-visible-overlay-at-the-top-of-the-screen-when-scrolling-down/20617/5).
			- Task management
			  collapsed:: true
				- ((66600918-740c-4b67-be6e-5b3bd7535fb7))
				- A task with status `DOING` will be time tracked in `:LOGBOOK:`.
					- Switching to `DOING` (clicking `marker-switch` button) marks the start time, then switching to `TODO` (clicking `marker-switch` button) or `DONE` (clicking checkbox) marks the end time.
					- A plaintext item can get time tracked by being promoted to `DOING` task then demoted back to plaintext.
			- Web API
			  id:: 6673f8ff-995c-455f-ae09-49bcb5311e2e
			  collapsed:: true
				- Local server: [localhost:12315](http://localhost:12315)
				  collapsed:: true
					- Due to [bug #10337](https://github.com/logseq/logseq/issues/10337), until now (June 2024), `Auto start server` doesn't work.
				- The JSON result of query `logseq.Editor.getBlock` is different from `Export graph` > `Export as JSON`.
					- API returns a bare block with children are just UUIDs, not embedded JSON like in the exported one.
			- Logseq publish
			  id:: 66600918-8c61-42af-b8a2-04bf05e9f782
			  collapsed:: true
			  :LOGBOOK:
			  CLOCK: [2024-06-11 Tue 10:35:39]
			  CLOCK: [2024-06-11 Tue 10:36:22]--[2024-06-12 Wed 10:17:12] =>  23:40:50
			  :END:
				- Use the built-in feature "Export public pages".
				  collapsed:: true
					- [!] The built-in publisher does not give option to set `theme-mode: light/dark` and `accent-color: blue` and it always use the default theme (`data-color=logseq`).
					- So i customize `data-color=logseq` to match CreatZy theme.
					  id:: 66698fb6-d9ac-423f-845c-0f0f5c93abf2
					- [!] The built-in publisher still cannot handle assets (embedded or linked) other than embedded image.
					  id:: 666a6673-0383-471a-ac42-c77c03dd96d7
				- CANCELLED Use [publish-SPA](https://github.com/logseq/publish-spa) GitHub Action to publish to [GitHub Pages](https://bixycler.github.io/UniinfoNotes/).
				  collapsed:: true
				  :LOGBOOK:
				  CLOCK: [2024-06-11 Tue 10:37:00]
				  :END:
					- [!] The published SPA has some style mismatch with the desktop app.
					- [!] The published SPA still cannot handle assets (embedded or linked) other than embedded image.
					- CANCELLED Local publishing with [publish-SPA CLI](https://github.com/logseq/publish-spa?tab=readme-ov-file#cli) to publish local graph of HTV's works.
					  collapsed:: true
						- `publish-spa` requires `logseq` to be built for it to use `logseq/static`, but `logseq > yarn install` fails :(
							- ```
							  yarn install > Link step > logseq@workspace:. must be built because it never has been before
							  
							  Ambiguous Syntax Error: Cannot find which to pick amongst the following alternatives:
							    0. yarn install [--json] [--immutable] [--immutable-cache] [--check-cache] [--inline-builds] [--mode #0]
							    1. yarn install [--json] [--immutable] [--immutable-cache] [--check-cache] [--inline-builds] [--mode #0]
							  While running --cwd tldraw install
							  
							  ```
				- CANCELLED Publish linear (long-form) docs with ((66695307-1334-426c-b953-3e006bc87d74))
				  id:: 66695280-1674-477a-b4ff-eb508aa679e0
				- Because the exported SPA is too large (~90MB including Electron), it's better to write a ((6673f8bf-04c0-4f8f-bc36-982ce9cab87d)).
		- Settings: via [[logseq/config.edn]] and menu `Settings`
		  collapsed:: true
			- `:editor/logical-outdenting` (`Settings > Editor > Logical outdenting`) is logical, but confused & messy:
			  collapsed:: true
				- The outdented item jumping down... is confusing.
				- When we need to cut a long list into some main items, we must indent all items into sub-items instead of simply outdent the main items.
			- `:outliner/block-title-collapse-enabled` is nice to collapse lengthy body of a long block and its *visible properties*. However, the *invisible built-in properties* like `id::` make this feature confused!
			- `:publishing/all-pages-public` (`Settings > Editor > All pages public when publishing`) should be `true` to publish most of the pages by default, and manually hide individual pages with page property `public:: false` (right click page title > `Make it private (/public for publishing)`).
		- ((66535a44-8a13-4d5a-808e-10baa97ebaf0))
		  collapsed:: true
			- [Tabs (`logseq-tabs`)](https://github.com/pengx17/logseq-plugin-tabs) provides tabs for browsing and concurrent editing with the very useful feature **pinned tabs**.
			  collapsed:: true
				- We can pin "root nodes" like ((66519638-cf5d-409b-9b98-15acabf2268c)) so that all other nodes will be opened in new tabs instead of overriding the content in that tab.
			- [Custom Workflow (`logseq-custom-workflows`)](https://github.com/sawhney17/logseq-custom-workflow-plugin) lets us define custom flow of task status, e.g. `TODO -> WAIT -> DOING -> DONE`, and show `:LOGBOOK:` in edit mode when using its custom hotkey (`Ctrl Shift Enter`).
			  collapsed:: true
				- Settings: The workflow change take effect immediately, but the hotkey change requires Logseq restart.
				- 2 workflows defined: {{embed ((66602f1d-a572-4fe8-997f-0fae15c6a3de))}}
				  id:: 6661341b-bd00-4444-a44d-99b489f6c8cb
			- [Time Recorder (`logseq-time-recorder`)](https://github.com/5hir0kur0/logseq-time-recorder) adds time tracker similar to the built-in `:LOGBOOK:`, but not yet integrated with `:LOGBOOK:`.
			- [File explorer from within Logseq](https://discuss.logseq.com/t/file-explorer-from-within-logseq/21703/1) with [File picker for linking local files](https://discuss.logseq.com/t/file-picker-for-linking-local-files/21704)
			  id:: 66600918-fe64-4ef5-965e-c085d29bb88b
			- [Hugo publish (logseq-schrodinger)](https://github.com/sawhney17/logseq-schrodinger) for publishing to [Hugo](https://gohugo.io/).
			  id:: 66695307-1334-426c-b953-3e006bc87d74
		- ((665dcac9-5698-496c-9a14-c5c0425d0998))
			- Check rendered result at [[Theme Demo]].
			- DONE Compose [[logseq/custom.css]] from Logseq's built-in `style.css` & Ozean Theme's `main.css`.
			  id:: 665d78a5-6470-4e60-8fd1-d958fd62756e
			  :LOGBOOK:
			  CLOCK: [2024-06-03 Mon 20:25:47]--[2024-06-03 Mon 20:25:52] =>  00:00:05
			  CLOCK: [2024-06-03 Mon 20:25:58]--[2024-06-04 Tue 08:35:24] =>  12:09:26
			  :END:
	- ## outliner
	  id:: 66536d32-30ad-4c07-8585-76ae9eb7fb22
	  collapsed:: true
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Outliner
		- ((6651ecba-793d-43c5-8020-a9f260b032d8))
		- ((665359ff-79f1-4669-b10b-f2b0e633a7c1)) Most of the apps there are task-centric.
		- Software
		  collapsed:: true
			- A forum dedicated to outliners: [OutlinerSoftware](https://www.outlinersoftware.com/)
			- ((66536e1b-6466-4153-90d6-583003d99a81)) is an [open-source](https://github.com/logseq/logseq) outliner based on text blocks & ((66535e71-3b71-416c-98dc-5dde5e6a76ff)), with ((e6a21858-1849-462e-b2b0-0bc57b38fb0a)), and [tag](https://en.wikipedia.org/wiki/Tag_(metadata)).
			- [em](https://github.com/cybersemics/em/wiki/Docs) is a process-oriented note-taking app with tree view & graph links, sophisticated with navigation operations.
			- [Legend](https://legendapp.com/) is smooth with web app, including desktop & mobile apps
			  collapsed:: true
				- Metadata (tag, properties) can be stored in "notes"
				- "Import from backup" always create [new doc with new ids](https://forum.legendapp.com/d/1747-import-from-backup-always-create-new-doc-with-new-ids-broken-links), hence all wikilinks are broken.
				- Moving item to an article (H1), using Alt-M or menu, doesn't work due to the [fake hierarchy of heading](https://forum.legendapp.com/d/519-inferred-hierarchy-from-heading-size/9).
			- [Checkvist](https://checkvist.com/) ...
			  collapsed:: true
				- Block ids are created only when wikilink inbound is created, then cached, hence not reflecting the real doc.
			- [RemNote](https://www.remnote.com/)
				- Integrations: Google,
				- Has both view modes: bullet & hidden first level bullets.
					- But the exported Markdown always have full bullets.
				- Properties are inside tag!
				- The exported JSON is complicated and contains *binary* codes!
				- The interface is complicated.
				- Usually at CPU high cost!
			- [Lattics](https://lattics.com/) with settable font, but only 2 versions: Windows & MacOS, no Linux, no Web
	- ## hyperlink
	  id:: 66536cad-a232-4b90-bf32-439144aac1ec
	  collapsed:: true
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Hyperlink
	- ## wikilink
	  id:: e6a21858-1849-462e-b2b0-0bc57b38fb0a
	  collapsed:: true
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Help:Link
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) A kind of internal ((66536cad-a232-4b90-bf32-439144aac1ec)) in the form of `[[Target Page|displayed text]]` to link from one page to another `Target Page`. This is first defined in ((665368c5-5c6f-44e4-a675-4a744252d32c))'s ((6653690d-70c4-49a0-b71d-a77a6dd9d9e5)) syntax, and then is adopted by other systems like ((66535660-643e-471a-a332-8f2306c5494f)).
	- ## wikitext
	  id:: 6653690d-70c4-49a0-b71d-a77a6dd9d9e5
	  collapsed:: true
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Help:Wikitext
	- ## Markdown
	  id:: 66535e71-3b71-416c-98dc-5dde5e6a76ff
	  collapsed:: true
		- ((665359c3-61fd-4858-a117-ecbcd6fbc9ea)) https://www.markdownguide.org/
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Markdown
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) A simple and humane ((66536166-87b0-4283-ab56-c6d2f62423c1)) created by Gruber and Swartz in 2004, based on pre-existing conventions for marking up ((6653635a-0226-4ebe-ae9b-e3e756b67377)) in ((66536383-8033-4105-8cbf-2c1316382df4)) and [usenet](https://en.wikipedia.org/wiki/Usenet) posts, like [setext](https://en.wikipedia.org/wiki/Setext "Setext") (c. 1992), [Textile](https://en.wikipedia.org/wiki/Textile_(markup_language) "Textile (markup language)") (c. 2002), and [reStructuredText](https://en.wikipedia.org/wiki/ReStructuredText "ReStructuredText") (c. 2002).
	- ## markup language
	  id:: 66536166-87b0-4283-ab56-c6d2f62423c1
	  collapsed:: true
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Markup_language
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) A language to mark text content up with special marks and/or syntax to add metadata like meaning, style, structure to the document.
		- ((66725725-f76a-4328-b162-f469b87e871b)) ((665361eb-5339-451e-957d-362b946d796d)), ((6653624a-5679-4bc5-bd7e-fdee34516314)), ((66536274-abb0-4f8e-8fa1-da2d4224b7ff)), ((66535e71-3b71-416c-98dc-5dde5e6a76ff)), ...
	- ## email
	  id:: 66536383-8033-4105-8cbf-2c1316382df4
	  collapsed:: true
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Email
	- ## plain text
	  id:: 6653635a-0226-4ebe-ae9b-e3e756b67377
	  collapsed:: true
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Plain_text
	- ## LaTeX
	  id:: 66536274-abb0-4f8e-8fa1-da2d4224b7ff
	  collapsed:: true
		- ((665359c3-61fd-4858-a117-ecbcd6fbc9ea)) https://www.latex-project.org/
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) A [good old](https://en.wikipedia.org/wiki/LaTeX#History) typesetting language that I've used to write my reports an thesis in my academic era ( ((665c9c28-dfdc-4a7a-8f82-d1367db0c5be)), [JAIST](((665370ae-659d-4fb1-9bdb-6e857e3f5bf3)))).
	- ## formal methods
	  id:: 6653711b-1c5f-4a34-b01a-e673b9bb694c
	  collapsed:: true
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Formal_methods
	- ## Japan Advanced Institute of Science and Technology
	  id:: 665370ae-659d-4fb1-9bdb-6e857e3f5bf3
	  collapsed:: true
	  ((665359e4-4597-4775-b849-f9acbb98960a)) ((665370bb-9619-46b2-97be-a7b52684a56c))
		- JAIST
		  id:: 665370bb-9619-46b2-97be-a7b52684a56c
		  ((665c9af1-1ce2-461c-af33-671690618c8f)) ((665370ae-659d-4fb1-9bdb-6e857e3f5bf3))
		- ((665359c3-61fd-4858-a117-ecbcd6fbc9ea)) https://www.jaist.ac.jp
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) There are 3 schools: Information Science, Knowledge Science, and Materials Science.
		- Harusada's: I've done my master course in the Graduate School of Information Science about ((6653711b-1c5f-4a34-b01a-e673b9bb694c)), from 2007 to 2009.
	- ## Osaka University
	  id:: 66536ec6-1a32-431b-b2e2-c73813f5d19f
	  collapsed:: true
	  ((665359e4-4597-4775-b849-f9acbb98960a)) ((665c9c28-dfdc-4a7a-8f82-d1367db0c5be)), ((665c9c2b-8030-46cc-90b2-08816d369105))
		- Handai
		  id:: 665c9c28-dfdc-4a7a-8f82-d1367db0c5be
		  ((665c9af1-1ce2-461c-af33-671690618c8f)) ((66536ec6-1a32-431b-b2e2-c73813f5d19f))
		- 阪大
		  id:: 665c9c2b-8030-46cc-90b2-08816d369105
		  ((665c9af1-1ce2-461c-af33-671690618c8f)) ((66536ec6-1a32-431b-b2e2-c73813f5d19f))
		- ((665359c3-61fd-4858-a117-ecbcd6fbc9ea)) https://www.osaka-u.ac.jp
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) A comprehensive university with 6 faculties: science, engineering, medicine, letters, law & economics, and Arts & Humanities. It merged the old [Osaka Gaidai](((66537146-078d-4a65-b33a-2a0162f15d8c))) in 2007.
		- [Harusada](((66536578-c4d3-43f1-b35c-bf71120f0570)))'s: I've done my undergraduate course of Computer Science in Toyonaka campus, from 2003 to 2007.
	- ## Osaka University of Foreign Studies
	  id:: 66537146-078d-4a65-b33a-2a0162f15d8c
	  collapsed:: true
	  ((665359e4-4597-4775-b849-f9acbb98960a)) ((66537151-5913-4bcf-b4fe-b8e90a69f5af)), ((665c9f25-ec8b-4fb8-ad1d-349cbd0b9010))
		- Osaka Gaidai
		  id:: 66537151-5913-4bcf-b4fe-b8e90a69f5af
		  ((665c9af1-1ce2-461c-af33-671690618c8f)) ((66537146-078d-4a65-b33a-2a0162f15d8c))
		- 大阪外大
		  id:: 665c9f25-ec8b-4fb8-ad1d-349cbd0b9010
		  ((665c9af1-1ce2-461c-af33-671690618c8f)) ((66537146-078d-4a65-b33a-2a0162f15d8c))
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) It was dedicated to area studies and the study of foreign languages and their related cultures. It was merged to ((66536ec6-1a32-431b-b2e2-c73813f5d19f)) in 2007.
		- [Harusada](((66536578-c4d3-43f1-b35c-bf71120f0570)))'s: I've done my Japanese course here from 2002 to 2003.
	- ## XML
	  id:: 6653624a-5679-4bc5-bd7e-fdee34516314
	  collapsed:: true
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/XML
	- ## HTML
	  id:: 665361eb-5339-451e-957d-362b946d796d
	  collapsed:: true
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/HTML
		- Flexbox
			- [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
		- Web Components
			- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) provides good guides and API refs.
			- [Custom elements](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements)
				- [Custom states](https://developer.mozilla.org/en-US/docs/Web/API/CustomStateSet) can be exposed for external CSS to use, e.g. ``
				  collapsed:: true
					- The new pseudo class [`:state()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:state) is too new (from Chrome 125, Feb 2024), so we may need to wait or use [the fallback to the deprecated `:--double-dash-custom-state`](https://developer.mozilla.org/en-US/docs/Web/API/CustomStateSet#compability_with_dashed-ident_syntax).
			- [Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM)
			- [Templates and slots](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots)
		- ### CSS
			-
	- ## Vacancy
	  id:: 66600918-9f92-4730-b056-c2cd87a742aa
	  collapsed:: true
	  ((665359e4-4597-4775-b849-f9acbb98960a)) ((66691d61-b8e9-4618-ac98-145056b646f4))
		- Emptiness
		  id:: 66691d61-b8e9-4618-ac98-145056b646f4
		  ((665c9af1-1ce2-461c-af33-671690618c8f)) ((66600918-9f92-4730-b056-c2cd87a742aa))
		- Buddhist: [śūnyatā (Sanskrit: शून्यता; Pali: suññatā)](https://en.wikipedia.org/wiki/%C5%9A%C5%ABnyat%C4%81)
-