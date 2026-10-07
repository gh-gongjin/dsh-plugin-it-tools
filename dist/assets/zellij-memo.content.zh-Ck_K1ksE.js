import{E as e,F as t,q as n,w as r}from"./vue.runtime.esm-bundler-DZZTqpJU.js";t();var i={class:`markdown-body`},a={__name:`zellij-memo.content.zh`,setup(t,{expose:a}){return a({frontmatter:{}}),(t,a)=>(n(),r(`div`,i,[...a[0]||=[e(`<p>Zellij 是一款<strong>终端工作区和多路复用器</strong>，支持窗格、标签页、布局和插件。</p><h2>📦 安装</h2><pre><code class="language-bash"># 通过 Cargo 安装
cargo install --locked zellij

# 无需安装即可试用
bash &lt;(curl -L https://zellij.dev/launch)
</code></pre><h2>🚀 启动与管理会话</h2><pre><code class="language-bash"># 启动新的 Zellij 会话
zellij

# 以指定会话名称启动
zellij --session mysession

# 连接到已有会话
zellij attach mysession

# 列出所有会话
zellij list-sessions

# 终止会话
zellij kill-session mysession
</code></pre><h2>🪟 窗格管理</h2><table><thead><tr><th>操作</th><th>命令 / 快捷键</th></tr></thead><tbody><tr><td>垂直分割</td><td><code>Ctrl + p</code> → <code>v</code></td></tr><tr><td>水平分割</td><td><code>Ctrl + p</code> → <code>h</code></td></tr><tr><td>关闭窗格</td><td><code>Ctrl + p</code> → <code>x</code></td></tr><tr><td>移动焦点</td><td><code>Ctrl + p</code> → 方向键</td></tr><tr><td>调整窗格大小</td><td><code>Ctrl + p</code> → <code>r</code> 然后方向键</td></tr><tr><td>切换浮动窗格</td><td><code>Ctrl + p</code> → <code>f</code></td></tr><tr><td>切换堆叠窗格</td><td><code>Ctrl + p</code> → <code>s</code></td></tr></tbody></table><h2>📑 标签页管理</h2><table><thead><tr><th>操作</th><th>命令 / 快捷键</th></tr></thead><tbody><tr><td>新建标签页</td><td><code>Ctrl + p</code> → <code>t</code></td></tr><tr><td>关闭标签页</td><td><code>Ctrl + p</code> → <code>q</code></td></tr><tr><td>重命名标签页</td><td><code>Ctrl + p</code> → <code>n</code></td></tr><tr><td>在标签页间移动</td><td><code>Ctrl + p</code> → 左/右方向键</td></tr></tbody></table><h2>🛠️ 布局</h2><pre><code class="language-bash"># 以预定义布局启动
zellij --layout path/to/layout.kdl

# 布局文件示例（KDL 格式）
layout {
  tab {
    pane split_direction=&quot;vertical&quot; {
      pane
      pane
    }
  }
}
</code></pre><h2>⚙️ 配置</h2><ul><li>配置文件：<code>~/.config/zellij/config.kdl</code></li><li>常用选项：<pre><code class="language-kdl">keybinds {
  normal {
    bind &quot;Ctrl g&quot; { SwitchToMode &quot;locked&quot;; }
  }
}
</code></pre></li></ul><h2>🔌 插件</h2><ul><li>Zellij 支持 <strong>WebAssembly 插件</strong>。</li><li>使用示例：<pre><code class="language-bash">zellij --plugin path/to/plugin.wasm
</code></pre></li></ul><h2>🧭 实用参数</h2><pre><code class="language-bash">--session &lt;name&gt;     # 命名会话
--layout &lt;file&gt;      # 使用布局文件
--help               # 显示帮助
--version            # 显示版本
</code></pre><h2>🗂️ 快速参考</h2><ul><li><strong>会话</strong> → <code>zellij</code>, <code>attach</code>, <code>list-sessions</code>, <code>kill-session</code></li><li><strong>窗格</strong> → 分割、移动、调整大小、浮动、堆叠</li><li><strong>标签页</strong> → 新建、关闭、重命名、切换</li><li><strong>布局</strong> → <code>--layout file.kdl</code></li><li><strong>配置</strong> → <code>~/.config/zellij/config.kdl</code></li><li><strong>插件</strong> → <code>.wasm</code> 模块</li></ul>`,19)]]))}};export{a as default};