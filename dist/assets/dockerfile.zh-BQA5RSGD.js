import{E as e,F as t,q as n,w as r}from"./vue.runtime.esm-bundler-DZZTqpJU.js";t();var i={class:`markdown-body`},a={__name:`dockerfile.zh`,setup(t,{expose:a}){return a({frontmatter:{}}),(t,a)=>(n(),r(`div`,i,[...a[0]||=[e(`<p><strong>Dockerfile</strong> 是一个由指令组成的脚本，用于构建 Docker 镜像。每条指令都会在镜像中创建一个层。</p><h2>📦 基本结构</h2><pre><code class="language-Dockerfile"># 注释
INSTRUCTION arguments
</code></pre><h2>🚀 核心指令</h2><h3><code>FROM</code></h3><p>指定基础镜像。</p><pre><code class="language-Dockerfile">FROM ubuntu:20.04
FROM node:22-alpine
</code></pre><h3><code>LABEL</code></h3><p>为镜像添加元数据。</p><pre><code class="language-Dockerfile">LABEL maintainer=&quot;you@example.com&quot;
LABEL version=&quot;1.0&quot; description=&quot;My App&quot;
</code></pre><h3><code>ENV</code></h3><p>设置环境变量。</p><pre><code class="language-Dockerfile">ENV NODE_ENV=production
ENV PATH=&quot;/app/bin:$PATH&quot;
</code></pre><h3><code>RUN</code></h3><p>在构建过程中于 shell 中执行命令。</p><pre><code class="language-Dockerfile">RUN apt-get update &amp;&amp; apt-get install -y curl
RUN npm install
</code></pre><p>使用 <code>RUN [&quot;executable&quot;, &quot;param1&quot;, &quot;param2&quot;]</code> 以 JSON 数组形式书写。</p><h3><code>COPY</code></h3><p>将文件从主机复制到镜像中。</p><pre><code class="language-Dockerfile">COPY . /app
COPY config.json /app/config.json
</code></pre><h3><code>ADD</code></h3><p>类似于 <code>COPY</code>，但支持远程 URL 并可自动解压归档文件。</p><pre><code class="language-Dockerfile">ADD https://example.com/file.tar.gz /app/
ADD archive.zip /app/
</code></pre><h3><code>CMD</code></h3><p>设置容器启动时运行的默认命令。</p><pre><code class="language-Dockerfile">CMD [&quot;node&quot;, &quot;server.js&quot;]     # 推荐的 exec 形式
CMD node server.js            # shell 形式
</code></pre><p>只允许一条 <code>CMD</code>；后面的会覆盖前面的。</p><h3><code>ENTRYPOINT</code></h3><p>将容器配置为可执行程序运行。</p><pre><code class="language-Dockerfile">ENTRYPOINT [&quot;python&quot;, &quot;app.py&quot;]
</code></pre><p>与 <code>CMD</code> 搭配使用可传递默认参数。</p><h3><code>WORKDIR</code></h3><p>为后续指令设置工作目录。</p><pre><code class="language-Dockerfile">WORKDIR /app
</code></pre><h3><code>EXPOSE</code></h3><p>声明容器监听的端口。</p><pre><code class="language-Dockerfile">EXPOSE 80
EXPOSE 443
</code></pre><p>注意：这并不会发布端口。</p><h3><code>VOLUME</code></h3><p>为持久化或共享数据创建挂载点。</p><pre><code class="language-Dockerfile">VOLUME [&quot;/data&quot;]
</code></pre><h3><code>USER</code></h3><p>设置运行后续指令的用户。</p><pre><code class="language-Dockerfile">USER appuser
</code></pre><h3><code>ARG</code></h3><p>定义构建时变量。</p><pre><code class="language-Dockerfile">ARG VERSION=1.0
RUN echo $VERSION
</code></pre><p>在 <code>docker build</code> 时使用 <code>--build-arg VERSION=2.0</code>。</p><h3><code>ONBUILD</code></h3><p>当该镜像被用作基础镜像时触发相应指令。</p><pre><code class="language-Dockerfile">ONBUILD COPY . /app
</code></pre><h2>🧠 最佳实践</h2><ul><li>使用精简的基础镜像（例如 <code>alpine</code>）以减小体积。</li><li>合并 <code>RUN</code> 命令以减少层数。</li><li>使用 <code>.dockerignore</code> 排除不必要的文件。</li><li>除非需要解压归档，否则优先使用 <code>COPY</code> 而非 <code>ADD</code>。</li><li>使用 <code>ENTRYPOINT</code> 定义固定命令，使用 <code>CMD</code> 传递参数。</li><li>避免硬编码密钥或凭据。</li></ul><h2>🧪 示例 Dockerfile</h2><pre><code class="language-Dockerfile">FROM node:22-alpine

LABEL maintainer=&quot;guillaume@example.com&quot;

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

ENV NODE_ENV=production

CMD [&quot;node&quot;, &quot;index.js&quot;]
</code></pre><h2>🛠️ 构建与运行</h2><pre><code class="language-bash"># 构建镜像
docker build -t my-app .

# 运行容器
docker run -p 3000:3000 my-app
</code></pre><h2>📁 .dockerignore 示例</h2><pre><code class="language-plaintext">node_modules
*.log
Dockerfile
.git
</code></pre><h2>🏗️ 多阶段构建</h2><p><strong>多阶段构建</strong>允许你在一个 Dockerfile 中使用多条 <code>FROM</code> 语句，以优化镜像体积并将构建依赖与运行时分离。</p><h3>🎯 为什么使用多阶段构建？</h3><ul><li>通过排除构建工具和中间文件来减小最终镜像体积。</li><li>通过最小化攻击面来提升安全性。</li><li>保持 Dockerfile 简洁且易于维护。</li></ul><h3>🧱 基本语法</h3><pre><code class="language-Dockerfile"># 阶段 1：构建
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# 阶段 2：生产
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
</code></pre><h3>🏷️ 命名阶段</h3><p>你可以使用 <code>AS &lt;name&gt;</code> 为每个阶段命名，并在之后通过 <code>--from=&lt;name&gt;</code> 引用它。</p><pre><code class="language-Dockerfile">FROM golang:1.21 AS build
WORKDIR /src
COPY . .
RUN go build -o myapp

FROM alpine:latest
COPY --from=build /src/myapp /usr/local/bin/myapp
ENTRYPOINT [&quot;myapp&quot;]
</code></pre><h3>📦 复制构建产物</h3><p>使用 <code>COPY --from=&lt;stage&gt;</code> 将文件从一个阶段复制到另一个阶段。</p><pre><code class="language-Dockerfile">COPY --from=builder /app/output /app/output
</code></pre><p>你可以复制：</p><ul><li>文件</li><li>目录</li><li>二进制文件</li><li>配置</li></ul><h3>🧼 精简的最终镜像</h3><p>多阶段构建可帮助你避免臃肿的镜像：</p><pre><code class="language-Dockerfile"># 不使用多阶段：包含编译器、源代码等
# 使用多阶段：仅包含运行时必需项
</code></pre><h3>🧪 实战示例：React 应用</h3><pre><code class="language-Dockerfile"># 构建阶段
FROM node:22 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# 服务阶段
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD [&quot;nginx&quot;, &quot;-g&quot;, &quot;daemon off;&quot;]
</code></pre>`,78)]]))}};export{a as default};