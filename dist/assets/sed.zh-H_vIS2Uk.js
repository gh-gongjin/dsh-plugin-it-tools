import{E as e,F as t,q as n,w as r}from"./vue.runtime.esm-bundler-DZZTqpJU.js";t();var i={class:`markdown-body`},a={__name:`sed.zh`,setup(t,{expose:a}){return a({frontmatter:{}}),(t,a)=>(n(),r(`div`,i,[...a[0]||=[e(`<h1>🧾 <code>sed</code> 命令速查表（流编辑器）</h1><p><code>sed</code> 是一款强大的 Unix 工具，用于通过<strong>流编辑</strong>来解析和转换文本。</p><h2>📌 基本语法</h2><pre><code class="language-bash">sed [OPTIONS] &#39;script&#39; [file...]
</code></pre><ul><li><code>&#39;script&#39;</code>：一个或多个编辑命令。</li><li><code>[file]</code>：输入文件。如果省略，<code>sed</code> 从标准输入读取。</li></ul><h2>⚙️ 常用选项</h2><table><thead><tr><th>选项</th><th>描述</th></tr></thead><tbody><tr><td><code>-n</code></td><td>禁止自动输出模式空间。使用 <code>p</code> 显式打印。</td></tr><tr><td><code>-e</code></td><td>添加多个编辑命令。</td></tr><tr><td><code>-i</code></td><td>原地编辑文件（可选备份：<code>-i.bak</code>）。</td></tr><tr><td><code>-f</code></td><td>从文件读取命令。</td></tr></tbody></table><h2>✂️ 基本命令</h2><table><thead><tr><th>命令</th><th>描述</th></tr></thead><tbody><tr><td><code>p</code></td><td>打印当前模式空间。</td></tr><tr><td><code>d</code></td><td>删除当前模式空间。</td></tr><tr><td><code>s</code></td><td>使用正则替换文本。</td></tr><tr><td><code>q</code></td><td>处理第一个匹配后退出。</td></tr><tr><td><code>a</code></td><td>在当前行后追加文本。</td></tr><tr><td><code>i</code></td><td>在当前行前插入文本。</td></tr><tr><td><code>c</code></td><td>用新文本替换行。</td></tr><tr><td><code>y</code></td><td>转换字符（类似 <code>tr</code>）。</td></tr></tbody></table><h2>🔍 替换语法</h2><pre><code class="language-bash">sed &#39;s/pattern/replacement/flags&#39; file
</code></pre><h3>标志</h3><table><thead><tr><th>标志</th><th>描述</th></tr></thead><tbody><tr><td><code>g</code></td><td>全局替换（行内所有匹配项）。</td></tr><tr><td><code>i</code></td><td>不区分大小写匹配。</td></tr><tr><td><code>p</code></td><td>如果发生替换则打印该行。</td></tr><tr><td><code>n</code></td><td>仅替换第 n 个匹配项。</td></tr></tbody></table><h3>示例</h3><pre><code class="language-bash">sed &#39;s/foo/bar/&#39; file       # 将第一个 &#39;foo&#39; 替换为 &#39;bar&#39;
sed &#39;s/foo/bar/g&#39; file      # 将所有 &#39;foo&#39; 替换为 &#39;bar&#39;
sed &#39;s/foo/bar/2&#39; file      # 仅替换第二个 &#39;foo&#39;
sed &#39;s/foo/bar/ip&#39; file     # 不区分大小写 + 打印
</code></pre><h2>🗑️ 使用 <code>sed</code> 删除</h2><p><code>sed</code> 可以根据行号、模式或范围删除行。</p><h3>🔢 按行号删除</h3><pre><code class="language-bash">sed &#39;2d&#39; file             # 删除第 2 行
sed &#39;5,10d&#39; file          # 删除第 5 到 10 行
</code></pre><h3>🔍 按模式删除</h3><pre><code class="language-bash">sed &#39;/error/d&#39; file       # 删除包含 &#39;error&#39; 的行
sed &#39;/^$/d&#39; file           # 删除空行
sed &#39;/^#/d&#39; file           # 删除注释行（以 # 开头）
</code></pre><h3>🧮 按范围和模式删除</h3><pre><code class="language-bash">sed &#39;1,/pattern/d&#39; file   # 从第 1 行删除到第一个匹配 &#39;pattern&#39; 的行
sed &#39;/start/,/end/d&#39; file # 删除 &#39;start&#39; 和 &#39;end&#39; 之间的行（包含边界）
</code></pre><h3>🧠 条件删除</h3><pre><code class="language-bash">sed -n &#39;/pattern/!p&#39; file # 仅打印不匹配 &#39;pattern&#39; 的行
</code></pre><h3>🧹 删除最后一行</h3><pre><code class="language-bash">sed &#39;$d&#39; file             # 删除最后一行
</code></pre><h2>📍 行寻址</h2><h3>行号</h3><pre><code class="language-bash">sed &#39;2d&#39; file            # 删除第 2 行
sed &#39;3,5p&#39; file          # 打印第 3 到 5 行
</code></pre><h3>模式</h3><pre><code class="language-bash">sed &#39;/error/d&#39; file      # 删除包含 &#39;error&#39; 的行
sed &#39;/^#/d&#39; file         # 删除注释行
</code></pre><h3>组合</h3><pre><code class="language-bash">sed &#39;1,/pattern/d&#39; file  # 从第 1 行删除到第一个匹配 &#39;pattern&#39; 的行
</code></pre><h2>🧪 高级替换</h2><h3>使用捕获组</h3><pre><code class="language-bash">sed &#39;s/\\(foo\\)bar/\\1baz/&#39; file
</code></pre><ul><li><code>\\(...\\)</code> 捕获一个分组。</li><li><code>\\1</code>、<code>\\2</code> 等引用捕获的分组。</li></ul><h3>转义特殊字符</h3><pre><code class="language-bash">sed &#39;s/\\/usr\\/bin/\\/usr\\/local\\/bin/&#39; file
</code></pre><p>或使用其他分隔符：</p><pre><code class="language-bash">sed &#39;s|/usr/bin|/usr/local/bin|&#39; file
</code></pre><h2>🧨 原地编辑</h2><pre><code class="language-bash">sed -i &#39;s/foo/bar/g&#39; file           # 直接编辑文件
sed -i.bak &#39;s/foo/bar/g&#39; file       # 将原文件备份为 file.bak
</code></pre><h2>📂 多命令</h2><h3>内联方式</h3><pre><code class="language-bash">sed -e &#39;s/foo/bar/&#39; -e &#39;/baz/d&#39; file
</code></pre><h3>块语法</h3><pre><code class="language-bash">sed &#39;
s/foo/bar/
s/baz/qux/
&#39; file
</code></pre><h2>🧵 追加、插入、替换</h2><pre><code class="language-bash">sed &#39;/pattern/a\\Text to append&#39; file
sed &#39;/pattern/i\\Text to insert&#39; file
sed &#39;/pattern/c\\New line content&#39; file
</code></pre><h2>🔄 字符转换</h2><pre><code class="language-bash">sed &#39;y/abc/ABC/&#39; file     # a→A, b→B, c→C
</code></pre><h2>🧠 实用技巧</h2><h3>删除空行</h3><pre><code class="language-bash">sed &#39;/^$/d&#39; file
</code></pre><h3>删除行首/行尾空白</h3><pre><code class="language-bash">sed &#39;s/^[ \\t]*//&#39; file     # 删除行首空白
sed &#39;s/[ \\t]*$//&#39; file     # 删除行尾空白
</code></pre><h3>将制表符替换为空格</h3><pre><code class="language-bash">sed &#39;s/\\t/    /g&#39; file
</code></pre><h3>行号编号</h3><pre><code class="language-bash">sed = file | sed &#39;N;s/\\n/\\t/&#39;
</code></pre><h2>📚 资源</h2><ul><li><code>man sed</code></li><li>GNU sed 手册：<a href="https://www.gnu.org/software/sed/manual/sed.html">https://www.gnu.org/software/sed/manual/sed.html</a></li></ul>`,64)]]))}};export{a as default};