(function () {
	'use strict';

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, basedir, module) {
		return module = {
			path: basedir,
			exports: {},
			require: function (path, base) {
				return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
			}
		}, fn(module, module.exports), module.exports;
	}

	function commonjsRequire () {
		throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
	}

	var lib_umd = createCommonjsModule(function (module, exports) {
	!function(e,t){module.exports=t();}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r});},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=29)}([function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.InjectServices_Symbol=t.Extends_Symbol=t.Expands_Symbol=t.Events_Symbol_Eventlist=t.Directive_Symbol_Selector=t.CustomElement_Symbol_Selector=t.UseParentStyles_Symbol=t.ShadowDOM_Symbol_WithShadow=t.CTOR=void 0,t.CTOR=Symbol.for("__ctor__"),t.ShadowDOM_Symbol_WithShadow=Symbol.for("withShadow"),t.UseParentStyles_Symbol=Symbol.for("useParentStyles"),t.CustomElement_Symbol_Selector=Symbol("CustomElementSelector"),t.Directive_Symbol_Selector=Symbol("DirectiveSelector"),t.Events_Symbol_Eventlist=Symbol("EventEventList"),t.Expands_Symbol=Symbol("Expands"),t.Extends_Symbol=Symbol("Extends"),t.InjectServices_Symbol=Symbol("InjectServices");},,,function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.LifeCycle=void 0,function(e){e[e.Init=0]="Init",e[e.Connect=1]="Connect",e[e.SetData=2]="SetData",e[e.Load=3]="Load",e[e.PreRender=4]="PreRender",e[e.Disconnect=5]="Disconnect",e[e.Disposed=6]="Disposed",e[e.Adopted=7]="Adopted";}(t.LifeCycle||(t.LifeCycle={}));},function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{u(r.next(e));}catch(e){i(e);}}function c(e){try{u(r.throw(e));}catch(e){i(e);}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t);}))).then(s,c);}u((r=r.apply(e,t||[])).next());}))};Object.defineProperty(t,"__esModule",{value:!0}),t.BaseComponent=void 0;const o=n(3),i=n(5),s=n(8),c=n(10),u=n(0);class l extends HTMLElement{constructor(){super(),this.isInitalized=!1,this.proxyAttributeHandler={get:(e,t)=>{try{return this.attributes.getNamedItem(`__${t}__obj__`)||void 0!==this[t]&&s.isObject(this[t])?JSON.parse(this.getAttribute(t)):this.attributes.getNamedItem(`__${t}__bool__`)||void 0!==this[t]&&s.isBoolean(this[t])?"true"===this.getAttribute(t)||"!0"===this.getAttribute(t):this.attributes.getNamedItem(`__${t}__num__`)||void 0!==this[t]&&s.isNumber(this[t])?Number.parseFloat(this.getAttribute(t)):this.attributes.getNamedItem(`__${t}__arr__`)||void 0!==this[t]&&s.isArray(this[t])?JSON.parse(this.attributes.getNamedItem(`__${t}__arr__`).value):e[t]}catch(e){console.error(`A complex property was not get properly: '${t}'. Error: '${e}`);}return this.getAttribute(t)},set:(e,t,n,r)=>{e[t]=n;try{s.isBoolean(n)?this.setAttribute(`__${t}__bool__`,""):s.isNumber(n)?this.setAttribute(`__${t}__num__`,""):s.isArray(n)||c.isString(n)&&n.match(/^\[.*\]$/)&&s.isArray(JSON.parse(n))?(s.isArray(n)&&(n=JSON.stringify(n)),this.setAttribute(`__${t}__arr__`,n),e[t]=new Proxy(JSON.parse(n),{get(e,t){const n=e[t];return "function"==typeof n?["push","unshift"].includes(t)?function(){return Array.prototype[t].apply(e,arguments)}:["pop"].includes(t)?function(){const n=Array.prototype[t].apply(e,arguments);return n}:n.bind(e):n}})):s.isObject(n)&&(this.setAttribute(`__${t}__obj__`,""),n=JSON.stringify(n)),this.setAttribute(t,n),Promise.resolve();}catch(e){console.error("A complex property was not set properly: "+t+". Error: "+e);}return !0}},this.__uniqueId__=s.uuidv4();const e=Object.assign({},this.constructor.__proxyInitializer__);if(this._data=new Proxy(e,this.proxyAttributeHandler),this.lifeCycleState=o.LifeCycle.Init,window.addEventListener("message",this.receiveMessage.bind(this),!1),this.constructor[u.UseParentStyles_Symbol]&&this.constructor[u.ShadowDOM_Symbol_WithShadow]&&!this.constructor.globalStyle)if(this.constructor.globalStyle="",s.isBoolean(this.constructor[u.UseParentStyles_Symbol])&&!0===this.constructor[u.UseParentStyles_Symbol])for(let e=0;e<this.ownerDocument.styleSheets.length;e++){const t=this.ownerDocument.styleSheets[e];try{if(!t.rules||0===t.rules.length||t.rules[0].cssText.startsWith(":ignore"))continue;this.constructor.globalStyle+=Object.keys(t.cssRules).map(e=>{var n;return null!==(n=t.cssRules[e].cssText)&&void 0!==n?n:" "}).join(" ");}catch(e){console.warn("CORS violation while loading external style sheet. Adapt CORS or load from own server.");}}else {const e=this.constructor[u.UseParentStyles_Symbol];this.constructor.globalStyle+=Object.keys(e).map(t=>e[t]).join(" ");}u.CTOR in Object.getPrototypeOf(this)&&s.isArray(this[u.CTOR])&&this[u.CTOR].forEach(e=>{this[e]=this,this[e];});}static get observedAttributes(){return s.isArray(this.__observedAttributes__)?["onlifecycle",...this.__observedAttributes__]:["onlifecycle"]}set lifeCycleState(e){console.log("Lifecycle for "+this.tagName,e);const t=(e,n)=>{if(!e.parentElement)return null;if(i.GlobalProvider.registeredElements.some(t=>e.parentElement.tagName===t)){if(e.parentElement[n])return e.parentElement}return t(e.parentElement,n)};this._lifeCycleState=e;const n=new CustomEvent("lifecycle",{bubbles:!0,cancelable:!1,composed:!1,detail:e});if(this.dispatchEvent(n)&&this.lifeCycle(e),this.getAttribute("onlifecycle")){let e=this.getAttribute("onlifecycle");const r=[],o=e.match(/^(?:(\(?.+\)?|.?)\s?=>\s?)?.+\.([^(]*)((?:[^)]*)?)?/);o.length>2&&(e=o[2],parent=t(this,e),parent&&(o[3]&&o[3].indexOf(",")>0&&r.push(...o[3].split(",").map(e=>{const t=e.trim();return "true"===t||"false"!==t&&(isNaN(+t)?t:+t)}).slice(1)),parent[e].call(parent,n,...r)));}}receiveMessage(e){"setData"!==e.data.type||e.data.target!==this.readAttribute("id","")&&this.localName!==e.data.target||this.setData.apply(this,e.data.args);}lifeCycle(e){}get currentLifeCycle(){return this._lifeCycleState}dispose(){}get data(){return this._data}services(e){return this._services.get(e)}dispatch(e,t){const n=new CustomEvent(e+"_"+this.constructor.name,t);return super.dispatchEvent(n)}setup(){return r(this,void 0,void 0,(function*(){this.lifeCycleState=o.LifeCycle.PreRender;let e=null;if(this.constructor[u.ShadowDOM_Symbol_WithShadow]){const t=document.createElement("template");if(t.innerHTML=yield this.render(),!this.shadowRoot||"closed"===this.shadowRoot.mode){if(this.attachShadow({mode:"open"}),this.constructor.useParentStyles&&this.constructor.globalStyle){const e=document.createElement("style");e.textContent=this.constructor.globalStyle,this.shadowRoot.appendChild(e);}this.shadowRoot.appendChild(t.content.cloneNode(!0)),e=this.shadowRoot;}}else this.innerHTML=yield this.render(),e=this;i.GlobalProvider.registeredDirectives&&i.GlobalProvider.registeredDirectives.forEach((t,n)=>{e.querySelectorAll(n).forEach(e=>{new t(e);});});const t=[];Array.from(e.querySelectorAll("*")).forEach(e=>{if(e instanceof l){const n=new Promise(t=>{e.addEventListener("lifecycle",e=>{e.detail===o.LifeCycle.Load&&t();});});t.push(n);}}),t.length?(yield Promise.all(t),this.lifeCycleState=o.LifeCycle.Load):this.lifeCycleState=o.LifeCycle.Load;}))}setData(e,t,n){return r(this,void 0,void 0,(function*(){const r=this.data[e]!==t;this.data[e]=t,(r&&void 0===n||!1===n)&&(this.lifeCycleState=o.LifeCycle.SetData,yield this.setup());}))}attributeChangedCallback(e,t,n){return r(this,void 0,void 0,(function*(){t!==n&&(this.data[e]=n,this.isInitalized&&(yield this.setup()));}))}connectedCallback(){return r(this,void 0,void 0,(function*(){this.lifeCycleState=o.LifeCycle.Connect,yield this.setup(),this.isInitalized=!0;}))}readAttribute(e,t){return void 0===this.attributes[e]?t:this.attributes[e].value}disconnectedCallback(){this.lifeCycleState=o.LifeCycle.Disconnect,Object.keys(this).forEach(e=>{if(e.startsWith("__dispose__"))try{this[e]&&this[e]();}catch(e){}}),this.dispose(),this.lifeCycleState=o.LifeCycle.Disposed;}adoptedCallback(){this.lifeCycleState=o.LifeCycle.Adopted;}}t.BaseComponent=l,l.linkedStyles=[];},function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{u(r.next(e));}catch(e){i(e);}}function c(e){try{u(r.throw(e));}catch(e){i(e);}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t);}))).then(s,c);}u((r=r.apply(e,t||[])).next());}))},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalProvider=void 0;const i=o(n(30)),s=n(16),c=n(6),u=n(3),l=n(32),a=n(33),f=n(34),d=n(0);class p{static register(e){e[d.Extends_Symbol]?customElements.define(e[d.CustomElement_Symbol_Selector],e,{extends:e[d.Extends_Symbol]}):customElements.define(e[d.CustomElement_Symbol_Selector],e),p.registeredElements.push(e[d.CustomElement_Symbol_Selector].toUpperCase()),e[d.Events_Symbol_Eventlist]&&e[d.Events_Symbol_Eventlist].forEach(e=>document.addEventListener(e,e=>p.eventHub(e)));}static bootstrap(e){p.bootstrapProps=e,"interactive"===document.readyState||"complete"===document.readyState?p.registerInternal():document.addEventListener("DOMContentLoaded",e=>{p.registerInternal();});}static registerInternal(){if(customElements.define("n-repeat",l.NRepeaterComponent),customElements.define("n-outlet",a.NOutletComponent),customElements.define("n-finish",f.NFinishComponent),p.bootstrapProps.components.forEach(e=>{p.register(e);}),p.bootstrapProps.expanders){p.bootstrapProps.expanders.map(e=>new e).forEach(e=>{e.__expand__?p.tagExpander.set(e.__expand__,e):console.error("Illegal expander, you must set the @Expand decorator to name the expander");});}p.bootstrapProps.directives&&p.bootstrapProps.directives.forEach(e=>{p.registeredDirectives.set(e[Symbol.for("DirectiveSelector")],e);}),i.default.map(e=>document.addEventListener(e,e=>p.eventHub(e)));const e=[];p.bootstrapProps.components.forEach(t=>{[].slice.call(document.getElementsByTagName(t[d.CustomElement_Symbol_Selector])).forEach(t=>{const n=new Promise(e=>{t.isInitalized?e():t.addEventListener("lifecycle",t=>{t.detail===u.LifeCycle.Load&&e();});});e.push(n);});}),Promise.all(e).then(()=>{p.bootstrapProps.routes&&p.router.registerRouter(p.bootstrapProps.routes);});}static get routerAction(){return p.router.onRouterAction}static navigateRoute(e,t){p.router.navigateRoute(e,t);}static get routerConfig(){return p.bootstrapProps.routes}static eventHub(e){return r(this,void 0,void 0,(function*(){const t=(e,n)=>{if(!e.parentElement)return null;if(p.registeredElements.some(t=>e.parentElement.tagName===t)){if(e.parentElement[n])return e.parentElement}return t(e.parentElement,n)};if(e.target.getAttribute){let n=e.type;if(e instanceof CustomEvent){const t=e.target.constructor.name;n=e.type.replace("_"+t,"");}const r=c.DomOp.getParent(e.target,`[n-on-${n}]`);if(r){let o=!1;const i=!!e.target.getAttribute("n-async");let s=r.getAttribute("n-on-"+n);if(!s)return;const c=[];let u=r;if(u[s])o=!0;else {const e=s.match(/^(?:(\(?.+\)?|.?)\s?=>\s?)?.+\.([^(]*)((?:[^)]*)?)?/);e&&e.length>2&&(s=e[2],u=t(r,s),u&&(o=!0,e[3]&&e[3].indexOf(",")>0&&c.push(...e[3].split(",").map(e=>{const t=e.trim().replace(/^["']|["']$/g,"");return "true"===t||"!0"===t||"false"!==t&&"!1"!==t&&(isNaN(t)?t:t-0)}).slice(1))));}if(!o)throw new Error(`[@nyaf] There is an event handler '${s}' attached\n          that could not be found in the component <${r.tagName}>.`);{const t={};for(let n in e)t[n]=e[n];t.detail=e.detail,i?yield u[s].call(u,t,...c):u[s].call(u,t,...c);}}}}))}static get TagExpander(){return p.tagExpander}}t.GlobalProvider=p,p.registeredElements=[],p.registeredDirectives=new Map,p.tagExpander=new Map,p.router=s.Router.getInstance();},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.DomOp=void 0;class r{static getParents(e,t){const n=[];for(;e&&e!==document;e=e.parentNode)t?e.matches(t)&&n.push(e):n.push(e);return n}static getParent(e,t){const n=r.getParents(e,t);return n&&n.length?n[0]:null}static getParentsUntil(e,t,n){const r=[];for(;e&&e!==document&&(!t||!e.matches(t));e=e.parentNode){if(n){e.matches(n)&&r.push(e);break}r.push(e);}return r}static getClosest(e,t){for(;e&&e!==document;e=e.parentNode)if(e.matches(t))return e;return null}}t.DomOp=r;},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});const r=n(5),o=n(8),i={Fragment:null,createElement(e,t,...n){n=[].concat.apply([],n);const i=function(e){return e.reduce((e,t)=>Array.isArray(t)?e.concat(i(t)):e.concat(t),[])};t=t||{};let s=!0,c=!1;const u={};let l=Object.keys(t).map(i=>{var l;const a=t[i];switch(i){case"className":return Array.isArray(a)?`class="${a.join(" ")}"`:`class="${a}"`;case"n-hide":a&&(u.display="none");break;case"n-show":a||(u.display="none");break;case"n-else":s=!a;break;case"n-if":s=!!a;break;case"n-iif":t["n-iif"];return `n-bind='${a.name}'`;case"n-repeat":try{const r=JSON.parse(t["n-repeat"]);delete t["n-repeat"];const o=Object.create(t),i=r.map(r=>{Object.keys(t).forEach(e=>{o[e]=r[t[e].split(".")[1]];});const i=[];n&&n.forEach(e=>{const t=e.match(/(.+)\s+=>\s+(.+)\.(.+)/);if(t&&t.length){const e=t[3];i.push(r[e]);}else i.push(e);});return this.createElement(e,o,i)});return c=!0,i.join("")}catch(e){console.error("Cannot parse n-repeat data. Need an array of objects. "+e);}break;case"n-expand":return null===(l=r.GlobalProvider.TagExpander.get(a))||void 0===l?void 0:l.expand();default:if(i.startsWith("n-on-")){if(a.name===i)return `${i}='${a.toString().replace(/'/g,"&#39;")}'`;if(o.isFunction(a))return `${i}='this.${a.name}'`}if(o.isArray(a))return delete t[i],`${i}='${JSON.stringify(a)}' __${i}__ __${i}__arr__`;if(o.isObject(a))return delete t[i],`${i}='${JSON.stringify(a)}' __${i}__ __${i}__obj__`;if(o.isBoolean(a))return `${i}='${JSON.stringify(a)}' __${i}__ __${i}__bool__`;if(o.isNumber(a))return `${i}='${JSON.stringify(a)}' __${i}__ __${i}__num__`;if(null!=a){return `${i}='${a.toString().replace(/'/g,"&quot;")}'`}if(null!==a)return `${i}='${i}'`}}).join(" ")||"";if(!e)return ""+i(n).join("");if(!s)return "";if(u&&Object.keys(u).length>0){l+=`style="${Object.keys(u).map(e=>`${e}:${u[e]};`)}"`;}return c?l:`<${e}${l?" ":""}${l}>${i(n).join("")}</${e}>`}};t.default=i;},function(e,t,n){function r(e){return "object"==typeof e&&null!==e}function o(e){return Object.prototype.toString.call(e)}function i(e){return e.replace(/[?!]/g,"")}Object.defineProperty(t,"__esModule",{value:!0}),t.select=t.from=t.of=t.isPrimitive=t.isFunction=t.isError=t.isDate=t.isObject=t.isRegExp=t.isUndefined=t.isSymbol=t.isString=t.isNumber=t.isNullOrUndefined=t.isNull=t.isBoolean=t.isArray=t.uuidv4=void 0,t.uuidv4=function(){return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){const t=16*Math.random()|0;return ("x"===e?t:3&t|8).toString(16)}))},t.isArray=function(e){return Array.isArray(e)},t.isBoolean=function(e){return "boolean"==typeof e},t.isNull=function(e){return null===e},t.isNullOrUndefined=function(e){return null==e},t.isNumber=function(e){return "number"==typeof e},t.isString=function(e){return "string"==typeof e},t.isSymbol=function(e){return "symbol"==typeof e},t.isUndefined=function(e){return void 0===e},t.isRegExp=function(e){return r(e)&&"[object RegExp]"===o(e)},t.isObject=r,t.isDate=function(e){return r(e)&&"[object Date]"===o(e)},t.isError=function(e){return r(e)&&("[object Error]"===o(e)||e instanceof Error)},t.isFunction=function(e){return "function"==typeof e},t.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},t.of=function(e,t){return `@@${function(e,t){const n=e.toString();if(n.startsWith("class ")&&!n.startsWith("class =>"))return i(n.substring("class ".length,n.indexOf(" {")));if(n.includes("=>"))return i(n.substring(n.indexOf(".")+1));const r=n.match(/function\s*\(\w+\)\s*\{[\r\n\s]*return\s+\w+\.((\w+\.)*(\w+))/i);if(r)return t&&t.lastProp?r[3]:r[1];if(n.startsWith("function "))return i(n.substring("function ".length,n.indexOf("(")));throw new Error("nameof: Invalid function.")}(e,t)}@@`},t.from=function(e){return JSON.stringify(e)},t.select=function(e){return e.toString()};},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.Properties=void 0,t.Properties=function(e){return function(t){!function(e,t){Object.defineProperty(e,"__observedAttributes__",{get:function(){return Object.keys(t)},enumerable:!1,configurable:!1}),Object.defineProperty(e,"__proxyInitializer__",{get:function(){return t},enumerable:!1,configurable:!1});}(t,e);}};},function(e,t,n){(function(e){var r=Object.getOwnPropertyDescriptors||function(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++)n[t[r]]=Object.getOwnPropertyDescriptor(e,t[r]);return n},o=/%[sdj%]/g;t.format=function(e){if(!b(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(c(arguments[n]));return t.join(" ")}n=1;for(var r=arguments,i=r.length,s=String(e).replace(o,(function(e){if("%%"===e)return "%";if(n>=i)return e;switch(e){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(e){return "[Circular]"}default:return e}})),u=r[n];n<i;u=r[++n])y(u)||!g(u)?s+=" "+u:s+=" "+c(u);return s},t.deprecate=function(n,r){if(void 0!==e&&!0===e.noDeprecation)return n;if(void 0===e)return function(){return t.deprecate(n,r).apply(this,arguments)};var o=!1;return function(){if(!o){if(e.throwDeprecation)throw new Error(r);e.traceDeprecation?console.trace(r):console.error(r),o=!0;}return n.apply(this,arguments)}};var i,s={};function c(e,n){var r={seen:[],stylize:l};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),h(n)?r.showHidden=n:n&&t._extend(r,n),_(r.showHidden)&&(r.showHidden=!1),_(r.depth)&&(r.depth=2),_(r.colors)&&(r.colors=!1),_(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=u),a(r,e,r.depth)}function u(e,t){var n=c.styles[t];return n?"["+c.colors[n][0]+"m"+e+"["+c.colors[n][1]+"m":e}function l(e,t){return e}function a(e,n,r){if(e.customInspect&&n&&w(n.inspect)&&n.inspect!==t.inspect&&(!n.constructor||n.constructor.prototype!==n)){var o=n.inspect(r,e);return b(o)||(o=a(e,o,r)),o}var i=function(e,t){if(_(t))return e.stylize("undefined","undefined");if(b(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}if(m(t))return e.stylize(""+t,"number");if(h(t))return e.stylize(""+t,"boolean");if(y(t))return e.stylize("null","null")}(e,n);if(i)return i;var s=Object.keys(n),c=function(e){var t={};return e.forEach((function(e,n){t[e]=!0;})),t}(s);if(e.showHidden&&(s=Object.getOwnPropertyNames(n)),O(n)&&(s.indexOf("message")>=0||s.indexOf("description")>=0))return f(n);if(0===s.length){if(w(n)){var u=n.name?": "+n.name:"";return e.stylize("[Function"+u+"]","special")}if(v(n))return e.stylize(RegExp.prototype.toString.call(n),"regexp");if(S(n))return e.stylize(Date.prototype.toString.call(n),"date");if(O(n))return f(n)}var l,g="",E=!1,j=["{","}"];(p(n)&&(E=!0,j=["[","]"]),w(n))&&(g=" [Function"+(n.name?": "+n.name:"")+"]");return v(n)&&(g=" "+RegExp.prototype.toString.call(n)),S(n)&&(g=" "+Date.prototype.toUTCString.call(n)),O(n)&&(g=" "+f(n)),0!==s.length||E&&0!=n.length?r<0?v(n)?e.stylize(RegExp.prototype.toString.call(n),"regexp"):e.stylize("[Object]","special"):(e.seen.push(n),l=E?function(e,t,n,r,o){for(var i=[],s=0,c=t.length;s<c;++s)C(t,String(s))?i.push(d(e,t,n,r,String(s),!0)):i.push("");return o.forEach((function(o){o.match(/^\d+$/)||i.push(d(e,t,n,r,o,!0));})),i}(e,n,r,c,s):s.map((function(t){return d(e,n,r,c,t,E)})),e.seen.pop(),function(e,t,n){if(e.reduce((function(e,t){return t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60)return n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1];return n[0]+t+" "+e.join(", ")+" "+n[1]}(l,g,j)):j[0]+g+j[1]}function f(e){return "["+Error.prototype.toString.call(e)+"]"}function d(e,t,n,r,o,i){var s,c,u;if((u=Object.getOwnPropertyDescriptor(t,o)||{value:t[o]}).get?c=u.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):u.set&&(c=e.stylize("[Setter]","special")),C(r,o)||(s="["+o+"]"),c||(e.seen.indexOf(u.value)<0?(c=y(n)?a(e,u.value,null):a(e,u.value,n-1)).indexOf("\n")>-1&&(c=i?c.split("\n").map((function(e){return "  "+e})).join("\n").substr(2):"\n"+c.split("\n").map((function(e){return "   "+e})).join("\n")):c=e.stylize("[Circular]","special")),_(s)){if(i&&o.match(/^\d+$/))return c;(s=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(s=s.substr(1,s.length-2),s=e.stylize(s,"name")):(s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),s=e.stylize(s,"string"));}return s+": "+c}function p(e){return Array.isArray(e)}function h(e){return "boolean"==typeof e}function y(e){return null===e}function m(e){return "number"==typeof e}function b(e){return "string"==typeof e}function _(e){return void 0===e}function v(e){return g(e)&&"[object RegExp]"===E(e)}function g(e){return "object"==typeof e&&null!==e}function S(e){return g(e)&&"[object Date]"===E(e)}function O(e){return g(e)&&("[object Error]"===E(e)||e instanceof Error)}function w(e){return "function"==typeof e}function E(e){return Object.prototype.toString.call(e)}function j(e){return e<10?"0"+e.toString(10):e.toString(10)}t.debuglog=function(n){if(_(i)&&(i=e.env.NODE_DEBUG||""),n=n.toUpperCase(),!s[n])if(new RegExp("\\b"+n+"\\b","i").test(i)){var r=e.pid;s[n]=function(){var e=t.format.apply(t,arguments);console.error("%s %d: %s",n,r,e);};}else s[n]=function(){};return s[n]},t.inspect=c,c.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},c.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=p,t.isBoolean=h,t.isNull=y,t.isNullOrUndefined=function(e){return null==e},t.isNumber=m,t.isString=b,t.isSymbol=function(e){return "symbol"==typeof e},t.isUndefined=_,t.isRegExp=v,t.isObject=g,t.isDate=S,t.isError=O,t.isFunction=w,t.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},t.isBuffer=n(12);var x=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function P(){var e=new Date,t=[j(e.getHours()),j(e.getMinutes()),j(e.getSeconds())].join(":");return [e.getDate(),x[e.getMonth()],t].join(" ")}function C(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){console.log("%s - %s",P(),t.format.apply(t,arguments));},t.inherits=n(13),t._extend=function(e,t){if(!t||!g(t))return e;for(var n=Object.keys(t),r=n.length;r--;)e[n[r]]=t[n[r]];return e};var A="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0;function D(e,t){if(!e){var n=new Error("Promise was rejected with a falsy value");n.reason=e,e=n;}return t(e)}t.promisify=function(e){if("function"!=typeof e)throw new TypeError('The "original" argument must be of type Function');if(A&&e[A]){var t;if("function"!=typeof(t=e[A]))throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(t,A,{value:t,enumerable:!1,writable:!1,configurable:!0}),t}function t(){for(var t,n,r=new Promise((function(e,r){t=e,n=r;})),o=[],i=0;i<arguments.length;i++)o.push(arguments[i]);o.push((function(e,r){e?n(e):t(r);}));try{e.apply(this,o);}catch(e){n(e);}return r}return Object.setPrototypeOf(t,Object.getPrototypeOf(e)),A&&Object.defineProperty(t,A,{value:t,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(t,r(e))},t.promisify.custom=A,t.callbackify=function(t){if("function"!=typeof t)throw new TypeError('The "original" argument must be of type Function');function n(){for(var n=[],r=0;r<arguments.length;r++)n.push(arguments[r]);var o=n.pop();if("function"!=typeof o)throw new TypeError("The last argument must be of type Function");var i=this,s=function(){return o.apply(i,arguments)};t.apply(this,n).then((function(t){e.nextTick(s,null,t);}),(function(t){e.nextTick(D,t,s);}));}return Object.setPrototypeOf(n,Object.getPrototypeOf(t)),Object.defineProperties(n,r(t)),n};}).call(this,n(11));},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i;}catch(e){n=i;}try{r="function"==typeof clearTimeout?clearTimeout:s;}catch(e){r=s;}}();var u,l=[],a=!1,f=-1;function d(){a&&u&&(a=!1,u.length?l=u.concat(l):f=-1,l.length&&p());}function p(){if(!a){var e=c(d);a=!0;for(var t=l.length;t;){for(u=l,l=[];++f<t;)u&&u[f].run();f=-1,t=l.length;}u=null,a=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e);}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e);}}function h(e,t){this.fun=e,this.array=t;}function y(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new h(e,t)),1!==l.length||a||c(p);},h.prototype.run=function(){this.fun.apply(null,this.array);},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(e){return []},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return "/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0};},function(e,t){e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8};},function(e,t){"function"==typeof Object.create?e.exports=function(e,t){t&&(e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}));}:e.exports=function(e,t){if(t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e;}};},,,function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.Router=void 0;const r=n(6),o=n(31);class i{constructor(){this.outlets=[];}static getInstance(e=!1){return this._routerInstance&&!e||(this._routerInstance=new i),this._routerInstance}registerRouter(e){if(i._routes=e,this.outlets=Array.prototype.slice.call(document.querySelectorAll("[n-router-outlet]")),this.outlets){this.onRouterAction=new o.RouteEventTarget(e);const t=(e,t)=>{t&&(document.title=t),window.history.pushState({pathName:e},e,window.location.origin+e);};if(window.addEventListener("hashchange",n=>{var r;if(window.location.hash===n.oldURL.substring(n.oldURL.indexOf("#")))return n.preventDefault(),!1;let o=n.newURL.substring(n.newURL.indexOf("#"));o.endsWith("/")&&(o=o.slice(0,-1));const i=o?o.replace(/^#\//,"/"):"/",s=e[i]?e[i].component:null;if(s){const n=null===(r=e[i].data)||void 0===r?void 0:r.title,c=e[i].outlet,u=c?document.querySelector(`[n-router-outlet="${c}"]`):document.querySelector("[n-router-outlet]");t(o,n),this.setRouterOutlet(s,o,u,e[i].forced);}}),document.addEventListener("click",n=>{let o=n.target,i=o.getAttribute("n-link");if(!i){const e=r.DomOp.getParents(o,"a[n-link]");e&&1===e.length&&(o=e[0],i=o.getAttribute("n-link"));}if(i){document.querySelectorAll("[n-link]").forEach(e=>e.classList.remove(e.getAttribute("n-link"))),"true"!==i&&o.classList.add(i);const r=o.href.split("#");let s="",c=!1,u="";for(;;){if(2!==r.length){c=!0;break}if(s=r[1],!s){c=!0;break}if(!e[s]){c=!0;break}u=e[s].outlet;break}if(!c||c&&e["**"]){const n=e[s].component,r=e[s].forced;s.startsWith("#")||(s="#"+s),t(s);const o=u?document.querySelector(`[n-router-outlet="${u}"]`):document.querySelector("[n-router-outlet]");this.setRouterOutlet(n,s,o,r);}else console.warn("[@nyaf] A router link call has been executed,but requested link is not properly configured: "+n.target.href);}}),e){const n=e["/"];if(n){const e=n.component;t("/");const r=document.querySelector("[n-router-outlet]");this.setRouterOutlet(e,"/",r,n.forced);}}}}navigateRoute(e,t){var n,r,o;const s=i._routes;let c,u=null===(n=s[e])||void 0===n?void 0:n.component;const l=(null===(r=s[e])||void 0===r?void 0:r.forced)||!1;if(u||(u=null===(o=s["/"])||void 0===o?void 0:o.component),!u)throw new Error("Route not found and no default route defined");if(t||(t=s[e].outlet),c=t?document.querySelector(`[n-router-outlet="${t}"]`):document.querySelector("[n-router-outlet]"),!c)throw new Error("Outlet not found or route improper configured.");this.setRouterOutlet(u,e,c,l);}setRouterOutlet(e,t,n,r){let o=new CustomEvent("navigate",{bubbles:!0,cancelable:!0,composed:!0,detail:t});this.onRouterAction.dispatchEvent(o),n.__activatedComponent__||Object.defineProperty(n,"__activatedComponent__",{enumerable:!1,writable:!0,configurable:!1,value:""}),(r||n.__activatedComponent__!==e[Symbol.for("CustomElementSelector")])&&(n.__activatedComponent__=e[Symbol.for("CustomElementSelector")],n.innerHTML=`<${e[Symbol.for("CustomElementSelector")]}></${e[Symbol.for("CustomElementSelector")]}>`,o=new CustomEvent("navigated",{bubbles:!0,cancelable:!1,composed:!0,detail:t}),this.onRouterAction.dispatchEvent(o));}}t.Router=i;},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.Expand=void 0;const r=n(0);t.Expand=function(e){return function(t){if(!t.prototype)throw new Error("Decorator must be run on an instanciable class.");Object.defineProperty(t.prototype,r.Expands_Symbol,{get:function(){return e},configurable:!1,enumerable:!1});}};},,,,,,,,,,,,function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}});}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n];}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||r(t,e,n);},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),o(n(5),t),o(n(6),t),o(n(8),t),o(n(35),t),o(n(16),t),o(n(36),t),o(n(46),t),o(n(47),t),o(n(48),t),o(n(49),t),o(n(4),t),o(n(50),t),o(n(51),t),o(n(52),t),o(n(17),t),o(n(3),t);const s=i(n(7));t.default=s.default;},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});t.default=["abort","afterprint","animationend","animationiteration","animationstart","beforeprint","beforeunload","blur","canplay","canplaythrough","change","click","contextmenu","copy","cut","dblclick","drag","dragend","dragenter","dragleave","dragover","dragstart","drop","durationchange","ended","error","focus","focusin","focusout","fullscreenchange","fullscreenerror","hashchange","input","invalid","keydown","keypress","keyup","load","loadeddata","loadedmetadata","loadstart","message","mousedown","mouseenter","mouseleave","mousemove","mouseover","mouseout","mouseup","mousewheel","offline","online","open","pagehide","pageshow","paste","pause","play","playing","popstate","progress","ratechange","resize","reset","scroll","search","seeked","seeking","select","show","stalled","storage","submit","suspend","timeupdate","toggle","touchcancel","touchend","touchmove","touchstart","transitionend","unload","volumechange","waiting","wheel"];},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.RouteEventTarget=void 0;class r extends EventTarget{constructor(e){super(),this._routes=e;}get routes(){return this._routes}}t.RouteEventTarget=r;},function(e,t,n){var r=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},o=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{u(r.next(e));}catch(e){i(e);}}function c(e){try{u(r.throw(e));}catch(e){i(e);}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t);}))).then(s,c);}u((r=r.apply(e,t||[])).next());}))},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.NRepeaterComponent=void 0;const s=i(n(7)),c=n(9),u=n(4);let l=class extends u.BaseComponent{constructor(){super(),this.replace=(e,t)=>e.replace(/@@(.+?)@@/g,(e,n)=>t[n]);}render(){return o(this,void 0,void 0,(function*(){if(!this.data.source)return null;const e=this.data.source.map(e=>this.replace(this.innerHTML,e));return yield s.default.createElement(s.default.Fragment,null,e)}))}};l=r([c.Properties({source:[]})],l),t.NRepeaterComponent=l;},function(e,t,n){var r=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},o=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{u(r.next(e));}catch(e){i(e);}}function c(e){try{u(r.throw(e));}catch(e){i(e);}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t);}))).then(s,c);}u((r=r.apply(e,t||[])).next());}))},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.NOutletComponent=void 0;const s=i(n(7)),c=n(9),u=n(4),l=n(3);let a=class extends u.BaseComponent{constructor(){super();}render(){return o(this,void 0,void 0,(function*(){return yield s.default.createElement("div",{"n-router-outlet":this.data.name})}))}lifeCycle(e){l.LifeCycle.Load;}};a=r([c.Properties({name:""})],a),t.NOutletComponent=a;},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.NFinishComponent=void 0;const r=n(4),o=n(3);class i extends r.BaseComponent{constructor(){super();}render(){return null}lifeCycle(e){if(e===o.LifeCycle.Load){const{parentElement:e}=this;e.removeChild(this),e instanceof r.BaseComponent&&e.setup();}}}t.NFinishComponent=i;},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});},function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}});}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n];}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||r(t,e,n);};Object.defineProperty(t,"__esModule",{value:!0}),o(n(9),t),o(n(37),t),o(n(38),t),o(n(39),t),o(n(40),t),o(n(41),t),o(n(42),t),o(n(43),t),o(n(17),t),o(n(44),t),o(n(45),t);},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.Events=void 0;const r=n(0);t.Events=function(e){return function(t){!function(e,t){t=t.map(t=>`${t}_${e.name}`),Object.defineProperty(e,r.Events_Symbol_Eventlist,{get:function(){return t},enumerable:!1,configurable:!1});}(t,e);}};},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.Extends=void 0;const r=n(0);t.Extends=function(e){return function(t){!function(e,t){Object.defineProperty(e,r.Extends_Symbol,{value:t,enumerable:!1,configurable:!1});}(t,e);}};},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.ShadowDOM=void 0;const r=n(0);t.ShadowDOM=function(e=!0){return function(t){!function(e,t){Object.defineProperty(e,r.ShadowDOM_Symbol_WithShadow,{value:t,enumerable:!1,configurable:!1});}(t,e);}};},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.InjectService=void 0;const r=n(0);t.InjectService=function(e,t,n=!1){return function(o){if(o.prototype[r.InjectServices_Symbol]||(o.prototype[r.InjectServices_Symbol]=new Map),!o.prototype[r.InjectServices_Symbol].has(e)){const i=n?t.instance:new t;o.prototype[r.InjectServices_Symbol].set(e,i);}o.services||Object.defineProperty(o,"services",{get:function(){return o.prototype[r.InjectServices_Symbol]}});}};},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.CustomElement=void 0;const r=n(0);t.CustomElement=function(e){return function(t){Object.defineProperty(t,r.CustomElement_Symbol_Selector,{get:function(){return e},enumerable:!1,configurable:!1});}};},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.Select=void 0;const r=n(0);t.Select=function(e,t=!1){return function(n,o){Object.defineProperty(n,o,{get:function(){const n=e=>{const t=Array.from(e).map(e=>e);return {length:t.length,first:t.length>0?t[0]:null,last:t.length>0?t[t.length-1]:null,items:t}};return this.constructor[r.ShadowDOM_Symbol_WithShadow]?t?n(this.shadowRoot.querySelectorAll(e)):this.shadowRoot.querySelector(e):t?n(this.querySelectorAll(e)):this.querySelector(e)},enumerable:!1,configurable:!1});}};},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.UseParentStyles=void 0;const r=n(0);function o(e,t,n){Object.defineProperty(e,r.UseParentStyles_Symbol,{value:!!t||n,enumerable:!1,configurable:!1});}t.UseParentStyles=function(e){return function(t){if(e){o(t,!1,e.default);}else o(t,!0);}};},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.Dispose=void 0,t.Dispose=function(e){return function(t,n){!function(e,t,n){Object.defineProperty(e,`__dispose__${t}__`,{get:function(){return n},enumerable:!1,configurable:!1});}(t,n,e);}};},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.Directive=void 0;const r=n(0);t.Directive=function(e){return function(t){Object.defineProperty(t,r.Directive_Symbol_Selector,{get:()=>e,enumerable:!1,configurable:!1});}};},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.Observer=void 0;class r{constructor(e){if(this.topics={},void 0!==e)throw console.error("Observer is Singleton, don't call the ctor"),new Error("Observer is Singleton, don't call the ctor");this.hOP=this.topics.hasOwnProperty;}static getInstance(e=!1){return r._instance&&!e||(r._instance=new r(void 0)),r._instance}subscribe(e,t){this.hOP.call(this.topics,e)||(this.topics[e]=[]);const n=this.topics[e].push(t)-1;return {remove:()=>{delete this.topics[e][n],this.topics[e].splice(n,1);}}}publish(e,t){this.hOP.call(this.topics,e)&&this.topics[e].forEach(e=>{e.call(e,t);});}}t.Observer=r,r.Id="observer";},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});n(0);},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.BaseDirective=void 0;t.BaseDirective=class{constructor(e){this.host=e,this.setup();}setup(){}};},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.Expander=void 0;t.Expander=class{expand(){return Object.keys(this).map(e=>`${e}="${this[e]}"`).join(" ")}};}])}));
	});

	var JSX = /*@__PURE__*/getDefaultExportFromCjs(lib_umd);

	function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
	  try {
	    var info = gen[key](arg);
	    var value = info.value;
	  } catch (error) {
	    reject(error);
	    return;
	  }

	  if (info.done) {
	    resolve(value);
	  } else {
	    Promise.resolve(value).then(_next, _throw);
	  }
	}

	function _asyncToGenerator(fn) {
	  return function () {
	    var self = this,
	        args = arguments;
	    return new Promise(function (resolve, reject) {
	      var gen = fn.apply(self, args);

	      function _next(value) {
	        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
	      }

	      function _throw(err) {
	        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
	      }

	      _next(undefined);
	    });
	  };
	}

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}

	function styleInject(css, ref) {
	  if ( ref === void 0 ) ref = {};
	  var insertAt = ref.insertAt;

	  if (!css || typeof document === 'undefined') { return; }

	  var head = document.head || document.getElementsByTagName('head')[0];
	  var style = document.createElement('style');
	  style.type = 'text/css';

	  if (insertAt === 'top') {
	    if (head.firstChild) {
	      head.insertBefore(style, head.firstChild);
	    } else {
	      head.appendChild(style);
	    }
	  } else {
	    head.appendChild(style);
	  }

	  if (style.styleSheet) {
	    style.styleSheet.cssText = css;
	  } else {
	    style.appendChild(document.createTextNode(css));
	  }
	}

	var css_248z = "* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif;\n  height: auto;\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgb(255, 171, 208);\n  background: linear-gradient(135deg, rgb(255, 237, 171), rgb(234, 121, 170));\n}\n\ninput {\n  width: 90%;\n  padding: 10px;\n  font-size: 1em;\n  margin: 10px 10px 10px auto;\n  border-radius: 4px;\n  padding: 12px;\n  border-color: rgba(0, 0, 0, 0.1);\n  background: #ffffff;\n  box-shadow: 5px 5px 13px #d9d9d9, -5px -5px 13px #ffffff;\n}\n";
	styleInject(css_248z);

	var _dec, _class;
	var App = (_dec = lib_umd.CustomElement('app-main'), _dec(_class = class App extends lib_umd.BaseComponent {
	  constructor() {
	    super();
	  }

	  render() {
	    return _asyncToGenerator(function* () {
	      return JSX.createElement("app-todo", null);
	    })();
	  }

	}) || _class);

	var css_248z$1 = ".Logo {\n  width: 80px;\n  position: relative;\n  top: 50px;\n}\n\n.ToDo {\n  text-align: center;\n  width: 80vw;\n  max-width: 768px;\n  height: auto;\n  margin: 40px auto;\n  border-radius: 10px;\n  background: #ffffff;\n}\n\n.ToDoInput {\n  margin-top: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.ToDo-Header {\n  color: black;\n  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif;\n  font-weight: 400;\n  text-transform: uppercase;\n  margin: 70px auto 30px;\n}\n\n.ToDo-Subheader {\n  font-size: 1em;\n  color: black;\n  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif;\n  font-weight: 400;\n  margin: 4px auto 20px;\n}\n\n.ToDo-Add {\n  cursor: pointer;\n  width: 50px;\n  height: 50px;\n  border-color: transparent;\n  color: #73ff73;\n  font-size: 2rem;\n  border-radius: 10px;\n  background: linear-gradient(145deg, #e6e6e6, #ffffff);\n  box-shadow: 5px 5px 15px #cccccc, -5px -5px 15px #ffffff;\n}\n\n.ToDo-Add:hover {\n  box-shadow: 5px 5px 10px #cccccc, -5px -5px 10px #ffffff;\n}\n\n.ToDo-Container {\n  width: 80%;\n  margin: 0 auto;\n}\n\n.ToDo-ErrorContainer {\n  height: 100px;\n  width: 90%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: red;\n  font-size: 1rem;\n}\n";
	styleInject(css_248z$1);

	var _dec$1, _dec2, _class$1, _temp;
	console.log(Logo);
	var ToDo = (_dec$1 = lib_umd.CustomElement('app-todo'), _dec2 = lib_umd.Properties({
	  list: []
	}), _dec$1(_class$1 = _dec2(_class$1 = (_temp = class ToDo extends lib_umd.BaseComponent {
	  constructor() {
	    super();

	    _defineProperty(this, "toDo", void 0);

	    this.data.list = [{
	      id: 1,
	      text: "clean the house"
	    }, {
	      id: 2,
	      text: "buy milk"
	    }];
	    this.toDo = '';
	  }

	  generateId() {
	    if (this.data.list && this.data.list.length > 0) {
	      return Math.max(...this.data.list.map(t => t.id)) + 1;
	    } else {
	      return 1;
	    }
	  }

	  createNewToDoItem() {
	    //validate todo
	    if (!this.toDo) {
	      alert("Please enter a todo!");
	      return;
	    }

	    var newId = this.generateId();
	    var newToDo = {
	      id: newId,
	      text: this.toDo
	    };
	    this.data.list = [...this.data.list, newToDo];
	  }

	  handleKeyPress(e) {
	    if (e.key === "Enter") {
	      createNewToDoItem();
	    }
	  }

	  handleInput(e) {
	    this.toDo = e.target.value;
	  }

	  deleteItem(e) {
	    var id = e.detail;
	    this.data.list = this.data.list.filter(item => item.id !== id);
	  } // <img className="Logo" src={Logo.default} alt="@nyaf logo" />


	  render() {
	    var _this = this;

	    return _asyncToGenerator(function* () {
	      return JSX.createElement("div", {
	        className: "ToDo"
	      }, JSX.createElement("h1", {
	        className: "ToDo-Header"
	      }, "@nyaf To Do"), JSX.createElement("div", {
	        className: "ToDo-Container"
	      }, JSX.createElement("div", {
	        className: "ToDo-Content"
	      }, _this.data.list.map(item => {
	        return JSX.createElement("app-todo-item", {
	          item: item,
	          "n-on-delete": e => _this.deleteItem(e)
	        });
	      })), JSX.createElement("div", {
	        className: "ToDoInput"
	      }, JSX.createElement("input", {
	        type: "text",
	        value: _this.toDo,
	        "n-on-input": e => _this.handleInput(e),
	        "n-on-keypress": e => _this.handleKeyPress(e)
	      }), JSX.createElement("button", {
	        className: "ToDo-Add",
	        "n-on-click": _this.createNewToDoItem
	      }, "+"))));
	    })();
	  }

	}, _temp)) || _class$1) || _class$1);

	var css_248z$2 = ".ToDoItem {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.ToDoItem-Text {\n  width: 90%;\n  padding: 12px;\n  margin-right: 10px;\n  border-radius: 4px;\n  border-color: rgba(0, 0, 0, 0.5);\n  background: #ffffff;\n  box-shadow: 5px 5px 13px #d9d9d9, -5px -5px 13px #ffffff;\n  text-align: left;\n}\n\n.ToDoItem-Delete {\n  width: 50px;\n  height: 50px;\n  border-radius: 10px;\n  background: linear-gradient(145deg, #e6e6e6, #ffffff);\n  box-shadow: 5px 5px 15px #cccccc, -5px -5px 15px #ffffff;\n  border-color: transparent;\n  color: red;\n  font-size: 2rem;\n  cursor: pointer;\n}\n\n.ToDoItem-Delete:hover {\n  box-shadow: 5px 5px 10px #cccccc, -5px -5px 10px #ffffff;\n}\n";
	styleInject(css_248z$2);

	var _dec$2, _dec2$1, _dec3, _class$2;
	var ToDoItem = (_dec$2 = lib_umd.CustomElement('app-todo-item'), _dec2$1 = lib_umd.Properties({
	  item: {
	    text: '',
	    id: 0
	  }
	}), _dec3 = lib_umd.Events(['delete']), _dec$2(_class$2 = _dec2$1(_class$2 = _dec3(_class$2 = class ToDoItem extends lib_umd.BaseComponent {
	  constructor() {
	    super();
	  }

	  render() {
	    var _this = this;

	    return _asyncToGenerator(function* () {
	      return JSX.createElement("div", {
	        className: "ToDoItem"
	      }, JSX.createElement("p", {
	        className: "ToDoItem-Text"
	      }, _this.data.item.text), JSX.createElement("button", {
	        className: "ToDoItem-Delete",
	        "n-on-click": () => _this.deleteItem()
	      }, "-"));
	    })();
	  }

	  deleteItem() {
	    this.dispatch('delete', {
	      bubbles: true,
	      detail: this.data.item.id
	    });
	  }

	}) || _class$2) || _class$2) || _class$2);

	lib_umd.GlobalProvider.bootstrap({
	  components: [App, ToDo, ToDoItem]
	});
	var root = document.getElementById("root");
	root.innerHTML = '<app-main></app-main>';

}());
