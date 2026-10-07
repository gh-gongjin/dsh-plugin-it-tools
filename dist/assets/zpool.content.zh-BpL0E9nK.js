import{E as e,F as t,q as n,w as r}from"./vue.runtime.esm-bundler-DZZTqpJU.js";t();var i={class:`markdown-body`},a={__name:`zpool.content.zh`,setup(t,{expose:a}){return a({frontmatter:{}}),(t,a)=>(n(),r(`div`,i,[...a[0]||=[e(`<p><strong>OpenZFS</strong> 将卷管理器与文件系统合二为一。<strong>存储池</strong>（<code>zpool</code>）由 <strong>vdev</strong> 构成，而 vdev 由磁盘构成；<strong>数据集</strong>（<code>zfs</code>）则是位于存储池内部的文件系统和卷。</p><blockquote><p>⚠️ 冗余存在于 <strong>vdev</strong> 级别，而不是存储池级别。只要丢失一个 vdev，整个存储池都会丢失，无论其他 vdev 多么健康。</p></blockquote><h2>📦 存储池基础</h2><pre><code class="language-bash"># 用单块磁盘创建存储池（无冗余）
zpool create mypool /dev/disk/by-id/&lt;disk&gt;

# 两块磁盘组成的 mirror，4K 对齐
zpool create -o ashift=12 mypool mirror /dev/disk/by-id/&lt;disk1&gt; /dev/disk/by-id/&lt;disk2&gt;

# 六块磁盘组成的 raidz2
zpool create -o ashift=12 tank raidz2 &lt;disk1&gt; &lt;disk2&gt; &lt;disk3&gt; &lt;disk4&gt; &lt;disk5&gt; &lt;disk6&gt;

# 把存储池挂载到 /&lt;poolname&gt; 之外的位置
zpool create -m /srv/data mypool &lt;disk&gt;

# 增加另一个 vdev（这只是扩容，并不会增加冗余）
zpool add mypool mirror &lt;disk3&gt; &lt;disk4&gt;

# 添加热备盘、读缓存（L2ARC）和独立的意图日志
zpool add mypool spare &lt;disk&gt;
zpool add mypool cache &lt;ssd&gt;
zpool add mypool log mirror &lt;ssd1&gt; &lt;ssd2&gt;

# 销毁存储池 —— 不可恢复
zpool destroy mypool
</code></pre><h2>🔍 查看状态</h2><pre><code class="language-bash"># 查看存储池、容量与健康状态
zpool list

# 按 vdev 拆分显示
zpool list -v

# 查看布局、错误以及正在进行的 scrub 或 resilver
zpool status mypool

# 只显示需要关注的存储池
zpool status -x

# 实时吞吐量，每 5 秒刷新一次
zpool iostat -v 5

# 存储池的全部属性
zpool get all mypool

# 该存储池上执行过的所有操作
zpool history mypool
</code></pre><h2>🛠 Vdev 类型</h2><table><thead><tr><th>Vdev 类型</th><th>描述</th><th>RAID 对应级别</th><th>最少磁盘数</th><th>可容忍故障</th></tr></thead><tbody><tr><td><code>stripe</code></td><td>数据条带分布，无校验</td><td>RAID 0</td><td>1</td><td>无法容忍任何故障</td></tr><tr><td><code>mirror</code></td><td>每块磁盘都有一份完整副本</td><td>RAID 1</td><td>2</td><td>除一块盘外的所有磁盘</td></tr><tr><td><code>raidz1</code></td><td>单重校验</td><td>RAID 5</td><td>3</td><td>1 块磁盘</td></tr><tr><td><code>raidz2</code></td><td>双重校验</td><td>RAID 6</td><td>4</td><td>2 块磁盘</td></tr><tr><td><code>raidz3</code></td><td>三重校验</td><td>—（无常见级别）</td><td>5</td><td>3 块磁盘</td></tr><tr><td><code>dRAID</code></td><td>分布式校验，并预留热备空间</td><td>—</td><td>6+</td><td>按配置而定，重建更快</td></tr></tbody></table><p>辅助 vdev：<code>cache</code>（L2ARC 读缓存）、<code>log</code>（SLOG，用于同步写入）、<code>special</code>（元数据与小块数据）、<code>spare</code>（热备盘）。</p><h2>🩺 健康与维护</h2><pre><code class="language-bash"># 按校验和校验每一个数据块
zpool scrub mypool

# 停止或暂停正在进行的 scrub
zpool scrub -s mypool
zpool scrub -p mypool

# 清除已处理过的错误记录
zpool clear mypool

# 用新盘替换故障盘
zpool replace mypool &lt;old-disk&gt; &lt;new-disk&gt;

# 把单盘变成 mirror，或拆分 mirror
zpool attach mypool &lt;existing-disk&gt; &lt;new-disk&gt;
zpool detach mypool &lt;disk&gt;

# 让磁盘下线 / 重新上线
zpool offline mypool &lt;disk&gt;
zpool online mypool &lt;disk&gt;

# 告诉 SSD 哪些数据块已空闲
zpool trim mypool

# 启用更新版 OpenZFS 的磁盘特性
zpool upgrade mypool
</code></pre><blockquote><p>💡 消费级磁盘建议每月 scrub 一次，重要数据可每周一次。<code>zpool status</code> 会报告上次 scrub 的结果。</p></blockquote><h2>📤 导入与导出</h2><pre><code class="language-bash"># 释放存储池，以便迁移到另一台机器
zpool export mypool

# 列出可导入的存储池
zpool import

# 按名称导入，优先使用稳定的设备名
zpool import -d /dev/disk/by-id mypool

# 导入它能找到的所有存储池
zpool import -a

# 强制导入未正常导出的存储池
zpool import -f mypool

# 以其他名称导入，或挂载到备用根目录
zpool import mypool newname
zpool import -R /mnt mypool
</code></pre><h2>⚙️ 存储池属性</h2><pre><code class="language-bash"># 数据块释放后自动 trim
zpool set autotrim=on mypool

# 底层磁盘扩容时自动扩展存储池
zpool set autoexpand=on mypool

# 用热备盘自动替换故障盘
zpool set autoreplace=on mypool

# 存储池故障时的行为：wait | continue | panic
zpool set failmode=continue mypool

# 读取单个属性
zpool get health,capacity,fragmentation mypool
</code></pre><h2>📁 数据集与文件系统</h2><pre><code class="language-bash"># 创建数据集
zfs create mypool/data

# 创建嵌套数据集，按需自动创建父级
zfs create -p mypool/data/projects/web

# 创建块设备（zvol），用于虚拟机或 iSCSI 目标
zfs create -V 50G mypool/vm-disk

# 列出数据集、快照和卷
zfs list
zfs list -t all -r mypool

# 常用属性
zfs set compression=lz4 mypool/data
zfs set quota=100G mypool/data
zfs set reservation=10G mypool/data
zfs set atime=off mypool/data
zfs set recordsize=1M mypool/media

# 读取属性，包括其继承来源
zfs get -r compression mypool
zfs get all mypool/data

# 挂载、卸载与销毁
zfs mount mypool/data
zfs unmount mypool/data
zfs destroy -r mypool/data
</code></pre><h2>📸 快照与复制</h2><pre><code class="language-bash"># 创建快照（瞬间完成，且在数据发生变更之前不占空间）
zfs snapshot mypool/data@2026-08-22

# 对数据集及其所有子数据集递归创建快照
zfs snapshot -r mypool/data@nightly

# 列出快照及其占用空间
zfs list -t snapshot -o name,used,refer

# 回滚 —— 会丢弃此后的所有写入
zfs rollback mypool/data@2026-08-22

# 只从快照中读取单个文件
ls /mypool/data/.zfs/snapshot/2026-08-22/

# 基于快照创建可写副本
zfs clone mypool/data@2026-08-22 mypool/data-copy

# 将完整快照发送到另一台机器
zfs send mypool/data@snap1 | ssh user@host zfs receive backup/data

# 只发送自上一个快照以来的增量
zfs send -i mypool/data@snap1 mypool/data@snap2 | ssh user@host zfs receive backup/data

# 删除快照
zfs destroy mypool/data@snap1
</code></pre><h2>🧠 技巧与最佳实践</h2><ul><li>一律使用 <code>/dev/disk/by-id/...</code> 来指定磁盘，不要用 <code>/dev/sdX</code> —— 内核设备名在重启后可能变化。</li><li>对任何现代硬盘，创建时都设置 <code>ashift=12</code>；该值之后无法更改。</li><li>把整块磁盘交给 ZFS，而不是分区，这样它才能自行管理写入缓存。</li><li>存储池使用率保持在 80% 以下 —— 超过后性能会急剧下降，且碎片化不可逆。</li><li>尽可能使用 ECC 内存：ZFS 完全信任内存中的数据。</li><li>不要在同一个存储池中混用不同类型的 vdev 或不同的宽度；存储池的可靠性取决于最弱的那个 vdev。</li><li>快照不等于备份 —— 请用 <code>zfs send</code> 把它复制到别处。</li></ul><h2>📚 参考资源</h2><ul><li><a href="https://openzfs.github.io/openzfs-docs/">OpenZFS 文档</a></li><li><a href="https://openzfs.github.io/openzfs-docs/man/master/8/zpool.8.html"><code>zpool</code> 手册页</a></li><li><a href="https://openzfs.github.io/openzfs-docs/man/master/8/zfs.8.html"><code>zfs</code> 手册页</a></li><li><a href="https://openzfs.github.io/openzfs-docs/Performance%20and%20Tuning/Workload%20Tuning.html">工作负载调优指南</a></li></ul>`,24)]]))}};export{a as default};