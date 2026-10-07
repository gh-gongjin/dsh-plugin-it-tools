import{E as e,F as t,q as n,w as r}from"./vue.runtime.esm-bundler-DZZTqpJU.js";t();var i={class:`markdown-body`},a={__name:`screen-memo.content`,setup(t,{expose:a}){return a({frontmatter:{}}),(t,a)=>(n(),r(`div`,i,[...a[0]||=[e(`<p><strong>GNU Screen</strong> is a terminal multiplexer: it runs several shell sessions inside one terminal, keeps them alive after you disconnect, and lets you reattach later from anywhere.</p><blockquote><p>ℹ️ Every shortcut starts with the <strong>prefix</strong>, <code>Ctrl+a</code> by default: press the prefix, release it, then press the key. In the tables below <code>Ctrl+a c</code> means “prefix, then <code>c</code>”.</p></blockquote><h2>🚀 Sessions from the Shell</h2><pre><code class="language-bash"># start a session
screen

# start a named session
screen -S &lt;name&gt;

# list running sessions
screen -ls

# reattach to a session
screen -r &lt;name&gt;

# reattach, detaching whoever else is attached
screen -d -r &lt;name&gt;

# reattach if possible, otherwise create the session
screen -R &lt;name&gt;

# attach in parallel with another client (shared screen)
screen -x &lt;name&gt;

# start a detached session running a command
screen -dmS &lt;name&gt; &lt;command&gt;

# run a command inside an existing session
screen -S &lt;name&gt; -X stuff &quot;make test\\n&quot;

# quit a session from outside
screen -X -S &lt;name&gt; quit

# clean up dead sessions
screen -wipe
</code></pre><h2>⌨️ Windows</h2><table><thead><tr><th>Keys</th><th>Action</th></tr></thead><tbody><tr><td><code>Ctrl+a c</code></td><td>Create a window</td></tr><tr><td><code>Ctrl+a A</code></td><td>Rename the current window</td></tr><tr><td><code>Ctrl+a n</code></td><td>Next window</td></tr><tr><td><code>Ctrl+a p</code></td><td>Previous window</td></tr><tr><td><code>Ctrl+a Ctrl+a</code></td><td>Toggle between the last two windows</td></tr><tr><td><code>Ctrl+a 0…9</code></td><td>Jump to a window by number</td></tr><tr><td><code>Ctrl+a &quot;</code></td><td>Choose a window from a list</td></tr><tr><td><code>Ctrl+a w</code></td><td>Show the window bar</td></tr><tr><td><code>Ctrl+a k</code></td><td>Kill the current window</td></tr></tbody></table><h2>🪟 Split Regions</h2><table><thead><tr><th>Keys</th><th>Action</th></tr></thead><tbody><tr><td><code>Ctrl+a S</code></td><td>Split into top / bottom regions</td></tr><tr><td><code>Ctrl+a |</code></td><td>Split into left / right regions</td></tr><tr><td><code>Ctrl+a Tab</code></td><td>Move the focus to the next region</td></tr><tr><td><code>Ctrl+a X</code></td><td>Close the focused region</td></tr><tr><td><code>Ctrl+a Q</code></td><td>Close every region except the focused one</td></tr></tbody></table><blockquote><p>💡 A new region starts empty — press <code>Ctrl+a c</code> to open a shell in it, or <code>Ctrl+a &quot;</code> to move an existing window there.</p></blockquote><h2>🔌 Session Control</h2><table><thead><tr><th>Keys</th><th>Action</th></tr></thead><tbody><tr><td><code>Ctrl+a d</code></td><td>Detach and leave everything running</td></tr><tr><td><code>Ctrl+a D D</code></td><td>Detach and log out</td></tr><tr><td><code>Ctrl+a x</code></td><td>Lock the terminal (password required)</td></tr><tr><td><code>Ctrl+a :</code></td><td>Command prompt (<code>:quit</code>, <code>:sessionname</code>)</td></tr><tr><td><code>Ctrl+a ?</code></td><td>List every key binding</td></tr><tr><td><code>Ctrl+a \\</code></td><td>Kill every window and quit screen</td></tr><tr><td><code>Ctrl+a a</code></td><td>Send a literal <code>Ctrl+a</code> (nested screens)</td></tr></tbody></table><h2>📋 Copy Mode &amp; Scrollback</h2><table><thead><tr><th>Keys</th><th>Action</th></tr></thead><tbody><tr><td><code>Ctrl+a [</code></td><td>Enter copy/scrollback mode</td></tr><tr><td><code>space</code></td><td>Start the selection, then <code>space</code> again to copy</td></tr><tr><td><code>Ctrl+a ]</code></td><td>Paste the buffer</td></tr><tr><td><code>/</code> and <code>?</code></td><td>Search forward / backward</td></tr><tr><td><code>Ctrl+a &gt;</code></td><td>Write the buffer to a file</td></tr><tr><td><code>Esc</code></td><td>Leave copy mode</td></tr></tbody></table><h2>📝 Logging &amp; Monitoring</h2><table><thead><tr><th>Keys</th><th>Action</th></tr></thead><tbody><tr><td><code>Ctrl+a H</code></td><td>Toggle logging of the window to <code>screenlog.n</code></td></tr><tr><td><code>Ctrl+a M</code></td><td>Notify me when this window shows activity</td></tr><tr><td><code>Ctrl+a _</code></td><td>Notify me when this window goes quiet</td></tr><tr><td><code>Ctrl+a C</code></td><td>Clear the window</td></tr></tbody></table><pre><code class="language-bash"># start a session with logging enabled
screen -L -S &lt;name&gt;

# keep 5000 lines of scrollback
screen -h 5000
</code></pre><h2>⚙️ Configuration</h2><p>Settings live in <code>~/.screenrc</code>:</p><pre><code class="language-bash"># no splash screen, plenty of scrollback
startup_message off
defscrollback 10000

# a status line with the window list and the hostname
hardstatus alwayslastline
hardstatus string &#39;%{= kG}[%H] %{= kw}%?%-Lw%?%{= kR}%n*%f %t%?(%u)%?%{= kw}%?%+Lw%?&#39;

# use Ctrl+z as the prefix instead of Ctrl+a
# escape ^z^z

# turn on mouse-wheel scrolling in the scrollback
termcapinfo xterm* ti@:te@
</code></pre><h2>🧠 Tips</h2><ul><li>Name your sessions (<code>screen -S deploy</code>) — <code>screen -ls</code> is unreadable once you have three sessions called <code>12345.pts-0.host</code>.</li><li>Over SSH, start work inside screen: the job survives a dropped connection, and <code>screen -d -r</code> picks it back up.</li><li>Nested screens (local + remote): press <code>Ctrl+a a</code> to send the prefix through to the inner session.</li><li><code>screen -x</code> attaches several clients to the same session — handy for pair debugging.</li></ul><h2>📚 Resources</h2><ul><li><a href="https://www.gnu.org/software/screen/manual/screen.html">GNU Screen manual</a></li><li><a href="https://man7.org/linux/man-pages/man1/screen.1.html">Manual page</a></li><li>Built-in help: <code>Ctrl+a ?</code></li></ul>`,23)]]))}};export{a as default};