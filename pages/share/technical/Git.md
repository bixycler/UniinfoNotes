## Git
id:: 666ba1e2-19d1-409e-b30e-42a99b7e4ec0
	- ((665359c3-61fd-4858-a117-ecbcd6fbc9ea)) https://www.git-scm.com/
	- ((6651ecba-793d-43c5-8020-a9f260b032d8)) ((666ba1e2-19d1-409e-b30e-42a99b7e4ec0)) is a [free and open source](https://www.git-scm.com/about/free-and-open-source) distributed version control system (VCS), which is now the most popular VCS in the world.
	- ((665359ff-79f1-4669-b10b-f2b0e633a7c1))
	  collapsed:: true
		- File link: ((671f5784-d89b-4a4a-a6e7-f02a0805322f)) is supported by ((666ba1e2-19d1-409e-b30e-42a99b7e4ec0)) but ((671f5617-1163-4ffc-b65a-b3234e471db0)) is not.
		  collapsed:: true
			- Symlink has portability problem between Linux and Windows.
				- [From Windows 10+, symlink can be used](https://blogs.windows.com/windowsdeveloper/2016/12/02/symlinks-windows-10/) when Developer mode is turned on.
			- Hard link is not support (will be broken when ((666ba1e2-19d1-409e-b30e-42a99b7e4ec0)) overwrites the link file), but ((666ba1e2-19d1-409e-b30e-42a99b7e4ec0)) will let the hard link live as long as we don't do any write operation on that link file, e.g. `pull`, `checkout`, `reset`, etc.
			  id:: 666ba5a7-598a-4b66-86bd-b1622a28ada6
		- `\ No newline at end of file`
		  id:: 556c799a-e364-49ad-94ab-5d14bef766ca
		  collapsed:: true
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
			- 3rd, **unintended conflict**: Some text editors and IDEs [automatically add the last newline](((616bfc2b-05f2-4a85-a094-dd771aa12cd1))) to editing files, making unintended changes which will conflict with appendage to that file in other commits.
			  id:: ed8333ef-b3b6-4d1b-a5e7-3a2fb4e1b286
				- The conflict will be shown (for resolution) in a very obscure way, due to the difficulty of showing the newline itself.
				  ```git-merge-conflict
				  6: Last line without newline
				  <<<<<<< HEAD
				  7: Appended line by feature-testEOL-1
				  =======
				  >>>>>>> feature-testEOL-2
				  
				  ```
				- There are two options to fix this issue:
					- [Force all IDEs](((67aabd6b-a257-4eb7-8363-3d29035a30f4))) to automatically add the last newline.
					- [Stop Linux editors](((67aacefc-f707-49f4-b33d-ed73f63e3a64))), like `vim`, `nano`, from fixing files missing newline at the end of file.
					  id:: 67aacbe5-f534-4eac-abe8-15f2f8990691
						- This option should be chosen for a project with lots of legacy codes missing the last newline.
			- Commands to refactor codes
			  id:: b8c17a55-f618-43ed-9826-314412a08965
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
				  id:: 577c2916-d4ca-461d-85b9-f3b2ff7e6b30
				  ```sh
				  find .  -regex '.*\(git\|venv\|idea\)' -prune -o \
				    -type f -exec sh -c 'tail -c 1 "$1" | grep -q "^$" && echo "$1"' with-last-newline {} \;
				  ```
	- working tree
	  id:: 67152d29-5cee-475d-a01b-bbc9c9ad3417
	  collapsed:: true
		- glossary: [working tree](https://git-scm.com/docs/gitglossary#Documentation/gitglossary.txt-aiddefworkingtreeaworkingtree), [worktree](https://git-scm.com/docs/gitglossary#Documentation/gitglossary.txt-aiddefworktreeaworktree)
		- multiple working trees per repo
		  id:: 67163453-4d1b-492d-ab06-532cb37e7431
		  `git worktree`
			- Official docs: [Manage multiple working trees](https://git-scm.com/docs/git-worktree)
			- ((6651ecba-793d-43c5-8020-a9f260b032d8)) We can configure many separate ((67152d29-5cee-475d-a01b-bbc9c9ad3417))s as separate ((66723642-58f1-4a74-bba3-0108f14c6bac))s of the same repo, e.g. to checkout and manage different branches with no need to clone the same remote repo into many local repos.
			- Commands
				- ```sh
				  git worktree add ${path_to}/${view} [ ${branch_or_commit} ]
				  git worktree list
				  git worktree remove ${view}
				  git worktree move ${view} ${new_path_to}/${view}
				  ```
			- Structure: one main working tree containing ((67152861-f595-4ad1-88a9-9363082d03eb)), and many linked working trees containing ((67152b95-02b4-473b-a88b-6cbab4b46749)) pointing to `${GIT_DIR}/worktrees/${view}`.
				- worktree
				  = working tree + repository metadata ( ((67152861-f595-4ad1-88a9-9363082d03eb)))
				- Metadata of linked worktree `${view}` includes both its private `${GIT_DIR}/worktrees/${view}` and the `$GIT_COMMON_DIR` which is set to point back to the main worktree’s `$GIT_DIR`.
	- `$GIT_DIR`
	  id:: 67152861-f595-4ad1-88a9-9363082d03eb
	  collapsed:: true
	  `--git-dir`
		- Official docs: [Git Repository Layout](https://git-scm.com/docs/gitrepository-layout)
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) ((67152861-f595-4ad1-88a9-9363082d03eb)) contains the whole Git repo whose current state is the ((67152d29-5cee-475d-a01b-bbc9c9ad3417)). It's default to a folder named `.git` for repo with working tree, or `${repo}.git` for bare repo without working tree, which is by default at the root of the working tree.
			- Non-default `$GIT_DIR` can be specified by env.var. `${GIT_DIR}` or `git --git-dir` argument.
			- ((67152861-f595-4ad1-88a9-9363082d03eb)) can also be a specified indirectly through a ((67152b95-02b4-473b-a88b-6cbab4b46749)). The assignment `GIT_DIR=$gitfile` or `--git-dir=$gitfile` is an abuse of terminology!
	- `gitfile`
	  id:: 67152b95-02b4-473b-a88b-6cbab4b46749
	  collapsed:: true
	  `gitdir: ${external_path}/${GIT_DIR}`
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) ((67152b95-02b4-473b-a88b-6cbab4b46749)) is a file pointing to an external ((67152861-f595-4ad1-88a9-9363082d03eb)) which has default name `.git` and place similar to `$GIT_DIR`. This is a convenient way to **separate** `$GIT_DIR` from ((67152d29-5cee-475d-a01b-bbc9c9ad3417)), so that Git repo will not be affected _even when the whole working tree is cleared up_.
		- Use cases: ((67163453-4d1b-492d-ab06-532cb37e7431)), ((67151eb0-94a3-47bb-a7f9-25561690e75d)), [`.logseq/git/`](((6716110e-3c2b-45e8-99a0-d8263b6a42b2)))
	- nested repository
	  collapsed:: true
		- When adding folder `$subrepo` containing `.git` to another (outer) git repo, its contents cannot be added. Only one *file* `$subrepo` is added as an anchor to the current `HEAD` commit of a nested repo.
		  collapsed:: true
			- warning: `adding embedded git repository: $subrepo`
			  ```
			  hint: You've added another git repository inside your current repository.
			  hint: Clones of the outer repository will not contain the contents of
			  hint: the embedded repository and will not know how to obtain it.
			  hint: If you meant to add a submodule, use:
			  hint:
			  hint:   git submodule add <url> $subrepo
			  hint:
			  hint: If you added this path by mistake, you can remove it from the
			  hint: index with:
			  hint:
			  hint:   git rm --cached $subrepo
			  hint:
			  hint: See "git help submodule" for more information.
			  ```
		- submodule
		  id:: 67151eb0-94a3-47bb-a7f9-25561690e75d
			- Official docs: [7.11 Git Tools - Submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules)
			- The file `$subrepo` is the link between the two commits of the inner & outer repos.
				- It contains a specific commit hash which has been added to the outer repo.
				- This inner repo commit should be chosen to match the current state of the outer repo.
			- The outer repo's `.gitmodules` tracks metadata (path & URL) of the `$subrepo`.
			- Note: A submodule usually use ((67152b95-02b4-473b-a88b-6cbab4b46749)) instead of the normal `.git/` folder, so that the outer repo can `git checkout` a branch that does not have this submodule. That's because the `checkout` has to remove the entire submodule's working tree, without losing the submodule's repo info.
		- nested repo as a normal folder
			- We can workaround by cheating Git.
				- 1st way: Move the `.git` in `$subrepo` away so that Git see `$subrepo` as a normal folder, add this folder, then move its `.git` back.
				  ```sh
				  mv $subrepo/.git $tmp/$subrepo.git
				  git add $subrepo
				  mv $tmp/$subrepo.git $subrepo/.git
				  ```
				- 2nd way: Use the low-level plumbing command
				  ```sh
				  git update-index --add $subrepo
				  ```
			- If `$subrepo` has been accidentally added as a nested repo, it must be removed first
			  ```sh
			  git rm [--cached] $subrepo
			  ```
			- Optionally, `$subrepo/.git` can also be `.gitignore`d by the outer repo. But this is unnecessary: By default, Git ignores all `.git` files/folders, because that's the default name for ((67152861-f595-4ad1-88a9-9363082d03eb)).
			- References:
				- StackOverflow: [Git: forcing `add` when file is in nested git repository](https://stackoverflow.com/questions/70289416/git-forcing-add-when-file-is-in-nested-git-repository)
	- Useful commands (sets)
	  id:: 666022fc-2700-438d-810e-a6fab07f696f
	  collapsed:: true
		- List files changed:
		  `git {diff,show,log} --{name-{only,status},stat}`
			- `--name-status` -> `{A,D,M,R}  file-path [new-file-path]` for {Add, Delete, Modify, Rename}
			- `--stat` -> `[trimmed-]file-path | change-num ++---` with file path trimmed off left side to fit the screen width, and with visually friendly syntax for file rename `{old-dir => new-dir}/{old-filename => new-filename}`.
			- `--word-diff` → `[-removed-]{+added+}` output word-by-word where "word" is defined as `\S+`, i.e. non-space string, which is coarser than the normal word.
			- `--color-words='(\w+|\W+)'` = `--word-diff=color --word-diff-regex='(\w+|\W+)'` to highlight changed words using only colors, without markups like `[-...-]{+...+}`.
				- Use the regex `(\w+|\W+)`, instead of the default (empty)=`\S+`, to separate joined words like `object.field` or comma-separated list like `QP,CI,SK|AA`.
		- History log & blame
			- Linear history of this branch only
			  ```sh
			  git log --first-parent
			  ```
			- Branching (octopus) history
			  ```sh
			  git log --graph
			  ```
			- Find changes in history
			  collapsed:: true
			  ```sh
			  git log -S 'string' [-G 'regex']
			  ```
			- Edit history of lines in a file
			  collapsed:: true
			  ```sh
			  git blame [-L 100,+10]  [Hash0rCommit^] [--] path/to/file.md
			  ```
				- Range with `-L $start`, `-L ,$end`, `-L $start,$end`
					- Both `$start` and `$end` can be a line number or a `/regex/`
					- `$end` can be `+offset` or `-offset`
				- Revision `$rev` can be given to blame edits from that `$rev` up, instead of from now (working directory).
					- Usually we use `$rev^` to find edits *before* `$rev` to trace back the history.
				- Many options for output format: `-s -b -w --date=human -M --color-lines --color-by-age`
		- Push to remote
			- Push another branch, not the current:   
			  ```sh
			  git push ${remote} ${another_branch}
			  ```
			- Force  push
				- Overwrite remote **anyway** (hard force)!
				  ```sh
				  git push --force
				  ```
				- **Safely** overwrite: be sure that no other people did anything to the remote ref.
				  ```sh
				  git push --force-with-lease --force-if-includes
				  ```
		- Force pull
			- To **overwrite** this branch with its upstream,
			  id:: 67af0c5c-996c-4065-9533-0ce9fce905bf
			  ```sh
			  git fetch --all
			  git reset --hard @{u} # shorthand: @{u} = @{upstream}
			  ```
				- Or the “standard combo” 
				  ```shell
				  git restore . # discard any staged changes
				  git pull --force --ff-only ${remote} ${branch}:${branch}
				  ```
					- Warning: `git reset --hard` is so strong that it can overwrite this branch with another *completely separate branch*, i.e. it's a “**hard set**”, not just a “hard ~~re~~set”!
			- To _**overwrite** another branch_ with its upstream, it's shorter with a single command:
			  collapsed:: true
			  ```sh
			  git fetch --force ${remote} ${branch}:${branch}
			  ```
				- Note that this command cannot be applied to the current branch! Use [git pull --force](((67af0c5c-996c-4065-9533-0ce9fce905bf))) instead.
				  ```sh
				  fatal: Refusing to fetch into current branch refs/heads/test_branch of non-bare repository
				  ```
				- Note the target local branch can be a completely different branch, even a new branch, e.g.
				  ```sh
				  git fetch --force ${remote} ${branch}:${other_branch}
				  ```
				- When the remote tracking branch `${remote}/${branch}` is different from the actual `${branch}` on `${remote}` repo, which is the case of remotely `push --force`, there will be 2 updates, e.g.:
				  ```sh
				  git fetch --force origin test_branch:other_branch
				  From github.com:bixycler/GitWorkflows
				   + 2174bba...189e558 test_branch -> other_branch  (forced update)
				     233e5d4..189e558  test_branch -> origin/test_branch
				  ```
					- 1st,`test_branch` on `origin` remote → remote tracking `origin/test_branch`, like the normal `git fetch`
					  ```sh
					     233e5d4..189e558  test_branch -> origin/test_branch
					  ```
					- 2nd, remote tracking `origin/test_branch` → local `heads/other_branch`, like `git reset --hard`
					  ```sh
					   + 2174bba...189e558 test_branch -> other_branch  (forced update)
					  ```
			- To **merge** with upstream even if the remote tracking branch `@{u}` is diverged from the branch on remote repo,
			  collapsed:: true
			  ```sh
			  git pull --force ${remote} ${branch}:${branch}
			  warning: fetch updated the current branch head.
			  fast-forwarding your working tree from
			  commit 2174bba0072daa0dc907f9049b9ecf597d812fb1.
			  fatal: Need to specify how to reconcile divergent branches.
			  ```
				- which is equivalent to (depending on `git config pull`)
				  ```shell
				  git fetch --force ${remote} ${branch}:${branch} # (pseudo-command!) warning: fetch updated the current branch head.
				  #git merge @{u} # when git config pull.rebase false (default)
				  #git rebase @{u} # when git config pull.rebase true
				  # or don't merge nor rebase # when git config pull.ff only
				  ```
		- Merge
			- Merge favoring `ours`/`theirs` over the other side (using default strategy `-s ort`)
			  id:: 666172e6-15fa-412e-a2ba-a32304da6937
			  `git merge -X theirs`, `git merge --strategy-option=theirs`
			- Merge with log & merge commit (without fast-forward):    
			  `git merge --no-ff --log --signoff`  
			  Use this to force a merge commit even if it can be fast-forwarded, and collect all titles of the merged commits into this merge commit message.
			- `merge --squash` = `cherry-pick -m1` to squash a merge into a single commit for linear history.
			  collapsed:: true
				- ![](https://docs.google.com/drawings/d/e/2PACX-1vRAF4K2JU7WT0cMyH1hdoKF8pWmwUgBGvKfEzuBBs1yN3xVkifwo2MuU3cXyZGs7z1zmVtTTFSa6Njx/pub?w=603&h=146)
				- `feature:F> git merge project > m2`: commit `m2` has 2 parents, 1st `F` and 2nd `E`.
				  collapsed:: true
					- History of `feature` does contain the 2 merged commits `D` & `E`, and
					- The changes of `m2` is relative to each parent:
						- relative to 1st parent `F`, changes of `m2` = changes of `D` & `E`
						  id:: 669f711c-67b5-4e6e-94c8-ac64e2bd861b
						- relative to 2st parent `E`, changes of `m2` = changes of `F`
				- `feature:I> git merge --squash project > s2`: commit `s2` has only one parent `I`
					- History of `feature` does not contain the 2 merged commits `G` & `H`
					- The changes of `G` & `H` are included in `s2`.
				- `work> git cherry-pick -m1 m2 > s1`: commit `s1` includes [changes of `F` relative to 1st parent `F`](((669f711c-67b5-4e6e-94c8-ac64e2bd861b)))
			- Merge specific files (interactive checkout)
			  `git checkout --patch ${branch} [--] ${file1}, ${file2}, ...`
				- ((6758f04c-5604-475f-bf81-d9739200e4e6))
		- Selectively add diff hunks (patches):   
		  `git add --patch`  
		  Use this to interactively search for appropriate diff hunks via `/`, then stage them with `y` or skip with `n`, or even manually edit hunks with `e`, and so on.
			- List of commands, as shown in `INTERACTIVE MODE` > `patch` of `git help add`
			  id:: 6758f04c-5604-475f-bf81-d9739200e4e6
			  collapsed:: true
				- `y`: **Yes**, stage this hunk
				- `n`: **No**, do not stage this hunk
				- `q`: **Quit**, do not stage this hunk or any of the remaining ones
				- `a`: stage this hunk and **all** later hunks in the file
				- `d`: **Don't** stage this hunk or any of the later hunks in the file
				- `g`: select a hunk to **go** to
				- `/`: **search** for a hunk matching the given regex
				- `j`: leave this hunk undecided, see **next undecided** hunk
				- `J`: leave this hunk undecided, see **next** hunk
				- `k`: leave this hunk undecided, see **previous undecided** hunk
				- `K`: leave this hunk undecided, see **previous** hunk
				- `s`: **Split** the current hunk into smaller hunks
				- `e`: manually **edit** the current hunk
				- `?`: print **help**
			- Other tools in the Debian package `patchutils`, like `grepdiff`, `filterdiff`.   
			  ```
			  git diff | grepdiff --output-matching=hunk <pattern>
			  git diff | filterdiff --output-matching=hunk <pattern>
			  ```
			  
			  
			  
			  *) Notes:
		- Specifying commits (revisions)
			- `HEAD` = `@`, `[${branchname}]@{upstream,push}` with shorthand `${u}` = `@{upstream}`
			- **refname**: `master`, `heads/master`, `refs/heads/master`, `ogigin/main`, `remotes/ogigin/main`, `remotes/ogigin`, `origin`, `refs/remotes/ogigin/main`, etc.
			- SHA1 hash: short `dae86e`, log `dae86e1950b1277e545cee180551750029cfe735`
			- Ref: [Git docs](https://git-scm.com/docs/revisions/2.42.0)
		- Range of commits (revision range)
			- `${base_exclusive}..${head_inclusive}` means “all commits reachable from `${head_inclusive}` that aren't reachable from `${base_exclusive}`”.
			  collapsed:: true
				- `^${ref}` means "excluding all reachable commits from `${ref}`", hence
				  `${base_exclusive}..${head_inclusive}` means `^${base_exclusive} ${head_inclusive}`
			- `${base_inclusive}~..${head_inclusive}` means roughly "from `${base_exclusive}` to `${head_inclusive}`", and exactly “all commits reachable from `${head_inclusive}` that aren't reachable from  the first parent of `${base_exclusive}`”.
			  collapsed:: true
				- `${ref}~` means the first parent of `${ref}`, just like the option `-m1` in `cherry-pick`.
			- `${head1_inclusive}...${head2_inclusive}` means roughly "between 2 (branching) heads", and exactly "all commits reachable from either head, but not (the common) from both of them".
			- Ref: [Git docs](https://git-scm.com/book/en/v2/Git-Tools-Revision-Selection#_commit_ranges)
			  id:: 66b1cfa5-6161-4074-bd22-077ef848026b
		- Find the common base of branches
			- Between this and upstream
			  ```sh
			  git merge-base HEAD @{u}
			  ```
	- Git workflows
	  id:: 666022fc-eeeb-4365-a854-7e14045655be
	  collapsed:: true
		- ((665f1a5c-6c98-4785-a177-3cd01507595d)) https://github.com/bixycler/GitWorkflows
		- `work`-`feature`-`project` workflow
		  id:: 6686731f-e794-4d7a-8e56-09128b3224b2
		  collapsed:: true
			- ((6651ecba-793d-43c5-8020-a9f260b032d8)) The `work` branch is the working place storing all fine-grained commits, including 3 types of commits: project commits (in cyan) from `project` branch,  feature commits (in blue) to be cherry-picked to `feature` branch, and local commits (in red) for local development environment only. The interactions between these branches are as following:
			  `project` >-[merge --squash]-> `work`  >-[cherry-pick]->  `feature`  <-[rebase/merge]->  `project`
			- ![Workflow: Project-Feature-Work-Store](https://docs.google.com/drawings/d/e/2PACX-1vQhv6u8obu7p4GhPcOhxCZuZ5irV8DROkcdDrUU3Dgwe7jeU5r53nItkhfyYcIcBJMtP0cK1ozPDSgH/pub?w=430)
			- Branches
				- `work` branch
				  is the working branch keeping the full-detail history of all works.
					- Its working commits are kept as small as possible so that we can have fine-grained control of our works.
					- For a clear history, it's kept linear with `merge --squash` and `cherry-pick` instead of `merge`.
					- Use `merge --squash` to get codes from `project`
						- ```sh
						  work> git merge --squash project
						  ```
				- `feature` branch
				  is the middleman to bridge between the linear `work` branch and the octopus `project` branch.
					- For new `feature` branch, `checkout -b` from `project` branch.
						- ```sh
						  project> git checkout -b feature 
						  ```
					- `cherry-pick` feature commits from `work` for merge-request to `project`
					  id:: 66868431-a1d0-4df9-a250-0f8bb7bc1a56
						- ```sh
						  #work> git log # store commits to be cherry-picked, from old to new: ${base_exclusive}..${head_inclusive} ${ref1} ${ref2}
						  work> git checkout feature 
						  feature> git cherry-pick ${base_exclusive}..${head_inclusive} ${ref1} ${ref2}
						  ```
					- `rebase project` (and optionally squash feature commits them down with option `-i`) before creating merge request to `project` branch
					  id:: 669f79cc-08d5-4507-bd72-f8e1af4892d8
						- ```sh
						  feature> git rebase -i project
						  ```
						- Note: on the Merge request page, there's an option "Squash commits", but it's better to squash before hand with `rebase -i`.
				- `store` branch
				  is an optional branch to store coarse-grained commits of `work` branch corresponding to merge requests to `project`.
					- Whenever a [merge request](((669f79cc-08d5-4507-bd72-f8e1af4892d8))) is created, the corresponding chunk of `work` commits should be stored to `store` branch via a `merge --no-ff --log`.
						- ```sh
						  store> git merge --no-ff --log work
						  ```
						- This command can be stored as alias in `~/.gitconfig`.
							- ```ini
							  [alias]
							      mergel = merge --no-ff --log
							  ```
		- Revise commits from downstream (local, personal) to upstream (remote, redmine, project)
		  collapsed:: true
			- In case of only 1 commit to upstream: (for redmine)
				- ```shell
				  downstream> git checkout upstream
				  upstream> git pull # make sure it's updated
				  upstream> git merge --squash --strategy-option=theirs downstream
				  #... remove all except changes for the commit to upstream (git restore, git checkout HEAD, git rm, git clean)
				  upstream> git commit -sm "commit from downstream"
				  upstream> git push
				  ```
			- In case of many commits to upstream: (for project)
				- id:: 66b1cfa5-1ec8-4313-b635-2b22d705d19f
				  ```shell
				  downstream> git checkout upstream
				  upstream> git pull # make sure it's updated
				  upstream> git merge --squash --strategy-option=theirs downstream
				  upstream> git stash push -u # save downstream's changes 
				  upstream> git checkout stash -- .
				  #... remove all except changes for the 1st commit (git restore, git checkout HEAD, git rm, git clean)
				  upstream> git commit -sm "1st commit"
				  upstream> git checkout stash -- .
				  #... remove all except changes for the 2nd commit (git restore, git checkout HEAD, git rm, git clean)
				  upstream> git commit -sm "2nd commit"
				  #...
				  ```
			- Notes: Use `git checkout stash -- .` instead of `git stash apply` to overwrite current workdir
			  collapsed:: true
				- Ref: https://stackoverflow.com/a/16625128/789095
	- Troubleshooting
	  id:: 66fd1d03-f0d8-41b6-ba5e-7f040d343e33
	  collapsed:: true
		- Env.var.
		  ```sh
		  GIT_SSH_COMMAND="ssh -vvv" GIT_TRACE=2 GIT_CURL_VERBOSE=1 git push
		  ```
		- Config.var.
			- `.git/config` or `~/.gitconfig`
			  collapsed:: true
			  ```ini
			  [core]
			      sshCommand = "ssh -v 2>/home/dinhlx/tmp/ssh.log"
			  [trace2]
			      normalTarget = /home/dinhlx/tmp/git.trace.log
			  ```
				- or `~/.ssh/config`
				  ```
				  Host github.com
				      LogLevel DEBUG3
				  ```
			- command option `-c`, `--config-env`
			  ```sh
			  git -c core.sshCommand="ssh -vvv" push
			  git --config-env=core.sshCommand="ssh -vvv" push
			  ```
		- `fsck` to check dangling commits, dangling objects, when the repo is corrupt.
		  id:: 6808b9c5-402d-4923-997b-7b8056f71dc8
		  :LOGBOOK:
		  CLOCK: [2025-04-23 Wed 16:58:38]
		  :END:
			- Error messages: `fatal: bad object HEAD` or `fatal: loose object 041c7dfc... (stored in .git/objects/04/1c7dfc...) is corrupt`
			- `git fsck --full --no-reflogs | grep "dangling commit" > dangling_commits.txt`
			- ![check-dangling_commits.sh](../assets/Will/story/2025-04/UniinfoNotes-git-recovery/check-dangling_commits.sh): extract dangling commit messages and sort by date time.
			- Get the last commit `$hash`, then `git reset --hard $hash`
			- The reamaining dangling commits & blobs can be cleaned up with `git gc --prune=now`.
		- References
			- Git Internals - [Environment Variables](https://git-scm.com/book/en/v2/Git-Internals-Environment-Variables)
			- Git config - [Variables](https://git-scm.com/docs/git-config#_variables)
			  id:: 66fa6b26-2c9a-43d6-9856-18321672d800
			- GitLab's [Troubleshooting Git](https://docs.gitlab.com/ee/topics/git/troubleshooting_git.html)
			- [Really verbose way to test Git connection over SSH?](https://askubuntu.com/questions/336907/really-verbose-way-to-test-git-connection-over-ssh)
	- Known issues
	  collapsed:: true
		- ⚠️ GitLab automatic merge conflict resolution just creates a **reverse merge** commit in the source branch before merging to the target brance.
		  ⇒ Don't let GitLab resolve conflict!