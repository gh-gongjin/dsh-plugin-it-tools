import{A as e,Ct as t,F as n,G as r,I as i,J as a,N as o,R as s,a as c,b as l,d as u,h as d,nt as f,ot as p,r as m,rt as h,ut as g,vt as _,y as v,z as y}from"./vue.runtime.esm-bundler-DZZTqpJU.js";import{a as b,c as x,d as S,f as C,n as w,p as T,s as E,u as D}from"./use-theme--pjWdM-N.js";import{r as O,t as ee}from"./css-DE6X-JUA.js";import{t as te}from"./on-fonts-ready-D2n361CW.js";import{t as ne}from"./use-merged-state-B5grpmgQ.js";import{t as k}from"./use-compitable-BpIj3OKc.js";import{t as A}from"./create-injection-key-Dfvzj6n2.js";import{t as j}from"./VResizeObserver-CBatuD_H.js";import{n as M,t as N}from"./cssr-DbEQK9zn.js";import{n as re}from"./warn-Dor1LvN9.js";import{t as P}from"./call-fCmD0dxi.js";import{t as F}from"./flatten-EpFO1KBN.js";import{t as ie}from"./omit-C4pE9leG.js";import{t as I}from"./render-DCOaOdv0.js";import{a as L}from"./resolve-slot-CNYZEkGJ.js";import{t as ae}from"./use-config-B_Ca_QT7.js";import{t as oe}from"./use-css-vars-class-LmlPa6Qd.js";import{A as R}from"./isArrayLikeObject-C-6V7-OQ.js";import{n as z}from"./replaceable-DmEc4phL.js";import{t as B}from"./debounce-Bvi6_FBZ.js";import{t as V}from"./Add-D2WI2fnY.js";import{t as se}from"./Close-DIRcAW63.js";import{n as ce}from"./light-Bu6oRevq.js";n(),g();var le=N(`.v-x-scroll`,{overflow:`auto`,scrollbarWidth:`none`},[N(`&::-webkit-scrollbar`,{width:0,height:0})]),ue=e({name:`XScroll`,props:{disabled:Boolean,onScroll:Function},setup(){let e=_(null);function t(e){!(e.currentTarget.offsetWidth<e.currentTarget.scrollWidth)||e.deltaY===0||(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}let n=b();return le.mount({id:`vueuc/x-scroll`,head:!0,anchorMetaName:M,ssr:n}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...t){var n;(n=e.value)==null||n.scrollTo(...t)}})},render(){return o(`div`,{ref:`selfRef`,onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:`v-x-scroll`},this.$slots)}}),H=`Expected a function`;function U(e,t,n){var r=!0,i=!0;if(typeof e!=`function`)throw TypeError(H);return R(n)&&(r=`leading`in n?!!n.leading:r,i=`trailing`in n?!!n.trailing:i),B(e,t,{leading:r,maxWait:t,trailing:i})}var W=A(`n-tabs`);n();var G={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:`if`},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},de=e({__TAB_PANE__:!0,name:`TabPane`,alias:[`TabPanel`],props:G,slots:Object,setup(e){let t=i(W,null);return t||re(`tab-pane`,"`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return o(`div`,{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}});n();var K=e({__TAB__:!0,inheritAttrs:!1,name:`Tab`,props:Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},ie(G,[`displayDirective`])),setup(e){let{mergedClsPrefixRef:t,valueRef:n,typeRef:r,closableRef:a,tabStyleRef:o,addTabStyleRef:s,tabClassRef:c,addTabClassRef:u,tabChangeIdRef:d,onBeforeLeaveRef:f,triggerRef:p,handleAdd:m,activateTab:h,handleClose:g}=i(W);return{trigger:p,mergedClosable:l(()=>{if(e.internalAddable)return!1;let{closable:t}=e;return t===void 0?a.value:t}),style:o,addStyle:s,tabClass:c,addTabClass:u,clsPrefix:t,value:n,type:r,handleClose(t){t.stopPropagation(),!e.disabled&&g(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){m();return}let{name:t}=e,r=++d.id;if(t!==n.value){let{value:i}=f;i?Promise.resolve(i(e.name,n.value)).then(e=>{e&&d.id===r&&h(t)}):h(t)}}}},render(){let{internalAddable:e,clsPrefix:t,name:n,disabled:r,label:i,tab:a,value:c,mergedClosable:l,trigger:u,$slots:{default:f}}=this,p=i??a;return o(`div`,{class:`${t}-tabs-tab-wrapper`},this.internalLeftPadded?o(`div`,{class:`${t}-tabs-tab-pad`}):null,o(`div`,Object.assign({key:n,"data-name":n,"data-disabled":r?!0:void 0},s({class:[`${t}-tabs-tab`,c===n&&`${t}-tabs-tab--active`,r&&`${t}-tabs-tab--disabled`,l&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:u===`click`?this.activateTab:void 0,onMouseenter:u===`hover`?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),o(`span`,{class:`${t}-tabs-tab__label`},e?o(d,null,o(`div`,{class:`${t}-tabs-tab__height-placeholder`},`\xA0`),o(z,{clsPrefix:t},{default:()=>o(V,null)})):f?f():typeof p==`object`?p:I(p??n)),l&&this.type===`card`?o(se,{clsPrefix:t,class:`${t}-tabs-tab__close`,onClick:this.handleClose,disabled:r}):null))}}),fe=x(`tabs`,`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[S(`segment-type`,[x(`tabs-rail`,[E(`&.transition-disabled`,[x(`tabs-capsule`,`
 transition: none;
 `)])])]),S(`top`,[x(`tab-pane`,`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),S(`left`,[x(`tab-pane`,`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),S(`left, right`,`
 flex-direction: row;
 `,[x(`tabs-bar`,`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),x(`tabs-tab`,`
 padding: var(--n-tab-padding-vertical); 
 `)]),S(`right`,`
 flex-direction: row-reverse;
 `,[x(`tab-pane`,`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),x(`tabs-bar`,`
 left: 0;
 `)]),S(`bottom`,`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[x(`tab-pane`,`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),x(`tabs-bar`,`
 top: 0;
 `)]),x(`tabs-rail`,`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[x(`tabs-capsule`,`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),x(`tabs-tab-wrapper`,`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[x(`tabs-tab`,`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[S(`active`,`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),E(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])])]),S(`flex`,[x(`tabs-nav`,`
 width: 100%;
 position: relative;
 `,[x(`tabs-wrapper`,`
 width: 100%;
 `,[x(`tabs-tab`,`
 margin-right: 0;
 `)])])]),x(`tabs-nav`,`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[D(`prefix, suffix`,`
 display: flex;
 align-items: center;
 `),D(`prefix`,`padding-right: 16px;`),D(`suffix`,`padding-left: 16px;`)]),S(`top, bottom`,[E(`>`,[x(`tabs-nav`,[x(`tabs-nav-scroll-wrapper`,[E(`&::before`,`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),E(`&::after`,`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),S(`shadow-start`,[E(`&::before`,`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),S(`shadow-end`,[E(`&::after`,`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),S(`left, right`,[x(`tabs-nav-scroll-content`,`
 flex-direction: column;
 `),E(`>`,[x(`tabs-nav`,[x(`tabs-nav-scroll-wrapper`,[E(`&::before`,`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),E(`&::after`,`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),S(`shadow-start`,[E(`&::before`,`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),S(`shadow-end`,[E(`&::after`,`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),x(`tabs-nav-scroll-wrapper`,`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[x(`tabs-nav-y-scroll`,`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[E(`&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb`,`
 width: 0;
 height: 0;
 display: none;
 `)]),E(`&::before, &::after`,`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),x(`tabs-nav-scroll-content`,`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),x(`tabs-wrapper`,`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),x(`tabs-tab-wrapper`,`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),x(`tabs-tab`,`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[S(`disabled`,{cursor:`not-allowed`}),D(`close`,`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),D(`label`,`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),x(`tabs-bar`,`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[E(`&.transition-disabled`,`
 transition: none;
 `),S(`disabled`,`
 background-color: var(--n-tab-text-color-disabled)
 `)]),x(`tabs-pane-wrapper`,`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),x(`tab-pane`,`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[E(`&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active`,`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),E(`&.next-transition-leave-active, &.prev-transition-leave-active`,`
 position: absolute;
 `),E(`&.next-transition-enter-from, &.prev-transition-leave-to`,`
 transform: translateX(32px);
 opacity: 0;
 `),E(`&.next-transition-leave-to, &.prev-transition-enter-from`,`
 transform: translateX(-32px);
 opacity: 0;
 `),E(`&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to`,`
 transform: translateX(0);
 opacity: 1;
 `)]),x(`tabs-tab-pad`,`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),S(`line-type, bar-type`,[x(`tabs-tab`,`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[E(`&:hover`,{color:`var(--n-tab-text-color-hover)`}),S(`active`,`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),S(`disabled`,{color:`var(--n-tab-text-color-disabled)`})])]),x(`tabs-nav`,[S(`line-type`,[S(`top`,[D(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),x(`tabs-nav-scroll-content`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),x(`tabs-bar`,`
 bottom: -1px;
 `)]),S(`left`,[D(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),x(`tabs-nav-scroll-content`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),x(`tabs-bar`,`
 right: -1px;
 `)]),S(`right`,[D(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),x(`tabs-nav-scroll-content`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),x(`tabs-bar`,`
 left: -1px;
 `)]),S(`bottom`,[D(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),x(`tabs-nav-scroll-content`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),x(`tabs-bar`,`
 top: -1px;
 `)]),D(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),x(`tabs-nav-scroll-content`,`
 transition: border-color .3s var(--n-bezier);
 `),x(`tabs-bar`,`
 border-radius: 0;
 `)]),S(`card-type`,[D(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),x(`tabs-pad`,`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),x(`tabs-tab-pad`,`
 transition: border-color .3s var(--n-bezier);
 `),x(`tabs-tab`,`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[S(`addable`,`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 justify-content: center;
 `,[D(`height-placeholder`,`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),C(`disabled`,[E(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])]),S(`closable`,`padding-right: 8px;`),S(`active`,`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),S(`disabled`,`color: var(--n-tab-text-color-disabled);`)])]),S(`left, right`,`
 flex-direction: column; 
 `,[D(`prefix, suffix`,`
 padding: var(--n-tab-padding-vertical);
 `),x(`tabs-wrapper`,`
 flex-direction: column;
 `),x(`tabs-tab-wrapper`,`
 flex-direction: column;
 `,[x(`tabs-tab-pad`,`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),S(`top`,[S(`card-type`,[x(`tabs-scroll-padding`,`border-bottom: 1px solid var(--n-tab-border-color);`),D(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),x(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[S(`active`,`
 border-bottom: 1px solid #0000;
 `)]),x(`tabs-tab-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),x(`tabs-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),S(`left`,[S(`card-type`,[x(`tabs-scroll-padding`,`border-right: 1px solid var(--n-tab-border-color);`),D(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),x(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[S(`active`,`
 border-right: 1px solid #0000;
 `)]),x(`tabs-tab-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),x(`tabs-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),S(`right`,[S(`card-type`,[x(`tabs-scroll-padding`,`border-left: 1px solid var(--n-tab-border-color);`),D(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),x(`tabs-tab`,`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[S(`active`,`
 border-left: 1px solid #0000;
 `)]),x(`tabs-tab-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),x(`tabs-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),S(`bottom`,[S(`card-type`,[x(`tabs-scroll-padding`,`border-top: 1px solid var(--n-tab-border-color);`),D(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),x(`tabs-tab`,`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[S(`active`,`
 border-top: 1px solid #0000;
 `)]),x(`tabs-tab-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),x(`tabs-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]);n(),g(),c();var q=U,J=e({name:`Tabs`,props:Object.assign(Object.assign({},w.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:`click`},type:{type:String,default:`bar`},closable:Boolean,justifyContent:String,size:String,placement:{type:String,default:`top`},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),slots:Object,setup(e,{slots:n}){let{mergedClsPrefixRef:i,inlineThemeDisabled:o,mergedComponentPropsRef:s}=ae(e),c=w(`Tabs`,`-tabs`,fe,ce,e,i),u=_(null),d=_(null),p=_(null),m=_(null),g=_(null),v=_(null),b=_(!0),x=_(!0),S=k(e,[`labelSize`,`size`]),C=l(()=>S.value?S.value:s?.value?.Tabs?.size||`medium`),E=k(e,[`activeName`,`value`]),D=_(E.value??e.defaultValue??(n.default?F(n.default())[0]?.props?.name:null)),A=ne(E,D),j={id:0},M=l(()=>{if(!(!e.justifyContent||e.type===`card`))return{display:`flex`,justifyContent:e.justifyContent}});f(A,()=>{j.id=0,L(),R()});function N(){let{value:e}=A;return e===null?null:u.value?.querySelector(`[data-name="${e}"]`)}function re(t){if(e.type===`card`)return;let{value:n}=d;if(!n)return;let r=n.style.opacity===`0`;if(t){let a=`${i.value}-tabs-bar--disabled`,{barWidth:o,placement:s}=e;if(t.dataset.disabled===`true`?n.classList.add(a):n.classList.remove(a),[`top`,`bottom`].includes(s)){if(I([`top`,`maxHeight`,`height`]),typeof o==`number`&&t.offsetWidth>=o){let e=Math.floor((t.offsetWidth-o)/2)+t.offsetLeft;n.style.left=`${e}px`,n.style.maxWidth=`${o}px`}else n.style.left=`${t.offsetLeft}px`,n.style.maxWidth=`${t.offsetWidth}px`;n.style.width=`8192px`,r&&(n.style.transition=`none`),n.offsetWidth,r&&(n.style.transition=``,n.style.opacity=`1`)}else{if(I([`left`,`maxWidth`,`width`]),typeof o==`number`&&t.offsetHeight>=o){let e=Math.floor((t.offsetHeight-o)/2)+t.offsetTop;n.style.top=`${e}px`,n.style.maxHeight=`${o}px`}else n.style.top=`${t.offsetTop}px`,n.style.maxHeight=`${t.offsetHeight}px`;n.style.height=`8192px`,r&&(n.style.transition=`none`),n.offsetHeight,r&&(n.style.transition=``,n.style.opacity=`1`)}}}function ie(){if(e.type===`card`)return;let{value:t}=d;t&&(t.style.opacity=`0`)}function I(e){let{value:t}=d;if(t)for(let n of e)t.style[n]=``}function L(){if(e.type===`card`)return;let t=N();t?re(t):ie()}function R(){let e=g.value?.$el;if(!e)return;let t=N();if(!t)return;let{scrollLeft:n,offsetWidth:r}=e,{offsetLeft:i,offsetWidth:a}=t;n>i?e.scrollTo({top:0,left:i,behavior:`smooth`}):i+a>n+r&&e.scrollTo({top:0,left:i+a-r,behavior:`smooth`})}let z=_(null),B=0,V=null;function se(e){let t=z.value;if(t){B=e.getBoundingClientRect().height;let n=`${B}px`,r=()=>{t.style.height=n,t.style.maxHeight=n};V?(r(),V(),V=null):V=r}}function le(e){let t=z.value;if(t){let n=e.getBoundingClientRect().height,r=()=>{document.body.offsetHeight,t.style.maxHeight=`${n}px`,t.style.height=`${Math.max(B,n)}px`};V?(V(),V=null,r()):V=r}}function ue(){let t=z.value;if(t){t.style.maxHeight=``,t.style.height=``;let{paneWrapperStyle:n}=e;if(typeof n==`string`)t.style.cssText=n;else if(n){let{maxHeight:e,height:r}=n;e!==void 0&&(t.style.maxHeight=e),r!==void 0&&(t.style.height=r)}}}let H={value:[]},U=_(`next`);function G(e){let t=A.value,n=`next`;for(let r of H.value){if(r===t)break;if(r===e){n=`prev`;break}}U.value=n,de(e)}function de(t){let{onActiveNameChange:n,onUpdateValue:r,"onUpdate:value":i}=e;n&&P(n,t),r&&P(r,t),i&&P(i,t),D.value=t}function K(t){let{onClose:n}=e;n&&P(n,t)}let J=!0;function Y(){let{value:e}=d;if(!e)return;J||=!1;let t=`transition-disabled`;e.classList.add(t),L(),e.classList.remove(t)}let X=_(null);function Z({transitionDisabled:e}){let t=u.value;if(!t)return;e&&t.classList.add(`transition-disabled`);let n=N();n&&X.value&&(X.value.style.width=`${n.offsetWidth}px`,X.value.style.height=`${n.offsetHeight}px`,X.value.style.transform=`translateX(${n.offsetLeft-ee(getComputedStyle(t).paddingLeft)}px)`,e&&X.value.offsetWidth),e&&t.classList.remove(`transition-disabled`)}f([A],()=>{e.type===`segment`&&y(()=>{Z({transitionDisabled:!1})})}),r(()=>{e.type===`segment`&&Z({transitionDisabled:!0})});let Q=0;function pe(t){if(t.contentRect.width===0&&t.contentRect.height===0||Q===t.contentRect.width)return;Q=t.contentRect.width;let{type:n}=e;if((n===`line`||n===`bar`)&&(J||e.justifyContent?.startsWith(`space`))&&Y(),n!==`segment`){let{placement:t}=e;ve((t===`top`||t===`bottom`?g.value?.$el:v.value)||null)}}let me=q(pe,64);f([()=>e.justifyContent,()=>e.size],()=>{y(()=>{let{type:t}=e;(t===`line`||t===`bar`)&&Y()})});let $=_(!1);function he(t){let{target:n,contentRect:{width:r,height:i}}=t,a=n.parentElement.parentElement.offsetWidth,o=n.parentElement.parentElement.offsetHeight,{placement:s}=e;if(!$.value)s===`top`||s===`bottom`?a<r&&($.value=!0):o<i&&($.value=!0);else{let{value:e}=m;if(!e)return;s===`top`||s===`bottom`?a-r>e.$el.offsetWidth&&($.value=!1):o-i>e.$el.offsetHeight&&($.value=!1)}ve(g.value?.$el||null)}let ge=q(he,64);function _e(){let{onAdd:t}=e;t&&t(),y(()=>{let e=N(),{value:t}=g;!e||!t||t.scrollTo({left:e.offsetLeft,top:0,behavior:`smooth`})})}function ve(t){if(!t)return;let{placement:n}=e;if(n===`top`||n===`bottom`){let{scrollLeft:e,scrollWidth:n,offsetWidth:r}=t;b.value=e<=0,x.value=e+r>=n}else{let{scrollTop:e,scrollHeight:n,offsetHeight:r}=t;b.value=e<=0,x.value=e+r>=n}}let ye=q(e=>{ve(e.target)},64);a(W,{triggerRef:t(e,`trigger`),tabStyleRef:t(e,`tabStyle`),tabClassRef:t(e,`tabClass`),addTabStyleRef:t(e,`addTabStyle`),addTabClassRef:t(e,`addTabClass`),paneClassRef:t(e,`paneClass`),paneStyleRef:t(e,`paneStyle`),mergedClsPrefixRef:i,typeRef:t(e,`type`),closableRef:t(e,`closable`),valueRef:A,tabChangeIdRef:j,onBeforeLeaveRef:t(e,`onBeforeLeave`),activateTab:G,handleClose:K,handleAdd:_e}),te(()=>{L(),R()}),h(()=>{let{value:e}=p;if(!e)return;let{value:t}=i,n=`${t}-tabs-nav-scroll-wrapper--shadow-start`,r=`${t}-tabs-nav-scroll-wrapper--shadow-end`;b.value?e.classList.remove(n):e.classList.add(n),x.value?e.classList.remove(r):e.classList.add(r)});let be={syncBarPosition:()=>{L()}},xe=()=>{Z({transitionDisabled:!0})},Se=l(()=>{let{value:t}=C,{type:n}=e,r=`${t}${{card:`Card`,bar:`Bar`,line:`Line`,segment:`Segment`}[n]}`,{self:{barColor:i,closeIconColor:a,closeIconColorHover:o,closeIconColorPressed:s,tabColor:l,tabBorderColor:u,paneTextColor:d,tabFontWeight:f,tabBorderRadius:p,tabFontWeightActive:m,colorSegment:h,fontWeightStrong:g,tabColorSegment:_,closeSize:v,closeIconSize:y,closeColorHover:b,closeColorPressed:x,closeBorderRadius:S,[T(`panePadding`,t)]:w,[T(`tabPadding`,r)]:E,[T(`tabPaddingVertical`,r)]:D,[T(`tabGap`,r)]:ee,[T(`tabGap`,`${r}Vertical`)]:te,[T(`tabTextColor`,n)]:ne,[T(`tabTextColorActive`,n)]:k,[T(`tabTextColorHover`,n)]:A,[T(`tabTextColorDisabled`,n)]:j,[T(`tabFontSize`,t)]:M},common:{cubicBezierEaseInOut:N}}=c.value;return{"--n-bezier":N,"--n-color-segment":h,"--n-bar-color":i,"--n-tab-font-size":M,"--n-tab-text-color":ne,"--n-tab-text-color-active":k,"--n-tab-text-color-disabled":j,"--n-tab-text-color-hover":A,"--n-pane-text-color":d,"--n-tab-border-color":u,"--n-tab-border-radius":p,"--n-close-size":v,"--n-close-icon-size":y,"--n-close-color-hover":b,"--n-close-color-pressed":x,"--n-close-border-radius":S,"--n-close-icon-color":a,"--n-close-icon-color-hover":o,"--n-close-icon-color-pressed":s,"--n-tab-color":l,"--n-tab-font-weight":f,"--n-tab-font-weight-active":m,"--n-tab-padding":E,"--n-tab-padding-vertical":D,"--n-tab-gap":ee,"--n-tab-gap-vertical":te,"--n-pane-padding-left":O(w,`left`),"--n-pane-padding-right":O(w,`right`),"--n-pane-padding-top":O(w,`top`),"--n-pane-padding-bottom":O(w,`bottom`),"--n-font-weight-strong":g,"--n-tab-color-segment":_}}),Ce=o?oe(`tabs`,l(()=>`${C.value[0]}${e.type[0]}`),Se,e):void 0;return Object.assign({mergedClsPrefix:i,mergedValue:A,renderedNames:new Set,segmentCapsuleElRef:X,tabsPaneWrapperRef:z,tabsElRef:u,barElRef:d,addTabInstRef:m,xScrollInstRef:g,scrollWrapperElRef:p,addTabFixed:$,tabWrapperStyle:M,handleNavResize:me,mergedSize:C,handleScroll:ye,handleTabsResize:ge,cssVars:o?void 0:Se,themeClass:Ce?.themeClass,animationDirection:U,renderNameListRef:H,yScrollElRef:v,handleSegmentResize:xe,onAnimationBeforeLeave:se,onAnimationEnter:le,onAnimationAfterEnter:ue,onRender:Ce?.onRender},be)},render(){let{mergedClsPrefix:e,type:t,placement:n,addTabFixed:r,addable:i,mergedSize:a,renderNameListRef:s,onRender:c,paneWrapperClass:l,paneWrapperStyle:u,$slots:{default:d,prefix:f,suffix:p}}=this;c?.();let m=d?F(d()).filter(e=>e.type.__TAB_PANE__===!0):[],h=d?F(d()).filter(e=>e.type.__TAB__===!0):[],g=!h.length,_=t===`card`,v=t===`segment`,y=!_&&!v&&this.justifyContent;s.value=[];let b=()=>{let t=o(`div`,{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},y?null:o(`div`,{class:`${e}-tabs-scroll-padding`,style:n===`top`||n===`bottom`?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`}}),g?m.map((e,t)=>(s.value.push(e.props.name),Q(o(K,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0&&(!y||y===`center`||y===`start`||y===`end`)}),e.children?{default:e.children.tab}:void 0)))):h.map((e,t)=>(s.value.push(e.props.name),Q(t!==0&&!y?Z(e):e))),!r&&i&&_?X(i,(g?m.length:h.length)!==0):null,y?null:o(`div`,{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return o(`div`,{ref:`tabsElRef`,class:`${e}-tabs-nav-scroll-content`},_&&i?o(j,{onResize:this.handleTabsResize},{default:()=>t}):t,_?o(`div`,{class:`${e}-tabs-pad`}):null,_?null:o(`div`,{ref:`barElRef`,class:`${e}-tabs-bar`}))},x=v?`top`:n;return o(`div`,{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${a}-size`,y&&`${e}-tabs--flex`,`${e}-tabs--${x}`],style:this.cssVars},o(`div`,{class:[`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav--${x}`,`${e}-tabs-nav`]},L(f,t=>t&&o(`div`,{class:`${e}-tabs-nav__prefix`},t)),v?o(j,{onResize:this.handleSegmentResize},{default:()=>o(`div`,{class:`${e}-tabs-rail`,ref:`tabsElRef`},o(`div`,{class:`${e}-tabs-capsule`,ref:`segmentCapsuleElRef`},o(`div`,{class:`${e}-tabs-wrapper`},o(`div`,{class:`${e}-tabs-tab`}))),g?m.map((e,t)=>(s.value.push(e.props.name),o(K,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0}),e.children?{default:e.children.tab}:void 0))):h.map((e,t)=>(s.value.push(e.props.name),t===0?e:Z(e))))}):o(j,{onResize:this.handleNavResize},{default:()=>o(`div`,{class:`${e}-tabs-nav-scroll-wrapper`,ref:`scrollWrapperElRef`},[`top`,`bottom`].includes(x)?o(ue,{ref:`xScrollInstRef`,onScroll:this.handleScroll},{default:b}):o(`div`,{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:`yScrollElRef`},b()))}),r&&i&&_?X(i,!0):null,L(p,t=>t&&o(`div`,{class:`${e}-tabs-nav__suffix`},t))),g&&(this.animated&&(x===`top`||x===`bottom`)?o(`div`,{ref:`tabsPaneWrapperRef`,style:u,class:[`${e}-tabs-pane-wrapper`,l]},Y(m,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):Y(m,this.mergedValue,this.renderedNames)))}});function Y(e,t,n,r,i,a,s){let c=[];return e.forEach(e=>{let{name:r,displayDirective:i,"display-directive":a}=e.props,o=e=>i===e||a===e,s=t===r;if(e.key!==void 0&&(e.key=r),s||o(`show`)||o(`show:lazy`)&&n.has(r)){n.has(r)||n.add(r);let t=!o(`if`);c.push(t?p(e,[[u,s]]):e)}}),s?o(m,{name:`${s}-transition`,onBeforeLeave:r,onEnter:i,onAfterEnter:a},{default:()=>c}):c}function X(e,t){return o(K,{ref:`addTabInstRef`,key:`__addable`,name:`__addable`,internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e==`object`&&e.disabled})}function Z(e){let t=v(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function Q(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes(`internalLeftPadded`)||e.dynamicProps.push(`internalLeftPadded`):e.dynamicProps=[`internalLeftPadded`],e}export{de as n,J as t};