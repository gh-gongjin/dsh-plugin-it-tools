import{E as e,F as t,q as n,w as r}from"./vue.runtime.esm-bundler-DZZTqpJU.js";t();var i={class:`markdown-body`},a={__name:`docker-swarm.zh`,setup(t,{expose:a}){return a({frontmatter:{}}),(t,a)=>(n(),r(`div`,i,[...a[0]||=[e(`<p><strong>Docker Swarm 模式</strong> 是 Docker 原生的集群与编排解决方案。它允许你将一组 Docker 节点作为一个虚拟系统统一管理，从而实现高可用性、负载均衡以及容器化应用的简化部署。</p><p>主要特性：</p><ul><li>内置编排</li><li>声明式服务模型</li><li>滚动更新</li><li>自动扩缩容与自愈</li><li>通过 TLS 实现安全的节点通信</li></ul><h2>📌 Swarm 初始化</h2><ul><li><p><strong>初始化 Swarm</strong></p><pre><code class="language-bash">docker swarm init
</code></pre></li><li><p><strong>加入 Swarm（在工作节点/管理节点上）</strong></p><pre><code class="language-bash">docker swarm join-token worker
</code></pre></li><li><p><strong>离开 Swarm</strong></p><pre><code class="language-bash">docker swarm leave
</code></pre></li><li><p><strong>强制离开（在管理节点上）</strong></p><pre><code class="language-bash">docker swarm leave --force
</code></pre></li></ul><h2>👥 节点管理</h2><ul><li><p><strong>列出节点</strong></p><pre><code class="language-bash">docker node ls
</code></pre></li><li><p><strong>将节点提升为管理节点</strong></p><pre><code class="language-bash">docker node promote &lt;node-name&gt;
</code></pre></li><li><p><strong>将节点降级为工作节点</strong></p><pre><code class="language-bash">docker node demote &lt;node-name&gt;
</code></pre></li><li><p><strong>查看节点详情</strong></p><pre><code class="language-bash">docker node inspect &lt;node-name&gt; --pretty
</code></pre></li><li><p><strong>排空节点（禁止调度）</strong></p><pre><code class="language-bash">docker node update --availability drain &lt;node-name&gt;
</code></pre></li><li><p><strong>激活节点</strong></p><pre><code class="language-bash">docker node update --availability active &lt;node-name&gt;
</code></pre></li></ul><h2>🧠 管理节点</h2><p>管理节点负责：</p><ul><li>编排任务与服务</li><li>维护集群状态</li><li>处理 API 请求</li></ul><p>你可以部署多个管理节点以实现高可用性，但任意时刻只有一个是 <strong>leader（领导者）</strong>。</p><ul><li><p><strong>查看管理节点状态</strong></p><pre><code class="language-bash">docker node ls
</code></pre></li><li><p><strong>查看 Raft 共识信息</strong></p><pre><code class="language-bash">docker swarm inspect
</code></pre></li></ul><h2>📦 服务管理</h2><ul><li><p><strong>创建服务</strong></p><pre><code class="language-bash">docker service create --name &lt;service-name&gt; &lt;image&gt;
</code></pre></li><li><p><strong>创建带副本的服务</strong></p><pre><code class="language-bash">docker service create --name &lt;service-name&gt; --replicas &lt;n&gt; &lt;image&gt;
</code></pre></li><li><p><strong>列出服务</strong></p><pre><code class="language-bash">docker service ls
</code></pre></li><li><p><strong>查看服务详情</strong></p><pre><code class="language-bash">docker service inspect &lt;service-name&gt; --pretty
</code></pre></li><li><p><strong>扩缩容服务</strong></p><pre><code class="language-bash">docker service scale &lt;service-name&gt;=&lt;n&gt;
</code></pre></li><li><p><strong>更新服务</strong></p><pre><code class="language-bash">docker service update --image &lt;new-image&gt; &lt;service-name&gt;
</code></pre></li><li><p><strong>删除服务</strong></p><pre><code class="language-bash">docker service rm &lt;service-name&gt;
</code></pre></li></ul><h2>🔁 副本(Replicas)</h2><p>副本定义了某个服务在 Swarm 集群中应运行的实例数量。</p><ul><li><p><strong>创建服务时设置副本数</strong></p><pre><code class="language-bash">docker service create --replicas 5 --name myapp myimage
</code></pre></li><li><p><strong>扩缩容副本</strong></p><pre><code class="language-bash">docker service scale myapp=10
</code></pre></li></ul><p>Swarm 会自动将副本分配到可用的节点上，并在副本失败时自动重启。</p><h2>🐝 任务与容器管理</h2><ul><li><p><strong>列出服务的任务</strong></p><pre><code class="language-bash">docker service ps &lt;service-name&gt;
</code></pre></li><li><p><strong>列出所有任务</strong></p><pre><code class="language-bash">docker node ps &lt;node-name&gt;
</code></pre></li><li><p><strong>列出容器</strong></p><pre><code class="language-bash">docker container ls
</code></pre></li><li><p><strong>查看容器详情</strong></p><pre><code class="language-bash">docker container inspect &lt;container-id&gt;
</code></pre></li></ul><h2>🌐 网络</h2><h3>🧠 什么是覆盖网络(Overlay Network)？</h3><p>覆盖网络(overlay network)是一种跨越多个 Docker 主机的虚拟网络。它允许运行在不同节点上的容器</p><h3>命令</h3><ul><li><p><strong>创建覆盖网络</strong></p><pre><code class="language-bash">docker network create --driver overlay &lt;network-name&gt;
</code></pre></li><li><p><strong>列出网络</strong></p><pre><code class="language-bash">docker network ls
</code></pre></li><li><p><strong>将服务连接到网络</strong></p><pre><code class="language-bash">docker service create --name &lt;service-name&gt; --network &lt;network-name&gt; &lt;image&gt;
</code></pre></li></ul><h2>🛠 常用参数</h2><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td><code>--replicas</code></td><td>服务实例的数量</td></tr><tr><td><code>--publish</code></td><td>端口映射（<code>&lt;host&gt;:&lt;container&gt;</code>）</td></tr><tr><td><code>--mount</code></td><td>卷挂载</td></tr><tr><td><code>--constraint</code></td><td>节点放置规则</td></tr><tr><td><code>--update-delay</code></td><td>更新之间的延迟</td></tr><tr><td><code>--limit-cpu</code> / <code>--limit-memory</code></td><td>资源限制</td></tr></tbody></table><h2>📄 示例：创建一个 Web 服务</h2><pre><code class="language-bash">docker service create \\
  --name web \\
  --replicas 3 \\
  --publish 80:80 \\
  --network webnet \\
  nginx
</code></pre>`,29)]]))}};export{a as default};