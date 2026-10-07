import{A as e,Ct as t,F as n,I as r,N as i,ut as a}from"./vue.runtime.esm-bundler-DZZTqpJU.js";import{c as o,s}from"./use-theme--pjWdM-N.js";import{t as c}from"./context-DG69g5IX.js";import{t as l}from"./toString-BUi0nDzd.js";import{t as u}from"./_hasUnicode-Cp9Achgk.js";import{t as d}from"./use-style-Dm0FV5ZE.js";function f(e,t,n){var r=-1,i=e.length;t<0&&(t=-t>i?0:i+t),n=n>i?i:n,n<0&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0;for(var a=Array(i);++r<i;)a[r]=e[r+t];return a}function p(e,t,n){var r=e.length;return n=n===void 0?r:n,!t&&n>=r?e:f(e,t,n)}function m(e){return e.split(``)}var h=`\\ud800-\\udfff`,g=`\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff`,_=`\\ufe0e\\ufe0f`,v=`[`+h+`]`,y=`[`+g+`]`,b=`\\ud83c[\\udffb-\\udfff]`,x=`(?:`+y+`|`+b+`)`,S=`[^`+h+`]`,C=`(?:\\ud83c[\\udde6-\\uddff]){2}`,w=`[\\ud800-\\udbff][\\udc00-\\udfff]`,T=`\\u200d`,E=x+`?`,D=`[`+_+`]?`,O=`(?:`+T+`(?:`+[S,C,w].join(`|`)+`)`+D+E+`)*`,k=D+E+O,A=`(?:`+[S+y+`?`,y,C,w,v].join(`|`)+`)`,j=RegExp(b+`(?=`+b+`)|`+A+k,`g`);function M(e){return e.match(j)||[]}function N(e){return u(e)?M(e):m(e)}function P(e){return function(t){t=l(t);var n=u(t)?N(t):void 0,r=n?n[0]:t.charAt(0),i=n?p(n,1).join(``):t.slice(1);return r[e]()+i}}var F=P(`toUpperCase`),I=o(`base-icon`,`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`,[s(`svg`,`
 height: 1em;
 width: 1em;
 `)]);n(),a();var L=e({name:`BaseIcon`,props:{role:String,ariaLabel:String,ariaDisabled:{type:Boolean,default:void 0},ariaHidden:{type:Boolean,default:void 0},clsPrefix:{type:String,required:!0},onClick:Function,onMousedown:Function,onMouseup:Function},setup(e){d(`-base-icon`,I,t(e,`clsPrefix`))},render(){return i(`i`,{class:`${this.clsPrefix}-base-icon`,onClick:this.onClick,onMousedown:this.onMousedown,onMouseup:this.onMouseup,role:this.role,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,"aria-disabled":this.ariaDisabled},this.$slots)}});n();function R(t,n){let a=e({render(){return n()}});return e({name:F(t),setup(){let e=r(c,null)?.mergedIconsRef;return()=>{let n=e?.value?.[t];return n?n():i(a,null)}}})}export{L as n,f as r,R as t};