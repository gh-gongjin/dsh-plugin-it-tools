import{A as e,Ct as t,F as n,N as r,b as i,ut as a,vt as o}from"./vue.runtime.esm-bundler-DZZTqpJU.js";import{c as s,d as c,f as l,n as u,p as d,s as f,u as p}from"./use-theme--pjWdM-N.js";import{i as m,t as h}from"./css-DE6X-JUA.js";import{n as g,t as _}from"./light-CLwlD-S_.js";import{t as v}from"./use-merged-state-B5grpmgQ.js";import{t as y}from"./call-fCmD0dxi.js";import{a as b,n as x}from"./resolve-slot-CNYZEkGJ.js";import{t as S}from"./use-config-B_Ca_QT7.js";import{t as C}from"./use-css-vars-class-LmlPa6Qd.js";import{n as w}from"./use-form-item-C8Vx-E3x.js";import{n as T,t as E}from"./icon-switch.cssr-GuipRqzd.js";import{t as D}from"./Loading-6wuFF5Nv.js";import{t as O}from"./_common-BnUKsVpJ.js";function k(e){let{primaryColor:t,opacityDisabled:n,borderRadius:r,textColor3:i}=e;return Object.assign(Object.assign({},O),{iconColor:i,textColor:`white`,loadingColor:t,opacityDisabled:n,railColor:`rgba(0, 0, 0, .14)`,railColorActive:t,buttonBoxShadow:`0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)`,buttonColor:`#FFF`,railBorderRadiusSmall:r,railBorderRadiusMedium:r,railBorderRadiusLarge:r,buttonBorderRadiusSmall:r,buttonBorderRadiusMedium:r,buttonBorderRadiusLarge:r,boxShadowFocus:`0 0 0 2px ${g(t,{alpha:.2})}`})}var A={name:`Switch`,common:_,self:k},j=s(`switch`,`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[p(`children-placeholder`,`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),p(`rail-placeholder`,`
 display: flex;
 flex-wrap: none;
 `),p(`button-placeholder`,`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),s(`base-loading`,`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[E({left:`50%`,top:`50%`,originalTransform:`translateX(-50%) translateY(-50%)`})]),p(`checked, unchecked`,`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),p(`checked`,`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),p(`unchecked`,`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),f(`&:focus`,[p(`rail`,`
 box-shadow: var(--n-box-shadow-focus);
 `)]),c(`round`,[p(`rail`,`border-radius: calc(var(--n-rail-height) / 2);`,[p(`button`,`border-radius: calc(var(--n-button-height) / 2);`)])]),l(`disabled`,[l(`icon`,[c(`rubber-band`,[c(`pressed`,[p(`rail`,[p(`button`,`max-width: var(--n-button-width-pressed);`)])]),p(`rail`,[f(`&:active`,[p(`button`,`max-width: var(--n-button-width-pressed);`)])]),c(`active`,[c(`pressed`,[p(`rail`,[p(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])]),p(`rail`,[f(`&:active`,[p(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])])])])])]),c(`active`,[p(`rail`,[p(`button`,`left: calc(100% - var(--n-button-width) - var(--n-offset))`)])]),p(`rail`,`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[p(`button-icon`,`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[E()]),p(`button`,`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),c(`active`,[p(`rail`,`background-color: var(--n-rail-color-active);`)]),c(`loading`,[p(`rail`,`
 cursor: wait;
 `)]),c(`disabled`,[p(`rail`,`
 cursor: not-allowed;
 opacity: .5;
 `)])]);n(),a();var M=Object.assign(Object.assign({},u.props),{size:String,value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},spinProps:Object,onChange:[Function,Array]}),N,P=e({name:`Switch`,props:M,slots:Object,setup(e){N===void 0&&(N=typeof CSS<`u`?CSS.supports===void 0?!1:CSS.supports(`width`,`max(1px)`):!0);let{mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedComponentPropsRef:a}=S(e),s=u(`Switch`,`-switch`,j,A,e,n),c=w(e,{mergedSize(t){return e.size===void 0?t?t.mergedSize.value:a?.value?.Switch?.size||`medium`:e.size}}),{mergedSizeRef:l,mergedDisabledRef:f}=c,p=o(e.defaultValue),g=v(t(e,`value`),p),_=i(()=>g.value===e.checkedValue),b=o(!1),x=o(!1),T=i(()=>{let{railStyle:t}=e;if(t)return t({focused:x.value,checked:_.value})});function E(t){let{"onUpdate:value":n,onChange:r,onUpdateValue:i}=e,{nTriggerFormInput:a,nTriggerFormChange:o}=c;n&&y(n,t),i&&y(i,t),r&&y(r,t),p.value=t,a(),o()}function D(){let{nTriggerFormFocus:e}=c;e()}function O(){let{nTriggerFormBlur:e}=c;e()}function k(){e.loading||f.value||(g.value===e.checkedValue?E(e.uncheckedValue):E(e.checkedValue))}function M(){x.value=!0,D()}function P(){x.value=!1,O(),b.value=!1}function F(t){e.loading||f.value||t.key===` `&&(g.value===e.checkedValue?E(e.uncheckedValue):E(e.checkedValue),b.value=!1)}function I(t){e.loading||f.value||t.key===` `&&(t.preventDefault(),b.value=!0)}let L=i(()=>{let{value:e}=l,{self:{opacityDisabled:t,railColor:n,railColorActive:r,buttonBoxShadow:i,buttonColor:a,boxShadowFocus:o,loadingColor:c,textColor:u,iconColor:f,[d(`buttonHeight`,e)]:p,[d(`buttonWidth`,e)]:g,[d(`buttonWidthPressed`,e)]:_,[d(`railHeight`,e)]:v,[d(`railWidth`,e)]:y,[d(`railBorderRadius`,e)]:b,[d(`buttonBorderRadius`,e)]:x},common:{cubicBezierEaseInOut:S}}=s.value,C,w,T;return N?(C=`calc((${v} - ${p}) / 2)`,w=`max(${v}, ${p})`,T=`max(${y}, calc(${y} + ${p} - ${v}))`):(C=m((h(v)-h(p))/2),w=m(Math.max(h(v),h(p))),T=h(v)>h(p)?y:m(h(y)+h(p)-h(v))),{"--n-bezier":S,"--n-button-border-radius":x,"--n-button-box-shadow":i,"--n-button-color":a,"--n-button-width":g,"--n-button-width-pressed":_,"--n-button-height":p,"--n-height":w,"--n-offset":C,"--n-opacity-disabled":t,"--n-rail-border-radius":b,"--n-rail-color":n,"--n-rail-color-active":r,"--n-rail-height":v,"--n-rail-width":y,"--n-width":T,"--n-box-shadow-focus":o,"--n-loading-color":c,"--n-text-color":u,"--n-icon-color":f}}),R=r?C(`switch`,i(()=>l.value[0]),L,e):void 0;return{handleClick:k,handleBlur:P,handleFocus:M,handleKeyup:F,handleKeydown:I,mergedRailStyle:T,pressed:b,mergedClsPrefix:n,mergedValue:g,checked:_,mergedDisabled:f,cssVars:r?void 0:L,themeClass:R?.themeClass,onRender:R?.onRender}},render(){let{mergedClsPrefix:e,mergedDisabled:t,checked:n,mergedRailStyle:i,onRender:a,$slots:o}=this;a?.();let{checked:s,unchecked:c,icon:l,"checked-icon":u,"unchecked-icon":d}=o,f=!(x(l)&&x(u)&&x(d));return r(`div`,{role:`switch`,"aria-checked":n,class:[`${e}-switch`,this.themeClass,f&&`${e}-switch--icon`,n&&`${e}-switch--active`,t&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},r(`div`,{class:`${e}-switch__rail`,"aria-hidden":`true`,style:i},b(s,t=>b(c,n=>t||n?r(`div`,{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},r(`div`,{class:`${e}-switch__rail-placeholder`},r(`div`,{class:`${e}-switch__button-placeholder`}),t),r(`div`,{class:`${e}-switch__rail-placeholder`},r(`div`,{class:`${e}-switch__button-placeholder`}),n)):null)),r(`div`,{class:`${e}-switch__button`},b(l,t=>b(u,n=>b(d,i=>r(T,null,{default:()=>this.loading?r(D,Object.assign({key:`loading`,clsPrefix:e,strokeWidth:20},this.spinProps)):this.checked&&(n||t)?r(`div`,{class:`${e}-switch__button-icon`,key:n?`checked-icon`:`icon`},n||t):!this.checked&&(i||t)?r(`div`,{class:`${e}-switch__button-icon`,key:i?`unchecked-icon`:`icon`},i||t):null})))),b(s,t=>t&&r(`div`,{key:`checked`,class:`${e}-switch__checked`},t)),b(c,t=>t&&r(`div`,{key:`unchecked`,class:`${e}-switch__unchecked`},t)))))}});export{P as t};