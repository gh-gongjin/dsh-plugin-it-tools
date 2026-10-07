import{E as e,F as t,q as n,w as r}from"./vue.runtime.esm-bundler-DZZTqpJU.js";t();var i={class:`markdown-body`},a={__name:`k8s-memo.content`,setup(t,{expose:a}){return a({frontmatter:{}}),(t,a)=>(n(),r(`div`,i,[...a[0]||=[e(`<p><strong>kubectl</strong> is the CLI for the Kubernetes API. Almost every command follows the same shape: <code>kubectl &lt;verb&gt; &lt;resource&gt; &lt;name&gt; [flags]</code> — <code>get pods</code>, <code>describe node web-1</code>, <code>delete deployment api</code>.</p><blockquote><p>💡 Set up completion and an alias once and everything below gets shorter: <code>source &lt;(kubectl completion bash)</code>, <code>alias k=kubectl</code>, <code>complete -o default -F __start_kubectl k</code>.</p></blockquote><h2>⚙️ Configuration &amp; Context</h2><pre><code class="language-bash"># show the merged kubeconfig
kubectl config view

# read a single value out of it
kubectl config view -o jsonpath=&#39;{.clusters[*].name}&#39;

# which cluster am I talking to?
kubectl config current-context

# list every context
kubectl config get-contexts

# switch clusters
kubectl config use-context &lt;context&gt;

# change the default namespace for this context
kubectl config set-context --current --namespace=&lt;namespace&gt;

# use a different kubeconfig for one command
KUBECONFIG=~/.kube/staging.yaml kubectl get nodes

# shell completion (bash; use &#39;zsh&#39; or &#39;fish&#39; as needed)
source &lt;(kubectl completion bash)
</code></pre><h2>🔍 Viewing &amp; Finding Resources</h2><pre><code class="language-bash"># the everyday listing
kubectl get pods
kubectl get pods -o wide
kubectl get pods --all-namespaces

# every kind of resource in a namespace
kubectl get all -n &lt;namespace&gt;

# full definition, as stored by the API server
kubectl get pod &lt;pod&gt; -o yaml

# just the fields you care about
kubectl get pods -o custom-columns=&#39;NAME:.metadata.name,NODE:.spec.nodeName&#39;

# pull one value out with JSONPath
kubectl get pods -o jsonpath=&#39;{.items[*].metadata.name}&#39;

# filter by label, or by field
kubectl get pods -l app=nginx,tier=frontend
kubectl get pods --field-selector status.phase=Running

# sort the output
kubectl get services --sort-by=.metadata.name
kubectl get pods --sort-by=&#39;.status.containerStatuses[0].restartCount&#39;

# watch changes as they happen
kubectl get pods -w

# events, newest last — the first place to look when something is stuck
kubectl get events --sort-by=.lastTimestamp

# the long-form story of one object
kubectl describe pod &lt;pod&gt;

# what resources exist, and what are their short names?
kubectl api-resources

# what fields does this kind have?
kubectl explain deployment.spec.template.spec.containers
</code></pre><h2>🚀 Creating, Applying &amp; Deleting</h2><pre><code class="language-bash"># apply a manifest, creating or updating as needed
kubectl apply -f ./manifest.yaml

# apply everything in a directory, recursively
kubectl apply -R -f ./k8s/

# apply a kustomize overlay
kubectl apply -k ./overlays/production

# generate a manifest instead of creating anything
kubectl create deployment web --image=nginx --dry-run=client -o yaml &gt; web.yaml

# quick one-off objects
kubectl create deployment web --image=nginx:1.27
kubectl run debug --image=busybox -it --rm -- sh
kubectl expose deployment web --port=80 --target-port=8080 --type=ClusterIP

# see what an apply would change before doing it
kubectl diff -f ./manifest.yaml

# edit an object in your $EDITOR
kubectl edit deployment web

# change one field without an editor
kubectl patch deployment web -p &#39;{&quot;spec&quot;:{&quot;replicas&quot;:4}}&#39;

# delete
kubectl delete -f ./manifest.yaml
kubectl delete pod &lt;pod&gt; --grace-period=0 --force
</code></pre><h2>📈 Scaling &amp; Rollouts</h2><pre><code class="language-bash"># scale a deployment, or scale from the manifest
kubectl scale deployment web --replicas=3
kubectl scale --replicas=3 -f web.yaml

# only scale if it currently has 3 replicas
kubectl scale --current-replicas=3 --replicas=5 deployment/web

# horizontal autoscaling
kubectl autoscale deployment web --min=2 --max=10 --cpu-percent=70

# roll out a new image
kubectl set image deployment/web nginx=nginx:1.27

# watch the rollout
kubectl rollout status deployment/web

# rollout history, and going back
kubectl rollout history deployment/web
kubectl rollout undo deployment/web
kubectl rollout undo deployment/web --to-revision=2

# restart every pod of a deployment (picks up new config or secrets)
kubectl rollout restart deployment/web

# pause and resume a rollout
kubectl rollout pause deployment/web
kubectl rollout resume deployment/web
</code></pre><h2>📜 Logs &amp; Debugging</h2><pre><code class="language-bash"># logs of a pod
kubectl logs &lt;pod&gt;

# follow them
kubectl logs -f &lt;pod&gt;

# a specific container in a multi-container pod
kubectl logs -f &lt;pod&gt; -c &lt;container&gt;

# what the previous, crashed container printed
kubectl logs &lt;pod&gt; --previous

# recent output only
kubectl logs &lt;pod&gt; --since=10m --tail=100

# logs from every pod behind a label
kubectl logs -l app=web --all-containers --max-log-requests=10

# a shell inside a running container
kubectl exec -it &lt;pod&gt; -- sh
kubectl exec -it &lt;pod&gt; -c &lt;container&gt; -- bash

# a one-off command
kubectl exec &lt;pod&gt; -- env

# copy files in and out
kubectl cp &lt;pod&gt;:/var/log/app.log ./app.log
kubectl cp ./config.yaml &lt;pod&gt;:/etc/app/config.yaml

# reach a service or pod from your laptop
kubectl port-forward pod/&lt;pod&gt; 8080:80
kubectl port-forward svc/&lt;service&gt; 8080:80

# attach a debug container to a running pod (distroless-friendly)
kubectl debug -it &lt;pod&gt; --image=busybox --target=&lt;container&gt;

# a throwaway pod on a specific node
kubectl debug node/&lt;node&gt; -it --image=busybox

# resource usage (needs metrics-server)
kubectl top node
kubectl top pod
kubectl top pod &lt;pod&gt; --containers
</code></pre><h2>🔐 Secrets &amp; ConfigMaps</h2><pre><code class="language-bash"># create a secret from literals or files
kubectl create secret generic db-creds \\
  --from-literal=username=jane \\
  --from-literal=password=s3cr3t
kubectl create secret generic tls-key --from-file=./tls.key

# a registry pull secret
kubectl create secret docker-registry regcred \\
  --docker-server=ghcr.io --docker-username=&lt;user&gt; --docker-password=&lt;token&gt;

# configmaps work the same way
kubectl create configmap app-config --from-file=./config.yaml
kubectl create configmap app-config --from-literal=LOG_LEVEL=debug

# read a secret back (values are base64)
kubectl get secret db-creds -o jsonpath=&#39;{.data.password}&#39; | base64 -d

# every key at once
kubectl get secret db-creds -o go-template=&#39;{{range $k,$v := .data}}{{$k}}={{$v | base64decode}}{{&quot;\\n&quot;}}{{end}}&#39;
</code></pre><h2>🏷 Labels, Annotations &amp; Namespaces</h2><pre><code class="language-bash"># add or change a label (--overwrite to replace an existing one)
kubectl label pod &lt;pod&gt; env=prod --overwrite

# remove a label
kubectl label pod &lt;pod&gt; env-

# annotations work the same way
kubectl annotate deployment web kubernetes.io/change-cause=&quot;bump to 1.27&quot;

# show the labels in the listing
kubectl get pods --show-labels

# namespaces
kubectl get namespaces
kubectl create namespace staging
kubectl delete namespace staging
</code></pre><h2>🖥 Nodes &amp; Cluster</h2><pre><code class="language-bash"># nodes and their state
kubectl get nodes -o wide
kubectl describe node &lt;node&gt;

# stop scheduling new pods onto a node
kubectl cordon &lt;node&gt;

# evict the pods and prepare for maintenance
kubectl drain &lt;node&gt; --ignore-daemonsets --delete-emptydir-data

# put it back into service
kubectl uncordon &lt;node&gt;

# keep pods off a node unless they tolerate the taint
kubectl taint nodes &lt;node&gt; key=value:NoSchedule

# where is the control plane?
kubectl cluster-info

# what API versions does the cluster serve?
kubectl api-versions

# am I allowed to do this?
kubectl auth can-i create deployments --namespace production
</code></pre><h2>🧰 Handy One-Liners</h2><pre><code class="language-bash"># every pod that is not Running
kubectl get pods -A --field-selector=status.phase!=Running

# the ten pods that restarted most
kubectl get pods -A --sort-by=&#39;.status.containerStatuses[0].restartCount&#39; | tail -10

# clean up evicted pods
kubectl get pods -A --field-selector=status.phase=Failed -o name | xargs -r kubectl delete

# which node is each pod on
kubectl get pods -o custom-columns=&#39;POD:.metadata.name,NODE:.spec.nodeName&#39;

# images running in the cluster
kubectl get pods -A -o jsonpath=&#39;{.items[*].spec.containers[*].image}&#39; | tr &#39; &#39; &#39;\\n&#39; | sort -u

# run a command in several pods
for pod in $(kubectl get pods -l app=web -o name); do kubectl exec &quot;$pod&quot; -- hostname; done

# apply a manifest straight from a heredoc
kubectl apply -f - &lt;&lt;EOF
apiVersion: v1
kind: ConfigMap
metadata:
  name: demo
data:
  LOG_LEVEL: debug
EOF
</code></pre><h2>📚 Resources</h2><ul><li><a href="https://kubernetes.io/docs/reference/kubectl/">kubectl reference</a></li><li><a href="https://kubernetes.io/docs/reference/kubectl/quick-reference/">kubectl quick reference</a></li><li><a href="https://kubernetes.io/docs/home/">Documentation home</a></li><li><a href="https://kubernetes.io/docs/reference/kubectl/jsonpath/">JSONPath support in kubectl</a></li></ul><p>Original cheat sheet: <a href="https://github.com/LeCoupa/awesome-cheatsheets">https://github.com/LeCoupa/awesome-cheatsheets</a></p>`,23)]]))}};export{a as default};