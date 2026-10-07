import{A as e,Ct as t,F as n,G as r,I as i,J as a,N as o,b as s,h as c,j as l,nt as u,rt as d,ut as f,vt as p,z as m}from"./vue.runtime.esm-bundler-DZZTqpJU.js";import{c as h,d as g,f as _,n as v,p as y,s as b,u as x}from"./use-theme--pjWdM-N.js";import{t as ee}from"./use-rtl-DxDqUyON.js";import{t as S}from"./Scrollbar-CzXWYKLa.js";import{r as te}from"./css-DE6X-JUA.js";import{n as C,t as w}from"./delegate-CJ0pWS92.js";import{t as ne}from"./use-memo-Y5dSqWt3.js";import{t as re}from"./use-merged-state-B5grpmgQ.js";import{t as T}from"./create-injection-key-Dfvzj6n2.js";import{t as E}from"./VResizeObserver-CBatuD_H.js";import{t as D}from"./call-fCmD0dxi.js";import{a as O,i as k,r as A}from"./resolve-slot-CNYZEkGJ.js";import{t as ie}from"./use-config-B_Ca_QT7.js";import{t as ae}from"./use-css-vars-class-LmlPa6Qd.js";import{n as oe}from"./use-form-item-C8Vx-E3x.js";import{t as se}from"./use-locale-BgIChK64.js";import{n as j}from"./replaceable-DmEc4phL.js";import{t as ce}from"./use-style-Dm0FV5ZE.js";import{n as M,t as N}from"./Suffix-D75x1Vlr.js";import{t as P}from"./Eye-DI8NNNpT.js";import{t as le}from"./browser-B_EWS_Ix.js";import{t as ue}from"./light-CXUM8iPg.js";n();var F=e({name:`EyeOff`,render(){return o(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 512 512`},o(`path`,{d:`M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z`,fill:`currentColor`}),o(`path`,{d:`M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z`,fill:`currentColor`}),o(`path`,{d:`M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z`,fill:`currentColor`}),o(`path`,{d:`M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z`,fill:`currentColor`}),o(`path`,{d:`M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z`,fill:`currentColor`}))}}),I=T(`n-input`),de=h(`input`,`
 max-width: 100%;
 cursor: text;
 line-height: 1.5;
 z-index: auto;
 outline: none;
 box-sizing: border-box;
 position: relative;
 display: inline-flex;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 --n-padding-vertical: calc((var(--n-height) - 1.5 * var(--n-font-size)) / 2);
`,[x(`input, textarea`,`
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),x(`input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder`,`
 box-sizing: border-box;
 font-size: inherit;
 line-height: 1.5;
 font-family: inherit;
 border: none;
 outline: none;
 background-color: #0000;
 text-align: inherit;
 transition:
 -webkit-text-fill-color .3s var(--n-bezier),
 caret-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 `),x(`input-el, textarea-el`,`
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `,[b(`&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb`,`
 width: 0;
 height: 0;
 display: none;
 `),b(`&::placeholder`,`
 color: #0000;
 -webkit-text-fill-color: transparent !important;
 `),b(`&:-webkit-autofill ~`,[x(`placeholder`,`display: none;`)])]),g(`round`,[_(`textarea`,`border-radius: calc(var(--n-height) / 2);`)]),x(`placeholder`,`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `,[b(`span`,`
 width: 100%;
 display: inline-block;
 `)]),g(`textarea`,[x(`placeholder`,`overflow: visible;`)]),_(`autosize`,`width: 100%;`),g(`autosize`,[x(`textarea-el, input-el`,`
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),h(`input-wrapper`,`
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `),x(`input-mirror`,`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre;
 pointer-events: none;
 `),x(`input-el`,`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[b(`&[type=password]::-ms-reveal`,`display: none;`),b(`+`,[x(`placeholder`,`
 display: flex;
 align-items: center; 
 `)])]),_(`textarea`,[x(`placeholder`,`white-space: nowrap;`)]),x(`eye`,`
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `),g(`textarea`,`width: 100%;`,[h(`input-word-count`,`
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `),g(`resizable`,[h(`input-wrapper`,`
 resize: vertical;
 min-height: var(--n-height);
 `)]),x(`textarea-el, textarea-mirror, placeholder`,`
 height: 100%;
 padding-left: 0;
 padding-right: 0;
 padding-top: var(--n-padding-vertical);
 padding-bottom: var(--n-padding-vertical);
 word-break: break-word;
 display: inline-block;
 vertical-align: bottom;
 box-sizing: border-box;
 line-height: var(--n-line-height-textarea);
 margin: 0;
 resize: none;
 white-space: pre-wrap;
 scroll-padding-block-end: var(--n-padding-vertical);
 `),x(`textarea-mirror`,`
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),g(`pair`,[x(`input-el, placeholder`,`text-align: center;`),x(`separator`,`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 white-space: nowrap;
 `,[h(`icon`,`
 color: var(--n-icon-color);
 `),h(`base-icon`,`
 color: var(--n-icon-color);
 `)])]),g(`disabled`,`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[x(`border`,`border: var(--n-border-disabled);`),x(`input-el, textarea-el`,`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `),x(`placeholder`,`color: var(--n-placeholder-color-disabled);`),x(`separator`,`color: var(--n-text-color-disabled);`,[h(`icon`,`
 color: var(--n-icon-color-disabled);
 `),h(`base-icon`,`
 color: var(--n-icon-color-disabled);
 `)]),h(`input-word-count`,`
 color: var(--n-count-text-color-disabled);
 `),x(`suffix, prefix`,`color: var(--n-text-color-disabled);`,[h(`icon`,`
 color: var(--n-icon-color-disabled);
 `),h(`internal-icon`,`
 color: var(--n-icon-color-disabled);
 `)])]),_(`disabled`,[x(`eye`,`
 color: var(--n-icon-color);
 cursor: pointer;
 `,[b(`&:hover`,`
 color: var(--n-icon-color-hover);
 `),b(`&:active`,`
 color: var(--n-icon-color-pressed);
 `)]),b(`&:hover`,[x(`state-border`,`border: var(--n-border-hover);`)]),g(`focus`,`background-color: var(--n-color-focus);`,[x(`state-border`,`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),x(`border, state-border`,`
 box-sizing: border-box;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: inherit;
 border: var(--n-border);
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),x(`state-border`,`
 border-color: #0000;
 z-index: 1;
 `),x(`prefix`,`margin-right: 4px;`),x(`suffix`,`
 margin-left: 4px;
 `),x(`suffix, prefix`,`
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `,[h(`base-loading`,`
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `),h(`base-clear`,`
 font-size: var(--n-icon-size);
 `,[x(`placeholder`,[h(`base-icon`,`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]),b(`>`,[h(`icon`,`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]),h(`base-icon`,`
 font-size: var(--n-icon-size);
 `)]),h(`input-word-count`,`
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),[`warning`,`error`].map(e=>g(`${e}-status`,[_(`disabled`,[h(`base-loading`,`
 color: var(--n-loading-color-${e})
 `),x(`input-el, textarea-el`,`
 caret-color: var(--n-caret-color-${e});
 `),x(`state-border`,`
 border: var(--n-border-${e});
 `),b(`&:hover`,[x(`state-border`,`
 border: var(--n-border-hover-${e});
 `)]),b(`&:focus`,`
 background-color: var(--n-color-focus-${e});
 `,[x(`state-border`,`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)]),g(`focus`,`
 background-color: var(--n-color-focus-${e});
 `,[x(`state-border`,`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),fe=h(`input`,[g(`disabled`,[x(`input-el, textarea-el`,`
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]);f(),n();function L(e){let t=0;for(let n of e)t++;return t}function R(e){return e===``||e==null}function pe(e){let t=p(null);function n(){let{value:n}=e;if(!n?.focus){i();return}let{selectionStart:r,selectionEnd:a,value:o}=n;if(r==null||a==null){i();return}t.value={start:r,end:a,beforeText:o.slice(0,r),afterText:o.slice(a)}}function r(){var n;let{value:r}=t,{value:i}=e;if(!r||!i)return;let{value:a}=i,{start:o,beforeText:s,afterText:c}=r,l=a.length;if(a.endsWith(c))l=a.length-c.length;else if(a.startsWith(s))l=s.length;else{let e=s[o-1],t=a.indexOf(e,o-1);t!==-1&&(l=t+1)}(n=i.setSelectionRange)==null||n.call(i,l,l)}function i(){t.value=null}return u(e,i),{recordCursor:n,restoreCursor:r}}n();var z=e({name:`InputWordCount`,setup(e,{slots:t}){let{mergedValueRef:n,maxlengthRef:r,mergedClsPrefixRef:a,countGraphemesRef:c}=i(I),l=s(()=>{let{value:e}=n;return e===null||Array.isArray(e)?0:(c.value||L)(e)});return()=>{let{value:e}=r,{value:i}=n;return o(`span`,{class:`${a.value}-input-word-count`},k(t.default,{value:i===null||Array.isArray(i)?``:i},()=>[e===void 0?l.value:`${l.value} / ${e}`]))}}});n(),f();var B=e({name:`Input`,props:Object.assign(Object.assign({},v.props),{bordered:{type:Boolean,default:void 0},type:{type:String,default:`text`},placeholder:[Array,String],defaultValue:{type:[String,Array],default:null},value:[String,Array],disabled:{type:Boolean,default:void 0},size:String,rows:{type:[Number,String],default:3},round:Boolean,minlength:[String,Number],maxlength:[String,Number],clearable:Boolean,autosize:{type:[Boolean,Object],default:!1},pair:Boolean,separator:String,readonly:{type:[String,Boolean],default:!1},passivelyActivated:Boolean,showPasswordOn:String,stateful:{type:Boolean,default:!0},autofocus:Boolean,inputProps:Object,resizable:{type:Boolean,default:!0},showCount:Boolean,loading:{type:Boolean,default:void 0},allowInput:Function,renderCount:Function,onMousedown:Function,onKeydown:Function,onKeyup:[Function,Array],onInput:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClick:[Function,Array],onChange:[Function,Array],onClear:[Function,Array],countGraphemes:Function,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],textDecoration:[String,Array],attrSize:{type:Number,default:20},onInputBlur:[Function,Array],onInputFocus:[Function,Array],onDeactivate:[Function,Array],onActivate:[Function,Array],onWrapperFocus:[Function,Array],onWrapperBlur:[Function,Array],internalDeactivateOnEnter:Boolean,internalForceFocus:Boolean,internalLoadingBeforeSuffix:{type:Boolean,default:!0},showPasswordToggle:Boolean}),slots:Object,setup(e){let{mergedClsPrefixRef:n,mergedBorderedRef:i,inlineThemeDisabled:o,mergedRtlRef:c,mergedComponentPropsRef:f}=ie(e),h=v(`Input`,`-input`,de,ue,e,n);le&&ce(`-input-safari`,fe,n);let g=p(null),_=p(null),b=p(null),x=p(null),S=p(null),T=p(null),E=p(null),O=pe(E),k=p(null),{localeRef:A}=se(`Input`),j=p(e.defaultValue),M=re(t(e,`value`),j),N=oe(e,{mergedSize:t=>{let{size:n}=e;if(n)return n;let{mergedSize:r}=t||{};return r?.value?r.value:f?.value?.Input?.size||`medium`}}),{mergedSizeRef:P,mergedDisabledRef:F,mergedStatusRef:L}=N,z=p(!1),B=p(!1),V=p(!1),H=p(!1),U=null,W=s(()=>{let{placeholder:t,pair:n}=e;return n?Array.isArray(t)?t:t===void 0?[``,``]:[t,t]:t===void 0?[A.value.placeholder]:[t]}),me=s(()=>{let{value:e}=V,{value:t}=M,{value:n}=W;return!e&&(R(t)||Array.isArray(t)&&R(t[0]))&&n[0]}),he=s(()=>{let{value:e}=V,{value:t}=M,{value:n}=W;return!e&&n[1]&&(R(t)||Array.isArray(t)&&R(t[1]))}),G=ne(()=>e.internalForceFocus||z.value),ge=ne(()=>{if(F.value||e.readonly||!e.clearable||!G.value&&!B.value)return!1;let{value:t}=M,{value:n}=G;return e.pair?!!(Array.isArray(t)&&(t[0]||t[1]))&&(B.value||n):!!t&&(B.value||n)}),K=s(()=>{let{showPasswordOn:t}=e;if(t)return t;if(e.showPasswordToggle)return`click`}),q=p(!1),_e=s(()=>{let{textDecoration:t}=e;return t?Array.isArray(t)?t.map(e=>({textDecoration:e})):[{textDecoration:t}]:[``,``]}),ve=p(void 0),ye=()=>{if(e.type===`textarea`){let{autosize:t}=e;if(t&&(ve.value=k.value?.$el?.offsetWidth),!_.value||typeof t==`boolean`)return;let{paddingTop:n,paddingBottom:r,lineHeight:i}=window.getComputedStyle(_.value),a=Number(n.slice(0,-2)),o=Number(r.slice(0,-2)),s=Number(i.slice(0,-2)),{value:c}=b;if(!c)return;if(t.minRows){let e=Math.max(t.minRows,1),n=`${a+o+s*e}px`;c.style.minHeight=n}if(t.maxRows){let e=`${a+o+s*t.maxRows}px`;c.style.maxHeight=e}}},be=s(()=>{let{maxlength:t}=e;return t===void 0?void 0:Number(t)});r(()=>{let{value:e}=M;Array.isArray(e)||$(e)});let xe=l().proxy;function J(t,n){let{onUpdateValue:r,"onUpdate:value":i,onInput:a}=e,{nTriggerFormInput:o}=N;r&&D(r,t,n),i&&D(i,t,n),a&&D(a,t,n),j.value=t,o()}function Y(t,n){let{onChange:r}=e,{nTriggerFormChange:i}=N;r&&D(r,t,n),j.value=t,i()}function Se(t){let{onBlur:n}=e,{nTriggerFormBlur:r}=N;n&&D(n,t),r()}function Ce(t){let{onFocus:n}=e,{nTriggerFormFocus:r}=N;n&&D(n,t),r()}function we(t){let{onClear:n}=e;n&&D(n,t)}function Te(t){let{onInputBlur:n}=e;n&&D(n,t)}function Ee(t){let{onInputFocus:n}=e;n&&D(n,t)}function De(){let{onDeactivate:t}=e;t&&D(t)}function Oe(){let{onActivate:t}=e;t&&D(t)}function ke(t){let{onClick:n}=e;n&&D(n,t)}function Ae(t){let{onWrapperFocus:n}=e;n&&D(n,t)}function je(t){let{onWrapperBlur:n}=e;n&&D(n,t)}function Me(){V.value=!0}function Ne(e){V.value=!1,e.target===T.value?X(e,1):X(e,0)}function X(t,n=0,r=`input`){let i=t.target.value;if($(i),t instanceof InputEvent&&!t.isComposing&&(V.value=!1),e.type===`textarea`){let{value:e}=k;e&&e.syncUnifiedContainer()}if(U=i,V.value)return;O.recordCursor();let a=Pe(i);if(a)if(!e.pair)r===`input`?J(i,{source:n}):Y(i,{source:n});else{let{value:e}=M;e=Array.isArray(e)?[e[0],e[1]]:[``,``],e[n]=i,r===`input`?J(e,{source:n}):Y(e,{source:n})}xe.$forceUpdate(),a||m(O.restoreCursor)}function Pe(t){let{countGraphemes:n,maxlength:r,minlength:i}=e;if(n){let e;if(r!==void 0&&(e===void 0&&(e=n(t)),e>Number(r))||i!==void 0&&(e===void 0&&(e=n(t)),e<Number(r)))return!1}let{allowInput:a}=e;return typeof a==`function`?a(t):!0}function Fe(e){Te(e),e.relatedTarget===g.value&&De(),e.relatedTarget!==null&&(e.relatedTarget===S.value||e.relatedTarget===T.value||e.relatedTarget===_.value)||(H.value=!1),Z(e,`blur`),E.value=null}function Ie(e,t){Ee(e),z.value=!0,H.value=!0,Oe(),Z(e,`focus`),t===0?E.value=S.value:t===1?E.value=T.value:t===2&&(E.value=_.value)}function Le(t){e.passivelyActivated&&(je(t),Z(t,`blur`))}function Re(t){e.passivelyActivated&&(z.value=!0,Ae(t),Z(t,`focus`))}function Z(e,t){e.relatedTarget!==null&&(e.relatedTarget===S.value||e.relatedTarget===T.value||e.relatedTarget===_.value||e.relatedTarget===g.value)||(t===`focus`?(Ce(e),z.value=!0):t===`blur`&&(Se(e),z.value=!1))}function ze(e,t){X(e,t,`change`)}function Be(e){ke(e)}function Ve(e){we(e),He()}function He(){e.pair?(J([``,``],{source:`clear`}),Y([``,``],{source:`clear`})):(J(``,{source:`clear`}),Y(``,{source:`clear`}))}function Ue(t){let{onMousedown:n}=e;n&&n(t);let{tagName:r}=t.target;if(r!==`INPUT`&&r!==`TEXTAREA`){if(e.resizable){let{value:e}=g;if(e){let{left:n,top:r,width:i,height:a}=e.getBoundingClientRect();if(n+i-14<t.clientX&&t.clientX<n+i&&r+a-14<t.clientY&&t.clientY<r+a)return}}t.preventDefault(),z.value||Ze()}}function We(){var t;B.value=!0,e.type===`textarea`&&((t=k.value)==null||t.handleMouseEnterWrapper())}function Ge(){var t;B.value=!1,e.type===`textarea`&&((t=k.value)==null||t.handleMouseLeaveWrapper())}function Ke(){F.value||K.value===`click`&&(q.value=!q.value)}function qe(e){if(F.value)return;e.preventDefault();let t=e=>{e.preventDefault(),w(`mouseup`,document,t)};if(C(`mouseup`,document,t),K.value!==`mousedown`)return;q.value=!0;let n=()=>{q.value=!1,w(`mouseup`,document,n)};C(`mouseup`,document,n)}function Je(t){e.onKeyup&&D(e.onKeyup,t)}function Ye(t){switch(e.onKeydown&&D(e.onKeydown,t),t.key){case`Escape`:Q();break;case`Enter`:Xe(t);break}}function Xe(t){var n,r;if(e.passivelyActivated){let{value:i}=H;if(i){e.internalDeactivateOnEnter&&Q();return}t.preventDefault(),e.type===`textarea`?(n=_.value)==null||n.focus():(r=S.value)==null||r.focus()}}function Q(){e.passivelyActivated&&(H.value=!1,m(()=>{var e;(e=g.value)==null||e.focus()}))}function Ze(){var t,n,r;F.value||(e.passivelyActivated?(t=g.value)==null||t.focus():((n=_.value)==null||n.focus(),(r=S.value)==null||r.focus()))}function Qe(){g.value?.contains(document.activeElement)&&document.activeElement.blur()}function $e(){var e,t;(e=_.value)==null||e.select(),(t=S.value)==null||t.select()}function et(){F.value||(_.value?_.value.focus():S.value&&S.value.focus())}function tt(){let{value:e}=g;e?.contains(document.activeElement)&&e!==document.activeElement&&Q()}function nt(t){if(e.type===`textarea`){let{value:e}=_;e?.scrollTo(t)}else{let{value:e}=S;e?.scrollTo(t)}}function $(t){let{type:n,pair:r,autosize:i}=e;if(!r&&i)if(n===`textarea`){let{value:e}=b;e&&(e.textContent=`${t??``}\r\n`)}else{let{value:e}=x;e&&(t?e.textContent=t:e.innerHTML=`&nbsp;`)}}function rt(){ye()}let it=p({top:`0`});function at(e){var t;let{scrollTop:n}=e.target;it.value.top=`${-n}px`,(t=k.value)==null||t.syncUnifiedContainer()}let ot=null;d(()=>{let{autosize:t,type:n}=e;t&&n===`textarea`?ot=u(M,e=>{!Array.isArray(e)&&e!==U&&$(e)}):ot?.()});let st=null;d(()=>{e.type===`textarea`?st=u(M,e=>{var t;!Array.isArray(e)&&e!==U&&((t=k.value)==null||t.syncUnifiedContainer())}):st?.()}),a(I,{mergedValueRef:M,maxlengthRef:be,mergedClsPrefixRef:n,countGraphemesRef:t(e,`countGraphemes`)});let ct={wrapperElRef:g,inputElRef:S,textareaElRef:_,isCompositing:V,clear:He,focus:Ze,blur:Qe,select:$e,deactivate:tt,activate:et,scrollTo:nt},lt=ee(`Input`,c,n),ut=s(()=>{let{value:e}=P,{common:{cubicBezierEaseInOut:t},self:{color:n,borderRadius:r,textColor:i,caretColor:a,caretColorError:o,caretColorWarning:s,textDecorationColor:c,border:l,borderDisabled:u,borderHover:d,borderFocus:f,placeholderColor:p,placeholderColorDisabled:m,lineHeightTextarea:g,colorDisabled:_,colorFocus:v,textColorDisabled:b,boxShadowFocus:x,iconSize:ee,colorFocusWarning:S,boxShadowFocusWarning:C,borderWarning:w,borderFocusWarning:ne,borderHoverWarning:re,colorFocusError:T,boxShadowFocusError:E,borderError:D,borderFocusError:O,borderHoverError:k,clearSize:A,clearColor:ie,clearColorHover:ae,clearColorPressed:oe,iconColor:se,iconColorDisabled:j,suffixTextColor:ce,countTextColor:M,countTextColorDisabled:N,iconColorHover:le,iconColorPressed:ue,loadingColor:F,loadingColorError:I,loadingColorWarning:de,fontWeight:fe,[y(`padding`,e)]:L,[y(`fontSize`,e)]:R,[y(`height`,e)]:pe}}=h.value,{left:z,right:B}=te(L);return{"--n-bezier":t,"--n-count-text-color":M,"--n-count-text-color-disabled":N,"--n-color":n,"--n-font-size":R,"--n-font-weight":fe,"--n-border-radius":r,"--n-height":pe,"--n-padding-left":z,"--n-padding-right":B,"--n-text-color":i,"--n-caret-color":a,"--n-text-decoration-color":c,"--n-border":l,"--n-border-disabled":u,"--n-border-hover":d,"--n-border-focus":f,"--n-placeholder-color":p,"--n-placeholder-color-disabled":m,"--n-icon-size":ee,"--n-line-height-textarea":g,"--n-color-disabled":_,"--n-color-focus":v,"--n-text-color-disabled":b,"--n-box-shadow-focus":x,"--n-loading-color":F,"--n-caret-color-warning":s,"--n-color-focus-warning":S,"--n-box-shadow-focus-warning":C,"--n-border-warning":w,"--n-border-focus-warning":ne,"--n-border-hover-warning":re,"--n-loading-color-warning":de,"--n-caret-color-error":o,"--n-color-focus-error":T,"--n-box-shadow-focus-error":E,"--n-border-error":D,"--n-border-focus-error":O,"--n-border-hover-error":k,"--n-loading-color-error":I,"--n-clear-color":ie,"--n-clear-size":A,"--n-clear-color-hover":ae,"--n-clear-color-pressed":oe,"--n-icon-color":se,"--n-icon-color-hover":le,"--n-icon-color-pressed":ue,"--n-icon-color-disabled":j,"--n-suffix-text-color":ce}}),dt=o?ae(`input`,s(()=>{let{value:e}=P;return e[0]}),ut,e):void 0;return Object.assign(Object.assign({},ct),{wrapperElRef:g,inputElRef:S,inputMirrorElRef:x,inputEl2Ref:T,textareaElRef:_,textareaMirrorElRef:b,textareaScrollbarInstRef:k,rtlEnabled:lt,uncontrolledValue:j,mergedValue:M,passwordVisible:q,mergedPlaceholder:W,showPlaceholder1:me,showPlaceholder2:he,mergedFocus:G,isComposing:V,activated:H,showClearButton:ge,mergedSize:P,mergedDisabled:F,textDecorationStyle:_e,mergedClsPrefix:n,mergedBordered:i,mergedShowPasswordOn:K,placeholderStyle:it,mergedStatus:L,textAreaScrollContainerWidth:ve,handleTextAreaScroll:at,handleCompositionStart:Me,handleCompositionEnd:Ne,handleInput:X,handleInputBlur:Fe,handleInputFocus:Ie,handleWrapperBlur:Le,handleWrapperFocus:Re,handleMouseEnter:We,handleMouseLeave:Ge,handleMouseDown:Ue,handleChange:ze,handleClick:Be,handleClear:Ve,handlePasswordToggleClick:Ke,handlePasswordToggleMousedown:qe,handleWrapperKeydown:Ye,handleWrapperKeyup:Je,handleTextAreaMirrorResize:rt,getTextareaScrollContainer:()=>_.value,mergedTheme:h,cssVars:o?void 0:ut,themeClass:dt?.themeClass,onRender:dt?.onRender})},render(){let{mergedClsPrefix:e,mergedStatus:t,themeClass:n,type:r,countGraphemes:i,onRender:a}=this,s=this.$slots;return a?.(),o(`div`,{ref:`wrapperElRef`,class:[`${e}-input`,`${e}-input--${this.mergedSize}-size`,n,t&&`${e}-input--${t}-status`,{[`${e}-input--rtl`]:this.rtlEnabled,[`${e}-input--disabled`]:this.mergedDisabled,[`${e}-input--textarea`]:r===`textarea`,[`${e}-input--resizable`]:this.resizable&&!this.autosize,[`${e}-input--autosize`]:this.autosize,[`${e}-input--round`]:this.round&&r!==`textarea`,[`${e}-input--pair`]:this.pair,[`${e}-input--focus`]:this.mergedFocus,[`${e}-input--stateful`]:this.stateful}],style:this.cssVars,tabindex:!this.mergedDisabled&&this.passivelyActivated&&!this.activated?0:void 0,onFocus:this.handleWrapperFocus,onBlur:this.handleWrapperBlur,onClick:this.handleClick,onMousedown:this.handleMouseDown,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd,onKeyup:this.handleWrapperKeyup,onKeydown:this.handleWrapperKeydown},o(`div`,{class:`${e}-input-wrapper`},O(s.prefix,t=>t&&o(`div`,{class:`${e}-input__prefix`},t)),r===`textarea`?o(S,{ref:`textareaScrollbarInstRef`,class:`${e}-input__textarea`,container:this.getTextareaScrollContainer,theme:this.theme?.peers?.Scrollbar,themeOverrides:this.themeOverrides?.peers?.Scrollbar,triggerDisplayManually:!0,useUnifiedContainer:!0,internalHoistYRail:!0},{default:()=>{let{textAreaScrollContainerWidth:t}=this,n={width:this.autosize&&t&&`${t}px`};return o(c,null,o(`textarea`,Object.assign({},this.inputProps,{ref:`textareaElRef`,class:[`${e}-input__textarea-el`,this.inputProps?.class],autofocus:this.autofocus,rows:Number(this.rows),placeholder:this.placeholder,value:this.mergedValue,disabled:this.mergedDisabled,maxlength:i?void 0:this.maxlength,minlength:i?void 0:this.minlength,readonly:this.readonly,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,style:[this.textDecorationStyle[0],this.inputProps?.style,n],onBlur:this.handleInputBlur,onFocus:e=>{this.handleInputFocus(e,2)},onInput:this.handleInput,onChange:this.handleChange,onScroll:this.handleTextAreaScroll})),this.showPlaceholder1?o(`div`,{class:`${e}-input__placeholder`,style:[this.placeholderStyle,n],key:`placeholder`},this.mergedPlaceholder[0]):null,this.autosize?o(E,{onResize:this.handleTextAreaMirrorResize},{default:()=>o(`div`,{ref:`textareaMirrorElRef`,class:`${e}-input__textarea-mirror`,key:`mirror`})}):null)}}):o(`div`,{class:`${e}-input__input`},o(`input`,Object.assign({type:r===`password`&&this.mergedShowPasswordOn&&this.passwordVisible?`text`:r},this.inputProps,{ref:`inputElRef`,class:[`${e}-input__input-el`,this.inputProps?.class],style:[this.textDecorationStyle[0],this.inputProps?.style],tabindex:this.passivelyActivated&&!this.activated?-1:this.inputProps?.tabindex,placeholder:this.mergedPlaceholder[0],disabled:this.mergedDisabled,maxlength:i?void 0:this.maxlength,minlength:i?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[0]:this.mergedValue,readonly:this.readonly,autofocus:this.autofocus,size:this.attrSize,onBlur:this.handleInputBlur,onFocus:e=>{this.handleInputFocus(e,0)},onInput:e=>{this.handleInput(e,0)},onChange:e=>{this.handleChange(e,0)}})),this.showPlaceholder1?o(`div`,{class:`${e}-input__placeholder`},o(`span`,null,this.mergedPlaceholder[0])):null,this.autosize?o(`div`,{class:`${e}-input__input-mirror`,key:`mirror`,ref:`inputMirrorElRef`},`\xA0`):null),!this.pair&&O(s.suffix,t=>t||this.clearable||this.showCount||this.mergedShowPasswordOn||this.loading!==void 0?o(`div`,{class:`${e}-input__suffix`},[O(s[`clear-icon-placeholder`],t=>(this.clearable||t)&&o(M,{clsPrefix:e,show:this.showClearButton,onClear:this.handleClear},{placeholder:()=>t,icon:()=>{var e;return(e=this.$slots)[`clear-icon`]?.call(e)}})),this.internalLoadingBeforeSuffix?null:t,this.loading===void 0?null:o(N,{clsPrefix:e,loading:this.loading,showArrow:!1,showClear:!1,style:this.cssVars}),this.internalLoadingBeforeSuffix?t:null,this.showCount&&this.type!==`textarea`?o(z,null,{default:e=>{let{renderCount:t}=this;return t?t(e):s.count?.call(s,e)}}):null,this.mergedShowPasswordOn&&this.type===`password`?o(`div`,{class:`${e}-input__eye`,onMousedown:this.handlePasswordToggleMousedown,onClick:this.handlePasswordToggleClick},this.passwordVisible?A(s[`password-visible-icon`],()=>[o(j,{clsPrefix:e},{default:()=>o(P,null)})]):A(s[`password-invisible-icon`],()=>[o(j,{clsPrefix:e},{default:()=>o(F,null)})])):null]):null)),this.pair?o(`span`,{class:`${e}-input__separator`},A(s.separator,()=>[this.separator])):null,this.pair?o(`div`,{class:`${e}-input-wrapper`},o(`div`,{class:`${e}-input__input`},o(`input`,{ref:`inputEl2Ref`,type:this.type,class:`${e}-input__input-el`,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[1],disabled:this.mergedDisabled,maxlength:i?void 0:this.maxlength,minlength:i?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[1]:void 0,readonly:this.readonly,style:this.textDecorationStyle[1],onBlur:this.handleInputBlur,onFocus:e=>{this.handleInputFocus(e,1)},onInput:e=>{this.handleInput(e,1)},onChange:e=>{this.handleChange(e,1)}}),this.showPlaceholder2?o(`div`,{class:`${e}-input__placeholder`},o(`span`,null,this.mergedPlaceholder[1])):null),O(s.suffix,t=>(this.clearable||t)&&o(`div`,{class:`${e}-input__suffix`},[this.clearable&&o(M,{clsPrefix:e,show:this.showClearButton,onClear:this.handleClear},{icon:()=>s[`clear-icon`]?.call(s),placeholder:()=>s[`clear-icon-placeholder`]?.call(s)}),t]))):null,this.mergedBordered?o(`div`,{class:`${e}-input__border`}):null,this.mergedBordered?o(`div`,{class:`${e}-input__state-border`}):null,this.showCount&&r===`textarea`?o(z,null,{default:e=>{let{renderCount:t}=this;return t?t(e):s.count?.call(s,e)}}):null)}});export{B as t};