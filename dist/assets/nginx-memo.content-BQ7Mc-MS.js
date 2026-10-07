import{E as e,F as t,q as n,w as r}from"./vue.runtime.esm-bundler-DZZTqpJU.js";t();var i={class:`markdown-body`},a={__name:`nginx-memo.content`,setup(t,{expose:a}){return a({frontmatter:{}}),(t,a)=>(n(),r(`div`,i,[...a[0]||=[e(`<p><strong>nginx</strong> is a web server, reverse proxy and load balancer. Configuration is a tree of <em>contexts</em> — <code>main</code> → <code>events</code> / <code>http</code> → <code>server</code> → <code>location</code> — and a directive is only valid in the contexts that define it.</p><h2>🛠 Service &amp; CLI</h2><pre><code class="language-bash"># check the configuration before you break production
sudo nginx -t

# print the entire resolved configuration, includes and all
sudo nginx -T

# reload without dropping connections
sudo nginx -s reload
sudo systemctl reload nginx

# start, stop, restart, status
sudo systemctl start nginx
sudo systemctl stop nginx
sudo systemctl restart nginx
sudo systemctl status nginx

# version, and the modules it was built with
nginx -V

# enable a site (Debian/Ubuntu layout)
sudo ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/

# watch the requests come in
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
</code></pre><blockquote><p>💡 <code>nginx -t</code> then <code>nginx -s reload</code> — never <code>restart</code> on a live server if you can avoid it. A reload keeps existing connections alive; a restart drops them.</p></blockquote><h2>📁 Where Things Live</h2><table><thead><tr><th>Path</th><th>What it holds</th></tr></thead><tbody><tr><td><code>/etc/nginx/nginx.conf</code></td><td>The main file — worker settings and the <code>http</code> block</td></tr><tr><td><code>/etc/nginx/conf.d/*.conf</code></td><td>Included by default on RHEL-style installs</td></tr><tr><td><code>/etc/nginx/sites-available/</code></td><td>Site configs on Debian/Ubuntu</td></tr><tr><td><code>/etc/nginx/sites-enabled/</code></td><td>Symlinks to the sites that are actually live</td></tr><tr><td><code>/var/log/nginx/access.log</code></td><td>Every request</td></tr><tr><td><code>/var/log/nginx/error.log</code></td><td>Errors, and anything the workers complain about</td></tr><tr><td><code>/var/www/html</code></td><td>The conventional document root</td></tr></tbody></table><h2>🧱 Config Skeleton</h2><pre><code class="language-nginx">user www-data;
worker_processes auto;

events {
  worker_connections 1024;
}

http {
  include       /etc/nginx/mime.types;
  default_type  application/octet-stream;
  sendfile      on;
  keepalive_timeout 65;

  server {
    listen 80;
    server_name example.com;

    location / {
      root /var/www/html;
      index index.html;
    }
  }
}
</code></pre><h2>🎧 listen &amp; server_name</h2><pre><code class="language-nginx">server {
  # plain HTTP
  listen 80;

  # HTTPS, with HTTP/2
  listen 443 ssl;
  http2 on;

  # IPv6 as well, or IPv6 only
  listen [::]:80;
  listen [::]:80 ipv6only=on;

  # the fallback server for requests that match no other server_name
  listen 80 default_server;

  # one name, several names, wildcards, or a regex
  server_name example.com;
  server_name example.com www.example.com;
  server_name *.example.com;
  server_name ~^(?&lt;sub&gt;.+)\\.example\\.com$;

  # requests that arrive with no Host header
  server_name &quot;&quot;;
}
</code></pre><h2>📄 Serving Files</h2><pre><code class="language-nginx">server {
  listen 80;
  server_name example.com;
  root /var/www/example.com;
  index index.html index.htm;

  # try the file, then the directory, then fall back — the SPA pattern
  location / {
    try_files $uri $uri/ /index.html;
  }

  # cache fingerprinted assets hard
  location ~* \\.(js|css|png|jpe?g|gif|svg|woff2?)$ {
    expires 1y;
    add_header Cache-Control &quot;public, immutable&quot;;
    access_log off;
  }

  # a directory listing, when you actually want one
  location /downloads/ {
    autoindex on;
  }

  # a single file
  location = /robots.txt {
    root /var/www/example.com;
    log_not_found off;
  }
}
</code></pre><blockquote><p>⚠️ <strong><code>root</code> vs <code>alias</code></strong>: <code>root</code> appends the whole URI to the path, <code>alias</code> replaces the matched prefix. With <code>location /static/ { root /var/www; }</code> a request for <code>/static/a.png</code> reads <code>/var/www/static/a.png</code>; with <code>alias /var/www/assets/;</code> it reads <code>/var/www/assets/a.png</code>. Always end an <code>alias</code> path with <code>/</code>.</p></blockquote><h2>📍 Location Matching</h2><p>nginx does not pick locations top to bottom — it picks by modifier, in this order:</p><table><thead><tr><th>Modifier</th><th>Example</th><th>Meaning</th><th>Priority</th></tr></thead><tbody><tr><td><code>=</code></td><td><code>location = /health</code></td><td>Exact match</td><td>1 — wins immediately</td></tr><tr><td><code>^~</code></td><td><code>location ^~ /static/</code></td><td>Prefix match that stops regex matching</td><td>2</td></tr><tr><td><code>~</code></td><td><code>location ~ \\.php$</code></td><td>Case-sensitive regex, first match in file order</td><td>3</td></tr><tr><td><code>~*</code></td><td><code>location ~* \\.(jpe?g)$</code></td><td>Case-insensitive regex</td><td>3</td></tr><tr><td><em>(none)</em></td><td><code>location /images/</code></td><td>Prefix match — the longest one wins if no regex did</td><td>4</td></tr></tbody></table><pre><code class="language-nginx">location = /health { return 200 &quot;ok\\n&quot;; }   # checked first, cheapest
location ^~ /assets/ { root /var/www; }     # never falls through to the regex below
location ~* \\.(png|jpg)$ { expires 30d; }
location / { try_files $uri $uri/ =404; }   # the catch-all
</code></pre><h2>🔀 Redirects &amp; Rewrites</h2><pre><code class="language-nginx"># permanent redirect to the canonical host
server {
  listen 80;
  server_name www.example.com;
  return 301 https://example.com$request_uri;
}

# force HTTPS
server {
  listen 80;
  server_name example.com;
  return 301 https://$host$request_uri;
}

# temporary redirect of a single path
location /old-page {
  return 302 /new-page;
}

# rewrite with a captured segment
location /blog/ {
  rewrite ^/blog/(.*)$ /articles/$1 permanent;
}

# serve a maintenance page for everyone but your own IP
location / {
  if ($remote_addr != 203.0.113.7) {
    return 503;
  }
}
</code></pre><blockquote><p>💡 Prefer <code>return</code> over <code>rewrite</code> — it is faster and clearer. Reach for <code>rewrite</code> only when you need to transform the path.</p></blockquote><h2>🔁 Reverse Proxy</h2><pre><code class="language-nginx">server {
  listen 80;
  server_name app.example.com;

  location / {
    proxy_pass http://127.0.0.1:3000;

    # pass the client&#39;s details through to the app
    proxy_set_header Host              $host;
    proxy_set_header X-Real-IP         $remote_addr;
    proxy_set_header X-Forwarded-For   $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;

    # timeouts: raise these for slow backends
    proxy_connect_timeout 60s;
    proxy_send_timeout    60s;
    proxy_read_timeout    60s;

    # buffering off for streaming responses (SSE, logs)
    proxy_buffering on;
  }

  # WebSockets need the upgrade headers
  location /ws/ {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade    $http_upgrade;
    proxy_set_header Connection &quot;upgrade&quot;;
    proxy_read_timeout 3600s;
  }
}
</code></pre><blockquote><p>⚠️ The trailing slash on <code>proxy_pass</code> changes everything. <code>proxy_pass http://backend;</code> forwards <code>/api/users</code> as <code>/api/users</code>; <code>proxy_pass http://backend/;</code> strips the matched location prefix first.</p></blockquote><h2>⚖️ Load Balancing</h2><pre><code class="language-nginx">upstream backend {
  # least_conn;              # send to the server with the fewest connections
  # ip_hash;                 # sticky sessions by client IP
  # hash $request_uri;       # sticky by URI

  server 10.0.0.1:3000 weight=3;
  server 10.0.0.2:3000;
  server 10.0.0.3:3000 max_fails=3 fail_timeout=30s;
  server 10.0.0.4:3000 backup;

  keepalive 32;              # reuse upstream connections
}

server {
  listen 80;
  location / {
    proxy_pass http://backend;
    proxy_http_version 1.1;
    proxy_set_header Connection &quot;&quot;;   # required for keepalive to work
  }
}
</code></pre><table><thead><tr><th>Method</th><th>Behaviour</th></tr></thead><tbody><tr><td><em>(default)</em></td><td>Round robin, honouring <code>weight</code></td></tr><tr><td><code>least_conn</code></td><td>Fewest active connections wins</td></tr><tr><td><code>ip_hash</code></td><td>Same client IP always reaches the same server</td></tr><tr><td><code>hash &lt;key&gt;</code></td><td>Distribute by any variable, e.g. <code>$request_uri</code></td></tr><tr><td><code>random two least_conn</code></td><td>Pick two at random, then the less busy one</td></tr></tbody></table><h2>🔐 HTTPS</h2><pre><code class="language-nginx">server {
  listen 443 ssl;
  http2 on;
  server_name example.com;

  ssl_certificate     /etc/letsencrypt/live/example.com/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;

  ssl_protocols TLSv1.2 TLSv1.3;
  ssl_prefer_server_ciphers off;
  ssl_session_cache shared:SSL:10m;
  ssl_session_timeout 1d;
  ssl_stapling on;
  ssl_stapling_verify on;

  # tell browsers to stay on HTTPS
  add_header Strict-Transport-Security &quot;max-age=63072000&quot; always;
}
</code></pre><pre><code class="language-bash"># get and renew certificates automatically
sudo certbot --nginx -d example.com -d www.example.com
sudo certbot renew --dry-run
</code></pre><h2>🚦 Limits &amp; Access Control</h2><pre><code class="language-nginx">http {
  # 10 MB of state ≈ 160k addresses; 10 requests/second per IP
  limit_req_zone $binary_remote_addr zone=req_limit:10m rate=10r/s;
  limit_conn_zone $binary_remote_addr zone=conn_limit:10m;

  server {
    # allow short bursts, queue the rest without delaying legitimate users
    location /api/ {
      limit_req zone=req_limit burst=20 nodelay;
      limit_conn conn_limit 10;
    }

    # the size of the largest upload you accept
    client_max_body_size 25m;

    # HTTP basic auth (htpasswd -c /etc/nginx/.htpasswd user)
    location /admin/ {
      auth_basic &quot;Restricted&quot;;
      auth_basic_user_file /etc/nginx/.htpasswd;
    }

    # allow a subnet, deny the rest
    location /internal/ {
      allow 10.0.0.0/8;
      deny  all;
    }

    # do not serve dotfiles
    location ~ /\\.(?!well-known) {
      deny all;
    }
  }
}
</code></pre><h2>🗜 Performance</h2><pre><code class="language-nginx">http {
  # compress text responses
  gzip on;
  gzip_vary on;
  gzip_min_length 1024;
  gzip_types text/plain text/css application/json application/javascript
             text/xml application/xml image/svg+xml;

  # kernel-level file sending
  sendfile on;
  tcp_nopush on;
  tcp_nodelay on;

  # keep connections around for reuse
  keepalive_timeout 65;
  keepalive_requests 1000;

  # cache open file handles
  open_file_cache max=10000 inactive=30s;
  open_file_cache_valid 60s;

  # a proxy cache for upstream responses
  proxy_cache_path /var/cache/nginx keys_zone=app_cache:10m max_size=1g inactive=60m;

  server {
    location / {
      proxy_cache app_cache;
      proxy_cache_valid 200 10m;
      add_header X-Cache-Status $upstream_cache_status;
    }
  }
}
</code></pre><h2>🧪 Useful Variables</h2><table><thead><tr><th>Variable</th><th>Holds</th></tr></thead><tbody><tr><td><code>$host</code></td><td>The Host header, or the server name that matched</td></tr><tr><td><code>$uri</code></td><td>The normalised path, without the query string</td></tr><tr><td><code>$request_uri</code></td><td>The original path <strong>with</strong> the query string</td></tr><tr><td><code>$args</code> / <code>$arg_name</code></td><td>The whole query string / one named parameter</td></tr><tr><td><code>$scheme</code></td><td><code>http</code> or <code>https</code></td></tr><tr><td><code>$remote_addr</code></td><td>The client’s IP address</td></tr><tr><td><code>$proxy_add_x_forwarded_for</code></td><td>The existing chain plus <code>$remote_addr</code></td></tr><tr><td><code>$http_&lt;name&gt;</code></td><td>Any request header, e.g. <code>$http_user_agent</code></td></tr><tr><td><code>$request_method</code></td><td><code>GET</code>, <code>POST</code>, …</td></tr><tr><td><code>$status</code></td><td>The response status</td></tr><tr><td><code>$upstream_addr</code></td><td>Which backend actually served the request</td></tr><tr><td><code>$upstream_response_time</code></td><td>How long the backend took</td></tr><tr><td><code>$request_time</code></td><td>How long nginx took, start to finish</td></tr></tbody></table><h2>🩺 Troubleshooting</h2><table><thead><tr><th>Symptom</th><th>Usual cause</th></tr></thead><tbody><tr><td><code>502 Bad Gateway</code></td><td>The backend is down, or refused the connection — check the app and <code>proxy_pass</code></td></tr><tr><td><code>504 Gateway Timeout</code></td><td>The backend is too slow — raise <code>proxy_read_timeout</code>, then fix the app</td></tr><tr><td><code>413 Request Entity Too Large</code></td><td>Raise <code>client_max_body_size</code></td></tr><tr><td><code>403 Forbidden</code> on a static file</td><td>The worker user cannot read the path, or a directory lacks <code>x</code></td></tr><tr><td>The wrong site is served</td><td>No <code>server_name</code> matched, so the <code>default_server</code> answered</td></tr><tr><td>Changes have no effect</td><td>The config was never reloaded, or the file is not symlinked into <code>sites-enabled</code></td></tr></tbody></table><pre><code class="language-bash"># see the config nginx is actually running, includes resolved
sudo nginx -T | less

# which worker user needs read access
ps -o user= -C nginx | sort -u

# turn up the error log while debugging
# error_log /var/log/nginx/error.log debug;
</code></pre><h2>📚 Resources</h2><ul><li><a href="https://nginx.org/en/docs/">Official documentation</a></li><li><a href="https://nginx.org/en/docs/dirindex.html">Directive index</a></li><li><a href="https://nginx.org/en/docs/varindex.html">Variable index</a></li><li><a href="https://ssl-config.mozilla.org/">Mozilla SSL configuration generator</a></li><li><a href="https://certbot.eff.org/">Certbot — Let’s Encrypt</a></li></ul>`,40)]]))}};export{a as default};