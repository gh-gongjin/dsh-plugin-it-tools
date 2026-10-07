import{E as e,F as t,q as n,w as r}from"./vue.runtime.esm-bundler-DZZTqpJU.js";t();var i={class:`markdown-body`},a={__name:`jq`,setup(t,{expose:a}){return a({frontmatter:{}}),(t,a)=>(n(),r(`div`,i,[...a[0]||=[e(`<p><strong>jq</strong> is a command-line JSON processor: it slices, filters, maps and transforms structured data the way <code>sed</code> and <code>awk</code> do for text. A jq program is a <em>filter</em> — it takes an input, and produces an output.</p><pre><code class="language-bash"># pretty-print a file
jq . data.json

# read from a pipe
curl -s https://api.example.com/users | jq &#39;.[] | .name&#39;
</code></pre><h2>📦 Installation</h2><pre><code class="language-bash">brew install jq          # macOS
apt install jq           # Debian, Ubuntu
dnf install jq           # Fedora, RHEL
choco install jq         # Windows
</code></pre><h2>🚩 Command-Line Flags</h2><table><thead><tr><th>Flag</th><th>Description</th></tr></thead><tbody><tr><td><code>-r</code>, <code>--raw-output</code></td><td>Print strings without quotes — what you want for shell variables</td></tr><tr><td><code>-c</code>, <code>--compact-output</code></td><td>One compact line per result instead of pretty-printed JSON</td></tr><tr><td><code>-n</code>, <code>--null-input</code></td><td>Do not read input; build JSON from scratch</td></tr><tr><td><code>-s</code>, <code>--slurp</code></td><td>Read the whole input into one array</td></tr><tr><td><code>-e</code>, <code>--exit-status</code></td><td>Exit non-zero when the last output is <code>false</code> or <code>null</code></td></tr><tr><td><code>-j</code>, <code>--join-output</code></td><td>Raw output with no newline between results</td></tr><tr><td><code>--tab</code> / <code>--indent n</code></td><td>Indent with tabs, or with <code>n</code> spaces</td></tr><tr><td><code>-S</code>, <code>--sort-keys</code></td><td>Sort object keys in the output</td></tr><tr><td><code>--arg name value</code></td><td>Pass a string into the program as <code>$name</code></td></tr><tr><td><code>--argjson name json</code></td><td>Pass parsed JSON in as <code>$name</code></td></tr><tr><td><code>--slurpfile name f</code></td><td>Read a whole file into <code>$name</code> as an array</td></tr><tr><td><code>--raw-input</code>, <code>-R</code></td><td>Treat each input line as a string instead of JSON</td></tr></tbody></table><h2>🧭 Core Syntax</h2><table><thead><tr><th>Filter</th><th>Description</th></tr></thead><tbody><tr><td><code>.</code></td><td>The identity filter — the input, unchanged</td></tr><tr><td><code>.foo</code></td><td>The value of field <code>foo</code></td></tr><tr><td><code>.foo.bar</code></td><td>Nested field access</td></tr><tr><td><code>.foo?</code></td><td>Same, but stays quiet when the input is not an object</td></tr><tr><td><code>.&quot;odd key&quot;</code></td><td>A field whose name needs quoting</td></tr><tr><td><code>.[]</code></td><td>Every element of an array (or every value of an object)</td></tr><tr><td><code>.[0]</code></td><td>One element by index (<code>-1</code> is the last)</td></tr><tr><td><code>.[2:4]</code></td><td>A slice — see the table below</td></tr><tr><td><code>|</code></td><td>Pipe: feed the result of the left filter into the right one</td></tr><tr><td><code>,</code></td><td>Run both filters on the same input, emit both results</td></tr><tr><td><code>()</code></td><td>Grouping</td></tr><tr><td><code>//</code></td><td>Alternative: use the right side if the left is <code>false</code>/<code>null</code></td></tr><tr><td><code>?</code></td><td>Suppress errors from the preceding filter</td></tr></tbody></table><h2>📇 Objects</h2><table><thead><tr><th>Task</th><th>Filter</th></tr></thead><tbody><tr><td>List the keys</td><td><code>jq &#39;keys&#39;</code> (<code>keys_unsorted</code> to keep order)</td></tr><tr><td>Does a key exist?</td><td><code>jq &#39;has(&quot;foo&quot;)&#39;</code></td></tr><tr><td>Pick a few fields</td><td><code>jq &#39;{name, id}&#39;</code></td></tr><tr><td>Rename while picking</td><td><code>jq &#39;{title: .name, ref: .id}&#39;</code></td></tr><tr><td>Delete a key</td><td><code>jq &#39;del(.foo)&#39;</code></td></tr><tr><td>Add 1 to every value</td><td><code>jq &#39;map_values(.+1)&#39;</code></td></tr><tr><td>Merge two objects</td><td><code>jq &#39;.a * .b&#39;</code> (deep) or <code>jq &#39;.a + .b&#39;</code> (shallow)</td></tr><tr><td>Object → array of pairs</td><td><code>jq &#39;to_entries&#39;</code></td></tr><tr><td>Array of pairs → object</td><td><code>jq &#39;from_entries&#39;</code></td></tr><tr><td>Transform every entry</td><td><code>jq &#39;with_entries(.value += 1)&#39;</code></td></tr><tr><td>Build an object from values</td><td><code>jq -n &#39;{time: now, host: $ENV.HOSTNAME}&#39;</code></td></tr></tbody></table><h2>📚 Arrays</h2><h3>Slicing and filtering</h3><table><thead><tr><th>Task</th><th>Filter</th></tr></thead><tbody><tr><td>Every element</td><td><code>jq &#39;.[]&#39;</code></td></tr><tr><td>First / last</td><td><code>jq &#39;.[0]&#39;</code> / <code>jq &#39;.[-1]&#39;</code></td></tr><tr><td>Range, first three, last two</td><td><code>jq &#39;.[2:4]&#39;</code>, <code>jq &#39;.[:3]&#39;</code>, <code>jq &#39;.[-2:]&#39;</code></td></tr><tr><td>Numbers above a threshold</td><td><code>jq &#39;map(select(. &gt;= 2))&#39;</code></td></tr><tr><td>Objects matching a field</td><td><code>jq &#39;.[] | select(.id == &quot;second&quot;)&#39;</code></td></tr><tr><td>Several conditions</td><td><code>jq &#39;.[] | select(.age &gt; 18 and .city == &quot;Oslo&quot;)&#39;</code></td></tr><tr><td>By type</td><td><code>jq &#39;.[] | numbers&#39;</code> — also <code>strings</code>, <code>booleans</code>, <code>nulls</code>, <code>arrays</code>, <code>objects</code>, <code>iterables</code>, <code>scalars</code>, <code>values</code></td></tr><tr><td>Test a string field</td><td><code>jq &#39;.[] | select(.name | test(&quot;^a&quot;; &quot;i&quot;))&#39;</code></td></tr></tbody></table><h3>Mapping and transforming</h3><table><thead><tr><th>Task</th><th>Filter</th></tr></thead><tbody><tr><td>Apply to every element</td><td><code>jq &#39;map(.+1)&#39;</code></td></tr><tr><td>Pull one field out of each</td><td><code>jq &#39;map(.name)&#39;</code> or <code>jq &#39;.[].name&#39;</code></td></tr><tr><td>Drop elements by index</td><td><code>jq &#39;del(.[1, 2])&#39;</code></td></tr><tr><td>Concatenate nested arrays</td><td><code>jq &#39;add&#39;</code></td></tr><tr><td>Flatten</td><td><code>jq &#39;flatten&#39;</code> (<code>flatten(1)</code> for one level)</td></tr><tr><td>Sort</td><td><code>jq &#39;sort&#39;</code> / <code>jq &#39;sort_by(.foo)&#39;</code></td></tr><tr><td>Group</td><td><code>jq &#39;group_by(.foo)&#39;</code></td></tr><tr><td>Deduplicate</td><td><code>jq &#39;unique&#39;</code> / <code>jq &#39;unique_by(.foo)&#39;</code></td></tr><tr><td>Reverse</td><td><code>jq &#39;reverse&#39;</code></td></tr><tr><td>Smallest / largest</td><td><code>jq &#39;min&#39;</code>, <code>jq &#39;max_by(.price)&#39;</code></td></tr><tr><td>Count</td><td><code>jq &#39;length&#39;</code></td></tr><tr><td>Sum</td><td><code>jq &#39;map(.amount) | add&#39;</code></td></tr><tr><td>Any / all match</td><td><code>jq &#39;any(.active)&#39;</code>, <code>jq &#39;all(.age &gt; 18)&#39;</code></td></tr><tr><td>A range of numbers</td><td><code>jq &#39;[range(2;4)]&#39;</code></td></tr><tr><td>The type of each item</td><td><code>jq &#39;map(type)&#39;</code></td></tr></tbody></table><h2>🔤 Strings &amp; Formatting</h2><table><thead><tr><th>Task</th><th>Filter</th></tr></thead><tbody><tr><td>Interpolate</td><td><code>jq -r &#39;&quot;\\(.name) is \\(.age)&quot;&#39;</code></td></tr><tr><td>Change case</td><td><code>jq &#39;ascii_downcase&#39;</code> / <code>ascii_upcase</code></td></tr><tr><td>Split and join</td><td><code>jq &#39;split(&quot;,&quot;)&#39;</code> / <code>jq &#39;join(&quot;, &quot;)&#39;</code></td></tr><tr><td>Trim a prefix or suffix</td><td><code>jq &#39;ltrimstr(&quot;v&quot;)&#39;</code> / <code>rtrimstr(&quot;.json&quot;)</code></td></tr><tr><td>Match a regex</td><td><code>jq &#39;test(&quot;^http&quot;)&#39;</code></td></tr><tr><td>Replace</td><td><code>jq &#39;sub(&quot;^v&quot;; &quot;&quot;)&#39;</code> / <code>gsub(&quot;\\\\s+&quot;; &quot;-&quot;)</code></td></tr><tr><td>Capture named groups</td><td><code>jq &#39;capture(&quot;(?&lt;host&gt;[^:]+):(?&lt;port&gt;\\\\d+)&quot;)&#39;</code></td></tr><tr><td>CSV / TSV output</td><td><code>jq -r &#39;.[] | [.id, .name] | @csv&#39;</code></td></tr><tr><td>Escape for a URL or shell</td><td><code>jq -r &#39;@uri &quot;?q=\\(.term)&quot;&#39;</code>, <code>@sh</code></td></tr><tr><td>Base64</td><td><code>jq -r &#39;@base64&#39;</code> / <code>jq -r &#39;@base64d&#39;</code></td></tr><tr><td>Object → JSON string</td><td><code>jq &#39;tojson&#39;</code> (and <code>fromjson</code> back)</td></tr></tbody></table><h2>🔀 Conditionals &amp; Errors</h2><pre><code class="language-bash"># if / then / else — &#39;end&#39; is required
jq &#39;if .age &gt;= 18 then &quot;adult&quot; else &quot;minor&quot; end&#39;

# several branches
jq &#39;if .n &gt; 100 then &quot;big&quot; elif .n &gt; 10 then &quot;medium&quot; else &quot;small&quot; end&#39;

# fall back when a value is missing or null
jq &#39;.nickname // .name&#39;

# keep going when a filter would fail
jq &#39;.items[]? // empty&#39;

# turn a failure into a value of your own
jq &#39;try (.a.b.c) catch &quot;not found&quot;&#39;

# stop with a message
jq &#39;if .id == null then error(&quot;id is required&quot;) else . end&#39;
</code></pre><h2>🧮 Variables, Functions &amp; Reduction</h2><pre><code class="language-bash"># bind a value to a variable
jq &#39;.items[] as $item | $item.name&#39;

# pass values in from the shell
jq --arg env prod &#39;.deploys[] | select(.env == $env)&#39;
jq --argjson min 10 &#39;.[] | select(.count &gt; $min)&#39;

# define a reusable function
jq &#39;def is_active: .status == &quot;active&quot;; map(select(is_active))&#39;

# accumulate a value
jq &#39;reduce .[] as $x (0; . + $x.amount)&#39;

# keep the intermediate results too
jq &#39;[foreach .[] as $x (0; . + $x; .)]&#39;

# read the environment
jq -n &#39;env.HOME&#39;
</code></pre><h2>🛠 Everyday Recipes</h2><pre><code class="language-bash"># pretty-print, sorted, and back to a file
jq -S . data.json &gt; sorted.json

# one field, unquoted, for use in a shell variable
version=$(jq -r .version package.json)

# every key of every object, deduplicated
jq -r &#39;[.[] | keys[]] | unique[]&#39; data.json

# turn an array of objects into a CSV with a header row
jq -r &#39;(.[0] | keys_unsorted), (.[] | [.[]]) | @csv&#39; data.json

# merge two JSON files
jq -s &#39;.[0] * .[1]&#39; a.json b.json

# read newline-delimited JSON (one object per line)
jq -c &#39;.event&#39; events.ndjson

# turn plain text lines into a JSON array
printf &#39;a\\nb\\n&#39; | jq -R -s &#39;split(&quot;\\n&quot;) | map(select(length &gt; 0))&#39;

# find the path to every occurrence of a key
jq -c &#39;paths(scalars) as $p | {path: $p, value: getpath($p)}&#39; data.json

# rewrite every string in a document
jq &#39;walk(if type == &quot;string&quot; then ascii_downcase else . end)&#39; data.json

# use the exit status in a script
jq -e &#39;.errors | length == 0&#39; report.json &amp;&amp; echo &quot;clean&quot;
</code></pre><h2>📚 Resources</h2><ul><li><a href="https://jqlang.github.io/jq/manual/">Manual</a></li><li><a href="https://jqplay.org">Try jq in the browser (jqplay)</a></li><li><a href="https://jqlang.github.io/jq/tutorial/">Tutorial</a></li></ul>`,25)]]))}};export{a as default};