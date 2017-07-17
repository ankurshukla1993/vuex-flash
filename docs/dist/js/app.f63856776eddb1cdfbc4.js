requireMePlz([1],{261:function(t,e,a){var s=a(0)(a(43),a(281),null,null,null);t.exports=s.exports},262:function(t,e,a){var s=a(0)(a(44),a(276),null,null,null);t.exports=s.exports},263:function(t,e,a){var s=a(0)(a(45),a(271),null,null,null);t.exports=s.exports},264:function(t,e,a){var s=a(0)(a(46),a(278),null,null,null);t.exports=s.exports},265:function(t,e,a){var s=a(0)(a(47),a(272),null,null,null);t.exports=s.exports},266:function(t,e,a){var s=a(0)(a(48),a(273),null,null,null);t.exports=s.exports},267:function(t,e,a){var s=a(0)(a(49),a(277),null,null,null);t.exports=s.exports},268:function(t,e,a){var s=a(0)(a(50),a(274),null,null,null);t.exports=s.exports},269:function(t,e,a){var s=a(0)(a(51),a(279),null,null,null);t.exports=s.exports},270:function(t,e,a){var s=a(0)(a(52),a(275),null,null,null);t.exports=s.exports},271:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"stay-center"},[a("div",{staticClass:"text-center center-flash"},[a("h1",[t._v(t._s(t.message))]),t._v(" "),a("bulma-flash",{attrs:{variant:"bulma_success"}}),t._v(" "),a("br"),a("br"),t._v(" "),a("router-link",{staticClass:"btn btn-primary btn-sm back-btn",attrs:{to:"/"}},[a("i",{staticClass:"fa fa-arrow-left",attrs:{"aria-hidden":"true"}}),t._v(" Go Back\n    ")])],1),t._v(" "),a("div",{staticClass:"text-center"},[a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[a("code",{staticClass:"html"},[t._v("\n    "+t._s(t.code)+"\n    ")])])])])},staticRenderFns:[]}},272:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"stay-center"},[a("div",{staticClass:"text-center center-flash"},[a("h1",[t._v(t._s(t.message))]),t._v(" "),a("flash-message",{attrs:{variant:"grey"}}),t._v(" "),a("br"),a("br"),t._v(" "),a("router-link",{staticClass:"btn btn-primary btn-sm back-btn",attrs:{to:"/"}},[a("i",{staticClass:"fa fa-arrow-left",attrs:{"aria-hidden":"true"}}),t._v(" Go Back\n    ")])],1),t._v(" "),a("div",{staticClass:"text-center"},[a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[a("code",{staticClass:"html"},[t._v("\n    "+t._s(t.code)+"\n    ")])])])])},staticRenderFns:[]}},273:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row main-header"},[a("div",{staticClass:"container"},[a("h1",{class:["text-center","flash-heading",t.animateMe?"animated swing":""]},[t._v("\n        "+t._s(t.message)+"\n        ")]),t._v(" "),a("p",{staticClass:"subtitle text-center"},[a("i",{staticClass:"material-icons"},[t._v("flash_on")]),t._v(" "+t._s(t.subtitle)+" "),a("i",{staticClass:"material-icons"},[t._v("flash_on")]),a("br"),t._v(" "),t._m(0)])])]),t._v(" "),a("div",{staticClass:"row"},[t._m(1),t._v(" "),a("div",{staticClass:"col-md-5"},[a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[a("code",{staticClass:"javascript"},[t._v("  basic(){\n\n    this.flash({\n      message: 'Basic flash, you can close or refresh the page.',\n      variant: 'danger'\n    });\n\n    this.$router.replace('/basic');\n  }")])]),t._v(" "),a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[a("code",{staticClass:"javascript"},[t._v("  autoHide(){\n\n    this.flash({\n      message: 'Will hide in a moment',\n      variant: 'success'\n    });\n\n    this.$router.replace('/autohide');\n  }")])])]),t._v(" "),a("div",{staticClass:"text-center col-md-2"},[a("button",{staticClass:"btn btn-outline-danger btn-lg same-size normal-flash-btn",attrs:{type:"button"},on:{click:t.basic}},[t._v("\n          Basic\n        ")]),t._v(" "),a("br"),a("br"),t._v(" "),a("button",{staticClass:"btn btn-outline-success btn-lg same-size auto-flash-btn",attrs:{type:"button"},on:{click:t.autoHide}},[t._v("\n        Auto Hide\n        ")]),a("br"),a("br"),t._v(" "),a("button",{staticClass:"btn btn-outline-info btn-lg same-size important-flash-btn",attrs:{type:"button"},on:{click:t.important}},[t._v("\n        Important\n        ")]),a("br"),a("br"),t._v(" "),a("button",{staticClass:"btn btn-outline-primary btn-lg same-size multiple-flash-btn",attrs:{type:"button"},on:{click:t.multiple}},[t._v("\n        Multiple\n        ")]),a("br"),a("br")]),t._v(" "),a("div",{staticClass:"col-md-5"},[a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[a("code",{staticClass:"javascript"},[t._v("  important(){\n    this.flash({\n      message: \"You can't close me! Unless you refresh the page.\",\n      variant: 'info'\n    });\n    this.$router.replace('/important');\n  }")])]),t._v(" "),a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[a("code",{staticClass:"javascript"},[t._v("  multiple(){\n    this.flash({\n      message: 'This is success variant message',\n      variant: 'success'\n    });\n\n    this.flash({\n      message: 'This is info variant message',\n      variant: 'info'\n    });\n\n    this.flash({\n      message: 'This is danger variant message & auto hide',\n      variant: 'danger'\n    });\n    this.$router.replace('/multiple');\n  }")])])])]),t._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"text-center"},[a("h3",[t._v("Custom Variant")]),t._v(" "),a("hr"),t._v(" "),a("button",{staticClass:"btn btn-outline-primary btn-lg same-size",attrs:{type:"button"},on:{click:t.grey}},[t._v("\n            Grey\n          ")]),t._v(" "),a("br"),a("br")])]),a("br"),t._v(" "),a("div",{staticClass:"col-md-6"},[a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],staticStyle:{width:"470px",margin:"0 auto"}},[a("code",{staticClass:"javascript"},[t._v(" //store.js\n  export default new Vuex.Store({\n    //..\n    plugins: [\n      createFlashStore({\n        variants: ['grey']\n      })\n    ]\n  });")])])]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],staticStyle:{width:"470px",margin:"0 auto"}},[a("code",{staticClass:"javascript"},[t._v("\n  //css\n  .alert-grey{\n    background-color: #9e9e9e;\n    color: #fff;\n  }\n  ")])])])])]),a("br"),t._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"text-center"},[a("h3",[t._v("Custom Transition")]),t._v(" "),a("hr"),t._v(" "),a("button",{staticClass:"btn btn-outline-primary btn-lg same-size",attrs:{type:"button"},on:{click:t.customTransition}},[t._v("\n            Fade\n          ")]),a("br"),t._v(" "),a("a",{attrs:{target:"_blank",href:"https://vuejs.org/v2/guide/transitions.html#Transitioning-Single-Elements-Components"}},[t._v("\n            more\n          ")]),t._v(" "),a("br"),a("br")])]),a("br"),t._v(" "),a("div",{staticClass:"col-md-6"},[a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],staticStyle:{width:"470px",margin:"0 auto"}},[a("code",{staticClass:"javascript"},[t._v("Vue.use(VuexFlash, {\n  template: `"+t._s(t.customTransitionTemplate)+"`\n});\n")])])]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],staticStyle:{margin:"0 auto"}},[a("code",{staticClass:"javascript"},[t._v("\n  //css\n  .fade-enter-active, .fade-leave-active {\n    transition: opacity .5s\n  }\n  .fade-enter, .fade-leave-to  {\n    opacity: 0\n  }\n  ")])])]),a("br"),t._v(" "),a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"text-center"},[a("br"),t._v(" "),a("button",{staticClass:"btn btn-outline-primary btn-lg same-size",attrs:{type:"button"},on:{click:t.noTransition}},[t._v("\n  No transition\n  ")])]),a("br"),t._v(" "),a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],staticStyle:{width:"470px",margin:"0 auto"}},[a("code",{staticClass:"javascript"},[t._v("Vue.use(VuexFlash, {\n  template: `"+t._s(t.customNoTransition)+"`\n});\n")])])]),a("br"),a("br")])]),a("br"),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"text-center"},[a("h3",[t._v("Custom Templates")]),t._v(" "),a("hr"),t._v(" "),a("button",{staticClass:"btn btn-outline-primary btn-lg same-size",attrs:{type:"button"},on:{click:t.bulma}},[t._v("\n            Bulma\n          ")]),a("br"),t._v(" "),a("a",{attrs:{href:"http://bulma.io/",target:"_blank"}},[t._v("Website")])]),t._v(" "),a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],staticStyle:{width:"470px",margin:"0 auto"}},[a("code",{staticClass:"javascript"},[t._v("\n    Vue.use(VuexFlash, {\n      template: `"+t._s(t.bulmaTemplate)+"`,\n      css: ['notification'],\n      variantClass: function(){\n        return `is-${this.variant}`;\n      }\n    });\n  ")])]),a("br"),t._v(" "),a("div",{staticClass:"text-center"},[a("button",{staticClass:"btn btn-outline-primary btn-lg same-size",attrs:{type:"button"},on:{click:t.uikit}},[t._v("\n            uikit\n          ")]),a("br"),t._v(" "),a("a",{attrs:{href:"https://getuikit.com/",target:"_blank"}},[t._v("Website")])]),t._v(" "),a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],staticStyle:{width:"470px",margin:"0 auto"}},[a("code",{staticClass:"javascript"},[t._v("\n    Vue.use(VuexFlash, {\n      template: `"+t._s(t.uikitTemplate)+"`,\n      css: ['uk-alert'],\n      variantClass: function(){\n        return `uk-alert-${this.variant}`;\n      }\n    });\n  ")])]),a("br")])]),t._v(" "),a("hr"),t._v(" "),t._m(2)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticStyle:{"margin-right":"5px"},attrs:{href:"https://github.com/ahmed-dinar/vuex-flash#install",target:"_blank"}},[a("img",{attrs:{src:"https://img.shields.io/badge/docs--green.svg?style=social&maxAge=2592000",alt:"documentation"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-12"},[a("h3",{staticClass:"text-center"},[t._v("Basic Demo")]),t._v(" "),a("hr")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container footer"},[a("div",{staticClass:"text-center"},[a("p",{staticClass:"text-center"},[t._v("© Ahmed Dinar, 2017")])])])}]}},274:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"stay-center"},[a("div",{staticClass:"text-center center-flash"},[a("h1",[t._v(t._s(t.message))]),t._v(" "),a("flash-message",{attrs:{variant:"success",transitionIn:"animated swing"}}),t._v(" "),a("flash-message",{attrs:{variant:"info",transitionIn:"animated lightSpeedIn"}}),t._v(" "),a("flash-message",{attrs:{variant:"danger",autoHide:"",transitionIn:"animated flipInX",transitionOut:"animated flipOutX"}}),t._v(" "),a("br"),a("br"),t._v(" "),a("router-link",{staticClass:"btn btn-primary btn-sm back-btn",attrs:{to:"/"}},[a("i",{staticClass:"fa fa-arrow-left",attrs:{"aria-hidden":"true"}}),t._v(" Go Back\n    ")])],1),t._v(" "),a("div",{staticClass:"text-center"},[a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[a("code",{staticClass:"html"},[t._v(t._s(t.code)+"\n    ")])])])])},staticRenderFns:[]}},275:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"stay-center"},[a("div",{staticClass:"text-center center-flash"},[a("h1",[t._v(t._s(t.message))]),t._v(" "),a("uikit-flash",{attrs:{variant:"uikit_danger"}}),t._v(" "),a("br"),a("br"),t._v(" "),a("router-link",{staticClass:"btn btn-primary btn-sm back-btn",attrs:{to:"/"}},[a("i",{staticClass:"fa fa-arrow-left",attrs:{"aria-hidden":"true"}}),t._v(" Go Back\n    ")])],1),t._v(" "),a("div",{staticClass:"text-center"},[a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[a("code",{staticClass:"html"},[t._v("\n    "+t._s(t.code)+"\n    ")])])])])},staticRenderFns:[]}},276:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"stay-center"},[a("div",{staticClass:"text-center center-flash"},[a("h1",[t._v(t._s(t.message))]),t._v(" "),a("flash-message",{attrs:{variant:"danger"}}),t._v(" "),a("br"),a("br"),t._v(" "),a("router-link",{staticClass:"btn btn-primary btn-sm back-btn",attrs:{to:"/"}},[a("i",{staticClass:"fa fa-arrow-left",attrs:{"aria-hidden":"true"}}),t._v(" Go Back\n    ")])],1),t._v(" "),a("div",{staticClass:"text-center"},[a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[a("code",{staticClass:"html"},[t._v("\n    "+t._s(t.code)+"\n    ")])])])])},staticRenderFns:[]}},277:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"stay-center"},[a("div",{staticClass:"text-center center-flash"},[a("h1",[t._v(t._s(t.message))]),t._v(" "),a("flash-message",{attrs:{important:"",variant:"info",transitionIn:"animated tada"}}),t._v(" "),a("br"),a("br"),t._v(" "),a("router-link",{staticClass:"btn btn-primary btn-sm back-btn",attrs:{to:"/"}},[a("i",{staticClass:"fa fa-arrow-left",attrs:{"aria-hidden":"true"}}),t._v(" Go Back\n    ")])],1),t._v(" "),a("div",{staticClass:"text-center"},[a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[a("code",{staticClass:"html"},[t._v("\n    "+t._s(t.code)+"\n    ")])])])])},staticRenderFns:[]}},278:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"stay-center"},[a("div",{staticClass:"text-center center-flash"},[a("h1",[t._v(t._s(t.message))]),t._v(" "),a("custom-transition",{attrs:{autoHide:"",variant:"success"}}),t._v(" "),a("br"),a("br"),t._v(" "),a("router-link",{staticClass:"btn btn-primary btn-sm back-btn",attrs:{to:"/"}},[a("i",{staticClass:"fa fa-arrow-left",attrs:{"aria-hidden":"true"}}),t._v(" Go Back\n    ")])],1),t._v(" "),a("div",{staticClass:"text-center"},[a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[a("code",{staticClass:"html"},[t._v("\n    "+t._s(t.code)+"\n    ")])])])])},staticRenderFns:[]}},279:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"stay-center"},[a("div",{staticClass:"text-center center-flash"},[a("h1",[t._v(t._s(t.message))]),t._v(" "),a("no-transition",{attrs:{autoHide:"",variant:"success"}}),t._v(" "),a("br"),a("br"),t._v(" "),a("router-link",{staticClass:"btn btn-primary btn-sm back-btn",attrs:{to:"/"}},[a("i",{staticClass:"fa fa-arrow-left",attrs:{"aria-hidden":"true"}}),t._v(" Go Back\n    ")])],1),t._v(" "),a("div",{staticClass:"text-center"},[a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[a("code",{staticClass:"html"},[t._v("\n    "+t._s(t.code)+"\n    ")])])])])},staticRenderFns:[]}},280:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("a",{staticClass:"github-corner",attrs:{href:"https://github.com/ahmed-dinar/vuex-flash","aria-label":"View source on Github"}},[a("svg",{attrs:{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"}},[a("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),t._v(" "),a("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}}),t._v(" "),a("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"}})])]),t._v(" "),a("div",{staticClass:"container-fluid"},[a("router-view")],1)])},staticRenderFns:[]}},281:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"stay-center"},[a("div",{staticClass:"text-center center-flash"},[a("h1",[t._v(t._s(t.message))]),t._v(" "),a("flash-message",{attrs:{autoHide:"",variant:"success",transitionIn:"animated rubberBand",transitionOut:"animated rollOut"}}),t._v(" "),a("br"),a("br"),t._v(" "),a("router-link",{staticClass:"btn btn-primary btn-sm back-btn",attrs:{to:"/"}},[a("i",{staticClass:"fa fa-arrow-left",attrs:{"aria-hidden":"true"}}),t._v(" Go Back\n    ")])],1),t._v(" "),a("div",{staticClass:"text-center"},[a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[a("code",{staticClass:"html"},[t._v("\n    "+t._s(t.code)+"\n    ")])])])])},staticRenderFns:[]}},30:function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(9),i=s(n),r=a(282),l=s(r),c=a(260),o=s(c),u=a(266),v=s(u),m=a(262),d=s(m),h=a(261),f=s(h),p=a(267),g=s(p),_=a(268),b=s(_),C=a(263),x=s(C),y=a(270),k=s(y),j=a(265),w=s(j),F=a(264),T=s(F),$=a(269),M=s($);i.default.use(l.default);var N=new l.default({mode:"hash",routes:[{path:"/",name:"Home",component:v.default},{path:"/basic",name:"Basic",component:d.default},{path:"/autohide",name:"autohide",component:f.default},{path:"/important",name:"Important",component:g.default},{path:"/multiple",name:"Multiple",component:b.default},{path:"/bulma",name:"bulma",component:x.default},{path:"/uikit",name:"uikit",component:k.default},{path:"/grey",name:"grey",component:w.default},{path:"/transition",name:"transition",component:T.default},{path:"/notransition",name:"NoTransition",component:M.default}]});N.beforeEach(function(t,e,a){o.default.start(),a()}),N.afterEach(function(t,e){o.default.done(),o.default.remove()}),e.default=N},31:function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(54),i=s(n),r=a(9),l=s(r),c=a(284),o=s(c),u=a(17),v=a(8),m=s(v);l.default.use(o.default),e.default=new o.default.Store({plugins:[(0,u.createFlashStore)({variants:[].concat((0,i.default)(m.default.bulma.variants()),(0,i.default)(m.default.uikit.variants()),["primary","grey"])})]})},32:function(t,e){},33:function(t,e){},34:function(t,e){},35:function(t,e){},36:function(t,e){},37:function(t,e){},38:function(t,e){},40:function(t,e,a){function s(t){a(81)}var n=a(0)(a(42),a(280),s,null,null);t.exports=n.exports},41:function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}var n=a(9),i=s(n),r=a(39),l=s(r),c=a(17),o=s(c),u=a(40),v=s(u),m=a(30),d=s(m),h=a(31),f=s(h),p=a(8),g=s(p);a(35),a(32),a(34),a(38),a(36),a(33),a(37),i.default.config.productionTip=!1,i.default.use(l.default),i.default.use(o.default,{mixin:!0}),i.default.component("BulmaFlash",(0,c.FlashComponent)({template:g.default.bulma.template(),variantClass:g.default.bulma.variantClass(),css:["notification"]})),i.default.component("UikitFlash",(0,c.FlashComponent)({template:g.default.uikit.template(),variantClass:g.default.uikit.variantClass(),css:["uk-alert"]})),i.default.component("CustomTransition",(0,c.FlashComponent)({template:g.default.transition.custom})),i.default.component("NoTransition",(0,c.FlashComponent)({template:g.default.transition.none})),new i.default({el:"#app",router:d.default,store:f.default,template:"<App/>",components:{App:v.default}})},42:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app",data:function(){return{}}}},43:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{message:"Auto hide flash message",code:'<flash-message autoHide variant="success" transitionIn="animated rubberBand" transitionOut="animated rollOut"></flash-message>'}}}},44:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{message:"Simple flash message",code:'<flash-message variant="danger"></flash-message>'}}}},45:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{message:"Bulma using custom template",code:'<flash-message variant="success"></flash-message>'}}}},46:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{message:"Custom Transition Fade",code:'<flash-message autoHide variant="success"></flash-message>'}}}},47:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{message:"Custom variant",code:'<flash-message variant="grey"></flash-message>'}}}},48:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(8),n=function(t){return t&&t.__esModule?t:{default:t}}(s);e.default={data:function(){return{message:"Vuex Flash",subtitle:"Flash Message Component for Vue.js within Vuex",animateMe:!1,bulmaTemplate:n.default.bulma.template(),uikitTemplate:n.default.uikit.template(),customTransitionTemplate:n.default.transition.custom,customNoTransition:n.default.transition.none}},methods:{basic:function(){this.$store.commit("FLASH/SET_FLASH",{message:"some message",variant:"danger"}),this.$router.replace("/basic")},autoHide:function(){this.flash({message:"Will hide in a moment",variant:"success"}),this.$router.replace("/autohide")},important:function(){this.flash({message:"You can't close me! Unless you refresh the page.",variant:"info"}),this.$router.replace("/important")},multiple:function(){this.flash({message:"This is success variant message",variant:"success"}),this.flash({message:"This is info variant message",variant:"info"}),this.flash({message:"This is danger variant message & auto hide",variant:"danger"}),this.$router.replace("/multiple")},bulma:function(){this.flash({message:"Bulma success message",variant:"bulma_success"}),this.$router.replace("/bulma")},uikit:function(){this.flash({message:"Uikit example",variant:"uikit_danger"}),this.$router.replace("/uikit")},grey:function(){this.flash({message:"Custom variant Grey flash",variant:"grey"}),this.$router.replace("/grey")},customTransition:function(){this.flash({message:"Custom transition",variant:"success"}),this.$router.replace("/transition")},noTransition:function(){this.flash({message:"No transition",variant:"success"}),this.$router.replace("/notransition")}},mounted:function(){this.animateMe=!0}}},49:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{message:"Important flash message",code:'<flash-message important variant="info" transitionIn="animated tada"></flash-message>'}}}},50:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{message:"Multiple flash messages",code:'\n   <flash-message variant="success" transitionIn="animated swing"></flash-message>\n   <flash-message variant="info" transitionIn="animated lightSpeedIn"></flash-message>\n   <flash-message variant="danger" autoHide transitionIn="animated flipInX" transitionOut="animated flipOutX"></flash-message>'}}}},51:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{message:"No Transition",code:'<flash-message autoHide variant="success"></flash-message>'}}}},52:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{message:"Bulma using custom template",code:'<flash-message variant="danger"></flash-message>'}}}},8:function(t,e,a){"use strict";function s(t){return n.map(function(e){return t+"_"+e})}Object.defineProperty(e,"__esModule",{value:!0});var n=["success","warning","danger","info"];e.default={bulma:{template:function(){return'\n        <transition\n        :name="transitionName"\n        :enter-active-class="transitionIn"\n        :leave-active-class="transitionOut"\n        >\n          <div v-if="show"\n          :class="cssClasses"\n          >\n            <button v-if="!important"\n            class="delete"\n            @click.stop.prevent="closeFlash"\n            >\n            </button>\n            {{ message }}\n          </div>\n        </transition>'},variants:function(){return s("bulma")},variantClass:function(){return function(){return"is-"+this.variant.split("_")[1]}}},uikit:{template:function(){return'\n        <transition\n        :name="transitionName"\n        :enter-active-class="transitionIn"\n        :leave-active-class="transitionOut"\n        >\n\n          <div v-if="show"\n          :class="cssClasses"\n          uk-alert\n          >\n            <button v-if="!important"\n            class="uk-alert-close uk-close"\n            @click.stop.prevent="closeFlash"\n            >\n            </button>\n\n            {{ message }}\n\n          </div>\n\n        </transition>'},variants:function(){return s("uikit")},variantClass:function(){return function(){return"uk-alert-"+this.variant.split("_")[1]}}},transition:{custom:'\n      <transition name="fade">\n        <div v-if="show"\n        :class="cssClasses"\n        >\n          <button v-if="!important"\n          class="close"\n          @click.stop.prevent="closeFlash"\n          >\n            <span aria-hidden="true">&times;</span>\n          </button>\n        {{ message }}\n        </div>\n      </transition>',none:'\n        <div v-if="show"\n        :class="cssClasses"\n        >\n          <button v-if="!important"\n          class="close"\n          @click.stop.prevent="closeFlash"\n          >\n            <span aria-hidden="true">&times;</span>\n          </button>\n        {{ message }}\n        </div>'}}},81:function(t,e){}},[41]);
//# sourceMappingURL=app.f63856776eddb1cdfbc4.js.map