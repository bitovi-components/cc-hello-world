/*[traceur-runtime]*/
this._System=this.System,function(t){"use strict";function e(t){return{configurable:!0,enumerable:!1,value:t,writable:!0}}function r(){return"__$"+Math.floor(1e9*Math.random())+"$"+ ++U+"$__"}function n(){var t=r();return B[t]=!0,t}function i(t){return"object"==typeof t&&t instanceof a}function o(t){return i(t)?"symbol":typeof t}function u(t){var e=new a(t);if(!(this instanceof u))return e;throw new TypeError("Symbol cannot be new'ed")}function a(t){var e=r();T(this,W,{value:this}),T(this,z,{value:e}),T(this,V,{value:t}),s(this),K[e]=this}function c(t){var e=t[L];return e&&e.self===t?e:F(t)?(Y.hash.value=X++,Y.self.value=t,Q.value=x(null,Y),T(t,L,Q),Q.value):void 0}function s(t){return c(t),$.apply(this,arguments)}function l(t){return c(t),A.apply(this,arguments)}function f(t){return c(t),G.apply(this,arguments)}function h(t){return i(t)?t[z]:t}function b(t){for(var e=[],r=M(t),n=0;n<r.length;n++){var i=r[n];K[i]||B[i]||e.push(i)}return e}function p(t,e){return k(t,h(e))}function m(t){for(var e=[],r=M(t),n=0;n<r.length;n++){var i=K[r[n]];i&&e.push(i)}return e}function v(t){return C.call(this,h(t))}function y(e){return t.traceur&&t.traceur.options[e]}function g(t,e,r){var n,o;return i(e)&&(n=e,e=e[z]),t[e]=r,n&&(o=k(t,e))&&T(t,e,{enumerable:!1}),r}function d(t,e,r){return i(e)&&(r.enumerable&&(r=x(r,{enumerable:{value:!1}})),e=e[z]),T(t,e,r),t}function j(t){T(t,"defineProperty",{value:d}),T(t,"getOwnPropertyNames",{value:b}),T(t,"getOwnPropertyDescriptor",{value:p}),T(t.prototype,"hasOwnProperty",{value:v}),T(t,"freeze",{value:s}),T(t,"preventExtensions",{value:l}),T(t,"seal",{value:f}),t.getOwnPropertySymbols=m}function O(t){for(var e=1;e<arguments.length;e++)for(var r=M(arguments[e]),n=0;n<r.length;n++){var i=r[n];B[i]||!function(e,r){T(t,r,{get:function(){return e[r]},enumerable:!0})}(arguments[e],r[n])}return t}function w(t){return null!=t&&("object"==typeof t||"function"==typeof t)}function S(t){if(null==t)throw P();return E(t)}function _(t){if(null==t)throw new TypeError("Value cannot be converted to an Object");return t}function R(t){t.Symbol=u,t.Reflect=t.Reflect||{},t.Reflect.global=t.Reflect.global||t,j(t.Object)}if(!t.$traceurRuntime){var E=Object,P=TypeError,x=E.create,I=E.defineProperties,T=E.defineProperty,$=E.freeze,k=E.getOwnPropertyDescriptor,M=E.getOwnPropertyNames,N=E.keys,C=E.prototype.hasOwnProperty,A=(E.prototype.toString,Object.preventExtensions),G=Object.seal,F=Object.isExtensible,H={"void":function(){},any:function(){},string:function(){},number:function(){},"boolean":function(){}},D=e,U=0,z=r(),V=r(),W=r(),K=x(null),B=x(null);T(u.prototype,"constructor",e(u)),T(u.prototype,"toString",D(function(){var t=this[W];if(!y("symbols"))return t[z];if(!t)throw TypeError("Conversion from symbol to string");var e=t[V];return void 0===e&&(e=""),"Symbol("+e+")"})),T(u.prototype,"valueOf",D(function(){var t=this[W];if(!t)throw TypeError("Conversion from symbol to string");return y("symbols")?t:t[z]})),T(a.prototype,"constructor",e(u)),T(a.prototype,"toString",{value:u.prototype.toString,enumerable:!1}),T(a.prototype,"valueOf",{value:u.prototype.valueOf,enumerable:!1});var L=n(),Q={value:void 0},Y={hash:{value:void 0},self:{value:void 0}},X=0;u.iterator=u(),s(a.prototype),R(t),t.$traceurRuntime={createPrivateName:n,exportStar:O,getOwnHashObject:c,privateNames:B,setProperty:g,setupGlobals:R,toObject:S,isObject:w,toProperty:h,type:H,"typeof":o,checkObjectCoercible:_,hasOwnProperty:function(t,e){return v.call(t,e)},defineProperties:I,defineProperty:T,getOwnPropertyDescriptor:k,getOwnPropertyNames:M,keys:N}}}("undefined"!=typeof global?global:this),function(){"use strict";function t(){for(var t,e=[],r=0,n=0;n<arguments.length;n++){var i=$traceurRuntime.checkObjectCoercible(arguments[n]);if("function"!=typeof i[$traceurRuntime.toProperty(Symbol.iterator)])throw new TypeError("Cannot spread non-iterable object.");for(var o=i[$traceurRuntime.toProperty(Symbol.iterator)]();!(t=o.next()).done;)e[r++]=t.value}return e}$traceurRuntime.spread=t}(),function(){"use strict";function t(t,e){var r=m(t);do{var n=b(r,e);if(n)return n;r=m(r)}while(r);return void 0}function e(t,e,n,i){return r(t,e,n).apply(t,i)}function r(e,r,n){var i=t(r,n);return i?i.get?i.get.call(e):i.value:void 0}function n(e,r,n,i){var o=t(r,n);if(o&&o.set)return o.set.call(e,i),i;throw s("super has no setter '"+n+"'.")}function i(t){for(var e,r={},n=p(t),i=0;i<n.length;i++){var e=n[i];r[e]=b(t,e)}return r}function o(t,e,r,n){return h(e,"constructor",{value:t,configurable:!0,enumerable:!1,writable:!0}),arguments.length>3?("function"==typeof n&&(t.__proto__=n),t.prototype=l(u(n),i(e))):t.prototype=e,h(t,"prototype",{configurable:!1,writable:!1}),f(t,i(r))}function u(t){if("function"==typeof t){var e=t.prototype;if(c(e)===e||null===e)return t.prototype;throw new s("super prototype must be an Object or null")}if(null===t)return null;throw new s("Super expression must either be null or a function, not "+typeof t+".")}function a(t,r,n){null!==m(r)&&e(t,r,"constructor",n)}var c=Object,s=TypeError,l=c.create,f=$traceurRuntime.defineProperties,h=$traceurRuntime.defineProperty,b=$traceurRuntime.getOwnPropertyDescriptor,p=$traceurRuntime.getOwnPropertyNames,m=Object.getPrototypeOf;$traceurRuntime.createClass=o,$traceurRuntime.defaultSuperCall=a,$traceurRuntime.superCall=e,$traceurRuntime.superGet=r,$traceurRuntime.superSet=n}(),function(){"use strict";function t(t){return{configurable:!0,enumerable:!1,value:t,writable:!0}}function e(t){return new Error("Traceur compiler bug: invalid state in state machine: "+t)}function r(){this.state=0,this.GState=y,this.storedException=void 0,this.finallyFallThrough=void 0,this.sent_=void 0,this.returnValue=void 0,this.tryStack_=[]}function n(t,e,r,n){switch(t.GState){case g:throw new Error('"'+r+'" on executing generator');case j:if("next"==r)return{value:void 0,done:!0};throw n;case y:if("throw"===r)throw t.GState=j,n;if(void 0!==n)throw v("Sent value to newborn generator");case d:t.GState=g,t.action=r,t.sent=n;var i=e(t),o=i===t;return o&&(i=t.returnValue),t.GState=o?j:d,{value:i,done:o}}}function i(){}function o(){}function u(t,e,n){var i=l(t,n),o=new r,u=m(e.prototype);return u[S]=o,u[_]=i,u}function a(t){return t.prototype=m(o.prototype),t.__proto__=o,t}function c(){r.call(this),this.err=void 0;var t=this;t.result=new Promise(function(e,r){t.resolve=e,t.reject=r})}function s(t,e){var r=l(t,e),n=new c;return n.createCallback=function(t){return function(e){n.state=t,n.value=e,r(n)}},n.errback=function(t){f(n,t),r(n)},r(n),n.result}function l(t,e){return function(r){for(;;)try{return t.call(e,r)}catch(n){f(r,n)}}}function f(t,e){t.storedException=e;var r=t.tryStack_[t.tryStack_.length-1];return r?(t.state=void 0!==r["catch"]?r["catch"]:r["finally"],void(void 0!==r.finallyFallThrough&&(t.finallyFallThrough=r.finallyFallThrough))):void t.handleException(e)}var h=$traceurRuntime.createPrivateName,b=$traceurRuntime.defineProperties,p=$traceurRuntime.defineProperty,m=Object.create,v=TypeError,y=0,g=1,d=2,j=3,O=-2,w=-3;r.prototype={pushTry:function(t,e){if(null!==e){for(var r=null,n=this.tryStack_.length-1;n>=0;n--)if(void 0!==this.tryStack_[n]["catch"]){r=this.tryStack_[n]["catch"];break}null===r&&(r=w),this.tryStack_.push({"finally":e,finallyFallThrough:r})}null!==t&&this.tryStack_.push({"catch":t})},popTry:function(){this.tryStack_.pop()},get sent(){return this.maybeThrow(),this.sent_},set sent(t){this.sent_=t},get sentIgnoreThrow(){return this.sent_},maybeThrow:function(){if("throw"===this.action)throw this.action="next",this.sent_},end:function(){switch(this.state){case O:return this;case w:throw this.storedException;default:throw e(this.state)}},handleException:function(t){throw this.GState=j,this.state=O,t}};var S=h(),_=h();i.prototype=o,p(o,"constructor",t(i)),o.prototype={constructor:o,next:function(t){return n(this[S],this[_],"next",t)},"throw":function(t){return n(this[S],this[_],"throw",t)}},b(o.prototype,{constructor:{enumerable:!1},next:{enumerable:!1},"throw":{enumerable:!1}}),Object.defineProperty(o.prototype,Symbol.iterator,t(function(){return this})),c.prototype=m(r.prototype),c.prototype.end=function(){switch(this.state){case O:this.resolve(this.returnValue);break;case w:this.reject(this.storedException);break;default:this.reject(e(this.state))}},c.prototype.handleException=function(){this.state=w},$traceurRuntime.asyncWrap=s,$traceurRuntime.initGeneratorFunction=a,$traceurRuntime.createGeneratorInstance=u}(),function(){function t(t,e,r,n,i,o,u){var a=[];return t&&a.push(t,":"),r&&(a.push("//"),e&&a.push(e,"@"),a.push(r),n&&a.push(":",n)),i&&a.push(i),o&&a.push("?",o),u&&a.push("#",u),a.join("")}function e(t){return t.match(a)}function r(t){if("/"===t)return"/";for(var e="/"===t[0]?"/":"",r="/"===t.slice(-1)?"/":"",n=t.split("/"),i=[],o=0,u=0;u<n.length;u++){var a=n[u];switch(a){case"":case".":break;case"..":i.length?i.pop():o++;break;default:i.push(a)}}if(!e){for(;o-->0;)i.unshift("..");0===i.length&&i.push(".")}return e+i.join("/")+r}function n(e){var n=e[c.PATH]||"";return n=r(n),e[c.PATH]=n,t(e[c.SCHEME],e[c.USER_INFO],e[c.DOMAIN],e[c.PORT],e[c.PATH],e[c.QUERY_DATA],e[c.FRAGMENT])}function i(t){var r=e(t);return n(r)}function o(t,r){var i=e(r),o=e(t);if(i[c.SCHEME])return n(i);i[c.SCHEME]=o[c.SCHEME];for(var u=c.SCHEME;u<=c.PORT;u++)i[u]||(i[u]=o[u]);if("/"==i[c.PATH][0])return n(i);var a=o[c.PATH],s=a.lastIndexOf("/");return a=a.slice(0,s+1)+i[c.PATH],i[c.PATH]=a,n(i)}function u(t){if(!t)return!1;if("/"===t[0])return!0;var r=e(t);return r[c.SCHEME]?!0:!1}var a=new RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"),c={SCHEME:1,USER_INFO:2,DOMAIN:3,PORT:4,PATH:5,QUERY_DATA:6,FRAGMENT:7};$traceurRuntime.canonicalizeUrl=i,$traceurRuntime.isAbsolute=u,$traceurRuntime.removeDotSegments=r,$traceurRuntime.resolveUrl=o}(),function(t){"use strict";function e(t){if(t){var e=m.normalize(t);return c[e]}}function r(t){var e=arguments[1],r=Object.create(null);return Object.getOwnPropertyNames(t).forEach(function(n){var i,o;if(e===p){var u=Object.getOwnPropertyDescriptor(t,n);u.get&&(i=u.get)}i||(o=t[n],i=function(){return o}),Object.defineProperty(r,n,{get:i,enumerable:!0})}),Object.preventExtensions(r),r}var n,i=$traceurRuntime,o=i.canonicalizeUrl,u=i.resolveUrl,a=i.isAbsolute,c=Object.create(null);n=t.location&&t.location.href?u(t.location.href,"./"):"";var s=function(t,e){this.url=t,this.value_=e};$traceurRuntime.createClass(s,{},{});var l=function(t,e){this.message=this.constructor.name+(e?": '"+e+"'":"")+" in "+t};$traceurRuntime.createClass(l,{loadedBy:function(t){this.message+="\n loaded by "+t}},{},Error);var f=function(t,e){$traceurRuntime.superCall(this,h.prototype,"constructor",[t,null]),this.func=e},h=f;$traceurRuntime.createClass(f,{getUncoatedModule:function(){if(this.value_)return this.value_;try{return this.value_=this.func.call(t)}catch(e){if(e instanceof l)throw e.loadedBy(this.url),e;throw new l(this.url,e)}}},{},s);var b=Object.create(null),p={},m={normalize:function(t,e){if("string"!=typeof t)throw new TypeError("module name must be a string, not "+typeof t);if(a(t))return o(t);if(/[^\.]\/\.\.\//.test(t))throw new Error("module name embeds /../: "+t);return"."===t[0]&&e?u(e,t):o(t)},get:function(t){var n=e(t);if(!n)return void 0;var i=b[n.url];return i?i:(i=r(n.getUncoatedModule(),p),b[n.url]=i)},set:function(t,e){t=String(t),c[t]=new f(t,function(){return e}),b[t]=e},get baseURL(){return n},set baseURL(t){n=String(t)},registerModule:function(t,e){var r=m.normalize(t);if(c[r])throw new Error("duplicate module named "+r);c[r]=new f(r,e)},bundleStore:Object.create(null),register:function(t,e,r){e&&(e.length||r.length)?this.bundleStore[t]={deps:e,execute:function(){var t=arguments,n={};e.forEach(function(e,r){return n[e]=t[r]});var i=r.call(this,n);return i.execute.call(this),i.exports}}:this.registerModule(t,r)},getAnonymousModule:function(e){return new r(e.call(t),p)},getForTesting:function(t){var e=this;return this.testingPrefix_||Object.keys(b).some(function(t){var r=/(traceur@[^\/]*\/)/.exec(t);return r?(e.testingPrefix_=r[1],!0):void 0}),this.get(this.testingPrefix_+t)}};m.set("@traceur/src/runtime/ModuleStore",new r({ModuleStore:m}));var v=$traceurRuntime.setupGlobals;$traceurRuntime.setupGlobals=function(t){v(t)},$traceurRuntime.ModuleStore=m,t.System={register:m.register.bind(m),get:m.get,set:m.set,normalize:m.normalize},$traceurRuntime.getModuleImpl=function(t){var r=e(t);return r&&r.getUncoatedModule()}}("undefined"!=typeof global?global:this),System.register("traceur-runtime@0.0.58/src/runtime/polyfills/utils",[],function(){"use strict";function t(t){return t>>>0}function e(t){return t&&("object"==typeof t||"function"==typeof t)}function r(t){return"function"==typeof t}function n(t){return"number"==typeof t}function i(t){return t=+t,j(t)?0:0!==t&&d(t)?t>0?g(t):y(t):t}function o(t){var e=i(t);return 0>e?0:w(e,_)}function u(t){return e(t)?t[Symbol.iterator]:void 0}function a(t){return r(t)}function c(t,e){return{value:t,done:e}}function s(t,e,r){e in t||Object.defineProperty(t,e,r)}function l(t,e,r){s(t,e,{value:r,configurable:!0,enumerable:!1,writable:!0})}function f(t,e,r){s(t,e,{value:r,configurable:!1,enumerable:!1,writable:!1})}function h(t,e){for(var r=0;r<e.length;r+=2){var n=e[r],i=e[r+1];l(t,n,i)}}function b(t,e){for(var r=0;r<e.length;r+=2){var n=e[r],i=e[r+1];f(t,n,i)}}function p(t,e,r){r&&r.iterator&&!t[r.iterator]&&(t["@@iterator"]&&(e=t["@@iterator"]),Object.defineProperty(t,r.iterator,{value:e,configurable:!0,enumerable:!1,writable:!0}))}function m(t){R.push(t)}function v(t){R.forEach(function(e){return e(t)})}var y=Math.ceil,g=Math.floor,d=isFinite,j=isNaN,O=Math.pow,w=Math.min,S=$traceurRuntime.toObject,_=O(2,53)-1,R=[];return{get toObject(){return S},get toUint32(){return t},get isObject(){return e},get isCallable(){return r},get isNumber(){return n},get toInteger(){return i},get toLength(){return o},get checkIterable(){return u},get isConstructor(){return a},get createIteratorResultObject(){return c},get maybeDefine(){return s},get maybeDefineMethod(){return l},get maybeDefineConst(){return f},get maybeAddFunctions(){return h},get maybeAddConsts(){return b},get maybeAddIterator(){return p},get registerPolyfill(){return m},get polyfillAll(){return v}}}),System.register("traceur-runtime@0.0.58/src/runtime/polyfills/Map",[],function(){"use strict";function t(t,e){if(i(e)){var r=a(e);return r&&t.objectIndex_[r.hash]}return"string"==typeof e?t.stringIndex_[e]:t.primitiveIndex_[e]}function e(t){t.entries_=[],t.objectIndex_=Object.create(null),t.stringIndex_=Object.create(null),t.primitiveIndex_=Object.create(null),t.deletedCount_=0}function r(t){var e=t,r=e.Object,n=e.Symbol;t.Map||(t.Map=l);var i=t.Map.prototype;i.entries&&(o(i,i.entries,n),o(r.getPrototypeOf((new t.Map).entries()),function(){return this},n))}var n=System.get("traceur-runtime@0.0.58/src/runtime/polyfills/utils"),i=n.isObject,o=n.maybeAddIterator,u=n.registerPolyfill,a=$traceurRuntime.getOwnHashObject,c=Object.prototype.hasOwnProperty,s={},l=function(){var t=arguments[0];if(!i(this))throw new TypeError("Map called on incompatible type");if(c.call(this,"entries_"))throw new TypeError("Map can not be reentrantly initialised");if(e(this),null!==t&&void 0!==t)for(var r,n=t[Symbol.iterator]();!(r=n.next()).done;){var o=r.value,u=o[0],a=o[1];this.set(u,a)}};return $traceurRuntime.createClass(l,{get size(){return this.entries_.length/2-this.deletedCount_},get:function(e){var r=t(this,e);return void 0!==r?this.entries_[r+1]:void 0},set:function(e,r){var n=i(e),o="string"==typeof e,u=t(this,e);if(void 0!==u)this.entries_[u+1]=r;else if(u=this.entries_.length,this.entries_[u]=e,this.entries_[u+1]=r,n){var c=a(e),s=c.hash;this.objectIndex_[s]=u}else o?this.stringIndex_[e]=u:this.primitiveIndex_[e]=u;return this},has:function(e){return void 0!==t(this,e)},"delete":function(t){var e,r,n=i(t),o="string"==typeof t;if(n){var u=a(t);u&&(e=this.objectIndex_[r=u.hash],delete this.objectIndex_[r])}else o?(e=this.stringIndex_[t],delete this.stringIndex_[t]):(e=this.primitiveIndex_[t],delete this.primitiveIndex_[t]);void 0!==e&&(this.entries_[e]=s,this.entries_[e+1]=void 0,this.deletedCount_++)},clear:function(){e(this)},forEach:function(t){for(var e=arguments[1],r=0,n=this.entries_.length;n>r;r+=2){var i=this.entries_[r],o=this.entries_[r+1];i!==s&&t.call(e,o,i,this)}},entries:$traceurRuntime.initGeneratorFunction(function f(){var t,e,r,n;return $traceurRuntime.createGeneratorInstance(function(i){for(;;)switch(i.state){case 0:t=0,e=this.entries_.length,i.state=12;break;case 12:i.state=e>t?8:-2;break;case 4:t+=2,i.state=12;break;case 8:r=this.entries_[t],n=this.entries_[t+1],i.state=9;break;case 9:i.state=r===s?4:6;break;case 6:return i.state=2,[r,n];case 2:i.maybeThrow(),i.state=4;break;default:return i.end()}},f,this)}),keys:$traceurRuntime.initGeneratorFunction(function h(){var t,e,r,n;return $traceurRuntime.createGeneratorInstance(function(i){for(;;)switch(i.state){case 0:t=0,e=this.entries_.length,i.state=12;break;case 12:i.state=e>t?8:-2;break;case 4:t+=2,i.state=12;break;case 8:r=this.entries_[t],n=this.entries_[t+1],i.state=9;break;case 9:i.state=r===s?4:6;break;case 6:return i.state=2,r;case 2:i.maybeThrow(),i.state=4;break;default:return i.end()}},h,this)}),values:$traceurRuntime.initGeneratorFunction(function b(){var t,e,r,n;return $traceurRuntime.createGeneratorInstance(function(i){for(;;)switch(i.state){case 0:t=0,e=this.entries_.length,i.state=12;break;case 12:i.state=e>t?8:-2;break;case 4:t+=2,i.state=12;break;case 8:r=this.entries_[t],n=this.entries_[t+1],i.state=9;break;case 9:i.state=r===s?4:6;break;case 6:return i.state=2,n;case 2:i.maybeThrow(),i.state=4;break;default:return i.end()}},b,this)})},{}),Object.defineProperty(l.prototype,Symbol.iterator,{configurable:!0,writable:!0,value:l.prototype.entries}),u(r),{get Map(){return l},get polyfillMap(){return r}}}),System.get("traceur-runtime@0.0.58/src/runtime/polyfills/Map"),System.register("traceur-runtime@0.0.58/src/runtime/polyfills/Set",[],function(){"use strict";function t(t){t.map_=new u}function e(t){var e=t,r=e.Object,n=e.Symbol;t.Set||(t.Set=c);var o=t.Set.prototype;o.values&&(i(o,o.values,n),i(r.getPrototypeOf((new t.Set).values()),function(){return this},n))}var r=System.get("traceur-runtime@0.0.58/src/runtime/polyfills/utils"),n=r.isObject,i=r.maybeAddIterator,o=r.registerPolyfill,u=System.get("traceur-runtime@0.0.58/src/runtime/polyfills/Map").Map,a=($traceurRuntime.getOwnHashObject,Object.prototype.hasOwnProperty),c=function(){var e=arguments[0];if(!n(this))throw new TypeError("Set called on incompatible type");if(a.call(this,"map_"))throw new TypeError("Set can not be reentrantly initialised");if(t(this),null!==e&&void 0!==e)for(var r,i=e[Symbol.iterator]();!(r=i.next()).done;){var o=r.value;this.add(o)}};return $traceurRuntime.createClass(c,{get size(){return this.map_.size},has:function(t){return this.map_.has(t)},add:function(t){return this.map_.set(t,t)},"delete":function(t){return this.map_["delete"](t)},clear:function(){return this.map_.clear()},forEach:function(t){var e=arguments[1],r=this;return this.map_.forEach(function(n,i){t.call(e,i,i,r)})},values:$traceurRuntime.initGeneratorFunction(function s(){var t,e;return $traceurRuntime.createGeneratorInstance(function(r){for(;;)switch(r.state){case 0:t=this.map_.keys()[Symbol.iterator](),r.sent=void 0,r.action="next",r.state=12;break;case 12:e=t[r.action](r.sentIgnoreThrow),r.state=9;break;case 9:r.state=e.done?3:2;break;case 3:r.sent=e.value,r.state=-2;break;case 2:return r.state=12,e.value;default:return r.end()}},s,this)}),entries:$traceurRuntime.initGeneratorFunction(function l(){var t,e;return $traceurRuntime.createGeneratorInstance(function(r){for(;;)switch(r.state){case 0:t=this.map_.entries()[Symbol.iterator](),r.sent=void 0,r.action="next",r.state=12;break;case 12:e=t[r.action](r.sentIgnoreThrow),r.state=9;break;case 9:r.state=e.done?3:2;break;case 3:r.sent=e.value,r.state=-2;break;case 2:return r.state=12,e.value;default:return r.end()}},l,this)})},{}),Object.defineProperty(c.prototype,Symbol.iterator,{configurable:!0,writable:!0,value:c.prototype.values}),Object.defineProperty(c.prototype,"keys",{configurable:!0,writable:!0,value:c.prototype.values}),o(e),{get Set(){return c},get polyfillSet(){return e}}}),System.get("traceur-runtime@0.0.58/src/runtime/polyfills/Set"),System.register("traceur-runtime@0.0.58/node_modules/rsvp/lib/rsvp/asap",[],function(){"use strict";function t(t,e){var r=s.push([t,e]);1===r&&o()}function e(){return function(){process.nextTick(i)}}function r(){var t=0,e=new c(i),r=document.createTextNode("");return e.observe(r,{characterData:!0}),function(){r.data=t=++t%2}}function n(){return function(){setTimeout(i,1)}}function i(){for(var t=0;t<s.length;t++){var e=s[t],r=e[0],n=e[1];r(n)}s=[]}var o,u=t,a="undefined"!=typeof window?window:{},c=a.MutationObserver||a.WebKitMutationObserver,s=[];return o="undefined"!=typeof process&&"[object process]"==={}.toString.call(process)?e():c?r():n(),{get default(){return u}}}),System.register("traceur-runtime@0.0.58/src/runtime/polyfills/Promise",[],function(){"use strict";function t(t){return t&&"object"==typeof t&&void 0!==t.status_}function e(t){return t}function r(t){throw t}function n(t){var n=void 0!==arguments[1]?arguments[1]:e,o=void 0!==arguments[2]?arguments[2]:r,u=i(t.constructor);switch(t.status_){case void 0:throw TypeError;case 0:t.onResolve_.push(n,u),t.onReject_.push(o,u);break;case 1:l(t.value_,[n,u]);break;case-1:l(t.value_,[o,u])}return u.promise}function i(t){if(this===d){var e=u(new d(y));return{promise:e,resolve:function(t){a(e,t)},reject:function(t){c(e,t)}}}var r={};return r.promise=new t(function(t,e){r.resolve=t,r.reject=e}),r}function o(t,e,r,n,i){return t.status_=e,t.value_=r,t.onResolve_=n,t.onReject_=i,t}function u(t){return o(t,0,void 0,[],[])}function a(t,e){s(t,1,e,t.onResolve_)}function c(t,e){s(t,-1,e,t.onReject_)}function s(t,e,r,n){0===t.status_&&(l(r,n),o(t,e,r))}function l(t,e){m(function(){for(var r=0;r<e.length;r+=2)f(t,e[r],e[r+1])})}function f(e,r,i){try{var o=r(e);if(o===i.promise)throw new TypeError;t(o)?n(o,i.resolve,i.reject):i.resolve(o)}catch(u){try{i.reject(u)}catch(u){}}}function h(t){return t&&("object"==typeof t||"function"==typeof t)}function b(e,r){if(!t(r)&&h(r)){var n;try{n=r.then}catch(o){var u=j.call(e,o);return r[O]=u,u}if("function"==typeof n){var a=r[O];if(a)return a;var c=i(e);r[O]=c.promise;try{n.call(r,c.resolve,c.reject)}catch(o){c.reject(o)}return c.promise}}return r}function p(t){t.Promise||(t.Promise=g)}var m=System.get("traceur-runtime@0.0.58/node_modules/rsvp/lib/rsvp/asap")["default"],v=System.get("traceur-runtime@0.0.58/src/runtime/polyfills/utils").registerPolyfill,y={},g=function(t){if(t!==y){if("function"!=typeof t)throw new TypeError;var e=u(this);try{t(function(t){a(e,t)},function(t){c(e,t)})}catch(r){c(e,r)}}};$traceurRuntime.createClass(g,{"catch":function(t){return this.then(void 0,t)},then:function(i,o){"function"!=typeof i&&(i=e),"function"!=typeof o&&(o=r);var u=this,a=this.constructor;return n(this,function(e){return e=b(a,e),e===u?o(new TypeError):t(e)?e.then(i,o):i(e)},o)}},{resolve:function(t){return this===d?o(new d(y),1,t):new this(function(e){e(t)})},reject:function(t){return this===d?o(new d(y),-1,t):new this(function(e,r){r(t)})},cast:function(e){if(e instanceof this)return e;if(t(e)){var r=i(this);return n(e,r.resolve,r.reject),r.promise}return this.resolve(e)},all:function(t){var e=i(this),r=[];try{var n=t.length;if(0===n)e.resolve(r);else for(var o=0;o<t.length;o++)this.resolve(t[o]).then(function(t,i){r[t]=i,0===--n&&e.resolve(r)}.bind(void 0,o),function(t){e.reject(t)})}catch(u){e.reject(u)}return e.promise},race:function(t){var e=i(this);try{for(var r=0;r<t.length;r++)this.resolve(t[r]).then(function(t){e.resolve(t)},function(t){e.reject(t)})}catch(n){e.reject(n)}return e.promise}});var d=g,j=d.reject,O="@@thenable";return v(p),{get Promise(){return g},get polyfillPromise(){return p}}}),System.get("traceur-runtime@0.0.58/src/runtime/polyfills/Promise"),System.register("traceur-runtime@0.0.58/src/runtime/polyfills/StringIterator",[],function(){"use strict";function t(t){var e=String(t),r=Object.create(l.prototype);return r[a(c)]=e,r[a(s)]=0,r}var e,r=System.get("traceur-runtime@0.0.58/src/runtime/polyfills/utils"),n=r.createIteratorResultObject,i=r.isObject,o=$traceurRuntime,u=o.hasOwnProperty,a=o.toProperty,c=Symbol("iteratedString"),s=Symbol("stringIteratorNextIndex"),l=function(){};return $traceurRuntime.createClass(l,(e={},Object.defineProperty(e,"next",{value:function(){var t=this;if(!i(t)||!u(t,c))throw new TypeError("this must be a StringIterator object");var e=t[a(c)];if(void 0===e)return n(void 0,!0);var r=t[a(s)],o=e.length;if(r>=o)return t[a(c)]=void 0,n(void 0,!0);var l,f=e.charCodeAt(r);if(55296>f||f>56319||r+1===o)l=String.fromCharCode(f);else{var h=e.charCodeAt(r+1);l=56320>h||h>57343?String.fromCharCode(f):String.fromCharCode(f)+String.fromCharCode(h)}return t[a(s)]=r+l.length,n(l,!1)},configurable:!0,enumerable:!0,writable:!0}),Object.defineProperty(e,Symbol.iterator,{value:function(){return this},configurable:!0,enumerable:!0,writable:!0}),e),{}),{get createStringIterator(){return t}}}),System.register("traceur-runtime@0.0.58/src/runtime/polyfills/String",[],function(){"use strict";function t(t){var e=String(this);if(null==this||"[object RegExp]"==p.call(t))throw TypeError();var r=e.length,n=String(t),i=(n.length,arguments.length>1?arguments[1]:void 0),o=i?Number(i):0;isNaN(o)&&(o=0);var u=Math.min(Math.max(o,0),r);return m.call(e,n,o)==u}function e(t){var e=String(this);if(null==this||"[object RegExp]"==p.call(t))throw TypeError();var r=e.length,n=String(t),i=n.length,o=r;if(arguments.length>1){var u=arguments[1];void 0!==u&&(o=u?Number(u):0,isNaN(o)&&(o=0))}var a=Math.min(Math.max(o,0),r),c=a-i;return 0>c?!1:v.call(e,n,c)==c}function r(t){if(null==this)throw TypeError();var e=String(this),r=e.length,n=String(t),i=(n.length,arguments.length>1?arguments[1]:void 0),o=i?Number(i):0;isNaN(o)&&(o=0);Math.min(Math.max(o,0),r);return-1!=m.call(e,n,o)}function n(t){if(null==this)throw TypeError();var e=String(this),r=t?Number(t):0;if(isNaN(r)&&(r=0),0>r||1/0==r)throw RangeError();if(0==r)return"";for(var n="";r--;)n+=e;return n}function i(t){if(null==this)throw TypeError();var e=String(this),r=e.length,n=t?Number(t):0;if(isNaN(n)&&(n=0),0>n||n>=r)return void 0;var i,o=e.charCodeAt(n);return o>=55296&&56319>=o&&r>n+1&&(i=e.charCodeAt(n+1),i>=56320&&57343>=i)?1024*(o-55296)+i-56320+65536:o}function o(t){var e=t.raw,r=e.length>>>0;if(0===r)return"";for(var n="",i=0;;){if(n+=e[i],i+1===r)return n;n+=arguments[++i]}}function u(){var t,e,r=[],n=Math.floor,i=-1,o=arguments.length;if(!o)return"";for(;++i<o;){var u=Number(arguments[i]);if(!isFinite(u)||0>u||u>1114111||n(u)!=u)throw RangeError("Invalid code point: "+u);65535>=u?r.push(u):(u-=65536,t=(u>>10)+55296,e=u%1024+56320,r.push(t,e))}return String.fromCharCode.apply(null,r)}function a(){var t=$traceurRuntime.checkObjectCoercible(this),e=String(t);return s(e)}function c(c){var s=c.String;f(s.prototype,["codePointAt",i,"contains",r,"endsWith",e,"startsWith",t,"repeat",n]),f(s,["fromCodePoint",u,"raw",o]),h(s.prototype,a,Symbol)}var s=System.get("traceur-runtime@0.0.58/src/runtime/polyfills/StringIterator").createStringIterator,l=System.get("traceur-runtime@0.0.58/src/runtime/polyfills/utils"),f=l.maybeAddFunctions,h=l.maybeAddIterator,b=l.registerPolyfill,p=Object.prototype.toString,m=String.prototype.indexOf,v=String.prototype.lastIndexOf;return b(c),{get startsWith(){return t},get endsWith(){return e},get contains(){return r},get repeat(){return n},get codePointAt(){return i},get raw(){return o},get fromCodePoint(){return u},get stringPrototypeIterator(){return a},get polyfillString(){return c}}}),System.get("traceur-runtime@0.0.58/src/runtime/polyfills/String"),System.register("traceur-runtime@0.0.58/src/runtime/polyfills/ArrayIterator",[],function(){"use strict";function t(t,e){var r=u(t),n=new h;return n.iteratorObject_=r,n.arrayIteratorNextIndex_=0,n.arrayIterationKind_=e,n}function e(){return t(this,f)}function r(){return t(this,s)}function n(){return t(this,l)}var i,o=System.get("traceur-runtime@0.0.58/src/runtime/polyfills/utils"),u=o.toObject,a=o.toUint32,c=o.createIteratorResultObject,s=1,l=2,f=3,h=function(){};return $traceurRuntime.createClass(h,(i={},Object.defineProperty(i,"next",{value:function(){var t=u(this),e=t.iteratorObject_;if(!e)throw new TypeError("Object is not an ArrayIterator");var r=t.arrayIteratorNextIndex_,n=t.arrayIterationKind_,i=a(e.length);return r>=i?(t.arrayIteratorNextIndex_=1/0,c(void 0,!0)):(t.arrayIteratorNextIndex_=r+1,n==l?c(e[r],!1):n==f?c([r,e[r]],!1):c(r,!1))},configurable:!0,enumerable:!0,writable:!0}),Object.defineProperty(i,Symbol.iterator,{value:function(){return this},configurable:!0,enumerable:!0,writable:!0}),i),{}),{get entries(){return e},get keys(){return r},get values(){return n}}}),System.register("traceur-runtime@0.0.58/src/runtime/polyfills/Array",[],function(){"use strict";function t(t){var e,r,n=arguments[1],i=arguments[2],o=this,u=j(t),a=void 0!==n,c=0;if(a&&!b(n))throw TypeError();if(h(u)){e=p(o)?new o:[];for(var s,l=u[Symbol.iterator]();!(s=l.next()).done;){var f=s.value;e[c]=a?n.call(i,f,c):f,c++}return e.length=c,e}for(r=d(u.length),e=p(o)?new o(r):new Array(r);r>c;c++)e[c]=a?"undefined"==typeof i?n(u[c],c):n.call(i,u[c],c):u[c];return e.length=r,e}function e(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];for(var r=this,n=t.length,i=p(r)?new r(n):new Array(n),o=0;n>o;o++)i[o]=t[o];return i.length=n,i}function r(t){var e=void 0!==arguments[1]?arguments[1]:0,r=arguments[2],n=j(this),i=d(n.length),o=g(e),u=void 0!==r?g(r):i;for(o=0>o?Math.max(i+o,0):Math.min(o,i),u=0>u?Math.max(i+u,0):Math.min(u,i);u>o;)n[o]=t,o++;return n}function n(t){var e=arguments[1];return o(this,t,e)}function i(t){var e=arguments[1];return o(this,t,e,!0)}function o(t,e){var r=arguments[2],n=void 0!==arguments[3]?arguments[3]:!1,i=j(t),o=d(i.length);if(!b(e))throw TypeError();for(var u=0;o>u;u++)if(u in i){var a=i[u];if(e.call(r,a,u,i))return n?u:a}return n?-1:void 0}function u(o){var u=o,a=u.Array,f=u.Object,h=u.Symbol;m(a.prototype,["entries",c,"keys",s,"values",l,"fill",r,"find",n,"findIndex",i]),m(a,["from",t,"of",e]),v(a.prototype,l,h),v(f.getPrototypeOf([].values()),function(){return this},h)}var a=System.get("traceur-runtime@0.0.58/src/runtime/polyfills/ArrayIterator"),c=a.entries,s=a.keys,l=a.values,f=System.get("traceur-runtime@0.0.58/src/runtime/polyfills/utils"),h=f.checkIterable,b=f.isCallable,p=f.isConstructor,m=f.maybeAddFunctions,v=f.maybeAddIterator,y=f.registerPolyfill,g=f.toInteger,d=f.toLength,j=f.toObject;return y(u),{get from(){return t},get of(){return e},get fill(){return r},get find(){return n},get findIndex(){return i},get polyfillArray(){return u}}}),System.get("traceur-runtime@0.0.58/src/runtime/polyfills/Array"),System.register("traceur-runtime@0.0.58/src/runtime/polyfills/Object",[],function(){"use strict";function t(t,e){return t===e?0!==t||1/t===1/e:t!==t&&e!==e}function e(t){for(var e=1;e<arguments.length;e++){var r,n=arguments[e],i=f(n),o=i.length;for(r=0;o>r;r++){var u=i[r];h[u]||(t[u]=n[u])}}return t}function r(t,e){var r,n,i=l(e),o=i.length;for(r=0;o>r;r++){var u=i[r];h[u]||(n=s(e,i[r]),c(t,i[r],n))}return t}function n(n){var i=n.Object;o(i,["assign",e,"is",t,"mixin",r])}var i=System.get("traceur-runtime@0.0.58/src/runtime/polyfills/utils"),o=i.maybeAddFunctions,u=i.registerPolyfill,a=$traceurRuntime,c=a.defineProperty,s=a.getOwnPropertyDescriptor,l=a.getOwnPropertyNames,f=a.keys,h=a.privateNames;return u(n),{get is(){return t},get assign(){return e},get mixin(){return r},get polyfillObject(){return n}}}),System.get("traceur-runtime@0.0.58/src/runtime/polyfills/Object"),System.register("traceur-runtime@0.0.58/src/runtime/polyfills/Number",[],function(){"use strict";
function t(t){return u(t)&&h(t)}function e(e){return t(e)&&l(e)===e}function r(t){return u(t)&&b(t)}function n(e){if(t(e)){var r=l(e);if(r===e)return f(r)<=p}return!1}function i(i){var o=i.Number;a(o,["MAX_SAFE_INTEGER",p,"MIN_SAFE_INTEGER",m,"EPSILON",v]),c(o,["isFinite",t,"isInteger",e,"isNaN",r,"isSafeInteger",n])}var o=System.get("traceur-runtime@0.0.58/src/runtime/polyfills/utils"),u=o.isNumber,a=o.maybeAddConsts,c=o.maybeAddFunctions,s=o.registerPolyfill,l=o.toInteger,f=Math.abs,h=isFinite,b=isNaN,p=Math.pow(2,53)-1,m=-Math.pow(2,53)+1,v=Math.pow(2,-52);return s(i),{get MAX_SAFE_INTEGER(){return p},get MIN_SAFE_INTEGER(){return m},get EPSILON(){return v},get isFinite(){return t},get isInteger(){return e},get isNaN(){return r},get isSafeInteger(){return n},get polyfillNumber(){return i}}}),System.get("traceur-runtime@0.0.58/src/runtime/polyfills/Number"),System.register("traceur-runtime@0.0.58/src/runtime/polyfills/polyfills",[],function(){"use strict";var t=System.get("traceur-runtime@0.0.58/src/runtime/polyfills/utils").polyfillAll;t(this);var e=$traceurRuntime.setupGlobals;return $traceurRuntime.setupGlobals=function(r){e(r),t(r)},{}}),System.get("traceur-runtime@0.0.58/src/runtime/polyfills/polyfills"),this.System=this._System,delete this._System;
/*[production-config]*/
steal={env: 'production'};
/*steal*/
!function(e){"object"==typeof exports?module.exports=e():"function"==typeof define&&define.amd?define(e):"undefined"!=typeof window?window.Promise=e():"undefined"!=typeof global?global.Promise=e():"undefined"!=typeof self&&(self.Promise=e())}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

/**
 * ES6 global Promise shim
 */
var unhandledRejections = require('../lib/decorators/unhandledRejection');
var PromiseConstructor = unhandledRejections(require('../lib/Promise'));

module.exports = typeof global != 'undefined' ? (global.Promise = PromiseConstructor)
	           : typeof self   != 'undefined' ? (self.Promise   = PromiseConstructor)
	           : PromiseConstructor;

},{"../lib/Promise":2,"../lib/decorators/unhandledRejection":6}],2:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function (require) {

	var makePromise = require('./makePromise');
	var Scheduler = require('./Scheduler');
	var async = require('./async');

	return makePromise({
		scheduler: new Scheduler(async)
	});

});
})(typeof define === 'function' && define.amd ? define : function (factory) { module.exports = factory(require); });

},{"./Scheduler":4,"./async":5,"./makePromise":7}],3:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function() {
	/**
	 * Circular queue
	 * @param {number} capacityPow2 power of 2 to which this queue's capacity
	 *  will be set initially. eg when capacityPow2 == 3, queue capacity
	 *  will be 8.
	 * @constructor
	 */
	function Queue(capacityPow2) {
		this.head = this.tail = this.length = 0;
		this.buffer = new Array(1 << capacityPow2);
	}

	Queue.prototype.push = function(x) {
		if(this.length === this.buffer.length) {
			this._ensureCapacity(this.length * 2);
		}

		this.buffer[this.tail] = x;
		this.tail = (this.tail + 1) & (this.buffer.length - 1);
		++this.length;
		return this.length;
	};

	Queue.prototype.shift = function() {
		var x = this.buffer[this.head];
		this.buffer[this.head] = void 0;
		this.head = (this.head + 1) & (this.buffer.length - 1);
		--this.length;
		return x;
	};

	Queue.prototype._ensureCapacity = function(capacity) {
		var head = this.head;
		var buffer = this.buffer;
		var newBuffer = new Array(capacity);
		var i = 0;
		var len;

		if(head === 0) {
			len = this.length;
			for(; i<len; ++i) {
				newBuffer[i] = buffer[i];
			}
		} else {
			capacity = buffer.length;
			len = this.tail;
			for(; head<capacity; ++i, ++head) {
				newBuffer[i] = buffer[head];
			}

			for(head=0; head<len; ++i, ++head) {
				newBuffer[i] = buffer[head];
			}
		}

		this.buffer = newBuffer;
		this.head = 0;
		this.tail = this.length;
	};

	return Queue;

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(); }));

},{}],4:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function(require) {

	var Queue = require('./Queue');

	// Credit to Twisol (https://github.com/Twisol) for suggesting
	// this type of extensible queue + trampoline approach for next-tick conflation.

	/**
	 * Async task scheduler
	 * @param {function} async function to schedule a single async function
	 * @constructor
	 */
	function Scheduler(async) {
		this._async = async;
		this._queue = new Queue(15);
		this._afterQueue = new Queue(5);
		this._running = false;

		var self = this;
		this.drain = function() {
			self._drain();
		};
	}

	/**
	 * Enqueue a task
	 * @param {{ run:function }} task
	 */
	Scheduler.prototype.enqueue = function(task) {
		this._add(this._queue, task);
	};

	/**
	 * Enqueue a task to run after the main task queue
	 * @param {{ run:function }} task
	 */
	Scheduler.prototype.afterQueue = function(task) {
		this._add(this._afterQueue, task);
	};

	/**
	 * Drain the handler queue entirely, and then the after queue
	 */
	Scheduler.prototype._drain = function() {
		runQueue(this._queue);
		this._running = false;
		runQueue(this._afterQueue);
	};

	/**
	 * Add a task to the q, and schedule drain if not already scheduled
	 * @param {Queue} queue
	 * @param {{run:function}} task
	 * @private
	 */
	Scheduler.prototype._add = function(queue, task) {
		queue.push(task);
		if(!this._running) {
			this._running = true;
			this._async(this.drain);
		}
	};

	/**
	 * Run all the tasks in the q
	 * @param queue
	 */
	function runQueue(queue) {
		while(queue.length > 0) {
			queue.shift().run();
		}
	}

	return Scheduler;

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(require); }));

},{"./Queue":3}],5:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function(require) {

	// Sniff "best" async scheduling option
	// Prefer process.nextTick or MutationObserver, then check for
	// vertx and finally fall back to setTimeout

	/*jshint maxcomplexity:6*/
	/*global process,document,setTimeout,MutationObserver,WebKitMutationObserver*/
	var nextTick, MutationObs;

	if (typeof process !== 'undefined' && process !== null &&
		typeof process.nextTick === 'function') {
		nextTick = function(f) {
			process.nextTick(f);
		};

	} else if (MutationObs =
		(typeof MutationObserver === 'function' && MutationObserver) ||
		(typeof WebKitMutationObserver === 'function' && WebKitMutationObserver)) {
		nextTick = (function (document, MutationObserver) {
			var scheduled;
			var el = document.createElement('div');
			var o = new MutationObserver(run);
			o.observe(el, { attributes: true });

			function run() {
				var f = scheduled;
				scheduled = void 0;
				f();
			}

			return function (f) {
				scheduled = f;
				el.setAttribute('class', 'x');
			};
		}(document, MutationObs));

	} else {
		nextTick = (function(cjsRequire) {
			try {
				// vert.x 1.x || 2.x
				return cjsRequire('vertx').runOnLoop || cjsRequire('vertx').runOnContext;
			} catch (ignore) {}

			// capture setTimeout to avoid being caught by fake timers
			// used in time based tests
			var capturedSetTimeout = setTimeout;
			return function (t) {
				capturedSetTimeout(t, 0);
			};
		}(require));
	}

	return nextTick;
});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(require); }));

},{}],6:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function(require) {

	var timer = require('../timer');

	return function unhandledRejection(Promise) {
		var logError = noop;
		var logInfo = noop;

		if(typeof console !== 'undefined') {
			logError = typeof console.error !== 'undefined'
				? function (e) { console.error(e); }
				: function (e) { console.log(e); };

			logInfo = typeof console.info !== 'undefined'
				? function (e) { console.info(e); }
				: function (e) { console.log(e); };
		}

		Promise.onPotentiallyUnhandledRejection = function(rejection) {
			enqueue(report, rejection);
		};

		Promise.onPotentiallyUnhandledRejectionHandled = function(rejection) {
			enqueue(unreport, rejection);
		};

		Promise.onFatalRejection = function(rejection) {
			enqueue(throwit, rejection.value);
		};

		var tasks = [];
		var reported = [];
		var running = false;

		function report(r) {
			if(!r.handled) {
				reported.push(r);
				logError('Potentially unhandled rejection [' + r.id + '] ' + formatError(r.value));
			}
		}

		function unreport(r) {
			var i = reported.indexOf(r);
			if(i >= 0) {
				reported.splice(i, 1);
				logInfo('Handled previous rejection [' + r.id + '] ' + formatObject(r.value));
			}
		}

		function enqueue(f, x) {
			tasks.push(f, x);
			if(!running) {
				running = true;
				running = timer.set(flush, 0);
			}
		}

		function flush() {
			running = false;
			while(tasks.length > 0) {
				tasks.shift()(tasks.shift());
			}
		}

		return Promise;
	};

	function formatError(e) {
		var s = typeof e === 'object' && e.stack ? e.stack : formatObject(e);
		return e instanceof Error ? s : s + ' (WARNING: non-Error used)';
	}

	function formatObject(o) {
		var s = String(o);
		if(s === '[object Object]' && typeof JSON !== 'undefined') {
			s = tryStringify(o, s);
		}
		return s;
	}

	function tryStringify(e, defaultValue) {
		try {
			return JSON.stringify(e);
		} catch(e) {
			// Ignore. Cannot JSON.stringify e, stick with String(e)
			return defaultValue;
		}
	}

	function throwit(e) {
		throw e;
	}

	function noop() {}

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(require); }));

},{"../timer":8}],7:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function() {

	return function makePromise(environment) {

		var tasks = environment.scheduler;

		var objectCreate = Object.create ||
			function(proto) {
				function Child() {}
				Child.prototype = proto;
				return new Child();
			};

		/**
		 * Create a promise whose fate is determined by resolver
		 * @constructor
		 * @returns {Promise} promise
		 * @name Promise
		 */
		function Promise(resolver, handler) {
			this._handler = resolver === Handler ? handler : init(resolver);
		}

		/**
		 * Run the supplied resolver
		 * @param resolver
		 * @returns {Pending}
		 */
		function init(resolver) {
			var handler = new Pending();

			try {
				resolver(promiseResolve, promiseReject, promiseNotify);
			} catch (e) {
				promiseReject(e);
			}

			return handler;

			/**
			 * Transition from pre-resolution state to post-resolution state, notifying
			 * all listeners of the ultimate fulfillment or rejection
			 * @param {*} x resolution value
			 */
			function promiseResolve (x) {
				handler.resolve(x);
			}
			/**
			 * Reject this promise with reason, which will be used verbatim
			 * @param {Error|*} reason rejection reason, strongly suggested
			 *   to be an Error type
			 */
			function promiseReject (reason) {
				handler.reject(reason);
			}

			/**
			 * Issue a progress event, notifying all progress listeners
			 * @param {*} x progress event payload to pass to all listeners
			 */
			function promiseNotify (x) {
				handler.notify(x);
			}
		}

		// Creation

		Promise.resolve = resolve;
		Promise.reject = reject;
		Promise.never = never;

		Promise._defer = defer;
		Promise._handler = getHandler;

		/**
		 * Returns a trusted promise. If x is already a trusted promise, it is
		 * returned, otherwise returns a new trusted Promise which follows x.
		 * @param  {*} x
		 * @return {Promise} promise
		 */
		function resolve(x) {
			return isPromise(x) ? x
				: new Promise(Handler, new Async(getHandler(x)));
		}

		/**
		 * Return a reject promise with x as its reason (x is used verbatim)
		 * @param {*} x
		 * @returns {Promise} rejected promise
		 */
		function reject(x) {
			return new Promise(Handler, new Async(new Rejected(x)));
		}

		/**
		 * Return a promise that remains pending forever
		 * @returns {Promise} forever-pending promise.
		 */
		function never() {
			return foreverPendingPromise; // Should be frozen
		}

		/**
		 * Creates an internal {promise, resolver} pair
		 * @private
		 * @returns {Promise}
		 */
		function defer() {
			return new Promise(Handler, new Pending());
		}

		// Transformation and flow control

		/**
		 * Transform this promise's fulfillment value, returning a new Promise
		 * for the transformed result.  If the promise cannot be fulfilled, onRejected
		 * is called with the reason.  onProgress *may* be called with updates toward
		 * this promise's fulfillment.
		 * @param {function=} onFulfilled fulfillment handler
		 * @param {function=} onRejected rejection handler
		 * @deprecated @param {function=} onProgress progress handler
		 * @return {Promise} new promise
		 */
		Promise.prototype.then = function(onFulfilled, onRejected) {
			var parent = this._handler;

			if (typeof onFulfilled !== 'function' && parent.join().state() > 0) {
				// Short circuit: value will not change, simply share handler
				return new Promise(Handler, parent);
			}

			var p = this._beget();
			var child = p._handler;

			parent.chain(child, parent.receiver, onFulfilled, onRejected,
					arguments.length > 2 ? arguments[2] : void 0);

			return p;
		};

		/**
		 * If this promise cannot be fulfilled due to an error, call onRejected to
		 * handle the error. Shortcut for .then(undefined, onRejected)
		 * @param {function?} onRejected
		 * @return {Promise}
		 */
		Promise.prototype['catch'] = function(onRejected) {
			return this.then(void 0, onRejected);
		};

		/**
		 * Creates a new, pending promise of the same type as this promise
		 * @private
		 * @returns {Promise}
		 */
		Promise.prototype._beget = function() {
			var parent = this._handler;
			var child = new Pending(parent.receiver, parent.join().context);
			return new this.constructor(Handler, child);
		};

		// Array combinators

		Promise.all = all;
		Promise.race = race;

		/**
		 * Return a promise that will fulfill when all promises in the
		 * input array have fulfilled, or will reject when one of the
		 * promises rejects.
		 * @param {array} promises array of promises
		 * @returns {Promise} promise for array of fulfillment values
		 */
		function all(promises) {
			/*jshint maxcomplexity:8*/
			var resolver = new Pending();
			var pending = promises.length >>> 0;
			var results = new Array(pending);

			var i, h, x, s;
			for (i = 0; i < promises.length; ++i) {
				x = promises[i];

				if (x === void 0 && !(i in promises)) {
					--pending;
					continue;
				}

				if (maybeThenable(x)) {
					h = isPromise(x)
						? x._handler.join()
						: getHandlerUntrusted(x);

					s = h.state();
					if (s === 0) {
						h.fold(settleAt, i, results, resolver);
					} else if (s > 0) {
						results[i] = h.value;
						--pending;
					} else {
						resolver.become(h);
						break;
					}

				} else {
					results[i] = x;
					--pending;
				}
			}

			if(pending === 0) {
				resolver.become(new Fulfilled(results));
			}

			return new Promise(Handler, resolver);

			function settleAt(i, x, resolver) {
				/*jshint validthis:true*/
				this[i] = x;
				if(--pending === 0) {
					resolver.become(new Fulfilled(this));
				}
			}
		}

		/**
		 * Fulfill-reject competitive race. Return a promise that will settle
		 * to the same state as the earliest input promise to settle.
		 *
		 * WARNING: The ES6 Promise spec requires that race()ing an empty array
		 * must return a promise that is pending forever.  This implementation
		 * returns a singleton forever-pending promise, the same singleton that is
		 * returned by Promise.never(), thus can be checked with ===
		 *
		 * @param {array} promises array of promises to race
		 * @returns {Promise} if input is non-empty, a promise that will settle
		 * to the same outcome as the earliest input promise to settle. if empty
		 * is empty, returns a promise that will never settle.
		 */
		function race(promises) {
			// Sigh, race([]) is untestable unless we return *something*
			// that is recognizable without calling .then() on it.
			if(Object(promises) === promises && promises.length === 0) {
				return never();
			}

			var h = new Pending();
			var i, x;
			for(i=0; i<promises.length; ++i) {
				x = promises[i];
				if (x !== void 0 && i in promises) {
					getHandler(x).visit(h, h.resolve, h.reject);
				}
			}
			return new Promise(Handler, h);
		}

		// Promise internals
		// Below this, everything is @private

		/**
		 * Get an appropriate handler for x, without checking for cycles
		 * @param {*} x
		 * @returns {object} handler
		 */
		function getHandler(x) {
			if(isPromise(x)) {
				return x._handler.join();
			}
			return maybeThenable(x) ? getHandlerUntrusted(x) : new Fulfilled(x);
		}

		/**
		 * Get a handler for potentially untrusted thenable x
		 * @param {*} x
		 * @returns {object} handler
		 */
		function getHandlerUntrusted(x) {
			try {
				var untrustedThen = x.then;
				return typeof untrustedThen === 'function'
					? new Thenable(untrustedThen, x)
					: new Fulfilled(x);
			} catch(e) {
				return new Rejected(e);
			}
		}

		/**
		 * Handler for a promise that is pending forever
		 * @constructor
		 */
		function Handler() {}

		Handler.prototype.when
			= Handler.prototype.become
			= Handler.prototype.notify
			= Handler.prototype.fail
			= Handler.prototype._unreport
			= Handler.prototype._report
			= noop;

		Handler.prototype._state = 0;

		Handler.prototype.state = function() {
			return this._state;
		};

		/**
		 * Recursively collapse handler chain to find the handler
		 * nearest to the fully resolved value.
		 * @returns {object} handler nearest the fully resolved value
		 */
		Handler.prototype.join = function() {
			var h = this;
			while(h.handler !== void 0) {
				h = h.handler;
			}
			return h;
		};

		Handler.prototype.chain = function(to, receiver, fulfilled, rejected, progress) {
			this.when({
				resolver: to,
				receiver: receiver,
				fulfilled: fulfilled,
				rejected: rejected,
				progress: progress
			});
		};

		Handler.prototype.visit = function(receiver, fulfilled, rejected, progress) {
			this.chain(failIfRejected, receiver, fulfilled, rejected, progress);
		};

		Handler.prototype.fold = function(f, z, c, to) {
			this.visit(to, function(x) {
				f.call(c, z, x, this);
			}, to.reject, to.notify);
		};

		/**
		 * Handler that invokes fail() on any handler it becomes
		 * @constructor
		 */
		function FailIfRejected() {}

		inherit(Handler, FailIfRejected);

		FailIfRejected.prototype.become = function(h) {
			h.fail();
		};

		var failIfRejected = new FailIfRejected();

		/**
		 * Handler that manages a queue of consumers waiting on a pending promise
		 * @constructor
		 */
		function Pending(receiver, inheritedContext) {
			Promise.createContext(this, inheritedContext);

			this.consumers = void 0;
			this.receiver = receiver;
			this.handler = void 0;
			this.resolved = false;
		}

		inherit(Handler, Pending);

		Pending.prototype._state = 0;

		Pending.prototype.resolve = function(x) {
			this.become(getHandler(x));
		};

		Pending.prototype.reject = function(x) {
			if(this.resolved) {
				return;
			}

			this.become(new Rejected(x));
		};

		Pending.prototype.join = function() {
			if (!this.resolved) {
				return this;
			}

			var h = this;

			while (h.handler !== void 0) {
				h = h.handler;
				if (h === this) {
					return this.handler = cycle();
				}
			}

			return h;
		};

		Pending.prototype.run = function() {
			var q = this.consumers;
			var handler = this.join();
			this.consumers = void 0;

			for (var i = 0; i < q.length; ++i) {
				handler.when(q[i]);
			}
		};

		Pending.prototype.become = function(handler) {
			if(this.resolved) {
				return;
			}

			this.resolved = true;
			this.handler = handler;
			if(this.consumers !== void 0) {
				tasks.enqueue(this);
			}

			if(this.context !== void 0) {
				handler._report(this.context);
			}
		};

		Pending.prototype.when = function(continuation) {
			if(this.resolved) {
				tasks.enqueue(new ContinuationTask(continuation, this.handler));
			} else {
				if(this.consumers === void 0) {
					this.consumers = [continuation];
				} else {
					this.consumers.push(continuation);
				}
			}
		};

		Pending.prototype.notify = function(x) {
			if(!this.resolved) {
				tasks.enqueue(new ProgressTask(x, this));
			}
		};

		Pending.prototype.fail = function(context) {
			var c = typeof context === 'undefined' ? this.context : context;
			this.resolved && this.handler.join().fail(c);
		};

		Pending.prototype._report = function(context) {
			this.resolved && this.handler.join()._report(context);
		};

		Pending.prototype._unreport = function() {
			this.resolved && this.handler.join()._unreport();
		};

		/**
		 * Wrap another handler and force it into a future stack
		 * @param {object} handler
		 * @constructor
		 */
		function Async(handler) {
			this.handler = handler;
		}

		inherit(Handler, Async);

		Async.prototype.when = function(continuation) {
			tasks.enqueue(new ContinuationTask(continuation, this));
		};

		Async.prototype._report = function(context) {
			this.join()._report(context);
		};

		Async.prototype._unreport = function() {
			this.join()._unreport();
		};

		/**
		 * Handler that wraps an untrusted thenable and assimilates it in a future stack
		 * @param {function} then
		 * @param {{then: function}} thenable
		 * @constructor
		 */
		function Thenable(then, thenable) {
			Pending.call(this);
			tasks.enqueue(new AssimilateTask(then, thenable, this));
		}

		inherit(Pending, Thenable);

		/**
		 * Handler for a fulfilled promise
		 * @param {*} x fulfillment value
		 * @constructor
		 */
		function Fulfilled(x) {
			Promise.createContext(this);
			this.value = x;
		}

		inherit(Handler, Fulfilled);

		Fulfilled.prototype._state = 1;

		Fulfilled.prototype.fold = function(f, z, c, to) {
			runContinuation3(f, z, this, c, to);
		};

		Fulfilled.prototype.when = function(cont) {
			runContinuation1(cont.fulfilled, this, cont.receiver, cont.resolver);
		};

		var errorId = 0;

		/**
		 * Handler for a rejected promise
		 * @param {*} x rejection reason
		 * @constructor
		 */
		function Rejected(x) {
			Promise.createContext(this);

			this.id = ++errorId;
			this.value = x;
			this.handled = false;
			this.reported = false;

			this._report();
		}

		inherit(Handler, Rejected);

		Rejected.prototype._state = -1;

		Rejected.prototype.fold = function(f, z, c, to) {
			to.become(this);
		};

		Rejected.prototype.when = function(cont) {
			if(typeof cont.rejected === 'function') {
				this._unreport();
			}
			runContinuation1(cont.rejected, this, cont.receiver, cont.resolver);
		};

		Rejected.prototype._report = function(context) {
			tasks.afterQueue(new ReportTask(this, context));
		};

		Rejected.prototype._unreport = function() {
			this.handled = true;
			tasks.afterQueue(new UnreportTask(this));
		};

		Rejected.prototype.fail = function(context) {
			Promise.onFatalRejection(this, context === void 0 ? this.context : context);
		};

		function ReportTask(rejection, context) {
			this.rejection = rejection;
			this.context = context;
		}

		ReportTask.prototype.run = function() {
			if(!this.rejection.handled) {
				this.rejection.reported = true;
				Promise.onPotentiallyUnhandledRejection(this.rejection, this.context);
			}
		};

		function UnreportTask(rejection) {
			this.rejection = rejection;
		}

		UnreportTask.prototype.run = function() {
			if(this.rejection.reported) {
				Promise.onPotentiallyUnhandledRejectionHandled(this.rejection);
			}
		};

		// Unhandled rejection hooks
		// By default, everything is a noop

		// TODO: Better names: "annotate"?
		Promise.createContext
			= Promise.enterContext
			= Promise.exitContext
			= Promise.onPotentiallyUnhandledRejection
			= Promise.onPotentiallyUnhandledRejectionHandled
			= Promise.onFatalRejection
			= noop;

		// Errors and singletons

		var foreverPendingHandler = new Handler();
		var foreverPendingPromise = new Promise(Handler, foreverPendingHandler);

		function cycle() {
			return new Rejected(new TypeError('Promise cycle'));
		}

		// Task runners

		/**
		 * Run a single consumer
		 * @constructor
		 */
		function ContinuationTask(continuation, handler) {
			this.continuation = continuation;
			this.handler = handler;
		}

		ContinuationTask.prototype.run = function() {
			this.handler.join().when(this.continuation);
		};

		/**
		 * Run a queue of progress handlers
		 * @constructor
		 */
		function ProgressTask(value, handler) {
			this.handler = handler;
			this.value = value;
		}

		ProgressTask.prototype.run = function() {
			var q = this.handler.consumers;
			if(q === void 0) {
				return;
			}

			for (var c, i = 0; i < q.length; ++i) {
				c = q[i];
				runNotify(c.progress, this.value, this.handler, c.receiver, c.resolver);
			}
		};

		/**
		 * Assimilate a thenable, sending it's value to resolver
		 * @param {function} then
		 * @param {object|function} thenable
		 * @param {object} resolver
		 * @constructor
		 */
		function AssimilateTask(then, thenable, resolver) {
			this._then = then;
			this.thenable = thenable;
			this.resolver = resolver;
		}

		AssimilateTask.prototype.run = function() {
			var h = this.resolver;
			tryAssimilate(this._then, this.thenable, _resolve, _reject, _notify);

			function _resolve(x) { h.resolve(x); }
			function _reject(x)  { h.reject(x); }
			function _notify(x)  { h.notify(x); }
		};

		function tryAssimilate(then, thenable, resolve, reject, notify) {
			try {
				then.call(thenable, resolve, reject, notify);
			} catch (e) {
				reject(e);
			}
		}

		// Other helpers

		/**
		 * @param {*} x
		 * @returns {boolean} true iff x is a trusted Promise
		 */
		function isPromise(x) {
			return x instanceof Promise;
		}

		/**
		 * Test just enough to rule out primitives, in order to take faster
		 * paths in some code
		 * @param {*} x
		 * @returns {boolean} false iff x is guaranteed *not* to be a thenable
		 */
		function maybeThenable(x) {
			return (typeof x === 'object' || typeof x === 'function') && x !== null;
		}

		function runContinuation1(f, h, receiver, next) {
			if(typeof f !== 'function') {
				return next.become(h);
			}

			Promise.enterContext(h);
			tryCatchReject(f, h.value, receiver, next);
			Promise.exitContext();
		}

		function runContinuation3(f, x, h, receiver, next) {
			if(typeof f !== 'function') {
				return next.become(h);
			}

			Promise.enterContext(h);
			tryCatchReject3(f, x, h.value, receiver, next);
			Promise.exitContext();
		}

		function runNotify(f, x, h, receiver, next) {
			if(typeof f !== 'function') {
				return next.notify(x);
			}

			Promise.enterContext(h);
			tryCatchReturn(f, x, receiver, next);
			Promise.exitContext();
		}

		/**
		 * Return f.call(thisArg, x), or if it throws return a rejected promise for
		 * the thrown exception
		 */
		function tryCatchReject(f, x, thisArg, next) {
			try {
				next.become(getHandler(f.call(thisArg, x)));
			} catch(e) {
				next.become(new Rejected(e));
			}
		}

		/**
		 * Same as above, but includes the extra argument parameter.
		 */
		function tryCatchReject3(f, x, y, thisArg, next) {
			try {
				f.call(thisArg, x, y, next);
			} catch(e) {
				next.become(new Rejected(e));
			}
		}

		/**
		 * Return f.call(thisArg, x), or if it throws, *return* the exception
		 */
		function tryCatchReturn(f, x, thisArg, next) {
			try {
				next.notify(f.call(thisArg, x));
			} catch(e) {
				next.notify(e);
			}
		}

		function inherit(Parent, Child) {
			Child.prototype = objectCreate(Parent.prototype);
			Child.prototype.constructor = Child;
		}

		function noop() {}

		return Promise;
	};
});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(); }));

},{}],8:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function(require) {
	/*global setTimeout,clearTimeout*/
	var cjsRequire, vertx, setTimer, clearTimer;

	cjsRequire = require;

	try {
		vertx = cjsRequire('vertx');
		setTimer = function (f, ms) { return vertx.setTimer(ms, f); };
		clearTimer = vertx.cancelTimer;
	} catch (e) {
		setTimer = function(f, ms) { return setTimeout(f, ms); };
		clearTimer = function(t) { return clearTimeout(t); };
	}

	return {
		set: setTimer,
		clear: clearTimer
	};

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(require); }));

},{}]},{},[1])
(1)
});
;
(function(__global) {
  
$__Object$getPrototypeOf = Object.getPrototypeOf || function(obj) {
  return obj.__proto__;
};

var $__Object$defineProperty;
(function () {
  try {
    if (!!Object.defineProperty({}, 'a', {})) {
      $__Object$defineProperty = Object.defineProperty;
    }
  } catch (e) {
    $__Object$defineProperty = function (obj, prop, opt) {
      try {
        obj[prop] = opt.value || opt.get.call(obj);
      }
      catch(e) {}
    }
  }
}());

$__Object$create = Object.create || function(o, props) {
  function F() {}
  F.prototype = o;

  if (typeof(props) === "object") {
    for (prop in props) {
      if (props.hasOwnProperty((prop))) {
        F[prop] = props[prop];
      }
    }
  }
  return new F();
};

/*
*********************************************************************************************

  Loader Polyfill

    - Implemented exactly to the 2014-07-18 Specification Draft.

    - Functions are commented with their spec numbers, with spec differences commented.

    - Spec bugs are commented in this code with links.

    - Abstract functions have been combined where possible, and their associated functions
      commented.

    - Realm implementation is entirely omitted.

    - Loader module table iteration currently not yet implemented.

*********************************************************************************************
*/

// Some Helpers

// logs a linkset snapshot for debugging
/* function snapshot(loader) {
  console.log('---Snapshot---');
  for (var i = 0; i < loader.loads.length; i++) {
    var load = loader.loads[i];
    var linkSetLog = '  ' + load.name + ' (' + load.status + '): ';

    for (var j = 0; j < load.linkSets.length; j++) {
      linkSetLog += '{' + logloads(load.linkSets[j].loads) + '} ';
    }
    console.log(linkSetLog);
  }
  console.log('');
}
function logloads(loads) {
  var log = '';
  for (var k = 0; k < loads.length; k++)
    log += loads[k].name + (k != loads.length - 1 ? ' ' : '');
  return log;
} */


/* function checkInvariants() {
  // see https://bugs.ecmascript.org/show_bug.cgi?id=2603#c1

  var loads = System._loader.loads;
  var linkSets = [];

  for (var i = 0; i < loads.length; i++) {
    var load = loads[i];
    console.assert(load.status == 'loading' || load.status == 'loaded', 'Each load is loading or loaded');

    for (var j = 0; j < load.linkSets.length; j++) {
      var linkSet = load.linkSets[j];

      for (var k = 0; k < linkSet.loads.length; k++)
        console.assert(loads.indexOf(linkSet.loads[k]) != -1, 'linkSet loads are a subset of loader loads');

      if (linkSets.indexOf(linkSet) == -1)
        linkSets.push(linkSet);
    }
  }

  for (var i = 0; i < loads.length; i++) {
    var load = loads[i];
    for (var j = 0; j < linkSets.length; j++) {
      var linkSet = linkSets[j];

      if (linkSet.loads.indexOf(load) != -1)
        console.assert(load.linkSets.indexOf(linkSet) != -1, 'linkSet contains load -> load contains linkSet');

      if (load.linkSets.indexOf(linkSet) != -1)
        console.assert(linkSet.loads.indexOf(load) != -1, 'load contains linkSet -> linkSet contains load');
    }
  }

  for (var i = 0; i < linkSets.length; i++) {
    var linkSet = linkSets[i];
    for (var j = 0; j < linkSet.loads.length; j++) {
      var load = linkSet.loads[j];

      for (var k = 0; k < load.dependencies.length; k++) {
        var depName = load.dependencies[k].value;
        var depLoad;
        for (var l = 0; l < loads.length; l++) {
          if (loads[l].name != depName)
            continue;
          depLoad = loads[l];
          break;
        }

        // loading records are allowed not to have their dependencies yet
        // if (load.status != 'loading')
        //  console.assert(depLoad, 'depLoad found');

        // console.assert(linkSet.loads.indexOf(depLoad) != -1, 'linkset contains all dependencies');
      }
    }
  }
} */


(function() {
  var Promise = __global.Promise || require('when/es6-shim/Promise');
  console.assert = console.assert || function() {};

  // IE8 support
  var indexOf = Array.prototype.indexOf || function(item) {
    for (var i = 0, thisLen = this.length; i < thisLen; i++) {
      if (this[i] === item) {
        return i;
      }
    }
    return -1;
  };
  var defineProperty = $__Object$defineProperty;

  // 15.2.3 - Runtime Semantics: Loader State

  // 15.2.3.11
  function createLoaderLoad(object) {
    return {
      // modules is an object for ES5 implementation
      modules: {},
      loads: [],
      loaderObj: object
    };
  }

  // 15.2.3.2 Load Records and LoadRequest Objects

  // 15.2.3.2.1
  function createLoad(name) {
    return {
      status: 'loading',
      name: name,
      linkSets: [],
      dependencies: [],
      metadata: {}
    };
  }

  // 15.2.3.2.2 createLoadRequestObject, absorbed into calling functions

  // 15.2.4

  // 15.2.4.1
  function loadModule(loader, name, options) {
    return new Promise(asyncStartLoadPartwayThrough({
      step: options.address ? 'fetch' : 'locate',
      loader: loader,
      moduleName: name,
      // allow metadata for import https://bugs.ecmascript.org/show_bug.cgi?id=3091
      moduleMetadata: options && options.metadata || {},
      moduleSource: options.source,
      moduleAddress: options.address
    }));
  }

  // 15.2.4.2
  function requestLoad(loader, request, refererName, refererAddress) {
    // 15.2.4.2.1 CallNormalize
    return new Promise(function(resolve, reject) {
      resolve(loader.loaderObj.normalize(request, refererName, refererAddress));
    })
    // 15.2.4.2.2 GetOrCreateLoad
    .then(function(name) {
      var load;
      if (loader.modules[name]) {
        load = createLoad(name);
        load.status = 'linked';
        // https://bugs.ecmascript.org/show_bug.cgi?id=2795
        // load.module = loader.modules[name];
        return load;
      }

      for (var i = 0, l = loader.loads.length; i < l; i++) {
        load = loader.loads[i];
        if (load.name != name)
          continue;
        console.assert(load.status == 'loading' || load.status == 'loaded', 'loading or loaded');
        return load;
      }

      load = createLoad(name);
      loader.loads.push(load);

      proceedToLocate(loader, load);

      return load;
    });
  }

  // 15.2.4.3
  function proceedToLocate(loader, load) {
    proceedToFetch(loader, load,
      Promise.resolve()
      // 15.2.4.3.1 CallLocate
      .then(function() {
        return loader.loaderObj.locate({ name: load.name, metadata: load.metadata });
      })
    );
  }

  // 15.2.4.4
  function proceedToFetch(loader, load, p) {
    proceedToTranslate(loader, load,
      p
      // 15.2.4.4.1 CallFetch
      .then(function(address) {
        // adjusted, see https://bugs.ecmascript.org/show_bug.cgi?id=2602
        if (load.status != 'loading')
          return;
        load.address = address;

        return loader.loaderObj.fetch({ name: load.name, metadata: load.metadata, address: address });
      })
    );
  }

  var anonCnt = 0;

  // 15.2.4.5
  function proceedToTranslate(loader, load, p) {
    p
    // 15.2.4.5.1 CallTranslate
    .then(function(source) {
      if (load.status != 'loading')
        return;
      return loader.loaderObj.translate({ name: load.name, metadata: load.metadata, address: load.address, source: source });
    })

    // 15.2.4.5.2 CallInstantiate
    .then(function(source) {
      if (load.status != 'loading')
        return;
      load.source = source;
      return loader.loaderObj.instantiate({ name: load.name, metadata: load.metadata, address: load.address, source: source });
    })

    // 15.2.4.5.3 InstantiateSucceeded
    .then(function(instantiateResult) {
      if (load.status != 'loading')
        return;

      if (instantiateResult === undefined) {
        load.address = load.address || 'anon' + ++anonCnt;

        // NB instead of load.kind, use load.isDeclarative
        load.isDeclarative = true;
        // parse sets load.declare, load.depsList
        loader.loaderObj.parse(load);
      }
      else if (typeof instantiateResult == 'object') {
        load.depsList = instantiateResult.deps || [];
        load.execute = instantiateResult.execute;
        load.isDeclarative = false;
      }
      else
        throw TypeError('Invalid instantiate return value');

      // 15.2.4.6 ProcessLoadDependencies
      load.dependencies = [];
      var depsList = load.depsList;

      var loadPromises = [];
      for (var i = 0, l = depsList.length; i < l; i++) (function(request, index) {
        loadPromises.push(
          requestLoad(loader, request, load.name, load.address)

          // 15.2.4.6.1 AddDependencyLoad (load is parentLoad)
          .then(function(depLoad) {

            console.assert(!load.dependencies.some(function(dep) {
              return dep.key == request;
            }), 'not already a dependency');

            // adjusted from spec to maintain dependency order
            // this is due to the System.register internal implementation needs
            load.dependencies[index] = {
              key: request,
              value: depLoad.name
            };

            if (depLoad.status != 'linked') {
              var linkSets = load.linkSets.concat([]);
              for (var i = 0, l = linkSets.length; i < l; i++)
                addLoadToLinkSet(linkSets[i], depLoad);
            }

            // console.log('AddDependencyLoad ' + depLoad.name + ' for ' + load.name);
            // snapshot(loader);
          })
        );
      })(depsList[i], i);

      return Promise.all(loadPromises);
    })

    // 15.2.4.6.2 LoadSucceeded
    .then(function() {
      // console.log('LoadSucceeded ' + load.name);
      // snapshot(loader);

      console.assert(load.status == 'loading', 'is loading');

      load.status = 'loaded';

      var linkSets = load.linkSets.concat([]);
      for (var i = 0, l = linkSets.length; i < l; i++)
        updateLinkSetOnLoad(linkSets[i], load);
    })

    // 15.2.4.5.4 LoadFailed
    ['catch'](function(exc) {
      console.assert(load.status == 'loading', 'is loading on fail');
      load.status = 'failed';
      load.exception = exc;

      var linkSets = load.linkSets.concat([]);
      for (var i = 0, l = linkSets.length; i < l; i++)
        linkSetFailed(linkSets[i], exc);

      console.assert(load.linkSets.length == 0, 'linkSets not removed');
    });
  }

  // 15.2.4.7 PromiseOfStartLoadPartwayThrough absorbed into calling functions

  // 15.2.4.7.1
  function asyncStartLoadPartwayThrough(stepState) {
    return function(resolve, reject) {
      var loader = stepState.loader;
      var name = stepState.moduleName;
      var step = stepState.step;

      if (loader.modules[name])
        throw new TypeError('"' + name + '" already exists in the module table');

      // NB this still seems wrong for LoadModule as we may load a dependency
      // of another module directly before it has finished loading.
      // see https://bugs.ecmascript.org/show_bug.cgi?id=2994
      for (var i = 0, l = loader.loads.length; i < l; i++)
        if (loader.loads[i].name == name)
          throw new TypeError('"' + name + '" already loading');

      var load = createLoad(name);

      load.metadata = stepState.moduleMetadata;

      var linkSet = createLinkSet(loader, load);

      loader.loads.push(load);

      resolve(linkSet.done);

      if (step == 'locate')
        proceedToLocate(loader, load);

      else if (step == 'fetch')
        proceedToFetch(loader, load, Promise.resolve(stepState.moduleAddress));

      else {
        console.assert(step == 'translate', 'translate step');
        load.address = stepState.moduleAddress;
        proceedToTranslate(loader, load, Promise.resolve(stepState.moduleSource));
      }
    }
  }

  // Declarative linking functions run through alternative implementation:
  // 15.2.5.1.1 CreateModuleLinkageRecord not implemented
  // 15.2.5.1.2 LookupExport not implemented
  // 15.2.5.1.3 LookupModuleDependency not implemented

  // 15.2.5.2.1
  function createLinkSet(loader, startingLoad) {
    var linkSet = {
      loader: loader,
      loads: [],
      startingLoad: startingLoad, // added see spec bug https://bugs.ecmascript.org/show_bug.cgi?id=2995
      loadingCount: 0
    };
    linkSet.done = new Promise(function(resolve, reject) {
      linkSet.resolve = resolve;
      linkSet.reject = reject;
    });
    addLoadToLinkSet(linkSet, startingLoad);
    return linkSet;
  }
  // 15.2.5.2.2
  function addLoadToLinkSet(linkSet, load) {
    console.assert(load.status == 'loading' || load.status == 'loaded', 'loading or loaded on link set');

    for (var i = 0, l = linkSet.loads.length; i < l; i++)
      if (linkSet.loads[i] == load)
        return;

    linkSet.loads.push(load);
    load.linkSets.push(linkSet);

    // adjustment, see https://bugs.ecmascript.org/show_bug.cgi?id=2603
    if (load.status != 'loaded') {
      linkSet.loadingCount++;
    }

    var loader = linkSet.loader;

    for (var i = 0, l = load.dependencies.length; i < l; i++) {
      var name = load.dependencies[i].value;

      if (loader.modules[name])
        continue;

      for (var j = 0, d = loader.loads.length; j < d; j++) {
        if (loader.loads[j].name != name)
          continue;

        addLoadToLinkSet(linkSet, loader.loads[j]);
        break;
      }
    }
    // console.log('add to linkset ' + load.name);
    // snapshot(linkSet.loader);
  }

  function doLink(linkSet) {
    try {
      link(linkSet);
    }
    catch(exc) {
      linkSetFailed(linkSet, exc);
      return true;
    }
  }

  // 15.2.5.2.3
  function updateLinkSetOnLoad(linkSet, load) {
    // console.log('update linkset on load ' + load.name);
    // snapshot(linkSet.loader);

    console.assert(load.status == 'loaded' || load.status == 'linked', 'loaded or linked');

    linkSet.loadingCount--;

    if (linkSet.loadingCount > 0)
      return;

    // adjusted for spec bug https://bugs.ecmascript.org/show_bug.cgi?id=2995
    var startingLoad = linkSet.startingLoad;

    // non-executing link variation for loader tracing
    // on the server. Not in spec.
    /***/
    if (linkSet.loader.loaderObj.execute === false) {
      var loads = [].concat(linkSet.loads);
      for (var i = 0, l = loads.length; i < l; i++) {
        var load = loads[i];
        load.module = !load.isDeclarative ? {
          module: _newModule({})
        } : {
          name: load.name,
          module: _newModule({}),
          evaluated: true
        };
        load.status = 'linked';
        finishLoad(linkSet.loader, load);
      }
      return linkSet.resolve(startingLoad);
    }
    /***/

    var abrupt = doLink(linkSet);

    if (abrupt)
      return;

    console.assert(linkSet.loads.length == 0, 'loads cleared');

    linkSet.resolve(startingLoad);
  }

  // 15.2.5.2.4
  function linkSetFailed(linkSet, exc) {
    var loader = linkSet.loader;
    var loads = linkSet.loads.concat([]);
    for (var i = 0, l = loads.length; i < l; i++) {
      var load = loads[i];

      // store all failed load records
      loader.loaderObj.failed = loader.loaderObj.failed || [];
      if (indexOf.call(loader.loaderObj.failed, load) == -1)
        loader.loaderObj.failed.push(load);

      var linkIndex = indexOf.call(load.linkSets, linkSet);
      console.assert(linkIndex != -1, 'link not present');
      load.linkSets.splice(linkIndex, 1);
      if (load.linkSets.length == 0) {
        var globalLoadsIndex = indexOf.call(linkSet.loader.loads, load);
        if (globalLoadsIndex != -1)
          linkSet.loader.loads.splice(globalLoadsIndex, 1);
      }
    }
    linkSet.reject(exc);
  }

  // 15.2.5.2.5
  function finishLoad(loader, load) {
    // add to global trace if tracing
    if (loader.loaderObj.trace) {
      if (!loader.loaderObj.loads)
        loader.loaderObj.loads = {};
      var depMap = {};
      load.dependencies.forEach(function(dep) {
        depMap[dep.key] = dep.value;
      });
      loader.loaderObj.loads[load.name] = {
        name: load.name,
        deps: load.dependencies.map(function(dep){ return dep.key }),
        depMap: depMap,
        address: load.address,
        metadata: load.metadata,
        source: load.source,
        kind: load.isDeclarative ? 'declarative' : 'dynamic'
      };
    }
    // if not anonymous, add to the module table
    if (load.name) {
      console.assert(!loader.modules[load.name], 'load not in module table');
      loader.modules[load.name] = load.module;
    }
    var loadIndex = indexOf.call(loader.loads, load);
    if (loadIndex != -1)
      loader.loads.splice(loadIndex, 1);
    for (var i = 0, l = load.linkSets.length; i < l; i++) {
      loadIndex = indexOf.call(load.linkSets[i].loads, load);
      if (loadIndex != -1)
        load.linkSets[i].loads.splice(loadIndex, 1);
    }
    load.linkSets.splice(0, load.linkSets.length);
  }

  // 15.2.5.3 Module Linking Groups

  // 15.2.5.3.2 BuildLinkageGroups alternative implementation
  // Adjustments (also see https://bugs.ecmascript.org/show_bug.cgi?id=2755)
  // 1. groups is an already-interleaved array of group kinds
  // 2. load.groupIndex is set when this function runs
  // 3. load.groupIndex is the interleaved index ie 0 declarative, 1 dynamic, 2 declarative, ... (or starting with dynamic)
  function buildLinkageGroups(load, loads, groups, loader) {
    groups[load.groupIndex] = groups[load.groupIndex] || [];

    // if the load already has a group index and its in its group, its already been done
    // this logic naturally handles cycles
    if (indexOf.call(groups[load.groupIndex], load) != -1)
      return;

    // now add it to the group to indicate its been seen
    groups[load.groupIndex].push(load);

    for (var i = 0, l = loads.length; i < l; i++) {
      var loadDep = loads[i];

      // dependencies not found are already linked
      for (var j = 0; j < load.dependencies.length; j++) {
        if (loadDep.name == load.dependencies[j].value) {
          // by definition all loads in linkset are loaded, not linked
          console.assert(loadDep.status == 'loaded', 'Load in linkSet not loaded!');

          // if it is a group transition, the index of the dependency has gone up
          // otherwise it is the same as the parent
          var loadDepGroupIndex = load.groupIndex + (loadDep.isDeclarative != load.isDeclarative);

          // the group index of an entry is always the maximum
          if (loadDep.groupIndex === undefined || loadDep.groupIndex < loadDepGroupIndex) {

            // if already in a group, remove from the old group
            if (loadDep.groupIndex) {
              groups[loadDep.groupIndex].splice(indexOf.call(groups[loadDep.groupIndex], loadDep), 1);

              // if the old group is empty, then we have a mixed depndency cycle
              if (groups[loadDep.groupIndex].length == 0)
                throw new TypeError("Mixed dependency cycle detected");
            }

            loadDep.groupIndex = loadDepGroupIndex;
          }

          buildLinkageGroups(loadDep, loads, groups, loader);
        }
      }
    }
  }

  // 15.2.5.4
  function link(linkSet) {

    var loader = linkSet.loader;

    if (!linkSet.loads.length)
      return;

    // console.log('linking {' + logloads(linkSet.loads) + '}');
    // snapshot(loader);

    // 15.2.5.3.1 LinkageGroups alternative implementation

    // build all the groups
    // because the first load represents the top of the tree
    // for a given linkset, we can work down from there
    var groups = [];
    var startingLoad = linkSet.loads[0];
    startingLoad.groupIndex = 0;
    buildLinkageGroups(startingLoad, linkSet.loads, groups, loader);

    // determine the kind of the bottom group
    var curGroupDeclarative = startingLoad.isDeclarative == groups.length % 2;

    // run through the groups from bottom to top
    for (var i = groups.length - 1; i >= 0; i--) {
      var group = groups[i];
      for (var j = 0; j < group.length; j++) {
        var load = group[j];

        // 15.2.5.5 LinkDeclarativeModules adjusted
        if (curGroupDeclarative) {
          linkDeclarativeModule(load, linkSet.loads, loader);
        }
        // 15.2.5.6 LinkDynamicModules adjusted
        else {
          var module = load.execute();
          if (!module || !(module instanceof Module))
            throw new TypeError('Execution must define a Module instance');
          load.module = {
            name: load.name,
            module: module
          };
          load.status = 'linked';
        }
        finishLoad(loader, load);
      }

      // alternative current kind for next loop
      curGroupDeclarative = !curGroupDeclarative;
    }
  }


  // custom module records for binding graph
  // store linking module records in a separate table
  function getOrCreateModuleRecord(name, loader) {
    var moduleRecords = loader.moduleRecords;
    return moduleRecords[name] || (moduleRecords[name] = {
      name: name,
      dependencies: [],
      module: new Module(), // start from an empty module and extend
      importers: []
    });
  }

  // custom declarative linking function
  function linkDeclarativeModule(load, loads, loader) {
    if (load.module)
      return;

    var module = load.module = getOrCreateModuleRecord(load.name, loader);
    var moduleObj = load.module.module;

    var registryEntry = load.declare.call(__global, function(name, value) {
      // NB This should be an Object.defineProperty, but that is very slow.
      //    By disaling this module write-protection we gain performance.
      //    It could be useful to allow an option to enable or disable this.
      module.locked = true;
      moduleObj[name] = value;

      for (var i = 0, l = module.importers.length; i < l; i++) {
        var importerModule = module.importers[i];
        if (!importerModule.locked) {
          var importerIndex = indexOf.call(importerModule.dependencies, module);
          importerModule.setters[importerIndex](moduleObj);
        }
      }

      module.locked = false;
      return value;
    });

    // setup our setters and execution function
    module.setters = registryEntry.setters;
    module.execute = registryEntry.execute;

    // now link all the module dependencies
    // amending the depMap as we go
    for (var i = 0, l = load.dependencies.length; i < l; i++) {
      var depName = load.dependencies[i].value;
      var depModule = loader.modules[depName];

      // if dependency not already in the module registry
      // then try and link it now
      if (!depModule) {
        // get the dependency load record
        for (var j = 0; j < loads.length; j++) {
          if (loads[j].name != depName)
            continue;

          // only link if already not already started linking (stops at circular / dynamic)
          if (!loads[j].module) {
            linkDeclarativeModule(loads[j], loads, loader);
            depModule = loads[j].module;
          }
          // if circular, create the module record
          else {
            depModule = getOrCreateModuleRecord(depName, loader);
          }
        }
      }

      // only declarative modules have dynamic bindings
      if (depModule.importers) {
        module.dependencies.push(depModule);
        depModule.importers.push(module);
      }
      else {
        // track dynamic records as null module records as already linked
        module.dependencies.push(null);
      }

      // run the setter for this dependency
      if (module.setters[i])
        module.setters[i](depModule.module);
    }

    load.status = 'linked';
  }



  // 15.2.5.5.1 LinkImports not implemented
  // 15.2.5.7 ResolveExportEntries not implemented
  // 15.2.5.8 ResolveExports not implemented
  // 15.2.5.9 ResolveExport not implemented
  // 15.2.5.10 ResolveImportEntries not implemented

  // 15.2.6.1
  function evaluateLoadedModule(loader, load) {
    console.assert(load.status == 'linked', 'is linked ' + load.name);

    doEnsureEvaluated(load.module, [], loader);
    return load.module.module;
  }

  /*
   * Module Object non-exotic for ES5:
   *
   * module.module        bound module object
   * module.execute       execution function for module
   * module.dependencies  list of module objects for dependencies
   * See getOrCreateModuleRecord for all properties
   *
   */
  function doExecute(module) {
    try {
      module.execute.call(__global);
    }
    catch(e) {
      return e;
    }
  }

  // propogate execution errors
  // see https://bugs.ecmascript.org/show_bug.cgi?id=2993
  function doEnsureEvaluated(module, seen, loader) {
    var err = ensureEvaluated(module, seen, loader);
    if (err)
      throw err;
  }
  // 15.2.6.2 EnsureEvaluated adjusted
  function ensureEvaluated(module, seen, loader) {
    if (module.evaluated || !module.dependencies)
      return;

    seen.push(module);

    var deps = module.dependencies;
    var err;

    for (var i = 0, l = deps.length; i < l; i++) {
      var dep = deps[i];
      // dynamic dependencies are empty in module.dependencies
      // as they are already linked
      if (!dep)
        continue;
      if (indexOf.call(seen, dep) == -1) {
        err = ensureEvaluated(dep, seen, loader);
        // stop on error, see https://bugs.ecmascript.org/show_bug.cgi?id=2996
        if (err)
          return err + '\n  in module ' + dep.name;
      }
    }

    if (module.failed)
      return new Error('Module failed execution.');

    if (module.evaluated)
      return;

    module.evaluated = true;
    err = doExecute(module);
    if (err) {
      module.failed = true;
    } else if (Object.preventExtensions) {
      // spec variation
      // we don't create a new module here because it was created and ammended
      // we just disable further extensions instead
      Object.preventExtensions(module.module);
    }

    module.execute = undefined;
    return err;
  }

  // 26.3 Loader

  // 26.3.1.1
  function Loader(options) {
    if (typeof options != 'object')
      throw new TypeError('Options must be an object');

    if (options.normalize)
      this.normalize = options.normalize;
    if (options.locate)
      this.locate = options.locate;
    if (options.fetch)
      this.fetch = options.fetch;
    if (options.translate)
      this.translate = options.translate;
    if (options.instantiate)
      this.instantiate = options.instantiate;

    this._loader = {
      loaderObj: this,
      loads: [],
      modules: {},
      importPromises: {},
      moduleRecords: {}
    };

    // 26.3.3.6
    defineProperty(this, 'global', {
      get: function() {
        return __global;
      }
    });

    // 26.3.3.13 realm not implemented
  }

  function Module() {}

  // importPromises adds ability to import a module twice without error - https://bugs.ecmascript.org/show_bug.cgi?id=2601
  function createImportPromise(loader, name, promise) {
    var importPromises = loader._loader.importPromises;
    importPromises[name] = promise;
    promise.then(function() {
      importPromises[name] = undefined;
    });
    promise['catch'](function() {
      importPromises[name] = undefined;
    });
    return promise;
  }

  Loader.prototype = {
    // 26.3.3.1
    constructor: Loader,
    // 26.3.3.2
    define: function(name, source, options) {
      // check if already defined
      if (this._loader.importPromises[name])
        throw new TypeError('Module is already loading.');
      return createImportPromise(this, name, new Promise(asyncStartLoadPartwayThrough({
        step: 'translate',
        loader: this._loader,
        moduleName: name,
        moduleMetadata: options && options.metadata || {},
        moduleSource: source,
        moduleAddress: options && options.address
      })));
    },
    // 26.3.3.3
    'delete': function(name) {
      return this._loader.modules[name] ? delete this._loader.modules[name] : false;
    },
    // 26.3.3.4 entries not implemented
    // 26.3.3.5
    get: function(key) {
      if (!this._loader.modules[key])
        return;
      doEnsureEvaluated(this._loader.modules[key], [], this);
      return this._loader.modules[key].module;
    },
    // 26.3.3.7
    has: function(name) {
      return !!this._loader.modules[name];
    },
    // 26.3.3.8
    'import': function(name, options) {
      // run normalize first
      var loaderObj = this;

      // added, see https://bugs.ecmascript.org/show_bug.cgi?id=2659
      return Promise.resolve(loaderObj.normalize(name, options && options.name, options && options.address))
      .then(function(name) {
        var loader = loaderObj._loader;

        if (loader.modules[name]) {
          doEnsureEvaluated(loader.modules[name], [], loader._loader);
          return loader.modules[name].module;
        }

        return loader.importPromises[name] || createImportPromise(loaderObj, name,
          loadModule(loader, name, options || {})
          .then(function(load) {
            delete loader.importPromises[name];
            return evaluateLoadedModule(loader, load);
          }));
      });
    },
    // 26.3.3.9 keys not implemented
    // 26.3.3.10
    load: function(name, options) {
      if (this._loader.modules[name]) {
        doEnsureEvaluated(this._loader.modules[name], [], this._loader);
        return Promise.resolve(this._loader.modules[name].module);
      }
      return this._loader.importPromises[name] || createImportPromise(this, name, loadModule(this._loader, name, {}));
    },
    // 26.3.3.11
    module: function(source, options) {
      var load = createLoad();
      load.address = options && options.address;
      var linkSet = createLinkSet(this._loader, load);
      var sourcePromise = Promise.resolve(source);
      var loader = this._loader;
      var p = linkSet.done.then(function() {
        return evaluateLoadedModule(loader, load);
      });
      proceedToTranslate(loader, load, sourcePromise);
      return p;
    },
    // 26.3.3.12
    newModule: function (obj) {
      if (typeof obj != 'object')
        throw new TypeError('Expected object');

      // we do this to be able to tell if a module is a module privately in ES5
      // by doing m instanceof Module
      var m = new Module();

      for (var key in obj) {
        (function (key) {
          defineProperty(m, key, {
            configurable: false,
            enumerable: true,
            get: function () {
              return obj[key];
            }
          });
        })(key);
      }

      if (Object.preventExtensions)
        Object.preventExtensions(m);

      return m;
    },
    // 26.3.3.14
    set: function(name, module) {
      if (!(module instanceof Module))
        throw new TypeError('Loader.set(' + name + ', module) must be a module');
      this._loader.modules[name] = {
        module: module
      };
    },
    // 26.3.3.15 values not implemented
    // 26.3.3.16 @@iterator not implemented
    // 26.3.3.17 @@toStringTag not implemented

    // 26.3.3.18.1
    normalize: function(name, referrerName, referrerAddress) {
      return name;
    },
    // 26.3.3.18.2
    locate: function(load) {
      return load.name;
    },
    // 26.3.3.18.3
    fetch: function(load) {
      throw new TypeError('Fetch not implemented');
    },
    // 26.3.3.18.4
    translate: function(load) {
      return load.source;
    },
    parse: function(load) {
      throw new TypeError('Loader.parse is not implemented');
    },
    // 26.3.3.18.5
    instantiate: function(load) {
    }
  };

  var _newModule = Loader.prototype.newModule;


  /*
   * Traceur-specific Parsing Code for Loader
   */
  (function() {
    function checkForErrors(output, load) {
      if (output.errors.length) {
        for (var i = 0, l = output.errors.length; i < l; i++)
          console.error(output.errors[i]);
        throw new Error('Parse of ' + load.name + ', ' + load.address + ' failed, ' + output.errors.length);
      }
    }

    // parse function is used to parse a load record
    // Returns an array of ModuleSpecifiers
    var traceur;
    Loader.prototype.parse = function(load) {
      if (!traceur) {
        if (typeof window == 'undefined' &&
           typeof WorkerGlobalScope == 'undefined')
          traceur = require('traceur');
        else if (__global.traceur)
          traceur = __global.traceur;
        else
          throw new TypeError('Include Traceur for module syntax support');
      }

      console.assert(load.source, 'Non-empty source');

      var depsList;

      load.isDeclarative = true;

      var compiler = new traceur.Compiler();
      var options = System.traceurOptions || {};
      options.modules = 'instantiate';
      options.sourceMaps = true;
      options.filename = load.address;
      var output = compiler.stringToTree({content: load.source, options: options});
      checkForErrors(output);

      output = compiler.treeToTree(output);
      checkForErrors(output);

      output = compiler.treeToString(output);
      checkForErrors(output);

      var source = output.js;
      var sourceMap = output.generatedSourceMap;

      if (__global.btoa && sourceMap)
        source += '\n//# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(sourceMap))) + '\n';

      __eval(source, __global, load);
    }
  })();

  if (typeof exports === 'object')
    module.exports = Loader;

  __global.Reflect = __global.Reflect || {};
  __global.Reflect.Loader = __global.Reflect.Loader || Loader;
  __global.Reflect.global = __global.Reflect.global || __global;
  __global.LoaderPolyfill = Loader;

})();

/*
*********************************************************************************************

  System Loader Implementation

    - Implemented to https://github.com/jorendorff/js-loaders/blob/master/browser-loader.js

    - <script type="module"> supported

*********************************************************************************************
*/



(function() {
  var isWorker = typeof self !== 'undefined' && typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
  var isBrowser = typeof window != 'undefined' && !isWorker;
  var Promise = __global.Promise || require('when/es6-shim/Promise');

  // Helpers
  // Absolute URL parsing, from https://gist.github.com/Yaffle/1088850
  function parseURI(url) {
    var m = String(url).replace(/^\s+|\s+$/g, '').match(/^([^:\/?#]+:)?(\/\/(?:[^:@]*(?::[^:@]*)?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);
    // authority = '//' + user + ':' + pass '@' + hostname + ':' port
    return (m ? {
      href     : m[0] || '',
      protocol : m[1] || '',
      authority: m[2] || '',
      host     : m[3] || '',
      hostname : m[4] || '',
      port     : m[5] || '',
      pathname : m[6] || '',
      search   : m[7] || '',
      hash     : m[8] || ''
    } : null);
  }

  function removeDotSegments(input) {
    var output = [];
    input.replace(/^(\.\.?(\/|$))+/, '')
      .replace(/\/(\.(\/|$))+/g, '/')
      .replace(/\/\.\.$/, '/../')
      .replace(/\/?[^\/]*/g, function (p) {
        if (p === '/..')
          output.pop();
        else
          output.push(p);
    });
    return output.join('').replace(/^\//, input.charAt(0) === '/' ? '/' : '');
  }

  function toAbsoluteURL(base, href) {

    href = parseURI(href || '');
    base = parseURI(base || '');

    return !href || !base ? null : (href.protocol || base.protocol) +
      (href.protocol || href.authority ? href.authority : base.authority) +
      removeDotSegments(href.protocol || href.authority || href.pathname.charAt(0) === '/' ? href.pathname : (href.pathname ? ((base.authority && !base.pathname ? '/' : '') + base.pathname.slice(0, base.pathname.lastIndexOf('/') + 1) + href.pathname) : base.pathname)) +
      (href.protocol || href.authority || href.pathname ? href.search : (href.search || base.search)) +
      href.hash;
  }

  var fetchTextFromURL;

  if (isBrowser || isWorker) {
    fetchTextFromURL = function(url, fulfill, reject) {
      var xhr = new XMLHttpRequest();
      var sameDomain = true;
      if (!('withCredentials' in xhr)) {
        // check if same domain
        var domainCheck = /^(\w+:)?\/\/([^\/]+)/.exec(url);
        if (domainCheck) {
          sameDomain = domainCheck[2] === window.location.host;
          if (domainCheck[1])
            sameDomain &= domainCheck[1] === window.location.protocol;
        }
      }
      if (!sameDomain) {
        xhr = new XDomainRequest();
        xhr.onload = load;
        xhr.onerror = error;
        xhr.ontimeout = error;
      }
      function load() {
        fulfill(xhr.responseText);
      }
      function error() {
        reject(xhr.statusText + ': ' + url || 'XHR error');
      }

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200 || (xhr.status == 0 && xhr.responseText)) {
            load();
          } else {
            error();
          }
        }
      };
      xhr.open("GET", url, true);
      xhr.send(null);
    }
  }
  else {
    var fs;
    fetchTextFromURL = function(url, fulfill, reject) {
      fs = fs || require('fs');
      return fs.readFile(url, function(err, data) {
        if (err)
          return reject(err);
        else
          fulfill(data + '');
      });
    }
  }

  var SystemLoader = function($__super) {
    function SystemLoader(options) {
      $__Object$getPrototypeOf(SystemLoader.prototype).constructor.call(this, options || {});

      // Set default baseURL and paths
      if (isBrowser || isWorker) {
        var href = __global.location.href.split('#')[0].split('?')[0];
        this.baseURL = href.substring(0, href.lastIndexOf('/') + 1);
      }
      else {
        this.baseURL = process.cwd() + '/';
      }
      this.paths = { '*': '*.js' };
    }

    SystemLoader.__proto__ = ($__super !== null ? $__super : Function.prototype);
    SystemLoader.prototype = $__Object$create(($__super !== null ? $__super.prototype : null));

    $__Object$defineProperty(SystemLoader.prototype, "constructor", {
      value: SystemLoader
    });

    $__Object$defineProperty(SystemLoader.prototype, "global", {
      get: function() {
        return isBrowser ? window : (isWorker ? self : __global);
      },

      enumerable: false
    });

    $__Object$defineProperty(SystemLoader.prototype, "strict", {
      get: function() { return true; },
      enumerable: false
    });

    $__Object$defineProperty(SystemLoader.prototype, "normalize", {
      value: function(name, parentName, parentAddress) {
        if (typeof name != 'string')
          throw new TypeError('Module name must be a string');

        var segments = name.split('/');

        if (segments.length == 0)
          throw new TypeError('No module name provided');

        // current segment
        var i = 0;
        // is the module name relative
        var rel = false;
        // number of backtracking segments
        var dotdots = 0;
        if (segments[0] == '.') {
          i++;
          if (i == segments.length)
            throw new TypeError('Illegal module name "' + name + '"');
          rel = true;
        }
        else {
          while (segments[i] == '..') {
            i++;
            if (i == segments.length)
              throw new TypeError('Illegal module name "' + name + '"');
          }
          if (i)
            rel = true;
          dotdots = i;
        }

        for (var j = i; j < segments.length; j++) {
          var segment = segments[j];
          if (segment == '' || segment == '.' || segment == '..')
            throw new TypeError('Illegal module name "' + name + '"');
        }

        if (!rel)
          return name;

        // build the full module name
        var normalizedParts = [];
        var parentParts = (parentName || '').split('/');
        var normalizedLen = parentParts.length - 1 - dotdots;

        normalizedParts = normalizedParts.concat(parentParts.splice(0, parentParts.length - 1 - dotdots));
        normalizedParts = normalizedParts.concat(segments.splice(i, segments.length - i));

        return normalizedParts.join('/');
      },

      enumerable: false,
      writable: true
    });

    $__Object$defineProperty(SystemLoader.prototype, "locate", {
      value: function(load) {
        var name = load.name;

        // NB no specification provided for System.paths, used ideas discussed in https://github.com/jorendorff/js-loaders/issues/25

        // most specific (longest) match wins
        var pathMatch = '', wildcard;

        // check to see if we have a paths entry
        for (var p in this.paths) {
          var pathParts = p.split('*');
          if (pathParts.length > 2)
            throw new TypeError('Only one wildcard in a path is permitted');

          // exact path match
          if (pathParts.length == 1) {
            if (name == p && p.length > pathMatch.length) {
              pathMatch = p;
              break;
            }
          }

          // wildcard path match
          else {
            if (name.substr(0, pathParts[0].length) == pathParts[0] && name.substr(name.length - pathParts[1].length) == pathParts[1]) {
              pathMatch = p;
              wildcard = name.substr(pathParts[0].length, name.length - pathParts[1].length - pathParts[0].length);
            }
          }
        }

        var outPath = this.paths[pathMatch];
        if (wildcard)
          outPath = outPath.replace('*', wildcard);

        // percent encode just '#' in module names
        // according to https://github.com/jorendorff/js-loaders/blob/master/browser-loader.js#L238
        // we should encode everything, but it breaks for servers that don't expect it 
        // like in (https://github.com/systemjs/systemjs/issues/168)
        if (isBrowser)
          outPath = outPath.replace(/#/g, '%23');

        return toAbsoluteURL(this.baseURL, outPath);
      },

      enumerable: false,
      writable: true
    });

    $__Object$defineProperty(SystemLoader.prototype, "fetch", {
      value: function(load) {
        var self = this;
        return new Promise(function(resolve, reject) {
          fetchTextFromURL(toAbsoluteURL(self.baseURL, load.address), function(source) {
            resolve(source);
          }, reject);
        });
      },

      enumerable: false,
      writable: true
    });

    return SystemLoader;
  }(__global.LoaderPolyfill);

  var System = new SystemLoader();

  // note we have to export before runing "init" below
  if (typeof exports === 'object')
    module.exports = System;

  __global.System = System;

  // <script type="module"> support
  // allow a data-init function callback once loaded
  if (isBrowser) {
    var curScript = document.getElementsByTagName('script');
    curScript = curScript[curScript.length - 1];

    function completed() {
      document.removeEventListener( "DOMContentLoaded", completed, false );
      window.removeEventListener( "load", completed, false );
      ready();
    }

    function ready() {
      var scripts = document.getElementsByTagName('script');

      for (var i = 0; i < scripts.length; i++) {
        var script = scripts[i];
        if (script.type == 'module') {
          var source = script.innerHTML;
          System.module(source)['catch'](function(err) { setTimeout(function() { throw err; }); });
        }
      }
    }

    // DOM ready, taken from https://github.com/jquery/jquery/blob/master/src/core/ready.js#L63
    if (document.readyState === 'complete') {
      setTimeout(ready);
    }
    else if (document.addEventListener) {
      document.addEventListener('DOMContentLoaded', completed, false);
      window.addEventListener('load', completed, false);
    }

    // run the data-init function on the script tag
    if (curScript.getAttribute('data-init'))
      window[curScript.getAttribute('data-init')]();
  }
})();

// Define our eval outside of the scope of any other reference defined in this
// file to avoid adding those references to the evaluation scope.
function __eval(__source, __global, load) {
  // Hijack System.register to set declare function
  var __curRegister = System.register;
  System.register = function(name, deps, declare) {
    if (typeof name != 'string') {
      declare = deps;
      deps = name;
    }
    // store the registered declaration as load.declare
    // store the deps as load.deps
    load.declare = declare;
    load.depsList = deps;
  }
  try {
    eval('(function() { var __moduleName = "' + (load.name || '').replace('"', '\"') + '"; ' + __source + ' \n }).call(__global);');
  }
  catch(e) {
    if (e.name == 'SyntaxError' || e.name == 'TypeError')
      e.message = 'Evaluating ' + (load.name || load.address) + '\n\t' + e.message;
    throw e;
  }

  System.register = __curRegister;
}

})(typeof window != 'undefined' ? window : (typeof WorkerGlobalScope != 'undefined' ?
                                           self : global));

/*
 * SystemJS v0.8.2
 */

(function($__global) {

$__global.upgradeSystemLoader = function() {
  $__global.upgradeSystemLoader = undefined;

  // indexOf polyfill for IE
  var indexOf = Array.prototype.indexOf || function(item) {
    for (var i = 0, l = this.length; i < l; i++)
      if (this[i] === item)
        return i;
    return -1;
  }

  // Absolute URL parsing, from https://gist.github.com/Yaffle/1088850
  function parseURI(url) {
    var m = String(url).replace(/^\s+|\s+$/g, '').match(/^([^:\/?#]+:)?(\/\/(?:[^:@]*(?::[^:@]*)?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);
    // authority = '//' + user + ':' + pass '@' + hostname + ':' port
    return (m ? {
      href     : m[0] || '',
      protocol : m[1] || '',
      authority: m[2] || '',
      host     : m[3] || '',
      hostname : m[4] || '',
      port     : m[5] || '',
      pathname : m[6] || '',
      search   : m[7] || '',
      hash     : m[8] || ''
    } : null);
  }
  function toAbsoluteURL(base, href) {
    function removeDotSegments(input) {
      var output = [];
      input.replace(/^(\.\.?(\/|$))+/, '')
        .replace(/\/(\.(\/|$))+/g, '/')
        .replace(/\/\.\.$/, '/../')
        .replace(/\/?[^\/]*/g, function (p) {
          if (p === '/..')
            output.pop();
          else
            output.push(p);
      });
      return output.join('').replace(/^\//, input.charAt(0) === '/' ? '/' : '');
    }

    href = parseURI(href || '');
    base = parseURI(base || '');

    return !href || !base ? null : (href.protocol || base.protocol) +
      (href.protocol || href.authority ? href.authority : base.authority) +
      removeDotSegments(href.protocol || href.authority || href.pathname.charAt(0) === '/' ? href.pathname : (href.pathname ? ((base.authority && !base.pathname ? '/' : '') + base.pathname.slice(0, base.pathname.lastIndexOf('/') + 1) + href.pathname) : base.pathname)) +
      (href.protocol || href.authority || href.pathname ? href.search : (href.search || base.search)) +
      href.hash;
  }

  // clone the original System loader
  var System;
  (function() {
    var originalSystem = $__global.System;
    System = $__global.System = new LoaderPolyfill(originalSystem);
    System.baseURL = originalSystem.baseURL;
    System.paths = { '*': '*.js' };
    System.originalSystem = originalSystem;
  })();

  System.noConflict = function() {
    $__global.SystemJS = System;
    $__global.System = System.originalSystem;
  }

  
/*
 * Meta Extension
 *
 * Sets default metadata on a load record (load.metadata) from
 * loader.meta[moduleName].
 * Also provides an inline meta syntax for module meta in source.
 *
 * Eg:
 *
 * loader.meta['my/module'] = { some: 'meta' };
 *
 * load.metadata.some = 'meta' will now be set on the load record.
 *
 * The same meta could be set with a my/module.js file containing:
 * 
 * my/module.js
 *   "some meta"; 
 *   "another meta";
 *   console.log('this is my/module');
 *
 * The benefit of inline meta is that coniguration doesn't need
 * to be known in advanced, which is useful for modularising
 * configuration and avoiding the need for configuration injection.
 *
 *
 * Example
 * -------
 *
 * The simplest meta example is setting the module format:
 *
 * System.meta['my/module'] = { format: 'amd' };
 *
 * or inside 'my/module.js':
 *
 * "format amd";
 * define(...);
 * 
 */

function meta(loader) {
  var metaRegEx = /^(\s*\/\*.*\*\/|\s*\/\/[^\n]*|\s*"[^"]+"\s*;?|\s*'[^']+'\s*;?)+/;
  var metaPartRegEx = /\/\*.*\*\/|\/\/[^\n]*|"[^"]+"\s*;?|'[^']+'\s*;?/g;

  loader.meta = {};

  function setConfigMeta(loader, load) {
    var meta = loader.meta && loader.meta[load.name];
    if (meta) {
      for (var p in meta)
        load.metadata[p] = load.metadata[p] || meta[p];
    }
  }

  var loaderLocate = loader.locate;
  loader.locate = function(load) {
    setConfigMeta(this, load);
    return loaderLocate.call(this, load);
  }

  var loaderTranslate = loader.translate;
  loader.translate = function(load) {
    // detect any meta header syntax
    var meta = load.source.match(metaRegEx);
    if (meta) {
      var metaParts = meta[0].match(metaPartRegEx);
      for (var i = 0; i < metaParts.length; i++) {
        var len = metaParts[i].length;

        var firstChar = metaParts[i].substr(0, 1);
        if (metaParts[i].substr(len - 1, 1) == ';')
          len--;
      
        if (firstChar != '"' && firstChar != "'")
          continue;

        var metaString = metaParts[i].substr(1, metaParts[i].length - 3);

        var metaName = metaString.substr(0, metaString.indexOf(' '));
        if (metaName) {
          var metaValue = metaString.substr(metaName.length + 1, metaString.length - metaName.length - 1);

          if (load.metadata[metaName] instanceof Array)
            load.metadata[metaName].push(metaValue);
          else if (!load.metadata[metaName])
            load.metadata[metaName] = metaValue;
        }
      }
    }
    // config meta overrides
    setConfigMeta(this, load);
    
    return loaderTranslate.call(this, load);
  }
}/*
 * Instantiate registry extension
 *
 * Supports Traceur System.register 'instantiate' output for loading ES6 as ES5.
 *
 * - Creates the loader.register function
 * - Also supports metadata.format = 'register' in instantiate for anonymous register modules
 * - Also supports metadata.deps, metadata.execute and metadata.executingRequire
 *     for handling dynamic modules alongside register-transformed ES6 modules
 *
 * Works as a standalone extension, but benefits from having a more 
 * advanced __eval defined like in SystemJS polyfill-wrapper-end.js
 *
 * The code here replicates the ES6 linking groups algorithm to ensure that
 * circular ES6 compiled into System.register can work alongside circular AMD 
 * and CommonJS, identically to the actual ES6 loader.
 *
 */
function register(loader) {
  if (typeof indexOf == 'undefined')
    indexOf = Array.prototype.indexOf;
  if (typeof __eval == 'undefined')
    __eval = 0 || eval; // uglify breaks without the 0 ||

  // define exec for easy evaluation of a load record (load.name, load.source, load.address)
  // main feature is source maps support handling
  var curSystem;
  function exec(load) {
    var loader = this;
    if (load.name == '@traceur') {
      curSystem = System;
    }
    // support sourceMappingURL (efficiently)
    var sourceMappingURL;
    var lastLineIndex = load.source.lastIndexOf('\n');
    if (lastLineIndex != -1) {
      if (load.source.substr(lastLineIndex + 1, 21) == '//# sourceMappingURL=') {
        sourceMappingURL = load.source.substr(lastLineIndex + 22, load.source.length - lastLineIndex - 22);
        if (typeof toAbsoluteURL != 'undefined')
          sourceMappingURL = toAbsoluteURL(load.address, sourceMappingURL);
      }
    }

    __eval(load.source, load.address, sourceMappingURL);

    // traceur overwrites System and Module - write them back
    if (load.name == '@traceur') {
      loader.global.traceurSystem = loader.global.System;
      loader.global.System = curSystem;
    }
  }
  loader.__exec = exec;

  function dedupe(deps) {
    var newDeps = [];
    for (var i = 0, l = deps.length; i < l; i++)
      if (indexOf.call(newDeps, deps[i]) == -1)
        newDeps.push(deps[i])
    return newDeps;
  }

  /*
   * There are two variations of System.register:
   * 1. System.register for ES6 conversion (2-3 params) - System.register([name, ]deps, declare)
   *    see https://github.com/ModuleLoader/es6-module-loader/wiki/System.register-Explained
   *
   * 2. System.register for dynamic modules (3-4 params) - System.register([name, ]deps, executingRequire, execute)
   * the true or false statement 
   *
   * this extension implements the linking algorithm for the two variations identical to the spec
   * allowing compiled ES6 circular references to work alongside AMD and CJS circular references.
   *
   */
  // loader.register sets loader.defined for declarative modules
  var anonRegister;
  var calledRegister;
  function register(name, deps, declare, execute) {
    if (typeof name != 'string') {
      execute = declare;
      declare = deps;
      deps = name;
      name = null;
    }

    calledRegister = true;
    
    var register;

    // dynamic
    if (typeof declare == 'boolean') {
      register = {
        declarative: false,
        deps: deps,
        execute: execute,
        executingRequire: declare
      };
    }
    else {
      // ES6 declarative
      if (deps.length > 0 && declare.length != 1)
        throw 'Invalid System.register form for ' + name + '. Declare function must take one argument.';
      register = {
        declarative: true,
        deps: deps,
        declare: declare
      };
    }
    
    // named register
    if (name) {
      register.name = name;
      // we never overwrite an existing define
      if (!loader.defined[name])
        loader.defined[name] = register; 
    }
    // anonymous register
    else if (register.declarative) {
      if (anonRegister)
        throw 'Multiple anonymous System.register calls in the same module file.';
      anonRegister = register;
    }
  }
  /*
   * Registry side table - loader.defined
   * Registry Entry Contains:
   *    - name
   *    - deps 
   *    - declare for declarative modules
   *    - execute for dynamic modules, different to declarative execute on module
   *    - executingRequire indicates require drives execution for circularity of dynamic modules
   *    - declarative optional boolean indicating which of the above
   *
   * Can preload modules directly on System.defined['my/module'] = { deps, execute, executingRequire }
   *
   * Then the entry gets populated with derived information during processing:
   *    - normalizedDeps derived from deps, created in instantiate
   *    - groupIndex used by group linking algorithm
   *    - evaluated indicating whether evaluation has happend
   *    - module the module record object, containing:
   *      - exports actual module exports
   *      
   *    Then for declarative only we track dynamic bindings with the records:
   *      - name
   *      - setters declarative setter functions
   *      - exports actual module values
   *      - dependencies, module records of dependencies
   *      - importers, module records of dependents
   *
   * After linked and evaluated, entries are removed, declarative module records remain in separate
   * module binding table
   *
   */

  function defineRegister(loader) {
    if (loader.register)
      return;

    loader.register = register;

    if (!loader.defined)
      loader.defined = {};
    
    // script injection mode calls this function synchronously on load
    var onScriptLoad = loader.onScriptLoad;
    loader.onScriptLoad = function(load) {
      onScriptLoad(load);
      // anonymous define
      if (anonRegister)
        load.metadata.entry = anonRegister;
      
      if (anonRegister || calledRegister)
        load.metadata.format = load.metadata.format || 'register';
      if (calledRegister)
        load.metadata.registered = true;
    }
  }

  defineRegister(loader);

  function buildGroups(entry, loader, groups) {
    groups[entry.groupIndex] = groups[entry.groupIndex] || [];

    if (indexOf.call(groups[entry.groupIndex], entry) != -1)
      return;

    groups[entry.groupIndex].push(entry);

    for (var i = 0, l = entry.normalizedDeps.length; i < l; i++) {
      var depName = entry.normalizedDeps[i];
      var depEntry = loader.defined[depName];
      
      // not in the registry means already linked / ES6
      if (!depEntry || depEntry.evaluated)
        continue;
      
      // now we know the entry is in our unlinked linkage group
      var depGroupIndex = entry.groupIndex + (depEntry.declarative != entry.declarative);

      // the group index of an entry is always the maximum
      if (depEntry.groupIndex === undefined || depEntry.groupIndex < depGroupIndex) {
        
        // if already in a group, remove from the old group
        if (depEntry.groupIndex) {
          groups[depEntry.groupIndex].splice(indexOf.call(groups[depEntry.groupIndex], depEntry), 1);

          // if the old group is empty, then we have a mixed depndency cycle
          if (groups[depEntry.groupIndex].length == 0)
            throw new TypeError("Mixed dependency cycle detected");
        }

        depEntry.groupIndex = depGroupIndex;
      }

      buildGroups(depEntry, loader, groups);
    }
  }

  function link(name, loader) {
    var startEntry = loader.defined[name];

    startEntry.groupIndex = 0;

    var groups = [];

    buildGroups(startEntry, loader, groups);

    var curGroupDeclarative = !!startEntry.declarative == groups.length % 2;
    for (var i = groups.length - 1; i >= 0; i--) {
      var group = groups[i];
      for (var j = 0; j < group.length; j++) {
        var entry = group[j];

        // link each group
        if (curGroupDeclarative)
          linkDeclarativeModule(entry, loader);
        else
          linkDynamicModule(entry, loader);
      }
      curGroupDeclarative = !curGroupDeclarative; 
    }
  }

  // module binding records
  var moduleRecords = {};
  function getOrCreateModuleRecord(name) {
    return moduleRecords[name] || (moduleRecords[name] = {
      name: name,
      dependencies: [],
      exports: {}, // start from an empty module and extend
      importers: []
    })
  }

  function linkDeclarativeModule(entry, loader) {
    // only link if already not already started linking (stops at circular)
    if (entry.module)
      return;

    var module = entry.module = getOrCreateModuleRecord(entry.name);
    var exports = entry.module.exports;

    var declaration = entry.declare.call(loader.global, function(name, value) {
      module.locked = true;
      exports[name] = value;

      for (var i = 0, l = module.importers.length; i < l; i++) {
        var importerModule = module.importers[i];
        if (!importerModule.locked) {
          var importerIndex = indexOf.call(importerModule.dependencies, module);
          importerModule.setters[importerIndex](exports);
        }
      }

      module.locked = false;
      return value;
    });
    
    module.setters = declaration.setters;
    module.execute = declaration.execute;

    if (!module.setters || !module.execute) {
      throw "Invalid System.register form for " + entry.name;
    }

    // now link all the module dependencies
    for (var i = 0, l = entry.normalizedDeps.length; i < l; i++) {
      var depName = entry.normalizedDeps[i];
      var depEntry = loader.defined[depName];
      var depModule = moduleRecords[depName];

      // work out how to set depExports based on scenarios...
      var depExports;

      if (depModule) {
        depExports = depModule.exports;
      }
      // dynamic, already linked in our registry
      else if (depEntry && !depEntry.declarative) {
        depExports = { 'default': depEntry.module.exports, '__useDefault': true };
      }
      // in the loader registry
      else if (!depEntry) {
        depExports = loader.get(depName);
      }
      // we have an entry -> link
      else {
        linkDeclarativeModule(depEntry, loader);
        depModule = depEntry.module;
        depExports = depModule.exports;
      }

      // only declarative modules have dynamic bindings
      if (depModule && depModule.importers) {
        depModule.importers.push(module);
        module.dependencies.push(depModule);
      }
      else {
        module.dependencies.push(null);
      }

      // run the setter for this dependency
      if (module.setters[i])
        module.setters[i](depExports);
    }
  }

  // An analog to loader.get covering execution of all three layers (real declarative, simulated declarative, simulated dynamic)
  function getModule(name, loader) {
    var exports;
    var entry = loader.defined[name];

    if (!entry) {
      exports = loader.get(name);
      if (!exports)
        throw "System Register: The module requested " + name + " but this was not declared as a dependency";
      if (exports.__useDefault)
        exports = exports['default'];
    }

    else {
      if (entry.declarative)
        ensureEvaluated(name, [], loader);
    
      else if (!entry.evaluated)
        linkDynamicModule(entry, loader);

      exports = entry.module.exports;
    }

    return exports;
  }

  function linkDynamicModule(entry, loader) {
    if (entry.module)
      return;

    var exports = {};

    var module = entry.module = { exports: exports, id: entry.name };

    // AMD requires execute the tree first
    if (!entry.executingRequire) {
      for (var i = 0, l = entry.normalizedDeps.length; i < l; i++) {
        var depName = entry.normalizedDeps[i];
        var depEntry = loader.defined[depName];
        if (depEntry)
          linkDynamicModule(depEntry, loader);
      }
    }

    // now execute
    entry.evaluated = true;
    var output = entry.execute.call(loader.global, function(name) {
      for (var i = 0, l = entry.deps.length; i < l; i++) {
        if (entry.deps[i] != name)
          continue;
        return getModule(entry.normalizedDeps[i], loader);
      }

    }, exports, module);
    
    if (output)
      module.exports = output;
      
    /*if ( output && output.__esModule )
      entry.module = output;
    else if (output)
      entry.module['default'] = output;*/
  }

  /*
   * Given a module, and the list of modules for this current branch,
   *  ensure that each of the dependencies of this module is evaluated
   *  (unless one is a circular dependency already in the list of seen
   *  modules, in which case we execute it)
   *
   * Then we evaluate the module itself depth-first left to right 
   * execution to match ES6 modules
   */
  function ensureEvaluated(moduleName, seen, loader) {
    var entry = loader.defined[moduleName];

    // if already seen, that means it's an already-evaluated non circular dependency
    if (entry.evaluated || !entry.declarative)
      return;

    // this only applies to declarative modules which late-execute

    seen.push(moduleName);

    for (var i = 0, l = entry.normalizedDeps.length; i < l; i++) {
      var depName = entry.normalizedDeps[i];
      if (indexOf.call(seen, depName) == -1) {
        if (!loader.defined[depName])
          loader.get(depName);
        else
          ensureEvaluated(depName, seen, loader);
      }
    }

    if (entry.evaluated)
      return;

    entry.evaluated = true;
    entry.module.execute.call(loader.global);
  }

  var registerRegEx = /System\.register/;

  var loaderFetch = loader.fetch;
  loader.fetch = function(load) {
    var loader = this;
    defineRegister(loader);
    if (loader.defined[load.name]) {
      load.metadata.format = 'defined';
      return '';
    }
    anonRegister = null;
    calledRegister = false;
    // the above get picked up by onScriptLoad
    return loaderFetch.call(loader, load);
  }

  var loaderTranslate = loader.translate;
  loader.translate = function(load) {
    this.register = register;

    this.__exec = exec;

    load.metadata.deps = load.metadata.deps || [];

    // we run the meta detection here (register is after meta)
    return Promise.resolve(loaderTranslate.call(this, load)).then(function(source) {
      
      // dont run format detection for globals shimmed
      // ideally this should be in the global extension, but there is
      // currently no neat way to separate it
      if (load.metadata.init || load.metadata.exports)
        load.metadata.format = load.metadata.format || 'global';

      // run detection for register format
      if (load.metadata.format == 'register' || !load.metadata.format && load.source.match(registerRegEx))
        load.metadata.format = 'register';
      return source;
    });
  }


  var loaderInstantiate = loader.instantiate;
  loader.instantiate = function(load) {
    var loader = this;

    var entry;

    // first we check if this module has already been defined in the registry
    if (loader.defined[load.name])
      entry = loader.defined[load.name];

    // picked up already by a script injection
    else if (load.metadata.entry)
      entry = load.metadata.entry;

    // otherwise check if it is dynamic
    else if (load.metadata.execute) {
      entry = {
        declarative: false,
        deps: load.metadata.deps || [],
        execute: load.metadata.execute,
        executingRequire: load.metadata.executingRequire // NodeJS-style requires or not
      };
    }

    // Contains System.register calls
    else if (load.metadata.format == 'register') {
      anonRegister = null;
      calledRegister = false;

      var System = loader.global.System = loader.global.System || loader;

      var curRegister = System.register;
      System.register = register;

      loader.__exec(load);

      System.register = curRegister;

      if (anonRegister)
        entry = anonRegister;

      if (!calledRegister && !load.metadata.registered)
        throw load.name + " detected as System.register but didn't execute.";
    }

    // named bundles are just an empty module
    if (!entry && load.metadata.format != 'es6')
      return {
        deps: [],
        execute: function() {
          return loader.newModule({});
        }
      };

    // place this module onto defined for circular references
    if (entry)
      loader.defined[load.name] = entry;

    // no entry -> treat as ES6
    else
      return loaderInstantiate.call(this, load);

    entry.deps = dedupe(entry.deps);
    entry.name = load.name;

    // first, normalize all dependencies
    var normalizePromises = [];
    for (var i = 0, l = entry.deps.length; i < l; i++)
      normalizePromises.push(Promise.resolve(loader.normalize(entry.deps[i], load.name)));

    return Promise.all(normalizePromises).then(function(normalizedDeps) {

      entry.normalizedDeps = normalizedDeps;

      return {
        deps: entry.deps,
        execute: function() {
          // recursively ensure that the module and all its 
          // dependencies are linked (with dependency group handling)
          link(load.name, loader);

          // now handle dependency execution in correct order
          ensureEvaluated(load.name, [], loader);

          // remove from the registry
          loader.defined[load.name] = undefined;

          var module = loader.newModule(entry.declarative ? entry.module.exports : { 'default': entry.module.exports, '__useDefault': true });
          entry.module.module = module;

          // return the defined module object
          return module;
        }
      };
    });
  }
}
/*
 * SystemJS Core
 * Code should be vaguely readable
 * 
 */
function core(loader) {

  /*
    __useDefault
    
    When a module object looks like:
    newModule({
      __useDefault: true,
      default: 'some-module'
    })

    Then importing that module provides the 'some-module'
    result directly instead of the full module.

    Useful for eg module.exports = function() {}
  */
  var loaderImport = loader['import'];
  loader['import'] = function(name, options) {
    return loaderImport.call(this, name, options).then(function(module) {
      return module.__useDefault ? module['default'] : module;
    });
  };

  // support the empty module, as a concept
  loader.set('@empty', loader.newModule({}));

  /*
    Config
    Extends config merging one deep only

    loader.config({
      some: 'random',
      config: 'here',
      deep: {
        config: { too: 'too' }
      }
    });

    <=>

    loader.some = 'random';
    loader.config = 'here'
    loader.deep = loader.deep || {};
    loader.deep.config = { too: 'too' };
  */
  loader.config = function(cfg) {
    for (var c in cfg) {
      var v = cfg[c];
      if (typeof v == 'object' && !(v instanceof Array)) {
        this[c] = this[c] || {};
        for (var p in v)
          this[c][p] = v[p];
      }
      else
        this[c] = v;
    }
  };

  // override locate to allow baseURL to be document-relative
  var baseURI;
  if (typeof window == 'undefined' &&
      typeof WorkerGlobalScope == 'undefined') {
    baseURI = process.cwd() + '/';
  }
  // Inside of a Web Worker
  else if(typeof window == 'undefined') {
    baseURI = loader.global.location.href;
  }
  else {
    baseURI = document.baseURI;
    if (!baseURI) {
      var bases = document.getElementsByTagName('base');
      baseURI = bases[0] && bases[0].href || window.location.href;
    }
  }

  var loaderLocate = loader.locate;
  var normalizedBaseURL;
  loader.locate = function(load) {
    if (this.baseURL != normalizedBaseURL) {
      normalizedBaseURL = toAbsoluteURL(baseURI, this.baseURL);

      if (normalizedBaseURL.substr(normalizedBaseURL.length - 1, 1) != '/')
        normalizedBaseURL += '/';
      this.baseURL = normalizedBaseURL;
    }

    return Promise.resolve(loaderLocate.call(this, load));
  };


  // Traceur conveniences
  var aliasRegEx = /^\s*export\s*\*\s*from\s*(?:'([^']+)'|"([^"]+)")/;
  var es6RegEx = /(?:^\s*|[}{\(\);,\n]\s*)(import\s+['"]|(import|module)\s+[^"'\(\)\n;]+\s+from\s+['"]|export\s+(\*|\{|default|function|var|const|let|[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*))/;

  var loaderTranslate = loader.translate;
  loader.translate = function(load) {
    var loader = this;

    if (load.name == '@traceur')
      return loaderTranslate.call(loader, load);

    // support ES6 alias modules ("export * from 'module';") without needing Traceur
    var match;
    if ((load.metadata.format == 'es6' || !load.metadata.format) && (match = load.source.match(aliasRegEx))) {
      load.metadata.format = 'cjs';
      load.source = 'module.exports = require("' + (match[1] || match[2]) + '");\n';
    }

    // detect ES6
    else if (load.metadata.format == 'es6' || !load.metadata.format && load.source.match(es6RegEx)) {
      load.metadata.format = 'es6';

      // dynamically load Traceur for ES6 if necessary
      if (!loader.global.traceur) {
        return loader['import']('@traceur').then(function() {
          return loaderTranslate.call(loader, load);
        });
      }
    }

    return loaderTranslate.call(loader, load);
  };

  // always load Traceur as a global
  var loaderInstantiate = loader.instantiate;
  loader.instantiate = function(load) {
    var loader = this;
    if (load.name == '@traceur') {
      loader.__exec(load);
      return {
        deps: [],
        execute: function() {
          return loader.newModule({});
        }
      };
    }
    return loaderInstantiate.call(loader, load);
  };
}
/*
  SystemJS Global Format

  Supports
    metadata.deps
    metadata.init
    metadata.exports

  Also detects writes to the global object avoiding global collisions.
  See the SystemJS readme global support section for further information.
*/
function global(loader) {
  function createHelpers(loader) {
    if (loader.has('@@global-helpers'))
      return;

    var hasOwnProperty = loader.global.hasOwnProperty;
    var moduleGlobals = {};

    var curGlobalObj;
    var ignoredGlobalProps;

    loader.set('@@global-helpers', loader.newModule({
      prepareGlobal: function(moduleName, deps) {
        // first, we add all the dependency modules to the global
        for (var i = 0; i < deps.length; i++) {
          var moduleGlobal = moduleGlobals[deps[i]];
          if (moduleGlobal)
            for (var m in moduleGlobal)
              loader.global[m] = moduleGlobal[m];
        }

        // now store a complete copy of the global object
        // in order to detect changes
        curGlobalObj = {};
        ignoredGlobalProps = ['indexedDB', 'sessionStorage', 'localStorage', 'clipboardData', 'frames', 'webkitStorageInfo'];
        for (var g in loader.global) {
          if (indexOf.call(ignoredGlobalProps, g) != -1) { continue; }
          if (!hasOwnProperty || loader.global.hasOwnProperty(g)) {
            try {
              curGlobalObj[g] = loader.global[g];
            } catch (e) {
              ignoredGlobalProps.push(g);
            }
          }
        }
      },
      retrieveGlobal: function(moduleName, exportName, init) {
        var singleGlobal;
        var multipleExports;
        var exports = {};

        // run init
        if (init) {
          var depModules = [];
          for (var i = 0; i < deps.length; i++)
            depModules.push(require(deps[i]));
          singleGlobal = init.apply(loader.global, depModules);
        }

        // check for global changes, creating the globalObject for the module
        // if many globals, then a module object for those is created
        // if one global, then that is the module directly
        else if (exportName) {
          var firstPart = exportName.split('.')[0];
          singleGlobal = eval.call(loader.global, exportName);
          exports[firstPart] = loader.global[firstPart];
        }

        else {
          for (var g in loader.global) {
            if (indexOf.call(ignoredGlobalProps, g) != -1)
              continue;
            if ((!hasOwnProperty || loader.global.hasOwnProperty(g)) && g != loader.global && curGlobalObj[g] != loader.global[g]) {
              exports[g] = loader.global[g];
              if (singleGlobal) {
                if (singleGlobal !== loader.global[g])
                  multipleExports = true;
              }
              else if (singleGlobal === undefined) {
                singleGlobal = loader.global[g];
              }
            }
          }
        }

        moduleGlobals[moduleName] = exports;

        return multipleExports ? exports : singleGlobal;
      }
    }));
  }

  createHelpers(loader);

  var loaderInstantiate = loader.instantiate;
  loader.instantiate = function(load) {
    var loader = this;

    createHelpers(loader);

    var exportName = load.metadata.exports;

    if (!load.metadata.format)
      load.metadata.format = 'global';

    // global is a fallback module format
    if (load.metadata.format == 'global') {
      load.metadata.execute = function(require, exports, module) {

        loader.get('@@global-helpers').prepareGlobal(module.id, load.metadata.deps);

        if (exportName)
          load.source += '\nthis["' + exportName + '"] = ' + exportName + ';';

        // disable AMD detection
        var define = loader.global.define;
        loader.global.define = undefined;

        // ensure no NodeJS environment detection
        loader.global.module = undefined;
        loader.global.exports = undefined;

        loader.__exec(load);

        loader.global.define = define;

        return loader.get('@@global-helpers').retrieveGlobal(module.id, exportName, load.metadata.init);
      }
    }
    return loaderInstantiate.call(loader, load);
  }
}
/*
  SystemJS CommonJS Format
*/
function cjs(loader) {

  // CJS Module Format
  // require('...') || exports[''] = ... || exports.asd = ... || module.exports = ...
  var cjsExportsRegEx = /(?:^\s*|[}{\(\);,\n=:\?\&]\s*|module\.)(exports\s*\[\s*('[^']+'|"[^"]+")\s*\]|\exports\s*\.\s*[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*|exports\s*\=)/;
  var cjsRequireRegEx = /(?:^\s*|[}{\(\);,\n=:\?\&]\s*)require\s*\(\s*("([^"]+)"|'([^']+)')\s*\)/g;
  var commentRegEx = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg;

  function getCJSDeps(source) {
    cjsExportsRegEx.lastIndex = 0;
    cjsRequireRegEx.lastIndex = 0;

    var deps = [];

    // remove comments from the source first
    var source = source.replace(commentRegEx, '');

    var match;

    while (match = cjsRequireRegEx.exec(source))
      deps.push(match[2] || match[3]);

    return deps;
  }

  var loaderInstantiate = loader.instantiate;
  loader.instantiate = function(load) {

    if (!load.metadata.format) {
      cjsExportsRegEx.lastIndex = 0;
      cjsRequireRegEx.lastIndex = 0;
      if (cjsRequireRegEx.exec(load.source) || cjsExportsRegEx.exec(load.source))
        load.metadata.format = 'cjs';
    }

    if (load.metadata.format == 'cjs') {
      load.metadata.deps = load.metadata.deps ? load.metadata.deps.concat(getCJSDeps(load.source)) : load.metadata.deps;

      load.metadata.executingRequire = true;

      load.metadata.execute = function(require, exports, module) {
        var dirname = (load.address || '').split('/');
        dirname.pop();
        dirname = dirname.join('/');

        var globals = loader.global._g = {
          global: loader.global,
          exports: exports,
          module: module,
          require: require,
          __filename: load.address,
          __dirname: dirname
        };


        // disable AMD detection
        var define = loader.global.define;
        loader.global.define = undefined;

        var execLoad = {
          name: load.name,
          source: '(function() {\n(function(global, exports, module, require, __filename, __dirname){\n' + load.source + 
                                  '\n}).call(_g.exports, _g.global, _g.exports, _g.module, _g.require, _g.__filename, _g.__dirname);})();',
          address: load.address
        };
        loader.__exec(execLoad);

        loader.global.define = define;

        loader.global._g = undefined;
      }
    }

    return loaderInstantiate.call(this, load);
  };
}
/*
  SystemJS AMD Format
  Provides the AMD module format definition at System.format.amd
  as well as a RequireJS-style require on System.require
*/
function amd(loader) {
  // by default we only enforce AMD noConflict mode in Node
  var isNode = typeof module != 'undefined' && module.exports;

  // AMD Module Format Detection RegEx
  // define([.., .., ..], ...)
  // define(varName); || define(function(require, exports) {}); || define({})
  var amdRegEx = /(?:^\s*|[}{\(\);,\n\?\&]\s*)define\s*\(\s*("[^"]+"\s*,\s*|'[^']+'\s*,\s*)?\s*(\[(\s*(("[^"]+"|'[^']+')\s*,|\/\/.*\r?\n|\/\*(.|\s)*?\*\/))*(\s*("[^"]+"|'[^']+')\s*,?)?(\s*(\/\/.*\r?\n|\/\*(.|\s)*?\*\/))*\s*\]|function\s*|{|[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*\))/;
  var commentRegEx = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg;

  var cjsRequirePre = "(?:^\\s*|[}{\\(\\);,\\n=:\\?\\&]\\s*)";
  var cjsRequirePost = "\\s*\\(\\s*(\"([^\"]+)\"|'([^']+)')\\s*\\)";

  var fnBracketRegEx = /\(([^\)]*)\)/;

  var wsRegEx = /^\s+|\s+$/g;

  var requireRegExs = {};

  function getCJSDeps(source, requireIndex) {

    // remove comments
    source = source.replace(commentRegEx, '');

    // determine the require alias
    var params = source.match(fnBracketRegEx);
    var requireAlias = (params[1].split(',')[requireIndex] || 'require').replace(wsRegEx, '');

    // find or generate the regex for this requireAlias
    var requireRegEx = requireRegExs[requireAlias] || (requireRegExs[requireAlias] = new RegExp(cjsRequirePre + requireAlias + cjsRequirePost, 'g'));

    requireRegEx.lastIndex = 0;

    var deps = [];

    var match;
    while (match = requireRegEx.exec(source))
      deps.push(match[2] || match[3]);

    return deps;
  }

  /*
    AMD-compatible require
    To copy RequireJS, set window.require = window.requirejs = loader.amdRequire
  */
  function require(names, callback, errback, referer) {
    // 'this' is bound to the loader
    var loader = this;

    // in amd, first arg can be a config object... we just ignore
    if (typeof names == 'object' && !(names instanceof Array))
      return require.apply(null, Array.prototype.splice.call(arguments, 1, arguments.length - 1));

    // amd require
    if (names instanceof Array)
      Promise.all(names.map(function(name) {
        return loader['import'](name, referer);
      })).then(function(modules) {
        callback.apply(null, modules);
      }, errback);

    // commonjs require
    else if (typeof names == 'string') {
      var module = loader.get(names);
      return module.__useDefault ? module['default'] : module;
    }

    else
      throw 'Invalid require';
  };
  loader.amdRequire = require;

  function makeRequire(parentName, staticRequire, loader) {
    return function(names, callback, errback) {
      if (typeof names == 'string')
        return staticRequire(names);
      return require.call(loader, names, callback, errback, { name: parentName });
    }
  }

  // run once per loader
  function generateDefine(loader) {
    // script injection mode calls this function synchronously on load
    var onScriptLoad = loader.onScriptLoad;
    loader.onScriptLoad = function(load) {
      onScriptLoad(load);
      if (anonDefine || defineBundle)
        load.metadata.format = 'defined';

      if (anonDefine) {
        load.metadata.deps = load.metadata.deps ? load.metadata.deps.concat(anonDefine.deps) : anonDefine.deps;
        load.metadata.execute = anonDefine.execute;
      }
    }

    function define(name, deps, factory) {
      if (typeof name != 'string') {
        factory = deps;
        deps = name;
        name = null;
      }
      if (!(deps instanceof Array)) {
        factory = deps;
        deps = ['require', 'exports', 'module'];
      }

      if (typeof factory != 'function')
        factory = (function(factory) {
          return function() { return factory; }
        })(factory);

      // in IE8, a trailing comma becomes a trailing undefined entry
      if (deps[deps.length - 1] === undefined)
        deps.pop();

      // remove system dependencies
      var requireIndex, exportsIndex, moduleIndex;
      
      if ((requireIndex = indexOf.call(deps, 'require')) != -1) {
        
        deps.splice(requireIndex, 1);

        var factoryText = factory.toString();

        deps = deps.concat(getCJSDeps(factoryText, requireIndex));
      }
        

      if ((exportsIndex = indexOf.call(deps, 'exports')) != -1)
        deps.splice(exportsIndex, 1);
      
      if ((moduleIndex = indexOf.call(deps, 'module')) != -1)
        deps.splice(moduleIndex, 1);

      var define = {
        deps: deps,
        execute: function(require, exports, module) {

          var depValues = [];
          for (var i = 0; i < deps.length; i++)
            depValues.push(require(deps[i]));

          module.uri = loader.baseURL + module.id;

          module.config = function() {};

          // add back in system dependencies
          if (moduleIndex != -1)
            depValues.splice(moduleIndex, 0, module);
          
          if (exportsIndex != -1)
            depValues.splice(exportsIndex, 0, exports);
          
          if (requireIndex != -1)
            depValues.splice(requireIndex, 0, makeRequire(module.id, require, loader));

          var output = factory.apply(global, depValues);

          if (typeof output == 'undefined' && module)
            output = module.exports;

          if (typeof output != 'undefined')
            return output;
        }
      };

      // anonymous define
      if (!name) {
        // already defined anonymously -> throw
        if (anonDefine)
          throw "Multiple defines for anonymous module";
        anonDefine = define;
      }
      // named define
      else {
        // if it has no dependencies and we don't have any other
        // defines, then let this be an anonymous define
        if (deps.length == 0 && !anonDefine && !defineBundle)
          anonDefine = define;

        // otherwise its a bundle only
        else
          anonDefine = null;

        // the above is just to support single modules of the form:
        // define('jquery')
        // still loading anonymously
        // because it is done widely enough to be useful

        // note this is now a bundle
        defineBundle = true;

        // define the module through the register registry
        loader.register(name, define.deps, false, define.execute);
      }
    };
    define.amd = {};
    loader.amdDefine = define;
  }

  var anonDefine;
  // set to true if the current module turns out to be a named define bundle
  var defineBundle;

  var oldModule, oldExports, oldDefine;

  // adds define as a global (potentially just temporarily)
  function createDefine(loader) {
    if (!loader.amdDefine)
      generateDefine(loader);

    anonDefine = null;
    defineBundle = null;

    // ensure no NodeJS environment detection
    var global = loader.global;

    oldModule = global.module;
    oldExports = global.exports;
    oldDefine = global.define;

    global.module = undefined;
    global.exports = undefined;

    if (global.define && global.define === loader.amdDefine)
      return;

    global.define = loader.amdDefine;
  }

  function removeDefine(loader) {
    var global = loader.global;
    global.define = oldDefine;
    global.module = oldModule;
    global.exports = oldExports;
  }

  generateDefine(loader);

  if (loader.scriptLoader) {
    var loaderFetch = loader.fetch;
    loader.fetch = function(load) {
      createDefine(this);
      return loaderFetch.call(this, load);
    }
  }

  var loaderInstantiate = loader.instantiate;
  loader.instantiate = function(load) {
    var loader = this;

    if (load.metadata.format == 'amd' || !load.metadata.format && load.source.match(amdRegEx)) {
      load.metadata.format = 'amd';

      createDefine(loader);

      try {
        loader.__exec(load);
      }
      catch(e) {
        if (loader.execute === false && isNode) {
          // use a regular expression to pull out deps
          var match = load.source.match(amdRegEx);
          if (match) {
            // named or anonymous
            if (match[1] && match[1][0] == '[')
              define(match[1].substr(match[1].length - 2), eval(match[2]), function() {});
            else if (match[2] && match[2][0] == '[')
              define(eval(match[2]), function() {});
            else
              define(function() {});
          }
        }
        else
          throw e;
      }

      removeDefine(loader);

      if (!anonDefine && !defineBundle && !isNode)
        throw "AMD module " + load.name + " did not define";

      if (anonDefine) {
        load.metadata.deps = load.metadata.deps ? load.metadata.deps.concat(anonDefine.deps) : anonDefine.deps;
        load.metadata.execute = anonDefine.execute;
      }
    }

    return loaderInstantiate.call(loader, load);
  }
}
/*
  SystemJS map support
  
  Provides map configuration through
    System.map['jquery'] = 'some/module/map'

  As well as contextual map config through
    System.map['bootstrap'] = {
      jquery: 'some/module/map2'
    }

  Note that this applies for subpaths, just like RequireJS

  jquery      -> 'some/module/map'
  jquery/path -> 'some/module/map/path'
  bootstrap   -> 'bootstrap'

  Inside any module name of the form 'bootstrap' or 'bootstrap/*'
    jquery    -> 'some/module/map2'
    jquery/p  -> 'some/module/map2/p'

  Maps are carefully applied from most specific contextual map, to least specific global map
*/
function map(loader) {
  loader.map = loader.map || {};

  // return if prefix parts (separated by '/') match the name
  // eg prefixMatch('jquery/some/thing', 'jquery') -> true
  //    prefixMatch('jqueryhere/', 'jquery') -> false
  function prefixMatch(name, prefix) {
    if (name.length < prefix.length)
      return false;
    if (name.substr(0, prefix.length) != prefix)
      return false;
    if (name[prefix.length] && name[prefix.length] != '/')
      return false;
    return true;
  }

  // get the depth of a given path
  // eg pathLen('some/name') -> 2
  function pathLen(name) {
    var len = 1;
    for (var i = 0, l = name.length; i < l; i++)
      if (name[i] === '/')
        len++;
    return len;
  }

  function doMap(name, matchLen, map) {
    return map + name.substr(matchLen);
  }

  // given a relative-resolved module name and normalized parent name,
  // apply the map configuration
  function applyMap(name, parentName, loader) {
    var curMatch, curMatchLength = 0;
    var curParent, curParentMatchLength = 0;
    var tmpParentLength, tmpPrefixLength;
    var subPath;
    var nameParts;
    
    // first find most specific contextual match
    if (parentName) {
      for (var p in loader.map) {
        var curMap = loader.map[p];
        if (typeof curMap != 'object')
          continue;

        // most specific parent match wins first
        if (!prefixMatch(parentName, p))
          continue;

        tmpParentLength = pathLen(p);
        if (tmpParentLength <= curParentMatchLength)
          continue;

        for (var q in curMap) {
          // most specific name match wins
          if (!prefixMatch(name, q))
            continue;
          tmpPrefixLength = pathLen(q);
          if (tmpPrefixLength <= curMatchLength)
            continue;

          curMatch = q;
          curMatchLength = tmpPrefixLength;
          curParent = p;
          curParentMatchLength = tmpParentLength;
        }
      }
    }

    // if we found a contextual match, apply it now
    if (curMatch)
      return doMap(name, curMatch.length, loader.map[curParent][curMatch]);

    // now do the global map
    for (var p in loader.map) {
      var curMap = loader.map[p];
      if (typeof curMap != 'string')
        continue;

      if (!prefixMatch(name, p))
        continue;

      var tmpPrefixLength = pathLen(p);

      if (tmpPrefixLength <= curMatchLength)
        continue;

      curMatch = p;
      curMatchLength = tmpPrefixLength;
    }

    if (curMatch)
      return doMap(name, curMatch.length, loader.map[curMatch]);

    return name;
  }

  var loaderNormalize = loader.normalize;
  loader.normalize = function(name, parentName, parentAddress) {
    var loader = this;
    if (!loader.map)
      loader.map = {};

    var isPackage = false;
    if (name.substr(name.length - 1, 1) == '/') {
      isPackage = true;
      name += '#';
    }

    return Promise.resolve(loaderNormalize.call(loader, name, parentName, parentAddress))
    .then(function(name) {
      name = applyMap(name, parentName, loader);

      // Normalize "module/" into "module/module"
      // Convenient for packages
      if (isPackage) {
        var nameParts = name.split('/');
        nameParts.pop();
        var pkgName = nameParts.pop();
        nameParts.push(pkgName);
        nameParts.push(pkgName);
        name = nameParts.join('/');
      }

      return name;
    });
  }
}
/*
  SystemJS Plugin Support

  Supports plugin syntax with "!"

  The plugin name is loaded as a module itself, and can override standard loader hooks
  for the plugin resource. See the plugin section of the systemjs readme.
*/
function plugins(loader) {
  if (typeof indexOf == 'undefined')
    indexOf = Array.prototype.indexOf;

  var loaderNormalize = loader.normalize;
  loader.normalize = function(name, parentName, parentAddress) {
    var loader = this;
    // if parent is a plugin, normalize against the parent plugin argument only
    var parentPluginIndex;
    if (parentName && (parentPluginIndex = parentName.indexOf('!')) != -1)
      parentName = parentName.substr(0, parentPluginIndex);

    return Promise.resolve(loaderNormalize.call(loader, name, parentName, parentAddress))
    .then(function(name) {
      // if this is a plugin, normalize the plugin name and the argument
      var pluginIndex = name.lastIndexOf('!');
      if (pluginIndex != -1) {
        var argumentName = name.substr(0, pluginIndex);

        // plugin name is part after "!" or the extension itself
        var pluginName = name.substr(pluginIndex + 1) || argumentName.substr(argumentName.lastIndexOf('.') + 1);

        // normalize the plugin name relative to the same parent
        return new Promise(function(resolve) {
          resolve(loader.normalize(pluginName, parentName, parentAddress)); 
        })
        // normalize the plugin argument
        .then(function(_pluginName) {
          pluginName = _pluginName;
          return loader.normalize(argumentName, parentName, parentAddress);
        })
        .then(function(argumentName) {
          return argumentName + '!' + pluginName;
        });
      }

      // standard normalization
      return name;
    });
  };

  var loaderLocate = loader.locate;
  loader.locate = function(load) {
    var loader = this;

    var name = load.name;

    // plugin
    var pluginIndex = name.lastIndexOf('!');
    if (pluginIndex != -1) {
      var pluginName = name.substr(pluginIndex + 1);

      // the name to locate is the plugin argument only
      load.name = name.substr(0, pluginIndex);

      var pluginLoader = loader.pluginLoader || loader;

      // load the plugin module
      // NB ideally should use pluginLoader.load for normalized,
      //    but not currently working for some reason
      return pluginLoader['import'](pluginName)
      .then(function() {
        var plugin = pluginLoader.get(pluginName);
        plugin = plugin['default'] || plugin;

        // allow plugins to opt-out of build
        if (plugin.build === false && loader.pluginLoader)
          load.metadata.build = false;

        // store the plugin module itself on the metadata
        load.metadata.plugin = plugin;
        load.metadata.pluginName = pluginName;
        load.metadata.pluginArgument = load.name;
        load.metadata.buildType = plugin.buildType || "js";

        // run plugin locate if given
        if (plugin.locate)
          return plugin.locate.call(loader, load);

        // otherwise use standard locate without '.js' extension adding
        else
          return Promise.resolve(loader.locate(load))
          .then(function(address) {
            return address.substr(0, address.length - 3);
          });
      });
    }

    return loaderLocate.call(this, load);
  };

  var loaderFetch = loader.fetch;
  loader.fetch = function(load) {
    var loader = this;
    if (load.metadata.build === false)
      return '';
    else if (load.metadata.plugin && load.metadata.plugin.fetch && !load.metadata.pluginFetchCalled) {
      load.metadata.pluginFetchCalled = true;
      return load.metadata.plugin.fetch.call(loader, load, loaderFetch);
    }
    else
      return loaderFetch.call(loader, load);
  };

  var loaderTranslate = loader.translate;
  loader.translate = function(load) {
    var loader = this;
    if (load.metadata.plugin && load.metadata.plugin.translate)
      return Promise.resolve(load.metadata.plugin.translate.call(loader, load)).then(function(result) {
        if (result)
          load.source = result;
        return loaderTranslate.call(loader, load);
      });
    else
      return loaderTranslate.call(loader, load);
  };

  var loaderInstantiate = loader.instantiate;
  loader.instantiate = function(load) {
    var loader = this;
    if (load.metadata.plugin && load.metadata.plugin.instantiate)
       return Promise.resolve(load.metadata.plugin.instantiate.call(loader, load)).then(function(result) {
        if (result) {
          // load.metadata.format = 'defined';
          // load.metadata.execute = function() {
          //   return result;
          // };
          return result;
        }
        return loaderInstantiate.call(loader, load);
      });
    else if (load.metadata.plugin && load.metadata.plugin.build === false) {
      load.metadata.format = 'defined';
      load.metadata.deps.push(load.metadata.pluginName);
      load.metadata.execute = function() {
        return loader.newModule({});
      };
      return loaderInstantiate.call(loader, load);
    }
    else
      return loaderInstantiate.call(loader, load);
  };
}/*
  System bundles

  Allows a bundle module to be specified which will be dynamically 
  loaded before trying to load a given module.

  For example:
  System.bundles['mybundle'] = ['jquery', 'bootstrap/js/bootstrap']

  Will result in a load to "mybundle" whenever a load to "jquery"
  or "bootstrap/js/bootstrap" is made.

  In this way, the bundle becomes the request that provides the module
*/

function bundles(loader) {
  if (typeof indexOf == 'undefined')
    indexOf = Array.prototype.indexOf;

  // bundles support (just like RequireJS)
  // bundle name is module name of bundle itself
  // bundle is array of modules defined by the bundle
  // when a module in the bundle is requested, the bundle is loaded instead
  // of the form System.bundles['mybundle'] = ['jquery', 'bootstrap/js/bootstrap']
  loader.bundles = loader.bundles || {};

  var loaderFetch = loader.fetch;
  loader.fetch = function(load) {
    var loader = this;
    if (loader.trace)
      return loaderFetch.call(this, load);
    if (!loader.bundles)
      loader.bundles = {};

    // if this module is in a bundle, load the bundle first then
    for (var b in loader.bundles) {
      if (indexOf.call(loader.bundles[b], load.name) == -1)
        continue;
      // we do manual normalization in case the bundle is mapped
      // this is so we can still know the normalized name is a bundle
      return Promise.resolve(loader.normalize(b))
      .then(function(normalized) {
        loader.bundles[normalized] = loader.bundles[normalized] || loader.bundles[b];

        // note this module is a bundle in the meta
        loader.meta = loader.meta || {};
        loader.meta[normalized] = loader.meta[normalized] || {};
        loader.meta[normalized].bundle = true;

        return loader.load(normalized);
      })
      .then(function() {
        return '';
      });
    }
    return loaderFetch.call(this, load);
  };
}/*
  SystemJS Semver Version Addon
  
  1. Uses Semver convention for major and minor forms

  Supports requesting a module from a package that contains a version suffix
  with the following semver ranges:
    module       - any version
    module@1     - major version 1, any minor (not prerelease)
    module@1.2   - minor version 1.2, any patch (not prerelease)
    module@1.2.3 - exact version

  It is assumed that these modules are provided by the server / file system.

  First checks the already-requested packages to see if there are any packages 
  that would match the same package and version range.

  This provides a greedy algorithm as a simple fix for sharing version-managed
  dependencies as much as possible, which can later be optimized through version
  hint configuration created out of deeper version tree analysis.
  
  2. Semver-compatibility syntax (caret operator - ^)

  Compatible version request support is then also provided for:

    module@^1.2.3        - module@1, >=1.2.3
    module@^1.2          - module@1, >=1.2.0
    module@^1            - module@1
    module@^0.5.3        - module@0.5, >= 0.5.3
    module@^0.0.1        - module@0.0.1

  The ^ symbol is always normalized out to a normal version request.

  This provides comprehensive semver compatibility.
  
  3. System.versions version hints and version report

  Note this addon should be provided after all other normalize overrides.

  The full list of versions can be found at System.versions providing an insight
  into any possible version forks.

  It is also possible to create version solution hints on the System global:

  System.versions = {
    jquery: ['1.9.2', '2.0.3'],
    bootstrap: '3.0.1'
  };

  Versions can be an array or string for a single version.

  When a matching semver request is made (jquery@1.9, jquery@1, bootstrap@3)
  they will be converted to the latest version match contained here, if present.

  Prereleases in this versions list are also allowed to satisfy ranges when present.
*/

function versions(loader) {
  if (typeof indexOf == 'undefined')
    indexOf = Array.prototype.indexOf;

  // match x, x.y, x.y.z, x.y.z-prerelease.1
  var semverRegEx = /^(\d+)(?:\.(\d+)(?:\.(\d+)(?:-([0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?)?)?$/;

  var semverCompare = function(v1, v2) {
    var v1Parts = v1.split('.');
    var v2Parts = v2.split('.');
    var prereleaseIndex;
    if (v1Parts[2] && (prereleaseIndex = indexOf.call(v1Parts[2], '-')) != -1)
      v1Parts.splice(2, 1, v1Parts[2].substr(0, prereleaseIndex), v1Parts[2].substr(prereleaseIndex + 1));
    if (v2Parts[2] && (prereleaseIndex = indexOf.call(v2Parts[2], '-')) != -1)
      v2Parts.splice(2, 1, v2Parts[2].substr(0, prereleaseIndex), v2Parts[2].substr(prereleaseIndex + 1));
    for (var i = 0; i < Math.max(v1Parts.length, v2Parts.length); i++) {
      if (!v1Parts[i])
        return 1;
      else if (!v2Parts[i])
        return -1;
      if (v1Parts[i] != v2Parts[i])
        return parseInt(v1Parts[i]) > parseInt(v2Parts[i]) ? 1 : -1;
    }
    return 0;
  }  
  

  loader.versions = loader.versions || {};

  var loaderNormalize = loader.normalize;
  loader.normalize = function(name, parentName, parentAddress) {
    if (!loader.versions)
      loader.versions = {};
    var packageVersions = this.versions;

    // strip the version before applying map config
    var stripVersion, stripSubPathLength;
    if (name.indexOf('@') > 0) {
      var versionIndex = name.lastIndexOf('@');
      var parts = name.substr(versionIndex + 1, name.length - versionIndex - 1).split('/');
      stripVersion = parts[0];
      stripSubPathLength = parts.length;
      name = name.substr(0, versionIndex) + name.substr(versionIndex + stripVersion.length + 1, name.length - versionIndex - stripVersion.length - 1);
    }

    // run all other normalizers first
    return Promise.resolve(loaderNormalize.call(this, name, parentName, parentAddress)).then(function(normalized) {
      
      var version, semverMatch, nextChar, versions;
      var index = normalized.indexOf('@');

      // if we stripped a version, and it still has no version, add it back
      if (stripVersion && (index == -1 || index == 0)) {
        var parts = normalized.split('/');
        parts[parts.length - stripSubPathLength] += '@' + stripVersion;
        normalized = parts.join('/');
        index = normalized.indexOf('@');
      }

      // see if this module corresponds to a package already in our versioned packages list
      
      // no version specified - check against the list (given we don't know the package name)
      if (index == -1 || index == 0) {
        for (var p in packageVersions) {
          versions = packageVersions[p];
          if (normalized.substr(0, p.length) != p)
            continue;

          nextChar = normalized.substr(p.length, 1);

          if (nextChar && nextChar != '/')
            continue;

          // match -> take latest version
          return p + '@' + (typeof versions == 'string' ? versions : versions[versions.length - 1]) + normalized.substr(p.length);
        }
        return normalized;
      }

      // get the version info
      version = normalized.substr(index + 1).split('/')[0];
      var versionLength = version.length;

      var minVersion;
      if (version.substr(0, 1) == '^') {
        version = version.substr(1);
        minVersion = true;
      }

      semverMatch = version.match(semverRegEx);

      // if not a semver, we cant help
      if (!semverMatch)
        return normalized;

      // translate '^' in range to simpler range form
      if (minVersion) {
        // ^0 -> 0
        // ^1 -> 1
        if (!semverMatch[2])
          minVersion = false;
        
        if (!semverMatch[3]) {
          
          // ^1.1 -> ^1.1.0
          if (semverMatch[2] > 0)
            semverMatch[3] = '0';

          // ^0.1 -> 0.1
          // ^0.0 -> 0.0
          else
            minVersion = false;
        }
      }

      if (minVersion) {
        // >= 1.0.0
        if (semverMatch[1] > 0) {
          if (!semverMatch[2])
            version = semverMatch[1] + '.0.0';
          if (!semverMatch[3])
            version = semverMatch[1] + '.0';
          minVersion = version;
          semverMatch = [semverMatch[1]];
        }
        // >= 0.1.0
        else if (semverMatch[2] > 0) {
          minVersion = version;
          semverMatch = [0, semverMatch[2]];
        }
        // >= 0.0.0
        else {
          // NB compatible with prerelease is just prelease itself?
          minVersion = false;
          semverMatch = [0, 0, semverMatch[3]];
        }
        version = semverMatch.join('.');
      }

      var packageName = normalized.substr(0, index);

      versions = packageVersions[packageName] || [];

      if (typeof versions == 'string')
        versions = [versions];

      // look for a version match
      // if an exact semver, theres nothing to match, just record it
      if (!semverMatch[3] || minVersion)
        for (var i = versions.length - 1; i >= 0; i--) {
          var curVersion = versions[i];
          // if I have requested x.y, find an x.y.z-b
          // if I have requested x, find any x.y / x.y.z-b
          if (curVersion.substr(0, version.length) == version && curVersion.substr(version.length, 1).match(/^[\.\-]?$/)) {
            // if a minimum version, then check too
            if (!minVersion || minVersion && semverCompare(curVersion, minVersion) != -1)
              return packageName + '@' + curVersion + normalized.substr(packageName.length + versionLength + 1);
          }
        }

      // no match
      // record the package and semver for reuse since we're now asking the server
      // x.y and x versions will now be latest by default, so they are useful in the version list
      if (indexOf.call(versions, version) == -1) {
        versions.push(version);
        versions.sort(semverCompare);

        normalized = packageName + '@' + version + normalized.substr(packageName.length + versionLength + 1);

        // if this is an x.y.z, remove any x.y, x
        // if this is an x.y, remove any x
        if (semverMatch[3] && (index = indexOf.call(versions, semverMatch[1] + '.' + semverMatch[2])) != -1)
          versions.splice(index, 1);
        if (semverMatch[2] && (index = indexOf.call(versions, semverMatch[1])) != -1)
          versions.splice(index, 1);

        packageVersions[packageName] = versions.length == 1 ? versions[0] : versions;
      }

      return normalized;
    });
  }
}
/*
 * Dependency Tree Cache
 * 
 * Allows a build to pre-populate a dependency trace tree on the loader of 
 * the expected dependency tree, to be loaded upfront when requesting the
 * module, avoinding the n round trips latency of module loading, where 
 * n is the dependency tree depth.
 *
 * eg:
 * System.depCache = {
 *  'app': ['normalized', 'deps'],
 *  'normalized': ['another'],
 *  'deps': ['tree']
 * };
 * 
 * System.import('app') 
 * // simultaneously starts loading all of:
 * // 'normalized', 'deps', 'another', 'tree'
 * // before "app" source is even loaded
 */

function depCache(loader) {
  loader.depCache = loader.depCache || {};

  loaderLocate = loader.locate;
  loader.locate = function(load) {
    var loader = this;

    if (!loader.depCache)
      loader.depCache = {};

    // load direct deps, in turn will pick up their trace trees
    var deps = loader.depCache[load.name];
    if (deps)
      for (var i = 0; i < deps.length; i++)
        loader.load(deps[i]);

    return loaderLocate.call(loader, load);
  }
}
  
  meta(System);
  register(System);
  core(System);
  global(System);
  cjs(System);
  amd(System);
  map(System);
  plugins(System);
  bundles(System);
  versions(System);
  depCache(System);
  if (!System.paths['@traceur'])
    System.paths['@traceur'] = $__curScript && $__curScript.getAttribute('data-traceur-src')
      || ($__curScript && $__curScript.src 
        ? $__curScript.src.substr(0, $__curScript.src.lastIndexOf('/') + 1) 
        : System.baseURL + (System.baseURL.lastIndexOf('/') == System.baseURL.length - 1 ? '' : '/')
        ) + 'traceur.js';

  return System;
};

var $__curScript, __eval;

(function() {

  var doEval;

  __eval = function(source, address, sourceMap) {
    source += '\n//# sourceURL=' + address + (sourceMap ? '\n//# sourceMappingURL=' + sourceMap : '');

    try {
      doEval(source);
    }
    catch(e) {
      throw 'Error evaluating ' + address;
    }
  };

  // BITOVI hack to make cloning work.  
  // original upgradeSystemLoader upgrades the global System.
  var __upgradeSystemLoader = $__global.upgradeSystemLoader;
  $__global.upgradeSystemLoader = function() {
    var originalSystem = $__global.System;
    __upgradeSystemLoader.call($__global);
    $__global.System.clone = function() {
    	  var currentSystem = $__global.System;
    	  $__global.System = originalSystem;
      var SystemClone = __upgradeSystemLoader.call($__global);
      $__global.System = currentSystem;
      return SystemClone;
    };
  };

  var isWorker = typeof WorkerGlobalScope !== 'undefined' &&
    self instanceof WorkerGlobalScope;
  var isBrowser = typeof window != 'undefined';

  if (isBrowser) {
    var head;

    var scripts = document.getElementsByTagName('script');
    $__curScript = scripts[scripts.length - 1];

    // globally scoped eval for the browser
    doEval = function(source) {
      if (!head)
        head = document.head || document.body || document.documentElement;

      var script = document.createElement('script');
      script.text = source;
      var onerror = window.onerror;
      var e;
      window.onerror = function(_e) {
        e = _e;
      }
      head.appendChild(script);
      head.removeChild(script);
      window.onerror = onerror;
      if (e)
        throw e;
    }

    if (!$__global.System || !$__global.LoaderPolyfill) {
      // determine the current script path as the base path
      var curPath = $__curScript.src;
      var basePath = curPath.substr(0, curPath.lastIndexOf('/') + 1);
      document.write(
        '<' + 'script type="text/javascript" src="' + basePath + 'es6-module-loader.js" data-init="upgradeSystemLoader">' + '<' + '/script>'
      );
    }
    else {
      $__global.upgradeSystemLoader();
    }
  }
  else if(isWorker) {
    doEval = function(source) {
      try {
        eval(source);
      } catch(e) {
        throw e;
      }
    };

    if (!$__global.System || !$__global.LoaderPolyfill) {
      var basePath = '';
      try {
        throw new Error('Getting the path');
      } catch(err) {
        var idx = err.stack.indexOf('at ') + 3;
        var withSystem = err.stack.substr(idx, err.stack.substr(idx).indexOf('\n'));
        basePath = withSystem.substr(0, withSystem.lastIndexOf('/') + 1);
      }
      importScripts(basePath + 'es6-module-loader.js');
    } else {
      $__global.upgradeSystemLoader();
    }
  }
  else {
    var es6ModuleLoader = require('es6-module-loader');
    $__global.System = es6ModuleLoader.System;
    $__global.Loader = es6ModuleLoader.Loader;
    $__global.upgradeSystemLoader();
    module.exports = $__global.System;

    // global scoped eval for node
    var vm = require('vm');
    doEval = function(source, address, sourceMap) {
      vm.runInThisContext(source);
    }
  }
})();

})(typeof window != 'undefined' ? window : (typeof WorkerGlobalScope != 'undefined' ?
                                           self : global));

(function(global){

	// helpers
	var camelize = function(str){
		return str.replace(/-+(.)?/g, function(match, chr){ 
			return chr ? chr.toUpperCase() : '' 
		});
	},
		each = function( o, cb){
			var i, len;

			// weak array detection, but we only use this internally so don't
			// pass it weird stuff
			if ( typeof o.length == 'number' && (o.length - 1) in o) {
				for ( i = 0, len = o.length; i < len; i++ ) {
					cb.call(o[i], o[i], i, o);
				}
			} else {
				for ( i in o ) {
					if(o.hasOwnProperty(i)){
						cb.call(o[i], o[i], i, o);
					}
				}
			}
			return o;
		},
		map = function(o, cb) {
			var arr = [];
			each(o, function(item, i){
				arr[i] = cb(item, i);
			});
			return arr;
		},
		isString = function(o) {
			return typeof o == "string";
		},
		extend = function(d,s){
			each(s, function(v, p){
				d[p] = v;
			});
			return d;
		},
		dir = function(uri){
			var lastSlash = uri.lastIndexOf("/");
			if(lastSlash !== -1) {
				return uri.substr(0, lastSlash);
			} else {
				return uri;
			}
		},
		last = function(arr){
			return arr[arr.length - 1];
		},
		parseURI = function(url) {
			var m = String(url).replace(/^\s+|\s+$/g, '').match(/^([^:\/?#]+:)?(\/\/(?:[^:@]*(?::[^:@]*)?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);
				// authority = '//' + user + ':' + pass '@' + hostname + ':' port
				return (m ? {
				href     : m[0] || '',
				protocol : m[1] || '',
				authority: m[2] || '',
				host     : m[3] || '',
				hostname : m[4] || '',
				port     : m[5] || '',
				pathname : m[6] || '',
				search   : m[7] || '',
				hash     : m[8] || ''
			} : null);
		},
		  
		joinURIs = function(base, href) {
			function removeDotSegments(input) {
				var output = [];
				input.replace(/^(\.\.?(\/|$))+/, '')
					.replace(/\/(\.(\/|$))+/g, '/')
					.replace(/\/\.\.$/, '/../')
					.replace(/\/?[^\/]*/g, function (p) {
						if (p === '/..') {
							output.pop();
						} else {
							output.push(p);
						}
					});
				return output.join('').replace(/^\//, input.charAt(0) === '/' ? '/' : '');
			}

			href = parseURI(href || '');
			base = parseURI(base || '');

			return !href || !base ? null : (href.protocol || base.protocol) +
				(href.protocol || href.authority ? href.authority : base.authority) +
				removeDotSegments(href.protocol || href.authority || href.pathname.charAt(0) === '/' ? href.pathname : (href.pathname ? ((base.authority && !base.pathname ? '/' : '') + base.pathname.slice(0, base.pathname.lastIndexOf('/') + 1) + href.pathname) : base.pathname)) +
					(href.protocol || href.authority || href.pathname ? href.search : (href.search || base.search)) +
					href.hash;
		};


	var filename = function(uri){
		var lastSlash = uri.lastIndexOf("/"),
			matches = ( lastSlash == -1 ? uri : uri.substr(lastSlash+1) ).match(/^[\w-\s\.]+/);
		return matches ? matches[0] : "";
	};
	
	var ext = function(uri){
		var fn = filename(uri);
		var dot = fn.lastIndexOf(".");
		if(dot !== -1) {
			return fn.substr(dot+1);
		} else {
			return "";
		}
	};

	var pluginCache = {};
	
	var normalize = function(name, loader){

		// Detech if this name contains a plugin part like: app.less!steal/less
		// and catch the plugin name so that when it is normalized we do not perform
		// Steal's normalization against it.
		var pluginIndex = name.lastIndexOf('!');
		var pluginPart = "";
		if (pluginIndex != -1) {
			// argumentName is the part before the !
			var argumentName = name.substr(0, pluginIndex);
			var pluginName = name.substr(pluginIndex + 1);
			pluginPart = "!" + pluginName;

			// Set the name to the argument name so that we can normalize it alone.
			name = argumentName;
		} 
		
		var last = filename(name),
			extension = ext(name);
		// if the name ends with /
		if(	name[name.length -1] === "/" ) {
			return name+filename( name.substr(0, name.length-1) ) + pluginPart;
		} else if(	!/^(\w+(?:s)?:\/\/|\.|file|\/)/.test(name) &&
			// and doesn't end with a dot
			 last.indexOf(".") === -1 
			) {
			return name+"/"+last + pluginPart;
		} else {
			if(extension === "js") {
				return name.substr(0, name.lastIndexOf(".")) + pluginPart;
			} else {
				return name + pluginPart;
			}
		}
	};

var makeSteal = function(System){
	
	
	System.set('@loader', System.newModule({'default':System, __useDefault: true}));
		
	var configDeferred,
		devDeferred,
		appDeferred;

	var steal = function(){
		var args = arguments;
		var afterConfig = function(){
			var imports = [];
			var factory;
			each(args, function(arg){
				if(isString(arg)) {
					imports.push( steal.System['import']( normalize(arg) ) );
				} else if(typeof arg === "function") {
					factory = arg;
				}
			});
			
			var modules = Promise.all(imports);
			if(factory) {
				return modules.then(function(modules) {
			        return factory && factory.apply(null, modules);
			   });
			} else {
				return modules;
			}
		};
		if(System.env === "production") {
			return afterConfig();
		} else {
			// wait until the config has loaded
			return configDeferred.then(afterConfig,afterConfig);
		}
		
	};
	
	steal.System = System;
	steal.parseURI = parseURI;
	steal.joinURIs = joinURIs;
	steal.normalize = normalize;

	// System.ext = {bar: "path/to/bar"}
	// foo.bar! -> foo.bar!path/to/bar
	var addExt = function(loader) {
		
		loader.ext = {};
		
		var normalize = loader.normalize,
			endingExtension = /\.(\w+)!$/;
			
		loader.normalize = function(name, parentName, parentAddress){
			var matches = name.match(endingExtension),
				ext,
				newName = name;
			
			if(matches && loader.ext[ext = matches[1]]) {
				newName = name + loader.ext[ext];
			}
			return normalize.call(this, newName, parentName, parentAddress);
		};
	};

	if(typeof System){
		addExt(System);
	}
	

	// "path/to/folder/" -> "path/to/folder/folder"
	var addForwardSlash = function(loader) {
		var normalize = loader.normalize;

		loader.normalize = function(name, parentName, parentAddress) {
			var lastPos = name.length - 1,
				secondToLast,
				folderName;

			if (name[lastPos] === "/") {
				secondToLast = name.substring(0, lastPos).lastIndexOf("/");
				folderName = name.substring(secondToLast + 1, lastPos);
				name += folderName;
			}
			return normalize.call(this, name, parentName, parentAddress);
		};
	};

	if (typeof System) {
		addForwardSlash(System);
	}

	// Overwrites System.config with setter hooks
	var setterConfig = function(loader, configSpecial){
		var oldConfig = loader.config;
		
		loader.config =  function(cfg){
			
			var data = extend({},cfg);
			// check each special
			each(configSpecial, function(special, name){
				// if there is a setter and a value
				if(special.set && data[name]){
					// call the setter
					var res = special.set.call(loader,data[name], cfg);
					// if the setter returns a value
					if(res !== undefined) {
						// set that on the loader
						loader[name] = res;
					} 
					// delete the property b/c setting is done
					delete data[name];
				}
			});
			oldConfig.call(this, data);
		};
	};
	var setIfNotPresent = function(obj, prop, value){
		if(!obj[prop]) {
			obj[prop] = value;	
		}
	};
	
	// steal.js's default configuration values
	System.paths["@config"] = "stealconfig.js";
	System.env = "development";
	System.ext = {
		css: '$css',
		less: '$less'
	};
	var cssBundlesNameGlob = "bundles/*.css",
		jsBundlesNameGlob = "bundles/*";
	setIfNotPresent(System.paths,cssBundlesNameGlob, "dist/bundles/*css");
	setIfNotPresent(System.paths,jsBundlesNameGlob, "dist/bundles/*.js");
	
	
	var configSetter = {
		set: function(val){
			var name = filename(val),
				root = dir(val);
			this.paths["@config"] = name;
			this.baseURL =  (root === val ? "." : root)  +"/";
		}
	},
		mainSetter = {
			set: function(val){
				this.main = val;
				addProductionBundles.call(this);
			}
		};
		
	var setToSystem = function(prop){
		return {
			set: function(val){
				if(typeof val === "object" && typeof steal.System[prop] === "object") {
					this[prop] = extend(this[prop] || {},val || {});
				} else {
					this[prop] = val;
				}
			}
		};
	};
	

	

	
	var addProductionBundles = function(){
		if(this.env === "production" && this.main) {
			var main = this.main,
				bundlesDir = this.bundlesName || "bundles/",
				mainBundleName = bundlesDir+filename(main);
				
	
			setIfNotPresent(this.meta, mainBundleName, {format:"amd"});
			setIfNotPresent(this.bundles, mainBundleName, [main]);

		}
	};
	
	var isNode = typeof module != 'undefined' && module.exports;
	var LESS_ENGINE = "less-1.7.0";
	
	setterConfig(System,{
		env: {
			set: function(val){
				System.env =  val;
				addProductionBundles.call(this);
			}
		},
		baseUrl: setToSystem("baseURL"),
		root: setToSystem("baseURL"),
		config: configSetter,
		configPath: configSetter,
		startId: {
			set: function(val){
				mainSetter.set.call(this, normalize(val) );
			}
		},
		main: mainSetter,
		// this gets called with the __dirname steal is in
		stealPath: {
			set: function(dirname, cfg) {
				var parts = dirname.split("/");

				setIfNotPresent(this.paths,"@dev", dirname+"/dev.js");
				setIfNotPresent(this.paths,"$css", dirname+"/css.js");
				setIfNotPresent(this.paths,"$less", dirname+"/less.js");
				this.paths["@traceur"] = parts.slice(0,-1).join("/")+"/traceur/traceur.js";
				
				if(isNode) {
					System.register("less",[], false, function(){
						var r = require;
						return r('less');
					});
				} else {
					setIfNotPresent(this.paths,"less",  dirname+"/"+LESS_ENGINE+".js");
					
					// make sure we don't set baseURL if something else is going to set it
					if(!cfg.root && !cfg.baseUrl && !cfg.baseURL && !cfg.config && !cfg.configPath) {
						if ( last(parts) === "steal" ) {
							parts.pop();
							if ( last(parts) === "bower_components" ) {
								parts.pop();
							}
						}
						this.baseURL =  parts.join("/")+"/";
					}
				}
			}
		},
		// System.config does not like being passed arrays.
		bundle: {
			set: function(val){
				System.bundle = val;
			}
		},
		bundlesPath: {
			set: function(val){
				this.paths[cssBundlesNameGlob] = val+"/*css";
				this.paths[jsBundlesNameGlob]  = val+"/*.js";
				return val;
			}
		},
		instantiated: {
			set: function(val){
				var loader = this;
				
				each(val || {}, function(value, name){
					loader.set(name,  loader.newModule(value));
				});
			}
		}
	});
	
	steal.config = function(cfg){
		if(typeof cfg === "string") {
			return System[cfg];
		} else {
			System.config(cfg);
		}
		
	};
	


	var getScriptOptions = function () {

		var options = {},
			parts, src, query, startFile, env,
			scripts = document.getElementsByTagName("script");

		var script = scripts[scripts.length - 1];

		if (script) {

			// Split on question mark to get query
			parts = script.src.split("?");
			src = parts.shift();
			query = parts.join("?");

			// Split on comma to get startFile and env
			parts = query.split(",");

			if (src.indexOf("steal.production") > -1) {
				options.env = "production";
			}

			if (parts[0]) {
				options.startId = parts[0];
			}
			// Grab env
			if (parts[1]) {
				options.env = parts[1];
			}

			// Split on / to get rootUrl
			parts = src.split("/");
			var lastPart = parts.pop();
			
			options.stealPath = parts.join("/");

			each(script.attributes, function(attr){
				var optionName = 
					camelize( attr.nodeName.indexOf("data-") === 0 ?
						attr.nodeName.replace("data-","") :
						attr.nodeName );
				options[optionName] = attr.value;
			});

		}

		return options;
	};

	steal.startup = function(config){

		// Get options from the script tag
		if(global.document) {
			var urlOptions = getScriptOptions();
		} else {
			// or the only option is where steal is.
			var urlOptions = {
				stealPath: __dirname
			};
		}

		// B: DO THINGS WITH OPTIONS
		// CALCULATE CURRENT LOCATION OF THINGS ...
		System.config(urlOptions);
		
		if(config){
			System.config(config);
		}

		// Read the env now because we can't overwrite everything yet

		// immediate steals we do
		var steals = [];

		// we only load things with force = true
		if ( System.env == "production" && System.main ) {
			
			// Override instantiate temporarily to ensure @config is loaded
			// before System.main
			var baseInstantiate = System.instantiate;
			var configDeps = [];
			System.instantiate = function(load) {
				var loader = this;
				if(loader.defined["@config"] && load.name !== "@config" &&
				   configDeps.indexOf(load.name) === -1) {
					return loader.import("@config").then(function() {
						System.instantiate = baseInstantiate;
						return baseInstantiate.call(loader, load);
					});
				}

				if(load.name === "@config") {
					return baseInstantiate.call(this, load).then(function(instantiateResult) {
						configDeps = instantiateResult.deps.slice();
						return instantiateResult;
					});
				}
				
				return baseInstantiate.call(this, load);
			};

			return appDeferred = System.import(System.main)["catch"](function(e){
				console.log(e);
			});

		} else if(System.env == "development"){

			configDeferred = System.import("@config");

			devDeferred = configDeferred.then(function(){
				// If a configuration was passed to startup we'll use that to overwrite
				// what was loaded in stealconfig.js
				// This means we call it twice, but that's ok
				if(config) {
					System.config(config);
				}

				return System.import("@dev");
			},function(e){
				console.log("steal - error loading @config.",e);
				return steal.System.import("@dev");
			});

			appDeferred = devDeferred.then(function(){
				// if there's a main, get it, otherwise, we are just loading
				// the config.
				if(!System.main) {
					return configDeferred;
				}
				var main = System.main;
				if(typeof main === "string") {
					main = [main];
				}
				return Promise.all( map(main,function(main){
					return System.import(main)
				}) );
			}).then(function(){
				if(steal.dev) {
					steal.dev.log("app loaded successfully")
				}
			}, function(error){
				console.log("error",error,  error.stack);
			});
			return appDeferred;
		}
	};
	steal.done = function(){
		return appDeferred;
	};
	return steal;


};
/*
  SystemJS Steal Format
  Provides the Steal module format definition.
*/
function addSteal(loader) {

  // Steal Module Format Detection RegEx
  // steal(module, ...)
  var stealRegEx = /(?:^\s*|[}{\(\);,\n\?\&]\s*)steal\s*\(\s*((?:"[^"]+"\s*,|'[^']+'\s*,\s*)*)/;

  // What we stole.
  var stealInstantiateResult;
  
  function createSteal(loader) {
    stealInstantiateResult = null;

    // ensure no NodeJS environment detection
    loader.global.module = undefined;
    loader.global.exports = undefined;

    function steal() {
      var deps = [];
      var factory;
      
      for( var i = 0; i < arguments.length; i++ ) {
        if (typeof arguments[i] === 'string') {
          deps.push( normalize(arguments[i]) );
        } else {
          factory = arguments[i];
        }
      }

      if (typeof factory !== 'function') {
        factory = (function(factory) {
          return function() { return factory; };
        })(factory);
      }

      stealInstantiateResult = {
        deps: deps,
        execute: function(require, exports, moduleName) {

          var depValues = [];
          for (var i = 0; i < deps.length; i++) {
            depValues.push(require(deps[i]));
          }

          var output = factory.apply(loader.global, depValues);

          if (typeof output !== 'undefined') {
            return output;
          }
        }
      };
    }

    loader.global.steal = steal;
  }

  var loaderInstantiate = loader.instantiate;
  loader.instantiate = function(load) {
    var loader = this;

    if (load.metadata.format === 'steal' || !load.metadata.format && load.source.match(stealRegEx)) {
      load.metadata.format = 'steal';

      var oldSteal = loader.global.steal;

      createSteal(loader);

      loader.__exec(load);

      loader.global.steal = oldSteal;

      if (!stealInstantiateResult) {
        throw "Steal module " + load.name + " did not call steal";
      }

      if (stealInstantiateResult) {
        load.metadata.deps = load.metadata.deps ? load.metadata.deps.concat(stealInstantiateResult.deps) : stealInstantiateResult.deps;
        load.metadata.execute = stealInstantiateResult.execute;
      }
    }
    return loaderInstantiate.call(loader, load);
  };

  return loader;
}

if (typeof System !== "undefined") {
  addSteal(System);
}

	if (typeof window != 'undefined') {
		var oldSteal = window.steal;
		window.steal = makeSteal(System);
		window.steal.startup(oldSteal && typeof oldSteal == 'object' && oldSteal  );
		window.steal.addSteal = addSteal;
		global.define = System.amdDefine;
		
	} else {
    	
		require('systemjs');
			
		global.steal = makeSteal(System);
		global.steal.System = System;
		global.steal.dev = require("./dev.js");
		steal.clone = makeSteal;
		module.exports = global.steal;
		global.steal.addSteal = addSteal;
	}
    
})(typeof window == "undefined" ? global : window);

/*[system-bundles-config]*/
System.paths["bundles/*.css"] ="dist/*css";
System.paths["bundles/*"] = "dist/*.js";
System.bundles = {"bundles/test.css!":["bower_components/mocha/mocha.css!bower_components/steal/css","styles.less!bower_components/steal/less"]};
/*@config*/
System.define('@config','System.config({\n	baseURL: \"./\",\n	map: {\n		\"jquery/jquery\": \"jquery\",\n		\"can/util/util.js\": \"can/util/jquery/jquery.js\",\n		util: \"bower_components/component-utils\"\n	},\n	paths: {\n		jquery: \"bower_components/jquery/dist/jquery.js\",\n		mocha: \"bower_components/mocha/mocha.js\",\n		\"can/*\": \"bower_components/canjs/*.js\",\n		can: \"bower_components/canjs/can.js\"\n	},\n    meta: {\n        jquery: { exports: \"jQuery\" },\n        mocha: { exports: \"mocha\" }\n    },\n	ext: {\n		css: \"bower_components/steal/css\",\n		less: \"bower_components/steal/less\",\n		stache: \"can/view/stache/system\"\n	}\n});\nSystem.buildConfig = {\n	map: {\n		\"can/util/util\": \"can/util/domless/domless\"\n	}\n};\n',{"address":"@config","metadata":{"deps":[],"format":"global"}});
/*jquery*/
System.define('jquery','/*!\n * jQuery JavaScript Library v2.1.1\n * http://jquery.com/\n *\n * Includes Sizzle.js\n * http://sizzlejs.com/\n *\n * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors\n * Released under the MIT license\n * http://jquery.org/license\n *\n * Date: 2014-05-01T17:11Z\n */\n\n(function( global, factory ) {\n\n	if ( typeof module === \"object\" && typeof module.exports === \"object\" ) {\n		// For CommonJS and CommonJS-like environments where a proper window is present,\n		// execute the factory and get jQuery\n		// For environments that do not inherently posses a window with a document\n		// (such as Node.js), expose a jQuery-making factory as module.exports\n		// This accentuates the need for the creation of a real window\n		// e.g. var jQuery = require(\"jquery\")(window);\n		// See ticket #14549 for more info\n		module.exports = global.document ?\n			factory( global, true ) :\n			function( w ) {\n				if ( !w.document ) {\n					throw new Error( \"jQuery requires a window with a document\" );\n				}\n				return factory( w );\n			};\n	} else {\n		factory( global );\n	}\n\n// Pass this if window is not defined yet\n}(typeof window !== \"undefined\" ? window : this, function( window, noGlobal ) {\n\n// Can\'t do this because several apps including ASP.NET trace\n// the stack via arguments.caller.callee and Firefox dies if\n// you try to trace through \"use strict\" call chains. (#13335)\n// Support: Firefox 18+\n//\n\nvar arr = [];\n\nvar slice = arr.slice;\n\nvar concat = arr.concat;\n\nvar push = arr.push;\n\nvar indexOf = arr.indexOf;\n\nvar class2type = {};\n\nvar toString = class2type.toString;\n\nvar hasOwn = class2type.hasOwnProperty;\n\nvar support = {};\n\n\n\nvar\n	// Use the correct document accordingly with window argument (sandbox)\n	document = window.document,\n\n	version = \"2.1.1\",\n\n	// Define a local copy of jQuery\n	jQuery = function( selector, context ) {\n		// The jQuery object is actually just the init constructor \'enhanced\'\n		// Need init if jQuery is called (just allow error to be thrown if not included)\n		return new jQuery.fn.init( selector, context );\n	},\n\n	// Support: Android<4.1\n	// Make sure we trim BOM and NBSP\n	rtrim = /^[\\s\\uFEFF\\xA0]+|[\\s\\uFEFF\\xA0]+$/g,\n\n	// Matches dashed string for camelizing\n	rmsPrefix = /^-ms-/,\n	rdashAlpha = /-([\\da-z])/gi,\n\n	// Used by jQuery.camelCase as callback to replace()\n	fcamelCase = function( all, letter ) {\n		return letter.toUpperCase();\n	};\n\njQuery.fn = jQuery.prototype = {\n	// The current version of jQuery being used\n	jquery: version,\n\n	constructor: jQuery,\n\n	// Start with an empty selector\n	selector: \"\",\n\n	// The default length of a jQuery object is 0\n	length: 0,\n\n	toArray: function() {\n		return slice.call( this );\n	},\n\n	// Get the Nth element in the matched element set OR\n	// Get the whole matched element set as a clean array\n	get: function( num ) {\n		return num != null ?\n\n			// Return just the one element from the set\n			( num < 0 ? this[ num + this.length ] : this[ num ] ) :\n\n			// Return all the elements in a clean array\n			slice.call( this );\n	},\n\n	// Take an array of elements and push it onto the stack\n	// (returning the new matched element set)\n	pushStack: function( elems ) {\n\n		// Build a new jQuery matched element set\n		var ret = jQuery.merge( this.constructor(), elems );\n\n		// Add the old object onto the stack (as a reference)\n		ret.prevObject = this;\n		ret.context = this.context;\n\n		// Return the newly-formed element set\n		return ret;\n	},\n\n	// Execute a callback for every element in the matched set.\n	// (You can seed the arguments with an array of args, but this is\n	// only used internally.)\n	each: function( callback, args ) {\n		return jQuery.each( this, callback, args );\n	},\n\n	map: function( callback ) {\n		return this.pushStack( jQuery.map(this, function( elem, i ) {\n			return callback.call( elem, i, elem );\n		}));\n	},\n\n	slice: function() {\n		return this.pushStack( slice.apply( this, arguments ) );\n	},\n\n	first: function() {\n		return this.eq( 0 );\n	},\n\n	last: function() {\n		return this.eq( -1 );\n	},\n\n	eq: function( i ) {\n		var len = this.length,\n			j = +i + ( i < 0 ? len : 0 );\n		return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );\n	},\n\n	end: function() {\n		return this.prevObject || this.constructor(null);\n	},\n\n	// For internal use only.\n	// Behaves like an Array\'s method, not like a jQuery method.\n	push: push,\n	sort: arr.sort,\n	splice: arr.splice\n};\n\njQuery.extend = jQuery.fn.extend = function() {\n	var options, name, src, copy, copyIsArray, clone,\n		target = arguments[0] || {},\n		i = 1,\n		length = arguments.length,\n		deep = false;\n\n	// Handle a deep copy situation\n	if ( typeof target === \"boolean\" ) {\n		deep = target;\n\n		// skip the boolean and the target\n		target = arguments[ i ] || {};\n		i++;\n	}\n\n	// Handle case when target is a string or something (possible in deep copy)\n	if ( typeof target !== \"object\" && !jQuery.isFunction(target) ) {\n		target = {};\n	}\n\n	// extend jQuery itself if only one argument is passed\n	if ( i === length ) {\n		target = this;\n		i--;\n	}\n\n	for ( ; i < length; i++ ) {\n		// Only deal with non-null/undefined values\n		if ( (options = arguments[ i ]) != null ) {\n			// Extend the base object\n			for ( name in options ) {\n				src = target[ name ];\n				copy = options[ name ];\n\n				// Prevent never-ending loop\n				if ( target === copy ) {\n					continue;\n				}\n\n				// Recurse if we\'re merging plain objects or arrays\n				if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {\n					if ( copyIsArray ) {\n						copyIsArray = false;\n						clone = src && jQuery.isArray(src) ? src : [];\n\n					} else {\n						clone = src && jQuery.isPlainObject(src) ? src : {};\n					}\n\n					// Never move original objects, clone them\n					target[ name ] = jQuery.extend( deep, clone, copy );\n\n				// Don\'t bring in undefined values\n				} else if ( copy !== undefined ) {\n					target[ name ] = copy;\n				}\n			}\n		}\n	}\n\n	// Return the modified object\n	return target;\n};\n\njQuery.extend({\n	// Unique for each copy of jQuery on the page\n	expando: \"jQuery\" + ( version + Math.random() ).replace( /\\D/g, \"\" ),\n\n	// Assume jQuery is ready without the ready module\n	isReady: true,\n\n	error: function( msg ) {\n		throw new Error( msg );\n	},\n\n	noop: function() {},\n\n	// See test/unit/core.js for details concerning isFunction.\n	// Since version 1.3, DOM methods and functions like alert\n	// aren\'t supported. They return false on IE (#2968).\n	isFunction: function( obj ) {\n		return jQuery.type(obj) === \"function\";\n	},\n\n	isArray: Array.isArray,\n\n	isWindow: function( obj ) {\n		return obj != null && obj === obj.window;\n	},\n\n	isNumeric: function( obj ) {\n		// parseFloat NaNs numeric-cast false positives (null|true|false|\"\")\n		// ...but misinterprets leading-number strings, particularly hex literals (\"0x...\")\n		// subtraction forces infinities to NaN\n		return !jQuery.isArray( obj ) && obj - parseFloat( obj ) >= 0;\n	},\n\n	isPlainObject: function( obj ) {\n		// Not plain objects:\n		// - Any object or value whose internal [[Class]] property is not \"[object Object]\"\n		// - DOM nodes\n		// - window\n		if ( jQuery.type( obj ) !== \"object\" || obj.nodeType || jQuery.isWindow( obj ) ) {\n			return false;\n		}\n\n		if ( obj.constructor &&\n				!hasOwn.call( obj.constructor.prototype, \"isPrototypeOf\" ) ) {\n			return false;\n		}\n\n		// If the function hasn\'t returned already, we\'re confident that\n		// |obj| is a plain object, created by {} or constructed with new Object\n		return true;\n	},\n\n	isEmptyObject: function( obj ) {\n		var name;\n		for ( name in obj ) {\n			return false;\n		}\n		return true;\n	},\n\n	type: function( obj ) {\n		if ( obj == null ) {\n			return obj + \"\";\n		}\n		// Support: Android < 4.0, iOS < 6 (functionish RegExp)\n		return typeof obj === \"object\" || typeof obj === \"function\" ?\n			class2type[ toString.call(obj) ] || \"object\" :\n			typeof obj;\n	},\n\n	// Evaluates a script in a global context\n	globalEval: function( code ) {\n		var script,\n			indirect = eval;\n\n		code = jQuery.trim( code );\n\n		if ( code ) {\n			// If the code includes a valid, prologue position\n			// strict mode pragma, execute code by injecting a\n			// script tag into the document.\n			if ( code.indexOf(\"use strict\") === 1 ) {\n				script = document.createElement(\"script\");\n				script.text = code;\n				document.head.appendChild( script ).parentNode.removeChild( script );\n			} else {\n			// Otherwise, avoid the DOM node creation, insertion\n			// and removal by using an indirect global eval\n				indirect( code );\n			}\n		}\n	},\n\n	// Convert dashed to camelCase; used by the css and data modules\n	// Microsoft forgot to hump their vendor prefix (#9572)\n	camelCase: function( string ) {\n		return string.replace( rmsPrefix, \"ms-\" ).replace( rdashAlpha, fcamelCase );\n	},\n\n	nodeName: function( elem, name ) {\n		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();\n	},\n\n	// args is for internal usage only\n	each: function( obj, callback, args ) {\n		var value,\n			i = 0,\n			length = obj.length,\n			isArray = isArraylike( obj );\n\n		if ( args ) {\n			if ( isArray ) {\n				for ( ; i < length; i++ ) {\n					value = callback.apply( obj[ i ], args );\n\n					if ( value === false ) {\n						break;\n					}\n				}\n			} else {\n				for ( i in obj ) {\n					value = callback.apply( obj[ i ], args );\n\n					if ( value === false ) {\n						break;\n					}\n				}\n			}\n\n		// A special, fast, case for the most common use of each\n		} else {\n			if ( isArray ) {\n				for ( ; i < length; i++ ) {\n					value = callback.call( obj[ i ], i, obj[ i ] );\n\n					if ( value === false ) {\n						break;\n					}\n				}\n			} else {\n				for ( i in obj ) {\n					value = callback.call( obj[ i ], i, obj[ i ] );\n\n					if ( value === false ) {\n						break;\n					}\n				}\n			}\n		}\n\n		return obj;\n	},\n\n	// Support: Android<4.1\n	trim: function( text ) {\n		return text == null ?\n			\"\" :\n			( text + \"\" ).replace( rtrim, \"\" );\n	},\n\n	// results is for internal usage only\n	makeArray: function( arr, results ) {\n		var ret = results || [];\n\n		if ( arr != null ) {\n			if ( isArraylike( Object(arr) ) ) {\n				jQuery.merge( ret,\n					typeof arr === \"string\" ?\n					[ arr ] : arr\n				);\n			} else {\n				push.call( ret, arr );\n			}\n		}\n\n		return ret;\n	},\n\n	inArray: function( elem, arr, i ) {\n		return arr == null ? -1 : indexOf.call( arr, elem, i );\n	},\n\n	merge: function( first, second ) {\n		var len = +second.length,\n			j = 0,\n			i = first.length;\n\n		for ( ; j < len; j++ ) {\n			first[ i++ ] = second[ j ];\n		}\n\n		first.length = i;\n\n		return first;\n	},\n\n	grep: function( elems, callback, invert ) {\n		var callbackInverse,\n			matches = [],\n			i = 0,\n			length = elems.length,\n			callbackExpect = !invert;\n\n		// Go through the array, only saving the items\n		// that pass the validator function\n		for ( ; i < length; i++ ) {\n			callbackInverse = !callback( elems[ i ], i );\n			if ( callbackInverse !== callbackExpect ) {\n				matches.push( elems[ i ] );\n			}\n		}\n\n		return matches;\n	},\n\n	// arg is for internal usage only\n	map: function( elems, callback, arg ) {\n		var value,\n			i = 0,\n			length = elems.length,\n			isArray = isArraylike( elems ),\n			ret = [];\n\n		// Go through the array, translating each of the items to their new values\n		if ( isArray ) {\n			for ( ; i < length; i++ ) {\n				value = callback( elems[ i ], i, arg );\n\n				if ( value != null ) {\n					ret.push( value );\n				}\n			}\n\n		// Go through every key on the object,\n		} else {\n			for ( i in elems ) {\n				value = callback( elems[ i ], i, arg );\n\n				if ( value != null ) {\n					ret.push( value );\n				}\n			}\n		}\n\n		// Flatten any nested arrays\n		return concat.apply( [], ret );\n	},\n\n	// A global GUID counter for objects\n	guid: 1,\n\n	// Bind a function to a context, optionally partially applying any\n	// arguments.\n	proxy: function( fn, context ) {\n		var tmp, args, proxy;\n\n		if ( typeof context === \"string\" ) {\n			tmp = fn[ context ];\n			context = fn;\n			fn = tmp;\n		}\n\n		// Quick check to determine if target is callable, in the spec\n		// this throws a TypeError, but we will just return undefined.\n		if ( !jQuery.isFunction( fn ) ) {\n			return undefined;\n		}\n\n		// Simulated bind\n		args = slice.call( arguments, 2 );\n		proxy = function() {\n			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );\n		};\n\n		// Set the guid of unique handler to the same of original handler, so it can be removed\n		proxy.guid = fn.guid = fn.guid || jQuery.guid++;\n\n		return proxy;\n	},\n\n	now: Date.now,\n\n	// jQuery.support is not used in Core but other projects attach their\n	// properties to it so it needs to exist.\n	support: support\n});\n\n// Populate the class2type map\njQuery.each(\"Boolean Number String Function Array Date RegExp Object Error\".split(\" \"), function(i, name) {\n	class2type[ \"[object \" + name + \"]\" ] = name.toLowerCase();\n});\n\nfunction isArraylike( obj ) {\n	var length = obj.length,\n		type = jQuery.type( obj );\n\n	if ( type === \"function\" || jQuery.isWindow( obj ) ) {\n		return false;\n	}\n\n	if ( obj.nodeType === 1 && length ) {\n		return true;\n	}\n\n	return type === \"array\" || length === 0 ||\n		typeof length === \"number\" && length > 0 && ( length - 1 ) in obj;\n}\nvar Sizzle =\n/*!\n * Sizzle CSS Selector Engine v1.10.19\n * http://sizzlejs.com/\n *\n * Copyright 2013 jQuery Foundation, Inc. and other contributors\n * Released under the MIT license\n * http://jquery.org/license\n *\n * Date: 2014-04-18\n */\n(function( window ) {\n\nvar i,\n	support,\n	Expr,\n	getText,\n	isXML,\n	tokenize,\n	compile,\n	select,\n	outermostContext,\n	sortInput,\n	hasDuplicate,\n\n	// Local document vars\n	setDocument,\n	document,\n	docElem,\n	documentIsHTML,\n	rbuggyQSA,\n	rbuggyMatches,\n	matches,\n	contains,\n\n	// Instance-specific data\n	expando = \"sizzle\" + -(new Date()),\n	preferredDoc = window.document,\n	dirruns = 0,\n	done = 0,\n	classCache = createCache(),\n	tokenCache = createCache(),\n	compilerCache = createCache(),\n	sortOrder = function( a, b ) {\n		if ( a === b ) {\n			hasDuplicate = true;\n		}\n		return 0;\n	},\n\n	// General-purpose constants\n	strundefined = typeof undefined,\n	MAX_NEGATIVE = 1 << 31,\n\n	// Instance methods\n	hasOwn = ({}).hasOwnProperty,\n	arr = [],\n	pop = arr.pop,\n	push_native = arr.push,\n	push = arr.push,\n	slice = arr.slice,\n	// Use a stripped-down indexOf if we can\'t use a native one\n	indexOf = arr.indexOf || function( elem ) {\n		var i = 0,\n			len = this.length;\n		for ( ; i < len; i++ ) {\n			if ( this[i] === elem ) {\n				return i;\n			}\n		}\n		return -1;\n	},\n\n	booleans = \"checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped\",\n\n	// Regular expressions\n\n	// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace\n	whitespace = \"[\\\\x20\\\\t\\\\r\\\\n\\\\f]\",\n	// http://www.w3.org/TR/css3-syntax/#characters\n	characterEncoding = \"(?:\\\\\\\\.|[\\\\w-]|[^\\\\x00-\\\\xa0])+\",\n\n	// Loosely modeled on CSS identifier characters\n	// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors\n	// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier\n	identifier = characterEncoding.replace( \"w\", \"w#\" ),\n\n	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors\n	attributes = \"\\\\[\" + whitespace + \"*(\" + characterEncoding + \")(?:\" + whitespace +\n		// Operator (capture 2)\n		\"*([*^$|!~]?=)\" + whitespace +\n		// \"Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]\"\n		\"*(?:\'((?:\\\\\\\\.|[^\\\\\\\\\'])*)\'|\\\"((?:\\\\\\\\.|[^\\\\\\\\\\\"])*)\\\"|(\" + identifier + \"))|)\" + whitespace +\n		\"*\\\\]\",\n\n	pseudos = \":(\" + characterEncoding + \")(?:\\\\((\" +\n		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:\n		// 1. quoted (capture 3; capture 4 or capture 5)\n		\"(\'((?:\\\\\\\\.|[^\\\\\\\\\'])*)\'|\\\"((?:\\\\\\\\.|[^\\\\\\\\\\\"])*)\\\")|\" +\n		// 2. simple (capture 6)\n		\"((?:\\\\\\\\.|[^\\\\\\\\()[\\\\]]|\" + attributes + \")*)|\" +\n		// 3. anything else (capture 2)\n		\".*\" +\n		\")\\\\)|)\",\n\n	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter\n	rtrim = new RegExp( \"^\" + whitespace + \"+|((?:^|[^\\\\\\\\])(?:\\\\\\\\.)*)\" + whitespace + \"+$\", \"g\" ),\n\n	rcomma = new RegExp( \"^\" + whitespace + \"*,\" + whitespace + \"*\" ),\n	rcombinators = new RegExp( \"^\" + whitespace + \"*([>+~]|\" + whitespace + \")\" + whitespace + \"*\" ),\n\n	rattributeQuotes = new RegExp( \"=\" + whitespace + \"*([^\\\\]\'\\\"]*?)\" + whitespace + \"*\\\\]\", \"g\" ),\n\n	rpseudo = new RegExp( pseudos ),\n	ridentifier = new RegExp( \"^\" + identifier + \"$\" ),\n\n	matchExpr = {\n		\"ID\": new RegExp( \"^#(\" + characterEncoding + \")\" ),\n		\"CLASS\": new RegExp( \"^\\\\.(\" + characterEncoding + \")\" ),\n		\"TAG\": new RegExp( \"^(\" + characterEncoding.replace( \"w\", \"w*\" ) + \")\" ),\n		\"ATTR\": new RegExp( \"^\" + attributes ),\n		\"PSEUDO\": new RegExp( \"^\" + pseudos ),\n		\"CHILD\": new RegExp( \"^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\\\(\" + whitespace +\n			\"*(even|odd|(([+-]|)(\\\\d*)n|)\" + whitespace + \"*(?:([+-]|)\" + whitespace +\n			\"*(\\\\d+)|))\" + whitespace + \"*\\\\)|)\", \"i\" ),\n		\"bool\": new RegExp( \"^(?:\" + booleans + \")$\", \"i\" ),\n		// For use in libraries implementing .is()\n		// We use this for POS matching in `select`\n		\"needsContext\": new RegExp( \"^\" + whitespace + \"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\\\(\" +\n			whitespace + \"*((?:-\\\\d)?\\\\d*)\" + whitespace + \"*\\\\)|)(?=[^-]|$)\", \"i\" )\n	},\n\n	rinputs = /^(?:input|select|textarea|button)$/i,\n	rheader = /^h\\d$/i,\n\n	rnative = /^[^{]+\\{\\s*\\[native \\w/,\n\n	// Easily-parseable/retrievable ID or TAG or CLASS selectors\n	rquickExpr = /^(?:#([\\w-]+)|(\\w+)|\\.([\\w-]+))$/,\n\n	rsibling = /[+~]/,\n	rescape = /\'|\\\\/g,\n\n	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters\n	runescape = new RegExp( \"\\\\\\\\([\\\\da-f]{1,6}\" + whitespace + \"?|(\" + whitespace + \")|.)\", \"ig\" ),\n	funescape = function( _, escaped, escapedWhitespace ) {\n		var high = \"0x\" + escaped - 0x10000;\n		// NaN means non-codepoint\n		// Support: Firefox<24\n		// Workaround erroneous numeric interpretation of +\"0x\"\n		return high !== high || escapedWhitespace ?\n			escaped :\n			high < 0 ?\n				// BMP codepoint\n				String.fromCharCode( high + 0x10000 ) :\n				// Supplemental Plane codepoint (surrogate pair)\n				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );\n	};\n\n// Optimize for push.apply( _, NodeList )\ntry {\n	push.apply(\n		(arr = slice.call( preferredDoc.childNodes )),\n		preferredDoc.childNodes\n	);\n	// Support: Android<4.0\n	// Detect silently failing push.apply\n	arr[ preferredDoc.childNodes.length ].nodeType;\n} catch ( e ) {\n	push = { apply: arr.length ?\n\n		// Leverage slice if possible\n		function( target, els ) {\n			push_native.apply( target, slice.call(els) );\n		} :\n\n		// Support: IE<9\n		// Otherwise append directly\n		function( target, els ) {\n			var j = target.length,\n				i = 0;\n			// Can\'t trust NodeList.length\n			while ( (target[j++] = els[i++]) ) {}\n			target.length = j - 1;\n		}\n	};\n}\n\nfunction Sizzle( selector, context, results, seed ) {\n	var match, elem, m, nodeType,\n		// QSA vars\n		i, groups, old, nid, newContext, newSelector;\n\n	if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {\n		setDocument( context );\n	}\n\n	context = context || document;\n	results = results || [];\n\n	if ( !selector || typeof selector !== \"string\" ) {\n		return results;\n	}\n\n	if ( (nodeType = context.nodeType) !== 1 && nodeType !== 9 ) {\n		return [];\n	}\n\n	if ( documentIsHTML && !seed ) {\n\n		// Shortcuts\n		if ( (match = rquickExpr.exec( selector )) ) {\n			// Speed-up: Sizzle(\"#ID\")\n			if ( (m = match[1]) ) {\n				if ( nodeType === 9 ) {\n					elem = context.getElementById( m );\n					// Check parentNode to catch when Blackberry 4.6 returns\n					// nodes that are no longer in the document (jQuery #6963)\n					if ( elem && elem.parentNode ) {\n						// Handle the case where IE, Opera, and Webkit return items\n						// by name instead of ID\n						if ( elem.id === m ) {\n							results.push( elem );\n							return results;\n						}\n					} else {\n						return results;\n					}\n				} else {\n					// Context is not a document\n					if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&\n						contains( context, elem ) && elem.id === m ) {\n						results.push( elem );\n						return results;\n					}\n				}\n\n			// Speed-up: Sizzle(\"TAG\")\n			} else if ( match[2] ) {\n				push.apply( results, context.getElementsByTagName( selector ) );\n				return results;\n\n			// Speed-up: Sizzle(\".CLASS\")\n			} else if ( (m = match[3]) && support.getElementsByClassName && context.getElementsByClassName ) {\n				push.apply( results, context.getElementsByClassName( m ) );\n				return results;\n			}\n		}\n\n		// QSA path\n		if ( support.qsa && (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {\n			nid = old = expando;\n			newContext = context;\n			newSelector = nodeType === 9 && selector;\n\n			// qSA works strangely on Element-rooted queries\n			// We can work around this by specifying an extra ID on the root\n			// and working up from there (Thanks to Andrew Dupont for the technique)\n			// IE 8 doesn\'t work on object elements\n			if ( nodeType === 1 && context.nodeName.toLowerCase() !== \"object\" ) {\n				groups = tokenize( selector );\n\n				if ( (old = context.getAttribute(\"id\")) ) {\n					nid = old.replace( rescape, \"\\\\$&\" );\n				} else {\n					context.setAttribute( \"id\", nid );\n				}\n				nid = \"[id=\'\" + nid + \"\'] \";\n\n				i = groups.length;\n				while ( i-- ) {\n					groups[i] = nid + toSelector( groups[i] );\n				}\n				newContext = rsibling.test( selector ) && testContext( context.parentNode ) || context;\n				newSelector = groups.join(\",\");\n			}\n\n			if ( newSelector ) {\n				try {\n					push.apply( results,\n						newContext.querySelectorAll( newSelector )\n					);\n					return results;\n				} catch(qsaError) {\n				} finally {\n					if ( !old ) {\n						context.removeAttribute(\"id\");\n					}\n				}\n			}\n		}\n	}\n\n	// All others\n	return select( selector.replace( rtrim, \"$1\" ), context, results, seed );\n}\n\n/**\n * Create key-value caches of limited size\n * @returns {Function(string, Object)} Returns the Object data after storing it on itself with\n *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)\n *	deleting the oldest entry\n */\nfunction createCache() {\n	var keys = [];\n\n	function cache( key, value ) {\n		// Use (key + \" \") to avoid collision with native prototype properties (see Issue #157)\n		if ( keys.push( key + \" \" ) > Expr.cacheLength ) {\n			// Only keep the most recent entries\n			delete cache[ keys.shift() ];\n		}\n		return (cache[ key + \" \" ] = value);\n	}\n	return cache;\n}\n\n/**\n * Mark a function for special use by Sizzle\n * @param {Function} fn The function to mark\n */\nfunction markFunction( fn ) {\n	fn[ expando ] = true;\n	return fn;\n}\n\n/**\n * Support testing using an element\n * @param {Function} fn Passed the created div and expects a boolean result\n */\nfunction assert( fn ) {\n	var div = document.createElement(\"div\");\n\n	try {\n		return !!fn( div );\n	} catch (e) {\n		return false;\n	} finally {\n		// Remove from its parent by default\n		if ( div.parentNode ) {\n			div.parentNode.removeChild( div );\n		}\n		// release memory in IE\n		div = null;\n	}\n}\n\n/**\n * Adds the same handler for all of the specified attrs\n * @param {String} attrs Pipe-separated list of attributes\n * @param {Function} handler The method that will be applied\n */\nfunction addHandle( attrs, handler ) {\n	var arr = attrs.split(\"|\"),\n		i = attrs.length;\n\n	while ( i-- ) {\n		Expr.attrHandle[ arr[i] ] = handler;\n	}\n}\n\n/**\n * Checks document order of two siblings\n * @param {Element} a\n * @param {Element} b\n * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b\n */\nfunction siblingCheck( a, b ) {\n	var cur = b && a,\n		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&\n			( ~b.sourceIndex || MAX_NEGATIVE ) -\n			( ~a.sourceIndex || MAX_NEGATIVE );\n\n	// Use IE sourceIndex if available on both nodes\n	if ( diff ) {\n		return diff;\n	}\n\n	// Check if b follows a\n	if ( cur ) {\n		while ( (cur = cur.nextSibling) ) {\n			if ( cur === b ) {\n				return -1;\n			}\n		}\n	}\n\n	return a ? 1 : -1;\n}\n\n/**\n * Returns a function to use in pseudos for input types\n * @param {String} type\n */\nfunction createInputPseudo( type ) {\n	return function( elem ) {\n		var name = elem.nodeName.toLowerCase();\n		return name === \"input\" && elem.type === type;\n	};\n}\n\n/**\n * Returns a function to use in pseudos for buttons\n * @param {String} type\n */\nfunction createButtonPseudo( type ) {\n	return function( elem ) {\n		var name = elem.nodeName.toLowerCase();\n		return (name === \"input\" || name === \"button\") && elem.type === type;\n	};\n}\n\n/**\n * Returns a function to use in pseudos for positionals\n * @param {Function} fn\n */\nfunction createPositionalPseudo( fn ) {\n	return markFunction(function( argument ) {\n		argument = +argument;\n		return markFunction(function( seed, matches ) {\n			var j,\n				matchIndexes = fn( [], seed.length, argument ),\n				i = matchIndexes.length;\n\n			// Match elements found at the specified indexes\n			while ( i-- ) {\n				if ( seed[ (j = matchIndexes[i]) ] ) {\n					seed[j] = !(matches[j] = seed[j]);\n				}\n			}\n		});\n	});\n}\n\n/**\n * Checks a node for validity as a Sizzle context\n * @param {Element|Object=} context\n * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value\n */\nfunction testContext( context ) {\n	return context && typeof context.getElementsByTagName !== strundefined && context;\n}\n\n// Expose support vars for convenience\nsupport = Sizzle.support = {};\n\n/**\n * Detects XML nodes\n * @param {Element|Object} elem An element or a document\n * @returns {Boolean} True iff elem is a non-HTML XML node\n */\nisXML = Sizzle.isXML = function( elem ) {\n	// documentElement is verified for cases where it doesn\'t yet exist\n	// (such as loading iframes in IE - #4833)\n	var documentElement = elem && (elem.ownerDocument || elem).documentElement;\n	return documentElement ? documentElement.nodeName !== \"HTML\" : false;\n};\n\n/**\n * Sets document-related variables once based on the current document\n * @param {Element|Object} [doc] An element or document object to use to set the document\n * @returns {Object} Returns the current document\n */\nsetDocument = Sizzle.setDocument = function( node ) {\n	var hasCompare,\n		doc = node ? node.ownerDocument || node : preferredDoc,\n		parent = doc.defaultView;\n\n	// If no document and documentElement is available, return\n	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {\n		return document;\n	}\n\n	// Set our document\n	document = doc;\n	docElem = doc.documentElement;\n\n	// Support tests\n	documentIsHTML = !isXML( doc );\n\n	// Support: IE>8\n	// If iframe document is assigned to \"document\" variable and if iframe has been reloaded,\n	// IE will throw \"permission denied\" error when accessing \"document\" variable, see jQuery #13936\n	// IE6-8 do not support the defaultView property so parent will be undefined\n	if ( parent && parent !== parent.top ) {\n		// IE11 does not have attachEvent, so all must suffer\n		if ( parent.addEventListener ) {\n			parent.addEventListener( \"unload\", function() {\n				setDocument();\n			}, false );\n		} else if ( parent.attachEvent ) {\n			parent.attachEvent( \"onunload\", function() {\n				setDocument();\n			});\n		}\n	}\n\n	/* Attributes\n	---------------------------------------------------------------------- */\n\n	// Support: IE<8\n	// Verify that getAttribute really returns attributes and not properties (excepting IE8 booleans)\n	support.attributes = assert(function( div ) {\n		div.className = \"i\";\n		return !div.getAttribute(\"className\");\n	});\n\n	/* getElement(s)By*\n	---------------------------------------------------------------------- */\n\n	// Check if getElementsByTagName(\"*\") returns only elements\n	support.getElementsByTagName = assert(function( div ) {\n		div.appendChild( doc.createComment(\"\") );\n		return !div.getElementsByTagName(\"*\").length;\n	});\n\n	// Check if getElementsByClassName can be trusted\n	support.getElementsByClassName = rnative.test( doc.getElementsByClassName ) && assert(function( div ) {\n		div.innerHTML = \"<div class=\'a\'></div><div class=\'a i\'></div>\";\n\n		// Support: Safari<4\n		// Catch class over-caching\n		div.firstChild.className = \"i\";\n		// Support: Opera<10\n		// Catch gEBCN failure to find non-leading classes\n		return div.getElementsByClassName(\"i\").length === 2;\n	});\n\n	// Support: IE<10\n	// Check if getElementById returns elements by name\n	// The broken getElementById methods don\'t pick up programatically-set names,\n	// so use a roundabout getElementsByName test\n	support.getById = assert(function( div ) {\n		docElem.appendChild( div ).id = expando;\n		return !doc.getElementsByName || !doc.getElementsByName( expando ).length;\n	});\n\n	// ID find and filter\n	if ( support.getById ) {\n		Expr.find[\"ID\"] = function( id, context ) {\n			if ( typeof context.getElementById !== strundefined && documentIsHTML ) {\n				var m = context.getElementById( id );\n				// Check parentNode to catch when Blackberry 4.6 returns\n				// nodes that are no longer in the document #6963\n				return m && m.parentNode ? [ m ] : [];\n			}\n		};\n		Expr.filter[\"ID\"] = function( id ) {\n			var attrId = id.replace( runescape, funescape );\n			return function( elem ) {\n				return elem.getAttribute(\"id\") === attrId;\n			};\n		};\n	} else {\n		// Support: IE6/7\n		// getElementById is not reliable as a find shortcut\n		delete Expr.find[\"ID\"];\n\n		Expr.filter[\"ID\"] =  function( id ) {\n			var attrId = id.replace( runescape, funescape );\n			return function( elem ) {\n				var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode(\"id\");\n				return node && node.value === attrId;\n			};\n		};\n	}\n\n	// Tag\n	Expr.find[\"TAG\"] = support.getElementsByTagName ?\n		function( tag, context ) {\n			if ( typeof context.getElementsByTagName !== strundefined ) {\n				return context.getElementsByTagName( tag );\n			}\n		} :\n		function( tag, context ) {\n			var elem,\n				tmp = [],\n				i = 0,\n				results = context.getElementsByTagName( tag );\n\n			// Filter out possible comments\n			if ( tag === \"*\" ) {\n				while ( (elem = results[i++]) ) {\n					if ( elem.nodeType === 1 ) {\n						tmp.push( elem );\n					}\n				}\n\n				return tmp;\n			}\n			return results;\n		};\n\n	// Class\n	Expr.find[\"CLASS\"] = support.getElementsByClassName && function( className, context ) {\n		if ( typeof context.getElementsByClassName !== strundefined && documentIsHTML ) {\n			return context.getElementsByClassName( className );\n		}\n	};\n\n	/* QSA/matchesSelector\n	---------------------------------------------------------------------- */\n\n	// QSA and matchesSelector support\n\n	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)\n	rbuggyMatches = [];\n\n	// qSa(:focus) reports false when true (Chrome 21)\n	// We allow this because of a bug in IE8/9 that throws an error\n	// whenever `document.activeElement` is accessed on an iframe\n	// So, we allow :focus to pass through QSA all the time to avoid the IE error\n	// See http://bugs.jquery.com/ticket/13378\n	rbuggyQSA = [];\n\n	if ( (support.qsa = rnative.test( doc.querySelectorAll )) ) {\n		// Build QSA regex\n		// Regex strategy adopted from Diego Perini\n		assert(function( div ) {\n			// Select is set to empty string on purpose\n			// This is to test IE\'s treatment of not explicitly\n			// setting a boolean content attribute,\n			// since its presence should be enough\n			// http://bugs.jquery.com/ticket/12359\n			div.innerHTML = \"<select msallowclip=\'\'><option selected=\'\'></option></select>\";\n\n			// Support: IE8, Opera 11-12.16\n			// Nothing should be selected when empty strings follow ^= or $= or *=\n			// The test attribute must be unknown in Opera but \"safe\" for WinRT\n			// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section\n			if ( div.querySelectorAll(\"[msallowclip^=\'\']\").length ) {\n				rbuggyQSA.push( \"[*^$]=\" + whitespace + \"*(?:\'\'|\\\"\\\")\" );\n			}\n\n			// Support: IE8\n			// Boolean attributes and \"value\" are not treated correctly\n			if ( !div.querySelectorAll(\"[selected]\").length ) {\n				rbuggyQSA.push( \"\\\\[\" + whitespace + \"*(?:value|\" + booleans + \")\" );\n			}\n\n			// Webkit/Opera - :checked should return selected option elements\n			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked\n			// IE8 throws error here and will not see later tests\n			if ( !div.querySelectorAll(\":checked\").length ) {\n				rbuggyQSA.push(\":checked\");\n			}\n		});\n\n		assert(function( div ) {\n			// Support: Windows 8 Native Apps\n			// The type and name attributes are restricted during .innerHTML assignment\n			var input = doc.createElement(\"input\");\n			input.setAttribute( \"type\", \"hidden\" );\n			div.appendChild( input ).setAttribute( \"name\", \"D\" );\n\n			// Support: IE8\n			// Enforce case-sensitivity of name attribute\n			if ( div.querySelectorAll(\"[name=d]\").length ) {\n				rbuggyQSA.push( \"name\" + whitespace + \"*[*^$|!~]?=\" );\n			}\n\n			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)\n			// IE8 throws error here and will not see later tests\n			if ( !div.querySelectorAll(\":enabled\").length ) {\n				rbuggyQSA.push( \":enabled\", \":disabled\" );\n			}\n\n			// Opera 10-11 does not throw on post-comma invalid pseudos\n			div.querySelectorAll(\"*,:x\");\n			rbuggyQSA.push(\",.*:\");\n		});\n	}\n\n	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||\n		docElem.webkitMatchesSelector ||\n		docElem.mozMatchesSelector ||\n		docElem.oMatchesSelector ||\n		docElem.msMatchesSelector) )) ) {\n\n		assert(function( div ) {\n			// Check to see if it\'s possible to do matchesSelector\n			// on a disconnected node (IE 9)\n			support.disconnectedMatch = matches.call( div, \"div\" );\n\n			// This should fail with an exception\n			// Gecko does not error, returns false instead\n			matches.call( div, \"[s!=\'\']:x\" );\n			rbuggyMatches.push( \"!=\", pseudos );\n		});\n	}\n\n	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join(\"|\") );\n	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join(\"|\") );\n\n	/* Contains\n	---------------------------------------------------------------------- */\n	hasCompare = rnative.test( docElem.compareDocumentPosition );\n\n	// Element contains another\n	// Purposefully does not implement inclusive descendent\n	// As in, an element does not contain itself\n	contains = hasCompare || rnative.test( docElem.contains ) ?\n		function( a, b ) {\n			var adown = a.nodeType === 9 ? a.documentElement : a,\n				bup = b && b.parentNode;\n			return a === bup || !!( bup && bup.nodeType === 1 && (\n				adown.contains ?\n					adown.contains( bup ) :\n					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16\n			));\n		} :\n		function( a, b ) {\n			if ( b ) {\n				while ( (b = b.parentNode) ) {\n					if ( b === a ) {\n						return true;\n					}\n				}\n			}\n			return false;\n		};\n\n	/* Sorting\n	---------------------------------------------------------------------- */\n\n	// Document order sorting\n	sortOrder = hasCompare ?\n	function( a, b ) {\n\n		// Flag for duplicate removal\n		if ( a === b ) {\n			hasDuplicate = true;\n			return 0;\n		}\n\n		// Sort on method existence if only one input has compareDocumentPosition\n		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;\n		if ( compare ) {\n			return compare;\n		}\n\n		// Calculate position if both inputs belong to the same document\n		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?\n			a.compareDocumentPosition( b ) :\n\n			// Otherwise we know they are disconnected\n			1;\n\n		// Disconnected nodes\n		if ( compare & 1 ||\n			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {\n\n			// Choose the first element that is related to our preferred document\n			if ( a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {\n				return -1;\n			}\n			if ( b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {\n				return 1;\n			}\n\n			// Maintain original order\n			return sortInput ?\n				( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :\n				0;\n		}\n\n		return compare & 4 ? -1 : 1;\n	} :\n	function( a, b ) {\n		// Exit early if the nodes are identical\n		if ( a === b ) {\n			hasDuplicate = true;\n			return 0;\n		}\n\n		var cur,\n			i = 0,\n			aup = a.parentNode,\n			bup = b.parentNode,\n			ap = [ a ],\n			bp = [ b ];\n\n		// Parentless nodes are either documents or disconnected\n		if ( !aup || !bup ) {\n			return a === doc ? -1 :\n				b === doc ? 1 :\n				aup ? -1 :\n				bup ? 1 :\n				sortInput ?\n				( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :\n				0;\n\n		// If the nodes are siblings, we can do a quick check\n		} else if ( aup === bup ) {\n			return siblingCheck( a, b );\n		}\n\n		// Otherwise we need full lists of their ancestors for comparison\n		cur = a;\n		while ( (cur = cur.parentNode) ) {\n			ap.unshift( cur );\n		}\n		cur = b;\n		while ( (cur = cur.parentNode) ) {\n			bp.unshift( cur );\n		}\n\n		// Walk down the tree looking for a discrepancy\n		while ( ap[i] === bp[i] ) {\n			i++;\n		}\n\n		return i ?\n			// Do a sibling check if the nodes have a common ancestor\n			siblingCheck( ap[i], bp[i] ) :\n\n			// Otherwise nodes in our document sort first\n			ap[i] === preferredDoc ? -1 :\n			bp[i] === preferredDoc ? 1 :\n			0;\n	};\n\n	return doc;\n};\n\nSizzle.matches = function( expr, elements ) {\n	return Sizzle( expr, null, null, elements );\n};\n\nSizzle.matchesSelector = function( elem, expr ) {\n	// Set document vars if needed\n	if ( ( elem.ownerDocument || elem ) !== document ) {\n		setDocument( elem );\n	}\n\n	// Make sure that attribute selectors are quoted\n	expr = expr.replace( rattributeQuotes, \"=\'$1\']\" );\n\n	if ( support.matchesSelector && documentIsHTML &&\n		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&\n		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {\n\n		try {\n			var ret = matches.call( elem, expr );\n\n			// IE 9\'s matchesSelector returns false on disconnected nodes\n			if ( ret || support.disconnectedMatch ||\n					// As well, disconnected nodes are said to be in a document\n					// fragment in IE 9\n					elem.document && elem.document.nodeType !== 11 ) {\n				return ret;\n			}\n		} catch(e) {}\n	}\n\n	return Sizzle( expr, document, null, [ elem ] ).length > 0;\n};\n\nSizzle.contains = function( context, elem ) {\n	// Set document vars if needed\n	if ( ( context.ownerDocument || context ) !== document ) {\n		setDocument( context );\n	}\n	return contains( context, elem );\n};\n\nSizzle.attr = function( elem, name ) {\n	// Set document vars if needed\n	if ( ( elem.ownerDocument || elem ) !== document ) {\n		setDocument( elem );\n	}\n\n	var fn = Expr.attrHandle[ name.toLowerCase() ],\n		// Don\'t get fooled by Object.prototype properties (jQuery #13807)\n		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?\n			fn( elem, name, !documentIsHTML ) :\n			undefined;\n\n	return val !== undefined ?\n		val :\n		support.attributes || !documentIsHTML ?\n			elem.getAttribute( name ) :\n			(val = elem.getAttributeNode(name)) && val.specified ?\n				val.value :\n				null;\n};\n\nSizzle.error = function( msg ) {\n	throw new Error( \"Syntax error, unrecognized expression: \" + msg );\n};\n\n/**\n * Document sorting and removing duplicates\n * @param {ArrayLike} results\n */\nSizzle.uniqueSort = function( results ) {\n	var elem,\n		duplicates = [],\n		j = 0,\n		i = 0;\n\n	// Unless we *know* we can detect duplicates, assume their presence\n	hasDuplicate = !support.detectDuplicates;\n	sortInput = !support.sortStable && results.slice( 0 );\n	results.sort( sortOrder );\n\n	if ( hasDuplicate ) {\n		while ( (elem = results[i++]) ) {\n			if ( elem === results[ i ] ) {\n				j = duplicates.push( i );\n			}\n		}\n		while ( j-- ) {\n			results.splice( duplicates[ j ], 1 );\n		}\n	}\n\n	// Clear input after sorting to release objects\n	// See https://github.com/jquery/sizzle/pull/225\n	sortInput = null;\n\n	return results;\n};\n\n/**\n * Utility function for retrieving the text value of an array of DOM nodes\n * @param {Array|Element} elem\n */\ngetText = Sizzle.getText = function( elem ) {\n	var node,\n		ret = \"\",\n		i = 0,\n		nodeType = elem.nodeType;\n\n	if ( !nodeType ) {\n		// If no nodeType, this is expected to be an array\n		while ( (node = elem[i++]) ) {\n			// Do not traverse comment nodes\n			ret += getText( node );\n		}\n	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {\n		// Use textContent for elements\n		// innerText usage removed for consistency of new lines (jQuery #11153)\n		if ( typeof elem.textContent === \"string\" ) {\n			return elem.textContent;\n		} else {\n			// Traverse its children\n			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {\n				ret += getText( elem );\n			}\n		}\n	} else if ( nodeType === 3 || nodeType === 4 ) {\n		return elem.nodeValue;\n	}\n	// Do not include comment or processing instruction nodes\n\n	return ret;\n};\n\nExpr = Sizzle.selectors = {\n\n	// Can be adjusted by the user\n	cacheLength: 50,\n\n	createPseudo: markFunction,\n\n	match: matchExpr,\n\n	attrHandle: {},\n\n	find: {},\n\n	relative: {\n		\">\": { dir: \"parentNode\", first: true },\n		\" \": { dir: \"parentNode\" },\n		\"+\": { dir: \"previousSibling\", first: true },\n		\"~\": { dir: \"previousSibling\" }\n	},\n\n	preFilter: {\n		\"ATTR\": function( match ) {\n			match[1] = match[1].replace( runescape, funescape );\n\n			// Move the given value to match[3] whether quoted or unquoted\n			match[3] = ( match[3] || match[4] || match[5] || \"\" ).replace( runescape, funescape );\n\n			if ( match[2] === \"~=\" ) {\n				match[3] = \" \" + match[3] + \" \";\n			}\n\n			return match.slice( 0, 4 );\n		},\n\n		\"CHILD\": function( match ) {\n			/* matches from matchExpr[\"CHILD\"]\n				1 type (only|nth|...)\n				2 what (child|of-type)\n				3 argument (even|odd|\\d*|\\d*n([+-]\\d+)?|...)\n				4 xn-component of xn+y argument ([+-]?\\d*n|)\n				5 sign of xn-component\n				6 x of xn-component\n				7 sign of y-component\n				8 y of y-component\n			*/\n			match[1] = match[1].toLowerCase();\n\n			if ( match[1].slice( 0, 3 ) === \"nth\" ) {\n				// nth-* requires argument\n				if ( !match[3] ) {\n					Sizzle.error( match[0] );\n				}\n\n				// numeric x and y parameters for Expr.filter.CHILD\n				// remember that false/true cast respectively to 0/1\n				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === \"even\" || match[3] === \"odd\" ) );\n				match[5] = +( ( match[7] + match[8] ) || match[3] === \"odd\" );\n\n			// other types prohibit arguments\n			} else if ( match[3] ) {\n				Sizzle.error( match[0] );\n			}\n\n			return match;\n		},\n\n		\"PSEUDO\": function( match ) {\n			var excess,\n				unquoted = !match[6] && match[2];\n\n			if ( matchExpr[\"CHILD\"].test( match[0] ) ) {\n				return null;\n			}\n\n			// Accept quoted arguments as-is\n			if ( match[3] ) {\n				match[2] = match[4] || match[5] || \"\";\n\n			// Strip excess characters from unquoted arguments\n			} else if ( unquoted && rpseudo.test( unquoted ) &&\n				// Get excess from tokenize (recursively)\n				(excess = tokenize( unquoted, true )) &&\n				// advance to the next closing parenthesis\n				(excess = unquoted.indexOf( \")\", unquoted.length - excess ) - unquoted.length) ) {\n\n				// excess is a negative index\n				match[0] = match[0].slice( 0, excess );\n				match[2] = unquoted.slice( 0, excess );\n			}\n\n			// Return only captures needed by the pseudo filter method (type and argument)\n			return match.slice( 0, 3 );\n		}\n	},\n\n	filter: {\n\n		\"TAG\": function( nodeNameSelector ) {\n			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();\n			return nodeNameSelector === \"*\" ?\n				function() { return true; } :\n				function( elem ) {\n					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;\n				};\n		},\n\n		\"CLASS\": function( className ) {\n			var pattern = classCache[ className + \" \" ];\n\n			return pattern ||\n				(pattern = new RegExp( \"(^|\" + whitespace + \")\" + className + \"(\" + whitespace + \"|$)\" )) &&\n				classCache( className, function( elem ) {\n					return pattern.test( typeof elem.className === \"string\" && elem.className || typeof elem.getAttribute !== strundefined && elem.getAttribute(\"class\") || \"\" );\n				});\n		},\n\n		\"ATTR\": function( name, operator, check ) {\n			return function( elem ) {\n				var result = Sizzle.attr( elem, name );\n\n				if ( result == null ) {\n					return operator === \"!=\";\n				}\n				if ( !operator ) {\n					return true;\n				}\n\n				result += \"\";\n\n				return operator === \"=\" ? result === check :\n					operator === \"!=\" ? result !== check :\n					operator === \"^=\" ? check && result.indexOf( check ) === 0 :\n					operator === \"*=\" ? check && result.indexOf( check ) > -1 :\n					operator === \"$=\" ? check && result.slice( -check.length ) === check :\n					operator === \"~=\" ? ( \" \" + result + \" \" ).indexOf( check ) > -1 :\n					operator === \"|=\" ? result === check || result.slice( 0, check.length + 1 ) === check + \"-\" :\n					false;\n			};\n		},\n\n		\"CHILD\": function( type, what, argument, first, last ) {\n			var simple = type.slice( 0, 3 ) !== \"nth\",\n				forward = type.slice( -4 ) !== \"last\",\n				ofType = what === \"of-type\";\n\n			return first === 1 && last === 0 ?\n\n				// Shortcut for :nth-*(n)\n				function( elem ) {\n					return !!elem.parentNode;\n				} :\n\n				function( elem, context, xml ) {\n					var cache, outerCache, node, diff, nodeIndex, start,\n						dir = simple !== forward ? \"nextSibling\" : \"previousSibling\",\n						parent = elem.parentNode,\n						name = ofType && elem.nodeName.toLowerCase(),\n						useCache = !xml && !ofType;\n\n					if ( parent ) {\n\n						// :(first|last|only)-(child|of-type)\n						if ( simple ) {\n							while ( dir ) {\n								node = elem;\n								while ( (node = node[ dir ]) ) {\n									if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {\n										return false;\n									}\n								}\n								// Reverse direction for :only-* (if we haven\'t yet done so)\n								start = dir = type === \"only\" && !start && \"nextSibling\";\n							}\n							return true;\n						}\n\n						start = [ forward ? parent.firstChild : parent.lastChild ];\n\n						// non-xml :nth-child(...) stores cache data on `parent`\n						if ( forward && useCache ) {\n							// Seek `elem` from a previously-cached index\n							outerCache = parent[ expando ] || (parent[ expando ] = {});\n							cache = outerCache[ type ] || [];\n							nodeIndex = cache[0] === dirruns && cache[1];\n							diff = cache[0] === dirruns && cache[2];\n							node = nodeIndex && parent.childNodes[ nodeIndex ];\n\n							while ( (node = ++nodeIndex && node && node[ dir ] ||\n\n								// Fallback to seeking `elem` from the start\n								(diff = nodeIndex = 0) || start.pop()) ) {\n\n								// When found, cache indexes on `parent` and break\n								if ( node.nodeType === 1 && ++diff && node === elem ) {\n									outerCache[ type ] = [ dirruns, nodeIndex, diff ];\n									break;\n								}\n							}\n\n						// Use previously-cached element index if available\n						} else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {\n							diff = cache[1];\n\n						// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)\n						} else {\n							// Use the same loop as above to seek `elem` from the start\n							while ( (node = ++nodeIndex && node && node[ dir ] ||\n								(diff = nodeIndex = 0) || start.pop()) ) {\n\n								if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {\n									// Cache the index of each encountered element\n									if ( useCache ) {\n										(node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];\n									}\n\n									if ( node === elem ) {\n										break;\n									}\n								}\n							}\n						}\n\n						// Incorporate the offset, then check against cycle size\n						diff -= last;\n						return diff === first || ( diff % first === 0 && diff / first >= 0 );\n					}\n				};\n		},\n\n		\"PSEUDO\": function( pseudo, argument ) {\n			// pseudo-class names are case-insensitive\n			// http://www.w3.org/TR/selectors/#pseudo-classes\n			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters\n			// Remember that setFilters inherits from pseudos\n			var args,\n				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||\n					Sizzle.error( \"unsupported pseudo: \" + pseudo );\n\n			// The user may use createPseudo to indicate that\n			// arguments are needed to create the filter function\n			// just as Sizzle does\n			if ( fn[ expando ] ) {\n				return fn( argument );\n			}\n\n			// But maintain support for old signatures\n			if ( fn.length > 1 ) {\n				args = [ pseudo, pseudo, \"\", argument ];\n				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?\n					markFunction(function( seed, matches ) {\n						var idx,\n							matched = fn( seed, argument ),\n							i = matched.length;\n						while ( i-- ) {\n							idx = indexOf.call( seed, matched[i] );\n							seed[ idx ] = !( matches[ idx ] = matched[i] );\n						}\n					}) :\n					function( elem ) {\n						return fn( elem, 0, args );\n					};\n			}\n\n			return fn;\n		}\n	},\n\n	pseudos: {\n		// Potentially complex pseudos\n		\"not\": markFunction(function( selector ) {\n			// Trim the selector passed to compile\n			// to avoid treating leading and trailing\n			// spaces as combinators\n			var input = [],\n				results = [],\n				matcher = compile( selector.replace( rtrim, \"$1\" ) );\n\n			return matcher[ expando ] ?\n				markFunction(function( seed, matches, context, xml ) {\n					var elem,\n						unmatched = matcher( seed, null, xml, [] ),\n						i = seed.length;\n\n					// Match elements unmatched by `matcher`\n					while ( i-- ) {\n						if ( (elem = unmatched[i]) ) {\n							seed[i] = !(matches[i] = elem);\n						}\n					}\n				}) :\n				function( elem, context, xml ) {\n					input[0] = elem;\n					matcher( input, null, xml, results );\n					return !results.pop();\n				};\n		}),\n\n		\"has\": markFunction(function( selector ) {\n			return function( elem ) {\n				return Sizzle( selector, elem ).length > 0;\n			};\n		}),\n\n		\"contains\": markFunction(function( text ) {\n			return function( elem ) {\n				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;\n			};\n		}),\n\n		// \"Whether an element is represented by a :lang() selector\n		// is based solely on the element\'s language value\n		// being equal to the identifier C,\n		// or beginning with the identifier C immediately followed by \"-\".\n		// The matching of C against the element\'s language value is performed case-insensitively.\n		// The identifier C does not have to be a valid language name.\"\n		// http://www.w3.org/TR/selectors/#lang-pseudo\n		\"lang\": markFunction( function( lang ) {\n			// lang value must be a valid identifier\n			if ( !ridentifier.test(lang || \"\") ) {\n				Sizzle.error( \"unsupported lang: \" + lang );\n			}\n			lang = lang.replace( runescape, funescape ).toLowerCase();\n			return function( elem ) {\n				var elemLang;\n				do {\n					if ( (elemLang = documentIsHTML ?\n						elem.lang :\n						elem.getAttribute(\"xml:lang\") || elem.getAttribute(\"lang\")) ) {\n\n						elemLang = elemLang.toLowerCase();\n						return elemLang === lang || elemLang.indexOf( lang + \"-\" ) === 0;\n					}\n				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );\n				return false;\n			};\n		}),\n\n		// Miscellaneous\n		\"target\": function( elem ) {\n			var hash = window.location && window.location.hash;\n			return hash && hash.slice( 1 ) === elem.id;\n		},\n\n		\"root\": function( elem ) {\n			return elem === docElem;\n		},\n\n		\"focus\": function( elem ) {\n			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);\n		},\n\n		// Boolean properties\n		\"enabled\": function( elem ) {\n			return elem.disabled === false;\n		},\n\n		\"disabled\": function( elem ) {\n			return elem.disabled === true;\n		},\n\n		\"checked\": function( elem ) {\n			// In CSS3, :checked should return both checked and selected elements\n			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked\n			var nodeName = elem.nodeName.toLowerCase();\n			return (nodeName === \"input\" && !!elem.checked) || (nodeName === \"option\" && !!elem.selected);\n		},\n\n		\"selected\": function( elem ) {\n			// Accessing this property makes selected-by-default\n			// options in Safari work properly\n			if ( elem.parentNode ) {\n				elem.parentNode.selectedIndex;\n			}\n\n			return elem.selected === true;\n		},\n\n		// Contents\n		\"empty\": function( elem ) {\n			// http://www.w3.org/TR/selectors/#empty-pseudo\n			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),\n			//   but not by others (comment: 8; processing instruction: 7; etc.)\n			// nodeType < 6 works because attributes (2) do not appear as children\n			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {\n				if ( elem.nodeType < 6 ) {\n					return false;\n				}\n			}\n			return true;\n		},\n\n		\"parent\": function( elem ) {\n			return !Expr.pseudos[\"empty\"]( elem );\n		},\n\n		// Element/input types\n		\"header\": function( elem ) {\n			return rheader.test( elem.nodeName );\n		},\n\n		\"input\": function( elem ) {\n			return rinputs.test( elem.nodeName );\n		},\n\n		\"button\": function( elem ) {\n			var name = elem.nodeName.toLowerCase();\n			return name === \"input\" && elem.type === \"button\" || name === \"button\";\n		},\n\n		\"text\": function( elem ) {\n			var attr;\n			return elem.nodeName.toLowerCase() === \"input\" &&\n				elem.type === \"text\" &&\n\n				// Support: IE<8\n				// New HTML5 attribute values (e.g., \"search\") appear with elem.type === \"text\"\n				( (attr = elem.getAttribute(\"type\")) == null || attr.toLowerCase() === \"text\" );\n		},\n\n		// Position-in-collection\n		\"first\": createPositionalPseudo(function() {\n			return [ 0 ];\n		}),\n\n		\"last\": createPositionalPseudo(function( matchIndexes, length ) {\n			return [ length - 1 ];\n		}),\n\n		\"eq\": createPositionalPseudo(function( matchIndexes, length, argument ) {\n			return [ argument < 0 ? argument + length : argument ];\n		}),\n\n		\"even\": createPositionalPseudo(function( matchIndexes, length ) {\n			var i = 0;\n			for ( ; i < length; i += 2 ) {\n				matchIndexes.push( i );\n			}\n			return matchIndexes;\n		}),\n\n		\"odd\": createPositionalPseudo(function( matchIndexes, length ) {\n			var i = 1;\n			for ( ; i < length; i += 2 ) {\n				matchIndexes.push( i );\n			}\n			return matchIndexes;\n		}),\n\n		\"lt\": createPositionalPseudo(function( matchIndexes, length, argument ) {\n			var i = argument < 0 ? argument + length : argument;\n			for ( ; --i >= 0; ) {\n				matchIndexes.push( i );\n			}\n			return matchIndexes;\n		}),\n\n		\"gt\": createPositionalPseudo(function( matchIndexes, length, argument ) {\n			var i = argument < 0 ? argument + length : argument;\n			for ( ; ++i < length; ) {\n				matchIndexes.push( i );\n			}\n			return matchIndexes;\n		})\n	}\n};\n\nExpr.pseudos[\"nth\"] = Expr.pseudos[\"eq\"];\n\n// Add button/input type pseudos\nfor ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {\n	Expr.pseudos[ i ] = createInputPseudo( i );\n}\nfor ( i in { submit: true, reset: true } ) {\n	Expr.pseudos[ i ] = createButtonPseudo( i );\n}\n\n// Easy API for creating new setFilters\nfunction setFilters() {}\nsetFilters.prototype = Expr.filters = Expr.pseudos;\nExpr.setFilters = new setFilters();\n\ntokenize = Sizzle.tokenize = function( selector, parseOnly ) {\n	var matched, match, tokens, type,\n		soFar, groups, preFilters,\n		cached = tokenCache[ selector + \" \" ];\n\n	if ( cached ) {\n		return parseOnly ? 0 : cached.slice( 0 );\n	}\n\n	soFar = selector;\n	groups = [];\n	preFilters = Expr.preFilter;\n\n	while ( soFar ) {\n\n		// Comma and first run\n		if ( !matched || (match = rcomma.exec( soFar )) ) {\n			if ( match ) {\n				// Don\'t consume trailing commas as valid\n				soFar = soFar.slice( match[0].length ) || soFar;\n			}\n			groups.push( (tokens = []) );\n		}\n\n		matched = false;\n\n		// Combinators\n		if ( (match = rcombinators.exec( soFar )) ) {\n			matched = match.shift();\n			tokens.push({\n				value: matched,\n				// Cast descendant combinators to space\n				type: match[0].replace( rtrim, \" \" )\n			});\n			soFar = soFar.slice( matched.length );\n		}\n\n		// Filters\n		for ( type in Expr.filter ) {\n			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||\n				(match = preFilters[ type ]( match ))) ) {\n				matched = match.shift();\n				tokens.push({\n					value: matched,\n					type: type,\n					matches: match\n				});\n				soFar = soFar.slice( matched.length );\n			}\n		}\n\n		if ( !matched ) {\n			break;\n		}\n	}\n\n	// Return the length of the invalid excess\n	// if we\'re just parsing\n	// Otherwise, throw an error or return tokens\n	return parseOnly ?\n		soFar.length :\n		soFar ?\n			Sizzle.error( selector ) :\n			// Cache the tokens\n			tokenCache( selector, groups ).slice( 0 );\n};\n\nfunction toSelector( tokens ) {\n	var i = 0,\n		len = tokens.length,\n		selector = \"\";\n	for ( ; i < len; i++ ) {\n		selector += tokens[i].value;\n	}\n	return selector;\n}\n\nfunction addCombinator( matcher, combinator, base ) {\n	var dir = combinator.dir,\n		checkNonElements = base && dir === \"parentNode\",\n		doneName = done++;\n\n	return combinator.first ?\n		// Check against closest ancestor/preceding element\n		function( elem, context, xml ) {\n			while ( (elem = elem[ dir ]) ) {\n				if ( elem.nodeType === 1 || checkNonElements ) {\n					return matcher( elem, context, xml );\n				}\n			}\n		} :\n\n		// Check against all ancestor/preceding elements\n		function( elem, context, xml ) {\n			var oldCache, outerCache,\n				newCache = [ dirruns, doneName ];\n\n			// We can\'t set arbitrary data on XML nodes, so they don\'t benefit from dir caching\n			if ( xml ) {\n				while ( (elem = elem[ dir ]) ) {\n					if ( elem.nodeType === 1 || checkNonElements ) {\n						if ( matcher( elem, context, xml ) ) {\n							return true;\n						}\n					}\n				}\n			} else {\n				while ( (elem = elem[ dir ]) ) {\n					if ( elem.nodeType === 1 || checkNonElements ) {\n						outerCache = elem[ expando ] || (elem[ expando ] = {});\n						if ( (oldCache = outerCache[ dir ]) &&\n							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {\n\n							// Assign to newCache so results back-propagate to previous elements\n							return (newCache[ 2 ] = oldCache[ 2 ]);\n						} else {\n							// Reuse newcache so results back-propagate to previous elements\n							outerCache[ dir ] = newCache;\n\n							// A match means we\'re done; a fail means we have to keep checking\n							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {\n								return true;\n							}\n						}\n					}\n				}\n			}\n		};\n}\n\nfunction elementMatcher( matchers ) {\n	return matchers.length > 1 ?\n		function( elem, context, xml ) {\n			var i = matchers.length;\n			while ( i-- ) {\n				if ( !matchers[i]( elem, context, xml ) ) {\n					return false;\n				}\n			}\n			return true;\n		} :\n		matchers[0];\n}\n\nfunction multipleContexts( selector, contexts, results ) {\n	var i = 0,\n		len = contexts.length;\n	for ( ; i < len; i++ ) {\n		Sizzle( selector, contexts[i], results );\n	}\n	return results;\n}\n\nfunction condense( unmatched, map, filter, context, xml ) {\n	var elem,\n		newUnmatched = [],\n		i = 0,\n		len = unmatched.length,\n		mapped = map != null;\n\n	for ( ; i < len; i++ ) {\n		if ( (elem = unmatched[i]) ) {\n			if ( !filter || filter( elem, context, xml ) ) {\n				newUnmatched.push( elem );\n				if ( mapped ) {\n					map.push( i );\n				}\n			}\n		}\n	}\n\n	return newUnmatched;\n}\n\nfunction setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {\n	if ( postFilter && !postFilter[ expando ] ) {\n		postFilter = setMatcher( postFilter );\n	}\n	if ( postFinder && !postFinder[ expando ] ) {\n		postFinder = setMatcher( postFinder, postSelector );\n	}\n	return markFunction(function( seed, results, context, xml ) {\n		var temp, i, elem,\n			preMap = [],\n			postMap = [],\n			preexisting = results.length,\n\n			// Get initial elements from seed or context\n			elems = seed || multipleContexts( selector || \"*\", context.nodeType ? [ context ] : context, [] ),\n\n			// Prefilter to get matcher input, preserving a map for seed-results synchronization\n			matcherIn = preFilter && ( seed || !selector ) ?\n				condense( elems, preMap, preFilter, context, xml ) :\n				elems,\n\n			matcherOut = matcher ?\n				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,\n				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?\n\n					// ...intermediate processing is necessary\n					[] :\n\n					// ...otherwise use results directly\n					results :\n				matcherIn;\n\n		// Find primary matches\n		if ( matcher ) {\n			matcher( matcherIn, matcherOut, context, xml );\n		}\n\n		// Apply postFilter\n		if ( postFilter ) {\n			temp = condense( matcherOut, postMap );\n			postFilter( temp, [], context, xml );\n\n			// Un-match failing elements by moving them back to matcherIn\n			i = temp.length;\n			while ( i-- ) {\n				if ( (elem = temp[i]) ) {\n					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);\n				}\n			}\n		}\n\n		if ( seed ) {\n			if ( postFinder || preFilter ) {\n				if ( postFinder ) {\n					// Get the final matcherOut by condensing this intermediate into postFinder contexts\n					temp = [];\n					i = matcherOut.length;\n					while ( i-- ) {\n						if ( (elem = matcherOut[i]) ) {\n							// Restore matcherIn since elem is not yet a final match\n							temp.push( (matcherIn[i] = elem) );\n						}\n					}\n					postFinder( null, (matcherOut = []), temp, xml );\n				}\n\n				// Move matched elements from seed to results to keep them synchronized\n				i = matcherOut.length;\n				while ( i-- ) {\n					if ( (elem = matcherOut[i]) &&\n						(temp = postFinder ? indexOf.call( seed, elem ) : preMap[i]) > -1 ) {\n\n						seed[temp] = !(results[temp] = elem);\n					}\n				}\n			}\n\n		// Add elements to results, through postFinder if defined\n		} else {\n			matcherOut = condense(\n				matcherOut === results ?\n					matcherOut.splice( preexisting, matcherOut.length ) :\n					matcherOut\n			);\n			if ( postFinder ) {\n				postFinder( null, results, matcherOut, xml );\n			} else {\n				push.apply( results, matcherOut );\n			}\n		}\n	});\n}\n\nfunction matcherFromTokens( tokens ) {\n	var checkContext, matcher, j,\n		len = tokens.length,\n		leadingRelative = Expr.relative[ tokens[0].type ],\n		implicitRelative = leadingRelative || Expr.relative[\" \"],\n		i = leadingRelative ? 1 : 0,\n\n		// The foundational matcher ensures that elements are reachable from top-level context(s)\n		matchContext = addCombinator( function( elem ) {\n			return elem === checkContext;\n		}, implicitRelative, true ),\n		matchAnyContext = addCombinator( function( elem ) {\n			return indexOf.call( checkContext, elem ) > -1;\n		}, implicitRelative, true ),\n		matchers = [ function( elem, context, xml ) {\n			return ( !leadingRelative && ( xml || context !== outermostContext ) ) || (\n				(checkContext = context).nodeType ?\n					matchContext( elem, context, xml ) :\n					matchAnyContext( elem, context, xml ) );\n		} ];\n\n	for ( ; i < len; i++ ) {\n		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {\n			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];\n		} else {\n			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );\n\n			// Return special upon seeing a positional matcher\n			if ( matcher[ expando ] ) {\n				// Find the next relative operator (if any) for proper handling\n				j = ++i;\n				for ( ; j < len; j++ ) {\n					if ( Expr.relative[ tokens[j].type ] ) {\n						break;\n					}\n				}\n				return setMatcher(\n					i > 1 && elementMatcher( matchers ),\n					i > 1 && toSelector(\n						// If the preceding token was a descendant combinator, insert an implicit any-element `*`\n						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === \" \" ? \"*\" : \"\" })\n					).replace( rtrim, \"$1\" ),\n					matcher,\n					i < j && matcherFromTokens( tokens.slice( i, j ) ),\n					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),\n					j < len && toSelector( tokens )\n				);\n			}\n			matchers.push( matcher );\n		}\n	}\n\n	return elementMatcher( matchers );\n}\n\nfunction matcherFromGroupMatchers( elementMatchers, setMatchers ) {\n	var bySet = setMatchers.length > 0,\n		byElement = elementMatchers.length > 0,\n		superMatcher = function( seed, context, xml, results, outermost ) {\n			var elem, j, matcher,\n				matchedCount = 0,\n				i = \"0\",\n				unmatched = seed && [],\n				setMatched = [],\n				contextBackup = outermostContext,\n				// We must always have either seed elements or outermost context\n				elems = seed || byElement && Expr.find[\"TAG\"]( \"*\", outermost ),\n				// Use integer dirruns iff this is the outermost matcher\n				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),\n				len = elems.length;\n\n			if ( outermost ) {\n				outermostContext = context !== document && context;\n			}\n\n			// Add elements passing elementMatchers directly to results\n			// Keep `i` a string if there are no elements so `matchedCount` will be \"00\" below\n			// Support: IE<9, Safari\n			// Tolerate NodeList properties (IE: \"length\"; Safari: <number>) matching elements by id\n			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {\n				if ( byElement && elem ) {\n					j = 0;\n					while ( (matcher = elementMatchers[j++]) ) {\n						if ( matcher( elem, context, xml ) ) {\n							results.push( elem );\n							break;\n						}\n					}\n					if ( outermost ) {\n						dirruns = dirrunsUnique;\n					}\n				}\n\n				// Track unmatched elements for set filters\n				if ( bySet ) {\n					// They will have gone through all possible matchers\n					if ( (elem = !matcher && elem) ) {\n						matchedCount--;\n					}\n\n					// Lengthen the array for every element, matched or not\n					if ( seed ) {\n						unmatched.push( elem );\n					}\n				}\n			}\n\n			// Apply set filters to unmatched elements\n			matchedCount += i;\n			if ( bySet && i !== matchedCount ) {\n				j = 0;\n				while ( (matcher = setMatchers[j++]) ) {\n					matcher( unmatched, setMatched, context, xml );\n				}\n\n				if ( seed ) {\n					// Reintegrate element matches to eliminate the need for sorting\n					if ( matchedCount > 0 ) {\n						while ( i-- ) {\n							if ( !(unmatched[i] || setMatched[i]) ) {\n								setMatched[i] = pop.call( results );\n							}\n						}\n					}\n\n					// Discard index placeholder values to get only actual matches\n					setMatched = condense( setMatched );\n				}\n\n				// Add matches to results\n				push.apply( results, setMatched );\n\n				// Seedless set matches succeeding multiple successful matchers stipulate sorting\n				if ( outermost && !seed && setMatched.length > 0 &&\n					( matchedCount + setMatchers.length ) > 1 ) {\n\n					Sizzle.uniqueSort( results );\n				}\n			}\n\n			// Override manipulation of globals by nested matchers\n			if ( outermost ) {\n				dirruns = dirrunsUnique;\n				outermostContext = contextBackup;\n			}\n\n			return unmatched;\n		};\n\n	return bySet ?\n		markFunction( superMatcher ) :\n		superMatcher;\n}\n\ncompile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {\n	var i,\n		setMatchers = [],\n		elementMatchers = [],\n		cached = compilerCache[ selector + \" \" ];\n\n	if ( !cached ) {\n		// Generate a function of recursive functions that can be used to check each element\n		if ( !match ) {\n			match = tokenize( selector );\n		}\n		i = match.length;\n		while ( i-- ) {\n			cached = matcherFromTokens( match[i] );\n			if ( cached[ expando ] ) {\n				setMatchers.push( cached );\n			} else {\n				elementMatchers.push( cached );\n			}\n		}\n\n		// Cache the compiled function\n		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );\n\n		// Save selector and tokenization\n		cached.selector = selector;\n	}\n	return cached;\n};\n\n/**\n * A low-level selection function that works with Sizzle\'s compiled\n *  selector functions\n * @param {String|Function} selector A selector or a pre-compiled\n *  selector function built with Sizzle.compile\n * @param {Element} context\n * @param {Array} [results]\n * @param {Array} [seed] A set of elements to match against\n */\nselect = Sizzle.select = function( selector, context, results, seed ) {\n	var i, tokens, token, type, find,\n		compiled = typeof selector === \"function\" && selector,\n		match = !seed && tokenize( (selector = compiled.selector || selector) );\n\n	results = results || [];\n\n	// Try to minimize operations if there is no seed and only one group\n	if ( match.length === 1 ) {\n\n		// Take a shortcut and set the context if the root selector is an ID\n		tokens = match[0] = match[0].slice( 0 );\n		if ( tokens.length > 2 && (token = tokens[0]).type === \"ID\" &&\n				support.getById && context.nodeType === 9 && documentIsHTML &&\n				Expr.relative[ tokens[1].type ] ) {\n\n			context = ( Expr.find[\"ID\"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];\n			if ( !context ) {\n				return results;\n\n			// Precompiled matchers will still verify ancestry, so step up a level\n			} else if ( compiled ) {\n				context = context.parentNode;\n			}\n\n			selector = selector.slice( tokens.shift().value.length );\n		}\n\n		// Fetch a seed set for right-to-left matching\n		i = matchExpr[\"needsContext\"].test( selector ) ? 0 : tokens.length;\n		while ( i-- ) {\n			token = tokens[i];\n\n			// Abort if we hit a combinator\n			if ( Expr.relative[ (type = token.type) ] ) {\n				break;\n			}\n			if ( (find = Expr.find[ type ]) ) {\n				// Search, expanding context for leading sibling combinators\n				if ( (seed = find(\n					token.matches[0].replace( runescape, funescape ),\n					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context\n				)) ) {\n\n					// If seed is empty or no tokens remain, we can return early\n					tokens.splice( i, 1 );\n					selector = seed.length && toSelector( tokens );\n					if ( !selector ) {\n						push.apply( results, seed );\n						return results;\n					}\n\n					break;\n				}\n			}\n		}\n	}\n\n	// Compile and execute a filtering function if one is not provided\n	// Provide `match` to avoid retokenization if we modified the selector above\n	( compiled || compile( selector, match ) )(\n		seed,\n		context,\n		!documentIsHTML,\n		results,\n		rsibling.test( selector ) && testContext( context.parentNode ) || context\n	);\n	return results;\n};\n\n// One-time assignments\n\n// Sort stability\nsupport.sortStable = expando.split(\"\").sort( sortOrder ).join(\"\") === expando;\n\n// Support: Chrome<14\n// Always assume duplicates if they aren\'t passed to the comparison function\nsupport.detectDuplicates = !!hasDuplicate;\n\n// Initialize against the default document\nsetDocument();\n\n// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)\n// Detached nodes confoundingly follow *each other*\nsupport.sortDetached = assert(function( div1 ) {\n	// Should return 1, but returns 4 (following)\n	return div1.compareDocumentPosition( document.createElement(\"div\") ) & 1;\n});\n\n// Support: IE<8\n// Prevent attribute/property \"interpolation\"\n// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx\nif ( !assert(function( div ) {\n	div.innerHTML = \"<a href=\'#\'></a>\";\n	return div.firstChild.getAttribute(\"href\") === \"#\" ;\n}) ) {\n	addHandle( \"type|href|height|width\", function( elem, name, isXML ) {\n		if ( !isXML ) {\n			return elem.getAttribute( name, name.toLowerCase() === \"type\" ? 1 : 2 );\n		}\n	});\n}\n\n// Support: IE<9\n// Use defaultValue in place of getAttribute(\"value\")\nif ( !support.attributes || !assert(function( div ) {\n	div.innerHTML = \"<input/>\";\n	div.firstChild.setAttribute( \"value\", \"\" );\n	return div.firstChild.getAttribute( \"value\" ) === \"\";\n}) ) {\n	addHandle( \"value\", function( elem, name, isXML ) {\n		if ( !isXML && elem.nodeName.toLowerCase() === \"input\" ) {\n			return elem.defaultValue;\n		}\n	});\n}\n\n// Support: IE<9\n// Use getAttributeNode to fetch booleans when getAttribute lies\nif ( !assert(function( div ) {\n	return div.getAttribute(\"disabled\") == null;\n}) ) {\n	addHandle( booleans, function( elem, name, isXML ) {\n		var val;\n		if ( !isXML ) {\n			return elem[ name ] === true ? name.toLowerCase() :\n					(val = elem.getAttributeNode( name )) && val.specified ?\n					val.value :\n				null;\n		}\n	});\n}\n\nreturn Sizzle;\n\n})( window );\n\n\n\njQuery.find = Sizzle;\njQuery.expr = Sizzle.selectors;\njQuery.expr[\":\"] = jQuery.expr.pseudos;\njQuery.unique = Sizzle.uniqueSort;\njQuery.text = Sizzle.getText;\njQuery.isXMLDoc = Sizzle.isXML;\njQuery.contains = Sizzle.contains;\n\n\n\nvar rneedsContext = jQuery.expr.match.needsContext;\n\nvar rsingleTag = (/^<(\\w+)\\s*\\/?>(?:<\\/\\1>|)$/);\n\n\n\nvar risSimple = /^.[^:#\\[\\.,]*$/;\n\n// Implement the identical functionality for filter and not\nfunction winnow( elements, qualifier, not ) {\n	if ( jQuery.isFunction( qualifier ) ) {\n		return jQuery.grep( elements, function( elem, i ) {\n			/* jshint -W018 */\n			return !!qualifier.call( elem, i, elem ) !== not;\n		});\n\n	}\n\n	if ( qualifier.nodeType ) {\n		return jQuery.grep( elements, function( elem ) {\n			return ( elem === qualifier ) !== not;\n		});\n\n	}\n\n	if ( typeof qualifier === \"string\" ) {\n		if ( risSimple.test( qualifier ) ) {\n			return jQuery.filter( qualifier, elements, not );\n		}\n\n		qualifier = jQuery.filter( qualifier, elements );\n	}\n\n	return jQuery.grep( elements, function( elem ) {\n		return ( indexOf.call( qualifier, elem ) >= 0 ) !== not;\n	});\n}\n\njQuery.filter = function( expr, elems, not ) {\n	var elem = elems[ 0 ];\n\n	if ( not ) {\n		expr = \":not(\" + expr + \")\";\n	}\n\n	return elems.length === 1 && elem.nodeType === 1 ?\n		jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :\n		jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {\n			return elem.nodeType === 1;\n		}));\n};\n\njQuery.fn.extend({\n	find: function( selector ) {\n		var i,\n			len = this.length,\n			ret = [],\n			self = this;\n\n		if ( typeof selector !== \"string\" ) {\n			return this.pushStack( jQuery( selector ).filter(function() {\n				for ( i = 0; i < len; i++ ) {\n					if ( jQuery.contains( self[ i ], this ) ) {\n						return true;\n					}\n				}\n			}) );\n		}\n\n		for ( i = 0; i < len; i++ ) {\n			jQuery.find( selector, self[ i ], ret );\n		}\n\n		// Needed because $( selector, context ) becomes $( context ).find( selector )\n		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );\n		ret.selector = this.selector ? this.selector + \" \" + selector : selector;\n		return ret;\n	},\n	filter: function( selector ) {\n		return this.pushStack( winnow(this, selector || [], false) );\n	},\n	not: function( selector ) {\n		return this.pushStack( winnow(this, selector || [], true) );\n	},\n	is: function( selector ) {\n		return !!winnow(\n			this,\n\n			// If this is a positional/relative selector, check membership in the returned set\n			// so $(\"p:first\").is(\"p:last\") won\'t return true for a doc with two \"p\".\n			typeof selector === \"string\" && rneedsContext.test( selector ) ?\n				jQuery( selector ) :\n				selector || [],\n			false\n		).length;\n	}\n});\n\n\n// Initialize a jQuery object\n\n\n// A central reference to the root jQuery(document)\nvar rootjQuery,\n\n	// A simple way to check for HTML strings\n	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)\n	// Strict HTML recognition (#11290: must start with <)\n	rquickExpr = /^(?:\\s*(<[\\w\\W]+>)[^>]*|#([\\w-]*))$/,\n\n	init = jQuery.fn.init = function( selector, context ) {\n		var match, elem;\n\n		// HANDLE: $(\"\"), $(null), $(undefined), $(false)\n		if ( !selector ) {\n			return this;\n		}\n\n		// Handle HTML strings\n		if ( typeof selector === \"string\" ) {\n			if ( selector[0] === \"<\" && selector[ selector.length - 1 ] === \">\" && selector.length >= 3 ) {\n				// Assume that strings that start and end with <> are HTML and skip the regex check\n				match = [ null, selector, null ];\n\n			} else {\n				match = rquickExpr.exec( selector );\n			}\n\n			// Match html or make sure no context is specified for #id\n			if ( match && (match[1] || !context) ) {\n\n				// HANDLE: $(html) -> $(array)\n				if ( match[1] ) {\n					context = context instanceof jQuery ? context[0] : context;\n\n					// scripts is true for back-compat\n					// Intentionally let the error be thrown if parseHTML is not present\n					jQuery.merge( this, jQuery.parseHTML(\n						match[1],\n						context && context.nodeType ? context.ownerDocument || context : document,\n						true\n					) );\n\n					// HANDLE: $(html, props)\n					if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {\n						for ( match in context ) {\n							// Properties of context are called as methods if possible\n							if ( jQuery.isFunction( this[ match ] ) ) {\n								this[ match ]( context[ match ] );\n\n							// ...and otherwise set as attributes\n							} else {\n								this.attr( match, context[ match ] );\n							}\n						}\n					}\n\n					return this;\n\n				// HANDLE: $(#id)\n				} else {\n					elem = document.getElementById( match[2] );\n\n					// Check parentNode to catch when Blackberry 4.6 returns\n					// nodes that are no longer in the document #6963\n					if ( elem && elem.parentNode ) {\n						// Inject the element directly into the jQuery object\n						this.length = 1;\n						this[0] = elem;\n					}\n\n					this.context = document;\n					this.selector = selector;\n					return this;\n				}\n\n			// HANDLE: $(expr, $(...))\n			} else if ( !context || context.jquery ) {\n				return ( context || rootjQuery ).find( selector );\n\n			// HANDLE: $(expr, context)\n			// (which is just equivalent to: $(context).find(expr)\n			} else {\n				return this.constructor( context ).find( selector );\n			}\n\n		// HANDLE: $(DOMElement)\n		} else if ( selector.nodeType ) {\n			this.context = this[0] = selector;\n			this.length = 1;\n			return this;\n\n		// HANDLE: $(function)\n		// Shortcut for document ready\n		} else if ( jQuery.isFunction( selector ) ) {\n			return typeof rootjQuery.ready !== \"undefined\" ?\n				rootjQuery.ready( selector ) :\n				// Execute immediately if ready is not present\n				selector( jQuery );\n		}\n\n		if ( selector.selector !== undefined ) {\n			this.selector = selector.selector;\n			this.context = selector.context;\n		}\n\n		return jQuery.makeArray( selector, this );\n	};\n\n// Give the init function the jQuery prototype for later instantiation\ninit.prototype = jQuery.fn;\n\n// Initialize central reference\nrootjQuery = jQuery( document );\n\n\nvar rparentsprev = /^(?:parents|prev(?:Until|All))/,\n	// methods guaranteed to produce a unique set when starting from a unique set\n	guaranteedUnique = {\n		children: true,\n		contents: true,\n		next: true,\n		prev: true\n	};\n\njQuery.extend({\n	dir: function( elem, dir, until ) {\n		var matched = [],\n			truncate = until !== undefined;\n\n		while ( (elem = elem[ dir ]) && elem.nodeType !== 9 ) {\n			if ( elem.nodeType === 1 ) {\n				if ( truncate && jQuery( elem ).is( until ) ) {\n					break;\n				}\n				matched.push( elem );\n			}\n		}\n		return matched;\n	},\n\n	sibling: function( n, elem ) {\n		var matched = [];\n\n		for ( ; n; n = n.nextSibling ) {\n			if ( n.nodeType === 1 && n !== elem ) {\n				matched.push( n );\n			}\n		}\n\n		return matched;\n	}\n});\n\njQuery.fn.extend({\n	has: function( target ) {\n		var targets = jQuery( target, this ),\n			l = targets.length;\n\n		return this.filter(function() {\n			var i = 0;\n			for ( ; i < l; i++ ) {\n				if ( jQuery.contains( this, targets[i] ) ) {\n					return true;\n				}\n			}\n		});\n	},\n\n	closest: function( selectors, context ) {\n		var cur,\n			i = 0,\n			l = this.length,\n			matched = [],\n			pos = rneedsContext.test( selectors ) || typeof selectors !== \"string\" ?\n				jQuery( selectors, context || this.context ) :\n				0;\n\n		for ( ; i < l; i++ ) {\n			for ( cur = this[i]; cur && cur !== context; cur = cur.parentNode ) {\n				// Always skip document fragments\n				if ( cur.nodeType < 11 && (pos ?\n					pos.index(cur) > -1 :\n\n					// Don\'t pass non-elements to Sizzle\n					cur.nodeType === 1 &&\n						jQuery.find.matchesSelector(cur, selectors)) ) {\n\n					matched.push( cur );\n					break;\n				}\n			}\n		}\n\n		return this.pushStack( matched.length > 1 ? jQuery.unique( matched ) : matched );\n	},\n\n	// Determine the position of an element within\n	// the matched set of elements\n	index: function( elem ) {\n\n		// No argument, return index in parent\n		if ( !elem ) {\n			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;\n		}\n\n		// index in selector\n		if ( typeof elem === \"string\" ) {\n			return indexOf.call( jQuery( elem ), this[ 0 ] );\n		}\n\n		// Locate the position of the desired element\n		return indexOf.call( this,\n\n			// If it receives a jQuery object, the first element is used\n			elem.jquery ? elem[ 0 ] : elem\n		);\n	},\n\n	add: function( selector, context ) {\n		return this.pushStack(\n			jQuery.unique(\n				jQuery.merge( this.get(), jQuery( selector, context ) )\n			)\n		);\n	},\n\n	addBack: function( selector ) {\n		return this.add( selector == null ?\n			this.prevObject : this.prevObject.filter(selector)\n		);\n	}\n});\n\nfunction sibling( cur, dir ) {\n	while ( (cur = cur[dir]) && cur.nodeType !== 1 ) {}\n	return cur;\n}\n\njQuery.each({\n	parent: function( elem ) {\n		var parent = elem.parentNode;\n		return parent && parent.nodeType !== 11 ? parent : null;\n	},\n	parents: function( elem ) {\n		return jQuery.dir( elem, \"parentNode\" );\n	},\n	parentsUntil: function( elem, i, until ) {\n		return jQuery.dir( elem, \"parentNode\", until );\n	},\n	next: function( elem ) {\n		return sibling( elem, \"nextSibling\" );\n	},\n	prev: function( elem ) {\n		return sibling( elem, \"previousSibling\" );\n	},\n	nextAll: function( elem ) {\n		return jQuery.dir( elem, \"nextSibling\" );\n	},\n	prevAll: function( elem ) {\n		return jQuery.dir( elem, \"previousSibling\" );\n	},\n	nextUntil: function( elem, i, until ) {\n		return jQuery.dir( elem, \"nextSibling\", until );\n	},\n	prevUntil: function( elem, i, until ) {\n		return jQuery.dir( elem, \"previousSibling\", until );\n	},\n	siblings: function( elem ) {\n		return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );\n	},\n	children: function( elem ) {\n		return jQuery.sibling( elem.firstChild );\n	},\n	contents: function( elem ) {\n		return elem.contentDocument || jQuery.merge( [], elem.childNodes );\n	}\n}, function( name, fn ) {\n	jQuery.fn[ name ] = function( until, selector ) {\n		var matched = jQuery.map( this, fn, until );\n\n		if ( name.slice( -5 ) !== \"Until\" ) {\n			selector = until;\n		}\n\n		if ( selector && typeof selector === \"string\" ) {\n			matched = jQuery.filter( selector, matched );\n		}\n\n		if ( this.length > 1 ) {\n			// Remove duplicates\n			if ( !guaranteedUnique[ name ] ) {\n				jQuery.unique( matched );\n			}\n\n			// Reverse order for parents* and prev-derivatives\n			if ( rparentsprev.test( name ) ) {\n				matched.reverse();\n			}\n		}\n\n		return this.pushStack( matched );\n	};\n});\nvar rnotwhite = (/\\S+/g);\n\n\n\n// String to Object options format cache\nvar optionsCache = {};\n\n// Convert String-formatted options into Object-formatted ones and store in cache\nfunction createOptions( options ) {\n	var object = optionsCache[ options ] = {};\n	jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {\n		object[ flag ] = true;\n	});\n	return object;\n}\n\n/*\n * Create a callback list using the following parameters:\n *\n *	options: an optional list of space-separated options that will change how\n *			the callback list behaves or a more traditional option object\n *\n * By default a callback list will act like an event callback list and can be\n * \"fired\" multiple times.\n *\n * Possible options:\n *\n *	once:			will ensure the callback list can only be fired once (like a Deferred)\n *\n *	memory:			will keep track of previous values and will call any callback added\n *					after the list has been fired right away with the latest \"memorized\"\n *					values (like a Deferred)\n *\n *	unique:			will ensure a callback can only be added once (no duplicate in the list)\n *\n *	stopOnFalse:	interrupt callings when a callback returns false\n *\n */\njQuery.Callbacks = function( options ) {\n\n	// Convert options from String-formatted to Object-formatted if needed\n	// (we check in cache first)\n	options = typeof options === \"string\" ?\n		( optionsCache[ options ] || createOptions( options ) ) :\n		jQuery.extend( {}, options );\n\n	var // Last fire value (for non-forgettable lists)\n		memory,\n		// Flag to know if list was already fired\n		fired,\n		// Flag to know if list is currently firing\n		firing,\n		// First callback to fire (used internally by add and fireWith)\n		firingStart,\n		// End of the loop when firing\n		firingLength,\n		// Index of currently firing callback (modified by remove if needed)\n		firingIndex,\n		// Actual callback list\n		list = [],\n		// Stack of fire calls for repeatable lists\n		stack = !options.once && [],\n		// Fire callbacks\n		fire = function( data ) {\n			memory = options.memory && data;\n			fired = true;\n			firingIndex = firingStart || 0;\n			firingStart = 0;\n			firingLength = list.length;\n			firing = true;\n			for ( ; list && firingIndex < firingLength; firingIndex++ ) {\n				if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {\n					memory = false; // To prevent further calls using add\n					break;\n				}\n			}\n			firing = false;\n			if ( list ) {\n				if ( stack ) {\n					if ( stack.length ) {\n						fire( stack.shift() );\n					}\n				} else if ( memory ) {\n					list = [];\n				} else {\n					self.disable();\n				}\n			}\n		},\n		// Actual Callbacks object\n		self = {\n			// Add a callback or a collection of callbacks to the list\n			add: function() {\n				if ( list ) {\n					// First, we save the current length\n					var start = list.length;\n					(function add( args ) {\n						jQuery.each( args, function( _, arg ) {\n							var type = jQuery.type( arg );\n							if ( type === \"function\" ) {\n								if ( !options.unique || !self.has( arg ) ) {\n									list.push( arg );\n								}\n							} else if ( arg && arg.length && type !== \"string\" ) {\n								// Inspect recursively\n								add( arg );\n							}\n						});\n					})( arguments );\n					// Do we need to add the callbacks to the\n					// current firing batch?\n					if ( firing ) {\n						firingLength = list.length;\n					// With memory, if we\'re not firing then\n					// we should call right away\n					} else if ( memory ) {\n						firingStart = start;\n						fire( memory );\n					}\n				}\n				return this;\n			},\n			// Remove a callback from the list\n			remove: function() {\n				if ( list ) {\n					jQuery.each( arguments, function( _, arg ) {\n						var index;\n						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {\n							list.splice( index, 1 );\n							// Handle firing indexes\n							if ( firing ) {\n								if ( index <= firingLength ) {\n									firingLength--;\n								}\n								if ( index <= firingIndex ) {\n									firingIndex--;\n								}\n							}\n						}\n					});\n				}\n				return this;\n			},\n			// Check if a given callback is in the list.\n			// If no argument is given, return whether or not list has callbacks attached.\n			has: function( fn ) {\n				return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );\n			},\n			// Remove all callbacks from the list\n			empty: function() {\n				list = [];\n				firingLength = 0;\n				return this;\n			},\n			// Have the list do nothing anymore\n			disable: function() {\n				list = stack = memory = undefined;\n				return this;\n			},\n			// Is it disabled?\n			disabled: function() {\n				return !list;\n			},\n			// Lock the list in its current state\n			lock: function() {\n				stack = undefined;\n				if ( !memory ) {\n					self.disable();\n				}\n				return this;\n			},\n			// Is it locked?\n			locked: function() {\n				return !stack;\n			},\n			// Call all callbacks with the given context and arguments\n			fireWith: function( context, args ) {\n				if ( list && ( !fired || stack ) ) {\n					args = args || [];\n					args = [ context, args.slice ? args.slice() : args ];\n					if ( firing ) {\n						stack.push( args );\n					} else {\n						fire( args );\n					}\n				}\n				return this;\n			},\n			// Call all the callbacks with the given arguments\n			fire: function() {\n				self.fireWith( this, arguments );\n				return this;\n			},\n			// To know if the callbacks have already been called at least once\n			fired: function() {\n				return !!fired;\n			}\n		};\n\n	return self;\n};\n\n\njQuery.extend({\n\n	Deferred: function( func ) {\n		var tuples = [\n				// action, add listener, listener list, final state\n				[ \"resolve\", \"done\", jQuery.Callbacks(\"once memory\"), \"resolved\" ],\n				[ \"reject\", \"fail\", jQuery.Callbacks(\"once memory\"), \"rejected\" ],\n				[ \"notify\", \"progress\", jQuery.Callbacks(\"memory\") ]\n			],\n			state = \"pending\",\n			promise = {\n				state: function() {\n					return state;\n				},\n				always: function() {\n					deferred.done( arguments ).fail( arguments );\n					return this;\n				},\n				then: function( /* fnDone, fnFail, fnProgress */ ) {\n					var fns = arguments;\n					return jQuery.Deferred(function( newDefer ) {\n						jQuery.each( tuples, function( i, tuple ) {\n							var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];\n							// deferred[ done | fail | progress ] for forwarding actions to newDefer\n							deferred[ tuple[1] ](function() {\n								var returned = fn && fn.apply( this, arguments );\n								if ( returned && jQuery.isFunction( returned.promise ) ) {\n									returned.promise()\n										.done( newDefer.resolve )\n										.fail( newDefer.reject )\n										.progress( newDefer.notify );\n								} else {\n									newDefer[ tuple[ 0 ] + \"With\" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );\n								}\n							});\n						});\n						fns = null;\n					}).promise();\n				},\n				// Get a promise for this deferred\n				// If obj is provided, the promise aspect is added to the object\n				promise: function( obj ) {\n					return obj != null ? jQuery.extend( obj, promise ) : promise;\n				}\n			},\n			deferred = {};\n\n		// Keep pipe for back-compat\n		promise.pipe = promise.then;\n\n		// Add list-specific methods\n		jQuery.each( tuples, function( i, tuple ) {\n			var list = tuple[ 2 ],\n				stateString = tuple[ 3 ];\n\n			// promise[ done | fail | progress ] = list.add\n			promise[ tuple[1] ] = list.add;\n\n			// Handle state\n			if ( stateString ) {\n				list.add(function() {\n					// state = [ resolved | rejected ]\n					state = stateString;\n\n				// [ reject_list | resolve_list ].disable; progress_list.lock\n				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );\n			}\n\n			// deferred[ resolve | reject | notify ]\n			deferred[ tuple[0] ] = function() {\n				deferred[ tuple[0] + \"With\" ]( this === deferred ? promise : this, arguments );\n				return this;\n			};\n			deferred[ tuple[0] + \"With\" ] = list.fireWith;\n		});\n\n		// Make the deferred a promise\n		promise.promise( deferred );\n\n		// Call given func if any\n		if ( func ) {\n			func.call( deferred, deferred );\n		}\n\n		// All done!\n		return deferred;\n	},\n\n	// Deferred helper\n	when: function( subordinate /* , ..., subordinateN */ ) {\n		var i = 0,\n			resolveValues = slice.call( arguments ),\n			length = resolveValues.length,\n\n			// the count of uncompleted subordinates\n			remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,\n\n			// the master Deferred. If resolveValues consist of only a single Deferred, just use that.\n			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),\n\n			// Update function for both resolve and progress values\n			updateFunc = function( i, contexts, values ) {\n				return function( value ) {\n					contexts[ i ] = this;\n					values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;\n					if ( values === progressValues ) {\n						deferred.notifyWith( contexts, values );\n					} else if ( !( --remaining ) ) {\n						deferred.resolveWith( contexts, values );\n					}\n				};\n			},\n\n			progressValues, progressContexts, resolveContexts;\n\n		// add listeners to Deferred subordinates; treat others as resolved\n		if ( length > 1 ) {\n			progressValues = new Array( length );\n			progressContexts = new Array( length );\n			resolveContexts = new Array( length );\n			for ( ; i < length; i++ ) {\n				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {\n					resolveValues[ i ].promise()\n						.done( updateFunc( i, resolveContexts, resolveValues ) )\n						.fail( deferred.reject )\n						.progress( updateFunc( i, progressContexts, progressValues ) );\n				} else {\n					--remaining;\n				}\n			}\n		}\n\n		// if we\'re not waiting on anything, resolve the master\n		if ( !remaining ) {\n			deferred.resolveWith( resolveContexts, resolveValues );\n		}\n\n		return deferred.promise();\n	}\n});\n\n\n// The deferred used on DOM ready\nvar readyList;\n\njQuery.fn.ready = function( fn ) {\n	// Add the callback\n	jQuery.ready.promise().done( fn );\n\n	return this;\n};\n\njQuery.extend({\n	// Is the DOM ready to be used? Set to true once it occurs.\n	isReady: false,\n\n	// A counter to track how many items to wait for before\n	// the ready event fires. See #6781\n	readyWait: 1,\n\n	// Hold (or release) the ready event\n	holdReady: function( hold ) {\n		if ( hold ) {\n			jQuery.readyWait++;\n		} else {\n			jQuery.ready( true );\n		}\n	},\n\n	// Handle when the DOM is ready\n	ready: function( wait ) {\n\n		// Abort if there are pending holds or we\'re already ready\n		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {\n			return;\n		}\n\n		// Remember that the DOM is ready\n		jQuery.isReady = true;\n\n		// If a normal DOM Ready event fired, decrement, and wait if need be\n		if ( wait !== true && --jQuery.readyWait > 0 ) {\n			return;\n		}\n\n		// If there are functions bound, to execute\n		readyList.resolveWith( document, [ jQuery ] );\n\n		// Trigger any bound ready events\n		if ( jQuery.fn.triggerHandler ) {\n			jQuery( document ).triggerHandler( \"ready\" );\n			jQuery( document ).off( \"ready\" );\n		}\n	}\n});\n\n/**\n * The ready event handler and self cleanup method\n */\nfunction completed() {\n	document.removeEventListener( \"DOMContentLoaded\", completed, false );\n	window.removeEventListener( \"load\", completed, false );\n	jQuery.ready();\n}\n\njQuery.ready.promise = function( obj ) {\n	if ( !readyList ) {\n\n		readyList = jQuery.Deferred();\n\n		// Catch cases where $(document).ready() is called after the browser event has already occurred.\n		// we once tried to use readyState \"interactive\" here, but it caused issues like the one\n		// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15\n		if ( document.readyState === \"complete\" ) {\n			// Handle it asynchronously to allow scripts the opportunity to delay ready\n			setTimeout( jQuery.ready );\n\n		} else {\n\n			// Use the handy event callback\n			document.addEventListener( \"DOMContentLoaded\", completed, false );\n\n			// A fallback to window.onload, that will always work\n			window.addEventListener( \"load\", completed, false );\n		}\n	}\n	return readyList.promise( obj );\n};\n\n// Kick off the DOM ready check even if the user does not\njQuery.ready.promise();\n\n\n\n\n// Multifunctional method to get and set values of a collection\n// The value/s can optionally be executed if it\'s a function\nvar access = jQuery.access = function( elems, fn, key, value, chainable, emptyGet, raw ) {\n	var i = 0,\n		len = elems.length,\n		bulk = key == null;\n\n	// Sets many values\n	if ( jQuery.type( key ) === \"object\" ) {\n		chainable = true;\n		for ( i in key ) {\n			jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );\n		}\n\n	// Sets one value\n	} else if ( value !== undefined ) {\n		chainable = true;\n\n		if ( !jQuery.isFunction( value ) ) {\n			raw = true;\n		}\n\n		if ( bulk ) {\n			// Bulk operations run against the entire set\n			if ( raw ) {\n				fn.call( elems, value );\n				fn = null;\n\n			// ...except when executing function values\n			} else {\n				bulk = fn;\n				fn = function( elem, key, value ) {\n					return bulk.call( jQuery( elem ), value );\n				};\n			}\n		}\n\n		if ( fn ) {\n			for ( ; i < len; i++ ) {\n				fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );\n			}\n		}\n	}\n\n	return chainable ?\n		elems :\n\n		// Gets\n		bulk ?\n			fn.call( elems ) :\n			len ? fn( elems[0], key ) : emptyGet;\n};\n\n\n/**\n * Determines whether an object can have data\n */\njQuery.acceptData = function( owner ) {\n	// Accepts only:\n	//  - Node\n	//    - Node.ELEMENT_NODE\n	//    - Node.DOCUMENT_NODE\n	//  - Object\n	//    - Any\n	/* jshint -W018 */\n	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );\n};\n\n\nfunction Data() {\n	// Support: Android < 4,\n	// Old WebKit does not have Object.preventExtensions/freeze method,\n	// return new empty object instead with no [[set]] accessor\n	Object.defineProperty( this.cache = {}, 0, {\n		get: function() {\n			return {};\n		}\n	});\n\n	this.expando = jQuery.expando + Math.random();\n}\n\nData.uid = 1;\nData.accepts = jQuery.acceptData;\n\nData.prototype = {\n	key: function( owner ) {\n		// We can accept data for non-element nodes in modern browsers,\n		// but we should not, see #8335.\n		// Always return the key for a frozen object.\n		if ( !Data.accepts( owner ) ) {\n			return 0;\n		}\n\n		var descriptor = {},\n			// Check if the owner object already has a cache key\n			unlock = owner[ this.expando ];\n\n		// If not, create one\n		if ( !unlock ) {\n			unlock = Data.uid++;\n\n			// Secure it in a non-enumerable, non-writable property\n			try {\n				descriptor[ this.expando ] = { value: unlock };\n				Object.defineProperties( owner, descriptor );\n\n			// Support: Android < 4\n			// Fallback to a less secure definition\n			} catch ( e ) {\n				descriptor[ this.expando ] = unlock;\n				jQuery.extend( owner, descriptor );\n			}\n		}\n\n		// Ensure the cache object\n		if ( !this.cache[ unlock ] ) {\n			this.cache[ unlock ] = {};\n		}\n\n		return unlock;\n	},\n	set: function( owner, data, value ) {\n		var prop,\n			// There may be an unlock assigned to this node,\n			// if there is no entry for this \"owner\", create one inline\n			// and set the unlock as though an owner entry had always existed\n			unlock = this.key( owner ),\n			cache = this.cache[ unlock ];\n\n		// Handle: [ owner, key, value ] args\n		if ( typeof data === \"string\" ) {\n			cache[ data ] = value;\n\n		// Handle: [ owner, { properties } ] args\n		} else {\n			// Fresh assignments by object are shallow copied\n			if ( jQuery.isEmptyObject( cache ) ) {\n				jQuery.extend( this.cache[ unlock ], data );\n			// Otherwise, copy the properties one-by-one to the cache object\n			} else {\n				for ( prop in data ) {\n					cache[ prop ] = data[ prop ];\n				}\n			}\n		}\n		return cache;\n	},\n	get: function( owner, key ) {\n		// Either a valid cache is found, or will be created.\n		// New caches will be created and the unlock returned,\n		// allowing direct access to the newly created\n		// empty data object. A valid owner object must be provided.\n		var cache = this.cache[ this.key( owner ) ];\n\n		return key === undefined ?\n			cache : cache[ key ];\n	},\n	access: function( owner, key, value ) {\n		var stored;\n		// In cases where either:\n		//\n		//   1. No key was specified\n		//   2. A string key was specified, but no value provided\n		//\n		// Take the \"read\" path and allow the get method to determine\n		// which value to return, respectively either:\n		//\n		//   1. The entire cache object\n		//   2. The data stored at the key\n		//\n		if ( key === undefined ||\n				((key && typeof key === \"string\") && value === undefined) ) {\n\n			stored = this.get( owner, key );\n\n			return stored !== undefined ?\n				stored : this.get( owner, jQuery.camelCase(key) );\n		}\n\n		// [*]When the key is not a string, or both a key and value\n		// are specified, set or extend (existing objects) with either:\n		//\n		//   1. An object of properties\n		//   2. A key and value\n		//\n		this.set( owner, key, value );\n\n		// Since the \"set\" path can have two possible entry points\n		// return the expected data based on which path was taken[*]\n		return value !== undefined ? value : key;\n	},\n	remove: function( owner, key ) {\n		var i, name, camel,\n			unlock = this.key( owner ),\n			cache = this.cache[ unlock ];\n\n		if ( key === undefined ) {\n			this.cache[ unlock ] = {};\n\n		} else {\n			// Support array or space separated string of keys\n			if ( jQuery.isArray( key ) ) {\n				// If \"name\" is an array of keys...\n				// When data is initially created, via (\"key\", \"val\") signature,\n				// keys will be converted to camelCase.\n				// Since there is no way to tell _how_ a key was added, remove\n				// both plain key and camelCase key. #12786\n				// This will only penalize the array argument path.\n				name = key.concat( key.map( jQuery.camelCase ) );\n			} else {\n				camel = jQuery.camelCase( key );\n				// Try the string as a key before any manipulation\n				if ( key in cache ) {\n					name = [ key, camel ];\n				} else {\n					// If a key with the spaces exists, use it.\n					// Otherwise, create an array by matching non-whitespace\n					name = camel;\n					name = name in cache ?\n						[ name ] : ( name.match( rnotwhite ) || [] );\n				}\n			}\n\n			i = name.length;\n			while ( i-- ) {\n				delete cache[ name[ i ] ];\n			}\n		}\n	},\n	hasData: function( owner ) {\n		return !jQuery.isEmptyObject(\n			this.cache[ owner[ this.expando ] ] || {}\n		);\n	},\n	discard: function( owner ) {\n		if ( owner[ this.expando ] ) {\n			delete this.cache[ owner[ this.expando ] ];\n		}\n	}\n};\nvar data_priv = new Data();\n\nvar data_user = new Data();\n\n\n\n/*\n	Implementation Summary\n\n	1. Enforce API surface and semantic compatibility with 1.9.x branch\n	2. Improve the module\'s maintainability by reducing the storage\n		paths to a single mechanism.\n	3. Use the same single mechanism to support \"private\" and \"user\" data.\n	4. _Never_ expose \"private\" data to user code (TODO: Drop _data, _removeData)\n	5. Avoid exposing implementation details on user objects (eg. expando properties)\n	6. Provide a clear path for implementation upgrade to WeakMap in 2014\n*/\nvar rbrace = /^(?:\\{[\\w\\W]*\\}|\\[[\\w\\W]*\\])$/,\n	rmultiDash = /([A-Z])/g;\n\nfunction dataAttr( elem, key, data ) {\n	var name;\n\n	// If nothing was found internally, try to fetch any\n	// data from the HTML5 data-* attribute\n	if ( data === undefined && elem.nodeType === 1 ) {\n		name = \"data-\" + key.replace( rmultiDash, \"-$1\" ).toLowerCase();\n		data = elem.getAttribute( name );\n\n		if ( typeof data === \"string\" ) {\n			try {\n				data = data === \"true\" ? true :\n					data === \"false\" ? false :\n					data === \"null\" ? null :\n					// Only convert to a number if it doesn\'t change the string\n					+data + \"\" === data ? +data :\n					rbrace.test( data ) ? jQuery.parseJSON( data ) :\n					data;\n			} catch( e ) {}\n\n			// Make sure we set the data so it isn\'t changed later\n			data_user.set( elem, key, data );\n		} else {\n			data = undefined;\n		}\n	}\n	return data;\n}\n\njQuery.extend({\n	hasData: function( elem ) {\n		return data_user.hasData( elem ) || data_priv.hasData( elem );\n	},\n\n	data: function( elem, name, data ) {\n		return data_user.access( elem, name, data );\n	},\n\n	removeData: function( elem, name ) {\n		data_user.remove( elem, name );\n	},\n\n	// TODO: Now that all calls to _data and _removeData have been replaced\n	// with direct calls to data_priv methods, these can be deprecated.\n	_data: function( elem, name, data ) {\n		return data_priv.access( elem, name, data );\n	},\n\n	_removeData: function( elem, name ) {\n		data_priv.remove( elem, name );\n	}\n});\n\njQuery.fn.extend({\n	data: function( key, value ) {\n		var i, name, data,\n			elem = this[ 0 ],\n			attrs = elem && elem.attributes;\n\n		// Gets all values\n		if ( key === undefined ) {\n			if ( this.length ) {\n				data = data_user.get( elem );\n\n				if ( elem.nodeType === 1 && !data_priv.get( elem, \"hasDataAttrs\" ) ) {\n					i = attrs.length;\n					while ( i-- ) {\n\n						// Support: IE11+\n						// The attrs elements can be null (#14894)\n						if ( attrs[ i ] ) {\n							name = attrs[ i ].name;\n							if ( name.indexOf( \"data-\" ) === 0 ) {\n								name = jQuery.camelCase( name.slice(5) );\n								dataAttr( elem, name, data[ name ] );\n							}\n						}\n					}\n					data_priv.set( elem, \"hasDataAttrs\", true );\n				}\n			}\n\n			return data;\n		}\n\n		// Sets multiple values\n		if ( typeof key === \"object\" ) {\n			return this.each(function() {\n				data_user.set( this, key );\n			});\n		}\n\n		return access( this, function( value ) {\n			var data,\n				camelKey = jQuery.camelCase( key );\n\n			// The calling jQuery object (element matches) is not empty\n			// (and therefore has an element appears at this[ 0 ]) and the\n			// `value` parameter was not undefined. An empty jQuery object\n			// will result in `undefined` for elem = this[ 0 ] which will\n			// throw an exception if an attempt to read a data cache is made.\n			if ( elem && value === undefined ) {\n				// Attempt to get data from the cache\n				// with the key as-is\n				data = data_user.get( elem, key );\n				if ( data !== undefined ) {\n					return data;\n				}\n\n				// Attempt to get data from the cache\n				// with the key camelized\n				data = data_user.get( elem, camelKey );\n				if ( data !== undefined ) {\n					return data;\n				}\n\n				// Attempt to \"discover\" the data in\n				// HTML5 custom data-* attrs\n				data = dataAttr( elem, camelKey, undefined );\n				if ( data !== undefined ) {\n					return data;\n				}\n\n				// We tried really hard, but the data doesn\'t exist.\n				return;\n			}\n\n			// Set the data...\n			this.each(function() {\n				// First, attempt to store a copy or reference of any\n				// data that might\'ve been store with a camelCased key.\n				var data = data_user.get( this, camelKey );\n\n				// For HTML5 data-* attribute interop, we have to\n				// store property names with dashes in a camelCase form.\n				// This might not apply to all properties...*\n				data_user.set( this, camelKey, value );\n\n				// *... In the case of properties that might _actually_\n				// have dashes, we need to also store a copy of that\n				// unchanged property.\n				if ( key.indexOf(\"-\") !== -1 && data !== undefined ) {\n					data_user.set( this, key, value );\n				}\n			});\n		}, null, value, arguments.length > 1, null, true );\n	},\n\n	removeData: function( key ) {\n		return this.each(function() {\n			data_user.remove( this, key );\n		});\n	}\n});\n\n\njQuery.extend({\n	queue: function( elem, type, data ) {\n		var queue;\n\n		if ( elem ) {\n			type = ( type || \"fx\" ) + \"queue\";\n			queue = data_priv.get( elem, type );\n\n			// Speed up dequeue by getting out quickly if this is just a lookup\n			if ( data ) {\n				if ( !queue || jQuery.isArray( data ) ) {\n					queue = data_priv.access( elem, type, jQuery.makeArray(data) );\n				} else {\n					queue.push( data );\n				}\n			}\n			return queue || [];\n		}\n	},\n\n	dequeue: function( elem, type ) {\n		type = type || \"fx\";\n\n		var queue = jQuery.queue( elem, type ),\n			startLength = queue.length,\n			fn = queue.shift(),\n			hooks = jQuery._queueHooks( elem, type ),\n			next = function() {\n				jQuery.dequeue( elem, type );\n			};\n\n		// If the fx queue is dequeued, always remove the progress sentinel\n		if ( fn === \"inprogress\" ) {\n			fn = queue.shift();\n			startLength--;\n		}\n\n		if ( fn ) {\n\n			// Add a progress sentinel to prevent the fx queue from being\n			// automatically dequeued\n			if ( type === \"fx\" ) {\n				queue.unshift( \"inprogress\" );\n			}\n\n			// clear up the last queue stop function\n			delete hooks.stop;\n			fn.call( elem, next, hooks );\n		}\n\n		if ( !startLength && hooks ) {\n			hooks.empty.fire();\n		}\n	},\n\n	// not intended for public consumption - generates a queueHooks object, or returns the current one\n	_queueHooks: function( elem, type ) {\n		var key = type + \"queueHooks\";\n		return data_priv.get( elem, key ) || data_priv.access( elem, key, {\n			empty: jQuery.Callbacks(\"once memory\").add(function() {\n				data_priv.remove( elem, [ type + \"queue\", key ] );\n			})\n		});\n	}\n});\n\njQuery.fn.extend({\n	queue: function( type, data ) {\n		var setter = 2;\n\n		if ( typeof type !== \"string\" ) {\n			data = type;\n			type = \"fx\";\n			setter--;\n		}\n\n		if ( arguments.length < setter ) {\n			return jQuery.queue( this[0], type );\n		}\n\n		return data === undefined ?\n			this :\n			this.each(function() {\n				var queue = jQuery.queue( this, type, data );\n\n				// ensure a hooks for this queue\n				jQuery._queueHooks( this, type );\n\n				if ( type === \"fx\" && queue[0] !== \"inprogress\" ) {\n					jQuery.dequeue( this, type );\n				}\n			});\n	},\n	dequeue: function( type ) {\n		return this.each(function() {\n			jQuery.dequeue( this, type );\n		});\n	},\n	clearQueue: function( type ) {\n		return this.queue( type || \"fx\", [] );\n	},\n	// Get a promise resolved when queues of a certain type\n	// are emptied (fx is the type by default)\n	promise: function( type, obj ) {\n		var tmp,\n			count = 1,\n			defer = jQuery.Deferred(),\n			elements = this,\n			i = this.length,\n			resolve = function() {\n				if ( !( --count ) ) {\n					defer.resolveWith( elements, [ elements ] );\n				}\n			};\n\n		if ( typeof type !== \"string\" ) {\n			obj = type;\n			type = undefined;\n		}\n		type = type || \"fx\";\n\n		while ( i-- ) {\n			tmp = data_priv.get( elements[ i ], type + \"queueHooks\" );\n			if ( tmp && tmp.empty ) {\n				count++;\n				tmp.empty.add( resolve );\n			}\n		}\n		resolve();\n		return defer.promise( obj );\n	}\n});\nvar pnum = (/[+-]?(?:\\d*\\.|)\\d+(?:[eE][+-]?\\d+|)/).source;\n\nvar cssExpand = [ \"Top\", \"Right\", \"Bottom\", \"Left\" ];\n\nvar isHidden = function( elem, el ) {\n		// isHidden might be called from jQuery#filter function;\n		// in that case, element will be second argument\n		elem = el || elem;\n		return jQuery.css( elem, \"display\" ) === \"none\" || !jQuery.contains( elem.ownerDocument, elem );\n	};\n\nvar rcheckableType = (/^(?:checkbox|radio)$/i);\n\n\n\n(function() {\n	var fragment = document.createDocumentFragment(),\n		div = fragment.appendChild( document.createElement( \"div\" ) ),\n		input = document.createElement( \"input\" );\n\n	// #11217 - WebKit loses check when the name is after the checked attribute\n	// Support: Windows Web Apps (WWA)\n	// `name` and `type` need .setAttribute for WWA\n	input.setAttribute( \"type\", \"radio\" );\n	input.setAttribute( \"checked\", \"checked\" );\n	input.setAttribute( \"name\", \"t\" );\n\n	div.appendChild( input );\n\n	// Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3\n	// old WebKit doesn\'t clone checked state correctly in fragments\n	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;\n\n	// Make sure textarea (and checkbox) defaultValue is properly cloned\n	// Support: IE9-IE11+\n	div.innerHTML = \"<textarea>x</textarea>\";\n	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;\n})();\nvar strundefined = typeof undefined;\n\n\n\nsupport.focusinBubbles = \"onfocusin\" in window;\n\n\nvar\n	rkeyEvent = /^key/,\n	rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,\n	rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,\n	rtypenamespace = /^([^.]*)(?:\\.(.+)|)$/;\n\nfunction returnTrue() {\n	return true;\n}\n\nfunction returnFalse() {\n	return false;\n}\n\nfunction safeActiveElement() {\n	try {\n		return document.activeElement;\n	} catch ( err ) { }\n}\n\n/*\n * Helper functions for managing events -- not part of the public interface.\n * Props to Dean Edwards\' addEvent library for many of the ideas.\n */\njQuery.event = {\n\n	global: {},\n\n	add: function( elem, types, handler, data, selector ) {\n\n		var handleObjIn, eventHandle, tmp,\n			events, t, handleObj,\n			special, handlers, type, namespaces, origType,\n			elemData = data_priv.get( elem );\n\n		// Don\'t attach events to noData or text/comment nodes (but allow plain objects)\n		if ( !elemData ) {\n			return;\n		}\n\n		// Caller can pass in an object of custom data in lieu of the handler\n		if ( handler.handler ) {\n			handleObjIn = handler;\n			handler = handleObjIn.handler;\n			selector = handleObjIn.selector;\n		}\n\n		// Make sure that the handler has a unique ID, used to find/remove it later\n		if ( !handler.guid ) {\n			handler.guid = jQuery.guid++;\n		}\n\n		// Init the element\'s event structure and main handler, if this is the first\n		if ( !(events = elemData.events) ) {\n			events = elemData.events = {};\n		}\n		if ( !(eventHandle = elemData.handle) ) {\n			eventHandle = elemData.handle = function( e ) {\n				// Discard the second event of a jQuery.event.trigger() and\n				// when an event is called after a page has unloaded\n				return typeof jQuery !== strundefined && jQuery.event.triggered !== e.type ?\n					jQuery.event.dispatch.apply( elem, arguments ) : undefined;\n			};\n		}\n\n		// Handle multiple events separated by a space\n		types = ( types || \"\" ).match( rnotwhite ) || [ \"\" ];\n		t = types.length;\n		while ( t-- ) {\n			tmp = rtypenamespace.exec( types[t] ) || [];\n			type = origType = tmp[1];\n			namespaces = ( tmp[2] || \"\" ).split( \".\" ).sort();\n\n			// There *must* be a type, no attaching namespace-only handlers\n			if ( !type ) {\n				continue;\n			}\n\n			// If event changes its type, use the special event handlers for the changed type\n			special = jQuery.event.special[ type ] || {};\n\n			// If selector defined, determine special event api type, otherwise given type\n			type = ( selector ? special.delegateType : special.bindType ) || type;\n\n			// Update special based on newly reset type\n			special = jQuery.event.special[ type ] || {};\n\n			// handleObj is passed to all event handlers\n			handleObj = jQuery.extend({\n				type: type,\n				origType: origType,\n				data: data,\n				handler: handler,\n				guid: handler.guid,\n				selector: selector,\n				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),\n				namespace: namespaces.join(\".\")\n			}, handleObjIn );\n\n			// Init the event handler queue if we\'re the first\n			if ( !(handlers = events[ type ]) ) {\n				handlers = events[ type ] = [];\n				handlers.delegateCount = 0;\n\n				// Only use addEventListener if the special events handler returns false\n				if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {\n					if ( elem.addEventListener ) {\n						elem.addEventListener( type, eventHandle, false );\n					}\n				}\n			}\n\n			if ( special.add ) {\n				special.add.call( elem, handleObj );\n\n				if ( !handleObj.handler.guid ) {\n					handleObj.handler.guid = handler.guid;\n				}\n			}\n\n			// Add to the element\'s handler list, delegates in front\n			if ( selector ) {\n				handlers.splice( handlers.delegateCount++, 0, handleObj );\n			} else {\n				handlers.push( handleObj );\n			}\n\n			// Keep track of which events have ever been used, for event optimization\n			jQuery.event.global[ type ] = true;\n		}\n\n	},\n\n	// Detach an event or set of events from an element\n	remove: function( elem, types, handler, selector, mappedTypes ) {\n\n		var j, origCount, tmp,\n			events, t, handleObj,\n			special, handlers, type, namespaces, origType,\n			elemData = data_priv.hasData( elem ) && data_priv.get( elem );\n\n		if ( !elemData || !(events = elemData.events) ) {\n			return;\n		}\n\n		// Once for each type.namespace in types; type may be omitted\n		types = ( types || \"\" ).match( rnotwhite ) || [ \"\" ];\n		t = types.length;\n		while ( t-- ) {\n			tmp = rtypenamespace.exec( types[t] ) || [];\n			type = origType = tmp[1];\n			namespaces = ( tmp[2] || \"\" ).split( \".\" ).sort();\n\n			// Unbind all events (on this namespace, if provided) for the element\n			if ( !type ) {\n				for ( type in events ) {\n					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );\n				}\n				continue;\n			}\n\n			special = jQuery.event.special[ type ] || {};\n			type = ( selector ? special.delegateType : special.bindType ) || type;\n			handlers = events[ type ] || [];\n			tmp = tmp[2] && new RegExp( \"(^|\\\\.)\" + namespaces.join(\"\\\\.(?:.*\\\\.|)\") + \"(\\\\.|$)\" );\n\n			// Remove matching events\n			origCount = j = handlers.length;\n			while ( j-- ) {\n				handleObj = handlers[ j ];\n\n				if ( ( mappedTypes || origType === handleObj.origType ) &&\n					( !handler || handler.guid === handleObj.guid ) &&\n					( !tmp || tmp.test( handleObj.namespace ) ) &&\n					( !selector || selector === handleObj.selector || selector === \"**\" && handleObj.selector ) ) {\n					handlers.splice( j, 1 );\n\n					if ( handleObj.selector ) {\n						handlers.delegateCount--;\n					}\n					if ( special.remove ) {\n						special.remove.call( elem, handleObj );\n					}\n				}\n			}\n\n			// Remove generic event handler if we removed something and no more handlers exist\n			// (avoids potential for endless recursion during removal of special event handlers)\n			if ( origCount && !handlers.length ) {\n				if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {\n					jQuery.removeEvent( elem, type, elemData.handle );\n				}\n\n				delete events[ type ];\n			}\n		}\n\n		// Remove the expando if it\'s no longer used\n		if ( jQuery.isEmptyObject( events ) ) {\n			delete elemData.handle;\n			data_priv.remove( elem, \"events\" );\n		}\n	},\n\n	trigger: function( event, data, elem, onlyHandlers ) {\n\n		var i, cur, tmp, bubbleType, ontype, handle, special,\n			eventPath = [ elem || document ],\n			type = hasOwn.call( event, \"type\" ) ? event.type : event,\n			namespaces = hasOwn.call( event, \"namespace\" ) ? event.namespace.split(\".\") : [];\n\n		cur = tmp = elem = elem || document;\n\n		// Don\'t do events on text and comment nodes\n		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {\n			return;\n		}\n\n		// focus/blur morphs to focusin/out; ensure we\'re not firing them right now\n		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {\n			return;\n		}\n\n		if ( type.indexOf(\".\") >= 0 ) {\n			// Namespaced trigger; create a regexp to match event type in handle()\n			namespaces = type.split(\".\");\n			type = namespaces.shift();\n			namespaces.sort();\n		}\n		ontype = type.indexOf(\":\") < 0 && \"on\" + type;\n\n		// Caller can pass in a jQuery.Event object, Object, or just an event type string\n		event = event[ jQuery.expando ] ?\n			event :\n			new jQuery.Event( type, typeof event === \"object\" && event );\n\n		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)\n		event.isTrigger = onlyHandlers ? 2 : 3;\n		event.namespace = namespaces.join(\".\");\n		event.namespace_re = event.namespace ?\n			new RegExp( \"(^|\\\\.)\" + namespaces.join(\"\\\\.(?:.*\\\\.|)\") + \"(\\\\.|$)\" ) :\n			null;\n\n		// Clean up the event in case it is being reused\n		event.result = undefined;\n		if ( !event.target ) {\n			event.target = elem;\n		}\n\n		// Clone any incoming data and prepend the event, creating the handler arg list\n		data = data == null ?\n			[ event ] :\n			jQuery.makeArray( data, [ event ] );\n\n		// Allow special events to draw outside the lines\n		special = jQuery.event.special[ type ] || {};\n		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {\n			return;\n		}\n\n		// Determine event propagation path in advance, per W3C events spec (#9951)\n		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)\n		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {\n\n			bubbleType = special.delegateType || type;\n			if ( !rfocusMorph.test( bubbleType + type ) ) {\n				cur = cur.parentNode;\n			}\n			for ( ; cur; cur = cur.parentNode ) {\n				eventPath.push( cur );\n				tmp = cur;\n			}\n\n			// Only add window if we got to document (e.g., not plain obj or detached DOM)\n			if ( tmp === (elem.ownerDocument || document) ) {\n				eventPath.push( tmp.defaultView || tmp.parentWindow || window );\n			}\n		}\n\n		// Fire handlers on the event path\n		i = 0;\n		while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {\n\n			event.type = i > 1 ?\n				bubbleType :\n				special.bindType || type;\n\n			// jQuery handler\n			handle = ( data_priv.get( cur, \"events\" ) || {} )[ event.type ] && data_priv.get( cur, \"handle\" );\n			if ( handle ) {\n				handle.apply( cur, data );\n			}\n\n			// Native handler\n			handle = ontype && cur[ ontype ];\n			if ( handle && handle.apply && jQuery.acceptData( cur ) ) {\n				event.result = handle.apply( cur, data );\n				if ( event.result === false ) {\n					event.preventDefault();\n				}\n			}\n		}\n		event.type = type;\n\n		// If nobody prevented the default action, do it now\n		if ( !onlyHandlers && !event.isDefaultPrevented() ) {\n\n			if ( (!special._default || special._default.apply( eventPath.pop(), data ) === false) &&\n				jQuery.acceptData( elem ) ) {\n\n				// Call a native DOM method on the target with the same name name as the event.\n				// Don\'t do default actions on window, that\'s where global variables be (#6170)\n				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {\n\n					// Don\'t re-trigger an onFOO event when we call its FOO() method\n					tmp = elem[ ontype ];\n\n					if ( tmp ) {\n						elem[ ontype ] = null;\n					}\n\n					// Prevent re-triggering of the same event, since we already bubbled it above\n					jQuery.event.triggered = type;\n					elem[ type ]();\n					jQuery.event.triggered = undefined;\n\n					if ( tmp ) {\n						elem[ ontype ] = tmp;\n					}\n				}\n			}\n		}\n\n		return event.result;\n	},\n\n	dispatch: function( event ) {\n\n		// Make a writable jQuery.Event from the native event object\n		event = jQuery.event.fix( event );\n\n		var i, j, ret, matched, handleObj,\n			handlerQueue = [],\n			args = slice.call( arguments ),\n			handlers = ( data_priv.get( this, \"events\" ) || {} )[ event.type ] || [],\n			special = jQuery.event.special[ event.type ] || {};\n\n		// Use the fix-ed jQuery.Event rather than the (read-only) native event\n		args[0] = event;\n		event.delegateTarget = this;\n\n		// Call the preDispatch hook for the mapped type, and let it bail if desired\n		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {\n			return;\n		}\n\n		// Determine handlers\n		handlerQueue = jQuery.event.handlers.call( this, event, handlers );\n\n		// Run delegates first; they may want to stop propagation beneath us\n		i = 0;\n		while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {\n			event.currentTarget = matched.elem;\n\n			j = 0;\n			while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {\n\n				// Triggered event must either 1) have no namespace, or\n				// 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).\n				if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {\n\n					event.handleObj = handleObj;\n					event.data = handleObj.data;\n\n					ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )\n							.apply( matched.elem, args );\n\n					if ( ret !== undefined ) {\n						if ( (event.result = ret) === false ) {\n							event.preventDefault();\n							event.stopPropagation();\n						}\n					}\n				}\n			}\n		}\n\n		// Call the postDispatch hook for the mapped type\n		if ( special.postDispatch ) {\n			special.postDispatch.call( this, event );\n		}\n\n		return event.result;\n	},\n\n	handlers: function( event, handlers ) {\n		var i, matches, sel, handleObj,\n			handlerQueue = [],\n			delegateCount = handlers.delegateCount,\n			cur = event.target;\n\n		// Find delegate handlers\n		// Black-hole SVG <use> instance trees (#13180)\n		// Avoid non-left-click bubbling in Firefox (#3861)\n		if ( delegateCount && cur.nodeType && (!event.button || event.type !== \"click\") ) {\n\n			for ( ; cur !== this; cur = cur.parentNode || this ) {\n\n				// Don\'t process clicks on disabled elements (#6911, #8165, #11382, #11764)\n				if ( cur.disabled !== true || event.type !== \"click\" ) {\n					matches = [];\n					for ( i = 0; i < delegateCount; i++ ) {\n						handleObj = handlers[ i ];\n\n						// Don\'t conflict with Object.prototype properties (#13203)\n						sel = handleObj.selector + \" \";\n\n						if ( matches[ sel ] === undefined ) {\n							matches[ sel ] = handleObj.needsContext ?\n								jQuery( sel, this ).index( cur ) >= 0 :\n								jQuery.find( sel, this, null, [ cur ] ).length;\n						}\n						if ( matches[ sel ] ) {\n							matches.push( handleObj );\n						}\n					}\n					if ( matches.length ) {\n						handlerQueue.push({ elem: cur, handlers: matches });\n					}\n				}\n			}\n		}\n\n		// Add the remaining (directly-bound) handlers\n		if ( delegateCount < handlers.length ) {\n			handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });\n		}\n\n		return handlerQueue;\n	},\n\n	// Includes some event props shared by KeyEvent and MouseEvent\n	props: \"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which\".split(\" \"),\n\n	fixHooks: {},\n\n	keyHooks: {\n		props: \"char charCode key keyCode\".split(\" \"),\n		filter: function( event, original ) {\n\n			// Add which for key events\n			if ( event.which == null ) {\n				event.which = original.charCode != null ? original.charCode : original.keyCode;\n			}\n\n			return event;\n		}\n	},\n\n	mouseHooks: {\n		props: \"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement\".split(\" \"),\n		filter: function( event, original ) {\n			var eventDoc, doc, body,\n				button = original.button;\n\n			// Calculate pageX/Y if missing and clientX/Y available\n			if ( event.pageX == null && original.clientX != null ) {\n				eventDoc = event.target.ownerDocument || document;\n				doc = eventDoc.documentElement;\n				body = eventDoc.body;\n\n				event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );\n				event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );\n			}\n\n			// Add which for click: 1 === left; 2 === middle; 3 === right\n			// Note: button is not normalized, so don\'t use it\n			if ( !event.which && button !== undefined ) {\n				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );\n			}\n\n			return event;\n		}\n	},\n\n	fix: function( event ) {\n		if ( event[ jQuery.expando ] ) {\n			return event;\n		}\n\n		// Create a writable copy of the event object and normalize some properties\n		var i, prop, copy,\n			type = event.type,\n			originalEvent = event,\n			fixHook = this.fixHooks[ type ];\n\n		if ( !fixHook ) {\n			this.fixHooks[ type ] = fixHook =\n				rmouseEvent.test( type ) ? this.mouseHooks :\n				rkeyEvent.test( type ) ? this.keyHooks :\n				{};\n		}\n		copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;\n\n		event = new jQuery.Event( originalEvent );\n\n		i = copy.length;\n		while ( i-- ) {\n			prop = copy[ i ];\n			event[ prop ] = originalEvent[ prop ];\n		}\n\n		// Support: Cordova 2.5 (WebKit) (#13255)\n		// All events should have a target; Cordova deviceready doesn\'t\n		if ( !event.target ) {\n			event.target = document;\n		}\n\n		// Support: Safari 6.0+, Chrome < 28\n		// Target should not be a text node (#504, #13143)\n		if ( event.target.nodeType === 3 ) {\n			event.target = event.target.parentNode;\n		}\n\n		return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;\n	},\n\n	special: {\n		load: {\n			// Prevent triggered image.load events from bubbling to window.load\n			noBubble: true\n		},\n		focus: {\n			// Fire native event if possible so blur/focus sequence is correct\n			trigger: function() {\n				if ( this !== safeActiveElement() && this.focus ) {\n					this.focus();\n					return false;\n				}\n			},\n			delegateType: \"focusin\"\n		},\n		blur: {\n			trigger: function() {\n				if ( this === safeActiveElement() && this.blur ) {\n					this.blur();\n					return false;\n				}\n			},\n			delegateType: \"focusout\"\n		},\n		click: {\n			// For checkbox, fire native event so checked state will be right\n			trigger: function() {\n				if ( this.type === \"checkbox\" && this.click && jQuery.nodeName( this, \"input\" ) ) {\n					this.click();\n					return false;\n				}\n			},\n\n			// For cross-browser consistency, don\'t fire native .click() on links\n			_default: function( event ) {\n				return jQuery.nodeName( event.target, \"a\" );\n			}\n		},\n\n		beforeunload: {\n			postDispatch: function( event ) {\n\n				// Support: Firefox 20+\n				// Firefox doesn\'t alert if the returnValue field is not set.\n				if ( event.result !== undefined && event.originalEvent ) {\n					event.originalEvent.returnValue = event.result;\n				}\n			}\n		}\n	},\n\n	simulate: function( type, elem, event, bubble ) {\n		// Piggyback on a donor event to simulate a different one.\n		// Fake originalEvent to avoid donor\'s stopPropagation, but if the\n		// simulated event prevents default then we do the same on the donor.\n		var e = jQuery.extend(\n			new jQuery.Event(),\n			event,\n			{\n				type: type,\n				isSimulated: true,\n				originalEvent: {}\n			}\n		);\n		if ( bubble ) {\n			jQuery.event.trigger( e, null, elem );\n		} else {\n			jQuery.event.dispatch.call( elem, e );\n		}\n		if ( e.isDefaultPrevented() ) {\n			event.preventDefault();\n		}\n	}\n};\n\njQuery.removeEvent = function( elem, type, handle ) {\n	if ( elem.removeEventListener ) {\n		elem.removeEventListener( type, handle, false );\n	}\n};\n\njQuery.Event = function( src, props ) {\n	// Allow instantiation without the \'new\' keyword\n	if ( !(this instanceof jQuery.Event) ) {\n		return new jQuery.Event( src, props );\n	}\n\n	// Event object\n	if ( src && src.type ) {\n		this.originalEvent = src;\n		this.type = src.type;\n\n		// Events bubbling up the document may have been marked as prevented\n		// by a handler lower down the tree; reflect the correct value.\n		this.isDefaultPrevented = src.defaultPrevented ||\n				src.defaultPrevented === undefined &&\n				// Support: Android < 4.0\n				src.returnValue === false ?\n			returnTrue :\n			returnFalse;\n\n	// Event type\n	} else {\n		this.type = src;\n	}\n\n	// Put explicitly provided properties onto the event object\n	if ( props ) {\n		jQuery.extend( this, props );\n	}\n\n	// Create a timestamp if incoming event doesn\'t have one\n	this.timeStamp = src && src.timeStamp || jQuery.now();\n\n	// Mark it as fixed\n	this[ jQuery.expando ] = true;\n};\n\n// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding\n// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html\njQuery.Event.prototype = {\n	isDefaultPrevented: returnFalse,\n	isPropagationStopped: returnFalse,\n	isImmediatePropagationStopped: returnFalse,\n\n	preventDefault: function() {\n		var e = this.originalEvent;\n\n		this.isDefaultPrevented = returnTrue;\n\n		if ( e && e.preventDefault ) {\n			e.preventDefault();\n		}\n	},\n	stopPropagation: function() {\n		var e = this.originalEvent;\n\n		this.isPropagationStopped = returnTrue;\n\n		if ( e && e.stopPropagation ) {\n			e.stopPropagation();\n		}\n	},\n	stopImmediatePropagation: function() {\n		var e = this.originalEvent;\n\n		this.isImmediatePropagationStopped = returnTrue;\n\n		if ( e && e.stopImmediatePropagation ) {\n			e.stopImmediatePropagation();\n		}\n\n		this.stopPropagation();\n	}\n};\n\n// Create mouseenter/leave events using mouseover/out and event-time checks\n// Support: Chrome 15+\njQuery.each({\n	mouseenter: \"mouseover\",\n	mouseleave: \"mouseout\",\n	pointerenter: \"pointerover\",\n	pointerleave: \"pointerout\"\n}, function( orig, fix ) {\n	jQuery.event.special[ orig ] = {\n		delegateType: fix,\n		bindType: fix,\n\n		handle: function( event ) {\n			var ret,\n				target = this,\n				related = event.relatedTarget,\n				handleObj = event.handleObj;\n\n			// For mousenter/leave call the handler if related is outside the target.\n			// NB: No relatedTarget if the mouse left/entered the browser window\n			if ( !related || (related !== target && !jQuery.contains( target, related )) ) {\n				event.type = handleObj.origType;\n				ret = handleObj.handler.apply( this, arguments );\n				event.type = fix;\n			}\n			return ret;\n		}\n	};\n});\n\n// Create \"bubbling\" focus and blur events\n// Support: Firefox, Chrome, Safari\nif ( !support.focusinBubbles ) {\n	jQuery.each({ focus: \"focusin\", blur: \"focusout\" }, function( orig, fix ) {\n\n		// Attach a single capturing handler on the document while someone wants focusin/focusout\n		var handler = function( event ) {\n				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );\n			};\n\n		jQuery.event.special[ fix ] = {\n			setup: function() {\n				var doc = this.ownerDocument || this,\n					attaches = data_priv.access( doc, fix );\n\n				if ( !attaches ) {\n					doc.addEventListener( orig, handler, true );\n				}\n				data_priv.access( doc, fix, ( attaches || 0 ) + 1 );\n			},\n			teardown: function() {\n				var doc = this.ownerDocument || this,\n					attaches = data_priv.access( doc, fix ) - 1;\n\n				if ( !attaches ) {\n					doc.removeEventListener( orig, handler, true );\n					data_priv.remove( doc, fix );\n\n				} else {\n					data_priv.access( doc, fix, attaches );\n				}\n			}\n		};\n	});\n}\n\njQuery.fn.extend({\n\n	on: function( types, selector, data, fn, /*INTERNAL*/ one ) {\n		var origFn, type;\n\n		// Types can be a map of types/handlers\n		if ( typeof types === \"object\" ) {\n			// ( types-Object, selector, data )\n			if ( typeof selector !== \"string\" ) {\n				// ( types-Object, data )\n				data = data || selector;\n				selector = undefined;\n			}\n			for ( type in types ) {\n				this.on( type, selector, data, types[ type ], one );\n			}\n			return this;\n		}\n\n		if ( data == null && fn == null ) {\n			// ( types, fn )\n			fn = selector;\n			data = selector = undefined;\n		} else if ( fn == null ) {\n			if ( typeof selector === \"string\" ) {\n				// ( types, selector, fn )\n				fn = data;\n				data = undefined;\n			} else {\n				// ( types, data, fn )\n				fn = data;\n				data = selector;\n				selector = undefined;\n			}\n		}\n		if ( fn === false ) {\n			fn = returnFalse;\n		} else if ( !fn ) {\n			return this;\n		}\n\n		if ( one === 1 ) {\n			origFn = fn;\n			fn = function( event ) {\n				// Can use an empty set, since event contains the info\n				jQuery().off( event );\n				return origFn.apply( this, arguments );\n			};\n			// Use same guid so caller can remove using origFn\n			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );\n		}\n		return this.each( function() {\n			jQuery.event.add( this, types, fn, data, selector );\n		});\n	},\n	one: function( types, selector, data, fn ) {\n		return this.on( types, selector, data, fn, 1 );\n	},\n	off: function( types, selector, fn ) {\n		var handleObj, type;\n		if ( types && types.preventDefault && types.handleObj ) {\n			// ( event )  dispatched jQuery.Event\n			handleObj = types.handleObj;\n			jQuery( types.delegateTarget ).off(\n				handleObj.namespace ? handleObj.origType + \".\" + handleObj.namespace : handleObj.origType,\n				handleObj.selector,\n				handleObj.handler\n			);\n			return this;\n		}\n		if ( typeof types === \"object\" ) {\n			// ( types-object [, selector] )\n			for ( type in types ) {\n				this.off( type, selector, types[ type ] );\n			}\n			return this;\n		}\n		if ( selector === false || typeof selector === \"function\" ) {\n			// ( types [, fn] )\n			fn = selector;\n			selector = undefined;\n		}\n		if ( fn === false ) {\n			fn = returnFalse;\n		}\n		return this.each(function() {\n			jQuery.event.remove( this, types, fn, selector );\n		});\n	},\n\n	trigger: function( type, data ) {\n		return this.each(function() {\n			jQuery.event.trigger( type, data, this );\n		});\n	},\n	triggerHandler: function( type, data ) {\n		var elem = this[0];\n		if ( elem ) {\n			return jQuery.event.trigger( type, data, elem, true );\n		}\n	}\n});\n\n\nvar\n	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\\w:]+)[^>]*)\\/>/gi,\n	rtagName = /<([\\w:]+)/,\n	rhtml = /<|&#?\\w+;/,\n	rnoInnerhtml = /<(?:script|style|link)/i,\n	// checked=\"checked\" or checked\n	rchecked = /checked\\s*(?:[^=]|=\\s*.checked.)/i,\n	rscriptType = /^$|\\/(?:java|ecma)script/i,\n	rscriptTypeMasked = /^true\\/(.*)/,\n	rcleanScript = /^\\s*<!(?:\\[CDATA\\[|--)|(?:\\]\\]|--)>\\s*$/g,\n\n	// We have to close these tags to support XHTML (#13200)\n	wrapMap = {\n\n		// Support: IE 9\n		option: [ 1, \"<select multiple=\'multiple\'>\", \"</select>\" ],\n\n		thead: [ 1, \"<table>\", \"</table>\" ],\n		col: [ 2, \"<table><colgroup>\", \"</colgroup></table>\" ],\n		tr: [ 2, \"<table><tbody>\", \"</tbody></table>\" ],\n		td: [ 3, \"<table><tbody><tr>\", \"</tr></tbody></table>\" ],\n\n		_default: [ 0, \"\", \"\" ]\n	};\n\n// Support: IE 9\nwrapMap.optgroup = wrapMap.option;\n\nwrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;\nwrapMap.th = wrapMap.td;\n\n// Support: 1.x compatibility\n// Manipulating tables requires a tbody\nfunction manipulationTarget( elem, content ) {\n	return jQuery.nodeName( elem, \"table\" ) &&\n		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, \"tr\" ) ?\n\n		elem.getElementsByTagName(\"tbody\")[0] ||\n			elem.appendChild( elem.ownerDocument.createElement(\"tbody\") ) :\n		elem;\n}\n\n// Replace/restore the type attribute of script elements for safe DOM manipulation\nfunction disableScript( elem ) {\n	elem.type = (elem.getAttribute(\"type\") !== null) + \"/\" + elem.type;\n	return elem;\n}\nfunction restoreScript( elem ) {\n	var match = rscriptTypeMasked.exec( elem.type );\n\n	if ( match ) {\n		elem.type = match[ 1 ];\n	} else {\n		elem.removeAttribute(\"type\");\n	}\n\n	return elem;\n}\n\n// Mark scripts as having already been evaluated\nfunction setGlobalEval( elems, refElements ) {\n	var i = 0,\n		l = elems.length;\n\n	for ( ; i < l; i++ ) {\n		data_priv.set(\n			elems[ i ], \"globalEval\", !refElements || data_priv.get( refElements[ i ], \"globalEval\" )\n		);\n	}\n}\n\nfunction cloneCopyEvent( src, dest ) {\n	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;\n\n	if ( dest.nodeType !== 1 ) {\n		return;\n	}\n\n	// 1. Copy private data: events, handlers, etc.\n	if ( data_priv.hasData( src ) ) {\n		pdataOld = data_priv.access( src );\n		pdataCur = data_priv.set( dest, pdataOld );\n		events = pdataOld.events;\n\n		if ( events ) {\n			delete pdataCur.handle;\n			pdataCur.events = {};\n\n			for ( type in events ) {\n				for ( i = 0, l = events[ type ].length; i < l; i++ ) {\n					jQuery.event.add( dest, type, events[ type ][ i ] );\n				}\n			}\n		}\n	}\n\n	// 2. Copy user data\n	if ( data_user.hasData( src ) ) {\n		udataOld = data_user.access( src );\n		udataCur = jQuery.extend( {}, udataOld );\n\n		data_user.set( dest, udataCur );\n	}\n}\n\nfunction getAll( context, tag ) {\n	var ret = context.getElementsByTagName ? context.getElementsByTagName( tag || \"*\" ) :\n			context.querySelectorAll ? context.querySelectorAll( tag || \"*\" ) :\n			[];\n\n	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?\n		jQuery.merge( [ context ], ret ) :\n		ret;\n}\n\n// Support: IE >= 9\nfunction fixInput( src, dest ) {\n	var nodeName = dest.nodeName.toLowerCase();\n\n	// Fails to persist the checked state of a cloned checkbox or radio button.\n	if ( nodeName === \"input\" && rcheckableType.test( src.type ) ) {\n		dest.checked = src.checked;\n\n	// Fails to return the selected option to the default selected state when cloning options\n	} else if ( nodeName === \"input\" || nodeName === \"textarea\" ) {\n		dest.defaultValue = src.defaultValue;\n	}\n}\n\njQuery.extend({\n	clone: function( elem, dataAndEvents, deepDataAndEvents ) {\n		var i, l, srcElements, destElements,\n			clone = elem.cloneNode( true ),\n			inPage = jQuery.contains( elem.ownerDocument, elem );\n\n		// Support: IE >= 9\n		// Fix Cloning issues\n		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&\n				!jQuery.isXMLDoc( elem ) ) {\n\n			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2\n			destElements = getAll( clone );\n			srcElements = getAll( elem );\n\n			for ( i = 0, l = srcElements.length; i < l; i++ ) {\n				fixInput( srcElements[ i ], destElements[ i ] );\n			}\n		}\n\n		// Copy the events from the original to the clone\n		if ( dataAndEvents ) {\n			if ( deepDataAndEvents ) {\n				srcElements = srcElements || getAll( elem );\n				destElements = destElements || getAll( clone );\n\n				for ( i = 0, l = srcElements.length; i < l; i++ ) {\n					cloneCopyEvent( srcElements[ i ], destElements[ i ] );\n				}\n			} else {\n				cloneCopyEvent( elem, clone );\n			}\n		}\n\n		// Preserve script evaluation history\n		destElements = getAll( clone, \"script\" );\n		if ( destElements.length > 0 ) {\n			setGlobalEval( destElements, !inPage && getAll( elem, \"script\" ) );\n		}\n\n		// Return the cloned set\n		return clone;\n	},\n\n	buildFragment: function( elems, context, scripts, selection ) {\n		var elem, tmp, tag, wrap, contains, j,\n			fragment = context.createDocumentFragment(),\n			nodes = [],\n			i = 0,\n			l = elems.length;\n\n		for ( ; i < l; i++ ) {\n			elem = elems[ i ];\n\n			if ( elem || elem === 0 ) {\n\n				// Add nodes directly\n				if ( jQuery.type( elem ) === \"object\" ) {\n					// Support: QtWebKit\n					// jQuery.merge because push.apply(_, arraylike) throws\n					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );\n\n				// Convert non-html into a text node\n				} else if ( !rhtml.test( elem ) ) {\n					nodes.push( context.createTextNode( elem ) );\n\n				// Convert html into DOM nodes\n				} else {\n					tmp = tmp || fragment.appendChild( context.createElement(\"div\") );\n\n					// Deserialize a standard representation\n					tag = ( rtagName.exec( elem ) || [ \"\", \"\" ] )[ 1 ].toLowerCase();\n					wrap = wrapMap[ tag ] || wrapMap._default;\n					tmp.innerHTML = wrap[ 1 ] + elem.replace( rxhtmlTag, \"<$1></$2>\" ) + wrap[ 2 ];\n\n					// Descend through wrappers to the right content\n					j = wrap[ 0 ];\n					while ( j-- ) {\n						tmp = tmp.lastChild;\n					}\n\n					// Support: QtWebKit\n					// jQuery.merge because push.apply(_, arraylike) throws\n					jQuery.merge( nodes, tmp.childNodes );\n\n					// Remember the top-level container\n					tmp = fragment.firstChild;\n\n					// Fixes #12346\n					// Support: Webkit, IE\n					tmp.textContent = \"\";\n				}\n			}\n		}\n\n		// Remove wrapper from fragment\n		fragment.textContent = \"\";\n\n		i = 0;\n		while ( (elem = nodes[ i++ ]) ) {\n\n			// #4087 - If origin and destination elements are the same, and this is\n			// that element, do not do anything\n			if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {\n				continue;\n			}\n\n			contains = jQuery.contains( elem.ownerDocument, elem );\n\n			// Append to fragment\n			tmp = getAll( fragment.appendChild( elem ), \"script\" );\n\n			// Preserve script evaluation history\n			if ( contains ) {\n				setGlobalEval( tmp );\n			}\n\n			// Capture executables\n			if ( scripts ) {\n				j = 0;\n				while ( (elem = tmp[ j++ ]) ) {\n					if ( rscriptType.test( elem.type || \"\" ) ) {\n						scripts.push( elem );\n					}\n				}\n			}\n		}\n\n		return fragment;\n	},\n\n	cleanData: function( elems ) {\n		var data, elem, type, key,\n			special = jQuery.event.special,\n			i = 0;\n\n		for ( ; (elem = elems[ i ]) !== undefined; i++ ) {\n			if ( jQuery.acceptData( elem ) ) {\n				key = elem[ data_priv.expando ];\n\n				if ( key && (data = data_priv.cache[ key ]) ) {\n					if ( data.events ) {\n						for ( type in data.events ) {\n							if ( special[ type ] ) {\n								jQuery.event.remove( elem, type );\n\n							// This is a shortcut to avoid jQuery.event.remove\'s overhead\n							} else {\n								jQuery.removeEvent( elem, type, data.handle );\n							}\n						}\n					}\n					if ( data_priv.cache[ key ] ) {\n						// Discard any remaining `private` data\n						delete data_priv.cache[ key ];\n					}\n				}\n			}\n			// Discard any remaining `user` data\n			delete data_user.cache[ elem[ data_user.expando ] ];\n		}\n	}\n});\n\njQuery.fn.extend({\n	text: function( value ) {\n		return access( this, function( value ) {\n			return value === undefined ?\n				jQuery.text( this ) :\n				this.empty().each(function() {\n					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {\n						this.textContent = value;\n					}\n				});\n		}, null, value, arguments.length );\n	},\n\n	append: function() {\n		return this.domManip( arguments, function( elem ) {\n			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {\n				var target = manipulationTarget( this, elem );\n				target.appendChild( elem );\n			}\n		});\n	},\n\n	prepend: function() {\n		return this.domManip( arguments, function( elem ) {\n			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {\n				var target = manipulationTarget( this, elem );\n				target.insertBefore( elem, target.firstChild );\n			}\n		});\n	},\n\n	before: function() {\n		return this.domManip( arguments, function( elem ) {\n			if ( this.parentNode ) {\n				this.parentNode.insertBefore( elem, this );\n			}\n		});\n	},\n\n	after: function() {\n		return this.domManip( arguments, function( elem ) {\n			if ( this.parentNode ) {\n				this.parentNode.insertBefore( elem, this.nextSibling );\n			}\n		});\n	},\n\n	remove: function( selector, keepData /* Internal Use Only */ ) {\n		var elem,\n			elems = selector ? jQuery.filter( selector, this ) : this,\n			i = 0;\n\n		for ( ; (elem = elems[i]) != null; i++ ) {\n			if ( !keepData && elem.nodeType === 1 ) {\n				jQuery.cleanData( getAll( elem ) );\n			}\n\n			if ( elem.parentNode ) {\n				if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {\n					setGlobalEval( getAll( elem, \"script\" ) );\n				}\n				elem.parentNode.removeChild( elem );\n			}\n		}\n\n		return this;\n	},\n\n	empty: function() {\n		var elem,\n			i = 0;\n\n		for ( ; (elem = this[i]) != null; i++ ) {\n			if ( elem.nodeType === 1 ) {\n\n				// Prevent memory leaks\n				jQuery.cleanData( getAll( elem, false ) );\n\n				// Remove any remaining nodes\n				elem.textContent = \"\";\n			}\n		}\n\n		return this;\n	},\n\n	clone: function( dataAndEvents, deepDataAndEvents ) {\n		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;\n		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;\n\n		return this.map(function() {\n			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );\n		});\n	},\n\n	html: function( value ) {\n		return access( this, function( value ) {\n			var elem = this[ 0 ] || {},\n				i = 0,\n				l = this.length;\n\n			if ( value === undefined && elem.nodeType === 1 ) {\n				return elem.innerHTML;\n			}\n\n			// See if we can take a shortcut and just use innerHTML\n			if ( typeof value === \"string\" && !rnoInnerhtml.test( value ) &&\n				!wrapMap[ ( rtagName.exec( value ) || [ \"\", \"\" ] )[ 1 ].toLowerCase() ] ) {\n\n				value = value.replace( rxhtmlTag, \"<$1></$2>\" );\n\n				try {\n					for ( ; i < l; i++ ) {\n						elem = this[ i ] || {};\n\n						// Remove element nodes and prevent memory leaks\n						if ( elem.nodeType === 1 ) {\n							jQuery.cleanData( getAll( elem, false ) );\n							elem.innerHTML = value;\n						}\n					}\n\n					elem = 0;\n\n				// If using innerHTML throws an exception, use the fallback method\n				} catch( e ) {}\n			}\n\n			if ( elem ) {\n				this.empty().append( value );\n			}\n		}, null, value, arguments.length );\n	},\n\n	replaceWith: function() {\n		var arg = arguments[ 0 ];\n\n		// Make the changes, replacing each context element with the new content\n		this.domManip( arguments, function( elem ) {\n			arg = this.parentNode;\n\n			jQuery.cleanData( getAll( this ) );\n\n			if ( arg ) {\n				arg.replaceChild( elem, this );\n			}\n		});\n\n		// Force removal if there was no new content (e.g., from empty arguments)\n		return arg && (arg.length || arg.nodeType) ? this : this.remove();\n	},\n\n	detach: function( selector ) {\n		return this.remove( selector, true );\n	},\n\n	domManip: function( args, callback ) {\n\n		// Flatten any nested arrays\n		args = concat.apply( [], args );\n\n		var fragment, first, scripts, hasScripts, node, doc,\n			i = 0,\n			l = this.length,\n			set = this,\n			iNoClone = l - 1,\n			value = args[ 0 ],\n			isFunction = jQuery.isFunction( value );\n\n		// We can\'t cloneNode fragments that contain checked, in WebKit\n		if ( isFunction ||\n				( l > 1 && typeof value === \"string\" &&\n					!support.checkClone && rchecked.test( value ) ) ) {\n			return this.each(function( index ) {\n				var self = set.eq( index );\n				if ( isFunction ) {\n					args[ 0 ] = value.call( this, index, self.html() );\n				}\n				self.domManip( args, callback );\n			});\n		}\n\n		if ( l ) {\n			fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, this );\n			first = fragment.firstChild;\n\n			if ( fragment.childNodes.length === 1 ) {\n				fragment = first;\n			}\n\n			if ( first ) {\n				scripts = jQuery.map( getAll( fragment, \"script\" ), disableScript );\n				hasScripts = scripts.length;\n\n				// Use the original fragment for the last item instead of the first because it can end up\n				// being emptied incorrectly in certain situations (#8070).\n				for ( ; i < l; i++ ) {\n					node = fragment;\n\n					if ( i !== iNoClone ) {\n						node = jQuery.clone( node, true, true );\n\n						// Keep references to cloned scripts for later restoration\n						if ( hasScripts ) {\n							// Support: QtWebKit\n							// jQuery.merge because push.apply(_, arraylike) throws\n							jQuery.merge( scripts, getAll( node, \"script\" ) );\n						}\n					}\n\n					callback.call( this[ i ], node, i );\n				}\n\n				if ( hasScripts ) {\n					doc = scripts[ scripts.length - 1 ].ownerDocument;\n\n					// Reenable scripts\n					jQuery.map( scripts, restoreScript );\n\n					// Evaluate executable scripts on first document insertion\n					for ( i = 0; i < hasScripts; i++ ) {\n						node = scripts[ i ];\n						if ( rscriptType.test( node.type || \"\" ) &&\n							!data_priv.access( node, \"globalEval\" ) && jQuery.contains( doc, node ) ) {\n\n							if ( node.src ) {\n								// Optional AJAX dependency, but won\'t run scripts if not present\n								if ( jQuery._evalUrl ) {\n									jQuery._evalUrl( node.src );\n								}\n							} else {\n								jQuery.globalEval( node.textContent.replace( rcleanScript, \"\" ) );\n							}\n						}\n					}\n				}\n			}\n		}\n\n		return this;\n	}\n});\n\njQuery.each({\n	appendTo: \"append\",\n	prependTo: \"prepend\",\n	insertBefore: \"before\",\n	insertAfter: \"after\",\n	replaceAll: \"replaceWith\"\n}, function( name, original ) {\n	jQuery.fn[ name ] = function( selector ) {\n		var elems,\n			ret = [],\n			insert = jQuery( selector ),\n			last = insert.length - 1,\n			i = 0;\n\n		for ( ; i <= last; i++ ) {\n			elems = i === last ? this : this.clone( true );\n			jQuery( insert[ i ] )[ original ]( elems );\n\n			// Support: QtWebKit\n			// .get() because push.apply(_, arraylike) throws\n			push.apply( ret, elems.get() );\n		}\n\n		return this.pushStack( ret );\n	};\n});\n\n\nvar iframe,\n	elemdisplay = {};\n\n/**\n * Retrieve the actual display of a element\n * @param {String} name nodeName of the element\n * @param {Object} doc Document object\n */\n// Called only from within defaultDisplay\nfunction actualDisplay( name, doc ) {\n	var style,\n		elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),\n\n		// getDefaultComputedStyle might be reliably used only on attached element\n		display = window.getDefaultComputedStyle && ( style = window.getDefaultComputedStyle( elem[ 0 ] ) ) ?\n\n			// Use of this method is a temporary fix (more like optmization) until something better comes along,\n			// since it was removed from specification and supported only in FF\n			style.display : jQuery.css( elem[ 0 ], \"display\" );\n\n	// We don\'t have any data stored on the element,\n	// so use \"detach\" method as fast way to get rid of the element\n	elem.detach();\n\n	return display;\n}\n\n/**\n * Try to determine the default display value of an element\n * @param {String} nodeName\n */\nfunction defaultDisplay( nodeName ) {\n	var doc = document,\n		display = elemdisplay[ nodeName ];\n\n	if ( !display ) {\n		display = actualDisplay( nodeName, doc );\n\n		// If the simple way fails, read from inside an iframe\n		if ( display === \"none\" || !display ) {\n\n			// Use the already-created iframe if possible\n			iframe = (iframe || jQuery( \"<iframe frameborder=\'0\' width=\'0\' height=\'0\'/>\" )).appendTo( doc.documentElement );\n\n			// Always write a new HTML skeleton so Webkit and Firefox don\'t choke on reuse\n			doc = iframe[ 0 ].contentDocument;\n\n			// Support: IE\n			doc.write();\n			doc.close();\n\n			display = actualDisplay( nodeName, doc );\n			iframe.detach();\n		}\n\n		// Store the correct default display\n		elemdisplay[ nodeName ] = display;\n	}\n\n	return display;\n}\nvar rmargin = (/^margin/);\n\nvar rnumnonpx = new RegExp( \"^(\" + pnum + \")(?!px)[a-z%]+$\", \"i\" );\n\nvar getStyles = function( elem ) {\n		return elem.ownerDocument.defaultView.getComputedStyle( elem, null );\n	};\n\n\n\nfunction curCSS( elem, name, computed ) {\n	var width, minWidth, maxWidth, ret,\n		style = elem.style;\n\n	computed = computed || getStyles( elem );\n\n	// Support: IE9\n	// getPropertyValue is only needed for .css(\'filter\') in IE9, see #12537\n	if ( computed ) {\n		ret = computed.getPropertyValue( name ) || computed[ name ];\n	}\n\n	if ( computed ) {\n\n		if ( ret === \"\" && !jQuery.contains( elem.ownerDocument, elem ) ) {\n			ret = jQuery.style( elem, name );\n		}\n\n		// Support: iOS < 6\n		// A tribute to the \"awesome hack by Dean Edwards\"\n		// iOS < 6 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels\n		// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values\n		if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {\n\n			// Remember the original values\n			width = style.width;\n			minWidth = style.minWidth;\n			maxWidth = style.maxWidth;\n\n			// Put in the new values to get a computed value out\n			style.minWidth = style.maxWidth = style.width = ret;\n			ret = computed.width;\n\n			// Revert the changed values\n			style.width = width;\n			style.minWidth = minWidth;\n			style.maxWidth = maxWidth;\n		}\n	}\n\n	return ret !== undefined ?\n		// Support: IE\n		// IE returns zIndex value as an integer.\n		ret + \"\" :\n		ret;\n}\n\n\nfunction addGetHookIf( conditionFn, hookFn ) {\n	// Define the hook, we\'ll check on the first run if it\'s really needed.\n	return {\n		get: function() {\n			if ( conditionFn() ) {\n				// Hook not needed (or it\'s not possible to use it due to missing dependency),\n				// remove it.\n				// Since there are no other hooks for marginRight, remove the whole object.\n				delete this.get;\n				return;\n			}\n\n			// Hook needed; redefine it so that the support test is not executed again.\n\n			return (this.get = hookFn).apply( this, arguments );\n		}\n	};\n}\n\n\n(function() {\n	var pixelPositionVal, boxSizingReliableVal,\n		docElem = document.documentElement,\n		container = document.createElement( \"div\" ),\n		div = document.createElement( \"div\" );\n\n	if ( !div.style ) {\n		return;\n	}\n\n	div.style.backgroundClip = \"content-box\";\n	div.cloneNode( true ).style.backgroundClip = \"\";\n	support.clearCloneStyle = div.style.backgroundClip === \"content-box\";\n\n	container.style.cssText = \"border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;\" +\n		\"position:absolute\";\n	container.appendChild( div );\n\n	// Executing both pixelPosition & boxSizingReliable tests require only one layout\n	// so they\'re executed at the same time to save the second computation.\n	function computePixelPositionAndBoxSizingReliable() {\n		div.style.cssText =\n			// Support: Firefox<29, Android 2.3\n			// Vendor-prefix box-sizing\n			\"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;\" +\n			\"box-sizing:border-box;display:block;margin-top:1%;top:1%;\" +\n			\"border:1px;padding:1px;width:4px;position:absolute\";\n		div.innerHTML = \"\";\n		docElem.appendChild( container );\n\n		var divStyle = window.getComputedStyle( div, null );\n		pixelPositionVal = divStyle.top !== \"1%\";\n		boxSizingReliableVal = divStyle.width === \"4px\";\n\n		docElem.removeChild( container );\n	}\n\n	// Support: node.js jsdom\n	// Don\'t assume that getComputedStyle is a property of the global object\n	if ( window.getComputedStyle ) {\n		jQuery.extend( support, {\n			pixelPosition: function() {\n				// This test is executed only once but we still do memoizing\n				// since we can use the boxSizingReliable pre-computing.\n				// No need to check if the test was already performed, though.\n				computePixelPositionAndBoxSizingReliable();\n				return pixelPositionVal;\n			},\n			boxSizingReliable: function() {\n				if ( boxSizingReliableVal == null ) {\n					computePixelPositionAndBoxSizingReliable();\n				}\n				return boxSizingReliableVal;\n			},\n			reliableMarginRight: function() {\n				// Support: Android 2.3\n				// Check if div with explicit width and no margin-right incorrectly\n				// gets computed margin-right based on width of container. (#3333)\n				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right\n				// This support function is only executed once so no memoizing is needed.\n				var ret,\n					marginDiv = div.appendChild( document.createElement( \"div\" ) );\n\n				// Reset CSS: box-sizing; display; margin; border; padding\n				marginDiv.style.cssText = div.style.cssText =\n					// Support: Firefox<29, Android 2.3\n					// Vendor-prefix box-sizing\n					\"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;\" +\n					\"box-sizing:content-box;display:block;margin:0;border:0;padding:0\";\n				marginDiv.style.marginRight = marginDiv.style.width = \"0\";\n				div.style.width = \"1px\";\n				docElem.appendChild( container );\n\n				ret = !parseFloat( window.getComputedStyle( marginDiv, null ).marginRight );\n\n				docElem.removeChild( container );\n\n				return ret;\n			}\n		});\n	}\n})();\n\n\n// A method for quickly swapping in/out CSS properties to get correct calculations.\njQuery.swap = function( elem, options, callback, args ) {\n	var ret, name,\n		old = {};\n\n	// Remember the old values, and insert the new ones\n	for ( name in options ) {\n		old[ name ] = elem.style[ name ];\n		elem.style[ name ] = options[ name ];\n	}\n\n	ret = callback.apply( elem, args || [] );\n\n	// Revert the old values\n	for ( name in options ) {\n		elem.style[ name ] = old[ name ];\n	}\n\n	return ret;\n};\n\n\nvar\n	// swappable if display is none or starts with table except \"table\", \"table-cell\", or \"table-caption\"\n	// see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display\n	rdisplayswap = /^(none|table(?!-c[ea]).+)/,\n	rnumsplit = new RegExp( \"^(\" + pnum + \")(.*)$\", \"i\" ),\n	rrelNum = new RegExp( \"^([+-])=(\" + pnum + \")\", \"i\" ),\n\n	cssShow = { position: \"absolute\", visibility: \"hidden\", display: \"block\" },\n	cssNormalTransform = {\n		letterSpacing: \"0\",\n		fontWeight: \"400\"\n	},\n\n	cssPrefixes = [ \"Webkit\", \"O\", \"Moz\", \"ms\" ];\n\n// return a css property mapped to a potentially vendor prefixed property\nfunction vendorPropName( style, name ) {\n\n	// shortcut for names that are not vendor prefixed\n	if ( name in style ) {\n		return name;\n	}\n\n	// check for vendor prefixed names\n	var capName = name[0].toUpperCase() + name.slice(1),\n		origName = name,\n		i = cssPrefixes.length;\n\n	while ( i-- ) {\n		name = cssPrefixes[ i ] + capName;\n		if ( name in style ) {\n			return name;\n		}\n	}\n\n	return origName;\n}\n\nfunction setPositiveNumber( elem, value, subtract ) {\n	var matches = rnumsplit.exec( value );\n	return matches ?\n		// Guard against undefined \"subtract\", e.g., when used as in cssHooks\n		Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || \"px\" ) :\n		value;\n}\n\nfunction augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {\n	var i = extra === ( isBorderBox ? \"border\" : \"content\" ) ?\n		// If we already have the right measurement, avoid augmentation\n		4 :\n		// Otherwise initialize for horizontal or vertical properties\n		name === \"width\" ? 1 : 0,\n\n		val = 0;\n\n	for ( ; i < 4; i += 2 ) {\n		// both box models exclude margin, so add it if we want it\n		if ( extra === \"margin\" ) {\n			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );\n		}\n\n		if ( isBorderBox ) {\n			// border-box includes padding, so remove it if we want content\n			if ( extra === \"content\" ) {\n				val -= jQuery.css( elem, \"padding\" + cssExpand[ i ], true, styles );\n			}\n\n			// at this point, extra isn\'t border nor margin, so remove border\n			if ( extra !== \"margin\" ) {\n				val -= jQuery.css( elem, \"border\" + cssExpand[ i ] + \"Width\", true, styles );\n			}\n		} else {\n			// at this point, extra isn\'t content, so add padding\n			val += jQuery.css( elem, \"padding\" + cssExpand[ i ], true, styles );\n\n			// at this point, extra isn\'t content nor padding, so add border\n			if ( extra !== \"padding\" ) {\n				val += jQuery.css( elem, \"border\" + cssExpand[ i ] + \"Width\", true, styles );\n			}\n		}\n	}\n\n	return val;\n}\n\nfunction getWidthOrHeight( elem, name, extra ) {\n\n	// Start with offset property, which is equivalent to the border-box value\n	var valueIsBorderBox = true,\n		val = name === \"width\" ? elem.offsetWidth : elem.offsetHeight,\n		styles = getStyles( elem ),\n		isBorderBox = jQuery.css( elem, \"boxSizing\", false, styles ) === \"border-box\";\n\n	// some non-html elements return undefined for offsetWidth, so check for null/undefined\n	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285\n	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668\n	if ( val <= 0 || val == null ) {\n		// Fall back to computed then uncomputed css if necessary\n		val = curCSS( elem, name, styles );\n		if ( val < 0 || val == null ) {\n			val = elem.style[ name ];\n		}\n\n		// Computed unit is not pixels. Stop here and return.\n		if ( rnumnonpx.test(val) ) {\n			return val;\n		}\n\n		// we need the check for style in case a browser which returns unreliable values\n		// for getComputedStyle silently falls back to the reliable elem.style\n		valueIsBorderBox = isBorderBox &&\n			( support.boxSizingReliable() || val === elem.style[ name ] );\n\n		// Normalize \"\", auto, and prepare for extra\n		val = parseFloat( val ) || 0;\n	}\n\n	// use the active box-sizing model to add/subtract irrelevant styles\n	return ( val +\n		augmentWidthOrHeight(\n			elem,\n			name,\n			extra || ( isBorderBox ? \"border\" : \"content\" ),\n			valueIsBorderBox,\n			styles\n		)\n	) + \"px\";\n}\n\nfunction showHide( elements, show ) {\n	var display, elem, hidden,\n		values = [],\n		index = 0,\n		length = elements.length;\n\n	for ( ; index < length; index++ ) {\n		elem = elements[ index ];\n		if ( !elem.style ) {\n			continue;\n		}\n\n		values[ index ] = data_priv.get( elem, \"olddisplay\" );\n		display = elem.style.display;\n		if ( show ) {\n			// Reset the inline display of this element to learn if it is\n			// being hidden by cascaded rules or not\n			if ( !values[ index ] && display === \"none\" ) {\n				elem.style.display = \"\";\n			}\n\n			// Set elements which have been overridden with display: none\n			// in a stylesheet to whatever the default browser style is\n			// for such an element\n			if ( elem.style.display === \"\" && isHidden( elem ) ) {\n				values[ index ] = data_priv.access( elem, \"olddisplay\", defaultDisplay(elem.nodeName) );\n			}\n		} else {\n			hidden = isHidden( elem );\n\n			if ( display !== \"none\" || !hidden ) {\n				data_priv.set( elem, \"olddisplay\", hidden ? display : jQuery.css( elem, \"display\" ) );\n			}\n		}\n	}\n\n	// Set the display of most of the elements in a second loop\n	// to avoid the constant reflow\n	for ( index = 0; index < length; index++ ) {\n		elem = elements[ index ];\n		if ( !elem.style ) {\n			continue;\n		}\n		if ( !show || elem.style.display === \"none\" || elem.style.display === \"\" ) {\n			elem.style.display = show ? values[ index ] || \"\" : \"none\";\n		}\n	}\n\n	return elements;\n}\n\njQuery.extend({\n	// Add in style property hooks for overriding the default\n	// behavior of getting and setting a style property\n	cssHooks: {\n		opacity: {\n			get: function( elem, computed ) {\n				if ( computed ) {\n					// We should always get a number back from opacity\n					var ret = curCSS( elem, \"opacity\" );\n					return ret === \"\" ? \"1\" : ret;\n				}\n			}\n		}\n	},\n\n	// Don\'t automatically add \"px\" to these possibly-unitless properties\n	cssNumber: {\n		\"columnCount\": true,\n		\"fillOpacity\": true,\n		\"flexGrow\": true,\n		\"flexShrink\": true,\n		\"fontWeight\": true,\n		\"lineHeight\": true,\n		\"opacity\": true,\n		\"order\": true,\n		\"orphans\": true,\n		\"widows\": true,\n		\"zIndex\": true,\n		\"zoom\": true\n	},\n\n	// Add in properties whose names you wish to fix before\n	// setting or getting the value\n	cssProps: {\n		// normalize float css property\n		\"float\": \"cssFloat\"\n	},\n\n	// Get and set the style property on a DOM Node\n	style: function( elem, name, value, extra ) {\n		// Don\'t set styles on text and comment nodes\n		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {\n			return;\n		}\n\n		// Make sure that we\'re working with the right name\n		var ret, type, hooks,\n			origName = jQuery.camelCase( name ),\n			style = elem.style;\n\n		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );\n\n		// gets hook for the prefixed version\n		// followed by the unprefixed version\n		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];\n\n		// Check if we\'re setting a value\n		if ( value !== undefined ) {\n			type = typeof value;\n\n			// convert relative number strings (+= or -=) to relative numbers. #7345\n			if ( type === \"string\" && (ret = rrelNum.exec( value )) ) {\n				value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );\n				// Fixes bug #9237\n				type = \"number\";\n			}\n\n			// Make sure that null and NaN values aren\'t set. See: #7116\n			if ( value == null || value !== value ) {\n				return;\n			}\n\n			// If a number was passed in, add \'px\' to the (except for certain CSS properties)\n			if ( type === \"number\" && !jQuery.cssNumber[ origName ] ) {\n				value += \"px\";\n			}\n\n			// Fixes #8908, it can be done more correctly by specifying setters in cssHooks,\n			// but it would mean to define eight (for every problematic property) identical functions\n			if ( !support.clearCloneStyle && value === \"\" && name.indexOf( \"background\" ) === 0 ) {\n				style[ name ] = \"inherit\";\n			}\n\n			// If a hook was provided, use that value, otherwise just set the specified value\n			if ( !hooks || !(\"set\" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {\n				style[ name ] = value;\n			}\n\n		} else {\n			// If a hook was provided get the non-computed value from there\n			if ( hooks && \"get\" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {\n				return ret;\n			}\n\n			// Otherwise just get the value from the style object\n			return style[ name ];\n		}\n	},\n\n	css: function( elem, name, extra, styles ) {\n		var val, num, hooks,\n			origName = jQuery.camelCase( name );\n\n		// Make sure that we\'re working with the right name\n		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );\n\n		// gets hook for the prefixed version\n		// followed by the unprefixed version\n		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];\n\n		// If a hook was provided get the computed value from there\n		if ( hooks && \"get\" in hooks ) {\n			val = hooks.get( elem, true, extra );\n		}\n\n		// Otherwise, if a way to get the computed value exists, use that\n		if ( val === undefined ) {\n			val = curCSS( elem, name, styles );\n		}\n\n		//convert \"normal\" to computed value\n		if ( val === \"normal\" && name in cssNormalTransform ) {\n			val = cssNormalTransform[ name ];\n		}\n\n		// Return, converting to number if forced or a qualifier was provided and val looks numeric\n		if ( extra === \"\" || extra ) {\n			num = parseFloat( val );\n			return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;\n		}\n		return val;\n	}\n});\n\njQuery.each([ \"height\", \"width\" ], function( i, name ) {\n	jQuery.cssHooks[ name ] = {\n		get: function( elem, computed, extra ) {\n			if ( computed ) {\n				// certain elements can have dimension info if we invisibly show them\n				// however, it must have a current display style that would benefit from this\n				return rdisplayswap.test( jQuery.css( elem, \"display\" ) ) && elem.offsetWidth === 0 ?\n					jQuery.swap( elem, cssShow, function() {\n						return getWidthOrHeight( elem, name, extra );\n					}) :\n					getWidthOrHeight( elem, name, extra );\n			}\n		},\n\n		set: function( elem, value, extra ) {\n			var styles = extra && getStyles( elem );\n			return setPositiveNumber( elem, value, extra ?\n				augmentWidthOrHeight(\n					elem,\n					name,\n					extra,\n					jQuery.css( elem, \"boxSizing\", false, styles ) === \"border-box\",\n					styles\n				) : 0\n			);\n		}\n	};\n});\n\n// Support: Android 2.3\njQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,\n	function( elem, computed ) {\n		if ( computed ) {\n			// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right\n			// Work around by temporarily setting element display to inline-block\n			return jQuery.swap( elem, { \"display\": \"inline-block\" },\n				curCSS, [ elem, \"marginRight\" ] );\n		}\n	}\n);\n\n// These hooks are used by animate to expand properties\njQuery.each({\n	margin: \"\",\n	padding: \"\",\n	border: \"Width\"\n}, function( prefix, suffix ) {\n	jQuery.cssHooks[ prefix + suffix ] = {\n		expand: function( value ) {\n			var i = 0,\n				expanded = {},\n\n				// assumes a single number if not a string\n				parts = typeof value === \"string\" ? value.split(\" \") : [ value ];\n\n			for ( ; i < 4; i++ ) {\n				expanded[ prefix + cssExpand[ i ] + suffix ] =\n					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];\n			}\n\n			return expanded;\n		}\n	};\n\n	if ( !rmargin.test( prefix ) ) {\n		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;\n	}\n});\n\njQuery.fn.extend({\n	css: function( name, value ) {\n		return access( this, function( elem, name, value ) {\n			var styles, len,\n				map = {},\n				i = 0;\n\n			if ( jQuery.isArray( name ) ) {\n				styles = getStyles( elem );\n				len = name.length;\n\n				for ( ; i < len; i++ ) {\n					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );\n				}\n\n				return map;\n			}\n\n			return value !== undefined ?\n				jQuery.style( elem, name, value ) :\n				jQuery.css( elem, name );\n		}, name, value, arguments.length > 1 );\n	},\n	show: function() {\n		return showHide( this, true );\n	},\n	hide: function() {\n		return showHide( this );\n	},\n	toggle: function( state ) {\n		if ( typeof state === \"boolean\" ) {\n			return state ? this.show() : this.hide();\n		}\n\n		return this.each(function() {\n			if ( isHidden( this ) ) {\n				jQuery( this ).show();\n			} else {\n				jQuery( this ).hide();\n			}\n		});\n	}\n});\n\n\nfunction Tween( elem, options, prop, end, easing ) {\n	return new Tween.prototype.init( elem, options, prop, end, easing );\n}\njQuery.Tween = Tween;\n\nTween.prototype = {\n	constructor: Tween,\n	init: function( elem, options, prop, end, easing, unit ) {\n		this.elem = elem;\n		this.prop = prop;\n		this.easing = easing || \"swing\";\n		this.options = options;\n		this.start = this.now = this.cur();\n		this.end = end;\n		this.unit = unit || ( jQuery.cssNumber[ prop ] ? \"\" : \"px\" );\n	},\n	cur: function() {\n		var hooks = Tween.propHooks[ this.prop ];\n\n		return hooks && hooks.get ?\n			hooks.get( this ) :\n			Tween.propHooks._default.get( this );\n	},\n	run: function( percent ) {\n		var eased,\n			hooks = Tween.propHooks[ this.prop ];\n\n		if ( this.options.duration ) {\n			this.pos = eased = jQuery.easing[ this.easing ](\n				percent, this.options.duration * percent, 0, 1, this.options.duration\n			);\n		} else {\n			this.pos = eased = percent;\n		}\n		this.now = ( this.end - this.start ) * eased + this.start;\n\n		if ( this.options.step ) {\n			this.options.step.call( this.elem, this.now, this );\n		}\n\n		if ( hooks && hooks.set ) {\n			hooks.set( this );\n		} else {\n			Tween.propHooks._default.set( this );\n		}\n		return this;\n	}\n};\n\nTween.prototype.init.prototype = Tween.prototype;\n\nTween.propHooks = {\n	_default: {\n		get: function( tween ) {\n			var result;\n\n			if ( tween.elem[ tween.prop ] != null &&\n				(!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {\n				return tween.elem[ tween.prop ];\n			}\n\n			// passing an empty string as a 3rd parameter to .css will automatically\n			// attempt a parseFloat and fallback to a string if the parse fails\n			// so, simple values such as \"10px\" are parsed to Float.\n			// complex values such as \"rotate(1rad)\" are returned as is.\n			result = jQuery.css( tween.elem, tween.prop, \"\" );\n			// Empty strings, null, undefined and \"auto\" are converted to 0.\n			return !result || result === \"auto\" ? 0 : result;\n		},\n		set: function( tween ) {\n			// use step hook for back compat - use cssHook if its there - use .style if its\n			// available and use plain properties where available\n			if ( jQuery.fx.step[ tween.prop ] ) {\n				jQuery.fx.step[ tween.prop ]( tween );\n			} else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {\n				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );\n			} else {\n				tween.elem[ tween.prop ] = tween.now;\n			}\n		}\n	}\n};\n\n// Support: IE9\n// Panic based approach to setting things on disconnected nodes\n\nTween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {\n	set: function( tween ) {\n		if ( tween.elem.nodeType && tween.elem.parentNode ) {\n			tween.elem[ tween.prop ] = tween.now;\n		}\n	}\n};\n\njQuery.easing = {\n	linear: function( p ) {\n		return p;\n	},\n	swing: function( p ) {\n		return 0.5 - Math.cos( p * Math.PI ) / 2;\n	}\n};\n\njQuery.fx = Tween.prototype.init;\n\n// Back Compat <1.8 extension point\njQuery.fx.step = {};\n\n\n\n\nvar\n	fxNow, timerId,\n	rfxtypes = /^(?:toggle|show|hide)$/,\n	rfxnum = new RegExp( \"^(?:([+-])=|)(\" + pnum + \")([a-z%]*)$\", \"i\" ),\n	rrun = /queueHooks$/,\n	animationPrefilters = [ defaultPrefilter ],\n	tweeners = {\n		\"*\": [ function( prop, value ) {\n			var tween = this.createTween( prop, value ),\n				target = tween.cur(),\n				parts = rfxnum.exec( value ),\n				unit = parts && parts[ 3 ] || ( jQuery.cssNumber[ prop ] ? \"\" : \"px\" ),\n\n				// Starting value computation is required for potential unit mismatches\n				start = ( jQuery.cssNumber[ prop ] || unit !== \"px\" && +target ) &&\n					rfxnum.exec( jQuery.css( tween.elem, prop ) ),\n				scale = 1,\n				maxIterations = 20;\n\n			if ( start && start[ 3 ] !== unit ) {\n				// Trust units reported by jQuery.css\n				unit = unit || start[ 3 ];\n\n				// Make sure we update the tween properties later on\n				parts = parts || [];\n\n				// Iteratively approximate from a nonzero starting point\n				start = +target || 1;\n\n				do {\n					// If previous iteration zeroed out, double until we get *something*\n					// Use a string for doubling factor so we don\'t accidentally see scale as unchanged below\n					scale = scale || \".5\";\n\n					// Adjust and apply\n					start = start / scale;\n					jQuery.style( tween.elem, prop, start + unit );\n\n				// Update scale, tolerating zero or NaN from tween.cur()\n				// And breaking the loop if scale is unchanged or perfect, or if we\'ve just had enough\n				} while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );\n			}\n\n			// Update tween properties\n			if ( parts ) {\n				start = tween.start = +start || +target || 0;\n				tween.unit = unit;\n				// If a +=/-= token was provided, we\'re doing a relative animation\n				tween.end = parts[ 1 ] ?\n					start + ( parts[ 1 ] + 1 ) * parts[ 2 ] :\n					+parts[ 2 ];\n			}\n\n			return tween;\n		} ]\n	};\n\n// Animations created synchronously will run synchronously\nfunction createFxNow() {\n	setTimeout(function() {\n		fxNow = undefined;\n	});\n	return ( fxNow = jQuery.now() );\n}\n\n// Generate parameters to create a standard animation\nfunction genFx( type, includeWidth ) {\n	var which,\n		i = 0,\n		attrs = { height: type };\n\n	// if we include width, step value is 1 to do all cssExpand values,\n	// if we don\'t include width, step value is 2 to skip over Left and Right\n	includeWidth = includeWidth ? 1 : 0;\n	for ( ; i < 4 ; i += 2 - includeWidth ) {\n		which = cssExpand[ i ];\n		attrs[ \"margin\" + which ] = attrs[ \"padding\" + which ] = type;\n	}\n\n	if ( includeWidth ) {\n		attrs.opacity = attrs.width = type;\n	}\n\n	return attrs;\n}\n\nfunction createTween( value, prop, animation ) {\n	var tween,\n		collection = ( tweeners[ prop ] || [] ).concat( tweeners[ \"*\" ] ),\n		index = 0,\n		length = collection.length;\n	for ( ; index < length; index++ ) {\n		if ( (tween = collection[ index ].call( animation, prop, value )) ) {\n\n			// we\'re done with this property\n			return tween;\n		}\n	}\n}\n\nfunction defaultPrefilter( elem, props, opts ) {\n	/* jshint validthis: true */\n	var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,\n		anim = this,\n		orig = {},\n		style = elem.style,\n		hidden = elem.nodeType && isHidden( elem ),\n		dataShow = data_priv.get( elem, \"fxshow\" );\n\n	// handle queue: false promises\n	if ( !opts.queue ) {\n		hooks = jQuery._queueHooks( elem, \"fx\" );\n		if ( hooks.unqueued == null ) {\n			hooks.unqueued = 0;\n			oldfire = hooks.empty.fire;\n			hooks.empty.fire = function() {\n				if ( !hooks.unqueued ) {\n					oldfire();\n				}\n			};\n		}\n		hooks.unqueued++;\n\n		anim.always(function() {\n			// doing this makes sure that the complete handler will be called\n			// before this completes\n			anim.always(function() {\n				hooks.unqueued--;\n				if ( !jQuery.queue( elem, \"fx\" ).length ) {\n					hooks.empty.fire();\n				}\n			});\n		});\n	}\n\n	// height/width overflow pass\n	if ( elem.nodeType === 1 && ( \"height\" in props || \"width\" in props ) ) {\n		// Make sure that nothing sneaks out\n		// Record all 3 overflow attributes because IE9-10 do not\n		// change the overflow attribute when overflowX and\n		// overflowY are set to the same value\n		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];\n\n		// Set display property to inline-block for height/width\n		// animations on inline elements that are having width/height animated\n		display = jQuery.css( elem, \"display\" );\n\n		// Test default display if display is currently \"none\"\n		checkDisplay = display === \"none\" ?\n			data_priv.get( elem, \"olddisplay\" ) || defaultDisplay( elem.nodeName ) : display;\n\n		if ( checkDisplay === \"inline\" && jQuery.css( elem, \"float\" ) === \"none\" ) {\n			style.display = \"inline-block\";\n		}\n	}\n\n	if ( opts.overflow ) {\n		style.overflow = \"hidden\";\n		anim.always(function() {\n			style.overflow = opts.overflow[ 0 ];\n			style.overflowX = opts.overflow[ 1 ];\n			style.overflowY = opts.overflow[ 2 ];\n		});\n	}\n\n	// show/hide pass\n	for ( prop in props ) {\n		value = props[ prop ];\n		if ( rfxtypes.exec( value ) ) {\n			delete props[ prop ];\n			toggle = toggle || value === \"toggle\";\n			if ( value === ( hidden ? \"hide\" : \"show\" ) ) {\n\n				// If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden\n				if ( value === \"show\" && dataShow && dataShow[ prop ] !== undefined ) {\n					hidden = true;\n				} else {\n					continue;\n				}\n			}\n			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );\n\n		// Any non-fx value stops us from restoring the original display value\n		} else {\n			display = undefined;\n		}\n	}\n\n	if ( !jQuery.isEmptyObject( orig ) ) {\n		if ( dataShow ) {\n			if ( \"hidden\" in dataShow ) {\n				hidden = dataShow.hidden;\n			}\n		} else {\n			dataShow = data_priv.access( elem, \"fxshow\", {} );\n		}\n\n		// store state if its toggle - enables .stop().toggle() to \"reverse\"\n		if ( toggle ) {\n			dataShow.hidden = !hidden;\n		}\n		if ( hidden ) {\n			jQuery( elem ).show();\n		} else {\n			anim.done(function() {\n				jQuery( elem ).hide();\n			});\n		}\n		anim.done(function() {\n			var prop;\n\n			data_priv.remove( elem, \"fxshow\" );\n			for ( prop in orig ) {\n				jQuery.style( elem, prop, orig[ prop ] );\n			}\n		});\n		for ( prop in orig ) {\n			tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );\n\n			if ( !( prop in dataShow ) ) {\n				dataShow[ prop ] = tween.start;\n				if ( hidden ) {\n					tween.end = tween.start;\n					tween.start = prop === \"width\" || prop === \"height\" ? 1 : 0;\n				}\n			}\n		}\n\n	// If this is a noop like .hide().hide(), restore an overwritten display value\n	} else if ( (display === \"none\" ? defaultDisplay( elem.nodeName ) : display) === \"inline\" ) {\n		style.display = display;\n	}\n}\n\nfunction propFilter( props, specialEasing ) {\n	var index, name, easing, value, hooks;\n\n	// camelCase, specialEasing and expand cssHook pass\n	for ( index in props ) {\n		name = jQuery.camelCase( index );\n		easing = specialEasing[ name ];\n		value = props[ index ];\n		if ( jQuery.isArray( value ) ) {\n			easing = value[ 1 ];\n			value = props[ index ] = value[ 0 ];\n		}\n\n		if ( index !== name ) {\n			props[ name ] = value;\n			delete props[ index ];\n		}\n\n		hooks = jQuery.cssHooks[ name ];\n		if ( hooks && \"expand\" in hooks ) {\n			value = hooks.expand( value );\n			delete props[ name ];\n\n			// not quite $.extend, this wont overwrite keys already present.\n			// also - reusing \'index\' from above because we have the correct \"name\"\n			for ( index in value ) {\n				if ( !( index in props ) ) {\n					props[ index ] = value[ index ];\n					specialEasing[ index ] = easing;\n				}\n			}\n		} else {\n			specialEasing[ name ] = easing;\n		}\n	}\n}\n\nfunction Animation( elem, properties, options ) {\n	var result,\n		stopped,\n		index = 0,\n		length = animationPrefilters.length,\n		deferred = jQuery.Deferred().always( function() {\n			// don\'t match elem in the :animated selector\n			delete tick.elem;\n		}),\n		tick = function() {\n			if ( stopped ) {\n				return false;\n			}\n			var currentTime = fxNow || createFxNow(),\n				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),\n				// archaic crash bug won\'t allow us to use 1 - ( 0.5 || 0 ) (#12497)\n				temp = remaining / animation.duration || 0,\n				percent = 1 - temp,\n				index = 0,\n				length = animation.tweens.length;\n\n			for ( ; index < length ; index++ ) {\n				animation.tweens[ index ].run( percent );\n			}\n\n			deferred.notifyWith( elem, [ animation, percent, remaining ]);\n\n			if ( percent < 1 && length ) {\n				return remaining;\n			} else {\n				deferred.resolveWith( elem, [ animation ] );\n				return false;\n			}\n		},\n		animation = deferred.promise({\n			elem: elem,\n			props: jQuery.extend( {}, properties ),\n			opts: jQuery.extend( true, { specialEasing: {} }, options ),\n			originalProperties: properties,\n			originalOptions: options,\n			startTime: fxNow || createFxNow(),\n			duration: options.duration,\n			tweens: [],\n			createTween: function( prop, end ) {\n				var tween = jQuery.Tween( elem, animation.opts, prop, end,\n						animation.opts.specialEasing[ prop ] || animation.opts.easing );\n				animation.tweens.push( tween );\n				return tween;\n			},\n			stop: function( gotoEnd ) {\n				var index = 0,\n					// if we are going to the end, we want to run all the tweens\n					// otherwise we skip this part\n					length = gotoEnd ? animation.tweens.length : 0;\n				if ( stopped ) {\n					return this;\n				}\n				stopped = true;\n				for ( ; index < length ; index++ ) {\n					animation.tweens[ index ].run( 1 );\n				}\n\n				// resolve when we played the last frame\n				// otherwise, reject\n				if ( gotoEnd ) {\n					deferred.resolveWith( elem, [ animation, gotoEnd ] );\n				} else {\n					deferred.rejectWith( elem, [ animation, gotoEnd ] );\n				}\n				return this;\n			}\n		}),\n		props = animation.props;\n\n	propFilter( props, animation.opts.specialEasing );\n\n	for ( ; index < length ; index++ ) {\n		result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );\n		if ( result ) {\n			return result;\n		}\n	}\n\n	jQuery.map( props, createTween, animation );\n\n	if ( jQuery.isFunction( animation.opts.start ) ) {\n		animation.opts.start.call( elem, animation );\n	}\n\n	jQuery.fx.timer(\n		jQuery.extend( tick, {\n			elem: elem,\n			anim: animation,\n			queue: animation.opts.queue\n		})\n	);\n\n	// attach callbacks from options\n	return animation.progress( animation.opts.progress )\n		.done( animation.opts.done, animation.opts.complete )\n		.fail( animation.opts.fail )\n		.always( animation.opts.always );\n}\n\njQuery.Animation = jQuery.extend( Animation, {\n\n	tweener: function( props, callback ) {\n		if ( jQuery.isFunction( props ) ) {\n			callback = props;\n			props = [ \"*\" ];\n		} else {\n			props = props.split(\" \");\n		}\n\n		var prop,\n			index = 0,\n			length = props.length;\n\n		for ( ; index < length ; index++ ) {\n			prop = props[ index ];\n			tweeners[ prop ] = tweeners[ prop ] || [];\n			tweeners[ prop ].unshift( callback );\n		}\n	},\n\n	prefilter: function( callback, prepend ) {\n		if ( prepend ) {\n			animationPrefilters.unshift( callback );\n		} else {\n			animationPrefilters.push( callback );\n		}\n	}\n});\n\njQuery.speed = function( speed, easing, fn ) {\n	var opt = speed && typeof speed === \"object\" ? jQuery.extend( {}, speed ) : {\n		complete: fn || !fn && easing ||\n			jQuery.isFunction( speed ) && speed,\n		duration: speed,\n		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing\n	};\n\n	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === \"number\" ? opt.duration :\n		opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;\n\n	// normalize opt.queue - true/undefined/null -> \"fx\"\n	if ( opt.queue == null || opt.queue === true ) {\n		opt.queue = \"fx\";\n	}\n\n	// Queueing\n	opt.old = opt.complete;\n\n	opt.complete = function() {\n		if ( jQuery.isFunction( opt.old ) ) {\n			opt.old.call( this );\n		}\n\n		if ( opt.queue ) {\n			jQuery.dequeue( this, opt.queue );\n		}\n	};\n\n	return opt;\n};\n\njQuery.fn.extend({\n	fadeTo: function( speed, to, easing, callback ) {\n\n		// show any hidden elements after setting opacity to 0\n		return this.filter( isHidden ).css( \"opacity\", 0 ).show()\n\n			// animate to the value specified\n			.end().animate({ opacity: to }, speed, easing, callback );\n	},\n	animate: function( prop, speed, easing, callback ) {\n		var empty = jQuery.isEmptyObject( prop ),\n			optall = jQuery.speed( speed, easing, callback ),\n			doAnimation = function() {\n				// Operate on a copy of prop so per-property easing won\'t be lost\n				var anim = Animation( this, jQuery.extend( {}, prop ), optall );\n\n				// Empty animations, or finishing resolves immediately\n				if ( empty || data_priv.get( this, \"finish\" ) ) {\n					anim.stop( true );\n				}\n			};\n			doAnimation.finish = doAnimation;\n\n		return empty || optall.queue === false ?\n			this.each( doAnimation ) :\n			this.queue( optall.queue, doAnimation );\n	},\n	stop: function( type, clearQueue, gotoEnd ) {\n		var stopQueue = function( hooks ) {\n			var stop = hooks.stop;\n			delete hooks.stop;\n			stop( gotoEnd );\n		};\n\n		if ( typeof type !== \"string\" ) {\n			gotoEnd = clearQueue;\n			clearQueue = type;\n			type = undefined;\n		}\n		if ( clearQueue && type !== false ) {\n			this.queue( type || \"fx\", [] );\n		}\n\n		return this.each(function() {\n			var dequeue = true,\n				index = type != null && type + \"queueHooks\",\n				timers = jQuery.timers,\n				data = data_priv.get( this );\n\n			if ( index ) {\n				if ( data[ index ] && data[ index ].stop ) {\n					stopQueue( data[ index ] );\n				}\n			} else {\n				for ( index in data ) {\n					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {\n						stopQueue( data[ index ] );\n					}\n				}\n			}\n\n			for ( index = timers.length; index--; ) {\n				if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {\n					timers[ index ].anim.stop( gotoEnd );\n					dequeue = false;\n					timers.splice( index, 1 );\n				}\n			}\n\n			// start the next in the queue if the last step wasn\'t forced\n			// timers currently will call their complete callbacks, which will dequeue\n			// but only if they were gotoEnd\n			if ( dequeue || !gotoEnd ) {\n				jQuery.dequeue( this, type );\n			}\n		});\n	},\n	finish: function( type ) {\n		if ( type !== false ) {\n			type = type || \"fx\";\n		}\n		return this.each(function() {\n			var index,\n				data = data_priv.get( this ),\n				queue = data[ type + \"queue\" ],\n				hooks = data[ type + \"queueHooks\" ],\n				timers = jQuery.timers,\n				length = queue ? queue.length : 0;\n\n			// enable finishing flag on private data\n			data.finish = true;\n\n			// empty the queue first\n			jQuery.queue( this, type, [] );\n\n			if ( hooks && hooks.stop ) {\n				hooks.stop.call( this, true );\n			}\n\n			// look for any active animations, and finish them\n			for ( index = timers.length; index--; ) {\n				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {\n					timers[ index ].anim.stop( true );\n					timers.splice( index, 1 );\n				}\n			}\n\n			// look for any animations in the old queue and finish them\n			for ( index = 0; index < length; index++ ) {\n				if ( queue[ index ] && queue[ index ].finish ) {\n					queue[ index ].finish.call( this );\n				}\n			}\n\n			// turn off finishing flag\n			delete data.finish;\n		});\n	}\n});\n\njQuery.each([ \"toggle\", \"show\", \"hide\" ], function( i, name ) {\n	var cssFn = jQuery.fn[ name ];\n	jQuery.fn[ name ] = function( speed, easing, callback ) {\n		return speed == null || typeof speed === \"boolean\" ?\n			cssFn.apply( this, arguments ) :\n			this.animate( genFx( name, true ), speed, easing, callback );\n	};\n});\n\n// Generate shortcuts for custom animations\njQuery.each({\n	slideDown: genFx(\"show\"),\n	slideUp: genFx(\"hide\"),\n	slideToggle: genFx(\"toggle\"),\n	fadeIn: { opacity: \"show\" },\n	fadeOut: { opacity: \"hide\" },\n	fadeToggle: { opacity: \"toggle\" }\n}, function( name, props ) {\n	jQuery.fn[ name ] = function( speed, easing, callback ) {\n		return this.animate( props, speed, easing, callback );\n	};\n});\n\njQuery.timers = [];\njQuery.fx.tick = function() {\n	var timer,\n		i = 0,\n		timers = jQuery.timers;\n\n	fxNow = jQuery.now();\n\n	for ( ; i < timers.length; i++ ) {\n		timer = timers[ i ];\n		// Checks the timer has not already been removed\n		if ( !timer() && timers[ i ] === timer ) {\n			timers.splice( i--, 1 );\n		}\n	}\n\n	if ( !timers.length ) {\n		jQuery.fx.stop();\n	}\n	fxNow = undefined;\n};\n\njQuery.fx.timer = function( timer ) {\n	jQuery.timers.push( timer );\n	if ( timer() ) {\n		jQuery.fx.start();\n	} else {\n		jQuery.timers.pop();\n	}\n};\n\njQuery.fx.interval = 13;\n\njQuery.fx.start = function() {\n	if ( !timerId ) {\n		timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );\n	}\n};\n\njQuery.fx.stop = function() {\n	clearInterval( timerId );\n	timerId = null;\n};\n\njQuery.fx.speeds = {\n	slow: 600,\n	fast: 200,\n	// Default speed\n	_default: 400\n};\n\n\n// Based off of the plugin by Clint Helfers, with permission.\n// http://blindsignals.com/index.php/2009/07/jquery-delay/\njQuery.fn.delay = function( time, type ) {\n	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;\n	type = type || \"fx\";\n\n	return this.queue( type, function( next, hooks ) {\n		var timeout = setTimeout( next, time );\n		hooks.stop = function() {\n			clearTimeout( timeout );\n		};\n	});\n};\n\n\n(function() {\n	var input = document.createElement( \"input\" ),\n		select = document.createElement( \"select\" ),\n		opt = select.appendChild( document.createElement( \"option\" ) );\n\n	input.type = \"checkbox\";\n\n	// Support: iOS 5.1, Android 4.x, Android 2.3\n	// Check the default checkbox/radio value (\"\" on old WebKit; \"on\" elsewhere)\n	support.checkOn = input.value !== \"\";\n\n	// Must access the parent to make an option select properly\n	// Support: IE9, IE10\n	support.optSelected = opt.selected;\n\n	// Make sure that the options inside disabled selects aren\'t marked as disabled\n	// (WebKit marks them as disabled)\n	select.disabled = true;\n	support.optDisabled = !opt.disabled;\n\n	// Check if an input maintains its value after becoming a radio\n	// Support: IE9, IE10\n	input = document.createElement( \"input\" );\n	input.value = \"t\";\n	input.type = \"radio\";\n	support.radioValue = input.value === \"t\";\n})();\n\n\nvar nodeHook, boolHook,\n	attrHandle = jQuery.expr.attrHandle;\n\njQuery.fn.extend({\n	attr: function( name, value ) {\n		return access( this, jQuery.attr, name, value, arguments.length > 1 );\n	},\n\n	removeAttr: function( name ) {\n		return this.each(function() {\n			jQuery.removeAttr( this, name );\n		});\n	}\n});\n\njQuery.extend({\n	attr: function( elem, name, value ) {\n		var hooks, ret,\n			nType = elem.nodeType;\n\n		// don\'t get/set attributes on text, comment and attribute nodes\n		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {\n			return;\n		}\n\n		// Fallback to prop when attributes are not supported\n		if ( typeof elem.getAttribute === strundefined ) {\n			return jQuery.prop( elem, name, value );\n		}\n\n		// All attributes are lowercase\n		// Grab necessary hook if one is defined\n		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {\n			name = name.toLowerCase();\n			hooks = jQuery.attrHooks[ name ] ||\n				( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );\n		}\n\n		if ( value !== undefined ) {\n\n			if ( value === null ) {\n				jQuery.removeAttr( elem, name );\n\n			} else if ( hooks && \"set\" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {\n				return ret;\n\n			} else {\n				elem.setAttribute( name, value + \"\" );\n				return value;\n			}\n\n		} else if ( hooks && \"get\" in hooks && (ret = hooks.get( elem, name )) !== null ) {\n			return ret;\n\n		} else {\n			ret = jQuery.find.attr( elem, name );\n\n			// Non-existent attributes return null, we normalize to undefined\n			return ret == null ?\n				undefined :\n				ret;\n		}\n	},\n\n	removeAttr: function( elem, value ) {\n		var name, propName,\n			i = 0,\n			attrNames = value && value.match( rnotwhite );\n\n		if ( attrNames && elem.nodeType === 1 ) {\n			while ( (name = attrNames[i++]) ) {\n				propName = jQuery.propFix[ name ] || name;\n\n				// Boolean attributes get special treatment (#10870)\n				if ( jQuery.expr.match.bool.test( name ) ) {\n					// Set corresponding property to false\n					elem[ propName ] = false;\n				}\n\n				elem.removeAttribute( name );\n			}\n		}\n	},\n\n	attrHooks: {\n		type: {\n			set: function( elem, value ) {\n				if ( !support.radioValue && value === \"radio\" &&\n					jQuery.nodeName( elem, \"input\" ) ) {\n					// Setting the type on a radio button after the value resets the value in IE6-9\n					// Reset value to default in case type is set after value during creation\n					var val = elem.value;\n					elem.setAttribute( \"type\", value );\n					if ( val ) {\n						elem.value = val;\n					}\n					return value;\n				}\n			}\n		}\n	}\n});\n\n// Hooks for boolean attributes\nboolHook = {\n	set: function( elem, value, name ) {\n		if ( value === false ) {\n			// Remove boolean attributes when set to false\n			jQuery.removeAttr( elem, name );\n		} else {\n			elem.setAttribute( name, name );\n		}\n		return name;\n	}\n};\njQuery.each( jQuery.expr.match.bool.source.match( /\\w+/g ), function( i, name ) {\n	var getter = attrHandle[ name ] || jQuery.find.attr;\n\n	attrHandle[ name ] = function( elem, name, isXML ) {\n		var ret, handle;\n		if ( !isXML ) {\n			// Avoid an infinite loop by temporarily removing this function from the getter\n			handle = attrHandle[ name ];\n			attrHandle[ name ] = ret;\n			ret = getter( elem, name, isXML ) != null ?\n				name.toLowerCase() :\n				null;\n			attrHandle[ name ] = handle;\n		}\n		return ret;\n	};\n});\n\n\n\n\nvar rfocusable = /^(?:input|select|textarea|button)$/i;\n\njQuery.fn.extend({\n	prop: function( name, value ) {\n		return access( this, jQuery.prop, name, value, arguments.length > 1 );\n	},\n\n	removeProp: function( name ) {\n		return this.each(function() {\n			delete this[ jQuery.propFix[ name ] || name ];\n		});\n	}\n});\n\njQuery.extend({\n	propFix: {\n		\"for\": \"htmlFor\",\n		\"class\": \"className\"\n	},\n\n	prop: function( elem, name, value ) {\n		var ret, hooks, notxml,\n			nType = elem.nodeType;\n\n		// don\'t get/set properties on text, comment and attribute nodes\n		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {\n			return;\n		}\n\n		notxml = nType !== 1 || !jQuery.isXMLDoc( elem );\n\n		if ( notxml ) {\n			// Fix name and attach hooks\n			name = jQuery.propFix[ name ] || name;\n			hooks = jQuery.propHooks[ name ];\n		}\n\n		if ( value !== undefined ) {\n			return hooks && \"set\" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ?\n				ret :\n				( elem[ name ] = value );\n\n		} else {\n			return hooks && \"get\" in hooks && (ret = hooks.get( elem, name )) !== null ?\n				ret :\n				elem[ name ];\n		}\n	},\n\n	propHooks: {\n		tabIndex: {\n			get: function( elem ) {\n				return elem.hasAttribute( \"tabindex\" ) || rfocusable.test( elem.nodeName ) || elem.href ?\n					elem.tabIndex :\n					-1;\n			}\n		}\n	}\n});\n\n// Support: IE9+\n// Selectedness for an option in an optgroup can be inaccurate\nif ( !support.optSelected ) {\n	jQuery.propHooks.selected = {\n		get: function( elem ) {\n			var parent = elem.parentNode;\n			if ( parent && parent.parentNode ) {\n				parent.parentNode.selectedIndex;\n			}\n			return null;\n		}\n	};\n}\n\njQuery.each([\n	\"tabIndex\",\n	\"readOnly\",\n	\"maxLength\",\n	\"cellSpacing\",\n	\"cellPadding\",\n	\"rowSpan\",\n	\"colSpan\",\n	\"useMap\",\n	\"frameBorder\",\n	\"contentEditable\"\n], function() {\n	jQuery.propFix[ this.toLowerCase() ] = this;\n});\n\n\n\n\nvar rclass = /[\\t\\r\\n\\f]/g;\n\njQuery.fn.extend({\n	addClass: function( value ) {\n		var classes, elem, cur, clazz, j, finalValue,\n			proceed = typeof value === \"string\" && value,\n			i = 0,\n			len = this.length;\n\n		if ( jQuery.isFunction( value ) ) {\n			return this.each(function( j ) {\n				jQuery( this ).addClass( value.call( this, j, this.className ) );\n			});\n		}\n\n		if ( proceed ) {\n			// The disjunction here is for better compressibility (see removeClass)\n			classes = ( value || \"\" ).match( rnotwhite ) || [];\n\n			for ( ; i < len; i++ ) {\n				elem = this[ i ];\n				cur = elem.nodeType === 1 && ( elem.className ?\n					( \" \" + elem.className + \" \" ).replace( rclass, \" \" ) :\n					\" \"\n				);\n\n				if ( cur ) {\n					j = 0;\n					while ( (clazz = classes[j++]) ) {\n						if ( cur.indexOf( \" \" + clazz + \" \" ) < 0 ) {\n							cur += clazz + \" \";\n						}\n					}\n\n					// only assign if different to avoid unneeded rendering.\n					finalValue = jQuery.trim( cur );\n					if ( elem.className !== finalValue ) {\n						elem.className = finalValue;\n					}\n				}\n			}\n		}\n\n		return this;\n	},\n\n	removeClass: function( value ) {\n		var classes, elem, cur, clazz, j, finalValue,\n			proceed = arguments.length === 0 || typeof value === \"string\" && value,\n			i = 0,\n			len = this.length;\n\n		if ( jQuery.isFunction( value ) ) {\n			return this.each(function( j ) {\n				jQuery( this ).removeClass( value.call( this, j, this.className ) );\n			});\n		}\n		if ( proceed ) {\n			classes = ( value || \"\" ).match( rnotwhite ) || [];\n\n			for ( ; i < len; i++ ) {\n				elem = this[ i ];\n				// This expression is here for better compressibility (see addClass)\n				cur = elem.nodeType === 1 && ( elem.className ?\n					( \" \" + elem.className + \" \" ).replace( rclass, \" \" ) :\n					\"\"\n				);\n\n				if ( cur ) {\n					j = 0;\n					while ( (clazz = classes[j++]) ) {\n						// Remove *all* instances\n						while ( cur.indexOf( \" \" + clazz + \" \" ) >= 0 ) {\n							cur = cur.replace( \" \" + clazz + \" \", \" \" );\n						}\n					}\n\n					// only assign if different to avoid unneeded rendering.\n					finalValue = value ? jQuery.trim( cur ) : \"\";\n					if ( elem.className !== finalValue ) {\n						elem.className = finalValue;\n					}\n				}\n			}\n		}\n\n		return this;\n	},\n\n	toggleClass: function( value, stateVal ) {\n		var type = typeof value;\n\n		if ( typeof stateVal === \"boolean\" && type === \"string\" ) {\n			return stateVal ? this.addClass( value ) : this.removeClass( value );\n		}\n\n		if ( jQuery.isFunction( value ) ) {\n			return this.each(function( i ) {\n				jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );\n			});\n		}\n\n		return this.each(function() {\n			if ( type === \"string\" ) {\n				// toggle individual class names\n				var className,\n					i = 0,\n					self = jQuery( this ),\n					classNames = value.match( rnotwhite ) || [];\n\n				while ( (className = classNames[ i++ ]) ) {\n					// check each className given, space separated list\n					if ( self.hasClass( className ) ) {\n						self.removeClass( className );\n					} else {\n						self.addClass( className );\n					}\n				}\n\n			// Toggle whole class name\n			} else if ( type === strundefined || type === \"boolean\" ) {\n				if ( this.className ) {\n					// store className if set\n					data_priv.set( this, \"__className__\", this.className );\n				}\n\n				// If the element has a class name or if we\'re passed \"false\",\n				// then remove the whole classname (if there was one, the above saved it).\n				// Otherwise bring back whatever was previously saved (if anything),\n				// falling back to the empty string if nothing was stored.\n				this.className = this.className || value === false ? \"\" : data_priv.get( this, \"__className__\" ) || \"\";\n			}\n		});\n	},\n\n	hasClass: function( selector ) {\n		var className = \" \" + selector + \" \",\n			i = 0,\n			l = this.length;\n		for ( ; i < l; i++ ) {\n			if ( this[i].nodeType === 1 && (\" \" + this[i].className + \" \").replace(rclass, \" \").indexOf( className ) >= 0 ) {\n				return true;\n			}\n		}\n\n		return false;\n	}\n});\n\n\n\n\nvar rreturn = /\\r/g;\n\njQuery.fn.extend({\n	val: function( value ) {\n		var hooks, ret, isFunction,\n			elem = this[0];\n\n		if ( !arguments.length ) {\n			if ( elem ) {\n				hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];\n\n				if ( hooks && \"get\" in hooks && (ret = hooks.get( elem, \"value\" )) !== undefined ) {\n					return ret;\n				}\n\n				ret = elem.value;\n\n				return typeof ret === \"string\" ?\n					// handle most common string cases\n					ret.replace(rreturn, \"\") :\n					// handle cases where value is null/undef or number\n					ret == null ? \"\" : ret;\n			}\n\n			return;\n		}\n\n		isFunction = jQuery.isFunction( value );\n\n		return this.each(function( i ) {\n			var val;\n\n			if ( this.nodeType !== 1 ) {\n				return;\n			}\n\n			if ( isFunction ) {\n				val = value.call( this, i, jQuery( this ).val() );\n			} else {\n				val = value;\n			}\n\n			// Treat null/undefined as \"\"; convert numbers to string\n			if ( val == null ) {\n				val = \"\";\n\n			} else if ( typeof val === \"number\" ) {\n				val += \"\";\n\n			} else if ( jQuery.isArray( val ) ) {\n				val = jQuery.map( val, function( value ) {\n					return value == null ? \"\" : value + \"\";\n				});\n			}\n\n			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];\n\n			// If set returns undefined, fall back to normal setting\n			if ( !hooks || !(\"set\" in hooks) || hooks.set( this, val, \"value\" ) === undefined ) {\n				this.value = val;\n			}\n		});\n	}\n});\n\njQuery.extend({\n	valHooks: {\n		option: {\n			get: function( elem ) {\n				var val = jQuery.find.attr( elem, \"value\" );\n				return val != null ?\n					val :\n					// Support: IE10-11+\n					// option.text throws exceptions (#14686, #14858)\n					jQuery.trim( jQuery.text( elem ) );\n			}\n		},\n		select: {\n			get: function( elem ) {\n				var value, option,\n					options = elem.options,\n					index = elem.selectedIndex,\n					one = elem.type === \"select-one\" || index < 0,\n					values = one ? null : [],\n					max = one ? index + 1 : options.length,\n					i = index < 0 ?\n						max :\n						one ? index : 0;\n\n				// Loop through all the selected options\n				for ( ; i < max; i++ ) {\n					option = options[ i ];\n\n					// IE6-9 doesn\'t update selected after form reset (#2551)\n					if ( ( option.selected || i === index ) &&\n							// Don\'t return options that are disabled or in a disabled optgroup\n							( support.optDisabled ? !option.disabled : option.getAttribute( \"disabled\" ) === null ) &&\n							( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, \"optgroup\" ) ) ) {\n\n						// Get the specific value for the option\n						value = jQuery( option ).val();\n\n						// We don\'t need an array for one selects\n						if ( one ) {\n							return value;\n						}\n\n						// Multi-Selects return an array\n						values.push( value );\n					}\n				}\n\n				return values;\n			},\n\n			set: function( elem, value ) {\n				var optionSet, option,\n					options = elem.options,\n					values = jQuery.makeArray( value ),\n					i = options.length;\n\n				while ( i-- ) {\n					option = options[ i ];\n					if ( (option.selected = jQuery.inArray( option.value, values ) >= 0) ) {\n						optionSet = true;\n					}\n				}\n\n				// force browsers to behave consistently when non-matching value is set\n				if ( !optionSet ) {\n					elem.selectedIndex = -1;\n				}\n				return values;\n			}\n		}\n	}\n});\n\n// Radios and checkboxes getter/setter\njQuery.each([ \"radio\", \"checkbox\" ], function() {\n	jQuery.valHooks[ this ] = {\n		set: function( elem, value ) {\n			if ( jQuery.isArray( value ) ) {\n				return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );\n			}\n		}\n	};\n	if ( !support.checkOn ) {\n		jQuery.valHooks[ this ].get = function( elem ) {\n			// Support: Webkit\n			// \"\" is returned instead of \"on\" if a value isn\'t specified\n			return elem.getAttribute(\"value\") === null ? \"on\" : elem.value;\n		};\n	}\n});\n\n\n\n\n// Return jQuery for attributes-only inclusion\n\n\njQuery.each( (\"blur focus focusin focusout load resize scroll unload click dblclick \" +\n	\"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave \" +\n	\"change select submit keydown keypress keyup error contextmenu\").split(\" \"), function( i, name ) {\n\n	// Handle event binding\n	jQuery.fn[ name ] = function( data, fn ) {\n		return arguments.length > 0 ?\n			this.on( name, null, data, fn ) :\n			this.trigger( name );\n	};\n});\n\njQuery.fn.extend({\n	hover: function( fnOver, fnOut ) {\n		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );\n	},\n\n	bind: function( types, data, fn ) {\n		return this.on( types, null, data, fn );\n	},\n	unbind: function( types, fn ) {\n		return this.off( types, null, fn );\n	},\n\n	delegate: function( selector, types, data, fn ) {\n		return this.on( types, selector, data, fn );\n	},\n	undelegate: function( selector, types, fn ) {\n		// ( namespace ) or ( selector, types [, fn] )\n		return arguments.length === 1 ? this.off( selector, \"**\" ) : this.off( types, selector || \"**\", fn );\n	}\n});\n\n\nvar nonce = jQuery.now();\n\nvar rquery = (/\\?/);\n\n\n\n// Support: Android 2.3\n// Workaround failure to string-cast null input\njQuery.parseJSON = function( data ) {\n	return JSON.parse( data + \"\" );\n};\n\n\n// Cross-browser xml parsing\njQuery.parseXML = function( data ) {\n	var xml, tmp;\n	if ( !data || typeof data !== \"string\" ) {\n		return null;\n	}\n\n	// Support: IE9\n	try {\n		tmp = new DOMParser();\n		xml = tmp.parseFromString( data, \"text/xml\" );\n	} catch ( e ) {\n		xml = undefined;\n	}\n\n	if ( !xml || xml.getElementsByTagName( \"parsererror\" ).length ) {\n		jQuery.error( \"Invalid XML: \" + data );\n	}\n	return xml;\n};\n\n\nvar\n	// Document location\n	ajaxLocParts,\n	ajaxLocation,\n\n	rhash = /#.*$/,\n	rts = /([?&])_=[^&]*/,\n	rheaders = /^(.*?):[ \\t]*([^\\r\\n]*)$/mg,\n	// #7653, #8125, #8152: local protocol detection\n	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,\n	rnoContent = /^(?:GET|HEAD)$/,\n	rprotocol = /^\\/\\//,\n	rurl = /^([\\w.+-]+:)(?:\\/\\/(?:[^\\/?#]*@|)([^\\/?#:]*)(?::(\\d+)|)|)/,\n\n	/* Prefilters\n	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)\n	 * 2) These are called:\n	 *    - BEFORE asking for a transport\n	 *    - AFTER param serialization (s.data is a string if s.processData is true)\n	 * 3) key is the dataType\n	 * 4) the catchall symbol \"*\" can be used\n	 * 5) execution will start with transport dataType and THEN continue down to \"*\" if needed\n	 */\n	prefilters = {},\n\n	/* Transports bindings\n	 * 1) key is the dataType\n	 * 2) the catchall symbol \"*\" can be used\n	 * 3) selection will start with transport dataType and THEN go to \"*\" if needed\n	 */\n	transports = {},\n\n	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression\n	allTypes = \"*/\".concat(\"*\");\n\n// #8138, IE may throw an exception when accessing\n// a field from window.location if document.domain has been set\ntry {\n	ajaxLocation = location.href;\n} catch( e ) {\n	// Use the href attribute of an A element\n	// since IE will modify it given document.location\n	ajaxLocation = document.createElement( \"a\" );\n	ajaxLocation.href = \"\";\n	ajaxLocation = ajaxLocation.href;\n}\n\n// Segment location into parts\najaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];\n\n// Base \"constructor\" for jQuery.ajaxPrefilter and jQuery.ajaxTransport\nfunction addToPrefiltersOrTransports( structure ) {\n\n	// dataTypeExpression is optional and defaults to \"*\"\n	return function( dataTypeExpression, func ) {\n\n		if ( typeof dataTypeExpression !== \"string\" ) {\n			func = dataTypeExpression;\n			dataTypeExpression = \"*\";\n		}\n\n		var dataType,\n			i = 0,\n			dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];\n\n		if ( jQuery.isFunction( func ) ) {\n			// For each dataType in the dataTypeExpression\n			while ( (dataType = dataTypes[i++]) ) {\n				// Prepend if requested\n				if ( dataType[0] === \"+\" ) {\n					dataType = dataType.slice( 1 ) || \"*\";\n					(structure[ dataType ] = structure[ dataType ] || []).unshift( func );\n\n				// Otherwise append\n				} else {\n					(structure[ dataType ] = structure[ dataType ] || []).push( func );\n				}\n			}\n		}\n	};\n}\n\n// Base inspection function for prefilters and transports\nfunction inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {\n\n	var inspected = {},\n		seekingTransport = ( structure === transports );\n\n	function inspect( dataType ) {\n		var selected;\n		inspected[ dataType ] = true;\n		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {\n			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );\n			if ( typeof dataTypeOrTransport === \"string\" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {\n				options.dataTypes.unshift( dataTypeOrTransport );\n				inspect( dataTypeOrTransport );\n				return false;\n			} else if ( seekingTransport ) {\n				return !( selected = dataTypeOrTransport );\n			}\n		});\n		return selected;\n	}\n\n	return inspect( options.dataTypes[ 0 ] ) || !inspected[ \"*\" ] && inspect( \"*\" );\n}\n\n// A special extend for ajax options\n// that takes \"flat\" options (not to be deep extended)\n// Fixes #9887\nfunction ajaxExtend( target, src ) {\n	var key, deep,\n		flatOptions = jQuery.ajaxSettings.flatOptions || {};\n\n	for ( key in src ) {\n		if ( src[ key ] !== undefined ) {\n			( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];\n		}\n	}\n	if ( deep ) {\n		jQuery.extend( true, target, deep );\n	}\n\n	return target;\n}\n\n/* Handles responses to an ajax request:\n * - finds the right dataType (mediates between content-type and expected dataType)\n * - returns the corresponding response\n */\nfunction ajaxHandleResponses( s, jqXHR, responses ) {\n\n	var ct, type, finalDataType, firstDataType,\n		contents = s.contents,\n		dataTypes = s.dataTypes;\n\n	// Remove auto dataType and get content-type in the process\n	while ( dataTypes[ 0 ] === \"*\" ) {\n		dataTypes.shift();\n		if ( ct === undefined ) {\n			ct = s.mimeType || jqXHR.getResponseHeader(\"Content-Type\");\n		}\n	}\n\n	// Check if we\'re dealing with a known content-type\n	if ( ct ) {\n		for ( type in contents ) {\n			if ( contents[ type ] && contents[ type ].test( ct ) ) {\n				dataTypes.unshift( type );\n				break;\n			}\n		}\n	}\n\n	// Check to see if we have a response for the expected dataType\n	if ( dataTypes[ 0 ] in responses ) {\n		finalDataType = dataTypes[ 0 ];\n	} else {\n		// Try convertible dataTypes\n		for ( type in responses ) {\n			if ( !dataTypes[ 0 ] || s.converters[ type + \" \" + dataTypes[0] ] ) {\n				finalDataType = type;\n				break;\n			}\n			if ( !firstDataType ) {\n				firstDataType = type;\n			}\n		}\n		// Or just use first one\n		finalDataType = finalDataType || firstDataType;\n	}\n\n	// If we found a dataType\n	// We add the dataType to the list if needed\n	// and return the corresponding response\n	if ( finalDataType ) {\n		if ( finalDataType !== dataTypes[ 0 ] ) {\n			dataTypes.unshift( finalDataType );\n		}\n		return responses[ finalDataType ];\n	}\n}\n\n/* Chain conversions given the request and the original response\n * Also sets the responseXXX fields on the jqXHR instance\n */\nfunction ajaxConvert( s, response, jqXHR, isSuccess ) {\n	var conv2, current, conv, tmp, prev,\n		converters = {},\n		// Work with a copy of dataTypes in case we need to modify it for conversion\n		dataTypes = s.dataTypes.slice();\n\n	// Create converters map with lowercased keys\n	if ( dataTypes[ 1 ] ) {\n		for ( conv in s.converters ) {\n			converters[ conv.toLowerCase() ] = s.converters[ conv ];\n		}\n	}\n\n	current = dataTypes.shift();\n\n	// Convert to each sequential dataType\n	while ( current ) {\n\n		if ( s.responseFields[ current ] ) {\n			jqXHR[ s.responseFields[ current ] ] = response;\n		}\n\n		// Apply the dataFilter if provided\n		if ( !prev && isSuccess && s.dataFilter ) {\n			response = s.dataFilter( response, s.dataType );\n		}\n\n		prev = current;\n		current = dataTypes.shift();\n\n		if ( current ) {\n\n		// There\'s only work to do if current dataType is non-auto\n			if ( current === \"*\" ) {\n\n				current = prev;\n\n			// Convert response if prev dataType is non-auto and differs from current\n			} else if ( prev !== \"*\" && prev !== current ) {\n\n				// Seek a direct converter\n				conv = converters[ prev + \" \" + current ] || converters[ \"* \" + current ];\n\n				// If none found, seek a pair\n				if ( !conv ) {\n					for ( conv2 in converters ) {\n\n						// If conv2 outputs current\n						tmp = conv2.split( \" \" );\n						if ( tmp[ 1 ] === current ) {\n\n							// If prev can be converted to accepted input\n							conv = converters[ prev + \" \" + tmp[ 0 ] ] ||\n								converters[ \"* \" + tmp[ 0 ] ];\n							if ( conv ) {\n								// Condense equivalence converters\n								if ( conv === true ) {\n									conv = converters[ conv2 ];\n\n								// Otherwise, insert the intermediate dataType\n								} else if ( converters[ conv2 ] !== true ) {\n									current = tmp[ 0 ];\n									dataTypes.unshift( tmp[ 1 ] );\n								}\n								break;\n							}\n						}\n					}\n				}\n\n				// Apply converter (if not an equivalence)\n				if ( conv !== true ) {\n\n					// Unless errors are allowed to bubble, catch and return them\n					if ( conv && s[ \"throws\" ] ) {\n						response = conv( response );\n					} else {\n						try {\n							response = conv( response );\n						} catch ( e ) {\n							return { state: \"parsererror\", error: conv ? e : \"No conversion from \" + prev + \" to \" + current };\n						}\n					}\n				}\n			}\n		}\n	}\n\n	return { state: \"success\", data: response };\n}\n\njQuery.extend({\n\n	// Counter for holding the number of active queries\n	active: 0,\n\n	// Last-Modified header cache for next request\n	lastModified: {},\n	etag: {},\n\n	ajaxSettings: {\n		url: ajaxLocation,\n		type: \"GET\",\n		isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),\n		global: true,\n		processData: true,\n		async: true,\n		contentType: \"application/x-www-form-urlencoded; charset=UTF-8\",\n		/*\n		timeout: 0,\n		data: null,\n		dataType: null,\n		username: null,\n		password: null,\n		cache: null,\n		throws: false,\n		traditional: false,\n		headers: {},\n		*/\n\n		accepts: {\n			\"*\": allTypes,\n			text: \"text/plain\",\n			html: \"text/html\",\n			xml: \"application/xml, text/xml\",\n			json: \"application/json, text/javascript\"\n		},\n\n		contents: {\n			xml: /xml/,\n			html: /html/,\n			json: /json/\n		},\n\n		responseFields: {\n			xml: \"responseXML\",\n			text: \"responseText\",\n			json: \"responseJSON\"\n		},\n\n		// Data converters\n		// Keys separate source (or catchall \"*\") and destination types with a single space\n		converters: {\n\n			// Convert anything to text\n			\"* text\": String,\n\n			// Text to html (true = no transformation)\n			\"text html\": true,\n\n			// Evaluate text as a json expression\n			\"text json\": jQuery.parseJSON,\n\n			// Parse text as xml\n			\"text xml\": jQuery.parseXML\n		},\n\n		// For options that shouldn\'t be deep extended:\n		// you can add your own custom options here if\n		// and when you create one that shouldn\'t be\n		// deep extended (see ajaxExtend)\n		flatOptions: {\n			url: true,\n			context: true\n		}\n	},\n\n	// Creates a full fledged settings object into target\n	// with both ajaxSettings and settings fields.\n	// If target is omitted, writes into ajaxSettings.\n	ajaxSetup: function( target, settings ) {\n		return settings ?\n\n			// Building a settings object\n			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :\n\n			// Extending ajaxSettings\n			ajaxExtend( jQuery.ajaxSettings, target );\n	},\n\n	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),\n	ajaxTransport: addToPrefiltersOrTransports( transports ),\n\n	// Main method\n	ajax: function( url, options ) {\n\n		// If url is an object, simulate pre-1.5 signature\n		if ( typeof url === \"object\" ) {\n			options = url;\n			url = undefined;\n		}\n\n		// Force options to be an object\n		options = options || {};\n\n		var transport,\n			// URL without anti-cache param\n			cacheURL,\n			// Response headers\n			responseHeadersString,\n			responseHeaders,\n			// timeout handle\n			timeoutTimer,\n			// Cross-domain detection vars\n			parts,\n			// To know if global events are to be dispatched\n			fireGlobals,\n			// Loop variable\n			i,\n			// Create the final options object\n			s = jQuery.ajaxSetup( {}, options ),\n			// Callbacks context\n			callbackContext = s.context || s,\n			// Context for global events is callbackContext if it is a DOM node or jQuery collection\n			globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?\n				jQuery( callbackContext ) :\n				jQuery.event,\n			// Deferreds\n			deferred = jQuery.Deferred(),\n			completeDeferred = jQuery.Callbacks(\"once memory\"),\n			// Status-dependent callbacks\n			statusCode = s.statusCode || {},\n			// Headers (they are sent all at once)\n			requestHeaders = {},\n			requestHeadersNames = {},\n			// The jqXHR state\n			state = 0,\n			// Default abort message\n			strAbort = \"canceled\",\n			// Fake xhr\n			jqXHR = {\n				readyState: 0,\n\n				// Builds headers hashtable if needed\n				getResponseHeader: function( key ) {\n					var match;\n					if ( state === 2 ) {\n						if ( !responseHeaders ) {\n							responseHeaders = {};\n							while ( (match = rheaders.exec( responseHeadersString )) ) {\n								responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];\n							}\n						}\n						match = responseHeaders[ key.toLowerCase() ];\n					}\n					return match == null ? null : match;\n				},\n\n				// Raw string\n				getAllResponseHeaders: function() {\n					return state === 2 ? responseHeadersString : null;\n				},\n\n				// Caches the header\n				setRequestHeader: function( name, value ) {\n					var lname = name.toLowerCase();\n					if ( !state ) {\n						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;\n						requestHeaders[ name ] = value;\n					}\n					return this;\n				},\n\n				// Overrides response content-type header\n				overrideMimeType: function( type ) {\n					if ( !state ) {\n						s.mimeType = type;\n					}\n					return this;\n				},\n\n				// Status-dependent callbacks\n				statusCode: function( map ) {\n					var code;\n					if ( map ) {\n						if ( state < 2 ) {\n							for ( code in map ) {\n								// Lazy-add the new callback in a way that preserves old ones\n								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];\n							}\n						} else {\n							// Execute the appropriate callbacks\n							jqXHR.always( map[ jqXHR.status ] );\n						}\n					}\n					return this;\n				},\n\n				// Cancel the request\n				abort: function( statusText ) {\n					var finalText = statusText || strAbort;\n					if ( transport ) {\n						transport.abort( finalText );\n					}\n					done( 0, finalText );\n					return this;\n				}\n			};\n\n		// Attach deferreds\n		deferred.promise( jqXHR ).complete = completeDeferred.add;\n		jqXHR.success = jqXHR.done;\n		jqXHR.error = jqXHR.fail;\n\n		// Remove hash character (#7531: and string promotion)\n		// Add protocol if not provided (prefilters might expect it)\n		// Handle falsy url in the settings object (#10093: consistency with old signature)\n		// We also use the url parameter if available\n		s.url = ( ( url || s.url || ajaxLocation ) + \"\" ).replace( rhash, \"\" )\n			.replace( rprotocol, ajaxLocParts[ 1 ] + \"//\" );\n\n		// Alias method option to type as per ticket #12004\n		s.type = options.method || options.type || s.method || s.type;\n\n		// Extract dataTypes list\n		s.dataTypes = jQuery.trim( s.dataType || \"*\" ).toLowerCase().match( rnotwhite ) || [ \"\" ];\n\n		// A cross-domain request is in order when we have a protocol:host:port mismatch\n		if ( s.crossDomain == null ) {\n			parts = rurl.exec( s.url.toLowerCase() );\n			s.crossDomain = !!( parts &&\n				( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||\n					( parts[ 3 ] || ( parts[ 1 ] === \"http:\" ? \"80\" : \"443\" ) ) !==\n						( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === \"http:\" ? \"80\" : \"443\" ) ) )\n			);\n		}\n\n		// Convert data if not already a string\n		if ( s.data && s.processData && typeof s.data !== \"string\" ) {\n			s.data = jQuery.param( s.data, s.traditional );\n		}\n\n		// Apply prefilters\n		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );\n\n		// If request was aborted inside a prefilter, stop there\n		if ( state === 2 ) {\n			return jqXHR;\n		}\n\n		// We can fire global events as of now if asked to\n		fireGlobals = s.global;\n\n		// Watch for a new set of requests\n		if ( fireGlobals && jQuery.active++ === 0 ) {\n			jQuery.event.trigger(\"ajaxStart\");\n		}\n\n		// Uppercase the type\n		s.type = s.type.toUpperCase();\n\n		// Determine if request has content\n		s.hasContent = !rnoContent.test( s.type );\n\n		// Save the URL in case we\'re toying with the If-Modified-Since\n		// and/or If-None-Match header later on\n		cacheURL = s.url;\n\n		// More options handling for requests with no content\n		if ( !s.hasContent ) {\n\n			// If data is available, append data to url\n			if ( s.data ) {\n				cacheURL = ( s.url += ( rquery.test( cacheURL ) ? \"&\" : \"?\" ) + s.data );\n				// #9682: remove data so that it\'s not used in an eventual retry\n				delete s.data;\n			}\n\n			// Add anti-cache in url if needed\n			if ( s.cache === false ) {\n				s.url = rts.test( cacheURL ) ?\n\n					// If there is already a \'_\' parameter, set its value\n					cacheURL.replace( rts, \"$1_=\" + nonce++ ) :\n\n					// Otherwise add one to the end\n					cacheURL + ( rquery.test( cacheURL ) ? \"&\" : \"?\" ) + \"_=\" + nonce++;\n			}\n		}\n\n		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.\n		if ( s.ifModified ) {\n			if ( jQuery.lastModified[ cacheURL ] ) {\n				jqXHR.setRequestHeader( \"If-Modified-Since\", jQuery.lastModified[ cacheURL ] );\n			}\n			if ( jQuery.etag[ cacheURL ] ) {\n				jqXHR.setRequestHeader( \"If-None-Match\", jQuery.etag[ cacheURL ] );\n			}\n		}\n\n		// Set the correct header, if data is being sent\n		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {\n			jqXHR.setRequestHeader( \"Content-Type\", s.contentType );\n		}\n\n		// Set the Accepts header for the server, depending on the dataType\n		jqXHR.setRequestHeader(\n			\"Accept\",\n			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?\n				s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== \"*\" ? \", \" + allTypes + \"; q=0.01\" : \"\" ) :\n				s.accepts[ \"*\" ]\n		);\n\n		// Check for headers option\n		for ( i in s.headers ) {\n			jqXHR.setRequestHeader( i, s.headers[ i ] );\n		}\n\n		// Allow custom headers/mimetypes and early abort\n		if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {\n			// Abort if not done already and return\n			return jqXHR.abort();\n		}\n\n		// aborting is no longer a cancellation\n		strAbort = \"abort\";\n\n		// Install callbacks on deferreds\n		for ( i in { success: 1, error: 1, complete: 1 } ) {\n			jqXHR[ i ]( s[ i ] );\n		}\n\n		// Get transport\n		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );\n\n		// If no transport, we auto-abort\n		if ( !transport ) {\n			done( -1, \"No Transport\" );\n		} else {\n			jqXHR.readyState = 1;\n\n			// Send global event\n			if ( fireGlobals ) {\n				globalEventContext.trigger( \"ajaxSend\", [ jqXHR, s ] );\n			}\n			// Timeout\n			if ( s.async && s.timeout > 0 ) {\n				timeoutTimer = setTimeout(function() {\n					jqXHR.abort(\"timeout\");\n				}, s.timeout );\n			}\n\n			try {\n				state = 1;\n				transport.send( requestHeaders, done );\n			} catch ( e ) {\n				// Propagate exception as error if not done\n				if ( state < 2 ) {\n					done( -1, e );\n				// Simply rethrow otherwise\n				} else {\n					throw e;\n				}\n			}\n		}\n\n		// Callback for when everything is done\n		function done( status, nativeStatusText, responses, headers ) {\n			var isSuccess, success, error, response, modified,\n				statusText = nativeStatusText;\n\n			// Called once\n			if ( state === 2 ) {\n				return;\n			}\n\n			// State is \"done\" now\n			state = 2;\n\n			// Clear timeout if it exists\n			if ( timeoutTimer ) {\n				clearTimeout( timeoutTimer );\n			}\n\n			// Dereference transport for early garbage collection\n			// (no matter how long the jqXHR object will be used)\n			transport = undefined;\n\n			// Cache response headers\n			responseHeadersString = headers || \"\";\n\n			// Set readyState\n			jqXHR.readyState = status > 0 ? 4 : 0;\n\n			// Determine if successful\n			isSuccess = status >= 200 && status < 300 || status === 304;\n\n			// Get response data\n			if ( responses ) {\n				response = ajaxHandleResponses( s, jqXHR, responses );\n			}\n\n			// Convert no matter what (that way responseXXX fields are always set)\n			response = ajaxConvert( s, response, jqXHR, isSuccess );\n\n			// If successful, handle type chaining\n			if ( isSuccess ) {\n\n				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.\n				if ( s.ifModified ) {\n					modified = jqXHR.getResponseHeader(\"Last-Modified\");\n					if ( modified ) {\n						jQuery.lastModified[ cacheURL ] = modified;\n					}\n					modified = jqXHR.getResponseHeader(\"etag\");\n					if ( modified ) {\n						jQuery.etag[ cacheURL ] = modified;\n					}\n				}\n\n				// if no content\n				if ( status === 204 || s.type === \"HEAD\" ) {\n					statusText = \"nocontent\";\n\n				// if not modified\n				} else if ( status === 304 ) {\n					statusText = \"notmodified\";\n\n				// If we have data, let\'s convert it\n				} else {\n					statusText = response.state;\n					success = response.data;\n					error = response.error;\n					isSuccess = !error;\n				}\n			} else {\n				// We extract error from statusText\n				// then normalize statusText and status for non-aborts\n				error = statusText;\n				if ( status || !statusText ) {\n					statusText = \"error\";\n					if ( status < 0 ) {\n						status = 0;\n					}\n				}\n			}\n\n			// Set data for the fake xhr object\n			jqXHR.status = status;\n			jqXHR.statusText = ( nativeStatusText || statusText ) + \"\";\n\n			// Success/Error\n			if ( isSuccess ) {\n				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );\n			} else {\n				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );\n			}\n\n			// Status-dependent callbacks\n			jqXHR.statusCode( statusCode );\n			statusCode = undefined;\n\n			if ( fireGlobals ) {\n				globalEventContext.trigger( isSuccess ? \"ajaxSuccess\" : \"ajaxError\",\n					[ jqXHR, s, isSuccess ? success : error ] );\n			}\n\n			// Complete\n			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );\n\n			if ( fireGlobals ) {\n				globalEventContext.trigger( \"ajaxComplete\", [ jqXHR, s ] );\n				// Handle the global AJAX counter\n				if ( !( --jQuery.active ) ) {\n					jQuery.event.trigger(\"ajaxStop\");\n				}\n			}\n		}\n\n		return jqXHR;\n	},\n\n	getJSON: function( url, data, callback ) {\n		return jQuery.get( url, data, callback, \"json\" );\n	},\n\n	getScript: function( url, callback ) {\n		return jQuery.get( url, undefined, callback, \"script\" );\n	}\n});\n\njQuery.each( [ \"get\", \"post\" ], function( i, method ) {\n	jQuery[ method ] = function( url, data, callback, type ) {\n		// shift arguments if data argument was omitted\n		if ( jQuery.isFunction( data ) ) {\n			type = type || callback;\n			callback = data;\n			data = undefined;\n		}\n\n		return jQuery.ajax({\n			url: url,\n			type: method,\n			dataType: type,\n			data: data,\n			success: callback\n		});\n	};\n});\n\n// Attach a bunch of functions for handling common AJAX events\njQuery.each( [ \"ajaxStart\", \"ajaxStop\", \"ajaxComplete\", \"ajaxError\", \"ajaxSuccess\", \"ajaxSend\" ], function( i, type ) {\n	jQuery.fn[ type ] = function( fn ) {\n		return this.on( type, fn );\n	};\n});\n\n\njQuery._evalUrl = function( url ) {\n	return jQuery.ajax({\n		url: url,\n		type: \"GET\",\n		dataType: \"script\",\n		async: false,\n		global: false,\n		\"throws\": true\n	});\n};\n\n\njQuery.fn.extend({\n	wrapAll: function( html ) {\n		var wrap;\n\n		if ( jQuery.isFunction( html ) ) {\n			return this.each(function( i ) {\n				jQuery( this ).wrapAll( html.call(this, i) );\n			});\n		}\n\n		if ( this[ 0 ] ) {\n\n			// The elements to wrap the target around\n			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );\n\n			if ( this[ 0 ].parentNode ) {\n				wrap.insertBefore( this[ 0 ] );\n			}\n\n			wrap.map(function() {\n				var elem = this;\n\n				while ( elem.firstElementChild ) {\n					elem = elem.firstElementChild;\n				}\n\n				return elem;\n			}).append( this );\n		}\n\n		return this;\n	},\n\n	wrapInner: function( html ) {\n		if ( jQuery.isFunction( html ) ) {\n			return this.each(function( i ) {\n				jQuery( this ).wrapInner( html.call(this, i) );\n			});\n		}\n\n		return this.each(function() {\n			var self = jQuery( this ),\n				contents = self.contents();\n\n			if ( contents.length ) {\n				contents.wrapAll( html );\n\n			} else {\n				self.append( html );\n			}\n		});\n	},\n\n	wrap: function( html ) {\n		var isFunction = jQuery.isFunction( html );\n\n		return this.each(function( i ) {\n			jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );\n		});\n	},\n\n	unwrap: function() {\n		return this.parent().each(function() {\n			if ( !jQuery.nodeName( this, \"body\" ) ) {\n				jQuery( this ).replaceWith( this.childNodes );\n			}\n		}).end();\n	}\n});\n\n\njQuery.expr.filters.hidden = function( elem ) {\n	// Support: Opera <= 12.12\n	// Opera reports offsetWidths and offsetHeights less than zero on some elements\n	return elem.offsetWidth <= 0 && elem.offsetHeight <= 0;\n};\njQuery.expr.filters.visible = function( elem ) {\n	return !jQuery.expr.filters.hidden( elem );\n};\n\n\n\n\nvar r20 = /%20/g,\n	rbracket = /\\[\\]$/,\n	rCRLF = /\\r?\\n/g,\n	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,\n	rsubmittable = /^(?:input|select|textarea|keygen)/i;\n\nfunction buildParams( prefix, obj, traditional, add ) {\n	var name;\n\n	if ( jQuery.isArray( obj ) ) {\n		// Serialize array item.\n		jQuery.each( obj, function( i, v ) {\n			if ( traditional || rbracket.test( prefix ) ) {\n				// Treat each array item as a scalar.\n				add( prefix, v );\n\n			} else {\n				// Item is non-scalar (array or object), encode its numeric index.\n				buildParams( prefix + \"[\" + ( typeof v === \"object\" ? i : \"\" ) + \"]\", v, traditional, add );\n			}\n		});\n\n	} else if ( !traditional && jQuery.type( obj ) === \"object\" ) {\n		// Serialize object item.\n		for ( name in obj ) {\n			buildParams( prefix + \"[\" + name + \"]\", obj[ name ], traditional, add );\n		}\n\n	} else {\n		// Serialize scalar item.\n		add( prefix, obj );\n	}\n}\n\n// Serialize an array of form elements or a set of\n// key/values into a query string\njQuery.param = function( a, traditional ) {\n	var prefix,\n		s = [],\n		add = function( key, value ) {\n			// If value is a function, invoke it and return its value\n			value = jQuery.isFunction( value ) ? value() : ( value == null ? \"\" : value );\n			s[ s.length ] = encodeURIComponent( key ) + \"=\" + encodeURIComponent( value );\n		};\n\n	// Set traditional to true for jQuery <= 1.3.2 behavior.\n	if ( traditional === undefined ) {\n		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;\n	}\n\n	// If an array was passed in, assume that it is an array of form elements.\n	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {\n		// Serialize the form elements\n		jQuery.each( a, function() {\n			add( this.name, this.value );\n		});\n\n	} else {\n		// If traditional, encode the \"old\" way (the way 1.3.2 or older\n		// did it), otherwise encode params recursively.\n		for ( prefix in a ) {\n			buildParams( prefix, a[ prefix ], traditional, add );\n		}\n	}\n\n	// Return the resulting serialization\n	return s.join( \"&\" ).replace( r20, \"+\" );\n};\n\njQuery.fn.extend({\n	serialize: function() {\n		return jQuery.param( this.serializeArray() );\n	},\n	serializeArray: function() {\n		return this.map(function() {\n			// Can add propHook for \"elements\" to filter or add form elements\n			var elements = jQuery.prop( this, \"elements\" );\n			return elements ? jQuery.makeArray( elements ) : this;\n		})\n		.filter(function() {\n			var type = this.type;\n\n			// Use .is( \":disabled\" ) so that fieldset[disabled] works\n			return this.name && !jQuery( this ).is( \":disabled\" ) &&\n				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&\n				( this.checked || !rcheckableType.test( type ) );\n		})\n		.map(function( i, elem ) {\n			var val = jQuery( this ).val();\n\n			return val == null ?\n				null :\n				jQuery.isArray( val ) ?\n					jQuery.map( val, function( val ) {\n						return { name: elem.name, value: val.replace( rCRLF, \"\\r\\n\" ) };\n					}) :\n					{ name: elem.name, value: val.replace( rCRLF, \"\\r\\n\" ) };\n		}).get();\n	}\n});\n\n\njQuery.ajaxSettings.xhr = function() {\n	try {\n		return new XMLHttpRequest();\n	} catch( e ) {}\n};\n\nvar xhrId = 0,\n	xhrCallbacks = {},\n	xhrSuccessStatus = {\n		// file protocol always yields status code 0, assume 200\n		0: 200,\n		// Support: IE9\n		// #1450: sometimes IE returns 1223 when it should be 204\n		1223: 204\n	},\n	xhrSupported = jQuery.ajaxSettings.xhr();\n\n// Support: IE9\n// Open requests must be manually aborted on unload (#5280)\nif ( window.ActiveXObject ) {\n	jQuery( window ).on( \"unload\", function() {\n		for ( var key in xhrCallbacks ) {\n			xhrCallbacks[ key ]();\n		}\n	});\n}\n\nsupport.cors = !!xhrSupported && ( \"withCredentials\" in xhrSupported );\nsupport.ajax = xhrSupported = !!xhrSupported;\n\njQuery.ajaxTransport(function( options ) {\n	var callback;\n\n	// Cross domain only allowed if supported through XMLHttpRequest\n	if ( support.cors || xhrSupported && !options.crossDomain ) {\n		return {\n			send: function( headers, complete ) {\n				var i,\n					xhr = options.xhr(),\n					id = ++xhrId;\n\n				xhr.open( options.type, options.url, options.async, options.username, options.password );\n\n				// Apply custom fields if provided\n				if ( options.xhrFields ) {\n					for ( i in options.xhrFields ) {\n						xhr[ i ] = options.xhrFields[ i ];\n					}\n				}\n\n				// Override mime type if needed\n				if ( options.mimeType && xhr.overrideMimeType ) {\n					xhr.overrideMimeType( options.mimeType );\n				}\n\n				// X-Requested-With header\n				// For cross-domain requests, seeing as conditions for a preflight are\n				// akin to a jigsaw puzzle, we simply never set it to be sure.\n				// (it can always be set on a per-request basis or even using ajaxSetup)\n				// For same-domain requests, won\'t change header if already provided.\n				if ( !options.crossDomain && !headers[\"X-Requested-With\"] ) {\n					headers[\"X-Requested-With\"] = \"XMLHttpRequest\";\n				}\n\n				// Set headers\n				for ( i in headers ) {\n					xhr.setRequestHeader( i, headers[ i ] );\n				}\n\n				// Callback\n				callback = function( type ) {\n					return function() {\n						if ( callback ) {\n							delete xhrCallbacks[ id ];\n							callback = xhr.onload = xhr.onerror = null;\n\n							if ( type === \"abort\" ) {\n								xhr.abort();\n							} else if ( type === \"error\" ) {\n								complete(\n									// file: protocol always yields status 0; see #8605, #14207\n									xhr.status,\n									xhr.statusText\n								);\n							} else {\n								complete(\n									xhrSuccessStatus[ xhr.status ] || xhr.status,\n									xhr.statusText,\n									// Support: IE9\n									// Accessing binary-data responseText throws an exception\n									// (#11426)\n									typeof xhr.responseText === \"string\" ? {\n										text: xhr.responseText\n									} : undefined,\n									xhr.getAllResponseHeaders()\n								);\n							}\n						}\n					};\n				};\n\n				// Listen to events\n				xhr.onload = callback();\n				xhr.onerror = callback(\"error\");\n\n				// Create the abort callback\n				callback = xhrCallbacks[ id ] = callback(\"abort\");\n\n				try {\n					// Do send the request (this may raise an exception)\n					xhr.send( options.hasContent && options.data || null );\n				} catch ( e ) {\n					// #14683: Only rethrow if this hasn\'t been notified as an error yet\n					if ( callback ) {\n						throw e;\n					}\n				}\n			},\n\n			abort: function() {\n				if ( callback ) {\n					callback();\n				}\n			}\n		};\n	}\n});\n\n\n\n\n// Install script dataType\njQuery.ajaxSetup({\n	accepts: {\n		script: \"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript\"\n	},\n	contents: {\n		script: /(?:java|ecma)script/\n	},\n	converters: {\n		\"text script\": function( text ) {\n			jQuery.globalEval( text );\n			return text;\n		}\n	}\n});\n\n// Handle cache\'s special case and crossDomain\njQuery.ajaxPrefilter( \"script\", function( s ) {\n	if ( s.cache === undefined ) {\n		s.cache = false;\n	}\n	if ( s.crossDomain ) {\n		s.type = \"GET\";\n	}\n});\n\n// Bind script tag hack transport\njQuery.ajaxTransport( \"script\", function( s ) {\n	// This transport only deals with cross domain requests\n	if ( s.crossDomain ) {\n		var script, callback;\n		return {\n			send: function( _, complete ) {\n				script = jQuery(\"<script>\").prop({\n					async: true,\n					charset: s.scriptCharset,\n					src: s.url\n				}).on(\n					\"load error\",\n					callback = function( evt ) {\n						script.remove();\n						callback = null;\n						if ( evt ) {\n							complete( evt.type === \"error\" ? 404 : 200, evt.type );\n						}\n					}\n				);\n				document.head.appendChild( script[ 0 ] );\n			},\n			abort: function() {\n				if ( callback ) {\n					callback();\n				}\n			}\n		};\n	}\n});\n\n\n\n\nvar oldCallbacks = [],\n	rjsonp = /(=)\\?(?=&|$)|\\?\\?/;\n\n// Default jsonp settings\njQuery.ajaxSetup({\n	jsonp: \"callback\",\n	jsonpCallback: function() {\n		var callback = oldCallbacks.pop() || ( jQuery.expando + \"_\" + ( nonce++ ) );\n		this[ callback ] = true;\n		return callback;\n	}\n});\n\n// Detect, normalize options and install callbacks for jsonp requests\njQuery.ajaxPrefilter( \"json jsonp\", function( s, originalSettings, jqXHR ) {\n\n	var callbackName, overwritten, responseContainer,\n		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?\n			\"url\" :\n			typeof s.data === \"string\" && !( s.contentType || \"\" ).indexOf(\"application/x-www-form-urlencoded\") && rjsonp.test( s.data ) && \"data\"\n		);\n\n	// Handle iff the expected data type is \"jsonp\" or we have a parameter to set\n	if ( jsonProp || s.dataTypes[ 0 ] === \"jsonp\" ) {\n\n		// Get callback name, remembering preexisting value associated with it\n		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?\n			s.jsonpCallback() :\n			s.jsonpCallback;\n\n		// Insert callback into url or form data\n		if ( jsonProp ) {\n			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, \"$1\" + callbackName );\n		} else if ( s.jsonp !== false ) {\n			s.url += ( rquery.test( s.url ) ? \"&\" : \"?\" ) + s.jsonp + \"=\" + callbackName;\n		}\n\n		// Use data converter to retrieve json after script execution\n		s.converters[\"script json\"] = function() {\n			if ( !responseContainer ) {\n				jQuery.error( callbackName + \" was not called\" );\n			}\n			return responseContainer[ 0 ];\n		};\n\n		// force json dataType\n		s.dataTypes[ 0 ] = \"json\";\n\n		// Install callback\n		overwritten = window[ callbackName ];\n		window[ callbackName ] = function() {\n			responseContainer = arguments;\n		};\n\n		// Clean-up function (fires after converters)\n		jqXHR.always(function() {\n			// Restore preexisting value\n			window[ callbackName ] = overwritten;\n\n			// Save back as free\n			if ( s[ callbackName ] ) {\n				// make sure that re-using the options doesn\'t screw things around\n				s.jsonpCallback = originalSettings.jsonpCallback;\n\n				// save the callback name for future use\n				oldCallbacks.push( callbackName );\n			}\n\n			// Call if it was a function and we have a response\n			if ( responseContainer && jQuery.isFunction( overwritten ) ) {\n				overwritten( responseContainer[ 0 ] );\n			}\n\n			responseContainer = overwritten = undefined;\n		});\n\n		// Delegate to script\n		return \"script\";\n	}\n});\n\n\n\n\n// data: string of html\n// context (optional): If specified, the fragment will be created in this context, defaults to document\n// keepScripts (optional): If true, will include scripts passed in the html string\njQuery.parseHTML = function( data, context, keepScripts ) {\n	if ( !data || typeof data !== \"string\" ) {\n		return null;\n	}\n	if ( typeof context === \"boolean\" ) {\n		keepScripts = context;\n		context = false;\n	}\n	context = context || document;\n\n	var parsed = rsingleTag.exec( data ),\n		scripts = !keepScripts && [];\n\n	// Single tag\n	if ( parsed ) {\n		return [ context.createElement( parsed[1] ) ];\n	}\n\n	parsed = jQuery.buildFragment( [ data ], context, scripts );\n\n	if ( scripts && scripts.length ) {\n		jQuery( scripts ).remove();\n	}\n\n	return jQuery.merge( [], parsed.childNodes );\n};\n\n\n// Keep a copy of the old load method\nvar _load = jQuery.fn.load;\n\n/**\n * Load a url into a page\n */\njQuery.fn.load = function( url, params, callback ) {\n	if ( typeof url !== \"string\" && _load ) {\n		return _load.apply( this, arguments );\n	}\n\n	var selector, type, response,\n		self = this,\n		off = url.indexOf(\" \");\n\n	if ( off >= 0 ) {\n		selector = jQuery.trim( url.slice( off ) );\n		url = url.slice( 0, off );\n	}\n\n	// If it\'s a function\n	if ( jQuery.isFunction( params ) ) {\n\n		// We assume that it\'s the callback\n		callback = params;\n		params = undefined;\n\n	// Otherwise, build a param string\n	} else if ( params && typeof params === \"object\" ) {\n		type = \"POST\";\n	}\n\n	// If we have elements to modify, make the request\n	if ( self.length > 0 ) {\n		jQuery.ajax({\n			url: url,\n\n			// if \"type\" variable is undefined, then \"GET\" method will be used\n			type: type,\n			dataType: \"html\",\n			data: params\n		}).done(function( responseText ) {\n\n			// Save response for use in complete callback\n			response = arguments;\n\n			self.html( selector ?\n\n				// If a selector was specified, locate the right elements in a dummy div\n				// Exclude scripts to avoid IE \'Permission Denied\' errors\n				jQuery(\"<div>\").append( jQuery.parseHTML( responseText ) ).find( selector ) :\n\n				// Otherwise use the full result\n				responseText );\n\n		}).complete( callback && function( jqXHR, status ) {\n			self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );\n		});\n	}\n\n	return this;\n};\n\n\n\n\njQuery.expr.filters.animated = function( elem ) {\n	return jQuery.grep(jQuery.timers, function( fn ) {\n		return elem === fn.elem;\n	}).length;\n};\n\n\n\n\nvar docElem = window.document.documentElement;\n\n/**\n * Gets a window from an element\n */\nfunction getWindow( elem ) {\n	return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;\n}\n\njQuery.offset = {\n	setOffset: function( elem, options, i ) {\n		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,\n			position = jQuery.css( elem, \"position\" ),\n			curElem = jQuery( elem ),\n			props = {};\n\n		// Set position first, in-case top/left are set even on static elem\n		if ( position === \"static\" ) {\n			elem.style.position = \"relative\";\n		}\n\n		curOffset = curElem.offset();\n		curCSSTop = jQuery.css( elem, \"top\" );\n		curCSSLeft = jQuery.css( elem, \"left\" );\n		calculatePosition = ( position === \"absolute\" || position === \"fixed\" ) &&\n			( curCSSTop + curCSSLeft ).indexOf(\"auto\") > -1;\n\n		// Need to be able to calculate position if either top or left is auto and position is either absolute or fixed\n		if ( calculatePosition ) {\n			curPosition = curElem.position();\n			curTop = curPosition.top;\n			curLeft = curPosition.left;\n\n		} else {\n			curTop = parseFloat( curCSSTop ) || 0;\n			curLeft = parseFloat( curCSSLeft ) || 0;\n		}\n\n		if ( jQuery.isFunction( options ) ) {\n			options = options.call( elem, i, curOffset );\n		}\n\n		if ( options.top != null ) {\n			props.top = ( options.top - curOffset.top ) + curTop;\n		}\n		if ( options.left != null ) {\n			props.left = ( options.left - curOffset.left ) + curLeft;\n		}\n\n		if ( \"using\" in options ) {\n			options.using.call( elem, props );\n\n		} else {\n			curElem.css( props );\n		}\n	}\n};\n\njQuery.fn.extend({\n	offset: function( options ) {\n		if ( arguments.length ) {\n			return options === undefined ?\n				this :\n				this.each(function( i ) {\n					jQuery.offset.setOffset( this, options, i );\n				});\n		}\n\n		var docElem, win,\n			elem = this[ 0 ],\n			box = { top: 0, left: 0 },\n			doc = elem && elem.ownerDocument;\n\n		if ( !doc ) {\n			return;\n		}\n\n		docElem = doc.documentElement;\n\n		// Make sure it\'s not a disconnected DOM node\n		if ( !jQuery.contains( docElem, elem ) ) {\n			return box;\n		}\n\n		// If we don\'t have gBCR, just use 0,0 rather than error\n		// BlackBerry 5, iOS 3 (original iPhone)\n		if ( typeof elem.getBoundingClientRect !== strundefined ) {\n			box = elem.getBoundingClientRect();\n		}\n		win = getWindow( doc );\n		return {\n			top: box.top + win.pageYOffset - docElem.clientTop,\n			left: box.left + win.pageXOffset - docElem.clientLeft\n		};\n	},\n\n	position: function() {\n		if ( !this[ 0 ] ) {\n			return;\n		}\n\n		var offsetParent, offset,\n			elem = this[ 0 ],\n			parentOffset = { top: 0, left: 0 };\n\n		// Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent\n		if ( jQuery.css( elem, \"position\" ) === \"fixed\" ) {\n			// We assume that getBoundingClientRect is available when computed position is fixed\n			offset = elem.getBoundingClientRect();\n\n		} else {\n			// Get *real* offsetParent\n			offsetParent = this.offsetParent();\n\n			// Get correct offsets\n			offset = this.offset();\n			if ( !jQuery.nodeName( offsetParent[ 0 ], \"html\" ) ) {\n				parentOffset = offsetParent.offset();\n			}\n\n			// Add offsetParent borders\n			parentOffset.top += jQuery.css( offsetParent[ 0 ], \"borderTopWidth\", true );\n			parentOffset.left += jQuery.css( offsetParent[ 0 ], \"borderLeftWidth\", true );\n		}\n\n		// Subtract parent offsets and element margins\n		return {\n			top: offset.top - parentOffset.top - jQuery.css( elem, \"marginTop\", true ),\n			left: offset.left - parentOffset.left - jQuery.css( elem, \"marginLeft\", true )\n		};\n	},\n\n	offsetParent: function() {\n		return this.map(function() {\n			var offsetParent = this.offsetParent || docElem;\n\n			while ( offsetParent && ( !jQuery.nodeName( offsetParent, \"html\" ) && jQuery.css( offsetParent, \"position\" ) === \"static\" ) ) {\n				offsetParent = offsetParent.offsetParent;\n			}\n\n			return offsetParent || docElem;\n		});\n	}\n});\n\n// Create scrollLeft and scrollTop methods\njQuery.each( { scrollLeft: \"pageXOffset\", scrollTop: \"pageYOffset\" }, function( method, prop ) {\n	var top = \"pageYOffset\" === prop;\n\n	jQuery.fn[ method ] = function( val ) {\n		return access( this, function( elem, method, val ) {\n			var win = getWindow( elem );\n\n			if ( val === undefined ) {\n				return win ? win[ prop ] : elem[ method ];\n			}\n\n			if ( win ) {\n				win.scrollTo(\n					!top ? val : window.pageXOffset,\n					top ? val : window.pageYOffset\n				);\n\n			} else {\n				elem[ method ] = val;\n			}\n		}, method, val, arguments.length, null );\n	};\n});\n\n// Add the top/left cssHooks using jQuery.fn.position\n// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084\n// getComputedStyle returns percent when specified for top/left/bottom/right\n// rather than make the css module depend on the offset module, we just check for it here\njQuery.each( [ \"top\", \"left\" ], function( i, prop ) {\n	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,\n		function( elem, computed ) {\n			if ( computed ) {\n				computed = curCSS( elem, prop );\n				// if curCSS returns percentage, fallback to offset\n				return rnumnonpx.test( computed ) ?\n					jQuery( elem ).position()[ prop ] + \"px\" :\n					computed;\n			}\n		}\n	);\n});\n\n\n// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods\njQuery.each( { Height: \"height\", Width: \"width\" }, function( name, type ) {\n	jQuery.each( { padding: \"inner\" + name, content: type, \"\": \"outer\" + name }, function( defaultExtra, funcName ) {\n		// margin is only for outerHeight, outerWidth\n		jQuery.fn[ funcName ] = function( margin, value ) {\n			var chainable = arguments.length && ( defaultExtra || typeof margin !== \"boolean\" ),\n				extra = defaultExtra || ( margin === true || value === true ? \"margin\" : \"border\" );\n\n			return access( this, function( elem, type, value ) {\n				var doc;\n\n				if ( jQuery.isWindow( elem ) ) {\n					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there\n					// isn\'t a whole lot we can do. See pull request at this URL for discussion:\n					// https://github.com/jquery/jquery/pull/764\n					return elem.document.documentElement[ \"client\" + name ];\n				}\n\n				// Get document width or height\n				if ( elem.nodeType === 9 ) {\n					doc = elem.documentElement;\n\n					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],\n					// whichever is greatest\n					return Math.max(\n						elem.body[ \"scroll\" + name ], doc[ \"scroll\" + name ],\n						elem.body[ \"offset\" + name ], doc[ \"offset\" + name ],\n						doc[ \"client\" + name ]\n					);\n				}\n\n				return value === undefined ?\n					// Get width or height on the element, requesting but not forcing parseFloat\n					jQuery.css( elem, type, extra ) :\n\n					// Set width or height on the element\n					jQuery.style( elem, type, value, extra );\n			}, type, chainable ? margin : undefined, chainable, null );\n		};\n	});\n});\n\n\n// The number of elements contained in the matched element set\njQuery.fn.size = function() {\n	return this.length;\n};\n\njQuery.fn.andSelf = jQuery.fn.addBack;\n\n\n\n\n// Register as a named AMD module, since jQuery can be concatenated with other\n// files that may use define, but not via a proper concatenation script that\n// understands anonymous AMD modules. A named AMD is safest and most robust\n// way to register. Lowercase jquery is used because AMD module names are\n// derived from file names, and jQuery is normally delivered in a lowercase\n// file name. Do this after creating the global so that if an AMD module wants\n// to call noConflict to hide this version of jQuery, it will work.\n\n// Note that for maximum portability, libraries that are not jQuery should\n// declare themselves as anonymous modules, and avoid setting a global if an\n// AMD loader is present. jQuery is a special case. For more information, see\n// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon\n\nif ( typeof define === \"function\" && define.amd ) {\n	define( \"jquery\", [], function() {\n		return jQuery;\n	});\n}\n\n\n\n\nvar\n	// Map over jQuery in case of overwrite\n	_jQuery = window.jQuery,\n\n	// Map over the $ in case of overwrite\n	_$ = window.$;\n\njQuery.noConflict = function( deep ) {\n	if ( window.$ === jQuery ) {\n		window.$ = _$;\n	}\n\n	if ( deep && window.jQuery === jQuery ) {\n		window.jQuery = _jQuery;\n	}\n\n	return jQuery;\n};\n\n// Expose jQuery and $ identifiers, even in\n// AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)\n// and CommonJS for browser emulators (#13566)\nif ( typeof noGlobal === strundefined ) {\n	window.jQuery = window.$ = jQuery;\n}\n\n\n\n\nreturn jQuery;\n\n}));\n',{"address":"jquery","metadata":{"exports":"jQuery","deps":[],"format":"global"}});
/*can/util/can*/
define('can/util/can', [], function () {
    var glbl = typeof window !== 'undefined' ? window : global;
    var can = {};
    if (typeof GLOBALCAN === 'undefined' || GLOBALCAN !== false) {
        glbl.can = can;
    }
    can.global = glbl;
    can.k = function () {
    };
    can.isDeferred = function (obj) {
        return obj && typeof obj.then === 'function' && typeof obj.pipe === 'function';
    };
    var cid = 0;
    can.cid = function (object, name) {
        if (!object._cid) {
            cid++;
            object._cid = (name || '') + cid;
        }
        return object._cid;
    };
    can.VERSION = '@EDGE';
    can.simpleExtend = function (d, s) {
        for (var prop in s) {
            d[prop] = s[prop];
        }
        return d;
    };
    can.frag = function (item) {
        var frag;
        if (!item || typeof item === 'string') {
            frag = can.buildFragment(item == null ? '' : '' + item, document.body);
            if (!frag.childNodes.length) {
                frag.appendChild(document.createTextNode(''));
            }
            return frag;
        } else if (item.nodeType === 11) {
            return item;
        } else if (typeof item.nodeType === 'number') {
            frag = document.createDocumentFragment();
            frag.appendChild(item);
            return frag;
        } else if (typeof item.length === 'number') {
            frag = document.createDocumentFragment();
            can.each(item, function (item) {
                frag.appendChild(can.frag(item));
            });
            return frag;
        } else {
            frag = can.buildFragment('' + item, document.body);
            if (!frag.childNodes.length) {
                frag.appendChild(document.createTextNode(''));
            }
            return frag;
        }
    };
    can.__reading = function () {
    };
    return can;
});
/*can/util/attr/attr*/
define('can/util/attr/attr', ['can/util/can'], function (can) {
    var setImmediate = can.global.setImmediate || function (cb) {
            return setTimeout(cb, 0);
        }, attr = {
            MutationObserver: can.global.MutationObserver || can.global.WebKitMutationObserver || can.global.MozMutationObserver,
            map: {
                'class': 'className',
                'value': 'value',
                'innerText': 'innerText',
                'textContent': 'textContent',
                'checked': true,
                'disabled': true,
                'readonly': true,
                'required': true,
                src: function (el, val) {
                    if (val == null || val === '') {
                        el.removeAttribute('src');
                        return null;
                    } else {
                        el.setAttribute('src', val);
                        return val;
                    }
                },
                style: function (el, val) {
                    return el.style.cssText = val || '';
                }
            },
            defaultValue: [
                'input',
                'textarea'
            ],
            set: function (el, attrName, val) {
                var oldValue;
                if (!attr.MutationObserver) {
                    oldValue = attr.get(el, attrName);
                }
                var tagName = el.nodeName.toString().toLowerCase(), prop = attr.map[attrName], newValue;
                if (typeof prop === 'function') {
                    newValue = prop(el, val);
                } else if (prop === true) {
                    newValue = el[attrName] = true;
                    if (attrName === 'checked' && el.type === 'radio') {
                        if (can.inArray(tagName, attr.defaultValue) >= 0) {
                            el.defaultChecked = true;
                        }
                    }
                } else if (prop) {
                    newValue = el[prop] = val;
                    if (prop === 'value' && can.inArray(tagName, attr.defaultValue) >= 0) {
                        el.defaultValue = val;
                    }
                } else {
                    el.setAttribute(attrName, val);
                    newValue = val;
                }
                if (!attr.MutationObserver && newValue !== oldValue) {
                    attr.trigger(el, attrName, oldValue);
                }
            },
            trigger: function (el, attrName, oldValue) {
                if (can.data(can.$(el), 'canHasAttributesBindings')) {
                    return setImmediate(function () {
                        can.trigger(el, {
                            type: 'attributes',
                            attributeName: attrName,
                            target: el,
                            oldValue: oldValue,
                            bubbles: false
                        }, []);
                    });
                }
            },
            get: function (el, attrName) {
                var prop = attr.map[attrName];
                if (typeof prop === 'string' && el[prop]) {
                    return el[prop];
                }
                return el.getAttribute(attrName);
            },
            remove: function (el, attrName) {
                var oldValue;
                if (!attr.MutationObserver) {
                    oldValue = attr.get(el, attrName);
                }
                var setter = attr.map[attrName];
                if (typeof setter === 'function') {
                    setter(el, undefined);
                }
                if (setter === true) {
                    el[attrName] = false;
                } else if (typeof setter === 'string') {
                    el[setter] = '';
                } else {
                    el.removeAttribute(attrName);
                }
                if (!attr.MutationObserver && oldValue != null) {
                    attr.trigger(el, attrName, oldValue);
                }
            },
            has: function () {
                var el = can.global.document && document.createElement('div');
                if (el && el.hasAttribute) {
                    return function (el, name) {
                        return el.hasAttribute(name);
                    };
                } else {
                    return function (el, name) {
                        return el.getAttribute(name) !== null;
                    };
                }
            }()
        };
    return attr;
});
/*can/event/event*/
define('can/event/event', ['can/util/can'], function (can) {
    can.addEvent = function (event, handler) {
        var allEvents = this.__bindEvents || (this.__bindEvents = {}), eventList = allEvents[event] || (allEvents[event] = []);
        eventList.push({
            handler: handler,
            name: event
        });
        return this;
    };
    can.listenTo = function (other, event, handler) {
        var idedEvents = this.__listenToEvents;
        if (!idedEvents) {
            idedEvents = this.__listenToEvents = {};
        }
        var otherId = can.cid(other);
        var othersEvents = idedEvents[otherId];
        if (!othersEvents) {
            othersEvents = idedEvents[otherId] = {
                obj: other,
                events: {}
            };
        }
        var eventsEvents = othersEvents.events[event];
        if (!eventsEvents) {
            eventsEvents = othersEvents.events[event] = [];
        }
        eventsEvents.push(handler);
        can.bind.call(other, event, handler);
    };
    can.stopListening = function (other, event, handler) {
        var idedEvents = this.__listenToEvents, iterIdedEvents = idedEvents, i = 0;
        if (!idedEvents) {
            return this;
        }
        if (other) {
            var othercid = can.cid(other);
            (iterIdedEvents = {})[othercid] = idedEvents[othercid];
            if (!idedEvents[othercid]) {
                return this;
            }
        }
        for (var cid in iterIdedEvents) {
            var othersEvents = iterIdedEvents[cid], eventsEvents;
            other = idedEvents[cid].obj;
            if (!event) {
                eventsEvents = othersEvents.events;
            } else {
                (eventsEvents = {})[event] = othersEvents.events[event];
            }
            for (var eventName in eventsEvents) {
                var handlers = eventsEvents[eventName] || [];
                i = 0;
                while (i < handlers.length) {
                    if (handler && handler === handlers[i] || !handler) {
                        can.unbind.call(other, eventName, handlers[i]);
                        handlers.splice(i, 1);
                    } else {
                        i++;
                    }
                }
                if (!handlers.length) {
                    delete othersEvents.events[eventName];
                }
            }
            if (can.isEmptyObject(othersEvents.events)) {
                delete idedEvents[cid];
            }
        }
        return this;
    };
    can.removeEvent = function (event, fn, __validate) {
        if (!this.__bindEvents) {
            return this;
        }
        var events = this.__bindEvents[event] || [], i = 0, ev, isFunction = typeof fn === 'function';
        while (i < events.length) {
            ev = events[i];
            if (__validate ? __validate(ev, event, fn) : isFunction && ev.handler === fn || !isFunction && (ev.cid === fn || !fn)) {
                events.splice(i, 1);
            } else {
                i++;
            }
        }
        return this;
    };
    can.dispatch = function (event, args) {
        var events = this.__bindEvents;
        if (!events) {
            return;
        }
        if (typeof event === 'string') {
            event = { type: event };
        }
        var eventName = event.type, handlers = (events[eventName] || []).slice(0), passed = [event];
        if (args) {
            passed.push.apply(passed, args);
        }
        for (var i = 0, len = handlers.length; i < len; i++) {
            handlers[i].handler.apply(this, passed);
        }
        return event;
    };
    can.one = function (event, handler) {
        var one = function () {
            can.unbind.call(this, event, one);
            return handler.apply(this, arguments);
        };
        can.bind.call(this, event, one);
        return this;
    };
    can.event = {
        on: function () {
            if (arguments.length === 0 && can.Control && this instanceof can.Control) {
                return can.Control.prototype.on.call(this);
            } else {
                return can.addEvent.apply(this, arguments);
            }
        },
        off: function () {
            if (arguments.length === 0 && can.Control && this instanceof can.Control) {
                return can.Control.prototype.off.call(this);
            } else {
                return can.removeEvent.apply(this, arguments);
            }
        },
        bind: can.addEvent,
        unbind: can.removeEvent,
        delegate: function (selector, event, handler) {
            return can.addEvent.call(this, event, handler);
        },
        undelegate: function (selector, event, handler) {
            return can.removeEvent.call(this, event, handler);
        },
        trigger: can.dispatch,
        one: can.one,
        addEvent: can.addEvent,
        removeEvent: can.removeEvent,
        listenTo: can.listenTo,
        stopListening: can.stopListening,
        dispatch: can.dispatch
    };
    return can.event;
});
/*can/util/array/each*/
define('can/util/array/each', ['can/util/can'], function (can) {
    var isArrayLike = function (obj) {
        var length = obj.length;
        return typeof arr !== 'function' && (length === 0 || typeof length === 'number' && length > 0 && length - 1 in obj);
    };
    can.each = function (elements, callback, context) {
        var i = 0, key, len, item;
        if (elements) {
            if (isArrayLike(elements)) {
                if (can.List && elements instanceof can.List) {
                    for (len = elements.attr('length'); i < len; i++) {
                        item = elements.attr(i);
                        if (callback.call(context || item, item, i, elements) === false) {
                            break;
                        }
                    }
                } else {
                    for (len = elements.length; i < len; i++) {
                        item = elements[i];
                        if (callback.call(context || item, item, i, elements) === false) {
                            break;
                        }
                    }
                }
            } else if (typeof elements === 'object') {
                if (can.Map && elements instanceof can.Map || elements === can.route) {
                    var keys = can.Map.keys(elements);
                    for (i = 0, len = keys.length; i < len; i++) {
                        key = keys[i];
                        item = elements.attr(key);
                        if (callback.call(context || item, item, key, elements) === false) {
                            break;
                        }
                    }
                } else {
                    for (key in elements) {
                        if (elements.hasOwnProperty(key) && callback.call(context || elements[key], elements[key], key, elements) === false) {
                            break;
                        }
                    }
                }
            }
        }
        return elements;
    };
    return can;
});
/*can/util/inserted/inserted*/
define('can/util/inserted/inserted', ['can/util/can'], function (can) {
    can.inserted = function (elems) {
        elems = can.makeArray(elems);
        var inDocument = false, doc = can.$(document.contains ? document : document.body), children;
        for (var i = 0, elem; (elem = elems[i]) !== undefined; i++) {
            if (!inDocument) {
                if (elem.getElementsByTagName) {
                    if (can.has(doc, elem).length) {
                        inDocument = true;
                    } else {
                        return;
                    }
                } else {
                    continue;
                }
            }
            if (inDocument && elem.getElementsByTagName) {
                children = can.makeArray(elem.getElementsByTagName('*'));
                can.trigger(elem, 'inserted', [], false);
                for (var j = 0, child; (child = children[j]) !== undefined; j++) {
                    can.trigger(child, 'inserted', [], false);
                }
            }
        }
    };
    can.appendChild = function (el, child) {
        var children;
        if (child.nodeType === 11) {
            children = can.makeArray(child.childNodes);
        } else {
            children = [child];
        }
        el.appendChild(child);
        can.inserted(children);
    };
    can.insertBefore = function (el, child, ref) {
        var children;
        if (child.nodeType === 11) {
            children = can.makeArray(child.childNodes);
        } else {
            children = [child];
        }
        el.insertBefore(child, ref);
        can.inserted(children);
    };
});
/*can/util/jquery/jquery*/
define('can/util/jquery/jquery', [
    'jquery/jquery',
    'can/util/can',
    'can/util/attr/attr',
    'can/event/event',
    'can/util/array/each',
    'can/util/inserted/inserted'
], function ($, can, attr, event) {
    var isBindableElement = function (node) {
        return node.nodeName && (node.nodeType === 1 || node.nodeType === 9) || node == window;
    };
    $ = $ || window.$;
    $.extend(can, $, {
        trigger: function (obj, event, args, bubbles) {
            if (isBindableElement(obj)) {
                $.event.trigger(event, args, obj, !bubbles);
            } else if (obj.trigger) {
                obj.trigger(event, args);
            } else {
                if (typeof event === 'string') {
                    event = { type: event };
                }
                event.target = event.target || obj;
                if (args) {
                    if (args.length && typeof args === 'string') {
                        args = [args];
                    } else if (!args.length) {
                        args = [args];
                    }
                }
                if (!args) {
                    args = [];
                }
                can.dispatch.call(obj, event, args);
            }
        },
        event: can.event,
        addEvent: can.addEvent,
        removeEvent: can.removeEvent,
        buildFragment: function (elems, context) {
            var ret;
            elems = [elems];
            context = context || document;
            context = !context.nodeType && context[0] || context;
            context = context.ownerDocument || context;
            ret = $.buildFragment(elems, context);
            return ret.cacheable ? $.clone(ret.fragment) : ret.fragment || ret;
        },
        $: $,
        each: can.each,
        bind: function (ev, cb) {
            if (this.bind && this.bind !== can.bind) {
                this.bind(ev, cb);
            } else if (isBindableElement(this)) {
                $.event.add(this, ev, cb);
            } else {
                can.addEvent.call(this, ev, cb);
            }
            return this;
        },
        unbind: function (ev, cb) {
            if (this.unbind && this.unbind !== can.unbind) {
                this.unbind(ev, cb);
            } else if (isBindableElement(this)) {
                $.event.remove(this, ev, cb);
            } else {
                can.removeEvent.call(this, ev, cb);
            }
            return this;
        },
        delegate: function (selector, ev, cb) {
            if (this.delegate) {
                this.delegate(selector, ev, cb);
            } else if (isBindableElement(this)) {
                $(this).delegate(selector, ev, cb);
            } else {
                can.bind.call(this, ev, cb);
            }
            return this;
        },
        undelegate: function (selector, ev, cb) {
            if (this.undelegate) {
                this.undelegate(selector, ev, cb);
            } else if (isBindableElement(this)) {
                $(this).undelegate(selector, ev, cb);
            } else {
                can.unbind.call(this, ev, cb);
            }
            return this;
        },
        proxy: function (fn, context) {
            return function () {
                return fn.apply(context, arguments);
            };
        },
        attr: attr
    });
    can.on = can.bind;
    can.off = can.unbind;
    $.each([
        'append',
        'filter',
        'addClass',
        'remove',
        'data',
        'get',
        'has'
    ], function (i, name) {
        can[name] = function (wrapped) {
            return wrapped[name].apply(wrapped, can.makeArray(arguments).slice(1));
        };
    });
    var oldClean = $.cleanData;
    $.cleanData = function (elems) {
        $.each(elems, function (i, elem) {
            if (elem) {
                can.trigger(elem, 'removed', [], false);
            }
        });
        oldClean(elems);
    };
    var oldDomManip = $.fn.domManip, cbIndex;
    $.fn.domManip = function (args, cb1, cb2) {
        for (var i = 1; i < arguments.length; i++) {
            if (typeof arguments[i] === 'function') {
                cbIndex = i;
                break;
            }
        }
        return oldDomManip.apply(this, arguments);
    };
    $(document.createElement('div')).append(document.createElement('div'));
    $.fn.domManip = cbIndex === 2 ? function (args, table, callback) {
        return oldDomManip.call(this, args, table, function (elem) {
            var elems;
            if (elem.nodeType === 11) {
                elems = can.makeArray(elem.childNodes);
            }
            var ret = callback.apply(this, arguments);
            can.inserted(elems ? elems : [elem]);
            return ret;
        });
    } : function (args, callback) {
        return oldDomManip.call(this, args, function (elem) {
            var elems;
            if (elem.nodeType === 11) {
                elems = can.makeArray(elem.childNodes);
            }
            var ret = callback.apply(this, arguments);
            can.inserted(elems ? elems : [elem]);
            return ret;
        });
    };
    if (!can.attr.MutationObserver) {
        var oldAttr = $.attr;
        $.attr = function (el, attrName) {
            var oldValue, newValue;
            if (arguments.length >= 3) {
                oldValue = oldAttr.call(this, el, attrName);
            }
            var res = oldAttr.apply(this, arguments);
            if (arguments.length >= 3) {
                newValue = oldAttr.call(this, el, attrName);
            }
            if (newValue !== oldValue) {
                can.attr.trigger(el, attrName, oldValue);
            }
            return res;
        };
        var oldRemove = $.removeAttr;
        $.removeAttr = function (el, attrName) {
            var oldValue = oldAttr.call(this, el, attrName), res = oldRemove.apply(this, arguments);
            if (oldValue != null) {
                can.attr.trigger(el, attrName, oldValue);
            }
            return res;
        };
        $.event.special.attributes = {
            setup: function () {
                can.data(can.$(this), 'canHasAttributesBindings', true);
            },
            teardown: function () {
                $.removeData(this, 'canHasAttributesBindings');
            }
        };
    } else {
        $.event.special.attributes = {
            setup: function () {
                var self = this;
                var observer = new can.attr.MutationObserver(function (mutations) {
                        mutations.forEach(function (mutation) {
                            var copy = can.simpleExtend({}, mutation);
                            can.trigger(self, copy, []);
                        });
                    });
                observer.observe(this, {
                    attributes: true,
                    attributeOldValue: true
                });
                can.data(can.$(this), 'canAttributesObserver', observer);
            },
            teardown: function () {
                can.data(can.$(this), 'canAttributesObserver').disconnect();
                $.removeData(this, 'canAttributesObserver');
            }
        };
    }
    (function () {
        var text = '<-\n>', frag = can.buildFragment(text, document);
        if (text !== frag.childNodes[0].nodeValue) {
            var oldBuildFragment = can.buildFragment;
            can.buildFragment = function (content, context) {
                var res = oldBuildFragment(content, context);
                if (res.childNodes.length === 1 && res.childNodes[0].nodeType === 3) {
                    res.childNodes[0].nodeValue = content;
                }
                return res;
            };
        }
    }());
    $.event.special.inserted = {};
    $.event.special.removed = {};
    return can;
});
/*can/util/util*/
define('can/util/util', ['can/util/jquery/jquery'], function (can) {
    return can;
});
/*can/util/bind/bind*/
define('can/util/bind/bind', ['can/util/util'], function (can) {
    can.bindAndSetup = function () {
        can.addEvent.apply(this, arguments);
        if (!this._init) {
            if (!this._bindings) {
                this._bindings = 1;
                if (this._bindsetup) {
                    this._bindsetup();
                }
            } else {
                this._bindings++;
            }
        }
        return this;
    };
    can.unbindAndTeardown = function (ev, handler) {
        can.removeEvent.apply(this, arguments);
        if (this._bindings === null) {
            this._bindings = 0;
        } else {
            this._bindings--;
        }
        if (!this._bindings && this._bindteardown) {
            this._bindteardown();
        }
        return this;
    };
    return can;
});
/*can/map/bubble*/
define('can/map/bubble', ['can/util/util'], function (can) {
    var bubble = can.bubble = {
            event: function (map, eventName) {
                return map.constructor._bubbleRule(eventName, map);
            },
            childrenOf: function (parentMap, eventName) {
                parentMap._each(function (child, prop) {
                    if (child && child.bind) {
                        bubble.toParent(child, parentMap, prop, eventName);
                    }
                });
            },
            teardownChildrenFrom: function (parentMap, eventName) {
                parentMap._each(function (child) {
                    bubble.teardownFromParent(parentMap, child, eventName);
                });
            },
            toParent: function (child, parent, prop, eventName) {
                can.listenTo.call(parent, child, eventName, function () {
                    var args = can.makeArray(arguments), ev = args.shift();
                    args[0] = (can.List && parent instanceof can.List ? parent.indexOf(child) : prop) + (args[0] ? '.' + args[0] : '');
                    ev.triggeredNS = ev.triggeredNS || {};
                    if (ev.triggeredNS[parent._cid]) {
                        return;
                    }
                    ev.triggeredNS[parent._cid] = true;
                    can.trigger(parent, ev, args);
                });
            },
            teardownFromParent: function (parent, child, eventName) {
                if (child && child.unbind) {
                    can.stopListening.call(parent, child, eventName);
                }
            },
            isBubbling: function (parent, eventName) {
                return parent._bubbleBindings && parent._bubbleBindings[eventName];
            },
            bind: function (parent, eventName) {
                if (!parent._init) {
                    var bubbleEvent = bubble.event(parent, eventName);
                    if (bubbleEvent) {
                        if (!parent._bubbleBindings) {
                            parent._bubbleBindings = {};
                        }
                        if (!parent._bubbleBindings[bubbleEvent]) {
                            parent._bubbleBindings[bubbleEvent] = 1;
                            bubble.childrenOf(parent, bubbleEvent);
                        } else {
                            parent._bubbleBindings[bubbleEvent]++;
                        }
                    }
                }
            },
            unbind: function (parent, eventName) {
                var bubbleEvent = bubble.event(parent, eventName);
                if (bubbleEvent) {
                    if (parent._bubbleBindings) {
                        parent._bubbleBindings[bubbleEvent]--;
                    }
                    if (parent._bubbleBindings && !parent._bubbleBindings[bubbleEvent]) {
                        delete parent._bubbleBindings[bubbleEvent];
                        bubble.teardownChildrenFrom(parent, bubbleEvent);
                        if (can.isEmptyObject(parent._bubbleBindings)) {
                            delete parent._bubbleBindings;
                        }
                    }
                }
            },
            add: function (parent, child, prop) {
                if (child instanceof can.Map && parent._bubbleBindings) {
                    for (var eventName in parent._bubbleBindings) {
                        if (parent._bubbleBindings[eventName]) {
                            bubble.teardownFromParent(parent, child, eventName);
                            bubble.toParent(child, parent, prop, eventName);
                        }
                    }
                }
            },
            removeMany: function (parent, children) {
                for (var i = 0, len = children.length; i < len; i++) {
                    bubble.remove(parent, children[i]);
                }
            },
            remove: function (parent, child) {
                if (child instanceof can.Map && parent._bubbleBindings) {
                    for (var eventName in parent._bubbleBindings) {
                        if (parent._bubbleBindings[eventName]) {
                            bubble.teardownFromParent(parent, child, eventName);
                        }
                    }
                }
            },
            set: function (parent, prop, value, current) {
                if (can.Map.helpers.isObservable(value)) {
                    bubble.add(parent, value, prop);
                }
                if (can.Map.helpers.isObservable(current)) {
                    bubble.remove(parent, current);
                }
                return value;
            }
        };
    return bubble;
});
/*can/util/string/string*/
define('can/util/string/string', ['can/util/util'], function (can) {
    var strUndHash = /_|-/, strColons = /\=\=/, strWords = /([A-Z]+)([A-Z][a-z])/g, strLowUp = /([a-z\d])([A-Z])/g, strDash = /([a-z\d])([A-Z])/g, strReplacer = /\{([^\}]+)\}/g, strQuote = /"/g, strSingleQuote = /'/g, strHyphenMatch = /-+(.)?/g, strCamelMatch = /[a-z][A-Z]/g, getNext = function (obj, prop, add) {
            var result = obj[prop];
            if (result === undefined && add === true) {
                result = obj[prop] = {};
            }
            return result;
        }, isContainer = function (current) {
            return /^f|^o/.test(typeof current);
        }, convertBadValues = function (content) {
            var isInvalid = content === null || content === undefined || isNaN(content) && '' + content === 'NaN';
            return '' + (isInvalid ? '' : content);
        };
    can.extend(can, {
        esc: function (content) {
            return convertBadValues(content).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(strQuote, '&#34;').replace(strSingleQuote, '&#39;');
        },
        getObject: function (name, roots, add) {
            var parts = name ? name.split('.') : [], length = parts.length, current, r = 0, i, container, rootsLength;
            roots = can.isArray(roots) ? roots : [roots || window];
            rootsLength = roots.length;
            if (!length) {
                return roots[0];
            }
            for (r; r < rootsLength; r++) {
                current = roots[r];
                container = undefined;
                for (i = 0; i < length && isContainer(current); i++) {
                    container = current;
                    current = getNext(container, parts[i]);
                }
                if (container !== undefined && current !== undefined) {
                    break;
                }
            }
            if (add === false && current !== undefined) {
                delete container[parts[i - 1]];
            }
            if (add === true && current === undefined) {
                current = roots[0];
                for (i = 0; i < length && isContainer(current); i++) {
                    current = getNext(current, parts[i], true);
                }
            }
            return current;
        },
        capitalize: function (s, cache) {
            return s.charAt(0).toUpperCase() + s.slice(1);
        },
        camelize: function (str) {
            return convertBadValues(str).replace(strHyphenMatch, function (match, chr) {
                return chr ? chr.toUpperCase() : '';
            });
        },
        hyphenate: function (str) {
            return convertBadValues(str).replace(strCamelMatch, function (str, offset) {
                return str.charAt(0) + '-' + str.charAt(1).toLowerCase();
            });
        },
        underscore: function (s) {
            return s.replace(strColons, '/').replace(strWords, '$1_$2').replace(strLowUp, '$1_$2').replace(strDash, '_').toLowerCase();
        },
        sub: function (str, data, remove) {
            var obs = [];
            str = str || '';
            obs.push(str.replace(strReplacer, function (whole, inside) {
                var ob = can.getObject(inside, data, remove === true ? false : undefined);
                if (ob === undefined || ob === null) {
                    obs = null;
                    return '';
                }
                if (isContainer(ob) && obs) {
                    obs.push(ob);
                    return '';
                }
                return '' + ob;
            }));
            return obs === null ? obs : obs.length <= 1 ? obs[0] : obs;
        },
        replacer: strReplacer,
        undHash: strUndHash
    });
    return can;
});
/*can/construct/construct*/
define('can/construct/construct', ['can/util/string/string'], function (can) {
    var initializing = 0;
    var getDescriptor = function (newProps, name) {
            var descriptor = Object.getOwnPropertyDescriptor(newProps, name);
            if (descriptor && (descriptor.get || descriptor.set)) {
                return descriptor;
            }
            return null;
        }, inheritGetterSetter = function (newProps, oldProps, addTo) {
            addTo = addTo || newProps;
            var descriptor;
            for (var name in newProps) {
                if (descriptor = getDescriptor(newProps, name)) {
                    this._defineProperty(addTo, oldProps, name, descriptor);
                } else {
                    can.Construct._overwrite(addTo, oldProps, name, newProps[name]);
                }
            }
        }, simpleInherit = function (newProps, oldProps, addTo) {
            addTo = addTo || newProps;
            for (var name in newProps) {
                can.Construct._overwrite(addTo, oldProps, name, newProps[name]);
            }
        };
    can.Construct = function () {
        if (arguments.length) {
            return can.Construct.extend.apply(can.Construct, arguments);
        }
    };
    can.extend(can.Construct, {
        constructorExtends: true,
        newInstance: function () {
            var inst = this.instance(), args;
            if (inst.setup) {
                args = inst.setup.apply(inst, arguments);
            }
            if (inst.init) {
                inst.init.apply(inst, args || arguments);
            }
            return inst;
        },
        _inherit: Object.getOwnPropertyDescriptor ? inheritGetterSetter : simpleInherit,
        _defineProperty: function (what, oldProps, propName, descriptor) {
            Object.defineProperty(what, propName, descriptor);
        },
        _overwrite: function (what, oldProps, propName, val) {
            what[propName] = val;
        },
        setup: function (base, fullName) {
            this.defaults = can.extend(true, {}, base.defaults, this.defaults);
        },
        instance: function () {
            initializing = 1;
            var inst = new this();
            initializing = 0;
            return inst;
        },
        extend: function (name, staticProperties, instanceProperties) {
            var fullName = name, klass = staticProperties, proto = instanceProperties;
            if (typeof fullName !== 'string') {
                proto = klass;
                klass = fullName;
                fullName = null;
            }
            if (!proto) {
                proto = klass;
                klass = null;
            }
            proto = proto || {};
            var _super_class = this, _super = this.prototype, parts, current, _fullName, _shortName, propName, shortName, namespace, prototype;
            prototype = this.instance();
            can.Construct._inherit(proto, _super, prototype);
            function Constructor() {
                if (!initializing) {
                    return this.constructor !== Constructor && arguments.length && Constructor.constructorExtends ? Constructor.extend.apply(Constructor, arguments) : Constructor.newInstance.apply(Constructor, arguments);
                }
            }
            for (propName in _super_class) {
                if (_super_class.hasOwnProperty(propName)) {
                    Constructor[propName] = _super_class[propName];
                }
            }
            can.Construct._inherit(klass, _super_class, Constructor);
            if (fullName) {
                parts = fullName.split('.');
                shortName = parts.pop();
                current = can.getObject(parts.join('.'), window, true);
                namespace = current;
                _fullName = can.underscore(fullName.replace(/\./g, '_'));
                _shortName = can.underscore(shortName);
                current[shortName] = Constructor;
            }
            can.extend(Constructor, {
                constructor: Constructor,
                prototype: prototype,
                namespace: namespace,
                _shortName: _shortName,
                fullName: fullName,
                _fullName: _fullName
            });
            if (shortName !== undefined) {
                Constructor.shortName = shortName;
            }
            Constructor.prototype.constructor = Constructor;
            var t = [_super_class].concat(can.makeArray(arguments)), args = Constructor.setup.apply(Constructor, t);
            if (Constructor.init) {
                Constructor.init.apply(Constructor, args || t);
            }
            return Constructor;
        }
    });
    can.Construct.prototype.setup = function () {
    };
    can.Construct.prototype.init = function () {
    };
    return can.Construct;
});
/*can/util/batch/batch*/
define('can/util/batch/batch', ['can/util/can'], function (can) {
    var batchNum = 1, transactions = 0, batchEvents = [], stopCallbacks = [];
    can.batch = {
        start: function (batchStopHandler) {
            transactions++;
            if (batchStopHandler) {
                stopCallbacks.push(batchStopHandler);
            }
        },
        stop: function (force, callStart) {
            if (force) {
                transactions = 0;
            } else {
                transactions--;
            }
            if (transactions === 0) {
                var items = batchEvents.slice(0), callbacks = stopCallbacks.slice(0), i, len;
                batchEvents = [];
                stopCallbacks = [];
                batchNum++;
                if (callStart) {
                    can.batch.start();
                }
                for (i = 0, len = items.length; i < len; i++) {
                    can.dispatch.apply(items[i][0], items[i][1]);
                }
                for (i = 0, len = callbacks.length; i < callbacks.length; i++) {
                    callbacks[i]();
                }
            }
        },
        trigger: function (item, event, args) {
            if (!item._init) {
                if (transactions === 0) {
                    return can.dispatch.call(item, event, args);
                } else {
                    event = typeof event === 'string' ? { type: event } : event;
                    event.batchNum = batchNum;
                    batchEvents.push([
                        item,
                        [
                            event,
                            args
                        ]
                    ]);
                }
            }
        }
    };
});
/*can/map/map*/
define('can/map/map', [
    'can/util/util',
    'can/util/bind/bind',
    './bubble',
    'can/construct/construct',
    'can/util/batch/batch'
], function (can, bind, bubble) {
    var madeMap = null;
    var teardownMap = function () {
        for (var cid in madeMap) {
            if (madeMap[cid].added) {
                delete madeMap[cid].obj._cid;
            }
        }
        madeMap = null;
    };
    var getMapFromObject = function (obj) {
        return madeMap && madeMap[obj._cid] && madeMap[obj._cid].instance;
    };
    var serializeMap = null;
    var Map = can.Map = can.Construct.extend({
            setup: function () {
                can.Construct.setup.apply(this, arguments);
                if (can.Map) {
                    if (!this.defaults) {
                        this.defaults = {};
                    }
                    this._computes = [];
                    for (var prop in this.prototype) {
                        if (prop !== 'define' && prop !== 'constructor' && (typeof this.prototype[prop] !== 'function' || this.prototype[prop].prototype instanceof can.Construct)) {
                            this.defaults[prop] = this.prototype[prop];
                        } else if (this.prototype[prop].isComputed) {
                            this._computes.push(prop);
                        }
                    }
                    if (this.helpers.define) {
                        this.helpers.define(this);
                    }
                }
                if (can.List && !(this.prototype instanceof can.List)) {
                    this.List = Map.List.extend({ Map: this }, {});
                }
            },
            _bubble: bubble,
            _bubbleRule: function (eventName) {
                return (eventName === 'change' || eventName.indexOf('.') >= 0) && 'change';
            },
            _computes: [],
            bind: can.bindAndSetup,
            on: can.bindAndSetup,
            unbind: can.unbindAndTeardown,
            off: can.unbindAndTeardown,
            id: 'id',
            helpers: {
                define: null,
                attrParts: function (attr, keepKey) {
                    if (keepKey) {
                        return [attr];
                    }
                    return typeof attr === 'object' ? attr : ('' + attr).split('.');
                },
                addToMap: function (obj, instance) {
                    var teardown;
                    if (!madeMap) {
                        teardown = teardownMap;
                        madeMap = {};
                    }
                    var hasCid = obj._cid;
                    var cid = can.cid(obj);
                    if (!madeMap[cid]) {
                        madeMap[cid] = {
                            obj: obj,
                            instance: instance,
                            added: !hasCid
                        };
                    }
                    return teardown;
                },
                isObservable: function (obj) {
                    return obj instanceof can.Map || obj && obj === can.route;
                },
                canMakeObserve: function (obj) {
                    return obj && !can.isDeferred(obj) && (can.isArray(obj) || can.isPlainObject(obj));
                },
                serialize: function (map, how, where) {
                    var cid = can.cid(map), firstSerialize = false;
                    if (!serializeMap) {
                        firstSerialize = true;
                        serializeMap = {
                            attr: {},
                            serialize: {}
                        };
                    }
                    serializeMap[how][cid] = where;
                    map.each(function (val, name) {
                        var result, isObservable = Map.helpers.isObservable(val), serialized = isObservable && serializeMap[how][can.cid(val)];
                        if (serialized) {
                            result = serialized;
                        } else {
                            if (how === 'serialize') {
                                result = Map.helpers._serialize(map, name, val);
                            } else {
                                result = Map.helpers._getValue(map, name, val, how);
                            }
                        }
                        if (result !== undefined) {
                            where[name] = result;
                        }
                    });
                    can.__reading(map, '__keys');
                    if (firstSerialize) {
                        serializeMap = null;
                    }
                    return where;
                },
                _serialize: function (map, name, val) {
                    return Map.helpers._getValue(map, name, val, 'serialize');
                },
                _getValue: function (map, name, val, how) {
                    if (Map.helpers.isObservable(val)) {
                        return val[how]();
                    } else {
                        return val;
                    }
                }
            },
            keys: function (map) {
                var keys = [];
                can.__reading(map, '__keys');
                for (var keyName in map._data) {
                    keys.push(keyName);
                }
                return keys;
            }
        }, {
            setup: function (obj) {
                if (obj instanceof can.Map) {
                    obj = obj.serialize();
                }
                this._data = {};
                can.cid(this, '.map');
                this._init = 1;
                this._computedBindings = {};
                var defaultValues = this._setupDefaults(obj);
                this._setupComputes(defaultValues);
                var teardownMapping = obj && can.Map.helpers.addToMap(obj, this);
                var data = can.extend(can.extend(true, {}, defaultValues), obj);
                this.attr(data);
                if (teardownMapping) {
                    teardownMapping();
                }
                this.bind('change', can.proxy(this._changes, this));
                delete this._init;
            },
            _setupComputes: function () {
                var computes = this.constructor._computes;
                for (var i = 0, len = computes.length, prop; i < len; i++) {
                    prop = computes[i];
                    this[prop] = this[prop].clone(this);
                    this._computedBindings[prop] = { count: 0 };
                }
            },
            _setupDefaults: function () {
                return this.constructor.defaults || {};
            },
            _bindsetup: function () {
            },
            _bindteardown: function () {
            },
            _changes: function (ev, attr, how, newVal, oldVal) {
                can.batch.trigger(this, {
                    type: attr,
                    batchNum: ev.batchNum,
                    target: ev.target
                }, [
                    newVal,
                    oldVal
                ]);
            },
            _triggerChange: function (attr, how, newVal, oldVal) {
                if (bubble.isBubbling(this, 'change')) {
                    can.batch.trigger(this, {
                        type: 'change',
                        target: this
                    }, [
                        attr,
                        how,
                        newVal,
                        oldVal
                    ]);
                } else {
                    can.batch.trigger(this, attr, [
                        newVal,
                        oldVal
                    ]);
                }
                if (how === 'remove' || how === 'add') {
                    can.batch.trigger(this, {
                        type: '__keys',
                        target: this
                    });
                }
            },
            _each: function (callback) {
                var data = this.__get();
                for (var prop in data) {
                    if (data.hasOwnProperty(prop)) {
                        callback(data[prop], prop);
                    }
                }
            },
            attr: function (attr, val) {
                var type = typeof attr;
                if (type !== 'string' && type !== 'number') {
                    return this._attrs(attr, val);
                } else if (arguments.length === 1) {
                    can.__reading(this, attr);
                    return this._get(attr);
                } else {
                    this._set(attr, val);
                    return this;
                }
            },
            each: function () {
                return can.each.apply(undefined, [this].concat(can.makeArray(arguments)));
            },
            removeAttr: function (attr) {
                var isList = can.List && this instanceof can.List, parts = can.Map.helpers.attrParts(attr), prop = parts.shift(), current = isList ? this[prop] : this._data[prop];
                if (parts.length && current) {
                    return current.removeAttr(parts);
                } else {
                    if (typeof attr === 'string' && !!~attr.indexOf('.')) {
                        prop = attr;
                    }
                    this._remove(prop, current);
                    return current;
                }
            },
            _remove: function (prop, current) {
                if (prop in this._data) {
                    delete this._data[prop];
                    if (!(prop in this.constructor.prototype)) {
                        delete this[prop];
                    }
                    this._triggerChange(prop, 'remove', undefined, current);
                }
            },
            _get: function (attr) {
                attr = '' + attr;
                var dotIndex = attr.indexOf('.');
                if (dotIndex >= 0) {
                    var value = this.__get(attr);
                    if (value !== undefined) {
                        return value;
                    }
                    var first = attr.substr(0, dotIndex), second = attr.substr(dotIndex + 1), current = this.__get(first);
                    return current && current._get ? current._get(second) : undefined;
                } else {
                    return this.__get(attr);
                }
            },
            __get: function (attr) {
                if (attr) {
                    if (this._computedBindings[attr]) {
                        return this[attr]();
                    } else {
                        return this._data[attr];
                    }
                } else {
                    return this._data;
                }
            },
            __type: function (value, prop) {
                if (!(value instanceof can.Map) && can.Map.helpers.canMakeObserve(value)) {
                    var cached = getMapFromObject(value);
                    if (cached) {
                        return cached;
                    }
                    if (can.isArray(value)) {
                        var List = can.List;
                        return new List(value);
                    } else {
                        var Map = this.constructor.Map || can.Map;
                        return new Map(value);
                    }
                }
                return value;
            },
            _set: function (attr, value, keepKey) {
                attr = '' + attr;
                var dotIndex = attr.indexOf('.'), current;
                if (!keepKey && dotIndex >= 0) {
                    var first = attr.substr(0, dotIndex), second = attr.substr(dotIndex + 1);
                    current = this._init ? undefined : this.__get(first);
                    if (Map.helpers.isObservable(current)) {
                        current._set(second, value);
                    } else {
                        throw 'can.Map: Object does not exist';
                    }
                } else {
                    if (this.__convert) {
                        value = this.__convert(attr, value);
                    }
                    current = this._init ? undefined : this.__get(attr);
                    this.__set(attr, this.__type(value, attr), current);
                }
            },
            __set: function (prop, value, current) {
                if (value !== current) {
                    var changeType = current !== undefined || this.__get().hasOwnProperty(prop) ? 'set' : 'add';
                    this.___set(prop, this.constructor._bubble.set(this, prop, value, current));
                    this._triggerChange(prop, changeType, value, current);
                    if (current) {
                        this.constructor._bubble.teardownFromParent(this, current);
                    }
                }
            },
            ___set: function (prop, val) {
                if (this._computedBindings[prop]) {
                    this[prop](val);
                } else {
                    this._data[prop] = val;
                }
                if (typeof this.constructor.prototype[prop] !== 'function' && !this._computedBindings[prop]) {
                    this[prop] = val;
                }
            },
            bind: function (eventName, handler) {
                var computedBinding = this._computedBindings && this._computedBindings[eventName];
                if (computedBinding) {
                    if (!computedBinding.count) {
                        computedBinding.count = 1;
                        var self = this;
                        computedBinding.handler = function (ev, newVal, oldVal) {
                            can.batch.trigger(self, {
                                type: eventName,
                                batchNum: ev.batchNum,
                                target: self
                            }, [
                                newVal,
                                oldVal
                            ]);
                        };
                        this[eventName].bind('change', computedBinding.handler);
                    } else {
                        computedBinding.count++;
                    }
                }
                this.constructor._bubble.bind(this, eventName);
                return can.bindAndSetup.apply(this, arguments);
            },
            unbind: function (eventName, handler) {
                var computedBinding = this._computedBindings && this._computedBindings[eventName];
                if (computedBinding) {
                    if (computedBinding.count === 1) {
                        computedBinding.count = 0;
                        this[eventName].unbind('change', computedBinding.handler);
                        delete computedBinding.handler;
                    } else {
                        computedBinding.count--;
                    }
                }
                this.constructor._bubble.unbind(this, eventName);
                return can.unbindAndTeardown.apply(this, arguments);
            },
            serialize: function () {
                return can.Map.helpers.serialize(this, 'serialize', {});
            },
            _attrs: function (props, remove) {
                if (props === undefined) {
                    return Map.helpers.serialize(this, 'attr', {});
                }
                props = can.simpleExtend({}, props);
                var prop, self = this, newVal;
                can.batch.start();
                this.each(function (curVal, prop) {
                    if (prop === '_cid') {
                        return;
                    }
                    newVal = props[prop];
                    if (newVal === undefined) {
                        if (remove) {
                            self.removeAttr(prop);
                        }
                        return;
                    }
                    if (self.__convert) {
                        newVal = self.__convert(prop, newVal);
                    }
                    if (Map.helpers.isObservable(newVal)) {
                        self.__set(prop, self.__type(newVal, prop), curVal);
                    } else if (Map.helpers.isObservable(curVal) && Map.helpers.canMakeObserve(newVal)) {
                        curVal.attr(newVal, remove);
                    } else if (curVal !== newVal) {
                        self.__set(prop, self.__type(newVal, prop), curVal);
                    }
                    delete props[prop];
                });
                for (prop in props) {
                    if (prop !== '_cid') {
                        newVal = props[prop];
                        this._set(prop, newVal, true);
                    }
                }
                can.batch.stop();
                return this;
            },
            compute: function (prop) {
                if (can.isFunction(this.constructor.prototype[prop])) {
                    return can.compute(this[prop], this);
                } else {
                    var reads = prop.split('.'), last = reads.length - 1, options = { args: [] };
                    return can.compute(function (newVal) {
                        if (arguments.length) {
                            can.compute.read(this, reads.slice(0, last)).value.attr(reads[last], newVal);
                        } else {
                            return can.compute.read(this, reads, options).value;
                        }
                    }, this);
                }
            }
        });
    Map.prototype.on = Map.prototype.bind;
    Map.prototype.off = Map.prototype.unbind;
    return Map;
});
/*can/list/list*/
define('can/list/list', [
    'can/util/util',
    'can/map/map',
    'can/map/bubble'
], function (can, Map, bubble) {
    var splice = [].splice, spliceRemovesProps = function () {
            var obj = {
                    0: 'a',
                    length: 1
                };
            splice.call(obj, 0, 1);
            return !obj[0];
        }();
    var list = Map.extend({ Map: Map }, {
            setup: function (instances, options) {
                this.length = 0;
                can.cid(this, '.map');
                this._init = 1;
                this._computedBindings = {};
                this._setupComputes();
                instances = instances || [];
                var teardownMapping;
                if (can.isDeferred(instances)) {
                    this.replace(instances);
                } else {
                    teardownMapping = instances.length && can.Map.helpers.addToMap(instances, this);
                    this.push.apply(this, can.makeArray(instances || []));
                }
                if (teardownMapping) {
                    teardownMapping();
                }
                this.bind('change', can.proxy(this._changes, this));
                can.simpleExtend(this, options);
                delete this._init;
            },
            _triggerChange: function (attr, how, newVal, oldVal) {
                Map.prototype._triggerChange.apply(this, arguments);
                var index = +attr;
                if (!~attr.indexOf('.') && !isNaN(index)) {
                    if (how === 'add') {
                        can.batch.trigger(this, how, [
                            newVal,
                            index
                        ]);
                        can.batch.trigger(this, 'length', [this.length]);
                    } else if (how === 'remove') {
                        can.batch.trigger(this, how, [
                            oldVal,
                            index
                        ]);
                        can.batch.trigger(this, 'length', [this.length]);
                    } else {
                        can.batch.trigger(this, how, [
                            newVal,
                            index
                        ]);
                    }
                }
            },
            __get: function (attr) {
                if (attr) {
                    if (this[attr] && this[attr].isComputed && can.isFunction(this.constructor.prototype[attr])) {
                        return this[attr]();
                    } else {
                        return this[attr];
                    }
                } else {
                    return this;
                }
            },
            ___set: function (attr, val) {
                this[attr] = val;
                if (+attr >= this.length) {
                    this.length = +attr + 1;
                }
            },
            _remove: function (prop, current) {
                if (isNaN(+prop)) {
                    delete this[prop];
                    this._triggerChange(prop, 'remove', undefined, current);
                } else {
                    this.splice(prop, 1);
                }
            },
            _each: function (callback) {
                var data = this.__get();
                for (var i = 0; i < data.length; i++) {
                    callback(data[i], i);
                }
            },
            serialize: function () {
                return Map.helpers.serialize(this, 'serialize', []);
            },
            splice: function (index, howMany) {
                var args = can.makeArray(arguments), added = [], i, len;
                for (i = 2, len = args.length; i < len; i++) {
                    args[i] = this.__type(args[i], i);
                    added.push(args[i]);
                }
                if (howMany === undefined) {
                    howMany = args[1] = this.length - index;
                }
                var removed = splice.apply(this, args);
                if (!spliceRemovesProps) {
                    for (i = this.length; i < removed.length + this.length; i++) {
                        delete this[i];
                    }
                }
                can.batch.start();
                if (howMany > 0) {
                    bubble.removeMany(this, removed);
                    this._triggerChange('' + index, 'remove', undefined, removed);
                }
                if (args.length > 2) {
                    for (i = 0, len = added.length; i < len; i++) {
                        bubble.set(this, i, added[i]);
                    }
                    this._triggerChange('' + index, 'add', added, removed);
                }
                can.batch.stop();
                return removed;
            },
            _attrs: function (items, remove) {
                if (items === undefined) {
                    return Map.helpers.serialize(this, 'attr', []);
                }
                items = can.makeArray(items);
                can.batch.start();
                this._updateAttrs(items, remove);
                can.batch.stop();
            },
            _updateAttrs: function (items, remove) {
                var len = Math.min(items.length, this.length);
                for (var prop = 0; prop < len; prop++) {
                    var curVal = this[prop], newVal = items[prop];
                    if (Map.helpers.isObservable(curVal) && Map.helpers.canMakeObserve(newVal)) {
                        curVal.attr(newVal, remove);
                    } else if (curVal !== newVal) {
                        this._set(prop, newVal);
                    } else {
                    }
                }
                if (items.length > this.length) {
                    this.push.apply(this, items.slice(this.length));
                } else if (items.length < this.length && remove) {
                    this.splice(items.length);
                }
            }
        }), getArgs = function (args) {
            return args[0] && can.isArray(args[0]) ? args[0] : can.makeArray(args);
        };
    can.each({
        push: 'length',
        unshift: 0
    }, function (where, name) {
        var orig = [][name];
        list.prototype[name] = function () {
            var args = [], len = where ? this.length : 0, i = arguments.length, res, val;
            while (i--) {
                val = arguments[i];
                args[i] = bubble.set(this, i, this.__type(val, i));
            }
            res = orig.apply(this, args);
            if (!this.comparator || args.length) {
                this._triggerChange('' + len, 'add', args, undefined);
            }
            return res;
        };
    });
    can.each({
        pop: 'length',
        shift: 0
    }, function (where, name) {
        list.prototype[name] = function () {
            var args = getArgs(arguments), len = where && this.length ? this.length - 1 : 0;
            var res = [][name].apply(this, args);
            this._triggerChange('' + len, 'remove', undefined, [res]);
            if (res && res.unbind) {
                bubble.remove(this, res);
            }
            return res;
        };
    });
    can.extend(list.prototype, {
        indexOf: function (item, fromIndex) {
            this.attr('length');
            return can.inArray(item, this, fromIndex);
        },
        join: function () {
            return [].join.apply(this.attr(), arguments);
        },
        reverse: function () {
            var list = can.makeArray([].reverse.call(this));
            this.replace(list);
        },
        slice: function () {
            var temp = Array.prototype.slice.apply(this, arguments);
            return new this.constructor(temp);
        },
        concat: function () {
            var args = [];
            can.each(can.makeArray(arguments), function (arg, i) {
                args[i] = arg instanceof can.List ? arg.serialize() : arg;
            });
            return new this.constructor(Array.prototype.concat.apply(this.serialize(), args));
        },
        forEach: function (cb, thisarg) {
            return can.each(this, cb, thisarg || this);
        },
        replace: function (newList) {
            if (can.isDeferred(newList)) {
                newList.then(can.proxy(this.replace, this));
            } else {
                this.splice.apply(this, [
                    0,
                    this.length
                ].concat(can.makeArray(newList || [])));
            }
            return this;
        },
        filter: function (callback, thisArg) {
            var filteredList = new can.List(), self = this, filtered;
            this.each(function (item, index, list) {
                filtered = callback.call(thisArg | self, item, index, self);
                if (filtered) {
                    filteredList.push(item);
                }
            });
            return filteredList;
        }
    });
    can.List = Map.List = list;
    return can.List;
});
/*can/util/string/deparam/deparam*/
define('can/util/string/deparam/deparam', [
    'can/util/util',
    'can/util/string/string'
], function (can) {
    var digitTest = /^\d+$/, keyBreaker = /([^\[\]]+)|(\[\])/g, paramTest = /([^?#]*)(#.*)?$/, prep = function (str) {
            return decodeURIComponent(str.replace(/\+/g, ' '));
        };
    can.extend(can, {
        deparam: function (params) {
            var data = {}, pairs, lastPart;
            if (params && paramTest.test(params)) {
                pairs = params.split('&');
                can.each(pairs, function (pair) {
                    var parts = pair.split('='), key = prep(parts.shift()), value = prep(parts.join('=')), current = data;
                    if (key) {
                        parts = key.match(keyBreaker);
                        for (var j = 0, l = parts.length - 1; j < l; j++) {
                            if (!current[parts[j]]) {
                                current[parts[j]] = digitTest.test(parts[j + 1]) || parts[j + 1] === '[]' ? [] : {};
                            }
                            current = current[parts[j]];
                        }
                        lastPart = parts.pop();
                        if (lastPart === '[]') {
                            current.push(value);
                        } else {
                            current[lastPart] = value;
                        }
                    }
                });
            }
            return data;
        }
    });
    return can;
});
/*can/route/route*/
define('can/route/route', [
    'can/util/util',
    'can/map/map',
    'can/list/list',
    'can/util/string/deparam/deparam'
], function (can) {
    var matcher = /\:([\w\.]+)/g, paramsMatcher = /^(?:&[^=]+=[^&]*)+/, makeProps = function (props) {
            var tags = [];
            can.each(props, function (val, name) {
                tags.push((name === 'className' ? 'class' : name) + '="' + (name === 'href' ? val : can.esc(val)) + '"');
            });
            return tags.join(' ');
        }, matchesData = function (route, data) {
            var count = 0, i = 0, defaults = {};
            for (var name in route.defaults) {
                if (route.defaults[name] === data[name]) {
                    defaults[name] = 1;
                    count++;
                }
            }
            for (; i < route.names.length; i++) {
                if (!data.hasOwnProperty(route.names[i])) {
                    return -1;
                }
                if (!defaults[route.names[i]]) {
                    count++;
                }
            }
            return count;
        }, location = window.location, wrapQuote = function (str) {
            return (str + '').replace(/([.?*+\^$\[\]\\(){}|\-])/g, '\\$1');
        }, each = can.each, extend = can.extend, stringify = function (obj) {
            if (obj && typeof obj === 'object') {
                if (obj instanceof can.Map) {
                    obj = obj.attr();
                } else {
                    obj = can.isFunction(obj.slice) ? obj.slice() : can.extend({}, obj);
                }
                can.each(obj, function (val, prop) {
                    obj[prop] = stringify(val);
                });
            } else if (obj !== undefined && obj !== null && can.isFunction(obj.toString)) {
                obj = obj.toString();
            }
            return obj;
        }, removeBackslash = function (str) {
            return str.replace(/\\/g, '');
        }, timer, curParams, lastHash, changingData, onRouteDataChange = function (ev, attr, how, newval) {
            changingData = 1;
            clearTimeout(timer);
            timer = setTimeout(function () {
                changingData = 0;
                var serialized = can.route.data.serialize(), path = can.route.param(serialized, true);
                can.route._call('setURL', path);
                can.batch.trigger(eventsObject, '__url', [
                    path,
                    lastHash
                ]);
                lastHash = path;
            }, 10);
        }, eventsObject = can.extend({}, can.event);
    can.route = function (url, defaults) {
        var root = can.route._call('root');
        if (root.lastIndexOf('/') === root.length - 1 && url.indexOf('/') === 0) {
            url = url.substr(1);
        }
        defaults = defaults || {};
        var names = [], res, test = '', lastIndex = matcher.lastIndex = 0, next, querySeparator = can.route._call('querySeparator'), matchSlashes = can.route._call('matchSlashes');
        while (res = matcher.exec(url)) {
            names.push(res[1]);
            test += removeBackslash(url.substring(lastIndex, matcher.lastIndex - res[0].length));
            next = '\\' + (removeBackslash(url.substr(matcher.lastIndex, 1)) || querySeparator + (matchSlashes ? '' : '|/'));
            test += '([^' + next + ']' + (defaults[res[1]] ? '*' : '+') + ')';
            lastIndex = matcher.lastIndex;
        }
        test += url.substr(lastIndex).replace('\\', '');
        can.route.routes[url] = {
            test: new RegExp('^' + test + '($|' + wrapQuote(querySeparator) + ')'),
            route: url,
            names: names,
            defaults: defaults,
            length: url.split('/').length
        };
        return can.route;
    };
    extend(can.route, {
        param: function (data, _setRoute) {
            var route, matches = 0, matchCount, routeName = data.route, propCount = 0;
            delete data.route;
            each(data, function () {
                propCount++;
            });
            each(can.route.routes, function (temp, name) {
                matchCount = matchesData(temp, data);
                if (matchCount > matches) {
                    route = temp;
                    matches = matchCount;
                }
                if (matchCount >= propCount) {
                    return false;
                }
            });
            if (can.route.routes[routeName] && matchesData(can.route.routes[routeName], data) === matches) {
                route = can.route.routes[routeName];
            }
            if (route) {
                var cpy = extend({}, data), res = route.route.replace(matcher, function (whole, name) {
                        delete cpy[name];
                        return data[name] === route.defaults[name] ? '' : encodeURIComponent(data[name]);
                    }).replace('\\', ''), after;
                each(route.defaults, function (val, name) {
                    if (cpy[name] === val) {
                        delete cpy[name];
                    }
                });
                after = can.param(cpy);
                if (_setRoute) {
                    can.route.attr('route', route.route);
                }
                return res + (after ? can.route._call('querySeparator') + after : '');
            }
            return can.isEmptyObject(data) ? '' : can.route._call('querySeparator') + can.param(data);
        },
        deparam: function (url) {
            var root = can.route._call('root');
            if (root.lastIndexOf('/') === root.length - 1 && url.indexOf('/') === 0) {
                url = url.substr(1);
            }
            var route = { length: -1 }, querySeparator = can.route._call('querySeparator'), paramsMatcher = can.route._call('paramsMatcher');
            each(can.route.routes, function (temp, name) {
                if (temp.test.test(url) && temp.length > route.length) {
                    route = temp;
                }
            });
            if (route.length > -1) {
                var parts = url.match(route.test), start = parts.shift(), remainder = url.substr(start.length - (parts[parts.length - 1] === querySeparator ? 1 : 0)), obj = remainder && paramsMatcher.test(remainder) ? can.deparam(remainder.slice(1)) : {};
                obj = extend(true, {}, route.defaults, obj);
                each(parts, function (part, i) {
                    if (part && part !== querySeparator) {
                        obj[route.names[i]] = decodeURIComponent(part);
                    }
                });
                obj.route = route.route;
                return obj;
            }
            if (url.charAt(0) !== querySeparator) {
                url = querySeparator + url;
            }
            return paramsMatcher.test(url) ? can.deparam(url.slice(1)) : {};
        },
        data: new can.Map({}),
        map: function (data) {
            var appState;
            if (data.prototype instanceof can.Map) {
                appState = new data();
            } else {
                appState = data;
            }
            can.route.data = appState;
        },
        routes: {},
        ready: function (val) {
            if (val !== true) {
                can.route._setup();
                can.route.setState();
            }
            return can.route;
        },
        url: function (options, merge) {
            if (merge) {
                options = can.extend({}, can.route.deparam(can.route._call('matchingPartOfURL')), options);
            }
            return can.route._call('root') + can.route.param(options);
        },
        link: function (name, options, props, merge) {
            return '<a ' + makeProps(extend({ href: can.route.url(options, merge) }, props)) + '>' + name + '</a>';
        },
        current: function (options) {
            can.__reading(eventsObject, '__url');
            return this._call('matchingPartOfURL') === can.route.param(options);
        },
        bindings: {
            hashchange: {
                paramsMatcher: paramsMatcher,
                querySeparator: '&',
                matchSlashes: false,
                bind: function () {
                    can.bind.call(window, 'hashchange', setState);
                },
                unbind: function () {
                    can.unbind.call(window, 'hashchange', setState);
                },
                matchingPartOfURL: function () {
                    return location.href.split(/#!?/)[1] || '';
                },
                setURL: function (path) {
                    location.hash = '#!' + path;
                    return path;
                },
                root: '#!'
            }
        },
        defaultBinding: 'hashchange',
        currentBinding: null,
        _setup: function () {
            if (!can.route.currentBinding) {
                can.route._call('bind');
                can.route.bind('change', onRouteDataChange);
                can.route.currentBinding = can.route.defaultBinding;
            }
        },
        _teardown: function () {
            if (can.route.currentBinding) {
                can.route._call('unbind');
                can.route.unbind('change', onRouteDataChange);
                can.route.currentBinding = null;
            }
            clearTimeout(timer);
            changingData = 0;
        },
        _call: function () {
            var args = can.makeArray(arguments), prop = args.shift(), binding = can.route.bindings[can.route.currentBinding || can.route.defaultBinding], method = binding[prop];
            if (method.apply) {
                return method.apply(binding, args);
            } else {
                return method;
            }
        }
    });
    each([
        'bind',
        'unbind',
        'on',
        'off',
        'delegate',
        'undelegate',
        'removeAttr',
        'compute',
        '_get',
        '__get',
        'each'
    ], function (name) {
        can.route[name] = function () {
            if (!can.route.data[name]) {
                return;
            }
            return can.route.data[name].apply(can.route.data, arguments);
        };
    });
    can.route.attr = function (attr, val) {
        var type = typeof attr, newArguments;
        if (val === undefined) {
            newArguments = arguments;
        } else if (type !== 'string' && type !== 'number') {
            newArguments = [
                stringify(attr),
                val
            ];
        } else {
            newArguments = [
                attr,
                stringify(val)
            ];
        }
        return can.route.data.attr.apply(can.route.data, newArguments);
    };
    var setState = can.route.setState = function () {
            var hash = can.route._call('matchingPartOfURL');
            var oldParams = curParams;
            curParams = can.route.deparam(hash);
            if (!changingData || hash !== lastHash) {
                can.batch.start();
                for (var attr in oldParams) {
                    if (!curParams[attr]) {
                        can.route.removeAttr(attr);
                    }
                }
                can.route.attr(curParams);
                can.batch.trigger(eventsObject, '__url', [
                    hash,
                    lastHash
                ]);
                can.batch.stop();
            }
        };
    return can.route;
});
/*can/control/control*/
define('can/control/control', [
    'can/util/util',
    'can/construct/construct'
], function (can) {
    var bind = function (el, ev, callback) {
            can.bind.call(el, ev, callback);
            return function () {
                can.unbind.call(el, ev, callback);
            };
        }, isFunction = can.isFunction, extend = can.extend, each = can.each, slice = [].slice, paramReplacer = /\{([^\}]+)\}/g, special = can.getObject('$.event.special', [can]) || {}, delegate = function (el, selector, ev, callback) {
            can.delegate.call(el, selector, ev, callback);
            return function () {
                can.undelegate.call(el, selector, ev, callback);
            };
        }, binder = function (el, ev, callback, selector) {
            return selector ? delegate(el, can.trim(selector), ev, callback) : bind(el, ev, callback);
        }, basicProcessor;
    var Control = can.Control = can.Construct({
            setup: function () {
                can.Construct.setup.apply(this, arguments);
                if (can.Control) {
                    var control = this, funcName;
                    control.actions = {};
                    for (funcName in control.prototype) {
                        if (control._isAction(funcName)) {
                            control.actions[funcName] = control._action(funcName);
                        }
                    }
                }
            },
            _shifter: function (context, name) {
                var method = typeof name === 'string' ? context[name] : name;
                if (!isFunction(method)) {
                    method = context[method];
                }
                return function () {
                    context.called = name;
                    return method.apply(context, [this.nodeName ? can.$(this) : this].concat(slice.call(arguments, 0)));
                };
            },
            _isAction: function (methodName) {
                var val = this.prototype[methodName], type = typeof val;
                return methodName !== 'constructor' && (type === 'function' || type === 'string' && isFunction(this.prototype[val])) && !!(special[methodName] || processors[methodName] || /[^\w]/.test(methodName));
            },
            _action: function (methodName, options) {
                paramReplacer.lastIndex = 0;
                if (options || !paramReplacer.test(methodName)) {
                    var convertedName = options ? can.sub(methodName, this._lookup(options)) : methodName;
                    if (!convertedName) {
                        return null;
                    }
                    var arr = can.isArray(convertedName), name = arr ? convertedName[1] : convertedName, parts = name.split(/\s+/g), event = parts.pop();
                    return {
                        processor: processors[event] || basicProcessor,
                        parts: [
                            name,
                            parts.join(' '),
                            event
                        ],
                        delegate: arr ? convertedName[0] : undefined
                    };
                }
            },
            _lookup: function (options) {
                return [
                    options,
                    window
                ];
            },
            processors: {},
            defaults: {}
        }, {
            setup: function (element, options) {
                var cls = this.constructor, pluginname = cls.pluginName || cls._fullName, arr;
                this.element = can.$(element);
                if (pluginname && pluginname !== 'can_control') {
                    this.element.addClass(pluginname);
                }
                arr = can.data(this.element, 'controls');
                if (!arr) {
                    arr = [];
                    can.data(this.element, 'controls', arr);
                }
                arr.push(this);
                this.options = extend({}, cls.defaults, options);
                this.on();
                return [
                    this.element,
                    this.options
                ];
            },
            on: function (el, selector, eventName, func) {
                if (!el) {
                    this.off();
                    var cls = this.constructor, bindings = this._bindings, actions = cls.actions, element = this.element, destroyCB = can.Control._shifter(this, 'destroy'), funcName, ready;
                    for (funcName in actions) {
                        if (actions.hasOwnProperty(funcName)) {
                            ready = actions[funcName] || cls._action(funcName, this.options, this);
                            if (ready) {
                                bindings.control[funcName] = ready.processor(ready.delegate || element, ready.parts[2], ready.parts[1], funcName, this);
                            }
                        }
                    }
                    can.bind.call(element, 'removed', destroyCB);
                    bindings.user.push(function (el) {
                        can.unbind.call(el, 'removed', destroyCB);
                    });
                    return bindings.user.length;
                }
                if (typeof el === 'string') {
                    func = eventName;
                    eventName = selector;
                    selector = el;
                    el = this.element;
                }
                if (func === undefined) {
                    func = eventName;
                    eventName = selector;
                    selector = null;
                }
                if (typeof func === 'string') {
                    func = can.Control._shifter(this, func);
                }
                this._bindings.user.push(binder(el, eventName, func, selector));
                return this._bindings.user.length;
            },
            off: function () {
                var el = this.element[0], bindings = this._bindings;
                if (bindings) {
                    each(bindings.user || [], function (value) {
                        value(el);
                    });
                    each(bindings.control || {}, function (value) {
                        value(el);
                    });
                }
                this._bindings = {
                    user: [],
                    control: {}
                };
            },
            destroy: function () {
                if (this.element === null) {
                    return;
                }
                var Class = this.constructor, pluginName = Class.pluginName || Class._fullName, controls;
                this.off();
                if (pluginName && pluginName !== 'can_control') {
                    this.element.removeClass(pluginName);
                }
                controls = can.data(this.element, 'controls');
                controls.splice(can.inArray(this, controls), 1);
                can.trigger(this, 'destroyed');
                this.element = null;
            }
        });
    var processors = can.Control.processors;
    basicProcessor = function (el, event, selector, methodName, control) {
        return binder(el, event, can.Control._shifter(control, methodName), selector);
    };
    each([
        'change',
        'click',
        'contextmenu',
        'dblclick',
        'keydown',
        'keyup',
        'keypress',
        'mousedown',
        'mousemove',
        'mouseout',
        'mouseover',
        'mouseup',
        'reset',
        'resize',
        'scroll',
        'select',
        'submit',
        'focusin',
        'focusout',
        'mouseenter',
        'mouseleave',
        'touchstart',
        'touchmove',
        'touchcancel',
        'touchend',
        'touchleave',
        'inserted',
        'removed'
    ], function (v) {
        processors[v] = basicProcessor;
    });
    return Control;
});
/*can/control/route/route*/
define('can/control/route/route', [
    'can/util/util',
    'can/route/route',
    'can/control/control'
], function (can) {
    can.Control.processors.route = function (el, event, selector, funcName, controller) {
        selector = selector || '';
        if (!can.route.routes[selector]) {
            if (selector[0] === '/') {
                selector = selector.substring(1);
            }
            can.route(selector);
        }
        var batchNum, check = function (ev, attr, how) {
                if (can.route.attr('route') === selector && (ev.batchNum === undefined || ev.batchNum !== batchNum)) {
                    batchNum = ev.batchNum;
                    var d = can.route.attr();
                    delete d.route;
                    if (can.isFunction(controller[funcName])) {
                        controller[funcName](d);
                    } else {
                        controller[controller[funcName]](d);
                    }
                }
            };
        can.route.bind('change', check);
        return function () {
            can.route.unbind('change', check);
        };
    };
    return can;
});
/*can/model/model*/
define('can/model/model', [
    'can/util/util',
    'can/map/map',
    'can/list/list'
], function (can) {
    var pipe = function (def, thisArg, func) {
            var d = new can.Deferred();
            def.then(function () {
                var args = can.makeArray(arguments), success = true;
                try {
                    args[0] = func.apply(thisArg, args);
                } catch (e) {
                    success = false;
                    d.rejectWith(d, [e].concat(args));
                }
                if (success) {
                    d.resolveWith(d, args);
                }
            }, function () {
                d.rejectWith(this, arguments);
            });
            if (typeof def.abort === 'function') {
                d.abort = function () {
                    return def.abort();
                };
            }
            return d;
        }, modelNum = 0, getId = function (inst) {
            can.__reading(inst, inst.constructor.id);
            return inst.__get(inst.constructor.id);
        }, ajax = function (ajaxOb, data, type, dataType, success, error) {
            var params = {};
            if (typeof ajaxOb === 'string') {
                var parts = ajaxOb.split(/\s+/);
                params.url = parts.pop();
                if (parts.length) {
                    params.type = parts.pop();
                }
            } else {
                can.extend(params, ajaxOb);
            }
            params.data = typeof data === 'object' && !can.isArray(data) ? can.extend(params.data || {}, data) : data;
            params.url = can.sub(params.url, params.data, true);
            return can.ajax(can.extend({
                type: type || 'post',
                dataType: dataType || 'json',
                success: success,
                error: error
            }, params));
        }, makeRequest = function (modelObj, type, success, error, method) {
            var args;
            if (can.isArray(modelObj)) {
                args = modelObj[1];
                modelObj = modelObj[0];
            } else {
                args = modelObj.serialize();
            }
            args = [args];
            var deferred, model = modelObj.constructor, jqXHR;
            if (type === 'update' || type === 'destroy') {
                args.unshift(getId(modelObj));
            }
            jqXHR = model[type].apply(model, args);
            deferred = pipe(jqXHR, modelObj, function (data) {
                modelObj[method || type + 'd'](data, jqXHR);
                return modelObj;
            });
            if (jqXHR.abort) {
                deferred.abort = function () {
                    jqXHR.abort();
                };
            }
            deferred.then(success, error);
            return deferred;
        }, converters = {
            models: function (instancesRawData, oldList, xhr) {
                can.Model._reqs++;
                if (!instancesRawData) {
                    return;
                }
                if (instancesRawData instanceof this.List) {
                    return instancesRawData;
                }
                var self = this, tmp = [], ListClass = self.List || ML, modelList = oldList instanceof can.List ? oldList : new ListClass(), rawDataIsList = instancesRawData instanceof ML, raw = rawDataIsList ? instancesRawData.serialize() : instancesRawData;
                raw = self.parseModels(raw, xhr);
                if (raw.data) {
                    instancesRawData = raw;
                    raw = raw.data;
                }
                if (typeof raw === 'undefined') {
                    throw new Error('Could not get any raw data while converting using .models');
                }
                if (modelList.length) {
                    modelList.splice(0);
                }
                can.each(raw, function (rawPart) {
                    tmp.push(self.model(rawPart, xhr));
                });
                modelList.push.apply(modelList, tmp);
                if (!can.isArray(instancesRawData)) {
                    can.each(instancesRawData, function (val, prop) {
                        if (prop !== 'data') {
                            modelList.attr(prop, val);
                        }
                    });
                }
                setTimeout(can.proxy(this._clean, this), 1);
                return modelList;
            },
            model: function (attributes, oldModel, xhr) {
                if (!attributes) {
                    return;
                }
                if (typeof attributes.serialize === 'function') {
                    attributes = attributes.serialize();
                } else {
                    attributes = this.parseModel(attributes, xhr);
                }
                var id = attributes[this.id];
                if ((id || id === 0) && this.store[id]) {
                    oldModel = this.store[id];
                }
                var model = oldModel && can.isFunction(oldModel.attr) ? oldModel.attr(attributes, this.removeAttr || false) : new this(attributes);
                return model;
            }
        }, makeParser = {
            parseModel: function (prop) {
                return function (attributes) {
                    return prop ? can.getObject(prop, attributes) : attributes;
                };
            },
            parseModels: function (prop) {
                return function (attributes) {
                    if (can.isArray(attributes)) {
                        return attributes;
                    }
                    prop = prop || 'data';
                    var result = can.getObject(prop, attributes);
                    if (!can.isArray(result)) {
                        throw new Error('Could not get any raw data while converting using .models');
                    }
                    return result;
                };
            }
        }, ajaxMethods = {
            create: {
                url: '_shortName',
                type: 'post'
            },
            update: {
                data: function (id, attrs) {
                    attrs = attrs || {};
                    var identity = this.id;
                    if (attrs[identity] && attrs[identity] !== id) {
                        attrs['new' + can.capitalize(id)] = attrs[identity];
                        delete attrs[identity];
                    }
                    attrs[identity] = id;
                    return attrs;
                },
                type: 'put'
            },
            destroy: {
                type: 'delete',
                data: function (id, attrs) {
                    attrs = attrs || {};
                    attrs.id = attrs[this.id] = id;
                    return attrs;
                }
            },
            findAll: { url: '_shortName' },
            findOne: {}
        }, ajaxMaker = function (ajaxMethod, str) {
            return function (data) {
                data = ajaxMethod.data ? ajaxMethod.data.apply(this, arguments) : data;
                return ajax(str || this[ajaxMethod.url || '_url'], data, ajaxMethod.type || 'get');
            };
        }, createURLFromResource = function (model, name) {
            if (!model.resource) {
                return;
            }
            var resource = model.resource.replace(/\/+$/, '');
            if (name === 'findAll' || name === 'create') {
                return resource;
            } else {
                return resource + '/{' + model.id + '}';
            }
        };
    can.Model = can.Map.extend({
        fullName: 'can.Model',
        _reqs: 0,
        setup: function (base, fullName, staticProps, protoProps) {
            if (typeof fullName !== 'string') {
                protoProps = staticProps;
                staticProps = fullName;
            }
            if (!protoProps) {
                protoProps = staticProps;
            }
            this.store = {};
            can.Map.setup.apply(this, arguments);
            if (!can.Model) {
                return;
            }
            if (staticProps && staticProps.List) {
                this.List = staticProps.List;
                this.List.Map = this;
            } else {
                this.List = base.List.extend({ Map: this }, {});
            }
            var self = this, clean = can.proxy(this._clean, self);
            can.each(ajaxMethods, function (method, name) {
                if (staticProps && staticProps[name] && (typeof staticProps[name] === 'string' || typeof staticProps[name] === 'object')) {
                    self[name] = ajaxMaker(method, staticProps[name]);
                } else if (staticProps && staticProps.resource && !can.isFunction(staticProps[name])) {
                    self[name] = ajaxMaker(method, createURLFromResource(self, name));
                }
                if (self['make' + can.capitalize(name)]) {
                    var newMethod = self['make' + can.capitalize(name)](self[name]);
                    can.Construct._overwrite(self, base, name, function () {
                        can.Model._reqs++;
                        var def = newMethod.apply(this, arguments);
                        var then = def.then(clean, clean);
                        then.abort = def.abort;
                        return then;
                    });
                }
            });
            var hasCustomConverter = {};
            can.each(converters, function (converter, name) {
                var parseName = 'parse' + can.capitalize(name), dataProperty = staticProps && staticProps[name] || self[name];
                if (typeof dataProperty === 'string') {
                    self[parseName] = dataProperty;
                    can.Construct._overwrite(self, base, name, converter);
                } else if (staticProps && staticProps[name]) {
                    hasCustomConverter[parseName] = true;
                }
            });
            can.each(makeParser, function (maker, parseName) {
                var prop = staticProps && staticProps[parseName] || self[parseName];
                if (typeof prop === 'string') {
                    can.Construct._overwrite(self, base, parseName, maker(prop));
                } else if ((!staticProps || !can.isFunction(staticProps[parseName])) && !self[parseName]) {
                    var madeParser = maker();
                    madeParser.useModelConverter = hasCustomConverter[parseName];
                    can.Construct._overwrite(self, base, parseName, madeParser);
                }
            });
            if (self.fullName === 'can.Model' || !self.fullName) {
                self.fullName = 'Model' + ++modelNum;
            }
            can.Model._reqs = 0;
            this._url = this._shortName + '/{' + this.id + '}';
        },
        _ajax: ajaxMaker,
        _makeRequest: makeRequest,
        _clean: function () {
            can.Model._reqs--;
            if (!can.Model._reqs) {
                for (var id in this.store) {
                    if (!this.store[id]._bindings) {
                        delete this.store[id];
                    }
                }
            }
            return arguments[0];
        },
        models: converters.models,
        model: converters.model
    }, {
        setup: function (attrs) {
            var id = attrs && attrs[this.constructor.id];
            if (can.Model._reqs && id != null) {
                this.constructor.store[id] = this;
            }
            can.Map.prototype.setup.apply(this, arguments);
        },
        isNew: function () {
            var id = getId(this);
            return !(id || id === 0);
        },
        save: function (success, error) {
            return makeRequest(this, this.isNew() ? 'create' : 'update', success, error);
        },
        destroy: function (success, error) {
            if (this.isNew()) {
                var self = this;
                var def = can.Deferred();
                def.then(success, error);
                return def.done(function (data) {
                    self.destroyed(data);
                }).resolve(self);
            }
            return makeRequest(this, 'destroy', success, error, 'destroyed');
        },
        _bindsetup: function () {
            this.constructor.store[this.__get(this.constructor.id)] = this;
            return can.Map.prototype._bindsetup.apply(this, arguments);
        },
        _bindteardown: function () {
            delete this.constructor.store[getId(this)];
            return can.Map.prototype._bindteardown.apply(this, arguments);
        },
        ___set: function (prop, val) {
            can.Map.prototype.___set.call(this, prop, val);
            if (prop === this.constructor.id && this._bindings) {
                this.constructor.store[getId(this)] = this;
            }
        }
    });
    var makeGetterHandler = function (name) {
            return function (data, readyState, xhr) {
                return this[name](data, null, xhr);
            };
        }, createUpdateDestroyHandler = function (data) {
            if (this.parseModel.useModelConverter) {
                return this.model(data);
            }
            return this.parseModel(data);
        };
    var responseHandlers = {
            makeFindAll: makeGetterHandler('models'),
            makeFindOne: makeGetterHandler('model'),
            makeCreate: createUpdateDestroyHandler,
            makeUpdate: createUpdateDestroyHandler
        };
    can.each(responseHandlers, function (method, name) {
        can.Model[name] = function (oldMethod) {
            return function () {
                var args = can.makeArray(arguments), oldArgs = can.isFunction(args[1]) ? args.splice(0, 1) : args.splice(0, 2), def = pipe(oldMethod.apply(this, oldArgs), this, method);
                def.then(args[0], args[1]);
                return def;
            };
        };
    });
    can.each([
        'created',
        'updated',
        'destroyed'
    ], function (funcName) {
        can.Model.prototype[funcName] = function (attrs) {
            var self = this, constructor = self.constructor;
            if (attrs && typeof attrs === 'object') {
                this.attr(can.isFunction(attrs.attr) ? attrs.attr() : attrs);
            }
            can.dispatch.call(this, {
                type: 'change',
                target: this
            }, [funcName]);
            can.dispatch.call(constructor, funcName, [this]);
        };
    });
    var ML = can.Model.List = can.List.extend({
            _bubbleRule: function (eventName, list) {
                return can.List._bubbleRule(eventName, list) || 'destroyed';
            }
        }, {
            setup: function (params) {
                if (can.isPlainObject(params) && !can.isArray(params)) {
                    can.List.prototype.setup.apply(this);
                    this.replace(can.isDeferred(params) ? params : this.constructor.Map.findAll(params));
                } else {
                    can.List.prototype.setup.apply(this, arguments);
                }
                this._init = 1;
                this.bind('destroyed', can.proxy(this._destroyed, this));
                delete this._init;
            },
            _destroyed: function (ev, attr) {
                if (/\w+/.test(attr)) {
                    var index;
                    while ((index = this.indexOf(ev.target)) > -1) {
                        this.splice(index, 1);
                    }
                }
            }
        });
    return can.Model;
});
/*can/view/view*/
define('can/view/view', ['can/util/util'], function (can) {
    var isFunction = can.isFunction, makeArray = can.makeArray, hookupId = 1;
    var makeRenderer = function (textRenderer) {
        var renderer = function () {
            return $view.frag(textRenderer.apply(this, arguments));
        };
        renderer.render = function () {
            return textRenderer.apply(textRenderer, arguments);
        };
        return renderer;
    };
    var checkText = function (text, url) {
        if (!text.length) {
            throw 'can.view: No template or empty template:' + url;
        }
    };
    var getRenderer = function (obj, async) {
        if (isFunction(obj)) {
            var def = can.Deferred();
            return def.resolve(obj);
        }
        var url = typeof obj === 'string' ? obj : obj.url, suffix = obj.engine && '.' + obj.engine || url.match(/\.[\w\d]+$/), type, el, id;
        if (url.match(/^#/)) {
            url = url.substr(1);
        }
        if (el = document.getElementById(url)) {
            suffix = '.' + el.type.match(/\/(x\-)?(.+)/)[2];
        }
        if (!suffix && !$view.cached[url]) {
            url += suffix = $view.ext;
        }
        if (can.isArray(suffix)) {
            suffix = suffix[0];
        }
        id = $view.toId(url);
        if (url.match(/^\/\//)) {
            url = url.substr(2);
            url = !window.steal ? url : steal.config().root.mapJoin('' + steal.id(url));
        }
        if (window.require) {
            if (require.toUrl) {
                url = require.toUrl(url);
            }
        }
        type = $view.types[suffix];
        if ($view.cached[id]) {
            return $view.cached[id];
        } else if (el) {
            return $view.registerView(id, el.innerHTML, type);
        } else {
            var d = new can.Deferred();
            can.ajax({
                async: async,
                url: url,
                dataType: 'text',
                error: function (jqXHR) {
                    checkText('', url);
                    d.reject(jqXHR);
                },
                success: function (text) {
                    checkText(text, url);
                    $view.registerView(id, text, type, d);
                }
            });
            return d;
        }
    };
    var getDeferreds = function (data) {
        var deferreds = [];
        if (can.isDeferred(data)) {
            return [data];
        } else {
            for (var prop in data) {
                if (can.isDeferred(data[prop])) {
                    deferreds.push(data[prop]);
                }
            }
        }
        return deferreds;
    };
    var usefulPart = function (resolved) {
        return can.isArray(resolved) && resolved[1] === 'success' ? resolved[0] : resolved;
    };
    var $view = can.view = can.template = function (view, data, helpers, callback) {
            if (isFunction(helpers)) {
                callback = helpers;
                helpers = undefined;
            }
            return $view.renderAs('fragment', view, data, helpers, callback);
        };
    can.extend($view, {
        frag: function (result, parentNode) {
            return $view.hookup($view.fragment(result), parentNode);
        },
        fragment: function (result) {
            if (typeof result !== 'string' && result.nodeType === 11) {
                return result;
            }
            var frag = can.buildFragment(result, document.body);
            if (!frag.childNodes.length) {
                frag.appendChild(document.createTextNode(''));
            }
            return frag;
        },
        toId: function (src) {
            return can.map(src.toString().split(/\/|\./g), function (part) {
                if (part) {
                    return part;
                }
            }).join('_');
        },
        toStr: function (txt) {
            return txt == null ? '' : '' + txt;
        },
        hookup: function (fragment, parentNode) {
            var hookupEls = [], id, func;
            can.each(fragment.childNodes ? can.makeArray(fragment.childNodes) : fragment, function (node) {
                if (node.nodeType === 1) {
                    hookupEls.push(node);
                    hookupEls.push.apply(hookupEls, can.makeArray(node.getElementsByTagName('*')));
                }
            });
            can.each(hookupEls, function (el) {
                if (el.getAttribute && (id = el.getAttribute('data-view-id')) && (func = $view.hookups[id])) {
                    func(el, parentNode, id);
                    delete $view.hookups[id];
                    el.removeAttribute('data-view-id');
                }
            });
            return fragment;
        },
        hookups: {},
        hook: function (cb) {
            $view.hookups[++hookupId] = cb;
            return ' data-view-id=\'' + hookupId + '\'';
        },
        cached: {},
        cachedRenderers: {},
        cache: true,
        register: function (info) {
            this.types['.' + info.suffix] = info;
            can[info.suffix] = $view[info.suffix] = function (id, text) {
                var renderer, renderFunc;
                if (!text) {
                    renderFunc = function () {
                        if (!renderer) {
                            if (info.fragRenderer) {
                                renderer = info.fragRenderer(null, id);
                            } else {
                                renderer = makeRenderer(info.renderer(null, id));
                            }
                        }
                        return renderer.apply(this, arguments);
                    };
                    renderFunc.render = function () {
                        var textRenderer = info.renderer(null, id);
                        return textRenderer.apply(textRenderer, arguments);
                    };
                    return renderFunc;
                }
                var registeredRenderer = function () {
                    if (!renderer) {
                        if (info.fragRenderer) {
                            renderer = info.fragRenderer(id, text);
                        } else {
                            renderer = info.renderer(id, text);
                        }
                    }
                    return renderer.apply(this, arguments);
                };
                if (info.fragRenderer) {
                    return $view.preload(id, registeredRenderer);
                } else {
                    return $view.preloadStringRenderer(id, registeredRenderer);
                }
            };
        },
        types: {},
        ext: '.ejs',
        registerScript: function (type, id, src) {
            return 'can.view.preloadStringRenderer(\'' + id + '\',' + $view.types['.' + type].script(id, src) + ');';
        },
        preload: function (id, renderer) {
            var def = $view.cached[id] = new can.Deferred().resolve(function (data, helpers) {
                    return renderer.call(data, data, helpers);
                });
            def.__view_id = id;
            $view.cachedRenderers[id] = renderer;
            return renderer;
        },
        preloadStringRenderer: function (id, stringRenderer) {
            return this.preload(id, makeRenderer(stringRenderer));
        },
        render: function (view, data, helpers, callback) {
            return can.view.renderAs('string', view, data, helpers, callback);
        },
        renderTo: function (format, renderer, data, helpers) {
            return (format === 'string' && renderer.render ? renderer.render : renderer)(data, helpers);
        },
        renderAs: function (format, view, data, helpers, callback) {
            if (isFunction(helpers)) {
                callback = helpers;
                helpers = undefined;
            }
            var deferreds = getDeferreds(data);
            var reading, deferred, dataCopy, async, response;
            if (deferreds.length) {
                deferred = new can.Deferred();
                dataCopy = can.extend({}, data);
                deferreds.push(getRenderer(view, true));
                can.when.apply(can, deferreds).then(function (resolved) {
                    var objs = makeArray(arguments), renderer = objs.pop(), result;
                    if (can.isDeferred(data)) {
                        dataCopy = usefulPart(resolved);
                    } else {
                        for (var prop in data) {
                            if (can.isDeferred(data[prop])) {
                                dataCopy[prop] = usefulPart(objs.shift());
                            }
                        }
                    }
                    result = can.view.renderTo(format, renderer, dataCopy, helpers);
                    deferred.resolve(result, dataCopy);
                    if (callback) {
                        callback(result, dataCopy);
                    }
                }, function () {
                    deferred.reject.apply(deferred, arguments);
                });
                return deferred;
            } else {
                reading = can.__clearReading();
                async = isFunction(callback);
                deferred = getRenderer(view, async);
                if (reading) {
                    can.__setReading(reading);
                }
                if (async) {
                    response = deferred;
                    deferred.then(function (renderer) {
                        callback(data ? can.view.renderTo(format, renderer, data, helpers) : renderer);
                    });
                } else {
                    if (deferred.state() === 'resolved' && deferred.__view_id) {
                        var currentRenderer = $view.cachedRenderers[deferred.__view_id];
                        return data ? can.view.renderTo(format, currentRenderer, data, helpers) : currentRenderer;
                    } else {
                        deferred.then(function (renderer) {
                            response = data ? can.view.renderTo(format, renderer, data, helpers) : renderer;
                        });
                    }
                }
                return response;
            }
        },
        registerView: function (id, text, type, def) {
            var info = typeof type === 'object' ? type : $view.types[type || $view.ext], renderer;
            if (info.fragRenderer) {
                renderer = info.fragRenderer(id, text);
            } else {
                renderer = makeRenderer(info.renderer(id, text));
            }
            def = def || new can.Deferred();
            if ($view.cache) {
                $view.cached[id] = def;
                def.__view_id = id;
                $view.cachedRenderers[id] = renderer;
            }
            return def.resolve(renderer);
        }
    });
    return can;
});
/*can/compute/compute*/
define('can/compute/compute', [
    'can/util/util',
    'can/util/bind/bind',
    'can/util/batch/batch'
], function (can, bind) {
    var stack = [];
    can.__read = function (func, self) {
        stack.push({});
        var value = func.call(self);
        return {
            value: value,
            observed: stack.pop()
        };
    };
    can.__reading = function (obj, event) {
        if (stack.length) {
            stack[stack.length - 1][obj._cid + '|' + event] = {
                obj: obj,
                event: event + ''
            };
        }
    };
    can.__clearReading = function () {
        if (stack.length) {
            var ret = stack[stack.length - 1];
            stack[stack.length - 1] = {};
            return ret;
        }
    };
    can.__setReading = function (o) {
        if (stack.length) {
            stack[stack.length - 1] = o;
        }
    };
    can.__addReading = function (o) {
        if (stack.length) {
            can.simpleExtend(stack[stack.length - 1], o);
        }
    };
    var getValueAndBind = function (func, context, oldObserved, onchanged) {
        var info = can.__read(func, context), newObserveSet = info.observed;
        bindNewSet(oldObserved, newObserveSet, onchanged);
        unbindOldSet(oldObserved, onchanged);
        return info;
    };
    var bindNewSet = function (oldObserved, newObserveSet, onchanged) {
        for (var name in newObserveSet) {
            bindOrPreventUnbinding(oldObserved, newObserveSet, name, onchanged);
        }
    };
    var bindOrPreventUnbinding = function (oldObserved, newObserveSet, name, onchanged) {
        if (oldObserved[name]) {
            delete oldObserved[name];
        } else {
            var obEv = newObserveSet[name];
            obEv.obj.bind(obEv.event, onchanged);
        }
    };
    var unbindOldSet = function (oldObserved, onchanged) {
        for (var name in oldObserved) {
            var obEv = oldObserved[name];
            obEv.obj.unbind(obEv.event, onchanged);
        }
    };
    var updateOnChange = function (compute, newValue, oldValue, batchNum) {
        if (newValue !== oldValue) {
            can.batch.trigger(compute, batchNum ? {
                type: 'change',
                batchNum: batchNum
            } : 'change', [
                newValue,
                oldValue
            ]);
        }
    };
    var setupComputeHandlers = function (compute, func, context, setCachedValue) {
        var readInfo, onchanged, batchNum;
        return {
            on: function (updater) {
                if (!onchanged) {
                    onchanged = function (ev) {
                        if (compute.bound && (ev.batchNum === undefined || ev.batchNum !== batchNum)) {
                            var oldValue = readInfo.value;
                            readInfo = getValueAndBind(func, context, readInfo.observed, onchanged);
                            updater(readInfo.value, oldValue, ev.batchNum);
                            batchNum = batchNum = ev.batchNum;
                        }
                    };
                }
                readInfo = getValueAndBind(func, context, {}, onchanged);
                setCachedValue(readInfo.value);
                compute.hasDependencies = !can.isEmptyObject(readInfo.observed);
            },
            off: function (updater) {
                for (var name in readInfo.observed) {
                    var ob = readInfo.observed[name];
                    ob.obj.unbind(ob.event, onchanged);
                }
            }
        };
    };
    var setupSingleBindComputeHandlers = function (compute, func, context, setCachedValue) {
        var readInfo, oldValue, onchanged, batchNum;
        return {
            on: function (updater) {
                if (!onchanged) {
                    onchanged = function (ev) {
                        if (compute.bound && (ev.batchNum === undefined || ev.batchNum !== batchNum)) {
                            var reads = can.__clearReading();
                            var newValue = func.call(context);
                            can.__setReading(reads);
                            updater(newValue, oldValue, ev.batchNum);
                            oldValue = newValue;
                            batchNum = batchNum = ev.batchNum;
                        }
                    };
                }
                readInfo = getValueAndBind(func, context, {}, onchanged);
                oldValue = readInfo.value;
                setCachedValue(readInfo.value);
                compute.hasDependencies = !can.isEmptyObject(readInfo.observed);
            },
            off: function (updater) {
                for (var name in readInfo.observed) {
                    var ob = readInfo.observed[name];
                    ob.obj.unbind(ob.event, onchanged);
                }
            }
        };
    };
    var isObserve = function (obj) {
            return obj instanceof can.Map || obj && obj.__get;
        }, k = function () {
        };
    can.compute = function (getterSetter, context, eventName, bindOnce) {
        if (getterSetter && getterSetter.isComputed) {
            return getterSetter;
        }
        var computed, on = k, off = k, value, get = function () {
                return value;
            }, set = function (newVal) {
                value = newVal;
            }, setCached = set, args = [], updater = function (newValue, oldValue, batchNum) {
                setCached(newValue);
                updateOnChange(computed, newValue, oldValue, batchNum);
            }, form;
        for (var i = 0, arglen = arguments.length; i < arglen; i++) {
            args[i] = arguments[i];
        }
        computed = function (newVal) {
            if (arguments.length) {
                var old = value;
                var setVal = set.call(context, newVal, old);
                if (computed.hasDependencies) {
                    return get.call(context);
                }
                if (setVal === undefined) {
                    value = get.call(context);
                } else {
                    value = setVal;
                }
                updateOnChange(computed, value, old);
                return value;
            } else {
                if (stack.length && computed.canReadForChangeEvent !== false) {
                    can.__reading(computed, 'change');
                    if (!computed.bound) {
                        can.compute.temporarilyBind(computed);
                    }
                }
                if (computed.bound) {
                    return value;
                } else {
                    return get.call(context);
                }
            }
        };
        if (typeof getterSetter === 'function') {
            set = getterSetter;
            get = getterSetter;
            computed.canReadForChangeEvent = eventName === false ? false : true;
            var handlers = bindOnce ? setupSingleBindComputeHandlers(computed, getterSetter, context || this, setCached) : setupComputeHandlers(computed, getterSetter, context || this, setCached);
            on = handlers.on;
            off = handlers.off;
        } else if (context) {
            if (typeof context === 'string') {
                var propertyName = context, isObserve = getterSetter instanceof can.Map;
                if (isObserve) {
                    computed.hasDependencies = true;
                    var handler;
                    get = function () {
                        return getterSetter.attr(propertyName);
                    };
                    set = function (newValue) {
                        getterSetter.attr(propertyName, newValue);
                    };
                    on = function (update) {
                        handler = function (ev, newVal, oldVal) {
                            update(newVal, oldVal, ev.batchNum);
                        };
                        getterSetter.bind(eventName || propertyName, handler);
                        value = can.__read(get).value;
                    };
                    off = function (update) {
                        getterSetter.unbind(eventName || propertyName, handler);
                    };
                } else {
                    get = function () {
                        return getterSetter[propertyName];
                    };
                    set = function (newValue) {
                        getterSetter[propertyName] = newValue;
                    };
                    on = function (update) {
                        handler = function () {
                            update(get(), value);
                        };
                        can.bind.call(getterSetter, eventName || propertyName, handler);
                        value = can.__read(get).value;
                    };
                    off = function (update) {
                        can.unbind.call(getterSetter, eventName || propertyName, handler);
                    };
                }
            } else {
                if (typeof context === 'function') {
                    value = getterSetter;
                    set = context;
                    context = eventName;
                    form = 'setter';
                } else {
                    value = getterSetter;
                    var options = context, oldUpdater = updater;
                    context = options.context || options;
                    get = options.get || get;
                    set = options.set || function () {
                        return value;
                    };
                    if (options.fn) {
                        var fn = options.fn, data;
                        get = function () {
                            return fn.call(context, value);
                        };
                        if (fn.length === 0) {
                            data = setupComputeHandlers(computed, fn, context, setCached);
                        } else if (fn.length === 1) {
                            data = setupComputeHandlers(computed, function () {
                                return fn.call(context, value);
                            }, context, setCached);
                        } else {
                            updater = function (newVal) {
                                if (newVal !== undefined) {
                                    oldUpdater(newVal, value);
                                }
                            };
                            data = setupComputeHandlers(computed, function () {
                                var res = fn.call(context, value, function (newVal) {
                                        oldUpdater(newVal, value);
                                    });
                                return res !== undefined ? res : value;
                            }, context, setCached);
                        }
                        on = data.on;
                        off = data.off;
                    } else {
                        updater = function () {
                            var newVal = get.call(context);
                            oldUpdater(newVal, value);
                        };
                    }
                    on = options.on || on;
                    off = options.off || off;
                }
            }
        } else {
            value = getterSetter;
        }
        can.cid(computed, 'compute');
        return can.simpleExtend(computed, {
            isComputed: true,
            _bindsetup: function () {
                this.bound = true;
                var oldReading = can.__clearReading();
                on.call(this, updater);
                can.__setReading(oldReading);
            },
            _bindteardown: function () {
                off.call(this, updater);
                this.bound = false;
            },
            bind: can.bindAndSetup,
            unbind: can.unbindAndTeardown,
            clone: function (context) {
                if (context) {
                    if (form === 'setter') {
                        args[2] = context;
                    } else {
                        args[1] = context;
                    }
                }
                return can.compute.apply(can, args);
            }
        });
    };
    var computes, unbindComputes = function () {
            for (var i = 0, len = computes.length; i < len; i++) {
                computes[i].unbind('change', k);
            }
            computes = null;
        };
    can.compute.temporarilyBind = function (compute) {
        compute.bind('change', k);
        if (!computes) {
            computes = [];
            setTimeout(unbindComputes, 10);
        }
        computes.push(compute);
    };
    can.compute.truthy = function (compute) {
        return can.compute(function () {
            var res = compute();
            if (typeof res === 'function') {
                res = res();
            }
            return !!res;
        });
    };
    can.compute.async = function (initialValue, asyncComputer, context) {
        return can.compute(initialValue, {
            fn: asyncComputer,
            context: context
        });
    };
    can.compute.read = function (parent, reads, options) {
        options = options || {};
        var cur = parent, type, prev, foundObs;
        for (var i = 0, readLength = reads.length; i < readLength; i++) {
            prev = cur;
            if (prev && prev.isComputed) {
                if (options.foundObservable) {
                    options.foundObservable(prev, i);
                }
                prev = cur = prev();
            }
            if (isObserve(prev)) {
                if (!foundObs && options.foundObservable) {
                    options.foundObservable(prev, i);
                }
                foundObs = 1;
                if (typeof prev[reads[i]] === 'function' && prev.constructor.prototype[reads[i]] === prev[reads[i]]) {
                    if (options.returnObserveMethods) {
                        cur = cur[reads[i]];
                    } else if (reads[i] === 'constructor' && prev instanceof can.Construct || prev[reads[i]].prototype instanceof can.Construct) {
                        cur = prev[reads[i]];
                    } else {
                        cur = prev[reads[i]].apply(prev, options.args || []);
                    }
                } else {
                    cur = cur.attr(reads[i]);
                }
            } else {
                if (cur == null) {
                    cur = undefined;
                } else {
                    cur = prev[reads[i]];
                }
            }
            type = typeof cur;
            if (cur && cur.isComputed && (!options.isArgument && i < readLength - 1)) {
                if (!foundObs && options.foundObservable) {
                    options.foundObservable(prev, i + 1);
                }
                cur = cur();
            } else if (i < reads.length - 1 && type === 'function' && options.executeAnonymousFunctions && !(can.Construct && cur.prototype instanceof can.Construct)) {
                cur = cur();
            }
            if (i < reads.length - 1 && (cur === null || type !== 'function' && type !== 'object')) {
                if (options.earlyExit) {
                    options.earlyExit(prev, i, cur);
                }
                return {
                    value: undefined,
                    parent: prev
                };
            }
        }
        if (typeof cur === 'function' && !(can.Construct && cur.prototype instanceof can.Construct) && !(can.route && cur === can.route)) {
            if (options.isArgument) {
                if (!cur.isComputed && options.proxyMethods !== false) {
                    cur = can.proxy(cur, prev);
                }
            } else {
                if (cur.isComputed && !foundObs && options.foundObservable) {
                    options.foundObservable(cur, i);
                }
                cur = cur.call(prev);
            }
        }
        if (cur === undefined) {
            if (options.earlyExit) {
                options.earlyExit(prev, i - 1);
            }
        }
        return {
            value: cur,
            parent: prev
        };
    };
    can.compute.set = function (parent, key, value) {
        if (isObserve(parent)) {
            return parent.attr(key, value);
        }
        if (parent[key] && parent[key].isComputed) {
            return parent[key](value);
        }
        if (typeof parent === 'object') {
            parent[key] = value;
        }
    };
    return can.compute;
});
/*can/view/scope/scope*/
define('can/view/scope/scope', [
    'can/util/util',
    'can/construct/construct',
    'can/map/map',
    'can/list/list',
    'can/view/view',
    'can/compute/compute'
], function (can) {
    var escapeReg = /(\\)?\./g, escapeDotReg = /\\\./g, getNames = function (attr) {
            var names = [], last = 0;
            attr.replace(escapeReg, function (first, second, index) {
                if (!second) {
                    names.push(attr.slice(last, index).replace(escapeDotReg, '.'));
                    last = index + first.length;
                }
            });
            names.push(attr.slice(last).replace(escapeDotReg, '.'));
            return names;
        };
    var Scope = can.Construct.extend({ read: can.compute.read }, {
            init: function (context, parent) {
                this._context = context;
                this._parent = parent;
                this.__cache = {};
            },
            attr: function (key, value) {
                var previousReads = can.__clearReading(), res = this.read(key, {
                        isArgument: true,
                        returnObserveMethods: true,
                        proxyMethods: false
                    });
                if (arguments.length === 2) {
                    var lastIndex = key.lastIndexOf('.'), readKey = lastIndex !== -1 ? key.substring(0, lastIndex) : '.', obj = this.read(readKey, {
                            isArgument: true,
                            returnObserveMethods: true,
                            proxyMethods: false
                        }).value;
                    if (lastIndex !== -1) {
                        key = key.substring(lastIndex + 1, key.length);
                    }
                    can.compute.set(obj, key, value);
                }
                can.__setReading(previousReads);
                return res.value;
            },
            add: function (context) {
                if (context !== this._context) {
                    return new this.constructor(context, this);
                } else {
                    return this;
                }
            },
            computeData: function (key, options) {
                options = options || { args: [] };
                var self = this, rootObserve, rootReads, computeData = {
                        compute: can.compute(function (newVal) {
                            if (arguments.length) {
                                if (rootObserve.isComputed) {
                                    rootObserve(newVal);
                                } else if (rootReads.length) {
                                    var last = rootReads.length - 1;
                                    var obj = rootReads.length ? can.compute.read(rootObserve, rootReads.slice(0, last)).value : rootObserve;
                                    can.compute.set(obj, rootReads[last], newVal);
                                }
                            } else {
                                if (rootObserve) {
                                    return can.compute.read(rootObserve, rootReads, options).value;
                                }
                                var data = self.read(key, options);
                                rootObserve = data.rootObserve;
                                rootReads = data.reads;
                                computeData.scope = data.scope;
                                computeData.initialValue = data.value;
                                computeData.reads = data.reads;
                                computeData.root = rootObserve;
                                return data.value;
                            }
                        })
                    };
                return computeData;
            },
            compute: function (key, options) {
                return this.computeData(key, options).compute;
            },
            read: function (attr, options) {
                var stopLookup;
                if (attr.substr(0, 2) === './') {
                    stopLookup = true;
                    attr = attr.substr(2);
                } else if (attr.substr(0, 3) === '../') {
                    return this._parent.read(attr.substr(3), options);
                } else if (attr === '..') {
                    return { value: this._parent._context };
                } else if (attr === '.' || attr === 'this') {
                    return { value: this._context };
                }
                var names = attr.indexOf('\\.') === -1 ? attr.split('.') : getNames(attr), context, scope = this, defaultObserve, defaultReads = [], defaultPropertyDepth = -1, defaultComputeReadings, defaultScope, currentObserve, currentReads;
                while (scope) {
                    context = scope._context;
                    if (context !== null) {
                        var data = can.compute.read(context, names, can.simpleExtend({
                                foundObservable: function (observe, nameIndex) {
                                    currentObserve = observe;
                                    currentReads = names.slice(nameIndex);
                                },
                                earlyExit: function (parentValue, nameIndex) {
                                    if (nameIndex > defaultPropertyDepth) {
                                        defaultObserve = currentObserve;
                                        defaultReads = currentReads;
                                        defaultPropertyDepth = nameIndex;
                                        defaultScope = scope;
                                        defaultComputeReadings = can.__clearReading();
                                    }
                                },
                                executeAnonymousFunctions: true
                            }, options));
                        if (data.value !== undefined) {
                            return {
                                scope: scope,
                                rootObserve: currentObserve,
                                value: data.value,
                                reads: currentReads
                            };
                        }
                    }
                    can.__clearReading();
                    if (!stopLookup) {
                        scope = scope._parent;
                    } else {
                        scope = null;
                    }
                }
                if (defaultObserve) {
                    can.__setReading(defaultComputeReadings);
                    return {
                        scope: defaultScope,
                        rootObserve: defaultObserve,
                        reads: defaultReads,
                        value: undefined
                    };
                } else {
                    return {
                        names: names,
                        value: undefined
                    };
                }
            }
        });
    can.view.Scope = Scope;
    return Scope;
});
/*can/view/elements*/
define('can/view/elements', [
    'can/util/util',
    'can/view/view'
], function (can) {
    var doc = typeof document !== 'undefined' ? document : null;
    var selectsCommentNodes = doc && function () {
            return can.$(document.createComment('~')).length === 1;
        }();
    var elements = {
            tagToContentPropMap: {
                option: doc && 'textContent' in document.createElement('option') ? 'textContent' : 'innerText',
                textarea: 'value'
            },
            attrMap: can.attr.map,
            attrReg: /([^\s=]+)[\s]*=[\s]*/,
            defaultValue: can.attr.defaultValue,
            tagMap: {
                '': 'span',
                colgroup: 'col',
                table: 'tbody',
                tr: 'td',
                ol: 'li',
                ul: 'li',
                tbody: 'tr',
                thead: 'tr',
                tfoot: 'tr',
                select: 'option',
                optgroup: 'option'
            },
            reverseTagMap: {
                col: 'colgroup',
                tr: 'tbody',
                option: 'select',
                td: 'tr',
                th: 'tr',
                li: 'ul'
            },
            getParentNode: function (el, defaultParentNode) {
                return defaultParentNode && el.parentNode.nodeType === 11 ? defaultParentNode : el.parentNode;
            },
            setAttr: can.attr.set,
            getAttr: can.attr.get,
            removeAttr: can.attr.remove,
            contentText: function (text) {
                if (typeof text === 'string') {
                    return text;
                }
                if (!text && text !== 0) {
                    return '';
                }
                return '' + text;
            },
            after: function (oldElements, newFrag) {
                var last = oldElements[oldElements.length - 1];
                if (last.nextSibling) {
                    can.insertBefore(last.parentNode, newFrag, last.nextSibling);
                } else {
                    can.appendChild(last.parentNode, newFrag);
                }
            },
            replace: function (oldElements, newFrag) {
                elements.after(oldElements, newFrag);
                if (can.remove(can.$(oldElements)).length < oldElements.length && !selectsCommentNodes) {
                    can.each(oldElements, function (el) {
                        if (el.nodeType === 8) {
                            el.parentNode.removeChild(el);
                        }
                    });
                }
            }
        };
    can.view.elements = elements;
    return elements;
});
/*can/view/callbacks/callbacks*/
define('can/view/callbacks/callbacks', [
    'can/util/util',
    'can/view/view'
], function (can) {
    var attr = can.view.attr = function (attributeName, attrHandler) {
            if (attrHandler) {
                if (typeof attributeName === 'string') {
                    attributes[attributeName] = attrHandler;
                } else {
                    regExpAttributes.push({
                        match: attributeName,
                        handler: attrHandler
                    });
                }
            } else {
                var cb = attributes[attributeName];
                if (!cb) {
                    for (var i = 0, len = regExpAttributes.length; i < len; i++) {
                        var attrMatcher = regExpAttributes[i];
                        if (attrMatcher.match.test(attributeName)) {
                            cb = attrMatcher.handler;
                            break;
                        }
                    }
                }
                return cb;
            }
        };
    var attributes = {}, regExpAttributes = [], automaticCustomElementCharacters = /[-\:]/;
    var tag = can.view.tag = function (tagName, tagHandler) {
            if (tagHandler) {
                if (can.global.html5) {
                    can.global.html5.elements += ' ' + tagName;
                    can.global.html5.shivDocument();
                }
                tags[tagName.toLowerCase()] = tagHandler;
            } else {
                var cb = tags[tagName.toLowerCase()];
                if (!cb && automaticCustomElementCharacters.test(tagName)) {
                    cb = function () {
                    };
                }
                return cb;
            }
        };
    var tags = {};
    can.view.callbacks = {
        _tags: tags,
        _attributes: attributes,
        _regExpAttributes: regExpAttributes,
        tag: tag,
        attr: attr,
        tagHandler: function (el, tagName, tagData) {
            var helperTagCallback = tagData.options.attr('tags.' + tagName), tagCallback = helperTagCallback || tags[tagName];
            var scope = tagData.scope, res;
            if (tagCallback) {
                var reads = can.__clearReading();
                res = tagCallback(el, tagData);
                can.__setReading(reads);
            } else {
                res = scope;
            }
            if (res && tagData.subtemplate) {
                if (scope !== res) {
                    scope = scope.add(res);
                }
                var result = tagData.subtemplate(scope, tagData.options);
                var frag = typeof result === 'string' ? can.view.frag(result) : result;
                can.appendChild(el, frag);
            }
        }
    };
    return can.view.callbacks;
});
/*can/view/scanner*/
define('can/view/scanner', [
    'can/view/view',
    './elements',
    'can/view/callbacks/callbacks'
], function (can, elements, viewCallbacks) {
    var newLine = /(\r|\n)+/g, notEndTag = /\//, clean = function (content) {
            return content.split('\\').join('\\\\').split('\n').join('\\n').split('"').join('\\"').split('\t').join('\\t');
        }, getTag = function (tagName, tokens, i) {
            if (tagName) {
                return tagName;
            } else {
                while (i < tokens.length) {
                    if (tokens[i] === '<' && !notEndTag.test(tokens[i + 1])) {
                        return elements.reverseTagMap[tokens[i + 1]] || 'span';
                    }
                    i++;
                }
            }
            return '';
        }, bracketNum = function (content) {
            return --content.split('{').length - --content.split('}').length;
        }, myEval = function (script) {
            eval(script);
        }, attrReg = /([^\s]+)[\s]*=[\s]*$/, startTxt = 'var ___v1ew = [];', finishTxt = 'return ___v1ew.join(\'\')', put_cmd = '___v1ew.push(\n', insert_cmd = put_cmd, htmlTag = null, quote = null, beforeQuote = null, rescan = null, getAttrName = function () {
            var matches = beforeQuote.match(attrReg);
            return matches && matches[1];
        }, status = function () {
            return quote ? '\'' + getAttrName() + '\'' : htmlTag ? 1 : 0;
        }, top = function (stack) {
            return stack[stack.length - 1];
        }, Scanner;
    can.view.Scanner = Scanner = function (options) {
        can.extend(this, {
            text: {},
            tokens: []
        }, options);
        this.text.options = this.text.options || '';
        this.tokenReg = [];
        this.tokenSimple = {
            '<': '<',
            '>': '>',
            '"': '"',
            '\'': '\''
        };
        this.tokenComplex = [];
        this.tokenMap = {};
        for (var i = 0, token; token = this.tokens[i]; i++) {
            if (token[2]) {
                this.tokenReg.push(token[2]);
                this.tokenComplex.push({
                    abbr: token[1],
                    re: new RegExp(token[2]),
                    rescan: token[3]
                });
            } else {
                this.tokenReg.push(token[1]);
                this.tokenSimple[token[1]] = token[0];
            }
            this.tokenMap[token[0]] = token[1];
        }
        this.tokenReg = new RegExp('(' + this.tokenReg.slice(0).concat([
            '<',
            '>',
            '"',
            '\''
        ]).join('|') + ')', 'g');
    };
    Scanner.prototype = {
        helpers: [],
        scan: function (source, name) {
            var tokens = [], last = 0, simple = this.tokenSimple, complex = this.tokenComplex;
            source = source.replace(newLine, '\n');
            if (this.transform) {
                source = this.transform(source);
            }
            source.replace(this.tokenReg, function (whole, part) {
                var offset = arguments[arguments.length - 2];
                if (offset > last) {
                    tokens.push(source.substring(last, offset));
                }
                if (simple[whole]) {
                    tokens.push(whole);
                } else {
                    for (var i = 0, token; token = complex[i]; i++) {
                        if (token.re.test(whole)) {
                            tokens.push(token.abbr);
                            if (token.rescan) {
                                tokens.push(token.rescan(part));
                            }
                            break;
                        }
                    }
                }
                last = offset + part.length;
            });
            if (last < source.length) {
                tokens.push(source.substr(last));
            }
            var content = '', buff = [startTxt + (this.text.start || '')], put = function (content, bonus) {
                    buff.push(put_cmd, '"', clean(content), '"' + (bonus || '') + ');');
                }, endStack = [], lastToken, startTag = null, magicInTag = false, specialStates = {
                    attributeHookups: [],
                    tagHookups: [],
                    lastTagHookup: ''
                }, popTagHookup = function () {
                    specialStates.lastTagHookup = specialStates.tagHookups.pop() + specialStates.tagHookups.length;
                }, tagName = '', tagNames = [], popTagName = false, bracketCount, specialAttribute = false, i = 0, token, tmap = this.tokenMap, attrName;
            htmlTag = quote = beforeQuote = null;
            for (; (token = tokens[i++]) !== undefined;) {
                if (startTag === null) {
                    switch (token) {
                    case tmap.left:
                    case tmap.escapeLeft:
                    case tmap.returnLeft:
                        magicInTag = htmlTag && 1;
                    case tmap.commentLeft:
                        startTag = token;
                        if (content.length) {
                            put(content);
                        }
                        content = '';
                        break;
                    case tmap.escapeFull:
                        magicInTag = htmlTag && 1;
                        rescan = 1;
                        startTag = tmap.escapeLeft;
                        if (content.length) {
                            put(content);
                        }
                        rescan = tokens[i++];
                        content = rescan.content || rescan;
                        if (rescan.before) {
                            put(rescan.before);
                        }
                        tokens.splice(i, 0, tmap.right);
                        break;
                    case tmap.commentFull:
                        break;
                    case tmap.templateLeft:
                        content += tmap.left;
                        break;
                    case '<':
                        if (tokens[i].indexOf('!--') !== 0) {
                            htmlTag = 1;
                            magicInTag = 0;
                        }
                        content += token;
                        break;
                    case '>':
                        htmlTag = 0;
                        var emptyElement = content.substr(content.length - 1) === '/' || content.substr(content.length - 2) === '--', attrs = '';
                        if (specialStates.attributeHookups.length) {
                            attrs = 'attrs: [\'' + specialStates.attributeHookups.join('\',\'') + '\'], ';
                            specialStates.attributeHookups = [];
                        }
                        if (tagName + specialStates.tagHookups.length !== specialStates.lastTagHookup && tagName === top(specialStates.tagHookups)) {
                            if (emptyElement) {
                                content = content.substr(0, content.length - 1);
                            }
                            buff.push(put_cmd, '"', clean(content), '"', ',can.view.pending({tagName:\'' + tagName + '\',' + attrs + 'scope: ' + (this.text.scope || 'this') + this.text.options);
                            if (emptyElement) {
                                buff.push('}));');
                                content = '/>';
                                popTagHookup();
                            } else if (tokens[i] === '<' && tokens[i + 1] === '/' + tagName) {
                                buff.push('}));');
                                content = token;
                                popTagHookup();
                            } else {
                                buff.push(',subtemplate: function(' + this.text.argNames + '){\n' + startTxt + (this.text.start || ''));
                                content = '';
                            }
                        } else if (magicInTag || !popTagName && elements.tagToContentPropMap[tagNames[tagNames.length - 1]] || attrs) {
                            var pendingPart = ',can.view.pending({' + attrs + 'scope: ' + (this.text.scope || 'this') + this.text.options + '}),"';
                            if (emptyElement) {
                                put(content.substr(0, content.length - 1), pendingPart + '/>"');
                            } else {
                                put(content, pendingPart + '>"');
                            }
                            content = '';
                            magicInTag = 0;
                        } else {
                            content += token;
                        }
                        if (emptyElement || popTagName) {
                            tagNames.pop();
                            tagName = tagNames[tagNames.length - 1];
                            popTagName = false;
                        }
                        specialStates.attributeHookups = [];
                        break;
                    case '\'':
                    case '"':
                        if (htmlTag) {
                            if (quote && quote === token) {
                                quote = null;
                                var attr = getAttrName();
                                if (viewCallbacks.attr(attr)) {
                                    specialStates.attributeHookups.push(attr);
                                }
                                if (specialAttribute) {
                                    content += token;
                                    put(content);
                                    buff.push(finishTxt, '}));\n');
                                    content = '';
                                    specialAttribute = false;
                                    break;
                                }
                            } else if (quote === null) {
                                quote = token;
                                beforeQuote = lastToken;
                                attrName = getAttrName();
                                if (tagName === 'img' && attrName === 'src' || attrName === 'style') {
                                    put(content.replace(attrReg, ''));
                                    content = '';
                                    specialAttribute = true;
                                    buff.push(insert_cmd, 'can.view.txt(2,\'' + getTag(tagName, tokens, i) + '\',' + status() + ',this,function(){', startTxt);
                                    put(attrName + '=' + token);
                                    break;
                                }
                            }
                        }
                    default:
                        if (lastToken === '<') {
                            tagName = token.substr(0, 3) === '!--' ? '!--' : token.split(/\s/)[0];
                            var isClosingTag = false, cleanedTagName;
                            if (tagName.indexOf('/') === 0) {
                                isClosingTag = true;
                                cleanedTagName = tagName.substr(1);
                            }
                            if (isClosingTag) {
                                if (top(tagNames) === cleanedTagName) {
                                    tagName = cleanedTagName;
                                    popTagName = true;
                                }
                                if (top(specialStates.tagHookups) === cleanedTagName) {
                                    put(content.substr(0, content.length - 1));
                                    buff.push(finishTxt + '}}) );');
                                    content = '><';
                                    popTagHookup();
                                }
                            } else {
                                if (tagName.lastIndexOf('/') === tagName.length - 1) {
                                    tagName = tagName.substr(0, tagName.length - 1);
                                }
                                if (tagName !== '!--' && viewCallbacks.tag(tagName)) {
                                    if (tagName === 'content' && elements.tagMap[top(tagNames)]) {
                                        token = token.replace('content', elements.tagMap[top(tagNames)]);
                                    }
                                    specialStates.tagHookups.push(tagName);
                                }
                                tagNames.push(tagName);
                            }
                        }
                        content += token;
                        break;
                    }
                } else {
                    switch (token) {
                    case tmap.right:
                    case tmap.returnRight:
                        switch (startTag) {
                        case tmap.left:
                            bracketCount = bracketNum(content);
                            if (bracketCount === 1) {
                                buff.push(insert_cmd, 'can.view.txt(0,\'' + getTag(tagName, tokens, i) + '\',' + status() + ',this,function(){', startTxt, content);
                                endStack.push({
                                    before: '',
                                    after: finishTxt + '}));\n'
                                });
                            } else {
                                last = endStack.length && bracketCount === -1 ? endStack.pop() : { after: ';' };
                                if (last.before) {
                                    buff.push(last.before);
                                }
                                buff.push(content, ';', last.after);
                            }
                            break;
                        case tmap.escapeLeft:
                        case tmap.returnLeft:
                            bracketCount = bracketNum(content);
                            if (bracketCount) {
                                endStack.push({
                                    before: finishTxt,
                                    after: '}));\n'
                                });
                            }
                            var escaped = startTag === tmap.escapeLeft ? 1 : 0, commands = {
                                    insert: insert_cmd,
                                    tagName: getTag(tagName, tokens, i),
                                    status: status(),
                                    specialAttribute: specialAttribute
                                };
                            for (var ii = 0; ii < this.helpers.length; ii++) {
                                var helper = this.helpers[ii];
                                if (helper.name.test(content)) {
                                    content = helper.fn(content, commands);
                                    if (helper.name.source === /^>[\s]*\w*/.source) {
                                        escaped = 0;
                                    }
                                    break;
                                }
                            }
                            if (typeof content === 'object') {
                                if (content.startTxt && content.end && specialAttribute) {
                                    buff.push(insert_cmd, 'can.view.toStr( ', content.content, '() ) );');
                                } else {
                                    if (content.startTxt) {
                                        buff.push(insert_cmd, 'can.view.txt(\n' + (typeof status() === 'string' || (content.escaped != null ? content.escaped : escaped)) + ',\n\'' + tagName + '\',\n' + status() + ',\nthis,\n');
                                    } else if (content.startOnlyTxt) {
                                        buff.push(insert_cmd, 'can.view.onlytxt(this,\n');
                                    }
                                    buff.push(content.content);
                                    if (content.end) {
                                        buff.push('));');
                                    }
                                }
                            } else if (specialAttribute) {
                                buff.push(insert_cmd, content, ');');
                            } else {
                                buff.push(insert_cmd, 'can.view.txt(\n' + (typeof status() === 'string' || escaped) + ',\n\'' + tagName + '\',\n' + status() + ',\nthis,\nfunction(){ ' + (this.text.escape || '') + 'return ', content, bracketCount ? startTxt : '}));\n');
                            }
                            if (rescan && rescan.after && rescan.after.length) {
                                put(rescan.after.length);
                                rescan = null;
                            }
                            break;
                        }
                        startTag = null;
                        content = '';
                        break;
                    case tmap.templateLeft:
                        content += tmap.left;
                        break;
                    default:
                        content += token;
                        break;
                    }
                }
                lastToken = token;
            }
            if (content.length) {
                put(content);
            }
            buff.push(';');
            var template = buff.join(''), out = { out: (this.text.outStart || '') + template + ' ' + finishTxt + (this.text.outEnd || '') };
            myEval.call(out, 'this.fn = (function(' + this.text.argNames + '){' + out.out + '});\r\n//# sourceURL=' + name + '.js');
            return out;
        }
    };
    can.view.pending = function (viewData) {
        var hooks = can.view.getHooks();
        return can.view.hook(function (el) {
            can.each(hooks, function (fn) {
                fn(el);
            });
            viewData.templateType = 'legacy';
            if (viewData.tagName) {
                viewCallbacks.tagHandler(el, viewData.tagName, viewData);
            }
            can.each(viewData && viewData.attrs || [], function (attributeName) {
                viewData.attributeName = attributeName;
                var callback = viewCallbacks.attr(attributeName);
                if (callback) {
                    callback(el, viewData);
                }
            });
        });
    };
    can.view.tag('content', function (el, tagData) {
        return tagData.scope;
    });
    can.view.Scanner = Scanner;
    return Scanner;
});
/*can/view/node_lists/node_lists*/
define('can/view/node_lists/node_lists', [
    'can/util/util',
    'can/view/elements'
], function (can) {
    var canExpando = true;
    try {
        document.createTextNode('')._ = 0;
    } catch (ex) {
        canExpando = false;
    }
    var nodeMap = {}, textNodeMap = {}, expando = 'ejs_' + Math.random(), _id = 0, id = function (node, localMap) {
            var _textNodeMap = localMap || textNodeMap;
            var id = readId(node, _textNodeMap);
            if (id) {
                return id;
            } else {
                if (canExpando || node.nodeType !== 3) {
                    ++_id;
                    return node[expando] = (node.nodeName ? 'element_' : 'obj_') + _id;
                } else {
                    ++_id;
                    _textNodeMap['text_' + _id] = node;
                    return 'text_' + _id;
                }
            }
        }, readId = function (node, textNodeMap) {
            if (canExpando || node.nodeType !== 3) {
                return node[expando];
            } else {
                for (var textNodeID in textNodeMap) {
                    if (textNodeMap[textNodeID] === node) {
                        return textNodeID;
                    }
                }
            }
        }, splice = [].splice, push = [].push, itemsInChildListTree = function (list) {
            var count = 0;
            for (var i = 0, len = list.length; i < len; i++) {
                var item = list[i];
                if (item.nodeType) {
                    count++;
                } else {
                    count += itemsInChildListTree(item);
                }
            }
            return count;
        }, replacementMap = function (replacements, idMap) {
            var map = {};
            for (var i = 0, len = replacements.length; i < len; i++) {
                var node = nodeLists.first(replacements[i]);
                map[id(node, idMap)] = replacements[i];
            }
            return map;
        };
    var nodeLists = {
            id: id,
            update: function (nodeList, newNodes) {
                var oldNodes = nodeLists.unregisterChildren(nodeList);
                newNodes = can.makeArray(newNodes);
                var oldListLength = nodeList.length;
                splice.apply(nodeList, [
                    0,
                    oldListLength
                ].concat(newNodes));
                if (nodeList.replacements) {
                    nodeLists.nestReplacements(nodeList);
                } else {
                    nodeLists.nestList(nodeList);
                }
                return oldNodes;
            },
            nestReplacements: function (list) {
                var index = 0, idMap = {}, rMap = replacementMap(list.replacements, idMap), rCount = list.replacements.length;
                while (index < list.length && rCount) {
                    var node = list[index], replacement = rMap[readId(node, idMap)];
                    if (replacement) {
                        list.splice(index, itemsInChildListTree(replacement), replacement);
                        rCount--;
                    }
                    index++;
                }
                list.replacements = [];
            },
            nestList: function (list) {
                var index = 0;
                while (index < list.length) {
                    var node = list[index], childNodeList = nodeMap[id(node)];
                    if (childNodeList) {
                        if (childNodeList !== list) {
                            list.splice(index, itemsInChildListTree(childNodeList), childNodeList);
                        }
                    } else {
                        nodeMap[id(node)] = list;
                    }
                    index++;
                }
            },
            last: function (nodeList) {
                var last = nodeList[nodeList.length - 1];
                if (last.nodeType) {
                    return last;
                } else {
                    return nodeLists.last(last);
                }
            },
            first: function (nodeList) {
                var first = nodeList[0];
                if (first.nodeType) {
                    return first;
                } else {
                    return nodeLists.first(first);
                }
            },
            register: function (nodeList, unregistered, parent) {
                nodeList.unregistered = unregistered;
                nodeList.parentList = parent;
                if (parent === true) {
                    nodeList.replacements = [];
                } else if (parent) {
                    parent.replacements.push(nodeList);
                    nodeList.replacements = [];
                } else {
                    nodeLists.nestList(nodeList);
                }
                return nodeList;
            },
            unregisterChildren: function (nodeList) {
                var nodes = [];
                can.each(nodeList, function (node) {
                    if (node.nodeType) {
                        if (!nodeList.replacements) {
                            delete nodeMap[id(node)];
                        }
                        nodes.push(node);
                    } else {
                        push.apply(nodes, nodeLists.unregister(node));
                    }
                });
                return nodes;
            },
            unregister: function (nodeList) {
                var nodes = nodeLists.unregisterChildren(nodeList);
                if (nodeList.unregistered) {
                    var unregisteredCallback = nodeList.unregistered;
                    delete nodeList.unregistered;
                    delete nodeList.replacements;
                    unregisteredCallback();
                }
                return nodes;
            },
            nodeMap: nodeMap
        };
    can.view.nodeLists = nodeLists;
    return nodeLists;
});
/*can/view/parser/parser*/
define('can/view/parser/parser', ['can/view/view'], function (can) {
    function makeMap(str) {
        var obj = {}, items = str.split(',');
        for (var i = 0; i < items.length; i++) {
            obj[items[i]] = true;
        }
        return obj;
    }
    var alphaNumericHU = '-:A-Za-z0-9_', attributeNames = '[a-zA-Z_:][' + alphaNumericHU + ':.]*', spaceEQspace = '\\s*=\\s*', dblQuote2dblQuote = '"((?:\\\\.|[^"])*)"', quote2quote = '\'((?:\\\\.|[^\'])*)\'', attributeEqAndValue = '(?:' + spaceEQspace + '(?:' + '(?:"[^"]*")|(?:\'[^\']*\')|[^>\\s]+))?', matchStash = '\\{\\{[^\\}]*\\}\\}\\}?', stash = '\\{\\{([^\\}]*)\\}\\}\\}?', startTag = new RegExp('^<([' + alphaNumericHU + ']+)' + '(' + '(?:\\s*' + '(?:(?:' + '(?:' + attributeNames + ')?' + attributeEqAndValue + ')|' + '(?:' + matchStash + ')+)' + ')*' + ')\\s*(\\/?)>'), endTag = new RegExp('^<\\/([' + alphaNumericHU + ']+)[^>]*>'), attr = new RegExp('(?:' + '(?:(' + attributeNames + ')|' + stash + ')' + '(?:' + spaceEQspace + '(?:' + '(?:' + dblQuote2dblQuote + ')|(?:' + quote2quote + ')|([^>\\s]+)' + ')' + ')?)', 'g'), mustache = new RegExp(stash, 'g'), txtBreak = /<|\{\{/;
    var empty = makeMap('area,base,basefont,br,col,frame,hr,img,input,isindex,link,meta,param,embed');
    var block = makeMap('address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video');
    var inline = makeMap('a,abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var');
    var closeSelf = makeMap('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr');
    var fillAttrs = makeMap('checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected');
    var special = makeMap('script,style');
    var HTMLParser = function (html, handler) {
        function parseStartTag(tag, tagName, rest, unary) {
            tagName = tagName.toLowerCase();
            if (block[tagName]) {
                while (stack.last() && inline[stack.last()]) {
                    parseEndTag('', stack.last());
                }
            }
            if (closeSelf[tagName] && stack.last() === tagName) {
                parseEndTag('', tagName);
            }
            unary = empty[tagName] || !!unary;
            handler.start(tagName, unary);
            if (!unary) {
                stack.push(tagName);
            }
            HTMLParser.parseAttrs(rest, handler);
            handler.end(tagName, unary);
        }
        function parseEndTag(tag, tagName) {
            var pos;
            if (!tagName) {
                pos = 0;
            } else {
                for (pos = stack.length - 1; pos >= 0; pos--) {
                    if (stack[pos] === tagName) {
                        break;
                    }
                }
            }
            if (pos >= 0) {
                for (var i = stack.length - 1; i >= pos; i--) {
                    if (handler.close) {
                        handler.close(stack[i]);
                    }
                }
                stack.length = pos;
            }
        }
        function parseMustache(mustache, inside) {
            if (handler.special) {
                handler.special(inside);
            }
        }
        var index, chars, match, stack = [], last = html;
        stack.last = function () {
            return this[this.length - 1];
        };
        while (html) {
            chars = true;
            if (!stack.last() || !special[stack.last()]) {
                if (html.indexOf('<!--') === 0) {
                    index = html.indexOf('-->');
                    if (index >= 0) {
                        if (handler.comment) {
                            handler.comment(html.substring(4, index));
                        }
                        html = html.substring(index + 3);
                        chars = false;
                    }
                } else if (html.indexOf('</') === 0) {
                    match = html.match(endTag);
                    if (match) {
                        html = html.substring(match[0].length);
                        match[0].replace(endTag, parseEndTag);
                        chars = false;
                    }
                } else if (html.indexOf('<') === 0) {
                    match = html.match(startTag);
                    if (match) {
                        html = html.substring(match[0].length);
                        match[0].replace(startTag, parseStartTag);
                        chars = false;
                    }
                } else if (html.indexOf('{{') === 0) {
                    match = html.match(mustache);
                    if (match) {
                        html = html.substring(match[0].length);
                        match[0].replace(mustache, parseMustache);
                    }
                }
                if (chars) {
                    index = html.search(txtBreak);
                    var text = index < 0 ? html : html.substring(0, index);
                    html = index < 0 ? '' : html.substring(index);
                    if (handler.chars && text) {
                        handler.chars(text);
                    }
                }
            } else {
                html = html.replace(new RegExp('([\\s\\S]*?)</' + stack.last() + '[^>]*>'), function (all, text) {
                    text = text.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g, '$1$2');
                    if (handler.chars) {
                        handler.chars(text);
                    }
                    return '';
                });
                parseEndTag('', stack.last());
            }
            if (html === last) {
                throw 'Parse Error: ' + html;
            }
            last = html;
        }
        parseEndTag();
        handler.done();
    };
    HTMLParser.parseAttrs = function (rest, handler) {
        (rest != null ? rest : '').replace(attr, function (text, name, special, dblQuote, singleQuote, val) {
            if (special) {
                handler.special(special);
            }
            if (name || dblQuote || singleQuote || val) {
                var value = arguments[3] ? arguments[3] : arguments[4] ? arguments[4] : arguments[5] ? arguments[5] : fillAttrs[name.toLowerCase()] ? name : '';
                handler.attrStart(name || '');
                var last = mustache.lastIndex = 0, res = mustache.exec(value), chars;
                while (res) {
                    chars = value.substring(last, mustache.lastIndex - res[0].length);
                    if (chars.length) {
                        handler.attrValue(chars);
                    }
                    handler.special(res[1]);
                    last = mustache.lastIndex;
                    res = mustache.exec(value);
                }
                chars = value.substr(last, value.length);
                if (chars) {
                    handler.attrValue(chars);
                }
                handler.attrEnd(name || '');
            }
        });
    };
    can.view.parser = HTMLParser;
    return HTMLParser;
});
/*can/view/live/live*/
define('can/view/live/live', [
    'can/util/util',
    'can/view/elements',
    'can/view/view',
    'can/view/node_lists/node_lists',
    'can/view/parser/parser'
], function (can, elements, view, nodeLists, parser) {
    elements = elements || can.view.elements;
    nodeLists = nodeLists || can.view.NodeLists;
    parser = parser || can.view.parser;
    var setup = function (el, bind, unbind) {
            var tornDown = false, teardown = function () {
                    if (!tornDown) {
                        tornDown = true;
                        unbind(data);
                        can.unbind.call(el, 'removed', teardown);
                    }
                    return true;
                }, data = {
                    teardownCheck: function (parent) {
                        return parent ? false : teardown();
                    }
                };
            can.bind.call(el, 'removed', teardown);
            bind(data);
            return data;
        }, listen = function (el, compute, change) {
            return setup(el, function () {
                compute.bind('change', change);
            }, function (data) {
                compute.unbind('change', change);
                if (data.nodeList) {
                    nodeLists.unregister(data.nodeList);
                }
            });
        }, getAttributeParts = function (newVal) {
            var attrs = {}, attr;
            parser.parseAttrs(newVal, {
                attrStart: function (name) {
                    attrs[name] = '';
                    attr = name;
                },
                attrValue: function (value) {
                    attrs[attr] += value;
                },
                attrEnd: function () {
                }
            });
            return attrs;
        }, splice = [].splice, isNode = function (obj) {
            return obj && obj.nodeType;
        }, addTextNodeIfNoChildren = function (frag) {
            if (!frag.childNodes.length) {
                frag.appendChild(document.createTextNode(''));
            }
        };
    var live = {
            list: function (el, compute, render, context, parentNode, nodeList) {
                var masterNodeList = nodeList || [el], indexMap = [], add = function (ev, items, index) {
                        var frag = document.createDocumentFragment(), newNodeLists = [], newIndicies = [];
                        can.each(items, function (item, key) {
                            var itemNodeList = [];
                            if (nodeList) {
                                nodeLists.register(itemNodeList, null, true);
                            }
                            var itemIndex = can.compute(key + index), itemHTML = render.call(context, item, itemIndex, itemNodeList), gotText = typeof itemHTML === 'string', itemFrag = can.frag(itemHTML);
                            itemFrag = gotText ? can.view.hookup(itemFrag) : itemFrag;
                            var childNodes = can.makeArray(itemFrag.childNodes);
                            if (nodeList) {
                                nodeLists.update(itemNodeList, childNodes);
                                newNodeLists.push(itemNodeList);
                            } else {
                                newNodeLists.push(nodeLists.register(childNodes));
                            }
                            frag.appendChild(itemFrag);
                            newIndicies.push(itemIndex);
                        });
                        var masterListIndex = index + 1;
                        if (!masterNodeList[masterListIndex]) {
                            elements.after(masterListIndex === 1 ? [text] : [nodeLists.last(masterNodeList[masterListIndex - 1])], frag);
                        } else {
                            var el = nodeLists.first(masterNodeList[masterListIndex]);
                            can.insertBefore(el.parentNode, frag, el);
                        }
                        splice.apply(masterNodeList, [
                            masterListIndex,
                            0
                        ].concat(newNodeLists));
                        splice.apply(indexMap, [
                            index,
                            0
                        ].concat(newIndicies));
                        for (var i = index + newIndicies.length, len = indexMap.length; i < len; i++) {
                            indexMap[i](i);
                        }
                    }, remove = function (ev, items, index, duringTeardown, fullTeardown) {
                        if (!duringTeardown && data.teardownCheck(text.parentNode)) {
                            return;
                        }
                        if (index < 0) {
                            index = indexMap.length + index;
                        }
                        var removedMappings = masterNodeList.splice(index + 1, items.length), itemsToRemove = [];
                        can.each(removedMappings, function (nodeList) {
                            var nodesToRemove = nodeLists.unregister(nodeList);
                            [].push.apply(itemsToRemove, nodesToRemove);
                        });
                        indexMap.splice(index, items.length);
                        for (var i = index, len = indexMap.length; i < len; i++) {
                            indexMap[i](i);
                        }
                        if (!fullTeardown) {
                            can.remove(can.$(itemsToRemove));
                        }
                    }, text = document.createTextNode(''), list, teardownList = function (fullTeardown) {
                        if (list && list.unbind) {
                            list.unbind('add', add).unbind('remove', remove);
                        }
                        remove({}, { length: masterNodeList.length - 1 }, 0, true, fullTeardown);
                    }, updateList = function (ev, newList, oldList) {
                        teardownList();
                        list = newList || [];
                        if (list.bind) {
                            list.bind('add', add).bind('remove', remove);
                        }
                        add({}, list, 0);
                    };
                parentNode = elements.getParentNode(el, parentNode);
                var data = setup(parentNode, function () {
                        if (can.isFunction(compute)) {
                            compute.bind('change', updateList);
                        }
                    }, function () {
                        if (can.isFunction(compute)) {
                            compute.unbind('change', updateList);
                        }
                        teardownList(true);
                    });
                if (!nodeList) {
                    live.replace(masterNodeList, text, data.teardownCheck);
                } else {
                    elements.replace(masterNodeList, text);
                    nodeLists.update(masterNodeList, [text]);
                    nodeList.unregistered = data.teardownCheck;
                }
                updateList({}, can.isFunction(compute) ? compute() : compute);
            },
            html: function (el, compute, parentNode, nodeList) {
                var data;
                parentNode = elements.getParentNode(el, parentNode);
                data = listen(parentNode, compute, function (ev, newVal, oldVal) {
                    var attached = nodeLists.first(nodes).parentNode;
                    if (attached) {
                        makeAndPut(newVal);
                    }
                    data.teardownCheck(nodeLists.first(nodes).parentNode);
                });
                var nodes = nodeList || [el], makeAndPut = function (val) {
                        var isString = !isNode(val), frag = can.frag(val), oldNodes = can.makeArray(nodes);
                        addTextNodeIfNoChildren(frag);
                        if (isString) {
                            frag = can.view.hookup(frag, parentNode);
                        }
                        oldNodes = nodeLists.update(nodes, frag.childNodes);
                        elements.replace(oldNodes, frag);
                    };
                data.nodeList = nodes;
                if (!nodeList) {
                    nodeLists.register(nodes, data.teardownCheck);
                } else {
                    nodeList.unregistered = data.teardownCheck;
                }
                makeAndPut(compute());
            },
            replace: function (nodes, val, teardown) {
                var oldNodes = nodes.slice(0), frag = can.frag(val);
                nodeLists.register(nodes, teardown);
                if (typeof val === 'string') {
                    frag = can.view.hookup(frag, nodes[0].parentNode);
                }
                nodeLists.update(nodes, frag.childNodes);
                elements.replace(oldNodes, frag);
                return nodes;
            },
            text: function (el, compute, parentNode, nodeList) {
                var parent = elements.getParentNode(el, parentNode);
                var data = listen(parent, compute, function (ev, newVal, oldVal) {
                        if (typeof node.nodeValue !== 'unknown') {
                            node.nodeValue = can.view.toStr(newVal);
                        }
                        data.teardownCheck(node.parentNode);
                    });
                var node = document.createTextNode(can.view.toStr(compute()));
                if (nodeList) {
                    nodeList.unregistered = data.teardownCheck;
                    data.nodeList = nodeList;
                    nodeLists.update(nodeList, [node]);
                    elements.replace([el], node);
                } else {
                    data.nodeList = live.replace([el], node, data.teardownCheck);
                }
            },
            setAttributes: function (el, newVal) {
                var attrs = getAttributeParts(newVal);
                for (var name in attrs) {
                    can.attr.set(el, name, attrs[name]);
                }
            },
            attributes: function (el, compute, currentValue) {
                var oldAttrs = {};
                var setAttrs = function (newVal) {
                    var newAttrs = getAttributeParts(newVal), name;
                    for (name in newAttrs) {
                        var newValue = newAttrs[name], oldValue = oldAttrs[name];
                        if (newValue !== oldValue) {
                            can.attr.set(el, name, newValue);
                        }
                        delete oldAttrs[name];
                    }
                    for (name in oldAttrs) {
                        elements.removeAttr(el, name);
                    }
                    oldAttrs = newAttrs;
                };
                listen(el, compute, function (ev, newVal) {
                    setAttrs(newVal);
                });
                if (arguments.length >= 3) {
                    oldAttrs = getAttributeParts(currentValue);
                } else {
                    setAttrs(compute());
                }
            },
            attributePlaceholder: '__!!__',
            attributeReplace: /__!!__/g,
            attribute: function (el, attributeName, compute) {
                listen(el, compute, function (ev, newVal) {
                    elements.setAttr(el, attributeName, hook.render());
                });
                var wrapped = can.$(el), hooks;
                hooks = can.data(wrapped, 'hooks');
                if (!hooks) {
                    can.data(wrapped, 'hooks', hooks = {});
                }
                var attr = elements.getAttr(el, attributeName), parts = attr.split(live.attributePlaceholder), goodParts = [], hook;
                goodParts.push(parts.shift(), parts.join(live.attributePlaceholder));
                if (hooks[attributeName]) {
                    hooks[attributeName].computes.push(compute);
                } else {
                    hooks[attributeName] = {
                        render: function () {
                            var i = 0, newAttr = attr ? attr.replace(live.attributeReplace, function () {
                                    return elements.contentText(hook.computes[i++]());
                                }) : elements.contentText(hook.computes[i++]());
                            return newAttr;
                        },
                        computes: [compute],
                        batchNum: undefined
                    };
                }
                hook = hooks[attributeName];
                goodParts.splice(1, 0, compute());
                elements.setAttr(el, attributeName, goodParts.join(''));
            },
            specialAttribute: function (el, attributeName, compute) {
                listen(el, compute, function (ev, newVal) {
                    elements.setAttr(el, attributeName, getValue(newVal));
                });
                elements.setAttr(el, attributeName, getValue(compute()));
            },
            simpleAttribute: function (el, attributeName, compute) {
                listen(el, compute, function (ev, newVal) {
                    elements.setAttr(el, attributeName, newVal);
                });
                elements.setAttr(el, attributeName, compute());
            }
        };
    live.attr = live.simpleAttribute;
    live.attrs = live.attributes;
    var newLine = /(\r|\n)+/g;
    var getValue = function (val) {
        var regexp = /^["'].*["']$/;
        val = val.replace(elements.attrReg, '').replace(newLine, '');
        return regexp.test(val) ? val.substr(1, val.length - 2) : val;
    };
    can.view.live = live;
    return live;
});
/*can/view/render*/
define('can/view/render', [
    'can/view/view',
    './elements',
    'can/view/live/live',
    'can/util/string/string'
], function (can, elements, live) {
    var pendingHookups = [], tagChildren = function (tagName) {
            var newTag = elements.tagMap[tagName] || 'span';
            if (newTag === 'span') {
                return '@@!!@@';
            }
            return '<' + newTag + '>' + tagChildren(newTag) + '</' + newTag + '>';
        }, contentText = function (input, tag) {
            if (typeof input === 'string') {
                return input;
            }
            if (!input && input !== 0) {
                return '';
            }
            var hook = input.hookup && function (el, id) {
                    input.hookup.call(input, el, id);
                } || typeof input === 'function' && input;
            if (hook) {
                if (tag) {
                    return '<' + tag + ' ' + can.view.hook(hook) + '></' + tag + '>';
                } else {
                    pendingHookups.push(hook);
                }
                return '';
            }
            return '' + input;
        }, contentEscape = function (txt, tag) {
            return typeof txt === 'string' || typeof txt === 'number' ? can.esc(txt) : contentText(txt, tag);
        }, withinTemplatedSectionWithinAnElement = false, emptyHandler = function () {
        };
    var lastHookups;
    can.extend(can.view, {
        live: live,
        setupLists: function () {
            var old = can.view.lists, data;
            can.view.lists = function (list, renderer) {
                data = {
                    list: list,
                    renderer: renderer
                };
                return Math.random();
            };
            return function () {
                can.view.lists = old;
                return data;
            };
        },
        getHooks: function () {
            var hooks = pendingHookups.slice(0);
            lastHookups = hooks;
            pendingHookups = [];
            return hooks;
        },
        onlytxt: function (self, func) {
            return contentEscape(func.call(self));
        },
        txt: function (escape, tagName, status, self, func) {
            var tag = elements.tagMap[tagName] || 'span', setupLiveBinding = false, value, listData, compute, unbind = emptyHandler, attributeName;
            if (withinTemplatedSectionWithinAnElement) {
                value = func.call(self);
            } else {
                if (typeof status === 'string' || status === 1) {
                    withinTemplatedSectionWithinAnElement = true;
                }
                var listTeardown = can.view.setupLists();
                unbind = function () {
                    compute.unbind('change', emptyHandler);
                };
                compute = can.compute(func, self, false);
                compute.bind('change', emptyHandler);
                listData = listTeardown();
                value = compute();
                withinTemplatedSectionWithinAnElement = false;
                setupLiveBinding = compute.hasDependencies;
            }
            if (listData) {
                unbind();
                return '<' + tag + can.view.hook(function (el, parentNode) {
                    live.list(el, listData.list, listData.renderer, self, parentNode);
                }) + '></' + tag + '>';
            }
            if (!setupLiveBinding || typeof value === 'function') {
                unbind();
                return (withinTemplatedSectionWithinAnElement || escape === 2 || !escape ? contentText : contentEscape)(value, status === 0 && tag);
            }
            var contentProp = elements.tagToContentPropMap[tagName];
            if (status === 0 && !contentProp) {
                return '<' + tag + can.view.hook(escape && typeof value !== 'object' ? function (el, parentNode) {
                    live.text(el, compute, parentNode);
                    unbind();
                } : function (el, parentNode) {
                    live.html(el, compute, parentNode);
                    unbind();
                }) + '>' + tagChildren(tag) + '</' + tag + '>';
            } else if (status === 1) {
                pendingHookups.push(function (el) {
                    live.attributes(el, compute, compute());
                    unbind();
                });
                return compute();
            } else if (escape === 2) {
                attributeName = status;
                pendingHookups.push(function (el) {
                    live.specialAttribute(el, attributeName, compute);
                    unbind();
                });
                return compute();
            } else {
                attributeName = status === 0 ? contentProp : status;
                (status === 0 ? lastHookups : pendingHookups).push(function (el) {
                    live.attribute(el, attributeName, compute);
                    unbind();
                });
                return live.attributePlaceholder;
            }
        }
    });
    return can;
});
/*can/view/stache/utils*/
define('can/view/stache/utils', ['can/util/util'], function () {
    return {
        isArrayLike: function (obj) {
            return obj && obj.splice && typeof obj.length === 'number';
        },
        isObserveLike: function (obj) {
            return obj instanceof can.Map || obj && !!obj._get;
        },
        emptyHandler: function () {
        },
        jsonParse: function (str) {
            if (str[0] === '\'') {
                return str.substr(1, str.length - 2);
            } else if (str === 'undefined') {
                return undefined;
            } else if (can.global.JSON) {
                return JSON.parse(str);
            } else {
                return eval('(' + str + ')');
            }
        },
        mixins: {
            last: function () {
                return this.stack[this.stack.length - 1];
            },
            add: function (chars) {
                this.last().add(chars);
            },
            subSectionDepth: function () {
                return this.stack.length - 1;
            }
        }
    };
});
/*can/view/stache/mustache_helpers*/
define('can/view/stache/mustache_helpers', [
    'can/util/util',
    './utils',
    'can/view/live/live'
], function (can, utils, live) {
    live = live || can.view.live;
    var resolve = function (value) {
        if (utils.isObserveLike(value) && utils.isArrayLike(value) && value.attr('length')) {
            return value;
        } else if (can.isFunction(value)) {
            return value();
        } else {
            return value;
        }
    };
    var helpers = {
            'each': function (items, options) {
                var resolved = resolve(items), result = [], keys, key, i;
                if (resolved instanceof can.List || items && items.isComputed && resolved === undefined) {
                    return function (el) {
                        var cb = function (item, index, parentNodeList) {
                            return options.fn(options.scope.add({ '@index': index }).add(item), options.options, parentNodeList);
                        };
                        live.list(el, items, cb, options.context, el.parentNode, options.nodeList);
                    };
                }
                var expr = resolved;
                if (!!expr && utils.isArrayLike(expr)) {
                    for (i = 0; i < expr.length; i++) {
                        result.push(options.fn(options.scope.add({ '@index': i }).add(expr[i])));
                    }
                } else if (utils.isObserveLike(expr)) {
                    keys = can.Map.keys(expr);
                    for (i = 0; i < keys.length; i++) {
                        key = keys[i];
                        result.push(options.fn(options.scope.add({ '@key': key }).add(expr[key])));
                    }
                } else if (expr instanceof Object) {
                    for (key in expr) {
                        result.push(options.fn(options.scope.add({ '@key': key }).add(expr[key])));
                    }
                }
                return result;
            },
            '@index': function (offset, options) {
                if (!options) {
                    options = offset;
                    offset = 0;
                }
                var index = options.scope.attr('@index');
                return '' + ((can.isFunction(index) ? index() : index) + offset);
            },
            'if': function (expr, options) {
                var value;
                if (can.isFunction(expr)) {
                    value = can.compute.truthy(expr)();
                } else {
                    value = !!resolve(expr);
                }
                if (value) {
                    return options.fn(options.scope || this);
                } else {
                    return options.inverse(options.scope || this);
                }
            },
            'unless': function (expr, options) {
                return helpers['if'].apply(this, [
                    can.isFunction(expr) ? can.compute(function () {
                        return !expr();
                    }) : !expr,
                    options
                ]);
            },
            'with': function (expr, options) {
                var ctx = expr;
                expr = resolve(expr);
                if (!!expr) {
                    return options.fn(ctx);
                }
            },
            'log': function (expr, options) {
                if (typeof console !== 'undefined' && console.log) {
                    if (!options) {
                        console.log(expr.context);
                    } else {
                        console.log(expr, options.context);
                    }
                }
            },
            'data': function (attr) {
                var data = arguments.length === 2 ? this : arguments[1];
                return function (el) {
                    can.data(can.$(el), attr, data || this.context);
                };
            }
        };
    return {
        registerHelper: function (name, callback) {
            helpers[name] = callback;
        },
        getHelper: function (name, options) {
            var helper = options.attr('helpers.' + name);
            if (!helper) {
                helper = helpers[name];
            }
            if (helper) {
                return { fn: helper };
            }
        }
    };
});
/*can/view/stache/mustache_core*/
define('can/view/stache/mustache_core', [
    'can/util/util',
    './utils',
    './mustache_helpers',
    'can/view/live/live',
    'can/view/elements',
    'can/view/scope/scope',
    'can/view/node_lists/node_lists'
], function (can, utils, mustacheHelpers, live, elements, Scope, nodeLists) {
    live = live || can.view.live;
    elements = elements || can.view.elements;
    Scope = Scope || can.view.Scope;
    nodeLists = nodeLists || can.view.nodeLists;
    var argumentsRegExp = /((([^'"\s]+?=)?('.*?'|".*?"))|.*?)\s/g, literalNumberStringBooleanRegExp = /^(?:(?:('.*?'|".*?")|([0-9]+\.?[0-9]*|true|false|null|undefined))|(?:(.+?)=(?:(?:('.*?'|".*?")|([0-9]+\.?[0-9]*|true|false|null|undefined))|(.+))))$/, mustacheLineBreakRegExp = /(?:(?:^|(\r?)\n)(\s*)(\{\{([^\}]*)\}\}\}?)([^\S\n\r]*)($|\r?\n))|(\{\{([^\}]*)\}\}\}?)/g, isLookup = function (obj) {
            return obj && typeof obj.get === 'string';
        }, getItemsFragContent = function (items, isObserveList, helperOptions, options) {
            var frag = document.createDocumentFragment();
            for (var i = 0, len = items.length; i < len; i++) {
                append(frag, helperOptions.fn(isObserveList ? items.attr('' + i) : items[i], options));
            }
            return frag;
        }, append = function (frag, content) {
            if (content) {
                frag.appendChild(typeof content === 'string' ? document.createTextNode(content) : content);
            }
        }, getItemsStringContent = function (items, isObserveList, helperOptions, options) {
            var txt = '';
            for (var i = 0, len = items.length; i < len; i++) {
                txt += helperOptions.fn(isObserveList ? items.attr('' + i) : items[i], options);
            }
            return txt;
        }, getKeyComputeData = function (key, scope, isArgument) {
            var data = scope.computeData(key, {
                    isArgument: isArgument,
                    args: [
                        scope.attr('.'),
                        scope
                    ]
                });
            can.compute.temporarilyBind(data.compute);
            return data;
        }, getKeyArgValue = function (key, scope) {
            var data = getKeyComputeData(key, scope, true);
            if (!data.compute.hasDependencies) {
                return data.initialValue;
            } else {
                return data.compute;
            }
        }, convertToScopes = function (helperOptions, scope, options, nodeList, truthyRenderer, falseyRenderer) {
            if (truthyRenderer) {
                helperOptions.fn = makeRendererConvertScopes(truthyRenderer, scope, options, nodeList);
            }
            if (falseyRenderer) {
                helperOptions.inverse = makeRendererConvertScopes(falseyRenderer, scope, options, nodeList);
            }
        }, makeRendererConvertScopes = function (renderer, parentScope, parentOptions, nodeList) {
            var rendererWithScope = function (ctx, opts, parentNodeList) {
                return renderer(ctx || parentScope, opts, parentNodeList);
            };
            return function (newScope, newOptions, parentNodeList) {
                var reads = can.__clearReading();
                if (newScope !== undefined && !(newScope instanceof can.view.Scope)) {
                    newScope = parentScope.add(newScope);
                }
                if (newOptions !== undefined && !(newOptions instanceof core.Options)) {
                    newOptions = parentOptions.add(newOptions);
                }
                var result = rendererWithScope(newScope, newOptions || parentOptions, parentNodeList || nodeList);
                can.__setReading(reads);
                return result;
            };
        };
    var core = {
            expressionData: function (expression) {
                var args = [], hashes = {}, i = 0;
                (can.trim(expression) + ' ').replace(argumentsRegExp, function (whole, arg) {
                    var m;
                    if (i && (m = arg.match(literalNumberStringBooleanRegExp))) {
                        if (m[1] || m[2]) {
                            args.push(utils.jsonParse(m[1] || m[2]));
                        } else {
                            hashes[m[3]] = m[6] ? { get: m[6] } : utils.jsonParse(m[4] || m[5]);
                        }
                    } else {
                        args.push({ get: arg });
                    }
                    i++;
                });
                return {
                    name: args.shift(),
                    args: args,
                    hash: hashes
                };
            },
            makeEvaluator: function (scope, options, nodeList, mode, exprData, truthyRenderer, falseyRenderer, stringOnly) {
                var args = [], hash = {}, helperOptions = {
                        fn: function () {
                        },
                        inverse: function () {
                        }
                    }, context = scope.attr('.'), name = exprData.name, helper, looksLikeAHelper = exprData.args.length || !can.isEmptyObject(exprData.hash), initialValue;
                for (var i = 0, len = exprData.args.length; i < len; i++) {
                    var arg = exprData.args[i];
                    if (arg && isLookup(arg)) {
                        args.push(getKeyArgValue(arg.get, scope, true));
                    } else {
                        args.push(arg);
                    }
                }
                for (var prop in exprData.hash) {
                    if (isLookup(exprData.hash[prop])) {
                        hash[prop] = getKeyArgValue(exprData.hash[prop].get, scope);
                    } else {
                        hash[prop] = exprData.hash[prop];
                    }
                }
                if (isLookup(name)) {
                    if (looksLikeAHelper) {
                        helper = mustacheHelpers.getHelper(name.get, options);
                        if (!helper && typeof context[name.get] === 'function') {
                            helper = { fn: context[name.get] };
                        }
                    }
                    if (!helper) {
                        var get = name.get;
                        var computeData = getKeyComputeData(name.get, scope, false), compute = computeData.compute;
                        initialValue = computeData.initialValue;
                        if (computeData.reads && computeData.reads.length === 1 && computeData.root instanceof can.Map && !can.isFunction(computeData.root[computeData.reads[0]])) {
                            compute = can.compute(computeData.root, computeData.reads[0]);
                        }
                        if (computeData.compute.hasDependencies) {
                            name = compute;
                        } else {
                            name = initialValue;
                        }
                        if (!looksLikeAHelper && initialValue === undefined) {
                            helper = mustacheHelpers.getHelper(get, options);
                        } else if (typeof initialValue === 'function') {
                            helper = { fn: initialValue };
                        }
                    }
                }
                if (mode === '^') {
                    var temp = truthyRenderer;
                    truthyRenderer = falseyRenderer;
                    falseyRenderer = temp;
                }
                if (helper) {
                    convertToScopes(helperOptions, scope, options, nodeList, truthyRenderer, falseyRenderer);
                    can.simpleExtend(helperOptions, {
                        context: context,
                        scope: scope,
                        contexts: scope,
                        hash: hash,
                        nodeList: nodeList
                    });
                    args.push(helperOptions);
                    return function () {
                        return helper.fn.apply(context, args) || '';
                    };
                }
                if (!mode) {
                    if (name && name.isComputed) {
                        return name;
                    } else {
                        return function () {
                            return '' + (name != null ? name : '');
                        };
                    }
                } else if (mode === '#' || mode === '^') {
                    convertToScopes(helperOptions, scope, options, nodeList, truthyRenderer, falseyRenderer);
                    return function () {
                        var value;
                        if (can.isFunction(name) && name.isComputed) {
                            value = name();
                        } else {
                            value = name;
                        }
                        if (utils.isArrayLike(value)) {
                            var isObserveList = utils.isObserveLike(value);
                            if (isObserveList ? value.attr('length') : value.length) {
                                return (stringOnly ? getItemsStringContent : getItemsFragContent)(value, isObserveList, helperOptions, options);
                            } else {
                                return helperOptions.inverse(scope, options);
                            }
                        } else {
                            return value ? helperOptions.fn(value || scope, options) : helperOptions.inverse(scope, options);
                        }
                    };
                } else {
                }
            },
            makeLiveBindingPartialRenderer: function (partialName, state) {
                partialName = can.trim(partialName);
                return function (scope, options, parentSectionNodeList) {
                    var partial = options.attr('partials.' + partialName), res;
                    if (partial) {
                        res = partial.render ? partial.render(scope, options) : partial(scope, options);
                    } else {
                        res = can.view.render(partialName, scope, options);
                    }
                    res = can.frag(res);
                    var nodeList = [this];
                    nodeLists.register(nodeList, null, state.directlyNested ? parentSectionNodeList || true : true);
                    nodeLists.update(nodeList, res.childNodes);
                    elements.replace([this], res);
                };
            },
            makeStringBranchRenderer: function (mode, expression) {
                var exprData = expressionData(expression), fullExpression = mode + expression;
                return function branchRenderer(scope, options, truthyRenderer, falseyRenderer) {
                    var evaluator = scope.__cache[fullExpression];
                    if (mode || !evaluator) {
                        evaluator = makeEvaluator(scope, options, null, mode, exprData, truthyRenderer, falseyRenderer, true);
                        if (!mode) {
                            scope.__cache[fullExpression] = evaluator;
                        }
                    }
                    var res = evaluator();
                    return res == null ? '' : '' + res;
                };
            },
            makeLiveBindingBranchRenderer: function (mode, expression, state) {
                var exprData = expressionData(expression);
                return function branchRenderer(scope, options, parentSectionNodeList, truthyRenderer, falseyRenderer) {
                    var nodeList = [this];
                    nodeList.expression = expression;
                    nodeLists.register(nodeList, null, state.directlyNested ? parentSectionNodeList || true : true);
                    var evaluator = makeEvaluator(scope, options, nodeList, mode, exprData, truthyRenderer, falseyRenderer, state.tag);
                    var compute = can.compute(evaluator, null, false, true);
                    compute.bind('change', can.k);
                    var value = compute();
                    if (typeof value === 'function') {
                        var old = can.__clearReading();
                        value(this);
                        can.__setReading(old);
                    } else if (compute.hasDependencies) {
                        if (state.attr) {
                            live.simpleAttribute(this, state.attr, compute);
                        } else if (state.tag) {
                            live.attributes(this, compute);
                        } else if (state.text && typeof value !== 'object') {
                            live.text(this, compute, this.parentNode, nodeList);
                        } else {
                            live.html(this, compute, this.parentNode, nodeList);
                        }
                    } else {
                        if (state.attr) {
                            can.attr.set(this, state.attr, value);
                        } else if (state.tag) {
                            live.setAttributes(this, value);
                        } else if (state.text && typeof value === 'string') {
                            this.nodeValue = value;
                        } else if (value) {
                            elements.replace([this], can.frag(value));
                        }
                    }
                    compute.unbind('change', can.k);
                };
            },
            splitModeFromExpression: function (expression, state) {
                expression = can.trim(expression);
                var mode = expression.charAt(0);
                if ('#/{&^>!'.indexOf(mode) >= 0) {
                    expression = can.trim(expression.substr(1));
                } else {
                    mode = null;
                }
                if (mode === '{' && state.node) {
                    mode = null;
                }
                return {
                    mode: mode,
                    expression: expression
                };
            },
            cleanLineEndings: function (template) {
                return template.replace(mustacheLineBreakRegExp, function (whole, returnBefore, spaceBefore, special, expression, spaceAfter, returnAfter, spaceLessSpecial, spaceLessExpression, matchIndex) {
                    spaceAfter = spaceAfter || '';
                    returnBefore = returnBefore || '';
                    spaceBefore = spaceBefore || '';
                    var modeAndExpression = splitModeFromExpression(expression || spaceLessExpression, {});
                    if (spaceLessSpecial || '>{'.indexOf(modeAndExpression.mode) >= 0) {
                        return whole;
                    } else if ('^#!/'.indexOf(modeAndExpression.mode) >= 0) {
                        return special + (matchIndex !== 0 && returnAfter.length ? returnBefore + '\n' : '');
                    } else {
                        return spaceBefore + special + spaceAfter + (spaceBefore.length || matchIndex !== 0 ? returnBefore + '\n' : '');
                    }
                });
            },
            Options: can.view.Scope.extend({
                init: function (data, parent) {
                    if (!data.helpers && !data.partials && !data.tags) {
                        data = { helpers: data };
                    }
                    can.view.Scope.prototype.init.apply(this, arguments);
                }
            })
        };
    var makeEvaluator = core.makeEvaluator, expressionData = core.expressionData, splitModeFromExpression = core.splitModeFromExpression;
    return core;
});
/*can/view/bindings/bindings*/
define('can/view/bindings/bindings', [
    'can/util/util',
    'can/view/stache/mustache_core',
    'can/view/callbacks/callbacks',
    'can/control/control'
], function (can, mustacheCore) {
    var isContentEditable = function () {
            var values = {
                    '': true,
                    'true': true,
                    'false': false
                };
            var editable = function (el) {
                if (!el || !el.getAttribute) {
                    return;
                }
                var attr = el.getAttribute('contenteditable');
                return values[attr];
            };
            return function (el) {
                var val = editable(el);
                if (typeof val === 'boolean') {
                    return val;
                } else {
                    return !!editable(el.parentNode);
                }
            };
        }(), removeCurly = function (value) {
            if (value[0] === '{' && value[value.length - 1] === '}') {
                return value.substr(1, value.length - 2);
            }
            return value;
        };
    can.view.attr('can-value', function (el, data) {
        var attr = removeCurly(el.getAttribute('can-value')), value = data.scope.computeData(attr, { args: [] }).compute, trueValue, falseValue;
        if (el.nodeName.toLowerCase() === 'input') {
            if (el.type === 'checkbox') {
                if (can.attr.has(el, 'can-true-value')) {
                    trueValue = el.getAttribute('can-true-value');
                } else {
                    trueValue = true;
                }
                if (can.attr.has(el, 'can-false-value')) {
                    falseValue = el.getAttribute('can-false-value');
                } else {
                    falseValue = false;
                }
            }
            if (el.type === 'checkbox' || el.type === 'radio') {
                new Checked(el, {
                    value: value,
                    trueValue: trueValue,
                    falseValue: falseValue
                });
                return;
            }
        }
        if (el.nodeName.toLowerCase() === 'select' && el.multiple) {
            new Multiselect(el, { value: value });
            return;
        }
        if (isContentEditable(el)) {
            new Content(el, { value: value });
            return;
        }
        new Value(el, { value: value });
    });
    var special = {
            enter: function (data, el, original) {
                return {
                    event: 'keyup',
                    handler: function (ev) {
                        if (ev.keyCode === 13) {
                            return original.call(this, ev);
                        }
                    }
                };
            }
        };
    can.view.attr(/can-[\w\.]+/, function (el, data) {
        var attributeName = data.attributeName, event = attributeName.substr('can-'.length), handler = function (ev) {
                var attrInfo = mustacheCore.expressionData(removeCurly(el.getAttribute(attributeName)));
                var scopeData = data.scope.read(attrInfo.name.get, {
                        returnObserveMethods: true,
                        isArgument: true
                    });
                if (!scopeData.value) {
                    can.dev.warn('can/view/bindings: ' + attributeName + ' couldn\'t find method named ' + attrInfo.name.get, {
                        element: el,
                        scope: data.scope
                    });
                    return null;
                }
                var args = [
                        can.$(this),
                        ev
                    ];
                if (!attrInfo.args.length && can.isEmptyObject(attrInfo.hash)) {
                    args.unshift(data.scope._context);
                }
                if (!can.isEmptyObject(attrInfo.hash)) {
                    args.unshift(attrInfo.hash);
                }
                if (attrInfo.args.length) {
                    var arg;
                    for (var i = attrInfo.args.length - 1; i >= 0; i--) {
                        arg = attrInfo.args[i];
                        if (arg.get) {
                            args.unshift(data.scope.read(arg.get, { isArgument: true }).value);
                        } else {
                            args.unshift(arg);
                        }
                    }
                }
                return scopeData.value.apply(scopeData.parent, args);
            };
        if (special[event]) {
            var specialData = special[event](data, el, handler);
            handler = specialData.handler;
            event = specialData.event;
        }
        can.bind.call(el, event, handler);
    });
    var Value = can.Control.extend({
            init: function () {
                if (this.element[0].nodeName.toUpperCase() === 'SELECT') {
                    setTimeout(can.proxy(this.set, this), 1);
                } else {
                    this.set();
                }
            },
            '{value} change': 'set',
            set: function () {
                if (!this.element) {
                    return;
                }
                var val = this.options.value();
                this.element[0].value = val == null ? '' : val;
            },
            'change': function () {
                if (!this.element) {
                    return;
                }
                this.options.value(this.element[0].value);
            }
        }), Checked = can.Control.extend({
            init: function () {
                this.isCheckbox = this.element[0].type.toLowerCase() === 'checkbox';
                this.check();
            },
            '{value} change': 'check',
            check: function () {
                if (this.isCheckbox) {
                    var value = this.options.value(), trueValue = this.options.trueValue || true;
                    this.element[0].checked = value === trueValue;
                } else {
                    var setOrRemove = this.options.value() == this.element[0].value ? 'set' : 'remove';
                    can.attr[setOrRemove](this.element[0], 'checked', true);
                }
            },
            'change': function () {
                if (this.isCheckbox) {
                    this.options.value(this.element[0].checked ? this.options.trueValue : this.options.falseValue);
                } else {
                    if (this.element[0].checked) {
                        this.options.value(this.element[0].value);
                    }
                }
            }
        }), Multiselect = Value.extend({
            init: function () {
                this.delimiter = ';';
                this.set();
            },
            set: function () {
                var newVal = this.options.value();
                if (typeof newVal === 'string') {
                    newVal = newVal.split(this.delimiter);
                    this.isString = true;
                } else if (newVal) {
                    newVal = can.makeArray(newVal);
                }
                var isSelected = {};
                can.each(newVal, function (val) {
                    isSelected[val] = true;
                });
                can.each(this.element[0].childNodes, function (option) {
                    if (option.value) {
                        option.selected = !!isSelected[option.value];
                    }
                });
            },
            get: function () {
                var values = [], children = this.element[0].childNodes;
                can.each(children, function (child) {
                    if (child.selected && child.value) {
                        values.push(child.value);
                    }
                });
                return values;
            },
            'change': function () {
                var value = this.get(), currentValue = this.options.value();
                if (this.isString || typeof currentValue === 'string') {
                    this.isString = true;
                    this.options.value(value.join(this.delimiter));
                } else if (currentValue instanceof can.List) {
                    currentValue.attr(value, true);
                } else {
                    this.options.value(value);
                }
            }
        }), Content = can.Control.extend({
            init: function () {
                this.set();
                this.on('blur', 'setValue');
            },
            '{value} change': 'set',
            set: function () {
                var val = this.options.value();
                this.element[0].innerHTML = typeof val === 'undefined' ? '' : val;
            },
            setValue: function () {
                this.options.value(this.element[0].innerHTML);
            }
        });
});
/*can/view/mustache/mustache*/
define('can/view/mustache/mustache', [
    'can/util/util',
    'can/view/scope/scope',
    'can/view/view',
    'can/view/scanner',
    'can/compute/compute',
    'can/view/render',
    'can/view/bindings/bindings'
], function (can) {
    can.view.ext = '.mustache';
    var SCOPE = 'scope', HASH = '___h4sh', CONTEXT_OBJ = '{scope:' + SCOPE + ',options:options}', SPECIAL_CONTEXT_OBJ = '{scope:' + SCOPE + ',options:options, special: true}', ARG_NAMES = SCOPE + ',options', argumentsRegExp = /((([^'"\s]+?=)?('.*?'|".*?"))|.*?)\s/g, literalNumberStringBooleanRegExp = /^(('.*?'|".*?"|[0-9]+\.?[0-9]*|true|false|null|undefined)|((.+?)=(('.*?'|".*?"|[0-9]+\.?[0-9]*|true|false)|(.+))))$/, makeLookupLiteral = function (type) {
            return '{get:"' + type.replace(/"/g, '\\"') + '"}';
        }, isLookup = function (obj) {
            return obj && typeof obj.get === 'string';
        }, isObserveLike = function (obj) {
            return obj instanceof can.Map || obj && !!obj._get;
        }, isArrayLike = function (obj) {
            return obj && obj.splice && typeof obj.length === 'number';
        }, makeConvertToScopes = function (original, scope, options) {
            var originalWithScope = function (ctx, opts) {
                return original(ctx || scope, opts);
            };
            return function (updatedScope, updatedOptions) {
                if (updatedScope !== undefined && !(updatedScope instanceof can.view.Scope)) {
                    updatedScope = scope.add(updatedScope);
                }
                if (updatedOptions !== undefined && !(updatedOptions instanceof can.view.Options)) {
                    updatedOptions = options.add(updatedOptions);
                }
                return originalWithScope(updatedScope, updatedOptions || options);
            };
        };
    var Mustache = function (options, helpers) {
        if (this.constructor !== Mustache) {
            var mustache = new Mustache(options);
            return function (data, options) {
                return mustache.render(data, options);
            };
        }
        if (typeof options === 'function') {
            this.template = { fn: options };
            return;
        }
        can.extend(this, options);
        this.template = this.scanner.scan(this.text, this.name);
    };
    can.Mustache = can.global.Mustache = Mustache;
    Mustache.prototype.render = function (data, options) {
        if (!(data instanceof can.view.Scope)) {
            data = new can.view.Scope(data || {});
        }
        if (!(options instanceof can.view.Options)) {
            options = new can.view.Options(options || {});
        }
        options = options || {};
        return this.template.fn.call(data, data, options);
    };
    can.extend(Mustache.prototype, {
        scanner: new can.view.Scanner({
            text: {
                start: '',
                scope: SCOPE,
                options: ',options: options',
                argNames: ARG_NAMES
            },
            tokens: [
                [
                    'returnLeft',
                    '{{{',
                    '{{[{&]'
                ],
                [
                    'commentFull',
                    '{{!}}',
                    '^[\\s\\t]*{{!.+?}}\\n'
                ],
                [
                    'commentLeft',
                    '{{!',
                    '(\\n[\\s\\t]*{{!|{{!)'
                ],
                [
                    'escapeFull',
                    '{{}}',
                    '(^[\\s\\t]*{{[#/^][^}]+?}}\\n|\\n[\\s\\t]*{{[#/^][^}]+?}}\\n|\\n[\\s\\t]*{{[#/^][^}]+?}}$)',
                    function (content) {
                        return {
                            before: /^\n.+?\n$/.test(content) ? '\n' : '',
                            content: content.match(/\{\{(.+?)\}\}/)[1] || ''
                        };
                    }
                ],
                [
                    'escapeLeft',
                    '{{'
                ],
                [
                    'returnRight',
                    '}}}'
                ],
                [
                    'right',
                    '}}'
                ]
            ],
            helpers: [
                {
                    name: /^>[\s]*\w*/,
                    fn: function (content, cmd) {
                        var templateName = can.trim(content.replace(/^>\s?/, '')).replace(/["|']/g, '');
                        return 'can.Mustache.renderPartial(\'' + templateName + '\',' + ARG_NAMES + ')';
                    }
                },
                {
                    name: /^\s*data\s/,
                    fn: function (content, cmd) {
                        var attr = content.match(/["|'](.*)["|']/)[1];
                        return 'can.proxy(function(__){' + 'can.data(can.$(__),\'' + attr + '\', this.attr(\'.\')); }, ' + SCOPE + ')';
                    }
                },
                {
                    name: /\s*\(([\$\w]+)\)\s*->([^\n]*)/,
                    fn: function (content) {
                        var quickFunc = /\s*\(([\$\w]+)\)\s*->([^\n]*)/, parts = content.match(quickFunc);
                        return 'can.proxy(function(__){var ' + parts[1] + '=can.$(__);with(' + SCOPE + '.attr(\'.\')){' + parts[2] + '}}, this);';
                    }
                },
                {
                    name: /^.*$/,
                    fn: function (content, cmd) {
                        var mode = false, result = {
                                content: '',
                                startTxt: false,
                                startOnlyTxt: false,
                                end: false
                            };
                        content = can.trim(content);
                        if (content.length && (mode = content.match(/^([#^/]|else$)/))) {
                            mode = mode[0];
                            switch (mode) {
                            case '#':
                            case '^':
                                if (cmd.specialAttribute) {
                                    result.startOnlyTxt = true;
                                } else {
                                    result.startTxt = true;
                                    result.escaped = 0;
                                }
                                break;
                            case '/':
                                result.end = true;
                                result.content += 'return ___v1ew.join("");}}])';
                                return result;
                            }
                            content = content.substring(1);
                        }
                        if (mode !== 'else') {
                            var args = [], hashes = [], i = 0, m;
                            result.content += 'can.Mustache.txt(\n' + (cmd.specialAttribute ? SPECIAL_CONTEXT_OBJ : CONTEXT_OBJ) + ',\n' + (mode ? '"' + mode + '"' : 'null') + ',';
                            (can.trim(content) + ' ').replace(argumentsRegExp, function (whole, arg) {
                                if (i && (m = arg.match(literalNumberStringBooleanRegExp))) {
                                    if (m[2]) {
                                        args.push(m[0]);
                                    } else {
                                        hashes.push(m[4] + ':' + (m[6] ? m[6] : makeLookupLiteral(m[5])));
                                    }
                                } else {
                                    args.push(makeLookupLiteral(arg));
                                }
                                i++;
                            });
                            result.content += args.join(',');
                            if (hashes.length) {
                                result.content += ',{' + HASH + ':{' + hashes.join(',') + '}}';
                            }
                        }
                        if (mode && mode !== 'else') {
                            result.content += ',[\n\n';
                        }
                        switch (mode) {
                        case '^':
                        case '#':
                            result.content += '{fn:function(' + ARG_NAMES + '){var ___v1ew = [];';
                            break;
                        case 'else':
                            result.content += 'return ___v1ew.join("");}},\n{inverse:function(' + ARG_NAMES + '){\nvar ___v1ew = [];';
                            break;
                        default:
                            result.content += ')';
                            break;
                        }
                        if (!mode) {
                            result.startTxt = true;
                            result.end = true;
                        }
                        return result;
                    }
                }
            ]
        })
    });
    var helpers = can.view.Scanner.prototype.helpers;
    for (var i = 0; i < helpers.length; i++) {
        Mustache.prototype.scanner.helpers.unshift(helpers[i]);
    }
    Mustache.txt = function (scopeAndOptions, mode, name) {
        var scope = scopeAndOptions.scope, options = scopeAndOptions.options, args = [], helperOptions = {
                fn: function () {
                },
                inverse: function () {
                }
            }, hash, context = scope.attr('.'), getHelper = true, helper;
        for (var i = 3; i < arguments.length; i++) {
            var arg = arguments[i];
            if (mode && can.isArray(arg)) {
                helperOptions = can.extend.apply(can, [helperOptions].concat(arg));
            } else if (arg && arg[HASH]) {
                hash = arg[HASH];
                for (var prop in hash) {
                    if (isLookup(hash[prop])) {
                        hash[prop] = Mustache.get(hash[prop].get, scopeAndOptions, false, true);
                    }
                }
            } else if (arg && isLookup(arg)) {
                args.push(Mustache.get(arg.get, scopeAndOptions, false, true, true));
            } else {
                args.push(arg);
            }
        }
        if (isLookup(name)) {
            var get = name.get;
            name = Mustache.get(name.get, scopeAndOptions, args.length, false);
            getHelper = get === name;
        }
        helperOptions.fn = makeConvertToScopes(helperOptions.fn, scope, options);
        helperOptions.inverse = makeConvertToScopes(helperOptions.inverse, scope, options);
        if (mode === '^') {
            var tmp = helperOptions.fn;
            helperOptions.fn = helperOptions.inverse;
            helperOptions.inverse = tmp;
        }
        if (helper = getHelper && (typeof name === 'string' && Mustache.getHelper(name, options)) || can.isFunction(name) && !name.isComputed && { fn: name }) {
            can.extend(helperOptions, {
                context: context,
                scope: scope,
                contexts: scope,
                hash: hash
            });
            args.push(helperOptions);
            return function () {
                return helper.fn.apply(context, args) || '';
            };
        }
        return function () {
            var value;
            if (can.isFunction(name) && name.isComputed) {
                value = name();
            } else {
                value = name;
            }
            var validArgs = args.length ? args : [value], valid = true, result = [], i, argIsObserve, arg;
            if (mode) {
                for (i = 0; i < validArgs.length; i++) {
                    arg = validArgs[i];
                    argIsObserve = typeof arg !== 'undefined' && isObserveLike(arg);
                    if (isArrayLike(arg)) {
                        if (mode === '#') {
                            valid = valid && !!(argIsObserve ? arg.attr('length') : arg.length);
                        } else if (mode === '^') {
                            valid = valid && !(argIsObserve ? arg.attr('length') : arg.length);
                        }
                    } else {
                        valid = mode === '#' ? valid && !!arg : mode === '^' ? valid && !arg : valid;
                    }
                }
            }
            if (valid) {
                if (mode === '#') {
                    if (isArrayLike(value)) {
                        var isObserveList = isObserveLike(value);
                        for (i = 0; i < value.length; i++) {
                            result.push(helperOptions.fn(isObserveList ? value.attr('' + i) : value[i]));
                        }
                        return result.join('');
                    } else {
                        return helperOptions.fn(value || {}) || '';
                    }
                } else if (mode === '^') {
                    return helperOptions.inverse(value || {}) || '';
                } else {
                    return '' + (value != null ? value : '');
                }
            }
            return '';
        };
    };
    Mustache.get = function (key, scopeAndOptions, isHelper, isArgument, isLookup) {
        var context = scopeAndOptions.scope.attr('.'), options = scopeAndOptions.options || {};
        if (isHelper) {
            if (Mustache.getHelper(key, options)) {
                return key;
            }
            if (scopeAndOptions.scope && can.isFunction(context[key])) {
                return context[key];
            }
        }
        var computeData = scopeAndOptions.scope.computeData(key, {
                isArgument: isArgument,
                args: [
                    context,
                    scopeAndOptions.scope
                ]
            }), compute = computeData.compute;
        can.compute.temporarilyBind(compute);
        var initialValue = computeData.initialValue, helperObj = Mustache.getHelper(key, options);
        if (!isLookup && (initialValue === undefined || computeData.scope !== scopeAndOptions.scope) && Mustache.getHelper(key, options)) {
            return key;
        }
        if (!compute.hasDependencies) {
            return initialValue;
        } else {
            return compute;
        }
    };
    Mustache.resolve = function (value) {
        if (isObserveLike(value) && isArrayLike(value) && value.attr('length')) {
            return value;
        } else if (can.isFunction(value)) {
            return value();
        } else {
            return value;
        }
    };
    can.view.Options = can.view.Scope.extend({
        init: function (data, parent) {
            if (!data.helpers && !data.partials && !data.tags) {
                data = { helpers: data };
            }
            can.view.Scope.prototype.init.apply(this, arguments);
        }
    });
    Mustache._helpers = {};
    Mustache.registerHelper = function (name, fn) {
        this._helpers[name] = {
            name: name,
            fn: fn
        };
    };
    Mustache.getHelper = function (name, options) {
        var helper;
        if (options) {
            helper = options.attr('helpers.' + name);
        }
        return helper ? { fn: helper } : this._helpers[name];
    };
    Mustache.render = function (partial, scope, options) {
        if (!can.view.cached[partial]) {
            var reads = can.__clearReading();
            if (scope.attr('partial')) {
                partial = scope.attr('partial');
            }
            can.__setReading(reads);
        }
        return can.view.render(partial, scope, options);
    };
    Mustache.safeString = function (str) {
        return {
            toString: function () {
                return str;
            }
        };
    };
    Mustache.renderPartial = function (partialName, scope, options) {
        var partial = options.attr('partials.' + partialName);
        if (partial) {
            return partial.render ? partial.render(scope, options) : partial(scope, options);
        } else {
            return can.Mustache.render(partialName, scope, options);
        }
    };
    can.each({
        'if': function (expr, options) {
            var value;
            if (can.isFunction(expr)) {
                value = can.compute.truthy(expr)();
            } else {
                value = !!Mustache.resolve(expr);
            }
            if (value) {
                return options.fn(options.contexts || this);
            } else {
                return options.inverse(options.contexts || this);
            }
        },
        'unless': function (expr, options) {
            return Mustache._helpers['if'].fn.apply(this, [
                can.isFunction(expr) ? can.compute(function () {
                    return !expr();
                }) : !expr,
                options
            ]);
        },
        'each': function (expr, options) {
            var resolved = Mustache.resolve(expr), result = [], keys, key, i;
            if (can.view.lists && (resolved instanceof can.List || expr && expr.isComputed && resolved === undefined)) {
                return can.view.lists(expr, function (item, index) {
                    return options.fn(options.scope.add({ '@index': index }).add(item));
                });
            }
            expr = resolved;
            if (!!expr && isArrayLike(expr)) {
                for (i = 0; i < expr.length; i++) {
                    result.push(options.fn(options.scope.add({ '@index': i }).add(expr[i])));
                }
                return result.join('');
            } else if (isObserveLike(expr)) {
                keys = can.Map.keys(expr);
                for (i = 0; i < keys.length; i++) {
                    key = keys[i];
                    result.push(options.fn(options.scope.add({ '@key': key }).add(expr[key])));
                }
                return result.join('');
            } else if (expr instanceof Object) {
                for (key in expr) {
                    result.push(options.fn(options.scope.add({ '@key': key }).add(expr[key])));
                }
                return result.join('');
            }
        },
        'with': function (expr, options) {
            var ctx = expr;
            expr = Mustache.resolve(expr);
            if (!!expr) {
                return options.fn(ctx);
            }
        },
        'log': function (expr, options) {
            if (typeof console !== 'undefined' && console.log) {
                if (!options) {
                    console.log(expr.context);
                } else {
                    console.log(expr, options.context);
                }
            }
        },
        '@index': function (offset, options) {
            if (!options) {
                options = offset;
                offset = 0;
            }
            var index = options.scope.attr('@index');
            return '' + ((can.isFunction(index) ? index() : index) + offset);
        }
    }, function (fn, name) {
        Mustache.registerHelper(name, fn);
    });
    can.view.register({
        suffix: 'mustache',
        contentType: 'x-mustache-template',
        script: function (id, src) {
            return 'can.Mustache(function(' + ARG_NAMES + ') { ' + new Mustache({
                text: src,
                name: id
            }).template.out + ' })';
        },
        renderer: function (id, text) {
            return Mustache({
                text: text,
                name: id
            });
        }
    });
    can.mustache.registerHelper = can.proxy(can.Mustache.registerHelper, can.Mustache);
    can.mustache.safeString = can.Mustache.safeString;
    return can;
});
/*can/observe/observe*/
define('can/observe/observe', [
    'can/util/util',
    'can/map/map',
    'can/list/list',
    'can/compute/compute'
], function (can) {
    can.Observe = can.Map;
    can.Observe.startBatch = can.batch.start;
    can.Observe.stopBatch = can.batch.stop;
    can.Observe.triggerBatch = can.batch.trigger;
    return can;
});
/*can/component/component*/
define('can/component/component', [
    'can/util/util',
    'can/view/callbacks/callbacks',
    'can/control/control',
    'can/observe/observe',
    'can/view/mustache/mustache',
    'can/view/bindings/bindings'
], function (can, viewCallbacks) {
    var ignoreAttributesRegExp = /^(dataViewId|class|id)$/i, paramReplacer = /\{([^\}]+)\}/g;
    var Component = can.Component = can.Construct.extend({
            setup: function () {
                can.Construct.setup.apply(this, arguments);
                if (can.Component) {
                    var self = this, scope = this.prototype.scope;
                    this.Control = ComponentControl.extend(this.prototype.events);
                    if (!scope || typeof scope === 'object' && !(scope instanceof can.Map)) {
                        this.Map = can.Map.extend(scope || {});
                    } else if (scope.prototype instanceof can.Map) {
                        this.Map = scope;
                    }
                    this.attributeScopeMappings = {};
                    can.each(this.Map ? this.Map.defaults : {}, function (val, prop) {
                        if (val === '@') {
                            self.attributeScopeMappings[prop] = prop;
                        }
                    });
                    if (this.prototype.template) {
                        if (typeof this.prototype.template === 'function') {
                            var temp = this.prototype.template;
                            this.renderer = function () {
                                return can.view.frag(temp.apply(null, arguments));
                            };
                        } else {
                            this.renderer = can.view.mustache(this.prototype.template);
                        }
                    }
                    can.view.tag(this.prototype.tag, function (el, options) {
                        new self(el, options);
                    });
                }
            }
        }, {
            setup: function (el, hookupOptions) {
                var initalScopeData = {}, component = this, leakScopeOpt = this.leakScope || can.Component.leakScope, lexicalContent = typeof can.Component.leakScope === 'undefined' && typeof this.leakScope === 'undefined' ? true : !leakScopeOpt, twoWayBindings = {}, scopePropertyUpdating, componentScope, frag;
                can.each(this.constructor.attributeScopeMappings, function (val, prop) {
                    initalScopeData[prop] = el.getAttribute(can.hyphenate(val));
                });
                can.each(can.makeArray(el.attributes), function (node, index) {
                    var name = can.camelize(node.nodeName.toLowerCase()), value = node.value;
                    if (component.constructor.attributeScopeMappings[name] || ignoreAttributesRegExp.test(name) || viewCallbacks.attr(node.nodeName)) {
                        return;
                    }
                    if (value[0] === '{' && value[value.length - 1] === '}') {
                        value = value.substr(1, value.length - 2);
                    } else {
                        if (hookupOptions.templateType !== 'legacy') {
                            initalScopeData[name] = value;
                            return;
                        }
                    }
                    var computeData = hookupOptions.scope.computeData(value, { args: [] }), compute = computeData.compute;
                    var handler = function (ev, newVal) {
                        scopePropertyUpdating = name;
                        componentScope.attr(name, newVal);
                        scopePropertyUpdating = null;
                    };
                    compute.bind('change', handler);
                    initalScopeData[name] = compute();
                    if (!compute.hasDependencies) {
                        compute.unbind('change', handler);
                    } else {
                        can.bind.call(el, 'removed', function () {
                            compute.unbind('change', handler);
                        });
                        twoWayBindings[name] = computeData;
                    }
                });
                if (this.constructor.Map) {
                    componentScope = new this.constructor.Map(initalScopeData);
                } else if (this.scope instanceof can.Map) {
                    componentScope = this.scope;
                } else if (can.isFunction(this.scope)) {
                    var scopeResult = this.scope(initalScopeData, hookupOptions.scope, el);
                    if (scopeResult instanceof can.Map) {
                        componentScope = scopeResult;
                    } else if (scopeResult.prototype instanceof can.Map) {
                        componentScope = new scopeResult(initalScopeData);
                    } else {
                        componentScope = new (can.Map.extend(scopeResult))(initalScopeData);
                    }
                }
                var handlers = {};
                can.each(twoWayBindings, function (computeData, prop) {
                    handlers[prop] = function (ev, newVal) {
                        if (scopePropertyUpdating !== prop) {
                            computeData.compute(newVal);
                        }
                    };
                    componentScope.bind(prop, handlers[prop]);
                });
                can.bind.call(el, 'removed', function () {
                    can.each(handlers, function (handler, prop) {
                        componentScope.unbind(prop, handlers[prop]);
                    });
                });
                if (!can.isEmptyObject(this.constructor.attributeScopeMappings) || hookupOptions.templateType !== 'legacy') {
                    can.bind.call(el, 'attributes', function (ev) {
                        var camelized = can.camelize(ev.attributeName);
                        if (!twoWayBindings[camelized] && !ignoreAttributesRegExp.test(camelized)) {
                            componentScope.attr(camelized, el.getAttribute(ev.attributeName));
                        }
                    });
                }
                this.scope = componentScope;
                can.data(can.$(el), 'scope', this.scope);
                var renderedScope = lexicalContent ? new can.view.Scope({ self: this.scope }).add(this.scope) : hookupOptions.scope.add({ self: this.scope }).add(this.scope), options = { helpers: {} };
                can.each(this.helpers || {}, function (val, prop) {
                    if (can.isFunction(val)) {
                        options.helpers[prop] = function () {
                            return val.apply(componentScope, arguments);
                        };
                    }
                });
                this._control = new this.constructor.Control(el, { scope: this.scope });
                if (this.constructor.renderer) {
                    if (!options.tags) {
                        options.tags = {};
                    }
                    options.tags.content = function contentHookup(el, rendererOptions) {
                        var subtemplate = hookupOptions.subtemplate || rendererOptions.subtemplate;
                        if (subtemplate) {
                            delete options.tags.content;
                            var opts = !lexicalContent || subtemplate !== hookupOptions.subtemplate ? rendererOptions : hookupOptions;
                            can.view.live.replace([el], subtemplate(opts.scope, opts.options));
                            options.tags.content = contentHookup;
                        }
                    };
                    frag = this.constructor.renderer(renderedScope, hookupOptions.options.add(options));
                } else {
                    if (hookupOptions.templateType === 'legacy') {
                        frag = can.view.frag(hookupOptions.subtemplate ? hookupOptions.subtemplate(renderedScope, hookupOptions.options.add(options)) : '');
                    } else {
                        frag = hookupOptions.subtemplate ? hookupOptions.subtemplate(renderedScope, hookupOptions.options.add(options)) : document.createDocumentFragment();
                    }
                }
                can.appendChild(el, frag);
            }
        });
    var ComponentControl = can.Control.extend({
            _lookup: function (options) {
                return [
                    options.scope,
                    options,
                    window
                ];
            },
            _action: function (methodName, options, controlInstance) {
                var hasObjectLookup, readyCompute;
                paramReplacer.lastIndex = 0;
                hasObjectLookup = paramReplacer.test(methodName);
                if (!controlInstance && hasObjectLookup) {
                    return;
                } else if (!hasObjectLookup) {
                    return can.Control._action.apply(this, arguments);
                } else {
                    readyCompute = can.compute(function () {
                        var delegate;
                        var name = methodName.replace(paramReplacer, function (matched, key) {
                                var value;
                                if (key === 'scope') {
                                    delegate = options.scope;
                                    return '';
                                }
                                key = key.replace(/^scope\./, '');
                                value = can.compute.read(options.scope, key.split('.'), { isArgument: true }).value;
                                if (value === undefined) {
                                    value = can.getObject(key);
                                }
                                if (typeof value === 'string') {
                                    return value;
                                } else {
                                    delegate = value;
                                    return '';
                                }
                            });
                        var parts = name.split(/\s+/g), event = parts.pop();
                        return {
                            processor: this.processors[event] || this.processors.click,
                            parts: [
                                name,
                                parts.join(' '),
                                event
                            ],
                            delegate: delegate || undefined
                        };
                    }, this);
                    var handler = function (ev, ready) {
                        controlInstance._bindings.control[methodName](controlInstance.element);
                        controlInstance._bindings.control[methodName] = ready.processor(ready.delegate || controlInstance.element, ready.parts[2], ready.parts[1], methodName, controlInstance);
                    };
                    readyCompute.bind('change', handler);
                    controlInstance._bindings.readyComputes[methodName] = {
                        compute: readyCompute,
                        handler: handler
                    };
                    return readyCompute();
                }
            }
        }, {
            setup: function (el, options) {
                this.scope = options.scope;
                return can.Control.prototype.setup.call(this, el, options);
            },
            off: function () {
                if (this._bindings) {
                    can.each(this._bindings.readyComputes || {}, function (value) {
                        value.compute.unbind('change', value.handler);
                    });
                }
                can.Control.prototype.off.apply(this, arguments);
                this._bindings.readyComputes = {};
            }
        });
    if (window.jQuery && jQuery.fn) {
        jQuery.fn.scope = function (attr) {
            if (attr) {
                return this.data('scope').attr(attr);
            } else {
                return this.data('scope');
            }
        };
    }
    can.scope = function (el, attr) {
        el = can.$(el);
        if (attr) {
            return can.data(el, 'scope').attr(attr);
        } else {
            return can.data(el, 'scope');
        }
    };
    return Component;
});
/*can*/
define('can', [
    'can/util/util',
    'can/control/route/route',
    'can/model/model',
    'can/view/mustache/mustache',
    'can/component/component'
], function (can) {
    return can;
});
/*mocha*/
System.define('mocha',';(function(){\n\n// CommonJS require()\n\nfunction require(p){\n    var path = require.resolve(p)\n      , mod = require.modules[path];\n    if (!mod) throw new Error(\'failed to require \"\' + p + \'\"\');\n    if (!mod.exports) {\n      mod.exports = {};\n      mod.call(mod.exports, mod, mod.exports, require.relative(path));\n    }\n    return mod.exports;\n  }\n\nrequire.modules = {};\n\nrequire.resolve = function (path){\n    var orig = path\n      , reg = path + \'.js\'\n      , index = path + \'/index.js\';\n    return require.modules[reg] && reg\n      || require.modules[index] && index\n      || orig;\n  };\n\nrequire.register = function (path, fn){\n    require.modules[path] = fn;\n  };\n\nrequire.relative = function (parent) {\n    return function(p){\n      if (\'.\' != p.charAt(0)) return require(p);\n\n      var path = parent.split(\'/\')\n        , segs = p.split(\'/\');\n      path.pop();\n\n      for (var i = 0; i < segs.length; i++) {\n        var seg = segs[i];\n        if (\'..\' == seg) path.pop();\n        else if (\'.\' != seg) path.push(seg);\n      }\n\n      return require(path.join(\'/\'));\n    };\n  };\n\n\nrequire.register(\"browser/debug.js\", function(module, exports, require){\nmodule.exports = function(type){\n  return function(){\n  }\n};\n\n}); // module: browser/debug.js\n\nrequire.register(\"browser/diff.js\", function(module, exports, require){\n/* See LICENSE file for terms of use */\n\n/*\n * Text diff implementation.\n *\n * This library supports the following APIS:\n * JsDiff.diffChars: Character by character diff\n * JsDiff.diffWords: Word (as defined by \\b regex) diff which ignores whitespace\n * JsDiff.diffLines: Line based diff\n *\n * JsDiff.diffCss: Diff targeted at CSS content\n *\n * These methods are based on the implementation proposed in\n * \"An O(ND) Difference Algorithm and its Variations\" (Myers, 1986).\n * http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.4.6927\n */\nvar JsDiff = (function() {\n  /*jshint maxparams: 5*/\n  function clonePath(path) {\n    return { newPos: path.newPos, components: path.components.slice(0) };\n  }\n  function removeEmpty(array) {\n    var ret = [];\n    for (var i = 0; i < array.length; i++) {\n      if (array[i]) {\n        ret.push(array[i]);\n      }\n    }\n    return ret;\n  }\n  function escapeHTML(s) {\n    var n = s;\n    n = n.replace(/&/g, \'&amp;\');\n    n = n.replace(/</g, \'&lt;\');\n    n = n.replace(/>/g, \'&gt;\');\n    n = n.replace(/\"/g, \'&quot;\');\n\n    return n;\n  }\n\n  var Diff = function(ignoreWhitespace) {\n    this.ignoreWhitespace = ignoreWhitespace;\n  };\n  Diff.prototype = {\n      diff: function(oldString, newString) {\n        // Handle the identity case (this is due to unrolling editLength == 0\n        if (newString === oldString) {\n          return [{ value: newString }];\n        }\n        if (!newString) {\n          return [{ value: oldString, removed: true }];\n        }\n        if (!oldString) {\n          return [{ value: newString, added: true }];\n        }\n\n        newString = this.tokenize(newString);\n        oldString = this.tokenize(oldString);\n\n        var newLen = newString.length, oldLen = oldString.length;\n        var maxEditLength = newLen + oldLen;\n        var bestPath = [{ newPos: -1, components: [] }];\n\n        // Seed editLength = 0\n        var oldPos = this.extractCommon(bestPath[0], newString, oldString, 0);\n        if (bestPath[0].newPos+1 >= newLen && oldPos+1 >= oldLen) {\n          return bestPath[0].components;\n        }\n\n        for (var editLength = 1; editLength <= maxEditLength; editLength++) {\n          for (var diagonalPath = -1*editLength; diagonalPath <= editLength; diagonalPath+=2) {\n            var basePath;\n            var addPath = bestPath[diagonalPath-1],\n                removePath = bestPath[diagonalPath+1];\n            oldPos = (removePath ? removePath.newPos : 0) - diagonalPath;\n            if (addPath) {\n              // No one else is going to attempt to use this value, clear it\n              bestPath[diagonalPath-1] = undefined;\n            }\n\n            var canAdd = addPath && addPath.newPos+1 < newLen;\n            var canRemove = removePath && 0 <= oldPos && oldPos < oldLen;\n            if (!canAdd && !canRemove) {\n              bestPath[diagonalPath] = undefined;\n              continue;\n            }\n\n            // Select the diagonal that we want to branch from. We select the prior\n            // path whose position in the new string is the farthest from the origin\n            // and does not pass the bounds of the diff graph\n            if (!canAdd || (canRemove && addPath.newPos < removePath.newPos)) {\n              basePath = clonePath(removePath);\n              this.pushComponent(basePath.components, oldString[oldPos], undefined, true);\n            } else {\n              basePath = clonePath(addPath);\n              basePath.newPos++;\n              this.pushComponent(basePath.components, newString[basePath.newPos], true, undefined);\n            }\n\n            var oldPos = this.extractCommon(basePath, newString, oldString, diagonalPath);\n\n            if (basePath.newPos+1 >= newLen && oldPos+1 >= oldLen) {\n              return basePath.components;\n            } else {\n              bestPath[diagonalPath] = basePath;\n            }\n          }\n        }\n      },\n\n      pushComponent: function(components, value, added, removed) {\n        var last = components[components.length-1];\n        if (last && last.added === added && last.removed === removed) {\n          // We need to clone here as the component clone operation is just\n          // as shallow array clone\n          components[components.length-1] =\n            {value: this.join(last.value, value), added: added, removed: removed };\n        } else {\n          components.push({value: value, added: added, removed: removed });\n        }\n      },\n      extractCommon: function(basePath, newString, oldString, diagonalPath) {\n        var newLen = newString.length,\n            oldLen = oldString.length,\n            newPos = basePath.newPos,\n            oldPos = newPos - diagonalPath;\n        while (newPos+1 < newLen && oldPos+1 < oldLen && this.equals(newString[newPos+1], oldString[oldPos+1])) {\n          newPos++;\n          oldPos++;\n\n          this.pushComponent(basePath.components, newString[newPos], undefined, undefined);\n        }\n        basePath.newPos = newPos;\n        return oldPos;\n      },\n\n      equals: function(left, right) {\n        var reWhitespace = /\\S/;\n        if (this.ignoreWhitespace && !reWhitespace.test(left) && !reWhitespace.test(right)) {\n          return true;\n        } else {\n          return left === right;\n        }\n      },\n      join: function(left, right) {\n        return left + right;\n      },\n      tokenize: function(value) {\n        return value;\n      }\n  };\n\n  var CharDiff = new Diff();\n\n  var WordDiff = new Diff(true);\n  var WordWithSpaceDiff = new Diff();\n  WordDiff.tokenize = WordWithSpaceDiff.tokenize = function(value) {\n    return removeEmpty(value.split(/(\\s+|\\b)/));\n  };\n\n  var CssDiff = new Diff(true);\n  CssDiff.tokenize = function(value) {\n    return removeEmpty(value.split(/([{}:;,]|\\s+)/));\n  };\n\n  var LineDiff = new Diff();\n  LineDiff.tokenize = function(value) {\n    return value.split(/^/m);\n  };\n\n  return {\n    Diff: Diff,\n\n    diffChars: function(oldStr, newStr) { return CharDiff.diff(oldStr, newStr); },\n    diffWords: function(oldStr, newStr) { return WordDiff.diff(oldStr, newStr); },\n    diffWordsWithSpace: function(oldStr, newStr) { return WordWithSpaceDiff.diff(oldStr, newStr); },\n    diffLines: function(oldStr, newStr) { return LineDiff.diff(oldStr, newStr); },\n\n    diffCss: function(oldStr, newStr) { return CssDiff.diff(oldStr, newStr); },\n\n    createPatch: function(fileName, oldStr, newStr, oldHeader, newHeader) {\n      var ret = [];\n\n      ret.push(\'Index: \' + fileName);\n      ret.push(\'===================================================================\');\n      ret.push(\'--- \' + fileName + (typeof oldHeader === \'undefined\' ? \'\' : \'\\t\' + oldHeader));\n      ret.push(\'+++ \' + fileName + (typeof newHeader === \'undefined\' ? \'\' : \'\\t\' + newHeader));\n\n      var diff = LineDiff.diff(oldStr, newStr);\n      if (!diff[diff.length-1].value) {\n        diff.pop();   // Remove trailing newline add\n      }\n      diff.push({value: \'\', lines: []});   // Append an empty value to make cleanup easier\n\n      function contextLines(lines) {\n        return lines.map(function(entry) { return \' \' + entry; });\n      }\n      function eofNL(curRange, i, current) {\n        var last = diff[diff.length-2],\n            isLast = i === diff.length-2,\n            isLastOfType = i === diff.length-3 && (current.added !== last.added || current.removed !== last.removed);\n\n        // Figure out if this is the last line for the given file and missing NL\n        if (!/\\n$/.test(current.value) && (isLast || isLastOfType)) {\n          curRange.push(\'\\\\ No newline at end of file\');\n        }\n      }\n\n      var oldRangeStart = 0, newRangeStart = 0, curRange = [],\n          oldLine = 1, newLine = 1;\n      for (var i = 0; i < diff.length; i++) {\n        var current = diff[i],\n            lines = current.lines || current.value.replace(/\\n$/, \'\').split(\'\\n\');\n        current.lines = lines;\n\n        if (current.added || current.removed) {\n          if (!oldRangeStart) {\n            var prev = diff[i-1];\n            oldRangeStart = oldLine;\n            newRangeStart = newLine;\n\n            if (prev) {\n              curRange = contextLines(prev.lines.slice(-4));\n              oldRangeStart -= curRange.length;\n              newRangeStart -= curRange.length;\n            }\n          }\n          curRange.push.apply(curRange, lines.map(function(entry) { return (current.added?\'+\':\'-\') + entry; }));\n          eofNL(curRange, i, current);\n\n          if (current.added) {\n            newLine += lines.length;\n          } else {\n            oldLine += lines.length;\n          }\n        } else {\n          if (oldRangeStart) {\n            // Close out any changes that have been output (or join overlapping)\n            if (lines.length <= 8 && i < diff.length-2) {\n              // Overlapping\n              curRange.push.apply(curRange, contextLines(lines));\n            } else {\n              // end the range and output\n              var contextSize = Math.min(lines.length, 4);\n              ret.push(\n                  \'@@ -\' + oldRangeStart + \',\' + (oldLine-oldRangeStart+contextSize)\n                  + \' +\' + newRangeStart + \',\' + (newLine-newRangeStart+contextSize)\n                  + \' @@\');\n              ret.push.apply(ret, curRange);\n              ret.push.apply(ret, contextLines(lines.slice(0, contextSize)));\n              if (lines.length <= 4) {\n                eofNL(ret, i, current);\n              }\n\n              oldRangeStart = 0;  newRangeStart = 0; curRange = [];\n            }\n          }\n          oldLine += lines.length;\n          newLine += lines.length;\n        }\n      }\n\n      return ret.join(\'\\n\') + \'\\n\';\n    },\n\n    applyPatch: function(oldStr, uniDiff) {\n      var diffstr = uniDiff.split(\'\\n\');\n      var diff = [];\n      var remEOFNL = false,\n          addEOFNL = false;\n\n      for (var i = (diffstr[0][0]===\'I\'?4:0); i < diffstr.length; i++) {\n        if(diffstr[i][0] === \'@\') {\n          var meh = diffstr[i].split(/@@ -(\\d+),(\\d+) \\+(\\d+),(\\d+) @@/);\n          diff.unshift({\n            start:meh[3],\n            oldlength:meh[2],\n            oldlines:[],\n            newlength:meh[4],\n            newlines:[]\n          });\n        } else if(diffstr[i][0] === \'+\') {\n          diff[0].newlines.push(diffstr[i].substr(1));\n        } else if(diffstr[i][0] === \'-\') {\n          diff[0].oldlines.push(diffstr[i].substr(1));\n        } else if(diffstr[i][0] === \' \') {\n          diff[0].newlines.push(diffstr[i].substr(1));\n          diff[0].oldlines.push(diffstr[i].substr(1));\n        } else if(diffstr[i][0] === \'\\\\\') {\n          if (diffstr[i-1][0] === \'+\') {\n            remEOFNL = true;\n          } else if(diffstr[i-1][0] === \'-\') {\n            addEOFNL = true;\n          }\n        }\n      }\n\n      var str = oldStr.split(\'\\n\');\n      for (var i = diff.length - 1; i >= 0; i--) {\n        var d = diff[i];\n        for (var j = 0; j < d.oldlength; j++) {\n          if(str[d.start-1+j] !== d.oldlines[j]) {\n            return false;\n          }\n        }\n        Array.prototype.splice.apply(str,[d.start-1,+d.oldlength].concat(d.newlines));\n      }\n\n      if (remEOFNL) {\n        while (!str[str.length-1]) {\n          str.pop();\n        }\n      } else if (addEOFNL) {\n        str.push(\'\');\n      }\n      return str.join(\'\\n\');\n    },\n\n    convertChangesToXML: function(changes){\n      var ret = [];\n      for ( var i = 0; i < changes.length; i++) {\n        var change = changes[i];\n        if (change.added) {\n          ret.push(\'<ins>\');\n        } else if (change.removed) {\n          ret.push(\'<del>\');\n        }\n\n        ret.push(escapeHTML(change.value));\n\n        if (change.added) {\n          ret.push(\'</ins>\');\n        } else if (change.removed) {\n          ret.push(\'</del>\');\n        }\n      }\n      return ret.join(\'\');\n    },\n\n    // See: http://code.google.com/p/google-diff-match-patch/wiki/API\n    convertChangesToDMP: function(changes){\n      var ret = [], change;\n      for ( var i = 0; i < changes.length; i++) {\n        change = changes[i];\n        ret.push([(change.added ? 1 : change.removed ? -1 : 0), change.value]);\n      }\n      return ret;\n    }\n  };\n})();\n\nif (typeof module !== \'undefined\') {\n    module.exports = JsDiff;\n}\n\n}); // module: browser/diff.js\n\nrequire.register(\"browser/escape-string-regexp.js\", function(module, exports, require){\n\'use strict\';\n\nvar matchOperatorsRe = /[|\\\\{}()[\\]^$+*?.]/g;\n\nmodule.exports = function (str) {\n  if (typeof str !== \'string\') {\n    throw new TypeError(\'Expected a string\');\n  }\n\n  return str.replace(matchOperatorsRe,  \'\\\\$&\');\n};\n\n}); // module: browser/escape-string-regexp.js\n\nrequire.register(\"browser/events.js\", function(module, exports, require){\n/**\n * Module exports.\n */\n\nexports.EventEmitter = EventEmitter;\n\n/**\n * Check if `obj` is an array.\n */\n\nfunction isArray(obj) {\n  return \'[object Array]\' == {}.toString.call(obj);\n}\n\n/**\n * Event emitter constructor.\n *\n * @api public\n */\n\nfunction EventEmitter(){};\n\n/**\n * Adds a listener.\n *\n * @api public\n */\n\nEventEmitter.prototype.on = function (name, fn) {\n  if (!this.$events) {\n    this.$events = {};\n  }\n\n  if (!this.$events[name]) {\n    this.$events[name] = fn;\n  } else if (isArray(this.$events[name])) {\n    this.$events[name].push(fn);\n  } else {\n    this.$events[name] = [this.$events[name], fn];\n  }\n\n  return this;\n};\n\nEventEmitter.prototype.addListener = EventEmitter.prototype.on;\n\n/**\n * Adds a volatile listener.\n *\n * @api public\n */\n\nEventEmitter.prototype.once = function (name, fn) {\n  var self = this;\n\n  function on () {\n    self.removeListener(name, on);\n    fn.apply(this, arguments);\n  };\n\n  on.listener = fn;\n  this.on(name, on);\n\n  return this;\n};\n\n/**\n * Removes a listener.\n *\n * @api public\n */\n\nEventEmitter.prototype.removeListener = function (name, fn) {\n  if (this.$events && this.$events[name]) {\n    var list = this.$events[name];\n\n    if (isArray(list)) {\n      var pos = -1;\n\n      for (var i = 0, l = list.length; i < l; i++) {\n        if (list[i] === fn || (list[i].listener && list[i].listener === fn)) {\n          pos = i;\n          break;\n        }\n      }\n\n      if (pos < 0) {\n        return this;\n      }\n\n      list.splice(pos, 1);\n\n      if (!list.length) {\n        delete this.$events[name];\n      }\n    } else if (list === fn || (list.listener && list.listener === fn)) {\n      delete this.$events[name];\n    }\n  }\n\n  return this;\n};\n\n/**\n * Removes all listeners for an event.\n *\n * @api public\n */\n\nEventEmitter.prototype.removeAllListeners = function (name) {\n  if (name === undefined) {\n    this.$events = {};\n    return this;\n  }\n\n  if (this.$events && this.$events[name]) {\n    this.$events[name] = null;\n  }\n\n  return this;\n};\n\n/**\n * Gets all listeners for a certain event.\n *\n * @api public\n */\n\nEventEmitter.prototype.listeners = function (name) {\n  if (!this.$events) {\n    this.$events = {};\n  }\n\n  if (!this.$events[name]) {\n    this.$events[name] = [];\n  }\n\n  if (!isArray(this.$events[name])) {\n    this.$events[name] = [this.$events[name]];\n  }\n\n  return this.$events[name];\n};\n\n/**\n * Emits an event.\n *\n * @api public\n */\n\nEventEmitter.prototype.emit = function (name) {\n  if (!this.$events) {\n    return false;\n  }\n\n  var handler = this.$events[name];\n\n  if (!handler) {\n    return false;\n  }\n\n  var args = [].slice.call(arguments, 1);\n\n  if (\'function\' == typeof handler) {\n    handler.apply(this, args);\n  } else if (isArray(handler)) {\n    var listeners = handler.slice();\n\n    for (var i = 0, l = listeners.length; i < l; i++) {\n      listeners[i].apply(this, args);\n    }\n  } else {\n    return false;\n  }\n\n  return true;\n};\n\n}); // module: browser/events.js\n\nrequire.register(\"browser/fs.js\", function(module, exports, require){\n\n}); // module: browser/fs.js\n\nrequire.register(\"browser/glob.js\", function(module, exports, require){\n\n}); // module: browser/glob.js\n\nrequire.register(\"browser/path.js\", function(module, exports, require){\n\n}); // module: browser/path.js\n\nrequire.register(\"browser/progress.js\", function(module, exports, require){\n/**\n * Expose `Progress`.\n */\n\nmodule.exports = Progress;\n\n/**\n * Initialize a new `Progress` indicator.\n */\n\nfunction Progress() {\n  this.percent = 0;\n  this.size(0);\n  this.fontSize(11);\n  this.font(\'helvetica, arial, sans-serif\');\n}\n\n/**\n * Set progress size to `n`.\n *\n * @param {Number} n\n * @return {Progress} for chaining\n * @api public\n */\n\nProgress.prototype.size = function(n){\n  this._size = n;\n  return this;\n};\n\n/**\n * Set text to `str`.\n *\n * @param {String} str\n * @return {Progress} for chaining\n * @api public\n */\n\nProgress.prototype.text = function(str){\n  this._text = str;\n  return this;\n};\n\n/**\n * Set font size to `n`.\n *\n * @param {Number} n\n * @return {Progress} for chaining\n * @api public\n */\n\nProgress.prototype.fontSize = function(n){\n  this._fontSize = n;\n  return this;\n};\n\n/**\n * Set font `family`.\n *\n * @param {String} family\n * @return {Progress} for chaining\n */\n\nProgress.prototype.font = function(family){\n  this._font = family;\n  return this;\n};\n\n/**\n * Update percentage to `n`.\n *\n * @param {Number} n\n * @return {Progress} for chaining\n */\n\nProgress.prototype.update = function(n){\n  this.percent = n;\n  return this;\n};\n\n/**\n * Draw on `ctx`.\n *\n * @param {CanvasRenderingContext2d} ctx\n * @return {Progress} for chaining\n */\n\nProgress.prototype.draw = function(ctx){\n  try {\n    var percent = Math.min(this.percent, 100)\n      , size = this._size\n      , half = size / 2\n      , x = half\n      , y = half\n      , rad = half - 1\n      , fontSize = this._fontSize;\n\n    ctx.font = fontSize + \'px \' + this._font;\n\n    var angle = Math.PI * 2 * (percent / 100);\n    ctx.clearRect(0, 0, size, size);\n\n    // outer circle\n    ctx.strokeStyle = \'#9f9f9f\';\n    ctx.beginPath();\n    ctx.arc(x, y, rad, 0, angle, false);\n    ctx.stroke();\n\n    // inner circle\n    ctx.strokeStyle = \'#eee\';\n    ctx.beginPath();\n    ctx.arc(x, y, rad - 1, 0, angle, true);\n    ctx.stroke();\n\n    // text\n    var text = this._text || (percent | 0) + \'%\'\n      , w = ctx.measureText(text).width;\n\n    ctx.fillText(\n        text\n      , x - w / 2 + 1\n      , y + fontSize / 2 - 1);\n  } catch (ex) {} //don\'t fail if we can\'t render progress\n  return this;\n};\n\n}); // module: browser/progress.js\n\nrequire.register(\"browser/tty.js\", function(module, exports, require){\nexports.isatty = function(){\n  return true;\n};\n\nexports.getWindowSize = function(){\n  if (\'innerHeight\' in global) {\n    return [global.innerHeight, global.innerWidth];\n  } else {\n    // In a Web Worker, the DOM Window is not available.\n    return [640, 480];\n  }\n};\n\n}); // module: browser/tty.js\n\nrequire.register(\"context.js\", function(module, exports, require){\n/**\n * Expose `Context`.\n */\n\nmodule.exports = Context;\n\n/**\n * Initialize a new `Context`.\n *\n * @api private\n */\n\nfunction Context(){}\n\n/**\n * Set or get the context `Runnable` to `runnable`.\n *\n * @param {Runnable} runnable\n * @return {Context}\n * @api private\n */\n\nContext.prototype.runnable = function(runnable){\n  if (0 == arguments.length) return this._runnable;\n  this.test = this._runnable = runnable;\n  return this;\n};\n\n/**\n * Set test timeout `ms`.\n *\n * @param {Number} ms\n * @return {Context} self\n * @api private\n */\n\nContext.prototype.timeout = function(ms){\n  if (arguments.length === 0) return this.runnable().timeout();\n  this.runnable().timeout(ms);\n  return this;\n};\n\n/**\n * Set test timeout `enabled`.\n *\n * @param {Boolean} enabled\n * @return {Context} self\n * @api private\n */\n\nContext.prototype.enableTimeouts = function (enabled) {\n  this.runnable().enableTimeouts(enabled);\n  return this;\n};\n\n\n/**\n * Set test slowness threshold `ms`.\n *\n * @param {Number} ms\n * @return {Context} self\n * @api private\n */\n\nContext.prototype.slow = function(ms){\n  this.runnable().slow(ms);\n  return this;\n};\n\n/**\n * Inspect the context void of `._runnable`.\n *\n * @return {String}\n * @api private\n */\n\nContext.prototype.inspect = function(){\n  return JSON.stringify(this, function(key, val){\n    if (\'_runnable\' == key) return;\n    if (\'test\' == key) return;\n    return val;\n  }, 2);\n};\n\n}); // module: context.js\n\nrequire.register(\"hook.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar Runnable = require(\'./runnable\');\n\n/**\n * Expose `Hook`.\n */\n\nmodule.exports = Hook;\n\n/**\n * Initialize a new `Hook` with the given `title` and callback `fn`.\n *\n * @param {String} title\n * @param {Function} fn\n * @api private\n */\n\nfunction Hook(title, fn) {\n  Runnable.call(this, title, fn);\n  this.type = \'hook\';\n}\n\n/**\n * Inherit from `Runnable.prototype`.\n */\n\nfunction F(){};\nF.prototype = Runnable.prototype;\nHook.prototype = new F;\nHook.prototype.constructor = Hook;\n\n\n/**\n * Get or set the test `err`.\n *\n * @param {Error} err\n * @return {Error}\n * @api public\n */\n\nHook.prototype.error = function(err){\n  if (0 == arguments.length) {\n    var err = this._error;\n    this._error = null;\n    return err;\n  }\n\n  this._error = err;\n};\n\n}); // module: hook.js\n\nrequire.register(\"interfaces/bdd.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar Suite = require(\'../suite\')\n  , Test = require(\'../test\')\n  , utils = require(\'../utils\')\n  , escapeRe = require(\'browser/escape-string-regexp\');\n\n/**\n * BDD-style interface:\n *\n *      describe(\'Array\', function(){\n *        describe(\'#indexOf()\', function(){\n *          it(\'should return -1 when not present\', function(){\n *\n *          });\n *\n *          it(\'should return the index when present\', function(){\n *\n *          });\n *        });\n *      });\n *\n */\n\nmodule.exports = function(suite){\n  var suites = [suite];\n\n  suite.on(\'pre-require\', function(context, file, mocha){\n\n    /**\n     * Execute before running tests.\n     */\n\n    context.before = function(name, fn){\n      suites[0].beforeAll(name, fn);\n    };\n\n    /**\n     * Execute after running tests.\n     */\n\n    context.after = function(name, fn){\n      suites[0].afterAll(name, fn);\n    };\n\n    /**\n     * Execute before each test case.\n     */\n\n    context.beforeEach = function(name, fn){\n      suites[0].beforeEach(name, fn);\n    };\n\n    /**\n     * Execute after each test case.\n     */\n\n    context.afterEach = function(name, fn){\n      suites[0].afterEach(name, fn);\n    };\n\n    /**\n     * Describe a \"suite\" with the given `title`\n     * and callback `fn` containing nested suites\n     * and/or tests.\n     */\n\n    context.describe = context.context = function(title, fn){\n      var suite = Suite.create(suites[0], title);\n      suite.file = file;\n      suites.unshift(suite);\n      fn.call(suite);\n      suites.shift();\n      return suite;\n    };\n\n    /**\n     * Pending describe.\n     */\n\n    context.xdescribe =\n    context.xcontext =\n    context.describe.skip = function(title, fn){\n      var suite = Suite.create(suites[0], title);\n      suite.pending = true;\n      suites.unshift(suite);\n      fn.call(suite);\n      suites.shift();\n    };\n\n    /**\n     * Exclusive suite.\n     */\n\n    context.describe.only = function(title, fn){\n      var suite = context.describe(title, fn);\n      mocha.grep(suite.fullTitle());\n      return suite;\n    };\n\n    /**\n     * Describe a specification or test-case\n     * with the given `title` and callback `fn`\n     * acting as a thunk.\n     */\n\n    context.it = context.specify = function(title, fn){\n      var suite = suites[0];\n      if (suite.pending) fn = null;\n      var test = new Test(title, fn);\n      test.file = file;\n      suite.addTest(test);\n      return test;\n    };\n\n    /**\n     * Exclusive test-case.\n     */\n\n    context.it.only = function(title, fn){\n      var test = context.it(title, fn);\n      var reString = \'^\' + escapeRe(test.fullTitle()) + \'$\';\n      mocha.grep(new RegExp(reString));\n      return test;\n    };\n\n    /**\n     * Pending test case.\n     */\n\n    context.xit =\n    context.xspecify =\n    context.it.skip = function(title){\n      context.it(title);\n    };\n  });\n};\n\n}); // module: interfaces/bdd.js\n\nrequire.register(\"interfaces/exports.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar Suite = require(\'../suite\')\n  , Test = require(\'../test\');\n\n/**\n * TDD-style interface:\n *\n *     exports.Array = {\n *       \'#indexOf()\': {\n *         \'should return -1 when the value is not present\': function(){\n *\n *         },\n *\n *         \'should return the correct index when the value is present\': function(){\n *\n *         }\n *       }\n *     };\n *\n */\n\nmodule.exports = function(suite){\n  var suites = [suite];\n\n  suite.on(\'require\', visit);\n\n  function visit(obj, file) {\n    var suite;\n    for (var key in obj) {\n      if (\'function\' == typeof obj[key]) {\n        var fn = obj[key];\n        switch (key) {\n          case \'before\':\n            suites[0].beforeAll(fn);\n            break;\n          case \'after\':\n            suites[0].afterAll(fn);\n            break;\n          case \'beforeEach\':\n            suites[0].beforeEach(fn);\n            break;\n          case \'afterEach\':\n            suites[0].afterEach(fn);\n            break;\n          default:\n            var test = new Test(key, fn);\n            test.file = file;\n            suites[0].addTest(test);\n        }\n      } else {\n        suite = Suite.create(suites[0], key);\n        suites.unshift(suite);\n        visit(obj[key]);\n        suites.shift();\n      }\n    }\n  }\n};\n\n}); // module: interfaces/exports.js\n\nrequire.register(\"interfaces/index.js\", function(module, exports, require){\nexports.bdd = require(\'./bdd\');\nexports.tdd = require(\'./tdd\');\nexports.qunit = require(\'./qunit\');\nexports.exports = require(\'./exports\');\n\n}); // module: interfaces/index.js\n\nrequire.register(\"interfaces/qunit.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar Suite = require(\'../suite\')\n  , Test = require(\'../test\')\n  , escapeRe = require(\'browser/escape-string-regexp\')\n  , utils = require(\'../utils\');\n\n/**\n * QUnit-style interface:\n *\n *     suite(\'Array\');\n *\n *     test(\'#length\', function(){\n *       var arr = [1,2,3];\n *       ok(arr.length == 3);\n *     });\n *\n *     test(\'#indexOf()\', function(){\n *       var arr = [1,2,3];\n *       ok(arr.indexOf(1) == 0);\n *       ok(arr.indexOf(2) == 1);\n *       ok(arr.indexOf(3) == 2);\n *     });\n *\n *     suite(\'String\');\n *\n *     test(\'#length\', function(){\n *       ok(\'foo\'.length == 3);\n *     });\n *\n */\n\nmodule.exports = function(suite){\n  var suites = [suite];\n\n  suite.on(\'pre-require\', function(context, file, mocha){\n\n    /**\n     * Execute before running tests.\n     */\n\n    context.before = function(name, fn){\n      suites[0].beforeAll(name, fn);\n    };\n\n    /**\n     * Execute after running tests.\n     */\n\n    context.after = function(name, fn){\n      suites[0].afterAll(name, fn);\n    };\n\n    /**\n     * Execute before each test case.\n     */\n\n    context.beforeEach = function(name, fn){\n      suites[0].beforeEach(name, fn);\n    };\n\n    /**\n     * Execute after each test case.\n     */\n\n    context.afterEach = function(name, fn){\n      suites[0].afterEach(name, fn);\n    };\n\n    /**\n     * Describe a \"suite\" with the given `title`.\n     */\n\n    context.suite = function(title){\n      if (suites.length > 1) suites.shift();\n      var suite = Suite.create(suites[0], title);\n      suite.file = file;\n      suites.unshift(suite);\n      return suite;\n    };\n\n    /**\n     * Exclusive test-case.\n     */\n\n    context.suite.only = function(title, fn){\n      var suite = context.suite(title, fn);\n      mocha.grep(suite.fullTitle());\n    };\n\n    /**\n     * Describe a specification or test-case\n     * with the given `title` and callback `fn`\n     * acting as a thunk.\n     */\n\n    context.test = function(title, fn){\n      var test = new Test(title, fn);\n      test.file = file;\n      suites[0].addTest(test);\n      return test;\n    };\n\n    /**\n     * Exclusive test-case.\n     */\n\n    context.test.only = function(title, fn){\n      var test = context.test(title, fn);\n      var reString = \'^\' + escapeRe(test.fullTitle()) + \'$\';\n      mocha.grep(new RegExp(reString));\n    };\n\n    /**\n     * Pending test case.\n     */\n\n    context.test.skip = function(title){\n      context.test(title);\n    };\n  });\n};\n\n}); // module: interfaces/qunit.js\n\nrequire.register(\"interfaces/tdd.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar Suite = require(\'../suite\')\n  , Test = require(\'../test\')\n  , escapeRe = require(\'browser/escape-string-regexp\')\n  , utils = require(\'../utils\');\n\n/**\n * TDD-style interface:\n *\n *      suite(\'Array\', function(){\n *        suite(\'#indexOf()\', function(){\n *          suiteSetup(function(){\n *\n *          });\n *\n *          test(\'should return -1 when not present\', function(){\n *\n *          });\n *\n *          test(\'should return the index when present\', function(){\n *\n *          });\n *\n *          suiteTeardown(function(){\n *\n *          });\n *        });\n *      });\n *\n */\n\nmodule.exports = function(suite){\n  var suites = [suite];\n\n  suite.on(\'pre-require\', function(context, file, mocha){\n\n    /**\n     * Execute before each test case.\n     */\n\n    context.setup = function(name, fn){\n      suites[0].beforeEach(name, fn);\n    };\n\n    /**\n     * Execute after each test case.\n     */\n\n    context.teardown = function(name, fn){\n      suites[0].afterEach(name, fn);\n    };\n\n    /**\n     * Execute before the suite.\n     */\n\n    context.suiteSetup = function(name, fn){\n      suites[0].beforeAll(name, fn);\n    };\n\n    /**\n     * Execute after the suite.\n     */\n\n    context.suiteTeardown = function(name, fn){\n      suites[0].afterAll(name, fn);\n    };\n\n    /**\n     * Describe a \"suite\" with the given `title`\n     * and callback `fn` containing nested suites\n     * and/or tests.\n     */\n\n    context.suite = function(title, fn){\n      var suite = Suite.create(suites[0], title);\n      suite.file = file;\n      suites.unshift(suite);\n      fn.call(suite);\n      suites.shift();\n      return suite;\n    };\n\n    /**\n     * Pending suite.\n     */\n    context.suite.skip = function(title, fn) {\n      var suite = Suite.create(suites[0], title);\n      suite.pending = true;\n      suites.unshift(suite);\n      fn.call(suite);\n      suites.shift();\n    };\n\n    /**\n     * Exclusive test-case.\n     */\n\n    context.suite.only = function(title, fn){\n      var suite = context.suite(title, fn);\n      mocha.grep(suite.fullTitle());\n    };\n\n    /**\n     * Describe a specification or test-case\n     * with the given `title` and callback `fn`\n     * acting as a thunk.\n     */\n\n    context.test = function(title, fn){\n      var suite = suites[0];\n      if (suite.pending) fn = null;\n      var test = new Test(title, fn);\n      test.file = file;\n      suite.addTest(test);\n      return test;\n    };\n\n    /**\n     * Exclusive test-case.\n     */\n\n    context.test.only = function(title, fn){\n      var test = context.test(title, fn);\n      var reString = \'^\' + escapeRe(test.fullTitle()) + \'$\';\n      mocha.grep(new RegExp(reString));\n    };\n\n    /**\n     * Pending test case.\n     */\n\n    context.test.skip = function(title){\n      context.test(title);\n    };\n  });\n};\n\n}); // module: interfaces/tdd.js\n\nrequire.register(\"mocha.js\", function(module, exports, require){\n/*!\n * mocha\n * Copyright(c) 2011 TJ Holowaychuk <tj@vision-media.ca>\n * MIT Licensed\n */\n\n/**\n * Module dependencies.\n */\n\nvar path = require(\'browser/path\')\n  , escapeRe = require(\'browser/escape-string-regexp\')\n  , utils = require(\'./utils\');\n\n/**\n * Expose `Mocha`.\n */\n\nexports = module.exports = Mocha;\n\n/**\n * To require local UIs and reporters when running in node.\n */\n\nif (typeof process !== \'undefined\' && typeof process.cwd === \'function\') {\n  var join = path.join\n    , cwd = process.cwd();\n  module.paths.push(cwd, join(cwd, \'node_modules\'));\n}\n\n/**\n * Expose internals.\n */\n\nexports.utils = utils;\nexports.interfaces = require(\'./interfaces\');\nexports.reporters = require(\'./reporters\');\nexports.Runnable = require(\'./runnable\');\nexports.Context = require(\'./context\');\nexports.Runner = require(\'./runner\');\nexports.Suite = require(\'./suite\');\nexports.Hook = require(\'./hook\');\nexports.Test = require(\'./test\');\n\n/**\n * Return image `name` path.\n *\n * @param {String} name\n * @return {String}\n * @api private\n */\n\nfunction image(name) {\n  return __dirname + \'/../images/\' + name + \'.png\';\n}\n\n/**\n * Setup mocha with `options`.\n *\n * Options:\n *\n *   - `ui` name \"bdd\", \"tdd\", \"exports\" etc\n *   - `reporter` reporter instance, defaults to `mocha.reporters.spec`\n *   - `globals` array of accepted globals\n *   - `timeout` timeout in milliseconds\n *   - `bail` bail on the first test failure\n *   - `slow` milliseconds to wait before considering a test slow\n *   - `ignoreLeaks` ignore global leaks\n *   - `grep` string or regexp to filter tests with\n *\n * @param {Object} options\n * @api public\n */\n\nfunction Mocha(options) {\n  options = options || {};\n  this.files = [];\n  this.options = options;\n  this.grep(options.grep);\n  this.suite = new exports.Suite(\'\', new exports.Context);\n  this.ui(options.ui);\n  this.bail(options.bail);\n  this.reporter(options.reporter);\n  if (null != options.timeout) this.timeout(options.timeout);\n  this.useColors(options.useColors)\n  if (options.enableTimeouts !== null) this.enableTimeouts(options.enableTimeouts);\n  if (options.slow) this.slow(options.slow);\n\n  this.suite.on(\'pre-require\', function (context) {\n    exports.afterEach = context.afterEach || context.teardown;\n    exports.after = context.after || context.suiteTeardown;\n    exports.beforeEach = context.beforeEach || context.setup;\n    exports.before = context.before || context.suiteSetup;\n    exports.describe = context.describe || context.suite;\n    exports.it = context.it || context.test;\n    exports.setup = context.setup || context.beforeEach;\n    exports.suiteSetup = context.suiteSetup || context.before;\n    exports.suiteTeardown = context.suiteTeardown || context.after;\n    exports.suite = context.suite || context.describe;\n    exports.teardown = context.teardown || context.afterEach;\n    exports.test = context.test || context.it;\n  });\n}\n\n/**\n * Enable or disable bailing on the first failure.\n *\n * @param {Boolean} [bail]\n * @api public\n */\n\nMocha.prototype.bail = function(bail){\n  if (0 == arguments.length) bail = true;\n  this.suite.bail(bail);\n  return this;\n};\n\n/**\n * Add test `file`.\n *\n * @param {String} file\n * @api public\n */\n\nMocha.prototype.addFile = function(file){\n  this.files.push(file);\n  return this;\n};\n\n/**\n * Set reporter to `reporter`, defaults to \"spec\".\n *\n * @param {String|Function} reporter name or constructor\n * @api public\n */\n\nMocha.prototype.reporter = function(reporter){\n  if (\'function\' == typeof reporter) {\n    this._reporter = reporter;\n  } else {\n    reporter = reporter || \'spec\';\n    var _reporter;\n    try { _reporter = require(\'./reporters/\' + reporter); } catch (err) {};\n    if (!_reporter) try { _reporter = require(reporter); } catch (err) {};\n    if (!_reporter && reporter === \'teamcity\')\n      console.warn(\'The Teamcity reporter was moved to a package named \' +\n        \'mocha-teamcity-reporter \' +\n        \'(https://npmjs.org/package/mocha-teamcity-reporter).\');\n    if (!_reporter) throw new Error(\'invalid reporter \"\' + reporter + \'\"\');\n    this._reporter = _reporter;\n  }\n  return this;\n};\n\n/**\n * Set test UI `name`, defaults to \"bdd\".\n *\n * @param {String} bdd\n * @api public\n */\n\nMocha.prototype.ui = function(name){\n  name = name || \'bdd\';\n  this._ui = exports.interfaces[name];\n  if (!this._ui) try { this._ui = require(name); } catch (err) {};\n  if (!this._ui) throw new Error(\'invalid interface \"\' + name + \'\"\');\n  this._ui = this._ui(this.suite);\n  return this;\n};\n\n/**\n * Load registered files.\n *\n * @api private\n */\n\nMocha.prototype.loadFiles = function(fn){\n  var self = this;\n  var suite = this.suite;\n  var pending = this.files.length;\n  this.files.forEach(function(file){\n    file = path.resolve(file);\n    suite.emit(\'pre-require\', global, file, self);\n    suite.emit(\'require\', require(file), file, self);\n    suite.emit(\'post-require\', global, file, self);\n    --pending || (fn && fn());\n  });\n};\n\n/**\n * Enable growl support.\n *\n * @api private\n */\n\nMocha.prototype._growl = function(runner, reporter) {\n  var notify = require(\'growl\');\n\n  runner.on(\'end\', function(){\n    var stats = reporter.stats;\n    if (stats.failures) {\n      var msg = stats.failures + \' of \' + runner.total + \' tests failed\';\n      notify(msg, { name: \'mocha\', title: \'Failed\', image: image(\'error\') });\n    } else {\n      notify(stats.passes + \' tests passed in \' + stats.duration + \'ms\', {\n          name: \'mocha\'\n        , title: \'Passed\'\n        , image: image(\'ok\')\n      });\n    }\n  });\n};\n\n/**\n * Add regexp to grep, if `re` is a string it is escaped.\n *\n * @param {RegExp|String} re\n * @return {Mocha}\n * @api public\n */\n\nMocha.prototype.grep = function(re){\n  this.options.grep = \'string\' == typeof re\n    ? new RegExp(escapeRe(re))\n    : re;\n  return this;\n};\n\n/**\n * Invert `.grep()` matches.\n *\n * @return {Mocha}\n * @api public\n */\n\nMocha.prototype.invert = function(){\n  this.options.invert = true;\n  return this;\n};\n\n/**\n * Ignore global leaks.\n *\n * @param {Boolean} ignore\n * @return {Mocha}\n * @api public\n */\n\nMocha.prototype.ignoreLeaks = function(ignore){\n  this.options.ignoreLeaks = !!ignore;\n  return this;\n};\n\n/**\n * Enable global leak checking.\n *\n * @return {Mocha}\n * @api public\n */\n\nMocha.prototype.checkLeaks = function(){\n  this.options.ignoreLeaks = false;\n  return this;\n};\n\n/**\n * Enable growl support.\n *\n * @return {Mocha}\n * @api public\n */\n\nMocha.prototype.growl = function(){\n  this.options.growl = true;\n  return this;\n};\n\n/**\n * Ignore `globals` array or string.\n *\n * @param {Array|String} globals\n * @return {Mocha}\n * @api public\n */\n\nMocha.prototype.globals = function(globals){\n  this.options.globals = (this.options.globals || []).concat(globals);\n  return this;\n};\n\n/**\n * Emit color output.\n *\n * @param {Boolean} colors\n * @return {Mocha}\n * @api public\n */\n\nMocha.prototype.useColors = function(colors){\n  this.options.useColors = arguments.length && colors != undefined\n    ? colors\n    : true;\n  return this;\n};\n\n/**\n * Use inline diffs rather than +/-.\n *\n * @param {Boolean} inlineDiffs\n * @return {Mocha}\n * @api public\n */\n\nMocha.prototype.useInlineDiffs = function(inlineDiffs) {\n  this.options.useInlineDiffs = arguments.length && inlineDiffs != undefined\n  ? inlineDiffs\n  : false;\n  return this;\n};\n\n/**\n * Set the timeout in milliseconds.\n *\n * @param {Number} timeout\n * @return {Mocha}\n * @api public\n */\n\nMocha.prototype.timeout = function(timeout){\n  this.suite.timeout(timeout);\n  return this;\n};\n\n/**\n * Set slowness threshold in milliseconds.\n *\n * @param {Number} slow\n * @return {Mocha}\n * @api public\n */\n\nMocha.prototype.slow = function(slow){\n  this.suite.slow(slow);\n  return this;\n};\n\n/**\n * Enable timeouts.\n *\n * @param {Boolean} enabled\n * @return {Mocha}\n * @api public\n */\n\nMocha.prototype.enableTimeouts = function(enabled) {\n  this.suite.enableTimeouts(arguments.length && enabled !== undefined\n    ? enabled\n    : true);\n  return this\n};\n\n/**\n * Makes all tests async (accepting a callback)\n *\n * @return {Mocha}\n * @api public\n */\n\nMocha.prototype.asyncOnly = function(){\n  this.options.asyncOnly = true;\n  return this;\n};\n\n/**\n * Disable syntax highlighting (in browser).\n * @returns {Mocha}\n * @api public\n */\nMocha.prototype.noHighlighting = function() {\n  this.options.noHighlighting = true;\n  return this;\n};\n\n/**\n * Run tests and invoke `fn()` when complete.\n *\n * @param {Function} fn\n * @return {Runner}\n * @api public\n */\n\nMocha.prototype.run = function(fn){\n  if (this.files.length) this.loadFiles();\n  var suite = this.suite;\n  var options = this.options;\n  options.files = this.files;\n  var runner = new exports.Runner(suite);\n  var reporter = new this._reporter(runner, options);\n  runner.ignoreLeaks = false !== options.ignoreLeaks;\n  runner.asyncOnly = options.asyncOnly;\n  if (options.grep) runner.grep(options.grep, options.invert);\n  if (options.globals) runner.globals(options.globals);\n  if (options.growl) this._growl(runner, reporter);\n  exports.reporters.Base.useColors = options.useColors;\n  exports.reporters.Base.inlineDiffs = options.useInlineDiffs;\n  return runner.run(fn);\n};\n\n}); // module: mocha.js\n\nrequire.register(\"ms.js\", function(module, exports, require){\n/**\n * Helpers.\n */\n\nvar s = 1000;\nvar m = s * 60;\nvar h = m * 60;\nvar d = h * 24;\nvar y = d * 365.25;\n\n/**\n * Parse or format the given `val`.\n *\n * Options:\n *\n *  - `long` verbose formatting [false]\n *\n * @param {String|Number} val\n * @param {Object} options\n * @return {String|Number}\n * @api public\n */\n\nmodule.exports = function(val, options){\n  options = options || {};\n  if (\'string\' == typeof val) return parse(val);\n  return options[\'long\'] ? longFormat(val) : shortFormat(val);\n};\n\n/**\n * Parse the given `str` and return milliseconds.\n *\n * @param {String} str\n * @return {Number}\n * @api private\n */\n\nfunction parse(str) {\n  var match = /^((?:\\d+)?\\.?\\d+) *(ms|seconds?|s|minutes?|m|hours?|h|days?|d|years?|y)?$/i.exec(str);\n  if (!match) return;\n  var n = parseFloat(match[1]);\n  var type = (match[2] || \'ms\').toLowerCase();\n  switch (type) {\n    case \'years\':\n    case \'year\':\n    case \'y\':\n      return n * y;\n    case \'days\':\n    case \'day\':\n    case \'d\':\n      return n * d;\n    case \'hours\':\n    case \'hour\':\n    case \'h\':\n      return n * h;\n    case \'minutes\':\n    case \'minute\':\n    case \'m\':\n      return n * m;\n    case \'seconds\':\n    case \'second\':\n    case \'s\':\n      return n * s;\n    case \'ms\':\n      return n;\n  }\n}\n\n/**\n * Short format for `ms`.\n *\n * @param {Number} ms\n * @return {String}\n * @api private\n */\n\nfunction shortFormat(ms) {\n  if (ms >= d) return Math.round(ms / d) + \'d\';\n  if (ms >= h) return Math.round(ms / h) + \'h\';\n  if (ms >= m) return Math.round(ms / m) + \'m\';\n  if (ms >= s) return Math.round(ms / s) + \'s\';\n  return ms + \'ms\';\n}\n\n/**\n * Long format for `ms`.\n *\n * @param {Number} ms\n * @return {String}\n * @api private\n */\n\nfunction longFormat(ms) {\n  return plural(ms, d, \'day\')\n    || plural(ms, h, \'hour\')\n    || plural(ms, m, \'minute\')\n    || plural(ms, s, \'second\')\n    || ms + \' ms\';\n}\n\n/**\n * Pluralization helper.\n */\n\nfunction plural(ms, n, name) {\n  if (ms < n) return;\n  if (ms < n * 1.5) return Math.floor(ms / n) + \' \' + name;\n  return Math.ceil(ms / n) + \' \' + name + \'s\';\n}\n\n}); // module: ms.js\n\nrequire.register(\"reporters/base.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar tty = require(\'browser/tty\')\n  , diff = require(\'browser/diff\')\n  , ms = require(\'../ms\')\n  , utils = require(\'../utils\');\n\n/**\n * Save timer references to avoid Sinon interfering (see GH-237).\n */\n\nvar Date = global.Date\n  , setTimeout = global.setTimeout\n  , setInterval = global.setInterval\n  , clearTimeout = global.clearTimeout\n  , clearInterval = global.clearInterval;\n\n/**\n * Check if both stdio streams are associated with a tty.\n */\n\nvar isatty = tty.isatty(1) && tty.isatty(2);\n\n/**\n * Expose `Base`.\n */\n\nexports = module.exports = Base;\n\n/**\n * Enable coloring by default.\n */\n\nexports.useColors = isatty || (process.env.MOCHA_COLORS !== undefined);\n\n/**\n * Inline diffs instead of +/-\n */\n\nexports.inlineDiffs = false;\n\n/**\n * Default color map.\n */\n\nexports.colors = {\n    \'pass\': 90\n  , \'fail\': 31\n  , \'bright pass\': 92\n  , \'bright fail\': 91\n  , \'bright yellow\': 93\n  , \'pending\': 36\n  , \'suite\': 0\n  , \'error title\': 0\n  , \'error message\': 31\n  , \'error stack\': 90\n  , \'checkmark\': 32\n  , \'fast\': 90\n  , \'medium\': 33\n  , \'slow\': 31\n  , \'green\': 32\n  , \'light\': 90\n  , \'diff gutter\': 90\n  , \'diff added\': 42\n  , \'diff removed\': 41\n};\n\n/**\n * Default symbol map.\n */\n\nexports.symbols = {\n  ok: \'✓\',\n  err: \'✖\',\n  dot: \'․\'\n};\n\n// With node.js on Windows: use symbols available in terminal default fonts\nif (\'win32\' == process.platform) {\n  exports.symbols.ok = \'\\u221A\';\n  exports.symbols.err = \'\\u00D7\';\n  exports.symbols.dot = \'.\';\n}\n\n/**\n * Color `str` with the given `type`,\n * allowing colors to be disabled,\n * as well as user-defined color\n * schemes.\n *\n * @param {String} type\n * @param {String} str\n * @return {String}\n * @api private\n */\n\nvar color = exports.color = function(type, str) {\n  if (!exports.useColors) return str;\n  return \'\\u001b[\' + exports.colors[type] + \'m\' + str + \'\\u001b[0m\';\n};\n\n/**\n * Expose term window size, with some\n * defaults for when stderr is not a tty.\n */\n\nexports.window = {\n  width: isatty\n    ? process.stdout.getWindowSize\n      ? process.stdout.getWindowSize(1)[0]\n      : tty.getWindowSize()[1]\n    : 75\n};\n\n/**\n * Expose some basic cursor interactions\n * that are common among reporters.\n */\n\nexports.cursor = {\n  hide: function(){\n    isatty && process.stdout.write(\'\\u001b[?25l\');\n  },\n\n  show: function(){\n    isatty && process.stdout.write(\'\\u001b[?25h\');\n  },\n\n  deleteLine: function(){\n    isatty && process.stdout.write(\'\\u001b[2K\');\n  },\n\n  beginningOfLine: function(){\n    isatty && process.stdout.write(\'\\u001b[0G\');\n  },\n\n  CR: function(){\n    if (isatty) {\n      exports.cursor.deleteLine();\n      exports.cursor.beginningOfLine();\n    } else {\n      process.stdout.write(\'\\r\');\n    }\n  }\n};\n\n/**\n * Outut the given `failures` as a list.\n *\n * @param {Array} failures\n * @api public\n */\n\nexports.list = function(failures){\n  console.error();\n  failures.forEach(function(test, i){\n    // format\n    var fmt = color(\'error title\', \'  %s) %s:\\n\')\n      + color(\'error message\', \'     %s\')\n      + color(\'error stack\', \'\\n%s\\n\');\n\n    // msg\n    var err = test.err\n      , message = err.message || \'\'\n      , stack = err.stack || message\n      , index = stack.indexOf(message) + message.length\n      , msg = stack.slice(0, index)\n      , actual = err.actual\n      , expected = err.expected\n      , escape = true;\n\n    // uncaught\n    if (err.uncaught) {\n      msg = \'Uncaught \' + msg;\n    }\n\n    // explicitly show diff\n    if (err.showDiff && sameType(actual, expected)) {\n      escape = false;\n      err.actual = actual = utils.stringify(actual);\n      err.expected = expected = utils.stringify(expected);\n    }\n\n    // actual / expected diff\n    if (err.showDiff && \'string\' == typeof actual && \'string\' == typeof expected) {\n      fmt = color(\'error title\', \'  %s) %s:\\n%s\') + color(\'error stack\', \'\\n%s\\n\');\n      var match = message.match(/^([^:]+): expected/);\n      msg = \'\\n      \' + color(\'error message\', match ? match[1] : msg);\n\n      if (exports.inlineDiffs) {\n        msg += inlineDiff(err, escape);\n      } else {\n        msg += unifiedDiff(err, escape);\n      }\n    }\n\n    // indent stack trace without msg\n    stack = stack.slice(index ? index + 1 : index)\n      .replace(/^/gm, \'  \');\n\n    console.error(fmt, (i + 1), test.fullTitle(), msg, stack);\n  });\n};\n\n/**\n * Initialize a new `Base` reporter.\n *\n * All other reporters generally\n * inherit from this reporter, providing\n * stats such as test duration, number\n * of tests passed / failed etc.\n *\n * @param {Runner} runner\n * @api public\n */\n\nfunction Base(runner) {\n  var self = this\n    , stats = this.stats = { suites: 0, tests: 0, passes: 0, pending: 0, failures: 0 }\n    , failures = this.failures = [];\n\n  if (!runner) return;\n  this.runner = runner;\n\n  runner.stats = stats;\n\n  runner.on(\'start\', function(){\n    stats.start = new Date;\n  });\n\n  runner.on(\'suite\', function(suite){\n    stats.suites = stats.suites || 0;\n    suite.root || stats.suites++;\n  });\n\n  runner.on(\'test end\', function(test){\n    stats.tests = stats.tests || 0;\n    stats.tests++;\n  });\n\n  runner.on(\'pass\', function(test){\n    stats.passes = stats.passes || 0;\n\n    var medium = test.slow() / 2;\n    test.speed = test.duration > test.slow()\n      ? \'slow\'\n      : test.duration > medium\n        ? \'medium\'\n        : \'fast\';\n\n    stats.passes++;\n  });\n\n  runner.on(\'fail\', function(test, err){\n    stats.failures = stats.failures || 0;\n    stats.failures++;\n    test.err = err;\n    failures.push(test);\n  });\n\n  runner.on(\'end\', function(){\n    stats.end = new Date;\n    stats.duration = new Date - stats.start;\n  });\n\n  runner.on(\'pending\', function(){\n    stats.pending++;\n  });\n}\n\n/**\n * Output common epilogue used by many of\n * the bundled reporters.\n *\n * @api public\n */\n\nBase.prototype.epilogue = function(){\n  var stats = this.stats;\n  var tests;\n  var fmt;\n\n  console.log();\n\n  // passes\n  fmt = color(\'bright pass\', \' \')\n    + color(\'green\', \' %d passing\')\n    + color(\'light\', \' (%s)\');\n\n  console.log(fmt,\n    stats.passes || 0,\n    ms(stats.duration));\n\n  // pending\n  if (stats.pending) {\n    fmt = color(\'pending\', \' \')\n      + color(\'pending\', \' %d pending\');\n\n    console.log(fmt, stats.pending);\n  }\n\n  // failures\n  if (stats.failures) {\n    fmt = color(\'fail\', \'  %d failing\');\n\n    console.error(fmt,\n      stats.failures);\n\n    Base.list(this.failures);\n    console.error();\n  }\n\n  console.log();\n};\n\n/**\n * Pad the given `str` to `len`.\n *\n * @param {String} str\n * @param {String} len\n * @return {String}\n * @api private\n */\n\nfunction pad(str, len) {\n  str = String(str);\n  return Array(len - str.length + 1).join(\' \') + str;\n}\n\n\n/**\n * Returns an inline diff between 2 strings with coloured ANSI output\n *\n * @param {Error} Error with actual/expected\n * @return {String} Diff\n * @api private\n */\n\nfunction inlineDiff(err, escape) {\n  var msg = errorDiff(err, \'WordsWithSpace\', escape);\n\n  // linenos\n  var lines = msg.split(\'\\n\');\n  if (lines.length > 4) {\n    var width = String(lines.length).length;\n    msg = lines.map(function(str, i){\n      return pad(++i, width) + \' |\' + \' \' + str;\n    }).join(\'\\n\');\n  }\n\n  // legend\n  msg = \'\\n\'\n    + color(\'diff removed\', \'actual\')\n    + \' \'\n    + color(\'diff added\', \'expected\')\n    + \'\\n\\n\'\n    + msg\n    + \'\\n\';\n\n  // indent\n  msg = msg.replace(/^/gm, \'      \');\n  return msg;\n}\n\n/**\n * Returns a unified diff between 2 strings\n *\n * @param {Error} Error with actual/expected\n * @return {String} Diff\n * @api private\n */\n\nfunction unifiedDiff(err, escape) {\n  var indent = \'      \';\n  function cleanUp(line) {\n    if (escape) {\n      line = escapeInvisibles(line);\n    }\n    if (line[0] === \'+\') return indent + colorLines(\'diff added\', line);\n    if (line[0] === \'-\') return indent + colorLines(\'diff removed\', line);\n    if (line.match(/\\@\\@/)) return null;\n    if (line.match(/\\\\ No newline/)) return null;\n    else return indent + line;\n  }\n  function notBlank(line) {\n    return line != null;\n  }\n  msg = diff.createPatch(\'string\', err.actual, err.expected);\n  var lines = msg.split(\'\\n\').splice(4);\n  return \'\\n      \'\n         + colorLines(\'diff added\',   \'+ expected\') + \' \'\n         + colorLines(\'diff removed\', \'- actual\')\n         + \'\\n\\n\'\n         + lines.map(cleanUp).filter(notBlank).join(\'\\n\');\n}\n\n/**\n * Return a character diff for `err`.\n *\n * @param {Error} err\n * @return {String}\n * @api private\n */\n\nfunction errorDiff(err, type, escape) {\n  var actual   = escape ? escapeInvisibles(err.actual)   : err.actual;\n  var expected = escape ? escapeInvisibles(err.expected) : err.expected;\n  return diff[\'diff\' + type](actual, expected).map(function(str){\n    if (str.added) return colorLines(\'diff added\', str.value);\n    if (str.removed) return colorLines(\'diff removed\', str.value);\n    return str.value;\n  }).join(\'\');\n}\n\n/**\n * Returns a string with all invisible characters in plain text\n *\n * @param {String} line\n * @return {String}\n * @api private\n */\nfunction escapeInvisibles(line) {\n    return line.replace(/\\t/g, \'<tab>\')\n               .replace(/\\r/g, \'<CR>\')\n               .replace(/\\n/g, \'<LF>\\n\');\n}\n\n/**\n * Color lines for `str`, using the color `name`.\n *\n * @param {String} name\n * @param {String} str\n * @return {String}\n * @api private\n */\n\nfunction colorLines(name, str) {\n  return str.split(\'\\n\').map(function(str){\n    return color(name, str);\n  }).join(\'\\n\');\n}\n\n/**\n * Check that a / b have the same type.\n *\n * @param {Object} a\n * @param {Object} b\n * @return {Boolean}\n * @api private\n */\n\nfunction sameType(a, b) {\n  a = Object.prototype.toString.call(a);\n  b = Object.prototype.toString.call(b);\n  return a == b;\n}\n\n}); // module: reporters/base.js\n\nrequire.register(\"reporters/doc.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar Base = require(\'./base\')\n  , utils = require(\'../utils\');\n\n/**\n * Expose `Doc`.\n */\n\nexports = module.exports = Doc;\n\n/**\n * Initialize a new `Doc` reporter.\n *\n * @param {Runner} runner\n * @api public\n */\n\nfunction Doc(runner) {\n  Base.call(this, runner);\n\n  var self = this\n    , stats = this.stats\n    , total = runner.total\n    , indents = 2;\n\n  function indent() {\n    return Array(indents).join(\'  \');\n  }\n\n  runner.on(\'suite\', function(suite){\n    if (suite.root) return;\n    ++indents;\n    console.log(\'%s<section class=\"suite\">\', indent());\n    ++indents;\n    console.log(\'%s<h1>%s</h1>\', indent(), utils.escape(suite.title));\n    console.log(\'%s<dl>\', indent());\n  });\n\n  runner.on(\'suite end\', function(suite){\n    if (suite.root) return;\n    console.log(\'%s</dl>\', indent());\n    --indents;\n    console.log(\'%s</section>\', indent());\n    --indents;\n  });\n\n  runner.on(\'pass\', function(test){\n    console.log(\'%s  <dt>%s</dt>\', indent(), utils.escape(test.title));\n    var code = utils.escape(utils.clean(test.fn.toString()));\n    console.log(\'%s  <dd><pre><code>%s</code></pre></dd>\', indent(), code);\n  });\n\n  runner.on(\'fail\', function(test, err){\n    console.log(\'%s  <dt class=\"error\">%s</dt>\', indent(), utils.escape(test.title));\n    var code = utils.escape(utils.clean(test.fn.toString()));\n    console.log(\'%s  <dd class=\"error\"><pre><code>%s</code></pre></dd>\', indent(), code);\n    console.log(\'%s  <dd class=\"error\">%s</dd>\', indent(), utils.escape(err));\n  });\n}\n\n}); // module: reporters/doc.js\n\nrequire.register(\"reporters/dot.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar Base = require(\'./base\')\n  , color = Base.color;\n\n/**\n * Expose `Dot`.\n */\n\nexports = module.exports = Dot;\n\n/**\n * Initialize a new `Dot` matrix test reporter.\n *\n * @param {Runner} runner\n * @api public\n */\n\nfunction Dot(runner) {\n  Base.call(this, runner);\n\n  var self = this\n    , stats = this.stats\n    , width = Base.window.width * .75 | 0\n    , n = -1;\n\n  runner.on(\'start\', function(){\n    process.stdout.write(\'\\n  \');\n  });\n\n  runner.on(\'pending\', function(test){\n    if (++n % width == 0) process.stdout.write(\'\\n  \');\n    process.stdout.write(color(\'pending\', Base.symbols.dot));\n  });\n\n  runner.on(\'pass\', function(test){\n    if (++n % width == 0) process.stdout.write(\'\\n  \');\n    if (\'slow\' == test.speed) {\n      process.stdout.write(color(\'bright yellow\', Base.symbols.dot));\n    } else {\n      process.stdout.write(color(test.speed, Base.symbols.dot));\n    }\n  });\n\n  runner.on(\'fail\', function(test, err){\n    if (++n % width == 0) process.stdout.write(\'\\n  \');\n    process.stdout.write(color(\'fail\', Base.symbols.dot));\n  });\n\n  runner.on(\'end\', function(){\n    console.log();\n    self.epilogue();\n  });\n}\n\n/**\n * Inherit from `Base.prototype`.\n */\n\nfunction F(){};\nF.prototype = Base.prototype;\nDot.prototype = new F;\nDot.prototype.constructor = Dot;\n\n\n}); // module: reporters/dot.js\n\nrequire.register(\"reporters/html-cov.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar JSONCov = require(\'./json-cov\')\n  , fs = require(\'browser/fs\');\n\n/**\n * Expose `HTMLCov`.\n */\n\nexports = module.exports = HTMLCov;\n\n/**\n * Initialize a new `JsCoverage` reporter.\n *\n * @param {Runner} runner\n * @api public\n */\n\nfunction HTMLCov(runner) {\n  var jade = require(\'jade\')\n    , file = __dirname + \'/templates/coverage.jade\'\n    , str = fs.readFileSync(file, \'utf8\')\n    , fn = jade.compile(str, { filename: file })\n    , self = this;\n\n  JSONCov.call(this, runner, false);\n\n  runner.on(\'end\', function(){\n    process.stdout.write(fn({\n        cov: self.cov\n      , coverageClass: coverageClass\n    }));\n  });\n}\n\n/**\n * Return coverage class for `n`.\n *\n * @return {String}\n * @api private\n */\n\nfunction coverageClass(n) {\n  if (n >= 75) return \'high\';\n  if (n >= 50) return \'medium\';\n  if (n >= 25) return \'low\';\n  return \'terrible\';\n}\n\n}); // module: reporters/html-cov.js\n\nrequire.register(\"reporters/html.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar Base = require(\'./base\')\n  , utils = require(\'../utils\')\n  , Progress = require(\'../browser/progress\')\n  , escape = utils.escape;\n\n/**\n * Save timer references to avoid Sinon interfering (see GH-237).\n */\n\nvar Date = global.Date\n  , setTimeout = global.setTimeout\n  , setInterval = global.setInterval\n  , clearTimeout = global.clearTimeout\n  , clearInterval = global.clearInterval;\n\n/**\n * Expose `HTML`.\n */\n\nexports = module.exports = HTML;\n\n/**\n * Stats template.\n */\n\nvar statsTemplate = \'<ul id=\"mocha-stats\">\'\n  + \'<li class=\"progress\"><canvas width=\"40\" height=\"40\"></canvas></li>\'\n  + \'<li class=\"passes\"><a href=\"#\">passes:</a> <em>0</em></li>\'\n  + \'<li class=\"failures\"><a href=\"#\">failures:</a> <em>0</em></li>\'\n  + \'<li class=\"duration\">duration: <em>0</em>s</li>\'\n  + \'</ul>\';\n\n/**\n * Initialize a new `HTML` reporter.\n *\n * @param {Runner} runner\n * @api public\n */\n\nfunction HTML(runner) {\n  Base.call(this, runner);\n\n  var self = this\n    , stats = this.stats\n    , total = runner.total\n    , stat = fragment(statsTemplate)\n    , items = stat.getElementsByTagName(\'li\')\n    , passes = items[1].getElementsByTagName(\'em\')[0]\n    , passesLink = items[1].getElementsByTagName(\'a\')[0]\n    , failures = items[2].getElementsByTagName(\'em\')[0]\n    , failuresLink = items[2].getElementsByTagName(\'a\')[0]\n    , duration = items[3].getElementsByTagName(\'em\')[0]\n    , canvas = stat.getElementsByTagName(\'canvas\')[0]\n    , report = fragment(\'<ul id=\"mocha-report\"></ul>\')\n    , stack = [report]\n    , progress\n    , ctx\n    , root = document.getElementById(\'mocha\');\n\n  if (canvas.getContext) {\n    var ratio = window.devicePixelRatio || 1;\n    canvas.style.width = canvas.width;\n    canvas.style.height = canvas.height;\n    canvas.width *= ratio;\n    canvas.height *= ratio;\n    ctx = canvas.getContext(\'2d\');\n    ctx.scale(ratio, ratio);\n    progress = new Progress;\n  }\n\n  if (!root) return error(\'#mocha div missing, add it to your document\');\n\n  // pass toggle\n  on(passesLink, \'click\', function(){\n    unhide();\n    var name = /pass/.test(report.className) ? \'\' : \' pass\';\n    report.className = report.className.replace(/fail|pass/g, \'\') + name;\n    if (report.className.trim()) hideSuitesWithout(\'test pass\');\n  });\n\n  // failure toggle\n  on(failuresLink, \'click\', function(){\n    unhide();\n    var name = /fail/.test(report.className) ? \'\' : \' fail\';\n    report.className = report.className.replace(/fail|pass/g, \'\') + name;\n    if (report.className.trim()) hideSuitesWithout(\'test fail\');\n  });\n\n  root.appendChild(stat);\n  root.appendChild(report);\n\n  if (progress) progress.size(40);\n\n  runner.on(\'suite\', function(suite){\n    if (suite.root) return;\n\n    // suite\n    var url = self.suiteURL(suite);\n    var el = fragment(\'<li class=\"suite\"><h1><a href=\"%s\">%s</a></h1></li>\', url, escape(suite.title));\n\n    // container\n    stack[0].appendChild(el);\n    stack.unshift(document.createElement(\'ul\'));\n    el.appendChild(stack[0]);\n  });\n\n  runner.on(\'suite end\', function(suite){\n    if (suite.root) return;\n    stack.shift();\n  });\n\n  runner.on(\'fail\', function(test, err){\n    if (\'hook\' == test.type) runner.emit(\'test end\', test);\n  });\n\n  runner.on(\'test end\', function(test){\n    // TODO: add to stats\n    var percent = stats.tests / this.total * 100 | 0;\n    if (progress) progress.update(percent).draw(ctx);\n\n    // update stats\n    var ms = new Date - stats.start;\n    text(passes, stats.passes);\n    text(failures, stats.failures);\n    text(duration, (ms / 1000).toFixed(2));\n\n    // test\n    if (\'passed\' == test.state) {\n      var url = self.testURL(test);\n      var el = fragment(\'<li class=\"test pass %e\"><h2>%e<span class=\"duration\">%ems</span> <a href=\"%s\" class=\"replay\">‣</a></h2></li>\', test.speed, test.title, test.duration, url);\n    } else if (test.pending) {\n      var el = fragment(\'<li class=\"test pass pending\"><h2>%e</h2></li>\', test.title);\n    } else {\n      var el = fragment(\'<li class=\"test fail\"><h2>%e <a href=\"?grep=%e\" class=\"replay\">‣</a></h2></li>\', test.title, encodeURIComponent(test.fullTitle()));\n      var str = test.err.stack || test.err.toString();\n\n      // FF / Opera do not add the message\n      if (!~str.indexOf(test.err.message)) {\n        str = test.err.message + \'\\n\' + str;\n      }\n\n      // <=IE7 stringifies to [Object Error]. Since it can be overloaded, we\n      // check for the result of the stringifying.\n      if (\'[object Error]\' == str) str = test.err.message;\n\n      // Safari doesn\'t give you a stack. Let\'s at least provide a source line.\n      if (!test.err.stack && test.err.sourceURL && test.err.line !== undefined) {\n        str += \"\\n(\" + test.err.sourceURL + \":\" + test.err.line + \")\";\n      }\n\n      el.appendChild(fragment(\'<pre class=\"error\">%e</pre>\', str));\n    }\n\n    // toggle code\n    // TODO: defer\n    if (!test.pending) {\n      var h2 = el.getElementsByTagName(\'h2\')[0];\n\n      on(h2, \'click\', function(){\n        pre.style.display = \'none\' == pre.style.display\n          ? \'block\'\n          : \'none\';\n      });\n\n      var pre = fragment(\'<pre><code>%e</code></pre>\', utils.clean(test.fn.toString()));\n      el.appendChild(pre);\n      pre.style.display = \'none\';\n    }\n\n    // Don\'t call .appendChild if #mocha-report was already .shift()\'ed off the stack.\n    if (stack[0]) stack[0].appendChild(el);\n  });\n}\n\n/**\n * Makes a URL, preserving querystring (\"search\") parameters.\n * @param {string} s\n * @returns {string} your new URL\n */\nvar makeUrl = function makeUrl(s) {\n  var search = window.location.search;\n  return (search ? search + \'&\' : \'?\' ) + \'grep=\' + encodeURIComponent(s);\n};\n\n/**\n * Provide suite URL\n *\n * @param {Object} [suite]\n */\nHTML.prototype.suiteURL = function(suite){\n  return makeUrl(suite.fullTitle());\n};\n\n/**\n * Provide test URL\n *\n * @param {Object} [test]\n */\n\nHTML.prototype.testURL = function(test){\n  return makeUrl(test.fullTitle());\n};\n\n/**\n * Display error `msg`.\n */\n\nfunction error(msg) {\n  document.body.appendChild(fragment(\'<div id=\"mocha-error\">%s</div>\', msg));\n}\n\n/**\n * Return a DOM fragment from `html`.\n */\n\nfunction fragment(html) {\n  var args = arguments\n    , div = document.createElement(\'div\')\n    , i = 1;\n\n  div.innerHTML = html.replace(/%([se])/g, function(_, type){\n    switch (type) {\n      case \'s\': return String(args[i++]);\n      case \'e\': return escape(args[i++]);\n    }\n  });\n\n  return div.firstChild;\n}\n\n/**\n * Check for suites that do not have elements\n * with `classname`, and hide them.\n */\n\nfunction hideSuitesWithout(classname) {\n  var suites = document.getElementsByClassName(\'suite\');\n  for (var i = 0; i < suites.length; i++) {\n    var els = suites[i].getElementsByClassName(classname);\n    if (0 == els.length) suites[i].className += \' hidden\';\n  }\n}\n\n/**\n * Unhide .hidden suites.\n */\n\nfunction unhide() {\n  var els = document.getElementsByClassName(\'suite hidden\');\n  for (var i = 0; i < els.length; ++i) {\n    els[i].className = els[i].className.replace(\'suite hidden\', \'suite\');\n  }\n}\n\n/**\n * Set `el` text to `str`.\n */\n\nfunction text(el, str) {\n  if (el.textContent) {\n    el.textContent = str;\n  } else {\n    el.innerText = str;\n  }\n}\n\n/**\n * Listen on `event` with callback `fn`.\n */\n\nfunction on(el, event, fn) {\n  if (el.addEventListener) {\n    el.addEventListener(event, fn, false);\n  } else {\n    el.attachEvent(\'on\' + event, fn);\n  }\n}\n\n}); // module: reporters/html.js\n\nrequire.register(\"reporters/index.js\", function(module, exports, require){\nexports.Base = require(\'./base\');\nexports.Dot = require(\'./dot\');\nexports.Doc = require(\'./doc\');\nexports.TAP = require(\'./tap\');\nexports.JSON = require(\'./json\');\nexports.HTML = require(\'./html\');\nexports.List = require(\'./list\');\nexports.Min = require(\'./min\');\nexports.Spec = require(\'./spec\');\nexports.Nyan = require(\'./nyan\');\nexports.XUnit = require(\'./xunit\');\nexports.Markdown = require(\'./markdown\');\nexports.Progress = require(\'./progress\');\nexports.Landing = require(\'./landing\');\nexports.JSONCov = require(\'./json-cov\');\nexports.HTMLCov = require(\'./html-cov\');\nexports.JSONStream = require(\'./json-stream\');\n\n}); // module: reporters/index.js\n\nrequire.register(\"reporters/json-cov.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar Base = require(\'./base\');\n\n/**\n * Expose `JSONCov`.\n */\n\nexports = module.exports = JSONCov;\n\n/**\n * Initialize a new `JsCoverage` reporter.\n *\n * @param {Runner} runner\n * @param {Boolean} output\n * @api public\n */\n\nfunction JSONCov(runner, output) {\n  var self = this\n    , output = 1 == arguments.length ? true : output;\n\n  Base.call(this, runner);\n\n  var tests = []\n    , failures = []\n    , passes = [];\n\n  runner.on(\'test end\', function(test){\n    tests.push(test);\n  });\n\n  runner.on(\'pass\', function(test){\n    passes.push(test);\n  });\n\n  runner.on(\'fail\', function(test){\n    failures.push(test);\n  });\n\n  runner.on(\'end\', function(){\n    var cov = global._$jscoverage || {};\n    var result = self.cov = map(cov);\n    result.stats = self.stats;\n    result.tests = tests.map(clean);\n    result.failures = failures.map(clean);\n    result.passes = passes.map(clean);\n    if (!output) return;\n    process.stdout.write(JSON.stringify(result, null, 2 ));\n  });\n}\n\n/**\n * Map jscoverage data to a JSON structure\n * suitable for reporting.\n *\n * @param {Object} cov\n * @return {Object}\n * @api private\n */\n\nfunction map(cov) {\n  var ret = {\n      instrumentation: \'node-jscoverage\'\n    , sloc: 0\n    , hits: 0\n    , misses: 0\n    , coverage: 0\n    , files: []\n  };\n\n  for (var filename in cov) {\n    var data = coverage(filename, cov[filename]);\n    ret.files.push(data);\n    ret.hits += data.hits;\n    ret.misses += data.misses;\n    ret.sloc += data.sloc;\n  }\n\n  ret.files.sort(function(a, b) {\n    return a.filename.localeCompare(b.filename);\n  });\n\n  if (ret.sloc > 0) {\n    ret.coverage = (ret.hits / ret.sloc) * 100;\n  }\n\n  return ret;\n}\n\n/**\n * Map jscoverage data for a single source file\n * to a JSON structure suitable for reporting.\n *\n * @param {String} filename name of the source file\n * @param {Object} data jscoverage coverage data\n * @return {Object}\n * @api private\n */\n\nfunction coverage(filename, data) {\n  var ret = {\n    filename: filename,\n    coverage: 0,\n    hits: 0,\n    misses: 0,\n    sloc: 0,\n    source: {}\n  };\n\n  data.source.forEach(function(line, num){\n    num++;\n\n    if (data[num] === 0) {\n      ret.misses++;\n      ret.sloc++;\n    } else if (data[num] !== undefined) {\n      ret.hits++;\n      ret.sloc++;\n    }\n\n    ret.source[num] = {\n        source: line\n      , coverage: data[num] === undefined\n        ? \'\'\n        : data[num]\n    };\n  });\n\n  ret.coverage = ret.hits / ret.sloc * 100;\n\n  return ret;\n}\n\n/**\n * Return a plain-object representation of `test`\n * free of cyclic properties etc.\n *\n * @param {Object} test\n * @return {Object}\n * @api private\n */\n\nfunction clean(test) {\n  return {\n      title: test.title\n    , fullTitle: test.fullTitle()\n    , duration: test.duration\n  }\n}\n\n}); // module: reporters/json-cov.js\n\nrequire.register(\"reporters/json-stream.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar Base = require(\'./base\')\n  , color = Base.color;\n\n/**\n * Expose `List`.\n */\n\nexports = module.exports = List;\n\n/**\n * Initialize a new `List` test reporter.\n *\n * @param {Runner} runner\n * @api public\n */\n\nfunction List(runner) {\n  Base.call(this, runner);\n\n  var self = this\n    , stats = this.stats\n    , total = runner.total;\n\n  runner.on(\'start\', function(){\n    console.log(JSON.stringify([\'start\', { total: total }]));\n  });\n\n  runner.on(\'pass\', function(test){\n    console.log(JSON.stringify([\'pass\', clean(test)]));\n  });\n\n  runner.on(\'fail\', function(test, err){\n    test = clean(test);\n    test.err = err.message;\n    console.log(JSON.stringify([\'fail\', test]));\n  });\n\n  runner.on(\'end\', function(){\n    process.stdout.write(JSON.stringify([\'end\', self.stats]));\n  });\n}\n\n/**\n * Return a plain-object representation of `test`\n * free of cyclic properties etc.\n *\n * @param {Object} test\n * @return {Object}\n * @api private\n */\n\nfunction clean(test) {\n  return {\n      title: test.title\n    , fullTitle: test.fullTitle()\n    , duration: test.duration\n  }\n}\n\n}); // module: reporters/json-stream.js\n\nrequire.register(\"reporters/json.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar Base = require(\'./base\')\n  , cursor = Base.cursor\n  , color = Base.color;\n\n/**\n * Expose `JSON`.\n */\n\nexports = module.exports = JSONReporter;\n\n/**\n * Initialize a new `JSON` reporter.\n *\n * @param {Runner} runner\n * @api public\n */\n\nfunction JSONReporter(runner) {\n  var self = this;\n  Base.call(this, runner);\n\n  var tests = []\n    , pending = []\n    , failures = []\n    , passes = [];\n\n  runner.on(\'test end\', function(test){\n    tests.push(test);\n  });\n\n  runner.on(\'pass\', function(test){\n    passes.push(test);\n  });\n\n  runner.on(\'fail\', function(test){\n    failures.push(test);\n  });\n\n  runner.on(\'pending\', function(test){\n    pending.push(test);\n  });\n\n  runner.on(\'end\', function(){\n    var obj = {\n      stats: self.stats,\n      tests: tests.map(clean),\n      pending: pending.map(clean),\n      failures: failures.map(clean),\n      passes: passes.map(clean)\n    };\n\n    runner.testResults = obj;\n\n    process.stdout.write(JSON.stringify(obj, null, 2));\n  });\n}\n\n/**\n * Return a plain-object representation of `test`\n * free of cyclic properties etc.\n *\n * @param {Object} test\n * @return {Object}\n * @api private\n */\n\nfunction clean(test) {\n  return {\n    title: test.title,\n    fullTitle: test.fullTitle(),\n    duration: test.duration,\n    err: errorJSON(test.err || {})\n  }\n}\n\n/**\n * Transform `error` into a JSON object.\n * @param {Error} err\n * @return {Object}\n */\n\nfunction errorJSON(err) {\n  var res = {};\n  Object.getOwnPropertyNames(err).forEach(function(key) {\n    res[key] = err[key];\n  }, err);\n  return res;\n}\n\n}); // module: reporters/json.js\n\nrequire.register(\"reporters/landing.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar Base = require(\'./base\')\n  , cursor = Base.cursor\n  , color = Base.color;\n\n/**\n * Expose `Landing`.\n */\n\nexports = module.exports = Landing;\n\n/**\n * Airplane color.\n */\n\nBase.colors.plane = 0;\n\n/**\n * Airplane crash color.\n */\n\nBase.colors[\'plane crash\'] = 31;\n\n/**\n * Runway color.\n */\n\nBase.colors.runway = 90;\n\n/**\n * Initialize a new `Landing` reporter.\n *\n * @param {Runner} runner\n * @api public\n */\n\nfunction Landing(runner) {\n  Base.call(this, runner);\n\n  var self = this\n    , stats = this.stats\n    , width = Base.window.width * .75 | 0\n    , total = runner.total\n    , stream = process.stdout\n    , plane = color(\'plane\', \'✈\')\n    , crashed = -1\n    , n = 0;\n\n  function runway() {\n    var buf = Array(width).join(\'-\');\n    return \'  \' + color(\'runway\', buf);\n  }\n\n  runner.on(\'start\', function(){\n    stream.write(\'\\n\\n\\n  \');\n    cursor.hide();\n  });\n\n  runner.on(\'test end\', function(test){\n    // check if the plane crashed\n    var col = -1 == crashed\n      ? width * ++n / total | 0\n      : crashed;\n\n    // show the crash\n    if (\'failed\' == test.state) {\n      plane = color(\'plane crash\', \'✈\');\n      crashed = col;\n    }\n\n    // render landing strip\n    stream.write(\'\\u001b[\'+(width+1)+\'D\\u001b[2A\');\n    stream.write(runway());\n    stream.write(\'\\n  \');\n    stream.write(color(\'runway\', Array(col).join(\'⋅\')));\n    stream.write(plane)\n    stream.write(color(\'runway\', Array(width - col).join(\'⋅\') + \'\\n\'));\n    stream.write(runway());\n    stream.write(\'\\u001b[0m\');\n  });\n\n  runner.on(\'end\', function(){\n    cursor.show();\n    console.log();\n    self.epilogue();\n  });\n}\n\n/**\n * Inherit from `Base.prototype`.\n */\n\nfunction F(){};\nF.prototype = Base.prototype;\nLanding.prototype = new F;\nLanding.prototype.constructor = Landing;\n\n\n}); // module: reporters/landing.js\n\nrequire.register(\"reporters/list.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar Base = require(\'./base\')\n  , cursor = Base.cursor\n  , color = Base.color;\n\n/**\n * Expose `List`.\n */\n\nexports = module.exports = List;\n\n/**\n * Initialize a new `List` test reporter.\n *\n * @param {Runner} runner\n * @api public\n */\n\nfunction List(runner) {\n  Base.call(this, runner);\n\n  var self = this\n    , stats = this.stats\n    , n = 0;\n\n  runner.on(\'start\', function(){\n    console.log();\n  });\n\n  runner.on(\'test\', function(test){\n    process.stdout.write(color(\'pass\', \'    \' + test.fullTitle() + \': \'));\n  });\n\n  runner.on(\'pending\', function(test){\n    var fmt = color(\'checkmark\', \'  -\')\n      + color(\'pending\', \' %s\');\n    console.log(fmt, test.fullTitle());\n  });\n\n  runner.on(\'pass\', function(test){\n    var fmt = color(\'checkmark\', \'  \'+Base.symbols.dot)\n      + color(\'pass\', \' %s: \')\n      + color(test.speed, \'%dms\');\n    cursor.CR();\n    console.log(fmt, test.fullTitle(), test.duration);\n  });\n\n  runner.on(\'fail\', function(test, err){\n    cursor.CR();\n    console.log(color(\'fail\', \'  %d) %s\'), ++n, test.fullTitle());\n  });\n\n  runner.on(\'end\', self.epilogue.bind(self));\n}\n\n/**\n * Inherit from `Base.prototype`.\n */\n\nfunction F(){};\nF.prototype = Base.prototype;\nList.prototype = new F;\nList.prototype.constructor = List;\n\n\n}); // module: reporters/list.js\n\nrequire.register(\"reporters/markdown.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar Base = require(\'./base\')\n  , utils = require(\'../utils\');\n\n/**\n * Expose `Markdown`.\n */\n\nexports = module.exports = Markdown;\n\n/**\n * Initialize a new `Markdown` reporter.\n *\n * @param {Runner} runner\n * @api public\n */\n\nfunction Markdown(runner) {\n  Base.call(this, runner);\n\n  var self = this\n    , stats = this.stats\n    , level = 0\n    , buf = \'\';\n\n  function title(str) {\n    return Array(level).join(\'#\') + \' \' + str;\n  }\n\n  function indent() {\n    return Array(level).join(\'  \');\n  }\n\n  function mapTOC(suite, obj) {\n    var ret = obj;\n    obj = obj[suite.title] = obj[suite.title] || { suite: suite };\n    suite.suites.forEach(function(suite){\n      mapTOC(suite, obj);\n    });\n    return ret;\n  }\n\n  function stringifyTOC(obj, level) {\n    ++level;\n    var buf = \'\';\n    var link;\n    for (var key in obj) {\n      if (\'suite\' == key) continue;\n      if (key) link = \' - [\' + key + \'](#\' + utils.slug(obj[key].suite.fullTitle()) + \')\\n\';\n      if (key) buf += Array(level).join(\'  \') + link;\n      buf += stringifyTOC(obj[key], level);\n    }\n    --level;\n    return buf;\n  }\n\n  function generateTOC(suite) {\n    var obj = mapTOC(suite, {});\n    return stringifyTOC(obj, 0);\n  }\n\n  generateTOC(runner.suite);\n\n  runner.on(\'suite\', function(suite){\n    ++level;\n    var slug = utils.slug(suite.fullTitle());\n    buf += \'<a name=\"\' + slug + \'\"></a>\' + \'\\n\';\n    buf += title(suite.title) + \'\\n\';\n  });\n\n  runner.on(\'suite end\', function(suite){\n    --level;\n  });\n\n  runner.on(\'pass\', function(test){\n    var code = utils.clean(test.fn.toString());\n    buf += test.title + \'.\\n\';\n    buf += \'\\n```js\\n\';\n    buf += code + \'\\n\';\n    buf += \'```\\n\\n\';\n  });\n\n  runner.on(\'end\', function(){\n    process.stdout.write(\'# TOC\\n\');\n    process.stdout.write(generateTOC(runner.suite));\n    process.stdout.write(buf);\n  });\n}\n\n}); // module: reporters/markdown.js\n\nrequire.register(\"reporters/min.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar Base = require(\'./base\');\n\n/**\n * Expose `Min`.\n */\n\nexports = module.exports = Min;\n\n/**\n * Initialize a new `Min` minimal test reporter (best used with --watch).\n *\n * @param {Runner} runner\n * @api public\n */\n\nfunction Min(runner) {\n  Base.call(this, runner);\n\n  runner.on(\'start\', function(){\n    // clear screen\n    process.stdout.write(\'\\u001b[2J\');\n    // set cursor position\n    process.stdout.write(\'\\u001b[1;3H\');\n  });\n\n  runner.on(\'end\', this.epilogue.bind(this));\n}\n\n/**\n * Inherit from `Base.prototype`.\n */\n\nfunction F(){};\nF.prototype = Base.prototype;\nMin.prototype = new F;\nMin.prototype.constructor = Min;\n\n\n}); // module: reporters/min.js\n\nrequire.register(\"reporters/nyan.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar Base = require(\'./base\')\n  , color = Base.color;\n\n/**\n * Expose `Dot`.\n */\n\nexports = module.exports = NyanCat;\n\n/**\n * Initialize a new `Dot` matrix test reporter.\n *\n * @param {Runner} runner\n * @api public\n */\n\nfunction NyanCat(runner) {\n  Base.call(this, runner);\n  var self = this\n    , stats = this.stats\n    , width = Base.window.width * .75 | 0\n    , rainbowColors = this.rainbowColors = self.generateColors()\n    , colorIndex = this.colorIndex = 0\n    , numerOfLines = this.numberOfLines = 4\n    , trajectories = this.trajectories = [[], [], [], []]\n    , nyanCatWidth = this.nyanCatWidth = 11\n    , trajectoryWidthMax = this.trajectoryWidthMax = (width - nyanCatWidth)\n    , scoreboardWidth = this.scoreboardWidth = 5\n    , tick = this.tick = 0\n    , n = 0;\n\n  runner.on(\'start\', function(){\n    Base.cursor.hide();\n    self.draw();\n  });\n\n  runner.on(\'pending\', function(test){\n    self.draw();\n  });\n\n  runner.on(\'pass\', function(test){\n    self.draw();\n  });\n\n  runner.on(\'fail\', function(test, err){\n    self.draw();\n  });\n\n  runner.on(\'end\', function(){\n    Base.cursor.show();\n    for (var i = 0; i < self.numberOfLines; i++) write(\'\\n\');\n    self.epilogue();\n  });\n}\n\n/**\n * Draw the nyan cat\n *\n * @api private\n */\n\nNyanCat.prototype.draw = function(){\n  this.appendRainbow();\n  this.drawScoreboard();\n  this.drawRainbow();\n  this.drawNyanCat();\n  this.tick = !this.tick;\n};\n\n/**\n * Draw the \"scoreboard\" showing the number\n * of passes, failures and pending tests.\n *\n * @api private\n */\n\nNyanCat.prototype.drawScoreboard = function(){\n  var stats = this.stats;\n  var colors = Base.colors;\n\n  function draw(color, n) {\n    write(\' \');\n    write(\'\\u001b[\' + color + \'m\' + n + \'\\u001b[0m\');\n    write(\'\\n\');\n  }\n\n  draw(colors.green, stats.passes);\n  draw(colors.fail, stats.failures);\n  draw(colors.pending, stats.pending);\n  write(\'\\n\');\n\n  this.cursorUp(this.numberOfLines);\n};\n\n/**\n * Append the rainbow.\n *\n * @api private\n */\n\nNyanCat.prototype.appendRainbow = function(){\n  var segment = this.tick ? \'_\' : \'-\';\n  var rainbowified = this.rainbowify(segment);\n\n  for (var index = 0; index < this.numberOfLines; index++) {\n    var trajectory = this.trajectories[index];\n    if (trajectory.length >= this.trajectoryWidthMax) trajectory.shift();\n    trajectory.push(rainbowified);\n  }\n};\n\n/**\n * Draw the rainbow.\n *\n * @api private\n */\n\nNyanCat.prototype.drawRainbow = function(){\n  var self = this;\n\n  this.trajectories.forEach(function(line, index) {\n    write(\'\\u001b[\' + self.scoreboardWidth + \'C\');\n    write(line.join(\'\'));\n    write(\'\\n\');\n  });\n\n  this.cursorUp(this.numberOfLines);\n};\n\n/**\n * Draw the nyan cat\n *\n * @api private\n */\n\nNyanCat.prototype.drawNyanCat = function() {\n  var self = this;\n  var startWidth = this.scoreboardWidth + this.trajectories[0].length;\n  var color = \'\\u001b[\' + startWidth + \'C\';\n  var padding = \'\';\n\n  write(color);\n  write(\'_,------,\');\n  write(\'\\n\');\n\n  write(color);\n  padding = self.tick ? \'  \' : \'   \';\n  write(\'_|\' + padding + \'/\\\\_/\\\\ \');\n  write(\'\\n\');\n\n  write(color);\n  padding = self.tick ? \'_\' : \'__\';\n  var tail = self.tick ? \'~\' : \'^\';\n  var face;\n  write(tail + \'|\' + padding + this.face() + \' \');\n  write(\'\\n\');\n\n  write(color);\n  padding = self.tick ? \' \' : \'  \';\n  write(padding + \'\"\"  \"\" \');\n  write(\'\\n\');\n\n  this.cursorUp(this.numberOfLines);\n};\n\n/**\n * Draw nyan cat face.\n *\n * @return {String}\n * @api private\n */\n\nNyanCat.prototype.face = function() {\n  var stats = this.stats;\n  if (stats.failures) {\n    return \'( x .x)\';\n  } else if (stats.pending) {\n    return \'( o .o)\';\n  } else if(stats.passes) {\n    return \'( ^ .^)\';\n  } else {\n    return \'( - .-)\';\n  }\n};\n\n/**\n * Move cursor up `n`.\n *\n * @param {Number} n\n * @api private\n */\n\nNyanCat.prototype.cursorUp = function(n) {\n  write(\'\\u001b[\' + n + \'A\');\n};\n\n/**\n * Move cursor down `n`.\n *\n * @param {Number} n\n * @api private\n */\n\nNyanCat.prototype.cursorDown = function(n) {\n  write(\'\\u001b[\' + n + \'B\');\n};\n\n/**\n * Generate rainbow colors.\n *\n * @return {Array}\n * @api private\n */\n\nNyanCat.prototype.generateColors = function(){\n  var colors = [];\n\n  for (var i = 0; i < (6 * 7); i++) {\n    var pi3 = Math.floor(Math.PI / 3);\n    var n = (i * (1.0 / 6));\n    var r = Math.floor(3 * Math.sin(n) + 3);\n    var g = Math.floor(3 * Math.sin(n + 2 * pi3) + 3);\n    var b = Math.floor(3 * Math.sin(n + 4 * pi3) + 3);\n    colors.push(36 * r + 6 * g + b + 16);\n  }\n\n  return colors;\n};\n\n/**\n * Apply rainbow to the given `str`.\n *\n * @param {String} str\n * @return {String}\n * @api private\n */\n\nNyanCat.prototype.rainbowify = function(str){\n  var color = this.rainbowColors[this.colorIndex % this.rainbowColors.length];\n  this.colorIndex += 1;\n  return \'\\u001b[38;5;\' + color + \'m\' + str + \'\\u001b[0m\';\n};\n\n/**\n * Stdout helper.\n */\n\nfunction write(string) {\n  process.stdout.write(string);\n}\n\n/**\n * Inherit from `Base.prototype`.\n */\n\nfunction F(){};\nF.prototype = Base.prototype;\nNyanCat.prototype = new F;\nNyanCat.prototype.constructor = NyanCat;\n\n\n}); // module: reporters/nyan.js\n\nrequire.register(\"reporters/progress.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar Base = require(\'./base\')\n  , cursor = Base.cursor\n  , color = Base.color;\n\n/**\n * Expose `Progress`.\n */\n\nexports = module.exports = Progress;\n\n/**\n * General progress bar color.\n */\n\nBase.colors.progress = 90;\n\n/**\n * Initialize a new `Progress` bar test reporter.\n *\n * @param {Runner} runner\n * @param {Object} options\n * @api public\n */\n\nfunction Progress(runner, options) {\n  Base.call(this, runner);\n\n  var self = this\n    , options = options || {}\n    , stats = this.stats\n    , width = Base.window.width * .50 | 0\n    , total = runner.total\n    , complete = 0\n    , max = Math.max\n    , lastN = -1;\n\n  // default chars\n  options.open = options.open || \'[\';\n  options.complete = options.complete || \'▬\';\n  options.incomplete = options.incomplete || Base.symbols.dot;\n  options.close = options.close || \']\';\n  options.verbose = false;\n\n  // tests started\n  runner.on(\'start\', function(){\n    console.log();\n    cursor.hide();\n  });\n\n  // tests complete\n  runner.on(\'test end\', function(){\n    complete++;\n    var incomplete = total - complete\n      , percent = complete / total\n      , n = width * percent | 0\n      , i = width - n;\n\n    if (lastN === n && !options.verbose) {\n      // Don\'t re-render the line if it hasn\'t changed\n      return;\n    }\n    lastN = n;\n\n    cursor.CR();\n    process.stdout.write(\'\\u001b[J\');\n    process.stdout.write(color(\'progress\', \'  \' + options.open));\n    process.stdout.write(Array(n).join(options.complete));\n    process.stdout.write(Array(i).join(options.incomplete));\n    process.stdout.write(color(\'progress\', options.close));\n    if (options.verbose) {\n      process.stdout.write(color(\'progress\', \' \' + complete + \' of \' + total));\n    }\n  });\n\n  // tests are complete, output some stats\n  // and the failures if any\n  runner.on(\'end\', function(){\n    cursor.show();\n    console.log();\n    self.epilogue();\n  });\n}\n\n/**\n * Inherit from `Base.prototype`.\n */\n\nfunction F(){};\nF.prototype = Base.prototype;\nProgress.prototype = new F;\nProgress.prototype.constructor = Progress;\n\n\n}); // module: reporters/progress.js\n\nrequire.register(\"reporters/spec.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar Base = require(\'./base\')\n  , cursor = Base.cursor\n  , color = Base.color;\n\n/**\n * Expose `Spec`.\n */\n\nexports = module.exports = Spec;\n\n/**\n * Initialize a new `Spec` test reporter.\n *\n * @param {Runner} runner\n * @api public\n */\n\nfunction Spec(runner) {\n  Base.call(this, runner);\n\n  var self = this\n    , stats = this.stats\n    , indents = 0\n    , n = 0;\n\n  function indent() {\n    return Array(indents).join(\'  \')\n  }\n\n  runner.on(\'start\', function(){\n    console.log();\n  });\n\n  runner.on(\'suite\', function(suite){\n    ++indents;\n    console.log(color(\'suite\', \'%s%s\'), indent(), suite.title);\n  });\n\n  runner.on(\'suite end\', function(suite){\n    --indents;\n    if (1 == indents) console.log();\n  });\n\n  runner.on(\'pending\', function(test){\n    var fmt = indent() + color(\'pending\', \'  - %s\');\n    console.log(fmt, test.title);\n  });\n\n  runner.on(\'pass\', function(test){\n    if (\'fast\' == test.speed) {\n      var fmt = indent()\n        + color(\'checkmark\', \'  \' + Base.symbols.ok)\n        + color(\'pass\', \' %s \');\n      cursor.CR();\n      console.log(fmt, test.title);\n    } else {\n      var fmt = indent()\n        + color(\'checkmark\', \'  \' + Base.symbols.ok)\n        + color(\'pass\', \' %s \')\n        + color(test.speed, \'(%dms)\');\n      cursor.CR();\n      console.log(fmt, test.title, test.duration);\n    }\n  });\n\n  runner.on(\'fail\', function(test, err){\n    cursor.CR();\n    console.log(indent() + color(\'fail\', \'  %d) %s\'), ++n, test.title);\n  });\n\n  runner.on(\'end\', self.epilogue.bind(self));\n}\n\n/**\n * Inherit from `Base.prototype`.\n */\n\nfunction F(){};\nF.prototype = Base.prototype;\nSpec.prototype = new F;\nSpec.prototype.constructor = Spec;\n\n\n}); // module: reporters/spec.js\n\nrequire.register(\"reporters/tap.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar Base = require(\'./base\')\n  , cursor = Base.cursor\n  , color = Base.color;\n\n/**\n * Expose `TAP`.\n */\n\nexports = module.exports = TAP;\n\n/**\n * Initialize a new `TAP` reporter.\n *\n * @param {Runner} runner\n * @api public\n */\n\nfunction TAP(runner) {\n  Base.call(this, runner);\n\n  var self = this\n    , stats = this.stats\n    , n = 1\n    , passes = 0\n    , failures = 0;\n\n  runner.on(\'start\', function(){\n    var total = runner.grepTotal(runner.suite);\n    console.log(\'%d..%d\', 1, total);\n  });\n\n  runner.on(\'test end\', function(){\n    ++n;\n  });\n\n  runner.on(\'pending\', function(test){\n    console.log(\'ok %d %s # SKIP -\', n, title(test));\n  });\n\n  runner.on(\'pass\', function(test){\n    passes++;\n    console.log(\'ok %d %s\', n, title(test));\n  });\n\n  runner.on(\'fail\', function(test, err){\n    failures++;\n    console.log(\'not ok %d %s\', n, title(test));\n    if (err.stack) console.log(err.stack.replace(/^/gm, \'  \'));\n  });\n\n  runner.on(\'end\', function(){\n    console.log(\'# tests \' + (passes + failures));\n    console.log(\'# pass \' + passes);\n    console.log(\'# fail \' + failures);\n  });\n}\n\n/**\n * Return a TAP-safe title of `test`\n *\n * @param {Object} test\n * @return {String}\n * @api private\n */\n\nfunction title(test) {\n  return test.fullTitle().replace(/#/g, \'\');\n}\n\n}); // module: reporters/tap.js\n\nrequire.register(\"reporters/xunit.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar Base = require(\'./base\')\n  , utils = require(\'../utils\')\n  , escape = utils.escape;\n\n/**\n * Save timer references to avoid Sinon interfering (see GH-237).\n */\n\nvar Date = global.Date\n  , setTimeout = global.setTimeout\n  , setInterval = global.setInterval\n  , clearTimeout = global.clearTimeout\n  , clearInterval = global.clearInterval;\n\n/**\n * Expose `XUnit`.\n */\n\nexports = module.exports = XUnit;\n\n/**\n * Initialize a new `XUnit` reporter.\n *\n * @param {Runner} runner\n * @api public\n */\n\nfunction XUnit(runner) {\n  Base.call(this, runner);\n  var stats = this.stats\n    , tests = []\n    , self = this;\n\n  runner.on(\'pending\', function(test){\n    tests.push(test);\n  });\n\n  runner.on(\'pass\', function(test){\n    tests.push(test);\n  });\n\n  runner.on(\'fail\', function(test){\n    tests.push(test);\n  });\n\n  runner.on(\'end\', function(){\n    console.log(tag(\'testsuite\', {\n        name: \'Mocha Tests\'\n      , tests: stats.tests\n      , failures: stats.failures\n      , errors: stats.failures\n      , skipped: stats.tests - stats.failures - stats.passes\n      , timestamp: (new Date).toUTCString()\n      , time: (stats.duration / 1000) || 0\n    }, false));\n\n    tests.forEach(test);\n    console.log(\'</testsuite>\');\n  });\n}\n\n/**\n * Inherit from `Base.prototype`.\n */\n\nfunction F(){};\nF.prototype = Base.prototype;\nXUnit.prototype = new F;\nXUnit.prototype.constructor = XUnit;\n\n\n/**\n * Output tag for the given `test.`\n */\n\nfunction test(test) {\n  var attrs = {\n      classname: test.parent.fullTitle()\n    , name: test.title\n    , time: (test.duration / 1000) || 0\n  };\n\n  if (\'failed\' == test.state) {\n    var err = test.err;\n    console.log(tag(\'testcase\', attrs, false, tag(\'failure\', {}, false, cdata(escape(err.message) + \"\\n\" + err.stack))));\n  } else if (test.pending) {\n    console.log(tag(\'testcase\', attrs, false, tag(\'skipped\', {}, true)));\n  } else {\n    console.log(tag(\'testcase\', attrs, true) );\n  }\n}\n\n/**\n * HTML tag helper.\n */\n\nfunction tag(name, attrs, close, content) {\n  var end = close ? \'/>\' : \'>\'\n    , pairs = []\n    , tag;\n\n  for (var key in attrs) {\n    pairs.push(key + \'=\"\' + escape(attrs[key]) + \'\"\');\n  }\n\n  tag = \'<\' + name + (pairs.length ? \' \' + pairs.join(\' \') : \'\') + end;\n  if (content) tag += content + \'</\' + name + end;\n  return tag;\n}\n\n/**\n * Return cdata escaped CDATA `str`.\n */\n\nfunction cdata(str) {\n  return \'<![CDATA[\' + escape(str) + \']]>\';\n}\n\n}); // module: reporters/xunit.js\n\nrequire.register(\"runnable.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar EventEmitter = require(\'browser/events\').EventEmitter\n  , debug = require(\'browser/debug\')(\'mocha:runnable\')\n  , milliseconds = require(\'./ms\');\n\n/**\n * Save timer references to avoid Sinon interfering (see GH-237).\n */\n\nvar Date = global.Date\n  , setTimeout = global.setTimeout\n  , setInterval = global.setInterval\n  , clearTimeout = global.clearTimeout\n  , clearInterval = global.clearInterval;\n\n/**\n * Object#toString().\n */\n\nvar toString = Object.prototype.toString;\n\n/**\n * Expose `Runnable`.\n */\n\nmodule.exports = Runnable;\n\n/**\n * Initialize a new `Runnable` with the given `title` and callback `fn`.\n *\n * @param {String} title\n * @param {Function} fn\n * @api private\n */\n\nfunction Runnable(title, fn) {\n  this.title = title;\n  this.fn = fn;\n  this.async = fn && fn.length;\n  this.sync = ! this.async;\n  this._timeout = 2000;\n  this._slow = 75;\n  this._enableTimeouts = true;\n  this.timedOut = false;\n  this._trace = new Error(\'done() called multiple times\')\n}\n\n/**\n * Inherit from `EventEmitter.prototype`.\n */\n\nfunction F(){};\nF.prototype = EventEmitter.prototype;\nRunnable.prototype = new F;\nRunnable.prototype.constructor = Runnable;\n\n\n/**\n * Set & get timeout `ms`.\n *\n * @param {Number|String} ms\n * @return {Runnable|Number} ms or self\n * @api private\n */\n\nRunnable.prototype.timeout = function(ms){\n  if (0 == arguments.length) return this._timeout;\n  if (ms === 0) this._enableTimeouts = false;\n  if (\'string\' == typeof ms) ms = milliseconds(ms);\n  debug(\'timeout %d\', ms);\n  this._timeout = ms;\n  if (this.timer) this.resetTimeout();\n  return this;\n};\n\n/**\n * Set & get slow `ms`.\n *\n * @param {Number|String} ms\n * @return {Runnable|Number} ms or self\n * @api private\n */\n\nRunnable.prototype.slow = function(ms){\n  if (0 === arguments.length) return this._slow;\n  if (\'string\' == typeof ms) ms = milliseconds(ms);\n  debug(\'timeout %d\', ms);\n  this._slow = ms;\n  return this;\n};\n\n/**\n * Set and & get timeout `enabled`.\n *\n * @param {Boolean} enabled\n * @return {Runnable|Boolean} enabled or self\n * @api private\n */\n\nRunnable.prototype.enableTimeouts = function(enabled){\n  if (arguments.length === 0) return this._enableTimeouts;\n  debug(\'enableTimeouts %s\', enabled);\n  this._enableTimeouts = enabled;\n  return this;\n};\n\n/**\n * Return the full title generated by recursively\n * concatenating the parent\'s full title.\n *\n * @return {String}\n * @api public\n */\n\nRunnable.prototype.fullTitle = function(){\n  return this.parent.fullTitle() + \' \' + this.title;\n};\n\n/**\n * Clear the timeout.\n *\n * @api private\n */\n\nRunnable.prototype.clearTimeout = function(){\n  clearTimeout(this.timer);\n};\n\n/**\n * Inspect the runnable void of private properties.\n *\n * @return {String}\n * @api private\n */\n\nRunnable.prototype.inspect = function(){\n  return JSON.stringify(this, function(key, val){\n    if (\'_\' == key[0]) return;\n    if (\'parent\' == key) return \'#<Suite>\';\n    if (\'ctx\' == key) return \'#<Context>\';\n    return val;\n  }, 2);\n};\n\n/**\n * Reset the timeout.\n *\n * @api private\n */\n\nRunnable.prototype.resetTimeout = function(){\n  var self = this;\n  var ms = this.timeout() || 1e9;\n\n  if (!this._enableTimeouts) return;\n  this.clearTimeout();\n  this.timer = setTimeout(function(){\n    if (!self._enableTimeouts) return;\n    self.callback(new Error(\'timeout of \' + ms + \'ms exceeded\'));\n    self.timedOut = true;\n  }, ms);\n};\n\n/**\n * Whitelist these globals for this test run\n *\n * @api private\n */\nRunnable.prototype.globals = function(arr){\n  var self = this;\n  this._allowedGlobals = arr;\n};\n\n/**\n * Run the test and invoke `fn(err)`.\n *\n * @param {Function} fn\n * @api private\n */\n\nRunnable.prototype.run = function(fn){\n  var self = this\n    , start = new Date\n    , ctx = this.ctx\n    , finished\n    , emitted;\n\n  // Some times the ctx exists but it is not runnable\n  if (ctx && ctx.runnable) ctx.runnable(this);\n\n  // called multiple times\n  function multiple(err) {\n    if (emitted) return;\n    emitted = true;\n    self.emit(\'error\', err || new Error(\'done() called multiple times; stacktrace may be inaccurate\'));\n  }\n\n  // finished\n  function done(err) {\n    var ms = self.timeout();\n    if (self.timedOut) return;\n    if (finished) return multiple(err || self._trace);\n    self.clearTimeout();\n    self.duration = new Date - start;\n    finished = true;\n    if (!err && self.duration > ms && self._enableTimeouts) err = new Error(\'timeout of \' + ms + \'ms exceeded\');\n    fn(err);\n  }\n\n  // for .resetTimeout()\n  this.callback = done;\n\n  // explicit async with `done` argument\n  if (this.async) {\n    this.resetTimeout();\n\n    try {\n      this.fn.call(ctx, function(err){\n        if (err instanceof Error || toString.call(err) === \"[object Error]\") return done(err);\n        if (null != err) {\n          if (Object.prototype.toString.call(err) === \'[object Object]\') {\n            return done(new Error(\'done() invoked with non-Error: \' + JSON.stringify(err)));\n          } else {\n            return done(new Error(\'done() invoked with non-Error: \' + err));\n          }\n        }\n        done();\n      });\n    } catch (err) {\n      done(err);\n    }\n    return;\n  }\n\n  if (this.asyncOnly) {\n    return done(new Error(\'--async-only option in use without declaring `done()`\'));\n  }\n\n  // sync or promise-returning\n  try {\n    if (this.pending) {\n      done();\n    } else {\n      callFn(this.fn);\n    }\n  } catch (err) {\n    done(err);\n  }\n\n  function callFn(fn) {\n    var result = fn.call(ctx);\n    if (result && typeof result.then === \'function\') {\n      self.resetTimeout();\n      result\n        .then(function() {\n          done()\n        },\n        function(reason) {\n          done(reason || new Error(\'Promise rejected with no or falsy reason\'))\n        });\n    } else {\n      done();\n    }\n  }\n};\n\n}); // module: runnable.js\n\nrequire.register(\"runner.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar EventEmitter = require(\'browser/events\').EventEmitter\n  , debug = require(\'browser/debug\')(\'mocha:runner\')\n  , Test = require(\'./test\')\n  , utils = require(\'./utils\')\n  , filter = utils.filter\n  , keys = utils.keys;\n\n/**\n * Non-enumerable globals.\n */\n\nvar globals = [\n  \'setTimeout\',\n  \'clearTimeout\',\n  \'setInterval\',\n  \'clearInterval\',\n  \'XMLHttpRequest\',\n  \'Date\'\n];\n\n/**\n * Expose `Runner`.\n */\n\nmodule.exports = Runner;\n\n/**\n * Initialize a `Runner` for the given `suite`.\n *\n * Events:\n *\n *   - `start`  execution started\n *   - `end`  execution complete\n *   - `suite`  (suite) test suite execution started\n *   - `suite end`  (suite) all tests (and sub-suites) have finished\n *   - `test`  (test) test execution started\n *   - `test end`  (test) test completed\n *   - `hook`  (hook) hook execution started\n *   - `hook end`  (hook) hook complete\n *   - `pass`  (test) test passed\n *   - `fail`  (test, err) test failed\n *   - `pending`  (test) test pending\n *\n * @api public\n */\n\nfunction Runner(suite) {\n  var self = this;\n  this._globals = [];\n  this._abort = false;\n  this.suite = suite;\n  this.total = suite.total();\n  this.failures = 0;\n  this.on(\'test end\', function(test){ self.checkGlobals(test); });\n  this.on(\'hook end\', function(hook){ self.checkGlobals(hook); });\n  this.grep(/.*/);\n  this.globals(this.globalProps().concat(extraGlobals()));\n}\n\n/**\n * Wrapper for setImmediate, process.nextTick, or browser polyfill.\n *\n * @param {Function} fn\n * @api private\n */\n\nRunner.immediately = global.setImmediate || process.nextTick;\n\n/**\n * Inherit from `EventEmitter.prototype`.\n */\n\nfunction F(){};\nF.prototype = EventEmitter.prototype;\nRunner.prototype = new F;\nRunner.prototype.constructor = Runner;\n\n\n/**\n * Run tests with full titles matching `re`. Updates runner.total\n * with number of tests matched.\n *\n * @param {RegExp} re\n * @param {Boolean} invert\n * @return {Runner} for chaining\n * @api public\n */\n\nRunner.prototype.grep = function(re, invert){\n  debug(\'grep %s\', re);\n  this._grep = re;\n  this._invert = invert;\n  this.total = this.grepTotal(this.suite);\n  return this;\n};\n\n/**\n * Returns the number of tests matching the grep search for the\n * given suite.\n *\n * @param {Suite} suite\n * @return {Number}\n * @api public\n */\n\nRunner.prototype.grepTotal = function(suite) {\n  var self = this;\n  var total = 0;\n\n  suite.eachTest(function(test){\n    var match = self._grep.test(test.fullTitle());\n    if (self._invert) match = !match;\n    if (match) total++;\n  });\n\n  return total;\n};\n\n/**\n * Return a list of global properties.\n *\n * @return {Array}\n * @api private\n */\n\nRunner.prototype.globalProps = function() {\n  var props = utils.keys(global);\n\n  // non-enumerables\n  for (var i = 0; i < globals.length; ++i) {\n    if (~utils.indexOf(props, globals[i])) continue;\n    props.push(globals[i]);\n  }\n\n  return props;\n};\n\n/**\n * Allow the given `arr` of globals.\n *\n * @param {Array} arr\n * @return {Runner} for chaining\n * @api public\n */\n\nRunner.prototype.globals = function(arr){\n  if (0 == arguments.length) return this._globals;\n  debug(\'globals %j\', arr);\n  this._globals = this._globals.concat(arr);\n  return this;\n};\n\n/**\n * Check for global variable leaks.\n *\n * @api private\n */\n\nRunner.prototype.checkGlobals = function(test){\n  if (this.ignoreLeaks) return;\n  var ok = this._globals;\n\n  var globals = this.globalProps();\n  var leaks;\n\n  if (test) {\n    ok = ok.concat(test._allowedGlobals || []);\n  }\n\n  if(this.prevGlobalsLength == globals.length) return;\n  this.prevGlobalsLength = globals.length;\n\n  leaks = filterLeaks(ok, globals);\n  this._globals = this._globals.concat(leaks);\n\n  if (leaks.length > 1) {\n    this.fail(test, new Error(\'global leaks detected: \' + leaks.join(\', \') + \'\'));\n  } else if (leaks.length) {\n    this.fail(test, new Error(\'global leak detected: \' + leaks[0]));\n  }\n};\n\n/**\n * Fail the given `test`.\n *\n * @param {Test} test\n * @param {Error} err\n * @api private\n */\n\nRunner.prototype.fail = function(test, err){\n  ++this.failures;\n  test.state = \'failed\';\n\n  if (\'string\' == typeof err) {\n    err = new Error(\'the string \"\' + err + \'\" was thrown, throw an Error :)\');\n  }\n\n  this.emit(\'fail\', test, err);\n};\n\n/**\n * Fail the given `hook` with `err`.\n *\n * Hook failures work in the following pattern:\n * - If bail, then exit\n * - Failed `before` hook skips all tests in a suite and subsuites,\n *   but jumps to corresponding `after` hook\n * - Failed `before each` hook skips remaining tests in a\n *   suite and jumps to corresponding `after each` hook,\n *   which is run only once\n * - Failed `after` hook does not alter\n *   execution order\n * - Failed `after each` hook skips remaining tests in a\n *   suite and subsuites, but executes other `after each`\n *   hooks\n *\n * @param {Hook} hook\n * @param {Error} err\n * @api private\n */\n\nRunner.prototype.failHook = function(hook, err){\n  this.fail(hook, err);\n  if (this.suite.bail()) {\n    this.emit(\'end\');\n  }\n};\n\n/**\n * Run hook `name` callbacks and then invoke `fn()`.\n *\n * @param {String} name\n * @param {Function} function\n * @api private\n */\n\nRunner.prototype.hook = function(name, fn){\n  var suite = this.suite\n    , hooks = suite[\'_\' + name]\n    , self = this\n    , timer;\n\n  function next(i) {\n    var hook = hooks[i];\n    if (!hook) return fn();\n    if (self.failures && suite.bail()) return fn();\n    self.currentRunnable = hook;\n\n    hook.ctx.currentTest = self.test;\n\n    self.emit(\'hook\', hook);\n\n    hook.on(\'error\', function(err){\n      self.failHook(hook, err);\n    });\n\n    hook.run(function(err){\n      hook.removeAllListeners(\'error\');\n      var testError = hook.error();\n      if (testError) self.fail(self.test, testError);\n      if (err) {\n        self.failHook(hook, err);\n\n        // stop executing hooks, notify callee of hook err\n        return fn(err);\n      }\n      self.emit(\'hook end\', hook);\n      delete hook.ctx.currentTest;\n      next(++i);\n    });\n  }\n\n  Runner.immediately(function(){\n    next(0);\n  });\n};\n\n/**\n * Run hook `name` for the given array of `suites`\n * in order, and callback `fn(err, errSuite)`.\n *\n * @param {String} name\n * @param {Array} suites\n * @param {Function} fn\n * @api private\n */\n\nRunner.prototype.hooks = function(name, suites, fn){\n  var self = this\n    , orig = this.suite;\n\n  function next(suite) {\n    self.suite = suite;\n\n    if (!suite) {\n      self.suite = orig;\n      return fn();\n    }\n\n    self.hook(name, function(err){\n      if (err) {\n        var errSuite = self.suite;\n        self.suite = orig;\n        return fn(err, errSuite);\n      }\n\n      next(suites.pop());\n    });\n  }\n\n  next(suites.pop());\n};\n\n/**\n * Run hooks from the top level down.\n *\n * @param {String} name\n * @param {Function} fn\n * @api private\n */\n\nRunner.prototype.hookUp = function(name, fn){\n  var suites = [this.suite].concat(this.parents()).reverse();\n  this.hooks(name, suites, fn);\n};\n\n/**\n * Run hooks from the bottom up.\n *\n * @param {String} name\n * @param {Function} fn\n * @api private\n */\n\nRunner.prototype.hookDown = function(name, fn){\n  var suites = [this.suite].concat(this.parents());\n  this.hooks(name, suites, fn);\n};\n\n/**\n * Return an array of parent Suites from\n * closest to furthest.\n *\n * @return {Array}\n * @api private\n */\n\nRunner.prototype.parents = function(){\n  var suite = this.suite\n    , suites = [];\n  while (suite = suite.parent) suites.push(suite);\n  return suites;\n};\n\n/**\n * Run the current test and callback `fn(err)`.\n *\n * @param {Function} fn\n * @api private\n */\n\nRunner.prototype.runTest = function(fn){\n  var test = this.test\n    , self = this;\n\n  if (this.asyncOnly) test.asyncOnly = true;\n\n  try {\n    test.on(\'error\', function(err){\n      self.fail(test, err);\n    });\n    test.run(fn);\n  } catch (err) {\n    fn(err);\n  }\n};\n\n/**\n * Run tests in the given `suite` and invoke\n * the callback `fn()` when complete.\n *\n * @param {Suite} suite\n * @param {Function} fn\n * @api private\n */\n\nRunner.prototype.runTests = function(suite, fn){\n  var self = this\n    , tests = suite.tests.slice()\n    , test;\n\n\n  function hookErr(err, errSuite, after) {\n    // before/after Each hook for errSuite failed:\n    var orig = self.suite;\n\n    // for failed \'after each\' hook start from errSuite parent,\n    // otherwise start from errSuite itself\n    self.suite = after ? errSuite.parent : errSuite;\n\n    if (self.suite) {\n      // call hookUp afterEach\n      self.hookUp(\'afterEach\', function(err2, errSuite2) {\n        self.suite = orig;\n        // some hooks may fail even now\n        if (err2) return hookErr(err2, errSuite2, true);\n        // report error suite\n        fn(errSuite);\n      });\n    } else {\n      // there is no need calling other \'after each\' hooks\n      self.suite = orig;\n      fn(errSuite);\n    }\n  }\n\n  function next(err, errSuite) {\n    // if we bail after first err\n    if (self.failures && suite._bail) return fn();\n\n    if (self._abort) return fn();\n\n    if (err) return hookErr(err, errSuite, true);\n\n    // next test\n    test = tests.shift();\n\n    // all done\n    if (!test) return fn();\n\n    // grep\n    var match = self._grep.test(test.fullTitle());\n    if (self._invert) match = !match;\n    if (!match) return next();\n\n    // pending\n    if (test.pending) {\n      self.emit(\'pending\', test);\n      self.emit(\'test end\', test);\n      return next();\n    }\n\n    // execute test and hook(s)\n    self.emit(\'test\', self.test = test);\n    self.hookDown(\'beforeEach\', function(err, errSuite){\n\n      if (err) return hookErr(err, errSuite, false);\n\n      self.currentRunnable = self.test;\n      self.runTest(function(err){\n        test = self.test;\n\n        if (err) {\n          self.fail(test, err);\n          self.emit(\'test end\', test);\n          return self.hookUp(\'afterEach\', next);\n        }\n\n        test.state = \'passed\';\n        self.emit(\'pass\', test);\n        self.emit(\'test end\', test);\n        self.hookUp(\'afterEach\', next);\n      });\n    });\n  }\n\n  this.next = next;\n  next();\n};\n\n/**\n * Run the given `suite` and invoke the\n * callback `fn()` when complete.\n *\n * @param {Suite} suite\n * @param {Function} fn\n * @api private\n */\n\nRunner.prototype.runSuite = function(suite, fn){\n  var total = this.grepTotal(suite)\n    , self = this\n    , i = 0;\n\n  debug(\'run suite %s\', suite.fullTitle());\n\n  if (!total) return fn();\n\n  this.emit(\'suite\', this.suite = suite);\n\n  function next(errSuite) {\n    if (errSuite) {\n      // current suite failed on a hook from errSuite\n      if (errSuite == suite) {\n        // if errSuite is current suite\n        // continue to the next sibling suite\n        return done();\n      } else {\n        // errSuite is among the parents of current suite\n        // stop execution of errSuite and all sub-suites\n        return done(errSuite);\n      }\n    }\n\n    if (self._abort) return done();\n\n    var curr = suite.suites[i++];\n    if (!curr) return done();\n    self.runSuite(curr, next);\n  }\n\n  function done(errSuite) {\n    self.suite = suite;\n    self.hook(\'afterAll\', function(){\n      self.emit(\'suite end\', suite);\n      fn(errSuite);\n    });\n  }\n\n  this.hook(\'beforeAll\', function(err){\n    if (err) return done();\n    self.runTests(suite, next);\n  });\n};\n\n/**\n * Handle uncaught exceptions.\n *\n * @param {Error} err\n * @api private\n */\n\nRunner.prototype.uncaught = function(err){\n  if (err) {\n    debug(\'uncaught exception %s\', err !== function () {\n      return this;\n    }.call(err) ? err : ( err.message || err ));\n  } else {\n    debug(\'uncaught undefined exception\');\n    err = new Error(\'Caught undefined error, did you throw without specifying what?\');\n  }\n  err.uncaught = true;\n\n  var runnable = this.currentRunnable;\n  if (!runnable) return;\n\n  var wasAlreadyDone = runnable.state;\n  this.fail(runnable, err);\n\n  runnable.clearTimeout();\n\n  if (wasAlreadyDone) return;\n\n  // recover from test\n  if (\'test\' == runnable.type) {\n    this.emit(\'test end\', runnable);\n    this.hookUp(\'afterEach\', this.next);\n    return;\n  }\n\n  // bail on hooks\n  this.emit(\'end\');\n};\n\n/**\n * Run the root suite and invoke `fn(failures)`\n * on completion.\n *\n * @param {Function} fn\n * @return {Runner} for chaining\n * @api public\n */\n\nRunner.prototype.run = function(fn){\n  var self = this\n    , fn = fn || function(){};\n\n  function uncaught(err){\n    self.uncaught(err);\n  }\n\n  debug(\'start\');\n\n  // callback\n  this.on(\'end\', function(){\n    debug(\'end\');\n    process.removeListener(\'uncaughtException\', uncaught);\n    fn(self.failures);\n  });\n\n  // run suites\n  this.emit(\'start\');\n  this.runSuite(this.suite, function(){\n    debug(\'finished running\');\n    self.emit(\'end\');\n  });\n\n  // uncaught exception\n  process.on(\'uncaughtException\', uncaught);\n\n  return this;\n};\n\n/**\n * Cleanly abort execution\n *\n * @return {Runner} for chaining\n * @api public\n */\nRunner.prototype.abort = function(){\n  debug(\'aborting\');\n  this._abort = true;\n};\n\n/**\n * Filter leaks with the given globals flagged as `ok`.\n *\n * @param {Array} ok\n * @param {Array} globals\n * @return {Array}\n * @api private\n */\n\nfunction filterLeaks(ok, globals) {\n  return filter(globals, function(key){\n    // Firefox and Chrome exposes iframes as index inside the window object\n    if (/^d+/.test(key)) return false;\n\n    // in firefox\n    // if runner runs in an iframe, this iframe\'s window.getInterface method not init at first\n    // it is assigned in some seconds\n    if (global.navigator && /^getInterface/.test(key)) return false;\n\n    // an iframe could be approached by window[iframeIndex]\n    // in ie6,7,8 and opera, iframeIndex is enumerable, this could cause leak\n    if (global.navigator && /^\\d+/.test(key)) return false;\n\n    // Opera and IE expose global variables for HTML element IDs (issue #243)\n    if (/^mocha-/.test(key)) return false;\n\n    var matched = filter(ok, function(ok){\n      if (~ok.indexOf(\'*\')) return 0 == key.indexOf(ok.split(\'*\')[0]);\n      return key == ok;\n    });\n    return matched.length == 0 && (!global.navigator || \'onerror\' !== key);\n  });\n}\n\n/**\n * Array of globals dependent on the environment.\n *\n * @return {Array}\n * @api private\n */\n\n function extraGlobals() {\n  if (typeof(process) === \'object\' &&\n      typeof(process.version) === \'string\') {\n\n    var nodeVersion = process.version.split(\'.\').reduce(function(a, v) {\n      return a << 8 | v;\n    });\n\n    // \'errno\' was renamed to process._errno in v0.9.11.\n\n    if (nodeVersion < 0x00090B) {\n      return [\'errno\'];\n    }\n  }\n\n  return [];\n }\n\n}); // module: runner.js\n\nrequire.register(\"suite.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar EventEmitter = require(\'browser/events\').EventEmitter\n  , debug = require(\'browser/debug\')(\'mocha:suite\')\n  , milliseconds = require(\'./ms\')\n  , utils = require(\'./utils\')\n  , Hook = require(\'./hook\');\n\n/**\n * Expose `Suite`.\n */\n\nexports = module.exports = Suite;\n\n/**\n * Create a new `Suite` with the given `title`\n * and parent `Suite`. When a suite with the\n * same title is already present, that suite\n * is returned to provide nicer reporter\n * and more flexible meta-testing.\n *\n * @param {Suite} parent\n * @param {String} title\n * @return {Suite}\n * @api public\n */\n\nexports.create = function(parent, title){\n  var suite = new Suite(title, parent.ctx);\n  suite.parent = parent;\n  if (parent.pending) suite.pending = true;\n  title = suite.fullTitle();\n  parent.addSuite(suite);\n  return suite;\n};\n\n/**\n * Initialize a new `Suite` with the given\n * `title` and `ctx`.\n *\n * @param {String} title\n * @param {Context} ctx\n * @api private\n */\n\nfunction Suite(title, parentContext) {\n  this.title = title;\n  var context = function() {};\n  context.prototype = parentContext;\n  this.ctx = new context();\n  this.suites = [];\n  this.tests = [];\n  this.pending = false;\n  this._beforeEach = [];\n  this._beforeAll = [];\n  this._afterEach = [];\n  this._afterAll = [];\n  this.root = !title;\n  this._timeout = 2000;\n  this._enableTimeouts = true;\n  this._slow = 75;\n  this._bail = false;\n}\n\n/**\n * Inherit from `EventEmitter.prototype`.\n */\n\nfunction F(){};\nF.prototype = EventEmitter.prototype;\nSuite.prototype = new F;\nSuite.prototype.constructor = Suite;\n\n\n/**\n * Return a clone of this `Suite`.\n *\n * @return {Suite}\n * @api private\n */\n\nSuite.prototype.clone = function(){\n  var suite = new Suite(this.title);\n  debug(\'clone\');\n  suite.ctx = this.ctx;\n  suite.timeout(this.timeout());\n  suite.enableTimeouts(this.enableTimeouts());\n  suite.slow(this.slow());\n  suite.bail(this.bail());\n  return suite;\n};\n\n/**\n * Set timeout `ms` or short-hand such as \"2s\".\n *\n * @param {Number|String} ms\n * @return {Suite|Number} for chaining\n * @api private\n */\n\nSuite.prototype.timeout = function(ms){\n  if (0 == arguments.length) return this._timeout;\n  if (ms === 0) this._enableTimeouts = false;\n  if (\'string\' == typeof ms) ms = milliseconds(ms);\n  debug(\'timeout %d\', ms);\n  this._timeout = parseInt(ms, 10);\n  return this;\n};\n\n/**\n  * Set timeout `enabled`.\n  *\n  * @param {Boolean} enabled\n  * @return {Suite|Boolean} self or enabled\n  * @api private\n  */\n\nSuite.prototype.enableTimeouts = function(enabled){\n  if (arguments.length === 0) return this._enableTimeouts;\n  debug(\'enableTimeouts %s\', enabled);\n  this._enableTimeouts = enabled;\n  return this;\n};\n\n/**\n * Set slow `ms` or short-hand such as \"2s\".\n *\n * @param {Number|String} ms\n * @return {Suite|Number} for chaining\n * @api private\n */\n\nSuite.prototype.slow = function(ms){\n  if (0 === arguments.length) return this._slow;\n  if (\'string\' == typeof ms) ms = milliseconds(ms);\n  debug(\'slow %d\', ms);\n  this._slow = ms;\n  return this;\n};\n\n/**\n * Sets whether to bail after first error.\n *\n * @parma {Boolean} bail\n * @return {Suite|Number} for chaining\n * @api private\n */\n\nSuite.prototype.bail = function(bail){\n  if (0 == arguments.length) return this._bail;\n  debug(\'bail %s\', bail);\n  this._bail = bail;\n  return this;\n};\n\n/**\n * Run `fn(test[, done])` before running tests.\n *\n * @param {Function} fn\n * @return {Suite} for chaining\n * @api private\n */\n\nSuite.prototype.beforeAll = function(title, fn){\n  if (this.pending) return this;\n  if (\'function\' === typeof title) {\n    fn = title;\n    title = fn.name;\n  }\n  title = \'\"before all\" hook\' + (title ? \': \' + title : \'\');\n\n  var hook = new Hook(title, fn);\n  hook.parent = this;\n  hook.timeout(this.timeout());\n  hook.enableTimeouts(this.enableTimeouts());\n  hook.slow(this.slow());\n  hook.ctx = this.ctx;\n  this._beforeAll.push(hook);\n  this.emit(\'beforeAll\', hook);\n  return this;\n};\n\n/**\n * Run `fn(test[, done])` after running tests.\n *\n * @param {Function} fn\n * @return {Suite} for chaining\n * @api private\n */\n\nSuite.prototype.afterAll = function(title, fn){\n  if (this.pending) return this;\n  if (\'function\' === typeof title) {\n    fn = title;\n    title = fn.name;\n  }\n  title = \'\"after all\" hook\' + (title ? \': \' + title : \'\');\n\n  var hook = new Hook(title, fn);\n  hook.parent = this;\n  hook.timeout(this.timeout());\n  hook.enableTimeouts(this.enableTimeouts());\n  hook.slow(this.slow());\n  hook.ctx = this.ctx;\n  this._afterAll.push(hook);\n  this.emit(\'afterAll\', hook);\n  return this;\n};\n\n/**\n * Run `fn(test[, done])` before each test case.\n *\n * @param {Function} fn\n * @return {Suite} for chaining\n * @api private\n */\n\nSuite.prototype.beforeEach = function(title, fn){\n  if (this.pending) return this;\n  if (\'function\' === typeof title) {\n    fn = title;\n    title = fn.name;\n  }\n  title = \'\"before each\" hook\' + (title ? \': \' + title : \'\');\n\n  var hook = new Hook(title, fn);\n  hook.parent = this;\n  hook.timeout(this.timeout());\n  hook.enableTimeouts(this.enableTimeouts());\n  hook.slow(this.slow());\n  hook.ctx = this.ctx;\n  this._beforeEach.push(hook);\n  this.emit(\'beforeEach\', hook);\n  return this;\n};\n\n/**\n * Run `fn(test[, done])` after each test case.\n *\n * @param {Function} fn\n * @return {Suite} for chaining\n * @api private\n */\n\nSuite.prototype.afterEach = function(title, fn){\n  if (this.pending) return this;\n  if (\'function\' === typeof title) {\n    fn = title;\n    title = fn.name;\n  }\n  title = \'\"after each\" hook\' + (title ? \': \' + title : \'\');\n\n  var hook = new Hook(title, fn);\n  hook.parent = this;\n  hook.timeout(this.timeout());\n  hook.enableTimeouts(this.enableTimeouts());\n  hook.slow(this.slow());\n  hook.ctx = this.ctx;\n  this._afterEach.push(hook);\n  this.emit(\'afterEach\', hook);\n  return this;\n};\n\n/**\n * Add a test `suite`.\n *\n * @param {Suite} suite\n * @return {Suite} for chaining\n * @api private\n */\n\nSuite.prototype.addSuite = function(suite){\n  suite.parent = this;\n  suite.timeout(this.timeout());\n  suite.enableTimeouts(this.enableTimeouts());\n  suite.slow(this.slow());\n  suite.bail(this.bail());\n  this.suites.push(suite);\n  this.emit(\'suite\', suite);\n  return this;\n};\n\n/**\n * Add a `test` to this suite.\n *\n * @param {Test} test\n * @return {Suite} for chaining\n * @api private\n */\n\nSuite.prototype.addTest = function(test){\n  test.parent = this;\n  test.timeout(this.timeout());\n  test.enableTimeouts(this.enableTimeouts());\n  test.slow(this.slow());\n  test.ctx = this.ctx;\n  this.tests.push(test);\n  this.emit(\'test\', test);\n  return this;\n};\n\n/**\n * Return the full title generated by recursively\n * concatenating the parent\'s full title.\n *\n * @return {String}\n * @api public\n */\n\nSuite.prototype.fullTitle = function(){\n  if (this.parent) {\n    var full = this.parent.fullTitle();\n    if (full) return full + \' \' + this.title;\n  }\n  return this.title;\n};\n\n/**\n * Return the total number of tests.\n *\n * @return {Number}\n * @api public\n */\n\nSuite.prototype.total = function(){\n  return utils.reduce(this.suites, function(sum, suite){\n    return sum + suite.total();\n  }, 0) + this.tests.length;\n};\n\n/**\n * Iterates through each suite recursively to find\n * all tests. Applies a function in the format\n * `fn(test)`.\n *\n * @param {Function} fn\n * @return {Suite}\n * @api private\n */\n\nSuite.prototype.eachTest = function(fn){\n  utils.forEach(this.tests, fn);\n  utils.forEach(this.suites, function(suite){\n    suite.eachTest(fn);\n  });\n  return this;\n};\n\n}); // module: suite.js\n\nrequire.register(\"test.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar Runnable = require(\'./runnable\');\n\n/**\n * Expose `Test`.\n */\n\nmodule.exports = Test;\n\n/**\n * Initialize a new `Test` with the given `title` and callback `fn`.\n *\n * @param {String} title\n * @param {Function} fn\n * @api private\n */\n\nfunction Test(title, fn) {\n  Runnable.call(this, title, fn);\n  this.pending = !fn;\n  this.type = \'test\';\n}\n\n/**\n * Inherit from `Runnable.prototype`.\n */\n\nfunction F(){};\nF.prototype = Runnable.prototype;\nTest.prototype = new F;\nTest.prototype.constructor = Test;\n\n\n}); // module: test.js\n\nrequire.register(\"utils.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar fs = require(\'browser/fs\')\n  , path = require(\'browser/path\')\n  , basename = path.basename\n  , exists = fs.existsSync || path.existsSync\n  , glob = require(\'browser/glob\')\n  , join = path.join\n  , debug = require(\'browser/debug\')(\'mocha:watch\');\n\n/**\n * Ignored directories.\n */\n\nvar ignore = [\'node_modules\', \'.git\'];\n\n/**\n * Escape special characters in the given string of html.\n *\n * @param  {String} html\n * @return {String}\n * @api private\n */\n\nexports.escape = function(html){\n  return String(html)\n    .replace(/&/g, \'&amp;\')\n    .replace(/\"/g, \'&quot;\')\n    .replace(/</g, \'&lt;\')\n    .replace(/>/g, \'&gt;\');\n};\n\n/**\n * Array#forEach (<=IE8)\n *\n * @param {Array} array\n * @param {Function} fn\n * @param {Object} scope\n * @api private\n */\n\nexports.forEach = function(arr, fn, scope){\n  for (var i = 0, l = arr.length; i < l; i++)\n    fn.call(scope, arr[i], i);\n};\n\n/**\n * Array#map (<=IE8)\n *\n * @param {Array} array\n * @param {Function} fn\n * @param {Object} scope\n * @api private\n */\n\nexports.map = function(arr, fn, scope){\n  var result = [];\n  for (var i = 0, l = arr.length; i < l; i++)\n    result.push(fn.call(scope, arr[i], i));\n  return result;\n};\n\n/**\n * Array#indexOf (<=IE8)\n *\n * @parma {Array} arr\n * @param {Object} obj to find index of\n * @param {Number} start\n * @api private\n */\n\nexports.indexOf = function(arr, obj, start){\n  for (var i = start || 0, l = arr.length; i < l; i++) {\n    if (arr[i] === obj)\n      return i;\n  }\n  return -1;\n};\n\n/**\n * Array#reduce (<=IE8)\n *\n * @param {Array} array\n * @param {Function} fn\n * @param {Object} initial value\n * @api private\n */\n\nexports.reduce = function(arr, fn, val){\n  var rval = val;\n\n  for (var i = 0, l = arr.length; i < l; i++) {\n    rval = fn(rval, arr[i], i, arr);\n  }\n\n  return rval;\n};\n\n/**\n * Array#filter (<=IE8)\n *\n * @param {Array} array\n * @param {Function} fn\n * @api private\n */\n\nexports.filter = function(arr, fn){\n  var ret = [];\n\n  for (var i = 0, l = arr.length; i < l; i++) {\n    var val = arr[i];\n    if (fn(val, i, arr)) ret.push(val);\n  }\n\n  return ret;\n};\n\n/**\n * Object.keys (<=IE8)\n *\n * @param {Object} obj\n * @return {Array} keys\n * @api private\n */\n\nexports.keys = Object.keys || function(obj) {\n  var keys = []\n    , has = Object.prototype.hasOwnProperty // for `window` on <=IE8\n\n  for (var key in obj) {\n    if (has.call(obj, key)) {\n      keys.push(key);\n    }\n  }\n\n  return keys;\n};\n\n/**\n * Watch the given `files` for changes\n * and invoke `fn(file)` on modification.\n *\n * @param {Array} files\n * @param {Function} fn\n * @api private\n */\n\nexports.watch = function(files, fn){\n  var options = { interval: 100 };\n  files.forEach(function(file){\n    debug(\'file %s\', file);\n    fs.watchFile(file, options, function(curr, prev){\n      if (prev.mtime < curr.mtime) fn(file);\n    });\n  });\n};\n\n/**\n * Ignored files.\n */\n\nfunction ignored(path){\n  return !~ignore.indexOf(path);\n}\n\n/**\n * Lookup files in the given `dir`.\n *\n * @return {Array}\n * @api private\n */\n\nexports.files = function(dir, ext, ret){\n  ret = ret || [];\n  ext = ext || [\'js\'];\n\n  var re = new RegExp(\'\\\\.(\' + ext.join(\'|\') + \')$\');\n\n  fs.readdirSync(dir)\n  .filter(ignored)\n  .forEach(function(path){\n    path = join(dir, path);\n    if (fs.statSync(path).isDirectory()) {\n      exports.files(path, ext, ret);\n    } else if (path.match(re)) {\n      ret.push(path);\n    }\n  });\n\n  return ret;\n};\n\n/**\n * Compute a slug from the given `str`.\n *\n * @param {String} str\n * @return {String}\n * @api private\n */\n\nexports.slug = function(str){\n  return str\n    .toLowerCase()\n    .replace(/ +/g, \'-\')\n    .replace(/[^-\\w]/g, \'\');\n};\n\n/**\n * Strip the function definition from `str`,\n * and re-indent for pre whitespace.\n */\n\nexports.clean = function(str) {\n  str = str\n    .replace(/\\r\\n?|[\\n\\u2028\\u2029]/g, \"\\n\").replace(/^\\uFEFF/, \'\')\n    .replace(/^function *\\(.*\\) *{|\\(.*\\) *=> *{?/, \'\')\n    .replace(/\\s+\\}$/, \'\');\n\n  var spaces = str.match(/^\\n?( *)/)[1].length\n    , tabs = str.match(/^\\n?(\\t*)/)[1].length\n    , re = new RegExp(\'^\\n?\' + (tabs ? \'\\t\' : \' \') + \'{\' + (tabs ? tabs : spaces) + \'}\', \'gm\');\n\n  str = str.replace(re, \'\');\n\n  return exports.trim(str);\n};\n\n/**\n * Trim the given `str`.\n *\n * @param {String} str\n * @return {String}\n * @api private\n */\n\nexports.trim = function(str){\n  return str.replace(/^\\s+|\\s+$/g, \'\');\n};\n\n/**\n * Parse the given `qs`.\n *\n * @param {String} qs\n * @return {Object}\n * @api private\n */\n\nexports.parseQuery = function(qs){\n  return exports.reduce(qs.replace(\'?\', \'\').split(\'&\'), function(obj, pair){\n    var i = pair.indexOf(\'=\')\n      , key = pair.slice(0, i)\n      , val = pair.slice(++i);\n\n    obj[key] = decodeURIComponent(val);\n    return obj;\n  }, {});\n};\n\n/**\n * Highlight the given string of `js`.\n *\n * @param {String} js\n * @return {String}\n * @api private\n */\n\nfunction highlight(js) {\n  return js\n    .replace(/</g, \'&lt;\')\n    .replace(/>/g, \'&gt;\')\n    .replace(/\\/\\/(.*)/gm, \'<span class=\"comment\">//$1</span>\')\n    .replace(/(\'.*?\')/gm, \'<span class=\"string\">$1</span>\')\n    .replace(/(\\d+\\.\\d+)/gm, \'<span class=\"number\">$1</span>\')\n    .replace(/(\\d+)/gm, \'<span class=\"number\">$1</span>\')\n    .replace(/\\bnew[ \\t]+(\\w+)/gm, \'<span class=\"keyword\">new</span> <span class=\"init\">$1</span>\')\n    .replace(/\\b(function|new|throw|return|var|if|else)\\b/gm, \'<span class=\"keyword\">$1</span>\')\n}\n\n/**\n * Highlight the contents of tag `name`.\n *\n * @param {String} name\n * @api private\n */\n\nexports.highlightTags = function(name) {\n  var code = document.getElementById(\'mocha\').getElementsByTagName(name);\n  for (var i = 0, len = code.length; i < len; ++i) {\n    code[i].innerHTML = highlight(code[i].innerHTML);\n  }\n};\n\n\n/**\n * Stringify `obj`.\n *\n * @param {Object} obj\n * @return {String}\n * @api private\n */\n\nexports.stringify = function(obj) {\n  if (obj instanceof RegExp) return obj.toString();\n  return JSON.stringify(exports.canonicalize(obj), null, 2).replace(/,(\\n|$)/g, \'$1\');\n};\n\n/**\n * Return a new object that has the keys in sorted order.\n * @param {Object} obj\n * @param {Array} [stack]\n * @return {Object}\n * @api private\n */\n\nexports.canonicalize = function(obj, stack) {\n  stack = stack || [];\n\n  if (exports.indexOf(stack, obj) !== -1) return \'[Circular]\';\n\n  var canonicalizedObj;\n\n  if ({}.toString.call(obj) === \'[object Array]\') {\n    stack.push(obj);\n    canonicalizedObj = exports.map(obj, function (item) {\n      return exports.canonicalize(item, stack);\n    });\n    stack.pop();\n  } else if (typeof obj === \'object\' && obj !== null) {\n    stack.push(obj);\n    canonicalizedObj = {};\n    exports.forEach(exports.keys(obj).sort(), function (key) {\n      canonicalizedObj[key] = exports.canonicalize(obj[key], stack);\n    });\n    stack.pop();\n  } else {\n    canonicalizedObj = obj;\n  }\n\n  return canonicalizedObj;\n };\n\n/**\n * Lookup file names at the given `path`.\n */\nexports.lookupFiles = function lookupFiles(path, extensions, recursive) {\n  var files = [];\n  var re = new RegExp(\'\\\\.(\' + extensions.join(\'|\') + \')$\');\n\n  if (!exists(path)) {\n    if (exists(path + \'.js\')) {\n      path += \'.js\';\n    } else {\n      files = glob.sync(path);\n      if (!files.length) throw new Error(\"cannot resolve path (or pattern) \'\" + path + \"\'\");\n      return files;\n    }\n  }\n\n  try {\n    var stat = fs.statSync(path);\n    if (stat.isFile()) return path;\n  }\n  catch (ignored) {\n    return;\n  }\n\n  fs.readdirSync(path).forEach(function(file){\n    file = join(path, file);\n    try {\n      var stat = fs.statSync(file);\n      if (stat.isDirectory()) {\n        if (recursive) {\n          files = files.concat(lookupFiles(file, extensions, recursive));\n        }\n        return;\n      }\n    }\n    catch (ignored) {\n      return;\n    }\n    if (!stat.isFile() || !re.test(file) || basename(file)[0] === \'.\') return;\n    files.push(file);\n  });\n\n  return files;\n};\n\n}); // module: utils.js\n// The global object is \"self\" in Web Workers.\nvar global = (function() { return this; })();\n\n/**\n * Save timer references to avoid Sinon interfering (see GH-237).\n */\n\nvar Date = global.Date;\nvar setTimeout = global.setTimeout;\nvar setInterval = global.setInterval;\nvar clearTimeout = global.clearTimeout;\nvar clearInterval = global.clearInterval;\n\n/**\n * Node shims.\n *\n * These are meant only to allow\n * mocha.js to run untouched, not\n * to allow running node code in\n * the browser.\n */\n\nvar process = {};\nprocess.exit = function(status){};\nprocess.stdout = {};\n\nvar uncaughtExceptionHandlers = [];\n\nvar originalOnerrorHandler = global.onerror;\n\n/**\n * Remove uncaughtException listener.\n * Revert to original onerror handler if previously defined.\n */\n\nprocess.removeListener = function(e, fn){\n  if (\'uncaughtException\' == e) {\n    if (originalOnerrorHandler) {\n      global.onerror = originalOnerrorHandler;\n    } else {\n      global.onerror = function() {};\n    }\n    var i = Mocha.utils.indexOf(uncaughtExceptionHandlers, fn);\n    if (i != -1) { uncaughtExceptionHandlers.splice(i, 1); }\n  }\n};\n\n/**\n * Implements uncaughtException listener.\n */\n\nprocess.on = function(e, fn){\n  if (\'uncaughtException\' == e) {\n    global.onerror = function(err, url, line){\n      fn(new Error(err + \' (\' + url + \':\' + line + \')\'));\n      return true;\n    };\n    uncaughtExceptionHandlers.push(fn);\n  }\n};\n\n/**\n * Expose mocha.\n */\n\nvar Mocha = global.Mocha = require(\'mocha\'),\n    mocha = global.mocha = new Mocha({ reporter: \'html\' });\n\n// The BDD UI is registered by default, but no UI will be functional in the\n// browser without an explicit call to the overridden `mocha.ui` (see below).\n// Ensure that this default UI does not expose its methods to the global scope.\nmocha.suite.removeAllListeners(\'pre-require\');\n\nvar immediateQueue = []\n  , immediateTimeout;\n\nfunction timeslice() {\n  var immediateStart = new Date().getTime();\n  while (immediateQueue.length && (new Date().getTime() - immediateStart) < 100) {\n    immediateQueue.shift()();\n  }\n  if (immediateQueue.length) {\n    immediateTimeout = setTimeout(timeslice, 0);\n  } else {\n    immediateTimeout = null;\n  }\n}\n\n/**\n * High-performance override of Runner.immediately.\n */\n\nMocha.Runner.immediately = function(callback) {\n  immediateQueue.push(callback);\n  if (!immediateTimeout) {\n    immediateTimeout = setTimeout(timeslice, 0);\n  }\n};\n\n/**\n * Function to allow assertion libraries to throw errors directly into mocha.\n * This is useful when running tests in a browser because window.onerror will\n * only receive the \'message\' attribute of the Error.\n */\nmocha.throwError = function(err) {\n  Mocha.utils.forEach(uncaughtExceptionHandlers, function (fn) {\n    fn(err);\n  });\n  throw err;\n};\n\n/**\n * Override ui to ensure that the ui functions are initialized.\n * Normally this would happen in Mocha.prototype.loadFiles.\n */\n\nmocha.ui = function(ui){\n  Mocha.prototype.ui.call(this, ui);\n  this.suite.emit(\'pre-require\', global, null, this);\n  return this;\n};\n\n/**\n * Setup mocha with the given setting options.\n */\n\nmocha.setup = function(opts){\n  if (\'string\' == typeof opts) opts = { ui: opts };\n  for (var opt in opts) this[opt](opts[opt]);\n  return this;\n};\n\n/**\n * Run mocha, returning the Runner.\n */\n\nmocha.run = function(fn){\n  var options = mocha.options;\n  mocha.globals(\'location\');\n\n  var query = Mocha.utils.parseQuery(global.location.search || \'\');\n  if (query.grep) mocha.grep(query.grep);\n  if (query.invert) mocha.invert();\n\n  return Mocha.prototype.run.call(mocha, function(err){\n    // The DOM Document is not available in Web Workers.\n    var document = global.document;\n    if (document && document.getElementById(\'mocha\') && options.noHighlighting !== true) {\n      Mocha.utils.highlightTags(\'code\');\n    }\n    if (fn) fn(err);\n  });\n};\n\n/**\n * Expose the process shim.\n */\n\nMocha.process = process;\n})();\n',{"address":"mocha","metadata":{"exports":"mocha","deps":[],"format":"global"}});
/*bower_components/steal/css*/
define('bower_components/steal/css', function(require, exports, module) {
if( steal.config('env') === 'production' ) {
	exports.fetch = function(load) {
		// return a thenable for fetching (as per specification)
		// alternatively return new Promise(function(resolve, reject) { ... })
		var cssFile = load.address;

		var link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = cssFile;

		document.head.appendChild(link);
		return "";
	};
} else {
	exports.instantiate = function(load) {
		load.metadata.deps = [];
		load.metadata.execute = function(){
			if(load.source) {
				var head = document.head || document.getElementsByTagName('head')[0],
					style = document.createElement('style'),
					source = load.source+"/*# sourceURL="+load.address+" */";

				// make source load relative to the current page
				source = source.replace(/url\(['"]?([^'"\)]*)['"]?\)/g, function( whole, part ) {
					return "url(" + steal.joinURIs( load.address, part) + ")";
				});
				style.type = 'text/css';

				if (style.styleSheet){
					style.styleSheet.cssText = source;
				} else {
					style.appendChild(document.createTextNode(source));
				}
				head.appendChild(style);
			}

			return System.newModule({});
		};
		load.metadata.format = "css";
	};
	
}

exports.buildType = "css";
exports.includeInBuild = true;

});
/*bower_components/component-utils/test-helper*/
define('bower_components/component-utils/test-helper', [
    'mocha',
    'bower_components/mocha/mocha.css!'
], function ($__0, $__2) {
    'use strict';
    if (!$__0 || !$__0.__esModule)
        $__0 = { default: $__0 };
    if (!$__2 || !$__2.__esModule)
        $__2 = { default: $__2 };
    var mocha = $__0.default;
    $__2;
    mocha.setup('bdd');
    var $__default = mocha;
    return {
        get default() {
            return $__default;
        },
        __esModule: true
    };
});
/*can/map/define/define*/
define('can/map/define/define', [
    'can/util/util',
    'can/observe/observe'
], function (can) {
    can.Map.helpers.define = function (Map) {
        var define = Map.prototype.define;
        Map.defaultGenerators = {};
        for (var prop in define) {
            if ('value' in define[prop]) {
                if (typeof define[prop].value === 'function') {
                    Map.defaultGenerators[prop] = define[prop].value;
                } else {
                    Map.defaults[prop] = define[prop].value;
                }
            }
            if (typeof define[prop].Value === 'function') {
                (function (Constructor) {
                    Map.defaultGenerators[prop] = function () {
                        return new Constructor();
                    };
                }(define[prop].Value));
            }
        }
    };
    var oldSetupDefaults = can.Map.prototype._setupDefaults;
    can.Map.prototype._setupDefaults = function (obj) {
        var defaults = oldSetupDefaults.call(this), propsCommittedToAttr = {}, Map = this.constructor, originalGet = this._get;
        this._get = function (originalProp) {
            prop = originalProp.indexOf('.') !== -1 ? originalProp.substr(0, originalProp.indexOf('.')) : prop;
            if (prop in defaults && !(prop in propsCommittedToAttr)) {
                this.attr(prop, defaults[prop]);
                propsCommittedToAttr[prop] = true;
            }
            return originalGet.apply(this, arguments);
        };
        for (var prop in Map.defaultGenerators) {
            if (!obj || !(prop in obj)) {
                defaults[prop] = Map.defaultGenerators[prop].call(this);
            }
        }
        this._get = originalGet;
        return defaults;
    };
    var proto = can.Map.prototype, oldSet = proto.__set;
    proto.__set = function (prop, value, current, success, error) {
        var errorCallback = function (errors) {
                var stub = error && error.call(self, errors);
                if (stub !== false) {
                    can.trigger(self, 'error', [
                        prop,
                        errors
                    ], true);
                }
                return false;
            }, self = this, define = this.define && this.define[prop], setter = define && define.set, getter = define && define.get;
        if (setter) {
            can.batch.start();
            var setterCalled = false, setValue = setter.call(this, value, function (value) {
                    oldSet.call(self, prop, value, current, success, errorCallback);
                    setterCalled = true;
                }, errorCallback);
            if (getter) {
                can.batch.stop();
                return;
            } else if (setValue === undefined && !setterCalled && setter.length >= 2) {
                can.batch.stop();
                return;
            } else {
                if (!setterCalled) {
                    oldSet.call(self, prop, setter.length === 0 && setValue === undefined ? value : setValue, current, success, errorCallback);
                }
                can.batch.stop();
                return this;
            }
        } else {
            oldSet.call(self, prop, value, current, success, errorCallback);
        }
        return this;
    };
    var converters = {
            'date': function (str) {
                var type = typeof str;
                if (type === 'string') {
                    str = Date.parse(str);
                    return isNaN(str) ? null : new Date(str);
                } else if (type === 'number') {
                    return new Date(str);
                } else {
                    return str;
                }
            },
            'number': function (val) {
                return +val;
            },
            'boolean': function (val) {
                if (val === 'false' || val === '0' || !val) {
                    return false;
                }
                return true;
            },
            '*': function (val) {
                return val;
            },
            'string': function (val) {
                return '' + val;
            }
        };
    var oldType = proto.__type;
    proto.__type = function (value, prop) {
        var def = this.define && this.define[prop], type = def && def.type, Type = def && def.Type, newValue = value;
        if (typeof type === 'string') {
            type = converters[type];
        }
        if (type || Type) {
            if (type) {
                newValue = type.call(this, newValue, prop);
            }
            if (Type && !(newValue instanceof Type)) {
                newValue = new Type(newValue);
            }
            return newValue;
        }
        return oldType.call(this, newValue, prop);
    };
    var oldRemove = proto._remove;
    proto._remove = function (prop, current) {
        var remove = this.define && this.define[prop] && this.define[prop].remove, res;
        if (remove) {
            can.batch.start();
            res = remove.call(this, current);
            if (res === false) {
                can.batch.stop();
                return;
            } else {
                res = oldRemove.call(this, prop, current);
                can.batch.stop();
                return res;
            }
        }
        return oldRemove.call(this, prop, current);
    };
    var oldSetupComputes = proto._setupComputes;
    proto._setupComputes = function (defaultsValues) {
        oldSetupComputes.apply(this, arguments);
        for (var attr in this.define) {
            var def = this.define[attr], get = def.get;
            if (get) {
                this[attr] = can.compute.async(defaultsValues[attr], get, this);
                this._computedBindings[attr] = { count: 0 };
            }
        }
    };
    var oldSingleSerialize = can.Map.helpers._serialize;
    can.Map.helpers._serialize = function (map, name, val) {
        return serializeProp(map, name, val);
    };
    var serializeProp = function (map, attr, val) {
        var serializer = map.define && map.define[attr] && map.define[attr].serialize;
        if (serializer === undefined) {
            return oldSingleSerialize.apply(this, arguments);
        } else if (serializer !== false) {
            return typeof serializer === 'function' ? serializer.call(map, val, attr) : oldSingleSerialize.apply(this, arguments);
        }
    };
    var oldSerialize = proto.serialize;
    proto.serialize = function (property) {
        var serialized = oldSerialize.apply(this, arguments);
        if (property) {
            return serialized;
        }
        var serializer, val;
        for (var attr in this.define) {
            if (!(attr in serialized)) {
                serializer = this.define && this.define[attr] && this.define[attr].serialize;
                if (serializer) {
                    val = serializeProp(this, attr, this.attr(attr));
                    if (val !== undefined) {
                        serialized[attr] = val;
                    }
                }
            }
        }
        return serialized;
    };
    return can.Map;
});
/*bower_components/component-utils/types*/
define('bower_components/component-utils/types', [], function () {
    'use strict';
    var $__default = {
            boolean: function (val) {
                return typeof val === 'string' || val;
            },
            number: function (val) {
                return +val;
            }
        };
    return {
        get default() {
            return $__default;
        },
        __esModule: true
    };
});
/*can/view/target/target*/
define('can/view/target/target', [
    'can/util/util',
    'can/view/elements'
], function (can, elements) {
    var processNodes = function (nodes, paths, location) {
            var frag = document.createDocumentFragment();
            for (var i = 0, len = nodes.length; i < len; i++) {
                var node = nodes[i];
                frag.appendChild(processNode(node, paths, location.concat(i)));
            }
            return frag;
        }, keepsTextNodes = typeof document !== 'undefined' && function () {
            var testFrag = document.createDocumentFragment();
            var div = document.createElement('div');
            div.appendChild(document.createTextNode(''));
            div.appendChild(document.createTextNode(''));
            testFrag.appendChild(div);
            var cloned = testFrag.cloneNode(true);
            return cloned.childNodes[0].childNodes.length === 2;
        }(), clonesWork = typeof document !== 'undefined' && function () {
            var a = document.createElement('a');
            a.innerHTML = '<xyz></xyz>';
            var clone = a.cloneNode(true);
            return clone.innerHTML === '<xyz></xyz>';
        }();
    var cloneNode = clonesWork ? function (el) {
            return el.cloneNode(true);
        } : function (node) {
            var copy;
            if (node.nodeType === 1) {
                copy = document.createElement(node.nodeName);
            } else if (node.nodeType === 3) {
                copy = document.createTextNode(node.nodeValue);
            } else if (node.nodeType === 8) {
                copy = document.createComment(node.nodeValue);
            } else if (node.nodeType === 11) {
                copy = document.createDocumentFragment();
            }
            if (node.attributes) {
                var attributes = can.makeArray(node.attributes);
                can.each(attributes, function (node) {
                    if (node && node.specified) {
                        copy.setAttribute(node.nodeName, node.nodeValue);
                    }
                });
            }
            if (node.childNodes) {
                can.each(node.childNodes, function (child) {
                    copy.appendChild(cloneNode(child));
                });
            }
            return copy;
        };
    function processNode(node, paths, location) {
        var callback, loc = location, nodeType = typeof node, el, p, i, len;
        var getCallback = function () {
            if (!callback) {
                callback = {
                    path: location,
                    callbacks: []
                };
                paths.push(callback);
                loc = [];
            }
            return callback;
        };
        if (nodeType === 'object') {
            if (node.tag) {
                el = document.createElement(node.tag);
                if (node.attrs) {
                    for (var attrName in node.attrs) {
                        var value = node.attrs[attrName];
                        if (typeof value === 'function') {
                            getCallback().callbacks.push({ callback: value });
                        } else {
                            el.setAttribute(attrName, value);
                        }
                    }
                }
                if (node.attributes) {
                    for (i = 0, len = node.attributes.length; i < len; i++) {
                        getCallback().callbacks.push({ callback: node.attributes[i] });
                    }
                }
                if (node.children && node.children.length) {
                    if (callback) {
                        p = callback.paths = [];
                    } else {
                        p = paths;
                    }
                    el.appendChild(processNodes(node.children, p, loc));
                }
            } else if (node.comment) {
                el = document.createComment(node.comment);
                if (node.callbacks) {
                    for (i = 0, len = node.attributes.length; i < len; i++) {
                        getCallback().callbacks.push({ callback: node.callbacks[i] });
                    }
                }
            }
        } else if (nodeType === 'string') {
            el = document.createTextNode(node);
        } else if (nodeType === 'function') {
            if (keepsTextNodes) {
                el = document.createTextNode('');
                getCallback().callbacks.push({ callback: node });
            } else {
                el = document.createComment('~');
                getCallback().callbacks.push({
                    callback: function () {
                        var el = document.createTextNode('');
                        elements.replace([this], el);
                        return node.apply(el, arguments);
                    }
                });
            }
        }
        return el;
    }
    function hydratePath(el, pathData, args) {
        var path = pathData.path, callbacks = pathData.callbacks, paths = pathData.paths, callbackData, child = el;
        for (var i = 0, len = path.length; i < len; i++) {
            child = child.childNodes[path[i]];
        }
        for (i = 0, len = callbacks.length; i < len; i++) {
            callbackData = callbacks[i];
            callbackData.callback.apply(child, args);
        }
        if (paths && paths.length) {
            for (i = paths.length - 1; i >= 0; i--) {
                hydratePath(child, paths[i], args);
            }
        }
    }
    function makeTarget(nodes) {
        var paths = [];
        var frag = processNodes(nodes, paths, []);
        return {
            paths: paths,
            clone: frag,
            hydrate: function () {
                var cloned = cloneNode(this.clone);
                var args = can.makeArray(arguments);
                for (var i = paths.length - 1; i >= 0; i--) {
                    hydratePath(cloned, paths[i], args);
                }
                return cloned;
            }
        };
    }
    makeTarget.keepsTextNodes = keepsTextNodes;
    can.view.target = makeTarget;
    return makeTarget;
});
/*can/view/stache/html_section*/
define('can/view/stache/html_section', [
    'can/util/util',
    'can/view/target/target',
    './utils',
    './mustache_core'
], function (can, target, utils, mustacheCore) {
    var decodeHTML = typeof document !== 'undefined' && function () {
            var el = document.createElement('div');
            return function (html) {
                if (html.indexOf('&') === -1) {
                    return html.replace(/\r\n/g, '\n');
                }
                el.innerHTML = html;
                return el.childNodes.length === 0 ? '' : el.childNodes[0].nodeValue;
            };
        }();
    var HTMLSectionBuilder = function () {
        this.stack = [new HTMLSection()];
    };
    can.extend(HTMLSectionBuilder.prototype, utils.mixins);
    can.extend(HTMLSectionBuilder.prototype, {
        startSubSection: function (process) {
            var newSection = new HTMLSection(process);
            this.stack.push(newSection);
            return newSection;
        },
        endSubSectionAndReturnRenderer: function () {
            if (this.last().isEmpty()) {
                this.stack.pop();
                return null;
            } else {
                var htmlSection = this.endSection();
                return can.proxy(htmlSection.compiled.hydrate, htmlSection.compiled);
            }
        },
        startSection: function (process) {
            var newSection = new HTMLSection(process);
            this.last().add(newSection.targetCallback);
            this.stack.push(newSection);
        },
        endSection: function () {
            this.last().compile();
            return this.stack.pop();
        },
        inverse: function () {
            this.last().inverse();
        },
        compile: function () {
            var compiled = this.stack.pop().compile();
            return function (scope, options) {
                if (!(scope instanceof can.view.Scope)) {
                    scope = new can.view.Scope(scope || {});
                }
                if (!(options instanceof mustacheCore.Options)) {
                    options = new mustacheCore.Options(options || {});
                }
                return compiled.hydrate(scope, options);
            };
        },
        push: function (chars) {
            this.last().push(chars);
        },
        pop: function () {
            return this.last().pop();
        }
    });
    var HTMLSection = function (process) {
        this.data = 'targetData';
        this.targetData = [];
        this.targetStack = [];
        var self = this;
        this.targetCallback = function (scope, options, sectionNode) {
            process.call(this, scope, options, sectionNode, can.proxy(self.compiled.hydrate, self.compiled), self.inverseCompiled && can.proxy(self.inverseCompiled.hydrate, self.inverseCompiled));
        };
    };
    can.extend(HTMLSection.prototype, {
        inverse: function () {
            this.inverseData = [];
            this.data = 'inverseData';
        },
        push: function (data) {
            this.add(data);
            this.targetStack.push(data);
        },
        pop: function () {
            return this.targetStack.pop();
        },
        add: function (data) {
            if (typeof data === 'string') {
                data = decodeHTML(data);
            }
            if (this.targetStack.length) {
                this.targetStack[this.targetStack.length - 1].children.push(data);
            } else {
                this[this.data].push(data);
            }
        },
        compile: function () {
            this.compiled = target(this.targetData);
            if (this.inverseData) {
                this.inverseCompiled = target(this.inverseData);
                delete this.inverseData;
            }
            delete this.targetData;
            delete this.targetStack;
            return this.compiled;
        },
        children: function () {
            if (this.targetStack.length) {
                return this.targetStack[this.targetStack.length - 1].children;
            } else {
                return this[this.data];
            }
        },
        isEmpty: function () {
            return !this.targetData.length;
        }
    });
    return HTMLSectionBuilder;
});
/*can/view/stache/text_section*/
define('can/view/stache/text_section', [
    'can/util/util',
    'can/view/live/live',
    './utils'
], function (can, live, utils) {
    live = live || can.view.live;
    var TextSectionBuilder = function () {
            this.stack = [new TextSection()];
        }, emptyHandler = function () {
        };
    can.extend(TextSectionBuilder.prototype, utils.mixins);
    can.extend(TextSectionBuilder.prototype, {
        startSection: function (process) {
            var subSection = new TextSection();
            this.last().add({
                process: process,
                truthy: subSection
            });
            this.stack.push(subSection);
        },
        endSection: function () {
            this.stack.pop();
        },
        inverse: function () {
            this.stack.pop();
            var falseySection = new TextSection();
            this.last().last().falsey = falseySection;
            this.stack.push(falseySection);
        },
        compile: function (state) {
            var renderer = this.stack[0].compile();
            return function (scope, options) {
                var compute = can.compute(function () {
                        return renderer(scope, options);
                    }, this, false, true);
                compute.bind('change', emptyHandler);
                var value = compute();
                if (compute.hasDependencies) {
                    if (state.attr) {
                        live.simpleAttribute(this, state.attr, compute);
                    } else {
                        live.attributes(this, compute);
                    }
                    compute.unbind('change', emptyHandler);
                } else {
                    if (state.attr) {
                        can.attr.set(this, state.attr, value);
                    } else {
                        live.setAttributes(this, value);
                    }
                }
            };
        }
    });
    var passTruthyFalsey = function (process, truthy, falsey) {
        return function (scope, options) {
            return process.call(this, scope, options, truthy, falsey);
        };
    };
    var TextSection = function () {
        this.values = [];
    };
    can.extend(TextSection.prototype, {
        add: function (data) {
            this.values.push(data);
        },
        last: function () {
            return this.values[this.values.length - 1];
        },
        compile: function () {
            var values = this.values, len = values.length;
            for (var i = 0; i < len; i++) {
                var value = this.values[i];
                if (typeof value === 'object') {
                    values[i] = passTruthyFalsey(value.process, value.truthy && value.truthy.compile(), value.falsey && value.falsey.compile());
                }
            }
            return function (scope, options) {
                var txt = '', value;
                for (var i = 0; i < len; i++) {
                    value = values[i];
                    txt += typeof value === 'string' ? value : value.call(this, scope, options);
                }
                return txt;
            };
        }
    });
    return TextSectionBuilder;
});
/*can/view/stache/stache*/
define('can/view/stache/stache', [
    'can/util/util',
    'can/view/parser/parser',
    'can/view/target/target',
    './html_section',
    './text_section',
    './mustache_core',
    './mustache_helpers',
    'can/view/callbacks/callbacks',
    'can/view/bindings/bindings'
], function (can, parser, target, HTMLSectionBuilder, TextSectionBuilder, mustacheCore, mustacheHelpers, viewCallbacks) {
    parser = parser || can.view.parser;
    viewCallbacks = viewCallbacks || can.view.callbacks;
    function stache(template) {
        template = mustacheCore.cleanLineEndings(template);
        var section = new HTMLSectionBuilder(), state = {
                node: null,
                attr: null,
                sectionElementStack: [],
                text: false
            }, makeRendererAndUpdateSection = function (section, mode, stache) {
                if (mode === '>') {
                    section.add(mustacheCore.makeLiveBindingPartialRenderer(stache, state));
                } else if (mode === '/') {
                    section.endSection();
                    if (section instanceof HTMLSectionBuilder) {
                        state.sectionElementStack.pop();
                    }
                } else if (mode === 'else') {
                    section.inverse();
                } else {
                    var makeRenderer = section instanceof HTMLSectionBuilder ? mustacheCore.makeLiveBindingBranchRenderer : mustacheCore.makeStringBranchRenderer;
                    if (mode === '{' || mode === '&') {
                        section.add(makeRenderer(null, stache, copyState()));
                    } else if (mode === '#' || mode === '^') {
                        section.startSection(makeRenderer(mode, stache, copyState()));
                        if (section instanceof HTMLSectionBuilder) {
                            state.sectionElementStack.push('section');
                        }
                    } else {
                        section.add(makeRenderer(null, stache, copyState({ text: true })));
                    }
                }
            }, copyState = function (overwrites) {
                var cur = {
                        tag: state.node && state.node.tag,
                        attr: state.attr && state.attr.name,
                        directlyNested: state.sectionElementStack[state.sectionElementStack.length - 1] === 'section'
                    };
                return overwrites ? can.simpleExtend(cur, overwrites) : cur;
            }, addAttributesCallback = function (node, callback) {
                if (!node.attributes) {
                    node.attributes = [];
                }
                node.attributes.push(callback);
            };
        parser(template, {
            start: function (tagName, unary) {
                state.node = {
                    tag: tagName,
                    children: []
                };
            },
            end: function (tagName, unary) {
                var isCustomTag = viewCallbacks.tag(tagName);
                if (unary) {
                    section.add(state.node);
                    if (isCustomTag) {
                        addAttributesCallback(state.node, function (scope, options) {
                            viewCallbacks.tagHandler(this, tagName, {
                                scope: scope,
                                options: options,
                                subtemplate: null,
                                templateType: 'stache'
                            });
                        });
                    }
                } else {
                    section.push(state.node);
                    state.sectionElementStack.push('element');
                    if (isCustomTag) {
                        section.startSubSection();
                    }
                }
                state.node = null;
            },
            close: function (tagName) {
                var isCustomTag = viewCallbacks.tag(tagName), renderer;
                if (isCustomTag) {
                    renderer = section.endSubSectionAndReturnRenderer();
                }
                var oldNode = section.pop();
                if (isCustomTag) {
                    addAttributesCallback(oldNode, function (scope, options) {
                        viewCallbacks.tagHandler(this, tagName, {
                            scope: scope,
                            options: options,
                            subtemplate: renderer,
                            templateType: 'stache'
                        });
                    });
                }
                state.sectionElementStack.pop();
            },
            attrStart: function (attrName) {
                if (state.node.section) {
                    state.node.section.add(attrName + '="');
                } else {
                    state.attr = {
                        name: attrName,
                        value: ''
                    };
                }
            },
            attrEnd: function (attrName) {
                if (state.node.section) {
                    state.node.section.add('" ');
                } else {
                    if (!state.node.attrs) {
                        state.node.attrs = {};
                    }
                    state.node.attrs[state.attr.name] = state.attr.section ? state.attr.section.compile(copyState()) : state.attr.value;
                    var attrCallback = viewCallbacks.attr(attrName);
                    if (attrCallback) {
                        if (!state.node.attributes) {
                            state.node.attributes = [];
                        }
                        state.node.attributes.push(function (scope, options) {
                            attrCallback(this, {
                                attributeName: attrName,
                                scope: scope,
                                options: options
                            });
                        });
                    }
                    state.attr = null;
                }
            },
            attrValue: function (value) {
                var section = state.node.section || state.attr.section;
                if (section) {
                    section.add(value);
                } else {
                    state.attr.value += value;
                }
            },
            chars: function (text) {
                section.add(text);
            },
            special: function (text) {
                var firstAndText = mustacheCore.splitModeFromExpression(text, state), mode = firstAndText.mode, expression = firstAndText.expression;
                if (expression === 'else') {
                    (state.attr && state.attr.section ? state.attr.section : section).inverse();
                    return;
                }
                if (mode === '!') {
                    return;
                }
                if (state.node && state.node.section) {
                    makeRendererAndUpdateSection(state.node.section, mode, expression);
                    if (state.node.section.subSectionDepth() === 0) {
                        state.node.attributes.push(state.node.section.compile(copyState()));
                        delete state.node.section;
                    }
                } else if (state.attr) {
                    if (!state.attr.section) {
                        state.attr.section = new TextSectionBuilder();
                        if (state.attr.value) {
                            state.attr.section.add(state.attr.value);
                        }
                    }
                    makeRendererAndUpdateSection(state.attr.section, mode, expression);
                } else if (state.node) {
                    if (!state.node.attributes) {
                        state.node.attributes = [];
                    }
                    if (!mode) {
                        state.node.attributes.push(mustacheCore.makeLiveBindingBranchRenderer(null, expression, copyState()));
                    } else if (mode === '#' || mode === '^') {
                        if (!state.node.section) {
                            state.node.section = new TextSectionBuilder();
                        }
                        makeRendererAndUpdateSection(state.node.section, mode, expression);
                    } else {
                        throw mode + ' is currently not supported within a tag.';
                    }
                } else {
                    makeRendererAndUpdateSection(section, mode, expression);
                }
            },
            comment: function (text) {
                section.add({ comment: text });
            },
            done: function () {
            }
        });
        return section.compile();
    }
    var escMap = {
            '\n': '\\n',
            '\r': '\\r',
            '\u2028': '\\u2028',
            '\u2029': '\\u2029'
        };
    var esc = function (string) {
        return ('' + string).replace(/["'\\\n\r\u2028\u2029]/g, function (character) {
            if ('\'"\\'.indexOf(character) >= 0) {
                return '\\' + character;
            } else {
                return escMap[character];
            }
        });
    };
    can.view.register({
        suffix: 'stache',
        contentType: 'x-stache-template',
        fragRenderer: function (id, text) {
            return stache(text);
        },
        script: function (id, src) {
            return 'can.stache("' + esc(src) + '")';
        }
    });
    can.view.ext = '.stache';
    can.extend(can.stache, mustacheHelpers);
    can.extend(stache, mustacheHelpers);
    can.stache.safeString = stache.safeString = function (text) {
        return {
            toString: function () {
                return text;
            }
        };
    };
    return stache;
});
/*can/view/stache/system*/
System.set('can/view/stache/system', System.newModule({}));
/*template.stache!can/view/stache/system*/
define('template.stache!can/view/stache/system', ['can/view/stache/stache'], function (stache) {
    return stache('<h1 can-click="{greet}">\n  {{greeting}} {{target}}{{#if excited}}!!!{{else}}!{{/if}}\n</h1>\n<div class="cc-hello-world-content">\n  <content></content>\n</div>');
});
/*$css*/
define('$css', function(require, exports, module) {
if( steal.config('env') === 'production' ) {
	exports.fetch = function(load) {
		// return a thenable for fetching (as per specification)
		// alternatively return new Promise(function(resolve, reject) { ... })
		var cssFile = load.address;

		var link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = cssFile;

		document.head.appendChild(link);
		return "";
	};
} else {
	exports.instantiate = function(load) {
		load.metadata.deps = [];
		load.metadata.execute = function(){
			if(load.source) {
				var head = document.head || document.getElementsByTagName('head')[0],
					style = document.createElement('style'),
					source = load.source+"/*# sourceURL="+load.address+" */";

				// make source load relative to the current page
				source = source.replace(/url\(['"]?([^'"\)]*)['"]?\)/g, function( whole, part ) {
					return "url(" + steal.joinURIs( load.address, part) + ")";
				});
				style.type = 'text/css';

				if (style.styleSheet){
					style.styleSheet.cssText = source;
				} else {
					style.appendChild(document.createTextNode(source));
				}
				head.appendChild(style);
			}

			return System.newModule({});
		};
		load.metadata.format = "css";
	};
	
}

exports.buildType = "css";
exports.includeInBuild = true;

});
/*less*/
System.set('less', System.newModule({}));
/*bower_components/steal/less*/
System.set('bower_components/steal/less', System.newModule({}));
/*cc-hello-world*/
define('cc-hello-world', [
    'can',
    'can/map/define/define',
    'util/types',
    './template.stache!',
    './styles.less!'
], function ($__0, $__2, $__3, $__5, $__7) {
    'use strict';
    if (!$__0 || !$__0.__esModule)
        $__0 = { default: $__0 };
    if (!$__2 || !$__2.__esModule)
        $__2 = { default: $__2 };
    if (!$__3 || !$__3.__esModule)
        $__3 = { default: $__3 };
    if (!$__5 || !$__5.__esModule)
        $__5 = { default: $__5 };
    if (!$__7 || !$__7.__esModule)
        $__7 = { default: $__7 };
    var can = $__0.default;
    $__2;
    var types = $__3.default;
    var template = $__5.default;
    $__7;
    var $__default = can.Component.extend({
            tag: 'cc-hello-world',
            template: template,
            scope: {
                define: {
                    excited: { type: types.boolean },
                    _el: { type: '*' }
                },
                greeting: 'Hello',
                target: 'World',
                _eventsFired: 0,
                logGreeting: function () {
                    console.log(this.attr('greeting') + ' ' + this.attr('target') + (this.attr('excited') ? '!!!' : '!'));
                },
                greet: function () {
                    var ev = this.trigger('greeting');
                    if (!ev.isDefaultPrevented) {
                        this.logGreeting();
                        this.attr('_eventsFired', this.attr('_eventsFired') + 1);
                    }
                    return ev;
                },
                trigger: function (evName) {
                    var $__9;
                    for (var extra = [], $__8 = 1; $__8 < arguments.length; $__8++)
                        extra[$__8 - 1] = arguments[$__8];
                    return ($__9 = this.attr('_el')).trigger.apply($__9, $traceurRuntime.spread([evName], extra));
                }
            },
            events: {
                inserted: function () {
                    this.scope.attr('_el', this.element);
                    this.scope.greet();
                }
            }
        });
    return {
        get default() {
            return $__default;
        },
        __esModule: true
    };
});
/*test/test.stache!can/view/stache/system*/
define('test/test.stache!can/view/stache/system', ['can/view/stache/stache'], function (stache) {
    return stache('<cc-hello-world></cc-hello-world>');
});
/*test/test*/
define('test/test', [
    'can',
    'util/test-helper',
    '../cc-hello-world',
    './test.stache!'
], function ($__0, $__2, $__3, $__4) {
    'use strict';
    if (!$__0 || !$__0.__esModule)
        $__0 = { default: $__0 };
    if (!$__2 || !$__2.__esModule)
        $__2 = { default: $__2 };
    if (!$__3 || !$__3.__esModule)
        $__3 = { default: $__3 };
    if (!$__4 || !$__4.__esModule)
        $__4 = { default: $__4 };
    var can = $__0.default;
    $__2;
    $__3;
    var template = $__4.default;
    describe('cc-hello-world', function () {
        afterEach(function () {
            can.$('#test-area').empty();
        });
        it('works', function () {
            can.$('#test-area').html(template());
            if (!can.$('cc-hello-world').text() === 'Hello World!') {
                throw new Error('fail');
            }
        });
    });
    return {};
});
/*[import-main-module]*/
System.import('test/test');
