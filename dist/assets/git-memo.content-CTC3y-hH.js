import{E as e,F as t,q as n,w as r}from"./vue.runtime.esm-bundler-DZZTqpJU.js";t();var i={class:`markdown-body`},a={__name:`git-memo.content`,setup(t,{expose:a}){return a({frontmatter:{}}),(t,a)=>(n(),r(`div`,i,[...a[0]||=[e(`<p><strong>Git</strong> is a distributed version control system: every clone is a full repository with its own history, branches and tags. This is a quick reference for the commands that come up daily — placeholders are written as <code>&lt;file&gt;</code>, <code>&lt;branch&gt;</code>, <code>&lt;commit&gt;</code> and <code>&lt;url&gt;</code>.</p><blockquote><p>💡 Every command below has its own help (<code>git rebase --help</code>), and the destructive ones (<code>clean</code>, <code>push</code>, <code>rm</code>, <code>mv</code>) take <code>-n</code> / <code>--dry-run</code> to preview what would happen.</p></blockquote><h2>⚙️ Configuration</h2><pre><code class="language-bash"># identity used on every commit
git config --global user.name &quot;&lt;name&gt;&quot;
git config --global user.email &quot;&lt;email&gt;&quot;

# name of the branch created by git init
git config --global init.defaultBranch main

# editor for messages, rebases, ...
git config --global core.editor &quot;code --wait&quot;

# rebase instead of merging on pull
git config --global pull.rebase true

# plain &#39;git push&#39; works on new branches
git config --global push.autoSetupRemote true

# every setting and the file it came from
git config --list --show-origin

# override for this repository only
git config --local user.email &quot;&lt;work-email&gt;&quot;
</code></pre><p>Handy aliases:</p><pre><code class="language-bash">git config --global alias.st status

git config --global alias.co checkout

git config --global alias.lg &quot;log --oneline --graph --decorate --all&quot;

git config --global alias.last &quot;log -1 --stat&quot;
</code></pre><h2>🚀 Get Started</h2><pre><code class="language-bash"># create a repository in the current directory
git init

# clone a remote repository
git clone &lt;url&gt;

# clone into a specific directory
git clone &lt;url&gt; &lt;directory&gt;

# clone and check out one branch
git clone --branch &lt;branch&gt; &lt;url&gt;

# shallow clone, latest commit only
git clone --depth 1 &lt;url&gt;

# clone including submodules
git clone --recurse-submodules &lt;url&gt;

# what is staged, changed, untracked
git status

# the same, in short format
git status -sb
</code></pre><h2>➕ Staging</h2><pre><code class="language-bash"># stage a specific file
git add &lt;file&gt;

# stage everything under the current directory
git add .

# stage everything in the repository, deletions included
git add -A

# interactively stage individual hunks
git add -p &lt;file&gt;

# stage modifications and deletions, not new files
git add -u

# unstage, keep the changes in the working tree
git restore --staged &lt;file&gt;

# stop tracking a file, keep it on disk
git rm --cached &lt;file&gt;

# rename and stage in one step
git mv &lt;old&gt; &lt;new&gt;

# which .gitignore rule is hiding this file?
git check-ignore -v &lt;file&gt;
</code></pre><h2>✅ Commit</h2><pre><code class="language-bash"># commit what is staged
git commit -m &quot;&lt;message&gt;&quot;

# stage tracked changes and commit
git commit -am &quot;&lt;message&gt;&quot;

# rewrite the last commit (message + content)
git commit --amend

# amend without changing the message
git commit --amend --no-edit

# fixup commit, squashed later by --autosquash
git commit --fixup &lt;commit&gt;

# add a Signed-off-by trailer
git commit -s -m &quot;&lt;message&gt;&quot;

# empty commit, e.g. to trigger CI
git commit --allow-empty -m &quot;&lt;message&gt;&quot;
</code></pre><blockquote><p>⚠️ <code>--amend</code> rewrites history. Only amend commits that have not been pushed to a shared branch.</p></blockquote><h2>🌿 Branches</h2><pre><code class="language-bash"># list local branches
git branch

# local and remote-tracking branches
git branch -a

# last commit and upstream of each branch
git branch -vv

# switch to an existing branch
git switch &lt;branch&gt;

# create a branch and switch to it
git switch -c &lt;branch&gt;

# jump back to the previous branch
git switch -

# older equivalent of switch -c
git checkout -b &lt;branch&gt;

# branch off a specific commit or tag
git switch -c &lt;branch&gt; &lt;commit&gt;

# rename a branch
git branch -m &lt;old&gt; &lt;new&gt;

# delete a merged branch
git branch -d &lt;branch&gt;

# force-delete an unmerged branch
git branch -D &lt;branch&gt;

# branches already merged into HEAD (safe to delete)
git branch --merged
</code></pre><h2>🔀 Merging &amp; Rebasing</h2><pre><code class="language-bash"># merge a branch into the current one
git merge &lt;branch&gt;

# always create a merge commit
git merge --no-ff &lt;branch&gt;

# bring in the changes as one staged change set
git merge --squash &lt;branch&gt;

# bail out of a conflicted merge
git merge --abort

# replay the current branch on top of another
git rebase &lt;branch&gt;

# interactively squash, reword, drop, reorder commits
git rebase -i HEAD~5

# apply the --fixup commits automatically
git rebase -i --autosquash &lt;base&gt;

# resume after resolving conflicts
git rebase --continue

# drop the conflicting commit and continue
git rebase --skip

# return to the state before the rebase
git rebase --abort

# resolve conflicts with the configured merge tool
git mergetool
</code></pre><p>Resolving a conflict:</p><pre><code class="language-bash"># 1. see which files conflict
git status

# 2. edit them and remove the &lt;&lt;&lt;&lt;&lt;&lt;&lt; ======= &gt;&gt;&gt;&gt;&gt;&gt;&gt; markers

# 3. mark each resolved file
git add &lt;file&gt;

# 4. resume (during a merge: git merge --continue)
git rebase --continue
</code></pre><blockquote><p>⚠️ Rebasing rewrites commits. Never rebase a branch other people are already working on.</p></blockquote><h2>🌍 Remotes &amp; Syncing</h2><pre><code class="language-bash"># list remotes and their URLs
git remote -v

# add a remote
git remote add origin &lt;url&gt;

# point a remote somewhere else
git remote set-url origin &lt;url&gt;

# rename a remote
git remote rename &lt;old&gt; &lt;new&gt;

# forget a remote
git remote remove &lt;name&gt;

# download objects and refs, change nothing
git fetch origin

# fetch everything, drop deleted remote branches
git fetch --all --prune

# fetch + merge (or rebase) the upstream branch
git pull

# replay local commits on top of the upstream
git pull --rebase

# push the current branch
git push

# push and set the upstream tracking branch
git push -u origin &lt;branch&gt;

# force-push, but refuse to clobber new commits
git push --force-with-lease

# delete a remote branch
git push origin --delete &lt;branch&gt;

# push all tags
git push origin --tags
</code></pre><blockquote><p>⚠️ Prefer <code>--force-with-lease</code> over <code>--force</code>: it aborts if someone else pushed in the meantime.</p></blockquote><h2>📦 Stashing</h2><pre><code class="language-bash"># shelve tracked changes and clean the working tree
git stash

# include untracked files
git stash -u

# stash specific paths with a label
git stash push -m &quot;&lt;message&gt;&quot; &lt;file&gt;

# list every stash
git stash list

# show a stash as a patch
git stash show -p stash@{0}

# re-apply the newest stash and drop it
git stash pop

# re-apply a specific stash, keep it in the list
git stash apply stash@{2}

# create a branch from a stash and apply it
git stash branch &lt;branch&gt;

# delete one stash
git stash drop stash@{0}

# delete all stashes
git stash clear
</code></pre><h2>🔍 Inspecting</h2><pre><code class="language-bash"># the whole history as a compact graph
git log --oneline --graph --decorate --all

# history of a file, with diffs
git log -p &lt;file&gt;

# history of a file, following renames
git log --follow &lt;file&gt;

# filter by date and author
git log --since=&quot;2 weeks ago&quot; --author=&lt;name&gt;

# search commit messages
git log --grep=&quot;&lt;pattern&gt;&quot;

# commits that added or removed a string
git log -S&quot;&lt;string&gt;&quot;

# commits in b that are not in a
git log &lt;branch-a&gt;..&lt;branch-b&gt;

# commit count per author
git shortlog -sn

# a single commit with its diff
git show &lt;commit&gt;

# working tree vs. index
git diff

# index vs. last commit
git diff --staged

# between two commits
git diff HEAD~1 HEAD

# changes since the branches diverged
git diff &lt;branch-a&gt;...&lt;branch-b&gt;

# summary of changed files
git diff --stat

# who last touched every line
git blame &lt;file&gt;

# blame a range of lines only
git blame -L 10,40 &lt;file&gt;

# search the tracked files
git grep &quot;&lt;pattern&gt;&quot;

# every position HEAD has had — your safety net
git reflog
</code></pre><h2>🍒 Cherry-pick</h2><pre><code class="language-bash"># apply one commit onto the current branch
git cherry-pick &lt;commit&gt;

# apply a range of commits
git cherry-pick &lt;commit-a&gt;^..&lt;commit-b&gt;

# apply without committing
git cherry-pick -n &lt;commit&gt;

# after resolving conflicts
git cherry-pick --continue

# undo the whole cherry-pick
git cherry-pick --abort
</code></pre><h2>🏷 Tags</h2><pre><code class="language-bash"># list tags
git tag

# list matching tags
git tag -l &quot;v1.*&quot;

# annotated tag on HEAD
git tag -a v1.0.0 -m &quot;Release v1.0.0&quot;

# tag an older commit
git tag -a v1.0.0 &lt;commit&gt;

# show a tag and its commit
git show v1.0.0

# push one tag
git push origin v1.0.0

# push all tags
git push origin --tags

# delete a local tag
git tag -d v1.0.0

# delete a remote tag
git push origin --delete v1.0.0

# closest tag to the current commit
git describe --tags
</code></pre><h2>🧯 I’ve Made a Mistake</h2><pre><code class="language-bash"># fix the last commit message
git commit --amend

# undo the last commit, keep the changes unstaged
git reset HEAD~1

# undo the last n commits, keep the changes
git reset HEAD~&lt;n&gt;

# undo the last commit and throw the changes away
git reset --hard HEAD~1

# discard changes to one file
git restore &lt;file&gt;

# discard every uncommitted change
git restore .

# restore a file as it was at a commit
git restore --source=&lt;commit&gt; &lt;file&gt;

# undo a commit with a new commit (safe when shared)
git revert &lt;commit&gt;

# stage the revert without committing
git revert -n &lt;commit&gt;

# make the local branch match the remote (fetch first)
git reset --hard origin/&lt;branch&gt;

# find the lost commit...
git reflog

# bring a lost commit back on a new branch
git switch -c &lt;branch&gt; &lt;commit&gt;
</code></pre><p><code>git reset</code> modes at a glance:</p><table><thead><tr><th>Mode</th><th>Moves <code>HEAD</code></th><th>Index (staging)</th><th>Working tree</th><th>Use it to</th></tr></thead><tbody><tr><td><code>--soft</code></td><td>✅</td><td>untouched</td><td>untouched</td><td>Recommit differently, keep everything staged</td></tr><tr><td><code>--mixed</code></td><td>✅</td><td>reset</td><td>untouched</td><td>Unstage but keep the edits (default)</td></tr><tr><td><code>--hard</code></td><td>✅</td><td>reset</td><td><strong>reset</strong></td><td>Throw the changes away entirely ⚠️</td></tr></tbody></table><blockquote><p>💡 Nothing committed is really lost for ~90 days: <code>git reflog</code> lists every commit <code>HEAD</code> pointed at, even on deleted branches.</p></blockquote><h2>🧹 Cleaning</h2><pre><code class="language-bash"># dry run: what would be removed
git clean -n

# remove untracked files and directories
git clean -fd

# also remove ignored files (build output, node_modules)
git clean -fdx

# compress and tidy the object database
git gc

# drop unreachable objects
git prune

# check the repository for corruption
git fsck
</code></pre><h2>🐛 Debugging</h2><pre><code class="language-bash"># begin a binary search for a bad commit
git bisect start

# a commit that is broken (often HEAD)
git bisect bad &lt;commit&gt;

# a commit that was fine
git bisect good &lt;commit&gt;

# let a test script decide automatically
git bisect run &lt;command&gt;

# end the search and return to the original HEAD
git bisect reset

# follow lines moved from other files
git blame -C &lt;file&gt;
</code></pre><h2>🧩 Submodules &amp; Worktrees</h2><pre><code class="language-bash"># add a submodule
git submodule add &lt;url&gt; &lt;path&gt;

# check out every submodule
git submodule update --init --recursive

# update submodules to their latest commit
git submodule update --remote

# commit each submodule sits on
git submodule status

# check out a second branch side by side
git worktree add ../&lt;dir&gt; &lt;branch&gt;

# list linked working trees
git worktree list

# remove one again
git worktree remove ../&lt;dir&gt;
</code></pre><h2>🧠 Miscellaneous</h2><pre><code class="language-bash"># rename the local default branch
git branch -m master main

# graph of merge commits only
git log --graph --merges

# export a snapshot without .git
git archive -o release.zip HEAD

# contributions per author
git shortlog -sn --no-merges

# full SHA of the current commit
git rev-parse HEAD

# name of the current branch
git rev-parse --abbrev-ref HEAD

# repository size on disk
git count-objects -vH

# enable background repacking (Git 2.30+)
git maintenance start
</code></pre><p>Update a feature branch with the latest mainline:</p><pre><code class="language-bash">git switch &lt;branch&gt;
git fetch origin &lt;main-branch&gt;
git rebase origin/&lt;main-branch&gt;   # or: git merge origin/&lt;main-branch&gt;
</code></pre><h2>📚 Resources</h2><ul><li><a href="https://git-scm.com/docs">Official documentation</a></li><li><a href="https://git-scm.com/book">Pro Git (free book)</a></li><li><a href="https://learngitbranching.js.org">Interactive branching tutorial</a></li><li><a href="https://dangitgit.com">Dangit, Git!?!</a> — recovering from the classic mistakes</li></ul>`,48)]]))}};export{a as default};