import{A as e,F as t,N as n,R as r,b as i,ut as a,vt as o}from"./vue.runtime.esm-bundler-DZZTqpJU.js";import{c as s,d as c,n as l,p as u,s as d,u as f}from"./use-theme--pjWdM-N.js";import{t as p}from"./use-rtl-DxDqUyON.js";import{r as m}from"./css-DE6X-JUA.js";import{n as h,r as g,t as _}from"./light-CLwlD-S_.js";import{a as v,r as y}from"./resolve-slot-CNYZEkGJ.js";import{t as b}from"./use-config-B_Ca_QT7.js";import{t as x}from"./use-css-vars-class-LmlPa6Qd.js";import{n as S}from"./replaceable-DmEc4phL.js";import{t as C}from"./Close-DIRcAW63.js";import{i as w,n as T,r as E,t as D}from"./Warning-B-LSZvR-.js";import{t as O}from"./FadeInExpandTransition-BhLrC5Ht.js";import{t as k}from"./_common-DnEpalBx.js";import{t as A}from"./fade-in-height-expand.cssr-C2iXhCE9.js";function j(e){let{lineHeight:t,borderRadius:n,fontWeightStrong:r,baseColor:i,dividerColor:a,actionColor:o,textColor1:s,textColor2:c,closeColorHover:l,closeColorPressed:u,closeIconColor:d,closeIconColorHover:f,closeIconColorPressed:p,infoColor:m,successColor:_,warningColor:v,errorColor:y,fontSize:b}=e;return Object.assign(Object.assign({},k),{fontSize:b,lineHeight:t,titleFontWeight:r,borderRadius:n,border:`1px solid ${a}`,color:o,titleTextColor:s,iconColor:c,contentTextColor:c,closeBorderRadius:n,closeColorHover:l,closeColorPressed:u,closeIconColor:d,closeIconColorHover:f,closeIconColorPressed:p,borderInfo:`1px solid ${g(i,h(m,{alpha:.25}))}`,colorInfo:g(i,h(m,{alpha:.08})),titleTextColorInfo:s,iconColorInfo:m,contentTextColorInfo:c,closeColorHoverInfo:l,closeColorPressedInfo:u,closeIconColorInfo:d,closeIconColorHoverInfo:f,closeIconColorPressedInfo:p,borderSuccess:`1px solid ${g(i,h(_,{alpha:.25}))}`,colorSuccess:g(i,h(_,{alpha:.08})),titleTextColorSuccess:s,iconColorSuccess:_,contentTextColorSuccess:c,closeColorHoverSuccess:l,closeColorPressedSuccess:u,closeIconColorSuccess:d,closeIconColorHoverSuccess:f,closeIconColorPressedSuccess:p,borderWarning:`1px solid ${g(i,h(v,{alpha:.33}))}`,colorWarning:g(i,h(v,{alpha:.08})),titleTextColorWarning:s,iconColorWarning:v,contentTextColorWarning:c,closeColorHoverWarning:l,closeColorPressedWarning:u,closeIconColorWarning:d,closeIconColorHoverWarning:f,closeIconColorPressedWarning:p,borderError:`1px solid ${g(i,h(y,{alpha:.25}))}`,colorError:g(i,h(y,{alpha:.08})),titleTextColorError:s,iconColorError:y,contentTextColorError:c,closeColorHoverError:l,closeColorPressedError:u,closeIconColorError:d,closeIconColorHoverError:f,closeIconColorPressedError:p})}var M={name:`Alert`,common:_,self:j},N=s(`alert`,`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[f(`border`,`
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),c(`closable`,[s(`alert-body`,[f(`title`,`
 padding-right: 24px;
 `)])]),f(`icon`,{color:`var(--n-icon-color)`}),s(`alert-body`,{padding:`var(--n-padding)`},[f(`title`,{color:`var(--n-title-text-color)`}),f(`content`,{color:`var(--n-content-text-color)`})]),A({originalTransition:`transform .3s var(--n-bezier)`,enterToProps:{transform:`scale(1)`},leaveToProps:{transform:`scale(0.9)`}}),f(`icon`,`
 position: absolute;
 left: 0;
 top: 0;
 align-items: center;
 justify-content: center;
 display: flex;
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 margin: var(--n-icon-margin);
 `),f(`close`,`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),c(`show-icon`,[s(`alert-body`,{paddingLeft:`calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))`})]),c(`right-adjust`,[s(`alert-body`,{paddingRight:`calc(var(--n-close-size) + var(--n-padding) + 2px)`})]),s(`alert-body`,`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[f(`title`,`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[d(`& +`,[f(`content`,{marginTop:`9px`})])]),f(`content`,{transition:`color .3s var(--n-bezier)`,fontSize:`var(--n-font-size)`})]),f(`icon`,{transition:`color .3s var(--n-bezier)`})]);t(),a();var P=e({name:`Alert`,inheritAttrs:!1,props:Object.assign(Object.assign({},l.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:`default`},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function}),slots:Object,setup(e){let{mergedClsPrefixRef:t,mergedBorderedRef:n,inlineThemeDisabled:r,mergedRtlRef:a}=b(e),s=l(`Alert`,`-alert`,N,M,e,t),c=p(`Alert`,a,t),d=i(()=>{let{common:{cubicBezierEaseInOut:t},self:n}=s.value,{fontSize:r,borderRadius:i,titleFontWeight:a,lineHeight:o,iconSize:c,iconMargin:l,iconMarginRtl:d,closeIconSize:f,closeBorderRadius:p,closeSize:h,closeMargin:g,closeMarginRtl:_,padding:v}=n,{type:y}=e,{left:b,right:x}=m(l);return{"--n-bezier":t,"--n-color":n[u(`color`,y)],"--n-close-icon-size":f,"--n-close-border-radius":p,"--n-close-color-hover":n[u(`closeColorHover`,y)],"--n-close-color-pressed":n[u(`closeColorPressed`,y)],"--n-close-icon-color":n[u(`closeIconColor`,y)],"--n-close-icon-color-hover":n[u(`closeIconColorHover`,y)],"--n-close-icon-color-pressed":n[u(`closeIconColorPressed`,y)],"--n-icon-color":n[u(`iconColor`,y)],"--n-border":n[u(`border`,y)],"--n-title-text-color":n[u(`titleTextColor`,y)],"--n-content-text-color":n[u(`contentTextColor`,y)],"--n-line-height":o,"--n-border-radius":i,"--n-font-size":r,"--n-title-font-weight":a,"--n-icon-size":c,"--n-icon-margin":l,"--n-icon-margin-rtl":d,"--n-close-size":h,"--n-close-margin":g,"--n-close-margin-rtl":_,"--n-padding":v,"--n-icon-margin-left":b,"--n-icon-margin-right":x}}),f=r?x(`alert`,i(()=>e.type[0]),d,e):void 0,h=o(!0),g=()=>{let{onAfterLeave:t,onAfterHide:n}=e;t&&t(),n&&n()};return{rtlEnabled:c,mergedClsPrefix:t,mergedBordered:n,visible:h,handleCloseClick:()=>{Promise.resolve(e.onClose?.call(e)).then(e=>{e!==!1&&(h.value=!1)})},handleAfterLeave:()=>{g()},mergedTheme:s,cssVars:r?void 0:d,themeClass:f?.themeClass,onRender:f?.onRender}},render(){var e;return(e=this.onRender)==null||e.call(this),n(O,{onAfterLeave:this.handleAfterLeave},{default:()=>{let{mergedClsPrefix:e,$slots:t}=this,i={class:[`${e}-alert`,this.themeClass,this.closable&&`${e}-alert--closable`,this.showIcon&&`${e}-alert--show-icon`,!this.title&&this.closable&&`${e}-alert--right-adjust`,this.rtlEnabled&&`${e}-alert--rtl`],style:this.cssVars,role:`alert`};return this.visible?n(`div`,Object.assign({},r(this.$attrs,i)),this.closable&&n(C,{clsPrefix:e,class:`${e}-alert__close`,onClick:this.handleCloseClick}),this.bordered&&n(`div`,{class:`${e}-alert__border`}),this.showIcon&&n(`div`,{class:`${e}-alert__icon`,"aria-hidden":`true`},y(t.icon,()=>[n(S,{clsPrefix:e},{default:()=>{switch(this.type){case`success`:return n(T,null);case`info`:return n(E,null);case`warning`:return n(D,null);case`error`:return n(w,null);default:return null}}})])),n(`div`,{class:[`${e}-alert-body`,this.mergedBordered&&`${e}-alert-body--bordered`]},v(t.header,t=>{let r=t||this.title;return r?n(`div`,{class:`${e}-alert-body__title`},r):null}),t.default&&n(`div`,{class:`${e}-alert-body__content`},t))):null}})}});export{P as t};