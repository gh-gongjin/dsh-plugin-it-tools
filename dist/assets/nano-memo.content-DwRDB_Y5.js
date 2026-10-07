import{E as e,F as t,q as n,w as r}from"./vue.runtime.esm-bundler-DZZTqpJU.js";t();var i={class:`markdown-body`},a={__name:`nano-memo.content`,setup(t,{expose:a}){return a({frontmatter:{}}),(t,a)=>(n(),r(`div`,i,[...a[0]||=[e(`<p><strong>GNU nano</strong> is a small, modeless terminal editor: you start typing straight away, and every command is a control or meta chord shown along the bottom of the screen.</p><blockquote><p>ℹ️ nano’s own help writes <code>^X</code> for <code>Ctrl+X</code> and <code>M-X</code> for <code>Alt+X</code> (Meta). This sheet spells them out. On macOS, <code>Alt</code> is usually <code>Esc</code> pressed first, or <code>Option</code> with “Use Option as Meta” enabled.</p></blockquote><h2>🚀 Starting nano</h2><pre><code class="language-bash"># open a file (created on save if it does not exist)
nano &lt;file&gt;

# jump straight to a line, or a line and column
nano +42 &lt;file&gt;
nano +42,8 &lt;file&gt;

# show line numbers
nano -l &lt;file&gt;

# enable mouse support
nano -m &lt;file&gt;

# keep the indentation of the previous line
nano -i &lt;file&gt;

# convert typed tabs to spaces, 4 wide
nano -ET4 &lt;file&gt;

# do not wrap long lines
nano -w &lt;file&gt;

# keep a backup of the original as file~
nano -B &lt;file&gt;

# read-only view mode
nano -v &lt;file&gt;

# open at the position you left last time
nano -P &lt;file&gt;
</code></pre><h2>💾 File Handling</h2><table><thead><tr><th>Shortcut</th><th>Action</th></tr></thead><tbody><tr><td><code>Ctrl+S</code></td><td>Save the current file</td></tr><tr><td><code>Ctrl+O</code></td><td>Write to a named file (“save as”)</td></tr><tr><td><code>Ctrl+R</code></td><td>Insert another file into this one</td></tr><tr><td><code>Ctrl+X</code></td><td>Close the buffer and leave nano</td></tr><tr><td><code>Alt+&lt;</code></td><td>Switch to the previous buffer</td></tr><tr><td><code>Alt+&gt;</code></td><td>Switch to the next buffer</td></tr></tbody></table><h2>✏️ Editing</h2><table><thead><tr><th>Shortcut</th><th>Action</th></tr></thead><tbody><tr><td><code>Ctrl+K</code></td><td>Cut the current line into the cutbuffer</td></tr><tr><td><code>Alt+6</code></td><td>Copy the current line into the cutbuffer</td></tr><tr><td><code>Ctrl+U</code></td><td>Paste the cutbuffer</td></tr><tr><td><code>Alt+T</code></td><td>Cut from the cursor to the end of the buffer</td></tr><tr><td><code>Alt+U</code></td><td>Undo the last action</td></tr><tr><td><code>Alt+E</code></td><td>Redo the last undone action</td></tr><tr><td><code>Alt+3</code></td><td>Comment or uncomment the line or selection</td></tr><tr><td><code>Ctrl+]</code></td><td>Complete the current word</td></tr><tr><td><code>Alt+A</code></td><td>Set the mark — move to select</td></tr><tr><td><code>Tab</code> / <code>Shift+Tab</code></td><td>Indent / unindent the selection</td></tr></tbody></table><h2>🔎 Search &amp; Replace</h2><table><thead><tr><th>Shortcut</th><th>Action</th></tr></thead><tbody><tr><td><code>Ctrl+W</code></td><td>Search forward (“where is”)</td></tr><tr><td><code>Ctrl+Q</code></td><td>Search backward</td></tr><tr><td><code>Alt+W</code></td><td>Repeat the search forward</td></tr><tr><td><code>Alt+Q</code></td><td>Repeat the search backward</td></tr><tr><td><code>Alt+R</code></td><td>Search and replace</td></tr></tbody></table><blockquote><p>💡 At the search prompt, <code>Alt+C</code> toggles case sensitivity, <code>Alt+R</code> switches to regular expressions and <code>Alt+B</code> limits the search to the selection.</p></blockquote><h2>⌫ Deletion</h2><table><thead><tr><th>Shortcut</th><th>Action</th></tr></thead><tbody><tr><td><code>Ctrl+H</code></td><td>Delete the character to the left</td></tr><tr><td><code>Ctrl+D</code></td><td>Delete the character under the cursor</td></tr><tr><td><code>Alt+Bksp</code></td><td>Delete the word to the left</td></tr><tr><td><code>Ctrl+Del</code></td><td>Delete the word to the right</td></tr><tr><td><code>Alt+Del</code></td><td>Delete the whole line</td></tr></tbody></table><h2>🧭 Moving Around</h2><table><thead><tr><th>Shortcut</th><th>Action</th></tr></thead><tbody><tr><td><code>Ctrl+B</code> / <code>Ctrl+F</code></td><td>One character left / right</td></tr><tr><td><code>Ctrl+←</code> / <code>Ctrl+→</code></td><td>One word left / right</td></tr><tr><td><code>Ctrl+A</code> / <code>Ctrl+E</code></td><td>Start / end of the line</td></tr><tr><td><code>Ctrl+P</code> / <code>Ctrl+N</code></td><td>One line up / down</td></tr><tr><td><code>Ctrl+↑</code> / <code>Ctrl+↓</code></td><td>Previous / next block</td></tr><tr><td><code>Ctrl+Y</code> / <code>Ctrl+V</code></td><td>One page up / down</td></tr><tr><td><code>Alt+\\</code> / <code>Alt+/</code></td><td>Top / bottom of the buffer</td></tr><tr><td><code>Alt+G</code></td><td>Go to a line number</td></tr><tr><td><code>Alt+]</code></td><td>Jump to the matching bracket</td></tr><tr><td><code>Alt+↑</code> / <code>Alt+↓</code></td><td>Scroll the view without moving the cursor</td></tr></tbody></table><h2>🔧 Operations</h2><table><thead><tr><th>Shortcut</th><th>Action</th></tr></thead><tbody><tr><td><code>Ctrl+T</code></td><td>Run a command, or pipe the buffer through it</td></tr><tr><td><code>Ctrl+J</code></td><td>Justify the paragraph or selection</td></tr><tr><td><code>Alt+J</code></td><td>Justify the whole buffer</td></tr><tr><td><code>Alt+B</code></td><td>Run a syntax check (linter)</td></tr><tr><td><code>Alt+F</code></td><td>Run a formatter</td></tr><tr><td><code>Alt+:</code></td><td>Start or stop recording a macro</td></tr><tr><td><code>Alt+;</code></td><td>Replay the macro</td></tr></tbody></table><h2>ℹ️ Information &amp; Display</h2><table><thead><tr><th>Shortcut</th><th>Action</th></tr></thead><tbody><tr><td><code>Ctrl+G</code></td><td>Open the help text</td></tr><tr><td><code>Ctrl+C</code></td><td>Report the cursor position</td></tr><tr><td><code>Alt+D</code></td><td>Count lines, words and characters</td></tr><tr><td><code>Alt+N</code></td><td>Toggle line numbers</td></tr><tr><td><code>Alt+P</code></td><td>Toggle visible whitespace</td></tr><tr><td><code>Alt+X</code></td><td>Hide or show the shortcut bar</td></tr><tr><td><code>Alt+V</code></td><td>Insert the next keystroke verbatim</td></tr><tr><td><code>Ctrl+L</code></td><td>Redraw the screen</td></tr></tbody></table><h2>⚙️ Configuration</h2><p>Persistent settings live in <code>~/.nanorc</code> (system-wide: <code>/etc/nanorc</code>).</p><pre><code class="language-bash">set linenumbers
set mouse
set tabsize 4
set tabstospaces
set autoindent
set constantshow
set softwrap
set positionlog

# syntax highlighting definitions shipped with nano
include /usr/share/nano/*.nanorc
</code></pre><h2>📚 Resources</h2><ul><li><a href="https://www.nano-editor.org/docs.php">Official documentation</a></li><li><a href="https://man7.org/linux/man-pages/man1/nano.1.html">Manual page</a></li><li>Built-in help: <code>Ctrl+G</code></li></ul>`,24)]]))}};export{a as default};