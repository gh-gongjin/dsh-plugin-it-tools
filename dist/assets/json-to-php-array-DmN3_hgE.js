import{o as e}from"./rolldown-runtime-DAXXjFlN.js";import{A as t,Et as n,F as r,S as i,q as a,ut as o}from"./vue.runtime.esm-bundler-DZZTqpJU.js";import{t as s}from"./dist-CcFCmzk9.js";import{n as c}from"./vue-i18n.runtime-CdHdz6Iq.js";import{t as l}from"./defaults-CYWGbL02.js";import{t as u}from"./FormatTransformer-CLmOzBNF.js";import{t as d}from"./jsonar-mod-BUA2uG26.js";r(),o();var f=e(d(),1),p=e(s(),1),m=`{
  a:"b", 
  arr: [1, "2"], 
  nested: {
    c:12, 
    d: "az"
  }
}`,h=t({__name:`json-to-php-array`,setup(e){let{t}=c();function r(e){return l(()=>f.arrify(p.default.parse(e),{prettify:!0}),``)}let o=[{validator:e=>p.default.parse(e),message:t(`tools.json-to-php-array.texts.message-provided-json-is-not-valid`)}];return(e,s)=>{let c=u;return a(),i(c,{"input-label":n(t)(`tools.json-to-php-array.texts.input-label-your-json`),"input-default":m,"input-placeholder":n(t)(`tools.json-to-php-array.texts.input-placeholder-paste-your-json-here`),"output-label":n(t)(`tools.json-to-php-array.texts.output-label-php-array-version`),"input-validation-rules":o,transformer:r},null,8,[`input-label`,`input-placeholder`,`output-label`])}}});export{h as default};