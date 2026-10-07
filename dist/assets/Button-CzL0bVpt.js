import{A as e,Ct as t,F as n,H as r,I as i,N as a,b as o,ut as s,vt as c,z as l}from"./vue.runtime.esm-bundler-DZZTqpJU.js";import{c as u,d,f,n as p,p as m,s as h,u as g}from"./use-theme--pjWdM-N.js";import{t as _}from"./use-rtl-DxDqUyON.js";import{n as v,r as y}from"./light-CLwlD-S_.js";import{t as b}from"./use-memo-Y5dSqWt3.js";import{t as x}from"./create-injection-key-Dfvzj6n2.js";import{t as S}from"./is-browser-e-NGrvPW.js";import{t as C}from"./color-to-class-G4jmrDIg.js";import{t as w}from"./call-fCmD0dxi.js";import{a as T,n as E}from"./resolve-slot-CNYZEkGJ.js";import{t as D}from"./use-config-B_Ca_QT7.js";import{t as O}from"./use-css-vars-class-LmlPa6Qd.js";import{n as k}from"./use-form-item-C8Vx-E3x.js";import{t as A}from"./_common-B5AAFkad.js";import{t as j}from"./use-style-Dm0FV5ZE.js";import{n as M,t as N}from"./icon-switch.cssr-GuipRqzd.js";import{t as P}from"./FadeInExpandTransition-BhLrC5Ht.js";import{t as F}from"./Loading-6wuFF5Nv.js";import{t as I}from"./browser-B_EWS_Ix.js";import{t as L}from"./light-BMcGstvd.js";var{cubicBezierEaseInOut:R}=A;function z({duration:e=`.2s`,delay:t=`.1s`}={}){return[h(`&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to`,{opacity:1}),h(`&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from`,`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),h(`&.fade-in-width-expand-transition-leave-active`,`
 overflow: hidden;
 transition:
 opacity ${e} ${R},
 max-width ${e} ${R} ${t},
 margin-left ${e} ${R} ${t},
 margin-right ${e} ${R} ${t};
 `),h(`&.fade-in-width-expand-transition-enter-active`,`
 overflow: hidden;
 transition:
 opacity ${e} ${R} ${t},
 max-width ${e} ${R},
 margin-left ${e} ${R},
 margin-right ${e} ${R};
 `)]}var B=u(`base-wave`,`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`);n(),s();var V=e({name:`BaseWave`,props:{clsPrefix:{type:String,required:!0}},setup(e){j(`-base-wave`,B,t(e,`clsPrefix`));let n=c(null),i=c(!1),a=null;return r(()=>{a!==null&&window.clearTimeout(a)}),{active:i,selfRef:n,play(){a!==null&&(window.clearTimeout(a),i.value=!1,a=null),l(()=>{var e;(e=n.value)==null||e.offsetHeight,i.value=!0,a=window.setTimeout(()=>{i.value=!1,a=null},1e3)})}}},render(){let{clsPrefix:e}=this;return a(`div`,{ref:`selfRef`,"aria-hidden":!0,class:[`${e}-base-wave`,this.active&&`${e}-base-wave--active`]})}});function H(e){return y(e,[255,255,255,.16])}function U(e){return y(e,[0,0,0,.12])}var W=x(`n-button-group`),G=h([u(`button`,`
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 -webkit-user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[d(`color`,[g(`border`,{borderColor:`var(--n-border-color)`}),d(`disabled`,[g(`border`,{borderColor:`var(--n-border-color-disabled)`})]),f(`disabled`,[h(`&:focus`,[g(`state-border`,{borderColor:`var(--n-border-color-focus)`})]),h(`&:hover`,[g(`state-border`,{borderColor:`var(--n-border-color-hover)`})]),h(`&:active`,[g(`state-border`,{borderColor:`var(--n-border-color-pressed)`})]),d(`pressed`,[g(`state-border`,{borderColor:`var(--n-border-color-pressed)`})])])]),d(`disabled`,{backgroundColor:`var(--n-color-disabled)`,color:`var(--n-text-color-disabled)`},[g(`border`,{border:`var(--n-border-disabled)`})]),f(`disabled`,[h(`&:focus`,{backgroundColor:`var(--n-color-focus)`,color:`var(--n-text-color-focus)`},[g(`state-border`,{border:`var(--n-border-focus)`})]),h(`&:hover`,{backgroundColor:`var(--n-color-hover)`,color:`var(--n-text-color-hover)`},[g(`state-border`,{border:`var(--n-border-hover)`})]),h(`&:active`,{backgroundColor:`var(--n-color-pressed)`,color:`var(--n-text-color-pressed)`},[g(`state-border`,{border:`var(--n-border-pressed)`})]),d(`pressed`,{backgroundColor:`var(--n-color-pressed)`,color:`var(--n-text-color-pressed)`},[g(`state-border`,{border:`var(--n-border-pressed)`})])]),d(`loading`,`cursor: wait;`),u(`base-wave`,`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[d(`active`,{zIndex:1,animationName:`button-wave-spread, button-wave-opacity`})]),S&&`MozBoxSizing`in document.createElement(`div`).style?h(`&::moz-focus-inner`,{border:0}):null,g(`border, state-border`,`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),g(`border`,`
 border: var(--n-border);
 `),g(`state-border`,`
 border: var(--n-border);
 border-color: #0000;
 z-index: 1;
 `),g(`icon`,`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,[u(`icon-slot`,`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `,[N({top:`50%`,originalTransform:`translateY(-50%)`})]),z()]),g(`content`,`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `,[h(`~`,[g(`icon`,{margin:`var(--n-icon-margin)`,marginRight:0})])]),d(`block`,`
 display: flex;
 width: 100%;
 `),d(`dashed`,[g(`border, state-border`,{borderStyle:`dashed !important`})]),d(`disabled`,{cursor:`not-allowed`,opacity:`var(--n-opacity-disabled)`})]),h(`@keyframes button-wave-spread`,{from:{boxShadow:`0 0 0.5px 0 var(--n-ripple-color)`},to:{boxShadow:`0 0 0.5px 4.5px var(--n-ripple-color)`}}),h(`@keyframes button-wave-opacity`,{from:{opacity:`var(--n-wave-opacity)`},to:{opacity:0}})]);n(),s();var K=e({name:`Button`,props:Object.assign(Object.assign({},p.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:`button`},type:{type:String,default:`default`},dashed:Boolean,renderIcon:Function,iconPlacement:{type:String,default:`left`},attrType:{type:String,default:`button`},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:{type:Boolean,default:!I},spinProps:Object}),slots:Object,setup(e){let t=c(null),n=c(null),r=c(!1),a=b(()=>!e.quaternary&&!e.tertiary&&!e.secondary&&!e.text&&(!e.color||e.ghost||e.dashed)&&e.bordered),s=i(W,{}),{inlineThemeDisabled:l,mergedClsPrefixRef:u,mergedRtlRef:d,mergedComponentPropsRef:f}=D(e),{mergedSizeRef:h}=k({},{defaultSize:`medium`,mergedSize:t=>{let{size:n}=e;if(n)return n;let{size:r}=s;if(r)return r;let{mergedSize:i}=t||{};return i?i.value:f?.value?.Button?.size||`medium`}}),g=o(()=>e.focusable&&!e.disabled),y=n=>{var r;g.value||n.preventDefault(),!e.nativeFocusBehavior&&(n.preventDefault(),!e.disabled&&g.value&&((r=t.value)==null||r.focus({preventScroll:!0})))},x=t=>{var r;if(!e.disabled&&!e.loading){let{onClick:i}=e;i&&w(i,t),e.text||(r=n.value)==null||r.play()}},S=t=>{switch(t.key){case`Enter`:if(!e.keyboard)return;r.value=!1}},T=t=>{switch(t.key){case`Enter`:if(!e.keyboard||e.loading){t.preventDefault();return}r.value=!0}},E=()=>{r.value=!1},A=p(`Button`,`-button`,G,L,e,u),j=_(`Button`,d,u),M=o(()=>{let{common:{cubicBezierEaseInOut:t,cubicBezierEaseOut:n},self:r}=A.value,{rippleDuration:i,opacityDisabled:a,fontWeight:o,fontWeightStrong:s}=r,c=h.value,{dashed:l,type:u,ghost:d,text:f,color:p,round:g,circle:_,textColor:y,secondary:b,tertiary:x,quaternary:S,strong:C}=e,w={"--n-font-weight":C?s:o},T={"--n-color":`initial`,"--n-color-hover":`initial`,"--n-color-pressed":`initial`,"--n-color-focus":`initial`,"--n-color-disabled":`initial`,"--n-ripple-color":`initial`,"--n-text-color":`initial`,"--n-text-color-hover":`initial`,"--n-text-color-pressed":`initial`,"--n-text-color-focus":`initial`,"--n-text-color-disabled":`initial`},E=u===`tertiary`,D=u==="default",O=E?`default`:u;if(f){let e=y||p;T={"--n-color":`#0000`,"--n-color-hover":`#0000`,"--n-color-pressed":`#0000`,"--n-color-focus":`#0000`,"--n-color-disabled":`#0000`,"--n-ripple-color":`#0000`,"--n-text-color":e||r[m(`textColorText`,O)],"--n-text-color-hover":e?H(e):r[m(`textColorTextHover`,O)],"--n-text-color-pressed":e?U(e):r[m(`textColorTextPressed`,O)],"--n-text-color-focus":e?H(e):r[m(`textColorTextHover`,O)],"--n-text-color-disabled":e||r[m(`textColorTextDisabled`,O)]}}else if(d||l){let e=y||p;T={"--n-color":`#0000`,"--n-color-hover":`#0000`,"--n-color-pressed":`#0000`,"--n-color-focus":`#0000`,"--n-color-disabled":`#0000`,"--n-ripple-color":p||r[m(`rippleColor`,O)],"--n-text-color":e||r[m(`textColorGhost`,O)],"--n-text-color-hover":e?H(e):r[m(`textColorGhostHover`,O)],"--n-text-color-pressed":e?U(e):r[m(`textColorGhostPressed`,O)],"--n-text-color-focus":e?H(e):r[m(`textColorGhostHover`,O)],"--n-text-color-disabled":e||r[m(`textColorGhostDisabled`,O)]}}else if(b){let e=D?r.textColor:E?r.textColorTertiary:r[m(`color`,O)],t=p||e,n=u!=="default"&&u!==`tertiary`;T={"--n-color":n?v(t,{alpha:Number(r.colorOpacitySecondary)}):r.colorSecondary,"--n-color-hover":n?v(t,{alpha:Number(r.colorOpacitySecondaryHover)}):r.colorSecondaryHover,"--n-color-pressed":n?v(t,{alpha:Number(r.colorOpacitySecondaryPressed)}):r.colorSecondaryPressed,"--n-color-focus":n?v(t,{alpha:Number(r.colorOpacitySecondaryHover)}):r.colorSecondaryHover,"--n-color-disabled":r.colorSecondary,"--n-ripple-color":`#0000`,"--n-text-color":t,"--n-text-color-hover":t,"--n-text-color-pressed":t,"--n-text-color-focus":t,"--n-text-color-disabled":t}}else if(x||S){let e=D?r.textColor:E?r.textColorTertiary:r[m(`color`,O)],t=p||e;x?(T[`--n-color`]=r.colorTertiary,T[`--n-color-hover`]=r.colorTertiaryHover,T[`--n-color-pressed`]=r.colorTertiaryPressed,T[`--n-color-focus`]=r.colorSecondaryHover,T[`--n-color-disabled`]=r.colorTertiary):(T[`--n-color`]=r.colorQuaternary,T[`--n-color-hover`]=r.colorQuaternaryHover,T[`--n-color-pressed`]=r.colorQuaternaryPressed,T[`--n-color-focus`]=r.colorQuaternaryHover,T[`--n-color-disabled`]=r.colorQuaternary),T[`--n-ripple-color`]=`#0000`,T[`--n-text-color`]=t,T[`--n-text-color-hover`]=t,T[`--n-text-color-pressed`]=t,T[`--n-text-color-focus`]=t,T[`--n-text-color-disabled`]=t}else T={"--n-color":p||r[m(`color`,O)],"--n-color-hover":p?H(p):r[m(`colorHover`,O)],"--n-color-pressed":p?U(p):r[m(`colorPressed`,O)],"--n-color-focus":p?H(p):r[m(`colorFocus`,O)],"--n-color-disabled":p||r[m(`colorDisabled`,O)],"--n-ripple-color":p||r[m(`rippleColor`,O)],"--n-text-color":y||(p?r.textColorPrimary:E?r.textColorTertiary:r[m(`textColor`,O)]),"--n-text-color-hover":y||(p?r.textColorHoverPrimary:r[m(`textColorHover`,O)]),"--n-text-color-pressed":y||(p?r.textColorPressedPrimary:r[m(`textColorPressed`,O)]),"--n-text-color-focus":y||(p?r.textColorFocusPrimary:r[m(`textColorFocus`,O)]),"--n-text-color-disabled":y||(p?r.textColorDisabledPrimary:r[m(`textColorDisabled`,O)])};let k={"--n-border":`initial`,"--n-border-hover":`initial`,"--n-border-pressed":`initial`,"--n-border-focus":`initial`,"--n-border-disabled":`initial`};k=f?{"--n-border":`none`,"--n-border-hover":`none`,"--n-border-pressed":`none`,"--n-border-focus":`none`,"--n-border-disabled":`none`}:{"--n-border":r[m(`border`,O)],"--n-border-hover":r[m(`borderHover`,O)],"--n-border-pressed":r[m(`borderPressed`,O)],"--n-border-focus":r[m(`borderFocus`,O)],"--n-border-disabled":r[m(`borderDisabled`,O)]};let{[m(`height`,c)]:j,[m(`fontSize`,c)]:M,[m(`padding`,c)]:N,[m(`paddingRound`,c)]:P,[m(`iconSize`,c)]:F,[m(`borderRadius`,c)]:I,[m(`iconMargin`,c)]:L,waveOpacity:R}=r,z={"--n-width":_&&!f?j:`initial`,"--n-height":f?`initial`:j,"--n-font-size":M,"--n-padding":_||f?`initial`:g?P:N,"--n-icon-size":F,"--n-icon-margin":L,"--n-border-radius":f?`initial`:_||g?j:I};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":t,"--n-bezier-ease-out":n,"--n-ripple-duration":i,"--n-opacity-disabled":a,"--n-wave-opacity":R},w),T),k),z)}),N=l?O(`button`,o(()=>{let t=``,{dashed:n,type:r,ghost:i,text:a,color:o,round:s,circle:c,textColor:l,secondary:u,tertiary:d,quaternary:f,strong:p}=e;n&&(t+=`a`),i&&(t+=`b`),a&&(t+=`c`),s&&(t+=`d`),c&&(t+=`e`),u&&(t+=`f`),d&&(t+=`g`),f&&(t+=`h`),p&&(t+=`i`),o&&(t+=`j${C(o)}`),l&&(t+=`k${C(l)}`);let{value:m}=h;return t+=`l${m[0]}`,t+=`m${r[0]}`,t}),M,e):void 0;return{selfElRef:t,waveElRef:n,mergedClsPrefix:u,mergedFocusable:g,mergedSize:h,showBorder:a,enterPressed:r,rtlEnabled:j,handleMousedown:y,handleKeydown:T,handleBlur:E,handleKeyup:S,handleClick:x,customColorCssVars:o(()=>{let{color:t}=e;if(!t)return null;let n=H(t);return{"--n-border-color":t,"--n-border-color-hover":n,"--n-border-color-pressed":U(t),"--n-border-color-focus":n,"--n-border-color-disabled":t}}),cssVars:l?void 0:M,themeClass:N?.themeClass,onRender:N?.onRender}},render(){let{mergedClsPrefix:e,tag:t,onRender:n}=this;n?.();let r=T(this.$slots.default,t=>t&&a(`span`,{class:`${e}-button__content`},t));return a(t,{ref:`selfElRef`,class:[this.themeClass,`${e}-button`,`${e}-button--${this.type}-type`,`${e}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${e}-button--rtl`,this.disabled&&`${e}-button--disabled`,this.block&&`${e}-button--block`,this.enterPressed&&`${e}-button--pressed`,!this.text&&this.dashed&&`${e}-button--dashed`,this.color&&`${e}-button--color`,this.secondary&&`${e}-button--secondary`,this.loading&&`${e}-button--loading`,this.ghost&&`${e}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement===`right`&&r,a(P,{width:!0},{default:()=>T(this.$slots.icon,t=>(this.loading||this.renderIcon||t)&&a(`span`,{class:`${e}-button__icon`,style:{margin:E(this.$slots.default)?`0`:``}},a(M,null,{default:()=>this.loading?a(F,Object.assign({clsPrefix:e,key:`loading`,class:`${e}-icon-slot`,strokeWidth:20},this.spinProps)):a(`div`,{key:`icon`,class:`${e}-icon-slot`,role:`none`},this.renderIcon?this.renderIcon():t)})))}),this.iconPlacement===`left`&&r,this.text?null:a(V,{ref:`waveElRef`,clsPrefix:e}),this.showBorder?a(`div`,{"aria-hidden":!0,class:`${e}-button__border`,style:this.customColorCssVars}):null,this.showBorder?a(`div`,{"aria-hidden":!0,class:`${e}-button__state-border`,style:this.customColorCssVars}):null)}}),q=K;export{q as n,W as r,K as t};