- `\ No newline at end of file`
  :LOGBOOK:
  CLOCK: [2025-01-21 Tue 14:07:59]--[2025-01-24 Fri 19:00:42] =>  76:52:43
  :END:
  is the warning of `diff` because `diff` is a **line-based** text processor.
	- Without the last newline, whenever the next line is appended to this file, the last line must be edited by adding newline to it, which is an unintended edit. This **unintended change** of the last line leads to various problem.
	- 1st, `diff` works with the whole line, hence, the last line will be marked as modified by the next commit.
		- E.g. wrong lines in diffs between commits without the last newline:
		  collapsed:: true
			- Final file
			  ```
			  Test EOL@EOF⏎
			  this line is in commit #1.⏎
			  this line is in commit #2.⏎
			  this line is in commit #3.
			  ```
			- commit #1
			  ```diff
			  +Test EOL@EOF⏎
			  +this line is in commit #1.
			  \ No newline at end of file
			  ```
			- commit #2
			  ```diff
			  Test EOL@EOF⏎
			  -this line is in commit #1.
			  \ No newline at end of file
			  +this line is in commit #1.⏎
			  +this line is in commit #2
			  \ No newline at end of file
			  ```
			- commit #3
			  ```diff
			  this line is in commit #1.⏎
			  -this line is in commit #2.
			  \ No newline at end of file
			  +this line is in commit #2.⏎
			  +this line is in commit #3
			  \ No newline at end of file
			  ```
	- 2nd, the last line of the last commit may be [blamed](https://git-scm.com/docs/git-blame) for the next commit, which is misleading.
		- Some git implementations do this misleading blame: GitHub, GitLab, VS Code
		  collapsed:: true
			- ![last-newline-blame-GitLab-GitHub](../assets/TextProcessing/last-newline/last-newline-blame-GitLab-GitHub.png)
			- ![last-newline-blame-VSCode](../assets/TextProcessing/last-newline/last-newline-blame-VSCode.png)
		- Some git implementations tweak themself to avoid this misleading blame: Ubuntu's `git`, JetBrains IDEs
		  collapsed:: true
			- ![last-newline-blame-console](../assets/TextProcessing/last-newline/last-newline-blame-console.png)
			- ![last-newline-blame-IDEA](../assets/TextProcessing/last-newline/last-newline-blame-IDEA.png)
	- 3rd, **unintended conflict**: Some text editors and IDEs automatically add the last newline to editing files, making unintended changes which will conflict with appendage to that file in other commits.
		- The conflict will be shown (for resolution) in a very obscure way, due to the difficulty of showing the newline itself.
		  ```git-merge-conflict
		  6: Last line without newline
		  <<<<<<< HEAD
		  7: Appended line by feature-testEOL-1
		  =======
		  >>>>>>> feature-testEOL-2
		  
		  ```
		- There are two options to fix this issue:
			- Force all IDEs to automatically add the last newline.
			- Stop Linux editors, like `vim`, `nano`, from fixing files missing newline at the end of file.
				- This option should be chosen for a project with lots of legacy codes missing the last newline.
	- Commands to refactor codes
	  collapsed:: true
		- Add the missing last newline (ref: [unix.stackexchange](https://unix.stackexchange.com/a/31955/566548))
		  ```sh
		  sed -i '$a\' file
		  ```
		- Remove last blank line, i.e. truely empty line (`^$` = `\n` only)
		  ```sh
		  sed -i '${/^$/d;}' file
		  ```
		- Find files missing the last newline:
		  ```sh
		  find . -regex '.*\(git\|venv\|idea\)' -prune -o \
		    -type f -exec sh -c 'tail -c 1 "$1" | grep -q "." && echo "$1"' no-last-newline {} \;
		  ```
		- Find files with the last newline
		  ```sh
		  find .  -regex '.*\(git\|venv\|idea\)' -prune -o \
		    -type f -exec sh -c 'tail -c 1 "$1" | grep -q "^$" && echo "$1"' with-last-newline {} \;
		  ```