import{A as e,F as t,N as n,b as r}from"./vue.runtime.esm-bundler-DZZTqpJU.js";import{c as i,n as a}from"./use-theme--pjWdM-N.js";import{t as o}from"./use-config-B_Ca_QT7.js";import{t as s}from"./use-css-vars-class-LmlPa6Qd.js";import{n as c}from"./light-DiyLcpKh.js";var l=i(`a`,`
 cursor: pointer;
 transition:
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 text-decoration-color: var(--n-text-color);
 color: var(--n-text-color);
`);t();var u=e({name:`A`,props:Object.assign({},a.props),setup(e){let{mergedClsPrefixRef:t,inlineThemeDisabled:n}=o(e),i=a(`Typography`,`-a`,l,c,e,t),u=r(()=>{let{common:{cubicBezierEaseInOut:e},self:{aTextColor:t}}=i.value;return{"--n-text-color":t,"--n-bezier":e}}),d=n?s(`a`,void 0,u,e):void 0;return{mergedClsPrefix:t,cssVars:n?void 0:u,themeClass:d?.themeClass,onRender:d?.onRender}},render(){var e;return(e=this.onRender)==null||e.call(this),n(`a`,{class:[`${this.mergedClsPrefix}-a`,this.themeClass],style:this.cssVars},this.$slots)}});export{u as t};