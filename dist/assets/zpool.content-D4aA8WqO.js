import{E as e,F as t,q as n,w as r}from"./vue.runtime.esm-bundler-DZZTqpJU.js";t();var i={class:`markdown-body`},a={__name:`zpool.content`,setup(t,{expose:a}){return a({frontmatter:{}}),(t,a)=>(n(),r(`div`,i,[...a[0]||=[e(`<p><strong>OpenZFS</strong> combines the volume manager and the filesystem. A <strong>pool</strong> (<code>zpool</code>) is built from <strong>vdevs</strong>, and vdevs are built from disks; <strong>datasets</strong> (<code>zfs</code>) are the filesystems and volumes that live inside a pool.</p><blockquote><p>⚠️ Redundancy lives at the <strong>vdev</strong> level, not the pool level. Lose one vdev and you lose the whole pool, however healthy the others are.</p></blockquote><h2>📦 Pool Basics</h2><pre><code class="language-bash"># create a pool from a single disk (no redundancy)
zpool create mypool /dev/disk/by-id/&lt;disk&gt;

# a two-disk mirror, 4K-aligned
zpool create -o ashift=12 mypool mirror /dev/disk/by-id/&lt;disk1&gt; /dev/disk/by-id/&lt;disk2&gt;

# raidz2 across six disks
zpool create -o ashift=12 tank raidz2 &lt;disk1&gt; &lt;disk2&gt; &lt;disk3&gt; &lt;disk4&gt; &lt;disk5&gt; &lt;disk6&gt;

# mount the pool somewhere other than /&lt;poolname&gt;
zpool create -m /srv/data mypool &lt;disk&gt;

# add another vdev (this widens the pool, it does not add redundancy)
zpool add mypool mirror &lt;disk3&gt; &lt;disk4&gt;

# add a hot spare, a read cache (L2ARC) and a separate intent log
zpool add mypool spare &lt;disk&gt;
zpool add mypool cache &lt;ssd&gt;
zpool add mypool log mirror &lt;ssd1&gt; &lt;ssd2&gt;

# destroy a pool — irreversible
zpool destroy mypool
</code></pre><h2>🔍 Inspecting</h2><pre><code class="language-bash"># pools, their size and health
zpool list

# per-vdev breakdown
zpool list -v

# layout, errors and any running scrub or resilver
zpool status mypool

# only the pools that need attention
zpool status -x

# live throughput, refreshed every 5 seconds
zpool iostat -v 5

# every property of the pool
zpool get all mypool

# what has been done to this pool, ever
zpool history mypool
</code></pre><h2>🛠 Vdev Types</h2><table><thead><tr><th>Vdev type</th><th>Description</th><th>RAID equivalent</th><th>Min. disks</th><th>Survives</th></tr></thead><tbody><tr><td><code>stripe</code></td><td>Data spread across disks, no parity</td><td>RAID 0</td><td>1</td><td>nothing</td></tr><tr><td><code>mirror</code></td><td>A full copy on every disk</td><td>RAID 1</td><td>2</td><td>all but one disk</td></tr><tr><td><code>raidz1</code></td><td>Single parity</td><td>RAID 5</td><td>3</td><td>1 disk</td></tr><tr><td><code>raidz2</code></td><td>Double parity</td><td>RAID 6</td><td>4</td><td>2 disks</td></tr><tr><td><code>raidz3</code></td><td>Triple parity</td><td>— (no common level)</td><td>5</td><td>3 disks</td></tr><tr><td><code>dRAID</code></td><td>Distributed parity with spare space</td><td>—</td><td>6+</td><td>as configured, rebuilds faster</td></tr></tbody></table><p>Support vdevs: <code>cache</code> (L2ARC read cache), <code>log</code> (SLOG, for synchronous writes), <code>special</code> (metadata and small blocks), <code>spare</code> (hot spare).</p><h2>🩺 Health &amp; Maintenance</h2><pre><code class="language-bash"># verify every block against its checksum
zpool scrub mypool

# stop or pause a running scrub
zpool scrub -s mypool
zpool scrub -p mypool

# forget errors that have been dealt with
zpool clear mypool

# swap a failing disk for a new one
zpool replace mypool &lt;old-disk&gt; &lt;new-disk&gt;

# turn a single disk into a mirror, or break one up
zpool attach mypool &lt;existing-disk&gt; &lt;new-disk&gt;
zpool detach mypool &lt;disk&gt;

# take a disk out of service and bring it back
zpool offline mypool &lt;disk&gt;
zpool online mypool &lt;disk&gt;

# tell the SSDs which blocks are free
zpool trim mypool

# enable the on-disk features of a newer OpenZFS release
zpool upgrade mypool
</code></pre><blockquote><p>💡 Scrub monthly on consumer disks, weekly if the data matters. <code>zpool status</code> reports what the last scrub found.</p></blockquote><h2>📤 Import &amp; Export</h2><pre><code class="language-bash"># release a pool so it can be moved to another machine
zpool export mypool

# list the pools that could be imported
zpool import

# import by name, preferring the stable device names
zpool import -d /dev/disk/by-id mypool

# import every pool it can find
zpool import -a

# import a pool that was not exported cleanly
zpool import -f mypool

# import under a different name, or under an alternate root
zpool import mypool newname
zpool import -R /mnt mypool
</code></pre><h2>⚙️ Pool Properties</h2><pre><code class="language-bash"># trim automatically as blocks are freed
zpool set autotrim=on mypool

# grow the pool when the underlying disks grow
zpool set autoexpand=on mypool

# replace a failed disk with a spare automatically
zpool set autoreplace=on mypool

# what to do when the pool faults: wait | continue | panic
zpool set failmode=continue mypool

# read one property
zpool get health,capacity,fragmentation mypool
</code></pre><h2>📁 Datasets &amp; Filesystems</h2><pre><code class="language-bash"># create a dataset
zfs create mypool/data

# create a nested dataset, making the parents as needed
zfs create -p mypool/data/projects/web

# create a block device (zvol) for a VM or iSCSI target
zfs create -V 50G mypool/vm-disk

# list datasets, snapshots and volumes
zfs list
zfs list -t all -r mypool

# common properties
zfs set compression=lz4 mypool/data
zfs set quota=100G mypool/data
zfs set reservation=10G mypool/data
zfs set atime=off mypool/data
zfs set recordsize=1M mypool/media

# read properties, including where they were inherited from
zfs get -r compression mypool
zfs get all mypool/data

# mount, unmount, and destroy
zfs mount mypool/data
zfs unmount mypool/data
zfs destroy -r mypool/data
</code></pre><h2>📸 Snapshots &amp; Replication</h2><pre><code class="language-bash"># take a snapshot (instant, and free until the data diverges)
zfs snapshot mypool/data@2026-08-22

# snapshot a dataset and everything under it
zfs snapshot -r mypool/data@nightly

# list snapshots and what they cost
zfs list -t snapshot -o name,used,refer

# go back in time — discards everything written since
zfs rollback mypool/data@2026-08-22

# read a single file out of a snapshot instead
ls /mypool/data/.zfs/snapshot/2026-08-22/

# a writable copy of a snapshot
zfs clone mypool/data@2026-08-22 mypool/data-copy

# send a full snapshot to another machine
zfs send mypool/data@snap1 | ssh user@host zfs receive backup/data

# send only what changed since the previous snapshot
zfs send -i mypool/data@snap1 mypool/data@snap2 | ssh user@host zfs receive backup/data

# delete a snapshot
zfs destroy mypool/data@snap1
</code></pre><h2>🧠 Tips &amp; Best Practices</h2><ul><li>Address disks by <code>/dev/disk/by-id/...</code>, never <code>/dev/sdX</code> — kernel names move between boots.</li><li>Set <code>ashift=12</code> at creation time for any modern drive; it cannot be changed afterwards.</li><li>Give ZFS whole disks, not partitions, so it can manage the write cache itself.</li><li>Keep pools below ~80% full — performance falls off a cliff above that, and fragmentation is permanent.</li><li>Use ECC RAM where you can: ZFS trusts what is in memory.</li><li>Do not mix vdev types or widths in one pool; the pool is only as good as its weakest vdev.</li><li>A snapshot is not a backup — replicate it somewhere else with <code>zfs send</code>.</li></ul><h2>📚 Resources</h2><ul><li><a href="https://openzfs.github.io/openzfs-docs/">OpenZFS documentation</a></li><li><a href="https://openzfs.github.io/openzfs-docs/man/master/8/zpool.8.html"><code>zpool</code> manual page</a></li><li><a href="https://openzfs.github.io/openzfs-docs/man/master/8/zfs.8.html"><code>zfs</code> manual page</a></li><li><a href="https://openzfs.github.io/openzfs-docs/Performance%20and%20Tuning/Workload%20Tuning.html">Workload tuning guide</a></li></ul>`,24)]]))}};export{a as default};