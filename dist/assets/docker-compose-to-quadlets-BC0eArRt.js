import{A as e,C as t,D as n,Et as r,F as i,O as a,Pt as o,Qt as s,S as c,Y as l,at as u,b as d,h as f,q as p,ut as m,vt as h,w as g,x as _}from"./vue.runtime.esm-bundler-DZZTqpJU.js";import{t as v}from"./FormItem-Cudop7X3.js";import{t as y}from"./Select-8I6pTVKX.js";import{t as b}from"./TextareaCopyable-D0WVNa-9.js";import{t as x}from"./Input-Dm-Xw68w.js";import{t as S}from"./Divider-FrXK6-Hi.js";import{t as C}from"./DynamicTags-B9AU7sPK.js";import{n as w}from"./vue-i18n.runtime-CdHdz6Iq.js";import{t as T}from"./c-card-yk2e8MBu.js";import{t as E}from"./InputCopyable-D20881JL.js";import{t as D}from"./c-label-CNmPn_EL.js";import{t as O}from"./c-alert-BgPMs1so.js";import{t as k}from"./c-monaco-editor-DZ3wPGer.js";import{t as A}from"./src-Bqxa12yc.js";i(),m(),o();var j={relative:``,"w-full":``},M=e({__name:`docker-compose-to-quadlets`,setup(e){let{t:i}=w(),o=h({compose:`
version: '3.8'
services:
  web:
    image: nginx:alpine
    ports:
      - "8080:80"
    environment:
      NODE_ENV: production
    depends_on:
      - db
      
  db:
    image: postgres:15
    environment:
      POSTGRES_DB: myapp
    volumes:
      - db_data:/var/lib/postgresql/data

volumes:
  db_data:
`,unit:{description:`My Application Stack`,after:[`network-online.target`],wants:[`network-online.target`]},service:{restart:`always`},install:{wantedBy:[`multi-user.target`]}}),m=[{label:i(`tools.docker-compose-to-quadlets.texts.label-no`),value:`no`},{label:i(`tools.docker-compose-to-quadlets.texts.label-always`),value:`always`},{label:i(`tools.docker-compose-to-quadlets.texts.label-on-failure`),value:`on-failure`}],M=new A,N=d(()=>{try{return{quadlets:M.composeToQuadlet(o.value.compose.trim(),{unit:o.value.unit,service:o.value.service,install:o.value.install}),errors:``}}catch(e){return{quadlets:[],errors:e.toString()}}}),P={automaticLayout:!0,formatOnType:!0,formatOnPaste:!0};return(e,d)=>{let h=k,w=D,A=x,M=v,F=C,I=y,L=T,R=S,z=E,B=O;return p(),g(`div`,null,[a(w,{label:r(i)(`tools.docker-compose-to-quadlets.texts.label-paste-your-docker-compose-file-content-here`),"mb-2":``},{default:u(()=>[_(`div`,j,[a(h,{value:r(o).compose,"onUpdate:value":d[0]||=e=>r(o).compose=e,theme:`vs-dark`,language:`yaml`,height:`250px`,options:P},null,8,[`value`])])]),_:1},8,[`label`]),a(L,{title:r(i)(`tools.docker-compose-to-quadlets.texts.title-options`)},{default:u(()=>[a(M,{label:r(i)(`tools.docker-compose-to-quadlets.texts.label-description`),"label-placement":`left`},{default:u(()=>[a(A,{value:r(o).unit.description,"onUpdate:value":d[1]||=e=>r(o).unit.description=e},null,8,[`value`])]),_:1},8,[`label`]),a(M,{label:r(i)(`tools.docker-compose-to-quadlets.texts.label-after-targets`),"label-placement":`left`},{default:u(()=>[a(F,{value:r(o).unit.after,"onUpdate:value":d[2]||=e=>r(o).unit.after=e},null,8,[`value`])]),_:1},8,[`label`]),a(M,{label:r(i)(`tools.docker-compose-to-quadlets.texts.label-wants-targets`),"label-placement":`left`},{default:u(()=>[a(F,{value:r(o).unit.wants,"onUpdate:value":d[3]||=e=>r(o).unit.wants=e},null,8,[`value`])]),_:1},8,[`label`]),a(M,{label:r(i)(`tools.docker-compose-to-quadlets.texts.label-restart-policy`),"label-placement":`left`},{default:u(()=>[a(I,{value:r(o).service.restart,"onUpdate:value":d[4]||=e=>r(o).service.restart=e,options:m},null,8,[`value`])]),_:1},8,[`label`]),a(M,{label:r(i)(`tools.docker-compose-to-quadlets.texts.label-wantedby`),"label-placement":`left`},{default:u(()=>[a(F,{value:r(o).install.wantedBy,"onUpdate:value":d[5]||=e=>r(o).install.wantedBy=e},null,8,[`value`])]),_:1},8,[`label`])]),_:1},8,[`title`]),a(R),(p(!0),g(f,null,l(r(N).quadlets,({filename:e,content:t})=>(p(),c(L,{key:e,title:`Quadlet file: ${e}`},{default:u(()=>[a(z,{label:r(i)(`tools.docker-compose-to-quadlets.texts.label-typical-storage-location`),"label-placement":`left`,value:`/etc/containers/systemd/${e}`},null,8,[`label`,`value`]),a(b,{value:t,language:`ini`,"download-file-name":e},null,8,[`value`,`download-file-name`])]),_:2},1032,[`title`]))),128)),r(N).errors?(p(),c(B,{key:0,"mt-1":``,"text-center":``,type:`error`},{default:u(()=>[n(s(r(N).errors),1)]),_:1})):t(``,!0)])}}});export{M as default};