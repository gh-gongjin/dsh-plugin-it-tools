import{A as e,F as t,G as n,I as r,J as i,N as a,_ as o,a as s,b as c,gt as l,h as u,n as d,rt as f,ut as p,vt as m,z as h}from"./vue.runtime.esm-bundler-DZZTqpJU.js";import{c as g,d as _,n as v,p as y,s as b,t as x,u as S}from"./use-theme--pjWdM-N.js";import{t as C}from"./use-rtl-DxDqUyON.js";import{t as w}from"./Scrollbar-CzXWYKLa.js";import{r as T}from"./css-DE6X-JUA.js";import{t as E}from"./light-CLwlD-S_.js";import{t as D}from"./misc-DDs3MKLt.js";import{t as O}from"./create-injection-key-Dfvzj6n2.js";import{t as k}from"./keep-DePlrfDw.js";import{t as A}from"./keysOf-BNt7p-WY.js";import{t as j}from"./omit-C4pE9leG.js";import{t as M}from"./render-DCOaOdv0.js";import{t as N}from"./use-config-B_Ca_QT7.js";import{t as P}from"./use-css-vars-class-LmlPa6Qd.js";import{n as F}from"./replaceable-DmEc4phL.js";import{t as I}from"./Close-DIRcAW63.js";import{i as L,n as R,r as z,t as B}from"./Warning-B-LSZvR-.js";import{t as V}from"./light-DA38hYdJ.js";var H={closeMargin:`16px 12px`,closeSize:`20px`,closeIconSize:`16px`,width:`365px`,padding:`16px`,titleFontSize:`16px`,metaFontSize:`12px`,descriptionFontSize:`12px`};function U(e){let{textColor2:t,successColor:n,infoColor:r,warningColor:i,errorColor:a,popoverColor:o,closeIconColor:s,closeIconColorHover:c,closeIconColorPressed:l,closeColorHover:u,closeColorPressed:d,textColor1:f,textColor3:p,borderRadius:m,fontWeightStrong:h,boxShadow2:g,lineHeight:_,fontSize:v}=e;return Object.assign(Object.assign({},H),{borderRadius:m,lineHeight:_,fontSize:v,headerFontWeight:h,iconColor:t,iconColorSuccess:n,iconColorInfo:r,iconColorWarning:i,iconColorError:a,color:o,textColor:t,closeIconColor:s,closeIconColorHover:c,closeIconColorPressed:l,closeBorderRadius:m,closeColorHover:u,closeColorPressed:d,headerTextColor:f,descriptionTextColor:p,actionTextColor:t,boxShadow:g})}var W=x({name:`Notification`,common:E,peers:{Scrollbar:V},self:U}),G=O(`n-notification-provider`);t(),p();var K=e({name:`NotificationContainer`,props:{scrollable:{type:Boolean,required:!0},placement:{type:String,required:!0}},setup(){let{mergedThemeRef:e,mergedClsPrefixRef:t,wipTransitionCountRef:n}=r(G),i=m(null);return f(()=>{var e,t;n.value>0?(e=i?.value)==null||e.classList.add(`transitioning`):(t=i?.value)==null||t.classList.remove(`transitioning`)}),{selfRef:i,mergedTheme:e,mergedClsPrefix:t,transitioning:n}},render(){let{$slots:e,scrollable:t,mergedClsPrefix:n,mergedTheme:r,placement:i}=this;return a(`div`,{ref:`selfRef`,class:[`${n}-notification-container`,t&&`${n}-notification-container--scrollable`,`${n}-notification-container--${i}`]},t?a(w,{theme:r.peers.Scrollbar,themeOverrides:r.peerOverrides.Scrollbar,contentStyle:{overflow:`hidden`}},e):e)}});t();var q={info:()=>a(z,null),success:()=>a(R,null),warning:()=>a(B,null),error:()=>a(L,null),default:()=>null},J={closable:{type:Boolean,default:!0},type:{type:String,default:`default`},avatar:Function,title:[String,Function],description:[String,Function],content:[String,Function],meta:[String,Function],action:[String,Function],onClose:{type:Function,required:!0},keepAliveOnHover:Boolean,onMouseenter:Function,onMouseleave:Function},Y=A(J),X=e({name:`Notification`,props:J,setup(e){let{mergedClsPrefixRef:t,mergedThemeRef:n,props:i}=r(G),{inlineThemeDisabled:a,mergedRtlRef:o}=N(),s=C(`Notification`,o,t),l=c(()=>{let{type:t}=e,{self:{color:r,textColor:i,closeIconColor:a,closeIconColorHover:o,closeIconColorPressed:s,headerTextColor:c,descriptionTextColor:l,actionTextColor:u,borderRadius:d,headerFontWeight:f,boxShadow:p,lineHeight:m,fontSize:h,closeMargin:g,closeSize:_,width:v,padding:b,closeIconSize:x,closeBorderRadius:S,closeColorHover:C,closeColorPressed:w,titleFontSize:E,metaFontSize:D,descriptionFontSize:O,[y(`iconColor`,t)]:k},common:{cubicBezierEaseOut:A,cubicBezierEaseIn:j,cubicBezierEaseInOut:M}}=n.value,{left:N,right:P,top:F,bottom:I}=T(b);return{"--n-color":r,"--n-font-size":h,"--n-text-color":i,"--n-description-text-color":l,"--n-action-text-color":u,"--n-title-text-color":c,"--n-title-font-weight":f,"--n-bezier":M,"--n-bezier-ease-out":A,"--n-bezier-ease-in":j,"--n-border-radius":d,"--n-box-shadow":p,"--n-close-border-radius":S,"--n-close-color-hover":C,"--n-close-color-pressed":w,"--n-close-icon-color":a,"--n-close-icon-color-hover":o,"--n-close-icon-color-pressed":s,"--n-line-height":m,"--n-icon-color":k,"--n-close-margin":g,"--n-close-size":_,"--n-close-icon-size":x,"--n-width":v,"--n-padding-left":N,"--n-padding-right":P,"--n-padding-top":F,"--n-padding-bottom":I,"--n-title-font-size":E,"--n-meta-font-size":D,"--n-description-font-size":O}}),u=a?P(`notification`,c(()=>e.type[0]),l,i):void 0;return{mergedClsPrefix:t,showAvatar:c(()=>e.avatar||e.type!=="default"),handleCloseClick(){e.onClose()},rtlEnabled:s,cssVars:a?void 0:l,themeClass:u?.themeClass,onRender:u?.onRender}},render(){var e;let{mergedClsPrefix:t}=this;return(e=this.onRender)==null||e.call(this),a(`div`,{class:[`${t}-notification-wrapper`,this.themeClass],onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave,style:this.cssVars},a(`div`,{class:[`${t}-notification`,this.rtlEnabled&&`${t}-notification--rtl`,this.themeClass,{[`${t}-notification--closable`]:this.closable,[`${t}-notification--show-avatar`]:this.showAvatar}],style:this.cssVars},this.showAvatar?a(`div`,{class:`${t}-notification__avatar`},this.avatar?M(this.avatar):this.type==="default"?null:a(F,{clsPrefix:t},{default:()=>q[this.type]()})):null,this.closable?a(I,{clsPrefix:t,class:`${t}-notification__close`,onClick:this.handleCloseClick}):null,a(`div`,{ref:`bodyRef`,class:`${t}-notification-main`},this.title?a(`div`,{class:`${t}-notification-main__header`},M(this.title)):null,this.description?a(`div`,{class:`${t}-notification-main__description`},M(this.description)):null,this.content?a(`pre`,{class:`${t}-notification-main__content`},M(this.content)):null,this.meta||this.action?a(`div`,{class:`${t}-notification-main-footer`},this.meta?a(`div`,{class:`${t}-notification-main-footer__meta`},M(this.meta)):null,this.action?a(`div`,{class:`${t}-notification-main-footer__action`},M(this.action)):null):null)))}});t(),p(),s();var Z=Object.assign(Object.assign({},J),{duration:Number,onClose:Function,onLeave:Function,onAfterEnter:Function,onAfterLeave:Function,onHide:Function,onAfterShow:Function,onAfterHide:Function}),ee=e({name:`NotificationEnvironment`,props:Object.assign(Object.assign({},Z),{internalKey:{type:String,required:!0},onInternalAfterLeave:{type:Function,required:!0}}),setup(e){let{wipTransitionCountRef:t}=r(G),i=m(!0),a=null;function o(){i.value=!1,a&&window.clearTimeout(a)}function s(e){t.value++,h(()=>{e.style.height=`${e.offsetHeight}px`,e.style.maxHeight=`0`,e.style.transition=`none`,e.offsetHeight,e.style.transition=``,e.style.maxHeight=e.style.height})}function c(n){t.value--,n.style.height=``,n.style.maxHeight=``;let{onAfterEnter:r,onAfterShow:i}=e;r&&r(),i&&i()}function l(e){t.value++,e.style.maxHeight=`${e.offsetHeight}px`,e.style.height=`${e.offsetHeight}px`,e.offsetHeight}function u(t){let{onHide:n}=e;n&&n(),t.style.maxHeight=`0`,t.offsetHeight}function d(){t.value--;let{onAfterLeave:n,onInternalAfterLeave:r,onAfterHide:i,internalKey:a}=e;n&&n(),r(a),i&&i()}function f(){let{duration:t}=e;t&&(a=window.setTimeout(o,t))}function p(e){e.currentTarget===e.target&&a!==null&&(window.clearTimeout(a),a=null)}function g(e){e.currentTarget===e.target&&f()}function _(){let{onClose:t}=e;t?Promise.resolve(t()).then(e=>{e!==!1&&o()}):o()}return n(()=>{e.duration&&(a=window.setTimeout(o,e.duration))}),{show:i,hide:o,handleClose:_,handleAfterLeave:d,handleLeave:u,handleBeforeLeave:l,handleAfterEnter:c,handleBeforeEnter:s,handleMouseenter:p,handleMouseleave:g}},render(){return a(d,{name:`notification-transition`,appear:!0,onBeforeEnter:this.handleBeforeEnter,onAfterEnter:this.handleAfterEnter,onBeforeLeave:this.handleBeforeLeave,onLeave:this.handleLeave,onAfterLeave:this.handleAfterLeave},{default:()=>this.show?a(X,Object.assign({},k(this.$props,Y),{onClose:this.handleClose,onMouseenter:this.duration&&this.keepAliveOnHover?this.handleMouseenter:void 0,onMouseleave:this.duration&&this.keepAliveOnHover?this.handleMouseleave:void 0})):null})}}),te=b([g(`notification-container`,`
 z-index: 4000;
 position: fixed;
 overflow: visible;
 display: flex;
 flex-direction: column;
 align-items: flex-end;
 `,[b(`>`,[g(`scrollbar`,`
 width: initial;
 overflow: visible;
 height: -moz-fit-content !important;
 height: fit-content !important;
 max-height: 100vh !important;
 `,[b(`>`,[g(`scrollbar-container`,`
 height: -moz-fit-content !important;
 height: fit-content !important;
 max-height: 100vh !important;
 `,[g(`scrollbar-content`,`
 padding-top: 12px;
 padding-bottom: 33px;
 `)])])])]),_(`top, top-right, top-left`,`
 top: 12px;
 `,[b(`&.transitioning >`,[g(`scrollbar`,[b(`>`,[g(`scrollbar-container`,`
 min-height: 100vh !important;
 `)])])])]),_(`bottom, bottom-right, bottom-left`,`
 bottom: 12px;
 `,[b(`>`,[g(`scrollbar`,[b(`>`,[g(`scrollbar-container`,[g(`scrollbar-content`,`
 padding-bottom: 12px;
 `)])])])]),g(`notification-wrapper`,`
 display: flex;
 align-items: flex-end;
 margin-bottom: 0;
 margin-top: 12px;
 `)]),_(`top, bottom`,`
 left: 50%;
 transform: translateX(-50%);
 `,[g(`notification-wrapper`,[b(`&.notification-transition-enter-from, &.notification-transition-leave-to`,`
 transform: scale(0.85);
 `),b(`&.notification-transition-leave-from, &.notification-transition-enter-to`,`
 transform: scale(1);
 `)])]),_(`top`,[g(`notification-wrapper`,`
 transform-origin: top center;
 `)]),_(`bottom`,[g(`notification-wrapper`,`
 transform-origin: bottom center;
 `)]),_(`top-right, bottom-right`,[g(`notification`,`
 margin-left: 28px;
 margin-right: 16px;
 `)]),_(`top-left, bottom-left`,[g(`notification`,`
 margin-left: 16px;
 margin-right: 28px;
 `)]),_(`top-right`,`
 right: 0;
 `,[Q(`top-right`)]),_(`top-left`,`
 left: 0;
 `,[Q(`top-left`)]),_(`bottom-right`,`
 right: 0;
 `,[Q(`bottom-right`)]),_(`bottom-left`,`
 left: 0;
 `,[Q(`bottom-left`)]),_(`scrollable`,[_(`top-right`,`
 top: 0;
 `),_(`top-left`,`
 top: 0;
 `),_(`bottom-right`,`
 bottom: 0;
 `),_(`bottom-left`,`
 bottom: 0;
 `)]),g(`notification-wrapper`,`
 margin-bottom: 12px;
 `,[b(`&.notification-transition-enter-from, &.notification-transition-leave-to`,`
 opacity: 0;
 margin-top: 0 !important;
 margin-bottom: 0 !important;
 `),b(`&.notification-transition-leave-from, &.notification-transition-enter-to`,`
 opacity: 1;
 `),b(`&.notification-transition-leave-active`,`
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 transform .3s var(--n-bezier-ease-in),
 max-height .3s var(--n-bezier),
 margin-top .3s linear,
 margin-bottom .3s linear,
 box-shadow .3s var(--n-bezier);
 `),b(`&.notification-transition-enter-active`,`
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 transform .3s var(--n-bezier-ease-out),
 max-height .3s var(--n-bezier),
 margin-top .3s linear,
 margin-bottom .3s linear,
 box-shadow .3s var(--n-bezier);
 `)]),g(`notification`,`
 background-color: var(--n-color);
 color: var(--n-text-color);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 font-family: inherit;
 font-size: var(--n-font-size);
 font-weight: 400;
 position: relative;
 display: flex;
 overflow: hidden;
 flex-shrink: 0;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 width: var(--n-width);
 max-width: calc(100vw - 16px - 16px);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 box-sizing: border-box;
 opacity: 1;
 `,[S(`avatar`,[g(`icon`,`
 color: var(--n-icon-color);
 `),g(`base-icon`,`
 color: var(--n-icon-color);
 `)]),_(`show-avatar`,[g(`notification-main`,`
 margin-left: 40px;
 width: calc(100% - 40px); 
 `)]),_(`closable`,[g(`notification-main`,[b(`> *:first-child`,`
 padding-right: 20px;
 `)]),S(`close`,`
 position: absolute;
 top: 0;
 right: 0;
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),S(`avatar`,`
 position: absolute;
 top: var(--n-padding-top);
 left: var(--n-padding-left);
 width: 28px;
 height: 28px;
 font-size: 28px;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[g(`icon`,`transition: color .3s var(--n-bezier);`)]),g(`notification-main`,`
 padding-top: var(--n-padding-top);
 padding-bottom: var(--n-padding-bottom);
 box-sizing: border-box;
 display: flex;
 flex-direction: column;
 margin-left: 8px;
 width: calc(100% - 8px);
 `,[g(`notification-main-footer`,`
 display: flex;
 align-items: center;
 justify-content: space-between;
 margin-top: 12px;
 `,[S(`meta`,`
 font-size: var(--n-meta-font-size);
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-description-text-color);
 `),S(`action`,`
 cursor: pointer;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-action-text-color);
 `)]),S(`header`,`
 font-weight: var(--n-title-font-weight);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-title-text-color);
 `),S(`description`,`
 margin-top: 8px;
 font-size: var(--n-description-font-size);
 white-space: pre-wrap;
 word-wrap: break-word;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-description-text-color);
 `),S(`content`,`
 line-height: var(--n-line-height);
 margin: 12px 0 0 0;
 font-family: inherit;
 white-space: pre-wrap;
 word-wrap: break-word;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-text-color);
 `,[b(`&:first-child`,`margin: 0;`)])])])])]);function Q(e){return g(`notification-wrapper`,[b(`&.notification-transition-enter-from, &.notification-transition-leave-to`,`
 transform: translate(${e.split(`-`)[1]===`left`?`calc(-100%)`:`calc(100%)`}, 0);
 `),b(`&.notification-transition-leave-from, &.notification-transition-enter-to`,`
 transform: translate(0, 0);
 `)])}t(),p();var $=O(`n-notification-api`),ne=e({name:`NotificationProvider`,props:Object.assign(Object.assign({},v.props),{containerClass:String,containerStyle:[String,Object],to:[String,Object],scrollable:{type:Boolean,default:!0},max:Number,placement:{type:String,default:`top-right`},keepAliveOnHover:Boolean}),setup(e){let{mergedClsPrefixRef:t}=N(e),n=m([]),r={},a=new Set;function o(t){let i=D(),o=()=>{a.add(i),r[i]&&r[i].hide()},s=l(Object.assign(Object.assign({},t),{key:i,destroy:o,hide:o,deactivate:o})),{max:c}=e;if(c&&n.value.length-a.size>=c){let e=!1,t=0;for(let i of n.value){if(!a.has(i.key)){r[i.key]&&(i.destroy(),e=!0);break}t++}e||n.value.splice(t,1)}return n.value.push(s),s}let s=[`info`,`success`,`warning`,`error`].map(e=>t=>o(Object.assign(Object.assign({},t),{type:e})));function c(e){a.delete(e),n.value.splice(n.value.findIndex(t=>t.key===e),1)}let u=v(`Notification`,`-notification`,te,W,e,t),d={create:o,info:s[0],success:s[1],warning:s[2],error:s[3],open:p,destroyAll:h},f=m(0);i($,d),i(G,{props:e,mergedClsPrefixRef:t,mergedThemeRef:u,wipTransitionCountRef:f});function p(e){return o(e)}function h(){Object.values(n.value).forEach(e=>{e.hide()})}return Object.assign({mergedClsPrefix:t,notificationList:n,notificationRefs:r,handleAfterLeave:c},d)},render(){var e;let{placement:t}=this;return a(u,null,(e=this.$slots).default?.call(e),this.notificationList.length?a(o,{to:this.to??`body`},a(K,{class:this.containerClass,style:this.containerStyle,scrollable:this.scrollable&&t!==`top`&&t!==`bottom`,placement:t},{default:()=>this.notificationList.map(e=>a(ee,Object.assign({ref:t=>{let n=e.key;t===null?delete this.notificationRefs[n]:this.notificationRefs[n]=t}},j(e,[`destroy`,`hide`,`deactivate`]),{internalKey:e.key,onInternalAfterLeave:this.handleAfterLeave,keepAliveOnHover:e.keepAliveOnHover===void 0?this.keepAliveOnHover:e.keepAliveOnHover})))})):null)}});export{$ as n,U as r,ne as t};