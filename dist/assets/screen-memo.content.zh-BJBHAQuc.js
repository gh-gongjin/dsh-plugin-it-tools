import{E as e,F as t,q as n,w as r}from"./vue.runtime.esm-bundler-DZZTqpJU.js";t();var i={class:`markdown-body`},a={__name:`screen-memo.content.zh`,setup(t,{expose:a}){return a({frontmatter:{}}),(t,a)=>(n(),r(`div`,i,[...a[0]||=[e(`<h1>🖥️ GNU Screen 命令速查表</h1><p>GNU Screen 是一款终端多路复用器，让你可以在单个终端窗口中运行多个 shell 会话，可以脱离会话并在稍后重新连接。</p><h2>📦 启动与管理 Screen 会话</h2><ul><li><strong>启动新会话</strong><pre><code class="language-bash">screen
</code></pre></li><li><strong>以指定名称启动会话</strong><pre><code class="language-bash">screen -S session_name
</code></pre></li><li><strong>列出正在运行的会话</strong><pre><code class="language-bash">screen -ls
</code></pre></li><li><strong>连接到会话</strong><pre><code class="language-bash">screen -r session_name
</code></pre></li><li><strong>连接到上一个脱离的会话</strong><pre><code class="language-bash">screen -r
</code></pre></li><li><strong>终止会话</strong><pre><code class="language-bash">screen -X -S session_name quit
</code></pre></li></ul><h2>⌨️ 基本按键绑定</h2><blockquote><p>默认前缀键：<code>Ctrl-a</code>（在其他按键之前按下）</p></blockquote><p>| 按键绑定 | 操作 | | ------------- | -------------------------- | ------------ | | <code>Ctrl-a c</code> | 创建新窗口 | | <code>Ctrl-a n</code> | 下一个窗口 | | <code>Ctrl-a p</code> | 上一个窗口 | | <code>Ctrl-a &quot;</code> | 列出所有窗口 | | <code>Ctrl-a 0..9</code> | 按编号切换到窗口 | | <code>Ctrl-a A</code> | 重命名当前窗口 | | <code>Ctrl-a d</code> | 脱离会话 | | <code>Ctrl-a ?</code> | 帮助（显示按键绑定） | | <code>Ctrl-a k</code> | 关闭当前窗口 | | <code>Ctrl-a \\</code> | 关闭所有窗口并退出 screen | | <code>Ctrl-a x</code> | 锁定屏幕 | | <code>Ctrl-a S</code> | 水平分割屏幕 | | <code>Ctrl-a | </code> | 垂直分割屏幕 | | <code>Ctrl-a tab</code> | 在区域间切换焦点 | | <code>Ctrl-a Q</code> | 关闭除当前区域外的所有区域 |</p><h2>🔀 窗口与区域管理</h2><ul><li><strong>水平分割</strong><pre><code class="language-bash">Ctrl-a S
</code></pre></li><li><strong>垂直分割</strong><pre><code class="language-bash">Ctrl-a |
</code></pre></li><li><strong>切换区域焦点</strong><pre><code class="language-bash">Ctrl-a tab
</code></pre></li><li><strong>移除除当前区域外的所有分割</strong><pre><code class="language-bash">Ctrl-a Q
</code></pre></li></ul><h2>📂 会话持久化</h2><ul><li><strong>脱离会话（保持在后台运行）</strong><pre><code class="language-bash">Ctrl-a d
</code></pre></li><li><strong>重新连接会话</strong><pre><code class="language-bash">screen -r session_name
</code></pre></li></ul><h2>⚙️ 配置</h2><ul><li><strong>默认配置文件：</strong> <code>~/.screenrc</code></li><li>示例 <code>.screenrc</code>：<pre><code class="language-bash"># 启动时关闭启动信息
startup_message off
defscrollback 5000
hardstatus alwayslastline
hardstatus string &#39;%{= kG}[%H] %{= kw}%?%-Lw%?%{= kR}%n*%f %t%?(%u)%?%{= kw}%?%+Lw%? %{= kG}[%H]&#39;
</code></pre></li></ul><h2>🛠️ 实用选项</h2><ul><li><strong>设置回滚缓冲区大小</strong><pre><code class="language-bash">screen -h 5000
</code></pre></li><li><strong>在新 screen 中执行命令</strong><pre><code class="language-bash">screen -dmS session_name command
</code></pre></li><li><strong>记录输出</strong><pre><code class="language-bash">Ctrl-a H
</code></pre> （在当前窗口中切换日志记录）</li></ul><h2>🚪 退出 Screen</h2><ul><li><strong>关闭当前窗口</strong><pre><code class="language-bash">Ctrl-a k
</code></pre></li><li><strong>关闭所有窗口并退出</strong><pre><code class="language-bash">Ctrl-a \\
</code></pre></li><li><strong>正常退出</strong><ul><li>关闭窗口中的所有程序，然后输入 <code>exit</code>。</li></ul></li></ul><h2>🧠 提示</h2><ul><li>使用<strong>命名会话</strong>（<code>screen -S</code>）以避免混淆。</li><li>结合 <strong>SSH</strong> 使用，可在断开连接后保持远程任务运行。</li><li>使用 <code>.screenrc</code> 自定义行为和状态栏。</li></ul>`,19)]]))}};export{a as default};