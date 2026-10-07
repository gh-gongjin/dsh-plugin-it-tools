import{E as e,F as t,q as n,w as r}from"./vue.runtime.esm-bundler-DZZTqpJU.js";t();var i={class:`markdown-body`},a={__name:`docker`,setup(t,{expose:a}){return a({frontmatter:{}}),(t,a)=>(n(),r(`div`,i,[...a[0]||=[e(`<p><strong>Docker</strong> packages an application and everything it needs into a <em>container</em> — a lightweight, isolated process that runs the same way on any host. Images are the immutable blueprints; containers are running instances of them.</p><ul><li><strong>Image</strong> — a read-only template built from a <code>Dockerfile</code></li><li><strong>Container</strong> — a running (or stopped) instance of an image</li><li><strong>Volume</strong> — storage that outlives the container that wrote it</li><li><strong>Network</strong> — a virtual network where containers reach each other by name</li><li><strong>Registry</strong> — where images are pushed and pulled (Docker Hub, GHCR, ECR, …)</li></ul><blockquote><p>💡 Every subcommand has its own help: <code>docker run --help</code>, <code>docker compose up --help</code>.</p></blockquote><h2>⚡ Most-Used Commands</h2><table><thead><tr><th>Command</th><th>What it does</th></tr></thead><tbody><tr><td><code>docker ps -a</code></td><td>List all containers, running or not</td></tr><tr><td><code>docker images</code></td><td>List local images</td></tr><tr><td><code>docker run -it --rm &lt;image&gt; sh</code></td><td>Throwaway shell in a fresh container</td></tr><tr><td><code>docker exec -it &lt;container&gt; sh</code></td><td>Shell inside a <em>running</em> container</td></tr><tr><td><code>docker logs -f &lt;container&gt;</code></td><td>Follow a container’s output</td></tr><tr><td><code>docker build -t &lt;name&gt;:&lt;tag&gt; .</code></td><td>Build an image from the local <code>Dockerfile</code></td></tr><tr><td><code>docker compose up -d --build</code></td><td>Rebuild and start a whole stack</td></tr><tr><td><code>docker system df</code></td><td>See what is eating your disk</td></tr></tbody></table><h2>🧭 General</h2><pre><code class="language-bash"># start the Docker daemon (usually done by the service manager)
dockerd

# top-level help; works on every subcommand
docker --help

# system-wide information: storage driver, resources, warnings
docker info

# client and server versions
docker version

# list contexts (local socket, remote hosts, ...)
docker context ls

# target another daemon with the same commands
docker context use &lt;ctx&gt;

# live stream of daemon events
docker events
</code></pre><h2>📦 Images</h2><p>An image is a stack of read-only layers: code, runtime, libraries and settings baked together.</p><pre><code class="language-bash"># build from the Dockerfile in this directory
docker build -t &lt;image&gt; .

# build and tag, e.g. myapp:1.2
docker build -t &lt;image&gt;:&lt;tag&gt; .

# rebuild every layer from scratch
docker build -t &lt;image&gt; . --no-cache

# use a Dockerfile somewhere else
docker build -f &lt;path&gt;/Dockerfile -t &lt;image&gt; .

# pass a build argument
docker build --build-arg KEY=value -t &lt;image&gt; .

# stop at a stage of a multi-stage build
docker build --target &lt;stage&gt; -t &lt;image&gt; .

# build for another architecture
docker build --platform linux/amd64 -t &lt;image&gt; .

# list local images
docker images

# include intermediate layers
docker images -a

# add a name for a registry
docker tag &lt;image&gt; &lt;user&gt;/&lt;image&gt;:&lt;tag&gt;

# full metadata as JSON
docker inspect &lt;image&gt;

# layers, sizes and the commands behind them
docker history &lt;image&gt;

# delete an image
docker rmi &lt;image&gt;

# force-delete an image containers still reference
docker rmi -f &lt;image&gt;

# remove dangling images
docker image prune

# remove every image no container uses
docker image prune -a

# export an image to a tarball
docker save -o &lt;file&gt;.tar &lt;image&gt;

# import an image from a tarball
docker load -i &lt;file&gt;.tar
</code></pre><h2>🐳 Registries &amp; Docker Hub</h2><p><a href="https://hub.docker.com">Docker Hub</a> is the default public registry; the same commands work against any other one.</p><pre><code class="language-bash"># log in to Docker Hub
docker login -u &lt;username&gt;

# log in to a private registry (GHCR, ECR, ...)
docker login &lt;registry-url&gt;

# drop the stored credentials
docker logout

# search Docker Hub from the terminal
docker search &lt;term&gt;

# pull the :latest tag
docker pull &lt;image&gt;

# pull a specific tag
docker pull &lt;image&gt;:&lt;tag&gt;

# pull for another architecture
docker pull --platform linux/arm64 &lt;image&gt;

# publish an image
docker push &lt;user&gt;/&lt;image&gt;:&lt;tag&gt;

# architectures available for a tag
docker manifest inspect &lt;image&gt;:&lt;tag&gt;
</code></pre><h2>🚢 Running Containers</h2><pre><code class="language-bash"># create and start a container
docker run &lt;image&gt;

# give it a stable name
docker run --name &lt;container&gt; &lt;image&gt;

# detached: run in the background
docker run -d &lt;image&gt;

# interactive shell (sh on minimal images)
docker run -it &lt;image&gt; bash

# delete the container as soon as it exits
docker run --rm &lt;image&gt;

# publish a port, e.g. -p 8080:80
docker run -p &lt;host&gt;:&lt;container&gt; &lt;image&gt;

# publish every EXPOSEd port on random ports
docker run -P &lt;image&gt;

# set an environment variable
docker run -e KEY=value &lt;image&gt;

# load environment variables from a file
docker run --env-file ./.env &lt;image&gt;

# mount a named volume
docker run -v &lt;volume&gt;:/data &lt;image&gt;

# bind-mount the current directory
docker run -v $(pwd):/app &lt;image&gt;

# bind-mount the current directory read-only
docker run -v $(pwd):/app:ro &lt;image&gt;

# set the working directory
docker run -w /app &lt;image&gt; &lt;command&gt;

# run as your own UID/GID, not root
docker run -u $(id -u):$(id -g) &lt;image&gt;

# attach to a user-defined network
docker run --network &lt;network&gt; &lt;image&gt;

# restart policy, see the flags table below
docker run --restart unless-stopped &lt;image&gt;

# cap the resources it may use
docker run --memory 512m --cpus 1.5 &lt;image&gt;

# override the image entrypoint
docker run --entrypoint &lt;cmd&gt; &lt;image&gt;

# create without starting
docker create --name &lt;container&gt; &lt;image&gt;
</code></pre><h2>🎛 Managing Containers</h2><pre><code class="language-bash"># running containers
docker ps

# every container, running or exited
docker ps -a

# IDs only — handy for scripting
docker ps -q

# filter by status, name, label, ancestor, ...
docker ps --filter &quot;status=exited&quot;

# start a stopped container
docker start &lt;container&gt;

# graceful stop (SIGTERM, then SIGKILL)
docker stop &lt;container&gt;

# stop and start again
docker restart &lt;container&gt;

# immediate SIGKILL
docker kill &lt;container&gt;

# freeze all processes in the container
docker pause &lt;container&gt;

# resume them
docker unpause &lt;container&gt;

# remove a stopped container
docker rm &lt;container&gt;

# stop and remove in one go
docker rm -f &lt;container&gt;

# rename a container
docker rename &lt;old&gt; &lt;new&gt;

# change resource limits or restart policy live
docker update --restart=always &lt;container&gt;

# remove every stopped container
docker container prune

# block until it exits, then print its exit code
docker wait &lt;container&gt;
</code></pre><h2>🔍 Inspecting &amp; Debugging</h2><pre><code class="language-bash"># shell inside a running container
docker exec -it &lt;container&gt; bash

# for alpine/distroless-style images
docker exec -it &lt;container&gt; sh

# get in as root to install debug tools
docker exec -it -u root &lt;container&gt; sh

# run a one-off command
docker exec &lt;container&gt; &lt;command&gt;

# print the container&#39;s output
docker logs &lt;container&gt;

# follow it, like tail -f
docker logs -f &lt;container&gt;

# last 100 lines, with timestamps
docker logs --tail 100 -t &lt;container&gt;

# only the last 10 minutes
docker logs --since 10m &lt;container&gt;

# low-level details as JSON
docker inspect &lt;container&gt;

# one field via a Go template
docker inspect -f &#39;{{.State.Status}}&#39; &lt;container&gt;

# the container&#39;s IP address on the default bridge
docker inspect -f &#39;{{.NetworkSettings.IPAddress}}&#39; &lt;container&gt;

# live CPU/memory/IO for all containers
docker stats

# processes running inside
docker top &lt;container&gt;

# published port mappings
docker port &lt;container&gt;

# filesystem changes since it started
docker diff &lt;container&gt;

# copy a file out of a container
docker cp &lt;container&gt;:/path/file ./

# copy a file into a container
docker cp ./file &lt;container&gt;:/path/

# snapshot a container as a new image
docker commit &lt;container&gt; &lt;image&gt;:&lt;tag&gt;

# attach to the main process (Ctrl-P Ctrl-Q detaches)
docker attach &lt;container&gt;
</code></pre><h2>💾 Volumes</h2><p>Volumes keep data outside the container’s writable layer, so it survives <code>docker rm</code> and image upgrades.</p><pre><code class="language-bash"># create a named volume
docker volume create &lt;volume&gt;

# list volumes
docker volume ls

# driver, mount point, labels
docker volume inspect &lt;volume&gt;

# delete a volume (and its data)
docker volume rm &lt;volume&gt;

# delete every unused volume
docker volume prune

# named volume, managed by Docker
docker run -v &lt;volume&gt;:/data &lt;image&gt;

# bind mount from the host
docker run -v $(pwd):/app &lt;image&gt;

# explicit bind-mount syntax
docker run --mount type=bind,src=$(pwd),dst=/app &lt;image&gt;

# the same named volume, spelled out with --mount
docker run --mount type=volume,src=&lt;volume&gt;,dst=/data &lt;image&gt;

# in-memory scratch space
docker run --tmpfs /tmp &lt;image&gt;
</code></pre><blockquote><p>💡 Back up a volume: <code>docker run --rm -v &lt;volume&gt;:/data -v $(pwd):/backup alpine tar czf /backup/backup.tar.gz -C /data .</code></p></blockquote><h2>🌐 Networks</h2><p>Containers on the same user-defined network resolve each other by container name.</p><pre><code class="language-bash"># list networks
docker network ls

# create a bridge network
docker network create &lt;network&gt;

# create a network with a fixed subnet
docker network create --driver bridge --subnet 172.30.0.0/16 &lt;network&gt;

# subnet and connected containers
docker network inspect &lt;network&gt;

# attach a running container
docker network connect &lt;network&gt; &lt;container&gt;

# detach it again
docker network disconnect &lt;network&gt; &lt;container&gt;

# delete a network
docker network rm &lt;network&gt;

# delete every unused network
docker network prune

# share the host network stack (Linux)
docker run --network host &lt;image&gt;

# no networking at all
docker run --network none &lt;image&gt;
</code></pre><h2>🧩 Docker Compose</h2><p>Compose describes a multi-container application in a single <code>compose.yaml</code> (or <code>docker-compose.yml</code>).</p><pre><code class="language-bash"># start every service in the foreground
docker compose up

# start detached
docker compose up -d

# rebuild images first
docker compose up -d --build

# start one service and its dependencies
docker compose up -d &lt;service&gt;

# stop and remove containers and networks
docker compose down

# stop, remove, and delete the named volumes too
docker compose down -v

# status of the project&#39;s services
docker compose ps

# follow the logs of all services
docker compose logs -f

# follow the logs of a single service
docker compose logs -f &lt;service&gt;

# (re)build the service images
docker compose build

# pull the service images
docker compose pull

# shell inside a running service
docker compose exec &lt;service&gt; sh

# one-off command in a new container
docker compose run --rm &lt;service&gt; &lt;cmd&gt;

# restart one service
docker compose restart &lt;service&gt;

# stop the containers, keep them around
docker compose stop

# start them again
docker compose start

# validate and print the resolved configuration
docker compose config

# processes running in each service
docker compose top

# use a specific compose file
docker compose -f &lt;file&gt; up -d

# include services behind a profile
docker compose --profile &lt;name&gt; up -d

# rebuild/sync automatically on file changes
docker compose watch
</code></pre><h2>🧹 System &amp; Cleanup</h2><p>Disk usage adds up fast — these are the commands that give the space back.</p><pre><code class="language-bash"># what images, containers, volumes and cache cost
docker system df

# the same, itemised
docker system df -v

# stopped containers, dangling images, unused networks
docker system prune

# the same, plus every image no container uses
docker system prune -a

# the same, plus unused volumes ⚠️ destructive
docker system prune -a --volumes

# clear the build cache
docker builder prune

# images unused for more than a week
docker image prune -a --filter &quot;until=168h&quot;
</code></pre><blockquote><p>⚠️ <code>--volumes</code> deletes data no running container is using. Check <code>docker volume ls</code> first.</p></blockquote><h2>💡 Handy One-Liners</h2><pre><code class="language-bash"># stop every running container
docker stop $(docker ps -q)

# remove every container
docker rm -f $(docker ps -aq)

# remove dangling images
docker rmi $(docker images -qf dangling=true)

# shell into the most recent container
docker exec -it $(docker ps -ql) sh

# disposable dev environment
docker run --rm -it -v $(pwd):/app -w /app node:22 sh

# follow logs by partial name
docker logs -f $(docker ps -qf name=&lt;partial&gt;)

# list every mount of a container
docker inspect \\
  -f &#39;{{range .Mounts}}{{.Source}} -&gt; {{.Destination}}{{println}}{{end}}&#39; &lt;container&gt;
</code></pre><h2>🛠 Common Flags Reference</h2><table><thead><tr><th>Flag</th><th>Meaning</th></tr></thead><tbody><tr><td><code>-d</code>, <code>--detach</code></td><td>Run in the background</td></tr><tr><td><code>-it</code></td><td>Interactive session with a TTY (shells)</td></tr><tr><td><code>--rm</code></td><td>Remove the container when it exits</td></tr><tr><td><code>-p &lt;host&gt;:&lt;container&gt;</code></td><td>Publish a port to the host</td></tr><tr><td><code>-v &lt;src&gt;:&lt;dst&gt;[:ro]</code></td><td>Named volume or bind mount, optionally read-only</td></tr><tr><td><code>-e KEY=value</code> / <code>--env-file</code></td><td>Environment variables</td></tr><tr><td><code>--name</code></td><td>Assign a stable container name</td></tr><tr><td><code>--network</code></td><td>Attach to a network</td></tr><tr><td><code>--restart</code></td><td><code>no</code>, <code>on-failure</code>, <code>always</code>, <code>unless-stopped</code></td></tr><tr><td><code>-u &lt;uid&gt;:&lt;gid&gt;</code></td><td>Run as a specific user</td></tr><tr><td><code>-w &lt;dir&gt;</code></td><td>Working directory inside the container</td></tr><tr><td><code>--memory</code> / <code>--cpus</code></td><td>Resource limits</td></tr><tr><td><code>--platform</code></td><td>Target architecture, e.g. <code>linux/arm64</code></td></tr></tbody></table><h2>📚 Resources</h2><ul><li><a href="https://docs.docker.com">Official documentation</a></li><li><a href="https://docs.docker.com/desktop">Docker Desktop (Mac, Linux, Windows)</a></li><li><a href="https://docs.docker.com/reference/cli/docker/">CLI reference</a></li><li><a href="https://docs.docker.com/reference/dockerfile/">Dockerfile reference</a></li><li><a href="https://docs.docker.com/reference/compose-file/">Compose file reference</a></li><li><a href="https://github.com/docker/awesome-compose">Awesome Compose — example projects</a></li></ul>`,39)]]))}};export{a as default};