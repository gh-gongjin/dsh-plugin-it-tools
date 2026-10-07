import{E as e,F as t,q as n,w as r}from"./vue.runtime.esm-bundler-DZZTqpJU.js";t();var i={class:`markdown-body`},a={__name:`git-sem.memo.zh`,setup(t,{expose:a}){return a({frontmatter:{}}),(t,a)=>(n(),r(`div`,i,[...a[0]||=[e(`<h1>约定式提交速查表</h1><h2>结构</h2><p>约定式提交信息遵循以下结构：</p><pre><code>&lt;type&gt;[optional scope]: &lt;description&gt;

[optional body]

[optional footer(s)]
</code></pre><h2>元素</h2><h3>类型(Type)（必填）</h3><p>类型描述所做更改的种类。常用类型包括：</p><ul><li><strong>feat</strong>: 面向用户的新功能</li><li><strong>fix</strong>: 面向用户的 Bug 修复</li><li><strong>docs</strong>: 文档更改</li><li><strong>style</strong>: 代码风格更改（格式化、缺少分号等）</li><li><strong>refactor</strong>: 既不修复 Bug 也不添加功能的代码更改</li><li><strong>test</strong>: 添加或更新测试</li><li><strong>chore</strong>: 维护任务、依赖更新、构建变更</li><li><strong>perf</strong>: 性能优化</li><li><strong>ci</strong>: CI/CD 配置更改</li><li><strong>build</strong>: 构建系统或外部依赖更改</li><li><strong>revert</strong>: 回退之前的提交</li></ul><h3>作用域(Scope)（可选）</h3><p>作用域提供关于代码库中受影响部分的附加上下文：</p><pre><code>feat(auth): add OAuth2 integration
fix(api): resolve timeout issues
docs(readme): update installation instructions
</code></pre><h3>描述（必填）</h3><p>对更改的简要描述：</p><ul><li>使用祈使语气（“add” 而非 “added” 或 “adds”）</li><li>保持简洁（建议不超过 50 个字符）</li><li>首字母不大写</li><li>结尾不加句号</li></ul><h3>正文（可选）</h3><p>提供更详细的更改说明：</p><ul><li>用空行与描述分隔</li><li>解释动机并与之前的行为进行对比</li><li>使用祈使语气</li></ul><h3>脚注（可选）</h3><p>包含提交的元数据：</p><ul><li><strong>破坏性更改</strong>: 以 <code>BREAKING CHANGE:</code> 开头</li><li><strong>Issue 引用</strong>: <code>Closes #123</code>、<code>Fixes #456</code></li><li><strong>共同作者</strong>: <code>Co-authored-by: Name &lt;email&gt;</code></li></ul><h2>示例</h2><h3>简单提交</h3><pre><code>feat: add user authentication
</code></pre><h3>带作用域</h3><pre><code>fix(parser): handle edge case in JSON parsing
</code></pre><h3>带正文</h3><pre><code>feat: add email notifications

Users can now receive email notifications for important events.
This includes account changes, security alerts, and system updates.
</code></pre><h3>带脚注</h3><pre><code>fix: prevent racing of requests

Introduce a request id and a reference to latest request. Dismiss
incoming responses other than from latest request.

Closes #123
</code></pre><h3>破坏性更改</h3><pre><code>feat!: send an email to the customer when a product is shipped

BREAKING CHANGE: The shipping service now requires an email address
</code></pre><h3>完整示例</h3><pre><code>feat(shopping cart): add ability to remove items

Users can now remove items from their shopping cart by clicking
the remove button next to each item. This improves the user
experience by allowing corrections without starting over.

Closes #456
Co-authored-by: Jane Doe &lt;jane@example.com&gt;
</code></pre><h2>常用工具</h2><h3>Commitizen</h3><p>用于创建约定式提交的交互式工具：</p><pre><code class="language-shell">npm install -g commitizen
npm install -g cz-conventional-changelog
echo &#39;{ &quot;path&quot;: &quot;cz-conventional-changelog&quot; }&#39; &gt; ~/.czrc
</code></pre><p>用法：</p><pre><code class="language-shell">git cz
</code></pre><h3>Commitlint</h3><p>对提交信息进行 lint 检查，确保遵循约定式格式：</p><pre><code class="language-shell">npm install --save-dev @commitlint/config-conventional @commitlint/cli
</code></pre><p>在 <code>.commitlintrc.json</code> 中配置：</p><pre><code class="language-json">{
  &quot;extends&quot;: [&quot;@commitlint/config-conventional&quot;]
}
</code></pre><h3>Husky</h3><p>用于强制执行提交信息格式的 Git 钩子：</p><pre><code class="language-shell">npm install --save-dev husky
npx husky add .husky/commit-msg &#39;npx --no -- commitlint --edit \${1}&#39;
</code></pre><h3>Semantic Release</h3><p>根据约定式提交自动生成发布版本：</p><pre><code class="language-shell">npm install --save-dev semantic-release
</code></pre><h3>Conventional Changelog</h3><p>根据约定式提交生成变更日志：</p><pre><code class="language-shell">npm install -g conventional-changelog-cli
conventional-changelog -p angular -i CHANGELOG.md -s
</code></pre>`,53)]]))}};export{a as default};