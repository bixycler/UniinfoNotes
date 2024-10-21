## Git
id:: 666ba1e2-19d1-409e-b30e-42a99b7e4ec0
	- ((665359c3-61fd-4858-a117-ecbcd6fbc9ea)) https://www.git-scm.com/
	- ((6651ecba-793d-43c5-8020-a9f260b032d8)) ((666ba1e2-19d1-409e-b30e-42a99b7e4ec0)) is a [free and open source](https://www.git-scm.com/about/free-and-open-source) distributed version control system (VCS), which is now the most popular VCS in the world.
	- ((665359ff-79f1-4669-b10b-f2b0e633a7c1))
	  collapsed:: true
		- File link: symbolic link (symlink) is supported by ((666ba1e2-19d1-409e-b30e-42a99b7e4ec0)) but hard link is not.
			- Symlink has portability problem between Linux and Windows.
				- [From Windows 10+, symlink can be used](https://blogs.windows.com/windowsdeveloper/2016/12/02/symlinks-windows-10/) when Developer mode is turned on.
			- Hard link is not support (will be broken when ((666ba1e2-19d1-409e-b30e-42a99b7e4ec0)) overwrites the link file), but ((666ba1e2-19d1-409e-b30e-42a99b7e4ec0)) will let the hard link live as long as we don't do any write operation on that link file, e.g. `pull`, `checkout`, `reset`, etc.
			  id:: 666ba5a7-598a-4b66-86bd-b1622a28ada6
	- working tree
	  id:: 67152d29-5cee-475d-a01b-bbc9c9ad3417
	  collapsed:: true
		- glossary: [working tree](https://git-scm.com/docs/gitglossary#Documentation/gitglossary.txt-aiddefworkingtreeaworkingtree), [worktree](https://git-scm.com/docs/gitglossary#Documentation/gitglossary.txt-aiddefworktreeaworktree)
	- `$GIT_DIR`
	  id:: 67152861-f595-4ad1-88a9-9363082d03eb
	  collapsed:: true
	  `--git-dir`
		- Official docs: [Git Repository Layout](https://git-scm.com/docs/gitrepository-layout)
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) ((67152861-f595-4ad1-88a9-9363082d03eb)) contains the whole Git repo whose current state is the ((67152d29-5cee-475d-a01b-bbc9c9ad3417)). It's default to a folder named `.git` for repo with working tree, or `${repo}.git` for bare repo without working tree, which is by default at the root of the working tree.
			- Non-default `$GIT_DIR` can be specified by env.var. `${GIT_DIR}` or `git --git-dir` argument.
			- ((67152861-f595-4ad1-88a9-9363082d03eb)) can also be a ((67152b95-02b4-473b-a88b-6cbab4b46749)). This assignment `GIT_DIR=$gitfile` or `--git-dir=$gitfile` is an abuse of terminology!
	- `gitfile`
	  id:: 67152b95-02b4-473b-a88b-6cbab4b46749
	  collapsed:: true
	  `gitdir: ${external_path}/${GIT_DIR}`
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) ((67152b95-02b4-473b-a88b-6cbab4b46749)) is a file pointing to an external ((67152861-f595-4ad1-88a9-9363082d03eb)) which has default name `.git` and place similar to `$GIT_DIR`. This is a convenient way to **separate** `$GIT_DIR` from ((67152d29-5cee-475d-a01b-bbc9c9ad3417)), so that Git repo will not be affected _even when the whole working tree is cleared up_.
		- Use cases: ((67151eb0-94a3-47bb-a7f9-25561690e75d)), `.logseq/git/`
		- Using `gitfile`, we can configure many separate working trees as separate ((66723642-58f1-4a74-bba3-0108f14c6bac))s of the same repo, e.g. to checkout and manage different branches with no need to clone the same remote repo into many local repos.
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
			- References:
				- StackOverflow: [Git: forcing `add` when file is in nested git repository](https://stackoverflow.com/questions/70289416/git-forcing-add-when-file-is-in-nested-git-repository)
	- Useful commands (sets)
	  id:: 666022fc-2700-438d-810e-a6fab07f696f
	  collapsed:: true
		- List files changed:
		  `git {diff,show,log} --{name-{only,status},stat}`
			- `--name-status` -> `{A,D,M,R}  file-path [new-file-path]` for {Add, Delete, Modify, Rename}
			- `--stat` -> `[trimmed-]file-path | change-num ++---` with file path trimmed off left side to fit the screen width, and with visually friendly syntax for file rename `{old-dir => new-dir}/{old-filename => new-filename}`.
		- Log history
			- Linear history of this branch only
			  ```sh
			  git log --first-parent
			  ```
			- Branching (octopus) history
			  ```sh
			  git log --graph
			  ```
		- Push another branch, not the current:   
		  `git push <repo> <another_branch>`
		- Force pull: To overwrite this branch with its upstream, from the common base, don't use the misleading `git pull --force` because it's only [`git fetch --force`](https://www.freecodecamp.org/news/git-pull-force-how-to-overwrite-local-changes-with-git/#the-other-git-pull-force).  
		  Use this: (put them all into an alias) 
		  ```shell
		  git fetch --all
		  git reset --hard $(git merge-base HEAD @{u})
		  git merge @{u}
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
		- Selectively add diff hunks (patches):   
		  `git add --patch`  
		  Use this to interactively search for appropriate diff hunks via `/`, then stage them with `y` or skip with `n`, or even manually edit hunks with `e`, and so on.
			- Other tools in the Debian package `patchutils`, like `grepdiff`, `filterdiff`.   
			  ```
			  git diff | grepdiff --output-matching=hunk <pattern>
			  git diff | filterdiff --output-matching=hunk <pattern>
			  ```
			  
			  
			  
			  *) Notes:
		- Range of commits
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
		- References
			- Git Internals - [Environment Variables](https://git-scm.com/book/en/v2/Git-Internals-Environment-Variables)
			- Git config - [Variables](https://git-scm.com/docs/git-config#_variables)
			  id:: 66fa6b26-2c9a-43d6-9856-18321672d800
			- GitLab's [Troubleshooting Git](https://docs.gitlab.com/ee/topics/git/troubleshooting_git.html)
			- [Really verbose way to test Git connection over SSH?](https://askubuntu.com/questions/336907/really-verbose-way-to-test-git-connection-over-ssh)