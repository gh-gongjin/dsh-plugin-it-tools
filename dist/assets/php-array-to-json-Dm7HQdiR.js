import{o as e}from"./rolldown-runtime-DAXXjFlN.js";import{A as t,Et as n,F as r,S as i,q as a,ut as o}from"./vue.runtime.esm-bundler-DZZTqpJU.js";import{n as s}from"./vue-i18n.runtime-CdHdz6Iq.js";import{t as c}from"./defaults-CYWGbL02.js";import{t as l}from"./FormatTransformer-CLmOzBNF.js";import{t as u}from"./jsonar-mod-BUA2uG26.js";r(),o();var d=e(u(),1),f=`array(
  "a" => "b",
  "arr" => array(
    1,
    "2"
  ),
  "nested" => array(
    "c" => 12,
    "d" => "az"
  )
);`,p=t({__name:`php-array-to-json`,setup(e){let{t}=s();function r(e){return c(()=>JSON.stringify(d.parse(e),null,2),``)}let o=[{validator:e=>e===``||d.parse(e),message:t(`tools.php-array-to-json.texts.message-provided-php-array-is-not-valid`)}];return(e,s)=>{let c=l;return a(),i(c,{"input-label":n(t)(`tools.php-array-to-json.texts.input-label-your-php-array`),"input-default":f,"input-placeholder":n(t)(`tools.php-array-to-json.texts.input-placeholder-paste-your-php-array-here`),"output-label":n(t)(`tools.php-array-to-json.texts.output-label-json-version`),"output-language":`json`,"input-validation-rules":o,transformer:r},null,8,[`input-label`,`input-placeholder`,`output-label`])}}});export{p as default};