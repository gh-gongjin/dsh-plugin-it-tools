import{A as e,F as t,N as n,b as r}from"./vue.runtime.esm-bundler-DZZTqpJU.js";import{c as i,d as a,h as o,m as s,n as c,o as l,p as u,s as d,u as f}from"./use-theme--pjWdM-N.js";import{t as p}from"./use-rtl-DxDqUyON.js";import{t as m}from"./Scrollbar-CzXWYKLa.js";import{r as h}from"./css-DE6X-JUA.js";import{t as g}from"./call-fCmD0dxi.js";import{t as _}from"./keysOf-BNt7p-WY.js";import{a as v,t as y}from"./resolve-slot-CNYZEkGJ.js";import{t as b}from"./use-config-B_Ca_QT7.js";import{t as x}from"./use-css-vars-class-LmlPa6Qd.js";import{t as S}from"./Close-DIRcAW63.js";import{t as C}from"./light-DVO8pKSH.js";var w=i(`card-content`,`
 flex: 1;
 min-width: 0;
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
`),T=d([i(`card`,`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[l({background:`var(--n-color-modal)`}),a(`hoverable`,[d(`&:hover`,`box-shadow: var(--n-box-shadow);`)]),a(`content-segmented`,[d(`>`,[i(`card-content`,`
 padding-top: var(--n-padding-bottom);
 `),f(`content-scrollbar`,[d(`>`,[i(`scrollbar-container`,[d(`>`,[i(`card-content`,`
 padding-top: var(--n-padding-bottom);
 `)])])])])])]),a(`content-soft-segmented`,[d(`>`,[i(`card-content`,`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `),f(`content-scrollbar`,[d(`>`,[i(`scrollbar-container`,[d(`>`,[i(`card-content`,`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])])])])])]),a(`footer-segmented`,[d(`>`,[f(`footer`,`
 padding-top: var(--n-padding-bottom);
 `)])]),a(`footer-soft-segmented`,[d(`>`,[f(`footer`,`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),d(`>`,[i(`card-header`,`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[f(`main`,`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),f(`extra`,`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),f(`close`,`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),f(`action`,`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),w,i(`card-content`,[d(`&:first-child`,`
 padding-top: var(--n-padding-bottom);
 `)]),f(`content-scrollbar`,`
 display: flex;
 flex-direction: column;
 `,[d(`>`,[i(`scrollbar-container`,[d(`>`,[w])])]),d(`&:first-child >`,[i(`scrollbar-container`,[d(`>`,[i(`card-content`,`
 padding-top: var(--n-padding-bottom);
 `)])])])]),f(`footer`,`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[d(`&:first-child`,`
 padding-top: var(--n-padding-bottom);
 `)]),f(`action`,`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),i(`card-cover`,`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[d(`img`,`
 display: block;
 width: 100%;
 `)]),a(`bordered`,`
 border: 1px solid var(--n-border-color);
 `,[d(`&:target`,`border-color: var(--n-color-target);`)]),a(`action-segmented`,[d(`>`,[f(`action`,[d(`&:not(:first-child)`,`
 border-top: 1px solid var(--n-border-color);
 `)])])]),a(`content-segmented, content-soft-segmented`,[d(`>`,[i(`card-content`,`
 transition: border-color 0.3s var(--n-bezier);
 `,[d(`&:not(:first-child)`,`
 border-top: 1px solid var(--n-border-color);
 `)]),f(`content-scrollbar`,`
 transition: border-color 0.3s var(--n-bezier);
 `,[d(`&:not(:first-child)`,`
 border-top: 1px solid var(--n-border-color);
 `)])])]),a(`footer-segmented, footer-soft-segmented`,[d(`>`,[f(`footer`,`
 transition: border-color 0.3s var(--n-bezier);
 `,[d(`&:not(:first-child)`,`
 border-top: 1px solid var(--n-border-color);
 `)])])]),a(`embedded`,`
 background-color: var(--n-color-embedded);
 `)]),s(i(`card`,`
 background: var(--n-color-modal);
 `,[a(`embedded`,`
 background-color: var(--n-color-embedded-modal);
 `)])),o(i(`card`,`
 background: var(--n-color-popover);
 `,[a(`embedded`,`
 background-color: var(--n-color-embedded-popover);
 `)]))]);t();var E={title:[String,Function],contentClass:String,contentStyle:[Object,String],contentScrollable:Boolean,headerClass:String,headerStyle:[Object,String],headerExtraClass:String,headerExtraStyle:[Object,String],footerClass:String,footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:String,bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:`div`},cover:Function,content:[String,Function],footer:Function,action:Function,headerExtra:Function,closeFocusable:Boolean},D=_(E),O=e({name:`Card`,props:Object.assign(Object.assign({},c.props),E),slots:Object,setup(e){let t=()=>{let{onClose:t}=e;t&&g(t)},{inlineThemeDisabled:n,mergedClsPrefixRef:i,mergedRtlRef:a,mergedComponentPropsRef:o}=b(e),s=c(`Card`,`-card`,T,C,e,i),l=p(`Card`,a,i),d=r(()=>e.size||o?.value?.Card?.size||`medium`),f=r(()=>{let e=d.value,{self:{color:t,colorModal:n,colorTarget:r,textColor:i,titleTextColor:a,titleFontWeight:o,borderColor:c,actionColor:l,borderRadius:f,lineHeight:p,closeIconColor:m,closeIconColorHover:g,closeIconColorPressed:_,closeColorHover:v,closeColorPressed:y,closeBorderRadius:b,closeIconSize:x,closeSize:S,boxShadow:C,colorPopover:w,colorEmbedded:T,colorEmbeddedModal:E,colorEmbeddedPopover:D,[u(`padding`,e)]:O,[u(`fontSize`,e)]:k,[u(`titleFontSize`,e)]:A},common:{cubicBezierEaseInOut:j}}=s.value,{top:M,left:N,bottom:P}=h(O);return{"--n-bezier":j,"--n-border-radius":f,"--n-color":t,"--n-color-modal":n,"--n-color-popover":w,"--n-color-embedded":T,"--n-color-embedded-modal":E,"--n-color-embedded-popover":D,"--n-color-target":r,"--n-text-color":i,"--n-line-height":p,"--n-action-color":l,"--n-title-text-color":a,"--n-title-font-weight":o,"--n-close-icon-color":m,"--n-close-icon-color-hover":g,"--n-close-icon-color-pressed":_,"--n-close-color-hover":v,"--n-close-color-pressed":y,"--n-border-color":c,"--n-box-shadow":C,"--n-padding-top":M,"--n-padding-bottom":P,"--n-padding-left":N,"--n-font-size":k,"--n-title-font-size":A,"--n-close-size":S,"--n-close-icon-size":x,"--n-close-border-radius":b}}),m=n?x(`card`,r(()=>d.value[0]),f,e):void 0;return{rtlEnabled:l,mergedClsPrefix:i,mergedTheme:s,handleCloseClick:t,cssVars:n?void 0:f,themeClass:m?.themeClass,onRender:m?.onRender}},render(){let{segmented:e,bordered:t,hoverable:r,mergedClsPrefix:i,rtlEnabled:a,onRender:o,embedded:s,tag:c,$slots:l}=this;return o?.(),n(c,{class:[`${i}-card`,this.themeClass,s&&`${i}-card--embedded`,{[`${i}-card--rtl`]:a,[`${i}-card--content-scrollable`]:this.contentScrollable,[`${i}-card--content${typeof e!=`boolean`&&e.content===`soft`?`-soft`:``}-segmented`]:e===!0||e!==!1&&e.content,[`${i}-card--footer${typeof e!=`boolean`&&e.footer===`soft`?`-soft`:``}-segmented`]:e===!0||e!==!1&&e.footer,[`${i}-card--action-segmented`]:e===!0||e!==!1&&e.action,[`${i}-card--bordered`]:t,[`${i}-card--hoverable`]:r}],style:this.cssVars,role:this.role},v(l.cover,e=>{let t=this.cover?y([this.cover()]):e;return t&&n(`div`,{class:`${i}-card-cover`,role:`none`},t)}),v(l.header,e=>{let{title:t}=this,r=t?y(typeof t==`function`?[t()]:[t]):e;return r||this.closable?n(`div`,{class:[`${i}-card-header`,this.headerClass],style:this.headerStyle,role:`heading`},n(`div`,{class:`${i}-card-header__main`,role:`heading`},r),v(l[`header-extra`],e=>{let t=this.headerExtra?y([this.headerExtra()]):e;return t&&n(`div`,{class:[`${i}-card-header__extra`,this.headerExtraClass],style:this.headerExtraStyle},t)}),this.closable&&n(S,{clsPrefix:i,class:`${i}-card-header__close`,onClick:this.handleCloseClick,focusable:this.closeFocusable,absolute:!0})):null}),v(l.default,e=>{let{content:t}=this,r=t?y(typeof t==`function`?[t()]:[t]):e;return r?this.contentScrollable?n(m,{class:`${i}-card__content-scrollbar`,contentClass:[`${i}-card-content`,this.contentClass],contentStyle:this.contentStyle},r):n(`div`,{class:[`${i}-card-content`,this.contentClass],style:this.contentStyle,role:`none`},r):null}),v(l.footer,e=>{let t=this.footer?y([this.footer()]):e;return t&&n(`div`,{class:[`${i}-card__footer`,this.footerClass],style:this.footerStyle,role:`none`},t)}),v(l.action,e=>{let t=this.action?y([this.action()]):e;return t&&n(`div`,{class:`${i}-card__action`,role:`none`},t)}))}});export{D as n,E as r,O as t};