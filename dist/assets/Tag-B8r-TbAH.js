import{A as e,Ct as t,F as n,J as r,N as i,b as a,ut as o,vt as s}from"./vue.runtime.esm-bundler-DZZTqpJU.js";import{c,d as l,f as u,n as d,p as f,s as p,u as m}from"./use-theme--pjWdM-N.js";import{t as h}from"./use-rtl-DxDqUyON.js";import{r as g}from"./css-DE6X-JUA.js";import{n as _,t as v}from"./light-CLwlD-S_.js";import{t as y}from"./create-injection-key-Dfvzj6n2.js";import{t as b}from"./color-to-class-G4jmrDIg.js";import{t as x}from"./call-fCmD0dxi.js";import{a as S}from"./resolve-slot-CNYZEkGJ.js";import{t as C}from"./use-config-B_Ca_QT7.js";import{t as w}from"./use-css-vars-class-LmlPa6Qd.js";import{t as T}from"./Close-DIRcAW63.js";import{t as E}from"./_common-BWSN0c8x.js";function D(e){let{textColor2:t,primaryColorHover:n,primaryColorPressed:r,primaryColor:i,infoColor:a,successColor:o,warningColor:s,errorColor:c,baseColor:l,borderColor:u,opacityDisabled:d,tagColor:f,closeIconColor:p,closeIconColorHover:m,closeIconColorPressed:h,borderRadiusSmall:g,fontSizeMini:v,fontSizeTiny:y,fontSizeSmall:b,fontSizeMedium:x,heightMini:S,heightTiny:C,heightSmall:w,heightMedium:T,closeColorHover:D,closeColorPressed:O,buttonColor2Hover:k,buttonColor2Pressed:A,fontWeightStrong:j}=e;return Object.assign(Object.assign({},E),{closeBorderRadius:g,heightTiny:S,heightSmall:C,heightMedium:w,heightLarge:T,borderRadius:g,opacityDisabled:d,fontSizeTiny:v,fontSizeSmall:y,fontSizeMedium:b,fontSizeLarge:x,fontWeightStrong:j,textColorCheckable:t,textColorHoverCheckable:t,textColorPressedCheckable:t,textColorChecked:l,colorCheckable:`#0000`,colorHoverCheckable:k,colorPressedCheckable:A,colorChecked:i,colorCheckedHover:n,colorCheckedPressed:r,border:`1px solid ${u}`,textColor:t,color:f,colorBordered:`rgb(250, 250, 252)`,closeIconColor:p,closeIconColorHover:m,closeIconColorPressed:h,closeColorHover:D,closeColorPressed:O,borderPrimary:`1px solid ${_(i,{alpha:.3})}`,textColorPrimary:i,colorPrimary:_(i,{alpha:.12}),colorBorderedPrimary:_(i,{alpha:.1}),closeIconColorPrimary:i,closeIconColorHoverPrimary:i,closeIconColorPressedPrimary:i,closeColorHoverPrimary:_(i,{alpha:.12}),closeColorPressedPrimary:_(i,{alpha:.18}),borderInfo:`1px solid ${_(a,{alpha:.3})}`,textColorInfo:a,colorInfo:_(a,{alpha:.12}),colorBorderedInfo:_(a,{alpha:.1}),closeIconColorInfo:a,closeIconColorHoverInfo:a,closeIconColorPressedInfo:a,closeColorHoverInfo:_(a,{alpha:.12}),closeColorPressedInfo:_(a,{alpha:.18}),borderSuccess:`1px solid ${_(o,{alpha:.3})}`,textColorSuccess:o,colorSuccess:_(o,{alpha:.12}),colorBorderedSuccess:_(o,{alpha:.1}),closeIconColorSuccess:o,closeIconColorHoverSuccess:o,closeIconColorPressedSuccess:o,closeColorHoverSuccess:_(o,{alpha:.12}),closeColorPressedSuccess:_(o,{alpha:.18}),borderWarning:`1px solid ${_(s,{alpha:.35})}`,textColorWarning:s,colorWarning:_(s,{alpha:.15}),colorBorderedWarning:_(s,{alpha:.12}),closeIconColorWarning:s,closeIconColorHoverWarning:s,closeIconColorPressedWarning:s,closeColorHoverWarning:_(s,{alpha:.12}),closeColorPressedWarning:_(s,{alpha:.18}),borderError:`1px solid ${_(c,{alpha:.23})}`,textColorError:c,colorError:_(c,{alpha:.1}),colorBorderedError:_(c,{alpha:.08}),closeIconColorError:c,closeIconColorHoverError:c,closeIconColorPressedError:c,closeColorHoverError:_(c,{alpha:.12}),closeColorPressedError:_(c,{alpha:.18})})}var O={name:`Tag`,common:v,self:D},k={color:Object,type:{type:String,default:`default`},round:Boolean,size:String,closable:Boolean,disabled:{type:Boolean,default:void 0}},A=c(`tag`,`
 --n-close-margin: var(--n-close-margin-top) var(--n-close-margin-right) var(--n-close-margin-bottom) var(--n-close-margin-left);
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[l(`strong`,`
 font-weight: var(--n-font-weight-strong);
 `),m(`border`,`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),m(`icon`,`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),m(`avatar`,`
 display: flex;
 margin: 0 6px 0 0;
 `),m(`close`,`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),l(`round`,`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[m(`icon`,`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),m(`avatar`,`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),l(`closable`,`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),l(`icon, avatar`,[l(`round`,`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),l(`disabled`,`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),l(`checkable`,`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[u(`disabled`,[p(`&:hover`,`background-color: var(--n-color-hover-checkable);`,[u(`checked`,`color: var(--n-text-color-hover-checkable);`)]),p(`&:active`,`background-color: var(--n-color-pressed-checkable);`,[u(`checked`,`color: var(--n-text-color-pressed-checkable);`)])]),l(`checked`,`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[u(`disabled`,[p(`&:hover`,`background-color: var(--n-color-checked-hover);`),p(`&:active`,`background-color: var(--n-color-checked-pressed);`)])])])]);n(),o();var j=Object.assign(Object.assign(Object.assign({},d.props),k),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),M=y(`n-tag`),N=e({name:`Tag`,props:j,slots:Object,setup(e){let n=s(null),{mergedBorderedRef:i,mergedClsPrefixRef:o,inlineThemeDisabled:c,mergedRtlRef:l,mergedComponentPropsRef:u}=C(e),p=a(()=>e.size||u?.value?.Tag?.size||`medium`),m=d(`Tag`,`-tag`,A,O,e,o);r(M,{roundRef:t(e,`round`)});function _(){if(!e.disabled&&e.checkable){let{checked:t,onCheckedChange:n,onUpdateChecked:r,"onUpdate:checked":i}=e;r&&r(!t),i&&i(!t),n&&n(!t)}}function v(t){if(e.triggerClickOnClose||t.stopPropagation(),!e.disabled){let{onClose:n}=e;n&&x(n,t)}}let y={setTextContent(e){let{value:t}=n;t&&(t.textContent=e)}},S=h(`Tag`,l,o),T=a(()=>{let{type:t,color:{color:n,textColor:r}={}}=e,a=p.value,{common:{cubicBezierEaseInOut:o},self:{padding:s,closeMargin:c,borderRadius:l,opacityDisabled:u,textColorCheckable:d,textColorHoverCheckable:h,textColorPressedCheckable:_,textColorChecked:v,colorCheckable:y,colorHoverCheckable:b,colorPressedCheckable:x,colorChecked:S,colorCheckedHover:C,colorCheckedPressed:w,closeBorderRadius:T,fontWeightStrong:E,[f(`colorBordered`,t)]:D,[f(`closeSize`,a)]:O,[f(`closeIconSize`,a)]:k,[f(`fontSize`,a)]:A,[f(`height`,a)]:j,[f(`color`,t)]:M,[f(`textColor`,t)]:N,[f(`border`,t)]:P,[f(`closeIconColor`,t)]:F,[f(`closeIconColorHover`,t)]:I,[f(`closeIconColorPressed`,t)]:L,[f(`closeColorHover`,t)]:R,[f(`closeColorPressed`,t)]:z}}=m.value,B=g(c);return{"--n-font-weight-strong":E,"--n-avatar-size-override":`calc(${j} - 8px)`,"--n-bezier":o,"--n-border-radius":l,"--n-border":P,"--n-close-icon-size":k,"--n-close-color-pressed":z,"--n-close-color-hover":R,"--n-close-border-radius":T,"--n-close-icon-color":F,"--n-close-icon-color-hover":I,"--n-close-icon-color-pressed":L,"--n-close-icon-color-disabled":F,"--n-close-margin-top":B.top,"--n-close-margin-right":B.right,"--n-close-margin-bottom":B.bottom,"--n-close-margin-left":B.left,"--n-close-size":O,"--n-color":n||(i.value?D:M),"--n-color-checkable":y,"--n-color-checked":S,"--n-color-checked-hover":C,"--n-color-checked-pressed":w,"--n-color-hover-checkable":b,"--n-color-pressed-checkable":x,"--n-font-size":A,"--n-height":j,"--n-opacity-disabled":u,"--n-padding":s,"--n-text-color":r||N,"--n-text-color-checkable":d,"--n-text-color-checked":v,"--n-text-color-hover-checkable":h,"--n-text-color-pressed-checkable":_}}),E=c?w(`tag`,a(()=>{let t=``,{type:n,color:{color:r,textColor:a}={}}=e;return t+=n[0],t+=p.value[0],r&&(t+=`a${b(r)}`),a&&(t+=`b${b(a)}`),i.value&&(t+=`c`),t}),T,e):void 0;return Object.assign(Object.assign({},y),{rtlEnabled:S,mergedClsPrefix:o,contentRef:n,mergedBordered:i,handleClick:_,handleCloseClick:v,cssVars:c?void 0:T,themeClass:E?.themeClass,onRender:E?.onRender})},render(){var e;let{mergedClsPrefix:t,rtlEnabled:n,closable:r,color:{borderColor:a}={},round:o,onRender:s,$slots:c}=this;s?.();let l=S(c.avatar,e=>e&&i(`div`,{class:`${t}-tag__avatar`},e)),u=S(c.icon,e=>e&&i(`div`,{class:`${t}-tag__icon`},e));return i(`div`,{class:[`${t}-tag`,this.themeClass,{[`${t}-tag--rtl`]:n,[`${t}-tag--strong`]:this.strong,[`${t}-tag--disabled`]:this.disabled,[`${t}-tag--checkable`]:this.checkable,[`${t}-tag--checked`]:this.checkable&&this.checked,[`${t}-tag--round`]:o,[`${t}-tag--avatar`]:l,[`${t}-tag--icon`]:u,[`${t}-tag--closable`]:r}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},u||l,i(`span`,{class:`${t}-tag__content`,ref:`contentRef`},(e=this.$slots).default?.call(e)),!this.checkable&&r?i(T,{clsPrefix:t,class:`${t}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:o,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?i(`div`,{class:`${t}-tag__border`,style:{borderColor:a}}):null)}});export{k as n,O as r,N as t};