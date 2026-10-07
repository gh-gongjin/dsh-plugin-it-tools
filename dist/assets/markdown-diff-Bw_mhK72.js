import{A as e,Et as t,F as n,O as r,Pt as i,Qt as a,S as o,at as s,q as c,ut as l,vt as u,w as d,x as f}from"./vue.runtime.esm-bundler-DZZTqpJU.js";import{t as p}from"./_plugin-vue_export-helper-BDNMzG2s.js";import{n as m}from"./vue-i18n.runtime-CdHdz6Iq.js";import{t as h}from"./c-card-yk2e8MBu.js";import{t as g}from"./c-markdown-SCDWmhJz.js";import{t as _}from"./c-buttons-select-BCT_iGsz.js";import{t as v}from"./c-diff-editor-gzEt5MkC.js";var y=`# Release notes

## Added

- JSON export for reports
- Keyboard shortcuts for navigation
- Markdown table previews

## Fixed

- Preserve whitespace in code blocks

## Plugin support

| user | host | plugin |
| --- | --- | --- |
| mysql.infoschema | localhost | caching_sha2_password |
| mysql.session | localhost | caching_sha2_password |
| mysql.sys | localhost | caching_sha2_password |

\`inline code\` stays readable in preview mode.
`,b=`# Release notes

## Added

- JSON and CSV export for reports
- Keyboard shortcuts for navigation
- Dark mode support for charts
- Markdown table previews

## Fixed

- Preserve whitespace in fenced code blocks

## Plugin support

| user | host | plugin |
| --- | --- | --- |
| mysql.session | localhost | caching_sha2_password |
| mysql.sys | localhost | caching_sha2_password |

\`\`\`sql
select user, host, plugin
from mysql.user;
\`\`\`
`;n(),l(),i();var x={class:`markdown-diff-tool`},S={flex:``,"justify-center":``,"mb-4":``},C={class:`markdown-preview-grid`},w={class:`markdown-preview-pane`,"data-test-id":`source-markdown-preview`},T={class:`markdown-preview-pane`,"data-test-id":`modified-markdown-preview`},E=p(e({__name:`markdown-diff`,setup(e){let{t:n}=m(),i=u(`code`),l=u(y),p=u(b),E=[{label:n(`tools.markdown-diff.texts.label-code`),value:`code`},{label:n(`tools.markdown-diff.texts.label-preview`),value:`preview`}];return(e,u)=>{let m=_,y=v,b=h,D=g;return c(),d(`div`,x,[f(`div`,S,[r(m,{value:i.value,"onUpdate:value":u[0]||=e=>i.value=e,options:E,size:`small`},null,8,[`value`])]),i.value===`code`?(c(),o(b,{key:0,"w-full":``,"important:flex-1":``,"important:pa-0":``},{default:s(()=>[r(y,{original:l.value,"onUpdate:original":u[1]||=e=>l.value=e,modified:p.value,"onUpdate:modified":u[2]||=e=>p.value=e,"test-id":`markdown-diff-editor`,language:`markdown`,height:`clamp(620px, 72vh, 820px)`},null,8,[`original`,`modified`])]),_:1})):(c(),o(b,{key:1,"data-test-id":`markdown-preview`,"w-full":``},{default:s(()=>[f(`div`,C,[f(`section`,null,[f(`h3`,null,a(t(n)(`tools.markdown-diff.texts.tag-source-markdown`)),1),f(`div`,w,[r(D,{markdown:l.value},null,8,[`markdown`])])]),f(`section`,null,[f(`h3`,null,a(t(n)(`tools.markdown-diff.texts.tag-modified-markdown`)),1),f(`div`,T,[r(D,{markdown:p.value},null,8,[`markdown`])])])])]),_:1}))])}}}),[[`__scopeId`,`data-v-6c3b88ea`]]);export{E as default};