import{E as e,F as t,q as n,w as r}from"./vue.runtime.esm-bundler-DZZTqpJU.js";t();var i={class:`markdown-body`},a={__name:`tmux-memo.content`,setup(t,{expose:a}){return a({frontmatter:{}}),(t,a)=>(n(),r(`div`,i,[...a[0]||=[e(`<p><strong>tmux</strong> is a terminal multiplexer: it keeps shell sessions alive on the server, splits one terminal into windows and panes, and lets you detach and reattach without losing anything.</p><blockquote><p>ℹ️ Almost every shortcut starts with the <strong>prefix</strong>, <code>Ctrl+b</code> by default: press the prefix, release it, then press the key. In the tables below <code>Ctrl+b c</code> means “prefix, then <code>c</code>”.</p></blockquote><h2>🚀 Sessions from the Shell</h2><pre><code class="language-bash"># start a session
tmux

# start a named session
tmux new -s &lt;name&gt;

# start a named session in the background
tmux new -s &lt;name&gt; -d

# attach if the session exists, create it otherwise
tmux new-session -A -s &lt;name&gt;

# list sessions
tmux ls

# attach to the most recent session
tmux attach

# attach to a named session
tmux attach -t &lt;name&gt;

# attach and detach any other client (steal the session)
tmux attach -d -t &lt;name&gt;

# rename a session
tmux rename-session -t &lt;old&gt; &lt;new&gt;

# kill one session
tmux kill-session -t &lt;name&gt;

# kill the server and every session on it
tmux kill-server
</code></pre><h2>⌨️ Sessions</h2><table><thead><tr><th>Keys</th><th>Action</th></tr></thead><tbody><tr><td><code>Ctrl+b d</code></td><td>Detach from the session</td></tr><tr><td><code>Ctrl+b s</code></td><td>Interactive session list</td></tr><tr><td><code>Ctrl+b $</code></td><td>Rename the current session</td></tr><tr><td><code>Ctrl+b (</code></td><td>Previous session</td></tr><tr><td><code>Ctrl+b )</code></td><td>Next session</td></tr><tr><td><code>Ctrl+b w</code></td><td>Tree of every session and window</td></tr></tbody></table><h2>📂 Windows (tabs)</h2><table><thead><tr><th>Keys</th><th>Action</th></tr></thead><tbody><tr><td><code>Ctrl+b c</code></td><td>Create a window</td></tr><tr><td><code>Ctrl+b ,</code></td><td>Rename the current window</td></tr><tr><td><code>Ctrl+b n</code></td><td>Next window</td></tr><tr><td><code>Ctrl+b p</code></td><td>Previous window</td></tr><tr><td><code>Ctrl+b l</code></td><td>Last (previously used) window</td></tr><tr><td><code>Ctrl+b 0…9</code></td><td>Jump to a window by number</td></tr><tr><td><code>Ctrl+b w</code></td><td>Choose a window from a list</td></tr><tr><td><code>Ctrl+b f</code></td><td>Find a window by name</td></tr><tr><td><code>Ctrl+b .</code></td><td>Move the window to another index</td></tr><tr><td><code>Ctrl+b &amp;</code></td><td>Kill the current window</td></tr></tbody></table><h2>🪟 Panes (splits)</h2><table><thead><tr><th>Keys</th><th>Action</th></tr></thead><tbody><tr><td><code>Ctrl+b %</code></td><td>Split into left / right panes</td></tr><tr><td><code>Ctrl+b &quot;</code></td><td>Split into top / bottom panes</td></tr><tr><td><code>Ctrl+b ←↑↓→</code></td><td>Move the focus in that direction</td></tr><tr><td><code>Ctrl+b o</code></td><td>Cycle through the panes</td></tr><tr><td><code>Ctrl+b ;</code></td><td>Jump to the previously focused pane</td></tr><tr><td><code>Ctrl+b q</code></td><td>Show pane numbers (press one to jump)</td></tr><tr><td><code>Ctrl+b z</code></td><td>Zoom the pane to full screen, and back</td></tr><tr><td><code>Ctrl+b x</code></td><td>Kill the current pane</td></tr><tr><td><code>Ctrl+b {</code> / <code>}</code></td><td>Swap the pane with the previous / next one</td></tr><tr><td><code>Ctrl+b space</code></td><td>Cycle through the preset layouts</td></tr><tr><td><code>Ctrl+b !</code></td><td>Break the pane out into its own window</td></tr><tr><td><code>Ctrl+b Alt+←↑↓→</code></td><td>Resize the pane in that direction</td></tr></tbody></table><h2>📋 Copy Mode &amp; Scrollback</h2><table><thead><tr><th>Keys</th><th>Action</th></tr></thead><tbody><tr><td><code>Ctrl+b [</code></td><td>Enter copy mode (scroll with the arrows/PgUp)</td></tr><tr><td><code>space</code></td><td>Start the selection</td></tr><tr><td><code>Enter</code></td><td>Copy the selection and leave copy mode</td></tr><tr><td><code>Ctrl+b ]</code></td><td>Paste the buffer</td></tr><tr><td><code>/</code> and <code>?</code></td><td>Search forward / backward (vi mode)</td></tr><tr><td><code>q</code></td><td>Leave copy mode</td></tr></tbody></table><blockquote><p>💡 <code>setw -g mode-keys vi</code> gives you vi navigation in copy mode; <code>v</code> then starts the selection and <code>y</code> yanks it.</p></blockquote><h2>⚙️ Configuration</h2><pre><code class="language-bash"># reload the configuration without restarting
tmux source-file ~/.tmux.conf

# every key binding currently active
tmux list-keys

# every option and its value
tmux show-options -g
</code></pre><p>A reasonable <code>~/.tmux.conf</code> starting point:</p><pre><code class="language-bash"># use Ctrl+a as the prefix, like GNU Screen
set -g prefix C-a
unbind C-b
bind C-a send-prefix

# number windows from 1 and close the gaps
set -g base-index 1
set -g renumber-windows on

# mouse: focus panes, resize splits, scroll
set -g mouse on

# vi keys in copy mode, and a longer scrollback
setw -g mode-keys vi
set -g history-limit 10000

# reload with prefix + r
bind r source-file ~/.tmux.conf \\; display &quot;Config reloaded&quot;
</code></pre><h2>🧭 Scripting &amp; Automation</h2><pre><code class="language-bash"># run a command in a target pane
tmux send-keys -t &lt;session&gt;:&lt;window&gt;.&lt;pane&gt; &quot;make test&quot; Enter

# print the contents of a pane
tmux capture-pane -p -t &lt;session&gt;:&lt;window&gt;

# open the command prompt inside tmux (prefix + :)
tmux command-prompt

# build a session non-interactively
tmux new -d -s dev -n editor
tmux split-window -t dev -h
tmux attach -t dev
</code></pre><h2>📄 Example Workflow</h2><pre><code class="language-bash"># 1. start a named session
tmux new -s dev

# 2. split the window: prefix % (left/right), prefix &quot; (top/bottom)
# 3. add another window with prefix c
# 4. detach with prefix d — everything keeps running

# 5. come back later
tmux attach -t dev
</code></pre><h2>📚 Resources</h2><ul><li><a href="https://github.com/tmux/tmux/wiki">tmux wiki and getting-started guide</a></li><li><a href="https://man7.org/linux/man-pages/man1/tmux.1.html">Manual page</a></li><li>Built-in help: <code>Ctrl+b ?</code> lists every active binding</li></ul>`,23)]]))}};export{a as default};