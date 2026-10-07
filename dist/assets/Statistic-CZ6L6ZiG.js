import{A as e,F as t,N as n,b as r}from"./vue.runtime.esm-bundler-DZZTqpJU.js";import{c as i,n as a,u as o}from"./use-theme--pjWdM-N.js";import{t as s}from"./use-rtl-DxDqUyON.js";import{a as c}from"./resolve-slot-CNYZEkGJ.js";import{t as l}from"./use-config-B_Ca_QT7.js";import{t as u}from"./use-css-vars-class-LmlPa6Qd.js";import{n as d}from"./light-CZEvx-5J.js";var f=i(`statistic`,[o(`label`,`
 font-weight: var(--n-label-font-weight);
 transition: .3s color var(--n-bezier);
 font-size: var(--n-label-font-size);
 color: var(--n-label-text-color);
 `),i(`statistic-value`,`
 margin-top: 4px;
 font-weight: var(--n-value-font-weight);
 `,[o(`prefix`,`
 margin: 0 4px 0 0;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-prefix-text-color);
 `,[i(`icon`,{verticalAlign:`-0.125em`})]),o(`content`,`
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-text-color);
 `),o(`suffix`,`
 margin: 0 0 0 4px;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-suffix-text-color);
 `,[i(`icon`,{verticalAlign:`-0.125em`})])])]);t();var p=e({name:`Statistic`,props:Object.assign(Object.assign({},a.props),{tabularNums:Boolean,label:String,value:[String,Number]}),slots:Object,setup(e){let{mergedClsPrefixRef:t,inlineThemeDisabled:n,mergedRtlRef:i}=l(e),o=a(`Statistic`,`-statistic`,f,d,e,t),c=s(`Statistic`,i,t),p=r(()=>{let{self:{labelFontWeight:e,valueFontSize:t,valueFontWeight:n,valuePrefixTextColor:r,labelTextColor:i,valueSuffixTextColor:a,valueTextColor:s,labelFontSize:c},common:{cubicBezierEaseInOut:l}}=o.value;return{"--n-bezier":l,"--n-label-font-size":c,"--n-label-font-weight":e,"--n-label-text-color":i,"--n-value-font-weight":n,"--n-value-font-size":t,"--n-value-prefix-text-color":r,"--n-value-suffix-text-color":a,"--n-value-text-color":s}}),m=n?u(`statistic`,void 0,p,e):void 0;return{rtlEnabled:c,mergedClsPrefix:t,cssVars:n?void 0:p,themeClass:m?.themeClass,onRender:m?.onRender}},render(){var e;let{mergedClsPrefix:t,$slots:{default:r,label:i,prefix:a,suffix:o}}=this;return(e=this.onRender)==null||e.call(this),n(`div`,{class:[`${t}-statistic`,this.themeClass,this.rtlEnabled&&`${t}-statistic--rtl`],style:this.cssVars},c(i,e=>n(`div`,{class:`${t}-statistic__label`},this.label||e)),n(`div`,{class:`${t}-statistic-value`,style:{fontVariantNumeric:this.tabularNums?`tabular-nums`:``}},c(a,e=>e&&n(`span`,{class:`${t}-statistic-value__prefix`},e)),this.value===void 0?c(r,e=>e&&n(`span`,{class:`${t}-statistic-value__content`},e)):n(`span`,{class:`${t}-statistic-value__content`},this.value),c(o,e=>e&&n(`span`,{class:`${t}-statistic-value__suffix`},e))))}});export{p as t};