import{E as e,F as t,q as n,w as r}from"./vue.runtime.esm-bundler-DZZTqpJU.js";t();var i={class:`markdown-body`},a={__name:`powershell-memo.content`,setup(t,{expose:a}){return a({frontmatter:{}}),(t,a)=>(n(),r(`div`,i,[...a[0]||=[e(`<p><strong>PowerShell</strong> is a shell and scripting language built on .NET. Unlike POSIX shells it passes <strong>objects</strong> down the pipeline rather than text, so <code>Get-Process | Sort-Object CPU</code> sorts real numbers instead of parsing columns.</p><blockquote><p>ℹ️ <strong>PowerShell 7+</strong> (<code>pwsh</code>) is cross-platform and current; <strong>Windows PowerShell 5.1</strong> (<code>powershell.exe</code>) ships with Windows and is in maintenance. Check with <code>$PSVersionTable</code>.</p></blockquote><h2>🔎 Finding Your Way</h2><pre><code class="language-powershell"># what commands exist for a noun?
Get-Command *service*
Get-Command -Module Microsoft.PowerShell.Management

# help, with the part everyone actually wants
Get-Help Get-ChildItem -Examples
Get-Help Get-ChildItem -Full
Update-Help

# what properties and methods does this object have?
Get-Process | Get-Member

# what did that command actually return?
Get-Process | Select-Object -First 1 | Format-List *
</code></pre><h2>📦 Variables</h2><table><thead><tr><th>Syntax</th><th>Description</th></tr></thead><tbody><tr><td><code>$var = &quot;string&quot;</code></td><td>Assign a variable</td></tr><tr><td><code>[int]$var = 5</code></td><td>Strongly typed variable</td></tr><tr><td><code>[ValidateRange(1,9)][int]$x=1</code></td><td>Typed and constrained</td></tr><tr><td><code>$a, $b = &#39;a&#39;, &#39;b&#39;</code></td><td>Assign several at once</td></tr><tr><td><code>$a, $b = $b, $a</code></td><td>Swap two values</td></tr><tr><td><code>$global:var = &quot;v&quot;</code></td><td>Scope: <code>global</code>, <code>script</code>, <code>local</code>, <code>private</code></td></tr><tr><td><code>\${my var}</code></td><td>A name containing spaces or punctuation</td></tr><tr><td><code>$env:PATH</code></td><td>An environment variable</td></tr><tr><td><code>Remove-Variable x</code></td><td>Delete a variable</td></tr></tbody></table><h2>📚 Arrays</h2><table><thead><tr><th>Syntax</th><th>Description</th></tr></thead><tbody><tr><td><code>&quot;a&quot;,&quot;b&quot;,&quot;c&quot;</code></td><td>Array of strings</td></tr><tr><td><code>@()</code></td><td>Empty array</td></tr><tr><td><code>,&quot;hi&quot;</code></td><td>Array of exactly one element</td></tr><tr><td><code>1,(2,3),4</code></td><td>Nested array</td></tr><tr><td><code>$arr[5]</code></td><td>Sixth element (0-based)</td></tr><tr><td><code>$arr[2..20]</code></td><td>A range of elements</td></tr><tr><td><code>$arr[-1]</code></td><td>The last element</td></tr><tr><td><code>$arr[-3..-1]</code></td><td>The last three</td></tr><tr><td><code>$arr[1,4+6..9]</code></td><td>Positions 1, 4 and 6–9</td></tr><tr><td><code>$arr[($arr.length-1)..0]</code></td><td>Reversed</td></tr><tr><td><code>@(Get-Process)</code></td><td>Force a single result into an array</td></tr><tr><td><code>$z = $arrA + $arrB</code></td><td>Concatenate</td></tr><tr><td><code>$list = [System.Collections.Generic.List[int]]::new()</code></td><td>A growable list — much faster than <code>+=</code> in a loop</td></tr></tbody></table><h2>🗂 Hash Tables</h2><table><thead><tr><th>Syntax</th><th>Description</th></tr></thead><tbody><tr><td><code>$hash = @{}</code></td><td>Empty hash table</td></tr><tr><td><code>@{foo=1; bar=&#39;two&#39;}</code></td><td>Initialise with values</td></tr><tr><td><code>[ordered]@{a=1; b=2}</code></td><td>Keeps insertion order</td></tr><tr><td><code>$hash.key1</code> / <code>$hash[&quot;key1&quot;]</code></td><td>Read a value</td></tr><tr><td><code>$hash.key1 = 1</code></td><td>Write a value</td></tr><tr><td><code>$hash.Remove(&quot;key1&quot;)</code></td><td>Delete a key</td></tr><tr><td><code>$hash.ContainsKey(&quot;key1&quot;)</code></td><td>Test for a key</td></tr><tr><td><code>$hash.GetEnumerator() | Sort-Object Key</code></td><td>Iterate in key order</td></tr><tr><td><code>[pscustomobject]@{x=1; z=&quot;z&quot;}</code></td><td>Turn a hash into an object</td></tr></tbody></table><h2>🔤 Strings</h2><table><thead><tr><th>Syntax</th><th>Description</th></tr></thead><tbody><tr><td><code>&quot;$var expands&quot;</code></td><td>Double quotes interpolate</td></tr><tr><td><code>&#39;$var does not&#39;</code></td><td>Single quotes are literal</td></tr><tr><td><code>&quot;Total: $($items.Count)&quot;</code></td><td><code>$( )</code> evaluates an expression inside a string</td></tr><tr><td><code>&quot;{0} of {1}&quot; -f $a, $b</code></td><td>The format operator</td></tr><tr><td><code>&quot;col1\`tcol2\`n&quot;</code></td><td><code>\`t</code> tab, <code>\`n</code> newline, <code></code> <code></code> \` escapes</td></tr><tr><td><code>@&quot;…&quot;@</code> / <code>@&#39;…&#39;@</code></td><td>Here-string, expanding / literal</td></tr><tr><td><code>&quot;abc&quot;.ToUpper()</code></td><td>.NET methods work on strings</td></tr><tr><td><code>$s -split &#39;,&#39;</code> / <code>$a -join &#39;,&#39;</code></td><td>Split and join</td></tr><tr><td><code>$s.Trim()</code> / <code>.PadLeft(5)</code></td><td>Trim and pad</td></tr><tr><td><code>$s -replace &#39;a&#39;,&#39;b&#39;</code></td><td>Regex replace</td></tr></tbody></table><h2>💬 Comments &amp; Escaping</h2><pre><code class="language-powershell"># a single-line comment

&lt;#
  a block comment, also used for help text
#&gt;

# the backtick is the escape character
Write-Output &quot;He said \`&quot;hi\`&quot;&quot;
Write-Output &quot;line one\`nline two&quot;

# and the line-continuation character
Get-ChildItem -Path C:\\ \`
              -Recurse \`
              -Filter *.log
</code></pre><h2>📁 Files &amp; Paths</h2><table><thead><tr><th>Command</th><th>Does</th></tr></thead><tbody><tr><td><code>Get-Location</code> (<code>pwd</code>)</td><td>Current directory</td></tr><tr><td><code>Set-Location</code> (<code>cd</code>)</td><td>Change directory</td></tr><tr><td><code>Get-ChildItem</code> (<code>ls</code>, <code>dir</code>)</td><td>List a directory</td></tr><tr><td><code>Get-Content</code> (<code>cat</code>)</td><td>Read a file</td></tr><tr><td><code>Set-Content</code> / <code>Add-Content</code></td><td>Overwrite / append</td></tr><tr><td><code>Out-File</code> / <code>Out-Null</code> / <code>Out-String</code></td><td>Write to a file / discard / stringify</td></tr><tr><td><code>New-Item -ItemType Directory</code></td><td>Create a file or folder</td></tr><tr><td><code>Copy-Item</code> / <code>Move-Item</code> / <code>Rename-Item</code> / <code>Remove-Item</code></td><td>Copy, move, rename, delete</td></tr><tr><td><code>Test-Path</code></td><td>Does it exist?</td></tr><tr><td><code>Split-Path -Parent</code></td><td>The directory part of a path</td></tr><tr><td><code>Join-Path a b</code></td><td>Build a path portably</td></tr><tr><td><code>Resolve-Path</code></td><td>Expand to a full path</td></tr><tr><td><code>Get-FileHash file.zip</code></td><td>Checksum a file</td></tr></tbody></table><pre><code class="language-powershell"># read a large file line by line without loading it all
Get-Content big.log -ReadCount 1000 | ForEach-Object { $_ }

# tail -f
Get-Content app.log -Wait -Tail 20

# every .log modified in the last day
Get-ChildItem C:\\logs -Recurse -Filter *.log |
  Where-Object LastWriteTime -gt (Get-Date).AddDays(-1)
</code></pre><h2>🔀 Flow Control</h2><pre><code class="language-powershell">if ($x -eq 5) { &quot;five&quot; } elseif ($x -gt 5) { &quot;more&quot; } else { &quot;less&quot; }

while ($x -lt 10) { $x; $x++ }

do { $x++ } while ($x -lt 10)

for ($i = 0; $i -lt 10; $i++) { $i }

foreach ($file in Get-ChildItem C:\\) { $file.Name }

1..10 | ForEach-Object { $_ * 2 }

# parallel, PowerShell 7+
1..10 | ForEach-Object -Parallel { Start-Sleep 1; $_ } -ThrottleLimit 5

switch ($value) {
  &#39;a&#39;       { &#39;letter a&#39;; break }
  { $_ -gt 10 } { &#39;big&#39; }
  default   { &#39;something else&#39; }
}
</code></pre><h2>⚖️ Operators</h2><table><thead><tr><th>Operator</th><th>Meaning</th></tr></thead><tbody><tr><td><code>= += -= *= /= %= ++ --</code></td><td>Assignment</td></tr><tr><td><code>-eq</code> / <code>-ne</code></td><td>Equal / not equal</td></tr><tr><td><code>-gt</code> <code>-ge</code> <code>-lt</code> <code>-le</code></td><td>Numeric comparison</td></tr><tr><td><code>-and</code> <code>-or</code> <code>-xor</code> <code>-not</code> <code>!</code></td><td>Logical</td></tr><tr><td><code>-like</code> / <code>-notlike</code></td><td>Wildcard match (<code>*</code>, <code>?</code>)</td></tr><tr><td><code>-match</code> / <code>-notmatch</code></td><td>Regex match — fills <code>$Matches</code></td></tr><tr><td><code>-replace &#39;a&#39;,&#39;b&#39;</code></td><td>Regex replace</td></tr><tr><td><code>-contains</code> / <code>-in</code></td><td>Array membership, either way round</td></tr><tr><td><code>-split</code> / <code>-join</code></td><td>Split a string / join an array</td></tr><tr><td><code>-is</code> / <code>-isnot</code> / <code>-as</code></td><td>Type test and conversion</td></tr><tr><td><code>-f</code></td><td>Format a string</td></tr><tr><td><code>..</code></td><td>Range</td></tr><tr><td><code>$( )</code> / <code>@( )</code></td><td>Sub-expression / array sub-expression</td></tr><tr><td><code>&amp;</code> / <code>.</code></td><td>Invoke a command / dot-source a script</td></tr><tr><td><code>??</code> / <code>??=</code></td><td>Null-coalescing (PowerShell 7+)</td></tr><tr><td><code>?.</code> / <code>?[ ]</code></td><td>Null-conditional access (PowerShell 7+)</td></tr></tbody></table><blockquote><p>⚠️ Comparisons are <strong>case-insensitive</strong> by default. Use <code>-ceq</code>, <code>-clike</code>, <code>-cmatch</code> when case matters.</p></blockquote><h2>🧱 Objects &amp; the Pipeline</h2><pre><code class="language-powershell"># properties and methods
(Get-Date).Date
(Get-Date).AddDays(-7)
&quot;string&quot;.ToUpper()

# static members
[DateTime]::Now
[Math]::Round(3.14159, 2)
[System.Net.Dns]::GetHostByAddress(&quot;127.0.0.1&quot;)

# build your own objects
[pscustomobject]@{ Name = &#39;web01&#39;; Status = &#39;up&#39; }

# add a calculated property
Get-Process | Select-Object Name, @{ Name = &#39;MB&#39;; Expression = { [math]::Round($_.WorkingSet / 1MB, 1) } }
</code></pre><h2>🔍 Filter, Sort, Group, Format</h2><table><thead><tr><th>Example</th><th>Does</th></tr></thead><tbody><tr><td><code>Get-Process | Where-Object CPU -gt 100</code></td><td>Filter (simple syntax)</td></tr><tr><td><code>Get-Process | Where-Object { $_.Name -like &quot;chrome*&quot; }</code></td><td>Filter (script block)</td></tr><tr><td><code>Get-Process | Sort-Object WorkingSet -Descending</code></td><td>Sort</td></tr><tr><td><code>Get-Process | Select-Object -First 5</code></td><td>Take the first few</td></tr><tr><td><code>&quot;a&quot;,&quot;b&quot;,&quot;a&quot; | Select-Object -Unique</code></td><td>Deduplicate</td></tr><tr><td><code>Get-Service | Group-Object Status</code></td><td>Group</td></tr><tr><td><code>Get-Process | Measure-Object WorkingSet -Sum -Average</code></td><td>Aggregate</td></tr><tr><td><code>Get-Process | Select-Object -ExpandProperty Modules</code></td><td>Flatten a nested property</td></tr><tr><td><code>Get-Process | Format-Table Name, Id -AutoSize</code></td><td>Table output</td></tr><tr><td><code>Get-Item C:\\ | Format-List *</code></td><td>Every property</td></tr><tr><td><code>Get-Content log.txt | Select-String &quot;error&quot;</code></td><td>grep</td></tr><tr><td><code>Compare-Object $a $b</code></td><td>Diff two collections</td></tr></tbody></table><blockquote><p>💡 <code>Format-*</code> is always the <strong>last</strong> step — its output is display text, not objects, so nothing downstream can filter it.</p></blockquote><h2>🧰 Functions &amp; Scripts</h2><pre><code class="language-powershell">function Get-Square {
  param(
    [Parameter(Mandatory)][int]$Number,
    [switch]$Verbose
  )
  $Number * $Number
}

Get-Square -Number 7

# an advanced function: pipeline input, -WhatIf, -Verbose for free
function Remove-OldLog {
  [CmdletBinding(SupportsShouldProcess)]
  param(
    [Parameter(ValueFromPipeline)][string]$Path,
    [int]$Days = 30
  )
  process {
    if ($PSCmdlet.ShouldProcess($Path, &quot;delete&quot;)) {
      Remove-Item $Path
    }
  }
}
</code></pre><h2>🚨 Error Handling</h2><pre><code class="language-powershell">try {
  Get-Content missing.txt -ErrorAction Stop
}
catch [System.IO.FileNotFoundException] {
  Write-Warning &quot;no such file&quot;
}
catch {
  Write-Error &quot;unexpected: $($_.Exception.Message)&quot;
}
finally {
  &quot;always runs&quot;
}

# make non-terminating errors terminate, so catch can see them
Get-Item missing -ErrorAction Stop

# per-session default
$ErrorActionPreference = &#39;Stop&#39;

# the most recent error, and the exit code of the last native command
$Error[0]
$LASTEXITCODE
$?
</code></pre><h2>🌐 Web &amp; Data</h2><pre><code class="language-powershell"># REST calls, parsed into objects
$data = Invoke-RestMethod https://api.github.com/repos/vuejs/core
$data.stargazers_count

# with headers and a JSON body
Invoke-RestMethod -Uri $url -Method Post \`
  -Headers @{ Authorization = &quot;Bearer $token&quot; } \`
  -ContentType &#39;application/json&#39; \`
  -Body (@{ name = &#39;demo&#39; } | ConvertTo-Json)

# the raw response, for scraping or downloads
Invoke-WebRequest $url -OutFile page.html

# convert between formats
Get-Process | Select-Object Name, Id | ConvertTo-Json
Get-Content data.json | ConvertFrom-Json
Import-Csv users.csv | Where-Object Dept -eq &#39;IT&#39; | Export-Csv it.csv -NoTypeInformation
Export-Clixml / Import-Clixml   # round-trips real objects
</code></pre><h2>🖥 System Administration</h2><pre><code class="language-powershell"># processes
Get-Process | Sort-Object CPU -Descending | Select-Object -First 10
Stop-Process -Name notepad -Force

# services
Get-Service | Where-Object Status -eq &#39;Running&#39;
Restart-Service -Name Spooler
Set-Service -Name Spooler -StartupType Manual

# background jobs
$job = Start-Job { Start-Sleep 10; &quot;done&quot; }
Receive-Job $job -Wait

# scheduled tasks, event logs, system info
Get-ScheduledTask
Get-WinEvent -LogName System -MaxEvents 20
Get-CimInstance Win32_LogicalDisk | Select-Object DeviceID, FreeSpace
Test-Connection example.com -Count 2
</code></pre><h2>🔗 Remoting</h2><pre><code class="language-powershell"># one command on many machines
Invoke-Command -ComputerName web01, web02 -ScriptBlock { Get-Service Spooler }

# an interactive session
Enter-PSSession -ComputerName web01
Exit-PSSession

# a reusable session
$s = New-PSSession -ComputerName web01 -Credential (Get-Credential)
Invoke-Command -Session $s { hostname }
Remove-PSSession $s
</code></pre><h2>📦 Modules &amp; Execution Policy</h2><pre><code class="language-powershell"># find, install, load
Find-Module Pester
Install-Module Pester -Scope CurrentUser
Import-Module Pester
Get-Module -ListAvailable

# where does PowerShell look for modules?
$env:PSModulePath -split [IO.Path]::PathSeparator

# scripts refuse to run? check and relax the policy
Get-ExecutionPolicy -List
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser

# your profile script
notepad $PROFILE
</code></pre><h2>🧾 Automatic Variables</h2><table><thead><tr><th>Variable</th><th>Holds</th></tr></thead><tbody><tr><td><code>$_</code> / <code>$PSItem</code></td><td>The current pipeline object</td></tr><tr><td><code>$Args</code></td><td>Unbound arguments to a script or function</td></tr><tr><td><code>$Error</code></td><td>The error history, newest first</td></tr><tr><td><code>$Matches</code></td><td>Capture groups from the last <code>-match</code></td></tr><tr><td><code>$PSVersionTable</code></td><td>Version and edition information</td></tr><tr><td><code>$PWD</code> / <code>$HOME</code></td><td>Current directory / home directory</td></tr><tr><td><code>$PSScriptRoot</code></td><td>The folder the running script lives in</td></tr><tr><td><code>$LASTEXITCODE</code></td><td>Exit code of the last native command</td></tr><tr><td><code>$?</code></td><td>Did the last command succeed?</td></tr><tr><td><code>$true</code> <code>$false</code> <code>$null</code></td><td>Constants</td></tr><tr><td><code>$PROFILE</code></td><td>Path to your profile script</td></tr></tbody></table><h2>💾 PSDrives</h2><table><thead><tr><th>Drive</th><th>Contents</th></tr></thead><tbody><tr><td><code>Env:</code></td><td>Environment variables</td></tr><tr><td><code>Alias:</code></td><td>Command aliases</td></tr><tr><td><code>Function:</code></td><td>Defined functions</td></tr><tr><td><code>Variable:</code></td><td>Variables</td></tr><tr><td><code>Cert:</code></td><td>Certificate stores</td></tr><tr><td><code>HKLM:</code> / <code>HKCU:</code></td><td>The registry</td></tr><tr><td><code>WSMan:</code></td><td>WinRM configuration</td></tr></tbody></table><pre><code class="language-powershell">Set-Location HKLM:\\SOFTWARE
Get-ChildItem Env: | Sort-Object Name
Get-ChildItem Variable:
</code></pre><h2>⌨️ Aliases Worth Knowing</h2><table><thead><tr><th>Alias</th><th>Real command</th><th>Alias</th><th>Real command</th></tr></thead><tbody><tr><td><code>ls</code>, <code>dir</code>, <code>gci</code></td><td><code>Get-ChildItem</code></td><td><code>%</code></td><td><code>ForEach-Object</code></td></tr><tr><td><code>cat</code>, <code>gc</code></td><td><code>Get-Content</code></td><td><code>?</code></td><td><code>Where-Object</code></td></tr><tr><td><code>cd</code>, <code>sl</code></td><td><code>Set-Location</code></td><td><code>select</code></td><td><code>Select-Object</code></td></tr><tr><td><code>cp</code>, <code>copy</code></td><td><code>Copy-Item</code></td><td><code>sort</code></td><td><code>Sort-Object</code></td></tr><tr><td><code>rm</code>, <code>del</code></td><td><code>Remove-Item</code></td><td><code>ft</code> / <code>fl</code></td><td><code>Format-Table</code> / <code>Format-List</code></td></tr><tr><td><code>ps</code>, <code>gps</code></td><td><code>Get-Process</code></td><td><code>sls</code></td><td><code>Select-String</code></td></tr><tr><td><code>kill</code></td><td><code>Stop-Process</code></td><td><code>gm</code></td><td><code>Get-Member</code></td></tr></tbody></table><blockquote><p>⚠️ Aliases are for the console, not for scripts — write the full cmdlet name in anything you commit.</p></blockquote><h2>🔣 Regular Expressions</h2><table><thead><tr><th>Pattern</th><th>Matches</th></tr></thead><tbody><tr><td><code>\\w</code> / <code>\\W</code></td><td>Word character / non-word</td></tr><tr><td><code>\\s</code> / <code>\\S</code></td><td>Whitespace / non-whitespace</td></tr><tr><td><code>\\d</code> / <code>\\D</code></td><td>Digit / non-digit</td></tr><tr><td><code>{n}</code> <code>{n,}</code> <code>{n,m}</code></td><td>Quantifiers</td></tr><tr><td><code>^</code> / <code>$</code></td><td>Start / end of the string</td></tr><tr><td><code>(?&lt;name&gt;…)</code></td><td>Named capture group</td></tr></tbody></table><pre><code class="language-powershell"># -match fills $Matches
if (&quot;build-1234&quot; -match &#39;(?&lt;name&gt;\\w+)-(?&lt;id&gt;\\d+)&#39;) { $Matches.id }

# extract every match from a file
Select-String -Path app.log -Pattern &#39;\\b\\d{1,3}(\\.\\d{1,3}){3}\\b&#39; -AllMatches |
  ForEach-Object { $_.Matches.Value } | Sort-Object -Unique
</code></pre><p>PowerShell uses the .NET regex engine — see <a href="https://learn.microsoft.com/dotnet/standard/base-types/regular-expressions">.NET regular expressions</a>.</p><h2>📚 Resources</h2><ul><li><a href="https://learn.microsoft.com/powershell/">PowerShell documentation</a></li><li><a href="https://learn.microsoft.com/powershell/module/">Cmdlet reference</a></li><li><a href="https://www.powershellgallery.com/">PowerShell Gallery</a></li><li><a href="https://poshcode.gitbook.io/powershell-practice-and-style/">Style guide (community)</a></li></ul>`,53)]]))}};export{a as default};