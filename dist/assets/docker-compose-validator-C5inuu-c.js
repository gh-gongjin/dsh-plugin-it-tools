import{o as e}from"./rolldown-runtime-DAXXjFlN.js";import{A as t,C as n,D as r,Et as i,F as a,O as o,Pt as s,Qt as c,S as l,Y as u,at as d,b as f,h as p,pt as m,q as h,ut as g,vt as _,w as v,x as y}from"./vue.runtime.esm-bundler-DZZTqpJU.js";import{t as b}from"./Alert-Be3j77Vt.js";import{t as x}from"./a-CR5NKnYJ.js";import{n as S}from"./vue-i18n.runtime-CdHdz6Iq.js";import{t as C}from"./c-label-CNmPn_EL.js";import{t as w}from"./c-monaco-editor-DZ3wPGer.js";import{t as T}from"./composeverter-B2Ksyp4K.js";a(),g(),s();var E=e(T(),1),D={relative:``,"w-full":``},O={key:0},k={key:1},A=t({__name:`docker-compose-validator`,setup(e){let{t}=S(),a=_(`version: '3.3'
services:
    nginx:
        ports:
            - '80:80'
        volumes:
            - '/var/run/docker.sock:/tmp/docker.sock:ro'
        restart: always
        logging:
            options:
                max-size: 1g
        image: nginx`),s=f(()=>{try{return(0,E.validateDockerComposeToCommonSpec)(a.value)}catch(e){return e.toString().split(`
`).map(e=>({line:-1,message:e,helpLink:``}))}}),g=f(()=>s.value),T={automaticLayout:!0,formatOnType:!0,formatOnPaste:!0};return(e,s)=>{let f=w,_=C,S=x,E=b;return h(),v(`div`,null,[o(_,{label:i(t)(`tools.docker-compose-validator.texts.label-paste-your-docker-compose-file-content`)},{default:d(()=>[y(`div`,D,[o(f,{value:i(a),"onUpdate:value":s[0]||=e=>m(a)?a.value=e:null,theme:`vs-dark`,language:`yaml`,height:`250px`,options:T},null,8,[`value`])])]),_:1},8,[`label`]),i(g).length>0?(h(),v(`div`,O,[o(E,{title:i(t)(`tools.docker-compose-validator.texts.title-the-following-errors-occured`),type:`error`,"mt-5":``},{default:d(()=>[y(`ul`,null,[(h(!0),v(p,null,u(i(g),(e,a)=>(h(),v(`li`,{key:a},[r(c(e.message)+` (`,1),e.helpLink?(h(),l(S,{key:0,target:`_blank`,rel:`noreferer noopener`},{default:d(()=>[r(c(i(t)(`tools.docker-compose-validator.texts.tag-see-docker-compose-help`)),1)]),_:1})):n(``,!0),r(c(i(t)(`tools.docker-compose-validator.texts.tag-`)),1)]))),128))])]),_:1},8,[`title`])])):(h(),v(`div`,k,[o(E,{type:`success`,"mt-5":``},{default:d(()=>[r(c(i(t)(`tools.docker-compose-validator.texts.tag-validation-successful`)),1)]),_:1})]))])}}});export{A as default};