import{E as e,F as t,q as n,w as r}from"./vue.runtime.esm-bundler-DZZTqpJU.js";t();var i={class:`markdown-body`},a={__name:`k8s-memo.content.zh`,setup(t,{expose:a}){return a({frontmatter:{}}),(t,a)=>(n(),r(`div`,i,[...a[0]||=[e(`<h1>Kubernetes</h1><ul><li>PDF：<a href="https://sematext.com/kubernetes-cheat-sheet/">https://sematext.com/kubernetes-cheat-sheet/</a></li><li>官网：<a href="https://kubernetes.io/">https://kubernetes.io/</a></li><li>文档：<a href="https://kubernetes.io/docs/home">https://kubernetes.io/docs/home</a></li></ul><h2>客户端配置</h2><ul><li>在 bash 中设置自动补全；需先安装 bash-completion 包</li></ul><pre><code>source &lt;(kubectl completion bash)
</code></pre><ul><li>查看 Kubernetes 配置</li></ul><pre><code>kubectl config view
</code></pre><ul><li>通过 jsonpath 查看特定配置项</li></ul><pre><code>kubectl config view -o jsonpath=&#39;{.users[?(@.name == &quot;k8s&quot;)].user.password}&#39;
</code></pre><ul><li>为 <code>foo.kuberntes.com</code> 设置凭据</li></ul><pre><code>kubectl config set-credentials kubeuser/foo.kubernetes.com --username=kubeuser --password=kubepassword
</code></pre><ul><li>设置当前命名空间</li></ul><pre><code>kubectl config set-context --current --namespace=namespace_name
</code></pre><h2>查看、查找资源</h2><ul><li>列出命名空间中的所有服务</li></ul><pre><code>kubectl get services
</code></pre><ul><li>以宽格式列出所有命名空间中的所有 Pod</li></ul><pre><code>kubectl get pods -o wide --all-namespaces
</code></pre><ul><li>以 json（或 yaml）格式列出所有 Pod</li></ul><pre><code>kubectl get pods -o json
</code></pre><ul><li>查看资源详情（node、pod、svc）</li></ul><pre><code>kubectl describe nodes my-node
</code></pre><ul><li>按名称列出服务</li></ul><pre><code>kubectl get services --sort-by=.metadata.name
</code></pre><ul><li>按重启次数列出 Pod</li></ul><pre><code>kubectl get pods --sort-by=&#39;.status.containerStatuses[0].restartCount&#39;
</code></pre><ul><li>对 frontend-v1 进行滚动更新</li></ul><pre><code>kubectl rolling-update frontend-v1 -f frontend-v2.json
</code></pre><ul><li>将名为 ‘foo’ 的副本集扩缩容至 3 个</li></ul><pre><code>kubectl scale --replicas=3 rs/foo
</code></pre><ul><li>将 “foo.yaml” 中指定的资源扩缩容至 3 个</li></ul><pre><code>kubectl scale --replicas=3 -f foo.yaml
</code></pre><ul><li>在每个 Pod / 副本中执行命令</li></ul><pre><code>for i in 0 1; do kubectl exec foo-$i -- sh -c &#39;echo $(hostname) &gt; /usr/share/nginx/html/index.html&#39;; done
</code></pre><h2>管理资源</h2><ul><li>获取 Pod 或服务的文档说明</li></ul><pre><code>kubectl explain pods,svc
</code></pre><ul><li>创建资源（如 Pod、服务或守护进程集）</li></ul><pre><code>kubectl create -f ./my-manifest.yaml
</code></pre><ul><li>对资源应用配置</li></ul><pre><code>kubectl apply -f ./my-manifest.yaml
</code></pre><ul><li>启动单个 Nginx 实例</li></ul><pre><code>kubectl run nginx --image=nginx
</code></pre><ul><li>创建包含多个键的 Secret</li></ul><pre><code>cat &lt;&lt;EOF | kubectl create -f -
apiVersion: v1
kind: Secret
metadata:
 name: mysecret
type: Opaque
data:
 password: $(echo &quot;s33msi4&quot; | base64)
 username: $(echo &quot;jane&quot;| base64)
EOF
</code></pre><ul><li>删除资源</li></ul><pre><code>kubectl delete -f ./my-manifest.yaml
</code></pre><h2>监控与日志</h2><ul><li>从 GitHub 仓库部署 Heapster</li></ul><pre><code>kubectl create -f deploy/kube-config/standalone/
</code></pre><ul><li>显示节点指标</li></ul><pre><code>kubectl top node
</code></pre><ul><li>显示 Pod 指标</li></ul><pre><code>kubectl top pod
</code></pre><ul><li>显示指定 Pod 及其容器的指标</li></ul><pre><code>kubectl top pod pod_name --containers
</code></pre><ul><li>导出 Pod 日志（stdout）</li></ul><pre><code>kubectl logs pod_name
</code></pre><ul><li>流式查看 Pod 容器日志（stdout，多容器场景）</li></ul><pre><code>kubectl logs -f pod_name -c my-container
</code></pre><h2>与运行中的 Pod 交互</h2><ul><li>在 Pod 中执行命令</li></ul><pre><code>kubectl exec pod_name -- command_name
</code></pre><ul><li>在多容器的 Pod 中执行命令</li></ul><pre><code>kubectl exec pod_name -c container_name -- command_name
</code></pre><ul><li>获取 Pod 的终端</li></ul><pre><code>kubectl exec -it pod_name /bin/sh
</code></pre><ul><li>获取多容器 Pod 中某个容器的终端</li></ul><pre><code>kubectl exec -it pod_name -c container_name /bin/sh
</code></pre><h3>致谢</h3><p><a href="https://raw.githubusercontent.com/LeCoupa/awesome-cheatsheets/refs/heads/master/tools/kubernetes.md">https://raw.githubusercontent.com/LeCoupa/awesome-cheatsheets/refs/heads/master/tools/kubernetes.md</a></p>`,71)]]))}};export{a as default};