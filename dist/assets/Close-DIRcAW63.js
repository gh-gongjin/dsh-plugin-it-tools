import{A as e,Ct as t,F as n,N as r,ut as i}from"./vue.runtime.esm-bundler-DZZTqpJU.js";import{c as a,d as o,f as s,s as c}from"./use-theme--pjWdM-N.js";import{n as l,t as u}from"./replaceable-DmEc4phL.js";import{t as d}from"./use-style-Dm0FV5ZE.js";n();var f=u(`close`,()=>r(`svg`,{viewBox:`0 0 12 12`,version:`1.1`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":!0},r(`g`,{stroke:`none`,"stroke-width":`1`,fill:`none`,"fill-rule":`evenodd`},r(`g`,{fill:`currentColor`,"fill-rule":`nonzero`},r(`path`,{d:`M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z`}))))),p=a(`base-close`,`
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 background-color: transparent;
 color: var(--n-close-icon-color);
 border-radius: var(--n-close-border-radius);
 height: var(--n-close-size);
 width: var(--n-close-size);
 font-size: var(--n-close-icon-size);
 outline: none;
 border: none;
 position: relative;
 padding: 0;
`,[o(`absolute`,`
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `),c(`&::before`,`
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `),s(`disabled`,[c(`&:hover`,`
 color: var(--n-close-icon-color-hover);
 `),c(`&:hover::before`,`
 background-color: var(--n-close-color-hover);
 `),c(`&:focus::before`,`
 background-color: var(--n-close-color-hover);
 `),c(`&:active`,`
 color: var(--n-close-icon-color-pressed);
 `),c(`&:active::before`,`
 background-color: var(--n-close-color-pressed);
 `)]),o(`disabled`,`
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `),o(`round`,[c(`&::before`,`
 border-radius: 50%;
 `)])]);n(),i();var m=e({name:`BaseClose`,props:{isButtonTag:{type:Boolean,default:!0},clsPrefix:{type:String,required:!0},disabled:{type:Boolean,default:void 0},focusable:{type:Boolean,default:!0},round:Boolean,onClick:Function,absolute:Boolean},setup(e){return d(`-base-close`,p,t(e,`clsPrefix`)),()=>{let{clsPrefix:t,disabled:n,absolute:i,round:a,isButtonTag:o}=e;return r(o?`button`:`div`,{type:o?`button`:void 0,tabindex:n||!e.focusable?-1:0,"aria-disabled":n,"aria-label":`close`,role:o?void 0:`button`,disabled:n,class:[`${t}-base-close`,i&&`${t}-base-close--absolute`,n&&`${t}-base-close--disabled`,a&&`${t}-base-close--round`],onMousedown:t=>{e.focusable||t.preventDefault()},onClick:e.onClick},r(l,{clsPrefix:t},{default:()=>r(f,null)}))}}});export{m as t};