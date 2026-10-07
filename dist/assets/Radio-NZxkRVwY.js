import{A as e,F as t,N as n,b as r}from"./vue.runtime.esm-bundler-DZZTqpJU.js";import{c as i,d as a,f as o,n as s,p as c,s as l,u}from"./use-theme--pjWdM-N.js";import{t as d}from"./use-rtl-DxDqUyON.js";import{a as f}from"./resolve-slot-CNYZEkGJ.js";import{t as p}from"./use-config-B_Ca_QT7.js";import{t as m}from"./use-css-vars-class-LmlPa6Qd.js";import{t as h}from"./light-EnHGsqt0.js";import{n as g,r as _}from"./RadioGroup-mTy3JKBT.js";var v=i(`radio`,`
 line-height: var(--n-label-line-height);
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 align-items: flex-start;
 flex-wrap: nowrap;
 font-size: var(--n-font-size);
 word-break: break-word;
`,[a(`checked`,[u(`dot`,`
 background-color: var(--n-color-active);
 `)]),u(`dot-wrapper`,`
 position: relative;
 flex-shrink: 0;
 flex-grow: 0;
 width: var(--n-radio-size);
 `),i(`radio-input`,`
 position: absolute;
 border: 0;
 width: 0;
 height: 0;
 opacity: 0;
 margin: 0;
 `),u(`dot`,`
 position: absolute;
 top: 50%;
 left: 0;
 transform: translateY(-50%);
 height: var(--n-radio-size);
 width: var(--n-radio-size);
 background: var(--n-color);
 box-shadow: var(--n-box-shadow);
 border-radius: 50%;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `,[l(`&::before`,`
 content: "";
 opacity: 0;
 position: absolute;
 left: 4px;
 top: 4px;
 height: calc(100% - 8px);
 width: calc(100% - 8px);
 border-radius: 50%;
 transform: scale(.8);
 background: var(--n-dot-color-active);
 transition: 
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),a(`checked`,{boxShadow:`var(--n-box-shadow-active)`},[l(`&::before`,`
 opacity: 1;
 transform: scale(1);
 `)])]),u(`label`,`
 color: var(--n-text-color);
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 display: inline-block;
 transition: color .3s var(--n-bezier);
 `),o(`disabled`,`
 cursor: pointer;
 `,[l(`&:hover`,[u(`dot`,{boxShadow:`var(--n-box-shadow-hover)`})]),a(`focus`,[l(`&:not(:active)`,[u(`dot`,{boxShadow:`var(--n-box-shadow-focus)`})])])]),a(`disabled`,`
 cursor: not-allowed;
 `,[u(`dot`,{boxShadow:`var(--n-box-shadow-disabled)`,backgroundColor:`var(--n-color-disabled)`},[l(`&::before`,{backgroundColor:`var(--n-dot-color-disabled)`}),a(`checked`,`
 opacity: 1;
 `)]),u(`label`,{color:`var(--n-text-color-disabled)`}),i(`radio-input`,`
 cursor: not-allowed;
 `)])]);t();var y=e({name:`Radio`,props:Object.assign(Object.assign({},s.props),g),setup(e){let t=_(e),n=s(`Radio`,`-radio`,v,h,e,t.mergedClsPrefix),i=r(()=>{let{mergedSize:{value:e}}=t,{common:{cubicBezierEaseInOut:r},self:{boxShadow:i,boxShadowActive:a,boxShadowDisabled:o,boxShadowFocus:s,boxShadowHover:l,color:u,colorDisabled:d,colorActive:f,textColor:p,textColorDisabled:m,dotColorActive:h,dotColorDisabled:g,labelPadding:_,labelLineHeight:v,labelFontWeight:y,[c(`fontSize`,e)]:b,[c(`radioSize`,e)]:x}}=n.value;return{"--n-bezier":r,"--n-label-line-height":v,"--n-label-font-weight":y,"--n-box-shadow":i,"--n-box-shadow-active":a,"--n-box-shadow-disabled":o,"--n-box-shadow-focus":s,"--n-box-shadow-hover":l,"--n-color":u,"--n-color-active":f,"--n-color-disabled":d,"--n-dot-color-active":h,"--n-dot-color-disabled":g,"--n-font-size":b,"--n-radio-size":x,"--n-text-color":p,"--n-text-color-disabled":m,"--n-label-padding":_}}),{inlineThemeDisabled:a,mergedClsPrefixRef:o,mergedRtlRef:l}=p(e),u=d(`Radio`,l,o),f=a?m(`radio`,r(()=>t.mergedSize.value[0]),i,e):void 0;return Object.assign(t,{rtlEnabled:u,cssVars:a?void 0:i,themeClass:f?.themeClass,onRender:f?.onRender})},render(){let{$slots:e,mergedClsPrefix:t,onRender:r,label:i}=this;return r?.(),n(`label`,{class:[`${t}-radio`,this.themeClass,this.rtlEnabled&&`${t}-radio--rtl`,this.mergedDisabled&&`${t}-radio--disabled`,this.renderSafeChecked&&`${t}-radio--checked`,this.focus&&`${t}-radio--focus`],style:this.cssVars},n(`div`,{class:`${t}-radio__dot-wrapper`},`\xA0`,n(`div`,{class:[`${t}-radio__dot`,this.renderSafeChecked&&`${t}-radio__dot--checked`]}),n(`input`,{ref:`inputRef`,type:`radio`,class:`${t}-radio-input`,value:this.value,name:this.mergedName,checked:this.renderSafeChecked,disabled:this.mergedDisabled,onChange:this.handleRadioInputChange,onFocus:this.handleRadioInputFocus,onBlur:this.handleRadioInputBlur})),f(e.default,e=>!e&&!i?null:n(`div`,{ref:`labelRef`,class:`${t}-radio__label`},e||i)))}});export{y as t};