webpackJsonp([0],{0:function(t,e){},BRO9:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),r=a("8+8L"),s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row",attrs:{id:"translateForm"}},[a("div",{staticClass:"col-md-6 col-md-offset-3"},[a("form",{staticClass:"well form-inline",attrs:{id:"transForm"},on:{submit:t.formSubmit}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.textToTranslate,expression:"textToTranslate"}],staticClass:"form-control",attrs:{type:"text",placeholder:"请输入需要翻译的内容"},domProps:{value:t.textToTranslate},on:{input:function(e){e.target.composing||(t.textToTranslate=e.target.value)}}}),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.language,expression:"language"}],staticClass:"form-control",attrs:{name:"",id:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.language=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"en"}},[t._v("English")]),t._v(" "),a("option",{attrs:{value:"ru"}},[t._v("Russian")]),t._v(" "),a("option",{attrs:{value:"ko"}},[t._v("Korean")]),t._v(" "),a("option",{attrs:{value:"ja"}},[t._v("Janpenese")])]),t._v(" "),a("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"翻译"}})])])])},staticRenderFns:[]};var o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"translateOutput"}},[e("h2",[this._v(this._s(this.translatedText))])])},staticRenderFns:[]};var l={name:"app",data:function(){return{translatedText:""}},components:{translateForm:a("VU/8")({name:"translateForm",data:function(){return{textToTranslate:"",language:""}},methods:{formSubmit:function(t){this.$emit("formSubmit",this.textToTranslate,this.language),t.preventDefault()}},created:function(){this.language="en"}},s,!1,function(t){a("BRO9")},null,null).exports,translateOutput:a("VU/8")({name:"translateOutput",props:["translatedText"]},o,!1,function(t){a("NieN")},"data-v-37abc848",null).exports},methods:{translateText:function(t,e){var a=this;this.$http.get("https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180321T104122Z.6444ccd6a7f817c7.870be8592af49a50ee8f5fb768f34c735239322d&lang="+e+"&text="+t).then(function(t){a.translatedText=t.body.text[0]})}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("h1",[t._v("在线翻译")]),t._v(" "),a("h5",{staticClass:"text-muted"},[t._v("简单 / 易用  / 便捷")]),t._v(" "),a("translateForm",{on:{formSubmit:t.translateText}}),t._v(" "),a("translateOutput",{domProps:{textContent:t._s(t.translatedText)}})],1)},staticRenderFns:[]};var u=a("VU/8")(l,i,!1,function(t){a("Purz")},null,null).exports;n.a.use(r.a),n.a.config.productionTip=!1,new n.a({el:"#app",components:{App:u},template:"<App/>"})},NieN:function(t,e){},Purz:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.ff43c8d6c0f877796944.js.map