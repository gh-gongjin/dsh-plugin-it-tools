import{A as e,Et as t,F as n,O as r,Pt as i,Qt as a,h as o,q as s,ut as c,w as l,x as u}from"./vue.runtime.esm-bundler-DZZTqpJU.js";import{t as d}from"./TextareaCopyable-D0WVNa-9.js";import{n as f}from"./vue-i18n.runtime-CdHdz6Iq.js";import{t as p}from"./FormatTransformer-CLmOzBNF.js";import{n as m}from"./objgen-CDHUZhQu.js";var h=`  `,g={a:!0,abbr:!0,acronym:!0,address:!0,applet:!0,area:!0,article:!0,aside:!0,audio:!0,b:!0,base:!0,basefont:!0,bdi:!0,bdo:!0,bgsound:!0,big:!0,blink:!0,blockquote:!0,body:!1,br:!0,button:!0,canvas:!0,caption:!0,center:!0,cite:!0,code:!0,colgroup:!0,command:!0,data:!0,datalist:!0,dd:!0,del:!0,details:!0,dfn:!0,dir:!0,div:!0,dl:!0,dt:!0,em:!0,embed:!0,fieldset:!0,figcaption:!0,figure:!0,font:!0,footer:!0,form:!0,frame:!0,frameset:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,head:!0,header:!0,hgroup:!0,hr:!0,html:!1,i:!0,iframe:!0,img:!0,input:!0,ins:!0,isindex:!0,kbd:!0,keygen:!0,label:!0,legend:!0,li:!0,link:!0,listing:!0,map:!0,mark:!0,marquee:!0,menu:!0,meta:!0,meter:!0,nav:!0,nobr:!0,noframes:!0,noscript:!0,object:!0,ol:!0,optgroup:!0,option:!0,output:!0,p:!0,param:!0,plaintext:!0,pre:!0,progress:!0,q:!0,rp:!0,rt:!0,ruby:!0,s:!0,samp:!0,script:!1,section:!0,select:!0,small:!0,source:!0,spacer:!0,span:!0,strike:!0,strong:!0,style:!0,sub:!0,summary:!0,sup:!0,table:!0,tbody:!0,td:!0,textarea:!0,tfoot:!0,th:!0,thead:!0,time:!0,title:!0,tr:!0,track:!0,tt:!0,u:!0,ul:!0,var:!0,video:!0,wbr:!0,xmp:!0};function _(e){let t=/([-\w]+)|(\.[-\w]+)|(#[-\w]+)|(\(.*?\))|(=.*$)/g,n=[],r=[];return m(e,{numSpaces:2},(e,i)=>{if(e.match(`^s+$/|^/$|^//|^s.*/$|^s.*//`)!==null)return``;let a={kind:`div`,id:``,clazz:[],content:``,elements:[],attributes:``},o=null;if(i===1)o=null,r=[],r.push(a);else{for(;r.length>i-1;)o=r.pop();r.push(o),r.push(a)}o===null?n.push(a):o.elements.push(a),r.push(a);let s=0,c=t.exec(e);for(;c!==null;)s+=1,s===1&&b(c[0])?a.kind=c[0]:c[2]?a.clazz[a.clazz.length]=c[0].replace(/\./,``):c[3]?a.id=c[0].replace(/#/,``):c[4]?(a.attributes=c[0].replace(/^\(|\)$/g,``),a.attributes=a.attributes.trim().replace(/\s+/g,` `)):c[5]?a.content=c[0].replace(/=/,``).trim():a.clazz.push(c[0]),c=t.exec(e)}),v(n,1)}function v(e,t){t??=1;let n=h.repeat(t),r=``;for(let i=0;i<e.length;i++){let a=e[i];r+=`${n}<${a.kind}`,y(a.id)&&(r+=` id="${a.id}"`),y(a.clazz)&&(r+=` class="${a.clazz.join(` `)}"`),y(a.attributes)&&(r+=` ${a.attributes}`),r+=`>`;let o=y(a.elements);y(a.content)&&(o&&(r+=`\n${n}${h}`),r+=a.content),o&&(r+=`\n${v(a.elements,t+1)}${n}`),r+=`</${a.kind}>\n`}return r}function y(e){return e&&e.length>0}function b(e){return Object.prototype.hasOwnProperty.call(g,e)}n(),c(),i();var x={"mb-1":``},S=`// This is a comment!
// HTML generator quick tips:
// - Each line with content will generate a HTML element
// - Generate elements by just using their tag names
// - Elements are nested using tabs and/or spaces
// - Element content (inner text) is specified using an equal sign '='
// - Specify one or more class attributes after the tag name
// - Class names can optionally be indicated using a dot prefix, '.some-class'
// - Element ids are assigned using a hash prefix, '#someElementId'
// - Assign attributes using a name=val enclosed in parens, '(attr="value")'
// - Comments in the model text, like this are ignored

// Demo using Bootstrap 4 styled elements
container-fluid
  h2=HTML Generator Demo
  p=The HTML Live Generator uses a shorthand syntax for quickly prototyping and generating HTML snippets. ObjGen includes support for styling elements using the Bootstrap v4.x toolkit and is used in this demo example.
  a(href="https://getbootstrap.com" target="_blank")=Click here for Bootstrap documentation and reference
  hr

  h3 pb-3=Typography
  row
    col bg-light border rounded p-2
      h1 = h1. Bootstrap Heading
      h2 = h2. Bootstrap Heading
      h3 = h3. Bootstrap Heading

  h3 pt-4=Grid Layout
  row mb-3
    col bg-light border
      p-3 = 1 of 2
    col bg-light border
      p-3 = 2 of 2
  row
    col bg-light border
      p-3 = 1 of 3
    col bg-light border
      p-3 = 2 of 3
    col bg-light border
      p-3 = 3 of 3

  h3 pt-4=Flex Layout
  d-flex bg-light #flexDemoContainer
    mr-auto p-2 border=1 of 3
    p-2 border=2 of 3
    p-2 border=3 of 3

  h3 pt-4=Forms
    small=(Login Form)
  row
    col
      form bg-light border rounded p-3
        form-group
          label=Email
          input form-control (type="email", placeholder="someone@example.com")
        form-group
          label=Password
          input form-control (type="password", placeholder="********")
        form-group form-check
          input form-check-input (type="checkbox")
          label form-check-label=Remember me
        button btn btn-primary(type="button")=Submit

  h3 pt-4=Cards
    small=(with decks)
  card-deck
    card
      img card-img-top(src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png")
      card-body
        h5 card-title=Card 1 Title
        p=Card 1 Content
      card-footer
        small text-muted=Last updated 5 mins ago
    card
      img card-img-top(src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png")
      card-body
        h5 card-title=Card 2 Title
        p=Card 2 Content
      card-footer
        small text-muted=Last updated 5 mins ago
    card
      img card-img-top(src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png")
      card-body
        h5 card-title=Card 3 Title
        p=Card 3 Content
      card-footer
        small text-muted=Last updated 5 mins ago

  h2 pt-4=List Group
    small=(with badges)

  ul list-group
    li list-group-item d-flex justify-content-between align-items-center active=Item 1
      span badge badge-danger badge-pill=100
    li list-group-item d-flex justify-content-between align-items-center=Item 2
      span badge badge-primary badge-pill=75
    li list-group-item=Item 3
    li list-group-item=Item 4

  h2 pt-4=Tables

  table .table table-bordered
    thead thead-light
      tr
        th=ID
        th=First
        th=Last
        th=Email
    tbody
      tr
        td=1
        td=John
        td=Doe
        td=john.doe@example.com
      tr
        td=2
        td=Jane
        td=Doe
        td=jane.doe@example.com
      tr
        td=3
        td=Dave
        td=Kingman
        td=dave@davekingman.com

  h2 mt-4=Alerts
  alert alert-primary mt-3 mb-3=Primary Alert
  alert alert-secondary mt-3 mb-3=Secondary Alert
  alert alert-success mt-3 mb-3=Success! Thank you for viewing this demo!
`,C=e({__name:`objgen-html`,setup(e){let{t:n}=f();function i(e){try{return _(e)}catch(e){return`/* ERROR: ${e.toString()} */`}}return(e,c)=>{let f=d,m=p;return s(),l(o,null,[u(`details`,x,[u(`summary`,null,a(t(n)(`tools.objgen-html.texts.tag-documentation`)),1),r(f,{value:S,language:`toml`})]),r(m,{"input-label":t(n)(`tools.objgen-html.texts.input-label-objgen-html-definition`),"input-default":S,"input-placeholder":t(n)(`tools.objgen-html.texts.input-placeholder-put-your-objgen-html-definition-here`),"output-label":t(n)(`tools.objgen-html.texts.output-label-generated-html`),"output-language":`html`,transformer:i,"download-file-name":`output.html`},null,8,[`input-label`,`input-placeholder`,`output-label`])],64)}}});export{C as default};