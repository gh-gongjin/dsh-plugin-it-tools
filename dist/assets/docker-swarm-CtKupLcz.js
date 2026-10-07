import{E as e,F as t,q as n,w as r}from"./vue.runtime.esm-bundler-DZZTqpJU.js";t();var i={class:`markdown-body`},a={__name:`docker-swarm`,setup(t,{expose:a}){return a({frontmatter:{}}),(t,a)=>(n(),r(`div`,i,[...a[0]||=[e(`<p><strong>Docker Swarm mode</strong> is Docker’s native clustering and orchestration solution. It turns a group of Docker hosts into a single virtual system with high availability, load balancing and a declarative deployment model — using the CLI you already know.</p><ul><li>Built-in orchestration with a declarative service model</li><li>Rolling updates and one-command rollback</li><li>Self-healing: failed replicas are rescheduled automatically</li><li>Secure node-to-node communication over mutual TLS, rotated automatically</li><li>Secrets and configs distributed straight from the cluster store</li></ul><blockquote><p>ℹ️ Swarm does <strong>not</strong> auto-scale on load. Replica counts are set manually with <code>--replicas</code> or <code>docker service scale</code>.</p></blockquote><h2>🧱 Concepts</h2><table><thead><tr><th>Term</th><th>What it is</th></tr></thead><tbody><tr><td><strong>Node</strong></td><td>A Docker engine that joined the swarm — a <em>manager</em> or a <em>worker</em></td></tr><tr><td><strong>Manager</strong></td><td>Keeps cluster state via Raft, schedules tasks, serves the API</td></tr><tr><td><strong>Worker</strong></td><td>Runs tasks only; has no view of the cluster state</td></tr><tr><td><strong>Service</strong></td><td>The declaration of what should run (image, replicas, ports, …)</td></tr><tr><td><strong>Task</strong></td><td>One container slot of a service, scheduled onto a node</td></tr><tr><td><strong>Stack</strong></td><td>A group of services deployed together from a Compose file</td></tr></tbody></table><h2>📌 Swarm Initialization</h2><pre><code class="language-bash"># initialize a swarm; this node becomes the first manager
docker swarm init

# pick the interface to advertise on multi-homed hosts
docker swarm init --advertise-addr &lt;manager-ip&gt;

# address pool for the overlay networks
docker swarm init --default-addr-pool 10.20.0.0/16

# print the command a worker needs to join
docker swarm join-token worker

# print the command a manager needs to join
docker swarm join-token manager

# run on the joining node
docker swarm join --token &lt;token&gt; &lt;manager-ip&gt;:2377

# rotate a token, invalidating the old one
docker swarm join-token --rotate worker

# leave the swarm (on a worker)
docker swarm leave

# leave on a manager, or on the last node
docker swarm leave --force

# keep fewer terminated tasks per service
docker swarm update --task-history-limit 5

# lifetime of the node certificates
docker swarm update --cert-expiry 720h

# rotate the swarm certificate authority
docker swarm ca --rotate
</code></pre><h3>🔌 Ports that must be open between nodes</h3><table><thead><tr><th>Port</th><th>Protocol</th><th>Used for</th></tr></thead><tbody><tr><td><code>2377</code></td><td>TCP</td><td>Cluster management (managers only)</td></tr><tr><td><code>7946</code></td><td>TCP + UDP</td><td>Node discovery and gossip</td></tr><tr><td><code>4789</code></td><td>UDP</td><td>Overlay network data plane (VXLAN)</td></tr><tr><td>IP protocol <code>50</code> (ESP)</td><td>—</td><td>Only with encrypted overlay networks</td></tr></tbody></table><h2>👥 Node Management</h2><pre><code class="language-bash"># list the nodes of the swarm
docker node ls

# filter by role, id, name, label, membership
docker node ls --filter role=manager

# readable summary of one node
docker node inspect &lt;node&gt; --pretty

# a single field via a Go template
docker node inspect -f &#39;{{.Status.State}}&#39; &lt;node&gt;

# worker  → manager
docker node promote &lt;node&gt;

# manager → worker
docker node demote &lt;node&gt;

# move tasks off and stop scheduling new ones
docker node update --availability drain &lt;node&gt;

# keep running tasks, schedule nothing new
docker node update --availability pause &lt;node&gt;

# bring a drained or paused node back
docker node update --availability active &lt;node&gt;

# label a node for placement constraints
docker node update --label-add env=production &lt;node&gt;

# remove a label again
docker node update --label-rm env &lt;node&gt;

# tasks running on a node
docker node ps &lt;node&gt;

# remove a node that already left
docker node rm &lt;node&gt;

# remove an unreachable node
docker node rm --force &lt;node&gt;
</code></pre><blockquote><p>💡 Drain a node before maintenance (<code>--availability drain</code>), then set it back to <code>active</code>. Swarm reschedules the tasks for you.</p></blockquote><h2>🧠 Manager Nodes &amp; Raft</h2><p>Managers orchestrate tasks, maintain the cluster state through Raft consensus and serve the API. Several managers give you high availability, but only one is the <strong>leader</strong> at a time.</p><blockquote><p>⚠️ <strong>Use an odd number of managers</strong> (3, 5 or 7). Raft tolerates <code>(N-1)/2</code> failures — 3 managers survive 1 loss, 5 survive 2. Beyond 7 the consensus overhead outweighs the benefit.</p></blockquote><pre><code class="language-bash"># swarm and Raft state of the local node
docker info

# details of the current node, manager status included
docker node inspect self --pretty

# encrypt the Raft logs at rest
docker swarm update --autolock=true

# unlock a manager after a restart
docker swarm unlock

# show the current unlock key
docker swarm unlock-key

# rotate it
docker swarm unlock-key --rotate
</code></pre><h2>📦 Service Management</h2><pre><code class="language-bash"># create a service
docker service create --name &lt;service&gt; &lt;image&gt;

# create a service with a fixed replica count
docker service create --name &lt;service&gt; --replicas &lt;n&gt; &lt;image&gt;

# create a global service: one task on every node
docker service create --name &lt;service&gt; --mode global &lt;image&gt;

# list services
docker service ls

# filter the list
docker service ls --filter name=&lt;service&gt;

# readable service definition
docker service inspect &lt;service&gt; --pretty

# tasks and the nodes they run on
docker service ps &lt;service&gt;

# change the replica count
docker service scale &lt;service&gt;=&lt;n&gt;

# scale several services at once
docker service scale &lt;svc-a&gt;=3 &lt;svc-b&gt;=5

# roll out a new image
docker service update --image &lt;new-image&gt; &lt;service&gt;

# redistribute tasks without changing anything
docker service update --force &lt;service&gt;

# go back to the previous definition
docker service rollback &lt;service&gt;

# follow the logs of every task
docker service logs -f &lt;service&gt;

# recent output only
docker service logs --tail 100 --since 10m &lt;service&gt;

# remove a service
docker service rm &lt;service&gt;
</code></pre><h3>Changing a running service</h3><pre><code class="language-bash"># add or replace an environment variable
docker service update --env-add KEY=value &lt;service&gt;

# remove one
docker service update --env-rm KEY &lt;service&gt;

# publish another port
docker service update --publish-add 8080:80 &lt;service&gt;

# stop publishing it
docker service update --publish-rm 8080 &lt;service&gt;

# attach a volume
docker service update --mount-add type=volume,src=data,dst=/data &lt;service&gt;

# detach it again, by target path
docker service update --mount-rm /data &lt;service&gt;

# add a placement constraint
docker service update --constraint-add &#39;node.labels.env==prod&#39; &lt;service&gt;

# at most one task per node
docker service update --replicas-max-per-node 1 &lt;service&gt;

# change the resource limits
docker service update --limit-memory 512m --reserve-memory 256m &lt;service&gt;
</code></pre><h2>🔁 Replicas &amp; Modes</h2><p>Replicas define how many instances of a service run across the swarm. Swarm spreads them over the available nodes and reschedules them when a task or a node fails.</p><table><thead><tr><th>Mode</th><th>Flag</th><th>Behaviour</th></tr></thead><tbody><tr><td>Replicated</td><td><code>--mode replicated</code> (default)</td><td>Run exactly <code>--replicas</code> tasks, anywhere they fit</td></tr><tr><td>Global</td><td><code>--mode global</code></td><td>Exactly one task per eligible node</td></tr><tr><td>Replicated job</td><td><code>--mode replicated-job</code></td><td>Run <code>--replicas</code> tasks <strong>to completion</strong></td></tr><tr><td>Global job</td><td><code>--mode global-job</code></td><td>Run one task to completion on every node</td></tr></tbody></table><pre><code class="language-bash"># five tasks
docker service create --replicas 5 --name myapp myimage

# scale the same service up to ten
docker service scale myapp=10

# one per node
docker service create --mode global --name agent myimage

# batch job: 20 tasks in total, 4 running at a time
docker service create --mode replicated-job --replicas 20 \\
  --max-concurrent 4 --name migrate myimage
</code></pre><h2>🐝 Tasks &amp; Containers</h2><p>A <strong>task</strong> is a single container slot managed by Swarm; it maps to one container on one node and is never moved — a failed task is replaced by a new one.</p><pre><code class="language-bash"># tasks of a service, with their node
docker service ps &lt;service&gt;

# full error messages — start debugging here
docker service ps --no-trunc &lt;service&gt;

# hide the terminated tasks
docker service ps -f &quot;desired-state=running&quot; &lt;service&gt;

# tasks on one node
docker node ps &lt;node&gt;

# containers on the current node
docker container ls

# low-level details of one container
docker container inspect &lt;container-id&gt;
</code></pre><table><thead><tr><th>Task state</th><th>Meaning</th></tr></thead><tbody><tr><td><code>NEW</code> / <code>PENDING</code></td><td>Accepted, waiting for a node that satisfies the constraints</td></tr><tr><td><code>ASSIGNED</code> / <code>PREPARING</code></td><td>Sent to a node, image being pulled</td></tr><tr><td><code>STARTING</code> / <code>RUNNING</code></td><td>The container is starting or up</td></tr><tr><td><code>COMPLETE</code></td><td>A job task finished successfully</td></tr><tr><td><code>FAILED</code></td><td>The container exited with an error</td></tr><tr><td><code>SHUTDOWN</code></td><td>Stopped on purpose (update, drain, scale down)</td></tr><tr><td><code>REJECTED</code></td><td>The node refused the task (missing image, bad mount)</td></tr><tr><td><code>ORPHANED</code></td><td>The node has been unreachable too long</td></tr></tbody></table><h2>🎯 Placement</h2><pre><code class="language-bash">docker service create --constraint &#39;node.role==worker&#39; --name web nginx

docker service create --constraint &#39;node.labels.env==production&#39; --name api myimage

docker service create --placement-pref &#39;spread=node.labels.zone&#39; --name web nginx

docker service create --replicas-max-per-node 1 --name web nginx
</code></pre><table><thead><tr><th>Expression</th><th>Matches</th></tr></thead><tbody><tr><td><code>node.role</code></td><td><code>manager</code> or <code>worker</code></td></tr><tr><td><code>node.hostname</code></td><td>The node’s hostname</td></tr><tr><td><code>node.id</code></td><td>The node’s ID</td></tr><tr><td><code>node.labels.&lt;key&gt;</code></td><td>A label set with <code>docker node update --label-add</code></td></tr><tr><td><code>engine.labels.&lt;key&gt;</code></td><td>A label set in the engine’s <code>daemon.json</code></td></tr><tr><td><code>node.platform.os</code> / <code>node.platform.arch</code></td><td><code>linux</code>, <code>windows</code> / <code>amd64</code>, <code>arm64</code></td></tr></tbody></table><h2>🌐 Networking</h2><p>An <strong>overlay network</strong> is a virtual network spanning multiple Docker hosts. Containers on different nodes talk as if they were on the same L2 segment, with DNS-based service discovery built in.</p><pre><code class="language-bash"># create an overlay network
docker network create --driver overlay &lt;network&gt;

# encrypt the data plane too
docker network create --driver overlay --opt encrypted &lt;network&gt;

# let standalone containers join
docker network create --driver overlay --attachable &lt;network&gt;

# list networks
docker network ls

# attached services and containers
docker network inspect &lt;network&gt;

# attach at creation time
docker service create --name &lt;service&gt; --network &lt;network&gt; &lt;image&gt;

# attach an existing service
docker service update --network-add &lt;network&gt; &lt;service&gt;

# detach it again
docker service update --network-rm &lt;network&gt; &lt;service&gt;
</code></pre><h3>Publishing ports</h3><pre><code class="language-bash"># routing mesh (ingress)
docker service create --publish 8080:80 --name web nginx

# host port, no mesh
docker service create --publish mode=host,target=80,published=8080 --name web nginx
</code></pre><table><thead><tr><th>Mode</th><th>Behaviour</th></tr></thead><tbody><tr><td><code>ingress</code> (default)</td><td>Every node accepts the port and load-balances to the tasks</td></tr><tr><td><code>host</code></td><td>The port is published only on nodes running a task — no mesh, no extra hop</td></tr></tbody></table><h2>🔄 Rolling Updates &amp; Rollback</h2><pre><code class="language-bash">docker service create \\
  --name web \\
  --replicas 5 \\
  --update-parallelism 2 \\
  --update-delay 10s \\
  --update-failure-action rollback \\
  --update-monitor 30s \\
  nginx:1.25

# trigger the rolling update
docker service update --image nginx:1.26 web

# return to the previous definition
docker service rollback web
</code></pre><table><thead><tr><th>Flag</th><th>Description</th></tr></thead><tbody><tr><td><code>--update-parallelism</code></td><td>How many tasks are updated at once (<code>0</code> = all)</td></tr><tr><td><code>--update-delay</code></td><td>Pause between batches</td></tr><tr><td><code>--update-failure-action</code></td><td><code>pause</code> (default), <code>continue</code> or <code>rollback</code></td></tr><tr><td><code>--update-monitor</code></td><td>How long a task is watched before it counts as healthy</td></tr><tr><td><code>--update-order</code></td><td><code>stop-first</code> (default) or <code>start-first</code></td></tr><tr><td><code>--rollback-parallelism</code></td><td>Same knobs for the rollback path (<code>--rollback-delay</code>, <code>--rollback-monitor</code>, <code>--rollback-failure-action</code>, <code>--rollback-order</code>)</td></tr></tbody></table><h2>🩺 Health Checks</h2><p>Swarm reschedules a task as soon as its health check fails, so an update never marks a broken image as healthy.</p><pre><code class="language-bash">docker service create \\
  --name api \\
  --health-cmd &#39;curl -f http://localhost:8080/health || exit 1&#39; \\
  --health-interval 10s \\
  --health-timeout 3s \\
  --health-retries 3 \\
  --health-start-period 30s \\
  myimage
</code></pre><h2>🔐 Secrets</h2><p>Secrets are encrypted in the Raft log and mounted into the container as in-memory files under <code>/run/secrets/</code>.</p><pre><code class="language-bash"># create from a file
docker secret create db_password ./db_password.txt

# create from stdin
echo &quot;s3cr3t&quot; | docker secret create db_password -

# list secrets
docker secret ls

# metadata only — never the value
docker secret inspect db_password

# attach a secret; it appears at /run/secrets/db_password
docker service create --name db --secret db_password postgres:16

# ...or mount it at a custom path with a fixed mode
docker service create --name db \\
  --secret source=db_password,target=/run/secrets/pg_pw,mode=0400 postgres:16

# only possible when no service uses it
docker secret rm db_password
</code></pre><p>Rotating a secret — create the new one, swap it, then drop the old one:</p><pre><code class="language-bash">echo &quot;n3w-s3cr3t&quot; | docker secret create db_password_v2 -

docker service update \\
  --secret-rm db_password \\
  --secret-add source=db_password_v2,target=db_password \\
  db

docker secret rm db_password
</code></pre><h2>🔑 Configs</h2><p>Configs work like secrets but are <strong>not encrypted at rest</strong> — use them for non-sensitive files such as <code>nginx.conf</code>.</p><pre><code class="language-bash"># create a config
docker config create my_nginx_conf ./nginx.conf

# list configs
docker config ls

# metadata and the stored content
docker config inspect my_nginx_conf

# mount a config at a specific path
docker service create \\
  --name web \\
  --config source=my_nginx_conf,target=/etc/nginx/nginx.conf \\
  nginx

# swap in a new version of the config
docker service update \\
  --config-rm my_nginx_conf \\
  --config-add source=my_nginx_conf_v2,target=/etc/nginx/nginx.conf \\
  web

# only when no service uses it
docker config rm my_nginx_conf
</code></pre><h2>📚 Stacks</h2><p>A <strong>stack</strong> is a group of related services deployed together from a Compose file — the standard production workflow for Swarm.</p><pre><code class="language-bash"># deploy or update a stack
docker stack deploy -c stack.yaml mystack

# pass your registry credentials along
docker stack deploy -c stack.yaml --with-registry-auth mystack

# remove services no longer in the file
docker stack deploy -c stack.yaml --prune mystack

# list stacks
docker stack ls

# services of a stack
docker stack services mystack

# tasks of a stack
docker stack ps mystack

# tasks of a stack, with full error messages
docker stack ps --no-trunc mystack

# print the merged, resolved file
docker stack config -c stack.yaml

# remove the whole stack
docker stack rm mystack
</code></pre><p>Stacks honour the <code>deploy:</code> block of the Compose file (replicas, placement, resources, restart policy, update config). <code>build:</code>, top-level <code>restart:</code> and <code>depends_on:</code> are ignored.</p><h2>🧯 Troubleshooting</h2><pre><code class="language-bash"># the error column tells you why a task died
docker service ps --no-trunc &lt;service&gt;

# application output of every task
docker service logs --tail 200 &lt;service&gt;

# is a node Down or Unreachable?
docker node ls

# what was actually deployed
docker service inspect --pretty &lt;service&gt;

# live stream of orchestration events
docker events --filter type=service
</code></pre><table><thead><tr><th>Symptom</th><th>Usual cause</th></tr></thead><tbody><tr><td>Task stuck in <code>PENDING</code></td><td>No node satisfies the constraints, ports, or resource reservations</td></tr><tr><td><code>no suitable node</code></td><td>Placement constraint or <code>--replicas-max-per-node</code> cannot be met</td></tr><tr><td>Task loops <code>FAILED</code> → <code>STARTING</code></td><td>The container exits immediately — read <code>docker service logs</code></td></tr><tr><td><code>REJECTED</code> with an image error</td><td>The image is missing on that node; use <code>--with-registry-auth</code> for private registries</td></tr><tr><td>Service unreachable from other nodes</td><td>Ports <code>7946</code>/<code>4789</code> blocked, or the services are not on the same overlay network</td></tr></tbody></table><h2>🛠 Common Flags Reference</h2><h3><code>docker service create</code> / <code>docker service update</code></h3><table><thead><tr><th>Flag</th><th>Description</th></tr></thead><tbody><tr><td><code>--replicas</code></td><td>Number of tasks for a replicated service</td></tr><tr><td><code>--mode</code></td><td><code>replicated</code> (default), <code>global</code>, <code>replicated-job</code>, <code>global-job</code></td></tr><tr><td><code>--publish</code></td><td>Port mapping (<code>&lt;published&gt;:&lt;target&gt;</code>, or <code>mode=host,...</code>)</td></tr><tr><td><code>--mount</code></td><td>Attach a volume or bind mount</td></tr><tr><td><code>--network</code></td><td>Attach to an overlay network</td></tr><tr><td><code>--constraint</code></td><td>Placement rule, e.g. <code>node.role==worker</code></td></tr><tr><td><code>--placement-pref</code></td><td>Spread tasks, e.g. <code>spread=node.labels.zone</code></td></tr><tr><td><code>--replicas-max-per-node</code></td><td>Cap the tasks of this service per node</td></tr><tr><td><code>--limit-cpu</code> / <code>--limit-memory</code></td><td>Hard resource limits</td></tr><tr><td><code>--reserve-cpu</code> / <code>--reserve-memory</code></td><td>Resources reserved for scheduling</td></tr><tr><td><code>--secret</code> / <code>--config</code></td><td>Attach a secret or a config</td></tr><tr><td><code>--env</code> / <code>--env-file</code></td><td>Environment variables</td></tr><tr><td><code>--restart-condition</code></td><td><code>none</code>, <code>on-failure</code> or <code>any</code> (default)</td></tr><tr><td><code>--health-cmd</code> and friends</td><td>Override the image health check</td></tr><tr><td><code>--with-registry-auth</code></td><td>Forward registry credentials to the nodes</td></tr></tbody></table><h2>📄 Example: Production-style Web Service</h2><pre><code class="language-bash">docker service create \\
  --name web \\
  --replicas 3 \\
  --publish 80:80 \\
  --network webnet \\
  --constraint &#39;node.role==worker&#39; \\
  --constraint &#39;node.labels.env==production&#39; \\
  --placement-pref &#39;spread=node.labels.zone&#39; \\
  --update-parallelism 1 \\
  --update-delay 10s \\
  --update-failure-action rollback \\
  --update-order start-first \\
  --limit-memory 512m \\
  --reserve-memory 256m \\
  --restart-condition any \\
  nginx:1.25
</code></pre><h2>📚 Resources</h2><ul><li><a href="https://docs.docker.com/engine/swarm/">Swarm mode overview</a></li><li><a href="https://docs.docker.com/engine/swarm/services/">Swarm services</a></li><li><a href="https://docs.docker.com/engine/swarm/secrets/">Manage secrets</a></li><li><a href="https://docs.docker.com/engine/swarm/configs/">Manage configs</a></li><li><a href="https://docs.docker.com/reference/compose-file/deploy/">Stack file reference (Compose Spec <code>deploy:</code>)</a></li><li><a href="https://docs.docker.com/reference/cli/docker/service/create/"><code>docker service create</code> CLI reference</a></li></ul>`,65)]]))}};export{a as default};