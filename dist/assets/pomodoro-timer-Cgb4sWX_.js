import{n as e,t}from"./dist-Bnj2Qb5M.js";import{A as n,C as r,D as i,Et as a,F as o,N as s,O as c,Pt as l,Qt as u,S as d,Y as f,Yt as p,a as m,at as h,b as g,c as _,d as v,h as y,nt as ee,ot as te,pt as ne,q as b,qt as re,u as ie,ut as x,w as S,x as C}from"./vue.runtime.esm-bundler-DZZTqpJU.js";import{t as ae}from"./Modal-39Fnfnvg.js";import{n as oe,t as se}from"./Tabs-CrDws80k.js";import{t as ce}from"./Button-CzL0bVpt.js";import{t as le}from"./Card-CZFVTIzo.js";import{t as w}from"./_plugin-vue_export-helper-BDNMzG2s.js";import{c as T,i as ue}from"./storeUtils-dbqQnTgT.js";import{F as de,K as fe,M as pe,S as me,_ as he,g as ge}from"./free-solid-svg-icons-C1FjKKY_.js";var _e=``+new URL(`../stopwatch.png`,import.meta.url).href;o(),l();var ve={},ye={class:`icon-container`},be=[`alt`];function xe(e,t){return b(),S(`header`,null,[C(`h1`,{onClick:t[0]||=t=>e.$router.push(`/`)},[C(`div`,ye,[t[1]||=C(`div`,{class:`circle`},null,-1),C(`img`,{src:_e,alt:e.$t(`tools.pomodoro-timer.Header.text.picture-of-a-stopwatch`)},null,8,be)]),i(` `+u(e.$t(`tools.pomodoro-timer.SplashScreen.text.pomodoro-timer-0`)),1)])])}var Se=w(ve,[[`render`,xe],[`__scopeId`,`data-v-f6e75cac`]]);x(),l(),o();var Ce={__name:`FinishedPopup`,setup(e){let t=T(`pomodoro-store`);return(e,n)=>{let r=ce,o=le,s=ae;return b(),d(s,{show:a(t).state.isShowFinishedPopup,"onUpdate:show":n[1]||=e=>a(t).state.isShowFinishedPopup=e,"mask-closable":!1},{default:h(()=>[c(o,{style:{width:`600px`},title:e.$t(`tools.pomodoro-timer.FinishedPopup.text.timer-finished`),bordered:!1,size:`huge`,role:`dialog`,"aria-modal":`true`},{footer:h(()=>[c(r,{onClick:n[0]||=e=>a(t).commit(`prepareNextTimerMode`)},{default:h(()=>[i(u(e.$t(`tools.pomodoro-timer.FinishedPopup.text.ok`)),1)]),_:1})]),default:h(()=>[C(`p`,null,u(a(t).state.finishedMessage),1)]),_:1},8,[`title`])]),_:1},8,[`show`])}}};l(),o();var we={},Te={class:`about-root`};function Ee(e,t){return b(),S(`div`,Te,[C(`h1`,null,u(e.$t(`home.nav.aboutLabel`)),1),C(`h2`,null,u(e.$t(`tools.pomodoro-timer.PomodoroAbout.text.the-pomodoro-technique`)),1),C(`p`,null,u(e.$t(`tools.pomodoro-timer.PomodoroAbout.text.the-pomodoro-technique-is-a-time-management-method-developed-by-francesco-cirillo-in-the-1980s-it-uses-a-timer-to-break-work-into-intervals-typically-25-minutes-in-length-separated-by-short-breaks-each-interval-is-known-as-a-pomodoro-from-the-italian-word-for-tomato-after-the-tomato-shaped-kitchen-timer-cirillo-used-as-a-university-student`)),1),C(`h2`,null,u(e.$t(`tools.pomodoro-timer.PomodoroAbout.text.five-steps-of-the-pomodoro-technique`)),1),C(`ol`,null,[C(`li`,null,u(e.$t(`tools.pomodoro-timer.PomodoroAbout.text.decide-on-a-task-and-set-the-timer-25-minutes-is-common`)),1),C(`li`,null,u(e.$t(`tools.pomodoro-timer.PomodoroAbout.text.work-on-the-task-during-that-time`)),1),C(`li`,null,u(e.$t(`tools.pomodoro-timer.PomodoroAbout.text.when-the-timer-rings-take-a-short-break-5-10-minutes-is-common`)),1),C(`li`,null,u(e.$t(`tools.pomodoro-timer.PomodoroAbout.text.keep-repeating-steps-1-3-but-after-your-4th-task-take-a-long-break-instead-of-a-short-break-20-30-minutes-is-common`)),1),C(`li`,null,u(e.$t(`tools.pomodoro-timer.PomodoroAbout.text.once-the-long-break-is-finished-return-to-step-1`)),1)]),C(`p`,null,[i(u(e.$t(`tools.pomodoro-timer.PomodoroAbout.text.source-wikipedia`))+` `,1),t[0]||=C(`a`,{target:`_blank`,href:`https://en.wikipedia.org/wiki/Pomodoro_Technique`},`https://en.wikipedia.org/wiki/Pomodoro_Technique`,-1)])])}var De=w(we,[[`render`,Ee],[`__scopeId`,`data-v-8df5974e`]]);l(),o();var Oe={class:`progress-bar`},ke=w({__name:`ProgressBar`,setup(e){let t=T(`pomodoro-store`),n=g({get(){return t.state.progressPercent},set(){}});return(e,t)=>(b(),S(`div`,Oe,[C(`div`,{class:`progress`,style:p({width:`${n.value}%`})},null,4)]))}},[[`__scopeId`,`data-v-dbb59abe`]]);x(),l(),o();var Ae=w({__name:`Counter`,setup(e){let t=T(`pomodoro-store`);return(e,n)=>(b(),S(`span`,null,u(a(t).state.counter),1))}},[[`__scopeId`,`data-v-68e2dd7a`]]);e();function je(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Me(e){if(Array.isArray(e))return e}function Ne(e){if(Array.isArray(e))return je(e)}function Pe(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function Fe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,Ge(r.key),r)}}function Ie(e,t,n){return t&&Fe(e.prototype,t),n&&Fe(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Le(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=qe(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function E(e,t,n){return(t=Ge(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Re(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function ze(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function Be(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ve(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function He(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?He(Object(n),!0).forEach(function(t){E(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):He(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Ue(e,t){return Me(e)||ze(e,t)||qe(e,t)||Be()}function O(e){return Ne(e)||Re(e)||qe(e)||Ve()}function We(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Ge(e){var t=We(e,`string`);return typeof t==`symbol`?t:t+``}function Ke(e){"@babel/helpers - typeof";return Ke=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Ke(e)}function qe(e,t){if(e){if(typeof e==`string`)return je(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?je(e,t):void 0}}var Je=function(){},Ye={},Xe={},Ze=null,Qe={mark:Je,measure:Je};try{typeof window<`u`&&(Ye=window),typeof document<`u`&&(Xe=document),typeof MutationObserver<`u`&&(Ze=MutationObserver),typeof performance<`u`&&(Qe=performance)}catch{}var $e=(Ye.navigator||{}).userAgent,et=$e===void 0?``:$e,k=Ye,A=Xe,tt=Ze,nt=Qe;k.document;var j=!!A.documentElement&&!!A.head&&typeof A.addEventListener==`function`&&typeof A.createElement==`function`,rt=~et.indexOf(`MSIE`)||~et.indexOf(`Trident/`),it,at=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,ot=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,st={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fab:`brands`,"fa-brands":`brands`},duotone:{fa:`solid`,fad:`solid`,"fa-solid":`solid`,"fa-duotone":`solid`,fadr:`regular`,"fa-regular":`regular`,fadl:`light`,"fa-light":`light`,fadt:`thin`,"fa-thin":`thin`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`,fasdr:`regular`,"fa-regular":`regular`,fasdl:`light`,"fa-light":`light`,fasdt:`thin`,"fa-thin":`thin`},slab:{"fa-regular":`regular`,faslr:`regular`},"slab-press":{"fa-regular":`regular`,faslpr:`regular`},"slab-duo":{"fa-regular":`regular`,fasldr:`regular`},"slab-press-duo":{"fa-regular":`regular`,faslpdr:`regular`},thumbprint:{"fa-light":`light`,fatl:`light`},vellum:{"fa-solid":`solid`,favs:`solid`},pixel:{"fa-regular":`regular`,fapr:`regular`},mosaic:{"fa-solid":`solid`,fams:`solid`},whiteboard:{"fa-semibold":`semibold`,fawsb:`semibold`},notdog:{"fa-solid":`solid`,fans:`solid`},"notdog-duo":{"fa-solid":`solid`,fands:`solid`},etch:{"fa-solid":`solid`,faes:`solid`},graphite:{"fa-thin":`thin`,fagt:`thin`},jelly:{"fa-regular":`regular`,fajr:`regular`},"jelly-fill":{"fa-regular":`regular`,fajfr:`regular`},"jelly-duo":{"fa-regular":`regular`,fajdr:`regular`},chisel:{"fa-regular":`regular`,facr:`regular`},utility:{"fa-semibold":`semibold`,fausb:`semibold`},"utility-duo":{"fa-semibold":`semibold`,faudsb:`semibold`},"utility-fill":{"fa-semibold":`semibold`,faufsb:`semibold`}},ct={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},lt=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`],M=`classic`,N=`duotone`,ut=`sharp`,dt=`sharp-duotone`,ft=`chisel`,pt=`etch`,mt=`graphite`,ht=`jelly`,gt=`jelly-duo`,_t=`jelly-fill`,vt=`mosaic`,yt=`notdog`,bt=`notdog-duo`,xt=`pixel`,St=`slab`,Ct=`slab-duo`,wt=`slab-press`,Tt=`slab-press-duo`,Et=`thumbprint`,Dt=`utility`,Ot=`utility-duo`,kt=`utility-fill`,At=`vellum`,jt=`whiteboard`,Mt=`Classic`,Nt=`Duotone`,Pt=`Sharp`,Ft=`Sharp Duotone`,It=`Chisel`,Lt=`Etch`,Rt=`Graphite`,zt=`Jelly`,Bt=`Jelly Duo`,Vt=`Jelly Fill`,Ht=`Mosaic`,Ut=`Notdog`,Wt=`Notdog Duo`,Gt=`Pixel`,Kt=`Slab`,qt=`Slab Duo`,Jt=`Slab Press`,Yt=`Slab Press Duo`,Xt=`Thumbprint`,Zt=`Utility`,Qt=`Utility Duo`,$t=`Utility Fill`,en=`Vellum`,tn=`Whiteboard`,nn=[M,N,ut,dt,ft,pt,mt,ht,gt,_t,vt,yt,bt,xt,St,Ct,wt,Tt,Et,Dt,Ot,kt,At,jt];it={},E(E(E(E(E(E(E(E(E(E(it,M,Mt),N,Nt),ut,Pt),dt,Ft),ft,It),pt,Lt),mt,Rt),ht,zt),gt,Bt),_t,Vt),E(E(E(E(E(E(E(E(E(E(it,vt,Ht),yt,Ut),bt,Wt),xt,Gt),St,Kt),Ct,qt),wt,Jt),Tt,Yt),Et,Xt),Dt,Zt),E(E(E(E(it,Ot,Qt),kt,$t),At,en),jt,tn);var rn={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},duotone:{900:`fad`,400:`fadr`,300:`fadl`,100:`fadt`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`,400:`fasdr`,300:`fasdl`,100:`fasdt`},slab:{400:`faslr`},"slab-press":{400:`faslpr`},"slab-duo":{400:`fasldr`},"slab-press-duo":{400:`faslpdr`},vellum:{900:`favs`},mosaic:{900:`fams`},pixel:{400:`fapr`},whiteboard:{600:`fawsb`},thumbprint:{300:`fatl`},notdog:{900:`fans`},"notdog-duo":{900:`fands`},etch:{900:`faes`},graphite:{100:`fagt`},chisel:{400:`facr`},jelly:{400:`fajr`},"jelly-fill":{400:`fajfr`},"jelly-duo":{400:`fajdr`},utility:{600:`fausb`},"utility-duo":{600:`faudsb`},"utility-fill":{600:`faufsb`}},an={"Font Awesome 7 Free":{900:`fas`,400:`far`},"Font Awesome 7 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 7 Brands":{400:`fab`,normal:`fab`},"Font Awesome 7 Duotone":{900:`fad`,400:`fadr`,normal:`fadr`,300:`fadl`,100:`fadt`},"Font Awesome 7 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 7 Sharp Duotone":{900:`fasds`,400:`fasdr`,normal:`fasdr`,300:`fasdl`,100:`fasdt`},"Font Awesome 7 Jelly":{400:`fajr`,normal:`fajr`},"Font Awesome 7 Jelly Fill":{400:`fajfr`,normal:`fajfr`},"Font Awesome 7 Jelly Duo":{400:`fajdr`,normal:`fajdr`},"Font Awesome 7 Slab":{400:`faslr`,normal:`faslr`},"Font Awesome 7 Slab Press":{400:`faslpr`,normal:`faslpr`},"Font Awesome 7 Slab Duo":{400:`fasldr`,normal:`fasldr`},"Font Awesome 7 Slab Press Duo":{400:`faslpdr`,normal:`faslpdr`},"Font Awesome 7 Pixel":{400:`fapr`,normal:`fapr`},"Font Awesome 7 Mosaic":{900:`fams`,normal:`fams`},"Font Awesome 7 Vellum":{900:`favs`,normal:`favs`},"Font Awesome 7 Thumbprint":{300:`fatl`,normal:`fatl`},"Font Awesome 7 Notdog":{900:`fans`,normal:`fans`},"Font Awesome 7 Notdog Duo":{900:`fands`,normal:`fands`},"Font Awesome 7 Etch":{900:`faes`,normal:`faes`},"Font Awesome 7 Graphite":{100:`fagt`,normal:`fagt`},"Font Awesome 7 Chisel":{400:`facr`,normal:`facr`},"Font Awesome 7 Whiteboard":{600:`fawsb`,normal:`fawsb`},"Font Awesome 7 Utility":{600:`fausb`,normal:`fausb`},"Font Awesome 7 Utility Duo":{600:`faudsb`,normal:`faudsb`},"Font Awesome 7 Utility Fill":{600:`faufsb`,normal:`faufsb`}},on=new Map([[`classic`,{defaultShortPrefixId:`fas`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`,`brands`],futureStyleIds:[],defaultFontWeight:900}],[`duotone`,{defaultShortPrefixId:`fad`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp`,{defaultShortPrefixId:`fass`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp-duotone`,{defaultShortPrefixId:`fasds`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`chisel`,{defaultShortPrefixId:`facr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`etch`,{defaultShortPrefixId:`faes`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`graphite`,{defaultShortPrefixId:`fagt`,defaultStyleId:`thin`,styleIds:[`thin`],futureStyleIds:[],defaultFontWeight:100}],[`jelly`,{defaultShortPrefixId:`fajr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-duo`,{defaultShortPrefixId:`fajdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-fill`,{defaultShortPrefixId:`fajfr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`mosaic`,{defaultShortPrefixId:`fams`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog`,{defaultShortPrefixId:`fans`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog-duo`,{defaultShortPrefixId:`fands`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`pixel`,{defaultShortPrefixId:`fapr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab`,{defaultShortPrefixId:`faslr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-duo`,{defaultShortPrefixId:`fasldr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press`,{defaultShortPrefixId:`faslpr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press-duo`,{defaultShortPrefixId:`faslpdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`thumbprint`,{defaultShortPrefixId:`fatl`,defaultStyleId:`light`,styleIds:[`light`],futureStyleIds:[],defaultFontWeight:300}],[`utility`,{defaultShortPrefixId:`fausb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-duo`,{defaultShortPrefixId:`faudsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-fill`,{defaultShortPrefixId:`faufsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`vellum`,{defaultShortPrefixId:`favs`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`whiteboard`,{defaultShortPrefixId:`fawsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}]]),sn={chisel:{regular:`facr`},classic:{brands:`fab`,light:`fal`,regular:`far`,solid:`fas`,thin:`fat`},duotone:{light:`fadl`,regular:`fadr`,solid:`fad`,thin:`fadt`},etch:{solid:`faes`},graphite:{thin:`fagt`},jelly:{regular:`fajr`},"jelly-duo":{regular:`fajdr`},"jelly-fill":{regular:`fajfr`},mosaic:{solid:`fams`},notdog:{solid:`fans`},"notdog-duo":{solid:`fands`},pixel:{regular:`fapr`},sharp:{light:`fasl`,regular:`fasr`,solid:`fass`,thin:`fast`},"sharp-duotone":{light:`fasdl`,regular:`fasdr`,solid:`fasds`,thin:`fasdt`},slab:{regular:`faslr`},"slab-duo":{regular:`fasldr`},"slab-press":{regular:`faslpr`},"slab-press-duo":{regular:`faslpdr`},thumbprint:{light:`fatl`},utility:{semibold:`fausb`},"utility-duo":{semibold:`faudsb`},"utility-fill":{semibold:`faufsb`},vellum:{solid:`favs`},whiteboard:{semibold:`fawsb`}},cn=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],ln={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}},un=[`kit`];E(E({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var dn={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}},fn={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}},pn={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}},mn={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}},hn,gn={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},_n=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`];hn={},E(E(E(E(E(E(E(E(E(E(hn,`classic`,`Classic`),`duotone`,`Duotone`),`sharp`,`Sharp`),`sharp-duotone`,`Sharp Duotone`),`chisel`,`Chisel`),`etch`,`Etch`),`graphite`,`Graphite`),`jelly`,`Jelly`),`jelly-duo`,`Jelly Duo`),`jelly-fill`,`Jelly Fill`),E(E(E(E(E(E(E(E(E(E(hn,`mosaic`,`Mosaic`),`notdog`,`Notdog`),`notdog-duo`,`Notdog Duo`),`pixel`,`Pixel`),`slab`,`Slab`),`slab-duo`,`Slab Duo`),`slab-press`,`Slab Press`),`slab-press-duo`,`Slab Press Duo`),`thumbprint`,`Thumbprint`),`utility`,`Utility`),E(E(E(E(hn,`utility-duo`,`Utility Duo`),`utility-fill`,`Utility Fill`),`vellum`,`Vellum`),`whiteboard`,`Whiteboard`),E(E({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var vn={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},duotone:{"fa-regular":`fadr`,"fa-light":`fadl`,"fa-thin":`fadt`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`,"fa-regular":`fasdr`,"fa-light":`fasdl`,"fa-thin":`fasdt`},slab:{"fa-regular":`faslr`},"slab-press":{"fa-regular":`faslpr`},"slab-duo":{"fa-regular":`fasldr`},"slab-press-duo":{"fa-regular":`faslpdr`},pixel:{"fa-regular":`fapr`},mosaic:{"fa-solid":`fams`},vellum:{"fa-solid":`favs`},whiteboard:{"fa-semibold":`fawsb`},thumbprint:{"fa-light":`fatl`},notdog:{"fa-solid":`fans`},"notdog-duo":{"fa-solid":`fands`},etch:{"fa-solid":`faes`},graphite:{"fa-thin":`fagt`},jelly:{"fa-regular":`fajr`},"jelly-fill":{"fa-regular":`fajfr`},"jelly-duo":{"fa-regular":`fajdr`},chisel:{"fa-regular":`facr`},utility:{"fa-semibold":`fausb`},"utility-duo":{"fa-semibold":`faudsb`},"utility-fill":{"fa-semibold":`faufsb`}},yn={classic:[`fas`,`far`,`fal`,`fat`,`fad`],duotone:[`fadr`,`fadl`,`fadt`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`,`fasdr`,`fasdl`,`fasdt`],slab:[`faslr`],"slab-press":[`faslpr`],"slab-duo":[`fasldr`],"slab-press-duo":[`faslpdr`],pixel:[`fapr`],mosaic:[`fams`],vellum:[`favs`],whiteboard:[`fawsb`],thumbprint:[`fatl`],notdog:[`fans`],"notdog-duo":[`fands`],etch:[`faes`],graphite:[`fagt`],jelly:[`fajr`],"jelly-fill":[`fajfr`],"jelly-duo":[`fajdr`],chisel:[`facr`],utility:[`fausb`],"utility-duo":[`faudsb`],"utility-fill":[`faufsb`]},bn={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},duotone:{fadr:`fa-regular`,fadl:`fa-light`,fadt:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`,fasdr:`fa-regular`,fasdl:`fa-light`,fasdt:`fa-thin`},slab:{faslr:`fa-regular`},"slab-press":{faslpr:`fa-regular`},"slab-duo":{fasldr:`fa-regular`},"slab-press-duo":{faslpdr:`fa-regular`},pixel:{fapr:`fa-regular`},mosaic:{fams:`fa-solid`},vellum:{favs:`fa-solid`},whiteboard:{fawsb:`fa-semibold`},thumbprint:{fatl:`fa-light`},notdog:{fans:`fa-solid`},"notdog-duo":{fands:`fa-solid`},etch:{faes:`fa-solid`},graphite:{fagt:`fa-thin`},jelly:{fajr:`fa-regular`},"jelly-fill":{fajfr:`fa-regular`},"jelly-duo":{fajdr:`fa-regular`},chisel:{facr:`fa-regular`},utility:{fausb:`fa-semibold`},"utility-duo":{faudsb:`fa-semibold`},"utility-fill":{faufsb:`fa-semibold`}},xn=`fa.fas.far.fal.fat.fad.fadr.fadl.fadt.fab.fass.fasr.fasl.fast.fasds.fasdr.fasdl.fasdt.faslr.faslpr.fasldr.faslpdr.fapr.fams.favs.fawsb.fatl.fans.fands.faes.fagt.fajr.fajfr.fajdr.facr.fausb.faudsb.faufsb`.split(`.`).concat(_n,[`fa-solid`,`fa-regular`,`fa-light`,`fa-thin`,`fa-duotone`,`fa-brands`,`fa-semibold`]),Sn=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`,`semibold`],Cn=[1,2,3,4,5,6,7,8,9,10],wn=Cn.concat([11,12,13,14,15,16,17,18,19,20]),Tn=[].concat(O(Object.keys(yn)),Sn,[`aw`,`fw`,`pull-left`,`pull-right`],[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`beat-fade`,`border`,`bounce`,`buzz`,`canvas-square`,`canvas-roomy`,`fade`,`flip-360`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`float`,`inverse`,`jello`,`layers`,`layers-bottom-left`,`layers-bottom-right`,`layers-counter`,`layers-text`,`layers-top-left`,`layers-top-right`,`li`,`pull-end`,`pull-start`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`spin-snap`,`spin-snap-4`,`spin-snap-8`,`stack-1x`,`stack-2x`,`stack`,`swing`,`ul`,`wag`,`width-auto`,`width-fixed`,gn.GROUP,gn.SWAP_OPACITY,gn.PRIMARY,gn.SECONDARY],Cn.map(function(e){return`${e}x`}),wn.map(function(e){return`w-${e}`})),En={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}},P=`___FONT_AWESOME___`,Dn=16,On=`fa`,kn=`svg-inline--fa`,F=`data-fa-i2svg`,An=`data-fa-pseudo-element`,jn=`data-fa-pseudo-element-pending`,Mn=`data-prefix`,Nn=`data-icon`,Pn=`fontawesome-i2svg`,Fn=`async`,In=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`],Ln=[`::before`,`::after`,`:before`,`:after`],Rn=function(){try{return!0}catch{return!1}}();function I(e){return new Proxy(e,{get:function(e,t){return t in e?e[t]:e[M]}})}var zn=D({},st);zn[M]=D(D(D(D({},{"fa-duotone":`duotone`}),st[M]),ln.kit),ln[`kit-duotone`]);var Bn=I(zn),Vn=D({},sn);Vn[M]=D(D(D(D({},{duotone:`fad`}),Vn[M]),mn.kit),mn[`kit-duotone`]);var Hn=I(Vn),Un=D({},bn);Un[M]=D(D({},Un[M]),pn.kit);var Wn=I(Un),Gn=D({},vn);Gn[M]=D(D({},Gn[M]),dn.kit),I(Gn);var Kn=at,qn=`fa-layers-text`,Jn=ot;I(D({},rn));var Yn=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`],Xn=ct,Zn=[].concat(O(un),O(Tn)),Qn=k.FontAwesomeConfig||{};function $n(e){var t=A.querySelector(`script[`+e+`]`);if(t)return t.getAttribute(e)}function er(e){return e===``?!0:e===`false`?!1:e===`true`?!0:e}A&&typeof A.querySelector==`function`&&[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-search-pseudo-elements-warnings`,`searchPseudoElementsWarnings`],[`data-search-pseudo-elements-full-scan`,`searchPseudoElementsFullScan`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]].forEach(function(e){var t=Ue(e,2),n=t[0],r=t[1],i=er($n(n));i!=null&&(Qn[r]=i)});var tr={styleDefault:`solid`,familyDefault:M,cssPrefix:On,replacementClass:kn,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Qn.familyPrefix&&(Qn.cssPrefix=Qn.familyPrefix);var L=D(D({},tr),Qn);L.autoReplaceSvg||(L.observeMutations=!1);var R={};Object.keys(tr).forEach(function(e){Object.defineProperty(R,e,{enumerable:!0,set:function(t){L[e]=t,nr.forEach(function(e){return e(R)})},get:function(){return L[e]}})}),Object.defineProperty(R,"familyPrefix",{enumerable:!0,set:function(e){L.cssPrefix=e,nr.forEach(function(e){return e(R)})},get:function(){return L.cssPrefix}}),k.FontAwesomeConfig=R;var nr=[];function rr(e){return nr.push(e),function(){nr.splice(nr.indexOf(e),1)}}var z=Dn,B={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ir(e){if(!(!e||!j)){var t=A.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=e;for(var n=A.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(o)>-1&&(r=a)}return A.head.insertBefore(t,r),e}}var ar=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;function or(){for(var e=12,t=``;e-->0;)t+=ar[Math.random()*62|0];return t}function V(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function sr(e){return e.classList?V(e.classList):(e.getAttribute(`class`)||``).split(` `).filter(function(e){return e})}function cr(e){return`${e}`.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function lr(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}="${cr(e[n])}" `},``).trim()}function ur(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}: ${e[n].trim()};`},``)}function dr(e){return e.size!==B.size||e.x!==B.x||e.y!==B.y||e.rotate!==B.rotate||e.flipX||e.flipY}function fr(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth;return{outer:{transform:`translate(${n/2} 256)`},inner:{transform:`${`translate(${t.x*32}, ${t.y*32}) `} ${`scale(${t.size/16*(t.flipX?-1:1)}, ${t.size/16*(t.flipY?-1:1)}) `} ${`rotate(${t.rotate} 0 0)`}`},path:{transform:`translate(${r/2*-1} -256)`}}}function pr(e){var t=e.transform,n=e.width,r=n===void 0?Dn:n,i=e.height,a=i===void 0?Dn:i,o=e.startCentered,s=o===void 0?!1:o,c=``;return s&&rt?c+=`translate(${t.x/z-r/2}em, ${t.y/z-a/2}em) `:s?c+=`translate(calc(-50% + ${t.x/z}em), calc(-50% + ${t.y/z}em)) `:c+=`translate(${t.x/z}em, ${t.y/z}em) `,c+=`scale(${t.size/z*(t.flipX?-1:1)}, ${t.size/z*(t.flipY?-1:1)}) `,c+=`rotate(${t.rotate}deg) `,c}var mr=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-slab-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Duo';
  --fa-font-slab-press-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Press Duo';
  --fa-font-pixel-regular: normal 400 1em/1 'Font Awesome 7 Pixel';
  --fa-font-mosaic-solid: normal 900 1em/1 'Font Awesome 7 Mosaic';
  --fa-font-vellum-solid: normal 900 1em/1 'Font Awesome 7 Vellum';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-canvas-square {
  padding-block: 0.125em;
  margin-block-end: -0.125em;
}

.fa-canvas-roomy {
  padding-block: 0.25em;
  padding-inline: 0.125em;
  margin-block-end: -0.25em;
  box-sizing: content-box;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.5s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip-360 {
  animation-name: fa-flip-360;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.75s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

.fa-spin-snap {
  animation-name: fa-spin-snap;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-4 {
  animation-name: fa-spin-snap-4;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2.4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-8 {
  animation-name: fa-spin-snap-8;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-buzz {
  animation-name: fa-buzz;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.6s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-wag {
  animation-name: fa-wag;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: bottom center;
}

.fa-float {
  animation-name: fa-float;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
  will-change: transform;
}

.fa-swing {
  animation-name: fa-swing;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: top center;
}

.fa-jello {
  animation-name: fa-jello;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-flip-360,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse,
  .fa-buzz,
  .fa-float,
  .fa-jello,
  .fa-spin-snap,
  .fa-spin-snap-4,
  .fa-spin-snap-8,
  .fa-swing,
  .fa-wag {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  45% {
    transform: scale(calc(1.22 * var(--fa-beat-scale, 1.22)));
  }
  65% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  90% {
    transform: scale(1);
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
    animation-timing-function: var(--fa-animation-timing);
  }
  14% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.06), var(--fa-bounce-start-scale-y, 0.94)) translateY(var(--fa-bounce-anticipation, 3px));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  32% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.94), var(--fa-bounce-jump-scale-y, 1.12)) translateY(calc(-1 * var(--fa-bounce-height, 0.5em)));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  52% {
    transform: scale(1, 1) translateY(calc(-1 * var(--fa-bounce-height, 0.5em) * 1.1));
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  70% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.06), var(--fa-bounce-land-scale-y, 0.92)) translateY(0);
    animation-timing-function: cubic-bezier(0.33, 0.33, 0.66, 1);
  }
  85% {
    transform: scale(0.98, 1.04) translateY(calc(-2px * var(--fa-bounce-rebound, 1)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  0% {
    opacity: 1;
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  40% {
    opacity: var(--fa-fade-opacity, 0.4);
    transform: scale(0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fa-beat-fade {
  0% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  25% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  45% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  65% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
}
@keyframes fa-flip {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  35% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: linear;
  }
  65% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.5));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  92% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-flip-360 {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  50% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  80% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(35deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  20% {
    transform: rotate(-22deg) translateX(-1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  35% {
    transform: rotate(15deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  50% {
    transform: rotate(-9deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  65% {
    transform: rotate(5deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  78% {
    transform: rotate(-3deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  90% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  12% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  16.67% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  28.67% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  33.33% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  45.33% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  62% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  66.67% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  78.67% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  83.33% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  95.33% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-4 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  15% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  40% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  65% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  90% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-8 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  9% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  12.5% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  21.5% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  34% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  37.5% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  46.5% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  59% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  62.5% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  71.5% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  84% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  87.5% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  96.5% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-buzz {
  0% {
    transform: translateX(0) rotate(0deg);
    animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
  }
  5% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.5deg);
  }
  10% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.5deg);
  }
  15% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.3deg);
  }
  20% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.3deg);
  }
  25% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.7)) rotate(0.2deg);
  }
  30% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px) * 0.7)) rotate(-0.2deg);
  }
  35% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.4)) rotate(0.1deg);
  }
  40% {
    transform: translateX(0) rotate(0deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
}
@keyframes fa-wag {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  12% {
    transform: rotate(var(--fa-wag-angle, 12deg));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  24% {
    transform: rotate(2deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  36% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.85));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  48% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  58% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.6));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-float {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  15% {
    transform: translateY(calc(-0.4 * var(--fa-float-height, 6px))) translateX(var(--fa-float-drift, 1px)) rotate(var(--fa-float-tilt, 1deg)) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  35% {
    transform: translateY(calc(-1 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-stretch-x, 0.98), var(--fa-float-stretch-y, 1.03));
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 0);
  }
  50% {
    transform: translateY(calc(-0.92 * var(--fa-float-height, 6px))) translateX(calc(-0.5 * var(--fa-float-drift, 1px))) rotate(calc(-0.5 * var(--fa-float-tilt, 1deg))) scale(0.995, 1.01);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  70% {
    transform: translateY(calc(-0.3 * var(--fa-float-height, 6px))) translateX(calc(-1 * var(--fa-float-drift, 1px))) rotate(calc(-1 * var(--fa-float-tilt, 1deg))) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  90% {
    transform: translateY(calc(0.05 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
  }
}
@keyframes fa-swing {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(var(--fa-swing-angle, 22deg));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  18% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.85));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  28% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.65));
    animation-timing-function: cubic-bezier(0.35, 0, 0.65, 1);
  }
  38% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.45));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  56% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.1));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  64% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-jello {
  0% {
    transform: scale(1, 1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  12% {
    transform: scale(var(--fa-jello-scale-x, 1.15), calc(2 - var(--fa-jello-scale-x, 1.15)));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  24% {
    transform: scale(calc(2 - var(--fa-jello-scale-y, 1.12)), var(--fa-jello-scale-y, 1.12));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  36% {
    transform: scale(calc(1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5), calc(2 - (1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5)));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: scale(calc(2 - (1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3)), calc(1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  58% {
    transform: scale(1.02, 0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function hr(){var e=On,t=kn,n=R.cssPrefix,r=R.replacementClass,i=mr;if(n!==e||r!==t){var a=RegExp(`\\.${e}\\-`,`g`),o=RegExp(`\\--${e}\\-`,`g`),s=RegExp(`\\.${t}`,`g`);i=i.replace(a,`.${n}-`).replace(o,`--${n}-`).replace(s,`.${r}`)}return i}var gr=!1;function _r(){R.autoAddCss&&!gr&&(ir(hr()),gr=!0)}var vr={mixout:function(){return{dom:{css:hr,insertCss:_r}}},hooks:function(){return{beforeDOMElementCreation:function(){_r()},beforeI2svg:function(){_r()}}}},H=k||{};H[P]||(H[P]={}),H[P].styles||(H[P].styles={}),H[P].hooks||(H[P].hooks={}),H[P].shims||(H[P].shims=[]);var U=H[P],yr=[],br=function(){A.removeEventListener(`DOMContentLoaded`,br),xr=1,yr.map(function(e){return e()})},xr=!1;j&&(xr=(A.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(A.readyState),xr||A.addEventListener(`DOMContentLoaded`,br));function Sr(e){j&&(xr?setTimeout(e,0):yr.push(e))}function Cr(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e==`string`?cr(e):`<${t} ${lr(r)}>${a.map(Cr).join(``)}</${t}>`}function wr(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Tr=function(e,t){return function(n,r,i,a){return e.call(t,n,r,i,a)}},Er=function(e,t,n,r){var i=Object.keys(e),a=i.length,o=r===void 0?t:Tr(t,r),s,c,l;for(n===void 0?(s=1,l=e[i[0]]):(s=0,l=n);s<a;s++)c=i[s],l=o(l,e[c],c,e);return l};function Dr(e){return O(e).length===1?e.codePointAt(0).toString(16):null}function Or(e){return Object.keys(e).reduce(function(t,n){var r=e[n];return r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function kr(e,t){var n=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:{}).skipHooks,r=n===void 0?!1:n,i=Or(t);typeof U.hooks.addPack==`function`&&!r?U.hooks.addPack(e,Or(t)):U.styles[e]=D(D({},U.styles[e]||{}),i),e===`fas`&&kr(`fa`,t)}var Ar=U.styles,jr=U.shims,Mr=Object.keys(Wn),Nr=Mr.reduce(function(e,t){return e[t]=Object.keys(Wn[t]),e},{}),Pr=null,Fr={},Ir={},Lr={},Rr={},zr={};function Br(e){return~Zn.indexOf(e)}function Vr(e,t){var n=t.split(`-`),r=n[0],i=n.slice(1).join(`-`);return r===e&&i!==``&&!Br(i)?i:null}var Hr=function(){var e=function(e){return Er(Ar,function(t,n,r){return t[r]=Er(n,e,{}),t},{})};Fr=e(function(e,t,n){return t[3]&&(e[t[3]]=n),t[2]&&t[2].filter(function(e){return typeof e==`number`}).forEach(function(t){e[t.toString(16)]=n}),e}),Ir=e(function(e,t,n){return e[n]=n,t[2]&&t[2].filter(function(e){return typeof e==`string`}).forEach(function(t){e[t]=n}),e}),zr=e(function(e,t,n){var r=t[2];return e[n]=n,r.forEach(function(t){e[t]=n}),e});var t=`far`in Ar||R.autoFetchSvg,n=Er(jr,function(e,n){var r=n[0],i=n[1],a=n[2];return i===`far`&&!t&&(i=`fas`),typeof r==`string`&&(e.names[r]={prefix:i,iconName:a}),typeof r==`number`&&(e.unicodes[r.toString(16)]={prefix:i,iconName:a}),e},{names:{},unicodes:{}});Lr=n.names,Rr=n.unicodes,Pr=Yr(R.styleDefault,{family:R.familyDefault})};rr(function(e){Pr=Yr(e.styleDefault,{family:R.familyDefault})}),Hr();function Ur(e,t){return(Fr[e]||{})[t]}function Wr(e,t){return(Ir[e]||{})[t]}function W(e,t){return(zr[e]||{})[t]}function Gr(e){return Lr[e]||{prefix:null,iconName:null}}function Kr(e){var t=Rr[e],n=Ur(`fas`,e);return t||(n?{prefix:`fas`,iconName:n}:null)||{prefix:null,iconName:null}}function G(){return Pr}var qr=function(){return{prefix:null,iconName:null,rest:[]}};function Jr(e){var t=M,n=Mr.reduce(function(e,t){return e[t]=`${R.cssPrefix}-${t}`,e},{});return nn.forEach(function(r){(e.includes(n[r])||e.some(function(e){return Nr[r].includes(e)}))&&(t=r)}),t}function Yr(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).family,n=t===void 0?M:t,r=Bn[n][e];if(n===N&&!e)return`fad`;var i=Hn[n][e]||Hn[n][r],a=e in U.styles?e:null;return i||a||null}function Xr(e){var t=[],n=null;return e.forEach(function(e){var r=Vr(R.cssPrefix,e);r?n=r:e&&t.push(e)}),{iconName:n,rest:t}}function Zr(e){return e.sort().filter(function(e,t,n){return n.indexOf(e)===t})}var Qr=xn.concat(cn);function $r(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).skipLookups,n=t===void 0?!1:t,r=null,i=Zr(e.filter(function(e){return Qr.includes(e)})),a=Zr(e.filter(function(e){return!Qr.includes(e)})),o=Ue(i.filter(function(e){return r=e,!lt.includes(e)}),1)[0],s=o===void 0?null:o,c=Jr(i),l=D(D({},Xr(a)),{},{prefix:Yr(s,{family:c})});return D(D(D({},l),ri({values:e,family:c,styles:Ar,config:R,canonical:l,givenPrefix:r})),ei(n,r,l))}function ei(e,t,n){var r=n.prefix,i=n.iconName;if(e||!r||!i)return{prefix:r,iconName:i};var a=t===`fa`?Gr(i):{},o=W(r,i);return i=a.iconName||o||i,r=a.prefix||r,r===`far`&&!Ar.far&&Ar.fas&&!R.autoFetchSvg&&(r=`fas`),{prefix:r,iconName:i}}var ti=nn.filter(function(e){return e!==M||e!==N}),ni=Object.keys(bn).filter(function(e){return e!==M}).map(function(e){return Object.keys(bn[e])}).flat();function ri(e){var t=e.values,n=e.family,r=e.canonical,i=e.givenPrefix,a=i===void 0?``:i,o=e.styles,s=o===void 0?{}:o,c=e.config,l=c===void 0?{}:c,u=n===N,d=t.includes(`fa-duotone`)||t.includes(`fad`),f=l.familyDefault===`duotone`,p=r.prefix===`fad`||r.prefix===`fa-duotone`;return!u&&(d||f||p)&&(r.prefix=`fad`),(t.includes(`fa-brands`)||t.includes(`fab`))&&(r.prefix=`fab`),!r.prefix&&ti.includes(n)&&(Object.keys(s).find(function(e){return ni.includes(e)})||l.autoFetchSvg)&&(r.prefix=on.get(n).defaultShortPrefixId,r.iconName=W(r.prefix,r.iconName)||r.iconName),(r.prefix===`fa`||a===`fa`)&&(r.prefix=G()||`fas`),r}var ii=function(){function e(){Pe(this,e),this.definitions={}}return Ie(e,[{key:`add`,value:function(){var e=this,t=[...arguments].reduce(this._pullDefinitions,{});Object.keys(t).forEach(function(n){e.definitions[n]=D(D({},e.definitions[n]||{}),t[n]),kr(n,t[n]);var r=Wn[M][n];r&&kr(r,t[n]),Hr()})}},{key:`reset`,value:function(){this.definitions={}}},{key:`_pullDefinitions`,value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(function(t){var r=n[t],i=r.prefix,a=r.iconName,o=r.icon,s=o[2];e[i]||(e[i]={}),s.length>0&&s.forEach(function(t){typeof t==`string`&&(e[i][t]=o)}),e[i][a]=o}),e}}])}(),ai=[],K={},q={},oi=Object.keys(q);function si(e,t){var n=t.mixoutsTo;return ai=e,K={},Object.keys(q).forEach(function(e){oi.indexOf(e)===-1&&delete q[e]}),ai.forEach(function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(function(e){typeof t[e]==`function`&&(n[e]=t[e]),Ke(t[e])===`object`&&Object.keys(t[e]).forEach(function(r){n[e]||(n[e]={}),n[e][r]=t[e][r]})}),e.hooks){var r=e.hooks();Object.keys(r).forEach(function(e){K[e]||(K[e]=[]),K[e].push(r[e])})}e.provides&&e.provides(q)}),n}function ci(e,t){var n=[...arguments].slice(2);return(K[e]||[]).forEach(function(e){t=e.apply(null,[t].concat(n))}),t}function J(e){var t=[...arguments].slice(1);(K[e]||[]).forEach(function(e){e.apply(null,t)})}function Y(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return q[e]?q[e].apply(null,t):void 0}function li(e){e.prefix===`fa`&&(e.prefix=`fas`);var t=e.iconName,n=e.prefix||G();if(t)return t=W(n,t)||t,wr(ui.definitions,n,t)||wr(U.styles,n,t)}var ui=new ii,X={noAuto:function(){R.autoReplaceSvg=!1,R.observeMutations=!1,J(`noAuto`)},config:R,dom:{i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return j?(J(`beforeI2svg`,e),Y(`pseudoElements2svg`,e),Y(`i2svg`,e)):Promise.reject(Error(`Operation requires a DOM of some kind.`))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;R.autoReplaceSvg===!1&&(R.autoReplaceSvg=!0),R.observeMutations=!0,Sr(function(){di({autoReplaceSvgRoot:t}),J(`watch`,e)})}},parse:{icon:function(e){if(e===null)return null;if(Ke(e)===`object`&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:W(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf(`fa-`)===0?e[1].slice(3):e[1],n=Yr(e[0]);return{prefix:n,iconName:W(n,t)||t}}if(typeof e==`string`&&(e.indexOf(`${R.cssPrefix}-`)>-1||e.match(Kn))){var r=$r(e.split(` `),{skipLookups:!0});return{prefix:r.prefix||G(),iconName:W(r.prefix,r.iconName)||r.iconName}}if(typeof e==`string`){var i=G();return{prefix:i,iconName:W(i,e)||e}}}},library:ui,findIconDefinition:li,toHtml:Cr},di=function(){var e=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).autoReplaceSvgRoot,t=e===void 0?A:e;(Object.keys(U.styles).length>0||R.autoFetchSvg)&&j&&R.autoReplaceSvg&&X.dom.i2svg({node:t})};function fi(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(e){return Cr(e)})}}),Object.defineProperty(e,"node",{get:function(){if(j){var t=A.createElement(`div`);return t.innerHTML=e.html,t.children}}}),e}function pi(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(dr(o)&&n.found&&!r.found){var s={x:n.width/n.height/2,y:.5};i.style=ur(D(D({},a),{},{"transform-origin":`${s.x+o.x/16}em ${s.y+o.y/16}em`}))}return[{tag:`svg`,attributes:i,children:t}]}function mi(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?`${t}-${R.cssPrefix}-${n}`:a;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:D(D({},i),{},{id:o}),children:r}]}]}function hi(e){return[`aria-label`,`aria-labelledby`,`title`,`role`].some(function(t){return t in e})}function gi(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,c=e.maskId,l=e.extra,u=e.watchable,d=u===void 0?!1:u,f=r.found?r:n,p=f.width,m=f.height,h=[R.replacementClass,a?`${R.cssPrefix}-${a}`:``].filter(function(e){return l.classes.indexOf(e)===-1}).filter(function(e){return e!==``||!!e}).concat(l.classes).join(` `),g={children:[],attributes:D(D({},l.attributes),{},{"data-prefix":i,"data-icon":a,class:h,role:l.attributes.role||`img`,viewBox:`0 0 ${p} ${m}`})};!hi(l.attributes)&&!l.attributes[`aria-hidden`]&&(g.attributes[`aria-hidden`]=`true`),d&&(g.attributes[F]=``);var _=D(D({},g),{},{prefix:i,iconName:a,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:D({},l.styles)}),v=r.found&&n.found?Y(`generateAbstractMask`,_)||{children:[],attributes:{}}:Y(`generateAbstractIcon`,_)||{children:[],attributes:{}},y=v.children,ee=v.attributes;return _.children=y,_.attributes=ee,s?mi(_):pi(_)}function _i(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.extra,o=e.watchable,s=o===void 0?!1:o,c=D(D({},a.attributes),{},{class:a.classes.join(` `)});s&&(c[F]=``);var l=D({},a.styles);dr(i)&&(l.transform=pr({transform:i,startCentered:!0,width:n,height:r}),l[`-webkit-transform`]=l.transform);var u=ur(l);u.length>0&&(c.style=u);var d=[];return d.push({tag:`span`,attributes:c,children:[t]}),d}function vi(e){var t=e.content,n=e.extra,r=D(D({},n.attributes),{},{class:n.classes.join(` `)}),i=ur(n.styles);i.length>0&&(r.style=i);var a=[];return a.push({tag:`span`,attributes:r,children:[t]}),a}var yi=U.styles;function bi(e){var t=e[0],n=e[1],r=Ue(e.slice(4),1)[0],i=null;return i=Array.isArray(r)?{tag:`g`,attributes:{class:`${R.cssPrefix}-${Xn.GROUP}`},children:[{tag:`path`,attributes:{class:`${R.cssPrefix}-${Xn.SECONDARY}`,fill:`currentColor`,d:r[0]}},{tag:`path`,attributes:{class:`${R.cssPrefix}-${Xn.PRIMARY}`,fill:`currentColor`,d:r[1]}}]}:{tag:`path`,attributes:{fill:`currentColor`,d:r}},{found:!0,width:t,height:n,icon:i}}var xi={found:!1,width:512,height:512};function Si(e,t){!Rn&&!R.showMissingIcons&&e&&console.error(`Icon with name "${e}" and prefix "${t}" is missing.`)}function Ci(e,t){var n=t;return t===`fa`&&R.styleDefault!==null&&(t=G()),new Promise(function(r,i){if(n===`fa`){var a=Gr(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&yi[t]&&yi[t][e]){var o=yi[t][e];return r(bi(o))}Si(e,t),r(D(D({},xi),{},{icon:R.showMissingIcons&&e&&Y(`missingIconAbstract`)||{}}))})}var wi=function(){},Ti=R.measurePerformance&&nt&&nt.mark&&nt.measure?nt:{mark:wi,measure:wi},Ei=`FA "7.3.0"`,Di=function(e){return Ti.mark(`${Ei} ${e} begins`),function(){return Oi(e)}},Oi=function(e){Ti.mark(`${Ei} ${e} ends`),Ti.measure(`${Ei} ${e}`,`${Ei} ${e} begins`,`${Ei} ${e} ends`)},ki={begin:Di,end:Oi},Ai=function(){};function ji(e){return typeof(e.getAttribute?e.getAttribute(F):null)==`string`}function Mi(e){var t=e.getAttribute?e.getAttribute(Mn):null,n=e.getAttribute?e.getAttribute(Nn):null;return t&&n}function Ni(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(R.replacementClass)}function Pi(){return R.autoReplaceSvg===!0?zi.replace:zi[R.autoReplaceSvg]||zi.replace}function Fi(e){return A.createElementNS(`http://www.w3.org/2000/svg`,e)}function Ii(e){return A.createElement(e)}function Li(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).ceFn,n=t===void 0?e.tag===`svg`?Fi:Ii:t;if(typeof e==`string`)return A.createTextNode(e);var r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){r.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){r.appendChild(Li(e,{ceFn:n}))}),r}function Ri(e){var t=` ${e.outerHTML} `;return t=`${t}Font Awesome fontawesome.com `,t}var zi={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(e){t.parentNode.insertBefore(Li(e),t)}),t.getAttribute(F)===null&&R.keepOriginalSource){var n=A.createComment(Ri(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){var t=e[0],n=e[1];if(~sr(t).indexOf(R.replacementClass))return zi.replace(e);var r=RegExp(`${R.cssPrefix}-.*`);if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(` `).reduce(function(e,t){return t===R.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(` `),i.toNode.length===0?t.removeAttribute(`class`):t.setAttribute(`class`,i.toNode.join(` `))}var a=n.map(function(e){return Cr(e)}).join(`
`);t.setAttribute(F,``),t.innerHTML=a}};function Bi(e){e()}function Vi(e,t){var n=typeof t==`function`?t:Ai;if(e.length===0)n();else{var r=Bi;R.mutateApproach===Fn&&(r=k.requestAnimationFrame||Bi),r(function(){var t=Pi(),r=ki.begin(`mutate`);e.map(t),r(),n()})}}var Hi=!1;function Ui(){Hi=!0}function Wi(){Hi=!1}var Gi=null;function Ki(e){if(tt&&R.observeMutations){var t=e.treeCallback,n=t===void 0?Ai:t,r=e.nodeCallback,i=r===void 0?Ai:r,a=e.pseudoElementsCallback,o=a===void 0?Ai:a,s=e.observeMutationsRoot,c=s===void 0?A:s;Gi=new tt(function(e){if(!Hi){var t=G();V(e).forEach(function(e){if(e.type===`childList`&&e.addedNodes.length>0&&!ji(e.addedNodes[0])&&(R.searchPseudoElements&&o(e.target),n(e.target)),e.type===`attributes`&&e.target.parentNode&&R.searchPseudoElements&&o([e.target],!0),e.type===`attributes`&&ji(e.target)&&~Yn.indexOf(e.attributeName))if(e.attributeName===`class`&&Mi(e.target)){var r=$r(sr(e.target)),a=r.prefix,s=r.iconName;e.target.setAttribute(Mn,a||t),s&&e.target.setAttribute(Nn,s)}else Ni(e.target)&&i(e.target)})}}),j&&Gi.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function qi(){Gi&&Gi.disconnect()}function Ji(e){var t=e.getAttribute(`style`),n=[];return t&&(n=t.split(`;`).reduce(function(e,t){var n=t.split(`:`),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(`:`).trim()),e},{})),n}function Yi(e){var t=e.getAttribute(`data-prefix`),n=e.getAttribute(`data-icon`),r=e.innerText===void 0?``:e.innerText.trim(),i=$r(sr(e));return i.prefix||=G(),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix?i:(i.prefix&&r.length>0&&(i.iconName=Wr(i.prefix,e.innerText)||Ur(i.prefix,Dr(e.innerText))),!i.iconName&&R.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data),i)}function Xi(e){return V(e.attributes).reduce(function(e,t){return e.name!==`class`&&e.name!==`style`&&(e[t.name]=t.value),e},{})}function Zi(){return{iconName:null,prefix:null,transform:B,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Qi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Yi(e),r=n.iconName,i=n.prefix,a=n.rest,o=Xi(e),s=ci(`parseNodeAttributes`,{},e);return D({iconName:r,prefix:i,transform:B,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:t.styleParser?Ji(e):[],attributes:o}},s)}var $i=U.styles;function ea(e){var t=R.autoReplaceSvg===`nest`?Qi(e,{styleParser:!1}):Qi(e);return~t.extra.classes.indexOf(qn)?Y(`generateLayersText`,e,t):Y(`generateSvgReplacementMutation`,e,t)}function ta(){return[].concat(O(cn),O(xn))}function na(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!j)return Promise.resolve();var n=A.documentElement.classList,r=function(e){return n.add(`${Pn}-${e}`)},i=function(e){return n.remove(`${Pn}-${e}`)},a=R.autoFetchSvg?ta():lt.concat(Object.keys($i));a.includes(`fa`)||a.push(`fa`);var o=[`.${qn}:not([${F}])`].concat(a.map(function(e){return`.${e}:not([${F}])`})).join(`, `);if(o.length===0)return Promise.resolve();var s=[];try{s=V(e.querySelectorAll(o))}catch{}if(s.length>0)r(`pending`),i(`complete`);else return Promise.resolve();var c=ki.begin(`onTree`),l=s.reduce(function(e,t){try{var n=ea(t);n&&e.push(n)}catch(e){Rn||e.name===`MissingIcon`&&console.error(e)}return e},[]);return new Promise(function(e,n){Promise.all(l).then(function(n){Vi(n,function(){r(`active`),r(`complete`),i(`pending`),typeof t==`function`&&t(),c(),e()})}).catch(function(e){c(),n(e)})})}function ra(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ea(e).then(function(e){e&&Vi([e],t)})}function ia(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:li(t||{}),i=n.mask;return i&&=(i||{}).icon?i:li(i||{}),e(r,D(D({},n),{},{mask:i}))}}var aa=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?B:n,i=t.symbol,a=i===void 0?!1:i,o=t.mask,s=o===void 0?null:o,c=t.maskId,l=c===void 0?null:c,u=t.classes,d=u===void 0?[]:u,f=t.attributes,p=f===void 0?{}:f,m=t.styles,h=m===void 0?{}:m;if(e){var g=e.prefix,_=e.iconName,v=e.icon;return fi(D({type:`icon`},e),function(){return J(`beforeDOMElementCreation`,{iconDefinition:e,params:t}),gi({icons:{main:bi(v),mask:s?bi(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:_,transform:D(D({},B),r),symbol:a,maskId:l,extra:{attributes:p,styles:h,classes:d}})})}},oa={mixout:function(){return{icon:ia(aa)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=na,e.nodeCallback=ra,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,n=t===void 0?A:t,r=e.callback;return na(n,r===void 0?function(){}:r)},e.generateSvgReplacementMutation=function(e,t){var n=t.iconName,r=t.prefix,i=t.transform,a=t.symbol,o=t.mask,s=t.maskId,c=t.extra;return new Promise(function(t,l){Promise.all([Ci(n,r),o.iconName?Ci(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(o){var l=Ue(o,2),u=l[0],d=l[1];t([e,gi({icons:{main:u,mask:d},prefix:r,iconName:n,transform:i,symbol:a,maskId:s,extra:c,watchable:!0})])}).catch(l)})},e.generateAbstractIcon=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.transform,a=e.styles,o=ur(a);o.length>0&&(n.style=o);var s;return dr(i)&&(s=Y(`generateAbstractTransformGrouping`,{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},sa={mixout:function(){return{layer:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.classes,r=n===void 0?[]:n;return fi({type:`layer`},function(){J(`beforeDOMElementCreation`,{assembler:e,params:t});var n=[];return e(function(e){Array.isArray(e)?e.map(function(e){n=n.concat(e.abstract)}):n=n.concat(e.abstract)}),[{tag:`span`,attributes:{class:[`${R.cssPrefix}-layers`].concat(O(r)).join(` `)},children:n}]})}}}},ca={mixout:function(){return{counter:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.title,r=n===void 0?null:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return fi({type:`counter`,content:e},function(){return J(`beforeDOMElementCreation`,{content:e,params:t}),vi({content:e.toString(),title:r,extra:{attributes:s,styles:l,classes:[`${R.cssPrefix}-layers-counter`].concat(O(a))}})})}}}},la={mixout:function(){return{text:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?B:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return fi({type:`text`,content:e},function(){return J(`beforeDOMElementCreation`,{content:e,params:t}),_i({content:e,transform:D(D({},B),r),extra:{attributes:s,styles:l,classes:[`${R.cssPrefix}-layers-text`].concat(O(a))}})})}}},provides:function(e){e.generateLayersText=function(e,t){var n=t.transform,r=t.extra,i=null,a=null;if(rt){var o=parseInt(getComputedStyle(e).fontSize,10),s=e.getBoundingClientRect();i=s.width/o,a=s.height/o}return Promise.resolve([e,_i({content:e.innerHTML,width:i,height:a,transform:n,extra:r,watchable:!0})])}}},ua=RegExp(`"`,`ug`),da=[1105920,1112319],fa=D(D(D(D({},{FontAwesome:{normal:`fas`,400:`fas`}}),an),En),fn),pa=Object.keys(fa).reduce(function(e,t){return e[t.toLowerCase()]=fa[t],e},{}),ma=Object.keys(pa).reduce(function(e,t){var n=pa[t];return e[t]=n[900]||O(Object.entries(n))[0][1],e},{});function ha(e){return Dr(O(e.replace(ua,``))[0]||``)}function ga(e){var t=e.getPropertyValue(`font-feature-settings`).includes(`ss01`),n=e.getPropertyValue(`content`).replace(ua,``),r=n.codePointAt(0),i=r>=da[0]&&r<=da[1],a=n.length===2?n[0]===n[1]:!1;return i||a||t}function _a(e,t){var n=e.replace(/^['"]|['"]$/g,``).toLowerCase(),r=parseInt(t),i=isNaN(r)?`normal`:r;return(pa[n]||{})[i]||ma[n]}function va(e,t){var n=`${jn}${t.replace(`:`,`-`)}`;return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=V(e.children).filter(function(e){return e.getAttribute(An)===t})[0],o=k.getComputedStyle(e,t),s=o.getPropertyValue(`font-family`),c=s.match(Jn),l=o.getPropertyValue(`font-weight`),u=o.getPropertyValue(`content`);if(a&&!c)return e.removeChild(a),r();if(c&&u!==`none`&&u!==``){var d=o.getPropertyValue(`content`),f=_a(s,l),p=ha(d),m=c[0].startsWith(`FontAwesome`),h=ga(o),g=Ur(f,p),_=g;if(m){var v=Kr(p);v.iconName&&v.prefix&&(g=v.iconName,f=v.prefix)}if(g&&!h&&(!a||a.getAttribute(Mn)!==f||a.getAttribute(Nn)!==_)){e.setAttribute(n,_),a&&e.removeChild(a);var y=Zi(),ee=y.extra;ee.attributes[An]=t,Ci(g,f).then(function(i){var a=gi(D(D({},y),{},{icons:{main:i,mask:qr()},prefix:f,iconName:_,extra:ee,watchable:!0})),o=A.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?e.insertBefore(o,e.firstChild):e.appendChild(o),o.outerHTML=a.map(function(e){return Cr(e)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function ya(e){return Promise.all([va(e,`::before`),va(e,`::after`)])}function ba(e){return e.parentNode!==document.head&&!~In.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(An)&&(!e.parentNode||e.parentNode.tagName!==`svg`)}var xa=function(e){return!!e&&Ln.some(function(t){return e.includes(t)})},Sa=function(e){if(!e)return[];var t=new Set,n=e.split(/,(?![^()]*\))/).map(function(e){return e.trim()});n=n.flatMap(function(e){return e.includes(`(`)?e:e.split(`,`).map(function(e){return e.trim()})});var r=Le(n),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(xa(a)){var o=Ln.reduce(function(e,t){return e.replace(t,``)},a);o!==``&&o!==`*`&&t.add(o)}}}catch(e){r.e(e)}finally{r.f()}return t};function Ca(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(j){var n;if(t)n=e;else if(R.searchPseudoElementsFullScan)n=e.querySelectorAll(`*`);else{var r=new Set,i=Le(document.styleSheets),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;try{var s=Le(o.cssRules),c;try{for(s.s();!(c=s.n()).done;){var l=c.value,u=Le(Sa(l.selectorText)),d;try{for(u.s();!(d=u.n()).done;){var f=d.value;r.add(f)}}catch(e){u.e(e)}finally{u.f()}}}catch(e){s.e(e)}finally{s.f()}}catch(e){R.searchPseudoElementsWarnings&&console.warn(`Font Awesome: cannot parse stylesheet: ${o.href} (${e.message})
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`)}}}catch(e){i.e(e)}finally{i.f()}if(!r.size)return;var p=Array.from(r).join(`, `);try{n=e.querySelectorAll(p)}catch{}}return new Promise(function(e,t){var r=V(n).filter(ba).map(ya),i=ki.begin(`searchPseudoElements`);Ui(),Promise.all(r).then(function(){i(),Wi(),e()}).catch(function(){i(),Wi(),t()})})}}var wa={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=Ca,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,n=t===void 0?A:t;R.searchPseudoElements&&Ca(n)}}},Ta=!1,Ea={mixout:function(){return{dom:{unwatch:function(){Ui(),Ta=!0}}}},hooks:function(){return{bootstrap:function(){Ki(ci(`mutationObserverCallbacks`,{}))},noAuto:function(){qi()},watch:function(e){var t=e.observeMutationsRoot;Ta?Wi():Ki(ci(`mutationObserverCallbacks`,{observeMutationsRoot:t}))}}}},Da=function(e){return e.toLowerCase().split(` `).reduce(function(e,t){var n=t.toLowerCase().split(`-`),r=n[0],i=n.slice(1).join(`-`);if(r&&i===`h`)return e.flipX=!0,e;if(r&&i===`v`)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case`grow`:e.size+=i;break;case`shrink`:e.size-=i;break;case`left`:e.x-=i;break;case`right`:e.x+=i;break;case`up`:e.y-=i;break;case`down`:e.y+=i;break;case`rotate`:e.rotate+=i;break}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},Oa={mixout:function(){return{parse:{transform:function(e){return Da(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-transform`);return n&&(e.transform=Da(n)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,n=e.transform,r=e.containerWidth,i=e.iconWidth,a={outer:{transform:`translate(${r/2} 256)`},inner:{transform:`${`translate(${n.x*32}, ${n.y*32}) `} ${`scale(${n.size/16*(n.flipX?-1:1)}, ${n.size/16*(n.flipY?-1:1)}) `} ${`rotate(${n.rotate} 0 0)`}`},path:{transform:`translate(${i/2*-1} -256)`}};return{tag:`g`,attributes:D({},a.outer),children:[{tag:`g`,attributes:D({},a.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:D(D({},t.icon.attributes),a.path)}]}]}}}},ka={x:0,y:0,width:`100%`,height:`100%`};function Aa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill=`black`),e}function ja(e){return e.tag===`g`?e.children:[e]}si([vr,oa,sa,ca,la,wa,Ea,Oa,{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-mask`),r=n?$r(n.split(` `).map(function(e){return e.trim()})):qr();return r.prefix||=G(),e.mask=r,e.maskId=t.getAttribute(`data-fa-mask-id`),e}}},provides:function(e){e.generateAbstractMask=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.mask,a=e.maskId,o=e.transform,s=r.width,c=r.icon,l=i.width,u=i.icon,d=fr({transform:o,containerWidth:l,iconWidth:s}),f={tag:`rect`,attributes:D(D({},ka),{},{fill:`white`})},p=c.children?{children:c.children.map(Aa)}:{},m={tag:`g`,attributes:D({},d.inner),children:[Aa(D({tag:c.tag,attributes:D(D({},c.attributes),d.path)},p))]},h={tag:`g`,attributes:D({},d.outer),children:[m]},g=`mask-${a||or()}`,_=`clip-${a||or()}`,v={tag:`mask`,attributes:D(D({},ka),{},{id:g,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`}),children:[f,h]},y={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:_},children:ja(u)},v]};return t.push(y,{tag:`rect`,attributes:D({fill:`currentColor`,"clip-path":`url(#${_})`,mask:`url(#${g})`},ka)}),{children:t,attributes:n}}}},{provides:function(e){var t=!1;k.matchMedia&&(t=k.matchMedia(`(prefers-reduced-motion: reduce)`).matches),e.missingIconAbstract=function(){var e=[],n={fill:`currentColor`},r={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};e.push({tag:`path`,attributes:D(D({},n),{},{d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`})});var i=D(D({},r),{},{attributeName:`opacity`}),a={tag:`circle`,attributes:D(D({},n),{},{cx:`256`,cy:`364`,r:`28`}),children:[]};return t||a.children.push({tag:`animate`,attributes:D(D({},r),{},{attributeName:`r`,values:`28;14;28;28;14;28;`})},{tag:`animate`,attributes:D(D({},i),{},{values:`1;0;1;1;0;1;`})}),e.push(a),e.push({tag:`path`,attributes:D(D({},n),{},{opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`}),children:t?[]:[{tag:`animate`,attributes:D(D({},i),{},{values:`1;0;0;0;0;1;`})}]}),t||e.push({tag:`path`,attributes:D(D({},n),{},{opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`}),children:[{tag:`animate`,attributes:D(D({},i),{},{values:`0;0;1;1;0;0;`})}]}),{tag:`g`,attributes:{class:`missing`},children:e}}}},{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-symbol`);return e.symbol=n===null?!1:n===``?!0:n,e}}}}],{mixoutsTo:X}),X.noAuto;var Ma=X.config,Na=X.library;X.dom;var Pa=X.parse;X.findIconDefinition,X.toHtml;var Fa=X.icon;X.layer;var Ia=X.text;X.counter,o();function La(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Ra(e){if(Array.isArray(e))return La(e)}function Z(e,t,n){return(t=Ka(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function za(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function Ba(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Va(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Va(Object(n),!0).forEach(function(t){Z(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Va(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Ha(e,t){if(e==null)return{};var n,r,i=Ua(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function Ua(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Wa(e){return Ra(e)||za(e)||Ja(e)||Ba()}function Ga(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Ka(e){var t=Ga(e,`string`);return typeof t==`symbol`?t:t+``}function qa(e){"@babel/helpers - typeof";return qa=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},qa(e)}function Ja(e,t){if(e){if(typeof e==`string`)return La(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?La(e,t):void 0}}function Ya(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Z({},e,t):{}}function Xa(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip===`horizontal`||e.flip===`both`,"fa-flip-vertical":e.flip===`vertical`||e.flip===`both`},Z(Z(Z(Z(Z(Z(Z(Z(Z(Z(t,`fa-${e.size}`,e.size!==null),`fa-rotate-${e.rotation}`,e.rotation!==null),`fa-rotate-by`,e.rotateBy),`fa-pull-${e.pull}`,e.pull!==null),`fa-swap-opacity`,e.swapOpacity),`fa-bounce`,e.bounce),`fa-shake`,e.shake),`fa-beat`,e.beat),`fa-fade`,e.fade),`fa-beat-fade`,e.beatFade),Z(Z(Z(Z(Z(Z(Z(Z(Z(Z(t,`fa-flash`,e.flash),`fa-spin-pulse`,e.spinPulse),`fa-spin-reverse`,e.spinReverse),`fa-width-auto`,e.widthAuto),`fa-flip-360`,e.flip360),`fa-buzz`,e.buzz),`fa-float`,e.float),`fa-jello`,e.jello),`fa-spin-snap`,e.spinSnap),`fa-spin-snap-4`,e.spinSnap4),Z(Z(Z(t,`fa-spin-snap-8`,e.spinSnap8),`fa-swing`,e.swing),`fa-wag`,e.wag));return Object.keys(n).map(function(e){return n[e]?e:null}).filter(function(e){return e})}var Za=typeof globalThis<`u`?globalThis:typeof window<`u`?window:t===void 0?typeof self<`u`?self:{}:t,Qa={exports:{}};(function(e){(function(t){var n=function(e,t,r){if(!l(t)||d(t)||f(t)||p(t)||c(t))return t;var i,a=0,o=0;if(u(t))for(i=[],o=t.length;a<o;a++)i.push(n(e,t[a],r));else for(var s in i={},t)Object.prototype.hasOwnProperty.call(t,s)&&(i[e(s,r)]=n(e,t[s],r));return i},r=function(e,t){t||={};var n=t.separator||`_`,r=t.split||/(?=[A-Z])/;return e.split(r).join(n)},i=function(e){return m(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():``}),e.substr(0,1).toLowerCase()+e.substr(1))},a=function(e){var t=i(e);return t.substr(0,1).toUpperCase()+t.substr(1)},o=function(e,t){return r(e,t).toLowerCase()},s=Object.prototype.toString,c=function(e){return typeof e==`function`},l=function(e){return e===Object(e)},u=function(e){return s.call(e)==`[object Array]`},d=function(e){return s.call(e)==`[object Date]`},f=function(e){return s.call(e)==`[object RegExp]`},p=function(e){return s.call(e)==`[object Boolean]`},m=function(e){return e-=0,e===e},h=function(e,t){var n=t&&`process`in t?t.process:t;return typeof n==`function`?function(t,r){return n(t,e,r)}:e},g={camelize:i,decamelize:o,pascalize:a,depascalize:o,camelizeKeys:function(e,t){return n(h(i,t),e)},decamelizeKeys:function(e,t){return n(h(o,t),e,t)},pascalizeKeys:function(e,t){return n(h(a,t),e)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=g:t.humps=g})(Za)})(Qa);var $a=Qa.exports,eo=[`gradientFill`],to=[`class`,`style`],no=[`type`,`stops`,`id`];function ro(e){return e.split(`;`).map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var n=t.indexOf(`:`),r=$a.camelize(t.slice(0,n));return e[r]=t.slice(n+1).trim(),e},{})}function io(e){return e.split(/\s+/).reduce(function(e,t){return e[t]=!0,e},{})}function ao(e,t){return s(`stop`,Q({key:`${t}-${e.offset}`,offset:e.offset,"stop-color":e.color},e.opacity!==void 0&&{"stop-opacity":e.opacity}))}function oo(e){if(typeof e==`string`)return e;var t=(e.children||[]).map(oo);return e.tag===`path`&&e.attributes&&`fill`in e.attributes?Q(Q({},e),{},{attributes:Q(Q({},e.attributes),{},{fill:void 0}),children:t}):Q(Q({},e),{},{children:t})}function so(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e==`string`)return e;var r=t.gradientFill,i=r===void 0?null:r,a=Ha(t,eo),o=i||`fill`in n?oo(e):e,c=(o.children||[]).map(function(e){return so(e,{},{})}),l=Object.keys(o.attributes||{}).reduce(function(e,t){var n=o.attributes[t];switch(t){case`class`:e.class=io(n);break;case`style`:e.style=ro(n);break;default:e.attrs[t]=n}return e},{attrs:{},class:{},style:{}});n.class;var u=n.style,d=u===void 0?{}:u,f=Ha(n,to);if(i&&i.id&&(i.type===`linear`||i.type===`radial`)){var p=i.type,m=i.stops,h=m===void 0?[]:m,g=i.id,_=Ha(i,no),v=s(p===`linear`?`linearGradient`:`radialGradient`,Q(Q({},_),{},{id:g}),h.map(ao));return s(o.tag,Q(Q(Q(Q({},a),{},{class:l.class,style:Q(Q({},l.style),d)},l.attrs),f),{},{fill:`url(#${g})`}),[v].concat(Wa(c)))}return s(e.tag,Q(Q(Q({},a),{},{class:l.class,style:Q(Q({},l.style),d)},l.attrs),f),c)}var co=!1;try{co=!0}catch{}function lo(){if(!co&&console&&typeof console.error==`function`){var e;(e=console).error.apply(e,arguments)}}function uo(e){if(e&&qa(e)===`object`&&e.prefix&&e.iconName&&e.icon)return e;if(Pa.icon)return Pa.icon(e);if(e===null)return null;if(qa(e)===`object`&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e==`string`)return{prefix:`fas`,iconName:e}}var $=n({name:`FontAwesomeIcon`,props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,`horizontal`,`vertical`,`both`].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return[`right`,`left`].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},rotateBy:{type:Boolean,default:!1},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`1x`,`2x`,`3x`,`4x`,`5x`,`6x`,`7x`,`8x`,`9x`,`10x`].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1},widthAuto:{type:Boolean,default:!1},gradientFill:{type:Object,default:null,validator:function(e){return typeof e.id!=`string`||!e.id?(console.warn(`FontAwesomeIcon: gradientFill.id must be a non-empty string`),!1):e.type!==`linear`&&e.type!==`radial`?(console.warn(`FontAwesomeIcon: gradientFill.type must be "linear" or "radial"`),!1):!0}},flip360:{type:Boolean,default:!1},buzz:{type:Boolean,default:!1},float:{type:Boolean,default:!1},jello:{type:Boolean,default:!1},spinSnap:{type:Boolean,default:!1},spinSnap4:{type:Boolean,default:!1},spinSnap8:{type:Boolean,default:!1},swing:{type:Boolean,default:!1},wag:{type:Boolean,default:!1}},setup:function(e,t){var n=t.attrs,r=g(function(){return uo(e.icon)}),i=g(function(){return Ya(`classes`,Xa(e))}),a=g(function(){return Ya(`transform`,typeof e.transform==`string`?Pa.transform(e.transform):e.transform)}),o=g(function(){return Ya(`mask`,uo(e.mask))}),s=g(function(){var t=Q(Q(Q(Q({},i.value),a.value),o.value),{},{symbol:e.symbol,maskId:e.maskId});return t.title=e.title,t.titleId=e.titleId,Fa(r.value,t)});ee(s,function(e){if(!e)return lo(`Could not find one or more icon(s)`,r.value,o.value)},{immediate:!0}),e.gradientFill&&e.symbol&&lo(`gradientFill is not supported when symbol is true and will be ignored`);var c=g(function(){return s.value?so(s.value.abstract[0],{gradientFill:e.symbol?null:e.gradientFill},n):null});return function(){return c.value}}});n({name:`FontAwesomeLayers`,props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,t){var n=t.slots,r=Ma.familyPrefix,i=g(function(){return[`${r}-layers`].concat(Wa(e.fixedWidth?[`${r}-fw`]:[]))});return function(){return s(`div`,{class:i.value},n.default?n.default():[])}}}),n({name:`FontAwesomeLayersText`,props:{value:{type:[String,Number],default:``},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return[`bottom-left`,`bottom-right`,`top-left`,`top-right`].indexOf(e)>-1}}},setup:function(e,t){var n=t.attrs,r=Ma.familyPrefix,i=g(function(){return Ya(`classes`,[].concat(Wa(e.counter?[`${r}-layers-counter`]:[]),Wa(e.position?[`${r}-layers-${e.position}`]:[])))}),a=g(function(){return Ya(`transform`,typeof e.transform==`string`?Pa.transform(e.transform):e.transform)}),o=g(function(){var t=Ia(e.value.toString(),Q(Q({},a.value),i.value)).abstract;return e.counter&&(t[0].attributes.class=t[0].attributes.class.replace(`fa-layers-text`,``)),t[0]}),s=g(function(){return so(o.value,{},n)});return function(){return s.value}}}),x(),m(),o();var fo={class:`pp-btn-container`},po=w({__name:`PlayPauseBtn`,setup(e){return(e,t)=>(b(),S(`div`,fo,[te(c(a($),{role:`button`,icon:`fa-solid fa-circle-play`,onClick:t[0]||=t=>e.$store.commit(`toggleTimer`)},null,512),[[v,!e.$store.state.isTimerRunning]]),te(c(a($),{role:`button`,icon:`fa-solid fa-circle-pause`,onClick:t[1]||=t=>e.$store.commit(`toggleTimer`)},null,512),[[v,e.$store.state.isTimerRunning]])]))}},[[`__scopeId`,`data-v-37dff15d`]]);l(),x(),o();var mo={class:`dropup`},ho={key:0,class:`dropup-content`},go=w({__name:`ResetDropup`,setup(e){let t=T(`pomodoro-store`);return(e,n)=>(b(),S(`div`,mo,[C(`button`,{class:`dropup-btn`,onClick:n[0]||=e=>a(t).commit(`toggleResetDropup`)},u(e.$t(`tools.pomodoro-timer.ResetDropup.text.reset`)),1),a(t).state.isResetDropupVisible?(b(),S(`div`,ho,[C(`button`,{class:`reset-btns`,onClick:n[1]||=e=>a(t).commit(`timerResetAll`)},u(e.$t(`tools.pomodoro-timer.ResetDropup.text.reset-all`)),1),C(`button`,{class:`reset-btns`,onClick:n[2]||=e=>a(t).commit(`timerResetCurrent`)},u(e.$t(`tools.pomodoro-timer.ResetDropup.text.reset-current`)),1)])):r(``,!0)]))}},[[`__scopeId`,`data-v-5eaeda0b`]]);x(),o(),l();var _o={class:`icon-bar-root`},vo={class:`icons-container`},yo=w({__name:`ModeIconBar`,setup(e){let t=T(`pomodoro-store`),n=g({get(){return t.state.progress.length},set(){}});return(e,r)=>(b(),S(`div`,_o,[C(`div`,vo,[(b(!0),S(y,null,f(Array.from({length:a(t).state.shortBreakCount},(e,t)=>t),e=>(b(),S(y,{key:e},[c(a($),{icon:`fa-solid fa-computer`,class:re({active:n.value===e*2+1,completed:n.value>e*2+1})},null,8,[`class`]),c(a($),{icon:`fa-solid fa-mug-hot`,class:re({active:n.value===e*2+2,completed:n.value>e*2+2})},null,8,[`class`])],64))),128)),c(a($),{icon:`fa-solid fa-computer`,class:re({active:n.value===a(t).state.shortBreakCount*2+1,completed:n.value>a(t).state.shortBreakCount*2+1})},null,8,[`class`]),c(a($),{icon:`fa-solid fa-person-walking`,class:re({active:n.value===a(t).state.shortBreakCount*2+2,completed:n.value>a(t).state.shortBreakCount*2+2})},null,8,[`class`])])]))}},[[`__scopeId`,`data-v-74b5f716`]]);l(),o(),x();var bo={key:0,class:`welcome-msg`},xo={key:1,class:`home`},So={class:`graphic`},Co={class:`counter`},wo=w({__name:`Home`,setup(e){let t=T(`pomodoro-store`);return(e,n)=>e.$store.state.isFirstVisit?(b(),S(`div`,bo,[C(`p`,null,u(e.$t(`tools.pomodoro-timer.Home.text.welcome`)),1),C(`p`,null,[i(u(e.$t(`tools.pomodoro-timer.Home.text.go-to`))+` `,1),C(`a`,{style:{cursor:`pointer`},onClick:n[0]||=e=>a(t).commit(`goToPage`,`settings`)},u(e.$t(`tools.watermarker.texts.title-settings`)),1),i(` `+u(e.$t(`tools.pomodoro-timer.Home.text.to-get-started`)),1)])])):(b(),S(`div`,xo,[C(`div`,So,[c(yo),c(ke)]),C(`div`,Co,[c(Ae),c(po),c(go)])]))}},[[`__scopeId`,`data-v-663b66a9`]]);l(),o(),m();var To=[`for`],Eo=[`id`,`min`,`max`],Do={__name:`NumberInput`,props:{id:String,label:String,min:Number,max:Number},setup(e){let t=e,n=T(`pomodoro-store`),r=g({get(){return n.state[t.id]},set(e){n.commit(`updateTimeSetting`,{propName:t.id,propValue:e})}});return(t,n)=>(b(),S(y,null,[C(`label`,{for:e.id,class:`settings-label`},u(e.label),9,To),te(C(`input`,{id:e.id,"onUpdate:modelValue":n[0]||=e=>r.value=e,type:`number`,min:e.min,max:e.max},null,8,Eo),[[ie,r.value]])],64))}};l(),o();var Oo=[`for`],ko={class:`dot-container`},Ao=w({__name:`AppColorPicker`,props:{id:String,label:String},setup(e){let t=e,n=T(`pomodoro-store`);function r(e){n.commit(`updateAppColor`,{propName:t.id,propValue:e})}return(t,n)=>(b(),S(y,null,[C(`label`,{for:e.id,class:`settings-label`},u(e.label),9,Oo),C(`div`,ko,[C(`div`,{class:`blue-dot`,onClick:n[0]||=e=>r(`#3b83b0`)}),C(`div`,{class:`red-dot`,onClick:n[1]||=e=>r(`#c93232`)}),C(`div`,{class:`green-dot`,onClick:n[2]||=e=>r(`#008000`)})])],64))}},[[`__scopeId`,`data-v-8d3de0c3`]]);l(),x(),o(),m();var jo=[`for`],Mo=[`id`],No=w({__name:`AlarmSoundToggle`,props:{id:String,label:String},setup(e){let t=e,n=T(`pomodoro-store`),r=g({get(){return n.state[t.id]},set(){n.commit(`toggleAlarmSound`)}});return(t,n)=>(b(),S(y,null,[C(`label`,{for:e.id,class:`settings-label`},[i(u(e.label)+` `,1),c(a($),{icon:`fa-solid fa-volume-high`})],8,jo),te(C(`input`,{id:e.id,"onUpdate:modelValue":n[0]||=e=>r.value=e,class:`toggle toggle-spacing`,type:`checkbox`},null,8,Mo),[[_,r.value]])],64))}},[[`__scopeId`,`data-v-9830e408`]]);o(),l(),x();var Po=w({__name:`Settings`,setup(e){let t=T(`pomodoro-store`);return t.commit(`setInitialTimer`),t.commit(`setFirstVisitStatus`,{propValue:!1}),(e,n)=>(b(),S(`form`,null,[c(Do,{id:`workInterval`,min:1,max:120,label:e.$t(`tools.pomodoro-timer.Settings.text.work-interval`)},null,8,[`label`]),C(`span`,null,u(e.$t(`tools.pomodoro-timer.Settings.text.min`)),1),n[2]||=C(`br`,null,null,-1),c(Do,{id:`shortBreak`,min:1,max:120,label:e.$t(`tools.pomodoro-timer.Settings.text.short-break`)},null,8,[`label`]),C(`span`,null,u(e.$t(`tools.pomodoro-timer.Settings.text.min`)),1),n[3]||=C(`br`,null,null,-1),c(Do,{id:`shortBreakCount`,min:1,max:10,label:e.$t(`tools.pomodoro-timer.Settings.text.short-break-count`)},null,8,[`label`]),C(`span`,null,u(e.$t(`tools.pomodoro-timer.Settings.text.breaks`)),1),n[4]||=C(`br`,null,null,-1),c(Do,{id:`longBreak`,min:1,max:120,label:e.$t(`tools.pomodoro-timer.Settings.text.long-break`)},null,8,[`label`]),C(`span`,null,u(e.$t(`tools.pomodoro-timer.Settings.text.min`)),1),n[5]||=C(`br`,null,null,-1),c(No,{id:`prefersAlarmSound`,label:e.$t(`tools.pomodoro-timer.Settings.text.alarm-sound`)},null,8,[`label`]),n[6]||=C(`br`,null,null,-1),c(Ao,{id:`appAccentColor`,label:e.$t(`tools.pomodoro-timer.Settings.text.app-color`)},null,8,[`label`]),n[7]||=C(`br`,null,null,-1),C(`a`,{class:`lets-go`,onClick:n[0]||=e=>a(t).commit(`goToPage`,`home`)},u(e.$t(`tools.pomodoro-timer.Settings.text.lets-go`)),1),C(`button`,{type:`button`,class:`reset-btn`,onClick:n[1]||=e=>a(t).commit(`restoreDefaultSettings`)},u(e.$t(`tools.pomodoro-timer.Settings.text.restore-defaults`)),1)]))}},[[`__scopeId`,`data-v-e883ef43`]]);o(),x();var Fo={class:`pomodoro-timer-app`},Io={class:`page-container`},Lo={__name:`PomodoroApp`,setup(e){let t=T(`pomodoro-store`);document.addEventListener(`visibilitychange`,()=>{document.hidden&&localStorage.setItem(`pomodoro-state`,JSON.stringify(t.state))});function n(){t.subscribe((e,t)=>{localStorage.setItem(`pomodoro-state`,JSON.stringify(t))})}function r(){localStorage.getItem(`pomodoro-state`)&&(t.replaceState(Object.assign(t.state,JSON.parse(localStorage.getItem(`pomodoro-state`)))),t.commit(`updateAppColor`,{propName:`appAccentColor`,propValue:t.state.appAccentColor})),t.state.isTimerRunning&&ue(t.state)}n(),r();function i(){return t.state.workInterval}i()?t.commit(`goToPage`,`home`):t.commit(`goToPage`,`settings`);let o=g({get(){return t.state.currentTab},set(e){t.commit(`goToPage`,e)}});return(e,t)=>{let n=oe,r=se;return b(),S(y,null,[t[2]||=C(`link`,{href:`//fonts.googleapis.com/css2?family=Varela+Round&display=swap`,rel:`stylesheet`},null,-1),C(`div`,Fo,[c(Se),C(`div`,Io,[c(r,{value:a(o),"onUpdate:value":t[0]||=e=>ne(o)?o.value=e:null,type:`line`,animated:``},{default:h(()=>[c(n,{name:`home`,tab:e.$t(`tools.pomodoro-timer.PomodoroApp.text.timer`)},{default:h(()=>[c(wo)]),_:1},8,[`tab`]),c(n,{name:`about`,tab:e.$t(`tools.pomodoro-timer.PomodoroApp.text.about`)},{default:h(()=>[c(De)]),_:1},8,[`tab`]),c(n,{name:`settings`,tab:e.$t(`tools.pomodoro-timer.PomodoroApp.text.settings`)},{default:h(()=>[c(Po)]),_:1},8,[`tab`])]),_:1},8,[`value`])]),c(Ce),t[1]||=C(`audio`,{id:`alarmPlayer`,src:`/Beep.mp3`,loop:``},null,-1)])],64)}}};Na.add(he,ge,me,pe,de,fe),o();var Ro=n({__name:`pomodoro-timer`,setup(e){return(e,t)=>(b(),S(`div`,null,[c(Lo)]))}});export{Ro as default};