import{A as e,Ct as t,F as n,I as r,J as i,N as a,a as o,b as s,n as c,nt as l,ot as u,rt as ee,ut as d,vt as f,z as te}from"./vue.runtime.esm-bundler-DZZTqpJU.js";import{c as p,d as ne,n as re,p as ie,s as m,u as h}from"./use-theme--pjWdM-N.js";import{a as ae}from"./Scrollbar-CzXWYKLa.js";import{_ as oe,a as g,b as se,c as _,d as v,f as ce,g as le,h as y,i as b,l as x,m as ue,o as S,p as C,u as de,v as w,x as fe,y as T}from"./light-CLwlD-S_.js";import{n as E,t as D}from"./delegate-CJ0pWS92.js";import{t as pe}from"./use-merged-state-B5grpmgQ.js";import{t as me}from"./use-is-mounted-DNrqd8l2.js";import{t as O}from"./create-injection-key-Dfvzj6n2.js";import{i as he,n as ge,r as _e,t as k}from"./Follower-eD66E3hR.js";import{t as ve}from"./clickoutside-EYrQQIK3.js";import{r as ye}from"./warn-Dor1LvN9.js";import{t as A}from"./call-fCmD0dxi.js";import{o as j}from"./resolve-slot-CNYZEkGJ.js";import{t as be}from"./use-config-B_Ca_QT7.js";import{t as xe}from"./use-css-vars-class-LmlPa6Qd.js";import{n as Se}from"./use-form-item-C8Vx-E3x.js";import{t as Ce}from"./use-locale-BgIChK64.js";import{t as M}from"./Input-Dm-Xw68w.js";import{t as N}from"./fade-in-scale-up.cssr-BxlBQbys.js";import{t as P}from"./Button-CzL0bVpt.js";import{t as F}from"./InputGroup-B5jEYNFc.js";import{t as we}from"./light-BF_eoRZv.js";function Te(e,t){switch(e[0]){case`hex`:return t?`#000000FF`:`#000000`;case`rgb`:return t?`rgba(0, 0, 0, 1)`:`rgb(0, 0, 0)`;case`hsl`:return t?`hsla(0, 0%, 0%, 1)`:`hsl(0, 0%, 0%)`;case`hsv`:return t?`hsva(0, 0%, 0%, 1)`:`hsv(0, 0%, 0%)`}return`#000000`}function I(e){return e===null?null:/^ *#/.test(e)?`hex`:e.includes(`rgb`)?`rgb`:e.includes(`hsl`)?`hsl`:e.includes(`hsv`)?`hsv`:null}function Ee(e,t=[255,255,255],n=`AA`){let[r,i,a,o]=S(v(e));if(o===1){let e=L([r,i,a]),o=L(t);return(Math.max(e,o)+.05)/(Math.min(e,o)+.05)>=(n===`AA`?4.5:7)}let s=L([Math.round(r*o+t[0]*(1-o)),Math.round(i*o+t[1]*(1-o)),Math.round(a*o+t[2]*(1-o))]),c=L(t);return(Math.max(s,c)+.05)/(Math.min(s,c)+.05)>=(n===`AA`?4.5:7)}function L(e){let[t,n,r]=e.map(e=>(e/=255,e<=.03928?e/12.92:((e+.055)/1.055)**2.4));return .2126*t+.7152*n+.0722*r}function De(e){return e=Math.round(e),e>=360?359:e<0?0:e}function R(e){return e=Math.round(e*100)/100,e>1?1:e<0?0:e}var z={rgb:{hex(e){return x(S(e))},hsl(e){let[t,n,r,i]=S(e);return v([...se(t,n,r),i])},hsv(e){let[t,n,r,i]=S(e);return C([...fe(t,n,r),i])}},hex:{rgb(e){return y(S(e))},hsl(e){let[t,n,r,i]=S(e);return v([...se(t,n,r),i])},hsv(e){let[t,n,r,i]=S(e);return C([...fe(t,n,r),i])}},hsl:{hex(e){let[t,n,r,i]=b(e);return x([...oe(t,n,r),i])},rgb(e){let[t,n,r,i]=b(e);return y([...oe(t,n,r),i])},hsv(e){let[t,n,r,i]=b(e);return C([...le(t,n,r),i])}},hsv:{hex(e){let[t,n,r,i]=g(e);return x([...T(t,n,r),i])},rgb(e){let[t,n,r,i]=g(e);return y([...T(t,n,r),i])},hsl(e){let[t,n,r,i]=g(e);return v([...w(t,n,r),i])}}};function B(e,t,n){return n||=I(e),n?n===t?e:z[n][t](e):null}n(),d();var V=`12px`,H=12,U=`6px`,Oe=e({name:`AlphaSlider`,props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},alpha:{type:Number,default:0},onUpdateAlpha:{type:Function,required:!0},onComplete:Function},setup(e){let t=f(null);function n(n){!t.value||!e.rgba||(E(`mousemove`,document,r),E(`mouseup`,document,i),r(n))}function r(n){let{value:r}=t;if(!r)return;let{width:i,left:a}=r.getBoundingClientRect(),o=(n.clientX-a)/(i-H);e.onUpdateAlpha(R(o))}function i(){var t;D(`mousemove`,document,r),D(`mouseup`,document,i),(t=e.onComplete)==null||t.call(e)}return{railRef:t,railBackgroundImage:s(()=>{let{rgba:t}=e;return t?`linear-gradient(to right, rgba(${t[0]}, ${t[1]}, ${t[2]}, 0) 0%, rgba(${t[0]}, ${t[1]}, ${t[2]}, 1) 100%)`:``}),handleMouseDown:n}},render(){let{clsPrefix:e}=this;return a(`div`,{class:`${e}-color-picker-slider`,ref:`railRef`,style:{height:V,borderRadius:U},onMousedown:this.handleMouseDown},a(`div`,{style:{borderRadius:U,position:`absolute`,left:0,right:0,top:0,bottom:0,overflow:`hidden`}},a(`div`,{class:`${e}-color-picker-checkboard`}),a(`div`,{class:`${e}-color-picker-slider__image`,style:{backgroundImage:this.railBackgroundImage}})),this.rgba&&a(`div`,{style:{position:`absolute`,left:U,right:U,top:0,bottom:0}},a(`div`,{class:`${e}-color-picker-handle`,style:{left:`calc(${this.alpha*100}% - ${U})`,borderRadius:U,width:V,height:V}},a(`div`,{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:y(this.rgba),borderRadius:U,width:V,height:V}}))))}}),ke=O(`n-color-picker`);n(),d();function W(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),255)):!1}function G(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),360)):!1}function K(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),100)):!1}function q(e){let t=e.trim();return/^#[0-9a-fA-F]+$/.test(t)?[4,5,7,9].includes(t.length):!1}function Ae(e){return/^\d{1,3}\.?\d*%$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e)/100,100)):!1}var je={paddingSmall:`0 4px`},J=e({name:`ColorInputUnit`,props:{label:{type:String,required:!0},value:{type:[Number,String],default:null},showAlpha:Boolean,onUpdateValue:{type:Function,required:!0}},setup(e){let t=f(``),{themeRef:n}=r(ke,null);ee(()=>{t.value=i()});function i(){let{value:t}=e;if(t===null)return``;let{label:n}=e;return n===`HEX`?t:n===`A`?`${Math.floor(t*100)}%`:String(Math.floor(t))}function a(e){t.value=e}function o(n){let r,a;switch(e.label){case`HEX`:a=q(n),a&&e.onUpdateValue(n),t.value=i();break;case`H`:r=G(n),r===!1?t.value=i():e.onUpdateValue(r);break;case`S`:case`L`:case`V`:r=K(n),r===!1?t.value=i():e.onUpdateValue(r);break;case`A`:r=Ae(n),r===!1?t.value=i():e.onUpdateValue(r);break;case`R`:case`G`:case`B`:r=W(n),r===!1?t.value=i():e.onUpdateValue(r);break}}return{mergedTheme:n,inputValue:t,handleInputChange:o,handleInputUpdateValue:a}},render(){let{mergedTheme:e}=this;return a(M,{size:`small`,placeholder:this.label,theme:e.peers.Input,themeOverrides:e.peerOverrides.Input,builtinThemeOverrides:je,value:this.inputValue,onUpdateValue:this.handleInputUpdateValue,onChange:this.handleInputChange,style:this.label===`A`?`flex-grow: 1.25;`:``})}});n();var Me=e({name:`ColorInput`,props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},modes:{type:Array,required:!0},showAlpha:{type:Boolean,required:!0},value:{type:String,default:null},valueArr:{type:Array,default:null},onUpdateValue:{type:Function,required:!0},onUpdateMode:{type:Function,required:!0}},setup(e){return{handleUnitUpdateValue(t,n){let{showAlpha:r}=e;if(e.mode===`hex`){e.onUpdateValue((r?x:_)(n));return}let i;switch(i=e.valueArr===null?[0,0,0,0]:Array.from(e.valueArr),e.mode){case`hsv`:i[t]=n,e.onUpdateValue((r?C:ce)(i));break;case`rgb`:i[t]=n,e.onUpdateValue((r?y:ue)(i));break;case`hsl`:i[t]=n,e.onUpdateValue((r?v:de)(i));break}}}},render(){let{clsPrefix:e,modes:t}=this;return a(`div`,{class:`${e}-color-picker-input`},a(`div`,{class:`${e}-color-picker-input__mode`,onClick:this.onUpdateMode,style:{cursor:t.length===1?``:`pointer`}},this.mode.toUpperCase()+(this.showAlpha?`A`:``)),a(F,null,{default:()=>{let{mode:e,valueArr:t,showAlpha:n}=this;if(e===`hex`){let e=null;try{e=t===null?null:(n?x:_)(t)}catch{}return a(J,{label:`HEX`,showAlpha:n,value:e,onUpdateValue:e=>{this.handleUnitUpdateValue(0,e)}})}return(e+(n?`a`:``)).split(``).map((e,n)=>a(J,{label:e.toUpperCase(),value:t===null?null:t[n],onUpdateValue:e=>{this.handleUnitUpdateValue(n,e)}}))}}))}});n();function Ne(e,t){if(t===`hsv`){let[t,n,r,i]=g(e);return y([...T(t,n,r),i])}return e}function Pe(e){let t=document.createElement(`canvas`).getContext(`2d`);return t?(t.fillStyle=e,t.fillStyle):`#000000`}var Fe=e({name:`ColorPickerSwatches`,props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},swatches:{type:Array,required:!0},onUpdateColor:{type:Function,required:!0}},setup(e){let t=s(()=>e.swatches.map(e=>{let t=I(e);return{value:e,mode:t,legalValue:Ne(e,t)}}));function n(t){let{mode:n}=e,{value:r,mode:i}=t;return i||(i=`hex`,/^[a-zA-Z]+$/.test(r)?r=Pe(r):(ye(`color-picker`,`color ${r} in swatches is invalid.`),r=`#000000`)),i===n?r:B(r,n,i)}function r(t){e.onUpdateColor(n(t))}function i(e,t){e.key===`Enter`&&r(t)}return{parsedSwatchesRef:t,handleSwatchSelect:r,handleSwatchKeyDown:i}},render(){let{clsPrefix:e}=this;return a(`div`,{class:`${e}-color-picker-swatches`},this.parsedSwatchesRef.map(t=>a(`div`,{class:`${e}-color-picker-swatch`,tabindex:0,onClick:()=>{this.handleSwatchSelect(t)},onKeydown:e=>{this.handleSwatchKeyDown(e,t)}},a(`div`,{class:`${e}-color-picker-swatch__fill`,style:{background:t.legalValue}}))))}});n();var Ie=e({name:`ColorPickerTrigger`,slots:Object,props:{clsPrefix:{type:String,required:!0},value:{type:String,default:null},hsla:{type:Array,default:null},disabled:Boolean,onClick:Function},setup(e){let{colorPickerSlots:t,renderLabelRef:n}=r(ke,null);return()=>{let{hsla:r,value:i,clsPrefix:o,onClick:s,disabled:c}=e,l=t.label||n.value;return a(`div`,{class:[`${o}-color-picker`,c&&`${o}-color-picker--disabled`],onClick:c?void 0:s},a(`div`,{class:`${o}-color-picker__fill`},a(`div`,{class:`${o}-color-picker-checkboard`}),a(`div`,{style:{position:`absolute`,left:0,right:0,top:0,bottom:0,backgroundColor:r?v(r):``}}),i&&r?a(`div`,{class:`${o}-color-picker__value`,style:{color:Ee(r)?`white`:`black`}},l?l(i):i):null))}}});n();var Le=e({name:`ColorPreview`,props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},color:{type:String,default:null,validator:e=>{let t=I(e);return!!(!e||t&&t!==`hsv`)}},onUpdateColor:{type:Function,required:!0}},setup(e){function t(t){var n;let r=t.target.value;(n=e.onUpdateColor)==null||n.call(e,B(r.toUpperCase(),e.mode,`hex`)),t.stopPropagation()}return{handleChange:t}},render(){let{clsPrefix:e}=this;return a(`div`,{class:`${e}-color-picker-preview__preview`},a(`span`,{class:`${e}-color-picker-preview__fill`,style:{background:this.color||`#000000`}}),a(`input`,{class:`${e}-color-picker-preview__input`,type:`color`,value:this.color,onChange:this.handleChange}))}});n(),d();var Y=`12px`,Re=12,X=`6px`,ze=6,Z=`linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)`,Be=e({name:`HueSlider`,props:{clsPrefix:{type:String,required:!0},hue:{type:Number,required:!0},onUpdateHue:{type:Function,required:!0},onComplete:Function},setup(e){let t=f(null);function n(e){t.value&&(E(`mousemove`,document,r),E(`mouseup`,document,i),r(e))}function r(n){let{value:r}=t;if(!r)return;let{width:i,left:a}=r.getBoundingClientRect(),o=De((n.clientX-a-ze)/(i-Re)*360);e.onUpdateHue(o)}function i(){var t;D(`mousemove`,document,r),D(`mouseup`,document,i),(t=e.onComplete)==null||t.call(e)}return{railRef:t,handleMouseDown:n}},render(){let{clsPrefix:e}=this;return a(`div`,{class:`${e}-color-picker-slider`,style:{height:Y,borderRadius:X}},a(`div`,{ref:`railRef`,style:{boxShadow:`inset 0 0 2px 0 rgba(0, 0, 0, .24)`,boxSizing:`border-box`,backgroundImage:Z,height:Y,borderRadius:X,position:`relative`},onMousedown:this.handleMouseDown},a(`div`,{style:{position:`absolute`,left:X,right:X,top:0,bottom:0}},a(`div`,{class:`${e}-color-picker-handle`,style:{left:`calc((${this.hue}%) / 359 * 100 - ${X})`,borderRadius:X,width:Y,height:Y}},a(`div`,{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:`hsl(${this.hue}, 100%, 50%)`,borderRadius:X,width:Y,height:Y}})))))}});n(),d();var Q=`12px`,$=`6px`,Ve=e({name:`Pallete`,props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},displayedHue:{type:Number,required:!0},displayedSv:{type:Array,required:!0},onUpdateSV:{type:Function,required:!0},onComplete:Function},setup(e){let t=f(null);function n(e){t.value&&(E(`mousemove`,document,r),E(`mouseup`,document,i),r(e))}function r(n){let{value:r}=t;if(!r)return;let{width:i,height:a,left:o,bottom:s}=r.getBoundingClientRect(),c=(s-n.clientY)/a,l=(n.clientX-o)/i,u=100*(l>1?1:l<0?0:l),ee=100*(c>1?1:c<0?0:c);e.onUpdateSV(u,ee)}function i(){var t;D(`mousemove`,document,r),D(`mouseup`,document,i),(t=e.onComplete)==null||t.call(e)}return{palleteRef:t,handleColor:s(()=>{let{rgba:t}=e;return t?`rgb(${t[0]}, ${t[1]}, ${t[2]})`:``}),handleMouseDown:n}},render(){let{clsPrefix:e}=this;return a(`div`,{class:`${e}-color-picker-pallete`,onMousedown:this.handleMouseDown,ref:`palleteRef`},a(`div`,{class:`${e}-color-picker-pallete__layer`,style:{backgroundImage:`linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))`}}),a(`div`,{class:`${e}-color-picker-pallete__layer ${e}-color-picker-pallete__layer--shadowed`,style:{backgroundImage:`linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))`}}),this.rgba&&a(`div`,{class:`${e}-color-picker-handle`,style:{width:Q,height:Q,borderRadius:$,left:`calc(${this.displayedSv[0]}% - ${$})`,bottom:`calc(${this.displayedSv[1]}% - ${$})`}},a(`div`,{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:this.handleColor,borderRadius:$,width:Q,height:Q}})))}}),He=m([p(`color-picker-panel`,`
 margin: 4px 0;
 width: 240px;
 font-size: var(--n-panel-font-size);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 `,[N(),p(`input`,`
 text-align: center;
 `)]),p(`color-picker-checkboard`,`
 background: white; 
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[m(`&::after`,`
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 12px 12px;
 background-position: 0 0, 0 6px, 6px -6px, -6px 0px;
 background-repeat: repeat;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),p(`color-picker-slider`,`
 margin-bottom: 8px;
 position: relative;
 box-sizing: border-box;
 `,[h(`image`,`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `),m(`&::after`,`
 content: "";
 position: absolute;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 pointer-events: none;
 `)]),p(`color-picker-handle`,`
 z-index: 1;
 box-shadow: 0 0 2px 0 rgba(0, 0, 0, .45);
 position: absolute;
 background-color: white;
 overflow: hidden;
 `,[h(`fill`,`
 box-sizing: border-box;
 border: 2px solid white;
 `)]),p(`color-picker-pallete`,`
 height: 180px;
 position: relative;
 margin-bottom: 8px;
 cursor: crosshair;
 `,[h(`layer`,`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[ne(`shadowed`,`
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 `)])]),p(`color-picker-preview`,`
 display: flex;
 `,[h(`sliders`,`
 flex: 1 0 auto;
 `),h(`preview`,`
 position: relative;
 height: 30px;
 width: 30px;
 margin: 0 0 8px 6px;
 border-radius: 50%;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 overflow: hidden;
 `),h(`fill`,`
 display: block;
 width: 30px;
 height: 30px;
 `),h(`input`,`
 position: absolute;
 top: 0;
 left: 0;
 width: 30px;
 height: 30px;
 opacity: 0;
 z-index: 1;
 `)]),p(`color-picker-input`,`
 display: flex;
 align-items: center;
 `,[p(`input`,`
 flex-grow: 1;
 flex-basis: 0;
 `),h(`mode`,`
 width: 72px;
 text-align: center;
 `)]),p(`color-picker-control`,`
 padding: 12px;
 `),p(`color-picker-action`,`
 display: flex;
 margin-top: -4px;
 border-top: 1px solid var(--n-divider-color);
 padding: 8px 12px;
 justify-content: flex-end;
 `,[p(`button`,`margin-left: 8px;`)]),p(`color-picker`,`
 display: inline-block;
 box-sizing: border-box;
 height: var(--n-height);
 font-size: var(--n-font-size);
 width: 100%;
 position: relative;
 cursor: pointer;
 border: var(--n-border);
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[ne(`disabled`,`cursor: not-allowed`),h(`value`,`
 white-space: nowrap;
 position: relative;
 `),h(`fill`,`
 border-radius: var(--n-border-radius);
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 left: 4px;
 right: 4px;
 top: 4px;
 bottom: 4px;
 `),p(`color-picker-checkboard`,`
 border-radius: var(--n-border-radius);
 `,[m(`&::after`,`
 --n-block-size: calc((var(--n-height) - 8px) / 3);
 background-size: calc(var(--n-block-size) * 2) calc(var(--n-block-size) * 2);
 background-position: 0 0, 0 var(--n-block-size), var(--n-block-size) calc(-1 * var(--n-block-size)), calc(-1 * var(--n-block-size)) 0px; 
 `)])]),p(`color-picker-swatches`,`
 display: grid;
 grid-gap: 8px;
 flex-wrap: wrap;
 position: relative;
 grid-template-columns: repeat(auto-fill, 18px);
 margin-top: 10px;
 `,[p(`color-picker-swatch`,`
 width: 18px;
 height: 18px;
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 8px 8px;
 background-position: 0px 0, 0px 4px, 4px -4px, -4px 0px;
 background-repeat: repeat;
 `,[h(`fill`,`
 position: relative;
 width: 100%;
 height: 100%;
 border-radius: 3px;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 cursor: pointer;
 `),m(`&:focus`,`
 outline: none;
 `,[h(`fill`,[m(`&::after`,`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 background: inherit;
 filter: blur(2px);
 content: "";
 `)])])])])]);n(),d(),o();var Ue=e({name:`ColorPicker`,props:Object.assign(Object.assign({},re.props),{value:String,show:{type:Boolean,default:void 0},defaultShow:Boolean,defaultValue:String,modes:{type:Array,default:()=>[`rgb`,`hex`,`hsl`]},placement:{type:String,default:`bottom-start`},to:he.propTo,showAlpha:{type:Boolean,default:!0},showPreview:Boolean,swatches:Array,disabled:{type:Boolean,default:void 0},actions:{type:Array,default:null},internalActions:Array,size:String,renderLabel:Function,onComplete:Function,onConfirm:Function,onClear:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),slots:Object,setup(e,{slots:n}){let r=null;function o(e){r=e}let c=null,{mergedClsPrefixRef:u,namespaceRef:d,inlineThemeDisabled:p,mergedComponentPropsRef:ne}=be(e),m=Se(e,{mergedSize:t=>{let{size:n}=e;if(n)return n;let{mergedSize:r}=t||{};return r?.value?r.value:ne?.value?.ColorPicker?.size||`medium`}}),{mergedSizeRef:h,mergedDisabledRef:E}=m,{localeRef:D}=Ce(`global`),O=re(`ColorPicker`,`-color-picker`,He,we,e,u);i(ke,{themeRef:O,renderLabelRef:t(e,`renderLabel`),colorPickerSlots:n});let ge=f(e.defaultShow),_e=pe(t(e,`show`),ge);function k(t){let{onUpdateShow:n,"onUpdate:show":r}=e;n&&A(n,t),r&&A(r,t),ge.value=t}let{defaultValue:ve}=e,ye=f(ve===void 0?Te(e.modes,e.showAlpha):ve),j=pe(t(e,`value`),ye),M=f([j.value]),N=f(0),F=s(()=>I(j.value)),{modes:Ee}=e,L=f(I(j.value)||Ee[0]||`rgb`);function De(){let{modes:t}=e,{value:n}=L,r=t.findIndex(e=>e===n);~r?L.value=t[(r+1)%t.length]:L.value=`rgb`}let R,z,B,V,H,U,W,G,K=s(()=>{let{value:e}=j;if(!e)return null;switch(F.value){case`hsv`:return g(e);case`hsl`:return[R,z,B,G]=b(e),[...le(R,z,B),G];case`rgb`:case`hex`:return[H,U,W,G]=S(e),[...fe(H,U,W),G]}}),q=s(()=>{let{value:e}=j;if(!e)return null;switch(F.value){case`rgb`:case`hex`:return S(e);case`hsv`:return[R,z,V,G]=g(e),[...T(R,z,V),G];case`hsl`:return[R,z,B,G]=b(e),[...oe(R,z,B),G]}}),Ae=s(()=>{let{value:e}=j;if(!e)return null;switch(F.value){case`hsl`:return b(e);case`hsv`:return[R,z,V,G]=g(e),[...w(R,z,V),G];case`rgb`:case`hex`:return[H,U,W,G]=S(e),[...se(H,U,W),G]}}),je=s(()=>{switch(L.value){case`rgb`:case`hex`:return q.value;case`hsv`:return K.value;case`hsl`:return Ae.value}}),J=f(0),Ne=f(1),Pe=f([0,0]);function Ie(t,n){let{value:r}=K,i=J.value,a=r?r[3]:1;Pe.value=[t,n];let{showAlpha:o}=e;switch(L.value){case`hsv`:X((o?C:ce)([i,t,n,a]),`cursor`);break;case`hsl`:X((o?v:de)([...w(i,t,n),a]),`cursor`);break;case`rgb`:X((o?y:ue)([...T(i,t,n),a]),`cursor`);break;case`hex`:X((o?x:_)([...T(i,t,n),a]),`cursor`);break}}function Y(t){J.value=t;let{value:n}=K;if(!n)return;let[,r,i,a]=n,{showAlpha:o}=e;switch(L.value){case`hsv`:X((o?C:ce)([t,r,i,a]),`cursor`);break;case`rgb`:X((o?y:ue)([...T(t,r,i),a]),`cursor`);break;case`hex`:X((o?x:_)([...T(t,r,i),a]),`cursor`);break;case`hsl`:X((o?v:de)([...w(t,r,i),a]),`cursor`);break}}function Re(e){switch(L.value){case`hsv`:[R,z,V]=K.value,X(C([R,z,V,e]),`cursor`);break;case`rgb`:[H,U,W]=q.value,X(y([H,U,W,e]),`cursor`);break;case`hex`:[H,U,W]=q.value,X(x([H,U,W,e]),`cursor`);break;case`hsl`:[R,z,B]=Ae.value,X(v([R,z,B,e]),`cursor`);break}Ne.value=e}function X(t,n){c=n===`cursor`?t:null;let{nTriggerFormChange:r,nTriggerFormInput:i}=m,{onUpdateValue:a,"onUpdate:value":o}=e;a&&A(a,t),o&&A(o,t),r(),i(),ye.value=t}function ze(e){X(e,`input`),te(Z)}function Z(t=!0){let{value:n}=j;if(n){let{nTriggerFormChange:r,nTriggerFormInput:i}=m,{onComplete:a}=e;a&&a(n);let{value:o}=M,{value:s}=N;t&&(o.splice(s+1,o.length,n),N.value=s+1),r(),i()}}function Q(){let{value:e}=N;e-1<0||(X(M.value[e-1],`input`),Z(!1),N.value=e-1)}function $(){let{value:e}=N;e<0||e+1>=M.value.length||(X(M.value[e+1],`input`),Z(!1),N.value=e+1)}function Ue(){X(null,`input`);let{onClear:t}=e;t&&t(),k(!1)}function We(){let{value:t}=j,{onConfirm:n}=e;n&&n(t),k(!1)}let Ge=s(()=>N.value>=1),Ke=s(()=>{let{value:e}=M;return e.length>1&&N.value<e.length-1});l(_e,e=>{e||(M.value=[j.value],N.value=0)}),ee(()=>{if(!(c&&c===j.value)){let{value:e}=K;e&&(J.value=e[0],Ne.value=e[3],Pe.value=[e[1],e[2]])}c=null});let qe=s(()=>{let{value:e}=h,{common:{cubicBezierEaseInOut:t},self:{textColor:n,color:r,panelFontSize:i,boxShadow:a,border:o,borderRadius:s,dividerColor:c,[ie(`height`,e)]:l,[ie(`fontSize`,e)]:u}}=O.value;return{"--n-bezier":t,"--n-text-color":n,"--n-color":r,"--n-panel-font-size":i,"--n-font-size":u,"--n-box-shadow":a,"--n-border":o,"--n-border-radius":s,"--n-height":l,"--n-divider-color":c}}),Je=p?xe(`color-picker`,s(()=>h.value[0]),qe,e):void 0;function Ye(){let{value:t}=q,{value:r}=J,{internalActions:i,modes:o,actions:s}=e,{value:c}=O,{value:l}=u;return a(`div`,{class:[`${l}-color-picker-panel`,Je?.themeClass.value],onDragstart:e=>{e.preventDefault()},style:p?void 0:qe.value},a(`div`,{class:`${l}-color-picker-control`},a(Ve,{clsPrefix:l,rgba:t,displayedHue:r,displayedSv:Pe.value,onUpdateSV:Ie,onComplete:Z}),a(`div`,{class:`${l}-color-picker-preview`},a(`div`,{class:`${l}-color-picker-preview__sliders`},a(Be,{clsPrefix:l,hue:r,onUpdateHue:Y,onComplete:Z}),e.showAlpha?a(Oe,{clsPrefix:l,rgba:t,alpha:Ne.value,onUpdateAlpha:Re,onComplete:Z}):null),e.showPreview?a(Le,{clsPrefix:l,mode:L.value,color:q.value&&_(q.value),onUpdateColor:e=>{X(e,`input`)}}):null),a(Me,{clsPrefix:l,showAlpha:e.showAlpha,mode:L.value,modes:o,onUpdateMode:De,value:j.value,valueArr:je.value,onUpdateValue:ze}),e.swatches?.length&&a(Fe,{clsPrefix:l,mode:L.value,swatches:e.swatches,onUpdateColor:e=>{X(e,`input`)}})),s?.length?a(`div`,{class:`${l}-color-picker-action`},s.includes(`confirm`)&&a(P,{size:`small`,onClick:We,theme:c.peers.Button,themeOverrides:c.peerOverrides.Button},{default:()=>D.value.confirm}),s.includes(`clear`)&&a(P,{size:`small`,onClick:Ue,disabled:!j.value,theme:c.peers.Button,themeOverrides:c.peerOverrides.Button},{default:()=>D.value.clear})):null,n.action?a(`div`,{class:`${l}-color-picker-action`},{default:n.action}):i?a(`div`,{class:`${l}-color-picker-action`},i.includes(`undo`)&&a(P,{size:`small`,onClick:Q,disabled:!Ge.value,theme:c.peers.Button,themeOverrides:c.peerOverrides.Button},{default:()=>D.value.undo}),i.includes(`redo`)&&a(P,{size:`small`,onClick:$,disabled:!Ke.value,theme:c.peers.Button,themeOverrides:c.peerOverrides.Button},{default:()=>D.value.redo})):null)}return{mergedClsPrefix:u,namespace:d,hsla:Ae,rgba:q,mergedShow:_e,mergedDisabled:E,isMounted:me(),adjustedTo:he(e),mergedValue:j,handleTriggerClick(){E.value||k(!0)},setTriggerRef:o,handleClickOutside(e){if(r instanceof Element){if(r.contains(ae(e)))return}else if(r&&r.$el.contains(ae(e)))return;k(!1)},renderPanel:Ye,cssVars:p?void 0:qe,themeClass:Je?.themeClass,onRender:Je?.onRender}},render(){let{mergedClsPrefix:e,onRender:t}=this;return t?.(),a(_e,null,{default:()=>[a(ge,null,{default:()=>j(this.$slots.trigger,{value:this.mergedValue,onClick:this.handleTriggerClick,ref:this.setTriggerRef},t=>t||a(Ie,{clsPrefix:e,value:this.mergedValue,hsla:this.hsla,style:this.cssVars,ref:this.setTriggerRef,disabled:this.mergedDisabled,class:this.themeClass,onClick:this.mergedDisabled?void 0:this.handleTriggerClick}))}),a(k,{placement:this.placement,show:this.mergedShow,containerClass:this.namespace,teleportDisabled:this.adjustedTo===he.tdkey,to:this.adjustedTo},{default:()=>a(c,{name:`fade-in-scale-up-transition`,appear:this.isMounted},{default:()=>this.mergedShow?u(this.renderPanel(),[[ve,this.handleClickOutside,void 0,{capture:!0}]]):null})})]})}});export{Ue as t};