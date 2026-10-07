import{A as e,F as t,N as n,b as r,h as i}from"./vue.runtime.esm-bundler-DZZTqpJU.js";import{c as a,d as o,f as s,n as c,u as l}from"./use-theme--pjWdM-N.js";import{t as u}from"./use-config-B_Ca_QT7.js";import{t as d}from"./use-css-vars-class-LmlPa6Qd.js";import{t as f}from"./light-DT_N1QsR.js";var p=a(`divider`,`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[s(`vertical`,`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[s(`no-title`,`
 display: flex;
 align-items: center;
 `)]),l(`title`,`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),o(`title-position-left`,[l(`line`,[o(`left`,{width:`28px`})])]),o(`title-position-right`,[l(`line`,[o(`right`,{width:`28px`})])]),o(`dashed`,[l(`line`,`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),o(`vertical`,`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),l(`line`,`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),s(`dashed`,[l(`line`,{backgroundColor:`var(--n-color)`})]),o(`dashed`,[l(`line`,{borderColor:`var(--n-color)`})]),o(`vertical`,{backgroundColor:`var(--n-color)`})]);t();var m=e({name:`Divider`,props:Object.assign(Object.assign({},c.props),{titlePlacement:{type:String,default:`center`},dashed:Boolean,vertical:Boolean}),setup(e){let{mergedClsPrefixRef:t,inlineThemeDisabled:n}=u(e),i=c(`Divider`,`-divider`,p,f,e,t),a=r(()=>{let{common:{cubicBezierEaseInOut:e},self:{color:t,textColor:n,fontWeight:r}}=i.value;return{"--n-bezier":e,"--n-color":t,"--n-text-color":n,"--n-font-weight":r}}),o=n?d(`divider`,void 0,a,e):void 0;return{mergedClsPrefix:t,cssVars:n?void 0:a,themeClass:o?.themeClass,onRender:o?.onRender}},render(){var e;let{$slots:t,titlePlacement:r,vertical:a,dashed:o,cssVars:s,mergedClsPrefix:c}=this;return(e=this.onRender)==null||e.call(this),n(`div`,{role:`separator`,class:[`${c}-divider`,this.themeClass,{[`${c}-divider--vertical`]:a,[`${c}-divider--no-title`]:!t.default,[`${c}-divider--dashed`]:o,[`${c}-divider--title-position-${r}`]:t.default&&r}],style:s},a?null:n(`div`,{class:`${c}-divider__line ${c}-divider__line--left`}),!a&&t.default?n(i,null,n(`div`,{class:`${c}-divider__title`},this.$slots),n(`div`,{class:`${c}-divider__line ${c}-divider__line--right`})):null)}});export{m as t};