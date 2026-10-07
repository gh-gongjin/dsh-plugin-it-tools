import{o as e}from"./rolldown-runtime-DAXXjFlN.js";import{A as t,Et as n,F as r,S as i,q as a,ut as o}from"./vue.runtime.esm-bundler-DZZTqpJU.js";import{t as s}from"./dist-CcFCmzk9.js";import{n as c}from"./vue-i18n.runtime-CdHdz6Iq.js";import{t as l}from"./defaults-CYWGbL02.js";import{t as u}from"./dist-Dl3yqSQ6.js";import{t as d}from"./FormatTransformer-CLmOzBNF.js";var f=e(s(),1);function p({array:e}){let t=new Set;return e.forEach(e=>Object.keys(u(e)).forEach(e=>t.add(e))),Array.from(t)}function m(e){if(e===null)return`null`;if(e===void 0)return``;let t=String(e).replace(/\\/g,`\\\\`).replace(/\n/g,`\\n`).replace(/\r/g,`\\r`).replace(/"/g,`\\"`);return t.includes(`,`)?`"${t}"`:t}function h({arrayOrObject:e}){let t=Array.isArray(e)?e:[e],n=p({array:t}),r=t.map(e=>n.map(t=>m(u(e)[t])));return[n.join(`,`),...r].join(`
`)}r(),o();var g=`[
   {
      "Age": 18,
      "Country": "Germany",
      "Gender": "Male",
      "Purchased": "N",
      "Salary": 20000
   },
   {
      "Age": 19,
      "Country": "France",
      "Gender": "Female",
      "Purchased": "N",
      "Salary": 22000
   },
   {
      "Age": 20,
      "Country": "England",
      "Gender": "Female",
      "Purchased": "N",
      "Salary": 24000
   }
]`,_=t({__name:`json-to-csv`,setup(e){let{t}=c();function r(e){return l(()=>e===``?``:h({arrayOrObject:JSON.parseBigNum(e)}),``)}let o=[{validator:e=>e===``||f.default.parse(e),message:t(`tools.json-to-csv.texts.message-provided-json-is-not-valid`)}];return(e,s)=>{let c=d;return a(),i(c,{"input-label":n(t)(`tools.json-to-csv.texts.input-label-your-raw-json`),"input-default":g,"input-placeholder":n(t)(`tools.json-to-csv.texts.input-placeholder-paste-your-raw-json-here`),"output-label":n(t)(`tools.json-to-csv.texts.output-label-csv-version-of-your-json`),"input-validation-rules":o,transformer:r,"download-file-name":`output.csv`},null,8,[`input-label`,`input-placeholder`,`output-label`])}}});export{_ as default};