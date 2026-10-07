import{E as e,F as t,q as n,w as r}from"./vue.runtime.esm-bundler-DZZTqpJU.js";t();var i={class:`markdown-body`},a={__name:`sed`,setup(t,{expose:a}){return a({frontmatter:{}}),(t,a)=>(n(),r(`div`,i,[...a[0]||=[e(`<p><strong><code>sed</code></strong> is the stream editor: it reads input line by line into the <em>pattern space</em>, applies a script to each line, and prints the result. It never needs the whole file in memory, so it happily edits gigabytes.</p><pre><code class="language-bash">sed [options] &#39;script&#39; [file...]
</code></pre><blockquote><p>ℹ️ Examples here use <strong>GNU sed</strong> (Linux). BSD/macOS differs on <code>-i</code>, <code>-E</code> and the <code>a</code>/<code>i</code>/<code>c</code> commands — see the callouts. <code>brew install gnu-sed</code> gives you <code>gsed</code> on macOS.</p></blockquote><h2>⚙️ Options</h2><table><thead><tr><th>Option</th><th>Description</th></tr></thead><tbody><tr><td><code>-n</code></td><td>Do not print automatically — pair it with <code>p</code></td></tr><tr><td><code>-e &lt;script&gt;</code></td><td>Add a script; repeat for several</td></tr><tr><td><code>-f &lt;file&gt;</code></td><td>Read the script from a file</td></tr><tr><td><code>-i[SUFFIX]</code></td><td>Edit files in place, optionally keeping a backup</td></tr><tr><td><code>-E</code> (or <code>-r</code>)</td><td>Extended regular expressions — no backslashes before <code>(</code>, <code>+</code>, <code>?</code></td></tr><tr><td><code>-s</code></td><td>Treat each file separately instead of one long stream</td></tr><tr><td><code>-z</code></td><td>Split on NUL instead of newline (pairs with <code>find -print0</code>)</td></tr><tr><td><code>--debug</code></td><td>Show how sed executes the script (GNU 4.6+)</td></tr></tbody></table><h2>📍 Addressing</h2><p>An address decides <em>which</em> lines a command applies to. Without one, the command applies to every line.</p><table><thead><tr><th>Address</th><th>Matches</th></tr></thead><tbody><tr><td><code>5</code></td><td>Line 5</td></tr><tr><td><code>$</code></td><td>The last line</td></tr><tr><td><code>/regex/</code></td><td>Every line matching the pattern</td></tr><tr><td><code>\\%regex%</code></td><td>Same, with <code>%</code> as the delimiter (handy for paths)</td></tr><tr><td><code>2,7</code></td><td>Lines 2 to 7</td></tr><tr><td><code>2,$</code></td><td>Line 2 to the end</td></tr><tr><td><code>/start/,/end/</code></td><td>From the first <code>start</code> to the next <code>end</code>, inclusive</td></tr><tr><td><code>2,+3</code></td><td>Line 2 and the three lines after it</td></tr><tr><td><code>0~3</code></td><td>Every third line (GNU)</td></tr><tr><td><code>2~5</code></td><td>Line 2, then every fifth line (GNU)</td></tr><tr><td><code>/regex/!</code></td><td>Invert — every line that does <strong>not</strong> match</td></tr></tbody></table><pre><code class="language-bash"># print line 5
sed -n &#39;5p&#39; file

# print lines 3 to 5
sed -n &#39;3,5p&#39; file

# print everything between two markers
sed -n &#39;/BEGIN/,/END/p&#39; file

# delete every line except the ones matching
sed -n &#39;/keep/p&#39; file
sed &#39;/keep/!d&#39; file

# count the lines (like wc -l)
sed -n &#39;$=&#39; file
</code></pre><h2>🔁 Substitution</h2><pre><code class="language-bash">sed &#39;s/pattern/replacement/flags&#39; file
</code></pre><table><thead><tr><th>Flag</th><th>Effect</th></tr></thead><tbody><tr><td><em>none</em></td><td>Replace the first match on each line</td></tr><tr><td><code>g</code></td><td>Replace every match on the line</td></tr><tr><td><code>i</code></td><td>Case-insensitive matching</td></tr><tr><td><code>p</code></td><td>Print the line when a replacement happened</td></tr><tr><td><code>2</code></td><td>Replace only the second match — any number works</td></tr><tr><td><code>2g</code></td><td>Replace from the second match to the end of the line</td></tr><tr><td><code>w f</code></td><td>Write the changed lines to file <code>f</code></td></tr><tr><td><code>e</code></td><td>Run the result as a shell command (GNU)</td></tr></tbody></table><pre><code class="language-bash"># first match on each line
sed &#39;s/foo/bar/&#39; file

# every match on the line
sed &#39;s/foo/bar/g&#39; file

# only the second match
sed &#39;s/foo/bar/2&#39; file

# every match, ignoring case
sed &#39;s/foo/bar/gI&#39; file

# &amp; stands for the whole match — wrap every number in brackets
sed &#39;s/[0-9]\\+/[&amp;]/g&#39; file

# capture groups: \\( \\) in basic regex, ( ) with -E
sed &#39;s/\\(foo\\)bar/\\1baz/&#39; file
sed -E &#39;s/(\\w+)@(\\w+)/\\2 at \\1/&#39; file

# any character can be the delimiter — pick one that is not in the text
sed &#39;s|/usr/bin|/usr/local/bin|&#39; file
sed &#39;s#http://#https://#&#39; file

# GNU case conversion: upper-case the first word
sed &#39;s/\\w\\+/\\U&amp;/&#39; file

# ...and lower-case a whole line
sed -E &#39;s/(.*)/\\L\\1/&#39; file

# only substitute on lines that match an address
sed &#39;/^deb /s/http:/https:/&#39; sources.list
</code></pre><h2>✂️ Command Reference</h2><table><thead><tr><th>Command</th><th>Does</th></tr></thead><tbody><tr><td><code>p</code></td><td>Print the pattern space</td></tr><tr><td><code>d</code></td><td>Delete it and start the next cycle</td></tr><tr><td><code>s</code></td><td>Substitute</td></tr><tr><td><code>y</code></td><td>Transliterate characters, like <code>tr</code></td></tr><tr><td><code>a text</code></td><td>Append a line after the current one</td></tr><tr><td><code>i text</code></td><td>Insert a line before the current one</td></tr><tr><td><code>c text</code></td><td>Replace the matched line(s)</td></tr><tr><td><code>q</code></td><td>Quit — <code>q5</code> also sets the exit status</td></tr><tr><td><code>Q</code></td><td>Quit without printing the current line</td></tr><tr><td><code>r file</code></td><td>Read a file in after the current line</td></tr><tr><td><code>w file</code></td><td>Write the pattern space to a file</td></tr><tr><td><code>=</code></td><td>Print the current line number</td></tr><tr><td><code>n</code> / <code>N</code></td><td>Load the next line, replacing / appending to the pattern space</td></tr><tr><td><code>D</code> / <code>P</code></td><td>Delete / print up to the first newline of the pattern space</td></tr><tr><td><code>h</code> <code>H</code></td><td>Copy / append the pattern space into the hold space</td></tr><tr><td><code>g</code> <code>G</code></td><td>Copy / append the hold space into the pattern space</td></tr><tr><td><code>x</code></td><td>Swap the pattern and hold spaces</td></tr><tr><td><code>b</code> <code>t</code> <code>T</code> <code>:label</code></td><td>Branching — jump, jump if a substitution happened, jump if none</td></tr></tbody></table><h2>🗑 Deleting &amp; Printing</h2><pre><code class="language-bash"># by line number
sed &#39;2d&#39; file
sed &#39;5,10d&#39; file
sed &#39;$d&#39; file

# lines containing a word
sed &#39;/error/d&#39; file

# blank lines
sed &#39;/^$/d&#39; file

# comment lines
sed &#39;/^#/d&#39; file

# blank or whitespace-only lines
sed &#39;/^\\s*$/d&#39; file

# strip comments and blank lines from a config
sed -e &#39;/^#/d&#39; -e &#39;/^$/d&#39; /etc/ssh/sshd_config

# from the top up to the first match
sed &#39;1,/pattern/d&#39; file

# everything between two markers
sed &#39;/start/,/end/d&#39; file

# keep only what matches
sed -n &#39;/pattern/p&#39; file
</code></pre><h2>🧵 Insert, Append &amp; Change</h2><pre><code class="language-bash"># GNU one-line form
sed &#39;/pattern/a appended line&#39; file
sed &#39;/pattern/i inserted line&#39; file
sed &#39;/pattern/c replacement line&#39; file

# portable form (works on BSD/macOS too)
sed &#39;/pattern/a\\
appended line&#39; file

# add a line at the very top or bottom
sed &#39;1i #!/bin/bash&#39; file
sed &#39;$a # end of file&#39; file

# insert the contents of another file after a marker
sed &#39;/INCLUDE HERE/r snippet.txt&#39; file
</code></pre><h2>🧠 Multi-line &amp; Hold Space</h2><p>The hold space is a second buffer that survives between lines — that is what makes sed more than a line-at-a-time filter.</p><pre><code class="language-bash"># join every pair of lines
sed &#39;N;s/\\n/ /&#39; file

# reverse the file (what tac does)
sed -n &#39;1!G;h;$p&#39; file

# print the line before each match
sed -n &#39;/pattern/{x;p;x};h&#39; file

# print the line after each match
sed -n &#39;/pattern/{n;p}&#39; file

# squeeze runs of blank lines into one
sed &#39;/^$/{N;/^\\n$/D}&#39; file

# delete the last two lines
sed &#39;N;$!P;$!D;$d&#39; file
</code></pre><h2>🧨 In-Place Editing</h2><pre><code class="language-bash"># GNU: edit in place
sed -i &#39;s/foo/bar/g&#39; file

# keep a backup as file.bak
sed -i.bak &#39;s/foo/bar/g&#39; file

# several files at once
sed -i &#39;s/foo/bar/g&#39; *.conf

# every matching file in a tree
find . -name &#39;*.py&#39; -exec sed -i &#39;s/old_api/new_api/g&#39; {} +
</code></pre><blockquote><p>⚠️ <strong>BSD/macOS <code>sed</code> requires an argument to <code>-i</code>.</strong> <code>sed -i &#39;&#39; &#39;s/foo/bar/&#39; file</code> edits without a backup there, while the same command on GNU sed reads <code>&#39;&#39;</code> as the script. Write <code>sed -i.bak</code> for something that works on both, or use <code>gsed</code>.</p><p>💡 Always run the command without <code>-i</code> first and read the output. <code>-i</code> has no undo.</p></blockquote><h2>🧰 Recipes</h2><pre><code class="language-bash"># trim leading and trailing whitespace
sed &#39;s/^[[:space:]]*//; s/[[:space:]]*$//&#39; file

# collapse repeated spaces
sed &#39;s/  */ /g&#39; file

# tabs to four spaces
sed &#39;s/\\t/    /g&#39; file

# strip Windows carriage returns
sed &#39;s/\\r$//&#39; file

# strip HTML tags
sed -e &#39;s/&lt;[^&gt;]*&gt;//g&#39; page.html

# number the lines
sed = file | sed &#39;N;s/\\n/\\t/&#39;

# print a specific line and quit early (fast on huge files)
sed -n &#39;1000{p;q}&#39; file

# extract the value of a key from a config file
sed -n &#39;s/^Port[[:space:]]*//p&#39; /etc/ssh/sshd_config

# replace only in lines between two markers
sed &#39;/BEGIN/,/END/ s/old/new/g&#39; file

# change a value only on the first match, then stop
sed &#39;0,/version:/s//version: 2/&#39; file

# comment out a line
sed &#39;/^ExecStart/s/^/#/&#39; unit.service

# uncomment a line
sed &#39;/^#ExecStart/s/^#//&#39; unit.service
</code></pre><h2>📚 Resources</h2><ul><li><a href="https://www.gnu.org/software/sed/manual/sed.html">GNU sed manual</a></li><li><a href="https://sed.sourceforge.io/sed1line.txt">One-liners, annotated (sed1line)</a></li><li>Manual page: <code>man 1 sed</code></li></ul>`,29)]]))}};export{a as default};