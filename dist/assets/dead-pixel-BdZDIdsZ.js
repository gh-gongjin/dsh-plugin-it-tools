import{A as e,C as t,D as n,Et as r,F as i,G as a,K as o,Pt as s,Qt as c,S as l,at as u,h as d,q as f,ut as p,vt as m,w as h,x as g,z as _}from"./vue.runtime.esm-bundler-DZZTqpJU.js";import{t as v}from"./_plugin-vue_export-helper-BDNMzG2s.js";import{t as y}from"./c-button-CPyCUKOI.js";import{n as b}from"./vue-i18n.runtime-CdHdz6Iq.js";i(),p(),s();var x={class:`flex flex-col`},S=[`title`],C=`
<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    html, body {
      margin: 0;
      width: 100%;
      height: 100%;
      cursor: pointer;
      outline: none;
    }
  </style>
</head>
<body tabindex="0">
<script>
(function () {
  const colors = ["#ffffff", "#000000", "#ff0000", "#00ff00", "#0000ff"];
  let i = 0;
  function setColor() {
    document.body.style.background = colors[i];
  }
  function next() {
    i = (i + 1) % colors.length;
    setColor();
  }
  function prev() {
    i = (i - 1 + colors.length) % colors.length;
    setColor();
  }
  function focusBody() {
    document.body.focus();
  }
  setColor();
  focusBody();
  document.body.addEventListener("click", () => {
    focusBody();
    next();
  });
  document.addEventListener("fullscreenchange", focusBody);
  document.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowRight":
      case "ArrowDown":
      case " ":
        e.preventDefault();
        next();
        break;
      case "ArrowLeft":
      case "ArrowUp":
        e.preventDefault();
        prev();
        break;
    }
  });
})();
<\/script>
</body>
</html>
`,w=v(e({__name:`dead-pixel`,setup(e){let{t:i}=b(),s=m(!1),p=m(null);async function v(){s.value=!0,await _();let e=p.value;e&&(e.onload=async()=>{try{await e.requestFullscreen()}catch(e){console.warn(`Fullscreen failed`,e)}})}function w(){!document.fullscreenElement&&s.value&&(s.value=!1)}return a(()=>{document.addEventListener(`fullscreenchange`,w)}),o(()=>{document.removeEventListener(`fullscreenchange`,w)}),(e,a)=>{let o=y;return f(),h(d,null,[g(`div`,x,[g(`p`,null,c(r(i)(`tools.dead-pixel.texts.tag-keyboard-shortcuts`)),1),g(`ul`,null,[g(`li`,null,[g(`strong`,null,c(r(i)(`tools.dead-pixel.texts.tag-arrow-right-arrow-down-space`)),1),n(c(r(i)(`tools.dead-pixel.texts.tag-next-color`)),1)]),g(`li`,null,[g(`strong`,null,c(r(i)(`tools.dead-pixel.texts.tag-arrow-left-arrow-up`)),1),n(c(r(i)(`tools.dead-pixel.texts.tag-previous-color`)),1)]),g(`li`,null,[g(`strong`,null,c(r(i)(`tools.dead-pixel.texts.tag-esc`)),1),n(c(r(i)(`tools.dead-pixel.texts.tag-exit-dead-pixel-mode`)),1)])]),s.value?t(``,!0):(f(),l(o,{key:0,class:`mx-auto`,onClick:v},{default:u(()=>[n(c(r(i)(`tools.dead-pixel.texts.tag-start-dead-pixel`)),1)]),_:1}))]),s.value?(f(),h(`iframe`,{key:0,ref_key:`iframeRef`,ref:p,title:r(i)(`tools.dead-pixel.texts.title-dead-pixel-iframe`),class:`dead-pixel-iframe`,srcdoc:C,allow:`fullscreen`},null,8,S)):t(``,!0)],64)}}}),[[`__scopeId`,`data-v-4e20964d`]]);export{w as default};