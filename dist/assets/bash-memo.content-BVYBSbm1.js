import{E as e,F as t,q as n,w as r}from"./vue.runtime.esm-bundler-DZZTqpJU.js";t();var i={class:`markdown-body`},a={__name:`bash-memo.content`,setup(t,{expose:a}){return a({frontmatter:{}}),(t,a)=>(n(),r(`div`,i,[...a[0]||=[e(`<p><strong>Bash</strong> is the default shell on most Linux systems and the language of most glue scripts. This sheet covers the interactive shortcuts, the syntax you forget between scripts, and the safety flags worth putting at the top of every file.</p><pre><code class="language-bash">#!/usr/bin/env bash
set -euo pipefail
</code></pre><h2>⌨️ Keyboard Shortcuts</h2><table><thead><tr><th>Keys</th><th>Does</th></tr></thead><tbody><tr><td><code>Ctrl+A</code> / <code>Ctrl+E</code></td><td>Jump to the start / end of the line</td></tr><tr><td><code>Ctrl+B</code> / <code>Ctrl+F</code></td><td>Back / forward one character</td></tr><tr><td><code>Alt+B</code> / <code>Alt+F</code></td><td>Back / forward one word</td></tr><tr><td><code>Ctrl+U</code> / <code>Ctrl+K</code></td><td>Cut to the start / end of the line</td></tr><tr><td><code>Ctrl+W</code></td><td>Cut the word before the cursor</td></tr><tr><td><code>Alt+D</code></td><td>Cut the word after the cursor</td></tr><tr><td><code>Ctrl+Y</code></td><td>Paste back what you last cut</td></tr><tr><td><code>Ctrl+T</code> / <code>Alt+T</code></td><td>Swap the last two characters / words</td></tr><tr><td><code>Alt+.</code></td><td>Insert the last argument of the previous command</td></tr><tr><td><code>Ctrl+L</code></td><td>Clear the screen</td></tr><tr><td><code>Ctrl+R</code></td><td>Search the history backwards</td></tr><tr><td><code>Ctrl+G</code></td><td>Abort the history search</td></tr><tr><td><code>Ctrl+C</code></td><td>Interrupt the running command</td></tr><tr><td><code>Ctrl+D</code></td><td>End of input — logs out of an empty prompt</td></tr><tr><td><code>Ctrl+Z</code></td><td>Suspend the running command</td></tr><tr><td><code>Ctrl+S</code> / <code>Ctrl+Q</code></td><td>Freeze / resume terminal output</td></tr><tr><td><code>Alt+U</code> / <code>Alt+L</code></td><td>Upper-case / lower-case to the end of the word</td></tr></tbody></table><h2>🕰 History</h2><pre><code class="language-bash"># the last few hundred commands
history

# run command number 42
!42

# run the last command again, or the last one starting with &#39;ssh&#39;
!!
!ssh

# the last argument of the previous command — also Alt+.
!$

# every argument of the previous command
!*

# re-run the last command with a substitution
^old^new

# forget a command you would rather not keep
history -d 42

# do not record commands that start with a space, and drop duplicates
export HISTCONTROL=ignoreboth
export HISTSIZE=10000 HISTFILESIZE=20000
</code></pre><h2>📁 Files &amp; Directories</h2><pre><code class="language-bash"># list: long, human sizes, hidden files, newest last
ls -lhAtr

# tree view of a directory
tree -L 2

# copy, move, delete
cp -r src/ dest/
mv old new
rm -rf directory

# create nested directories in one go
mkdir -p project/{src,test,docs}

# symbolic and hard links
ln -s /path/to/target linkname
ln target hardlink

# where is a file, and what is it?
find . -name &#39;*.log&#39; -mtime -7
find . -type f -size +100M
locate nginx.conf
which python3
type -a ls
file archive.bin
stat report.pdf

# disk usage: this directory, and the filesystem
du -sh *
du -h --max-depth=1 | sort -h
df -h

# archives
tar czf backup.tar.gz directory/
tar xzf backup.tar.gz
zip -r archive.zip directory/
unzip archive.zip
</code></pre><h2>🔎 Text &amp; Search</h2><pre><code class="language-bash"># grep: recursive, line numbers, case-insensitive
grep -rni &quot;pattern&quot; .

# only the matching part, or only the file names
grep -o &#39;v[0-9.]*&#39; file
grep -rl &quot;TODO&quot; src/

# invert, count, context
grep -v &quot;debug&quot; app.log
grep -c &quot;error&quot; app.log
grep -B2 -A2 &quot;exception&quot; app.log

# head, tail, follow
head -20 file
tail -f /var/log/syslog

# columns, sorting, counting
cut -d&#39;,&#39; -f1,3 data.csv
sort -u names.txt
sort -k2 -n scores.txt
uniq -c sorted.txt
wc -l file

# the classic: what are the top ten IPs in this log?
awk &#39;{print $1}&#39; access.log | sort | uniq -c | sort -rn | head

# replace across many files
sed -i &#39;s/old/new/g&#39; *.conf

# translate or delete characters
tr &#39;a-z&#39; &#39;A-Z&#39; &lt; file
tr -d &#39;\\r&#39; &lt; dos.txt &gt; unix.txt

# split a stream: to a file and onward down the pipe
command | tee output.log | grep error

# build command lines from input
find . -name &#39;*.py&#39; | xargs wc -l
find . -name &#39;*.tmp&#39; -print0 | xargs -0 rm
</code></pre><h2>🖧 System &amp; Network</h2><pre><code class="language-bash"># who and where am I
whoami; hostname; uname -a; uptime

# processes
ps aux | grep nginx
pgrep -a node
top
htop

# memory and load
free -h
vmstat 1 5

# what is listening, and what has this file open
ss -tulpn
lsof -i :8080
lsof /var/log/app.log

# connectivity
ping -c 4 example.com
traceroute example.com
dig example.com +short
ip addr show
curl -I https://example.com

# transfer files
scp file user@host:/path/
rsync -avz --progress src/ user@host:/dest/

# remote shell, with a tunnel
ssh user@host
ssh -L 8080:localhost:80 user@host

# services and logs (systemd)
systemctl status nginx
journalctl -u nginx -f --since &quot;1 hour ago&quot;
</code></pre><h2>📦 Variables</h2><pre><code class="language-bash"># assignment: no spaces around the =
name=&quot;value&quot;

# only for this one command
DEBUG=1 ./script.sh

# export to child processes
export PATH=&quot;$HOME/bin:$PATH&quot;

# read input from the user
read -p &quot;Name: &quot; name
read -rs -p &quot;Password: &quot; pass

# command substitution
today=$(date +%F)

# arithmetic
count=$(( count + 1 ))
let &quot;n = 5 * 3&quot;

# read-only and integer variables
declare -r VERSION=1.0
declare -i counter=0
</code></pre><table><thead><tr><th>Variable</th><th>Holds</th></tr></thead><tbody><tr><td><code>$0</code></td><td>The name of the script</td></tr><tr><td><code>$1</code> … <code>$9</code></td><td>Positional arguments</td></tr><tr><td><code>$#</code></td><td>How many arguments were passed</td></tr><tr><td><code>$@</code></td><td>All arguments, each one quoted separately</td></tr><tr><td><code>$*</code></td><td>All arguments as a single word</td></tr><tr><td><code>$?</code></td><td>Exit status of the last command</td></tr><tr><td><code>$$</code></td><td>PID of the current shell</td></tr><tr><td><code>$!</code></td><td>PID of the last background job</td></tr><tr><td><code>$_</code></td><td>Last argument of the previous command</td></tr><tr><td><code>$HOME</code> <code>$USER</code> <code>$PWD</code> <code>$OLDPWD</code></td><td>The usual environment</td></tr><tr><td><code>$RANDOM</code></td><td>A random integer</td></tr><tr><td><code>$LINENO</code></td><td>The current line number — handy in traps</td></tr></tbody></table><h2>🔤 Parameter Expansion</h2><table><thead><tr><th>Expansion</th><th>Result</th></tr></thead><tbody><tr><td><code>\${var:-default}</code></td><td><code>default</code> when <code>var</code> is unset or empty</td></tr><tr><td><code>\${var:=default}</code></td><td>The same, and assigns it</td></tr><tr><td><code>\${var:?message}</code></td><td>Abort with <code>message</code> when unset — great for required arguments</td></tr><tr><td><code>\${var:+value}</code></td><td><code>value</code> only when <code>var</code> <strong>is</strong> set</td></tr><tr><td><code>\${#var}</code></td><td>The length of the value</td></tr><tr><td><code>\${var:offset:length}</code></td><td>A substring</td></tr><tr><td><code>\${var#pattern}</code></td><td>Strip the shortest match from the start</td></tr><tr><td><code>\${var##pattern}</code></td><td>Strip the longest match from the start — <code>\${path##*/}</code> is basename</td></tr><tr><td><code>\${var%pattern}</code></td><td>Strip the shortest match from the end — <code>\${file%.txt}</code> drops the extension</td></tr><tr><td><code>\${var%%pattern}</code></td><td>Strip the longest match from the end</td></tr><tr><td><code>\${var/old/new}</code></td><td>Replace the first match</td></tr><tr><td><code>\${var//old/new}</code></td><td>Replace every match</td></tr><tr><td><code>\${var^^}</code> / <code>\${var,,}</code></td><td>Upper-case / lower-case the whole value</td></tr></tbody></table><pre><code class="language-bash">path=&quot;/var/log/app.log&quot;
echo &quot;\${path##*/}&quot;    # app.log
echo &quot;\${path%/*}&quot;     # /var/log
echo &quot;\${path%.log}&quot;   # /var/log/app
</code></pre><h2>📚 Arrays</h2><pre><code class="language-bash"># indexed arrays
fruits=(apple banana cherry)
fruits[3]=&quot;date&quot;

echo &quot;\${fruits[1]}&quot;       # banana
echo &quot;\${fruits[@]}&quot;       # every element
echo &quot;\${#fruits[@]}&quot;      # how many elements
echo &quot;\${!fruits[@]}&quot;      # the indexes
echo &quot;\${fruits[@]:1:2}&quot;   # a slice

for fruit in &quot;\${fruits[@]}&quot;; do
  echo &quot;$fruit&quot;
done

# associative arrays (bash 4+)
declare -A color
color[apple]=&quot;red&quot;
color[banana]=&quot;yellow&quot;

echo &quot;\${color[apple]}&quot;
for key in &quot;\${!color[@]}&quot;; do
  echo &quot;$key is \${color[$key]}&quot;
done
</code></pre><h2>🧪 Tests &amp; Conditions</h2><p>Use <code>[[ ... ]]</code> in bash — it handles empty variables and patterns far better than the old <code>[ ... ]</code>.</p><table><thead><tr><th>Files</th><th>True when</th></tr></thead><tbody><tr><td><code>-e file</code></td><td>It exists</td></tr><tr><td><code>-f file</code></td><td>It exists and is a regular file</td></tr><tr><td><code>-d file</code></td><td>It exists and is a directory</td></tr><tr><td><code>-L file</code></td><td>It is a symbolic link</td></tr><tr><td><code>-s file</code></td><td>It exists and is not empty</td></tr><tr><td><code>-r</code> <code>-w</code> <code>-x</code></td><td>You can read / write / execute it</td></tr><tr><td><code>-O file</code></td><td>You own it</td></tr><tr><td><code>f1 -nt f2</code></td><td><code>f1</code> is newer than <code>f2</code> (<code>-ot</code> for older)</td></tr></tbody></table><table><thead><tr><th>Strings</th><th>True when</th></tr></thead><tbody><tr><td><code>-z &quot;$s&quot;</code></td><td>The string is empty</td></tr><tr><td><code>-n &quot;$s&quot;</code></td><td>The string is not empty</td></tr><tr><td><code>&quot;$a&quot; == &quot;$b&quot;</code></td><td>They are equal (<code>=</code> also works)</td></tr><tr><td><code>&quot;$a&quot; != &quot;$b&quot;</code></td><td>They differ</td></tr><tr><td><code>&quot;$a&quot; &lt; &quot;$b&quot;</code></td><td>Sorts before, in the current locale</td></tr><tr><td><code>&quot;$s&quot; == pre*</code></td><td>Glob match — unquoted right-hand side</td></tr><tr><td><code>&quot;$s&quot; =~ ^re$</code></td><td>Regex match, captures land in <code>$BASH_REMATCH</code></td></tr></tbody></table><table><thead><tr><th>Numbers</th><th>Meaning</th></tr></thead><tbody><tr><td><code>-eq</code></td><td>Equal</td></tr><tr><td><code>-ne</code></td><td>Not equal</td></tr><tr><td><code>-lt</code></td><td>Less than</td></tr><tr><td><code>-le</code></td><td>Less than or equal</td></tr><tr><td><code>-gt</code></td><td>Greater than</td></tr><tr><td><code>-ge</code></td><td>Greater than or equal</td></tr></tbody></table><pre><code class="language-bash">if [[ -f &quot;$config&quot; &amp;&amp; -r &quot;$config&quot; ]]; then
  echo &quot;readable&quot;
elif [[ -d &quot;$config&quot; ]]; then
  echo &quot;that is a directory&quot;
else
  echo &quot;missing&quot;
fi

# arithmetic comparison reads more naturally in (( ))
if (( count &gt; 10 )); then echo &quot;plenty&quot;; fi
</code></pre><h2>🔀 Flow Control</h2><pre><code class="language-bash"># for over a list, a glob, or a range
for name in alice bob; do echo &quot;$name&quot;; done
for f in *.log; do gzip &quot;$f&quot;; done
for i in {1..10}; do echo &quot;$i&quot;; done
for (( i = 0; i &lt; 10; i++ )); do echo &quot;$i&quot;; done

# while and until
while read -r line; do echo &quot;$line&quot;; done &lt; input.txt
until ping -c1 host &amp;&gt;/dev/null; do sleep 5; done

# case
case &quot;$1&quot; in
  start)   echo &quot;starting&quot; ;;
  stop)    echo &quot;stopping&quot; ;;
  restart) echo &quot;restarting&quot; ;;
  *)       echo &quot;usage: $0 {start|stop|restart}&quot;; exit 1 ;;
esac

# select builds a numbered menu
select choice in build test deploy; do
  echo &quot;you picked $choice&quot;
  break
done

# loop control
continue   # skip to the next iteration
break      # leave the loop
</code></pre><h2>🧰 Functions</h2><pre><code class="language-bash">greet() {
  local name=&quot;\${1:?name required}&quot;
  local greeting=&quot;\${2:-Hello}&quot;
  echo &quot;$greeting, $name!&quot;
  return 0
}

greet &quot;World&quot;
greet &quot;World&quot; &quot;Good morning&quot;

# capture the output, and check the status
message=$(greet &quot;World&quot;)
if ! greet; then echo &quot;greet failed&quot;; fi

# make a function available to subshells
export -f greet
</code></pre><h2>➡️ Redirection</h2><table><thead><tr><th>Syntax</th><th>Does</th></tr></thead><tbody><tr><td><code>&gt; file</code></td><td>Send stdout to a file, replacing it</td></tr><tr><td><code>&gt;&gt; file</code></td><td>Append stdout to a file</td></tr><tr><td><code>2&gt; file</code></td><td>Send stderr to a file</td></tr><tr><td><code>2&gt;&amp;1</code></td><td>Send stderr wherever stdout is going</td></tr><tr><td><code>&amp;&gt; file</code></td><td>Send both to a file (bash)</td></tr><tr><td><code>&gt; file 2&gt;&amp;1</code></td><td>The portable form of the same</td></tr><tr><td><code>&lt; file</code></td><td>Read stdin from a file</td></tr><tr><td><code>&lt;&lt;EOF … EOF</code></td><td>Here-document</td></tr><tr><td><code>&lt;&lt;-EOF … EOF</code></td><td>Here-document, leading tabs stripped</td></tr><tr><td><code>&lt;&lt;&lt; &quot;string&quot;</code></td><td>Here-string</td></tr><tr><td><code>|</code></td><td>Pipe stdout into the next command</td></tr><tr><td><code>|&amp;</code></td><td>Pipe stdout <strong>and</strong> stderr</td></tr><tr><td><code>&gt; /dev/null 2&gt;&amp;1</code></td><td>Discard everything</td></tr><tr><td><code>&lt;(command)</code></td><td>Process substitution — a command as a file</td></tr><tr><td><code>tee file</code></td><td>Write to a file and pass the stream on</td></tr></tbody></table><pre><code class="language-bash"># a heredoc, expanded
cat &lt;&lt;EOF &gt; config.ini
host=$HOSTNAME
port=8080
EOF

# a heredoc, literal (quoted delimiter)
cat &lt;&lt;&#39;EOF&#39; &gt; script.sh
echo &quot;$HOME is not expanded here&quot;
EOF

# compare the output of two commands without temporary files
diff &lt;(sort a.txt) &lt;(sort b.txt)
</code></pre><h2>⚙️ Jobs &amp; Processes</h2><pre><code class="language-bash"># run in the background, and list the jobs
long_task &amp;
jobs

# bring back to the foreground, or resume in the background
fg %1
bg %1

# Ctrl+Z suspends the foreground job

# survive logout
nohup ./script.sh &gt; out.log 2&gt;&amp;1 &amp;
disown -h %1

# wait for background jobs
wait
wait $!

# signals
kill 1234
kill -9 1234
kill -TERM %1
pkill -f &quot;node server.js&quot;

# give a command a deadline
timeout 30s ./slow_task.sh

# clean up on exit, whatever happens
trap &#39;rm -f &quot;$tmpfile&quot;&#39; EXIT
trap &#39;echo interrupted; exit 130&#39; INT TERM
</code></pre><h2>🛡 Safe Scripting</h2><pre><code class="language-bash">#!/usr/bin/env bash
# -e  exit on any failing command
# -u  treat unset variables as an error
# -o pipefail  a pipeline fails if any stage fails
set -euo pipefail

# make word splitting predictable
IFS=$&#39;\\n\\t&#39;

# always quote expansions
cp &quot;$src&quot; &quot;$dest&quot;

# check the syntax without running anything
bash -n script.sh

# trace every command as it runs
bash -x script.sh
set -x; risky_command; set +x

# a more informative trace prefix
export PS4=&#39;+ \${BASH_SOURCE}:\${LINENO}: &#39;

# report where a script died
trap &#39;echo &quot;failed at line $LINENO with status $?&quot; &gt;&amp;2&#39; ERR

# and lint it before it reaches anyone else
shellcheck script.sh
</code></pre><blockquote><p>⚠️ <code>set -e</code> has surprising corners: it does not fire inside <code>if</code>, <code>&amp;&amp;</code>, <code>||</code> or command substitutions used in assignments. It is a seatbelt, not autopilot — still check what matters explicitly.</p></blockquote><h2>🎨 Colours</h2><p>Escape sequences take the form <code>\\033[&lt;style&gt;;&lt;colour&gt;m</code>, and <code>\\033[0m</code> resets. <code>\\e</code> and <code>\\x1B</code> are the same character as <code>\\033</code>.</p><table><thead><tr><th>Colour</th><th>Foreground</th><th>Bright</th><th>Background</th></tr></thead><tbody><tr><td>Black</td><td><code>30</code></td><td><code>90</code></td><td><code>40</code></td></tr><tr><td>Red</td><td><code>31</code></td><td><code>91</code></td><td><code>41</code></td></tr><tr><td>Green</td><td><code>32</code></td><td><code>92</code></td><td><code>42</code></td></tr><tr><td>Yellow</td><td><code>33</code></td><td><code>93</code></td><td><code>43</code></td></tr><tr><td>Blue</td><td><code>34</code></td><td><code>94</code></td><td><code>44</code></td></tr><tr><td>Magenta</td><td><code>35</code></td><td><code>95</code></td><td><code>45</code></td></tr><tr><td>Cyan</td><td><code>36</code></td><td><code>96</code></td><td><code>46</code></td></tr><tr><td>White</td><td><code>37</code></td><td><code>97</code></td><td><code>47</code></td></tr></tbody></table><table><thead><tr><th>Style</th><th>Code</th><th>Style</th><th>Code</th></tr></thead><tbody><tr><td>Reset</td><td><code>0</code></td><td>Underline</td><td><code>4</code></td></tr><tr><td>Bold</td><td><code>1</code></td><td>Blink</td><td><code>5</code></td></tr><tr><td>Dim</td><td><code>2</code></td><td>Reverse</td><td><code>7</code></td></tr></tbody></table><pre><code class="language-bash">RED=&#39;\\033[0;31m&#39;
GREEN=&#39;\\033[0;32m&#39;
BOLD=&#39;\\033[1m&#39;
RESET=&#39;\\033[0m&#39;

echo -e &quot;\${GREEN}ok\${RESET} — \${RED}\${BOLD}failed\${RESET}&quot;

# only colourise when stdout is a terminal
if [[ -t 1 ]]; then RED=&#39;\\033[0;31m&#39;; RESET=&#39;\\033[0m&#39;; else RED=&#39;&#39;; RESET=&#39;&#39;; fi
</code></pre><h2>💡 Tips</h2><pre><code class="language-bash"># aliases and functions belong in ~/.bashrc
alias ll=&#39;ls -lhA&#39;
alias gs=&#39;git status -sb&#39;
mkcd() { mkdir -p &quot;$1&quot; &amp;&amp; cd &quot;$1&quot;; }

# reload the config after editing it
source ~/.bashrc

# brace expansion saves a lot of typing
cp config.yaml{,.bak}
mkdir -p src/{components,utils,tests}

# repeat the previous command as root
sudo !!

# go back to the previous directory
cd -

# run something regardless of the current directory
(cd /tmp &amp;&amp; ./task.sh)

# time a command, and keep a transcript of a session
time ./build.sh
script session.log
</code></pre><h2>📚 Resources</h2><ul><li><a href="https://www.gnu.org/software/bash/manual/bash.html">GNU Bash manual</a></li><li><a href="https://www.shellcheck.net/">ShellCheck — lints your scripts</a></li><li><a href="https://mywiki.wooledge.org/BashPitfalls">Bash Pitfalls</a></li><li><a href="https://google.github.io/styleguide/shellguide.html">Google Shell Style Guide</a></li><li><a href="https://explainshell.com/">explainshell — break down any command line</a></li></ul>`,47)]]))}};export{a as default};