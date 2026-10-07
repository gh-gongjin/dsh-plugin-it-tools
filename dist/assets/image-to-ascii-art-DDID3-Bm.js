import{t as __commonJSMin}from"./rolldown-runtime-DAXXjFlN.js";import{A as defineComponent,C as createCommentVNode,D as createTextVNode,Et as unref,F as init_runtime_core_esm_bundler,O as createVNode,Pt as init_shared_esm_bundler,Qt as toDisplayString,S as createBlock,at as withCtx,pt as isRef,q as openBlock,ut as init_reactivity_esm_bundler,vt as ref,w as createElementBlock,x as createBaseVNode}from"./vue.runtime.esm-bundler-DZZTqpJU.js";import{t as FormItem_default}from"./FormItem-Cudop7X3.js";import{t as TextareaCopyable_default}from"./TextareaCopyable-D0WVNa-9.js";import{t as Divider_default}from"./Divider-FrXK6-Hi.js";import{t as Slider_default}from"./Slider-CR1GmXTK.js";import{t as Spin_default}from"./Spin-xn1U0C3I.js";import{t as computedAsync}from"./core-DrnUf2d3.js";import{n as useITStorage}from"./queryParams-BlxtLRmZ.js";import{n as useI18n}from"./vue-i18n.runtime-CdHdz6Iq.js";import{t as c_card_default}from"./c-card-yk2e8MBu.js";import{t as c_file_upload_default}from"./c-file-upload-BZEQ7FiN.js";import{t as n_input_number_i18n_default}from"./n-input-number-i18n-ZVo1LbDe.js";import{t as c_select_default}from"./c-select-EEx0ojGo.js";import{t as c_alert_default}from"./c-alert-BgPMs1so.js";import{n as languages,r as printToLanguage}from"./ascii-lang-utils-D_zDbVjx.js";var require_image_to_ascii_art=__commonJSMin(((exports,module)=>{(function(e,t){if(typeof exports==`object`&&typeof module==`object`)module.exports=t();else if(typeof define==`function`&&define.amd)define([],t);else{var n=t();for(var r in n)(typeof exports==`object`?exports:e)[r]=n[r]}})(window,function(){return(function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){typeof Symbol<`u`&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:`Module`}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(t&1&&(e=n(e)),t&8||t&4&&typeof e==`object`&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),t&2&&typeof e!=`string`)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,`a`,t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p=``,n(n.s=`./src/image-to-ascii-art.ts`)})({"./src/image-to-ascii-art.ts":(function(module$3,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageToAsciiArt", function() { return ImageToAsciiArt; });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/model.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");


class ImageToAsciiArt {
  // If remove canvas dom when destroy.If "canvas" param of this Class was passed,it will be true.

  /**\r
   * @param canvas optional,the canvas used to generate ascii art.If it isn't passed,a hidden canvas will be append to body automatically.\r
   * @param config configuration\r
   */
  constructor({
    canvas,
    config = {}
  } = {}) {
    if (canvas instanceof HTMLCanvasElement) {
      this.canvas = canvas;
      this.canvasIsStable = true;
    } else {
      this.canvas = document.createElement('canvas');
      this.canvas.style.display = 'none';
      document.body.appendChild(this.canvas);
    }

    this.canvasCtx = this.canvas.getContext('2d');
    this.setConfig(config);
  }

  setConfig(config) {
    this.config = new _model__WEBPACK_IMPORTED_MODULE_0__["Config"](config);
  }
  /**\r
   * convert an image to an ascii art\r
   * @param image a HTMLImageElement instance or an URL of a image\r
   */


  convert(image) {
    let _image;

    if (image instanceof HTMLImageElement) {
      _image = image;
    } else {
      _image = new Image();
      _image.src = image;
    }

    return new Promise(resolve => {
      let doConvert = () => {
        _image.removeEventListener('load', doConvert);

        let drawWidth = this.config.drawWidth <= 1 ? this.config.drawWidth * _image.naturalWidth : this.config.drawWidth;
        let drawHeight = this.config.drawHeight <= 1 ? this.config.drawHeight * _image.naturalHeight : this.config.drawHeight;

        if (!this.canvasIsStable) {
          this.canvas.width = drawWidth;
          this.canvas.height = drawHeight;
        }

        this.canvasCtx.drawImage(_image, 0, 0, drawWidth, drawHeight);
        const imageData = this.canvasCtx.getImageData(0, 0, drawWidth, drawHeight);
        const imageDataArr = imageData.data;
        const imageDataHeight = imageData.height;
        const imageDataWidth = imageData.width;
        let arrGray = [];

        for (let h = 0; h < imageDataHeight; h += this.config.pickDensityHorizontal) {
          for (let w = 0; w < imageDataWidth; w += this.config.pickDensityVertical) {
            let index = (w + imageDataWidth * h) * 4;
            let r = imageDataArr[index];
            let g = imageDataArr[index + 1];
            let b = imageDataArr[index + 2];
            arrGray.push(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["rgbToGray"])(r, g, b));
          } // -1 stands for '\\r\\n'


          arrGray.push(-1);
        }

        resolve(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["grayToAsciiString"])(arrGray, [...this.config.greyRangeChar, {
          from: -1,
          to: -1,
          char: '\\r\\n'
        }]));
      };

      if (!_image.complete) {
        _image.addEventListener('load', doConvert);
      } else {
        doConvert();
      }
    });
  }

  destroy() {
    if (!this.canvasIsStable) {
      document.body.removeChild(this.canvas);
    }
  }

}

//# sourceURL=webpack:///./src/image-to-ascii-art.ts?`)}),"./src/model.ts":(function(module$4,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return Config; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");
 // set the char replace the grey between [from,to]

class Config {
  constructor(config) {
    this.drawWidth = Config.dealDrawParam(config.drawWidth, '"drawWith" config is invalid', 1);
    this.drawHeight = Config.dealDrawParam(config.drawHeight, '"drawHeight" config is invalid', 1);
    this.pickDensityHorizontal = Config.dealPickDensity(config.pickDensityHorizontal, '"pickDensityHorizontal" config is invalid', 1);
    this.pickDensityVertical = Config.dealPickDensity(config.pickDensityVertical, '"pickDensityVertical" config is invalid', 1);
    this.greyRangeChar = Config.dealGreyRangeChar(config.greyRangeChar, '"greyRangeChar" config is invalid', [{
      from: 0,
      to: 30,
      char: '#'
    }, {
      from: 31,
      to: 60,
      char: '&'
    }, {
      from: 61,
      to: 120,
      char: '$'
    }, {
      from: 121,
      to: 150,
      char: '*'
    }, {
      from: 151,
      to: 180,
      char: 'o'
    }, {
      from: 181,
      to: 210,
      char: '!'
    }, {
      from: 211,
      to: 240,
      char: ';'
    }]);
    this.defaultGreyChar = ' ';
  }

  static dealDrawParam(param, err, defaultValue) {
    if (!Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isDef"])(param)) {
      return defaultValue;
    }

    if (isNaN(param) || param <= 0) {
      throw new Error(err);
    } else if (param > 1) {
      param = Math.floor(param);
    }

    return param;
  }

  static dealPickDensity(param, err, defaultValue) {
    if (!Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isDef"])(param)) {
      return defaultValue;
    }

    if (isNaN(param) || param <= 1) {
      throw new Error(err);
    }

    return Math.floor(param);
  }

  static dealGreyRangeChar(param, err, defaultValue) {
    if (!Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isDef"])(param)) {
      return defaultValue;
    }

    const result = [];

    for (let i = 0; i < param.length; i++) {
      if (param[i].from > param[i].to) {
        throw new Error(err);
      }

      result.push({
        from: Math.floor(param[i].from),
        to: Math.floor(param[i].to),
        char: param[i].char
      });
    }

    return result;
  }

}

//# sourceURL=webpack:///./src/model.ts?`)}),"./src/utils.ts":(function(module$5,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDef", function() { return isDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbToGray", function() { return rgbToGray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grayToAsciiString", function() { return grayToAsciiString; });
function isDef(val) {
  return val !== undefined && val !== null;
}
function rgbToGray(r, g, b) {
  return Math.round(0.299 * r + 0.587 * g + 0.114 * b);
}
function grayToAsciiString(gray, greyRangeChar, defaultChar = ' ') {
  const greyCharHash = {};

  for (let i = 0; i < greyRangeChar.length; i++) {
    const item = greyRangeChar[i];

    for (let j = item.from; j <= item.to; j++) {
      greyCharHash[j] = item.char;
    }
  }

  return gray.map(item => {
    return greyCharHash[item] || defaultChar;
  }).join('');
}

//# sourceURL=webpack:///./src/utils.ts?`)})})})}));init_runtime_core_esm_bundler(),init_reactivity_esm_bundler(),init_shared_esm_bundler();var import_image_to_ascii_art=require_image_to_ascii_art(),_hoisted_1={style:{flex:`0 0 100%`}},_hoisted_2={"mx-auto":``,"max-w-600px":``},_hoisted_3={key:0,flex:``,"items-center":``,"justify-center":``},_hoisted_4={class:`ml-2`},image_to_ascii_art_vue_vue_type_script_setup_true_lang_default=defineComponent({__name:`image-to-ascii-art`,setup(e){let{t}=useI18n(),n=ref(``),r=useITStorage(`image-to-ascii-art:language`,`raw`),i=ref(100),a=ref(!1),o=ref(!1);function s(e){return new Promise((t,n)=>{let r=new FileReader;r.readAsDataURL(e),r.onload=()=>t(r.result?.toString()??``),r.onerror=e=>n(e)})}let c=languages.map(e=>({value:e.id,label:e.name})),l=computedAsync(async()=>{let e=n.value;if(!e)return``;let t=i.value/100,s=r.value,c=``;o.value=!0;try{a.value=!1;let n=new import_image_to_ascii_art.ImageToAsciiArt({config:{drawWidth:t,drawHeight:t*.4}});c=printToLanguage(await n.convert(e),s),n.destroy()}catch{a.value=!0}return o.value=!1,c});async function u(e){n.value=await s(e)}return(e,n)=>{let s=c_file_upload_default,d=Slider_default,f=n_input_number_i18n_default,p=FormItem_default,m=c_select_default,h=Divider_default,g=Spin_default,_=c_alert_default,v=c_card_default;return openBlock(),createBlock(v,null,{default:withCtx(()=>[createBaseVNode(`div`,_hoisted_1,[createBaseVNode(`div`,_hoisted_2,[createVNode(s,{title:unref(t)(`tools.image-to-ascii-art.texts.title-drag-and-drop-a-image-file-here-or-click-to-select-a-file`),"paste-image":``,onFileUpload:u},null,8,[`title`])])]),createVNode(p,{label:unref(t)(`tools.image-to-ascii-art.texts.label-output-scale`),"label-placement":`left`,"mt-2":``},{default:withCtx(()=>[createVNode(d,{value:unref(i),"onUpdate:value":n[0]||=e=>isRef(i)?i.value=e:null,step:1,min:1,max:100,"mr-2":``},null,8,[`value`]),createVNode(f,{value:unref(i),"onUpdate:value":n[1]||=e=>isRef(i)?i.value=e:null,size:`small`,min:1,max:100},null,8,[`value`])]),_:1},8,[`label`]),createVNode(m,{value:unref(r),"onUpdate:value":n[2]||=e=>isRef(r)?r.value=e:null,options:unref(c),searchable:``,"mt-3":``},null,8,[`value`,`options`]),createVNode(h),unref(o)?(openBlock(),createElementBlock(`div`,_hoisted_3,[createVNode(g,{size:`medium`}),createBaseVNode(`span`,_hoisted_4,toDisplayString(unref(t)(`tools.image-to-ascii-art.texts.tag-processing`)),1)])):createCommentVNode(``,!0),unref(a)?(openBlock(),createBlock(_,{key:1,"mt-1":``,"text-center":``,type:`error`},{default:withCtx(()=>[createTextVNode(toDisplayString(unref(t)(`tools.image-to-ascii-art.texts.tag-current-settings-resulted-in-error`)),1)]),_:1})):createCommentVNode(``,!0),!unref(o)&&!unref(a)?(openBlock(),createBlock(p,{key:2,label:unref(t)(`tools.image-to-ascii-art.texts.label-ascii-art-text`)},{default:withCtx(()=>[createVNode(TextareaCopyable_default,{value:unref(l),"mb-1":``,"mt-1":``,"copy-placement":`outside`},null,8,[`value`])]),_:1},8,[`label`])):createCommentVNode(``,!0)]),_:1})}}}),image_to_ascii_art_default=image_to_ascii_art_vue_vue_type_script_setup_true_lang_default;export{image_to_ascii_art_default as default};