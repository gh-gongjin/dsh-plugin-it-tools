import{E as e,F as t,q as n,w as r}from"./vue.runtime.esm-bundler-DZZTqpJU.js";t();var i={class:`markdown-body`},a={__name:`dockerfile`,setup(t,{expose:a}){return a({frontmatter:{}}),(t,a)=>(n(),r(`div`,i,[...a[0]||=[e(`<p>A <strong>Dockerfile</strong> is the recipe for an image: each instruction runs in order and most of them add a layer. Layers are cached, so the order you write them in decides how fast your rebuilds are.</p><pre><code class="language-dockerfile"># syntax=docker/dockerfile:1
FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
CMD [&quot;node&quot;, &quot;server.js&quot;]
</code></pre><blockquote><p>💡 Start the file with <code># syntax=docker/dockerfile:1</code> to get the current BuildKit frontend — that is what enables heredocs, cache mounts and build secrets.</p></blockquote><h2>📋 Instruction Reference</h2><table><thead><tr><th>Instruction</th><th>Purpose</th></tr></thead><tbody><tr><td><code>FROM</code></td><td>The base image, and the start of a build stage</td></tr><tr><td><code>ARG</code></td><td>A build-time variable (<code>--build-arg</code>)</td></tr><tr><td><code>ENV</code></td><td>An environment variable, kept in the final image</td></tr><tr><td><code>WORKDIR</code></td><td>The working directory for the instructions that follow</td></tr><tr><td><code>COPY</code></td><td>Copy files from the context (or another stage) into the image</td></tr><tr><td><code>ADD</code></td><td>Like <code>COPY</code>, but also fetches URLs and unpacks archives</td></tr><tr><td><code>RUN</code></td><td>Execute a command at build time and commit the result</td></tr><tr><td><code>CMD</code></td><td>Default command, easily overridden at <code>docker run</code></td></tr><tr><td><code>ENTRYPOINT</code></td><td>The executable the container always runs</td></tr><tr><td><code>EXPOSE</code></td><td>Document the port the app listens on</td></tr><tr><td><code>USER</code></td><td>The user the following instructions and the container run as</td></tr><tr><td><code>VOLUME</code></td><td>Declare a path that should be a mount point</td></tr><tr><td><code>HEALTHCHECK</code></td><td>How Docker decides the container is healthy</td></tr><tr><td><code>LABEL</code></td><td>Image metadata</td></tr><tr><td><code>SHELL</code></td><td>Change the shell used by the shell form of <code>RUN</code>/<code>CMD</code></td></tr><tr><td><code>STOPSIGNAL</code></td><td>The signal sent to stop the container</td></tr><tr><td><code>ONBUILD</code></td><td>An instruction that runs when this image is used as a base</td></tr></tbody></table><h2>🏗 Base Image &amp; Metadata</h2><pre><code class="language-dockerfile"># pin the base image — &#39;latest&#39; makes builds irreproducible
FROM node:22-alpine

# name a stage so later stages can copy from it
FROM golang:1.23 AS build

# an ARG before the first FROM can parameterise the base image itself
ARG NODE_VERSION=22
FROM node:\${NODE_VERSION}-alpine

# metadata; the OCI keys are the conventional ones
LABEL org.opencontainers.image.source=&quot;https://github.com/acme/app&quot;
LABEL org.opencontainers.image.description=&quot;Acme API&quot;
</code></pre><h2>📂 Files &amp; Working Directory</h2><pre><code class="language-dockerfile"># always set an absolute working directory
WORKDIR /app

# copy from the build context
COPY package*.json ./
COPY . .

# copy and set ownership in one step, no extra layer for chown
COPY --chown=node:node . .

# copy with explicit permissions
COPY --chmod=755 entrypoint.sh /usr/local/bin/

# copy from another stage, or straight from another image
COPY --from=build /src/app /usr/local/bin/app
COPY --from=nginx:alpine /etc/nginx/nginx.conf /etc/nginx/nginx.conf

# ADD unpacks archives and fetches URLs — prefer COPY unless you need that
ADD archive.tar.gz /opt/
ADD https://example.com/file.tar.gz /tmp/

# declare a mount point for data that should not live in the image
VOLUME [&quot;/data&quot;]
</code></pre><h2>⚙️ Build Steps</h2><pre><code class="language-dockerfile"># shell form: runs through /bin/sh -c
RUN apt-get update &amp;&amp; apt-get install -y --no-install-recommends curl \\
    &amp;&amp; rm -rf /var/lib/apt/lists/*

# exec form: no shell, so no globbing or variable expansion
RUN [&quot;npm&quot;, &quot;ci&quot;, &quot;--omit=dev&quot;]

# heredoc: a readable multi-line script (BuildKit)
RUN &lt;&lt;EOF
set -eux
apk add --no-cache curl
adduser -D appuser
EOF

# cache mount: keep the package cache between builds
RUN --mount=type=cache,target=/root/.npm npm ci

# secret mount: use a credential without baking it into a layer
RUN --mount=type=secret,id=npmrc,target=/root/.npmrc npm ci

# bind mount: read from the context without copying it in
RUN --mount=type=bind,source=package.json,target=package.json npm ci
</code></pre><h2>🚀 Runtime Configuration</h2><pre><code class="language-dockerfile"># environment variables are visible to the running container
ENV NODE_ENV=production
ENV PATH=&quot;/app/bin:$PATH&quot;

# document the port — this does not publish it, -p does
EXPOSE 3000

# drop root as early as you can
RUN adduser -D appuser
USER appuser

# tell Docker how to check the app is alive
HEALTHCHECK --interval=30s --timeout=3s --start-period=20s --retries=3 \\
  CMD wget -qO- http://localhost:3000/health || exit 1

# the signal that stops the process cleanly
STOPSIGNAL SIGTERM

# the command the container runs
CMD [&quot;node&quot;, &quot;server.js&quot;]
</code></pre><h2>⚔️ CMD vs ENTRYPOINT</h2><table><thead><tr><th></th><th><code>CMD</code></th><th><code>ENTRYPOINT</code></th></tr></thead><tbody><tr><td>Purpose</td><td>Default arguments, or the whole default command</td><td>The executable the image is built around</td></tr><tr><td><code>docker run &lt;image&gt; other-cmd</code></td><td>Replaced entirely</td><td>Still runs; the argument is appended</td></tr><tr><td>Override flag</td><td>—</td><td><code>--entrypoint</code></td></tr><tr><td>Typical use</td><td><code>CMD [&quot;node&quot;, &quot;server.js&quot;]</code></td><td><code>ENTRYPOINT [&quot;python&quot;, &quot;app.py&quot;]</code></td></tr></tbody></table><pre><code class="language-dockerfile"># together: ENTRYPOINT is the binary, CMD holds the default arguments
ENTRYPOINT [&quot;python&quot;, &quot;app.py&quot;]
CMD [&quot;--port&quot;, &quot;8000&quot;]

# docker run image                 → python app.py --port 8000
# docker run image --port 9000     → python app.py --port 9000
</code></pre><blockquote><p>⚠️ Prefer the <strong>exec form</strong> (<code>[&quot;cmd&quot;, &quot;arg&quot;]</code>). The shell form wraps your process in <code>/bin/sh -c</code>, which swallows <code>SIGTERM</code> and turns graceful shutdown into a ten-second kill.</p></blockquote><h2>🧱 Multi-Stage Builds</h2><p>Several <code>FROM</code> instructions in one file: build with a fat toolchain, ship only the artifact.</p><pre><code class="language-dockerfile"># stage 1 — build
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# stage 2 — the image that actually ships
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD [&quot;nginx&quot;, &quot;-g&quot;, &quot;daemon off;&quot;]
</code></pre><pre><code class="language-dockerfile"># a compiled binary on a near-empty base
FROM golang:1.23 AS build
WORKDIR /src
COPY . .
RUN CGO_ENABLED=0 go build -o /out/app ./cmd/app

FROM gcr.io/distroless/static-debian12
COPY --from=build /out/app /app
USER nonroot:nonroot
ENTRYPOINT [&quot;/app&quot;]
</code></pre><pre><code class="language-bash"># build only up to a named stage — handy for a test or lint stage
docker build --target build -t app:build .
</code></pre><h2>📁 .dockerignore</h2><p>Everything in the build context is sent to the daemon and busts the cache. Exclude what the build does not need:</p><pre><code class="language-plaintext">.git
node_modules
dist
*.log
.env
Dockerfile
.dockerignore
</code></pre><h2>🧠 Best Practices</h2><ul><li><strong>Order by how often things change</strong>: base image, then dependency manifests, then <code>npm ci</code>/<code>pip install</code>, then the source. A source edit should not reinstall dependencies.</li><li><strong>Pin versions</strong> — <code>node:22.11-alpine</code>, not <code>node:latest</code>.</li><li><strong>One <code>RUN</code> per logical step</strong>, chaining installs and cleanup in the same layer (<code>rm -rf /var/lib/apt/lists/*</code>), or the deleted files still weigh on the image.</li><li><strong>Never bake secrets in.</strong> A deleted file stays in the layer below; use <code>--mount=type=secret</code> or build arguments that never reach the final stage.</li><li><strong>Run as a non-root user</strong> and keep the final stage as small as you can (<code>alpine</code>, <code>distroless</code>, <code>scratch</code>).</li><li><strong>Use <code>COPY</code>, not <code>ADD</code>,</strong> unless you specifically want URL fetching or archive extraction.</li><li><strong>Combine with <code>--platform</code></strong> for multi-arch: <code>docker buildx build --platform linux/amd64,linux/arm64</code>.</li></ul><h2>🛠 Building &amp; Running</h2><pre><code class="language-bash"># build from the Dockerfile in this directory
docker build -t my-app .

# build without the cache
docker build --no-cache -t my-app .

# a Dockerfile somewhere else
docker build -f docker/Dockerfile.prod -t my-app .

# pass a build argument
docker build --build-arg NODE_VERSION=20 -t my-app .

# pass a secret (never becomes a layer)
docker build --secret id=npmrc,src=$HOME/.npmrc -t my-app .

# build for another architecture
docker buildx build --platform linux/arm64 -t my-app .

# inspect the layers of the result
docker history my-app

# run it
docker run -p 3000:3000 my-app
</code></pre><h2>📄 Full Example</h2><pre><code class="language-dockerfile"># syntax=docker/dockerfile:1
FROM node:22-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN --mount=type=cache,target=/root/.npm npm ci

FROM node:22-alpine AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:22-alpine
LABEL org.opencontainers.image.source=&quot;https://github.com/acme/app&quot;
ENV NODE_ENV=production
WORKDIR /app
COPY --from=deps --chown=node:node /app/node_modules ./node_modules
COPY --from=build --chown=node:node /app/dist ./dist
USER node
EXPOSE 3000
HEALTHCHECK --interval=30s CMD wget -qO- http://localhost:3000/health || exit 1
CMD [&quot;node&quot;, &quot;dist/server.js&quot;]
</code></pre><h2>📚 Resources</h2><ul><li><a href="https://docs.docker.com/reference/dockerfile/">Dockerfile reference</a></li><li><a href="https://docs.docker.com/build/building/best-practices/">Building best practices</a></li><li><a href="https://docs.docker.com/build/cache/optimize/">BuildKit mounts (cache, secret, bind)</a></li><li><a href="https://docs.docker.com/build/building/multi-stage/">Multi-stage builds</a></li></ul>`,33)]]))}};export{a as default};