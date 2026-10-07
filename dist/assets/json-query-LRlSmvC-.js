import{o as e}from"./rolldown-runtime-DAXXjFlN.js";import{A as t,D as n,Et as r,F as i,O as a,Pt as o,Qt as s,at as c,b as l,pt as u,q as d,ut as f,vt as p,w as m,x as h}from"./vue.runtime.esm-bundler-DZZTqpJU.js";import{t as g}from"./dist-CcFCmzk9.js";import{t as _}from"./a-CR5NKnYJ.js";import{r as v}from"./queryParams-BlxtLRmZ.js";import{t as y}from"./c-input-text-DwXoR2kB.js";import{t as b}from"./validation-DCINQMO5.js";import{n as x}from"./vue-i18n.runtime-CdHdz6Iq.js";import{t as S}from"./c-card-yk2e8MBu.js";import{t as C}from"./CodeBlockCopyable-CKWv1-la.js";import{n as w}from"./jsonquery-DZOz5bb7.js";i(),f(),o();var T=e(g(),1),E={"mb-2":``,flex:``,"justify-center":``},D=2,O=t({__name:`json-query`,setup(e){let{t}=x(),i=v({tool:`json-query`,name:`q`,defaultValue:`
  .friends 
    | filter(.city == "New York") 
    | sort(.age) 
    | pick(.name, .age)
`}),o=p(`{
  "friends": [
    { "name": "Chris", "age": 23, "city": "New York" },
    { "name": "Emily", "age": 19, "city": "Atlanta" },
    { "name": "Joe", "age": 32, "city": "New York" },
    { "name": "Kevin", "age": 19, "city": "Atlanta" },
    { "name": "Michelle", "age": 27, "city": "Los Angeles" },
    { "name": "Robert", "age": 45, "city": "Manhattan" },
    { "name": "Sarah", "age": 31, "city": "New York" }
  ]
}`),f=l(()=>{try{let e=JSON.parseBigNum(o.value);return JSON.stringify(w(e,i.value),null,D)}catch(e){return e.toString()}}),g=b({source:o,rules:[{validator:e=>T.default.parse(e),message:t(`tools.json-query.texts.message-provided-json-is-not-valid`)}]});return(e,l)=>{let p=y,v=_,b=S,x=C;return d(),m(`div`,null,[a(b,{title:r(t)(`tools.json-query.texts.title-input`),"mb-2":``},{default:c(()=>[a(p,{value:r(i),"onUpdate:value":l[0]||=e=>u(i)?i.value=e:null,label:r(t)(`tools.json-query.texts.label-json-query`),placeholder:r(t)(`tools.json-query.texts.placeholder-put-your-json-query-string-here`),"mb-2":``},null,8,[`value`,`label`,`placeholder`]),h(`div`,E,[a(v,{target:`_blank`,href:`https://jsonquerylang.org/docs/`},{default:c(()=>[n(s(r(t)(`tools.json-query.texts.tag-see-json-query-lang-documentation`)),1)]),_:1})]),a(p,{value:r(o),"onUpdate:value":l[1]||=e=>u(o)?o.value=e:null,label:r(t)(`tools.json-query.texts.label-json`),multiline:``,placeholder:r(t)(`tools.json-query.texts.placeholder-put-your-json-here`),rows:`5`,validation:r(g),"mb-2":``},null,8,[`value`,`label`,`placeholder`,`validation`])]),_:1},8,[`title`]),a(b,{title:r(t)(`tools.json-query.texts.title-result`)},{default:c(()=>[a(x,{value:r(f),language:`json`},null,8,[`value`])]),_:1},8,[`title`])])}}});export{O as default};