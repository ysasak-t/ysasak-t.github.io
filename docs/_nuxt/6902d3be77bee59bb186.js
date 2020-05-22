(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{156:function(e,t,n){"use strict";n.r(t),n.d(t,"createDecorator",(function(){return d})),n.d(t,"mixins",(function(){return v}));var r=n(1),o="undefined"!=typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys;function c(e,t,n){(n?Reflect.getOwnMetadataKeys(t,n):Reflect.getOwnMetadataKeys(t)).forEach((function(r){var o=n?Reflect.getOwnMetadata(r,t,n):Reflect.getOwnMetadata(r,t);n?Reflect.defineMetadata(r,o,e,n):Reflect.defineMetadata(r,o,e)}))}var f={__proto__:[]}instanceof Array;function d(e){return function(t,n,r){var o="function"==typeof t?t:t.constructor;o.__decorators__||(o.__decorators__=[]),"number"!=typeof r&&(r=void 0),o.__decorators__.push((function(t){return e(t,n,r)}))}}function v(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return r.default.extend({mixins:e})}var l=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function m(e,t){void 0===t&&(t={}),t.name=t.name||e._componentTag||e.name;var n=e.prototype;Object.getOwnPropertyNames(n).forEach((function(e){if("constructor"!==e)if(l.indexOf(e)>-1)t[e]=n[e];else{var r=Object.getOwnPropertyDescriptor(n,e);void 0!==r.value?"function"==typeof r.value?(t.methods||(t.methods={}))[e]=r.value:(t.mixins||(t.mixins=[])).push({data:function(){var t;return(t={})[e]=r.value,t}}):(r.get||r.set)&&((t.computed||(t.computed={}))[e]={get:r.get,set:r.set})}})),(t.mixins||(t.mixins=[])).push({data:function(){return function(e,t){var n=t.prototype._init;t.prototype._init=function(){var t=this,n=Object.getOwnPropertyNames(e);if(e.$options.props)for(var r in e.$options.props)e.hasOwnProperty(r)||n.push(r);n.forEach((function(n){"_"!==n.charAt(0)&&Object.defineProperty(t,n,{get:function(){return e[n]},set:function(t){e[n]=t},configurable:!0})}))};var data=new t;t.prototype._init=n;var r={};return Object.keys(data).forEach((function(e){void 0!==data[e]&&(r[e]=data[e])})),r}(this,e)}});var d=e.__decorators__;d&&(d.forEach((function(e){return e(t)})),delete e.__decorators__);var v,m,h=Object.getPrototypeOf(e.prototype),O=h instanceof r.default?h.constructor:r.default,j=O.extend(t);return function(e,t,n){Object.getOwnPropertyNames(t).forEach((function(r){if(!y[r]){var o=Object.getOwnPropertyDescriptor(e,r);if(!o||o.configurable){var c,d,v=Object.getOwnPropertyDescriptor(t,r);if(!f){if("cid"===r)return;var l=Object.getOwnPropertyDescriptor(n,r);if(c=v.value,d=typeof c,null!=c&&("object"===d||"function"===d)&&l&&l.value===v.value)return}0,Object.defineProperty(e,r,v)}}}))}(j,e,O),o&&(c(v=j,m=e),Object.getOwnPropertyNames(m.prototype).forEach((function(e){c(v.prototype,m.prototype,e)})),Object.getOwnPropertyNames(m).forEach((function(e){c(v,m,e)}))),j}var y={prototype:!0,arguments:!0,callee:!0,caller:!0};function h(e){return"function"==typeof e?m(e):function(t){return m(t,e)}}h.registerHooks=function(e){l.push.apply(l,e)},t.default=h},157:function(e,t,n){!function(e,t,n,r,o){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t;var c="default"in r?r.default:r;c.registerHooks(["beforeRouteEnter","beforeRouteUpdate","beforeRouteLeave","asyncData","fetch","head","key","layout","loading","middleware","scrollToTop","transition","validate","watchQuery","meta"]);var f=/\B([A-Z])/g,d=function(e){return e.replace(f,"-$1").toLowerCase()};e.Vue=t,Object.defineProperty(e,"Emit",{enumerable:!0,get:function(){return n.Emit}}),Object.defineProperty(e,"Inject",{enumerable:!0,get:function(){return n.Inject}}),Object.defineProperty(e,"Model",{enumerable:!0,get:function(){return n.Model}}),Object.defineProperty(e,"Prop",{enumerable:!0,get:function(){return n.Prop}}),Object.defineProperty(e,"PropSync",{enumerable:!0,get:function(){return n.PropSync}}),Object.defineProperty(e,"Provide",{enumerable:!0,get:function(){return n.Provide}}),Object.defineProperty(e,"Ref",{enumerable:!0,get:function(){return n.Ref}}),Object.defineProperty(e,"Watch",{enumerable:!0,get:function(){return n.Watch}}),e.Component=c,Object.defineProperty(e,"mixins",{enumerable:!0,get:function(){return r.mixins}}),Object.defineProperty(e,"Action",{enumerable:!0,get:function(){return o.Action}}),Object.defineProperty(e,"Getter",{enumerable:!0,get:function(){return o.Getter}}),Object.defineProperty(e,"Mutation",{enumerable:!0,get:function(){return o.Mutation}}),Object.defineProperty(e,"State",{enumerable:!0,get:function(){return o.State}}),Object.defineProperty(e,"namespace",{enumerable:!0,get:function(){return o.namespace}}),e.NextTick=function(e){return function(t,n,r){var o=r.value;r.value=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];if(!1!==o.apply(this,t)){if("function"!=typeof this[e])throw new TypeError("must be a method name");this.$nextTick(this[e])}}}},e.Off=function(e,t){return function(n,r,o){r=d(r);var c=o.value;o.value=function(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];if(!1!==c.apply(this,n))if(t){if("function"!=typeof this[t])throw new TypeError("must be a method name");this.$off(e||r,this[t])}else e?this.$off(e||r):this.$off()}}},e.On=function(e){return r.createDecorator((function(t,n){var r=d(n);"function"!=typeof t.created&&(t.created=function(){});var o=t.created;t.created=function(){o(),void 0!==t.methods&&this.$on(e||r,t.methods[n])}}))},e.Once=function(e){return r.createDecorator((function(t,n){var r=d(n);"function"!=typeof t.created&&(t.created=function(){});var o=t.created;t.created=function(){o(),void 0!==t.methods&&this.$once(e||r,t.methods[n])}}))},Object.defineProperty(e,"__esModule",{value:!0})}(t,n(1),n(158),n(156),n(159))},158:function(e,t,n){"use strict";n.r(t),n.d(t,"Inject",(function(){return f})),n.d(t,"InjectReactive",(function(){return d})),n.d(t,"Provide",(function(){return v})),n.d(t,"ProvideReactive",(function(){return l})),n.d(t,"Model",(function(){return h})),n.d(t,"Prop",(function(){return O})),n.d(t,"PropSync",(function(){return j})),n.d(t,"Watch",(function(){return _})),n.d(t,"Emit",(function(){return R})),n.d(t,"Ref",(function(){return x}));var r=n(1);n.d(t,"Vue",(function(){return r.default}));var o=n(156);n.d(t,"Component",(function(){return o.default})),n.d(t,"Mixins",(function(){return o.mixins}));var c="__reactiveInject__";function f(e){return Object(o.createDecorator)((function(t,n){void 0===t.inject&&(t.inject={}),Array.isArray(t.inject)||(t.inject[n]=e||n)}))}function d(e){return Object(o.createDecorator)((function(t,n){if(void 0===t.inject&&(t.inject={}),!Array.isArray(t.inject)){var r=e?e.from||e:n,o=!!e&&e.default||void 0;t.computed||(t.computed={}),t.computed[n]=function(){var e=this[c];return e?e[r]:o},t.inject[c]=c}}))}function v(e){return Object(o.createDecorator)((function(t,n){var r=t.provide;if("function"!=typeof r||!r.managed){var o=t.provide;(r=t.provide=function(){var e=Object.create(("function"==typeof o?o.call(this):o)||null);for(var i in r.managed)e[r.managed[i]]=this[i];return e}).managed={}}r.managed[n]=e||n}))}function l(e){return Object(o.createDecorator)((function(t,n){var r=t.provide;if(Array.isArray(t.inject)||(t.inject=t.inject||{},t.inject[c]={from:c,default:{}}),"function"!=typeof r||!r.managedReactive){var o=t.provide;(r=t.provide=function(){var e=this,t="function"==typeof o?o.call(this):o;(t=Object.create(t||null))[c]=this[c]||{};var n=function(i){t[r.managedReactive[i]]=f[i],Object.defineProperty(t[c],r.managedReactive[i],{enumerable:!0,get:function(){return e[i]}})},f=this;for(var i in r.managedReactive)n(i);return t}).managedReactive={}}r.managedReactive[n]=e||n}))}var m="undefined"!=typeof Reflect&&void 0!==Reflect.getMetadata;function y(e,t,n){m&&(Array.isArray(e)||"function"==typeof e||void 0!==e.type||(e.type=Reflect.getMetadata("design:type",t,n)))}function h(e,t){return void 0===t&&(t={}),function(n,r){y(t,n,r),Object(o.createDecorator)((function(n,r){(n.props||(n.props={}))[r]=t,n.model={prop:r,event:e||r}}))(n,r)}}function O(e){return void 0===e&&(e={}),function(t,n){y(e,t,n),Object(o.createDecorator)((function(t,n){(t.props||(t.props={}))[n]=e}))(t,n)}}function j(e,t){return void 0===t&&(t={}),function(n,r){y(t,n,r),Object(o.createDecorator)((function(n,r){(n.props||(n.props={}))[e]=t,(n.computed||(n.computed={}))[r]={get:function(){return this[e]},set:function(t){this.$emit("update:"+e,t)}}}))(n,r)}}function _(path,e){void 0===e&&(e={});var t=e.deep,n=void 0!==t&&t,r=e.immediate,c=void 0!==r&&r;return Object(o.createDecorator)((function(e,t){"object"!=typeof e.watch&&(e.watch=Object.create(null));var r=e.watch;"object"!=typeof r[path]||Array.isArray(r[path])?void 0===r[path]&&(r[path]=[]):r[path]=[r[path]],r[path].push({handler:t,deep:n,immediate:c})}))}var P=/\B([A-Z])/g,w=function(e){return e.replace(P,"-$1").toLowerCase()};function R(e){return function(t,n,r){n=w(n);var o=r.value;r.value=function(){for(var t=this,r=[],c=0;c<arguments.length;c++)r[c]=arguments[c];var f=function(o){void 0!==o&&r.unshift(o),t.$emit.apply(t,[e||n].concat(r))},d=o.apply(this,r);return M(d)?d.then((function(e){f(e)})):f(d),d}}}function x(e){return Object(o.createDecorator)((function(t,n){t.computed=t.computed||{},t.computed[n]={cache:!1,get:function(){return this.$refs[e||n]}}}))}function M(e){return e instanceof Promise||e&&"function"==typeof e.then}},159:function(e,t,n){"use strict";n.r(t);var r=n(156),o=n(19),c=m("computed",o.e),f=m("computed",o.c),d=m("methods",o.b),v=m("methods",o.d);function l(e,t){function n(t){return function(a,b){if("string"==typeof b){var n=b,r=a;return t(n,{namespace:e})(r,n)}var o=a,c=function(a,b){var e={};return[a,b].forEach((function(t){Object.keys(t).forEach((function(n){e[n]=t[n]}))})),e}(b||{},{namespace:e});return t(o,c)}}return t?(console.warn("[vuex-class] passing the 2nd argument to `namespace` function is deprecated. pass only namespace string instead."),n(t)):{State:n(c),Getter:n(f),Mutation:n(v),Action:n(d)}}function m(e,t){function n(map,n){return Object(r.createDecorator)((function(r,o){r[e]||(r[e]={});var c,f=((c={})[o]=map,c);r[e][o]=void 0!==n?t(n,f)[o]:t(f)[o]}))}return function(a,b){if("string"==typeof b){var e=b,t=a;return n(e,void 0)(t,e)}return n(a,function(e){var t=e&&e.namespace;if("string"!=typeof t)return;if("/"!==t[t.length-1])return t+"/";return t}(b))}}n.d(t,"State",(function(){return c})),n.d(t,"Getter",(function(){return f})),n.d(t,"Action",(function(){return d})),n.d(t,"Mutation",(function(){return v})),n.d(t,"namespace",(function(){return l}))},163:function(e,t,n){var content=n(171);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(54).default)("72174c89",content,!0,{sourceMap:!1})},170:function(e,t,n){"use strict";var r=n(163);n.n(r).a},171:function(e,t,n){(e.exports=n(53)(!1)).push([e.i,".container[data-v-bd882724]{max-width:800px;margin:0 auto}",""])},176:function(e,t,n){"use strict";n.r(t);var r=n(74),o=n(78),c=n(76),f=n(75),d=n(77),v=n(55),l=n(157),m=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"head",value:function(){return{title:"プライバシーポリシー - 今日の1枚"}}}]),t}(l.Vue),y=m=Object(v.a)([l.Component],m),h=(n(170),n(18)),component=Object(h.a)(y,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",[n("h1",[e._v("プライバシーポリシー")]),e._v(" "),n("p",{staticStyle:{"text-align":"right"}},[e._v("制定日：2020年5月22日")]),e._v(" "),n("p",[e._v("\n      今日の1枚（以下「本アプリ」という）の利用者に関する情報の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」という）を定めます。\n    ")]),e._v(" "),n("h2",[e._v("情報を取得するアプリ提供者")]),e._v(" "),n("p",[e._v("Yuya Sasaki")]),e._v(" "),n("h2",[e._v("取得する情報と目的について")]),e._v("\n    本アプリでは利便性向上のため、細心の注意を払い、匿名で個人を特定できない範囲で次のような情報を取得し、アクセス解析をしております。\n    "),e._m(0),e._v(" "),n("nuxt-link",{attrs:{to:"/supports/photocal/",exact:""}},[e._v("お問い合わせはこちら")])],1)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("本アプリの起動回数・使用率")]),this._v(" "),t("li",[this._v("本アプリのクラッシュ数")])])}],!1,null,"bd882724",null);t.default=component.exports}}]);