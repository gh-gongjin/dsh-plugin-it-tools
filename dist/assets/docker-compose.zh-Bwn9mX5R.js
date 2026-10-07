import{E as e,F as t,q as n,w as r}from"./vue.runtime.esm-bundler-DZZTqpJU.js";t();var i={class:`markdown-body`},a={__name:`docker-compose.zh`,setup(t,{expose:a}){return a({frontmatter:{}}),(t,a)=>(n(),r(`div`,i,[...a[0]||=[e(`<p>Docker Compose 是一个用于定义和运行多容器 Docker 应用程序的强大工具。它使用一个 YAML 文件（<code>compose.yaml</code>）来配置应用服务、网络、卷等。该文件允许开发者以声明式的方式描述基础设施和依赖关系，从而更轻松地管理复杂的环境。</p><p>无论你是在搭建本地开发环境，还是部署到生产环境，Compose 都能简化编排过程，并让你的配置保持可读、可版本控制。</p><h2>📁 文件名</h2><pre><code class="language-yaml">compose.yaml
</code></pre><h3>✅ YAML 格式规则</h3><ul><li>缩进使用 <strong>2 个空格</strong>（不要使用制表符）</li><li>键和值是 <strong>区分大小写</strong> 的</li><li>列表使用 <code>-</code> 表示每一项</li><li>包含特殊字符的字符串应使用引号括起来</li><li>环境变量可以内联定义，也可以通过 <code>.env</code> 文件定义</li></ul><h2>🧱 基本结构</h2><pre><code class="language-yaml">services:
  service_name:
    image: image_name:tag
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - &#39;host_port:container_port&#39;
    volumes:
      - ./host_path:/container_path
    environment:
      - VAR_NAME=value
    depends_on:
      - other_service
    networks:
      - custom_network
networks:
  custom_network:
    driver: bridge
volumes:
  custom_volume:
</code></pre><h2>⚙️ 服务（Services）</h2><p>每个 service 都定义一个容器。</p><h3>常用服务选项</h3><pre><code class="language-yaml">services:
  web:
    image: nginx:latest
    build:
      context: ./app
      dockerfile: Dockerfile
    command: [&#39;nginx&#39;, &#39;-g&#39;, &#39;daemon off;&#39;]
    container_name: custom_name
    ports:
      - &#39;8080:80&#39;
    expose:
      - &#39;80&#39;
    environment:
      - DEBUG=true
    env_file:
      - .env
    volumes:
      - ./data:/data
    restart: always
    depends_on:
      - db
    networks:
      - frontend
    healthcheck:
      test: [&#39;CMD&#39;, &#39;curl&#39;, &#39;-f&#39;, &#39;http://localhost&#39;]
      interval: 30s
      timeout: 10s
      retries: 5
</code></pre><h2>🏗️ 构建选项（Build Options）</h2><pre><code class="language-yaml">build:
  context: ./dir
  dockerfile: Dockerfile
  args:
    build_arg: value
  target: build-stage
</code></pre><ul><li><strong><code>build:</code></strong> 告诉 Compose 如何构建镜像。 <ul><li><code>context:</code> 是包含 Dockerfile 和源代码的目录。</li><li><code>dockerfile:</code> 允许你指定自定义的 Dockerfile 名称或路径。</li></ul></li></ul><h2>📦 卷（Volumes）</h2><pre><code class="language-yaml">volumes:
  data_volume:
    driver: local
    driver_opts:
      type: none
      device: /path/on/host
      o: bind
</code></pre><h3>挂载卷</h3><pre><code class="language-yaml">volumes:
  - data_volume:/app/data
  - ./local:/container/path
</code></pre><ul><li><strong><code>volumes:</code></strong> 将宿主机目录或具名卷挂载到容器中。 <ul><li><code>./src:/app/src</code> 将本地的 <code>src</code> 文件夹挂载到容器中的 <code>/app/src</code>。</li></ul></li></ul><h2>🌐 网络（Networks）</h2><pre><code class="language-yaml">networks:
  frontend:
    driver: bridge
  backend:
    driver: overlay
</code></pre><ul><li><strong><code>networks:</code></strong> 将服务连接到一个或多个自定义网络。可实现服务发现和隔离。</li></ul><h3>为服务分配网络</h3><pre><code class="language-yaml">services:
  app:
    networks:
      - frontend
      - backend
</code></pre><h2>🌐 端口（Ports）</h2><pre><code class="language-yaml">ports:
  - &#39;3000:3000&#39;
</code></pre><ul><li><strong><code>ports:</code></strong> 将容器端口映射到宿主机端口。格式为 <code>&quot;宿主机:容器&quot;</code>。常用于将服务暴露给本机访问。</li></ul><h2>🔐 密钥（Secrets，仅 Docker Swarm）</h2><pre><code class="language-yaml">secrets:
  db_password:
    file: ./db_password.txt

services:
  db:
    secrets:
      - db_password
</code></pre><h2>🔑 配置（Configs，仅 Docker Swarm）</h2><pre><code class="language-yaml">configs:
  my_config:
    file: ./config.txt

services:
  app:
    configs:
      - source: my_config
        target: /etc/config.txt
</code></pre><h2>🧪 健康检查（Healthcheck）</h2><pre><code class="language-yaml">healthcheck:
  test: [&#39;CMD&#39;, &#39;curl&#39;, &#39;-f&#39;, &#39;http://localhost&#39;]
  interval: 30s
  timeout: 10s
  retries: 3
  start_period: 5s
</code></pre><ul><li><strong><code>healthcheck:</code></strong> 定义 Docker 如何检查容器是否健康。 <ul><li><code>test:</code> 要运行的命令</li><li><code>interval:</code> 检查的间隔时间</li><li><code>timeout:</code> 等待响应的超时时间</li><li><code>retries:</code> 在标记为不健康之前允许失败的次数</li></ul></li></ul><h2>🔄 重启策略（Restart Policies）</h2><pre><code class="language-yaml">restart: no         # 从不重启
restart: always     # 总是重启
restart: on-failure # 失败时重启
restart: unless-stopped
</code></pre><h2>🧬 环境变量（Environment Variables）</h2><pre><code class="language-yaml">environment:
  - VAR1=value1
  - VAR2=value2
env_file:
  - .env
</code></pre><ul><li><strong><code>environment:</code></strong> 在容器内设置环境变量。常用于配置。</li><li><strong><code>env_file:</code></strong> 从文件加载环境变量。可以将密钥和配置与 Compose 文件分离。</li></ul><h2>命令（Command）</h2><pre><code class="language-yaml">command: npm start
</code></pre><ul><li><strong><code>command:</code></strong> 覆盖 Dockerfile 中定义的默认命令。常用于自定义容器行为。</li></ul><h2>依赖（Dependencies）</h2><pre><code class="language-yaml">depends_on:
  - db
</code></pre><ul><li><strong><code>depends_on:</code></strong> 指定服务的启动顺序。在 Compose 中，这并不会等待服务&quot;就绪&quot;——只是&quot;已启动&quot;。</li></ul><h2>🧹 清理（Clean Up）</h2><pre><code class="language-bash">docker compose down         # 停止并删除容器、网络、卷
docker compose down -v      # 同时删除具名卷
</code></pre><h2>🚀 命令（Commands）</h2><table><thead><tr><th>命令</th><th>描述</th></tr></thead><tbody><tr><td><code>docker compose up</code></td><td>启动服务</td></tr><tr><td><code>docker compose up -d</code></td><td>以分离（后台）模式启动</td></tr><tr><td><code>docker compose down</code></td><td>停止并删除服务</td></tr><tr><td><code>docker compose build</code></td><td>构建镜像</td></tr><tr><td><code>docker compose ps</code></td><td>列出容器</td></tr><tr><td><code>docker compose logs</code></td><td>查看日志</td></tr><tr><td><code>docker compose exec &lt;service&gt; &lt;cmd&gt;</code></td><td>在容器中执行命令</td></tr><tr><td><code>docker compose config</code></td><td>校验并查看配置</td></tr></tbody></table><h2>🧠 挂载 GPU / iGPU</h2><p>Docker Compose 通过 <code>device_requests</code> 字段支持 GPU 访问（Compose v3.8+ 和 Docker 19.03+）。</p><h3>✅ NVIDIA GPU 示例</h3><pre><code class="language-yaml">services:
  gpu-app:
    image: nvidia/cuda:11.0-base
    deploy:
      resources:
        reservations:
          devices:
            - driver: nvidia
              count: all
              capabilities: [gpu]
</code></pre><h3>✅ Intel iGPU（通过 VAAPI 或 OpenCL）</h3><pre><code class="language-yaml">services:
  igpu-app:
    image: intel/openvino
    devices:
      - /dev/dri:/dev/dri
</code></pre><blockquote><p>🔧 请确保你的宿主机上安装了必要的驱动和运行时（例如 NVIDIA Container Toolkit 或 Intel Media SDK）。</p></blockquote><h2>🔄 Compose 与 Swarm YAML 差异</h2><table><thead><tr><th>特性</th><th>Docker Compose (<code>compose.yaml</code>)</th><th>Docker Swarm (<code>stack.yml</code>)</th></tr></thead><tbody><tr><td><code>restart</code></td><td>✅ 支持</td><td>❌ 不支持</td></tr><tr><td><code>depends_on</code></td><td>✅ 支持</td><td>❌ 不支持</td></tr><tr><td><code>deploy</code></td><td>❌ 忽略</td><td>✅ 副本数必需</td></tr><tr><td><code>build</code></td><td>✅ 支持</td><td>❌ 不支持</td></tr><tr><td><code>volumes</code>（bind）</td><td>✅ 支持</td><td>✅ 支持</td></tr><tr><td><code>configs</code> / <code>secrets</code></td><td>❌ 忽略</td><td>✅ 支持</td></tr><tr><td><code>healthcheck</code></td><td>✅ 支持</td><td>✅ 支持</td></tr></tbody></table><blockquote><p>🧠 <strong>提示：</strong> 本地开发请使用 <code>compose.yaml</code>，Swarm 部署请使用 <code>stack.yml</code>。</p></blockquote><h2>🧬 Profiles（Compose v3.9+）</h2><p>Profiles 允许根据当前激活的 profile 有条件地包含服务。这对于区分 dev / test / staging 环境非常有用。</p><h3>✅ 定义 Profiles</h3><pre><code class="language-yaml">services:
  web:
    image: nginx
    profiles:
      - default

  debug:
    image: busybox
    command: top
    profiles:
      - debug
</code></pre><h3>✅ 激活 Profiles</h3><pre><code class="language-bash">docker compose --profile debug up
</code></pre><h3>✅ 注意事项</h3><ul><li>没有 <code>profiles</code> 键的服务始终会被包含。</li><li>多个 profile 可以同时激活。</li><li>适用于功能开关、可选服务或针对不同环境的配置。</li></ul><h2>⚔️ YAML 差异：Docker Compose 与 Docker Swarm 模式</h2><p>Docker Compose 和 Docker Swarm 都使用 YAML 文件来定义服务，但它们用途不同，支持的特性也不同。Compose 针对本地开发和测试进行了优化，而 Swarm 则是为跨集群的生产级编排而设计。</p><h3>🧭 用途</h3><table><thead><tr><th>模式</th><th>用途</th></tr></thead><tbody><tr><td>Compose</td><td>本地开发、测试</td></tr><tr><td>Swarm</td><td>集群部署、扩缩容</td></tr></tbody></table><h3>🧩 YAML 结构上的关键差异</h3><table><thead><tr><th>特性</th><th>Compose (<code>compose.yaml</code>)</th><th>Swarm (<code>stack.yml</code>)</th></tr></thead><tbody><tr><td><code>build:</code></td><td>✅ 支持</td><td>❌ 忽略</td></tr><tr><td><code>restart:</code></td><td>✅ 支持</td><td>❌ 忽略</td></tr><tr><td><code>depends_on:</code></td><td>✅ 支持</td><td>❌ 忽略</td></tr><tr><td><code>deploy:</code></td><td>❌ 忽略</td><td>✅ 扩缩容、调度必需</td></tr><tr><td><code>configs:</code></td><td>❌ 忽略</td><td>✅ 支持</td></tr><tr><td><code>secrets:</code></td><td>❌ 忽略</td><td>✅ 支持</td></tr><tr><td><code>healthcheck:</code></td><td>✅ 支持</td><td>✅ 支持</td></tr><tr><td><code>volumes:</code>（bind）</td><td>✅ 支持</td><td>✅ 支持</td></tr><tr><td><code>networks:</code></td><td>✅ 支持</td><td>✅ 支持</td></tr><tr><td><code>profiles:</code></td><td>✅ 支持（v3.9+）</td><td>❌ 不支持</td></tr></tbody></table><h3>🔧 仅 Compose 支持的特性</h3><p>以下特性对本地开发很有用，但在 Swarm 中会被忽略：</p><h4><code>build:</code></h4><pre><code class="language-yaml">services:
  app:
    build:
      context: .
      dockerfile: Dockerfile
</code></pre><ul><li>Compose 在本地构建镜像。</li><li>Swarm 要求使用已推送到镜像仓库的预构建镜像。</li></ul><h4><code>restart:</code></h4><pre><code class="language-yaml">restart: unless-stopped
</code></pre><ul><li>Compose 使用此配置自动重启容器。</li><li>Swarm 使用 <code>deploy.restart_policy</code>。</li></ul><h4><code>depends_on:</code></h4><pre><code class="language-yaml">depends_on:
  - db
</code></pre><ul><li>Compose 按顺序启动服务。</li><li>Swarm 会忽略此配置；请使用 healthcheck 和 wait-for-it 脚本。</li></ul><h3>🛡️ 仅 Swarm 支持的特性</h3><p>以下特性是 Swarm 独有的，Compose 会忽略：</p><h4><code>deploy:</code></h4><pre><code class="language-yaml">services:
  app:
    deploy:
      replicas: 3
      placement:
        constraints:
          - node.role == manager
      restart_policy:
        condition: on-failure
</code></pre><ul><li>用于在集群中控制扩缩容、调度和重启行为。</li></ul><h4><code>configs:</code> 和 <code>secrets:</code></h4><pre><code class="language-yaml">configs:
  app_config:
    file: ./config.yml

secrets:
  db_password:
    file: ./password.txt
</code></pre><ul><li>用于在节点间安全地分发配置和密钥。</li></ul><h4><code>placement:</code>（位于 <code>deploy</code> 内）</h4><pre><code class="language-yaml">placement:
  constraints:
    - node.labels.env == production
</code></pre><ul><li>根据 label 将服务分配到指定节点。</li></ul><h3>🧪 健康检查（两者均支持）</h3><pre><code class="language-yaml">healthcheck:
  test: [&#39;CMD&#39;, &#39;curl&#39;, &#39;-f&#39;, &#39;http://localhost&#39;]
  interval: 30s
  timeout: 10s
  retries: 3
</code></pre><ul><li>在 Compose 和 Swarm 中均可使用。</li><li>在 Swarm 中，健康状态会影响服务的重新调度。</li></ul><h3>📦 卷的差异</h3><table><thead><tr><th>类型</th><th>Compose</th><th>Swarm</th></tr></thead><tbody><tr><td>Bind mount（绑定挂载）</td><td>✅</td><td>✅</td></tr><tr><td>Named volume（具名卷）</td><td>✅</td><td>✅</td></tr><tr><td>External volume（外部卷）</td><td>✅</td><td>✅</td></tr><tr><td>Volume driver options（卷驱动选项）</td><td>✅</td><td>✅</td></tr></tbody></table><p>Swarm 要求外部卷必须预先在所有节点上创建好。</p><h3>🧠 总结</h3><table><thead><tr><th>特性类别</th><th>Compose</th><th>Swarm</th></tr></thead><tbody><tr><td>本地构建</td><td>✅</td><td>❌</td></tr><tr><td>集群扩缩容</td><td>❌</td><td>✅</td></tr><tr><td>Secrets / Configs</td><td>❌</td><td>✅</td></tr><tr><td>Profiles</td><td>✅</td><td>❌</td></tr><tr><td>重启策略</td><td>✅</td><td>✅（通过 <code>deploy</code>）</td></tr><tr><td>服务依赖</td><td>✅</td><td>❌</td></tr></tbody></table><blockquote><p>🧭 <strong>提示：</strong> 开发请使用 <code>compose.yaml</code>，Swarm 请使用 <code>stack.yml</code>。你也可以将配置拆分为多个文件，或使用 <code>kompose</code> 等工具将 Kubernetes 的清单进行转换。</p></blockquote><h2>📚 资源</h2><ul><li><a href="https://docs.docker.com/compose/compose-file/">Compose 文件参考</a></li><li><a href="https://docs.docker.com/engine/reference/commandline/compose/">Docker CLI 参考</a></li><li><a href="https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/install-guide.html">NVIDIA GPU 支持</a></li><li><a href="https://github.com/intel/media-driver">Intel GPU 支持</a></li></ul>`,107)]]))}};export{a as default};