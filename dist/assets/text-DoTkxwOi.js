import{A as e,F as t,N as n,b as r}from"./vue.runtime.esm-bundler-DZZTqpJU.js";import{c as i,d as a,n as o,p as s}from"./use-theme--pjWdM-N.js";import{t as c}from"./use-compitable-BpIj3OKc.js";import{t as l}from"./use-config-B_Ca_QT7.js";import{t as u}from"./use-css-vars-class-LmlPa6Qd.js";import{n as d}from"./light-DiyLcpKh.js";var f=i(`text`,`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[a(`strong`,`
 font-weight: var(--n-font-weight-strong);
 `),a(`italic`,{fontStyle:`italic`}),a(`underline`,{textDecoration:`underline`}),a(`code`,`
 line-height: 1.4;
 display: inline-block;
 font-family: var(--n-font-famliy-mono);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 box-sizing: border-box;
 padding: .05em .35em 0 .35em;
 border-radius: var(--n-code-border-radius);
 font-size: .9em;
 color: var(--n-code-text-color);
 background-color: var(--n-code-color);
 border: var(--n-code-border);
 `)]);t();var p=e({name:`Text`,props:Object.assign(Object.assign({},o.props),{code:Boolean,type:{type:String,default:`default`},delete:Boolean,strong:Boolean,italic:Boolean,underline:Boolean,depth:[String,Number],tag:String,as:{type:String,validator:()=>!0,default:void 0}}),setup(e){let{mergedClsPrefixRef:t,inlineThemeDisabled:n}=l(e),i=o(`Typography`,`-text`,f,d,e,t),a=r(()=>{let{depth:t,type:n}=e,r=n==="default"?t===void 0?`textColor`:`textColor${t}Depth`:s(`textColor`,n),{common:{fontWeightStrong:a,fontFamilyMono:o,cubicBezierEaseInOut:c},self:{codeTextColor:l,codeBorderRadius:u,codeColor:d,codeBorder:f,[r]:p}}=i.value;return{"--n-bezier":c,"--n-text-color":p,"--n-font-weight-strong":a,"--n-font-famliy-mono":o,"--n-code-border-radius":u,"--n-code-text-color":l,"--n-code-color":d,"--n-code-border":f}}),p=n?u(`text`,r(()=>`${e.type[0]}${e.depth||``}`),a,e):void 0;return{mergedClsPrefix:t,compitableTag:c(e,[`as`,`tag`]),cssVars:n?void 0:a,themeClass:p?.themeClass,onRender:p?.onRender}},render(){var e,t;let{mergedClsPrefix:r}=this;(e=this.onRender)==null||e.call(this);let i=[`${r}-text`,this.themeClass,{[`${r}-text--code`]:this.code,[`${r}-text--delete`]:this.delete,[`${r}-text--strong`]:this.strong,[`${r}-text--italic`]:this.italic,[`${r}-text--underline`]:this.underline}],a=(t=this.$slots).default?.call(t);return this.code?n(`code`,{class:i,style:this.cssVars},this.delete?n(`del`,null,a):a):this.delete?n(`del`,{class:i,style:this.cssVars},a):n(this.compitableTag||`span`,{class:i,style:this.cssVars},a)}});export{p as t};