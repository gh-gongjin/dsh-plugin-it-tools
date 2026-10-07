import{A as e,F as t,N as n,b as r}from"./vue.runtime.esm-bundler-DZZTqpJU.js";import{c as i,n as a,p as o,u as s}from"./use-theme--pjWdM-N.js";import{t as c}from"./use-config-B_Ca_QT7.js";import{t as l}from"./use-css-vars-class-LmlPa6Qd.js";import{n as u}from"./use-form-item-C8Vx-E3x.js";import{t as d}from"./light-CXUM8iPg.js";var f=i(`input-group-label`,`
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 box-sizing: border-box;
 padding: 0 12px;
 display: inline-block;
 border-radius: var(--n-border-radius);
 background-color: var(--n-group-label-color);
 color: var(--n-group-label-text-color);
 font-size: var(--n-font-size);
 line-height: var(--n-height);
 height: var(--n-height);
 flex-shrink: 0;
 white-space: nowrap;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[s(`border`,`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-group-label-border);
 transition: border-color .3s var(--n-bezier);
 `)]);t();var p=e({name:`InputGroupLabel`,props:Object.assign(Object.assign({},a.props),{size:String,bordered:{type:Boolean,default:void 0}}),setup(e){let{mergedBorderedRef:t,mergedClsPrefixRef:n,inlineThemeDisabled:i,mergedComponentPropsRef:s}=c(e),p=a(`Input`,`-input-group-label`,f,d,e,n),{mergedSizeRef:m}=u(e,{mergedSize(t){return e.size===void 0?t?t.mergedSize.value:s?.value?.Input?.size||`medium`:e.size}}),h=r(()=>{let{value:e}=m,{common:{cubicBezierEaseInOut:t},self:{groupLabelColor:n,borderRadius:r,groupLabelTextColor:i,lineHeight:a,groupLabelBorder:s,[o(`fontSize`,e)]:c,[o(`height`,e)]:l}}=p.value;return{"--n-bezier":t,"--n-group-label-color":n,"--n-group-label-border":s,"--n-border-radius":r,"--n-group-label-text-color":i,"--n-font-size":c,"--n-line-height":a,"--n-height":l}}),g=i?l(`input-group-label`,r(()=>m.value[0]),h,e):void 0;return{mergedClsPrefix:n,mergedBordered:t,cssVars:i?void 0:h,themeClass:g?.themeClass,onRender:g?.onRender}},render(){var e,t;let{mergedClsPrefix:r}=this;return(e=this.onRender)==null||e.call(this),n(`div`,{class:[`${r}-input-group-label`,this.themeClass],style:this.cssVars},(t=this.$slots).default?.call(t),this.mergedBordered?n(`div`,{class:`${r}-input-group-label__border`}):null)}});export{p as t};