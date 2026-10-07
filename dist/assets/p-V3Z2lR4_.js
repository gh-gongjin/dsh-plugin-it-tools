import{A as e,F as t,N as n,b as r}from"./vue.runtime.esm-bundler-DZZTqpJU.js";import{c as i,n as a,s as o}from"./use-theme--pjWdM-N.js";import{t as s}from"./use-config-B_Ca_QT7.js";import{t as c}from"./use-css-vars-class-LmlPa6Qd.js";import{n as l}from"./light-DiyLcpKh.js";var u=i(`p`,`
 box-sizing: border-box;
 transition: color .3s var(--n-bezier);
 margin: var(--n-margin);
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 color: var(--n-text-color);
`,[o(`&:first-child`,`margin-top: 0;`),o(`&:last-child`,`margin-bottom: 0;`)]);t();var d=e({name:`P`,props:Object.assign(Object.assign({},a.props),{depth:[String,Number]}),setup(e){let{mergedClsPrefixRef:t,inlineThemeDisabled:n}=s(e),i=a(`Typography`,`-p`,u,l,e,t),o=r(()=>{let{depth:t}=e,n=t||`1`,{common:{cubicBezierEaseInOut:r},self:{pFontSize:a,pLineHeight:o,pMargin:s,pTextColor:c,[`pTextColor${n}Depth`]:l}}=i.value;return{"--n-bezier":r,"--n-font-size":a,"--n-line-height":o,"--n-margin":s,"--n-text-color":t===void 0?c:l}}),d=n?c(`p`,r(()=>`${e.depth||``}`),o,e):void 0;return{mergedClsPrefix:t,cssVars:n?void 0:o,themeClass:d?.themeClass,onRender:d?.onRender}},render(){var e;return(e=this.onRender)==null||e.call(this),n(`p`,{class:[`${this.mergedClsPrefix}-p`,this.themeClass],style:this.cssVars},this.$slots)}});export{d as t};