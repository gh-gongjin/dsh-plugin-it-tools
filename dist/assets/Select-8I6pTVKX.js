import{A as e,Ct as t,F as n,G as r,H as i,I as a,J as o,N as s,a as c,b as l,d as u,h as d,n as f,nt as p,ot as m,rt as h,ut as g,vt as _,z as v}from"./vue.runtime.esm-bundler-DZZTqpJU.js";import{c as y,d as b,f as x,n as S,p as C,s as w,u as T}from"./use-theme--pjWdM-N.js";import{t as E}from"./use-rtl-DxDqUyON.js";import{t as D}from"./happens-in-D4nrdV77.js";import{a as ee,r as O,t as k}from"./Scrollbar-CzXWYKLa.js";import{r as A,t as j}from"./css-DE6X-JUA.js";import{t as M}from"./use-memo-Y5dSqWt3.js";import{t as te}from"./use-merged-state-B5grpmgQ.js";import{t as ne}from"./use-is-mounted-DNrqd8l2.js";import{t as re}from"./use-compitable-BpIj3OKc.js";import{a as N,i as P,n as F,o as I,r as L,t as R}from"./Follower-eD66E3hR.js";import{t as z}from"./Popover-BHw1Wq32.js";import{t as B}from"./clickoutside-EYrQQIK3.js";import{n as V}from"./VResizeObserver-CBatuD_H.js";import{t as ie}from"./VirtualList-hDwDxxXP.js";import{a as H,r as ae,s as U,t as oe}from"./light-DhgabW5l.js";import{n as W}from"./event-DLQ7I3I8.js";import{t as G}from"./call-fCmD0dxi.js";import{t as K}from"./render-DCOaOdv0.js";import{a as q,r as se}from"./resolve-slot-CNYZEkGJ.js";import{t as ce}from"./use-config-B_Ca_QT7.js";import{t as le}from"./use-css-vars-class-LmlPa6Qd.js";import{n as ue}from"./use-form-item-C8Vx-E3x.js";import{t as de}from"./use-locale-BgIChK64.js";import{n as fe}from"./replaceable-DmEc4phL.js";import{t as pe}from"./Suffix-D75x1Vlr.js";import{t as J}from"./Empty-tCq6IaAq.js";import{t as Y}from"./focus-detector-K1JTQ7NB.js";import{t as me}from"./Loading-6wuFF5Nv.js";import{r as X,t as he}from"./create-BK3ok1dh.js";import{t as Z}from"./fade-in-scale-up.cssr-BxlBQbys.js";import{t as Q}from"./Tag-B8r-TbAH.js";n();function ge(e,t){t&&(r(()=>{let{value:n}=e;n&&V.registerHandler(n,t)}),p(e,(e,t)=>{t&&V.unregisterHandler(t)},{deep:!1}),i(()=>{let{value:t}=e;t&&V.unregisterHandler(t)}))}function _e(e){switch(typeof e){case`string`:return e||void 0;case`number`:return String(e);default:return}}function $(e){let t=e.filter(e=>e!==void 0);if(t.length!==0)return t.length===1?t[0]:t=>{e.forEach(e=>{e&&e(t)})}}n();var ve=e({name:`Checkmark`,render(){return s(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 16 16`},s(`g`,{fill:`none`},s(`path`,{d:`M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z`,fill:`currentColor`})))}});n();var ye=e({name:`NBaseSelectGroupHeader`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){let{renderLabelRef:e,renderOptionRef:t,labelFieldRef:n,nodePropsRef:r}=a(I);return{labelField:n,nodeProps:r,renderLabel:e,renderOption:t}},render(){let{clsPrefix:e,renderLabel:t,renderOption:n,nodeProps:r,tmNode:{rawNode:i}}=this,a=r?.(i),o=t?t(i,!1):K(i[this.labelField],i,!1),c=s(`div`,Object.assign({},a,{class:[`${e}-base-select-group-header`,a?.class]}),o);return i.render?i.render({node:c,option:i}):n?n({node:c,option:i,selected:!1}):c}});n(),c();function be(e,t){return s(f,{name:`fade-in-scale-up-transition`},{default:()=>e?s(fe,{clsPrefix:t,class:`${t}-base-select-option__check`},{default:()=>s(ve)}):null})}var xe=e({name:`NBaseSelectOption`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){let{valueRef:t,pendingTmNodeRef:n,multipleRef:r,valueSetRef:i,renderLabelRef:o,renderOptionRef:s,labelFieldRef:c,valueFieldRef:l,showCheckmarkRef:u,nodePropsRef:d,handleOptionClick:f,handleOptionMouseEnter:p}=a(I),m=M(()=>{let{value:t}=n;return t?e.tmNode.key===t.key:!1});function h(t){let{tmNode:n}=e;n.disabled||f(t,n)}function g(t){let{tmNode:n}=e;n.disabled||p(t,n)}function _(t){let{tmNode:n}=e,{value:r}=m;n.disabled||r||p(t,n)}return{multiple:r,isGrouped:M(()=>{let{tmNode:t}=e,{parent:n}=t;return n&&n.rawNode.type===`group`}),showCheckmark:u,nodeProps:d,isPending:m,isSelected:M(()=>{let{value:n}=t,{value:a}=r;if(n===null)return!1;let o=e.tmNode.rawNode[l.value];if(a){let{value:e}=i;return e.has(o)}else return n===o}),labelField:c,renderLabel:o,renderOption:s,handleMouseMove:_,handleMouseEnter:g,handleClick:h}},render(){let{clsPrefix:e,tmNode:{rawNode:t},isSelected:n,isPending:r,isGrouped:i,showCheckmark:a,nodeProps:o,renderOption:c,renderLabel:l,handleClick:u,handleMouseEnter:d,handleMouseMove:f}=this,p=be(n,e),m=l?[l(t,n),a&&p]:[K(t[this.labelField],t,n),a&&p],h=o?.(t),g=s(`div`,Object.assign({},h,{class:[`${e}-base-select-option`,t.class,h?.class,{[`${e}-base-select-option--disabled`]:t.disabled,[`${e}-base-select-option--selected`]:n,[`${e}-base-select-option--grouped`]:i,[`${e}-base-select-option--pending`]:r,[`${e}-base-select-option--show-checkmark`]:a}],style:[h?.style||``,t.style||``],onClick:$([u,h?.onClick]),onMouseenter:$([d,h?.onMouseenter]),onMousemove:$([f,h?.onMousemove])}),s(`div`,{class:`${e}-base-select-option__content`},m));return t.render?t.render({node:g,option:t,selected:n}):c?c({node:g,option:t,selected:n}):g}}),Se=y(`base-select-menu`,`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[y(`scrollbar`,`
 max-height: var(--n-height);
 `),y(`virtual-list`,`
 max-height: var(--n-height);
 `),y(`base-select-option`,`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[T(`content`,`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),y(`base-select-group-header`,`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),y(`base-select-menu-option-wrapper`,`
 position: relative;
 width: 100%;
 `),T(`loading, empty`,`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),T(`loading`,`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),T(`header`,`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),T(`action`,`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),y(`base-select-group-header`,`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),y(`base-select-option`,`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[b(`show-checkmark`,`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),w(`&::before`,`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),w(`&:active`,`
 color: var(--n-option-text-color-pressed);
 `),b(`grouped`,`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),b(`pending`,[w(`&::before`,`
 background-color: var(--n-option-color-pending);
 `)]),b(`selected`,`
 color: var(--n-option-text-color-active);
 `,[w(`&::before`,`
 background-color: var(--n-option-color-active);
 `),b(`pending`,[w(`&::before`,`
 background-color: var(--n-option-color-active-pending);
 `)])]),b(`disabled`,`
 cursor: not-allowed;
 `,[x(`selected`,`
 color: var(--n-option-text-color-disabled);
 `),b(`selected`,`
 opacity: var(--n-option-opacity-disabled);
 `)]),T(`check`,`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[Z({enterScale:`0.5`})])])]);n(),g();var Ce=e({name:`InternalSelectMenu`,props:Object.assign(Object.assign({},S.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:`medium`},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:`label`},valueField:{type:String,default:`value`},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,scrollbarProps:Object,onToggle:Function}),setup(e){let{mergedClsPrefixRef:n,mergedRtlRef:a,mergedComponentPropsRef:s}=ce(e),c=E(`InternalSelectMenu`,a,n),u=S(`InternalSelectMenu`,`-internal-select-menu`,Se,H,e,t(e,`clsPrefix`)),d=_(null),f=_(null),m=_(null),h=l(()=>e.treeMate.getFlattenedNodes()),g=l(()=>X(h.value)),y=_(null);function b(){let{treeMate:t}=e,n=null,{value:r}=e;r===null?n=t.getFirstAvailableNode():(n=e.multiple?t.getNode((r||[])[(r||[]).length-1]):t.getNode(r),(!n||n.disabled)&&(n=t.getFirstAvailableNode())),U(n||null)}function x(){let{value:t}=y;t&&!e.treeMate.getNode(t.key)&&(y.value=null)}let w;p(()=>e.show,t=>{t?w=p(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?b():x(),v(oe)):x()},{immediate:!0}):w?.()},{immediate:!0}),i(()=>{w?.()});let T=l(()=>j(u.value.self[C(`optionHeight`,e.size)])),ee=l(()=>A(u.value.self[C(`padding`,e.size)])),O=l(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),k=l(()=>{let e=h.value;return e&&e.length===0}),M=l(()=>s?.value?.Select?.renderEmpty);function te(t){let{onToggle:n}=e;n&&n(t)}function ne(t){let{onScroll:n}=e;n&&n(t)}function re(e){var t;(t=m.value)==null||t.sync(),ne(e)}function P(){var e;(e=m.value)==null||e.sync()}function F(){let{value:e}=y;return e||null}function L(e,t){t.disabled||U(t,!1)}function R(e,t){t.disabled||te(t)}function z(t){var n;D(t,`action`)||(n=e.onKeyup)==null||n.call(e,t)}function B(t){var n;D(t,`action`)||(n=e.onKeydown)==null||n.call(e,t)}function V(t){var n;(n=e.onMousedown)==null||n.call(e,t),!e.focusable&&t.preventDefault()}function ie(){let{value:e}=y;e&&U(e.getNext({loop:!0}),!0)}function ae(){let{value:e}=y;e&&U(e.getPrev({loop:!0}),!0)}function U(e,t=!1){y.value=e,t&&oe()}function oe(){var t,n;let r=y.value;if(!r)return;let i=g.value(r.key);i!==null&&(e.virtualScroll?(t=f.value)==null||t.scrollTo({index:i}):(n=m.value)==null||n.scrollTo({index:i,elSize:T.value}))}function W(t){var n;d.value?.contains(t.target)&&((n=e.onFocus)==null||n.call(e,t))}function G(t){var n;d.value?.contains(t.relatedTarget)||(n=e.onBlur)==null||n.call(e,t)}o(I,{handleOptionMouseEnter:L,handleOptionClick:R,valueSetRef:O,pendingTmNodeRef:y,nodePropsRef:t(e,`nodeProps`),showCheckmarkRef:t(e,`showCheckmark`),multipleRef:t(e,`multiple`),valueRef:t(e,`value`),renderLabelRef:t(e,`renderLabel`),renderOptionRef:t(e,`renderOption`),labelFieldRef:t(e,`labelField`),valueFieldRef:t(e,`valueField`)}),o(N,d),r(()=>{let{value:e}=m;e&&e.sync()});let K=l(()=>{let{size:t}=e,{common:{cubicBezierEaseInOut:n},self:{height:r,borderRadius:i,color:a,groupHeaderTextColor:o,actionDividerColor:s,optionTextColorPressed:c,optionTextColor:l,optionTextColorDisabled:d,optionTextColorActive:f,optionOpacityDisabled:p,optionCheckColor:m,actionTextColor:h,optionColorPending:g,optionColorActive:_,loadingColor:v,loadingSize:y,optionColorActivePending:b,[C(`optionFontSize`,t)]:x,[C(`optionHeight`,t)]:S,[C(`optionPadding`,t)]:w}}=u.value;return{"--n-height":r,"--n-action-divider-color":s,"--n-action-text-color":h,"--n-bezier":n,"--n-border-radius":i,"--n-color":a,"--n-option-font-size":x,"--n-group-header-text-color":o,"--n-option-check-color":m,"--n-option-color-pending":g,"--n-option-color-active":_,"--n-option-color-active-pending":b,"--n-option-height":S,"--n-option-opacity-disabled":p,"--n-option-text-color":l,"--n-option-text-color-active":f,"--n-option-text-color-disabled":d,"--n-option-text-color-pressed":c,"--n-option-padding":w,"--n-option-padding-left":A(w,`left`),"--n-option-padding-right":A(w,`right`),"--n-loading-color":v,"--n-loading-size":y}}),{inlineThemeDisabled:q}=e,se=q?le(`internal-select-menu`,l(()=>e.size[0]),K,e):void 0,ue={selfRef:d,next:ie,prev:ae,getPendingTmNode:F};return ge(d,e.onResize),Object.assign({mergedTheme:u,mergedClsPrefix:n,rtlEnabled:c,virtualListRef:f,scrollbarRef:m,itemSize:T,padding:ee,flattenedNodes:h,empty:k,mergedRenderEmpty:M,virtualListContainer(){let{value:e}=f;return e?.listElRef},virtualListContent(){let{value:e}=f;return e?.itemsElRef},doScroll:ne,handleFocusin:W,handleFocusout:G,handleKeyUp:z,handleKeyDown:B,handleMouseDown:V,handleVirtualListResize:P,handleVirtualListScroll:re,cssVars:q?void 0:K,themeClass:se?.themeClass,onRender:se?.onRender},ue)},render(){let{$slots:e,virtualScroll:t,clsPrefix:n,mergedTheme:r,themeClass:i,onRender:a}=this;return a?.(),s(`div`,{ref:`selfRef`,tabindex:this.focusable?0:-1,class:[`${n}-base-select-menu`,`${n}-base-select-menu--${this.size}-size`,this.rtlEnabled&&`${n}-base-select-menu--rtl`,i,this.multiple&&`${n}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},q(e.header,e=>e&&s(`div`,{class:`${n}-base-select-menu__header`,"data-header":!0,key:`header`},e)),this.loading?s(`div`,{class:`${n}-base-select-menu__loading`},s(me,{clsPrefix:n,strokeWidth:20})):this.empty?s(`div`,{class:`${n}-base-select-menu__empty`,"data-empty":!0},se(e.empty,()=>[this.mergedRenderEmpty?.call(this)||s(J,{theme:r.peers.Empty,themeOverrides:r.peerOverrides.Empty,size:this.size})])):s(k,Object.assign({ref:`scrollbarRef`,theme:r.peers.Scrollbar,themeOverrides:r.peerOverrides.Scrollbar,scrollable:this.scrollable,container:t?this.virtualListContainer:void 0,content:t?this.virtualListContent:void 0,onScroll:t?void 0:this.doScroll},this.scrollbarProps),{default:()=>t?s(ie,{ref:`virtualListRef`,class:`${n}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:e})=>e.isGroup?s(ye,{key:e.key,clsPrefix:n,tmNode:e}):e.ignored?null:s(xe,{clsPrefix:n,key:e.key,tmNode:e})}):s(`div`,{class:`${n}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(e=>e.isGroup?s(ye,{key:e.key,clsPrefix:n,tmNode:e}):s(xe,{clsPrefix:n,key:e.key,tmNode:e})))}),q(e.action,e=>e&&[s(`div`,{class:`${n}-base-select-menu__action`,"data-action":!0,key:`action`},e),s(Y,{onFocus:this.onTabOut,key:`focus-detector`})]))}}),we=w([y(`base-selection`,`
 --n-padding-single: var(--n-padding-single-top) var(--n-padding-single-right) var(--n-padding-single-bottom) var(--n-padding-single-left);
 --n-padding-multiple: var(--n-padding-multiple-top) var(--n-padding-multiple-right) var(--n-padding-multiple-bottom) var(--n-padding-multiple-left);
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[y(`base-loading`,`
 color: var(--n-loading-color);
 `),y(`base-selection-tags`,`min-height: var(--n-height);`),T(`border, state-border`,`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),T(`state-border`,`
 z-index: 1;
 border-color: #0000;
 `),y(`base-suffix`,`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[T(`arrow`,`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),y(`base-selection-overlay`,`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[T(`wrapper`,`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),y(`base-selection-placeholder`,`
 color: var(--n-placeholder-color);
 `,[T(`inner`,`
 max-width: 100%;
 overflow: hidden;
 `)]),y(`base-selection-tags`,`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),y(`base-selection-label`,`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[y(`base-selection-input`,`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[T(`content`,`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),T(`render-label`,`
 color: var(--n-text-color);
 `)]),x(`disabled`,[w(`&:hover`,[T(`state-border`,`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),b(`focus`,[T(`state-border`,`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),b(`active`,[T(`state-border`,`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),y(`base-selection-label`,`background-color: var(--n-color-active);`),y(`base-selection-tags`,`background-color: var(--n-color-active);`)])]),b(`disabled`,`cursor: not-allowed;`,[T(`arrow`,`
 color: var(--n-arrow-color-disabled);
 `),y(`base-selection-label`,`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[y(`base-selection-input`,`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),T(`render-label`,`
 color: var(--n-text-color-disabled);
 `)]),y(`base-selection-tags`,`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),y(`base-selection-placeholder`,`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),y(`base-selection-input-tag`,`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[T(`input`,`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),T(`mirror`,`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),[`warning`,`error`].map(e=>b(`${e}-status`,[T(`state-border`,`border: var(--n-border-${e});`),x(`disabled`,[w(`&:hover`,[T(`state-border`,`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),b(`active`,[T(`state-border`,`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),y(`base-selection-label`,`background-color: var(--n-color-active-${e});`),y(`base-selection-tags`,`background-color: var(--n-color-active-${e});`)]),b(`focus`,[T(`state-border`,`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),y(`base-selection-popover`,`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),y(`base-selection-tag-wrapper`,`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[w(`&:last-child`,`padding-right: 0;`),y(`tag`,`
 font-size: 14px;
 max-width: 100%;
 `,[T(`content`,`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]);n(),g();var Te=e({name:`InternalSelection`,props:Object.assign(Object.assign({},S.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:``},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:`label`},valueField:{type:String,default:`value`},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:`medium`},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){let{mergedClsPrefixRef:n,mergedRtlRef:i}=ce(e),a=E(`InternalSelection`,i,n),o=_(null),s=_(null),c=_(null),u=_(null),d=_(null),f=_(null),m=_(null),g=_(null),y=_(null),b=_(null),x=_(!1),w=_(!1),T=_(!1),D=S(`InternalSelection`,`-internal-selection`,we,ae,e,t(e,`clsPrefix`)),ee=l(()=>e.clearable&&!e.disabled&&(T.value||e.active)),O=l(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):K(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),k=l(()=>{let t=e.selectedOption;if(t)return t[e.labelField]}),j=l(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function M(){var t;let{value:n}=o;if(n){let{value:r}=s;r&&(r.style.width=`${n.offsetWidth}px`,e.maxTagCount!==`responsive`&&((t=y.value)==null||t.sync({showAllItemsBeforeCalculate:!1})))}}function te(){let{value:e}=b;e&&(e.style.display=`none`)}function ne(){let{value:e}=b;e&&(e.style.display=`inline-block`)}p(t(e,`active`),e=>{e||te()}),p(t(e,`pattern`),()=>{e.multiple&&v(M)});function re(t){let{onFocus:n}=e;n&&n(t)}function N(t){let{onBlur:n}=e;n&&n(t)}function P(t){let{onDeleteOption:n}=e;n&&n(t)}function F(t){let{onClear:n}=e;n&&n(t)}function I(t){let{onPatternInput:n}=e;n&&n(t)}function L(e){(!e.relatedTarget||!c.value?.contains(e.relatedTarget))&&re(e)}function R(e){c.value?.contains(e.relatedTarget)||N(e)}function z(e){F(e)}function B(){T.value=!0}function V(){T.value=!1}function ie(t){!e.active||!e.filterable||t.target!==s.value&&t.preventDefault()}function H(e){P(e)}let U=_(!1);function oe(t){if(t.key===`Backspace`&&!U.value&&!e.pattern.length){let{selectedOptions:t}=e;t?.length&&H(t[t.length-1])}}let W=null;function G(t){let{value:n}=o;n&&(n.textContent=t.target.value,M()),e.ignoreComposition&&U.value?W=t:I(t)}function q(){U.value=!0}function se(){U.value=!1,e.ignoreComposition&&I(W),W=null}function ue(t){var n;w.value=!0,(n=e.onPatternFocus)==null||n.call(e,t)}function de(t){var n;w.value=!1,(n=e.onPatternBlur)==null||n.call(e,t)}function fe(){var t,n;if(e.filterable)w.value=!1,(t=f.value)==null||t.blur(),(n=s.value)==null||n.blur();else if(e.multiple){let{value:e}=u;e?.blur()}else{let{value:e}=d;e?.blur()}}function pe(){var t,n,r;e.filterable?(w.value=!1,(t=f.value)==null||t.focus()):e.multiple?(n=u.value)==null||n.focus():(r=d.value)==null||r.focus()}function J(){let{value:e}=s;e&&(ne(),e.focus())}function Y(){let{value:e}=s;e&&e.blur()}function me(e){let{value:t}=m;t&&t.setTextContent(`+${e}`)}function X(){let{value:e}=g;return e}function he(){return s.value}let Z=null;function Q(){Z!==null&&window.clearTimeout(Z)}function _e(){e.active||(Q(),Z=window.setTimeout(()=>{j.value&&(x.value=!0)},100))}function $(){Q()}function ve(e){e||(Q(),x.value=!1)}p(j,e=>{e||(x.value=!1)}),r(()=>{h(()=>{let t=f.value;t&&(e.disabled?t.removeAttribute(`tabindex`):t.tabIndex=w.value?-1:0)})}),ge(c,e.onResize);let{inlineThemeDisabled:ye}=e,be=l(()=>{let{size:t}=e,{common:{cubicBezierEaseInOut:n},self:{fontWeight:r,borderRadius:i,color:a,placeholderColor:o,textColor:s,paddingSingle:c,paddingMultiple:l,caretColor:u,colorDisabled:d,textColorDisabled:f,placeholderColorDisabled:p,colorActive:m,boxShadowFocus:h,boxShadowActive:g,boxShadowHover:_,border:v,borderFocus:y,borderHover:b,borderActive:x,arrowColor:S,arrowColorDisabled:w,loadingColor:T,colorActiveWarning:E,boxShadowFocusWarning:ee,boxShadowActiveWarning:O,boxShadowHoverWarning:k,borderWarning:j,borderFocusWarning:M,borderHoverWarning:te,borderActiveWarning:ne,colorActiveError:re,boxShadowFocusError:N,boxShadowActiveError:P,boxShadowHoverError:F,borderError:I,borderFocusError:L,borderHoverError:R,borderActiveError:z,clearColor:B,clearColorHover:V,clearColorPressed:ie,clearSize:H,arrowSize:ae,[C(`height`,t)]:U,[C(`fontSize`,t)]:oe}}=D.value,W=A(c),G=A(l);return{"--n-bezier":n,"--n-border":v,"--n-border-active":x,"--n-border-focus":y,"--n-border-hover":b,"--n-border-radius":i,"--n-box-shadow-active":g,"--n-box-shadow-focus":h,"--n-box-shadow-hover":_,"--n-caret-color":u,"--n-color":a,"--n-color-active":m,"--n-color-disabled":d,"--n-font-size":oe,"--n-height":U,"--n-padding-single-top":W.top,"--n-padding-multiple-top":G.top,"--n-padding-single-right":W.right,"--n-padding-multiple-right":G.right,"--n-padding-single-left":W.left,"--n-padding-multiple-left":G.left,"--n-padding-single-bottom":W.bottom,"--n-padding-multiple-bottom":G.bottom,"--n-placeholder-color":o,"--n-placeholder-color-disabled":p,"--n-text-color":s,"--n-text-color-disabled":f,"--n-arrow-color":S,"--n-arrow-color-disabled":w,"--n-loading-color":T,"--n-color-active-warning":E,"--n-box-shadow-focus-warning":ee,"--n-box-shadow-active-warning":O,"--n-box-shadow-hover-warning":k,"--n-border-warning":j,"--n-border-focus-warning":M,"--n-border-hover-warning":te,"--n-border-active-warning":ne,"--n-color-active-error":re,"--n-box-shadow-focus-error":N,"--n-box-shadow-active-error":P,"--n-box-shadow-hover-error":F,"--n-border-error":I,"--n-border-focus-error":L,"--n-border-hover-error":R,"--n-border-active-error":z,"--n-clear-size":H,"--n-clear-color":B,"--n-clear-color-hover":V,"--n-clear-color-pressed":ie,"--n-arrow-size":ae,"--n-font-weight":r}}),xe=ye?le(`internal-selection`,l(()=>e.size[0]),be,e):void 0;return{mergedTheme:D,mergedClearable:ee,mergedClsPrefix:n,rtlEnabled:a,patternInputFocused:w,filterablePlaceholder:O,label:k,selected:j,showTagsPanel:x,isComposing:U,counterRef:m,counterWrapperRef:g,patternInputMirrorRef:o,patternInputRef:s,selfRef:c,multipleElRef:u,singleElRef:d,patternInputWrapperRef:f,overflowRef:y,inputTagElRef:b,handleMouseDown:ie,handleFocusin:L,handleClear:z,handleMouseEnter:B,handleMouseLeave:V,handleDeleteOption:H,handlePatternKeyDown:oe,handlePatternInputInput:G,handlePatternInputBlur:de,handlePatternInputFocus:ue,handleMouseEnterCounter:_e,handleMouseLeaveCounter:$,handleFocusout:R,handleCompositionEnd:se,handleCompositionStart:q,onPopoverUpdateShow:ve,focus:pe,focusInput:J,blur:fe,blurInput:Y,updateCounter:me,getCounter:X,getTail:he,renderLabel:e.renderLabel,cssVars:ye?void 0:be,themeClass:xe?.themeClass,onRender:xe?.onRender}},render(){let{status:e,multiple:t,size:n,disabled:r,filterable:i,maxTagCount:a,bordered:o,clsPrefix:c,ellipsisTagPopoverProps:l,onRender:u,renderTag:f,renderLabel:p}=this;u?.();let m=a===`responsive`,h=typeof a==`number`,g=m||h,_=s(O,null,{default:()=>s(pe,{clsPrefix:c,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var e;return(e=this.$slots).arrow?.call(e)}})}),v;if(t){let{labelField:e}=this,t=t=>s(`div`,{class:`${c}-base-selection-tag-wrapper`,key:t.value},f?f({option:t,handleClose:()=>{this.handleDeleteOption(t)}}):s(Q,{size:n,closable:!t.disabled,disabled:r,onClose:()=>{this.handleDeleteOption(t)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>p?p(t,!0):K(t[e],t,!0)})),o=()=>(h?this.selectedOptions.slice(0,a):this.selectedOptions).map(t),u=i?s(`div`,{class:`${c}-base-selection-input-tag`,ref:`inputTagElRef`,key:`__input-tag__`},s(`input`,Object.assign({},this.inputProps,{ref:`patternInputRef`,tabindex:-1,disabled:r,value:this.pattern,autofocus:this.autofocus,class:`${c}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),s(`span`,{ref:`patternInputMirrorRef`,class:`${c}-base-selection-input-tag__mirror`},this.pattern)):null,y=m?()=>s(`div`,{class:`${c}-base-selection-tag-wrapper`,ref:`counterWrapperRef`},s(Q,{size:n,ref:`counterRef`,onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:r})):void 0,b;if(h){let e=this.selectedOptions.length-a;e>0&&(b=s(`div`,{class:`${c}-base-selection-tag-wrapper`,key:`__counter__`},s(Q,{size:n,ref:`counterRef`,onMouseenter:this.handleMouseEnterCounter,disabled:r},{default:()=>`+${e}`})))}let x=m?i?s(U,{ref:`overflowRef`,updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:`100%`,display:`flex`,overflow:`hidden`}},{default:o,counter:y,tail:()=>u}):s(U,{ref:`overflowRef`,updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:`100%`,display:`flex`,overflow:`hidden`}},{default:o,counter:y}):h&&b?o().concat(b):o(),S=g?()=>s(`div`,{class:`${c}-base-selection-popover`},m?o():this.selectedOptions.map(t)):void 0,C=g?Object.assign({show:this.showTagsPanel,trigger:`hover`,overlap:!0,placement:`top`,width:`trigger`,onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},l):null,w=!this.selected&&(!this.active||!this.pattern&&!this.isComposing)?s(`div`,{class:`${c}-base-selection-placeholder ${c}-base-selection-overlay`},s(`div`,{class:`${c}-base-selection-placeholder__inner`},this.placeholder)):null,T=i?s(`div`,{ref:`patternInputWrapperRef`,class:`${c}-base-selection-tags`},x,m?null:u,_):s(`div`,{ref:`multipleElRef`,class:`${c}-base-selection-tags`,tabindex:r?void 0:0},x,_);v=s(d,null,g?s(z,Object.assign({},C,{scrollable:!0,style:`max-height: calc(var(--v-target-height) * 6.6);`}),{trigger:()=>T,default:S}):T,w)}else if(i){let e=this.pattern||this.isComposing,t=this.active?!e:!this.selected,n=this.active?!1:this.selected;v=s(`div`,{ref:`patternInputWrapperRef`,class:`${c}-base-selection-label`,title:this.patternInputFocused?void 0:_e(this.label)},s(`input`,Object.assign({},this.inputProps,{ref:`patternInputRef`,class:`${c}-base-selection-input`,value:this.active?this.pattern:``,placeholder:``,readonly:r,disabled:r,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),n?s(`div`,{class:`${c}-base-selection-label__render-label ${c}-base-selection-overlay`,key:`input`},s(`div`,{class:`${c}-base-selection-overlay__wrapper`},f?f({option:this.selectedOption,handleClose:()=>{}}):p?p(this.selectedOption,!0):K(this.label,this.selectedOption,!0))):null,t?s(`div`,{class:`${c}-base-selection-placeholder ${c}-base-selection-overlay`,key:`placeholder`},s(`div`,{class:`${c}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,_)}else v=s(`div`,{ref:`singleElRef`,class:`${c}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label===void 0?s(`div`,{class:`${c}-base-selection-placeholder ${c}-base-selection-overlay`,key:`placeholder`},s(`div`,{class:`${c}-base-selection-placeholder__inner`},this.placeholder)):s(`div`,{class:`${c}-base-selection-input`,title:_e(this.label),key:`input`},s(`div`,{class:`${c}-base-selection-input__content`},f?f({option:this.selectedOption,handleClose:()=>{}}):p?p(this.selectedOption,!0):K(this.label,this.selectedOption,!0))),_);return s(`div`,{ref:`selfRef`,class:[`${c}-base-selection`,this.rtlEnabled&&`${c}-base-selection--rtl`,this.themeClass,e&&`${c}-base-selection--${e}-status`,{[`${c}-base-selection--active`]:this.active,[`${c}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${c}-base-selection--disabled`]:this.disabled,[`${c}-base-selection--multiple`]:this.multiple,[`${c}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},v,o?s(`div`,{class:`${c}-base-selection__border`}):null,o?s(`div`,{class:`${c}-base-selection__state-border`}):null)}});function Ee(e){return e.type===`group`}function De(e){return e.type===`ignored`}function Oe(e,t){try{return!!(1+t.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function ke(e,t){return{getIsGroup:Ee,getIgnored:De,getKey(t){return Ee(t)?t.name||t.key||`key-required`:t[e]},getChildren(e){return e[t]}}}function Ae(e,t,n,r){if(!t)return e;function i(e){if(!Array.isArray(e))return[];let a=[];for(let o of e)if(Ee(o)){let e=i(o[r]);e.length&&a.push(Object.assign({},o,{[r]:e}))}else if(De(o))continue;else t(n,o)&&a.push(o);return a}return i(e)}function je(e,t,n){let r=new Map;return e.forEach(e=>{Ee(e)?e[n].forEach(e=>{r.set(e[t],e)}):r.set(e[t],e)}),r}var Me=w([y(`select`,`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `),y(`select-menu`,`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[Z({originalTransition:`background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)`})])]);n(),g(),c();var Ne=e({name:`Select`,props:Object.assign(Object.assign({},S.props),{to:P.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearCreatedOptionsOnClear:{type:Boolean,default:!0},clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,menuSize:{type:String},filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:`bottom-start`},widthMode:{type:String,default:`trigger`},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:`label`},valueField:{type:String,default:`value`},childrenField:{type:String,default:`children`},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:`show`},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},scrollbarProps:Object,onChange:[Function,Array],items:Array}),slots:Object,setup(e){let{mergedClsPrefixRef:n,mergedBorderedRef:r,namespaceRef:i,inlineThemeDisabled:a,mergedComponentPropsRef:o}=ce(e),s=S(`Select`,`-select`,Me,oe,e,n),c=_(e.defaultValue),u=te(t(e,`value`),c),d=_(!1),f=_(``),m=re(e,[`items`,`options`]),h=_([]),g=_([]),v=l(()=>g.value.concat(h.value).concat(m.value)),y=l(()=>{let{filter:t}=e;if(t)return t;let{labelField:n,valueField:r}=e;return(e,t)=>{if(!t)return!1;let i=t[n];if(typeof i==`string`)return Oe(e,i);let a=t[r];return typeof a==`string`?Oe(e,a):typeof a==`number`?Oe(e,String(a)):!1}}),b=l(()=>{if(e.remote)return m.value;{let{value:t}=v,{value:n}=f;return!n.length||!e.filterable?t:Ae(t,y.value,n,e.childrenField)}}),x=l(()=>{let{valueField:t,childrenField:n}=e,r=ke(t,n);return he(b.value,r)}),C=l(()=>je(v.value,e.valueField,e.childrenField)),w=_(!1),T=te(t(e,`show`),w),E=_(null),O=_(null),k=_(null),{localeRef:A}=de(`Select`),j=l(()=>e.placeholder??A.value.placeholder),M=[],N=_(new Map),F=l(()=>{let{fallbackOption:t}=e;if(t===void 0){let{labelField:t,valueField:n}=e;return e=>({[t]:String(e),[n]:e})}return t===!1?!1:e=>Object.assign(t(e),{value:e})});function I(t){let n=e.remote,{value:r}=N,{value:i}=C,{value:a}=F,o=[];return t.forEach(e=>{if(i.has(e))o.push(i.get(e));else if(n&&r.has(e))o.push(r.get(e));else if(a){let t=a(e);t&&o.push(t)}}),o}let L=l(()=>{if(e.multiple){let{value:e}=u;return Array.isArray(e)?I(e):[]}return null}),R=l(()=>{let{value:t}=u;return!e.multiple&&!Array.isArray(t)?t===null?null:I([t])[0]||null:null}),z=ue(e,{mergedSize:t=>{let{size:n}=e;if(n)return n;let{mergedSize:r}=t||{};return r?.value?r.value:o?.value?.Select?.size||`medium`}}),{mergedSizeRef:B,mergedDisabledRef:V,mergedStatusRef:ie}=z;function H(t,n){let{onChange:r,"onUpdate:value":i,onUpdateValue:a}=e,{nTriggerFormChange:o,nTriggerFormInput:s}=z;r&&G(r,t,n),a&&G(a,t,n),i&&G(i,t,n),c.value=t,o(),s()}function ae(t){let{onBlur:n}=e,{nTriggerFormBlur:r}=z;n&&G(n,t),r()}function U(){let{onClear:t}=e;t&&G(t)}function K(t){let{onFocus:n,showOnFocus:r}=e,{nTriggerFormFocus:i}=z;n&&G(n,t),i(),r&&J()}function q(t){let{onSearch:n}=e;n&&G(n,t)}function se(t){let{onScroll:n}=e;n&&G(n,t)}function fe(){var t;let{remote:n,multiple:r}=e;if(n){let{value:n}=N;if(r){let{valueField:r}=e;(t=L.value)==null||t.forEach(e=>{n.set(e[r],e)})}else{let t=R.value;t&&n.set(t[e.valueField],t)}}}function pe(t){let{onUpdateShow:n,"onUpdate:show":r}=e;n&&G(n,t),r&&G(r,t),w.value=t}function J(){V.value||(pe(!0),w.value=!0,e.filterable&&Le())}function Y(){pe(!1)}function me(){f.value=``,g.value=M}let X=_(!1);function Z(){e.filterable&&(X.value=!0)}function Q(){e.filterable&&(X.value=!1,T.value||me())}function ge(){V.value||(T.value?e.filterable?Le():Y():J())}function _e(e){(k.value?.selfRef)?.contains(e.relatedTarget)||(d.value=!1,ae(e),Y())}function $(e){K(e),d.value=!0}function ve(){d.value=!0}function ye(e){E.value?.$el.contains(e.relatedTarget)||(d.value=!1,ae(e),Y())}function be(){var e;(e=E.value)==null||e.focus(),Y()}function xe(e){T.value&&(E.value?.$el.contains(ee(e))||Y())}function Se(t){if(!Array.isArray(t))return[];if(F.value)return Array.from(t);{let{remote:n}=e,{value:r}=C;if(n){let{value:e}=N;return t.filter(t=>r.has(t)||e.has(t))}else return t.filter(e=>r.has(e))}}function Ce(e){we(e.rawNode)}function we(t){if(V.value)return;let{tag:n,remote:r,clearFilterAfterSelect:i,valueField:a}=e;if(n&&!r){let{value:e}=g,t=e[0]||null;if(t){let e=h.value;e.length?e.push(t):h.value=[t],g.value=M}}if(r&&N.value.set(t[a],t),e.multiple){let e=Se(u.value),o=e.findIndex(e=>e===t[a]);if(~o){if(e.splice(o,1),n&&!r){let e=Te(t[a]);~e&&(h.value.splice(e,1),i&&(f.value=``))}}else e.push(t[a]),i&&(f.value=``);H(e,I(e))}else{if(n&&!r){let e=Te(t[a]);~e?h.value=[h.value[e]]:h.value=M}Ie(),Y(),H(t[a],t)}}function Te(t){return h.value.findIndex(n=>n[e.valueField]===t)}function Ee(t){T.value||J();let{value:n}=t.target;f.value=n;let{tag:r,remote:i}=e;if(q(n),r&&!i){if(!n){g.value=M;return}let{onCreate:t}=e,r=t?t(n):{[e.labelField]:n,[e.valueField]:n},{valueField:i,labelField:a}=e;m.value.some(e=>e[i]===r[i]||e[a]===r[a])||h.value.some(e=>e[i]===r[i]||e[a]===r[a])?g.value=M:g.value=[r]}}function De(t){t.stopPropagation();let{multiple:n,tag:r,remote:i,clearCreatedOptionsOnClear:a}=e;!n&&e.filterable&&Y(),r&&!i&&a&&(h.value=M),U(),n?H([],[]):H(null,null)}function Ne(e){!D(e,`action`)&&!D(e,`empty`)&&!D(e,`header`)&&e.preventDefault()}function Pe(e){se(e)}function Fe(t){var n,r,i;if(!e.keyboard){t.preventDefault();return}switch(t.key){case` `:if(e.filterable)break;t.preventDefault();case`Enter`:if(!E.value?.isComposing){if(T.value){let t=k.value?.getPendingTmNode();t?Ce(t):e.filterable||(Y(),Ie())}else if(J(),e.tag&&X.value){let t=g.value[0];if(t){let n=t[e.valueField],{value:r}=u;e.multiple&&Array.isArray(r)&&r.includes(n)||we(t)}}}t.preventDefault();break;case`ArrowUp`:if(t.preventDefault(),e.loading)return;T.value&&((n=k.value)==null||n.prev());break;case`ArrowDown`:if(t.preventDefault(),e.loading)return;T.value?(r=k.value)==null||r.next():J();break;case`Escape`:T.value&&(W(t),Y()),(i=E.value)==null||i.focus();break}}function Ie(){var e;(e=E.value)==null||e.focus()}function Le(){var e;(e=E.value)==null||e.focusInput()}function Re(){var e;T.value&&((e=O.value)==null||e.syncPosition())}fe(),p(t(e,`options`),fe);let ze={focus:()=>{var e;(e=E.value)==null||e.focus()},focusInput:()=>{var e;(e=E.value)==null||e.focusInput()},blur:()=>{var e;(e=E.value)==null||e.blur()},blurInput:()=>{var e;(e=E.value)==null||e.blurInput()}},Be=l(()=>{let{self:{menuBoxShadow:e}}=s.value;return{"--n-menu-box-shadow":e}}),Ve=a?le(`select`,void 0,Be,e):void 0;return Object.assign(Object.assign({},ze),{mergedStatus:ie,mergedClsPrefix:n,mergedBordered:r,namespace:i,treeMate:x,isMounted:ne(),triggerRef:E,menuRef:k,pattern:f,uncontrolledShow:w,mergedShow:T,adjustedTo:P(e),uncontrolledValue:c,mergedValue:u,followerRef:O,localizedPlaceholder:j,selectedOption:R,selectedOptions:L,mergedSize:B,mergedDisabled:V,focused:d,activeWithoutMenuOpen:X,inlineThemeDisabled:a,onTriggerInputFocus:Z,onTriggerInputBlur:Q,handleTriggerOrMenuResize:Re,handleMenuFocus:ve,handleMenuBlur:ye,handleMenuTabOut:be,handleTriggerClick:ge,handleToggle:Ce,handleDeleteOption:we,handlePatternInput:Ee,handleClear:De,handleTriggerBlur:_e,handleTriggerFocus:$,handleKeydown:Fe,handleMenuAfterLeave:me,handleMenuClickOutside:xe,handleMenuScroll:Pe,handleMenuKeydown:Fe,handleMenuMousedown:Ne,mergedTheme:s,cssVars:a?void 0:Be,themeClass:Ve?.themeClass,onRender:Ve?.onRender})},render(){return s(`div`,{class:`${this.mergedClsPrefix}-select`},s(L,null,{default:()=>[s(F,null,{default:()=>s(Te,{ref:`triggerRef`,inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e;return[(e=this.$slots).arrow?.call(e)]}})}),s(R,{ref:`followerRef`,show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===P.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?`target`:void 0,minWidth:`target`,placement:this.placement},{default:()=>s(f,{name:`fade-in-scale-up-transition`,appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e;return this.mergedShow||this.displayDirective===`show`?((e=this.onRender)==null||e.call(this),m(s(Ce,Object.assign({},this.menuProps,{ref:`menuRef`,onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,this.menuProps?.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:this.menuSize,renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[this.menuProps?.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange,scrollbarProps:this.scrollbarProps}),{empty:()=>{var e;return[(e=this.$slots).empty?.call(e)]},header:()=>{var e;return[(e=this.$slots).header?.call(e)]},action:()=>{var e;return[(e=this.$slots).action?.call(e)]}}),this.displayDirective===`show`?[[u,this.mergedShow],[B,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[B,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});export{$ as i,ke as n,Ce as r,Ne as t};