!function(){function t(t){return t&&t.__esModule?t.default:t}var e={};function n(t,e,n,r,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,s,"next",t)}function s(t){n(i,o,a,c,s,"throw",t)}c(void 0)}))}};var r={},o=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var o=e&&e.prototype instanceof m?e:m,a=Object.create(o.prototype),i=new T(r||[]);return a._invoke=function(t,e,n){var r=h;return function(o,a){if(r===d)throw new Error("Generator is already running");if(r===v){if("throw"===o)throw a;return G()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=k(i,n);if(c){if(c===p)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var s=u(t,e,n);if("normal"===s.type){if(r=n.done?v:f,s.arg===p)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=v,n.method="throw",n.arg=s.arg)}}}(t,n,i),a}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var h="suspendedStart",f="suspendedYield",d="executing",v="completed",p={};function m(){}function y(){}function g(){}var _={};s(_,a,(function(){return this}));var w=Object.getPrototypeOf,b=w&&w(w(P([])));b&&b!==n&&r.call(b,a)&&(_=b);var x=g.prototype=m.prototype=Object.create(_);function L(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function n(o,a,i,c){var s=u(t[o],t,a);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(h).then((function(t){l.value=t,i(l)}),(function(t){return n("throw",t,i,c)}))}c(s.arg)}var o;this._invoke=function(t,r){function a(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(a,a):a()}}function k(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,k(t,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=u(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,p;var a=o.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,p):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function P(t){if(t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}return{next:G}}function G(){return{value:e,done:!0}}return y.prototype=g,s(x,"constructor",g),s(g,"constructor",y),y.displayName=s(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},L(E.prototype),s(E.prototype,i,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new E(l(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(x),s(x,c,"Generator"),s(x,a,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=P,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(s&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:P(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),p}},t}(r);try{regeneratorRuntime=o}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}var a,i="https://api.themoviedb.org/3",c="14ce8915ef52d801924d89668f2ca827";function s(t){return fetch("".concat(i,"/trending/movie/day?api_key=").concat(c,"&page=").concat(t)).then((function(t){if(!t.ok)throw new Error(t.status);return t.json()})).catch((function(t){return t.status}))}function l(){return fetch("".concat(i,"/genre/movie/list?api_key=").concat(c)).then((function(t){if(!t.ok)throw new Error(t.status);return t.json()})).catch((function(t){return t.status}))}function u(t,e){t.forEach((function(t){var n=t.genre_ids.map((function(t){var n=e.find((function(e){return e.id===t}));return n?n.name:"Unknown"}));t.genres=n.length<3?n.join(", "):"".concat(n[0],", ").concat(n[1]," and other")}))}function h(t){return t.map((function(t){var e=t.id,n=t.poster_path,r=t.original_title,o=t.release_date,i=t.genres,c=o.slice(0,4);a="https://image.tmdb.org/t/p/original"+n;var s,l='\n        <li class="item" data-id="'.concat(e,'">\n            <a class="item__link" href="">\n            <div class="item__img-frame">\n                <img\n                class="item__img"\n                data-id="').concat(e,'"\n                src=').concat(a,'\n                alt="').concat(r,'"\n                loading="lazy"\n                />\n            </div>\n            <div class="item__text-frame">\n                <h3 class="item__text title">').concat(r,'</h3>\n                <h3 class="item__text">').concat(i," | ").concat(c,"</h3>\n            </div>\n            </a>\n        </li>");(s=".gallery",document.querySelector(s)).insertAdjacentHTML("beforeend",l)})).join("")}function f(){return(f=t(e)(t(r).mark((function e(n){var o,a;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l().then((function(t){return t.genres}));case 2:return o=t.sent,t.next=5,s(n).then((function(t){return t.results}));case 5:u(a=t.sent,o),h(a);case 8:case"end":return t.stop()}}),e)})))).apply(this,arguments)}!function(t){f.apply(this,arguments)}(1);var d="https://api.themoviedb.org/3",v="14ce8915ef52d801924d89668f2ca827",p="https://image.tmdb.org/t/p/original",m=function(t){return document.querySelector(t)};function y(){document.removeEventListener("keydown",g),m(".backdrop").classList.add("is-hidden"),m("body").classList.remove("no-scroll"),m(".modal__window").innerHTML=""}function g(t){"Escape"===t.code&&y()}m(".gallery").addEventListener("click",(function(t){if(t.preventDefault(),!t.target.closest("li")&&!t.target.classList.contains("item")||t.target.classList.contains("gallery"))return;(e=t.target.closest("li").dataset.id,fetch("".concat(d,"/movie/").concat(e,"?api_key=").concat(v)).then((function(t){if(!t.ok)throw new Error(t.status);return t.json()})).catch((function(t){return console.log(t)}))).then((function(t){!function(t){var e=t.id,n=t.original_title,r=t.overview,o=t.poster_path,a=t.popularity,i=t.vote_average,c=t.vote_count,s=t.genres;src=p+o;var l=Math.round(a),u=s.map((function(t){return t.name})).join(", "),h='\n            <div class="modal__container">\n                <div class="modal__img-wrap">\n                    <img class="modal__img" src="'.concat(src,'" alt="').concat(n,'">\n                </div>\n                <div class="modal__about-movie">\n                    <h3 class="modal__title" data-id="').concat(e,'">').concat(n,'</h3>\n                    <div class="modal__text-wrap">\n                        <ul>\n                            <li class="modal__text-characteristic">Vote / Votes</li>\n                            <li class="modal__text-characteristic-value"><span class="vote average">').concat(i,'</span> / <span class="vote count">').concat(c,'</span></li>\n                        </ul>\n                        <ul>\n                            <li class="modal__text-characteristic">Popularity</li>\n                            <li class="modal__text-characteristic-value">').concat(l,'</li>\n                        </ul>\n                        <ul>\n                            <li class="modal__text-characteristic">Original Title</li>\n                            <li class="modal__text-characteristic-value">').concat(n,'</li>\n                        </ul>\n                        <ul>\n                            <li class="modal__text-characteristic">Genre</li>\n                            <li class="modal__text-characteristic-value">').concat(u,'</li>\n                        </ul>\n                    </div>\n                    <div class="modal__overview-wrap">\n                        <h3 class="modal__overview-title">About</h3>\n                        <p class="modal__overview-text">').concat(r,'</p>\n                    </div>\n                    <div class="modal__btn-wrap">\n                        <button class="modal__btn w" type="button">add to Watched</button>\n                        <button class="modal__btn q" type="button">add to queue</button>\n                    </div>\n                </div>\n            </div>\n      ');m(".modal__window").innerHTML=h}(t)})),document.addEventListener("keydown",g),m(".backdrop").classList.remove("is-hidden"),m("body").classList.add("no-scroll");var e})),m(".modal__btn-close").addEventListener("click",y),m(".backdrop").addEventListener("click",(function(t){t.currentTarget===t.target&&y()}))}();
//# sourceMappingURL=library.24ff2aa1.js.map
