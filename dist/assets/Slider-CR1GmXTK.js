import{A as e,Ct as t,F as n,H as r,N as i,U as a,a as o,b as s,n as c,nt as l,ut as u,vt as d,z as f}from"./vue.runtime.esm-bundler-DZZTqpJU.js";import{c as p,d as m,h,m as g,n as _,s as v,u as y}from"./use-theme--pjWdM-N.js";import{t as b}from"./light-CLwlD-S_.js";import{n as x,t as S}from"./delegate-CJ0pWS92.js";import{t as C}from"./use-merged-state-B5grpmgQ.js";import{t as w}from"./use-is-mounted-DNrqd8l2.js";import{i as T,n as E,r as D,t as O}from"./Follower-eD66E3hR.js";import{t as k}from"./call-fCmD0dxi.js";import{r as A}from"./resolve-slot-CNYZEkGJ.js";import{t as ee}from"./use-config-B_Ca_QT7.js";import{t as j}from"./use-css-vars-class-LmlPa6Qd.js";import{n as te}from"./use-form-item-C8Vx-E3x.js";import{t as M}from"./fade-in-scale-up.cssr-BxlBQbys.js";import{t as N}from"./_common-dGl-dGqd.js";function P(e){let{railColor:t,primaryColor:n,baseColor:r,cardColor:i,modalColor:a,popoverColor:o,borderRadius:s,fontSize:c,opacityDisabled:l}=e;return Object.assign(Object.assign({},N),{fontSize:c,markFontSize:c,railColor:t,railColorHover:t,fillColor:n,fillColorHover:n,opacityDisabled:l,handleColor:`#FFF`,dotColor:i,dotColorModal:a,dotColorPopover:o,handleBoxShadow:`0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)`,handleBoxShadowHover:`0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)`,handleBoxShadowActive:`0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)`,handleBoxShadowFocus:`0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)`,indicatorColor:`rgba(0, 0, 0, .85)`,indicatorBoxShadow:`0 2px 8px 0 rgba(0, 0, 0, 0.12)`,indicatorTextColor:r,indicatorBorderRadius:s,dotBorder:`2px solid ${t}`,dotBorderActive:`2px solid ${n}`,dotBoxShadow:``})}var ne={name:`Slider`,common:b,self:P},re=v([p(`slider`,`
 display: block;
 padding: calc((var(--n-handle-size) - var(--n-rail-height)) / 2) 0;
 position: relative;
 z-index: 0;
 width: 100%;
 cursor: pointer;
 user-select: none;
 -webkit-user-select: none;
 `,[m(`reverse`,[p(`slider-handles`,[p(`slider-handle-wrapper`,`
 transform: translate(50%, -50%);
 `)]),p(`slider-dots`,[p(`slider-dot`,`
 transform: translateX(50%, -50%);
 `)]),m(`vertical`,[p(`slider-handles`,[p(`slider-handle-wrapper`,`
 transform: translate(-50%, -50%);
 `)]),p(`slider-marks`,[p(`slider-mark`,`
 transform: translateY(calc(-50% + var(--n-dot-height) / 2));
 `)]),p(`slider-dots`,[p(`slider-dot`,`
 transform: translateX(-50%) translateY(0);
 `)])])]),m(`vertical`,`
 box-sizing: content-box;
 padding: 0 calc((var(--n-handle-size) - var(--n-rail-height)) / 2);
 width: var(--n-rail-width-vertical);
 height: 100%;
 `,[p(`slider-handles`,`
 top: calc(var(--n-handle-size) / 2);
 right: 0;
 bottom: calc(var(--n-handle-size) / 2);
 left: 0;
 `,[p(`slider-handle-wrapper`,`
 top: unset;
 left: 50%;
 transform: translate(-50%, 50%);
 `)]),p(`slider-rail`,`
 height: 100%;
 `,[y(`fill`,`
 top: unset;
 right: 0;
 bottom: unset;
 left: 0;
 `)]),m(`with-mark`,`
 width: var(--n-rail-width-vertical);
 margin: 0 32px 0 8px;
 `),p(`slider-marks`,`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 22px;
 font-size: var(--n-mark-font-size);
 `,[p(`slider-mark`,`
 transform: translateY(50%);
 white-space: nowrap;
 `)]),p(`slider-dots`,`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 50%;
 `,[p(`slider-dot`,`
 transform: translateX(-50%) translateY(50%);
 `)])]),m(`disabled`,`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `,[p(`slider-handle`,`
 cursor: not-allowed;
 `)]),m(`with-mark`,`
 width: 100%;
 margin: 8px 0 32px 0;
 `),v(`&:hover`,[p(`slider-rail`,{backgroundColor:`var(--n-rail-color-hover)`},[y(`fill`,{backgroundColor:`var(--n-fill-color-hover)`})]),p(`slider-handle`,{boxShadow:`var(--n-handle-box-shadow-hover)`})]),m(`active`,[p(`slider-rail`,{backgroundColor:`var(--n-rail-color-hover)`},[y(`fill`,{backgroundColor:`var(--n-fill-color-hover)`})]),p(`slider-handle`,{boxShadow:`var(--n-handle-box-shadow-hover)`})]),p(`slider-marks`,`
 position: absolute;
 top: 18px;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[p(`slider-mark`,`
 position: absolute;
 transform: translateX(-50%);
 white-space: nowrap;
 `)]),p(`slider-rail`,`
 width: 100%;
 position: relative;
 height: var(--n-rail-height);
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 border-radius: calc(var(--n-rail-height) / 2);
 `,[y(`fill`,`
 position: absolute;
 top: 0;
 bottom: 0;
 border-radius: calc(var(--n-rail-height) / 2);
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-fill-color);
 `)]),p(`slider-handles`,`
 position: absolute;
 top: 0;
 right: calc(var(--n-handle-size) / 2);
 bottom: 0;
 left: calc(var(--n-handle-size) / 2);
 `,[p(`slider-handle-wrapper`,`
 outline: none;
 position: absolute;
 top: 50%;
 transform: translate(-50%, -50%);
 cursor: pointer;
 display: flex;
 `,[p(`slider-handle`,`
 height: var(--n-handle-size);
 width: var(--n-handle-size);
 border-radius: 50%;
 overflow: hidden;
 transition: box-shadow .2s var(--n-bezier), background-color .3s var(--n-bezier);
 background-color: var(--n-handle-color);
 box-shadow: var(--n-handle-box-shadow);
 `,[v(`&:hover`,`
 box-shadow: var(--n-handle-box-shadow-hover);
 `)]),v(`&:focus`,[p(`slider-handle`,`
 box-shadow: var(--n-handle-box-shadow-focus);
 `,[v(`&:hover`,`
 box-shadow: var(--n-handle-box-shadow-active);
 `)])])])]),p(`slider-dots`,`
 position: absolute;
 top: 50%;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[m(`transition-disabled`,[p(`slider-dot`,`transition: none;`)]),p(`slider-dot`,`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 transform: translate(-50%, -50%);
 height: var(--n-dot-height);
 width: var(--n-dot-width);
 border-radius: var(--n-dot-border-radius);
 overflow: hidden;
 box-sizing: border-box;
 border: var(--n-dot-border);
 background-color: var(--n-dot-color);
 `,[m(`active`,`border: var(--n-dot-border-active);`)])])]),p(`slider-handle-indicator`,`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[M()]),p(`slider-handle-indicator`,`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[m(`top`,`
 margin-bottom: 12px;
 `),m(`right`,`
 margin-left: 12px;
 `),m(`bottom`,`
 margin-top: 12px;
 `),m(`left`,`
 margin-right: 12px;
 `),M()]),g(p(`slider`,[p(`slider-dot`,`background-color: var(--n-dot-color-modal);`)])),h(p(`slider`,[p(`slider-dot`,`background-color: var(--n-dot-color-popover);`)]))]);n();function ie(e){return window.TouchEvent&&e instanceof window.TouchEvent}function F(){let e=new Map;return a(()=>{e.clear()}),[e,t=>n=>{e.set(t,n)}]}n(),u(),o();var ae=0,I=e({name:`Slider`,props:Object.assign(Object.assign({},_.props),{to:T.propTo,defaultValue:{type:[Number,Array],default:0},marks:Object,disabled:{type:Boolean,default:void 0},formatTooltip:Function,keyboard:{type:Boolean,default:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:[Number,String],default:1},range:Boolean,value:[Number,Array],placement:String,showTooltip:{type:Boolean,default:void 0},tooltip:{type:Boolean,default:!0},vertical:Boolean,reverse:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onDragstart:[Function],onDragend:[Function]}),slots:Object,setup(e){let{mergedClsPrefixRef:n,namespaceRef:i,inlineThemeDisabled:a}=ee(e),o=_(`Slider`,`-slider`,re,ne,e,n),c=d(null),[u,p]=F(),[m,h]=F(),g=d(new Set),v=te(e),{mergedDisabledRef:y}=v,b=s(()=>{let{step:t}=e;if(Number(t)<=0||t===`mark`)return 0;let n=t.toString(),r=0;return n.includes(`.`)&&(r=n.length-n.indexOf(`.`)-1),r}),E=d(e.defaultValue),D=C(t(e,`value`),E),O=s(()=>{let{value:t}=D;return(e.range?t:[t]).map(K)}),A=s(()=>O.value.length>2),M=s(()=>e.placement===void 0?e.vertical?`right`:`top`:e.placement),N=s(()=>{let{marks:t}=e;return t?Object.keys(t).map(Number.parseFloat):null}),P=d(-1),I=d(-1),L=d(-1),R=d(!1),z=d(!1),B=s(()=>{let{vertical:t,reverse:n}=e;return t?n?`top`:`bottom`:n?`right`:`left`}),oe=s(()=>{if(A.value)return;let t=O.value,n=q(e.range?Math.min(...t):e.min),r=q(e.range?Math.max(...t):t[0]),{value:i}=B;return e.vertical?{[i]:`${n}%`,height:`${r-n}%`}:{[i]:`${n}%`,width:`${r-n}%`}}),se=s(()=>{let t=[],{marks:n}=e;if(n){let r=O.value.slice();r.sort((e,t)=>e-t);let{value:i}=B,{value:a}=A,{range:o}=e,s=a?()=>!1:e=>o?e>=r[0]&&e<=r[r.length-1]:e<=r[0];for(let e of Object.keys(n)){let r=Number(e);t.push({active:s(r),key:r,label:n[e],style:{[i]:`${q(r)}%`}})}}return t});function ce(e,t){let n=q(e),{value:r}=B;return{[r]:`${n}%`,zIndex:+(t===P.value)}}function V(t){return e.showTooltip||L.value===t||P.value===t&&R.value}function le(e){return R.value?!(P.value===e&&I.value===e):!0}function ue(e){var t;~e&&(P.value=e,(t=u.get(e))==null||t.focus())}function de(){m.forEach((e,t)=>{V(t)&&e.syncPosition()})}function H(t){let{"onUpdate:value":n,onUpdateValue:r}=e,{nTriggerFormInput:i,nTriggerFormChange:a}=v;r&&k(r,t),n&&k(n,t),E.value=t,i(),a()}function U(t){let{range:n}=e;if(n){if(Array.isArray(t)){let{value:e}=O;t.join()!==e.join()&&H(t)}}else Array.isArray(t)||O.value[0]!==t&&H(t)}function W(t,n){if(e.range){let e=O.value.slice();e.splice(n,1,t),U(e)}else U(t)}function G(t,n,r){let i=r!==void 0;r||=t-n>0?1:-1;let a=N.value||[],{step:o}=e;if(o===`mark`){let e=J(t,a.concat(n),i?r:void 0);return e?e.value:n}if(o<=0)return n;let{value:s}=b,c;if(i){let e=Number((n/o).toFixed(s)),t=Math.floor(e),i=e>t?t:t-1,l=e<t?t:t+1;c=J(n,[Number((i*o).toFixed(s)),Number((l*o).toFixed(s)),...a],r)}else{let e=pe(t);c=J(t,[...a,e])}return c?K(c.value):n}function K(t){return Math.min(e.max,Math.max(e.min,t))}function q(t){let{max:n,min:r}=e;return(t-r)/(n-r)*100}function fe(t){let{max:n,min:r}=e;return r+(n-r)*t}function pe(t){let{step:n,min:r}=e;if(Number(n)<=0||n===`mark`)return t;let i=Math.round((t-r)/n)*n+r;return Number(i.toFixed(b.value))}function J(e,t=N.value,n){if(!t?.length)return null;let r=null,i=-1;for(;++i<t.length;){let a=t[i]-e,o=Math.abs(a);(n===void 0||a*n>0)&&(r===null||o<r.distance)&&(r={index:i,distance:o,value:t[i]})}return r}function Y(t){let n=c.value;if(!n)return;let r=ie(t)?t.touches[0]:t,i=n.getBoundingClientRect(),a;return a=e.vertical?(i.bottom-r.clientY)/i.height:(r.clientX-i.left)/i.width,e.reverse&&(a=1-a),fe(a)}function me(t){if(y.value||!e.keyboard)return;let{vertical:n,reverse:r}=e;switch(t.key){case`ArrowUp`:t.preventDefault(),X(n&&r?-1:1);break;case`ArrowRight`:t.preventDefault(),X(!n&&r?-1:1);break;case`ArrowDown`:t.preventDefault(),X(n&&r?1:-1);break;case`ArrowLeft`:t.preventDefault(),X(!n&&r?1:-1);break}}function X(t){let n=P.value;if(n===-1)return;let{step:r}=e,i=O.value[n];W(G(Number(r)<=0||r===`mark`?i:i+r*t,i,t>0?1:-1),n)}function he(t){if(y.value||!ie(t)&&t.button!==ae)return;let n=Y(t);if(n===void 0)return;let r=O.value.slice(),i=e.range?J(n,r)?.index??-1:0;i!==-1&&(t.preventDefault(),ue(i),ge(),W(G(n,O.value[i]),i))}function ge(){R.value||(R.value=!0,e.onDragstart&&k(e.onDragstart),x(`touchend`,document,$),x(`mouseup`,document,$),x(`touchmove`,document,Q),x(`mousemove`,document,Q))}function Z(){R.value&&(R.value=!1,e.onDragend&&k(e.onDragend),S(`touchend`,document,$),S(`mouseup`,document,$),S(`touchmove`,document,Q),S(`mousemove`,document,Q))}function Q(e){let{value:t}=P;if(!R.value||t===-1){Z();return}let n=Y(e);n!==void 0&&W(G(n,O.value[t]),t)}function $(){Z()}function _e(e){P.value=e,y.value||(L.value=e)}function ve(e){P.value===e&&(P.value=-1,Z()),L.value===e&&(L.value=-1)}function ye(e){L.value=e}function be(e){L.value===e&&(L.value=-1)}l(P,(e,t)=>void f(()=>I.value=t)),l(D,()=>{if(e.marks){if(z.value)return;z.value=!0,f(()=>{z.value=!1})}f(de)}),r(()=>{Z()});let xe=s(()=>{let{self:{markFontSize:e,railColor:t,railColorHover:n,fillColor:r,fillColorHover:i,handleColor:a,opacityDisabled:s,dotColor:c,dotColorModal:l,handleBoxShadow:u,handleBoxShadowHover:d,handleBoxShadowActive:f,handleBoxShadowFocus:p,dotBorder:m,dotBoxShadow:h,railHeight:g,railWidthVertical:_,handleSize:v,dotHeight:y,dotWidth:b,dotBorderRadius:x,fontSize:S,dotBorderActive:C,dotColorPopover:w},common:{cubicBezierEaseInOut:T}}=o.value;return{"--n-bezier":T,"--n-dot-border":m,"--n-dot-border-active":C,"--n-dot-border-radius":x,"--n-dot-box-shadow":h,"--n-dot-color":c,"--n-dot-color-modal":l,"--n-dot-color-popover":w,"--n-dot-height":y,"--n-dot-width":b,"--n-fill-color":r,"--n-fill-color-hover":i,"--n-font-size":S,"--n-handle-box-shadow":u,"--n-handle-box-shadow-active":f,"--n-handle-box-shadow-focus":p,"--n-handle-box-shadow-hover":d,"--n-handle-color":a,"--n-handle-size":v,"--n-opacity-disabled":s,"--n-rail-color":t,"--n-rail-color-hover":n,"--n-rail-height":g,"--n-rail-width-vertical":_,"--n-mark-font-size":e}}),Se=a?j(`slider`,void 0,xe,e):void 0,Ce=s(()=>{let{self:{fontSize:e,indicatorColor:t,indicatorBoxShadow:n,indicatorTextColor:r,indicatorBorderRadius:i}}=o.value;return{"--n-font-size":e,"--n-indicator-border-radius":i,"--n-indicator-box-shadow":n,"--n-indicator-color":t,"--n-indicator-text-color":r}}),we=a?j(`slider-indicator`,void 0,Ce,e):void 0;return{mergedClsPrefix:n,namespace:i,uncontrolledValue:E,mergedValue:D,mergedDisabled:y,mergedPlacement:M,isMounted:w(),adjustedTo:T(e),dotTransitionDisabled:z,markInfos:se,isShowTooltip:V,shouldKeepTooltipTransition:le,handleRailRef:c,setHandleRefs:p,setFollowerRefs:h,fillStyle:oe,getHandleStyle:ce,activeIndex:P,arrifiedValues:O,followerEnabledIndexSet:g,handleRailMouseDown:he,handleHandleFocus:_e,handleHandleBlur:ve,handleHandleMouseEnter:ye,handleHandleMouseLeave:be,handleRailKeyDown:me,indicatorCssVars:a?void 0:Ce,indicatorThemeClass:we?.themeClass,indicatorOnRender:we?.onRender,cssVars:a?void 0:xe,themeClass:Se?.themeClass,onRender:Se?.onRender}},render(){var e;let{mergedClsPrefix:t,themeClass:n,formatTooltip:r}=this;return(e=this.onRender)==null||e.call(this),i(`div`,{class:[`${t}-slider`,n,{[`${t}-slider--disabled`]:this.mergedDisabled,[`${t}-slider--active`]:this.activeIndex!==-1,[`${t}-slider--with-mark`]:this.marks,[`${t}-slider--vertical`]:this.vertical,[`${t}-slider--reverse`]:this.reverse}],style:this.cssVars,onKeydown:this.handleRailKeyDown,onMousedown:this.handleRailMouseDown,onTouchstart:this.handleRailMouseDown},i(`div`,{class:`${t}-slider-rail`},i(`div`,{class:`${t}-slider-rail__fill`,style:this.fillStyle}),this.marks?i(`div`,{class:[`${t}-slider-dots`,this.dotTransitionDisabled&&`${t}-slider-dots--transition-disabled`]},this.markInfos.map(e=>i(`div`,{key:e.key,class:[`${t}-slider-dot`,{[`${t}-slider-dot--active`]:e.active}],style:e.style}))):null,i(`div`,{ref:`handleRailRef`,class:`${t}-slider-handles`},this.arrifiedValues.map((e,n)=>{let a=this.isShowTooltip(n);return i(D,null,{default:()=>[i(E,null,{default:()=>i(`div`,{ref:this.setHandleRefs(n),class:`${t}-slider-handle-wrapper`,tabindex:this.mergedDisabled?-1:0,role:`slider`,"aria-valuenow":e,"aria-valuemin":this.min,"aria-valuemax":this.max,"aria-orientation":this.vertical?`vertical`:`horizontal`,"aria-disabled":this.disabled,style:this.getHandleStyle(e,n),onFocus:()=>{this.handleHandleFocus(n)},onBlur:()=>{this.handleHandleBlur(n)},onMouseenter:()=>{this.handleHandleMouseEnter(n)},onMouseleave:()=>{this.handleHandleMouseLeave(n)}},A(this.$slots.thumb,()=>[i(`div`,{class:`${t}-slider-handle`})]))}),this.tooltip&&i(O,{ref:this.setFollowerRefs(n),show:a,to:this.adjustedTo,enabled:this.showTooltip&&!this.range||this.followerEnabledIndexSet.has(n),teleportDisabled:this.adjustedTo===T.tdkey,placement:this.mergedPlacement,containerClass:this.namespace},{default:()=>i(c,{name:`fade-in-scale-up-transition`,appear:this.isMounted,css:this.shouldKeepTooltipTransition(n),onEnter:()=>{this.followerEnabledIndexSet.add(n)},onAfterLeave:()=>{this.followerEnabledIndexSet.delete(n)}},{default:()=>{var n;return a?((n=this.indicatorOnRender)==null||n.call(this),i(`div`,{class:[`${t}-slider-handle-indicator`,this.indicatorThemeClass,`${t}-slider-handle-indicator--${this.mergedPlacement}`],style:this.indicatorCssVars},typeof r==`function`?r(e):e)):null}})})]})})),this.marks?i(`div`,{class:`${t}-slider-marks`},this.markInfos.map(e=>i(`div`,{key:e.key,class:`${t}-slider-mark`,style:e.style},typeof e.label==`function`?e.label():e.label))):null))}});export{I as t};