import{E as e,F as t,q as n,w as r}from"./vue.runtime.esm-bundler-DZZTqpJU.js";t();var i={class:`markdown-body`},a={__name:`git-sem.memo`,setup(t,{expose:a}){return a({frontmatter:{}}),(t,a)=>(n(),r(`div`,i,[...a[0]||=[e(`<p><strong>Conventional Commits</strong> is a convention for commit messages that both humans and tools can read: the type tells you what kind of change it is, and release tooling turns that into version numbers and changelogs automatically.</p><pre><code class="language-text">&lt;type&gt;[optional scope][!]: &lt;description&gt;

[optional body]

[optional footer(s)]
</code></pre><pre><code class="language-text">feat(auth): add OAuth2 login
</code></pre><h2>🏷 Types</h2><table><thead><tr><th>Type</th><th>Use it for</th><th>Release effect</th></tr></thead><tbody><tr><td><code>feat</code></td><td>A new feature for the user</td><td>Minor</td></tr><tr><td><code>fix</code></td><td>A bug fix for the user</td><td>Patch</td></tr><tr><td><code>docs</code></td><td>Documentation only</td><td>None</td></tr><tr><td><code>style</code></td><td>Formatting, whitespace, semicolons — no logic change</td><td>None</td></tr><tr><td><code>refactor</code></td><td>Code change that neither fixes a bug nor adds a feature</td><td>None</td></tr><tr><td><code>perf</code></td><td>A change that improves performance</td><td>Patch</td></tr><tr><td><code>test</code></td><td>Adding or correcting tests</td><td>None</td></tr><tr><td><code>build</code></td><td>Build system or dependencies</td><td>None</td></tr><tr><td><code>ci</code></td><td>CI configuration and scripts</td><td>None</td></tr><tr><td><code>chore</code></td><td>Maintenance that does not touch src or tests</td><td>None</td></tr><tr><td><code>revert</code></td><td>Reverting an earlier commit</td><td>Depends</td></tr></tbody></table><blockquote><p>💡 Any type with a <code>!</code> or a <code>BREAKING CHANGE:</code> footer triggers a <strong>major</strong> release, <code>feat</code> included.</p></blockquote><h2>🎯 Scope</h2><p>The scope is an optional noun in parentheses naming the part of the codebase affected. Keep the list short and consistent — package names, modules, or layers.</p><pre><code class="language-text">feat(auth): add OAuth2 integration
fix(api): resolve timeout on slow upstreams
docs(readme): update the installation steps
refactor(parser)!: drop support for the legacy format
</code></pre><h2>✍️ Description</h2><table><thead><tr><th>Rule</th><th>✅ Good</th><th>❌ Avoid</th></tr></thead><tbody><tr><td>Imperative mood</td><td><code>add user export</code></td><td><code>added user export</code></td></tr><tr><td>Lower case, no trailing period</td><td><code>fix flaky login test</code></td><td><code>Fix flaky login test.</code></td></tr><tr><td>Say what changed, not where</td><td><code>fix off-by-one in paging</code></td><td><code>fix bug in file</code></td></tr><tr><td>Around 50 characters</td><td><code>feat(api): add rate limit</code></td><td>a full sentence with sub-clauses</td></tr></tbody></table><h2>📝 Body &amp; Footers</h2><p>The body explains <strong>why</strong>, not how — the diff already shows how. Separate it from the description with a blank line and wrap at ~72 characters.</p><p>Footers come last, one per line:</p><table><thead><tr><th>Footer</th><th>Meaning</th></tr></thead><tbody><tr><td><code>BREAKING CHANGE: &lt;what&gt;</code></td><td>Incompatible change, forces a major release</td></tr><tr><td><code>Closes #123</code> / <code>Fixes #456</code></td><td>Closes the issue when merged (GitHub, GitLab)</td></tr><tr><td><code>Refs #789</code></td><td>Related, but does not close it</td></tr><tr><td><code>Co-authored-by: Name &lt;email&gt;</code></td><td>Credits a second author</td></tr><tr><td><code>Reviewed-by: Name &lt;email&gt;</code></td><td>Records the reviewer</td></tr></tbody></table><h2>💥 Breaking Changes</h2><p>Two ways to mark one — the <code>!</code> is visible in <code>git log --oneline</code>, the footer explains the migration. Use both.</p><pre><code class="language-text">feat(api)!: require an email address when shipping

BREAKING CHANGE: POST /orders now rejects requests without a customer
email. Add the field before upgrading; see docs/migrations/2026-08.md.
</code></pre><h2>📄 Examples</h2><pre><code class="language-text">feat: add user authentication
</code></pre><pre><code class="language-text">fix(parser): handle a trailing comma in JSON input
</code></pre><pre><code class="language-text">feat: add email notifications

Users can now receive email notifications for account changes,
security alerts and system updates. Delivery is queued so a slow
SMTP server never blocks the request.
</code></pre><pre><code class="language-text">fix: prevent racing of requests

Introduce a request id and a reference to the latest request.
Dismiss incoming responses other than from the latest request.

Closes #123
</code></pre><pre><code class="language-text">feat(cart): add the ability to remove items

Users can remove items from the cart instead of starting over,
which was the most common complaint in support tickets.

Closes #456
Co-authored-by: Jane Doe &lt;jane@example.com&gt;
</code></pre><h2>🔢 Versioning</h2><p>Release tooling maps the history since the last tag onto a semantic version:</p><table><thead><tr><th>Commits since the last release</th><th>New version from <code>1.4.2</code></th></tr></thead><tbody><tr><td>Only <code>docs</code>, <code>chore</code>, <code>style</code>…</td><td>no release</td></tr><tr><td>At least one <code>fix</code> or <code>perf</code></td><td><code>1.4.3</code></td></tr><tr><td>At least one <code>feat</code></td><td><code>1.5.0</code></td></tr><tr><td>Any <code>!</code> or <code>BREAKING CHANGE:</code></td><td><code>2.0.0</code></td></tr></tbody></table><h2>🛠 Tooling</h2><h3>Commitizen — a prompt instead of a blank editor</h3><pre><code class="language-bash">npm install -g commitizen cz-conventional-changelog
echo &#39;{ &quot;path&quot;: &quot;cz-conventional-changelog&quot; }&#39; &gt; ~/.czrc

# then commit with
git cz
</code></pre><h3>commitlint — reject messages that do not follow the convention</h3><pre><code class="language-bash">npm install --save-dev @commitlint/cli @commitlint/config-conventional
</code></pre><pre><code class="language-json">{
  &quot;extends&quot;: [&quot;@commitlint/config-conventional&quot;]
}
</code></pre><h3>husky — run commitlint from a git hook</h3><pre><code class="language-bash">npm install --save-dev husky
npx husky init

# husky v9+: write the hook file yourself
echo &#39;npx --no -- commitlint --edit &quot;$1&quot;&#39; &gt; .husky/commit-msg
</code></pre><h3>Releases &amp; changelogs</h3><pre><code class="language-bash"># decide the version, tag, and publish from the commit history
npm install --save-dev semantic-release

# or just generate the changelog
npx conventional-changelog-cli -p angular -i CHANGELOG.md -s

# a fast, language-agnostic alternative
git cliff --tag v1.5.0 --output CHANGELOG.md
</code></pre><h2>✅ Habits That Keep It Useful</h2><ul><li>One logical change per commit — if the description needs an “and”, split it.</li><li>Write the message for the person bisecting in six months, not for the linter.</li><li>Keep the scope vocabulary small and documented in <code>CONTRIBUTING.md</code>.</li><li>Never invent types the tooling does not know; <code>config</code> or <code>wip</code> silently drop out of the changelog.</li><li>Squash-merging? The <strong>PR title</strong> becomes the commit message, so lint that too.</li></ul><h2>📚 Resources</h2><ul><li><a href="https://www.conventionalcommits.org/">Conventional Commits specification</a></li><li><a href="https://commitlint.js.org/">commitlint</a></li><li><a href="https://semantic-release.gitbook.io/">semantic-release</a></li><li><a href="https://semver.org/">Semantic Versioning</a></li></ul>`,41)]]))}};export{a as default};