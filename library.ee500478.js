!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=e.parcelRequirea102;null==o&&((o=function(t){if(t in n)return n[t].exports;if(t in r){var e=r[t];delete r[t];var o={id:t,exports:{}};return n[t]=o,e.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){r[t]=e},e.parcelRequirea102=o),o.register("kMC0W",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){if(Array.isArray(t))return r.default(t)};var n,r=(n=o("8NIkP"))&&n.__esModule?n:{default:n}})),o.register("8NIkP",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}})),o.register("7AJDX",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}})),o.register("8CtQK",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){if(!t)return;if("string"==typeof t)return r.default(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(t,e)};var n,r=(n=o("8NIkP"))&&n.__esModule?n:{default:n}}));var a={};function i(t,e,n,r,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function c(t){i(a,r,o,c,u,"next",t)}function u(t){i(a,r,o,c,u,"throw",t)}c(void 0)}))}};var c={},u=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),i=new N(r||[]);return a._invoke=function(t,e,n){var r=d;return function(o,a){if(r===p)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw a;return M()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=k(i,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var u=s(t,e,n);if("normal"===u.type){if(r=n.done?h:f,u.arg===m)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=h,n.method="throw",n.arg=u.arg)}}}(t,n,i),a}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var d="suspendedStart",f="suspendedYield",p="executing",h="completed",m={};function v(){}function g(){}function _(){}var y={};u(y,a,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b(T([])));w&&w!==n&&r.call(w,a)&&(y=w);var x=_.prototype=v.prototype=Object.create(y);function L(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function n(o,a,i,c){var u=s(t[o],t,a);if("throw"!==u.type){var l=u.arg,d=l.value;return d&&"object"==typeof d&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(d).then((function(t){l.value=t,i(l)}),(function(t){return n("throw",t,i,c)}))}c(u.arg)}var o;this._invoke=function(t,r){function a(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(a,a):a()}}function k(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,k(t,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=s(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,m;var a=o.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,m):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function T(t){if(t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}return{next:M}}function M(){return{value:e,done:!0}}return g.prototype=_,u(x,"constructor",_),u(_,"constructor",g),g.displayName=u(_,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,u(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},L(E.prototype),u(E.prototype,i,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new E(l(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(x),u(x,c,"Generator"),u(x,a,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=T,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;j(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:T(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),m}},t}(c);try{regeneratorRuntime=u}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=u:Function("r","regeneratorRuntime = r")(u)}var l,s="https://api.themoviedb.org/3",d="14ce8915ef52d801924d89668f2ca827";function f(t){return fetch("".concat(s,"/trending/movie/day?api_key=").concat(d,"&page=").concat(t)).then((function(t){if(!t.ok)throw new Error(t.status);return t.json()})).catch((function(t){return t.status}))}function p(){return fetch("".concat(s,"/genre/movie/list?api_key=").concat(d)).then((function(t){if(!t.ok)throw new Error(t.status);return t.json()})).catch((function(t){return t.status}))}function h(t,e){t.forEach((function(t){var n=t.genre_ids.map((function(t){var n=e.find((function(e){return e.id===t}));return n?n.name:"Unknown"}));t.genres=n.length<3?n.join(", "):"".concat(n[0],", ").concat(n[1]," and other")}))}function m(t){return t.map((function(t){var e=t.id,n=t.poster_path,r=t.original_title,o=t.release_date,a=t.genres,i=o.slice(0,4);l="https://image.tmdb.org/t/p/original"+n;var c,u='\n        <li class="item" data-id="'.concat(e,'">\n            <a class="item__link" href="">\n            <div class="item__img-frame">\n                <img\n                class="item__img"\n                data-id="').concat(e,'"\n                src=').concat(l,'\n                alt="').concat(r,'"\n                loading="lazy"\n                />\n            </div>\n            <div class="item__text-frame">\n                <h3 class="item__text title">').concat(r,'</h3>\n                <h3 class="item__text">').concat(a," | ").concat(i,"</h3>\n            </div>\n            </a>\n        </li>");(c=".gallery",document.querySelector(c)).insertAdjacentHTML("beforeend",u)})).join("")}function v(t){return g.apply(this,arguments)}function g(){return(g=t(a)(t(c).mark((function e(n){var r,o;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=localStorage.getItem("current-page-number")?localStorage.getItem("current-page-number"):1,t.next=3,p().then((function(t){return t.genres}));case 3:return r=t.sent,t.next=6,f(n).then((function(t){return t.results}));case 6:h(o=t.sent,r),m(o);case 9:case"end":return t.stop()}}),e)})))).apply(this,arguments)}v(1);var _,y="https://api.themoviedb.org/3",b="14ce8915ef52d801924d89668f2ca827",w="https://image.tmdb.org/t/p/original",x=function(t){return document.querySelector(t)};function L(){document.removeEventListener("keydown",E),x(".backdrop").classList.add("is-hidden"),x("body").classList.remove("no-scroll"),x(".modal__window").innerHTML=""}function E(t){"Escape"===t.code&&L()}x(".gallery").addEventListener("click",(function(t){if(t.preventDefault(),!t.target.closest("li")&&!t.target.classList.contains("item")||t.target.classList.contains("gallery"))return;(e=t.target.closest("li").dataset.id,fetch("".concat(y,"/movie/").concat(e,"?api_key=").concat(b)).then((function(t){if(!t.ok)throw new Error(t.status);return t.json()})).catch((function(t){return console.log(t)}))).then((function(t){!function(t){var e=t.id,n=t.original_title,r=t.overview,o=t.poster_path,a=t.popularity,i=t.vote_average,c=t.vote_count,u=t.genres;_=w+o;var l=Math.round(a),s=u.map((function(t){return t.name})).join(", "),d='\n            <div class="modal__container">\n                <div class="modal__img-wrap">\n                    <img class="modal__img" src="'.concat(_,'" alt="').concat(n,'">\n                </div>\n                <div class="modal__about-movie">\n                    <h3 class="modal__title" data-id="').concat(e,'">').concat(n,'</h3>\n                    <div class="modal__text-wrap">\n                        <ul>\n                            <li class="modal__text-characteristic">Vote / Votes</li>\n                            <li class="modal__text-characteristic-value"><span class="vote average">').concat(i,'</span> / <span class="vote count">').concat(c,'</span></li>\n                        </ul>\n                        <ul>\n                            <li class="modal__text-characteristic">Popularity</li>\n                            <li class="modal__text-characteristic-value">').concat(l,'</li>\n                        </ul>\n                        <ul>\n                            <li class="modal__text-characteristic">Original Title</li>\n                            <li class="modal__text-characteristic-value">').concat(n,'</li>\n                        </ul>\n                        <ul>\n                            <li class="modal__text-characteristic">Genre</li>\n                            <li class="modal__text-characteristic-value">').concat(s,'</li>\n                        </ul>\n                    </div>\n                    <div class="modal__overview-wrap">\n                        <h3 class="modal__overview-title">About</h3>\n                        <p class="modal__overview-text">').concat(r,'</p>\n                    </div>\n                    <div class="modal__btn-wrap">\n                        <button class="modal__btn w" type="button">add to Watched</button>\n                        <button class="modal__btn q" type="button">add to queue</button>\n                    </div>\n                </div>\n            </div>\n      ');x(".modal__window").innerHTML=d}(t)})),document.addEventListener("keydown",E),x(".backdrop").classList.remove("is-hidden"),x("body").classList.add("no-scroll");var e})),x(".modal__btn-close").addEventListener("click",L),x(".backdrop").addEventListener("click",(function(t){t.currentTarget===t.target&&L()}));var k,S=function(t){return document.querySelector(t)};window.addEventListener("scroll",(function(){Math.round(document.documentElement.scrollTop)>230?k=setTimeout((function(){setTimeout((function(){Math.round(document.documentElement.scrollTop)>230&&S(".scroll__btn").classList.remove("is-hidden")}),1)}),1e3):(S(".scroll__btn").classList.add("is-hidden"),clearTimeout(k))})),S(".scroll__btn").addEventListener("click",(function(){S(".scroll__btn").classList.add("is-hidden"),document.documentElement.scrollTop>0&&window.scrollTo({top:0,left:0,behavior:"smooth"})}));var j={};Object.defineProperty(j,"__esModule",{value:!0}),j.default=function(t){return N.default(t)||T.default(t)||O.default(t)||M.default()};var N=I(o("kMC0W")),T=I(o("7AJDX")),M=I(o("8CtQK")),O=I(o("auk6i"));function I(t){return t&&t.__esModule?t:{default:t}}var P=function(t){return document.querySelector(t)},A=Number(localStorage.getItem("current-page-number"))||1;function C(){var t=P(".pagination__btn-wrap").firstElementChild,e=P(".pagination__btn-wrap").lastElementChild,n=Number(t.dataset.index)-1,r=n+1;if(t.classList.contains("current-page")&&0!==Number(t.dataset.index)){e.remove();var o='<button class="pagination__btn num" tupe="button" data-index="'.concat(n,'">').concat(r,"</button>");P(".pagination__btn-wrap").insertAdjacentHTML("afterbegin",o)}}function q(){var t=P(".pagination__btn-wrap").firstElementChild,e=P(".pagination__btn-wrap").lastElementChild,n=Number(e.dataset.index)+1,r=Number(n)+Number(1);if(e.classList.contains("current-page")){t.remove();var o='<button class="pagination__btn num" tupe="button" data-index="'.concat(n,'">').concat(r,"</button>");P(".pagination__btn-wrap").insertAdjacentHTML("beforeend",o)}}function G(t){1===Number(t)?P(".pagination__btn.prev").classList.add("not-active"):P(".pagination__btn.prev").classList.remove("not-active")}function H(){var e=localStorage.getItem("current-page-number"),n=document.querySelectorAll(".pagination__btn.num"),r=document.querySelector(".current-page"),o=t(j)(n).find((function(t){return Number(t.textContent)===Number(e)}));r&&o&&(r.classList.remove("current-page"),o.classList.add("current-page"))}P(".pagination__btn-wrap").addEventListener("click",(function(t){P(".gallery").innerHTML="";var e=document.querySelector(".current-page");e&&e.classList.remove("current-page");t.target.classList.add("current-page"),A=t.target.textContent,localStorage.setItem("current-page-number",A),G(Number(localStorage.getItem("current-page-number"))||1),C(),q(),H(),v(Number(localStorage.getItem("current-page-number"))||1)})),P(".pagination__btn.prev").addEventListener("click",(function(){P(".gallery").innerHTML="";var t=document.querySelector(".current-page");t&&t.classList.remove("current-page");t.previousElementSibling.classList.add("current-page");var e=Number(t.textContent)-1;localStorage.setItem("current-page-number",e),G(Number(localStorage.getItem("current-page-number"))||1),C(),H(),v(Number(localStorage.getItem("current-page-number"))||1)})),P(".pagination__btn.next").addEventListener("click",(function(){P(".gallery").innerHTML="";var t=document.querySelector(".current-page");t&&t.classList.remove("current-page");t.nextElementSibling.classList.add("current-page");var e=Number(t.textContent)+1;localStorage.setItem("current-page-number",e),G(Number(localStorage.getItem("current-page-number"))||1),q(),H(),v(Number(localStorage.getItem("current-page-number"))||1)})),H(),G(A)}();
//# sourceMappingURL=library.ee500478.js.map
