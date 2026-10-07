import{E as e,F as t,q as n,w as r}from"./vue.runtime.esm-bundler-DZZTqpJU.js";t();var i={class:`markdown-body`},a={__name:`zellij-memo.content`,setup(t,{expose:a}){return a({frontmatter:{}}),(t,a)=>(n(),r(`div`,i,[...a[0]||=[e(`<p><strong>Zellij</strong> is a terminal workspace and multiplexer with panes, tabs, layouts, session persistence and WebAssembly plugins. It is modal: a <code>Ctrl</code> chord enters a mode, then single keys act inside it.</p><blockquote><p>ℹ️ Press <code>Ctrl+p</code> for <strong>pane</strong> mode, <code>Ctrl+t</code> for <strong>tab</strong> mode, <code>Ctrl+n</code> for <strong>resize</strong>, <code>Ctrl+h</code> for <strong>move</strong>, <code>Ctrl+s</code> for <strong>search/scroll</strong>, <code>Ctrl+o</code> for <strong>session</strong>. <code>Esc</code> or <code>Ctrl+c</code> returns to normal mode.</p></blockquote><h2>📦 Installation</h2><pre><code class="language-bash"># from crates.io
cargo install --locked zellij

# from a package manager
brew install zellij

# try it without installing anything
bash &lt;(curl -L https://zellij.dev/launch)
</code></pre><h2>🚀 Sessions</h2><pre><code class="language-bash"># start a session
zellij

# start a named session
zellij --session &lt;name&gt;

# attach to a session
zellij attach &lt;name&gt;

# attach, creating the session if it does not exist
zellij attach --create &lt;name&gt;

# list sessions
zellij list-sessions

# kill a session (it stays resurrectable)
zellij kill-session &lt;name&gt;

# kill every session
zellij kill-all-sessions

# delete a session for good
zellij delete-session &lt;name&gt;
</code></pre><h2>🪟 Pane Mode — <code>Ctrl+p</code></h2><table><thead><tr><th>Key</th><th>Action</th></tr></thead><tbody><tr><td><code>n</code></td><td>New pane</td></tr><tr><td><code>d</code></td><td>Split down (new pane below)</td></tr><tr><td><code>r</code></td><td>Split right (new pane to the right)</td></tr><tr><td><code>x</code></td><td>Close the focused pane</td></tr><tr><td><code>f</code></td><td>Toggle fullscreen for the focused pane</td></tr><tr><td><code>w</code></td><td>Toggle a floating pane</td></tr><tr><td><code>e</code></td><td>Embed a floating pane, or float an embedded one</td></tr><tr><td><code>c</code></td><td>Rename the pane</td></tr><tr><td><code>z</code></td><td>Toggle the pane frames</td></tr><tr><td><code>←↑↓→</code> / <code>hjkl</code></td><td>Move the focus</td></tr></tbody></table><h2>📑 Tab Mode — <code>Ctrl+t</code></h2><table><thead><tr><th>Key</th><th>Action</th></tr></thead><tbody><tr><td><code>n</code></td><td>New tab</td></tr><tr><td><code>x</code></td><td>Close the tab</td></tr><tr><td><code>r</code></td><td>Rename the tab</td></tr><tr><td><code>s</code></td><td>Toggle sync — type into every pane at once</td></tr><tr><td><code>b</code></td><td>Break the focused pane out into its own tab</td></tr><tr><td><code>[</code> / <code>]</code></td><td>Move the pane to the previous / next tab</td></tr><tr><td><code>←→</code> / <code>1…9</code></td><td>Switch tabs</td></tr></tbody></table><h2>📐 Resize &amp; Move</h2><table><thead><tr><th>Mode</th><th>Keys</th><th>Action</th></tr></thead><tbody><tr><td>Resize — <code>Ctrl+n</code></td><td><code>←↑↓→</code> / <code>hjkl</code></td><td>Grow the pane in that direction</td></tr><tr><td>Resize — <code>Ctrl+n</code></td><td><code>+</code> / <code>-</code></td><td>Grow or shrink the pane</td></tr><tr><td>Move — <code>Ctrl+h</code></td><td><code>←↑↓→</code> / <code>hjkl</code></td><td>Move the pane in the layout</td></tr></tbody></table><h2>🔍 Search &amp; Scrollback — <code>Ctrl+s</code></h2><table><thead><tr><th>Key</th><th>Action</th></tr></thead><tbody><tr><td><code>s</code></td><td>Search the scrollback</td></tr><tr><td><code>e</code></td><td>Open the scrollback in your <code>$EDITOR</code></td></tr><tr><td><code>PgUp</code> / <code>PgDn</code></td><td>Scroll a page at a time</td></tr><tr><td><code>n</code> / <code>p</code></td><td>Next / previous search hit</td></tr><tr><td><code>c</code></td><td>Clear the search</td></tr></tbody></table><h2>🗄 Session Mode — <code>Ctrl+o</code></h2><table><thead><tr><th>Key</th><th>Action</th></tr></thead><tbody><tr><td><code>d</code></td><td>Detach — the session keeps running</td></tr><tr><td><code>w</code></td><td>Session manager (switch, resurrect, delete)</td></tr><tr><td><code>p</code></td><td>Plugin manager</td></tr><tr><td><code>c</code></td><td>Configuration</td></tr></tbody></table><blockquote><p>💡 <code>Ctrl+g</code> locks the interface so every key goes straight to the program in the pane (useful when the app wants <code>Ctrl+p</code>). Press <code>Ctrl+g</code> again to unlock. <code>Ctrl+q</code> quits Zellij.</p></blockquote><h2>⚡ Shortcuts Without a Mode</h2><table><thead><tr><th>Keys</th><th>Action</th></tr></thead><tbody><tr><td><code>Alt+n</code></td><td>New pane</td></tr><tr><td><code>Alt+←↑↓→</code> / <code>Alt+hjkl</code></td><td>Move the focus</td></tr><tr><td><code>Alt+=</code> / <code>Alt+-</code></td><td>Resize the focused pane</td></tr><tr><td><code>Alt+[</code> / <code>Alt+]</code></td><td>Cycle through the layouts</td></tr><tr><td><code>Alt+f</code></td><td>Toggle a floating pane</td></tr><tr><td><code>Alt+i</code> / <code>Alt+o</code></td><td>Move the tab left / right</td></tr></tbody></table><h2>🛠 Layouts</h2><p>Layouts are KDL files that describe the panes and tabs a session starts with.</p><pre><code class="language-bash"># start with a layout
zellij --layout &lt;path&gt;/layout.kdl

# dump the built-in default to start from
zellij setup --dump-layout default &gt; layout.kdl
</code></pre><pre><code class="language-kdl">layout {
  tab name=&quot;editor&quot; {
    pane split_direction=&quot;vertical&quot; {
      pane
      pane command=&quot;cargo&quot; {
        args &quot;watch&quot; &quot;-x&quot; &quot;test&quot;
      }
    }
  }
}
</code></pre><h2>⚙️ Configuration</h2><p>The config file is <code>~/.config/zellij/config.kdl</code>.</p><pre><code class="language-bash"># write the default configuration out to edit it
zellij setup --dump-config &gt; ~/.config/zellij/config.kdl

# check where zellij looks for its files
zellij setup --check
</code></pre><pre><code class="language-kdl">theme &quot;gruvbox-dark&quot;
default_shell &quot;fish&quot;
pane_frames false

keybinds {
  normal {
    bind &quot;Ctrl g&quot; { SwitchToMode &quot;locked&quot;; }
  }
}
</code></pre><h2>🔌 Running Commands &amp; Plugins</h2><pre><code class="language-bash"># open a new pane running a command
zellij run -- htop

# open a file in a new pane, in your editor
zellij edit &lt;file&gt;

# drive a running session from a script
zellij action new-tab --name deploy
zellij action write-chars &quot;make deploy&quot;

# load a WebAssembly plugin
zellij --plugin &lt;path&gt;/plugin.wasm
</code></pre><h2>📚 Resources</h2><ul><li><a href="https://zellij.dev/documentation/">Documentation</a></li><li><a href="https://zellij.dev/documentation/layouts">Layouts reference</a></li><li><a href="https://zellij.dev/documentation/configuration">Configuration reference</a></li></ul>`,31)]]))}};export{a as default};