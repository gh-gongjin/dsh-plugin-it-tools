import{A as e,Ct as t,F as n,H as r,I as i,J as a,N as o,R as s,a as c,b as l,d as u,h as d,n as f,nt as p,ot as m,rt as h,ut as g,v as _,vt as v,y}from"./vue.runtime.esm-bundler-DZZTqpJU.js";import{c as b,d as x,f as S,l as C,n as w,s as T,t as E,u as D}from"./use-theme--pjWdM-N.js";import{t as ee}from"./use-rtl-DxDqUyON.js";import{a as O,n as k}from"./Scrollbar-CzXWYKLa.js";import{t as A}from"./light-CLwlD-S_.js";import{n as j,t as M}from"./delegate-CJ0pWS92.js";import{t as N}from"./use-memo-Y5dSqWt3.js";import{t as te}from"./use-merged-state-B5grpmgQ.js";import{t as P}from"./use-is-mounted-DNrqd8l2.js";import{t as F}from"./use-compitable-BpIj3OKc.js";import{i as I,n as L,r as R,t as z}from"./Follower-eD66E3hR.js";import{a as ne,l as re,n as B,o as ie}from"./src-DiNXGZxm.js";import{t as ae}from"./clickoutside-EYrQQIK3.js";import{i as oe,n as se,t as ce}from"./keep-DePlrfDw.js";import{t as V}from"./format-length-D2OO_crk.js";import{t as H}from"./call-fCmD0dxi.js";import{a as U,n as W}from"./resolve-slot-CNYZEkGJ.js";import{t as le}from"./use-config-B_Ca_QT7.js";import{t as ue}from"./use-css-vars-class-LmlPa6Qd.js";import{t as de}from"./map-Dzm-gGp9.js";import{t as fe}from"./light-DA38hYdJ.js";var G=`@@mmoContext`,pe={mounted(e,{value:t}){e[G]={handler:void 0},typeof t==`function`&&(e[G].handler=t,j(`mousemoveoutside`,e,t))},updated(e,{value:t}){let n=e[G];typeof t==`function`?n.handler?n.handler!==t&&(M(`mousemoveoutside`,e,n.handler),n.handler=t,j(`mousemoveoutside`,e,t)):(e[G].handler=t,j(`mousemoveoutside`,e,t)):n.handler&&=(M(`mousemoveoutside`,e,n.handler),void 0)},unmounted(e){let{handler:t}=e[G];t&&M(`mousemoveoutside`,e,t),e[G].handler=void 0}},K;function me(){return K===void 0&&(K=navigator.userAgent.includes(`Node.js`)||navigator.userAgent.includes(`jsdom`)),K}var he={space:`6px`,spaceArrow:`10px`,arrowOffset:`10px`,arrowOffsetVertical:`10px`,arrowHeight:`6px`,padding:`8px 14px`};function q(e){let{boxShadow2:t,popoverColor:n,textColor2:r,borderRadius:i,fontSize:a,dividerColor:o}=e;return Object.assign(Object.assign({},he),{fontSize:a,borderRadius:i,color:n,dividerColor:o,textColor:r,boxShadow:t})}var J=E({name:`Popover`,common:A,peers:{Scrollbar:fe},self:q}),Y={top:`bottom`,bottom:`top`,left:`right`,right:`left`},X=`var(--n-arrow-height) * 1.414`,ge=T([b(`popover`,`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `,[T(`>`,[b(`scrollbar`,`
 height: inherit;
 max-height: inherit;
 `)]),S(`raw`,`
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `,[S(`scrollable`,[S(`show-header-or-footer`,`padding: var(--n-padding);`)])]),D(`header`,`
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),D(`footer`,`
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),x(`scrollable, show-header-or-footer`,[D(`content`,`
 padding: var(--n-padding);
 `)])]),b(`popover-shared`,`
 transform-origin: inherit;
 `,[b(`popover-arrow-wrapper`,`
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `,[b(`popover-arrow`,`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${X});
 height: calc(${X});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]),T(`&.popover-transition-enter-from, &.popover-transition-leave-to`,`
 opacity: 0;
 transform: scale(.85);
 `),T(`&.popover-transition-enter-to, &.popover-transition-leave-from`,`
 transform: scale(1);
 opacity: 1;
 `),T(`&.popover-transition-enter-active`,`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `),T(`&.popover-transition-leave-active`,`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)]),Q(`top-start`,`
 top: calc(${X} / -2);
 left: calc(${Z(`top-start`)} - var(--v-offset-left));
 `),Q(`top`,`
 top: calc(${X} / -2);
 transform: translateX(calc(${X} / -2)) rotate(45deg);
 left: 50%;
 `),Q(`top-end`,`
 top: calc(${X} / -2);
 right: calc(${Z(`top-end`)} + var(--v-offset-left));
 `),Q(`bottom-start`,`
 bottom: calc(${X} / -2);
 left: calc(${Z(`bottom-start`)} - var(--v-offset-left));
 `),Q(`bottom`,`
 bottom: calc(${X} / -2);
 transform: translateX(calc(${X} / -2)) rotate(45deg);
 left: 50%;
 `),Q(`bottom-end`,`
 bottom: calc(${X} / -2);
 right: calc(${Z(`bottom-end`)} + var(--v-offset-left));
 `),Q(`left-start`,`
 left: calc(${X} / -2);
 top: calc(${Z(`left-start`)} - var(--v-offset-top));
 `),Q(`left`,`
 left: calc(${X} / -2);
 transform: translateY(calc(${X} / -2)) rotate(45deg);
 top: 50%;
 `),Q(`left-end`,`
 left: calc(${X} / -2);
 bottom: calc(${Z(`left-end`)} + var(--v-offset-top));
 `),Q(`right-start`,`
 right: calc(${X} / -2);
 top: calc(${Z(`right-start`)} - var(--v-offset-top));
 `),Q(`right`,`
 right: calc(${X} / -2);
 transform: translateY(calc(${X} / -2)) rotate(45deg);
 top: 50%;
 `),Q(`right-end`,`
 right: calc(${X} / -2);
 bottom: calc(${Z(`right-end`)} + var(--v-offset-top));
 `),...de({top:[`right-start`,`left-start`],right:[`top-end`,`bottom-end`],bottom:[`right-end`,`left-end`],left:[`top-start`,`bottom-start`]},(e,t)=>{let n=[`right`,`left`].includes(t),r=n?`width`:`height`;return e.map(e=>{let i=e.split(`-`)[1]===`end`,a=`calc((${`var(--v-target-${r}, 0px)`} - ${X}) / 2)`,o=Z(e);return T(`[v-placement="${e}"] >`,[b(`popover-shared`,[x(`center-arrow`,[b(`popover-arrow`,`${t}: calc(max(${a}, ${o}) ${i?`+`:`-`} var(--v-offset-${n?`left`:`top`}));`)])])])})})]);function Z(e){return[`top`,`bottom`].includes(e.split(`-`)[0])?`var(--n-arrow-offset)`:`var(--n-arrow-offset-vertical)`}function Q(e,t){let n=e.split(`-`)[0],r=[`top`,`bottom`].includes(n)?`height: var(--n-space-arrow);`:`width: var(--n-space-arrow);`;return T(`[v-placement="${e}"] >`,[b(`popover-shared`,`
 margin-${Y[n]}: var(--n-space);
 `,[x(`show-arrow`,`
 margin-${Y[n]}: var(--n-space-arrow);
 `),x(`overlap`,`
 margin: 0;
 `),C(`popover-arrow-wrapper`,`
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${n}: 100%;
 ${Y[n]}: auto;
 ${r}
 `,[b(`popover-arrow`,t)])])])}n(),g(),c();var _e=Object.assign(Object.assign({},w.props),{to:I.propTo,show:Boolean,trigger:String,showArrow:Boolean,delay:Number,duration:Number,raw:Boolean,arrowPointToCenter:Boolean,arrowClass:String,arrowStyle:[String,Object],arrowWrapperClass:String,arrowWrapperStyle:[String,Object],displayDirective:String,x:Number,y:Number,flip:Boolean,overlap:Boolean,placement:String,width:[Number,String],keepAliveOnHover:Boolean,scrollable:Boolean,contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],footerClass:String,footerStyle:[Object,String],internalDeactivateImmediately:Boolean,animated:Boolean,onClickoutside:Function,internalTrapFocus:Boolean,internalOnAfterLeave:Function,minWidth:Number,maxWidth:Number});function $({arrowClass:e,arrowStyle:t,arrowWrapperClass:n,arrowWrapperStyle:r,clsPrefix:i}){return o(`div`,{key:`__popover-arrow__`,style:r,class:[`${i}-popover-arrow-wrapper`,n]},o(`div`,{class:[`${i}-popover-arrow`,e],style:t}))}var ve=e({name:`PopoverBody`,inheritAttrs:!1,props:_e,setup(e,{slots:n,attrs:c}){let{namespaceRef:f,mergedClsPrefixRef:g,inlineThemeDisabled:_,mergedRtlRef:y}=le(e),b=w(`Popover`,`-popover`,ge,J,e,g),x=ee(`Popover`,y,g),S=v(null),C=i(`NPopover`),T=v(null),E=v(e.show),D=v(!1);h(()=>{let{show:t}=e;t&&!me()&&!e.internalDeactivateImmediately&&(D.value=!0)});let A=l(()=>{let{trigger:t,onClickoutside:n}=e,r=[],{positionManuallyRef:{value:i}}=C;return i||(t===`click`&&!n&&r.push([ae,R,void 0,{capture:!0}]),t===`hover`&&r.push([pe,L])),n&&r.push([ae,R,void 0,{capture:!0}]),(e.displayDirective===`show`||e.animated&&D.value)&&r.push([u,e.show]),r}),j=l(()=>{let{common:{cubicBezierEaseInOut:e,cubicBezierEaseIn:t,cubicBezierEaseOut:n},self:{space:r,spaceArrow:i,padding:a,fontSize:o,textColor:s,dividerColor:c,color:l,boxShadow:u,borderRadius:d,arrowHeight:f,arrowOffset:p,arrowOffsetVertical:m}}=b.value;return{"--n-box-shadow":u,"--n-bezier":e,"--n-bezier-ease-in":t,"--n-bezier-ease-out":n,"--n-font-size":o,"--n-text-color":s,"--n-color":l,"--n-divider-color":c,"--n-border-radius":d,"--n-arrow-height":f,"--n-arrow-offset":p,"--n-arrow-offset-vertical":m,"--n-padding":a,"--n-space":r,"--n-space-arrow":i}}),M=l(()=>{let t=e.width===`trigger`?void 0:V(e.width),n=[];t&&n.push({width:t});let{maxWidth:r,minWidth:i}=e;return r&&n.push({maxWidth:V(r)}),i&&n.push({maxWidth:V(i)}),_||n.push(j.value),n}),N=_?ue(`popover`,void 0,j,e):void 0;C.setBodyInstance({syncPosition:te}),r(()=>{C.setBodyInstance(null)}),p(t(e,`show`),t=>{e.animated||(t?E.value=!0:E.value=!1)});function te(){var e;(e=S.value)==null||e.syncPosition()}function P(t){e.trigger===`hover`&&e.keepAliveOnHover&&e.show&&C.handleMouseEnter(t)}function F(t){e.trigger===`hover`&&e.keepAliveOnHover&&C.handleMouseLeave(t)}function L(t){e.trigger===`hover`&&!z().contains(O(t))&&C.handleMouseMoveOutside(t)}function R(t){(e.trigger===`click`&&!z().contains(O(t))||e.onClickoutside)&&C.handleClickOutside(t)}function z(){return C.getTriggerElement()}a(ne,T),a(re,null),a(ie,null);function B(){if(N?.onRender(),!(e.displayDirective===`show`||e.show||e.animated&&D.value))return null;let t,r=C.internalRenderBodyRef.value,{value:i}=g;if(r)t=r([`${i}-popover-shared`,x?.value&&`${i}-popover--rtl`,N?.themeClass.value,e.overlap&&`${i}-popover-shared--overlap`,e.showArrow&&`${i}-popover-shared--show-arrow`,e.arrowPointToCenter&&`${i}-popover-shared--center-arrow`],T,M.value,P,F);else{let{value:r}=C.extraClassRef,{internalTrapFocus:a}=e,l=!W(n.header)||!W(n.footer),u=()=>{let t=l?o(d,null,U(n.header,t=>t?o(`div`,{class:[`${i}-popover__header`,e.headerClass],style:e.headerStyle},t):null),U(n.default,t=>t?o(`div`,{class:[`${i}-popover__content`,e.contentClass],style:e.contentStyle},n):null),U(n.footer,t=>t?o(`div`,{class:[`${i}-popover__footer`,e.footerClass],style:e.footerStyle},t):null)):e.scrollable?n.default?.call(n):o(`div`,{class:[`${i}-popover__content`,e.contentClass],style:e.contentStyle},n);return[e.scrollable?o(k,{themeOverrides:b.value.peerOverrides.Scrollbar,theme:b.value.peers.Scrollbar,contentClass:l?void 0:`${i}-popover__content ${e.contentClass??``}`,contentStyle:l?void 0:e.contentStyle},{default:()=>t}):t,e.showArrow?$({arrowClass:e.arrowClass,arrowStyle:e.arrowStyle,arrowWrapperClass:e.arrowWrapperClass,arrowWrapperStyle:e.arrowWrapperStyle,clsPrefix:i}):null]};t=o(`div`,s({class:[`${i}-popover`,`${i}-popover-shared`,x?.value&&`${i}-popover--rtl`,N?.themeClass.value,r.map(e=>`${i}-${e}`),{[`${i}-popover--scrollable`]:e.scrollable,[`${i}-popover--show-header-or-footer`]:l,[`${i}-popover--raw`]:e.raw,[`${i}-popover-shared--overlap`]:e.overlap,[`${i}-popover-shared--show-arrow`]:e.showArrow,[`${i}-popover-shared--center-arrow`]:e.arrowPointToCenter}],ref:T,style:M.value,onKeydown:C.handleKeydown,onMouseenter:P,onMouseleave:F},c),a?o(oe,{active:e.show,autoFocus:!0},{default:u}):u())}return m(t,A.value)}return{displayed:D,namespace:f,isMounted:C.isMountedRef,zIndex:C.zIndexRef,followerRef:S,adjustedTo:I(e),followerEnabled:E,renderContentNode:B}},render(){return o(z,{ref:`followerRef`,zIndex:this.zIndex,show:this.show,enabled:this.followerEnabled,to:this.adjustedTo,x:this.x,y:this.y,flip:this.flip,placement:this.placement,containerClass:this.namespace,overlap:this.overlap,width:this.width===`trigger`?`target`:void 0,teleportDisabled:this.adjustedTo===I.tdkey},{default:()=>this.animated?o(f,{name:`popover-transition`,appear:this.isMounted,onEnter:()=>{this.followerEnabled=!0},onAfterLeave:()=>{var e;(e=this.internalOnAfterLeave)==null||e.call(this),this.followerEnabled=!1,this.displayed=!1}},{default:this.renderContentNode}):this.renderContentNode()})}});n(),g();var ye=Object.keys(_e),be={focus:[`onFocus`,`onBlur`],click:[`onClick`],hover:[`onMouseenter`,`onMouseleave`],manual:[],nested:[`onFocus`,`onBlur`,`onMouseenter`,`onMouseleave`,`onClick`]};function xe(e,t,n){be[t].forEach(t=>{e.props?e.props=Object.assign({},e.props):e.props={};let r=e.props[t],i=n[t];r?e.props[t]=(...e)=>{r(...e),i(...e)}:e.props[t]=i})}var Se={show:{type:Boolean,default:void 0},defaultShow:Boolean,showArrow:{type:Boolean,default:!0},trigger:{type:String,default:`hover`},delay:{type:Number,default:100},duration:{type:Number,default:100},raw:Boolean,placement:{type:String,default:`top`},x:Number,y:Number,arrowPointToCenter:Boolean,disabled:Boolean,getDisabled:Function,displayDirective:{type:String,default:`if`},arrowClass:String,arrowStyle:[String,Object],arrowWrapperClass:String,arrowWrapperStyle:[String,Object],flip:{type:Boolean,default:!0},animated:{type:Boolean,default:!0},width:{type:[Number,String],default:void 0},overlap:Boolean,keepAliveOnHover:{type:Boolean,default:!0},zIndex:Number,to:I.propTo,scrollable:Boolean,contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],footerClass:String,footerStyle:[Object,String],onClickoutside:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],internalDeactivateImmediately:Boolean,internalSyncTargetWithParent:Boolean,internalInheritedEventHandlers:{type:Array,default:()=>[]},internalTrapFocus:Boolean,internalExtraClass:{type:Array,default:()=>[]},onShow:[Function,Array],onHide:[Function,Array],arrow:{type:Boolean,default:void 0},minWidth:Number,maxWidth:Number},Ce=e({name:`Popover`,inheritAttrs:!1,props:Object.assign(Object.assign(Object.assign({},w.props),Se),{internalOnAfterLeave:Function,internalRenderBody:Function}),slots:Object,__popover__:!0,setup(e){let n=P(),r=v(null),i=l(()=>e.show),o=v(e.defaultShow),s=te(i,o),c=N(()=>e.disabled?!1:s.value),u=()=>{if(e.disabled)return!0;let{getDisabled:t}=e;return!!t?.()},d=()=>u()?!1:s.value,f=F(e,[`arrow`,`showArrow`]),p=l(()=>e.overlap?!1:f.value),m=null,g=v(null),_=v(null),y=N(()=>e.x!==void 0&&e.y!==void 0);function b(t){let{"onUpdate:show":n,onUpdateShow:r,onShow:i,onHide:a}=e;o.value=t,n&&H(n,t),r&&H(r,t),t&&i&&H(i,!0),t&&a&&H(a,!1)}function x(){m&&m.syncPosition()}function S(){let{value:e}=g;e&&(window.clearTimeout(e),g.value=null)}function C(){let{value:e}=_;e&&(window.clearTimeout(e),_.value=null)}function w(){let t=u();if(e.trigger===`focus`&&!t){if(d())return;b(!0)}}function T(){let t=u();if(e.trigger===`focus`&&!t){if(!d())return;b(!1)}}function E(){let t=u();if(e.trigger===`hover`&&!t){if(C(),g.value!==null||d())return;let t=()=>{b(!0),g.value=null},{delay:n}=e;n===0?t():g.value=window.setTimeout(t,n)}}function D(){let t=u();if(e.trigger===`hover`&&!t){if(S(),_.value!==null||!d())return;let t=()=>{b(!1),_.value=null},{duration:n}=e;n===0?t():_.value=window.setTimeout(t,n)}}function ee(){D()}function O(t){var n;d()&&(e.trigger===`click`&&(S(),C(),b(!1)),(n=e.onClickoutside)==null||n.call(e,t))}function k(){e.trigger===`click`&&!u()&&(S(),C(),b(!d()))}function A(t){e.internalTrapFocus&&t.key===`Escape`&&(S(),C(),b(!1))}function j(e){o.value=e}function M(){return r.value?.targetRef}function I(e){m=e}return a(`NPopover`,{getTriggerElement:M,handleKeydown:A,handleMouseEnter:E,handleMouseLeave:D,handleClickOutside:O,handleMouseMoveOutside:ee,setBodyInstance:I,positionManuallyRef:y,isMountedRef:n,zIndexRef:t(e,`zIndex`),extraClassRef:t(e,`internalExtraClass`),internalRenderBodyRef:t(e,`internalRenderBody`)}),h(()=>{s.value&&u()&&b(!1)}),{binderInstRef:r,positionManually:y,mergedShowConsideringDisabledProp:c,uncontrolledShow:o,mergedShowArrow:p,getMergedShow:d,setShow:j,handleClick:k,handleMouseEnter:E,handleMouseLeave:D,handleFocus:w,handleBlur:T,syncPosition:x}},render(){let{positionManually:e,$slots:t}=this,n,r=!1;if(!e&&(n=se(t,`trigger`),n)){n=y(n),n=n.type===_?o(`span`,[n]):n;let t={onClick:this.handleClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onFocus:this.handleFocus,onBlur:this.handleBlur};if(n.type?.__popover__)r=!0,n.props||={internalSyncTargetWithParent:!0,internalInheritedEventHandlers:[]},n.props.internalSyncTargetWithParent=!0,n.props.internalInheritedEventHandlers?n.props.internalInheritedEventHandlers=[t,...n.props.internalInheritedEventHandlers]:n.props.internalInheritedEventHandlers=[t];else{let{internalInheritedEventHandlers:r}=this,i=[t,...r];xe(n,r?`nested`:e?`manual`:this.trigger,{onBlur:e=>{i.forEach(t=>{t.onBlur(e)})},onFocus:e=>{i.forEach(t=>{t.onFocus(e)})},onClick:e=>{i.forEach(t=>{t.onClick(e)})},onMouseenter:e=>{i.forEach(t=>{t.onMouseenter(e)})},onMouseleave:e=>{i.forEach(t=>{t.onMouseleave(e)})}})}}return o(R,{ref:`binderInstRef`,syncTarget:!r,syncTargetWithParent:this.internalSyncTargetWithParent},{default:()=>{this.mergedShowConsideringDisabledProp;let t=this.getMergedShow();return[this.internalTrapFocus&&t?m(o(`div`,{style:{position:`fixed`,top:0,right:0,bottom:0,left:0}}),[[B,{enabled:t,zIndex:this.zIndex}]]):null,e?null:o(L,null,{default:()=>n}),o(ve,ce(this.$props,ye,Object.assign(Object.assign({},this.$attrs),{showArrow:this.mergedShowArrow,show:t})),{default:()=>{var e;return(e=this.$slots).default?.call(e)},header:()=>{var e;return(e=this.$slots).header?.call(e)},footer:()=>{var e;return(e=this.$slots).footer?.call(e)}})]}})}});export{q as a,J as i,Se as n,$ as r,Ce as t};