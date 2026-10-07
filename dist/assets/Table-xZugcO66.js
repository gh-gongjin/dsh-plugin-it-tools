import{A as e,F as t,N as n,b as r}from"./vue.runtime.esm-bundler-DZZTqpJU.js";import{c as i,d as a,f as o,h as s,m as c,n as l,p as u,s as d}from"./use-theme--pjWdM-N.js";import{t as f}from"./use-rtl-DxDqUyON.js";import{t as p}from"./use-config-B_Ca_QT7.js";import{t as m}from"./use-css-vars-class-LmlPa6Qd.js";import{n as h}from"./light-w2kzmF1U.js";var g=d([i(`table`,`
 font-size: var(--n-font-size);
 font-variant-numeric: tabular-nums;
 line-height: var(--n-line-height);
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 text-align: left;
 border-collapse: separate;
 border-spacing: 0;
 overflow: hidden;
 background-color: var(--n-td-color);
 border-color: var(--n-merged-border-color);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 --n-merged-border-color: var(--n-border-color);
 `,[d(`th`,`
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 text-align: inherit;
 padding: var(--n-th-padding);
 vertical-align: inherit;
 text-transform: none;
 border: 0px solid var(--n-merged-border-color);
 font-weight: var(--n-th-font-weight);
 color: var(--n-th-text-color);
 background-color: var(--n-th-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 `,[d(`&:last-child`,`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),d(`td`,`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 padding: var(--n-td-padding);
 color: var(--n-td-text-color);
 background-color: var(--n-td-color);
 border: 0px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 `,[d(`&:last-child`,`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),a(`bordered`,`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `,[d(`tr`,[d(`&:last-child`,[d(`td`,`
 border-bottom: 0 solid var(--n-merged-border-color);
 `)])])]),a(`single-line`,[d(`th`,`
 border-right: 0px solid var(--n-merged-border-color);
 `),d(`td`,`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),a(`single-column`,[d(`tr`,[d(`&:not(:last-child)`,[d(`td`,`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])]),a(`striped`,[d(`tr:nth-of-type(even)`,[d(`td`,`background-color: var(--n-td-color-striped)`)])]),o(`bottom-bordered`,[d(`tr`,[d(`&:last-child`,[d(`td`,`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])])]),c(i(`table`,`
 background-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `,[d(`th`,`
 background-color: var(--n-th-color-modal);
 `),d(`td`,`
 background-color: var(--n-td-color-modal);
 `)])),s(i(`table`,`
 background-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `,[d(`th`,`
 background-color: var(--n-th-color-popover);
 `),d(`td`,`
 background-color: var(--n-td-color-popover);
 `)]))]);t();var _=e({name:`Table`,props:Object.assign(Object.assign({},l.props),{bordered:{type:Boolean,default:!0},bottomBordered:{type:Boolean,default:!0},singleLine:{type:Boolean,default:!0},striped:Boolean,singleColumn:Boolean,size:String}),setup(e){let{mergedClsPrefixRef:t,inlineThemeDisabled:n,mergedRtlRef:i,mergedComponentPropsRef:a}=p(e),o=r(()=>e.size||a?.value?.Table?.size||`medium`),s=l(`Table`,`-table`,g,h,e,t),c=f(`Table`,i,t),d=r(()=>{let e=o.value,{self:{borderColor:t,tdColor:n,tdColorModal:r,tdColorPopover:i,thColor:a,thColorModal:c,thColorPopover:l,thTextColor:d,tdTextColor:f,borderRadius:p,thFontWeight:m,lineHeight:h,borderColorModal:g,borderColorPopover:_,tdColorStriped:v,tdColorStripedModal:y,tdColorStripedPopover:b,[u(`fontSize`,e)]:x,[u(`tdPadding`,e)]:S,[u(`thPadding`,e)]:C},common:{cubicBezierEaseInOut:w}}=s.value;return{"--n-bezier":w,"--n-td-color":n,"--n-td-color-modal":r,"--n-td-color-popover":i,"--n-td-text-color":f,"--n-border-color":t,"--n-border-color-modal":g,"--n-border-color-popover":_,"--n-border-radius":p,"--n-font-size":x,"--n-th-color":a,"--n-th-color-modal":c,"--n-th-color-popover":l,"--n-th-font-weight":m,"--n-th-text-color":d,"--n-line-height":h,"--n-td-padding":S,"--n-th-padding":C,"--n-td-color-striped":v,"--n-td-color-striped-modal":y,"--n-td-color-striped-popover":b}}),_=n?m(`table`,r(()=>o.value[0]),d,e):void 0;return{rtlEnabled:c,mergedClsPrefix:t,cssVars:n?void 0:d,themeClass:_?.themeClass,onRender:_?.onRender}},render(){var e;let{mergedClsPrefix:t}=this;return(e=this.onRender)==null||e.call(this),n(`table`,{class:[`${t}-table`,this.themeClass,{[`${t}-table--rtl`]:this.rtlEnabled,[`${t}-table--bottom-bordered`]:this.bottomBordered,[`${t}-table--bordered`]:this.bordered,[`${t}-table--single-line`]:this.singleLine,[`${t}-table--single-column`]:this.singleColumn,[`${t}-table--striped`]:this.striped}],style:this.cssVars},this.$slots)}});export{_ as t};