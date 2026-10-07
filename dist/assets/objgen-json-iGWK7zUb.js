import{A as e,Et as t,F as n,O as r,Pt as i,Qt as a,h as o,q as s,ut as c,w as l,x as u}from"./vue.runtime.esm-bundler-DZZTqpJU.js";import{t as d}from"./TextareaCopyable-D0WVNa-9.js";import{i as f}from"./queryParams-BlxtLRmZ.js";import{n as p}from"./vue-i18n.runtime-CdHdz6Iq.js";import{t as m}from"./FormatTransformer-CLmOzBNF.js";import{t as h}from"./objgen-CDHUZhQu.js";n(),c(),i();var g={"mb-1":``},_=`// Model & generate Live JSON data values
// interactively using a simple syntax.
// String is the default value type
product = Live JSON generator

// Number, Date & Boolean are also supported
// Specify types after property names
version n = 3.1
releaseDate d = 2014-06-25
demo b = true

// Tabs or spaces define complex values
person
  id number = 12345
  name = John Doe
  phones
    home = 800-123-4567
    mobile = 877-123-1234

  // Use [] to define simple type arrays
  email[] s = jd@example.com, jd@example.org
  dateOfBirth d = 1980-01-02
  registered b = true

  // Use [] or [n] to define object arrays
  emergencyContacts[]
    name s = Jane Doe
    phone s = 888-555-1212
    relationship = spouse
  emergencyContacts[]
    name s = Justin Doe
    phone s = 877-123-1212
    relationship = parent
`,v=e({__name:`objgen-json`,setup(e){let{t:n}=p(),i=f({name:`indent`,storageName:`objgen-json:i`,defaultValue:2});function c(e){try{return h(e,{numSpaces:i.value})}catch(e){return`/* ERROR: ${e.toString()} */`}}return(e,i)=>{let f=d,p=m;return s(),l(o,null,[u(`details`,g,[u(`summary`,null,a(t(n)(`tools.objgen-json.texts.tag-documentation`)),1),r(f,{value:_,language:`toml`})]),r(p,{"input-label":t(n)(`tools.objgen-json.texts.input-label-objgen-json-definition`),"input-default":_,"input-placeholder":t(n)(`tools.objgen-json.texts.input-placeholder-put-your-objgen-json-definition-here`),"output-label":t(n)(`tools.objgen-json.texts.output-label-generated-json`),"output-language":`json`,transformer:c,"download-file-name":`output.json`},null,8,[`input-label`,`input-placeholder`,`output-label`])],64)}}});export{v as default};