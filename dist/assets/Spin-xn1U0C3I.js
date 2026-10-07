import{A as e,F as t,N as n,a as r,b as i,n as a,rt as o,ut as s,vt as c}from"./vue.runtime.esm-bundler-DZZTqpJU.js";import{c as l,d as u,n as d,p as f,s as p}from"./use-theme--pjWdM-N.js";import{i as m}from"./css-DE6X-JUA.js";import{t as h}from"./use-compitable-BpIj3OKc.js";import{t as g}from"./use-config-B_Ca_QT7.js";import{t as _}from"./use-css-vars-class-LmlPa6Qd.js";import{n as v,t as y}from"./Loading-6wuFF5Nv.js";import{t as b}from"./fade-in.cssr-Dizy9Zx7.js";import{n as x}from"./light-FiYtgFgw.js";var S=p([p(`@keyframes spin-rotate`,`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),l(`spin-container`,`
 position: relative;
 `,[l(`spin-body`,`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[b()])]),l(`spin-body`,`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),l(`spin`,`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[u(`rotate`,`
 animation: spin-rotate 2s linear infinite;
 `)]),l(`spin-description`,`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),l(`spin-content`,`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[u(`spinning`,`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]);t(),s(),r();var C={small:20,medium:18,large:16},w=e({name:`Spin`,props:Object.assign(Object.assign(Object.assign({},d.props),{contentClass:String,contentStyle:[Object,String],description:String,size:{type:[String,Number],default:`medium`},show:{type:Boolean,default:!0},rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0},delay:Number}),v),slots:Object,setup(e){let{mergedClsPrefixRef:t,inlineThemeDisabled:n}=g(e),r=d(`Spin`,`-spin`,S,x,e,t),a=i(()=>{let{size:t}=e,{common:{cubicBezierEaseInOut:n},self:i}=r.value,{opacitySpinning:a,color:o,textColor:s}=i;return{"--n-bezier":n,"--n-opacity-spinning":a,"--n-size":typeof t==`number`?m(t):i[f(`size`,t)],"--n-color":o,"--n-text-color":s}}),s=n?_(`spin`,i(()=>{let{size:t}=e;return typeof t==`number`?String(t):t[0]}),a,e):void 0,l=h(e,[`spinning`,`show`]),u=c(!1);return o(t=>{let n;if(l.value){let{delay:r}=e;if(r){n=window.setTimeout(()=>{u.value=!0},r),t(()=>{clearTimeout(n)});return}}u.value=l.value}),{mergedClsPrefix:t,active:u,mergedStrokeWidth:i(()=>{let{strokeWidth:t}=e;if(t!==void 0)return t;let{size:n}=e;return C[typeof n==`number`?`medium`:n]}),cssVars:n?void 0:a,themeClass:s?.themeClass,onRender:s?.onRender}},render(){var e;let{$slots:t,mergedClsPrefix:r,description:i}=this,o=t.icon&&this.rotate,s=(i||t.description)&&n(`div`,{class:`${r}-spin-description`},i||t.description?.call(t)),c=t.icon?n(`div`,{class:[`${r}-spin-body`,this.themeClass]},n(`div`,{class:[`${r}-spin`,o&&`${r}-spin--rotate`],style:t.default?``:this.cssVars},t.icon()),s):n(`div`,{class:[`${r}-spin-body`,this.themeClass]},n(y,{clsPrefix:r,style:t.default?``:this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,radius:this.radius,scale:this.scale,class:`${r}-spin`}),s);return(e=this.onRender)==null||e.call(this),t.default?n(`div`,{class:[`${r}-spin-container`,this.themeClass],style:this.cssVars},n(`div`,{class:[`${r}-spin-content`,this.active&&`${r}-spin-content--spinning`,this.contentClass],style:this.contentStyle},t),n(a,{name:`fade-in-transition`},{default:()=>this.active?c:null})):c}});export{w as t};