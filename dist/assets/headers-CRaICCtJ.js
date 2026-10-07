import{A as e,F as t,N as n,b as r}from"./vue.runtime.esm-bundler-DZZTqpJU.js";import{c as i,d as a,n as o,p as s,s as c}from"./use-theme--pjWdM-N.js";import{t as l}from"./use-config-B_Ca_QT7.js";import{t as u}from"./use-css-vars-class-LmlPa6Qd.js";import{n as d}from"./light-DiyLcpKh.js";var f=i(`h`,`
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 margin: var(--n-margin);
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[c(`&:first-child`,{marginTop:0}),a(`prefix-bar`,{position:`relative`,paddingLeft:`var(--n-prefix-width)`},[a(`align-text`,{paddingLeft:0},[c(`&::before`,{left:`calc(-1 * var(--n-prefix-width))`})]),c(`&::before`,`
 content: "";
 width: var(--n-bar-width);
 border-radius: calc(var(--n-bar-width) / 2);
 transition: background-color .3s var(--n-bezier);
 left: 0;
 top: 0;
 bottom: 0;
 position: absolute;
 `),c(`&::before`,{backgroundColor:`var(--n-bar-color)`})])]);t();var p=Object.assign(Object.assign({},o.props),{type:{type:String,default:`default`},prefix:String,alignText:Boolean}),m=t=>e({name:`H${t}`,props:p,setup(e){let{mergedClsPrefixRef:n,inlineThemeDisabled:i}=l(e),a=o(`Typography`,`-h`,f,d,e,n),c=r(()=>{let{type:n}=e,{common:{cubicBezierEaseInOut:r},self:{headerFontWeight:i,headerTextColor:o,[s(`headerPrefixWidth`,t)]:c,[s(`headerFontSize`,t)]:l,[s(`headerMargin`,t)]:u,[s(`headerBarWidth`,t)]:d,[s(`headerBarColor`,n)]:f}}=a.value;return{"--n-bezier":r,"--n-font-size":l,"--n-margin":u,"--n-bar-color":f,"--n-bar-width":d,"--n-font-weight":i,"--n-text-color":o,"--n-prefix-width":c}}),p=i?u(`h${t}`,r(()=>e.type[0]),c,e):void 0;return{mergedClsPrefix:n,cssVars:i?void 0:c,themeClass:p?.themeClass,onRender:p?.onRender}},render(){var e;let{prefix:r,alignText:i,mergedClsPrefix:a,cssVars:o,$slots:s}=this;return(e=this.onRender)==null||e.call(this),n(`h${t}`,{class:[`${a}-h`,`${a}-h${t}`,this.themeClass,{[`${a}-h--prefix-bar`]:r,[`${a}-h--align-text`]:i}],style:o},s)}}),h=m(`1`),g=m(`2`),_=m(`3`);m(`4`),m(`5`),m(`6`);export{g as n,_ as r,h as t};