import{A as e,Ct as t,F as n,N as r,ut as i}from"./vue.runtime.esm-bundler-DZZTqpJU.js";import{c as a,s as o,u as s}from"./use-theme--pjWdM-N.js";import{t as c}from"./use-style-Dm0FV5ZE.js";import{n as l,t as u}from"./icon-switch.cssr-GuipRqzd.js";var d=o([o(`@keyframes rotator`,`
 0% {
 -webkit-transform: rotate(0deg);
 transform: rotate(0deg);
 }
 100% {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }`),a(`base-loading`,`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,[s(`transition-wrapper`,`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[u()]),s(`placeholder`,`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[u({left:`50%`,top:`50%`,originalTransform:`translateX(-50%) translateY(-50%)`})]),s(`container`,`
 animation: rotator 3s linear infinite both;
 `,[s(`icon`,`
 height: 1em;
 width: 1em;
 `)])])]);n(),i();var f=`1.6s`,p={strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0},scale:{type:Number,default:1},radius:{type:Number,default:100}},m=e({name:`BaseLoading`,props:Object.assign({clsPrefix:{type:String,required:!0},show:{type:Boolean,default:!0}},p),setup(e){c(`-base-loading`,d,t(e,`clsPrefix`))},render(){let{clsPrefix:e,radius:t,strokeWidth:n,stroke:i,scale:a}=this,o=t/a;return r(`div`,{class:`${e}-base-loading`,role:`img`,"aria-label":`loading`},r(l,null,{default:()=>this.show?r(`div`,{key:`icon`,class:`${e}-base-loading__transition-wrapper`},r(`div`,{class:`${e}-base-loading__container`},r(`svg`,{class:`${e}-base-loading__icon`,viewBox:`0 0 ${2*o} ${2*o}`,xmlns:`http://www.w3.org/2000/svg`,style:{color:i}},r(`g`,null,r(`animateTransform`,{attributeName:`transform`,type:`rotate`,values:`0 ${o} ${o};270 ${o} ${o}`,begin:`0s`,dur:f,fill:`freeze`,repeatCount:`indefinite`}),r(`circle`,{class:`${e}-base-loading__icon`,fill:`none`,stroke:`currentColor`,"stroke-width":n,"stroke-linecap":`round`,cx:o,cy:o,r:t-n/2,"stroke-dasharray":5.67*t,"stroke-dashoffset":18.48*t},r(`animateTransform`,{attributeName:`transform`,type:`rotate`,values:`0 ${o} ${o};135 ${o} ${o};450 ${o} ${o}`,begin:`0s`,dur:f,fill:`freeze`,repeatCount:`indefinite`}),r(`animate`,{attributeName:`stroke-dashoffset`,values:`${5.67*t};${1.42*t};${5.67*t}`,begin:`0s`,dur:f,fill:`freeze`,repeatCount:`indefinite`})))))):r(`div`,{key:`placeholder`,class:`${e}-base-loading__placeholder`},this.$slots)}))}});export{p as n,m as t};