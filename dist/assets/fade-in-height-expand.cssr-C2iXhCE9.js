import{s as e}from"./use-theme--pjWdM-N.js";import{t}from"./_common-B5AAFkad.js";var{cubicBezierEaseInOut:n,cubicBezierEaseOut:r,cubicBezierEaseIn:i}=t;function a({overflow:t=`hidden`,duration:a=`.3s`,originalTransition:o=``,leavingDelay:s=`0s`,foldPadding:c=!1,enterToProps:l=void 0,leaveToProps:u=void 0,reverse:d=!1}={}){let f=d?`leave`:`enter`,p=d?`enter`:`leave`;return[e(`&.fade-in-height-expand-transition-${p}-from,
 &.fade-in-height-expand-transition-${f}-to`,Object.assign(Object.assign({},l),{opacity:1})),e(`&.fade-in-height-expand-transition-${p}-to,
 &.fade-in-height-expand-transition-${f}-from`,Object.assign(Object.assign({},u),{opacity:0,marginTop:`0 !important`,marginBottom:`0 !important`,paddingTop:c?`0 !important`:void 0,paddingBottom:c?`0 !important`:void 0})),e(`&.fade-in-height-expand-transition-${p}-active`,`
 overflow: ${t};
 transition:
 max-height ${a} ${n} ${s},
 opacity ${a} ${r} ${s},
 margin-top ${a} ${n} ${s},
 margin-bottom ${a} ${n} ${s},
 padding-top ${a} ${n} ${s},
 padding-bottom ${a} ${n} ${s}
 ${o?`,${o}`:``}
 `),e(`&.fade-in-height-expand-transition-${f}-active`,`
 overflow: ${t};
 transition:
 max-height ${a} ${n},
 opacity ${a} ${i},
 margin-top ${a} ${n},
 margin-bottom ${a} ${n},
 padding-top ${a} ${n},
 padding-bottom ${a} ${n}
 ${o?`,${o}`:``}
 `)]}export{a as t};