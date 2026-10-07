import{A as e,Ct as t,F as n,I as r,J as i,N as a,b as o,ut as s,vt as c}from"./vue.runtime.esm-bundler-DZZTqpJU.js";import{c as l,d as u,f as d,n as f,p,s as m,u as h}from"./use-theme--pjWdM-N.js";import{t as g}from"./use-rtl-DxDqUyON.js";import{t as _}from"./use-memo-Y5dSqWt3.js";import{t as v}from"./use-merged-state-B5grpmgQ.js";import{t as y}from"./create-injection-key-Dfvzj6n2.js";import{t as b}from"./call-fCmD0dxi.js";import{t as x}from"./flatten-EpFO1KBN.js";import{t as S}from"./get-slot-6kXJmSMP.js";import{t as C}from"./use-config-B_Ca_QT7.js";import{t as w}from"./use-css-vars-class-LmlPa6Qd.js";import{n as T}from"./use-form-item-C8Vx-E3x.js";import{t as E}from"./light-EnHGsqt0.js";n(),s();var D={name:String,value:{type:[String,Number,Boolean],default:`on`},checked:{type:Boolean,default:void 0},defaultChecked:Boolean,disabled:{type:Boolean,default:void 0},label:String,size:String,onUpdateChecked:[Function,Array],"onUpdate:checked":[Function,Array],checkedValue:{type:Boolean,default:void 0}},O=y(`n-radio-group`);function k(e){let n=r(O,null),{mergedClsPrefixRef:i,mergedComponentPropsRef:a}=C(e),o=T(e,{mergedSize(t){let{size:r}=e;if(r!==void 0)return r;if(n){let{mergedSizeRef:{value:e}}=n;if(e!==void 0)return e}return t?t.mergedSize.value:a?.value?.Radio?.size||`medium`},mergedDisabled(t){return!!(e.disabled||n?.disabledRef.value||t?.disabled.value)}}),{mergedSizeRef:s,mergedDisabledRef:l}=o,u=c(null),d=c(null),f=c(e.defaultChecked),p=v(t(e,`checked`),f),m=_(()=>n?n.valueRef.value===e.value:p.value),h=_(()=>{let{name:t}=e;if(t!==void 0)return t;if(n)return n.nameRef.value}),g=c(!1);function y(){if(n){let{doUpdateValue:t}=n,{value:r}=e;b(t,r)}else{let{onUpdateChecked:t,"onUpdate:checked":n}=e,{nTriggerFormInput:r,nTriggerFormChange:i}=o;t&&b(t,!0),n&&b(n,!0),r(),i(),f.value=!0}}function x(){l.value||m.value||y()}function S(){x(),u.value&&(u.value.checked=m.value)}function w(){g.value=!1}function E(){g.value=!0}return{mergedClsPrefix:n?n.mergedClsPrefixRef:i,inputRef:u,labelRef:d,mergedName:h,mergedDisabled:l,renderSafeChecked:m,focus:g,mergedSize:s,handleRadioInputChange:S,handleRadioInputBlur:w,handleRadioInputFocus:E}}var A=l(`radio-group`,`
 display: inline-block;
 font-size: var(--n-font-size);
`,[h(`splitor`,`
 display: inline-block;
 vertical-align: bottom;
 width: 1px;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 background: var(--n-button-border-color);
 `,[u(`checked`,{backgroundColor:`var(--n-button-border-color-active)`}),u(`disabled`,{opacity:`var(--n-opacity-disabled)`})]),u(`button-group`,`
 white-space: nowrap;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[l(`radio-button`,{height:`var(--n-height)`,lineHeight:`var(--n-height)`}),h(`splitor`,{height:`var(--n-height)`})]),l(`radio-button`,`
 vertical-align: bottom;
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-block;
 box-sizing: border-box;
 padding-left: 14px;
 padding-right: 14px;
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background: var(--n-button-color);
 color: var(--n-button-text-color);
 border-top: 1px solid var(--n-button-border-color);
 border-bottom: 1px solid var(--n-button-border-color);
 `,[l(`radio-input`,`
 pointer-events: none;
 position: absolute;
 border: 0;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 `),h(`state-border`,`
 z-index: 1;
 pointer-events: none;
 position: absolute;
 box-shadow: var(--n-button-box-shadow);
 transition: box-shadow .3s var(--n-bezier);
 left: -1px;
 bottom: -1px;
 right: -1px;
 top: -1px;
 `),m(`&:first-child`,`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 border-left: 1px solid var(--n-button-border-color);
 `,[h(`state-border`,`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `)]),m(`&:last-child`,`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `,[h(`state-border`,`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `)]),d(`disabled`,`
 cursor: pointer;
 `,[m(`&:hover`,[h(`state-border`,`
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `),d(`checked`,{color:`var(--n-button-text-color-hover)`})]),u(`focus`,[m(`&:not(:active)`,[h(`state-border`,{boxShadow:`var(--n-button-box-shadow-focus)`})])])]),u(`checked`,`
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `),u(`disabled`,`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)])]);n(),s();function j(e,t,n){let r=[],i=!1;for(let o=0;o<e.length;++o){let s=e[o],c=s.type?.name;c===`RadioButton`&&(i=!0);let l=s.props;if(c!==`RadioButton`){r.push(s);continue}if(o===0)r.push(s);else{let e=r[r.length-1].props,i=t===e.value,o=e.disabled,c=t===l.value,u=l.disabled,d=(i?2:0)+ +!o,f=(c?2:0)+ +!u,p={[`${n}-radio-group__splitor--disabled`]:o,[`${n}-radio-group__splitor--checked`]:i},m={[`${n}-radio-group__splitor--disabled`]:u,[`${n}-radio-group__splitor--checked`]:c},h=d<f?m:p;r.push(a(`div`,{class:[`${n}-radio-group__splitor`,h]}),s)}}return{children:r,isButtonGroup:i}}var M=e({name:`RadioGroup`,props:Object.assign(Object.assign({},f.props),{name:String,value:[String,Number,Boolean],defaultValue:{type:[String,Number,Boolean],default:null},size:String,disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),setup(e){let n=c(null),{mergedSizeRef:r,mergedDisabledRef:a,nTriggerFormChange:s,nTriggerFormInput:l,nTriggerFormBlur:u,nTriggerFormFocus:d}=T(e),{mergedClsPrefixRef:m,inlineThemeDisabled:h,mergedRtlRef:_}=C(e),y=f(`Radio`,`-radio-group`,A,E,e,m),x=c(e.defaultValue),S=v(t(e,`value`),x);function D(t){let{onUpdateValue:n,"onUpdate:value":r}=e;n&&b(n,t),r&&b(r,t),x.value=t,s(),l()}function k(e){let{value:t}=n;t&&(t.contains(e.relatedTarget)||d())}function j(e){let{value:t}=n;t&&(t.contains(e.relatedTarget)||u())}i(O,{mergedClsPrefixRef:m,nameRef:t(e,`name`),valueRef:S,disabledRef:a,mergedSizeRef:r,doUpdateValue:D});let M=g(`Radio`,_,m),N=o(()=>{let{value:e}=r,{common:{cubicBezierEaseInOut:t},self:{buttonBorderColor:n,buttonBorderColorActive:i,buttonBorderRadius:a,buttonBoxShadow:o,buttonBoxShadowFocus:s,buttonBoxShadowHover:c,buttonColor:l,buttonColorActive:u,buttonTextColor:d,buttonTextColorActive:f,buttonTextColorHover:m,opacityDisabled:h,[p(`buttonHeight`,e)]:g,[p(`fontSize`,e)]:_}}=y.value;return{"--n-font-size":_,"--n-bezier":t,"--n-button-border-color":n,"--n-button-border-color-active":i,"--n-button-border-radius":a,"--n-button-box-shadow":o,"--n-button-box-shadow-focus":s,"--n-button-box-shadow-hover":c,"--n-button-color":l,"--n-button-color-active":u,"--n-button-text-color":d,"--n-button-text-color-hover":m,"--n-button-text-color-active":f,"--n-height":g,"--n-opacity-disabled":h}}),P=h?w(`radio-group`,o(()=>r.value[0]),N,e):void 0;return{selfElRef:n,rtlEnabled:M,mergedClsPrefix:m,mergedValue:S,handleFocusout:j,handleFocusin:k,cssVars:h?void 0:N,themeClass:P?.themeClass,onRender:P?.onRender}},render(){var e;let{mergedValue:t,mergedClsPrefix:n,handleFocusin:r,handleFocusout:i}=this,{children:o,isButtonGroup:s}=j(x(S(this)),t,n);return(e=this.onRender)==null||e.call(this),a(`div`,{onFocusin:r,onFocusout:i,ref:`selfElRef`,class:[`${n}-radio-group`,this.rtlEnabled&&`${n}-radio-group--rtl`,this.themeClass,s&&`${n}-radio-group--button-group`],style:this.cssVars},o)}});export{D as n,k as r,M as t};