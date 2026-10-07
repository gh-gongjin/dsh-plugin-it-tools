import{E as e,F as t,q as n,w as r}from"./vue.runtime.esm-bundler-DZZTqpJU.js";t();var i={class:`markdown-body`},a={__name:`docker-compose`,setup(t,{expose:a}){return a({frontmatter:{}}),(t,a)=>(n(),r(`div`,i,[...a[0]||=[e(`<p><strong>Docker Compose</strong> describes a multi-container application in one YAML file and runs it with a single command. The file declares <em>services</em> (containers), plus the <em>networks</em>, <em>volumes</em>, <em>secrets</em> and <em>configs</em> they use.</p><blockquote><p>ℹ️ The <code>version:</code> key at the top is obsolete — the Compose Spec ignores it. Start the file with <code>services:</code>.</p></blockquote><h2>📁 File Names &amp; Precedence</h2><table><thead><tr><th>File</th><th>Role</th></tr></thead><tbody><tr><td><code>compose.yaml</code></td><td>The preferred name (<code>compose.yml</code> also works)</td></tr><tr><td><code>docker-compose.yaml</code></td><td>Legacy name, still supported</td></tr><tr><td><code>compose.override.yaml</code></td><td>Merged on top of the base file automatically</td></tr><tr><td><code>-f a.yaml -f b.yaml</code></td><td>Explicit list; later files override earlier ones</td></tr><tr><td><code>.env</code></td><td>Variables for interpolation, read from the project directory</td></tr></tbody></table><pre><code class="language-bash"># check what Compose actually resolved, after merges and interpolation
docker compose config

# use a specific set of files
docker compose -f compose.yaml -f compose.prod.yaml up -d
</code></pre><h3>YAML rules that bite</h3><ul><li>Two spaces per indent level, never tabs</li><li>Keys and values are case-sensitive</li><li>Lists use <code>-</code>; quote any string containing <code>:</code>, <code>#</code>, <code>{</code>, <code>}</code> or a leading <code>*</code></li><li><code>yes</code>/<code>no</code>/<code>on</code>/<code>off</code> are booleans — quote them if you mean the words</li></ul><h2>🧱 Minimal Structure</h2><pre><code class="language-yaml">services:
  web:
    image: nginx:1.27
    ports:
      - &#39;8080:80&#39;
    depends_on:
      - api

  api:
    build: .
    environment:
      DATABASE_URL: postgres://db:5432/app
    networks:
      - backend

networks:
  backend:

volumes:
  db-data:
</code></pre><h2>⚙️ Service Options</h2><pre><code class="language-yaml">services:
  app:
    # where the image comes from
    image: myapp:1.2
    build: .
    pull_policy: always

    # identity and lifecycle
    container_name: myapp
    hostname: app
    restart: unless-stopped
    init: true
    stop_grace_period: 30s

    # what it runs
    entrypoint: [&#39;/entrypoint.sh&#39;]
    command: [&#39;node&#39;, &#39;server.js&#39;]
    working_dir: /app
    user: &#39;1000:1000&#39;

    # configuration
    environment:
      NODE_ENV: production
      API_KEY: \${API_KEY}
    env_file:
      - .env
      - .env.production

    # connectivity
    ports:
      - &#39;8080:80&#39;
    expose:
      - &#39;9000&#39;
    networks:
      - frontend
    extra_hosts:
      - &#39;host.docker.internal:host-gateway&#39;
    dns:
      - 1.1.1.1

    # storage
    volumes:
      - db-data:/var/lib/data
      - ./src:/app/src:ro
    tmpfs:
      - /tmp

    # ordering and health
    depends_on:
      db:
        condition: service_healthy
    healthcheck:
      test: [&#39;CMD&#39;, &#39;curl&#39;, &#39;-f&#39;, &#39;http://localhost/health&#39;]
      interval: 30s
      timeout: 5s
      retries: 3
      start_period: 20s

    # host access and limits
    cap_add:
      - SYS_PTRACE
    devices:
      - /dev/dri:/dev/dri
    ulimits:
      nofile: 65535
    deploy:
      resources:
        limits:
          cpus: &#39;1.5&#39;
          memory: 512M

    # bookkeeping
    labels:
      com.example.team: platform
    logging:
      driver: json-file
      options:
        max-size: &#39;10m&#39;
        max-file: &#39;3&#39;
</code></pre><h2>🏗 Build Options</h2><pre><code class="language-yaml">services:
  app:
    build:
      context: .
      dockerfile: docker/Dockerfile
      target: production
      args:
        NODE_VERSION: &#39;22&#39;
      cache_from:
        - myapp:cache
      secrets:
        - npmrc
      platforms:
        - linux/amd64
        - linux/arm64
    image: myapp:1.2 # the name given to the built image
</code></pre><h2>📦 Volumes</h2><pre><code class="language-yaml">services:
  db:
    volumes:
      # named volume — managed by Docker, survives &#39;down&#39;
      - db-data:/var/lib/postgresql/data
      # bind mount — a host path, read-only
      - ./config:/etc/app:ro
      # anonymous volume — keeps node_modules out of the bind mount above
      - /app/node_modules
      # long syntax
      - type: bind
        source: ./src
        target: /app/src
        read_only: true

volumes:
  db-data:
  shared:
    external: true # created outside Compose
  nfs-data:
    driver_opts:
      type: nfs
      o: addr=10.0.0.10,rw
      device: &#39;:/exports/data&#39;
</code></pre><h2>🌐 Networks</h2><pre><code class="language-yaml">services:
  web:
    networks:
      - frontend
  api:
    networks:
      frontend:
        aliases:
          - api.internal
      backend:

networks:
  frontend:
    driver: bridge
  backend:
    internal: true # no outbound access
  existing:
    external: true
    name: some-other-network
</code></pre><blockquote><p>💡 Compose creates a default network per project and every service joins it, so containers already reach each other by service name. Declare networks when you want to <em>separate</em> things.</p></blockquote><h2>🔀 Ports</h2><pre><code class="language-yaml">services:
  web:
    ports:
      - &#39;8080:80&#39; # host:container
      - &#39;127.0.0.1:8080:80&#39; # bind to one interface only
      - &#39;8080-8090:80-90&#39; # a range
      - &#39;80&#39; # random host port
      - target: 80 # long syntax
        published: &#39;8080&#39;
        protocol: tcp
        mode: host
</code></pre><h2>🧬 Environment Variables</h2><pre><code class="language-yaml">services:
  app:
    environment:
      # map form (preferred)
      LOG_LEVEL: debug
      # take the value from the shell or .env
      API_KEY: \${API_KEY}
      # with a default, and a hard requirement
      PORT: \${PORT:-3000}
      DB_URL: \${DB_URL:?DB_URL must be set}
    env_file:
      - path: .env.production
        required: false
</code></pre><pre><code class="language-bash"># variables come from the shell, .env, and --env-file, in that order of precedence
API_KEY=abc docker compose up -d
docker compose --env-file .env.staging up -d
</code></pre><h2>🩺 Healthchecks &amp; Startup Order</h2><p><code>depends_on</code> on its own only waits for the container to <em>start</em>. Wait for it to be <strong>healthy</strong> instead:</p><pre><code class="language-yaml">services:
  db:
    image: postgres:16
    healthcheck:
      test: [&#39;CMD-SHELL&#39;, &#39;pg_isready -U postgres&#39;]
      interval: 10s
      timeout: 5s
      retries: 5
      start_period: 30s

  api:
    image: myapi
    depends_on:
      db:
        condition: service_healthy # or service_started, service_completed_successfully
</code></pre><h2>🔄 Restart Policies</h2><table><thead><tr><th>Policy</th><th>Behaviour</th></tr></thead><tbody><tr><td><code>no</code></td><td>Never restart (the default)</td></tr><tr><td><code>on-failure</code></td><td>Restart only on a non-zero exit — <code>on-failure:5</code> to cap tries</td></tr><tr><td><code>always</code></td><td>Always restart, including after a daemon restart</td></tr><tr><td><code>unless-stopped</code></td><td>Like <code>always</code>, but stays stopped if you stopped it yourself</td></tr></tbody></table><h2>🧩 Profiles</h2><p>Profiles keep optional services out of the way until you ask for them.</p><pre><code class="language-yaml">services:
  web:
    image: nginx # no profile: always started

  debug:
    image: busybox
    command: top
    profiles: [debug]

  seed:
    image: myapp
    command: npm run seed
    profiles: [tools]
</code></pre><pre><code class="language-bash"># start the default services plus one profile
docker compose --profile debug up -d

# several at once
docker compose --profile debug --profile tools up -d

# COMPOSE_PROFILES works too
COMPOSE_PROFILES=debug,tools docker compose up -d
</code></pre><h2>👀 Watch Mode</h2><p><code>docker compose watch</code> syncs or rebuilds automatically as you edit — a dev loop without bind-mount surprises.</p><pre><code class="language-yaml">services:
  web:
    build: .
    develop:
      watch:
        - action: sync
          path: ./src
          target: /app/src
        - action: rebuild
          path: package.json
        - action: sync+restart
          path: ./config
          target: /etc/app
</code></pre><pre><code class="language-bash">docker compose watch
</code></pre><h2>♻️ Reuse: include, extends &amp; anchors</h2><pre><code class="language-yaml"># pull in another compose file as if it were written here
include:
  - path: ./monitoring/compose.yaml

services:
  # inherit another service&#39;s definition
  worker:
    extends:
      file: common.yaml
      service: base-app
    command: [&quot;node&quot;, &quot;worker.js&quot;]

# YAML anchors for repeated blocks
x-logging: &amp;default-logging
  driver: json-file
  options:
    max-size: &quot;10m&quot;

services:
  api:
    logging: *default-logging
  web:
    logging: *default-logging
</code></pre><h2>🔐 Secrets &amp; Configs</h2><p>File-based secrets work in plain Compose: each one is mounted read-only at <code>/run/secrets/&lt;name&gt;</code>. External secrets and configs require Swarm.</p><pre><code class="language-yaml">services:
  db:
    image: postgres:16
    environment:
      POSTGRES_PASSWORD_FILE: /run/secrets/db_password
    secrets:
      - db_password
    configs:
      - source: pg_conf
        target: /etc/postgresql/postgresql.conf

secrets:
  db_password:
    file: ./db_password.txt
  api_token:
    external: true # Swarm only

configs:
  pg_conf:
    file: ./postgresql.conf
</code></pre><h2>🖥 GPU &amp; Device Access</h2><pre><code class="language-yaml">services:
  # NVIDIA — needs the NVIDIA Container Toolkit on the host
  cuda-app:
    image: nvidia/cuda:12.4.1-base-ubuntu22.04
    deploy:
      resources:
        reservations:
          devices:
            - driver: nvidia
              count: all # or: device_ids: [&quot;0&quot;]
              capabilities: [gpu]

  # Intel iGPU — VAAPI/OpenCL through the render device
  igpu-app:
    image: intel/openvino
    devices:
      - /dev/dri:/dev/dri
    group_add:
      - video
</code></pre><h2>🚀 Everyday Commands</h2><pre><code class="language-bash"># start everything in the background
docker compose up -d

# rebuild the images first
docker compose up -d --build

# start one service and what it depends on
docker compose up -d &lt;service&gt;

# recreate containers even if nothing changed
docker compose up -d --force-recreate

# stop and remove containers and networks
docker compose down

# also remove the named volumes and local images
docker compose down -v --rmi local

# what is running, including health
docker compose ps

# follow the logs
docker compose logs -f
docker compose logs -f --tail 100 &lt;service&gt;

# a shell inside a running service
docker compose exec &lt;service&gt; sh

# a one-off container for a task
docker compose run --rm &lt;service&gt; npm test

# rebuild, pull, restart
docker compose build --no-cache
docker compose pull
docker compose restart &lt;service&gt;

# scale a stateless service
docker compose up -d --scale worker=3

# validate and print the effective configuration
docker compose config
docker compose config --services

# processes and resource usage
docker compose top
docker compose stats
</code></pre><h2>⚔️ Compose vs Swarm Stacks</h2><p>Both read a Compose file, but <code>docker stack deploy</code> honours a different subset of it.</p><table><thead><tr><th>Key</th><th><code>docker compose</code></th><th><code>docker stack deploy</code></th></tr></thead><tbody><tr><td><code>build:</code></td><td>✅ builds locally</td><td>❌ ignored — push the image to a registry first</td></tr><tr><td><code>restart:</code></td><td>✅</td><td>❌ use <code>deploy.restart_policy</code></td></tr><tr><td><code>depends_on:</code></td><td>✅</td><td>❌ ignored — rely on health checks and retries</td></tr><tr><td><code>profiles:</code></td><td>✅</td><td>❌</td></tr><tr><td><code>develop.watch:</code></td><td>✅</td><td>❌</td></tr><tr><td><code>deploy.replicas/placement</code></td><td>❌ ignored</td><td>✅ this is how you scale</td></tr><tr><td><code>configs:</code> / external <code>secrets:</code></td><td>❌ external ones need Swarm</td><td>✅</td></tr><tr><td><code>healthcheck:</code></td><td>✅</td><td>✅ also drives rescheduling</td></tr><tr><td><code>volumes:</code> / <code>networks:</code></td><td>✅</td><td>✅ (overlay networks in Swarm)</td></tr></tbody></table><blockquote><p>🧭 Keep <code>compose.yaml</code> for local development and a separate <code>stack.yaml</code> for Swarm, or put the Swarm-only bits in an override file.</p></blockquote><h2>📚 Resources</h2><ul><li><a href="https://docs.docker.com/reference/compose-file/">Compose file reference</a></li><li><a href="https://docs.docker.com/reference/cli/docker/compose/"><code>docker compose</code> CLI reference</a></li><li><a href="https://docs.docker.com/compose/how-tos/file-watch/">Compose watch</a></li><li><a href="https://docs.docker.com/compose/how-tos/environment-variables/">Environment variables and interpolation</a></li><li><a href="https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/install-guide.html">NVIDIA Container Toolkit</a></li></ul>`,51)]]))}};export{a as default};