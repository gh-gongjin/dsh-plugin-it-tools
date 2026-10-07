import{A as e,C as t,Et as n,F as r,O as i,S as a,at as o,b as s,q as c,ut as l,vt as u}from"./vue.runtime.esm-bundler-DZZTqpJU.js";import{t as d}from"./FormItem-Cudop7X3.js";import{t as f}from"./TextareaCopyable-D0WVNa-9.js";import{t as p}from"./Input-Dm-Xw68w.js";import{t as m}from"./Card-CZFVTIzo.js";import{t as h}from"./Space-BlJZUpA9.js";import{t as g}from"./Switch-DLYC0U6K.js";import{t as _}from"./Form-BooP3akI.js";import{n as v}from"./vue-i18n.runtime-CdHdz6Iq.js";import{t as y}from"./n-input-number-i18n-ZVo1LbDe.js";function b(e){return e.proxiedServiceName===``||e.proxiedServiceImage===``||e.proxiedServiceHostName===``?``:`
version: "3.3"
services:
  traefik:
    image: "traefik:v2.11"
    container_name: "traefik"
    command:
      ${e.logDebug?`- "--log.level=DEBUG"`:``}
      - "--api=true"
      - "--providers.docker=true"
      - "--providers.docker.exposedbydefault=false"
      - "--entrypoints.web.address=:80"
      - "--entrypoints.websecure.address=:443"
      - "--certificatesresolvers.${e.certResolverName}.acme.httpchallenge=true"
      - "--certificatesresolvers.${e.certResolverName}.acme.httpchallenge.entrypoint=web"
      ${e.letEncryptTest?`- "--certificatesresolvers.${e.certResolverName}.acme.caserver=https://acme-staging-v02.api.letsencrypt.org/directory"`:``}
      - "--certificatesresolvers.${e.certResolverName}.acme.email=${e.postmasterEmail}"
      - "--certificatesresolvers.${e.certResolverName}.acme.storage=/letsencrypt/acme.json"
    labels:
      ${e.dashboard?`
      - "traefik.http.routers.dashboard.rule=Host(\`${e.traefikDashboardHostName}\`) && (PathPrefix('/api') || PathPrefix('/dashboard'))"
      - "traefik.http.routers.dashboard.service=api@internal"
      - "traefik.http.routers.dashboard.middlewares=auth"
      - "traefik.http.middlewares.auth.basicauth.users=${e.dashboardUserAndPass}"
      `:``}
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - "./letsencrypt:/letsencrypt"
      - "/var/run/docker.sock:/var/run/docker.sock:ro"

  ${e.proxiedServiceName}:
    image: ${e.proxiedServiceImage}
    labels:
      - "traefik.enable=true"
      - "traefik.http.middlewares.${e.proxiedServiceName}-redirect.redirectscheme.scheme=https"
      - "traefik.http.middlewares.${e.proxiedServiceName}-redirect.redirectscheme.permanent=true"
      ${e.loadBalance?`- "traefik.http.services.${e.proxiedServiceName}.loadbalancer.server.port=${e.proxiedServiceLoadBalancePort}"`:``}
      - "traefik.http.routers.${e.proxiedServiceName}.rule=Host(\`${e.proxiedServiceHostName}\`)"
      - "traefik.http.routers.${e.proxiedServiceName}.entrypoints=web"
      - "traefik.http.routers.${e.proxiedServiceName}-secure.rule=Host(\`${e.proxiedServiceHostName}\`)"
      - "traefik.http.routers.${e.proxiedServiceName}-secure.entrypoints=websecure"
      - "traefik.http.routers.${e.proxiedServiceName}-secure.tls=true"
      - "traefik.http.routers.${e.proxiedServiceName}-secure.tls.certresolver=${e.certResolverName}"
      `}r(),l();var x=e({__name:`traefik-compose-maker`,setup(e){let{t:r}=v(),l=u({logDebug:!1,certResolverName:``,postmasterEmail:``,letEncryptTest:!1,dashboard:!1,traefikDashboardHostName:``,dashboardUserAndPass:``,proxiedServiceName:``,proxiedServiceImage:``,proxiedServiceLoadBalancePort:80,proxiedServiceHostName:``,loadBalance:!1}),x=s(()=>b(l.value));return(e,s)=>{let u=p,v=d,b=y,S=g,C=h,w=f,T=m,E=_;return c(),a(T,{title:n(r)(`tools.traefik-compose-maker.texts.title-traefik-docker-compose-generator`)},{default:o(()=>[i(E,{model:n(l),"label-placement":`left`},{default:o(()=>[i(v,{label:n(r)(`tools.traefik-compose-maker.texts.label-proxied-service-name`)},{default:o(()=>[i(u,{value:n(l).proxiedServiceName,"onUpdate:value":s[0]||=e=>n(l).proxiedServiceName=e,placeholder:n(r)(`tools.traefik-compose-maker.texts.placeholder-enter-service-name`)},null,8,[`value`,`placeholder`])]),_:1},8,[`label`]),i(v,{label:n(r)(`tools.traefik-compose-maker.texts.label-proxied-service-image`)},{default:o(()=>[i(u,{value:n(l).proxiedServiceImage,"onUpdate:value":s[1]||=e=>n(l).proxiedServiceImage=e,placeholder:n(r)(`tools.traefik-compose-maker.texts.placeholder-enter-image-name`)},null,8,[`value`,`placeholder`])]),_:1},8,[`label`]),i(v,{label:n(r)(`tools.traefik-compose-maker.texts.label-proxied-service-host-name`)},{default:o(()=>[i(u,{value:n(l).proxiedServiceHostName,"onUpdate:value":s[2]||=e=>n(l).proxiedServiceHostName=e,placeholder:n(r)(`tools.traefik-compose-maker.texts.placeholder-enter-service-hostname`)},null,8,[`value`,`placeholder`])]),_:1},8,[`label`]),i(C,null,{default:o(()=>[i(v,{label:n(r)(`tools.traefik-compose-maker.texts.label-proxied-service-load-balancer-port`)},{default:o(()=>[i(b,{value:n(l).proxiedServiceLoadBalancePort,"onUpdate:value":s[3]||=e=>n(l).proxiedServiceLoadBalancePort=e,placeholder:n(r)(`tools.traefik-compose-maker.texts.placeholder-enter-port`)},null,8,[`value`,`placeholder`])]),_:1},8,[`label`]),i(v,{label:n(r)(`tools.traefik-compose-maker.texts.label-enable-load-balancer`)},{default:o(()=>[i(S,{value:n(l).loadBalance,"onUpdate:value":s[4]||=e=>n(l).loadBalance=e},null,8,[`value`])]),_:1},8,[`label`])]),_:1}),i(v,{label:n(r)(`tools.traefik-compose-maker.texts.label-cert-resolver-name`)},{default:o(()=>[i(u,{value:n(l).certResolverName,"onUpdate:value":s[5]||=e=>n(l).certResolverName=e,placeholder:n(r)(`tools.traefik-compose-maker.texts.placeholder-enter-cert-resolver-name`)},null,8,[`value`,`placeholder`])]),_:1},8,[`label`]),i(v,{label:n(r)(`tools.traefik-compose-maker.texts.label-postmaster-email`)},{default:o(()=>[i(u,{value:n(l).postmasterEmail,"onUpdate:value":s[6]||=e=>n(l).postmasterEmail=e,placeholder:n(r)(`tools.traefik-compose-maker.texts.placeholder-enter-email`)},null,8,[`value`,`placeholder`])]),_:1},8,[`label`]),i(C,null,{default:o(()=>[i(v,{label:n(r)(`tools.traefik-compose-maker.texts.label-let-s-encrypt-test-mode`)},{default:o(()=>[i(S,{value:n(l).letEncryptTest,"onUpdate:value":s[7]||=e=>n(l).letEncryptTest=e},null,8,[`value`])]),_:1},8,[`label`]),i(v,{label:n(r)(`tools.traefik-compose-maker.texts.label-enable-dashboard`)},{default:o(()=>[i(S,{value:n(l).dashboard,"onUpdate:value":s[8]||=e=>n(l).dashboard=e},null,8,[`value`])]),_:1},8,[`label`]),i(v,{label:n(r)(`tools.traefik-compose-maker.texts.label-log-level-debug`)},{default:o(()=>[i(S,{value:n(l).logDebug,"onUpdate:value":s[9]||=e=>n(l).logDebug=e},null,8,[`value`])]),_:1},8,[`label`])]),_:1}),i(v,{label:n(r)(`tools.traefik-compose-maker.texts.label-traefik-dashboard-host-name`)},{default:o(()=>[i(u,{value:n(l).traefikDashboardHostName,"onUpdate:value":s[10]||=e=>n(l).traefikDashboardHostName=e,placeholder:n(r)(`tools.traefik-compose-maker.texts.placeholder-enter-dashboard-host-name`)},null,8,[`value`,`placeholder`])]),_:1},8,[`label`]),i(v,{label:n(r)(`tools.traefik-compose-maker.texts.label-dashboard-user-and-password`)},{default:o(()=>[i(u,{value:n(l).dashboardUserAndPass,"onUpdate:value":s[11]||=e=>n(l).dashboardUserAndPass=e,placeholder:n(r)(`tools.traefik-compose-maker.texts.placeholder-user-password`)},null,8,[`value`,`placeholder`])]),_:1},8,[`label`]),n(x)?(c(),a(T,{key:0,title:n(r)(`tools.traefik-compose-maker.texts.title-generated-compose-entry`)},{default:o(()=>[i(w,{value:n(x),language:`yaml`},null,8,[`value`])]),_:1},8,[`title`])):t(``,!0)]),_:1},8,[`model`])]),_:1},8,[`title`])}}});export{x as default};