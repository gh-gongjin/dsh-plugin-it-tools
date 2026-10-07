import{E as e,F as t,q as n,w as r}from"./vue.runtime.esm-bundler-DZZTqpJU.js";t();var i={class:`markdown-body`},a={__name:`git-memo.content.zh`,setup(t,{expose:a}){return a({frontmatter:{}}),(t,a)=>(n(),r(`div`,i,[...a[0]||=[e(`<h2>配置</h2><p>设置全局配置</p><pre><code class="language-shell">git config --global user.name &quot;[name]&quot;
git config --global user.email &quot;[email]&quot;
</code></pre><h2>入门</h2><p>创建 git 仓库</p><pre><code class="language-shell">git init
</code></pre><p>拉取 git 仓库</p><pre><code class="language-shell">git pull [url]
</code></pre><p>克隆现有 git 仓库</p><pre><code class="language-shell">git clone [url]
</code></pre><h2>暂存</h2><p>暂存指定文件</p><pre><code class="language-shell">git add [file]
</code></pre><p>暂存所有更改</p><pre><code class="language-shell">git add .
</code></pre><p>交互式暂存文件的部分内容（代码块）</p><pre><code class="language-shell">git add -p [file]
</code></pre><p>取消暂存文件但保留更改</p><pre><code class="language-shell">git restore --staged [file]
</code></pre><h2>提交</h2><p>提交所有已跟踪的更改</p><pre><code class="language-shell">git commit -am &quot;[commit message]&quot;
</code></pre><p>将新修改追加到上一次提交</p><pre><code class="language-shell">git commit --amend --no-edit
</code></pre><h2>分支</h2><p>列出仓库中所有本地分支（使用 -a 可查看本地和远程分支）</p><pre><code class="language-shell">git branch
</code></pre><p>切换到已有分支</p><pre><code class="language-shell">git switch [branch name]
</code></pre><p>创建新分支</p><pre><code class="language-shell">git checkout -b [branch name]
</code></pre><h2>储藏</h2><p>保存未提交的更改以备后用</p><pre><code class="language-shell">git stash
</code></pre><p>列出所有储藏</p><pre><code class="language-shell">git stash list
</code></pre><p>应用最近的储藏并将其从列表中移除</p><pre><code class="language-shell">git stash pop
</code></pre><p>应用指定储藏但不移除</p><pre><code class="language-shell">git stash apply stash@{2}
</code></pre><h2>检查</h2><p>显示工作目录与暂存区之间的差异</p><pre><code class="language-shell">git diff
</code></pre><p>显示暂存区与上次提交之间的差异</p><pre><code class="language-shell">git diff --staged
</code></pre><p>显示指定文件的提交历史</p><pre><code class="language-shell">git log --follow [file]
</code></pre><p>显示文件中每一行的修改者</p><pre><code class="language-shell">git blame [file]
</code></pre><h2>远程</h2><p>添加远程仓库</p><pre><code class="language-shell">git remote add origin [url]
</code></pre><p>列出远程仓库</p><pre><code class="language-shell">git remote -v
</code></pre><p>推送分支并设置上游跟踪</p><pre><code class="language-shell">git push -u origin [branch-name]
</code></pre><p>删除远程分支</p><pre><code class="language-shell">git push origin --delete [branch-name]
</code></pre><h2>标签</h2><p>创建带标签的发布版本</p><pre><code class="language-shell">git tag -a v1.0.0 -m &quot;Release v1.0.0&quot;
</code></pre><p>推送标签到远程</p><pre><code class="language-shell">git push origin --tags
</code></pre><h2>我搞砸了</h2><p>修改上次提交信息</p><pre><code class="language-shell">git commit --amend
</code></pre><p>撤销最近一次提交并保留更改</p><pre><code class="language-shell">git reset HEAD~1
</code></pre><p>撤销最近 <code>N</code> 次提交并保留更改</p><pre><code class="language-shell">git reset HEAD~N
</code></pre><p>撤销最近一次提交并丢弃更改</p><pre><code class="language-shell">git reset HEAD~1 --hard
</code></pre><p>将分支重置为远程状态</p><pre><code class="language-shell">git fetch origin
git reset --hard origin/[branch-name]
</code></pre><p>通过创建新的反向提交来还原某次提交（适用于共享分支）</p><pre><code class="language-shell">git revert [commit-hash]
</code></pre><p>丢弃工作目录中所有未提交的更改</p><pre><code class="language-shell">git restore .
</code></pre><p>恢复已删除的分支或丢失的提交</p><pre><code class="language-shell">git reflog
git checkout -b [branch-name] [commit-hash]
</code></pre><h2>拣选</h2><p>从其他分支应用指定提交</p><pre><code class="language-shell">git cherry-pick [commit-hash]
</code></pre><h2>清理</h2><p>删除未跟踪文件（先预览）</p><pre><code class="language-shell">git clean -n
</code></pre><p>删除未跟踪文件和目录</p><pre><code class="language-shell">git clean -fd
</code></pre><h2>其他</h2><p>将本地 master 分支重命名为 main</p><pre><code class="language-shell">git branch -m master main
</code></pre><p>查看日志图</p><pre><code class="language-shell">git log --graph
</code></pre><p>查看日志图（仅合并提交）</p><pre><code class="language-shell">git log --graph --merges
</code></pre><p>使用二分查找定位问题提交</p><pre><code class="language-shell">git bisect start
git bisect good 13c988d4f15e06bcdd0b0af290086a3079cdadb0
git bisect bad ca82a6dff817ec66f44342007202690a93763949
</code></pre><p>从主分支拉取新更改到当前分支</p><pre><code class="language-shell">git checkout [branch-name]
git fetch origin [master-branch-name]
git rebase origin/[master-branch-name]
</code></pre>`,99)]]))}};export{a as default};