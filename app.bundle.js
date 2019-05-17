!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e,n){var i=n(1);"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(3)(i,r);i.locals&&(t.exports=i.locals)},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,'/* * General settings */\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  font-family: "Titillium Web", "Roboto", "Open Sans";\n  font-weight: 400;\n  font-size: 100%;\n}\n\na {\n  text-decoration: none;\n}\n\nli {\n  list-style-type: none;\n}\n\nbody {\n  font-family: "Open Sans", sans-serif;\n  color: rgb(97, 96, 96);\n}\n\n/* * Searcing Bar*/\n.search {\n  width: 100%;\n  position: relative;\n  display: flex;\n}\n\n.searchTerm {\n  width: 100%;\n  border: 3px solid rgb(70, 70, 70);\n  border-right: none;\n  padding: 5px;\n  height: 36px;\n  border-radius: 5px 0 0 5px;\n  outline: none;\n  color: rgb(70, 70, 70);\n}\n\n.searchButton {\n  width: 40px;\n  height: 36px;\n  border: 1px solid rgb(70, 70, 70);\n  background: rgb(70, 70, 70);\n  text-align: center;\n  color: #fff;\n  border-radius: 0 5px 5px 0;\n  cursor: pointer;\n  font-size: 16px;\n  outline: none;\n}\n\n.wrap {\n  margin: 25px auto 0;\n  width: 50%;\n  min-width: 320px;\n}\n\n/* * Slider */\n.slider {\n  margin: 25px auto 0;\n  width: 1400px;\n  height: 500px;\n}\n\n.wrapper {\n  position: relative;\n  overflow: hidden;\n  height: 500px;\n  background: #fff;\n}\n\n.items {\n  position: relative;\n  display: flex;\n  width: 200000px;\n  flex-wrap: nowrap;\n  height: 500px;\n  cursor: grab;\n  cursor: -moz-grab;\n  cursor: -webkit-grab;\n}\n\n.items:active {\n  cursor: grabbing;\n  cursor: -moz-grabbing;\n  cursor: -webkit-grabbing;\n}\n\n#items.shifting {\n  transition: left 0.5s ease-out;\n}\n\n.slide {\n  position: relative;\n  padding: 15px 0;\n  width: 350px;\n  height: 490px;\n  box-sizing: content-box;\n  overflow: hidden;\n  transition: all 1s cubic-bezier(0.67, 0.41, 0.49, 0.94);\n}\n\n.clip {\n  margin: 0 auto;\n  padding: 5px;\n  width: 320px;\n  height: 450px;\n  box-sizing: content-box;\n  transition: 0.4s;\n  overflow: hidden;\n}\n\n.clip:hover {\n  transform: translateY(-10px);\n  -webkit-box-shadow: 1px 1px 5px 1px #8c7d84;\n  box-shadow: 1px 1px 5px 1px #8c7d84;\n}\n\n.clip-title-link {\n  display: block;\n  font-size: 17px;\n  color: rgb(85, 84, 84);\n  width: 320px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.clip-title-link:hover {\n  font-size: 17px;\n  color: rgb(27, 27, 27);\n}\n\n.clip-author,\n.clip-upload,\n.clip-view-count {\n  padding-top: 8px;\n  font-size: 16px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.description-module {\n  width: 320px;\n  margin: 0;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 8;\n  -webkit-box-orient: vertical;\n}\n\n.clip-description {\n  margin: 0;\n  padding-top: 8px;\n  font-size: 12px;\n}\n\n.control-wrap {\n  padding: 15px 0;\n  display: none;\n  justify-content: center;\n}\n\n.control {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  -moz-border-radius: 50px;\n  -webkit-border-radius: 50px;\n  color: #fff;\n  text-align: center;\n  padding: 2px 0;\n  font-size: 12px;\n  user-select: none;\n}\n\n.prev {\n  opacity: 0;\n}\n\n.prev,\n.next {\n  background-color: rgb(165, 165, 165);\n  cursor: pointer;\n}\n\n.current {\n  background-color: rgb(70, 70, 70);\n}\n\n.current:hover {\n  cursor: default;\n}\n\n.prev:hover,\n.next:hover {\n  background-color: rgb(70, 70, 70);\n}\n\n.control + .control {\n  margin-left: 20px;\n}\n\n.tipPrev,\n.tipNext {\n  z-index: 1;\n  position: absolute;\n  top: 570px;\n  padding: 5px 0;\n  width: 24px;\n  border-radius: 6px;\n  background-color: rgb(70, 70, 70);\n  color: #fff;\n  text-align: center;\n  font-size: 12px;\n  transition: opacity 0.3s;\n  user-select: none;\n}\n\n.tipPrev {\n  margin-left: -40px;\n  opacity: 0;\n}\n\n.tipNext {\n  margin-left: 40px;\n  opacity: 0;\n}\n\nimg[src=""] {\n  visibility: hidden;\n}\n\n/* * Media queries for Slider */\n@media screen and (max-width: 1420px) {\n  .slider {\n    width: 1080px;\n  }\n\n  .slide {\n    width: 360px;\n  }\n}\n\n@media screen and (max-width: 1100px) {\n  .slider {\n    width: 730px;\n  }\n\n  .slide {\n    width: 365px;\n  }\n}\n\n@media screen and (max-width: 730px) {\n  .wrap {\n    margin: 20px auto 0;\n  }\n\n  .slider {\n    margin: 0px auto 0;\n    width: 320px;\n    height: 390px;\n  }\n\n  .wrapper {\n    height: 390px;\n  }\n\n  .items {\n    height: 390px;\n  }\n\n  .slide {\n    width: 320px;\n    height: 380px;\n  }\n\n  .clip {\n    height: 380px;\n  }\n\n  .description-module {\n    -webkit-line-clamp: 3;\n  }\n\n  .clip:hover {\n    transform: none;\n    -webkit-box-shadow: none;\n    box-shadow: none;\n  }\n\n  .tipPrev,\n  .tipNext {\n    display: none;\n  }\n}\n',""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var r=(s=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),o=i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"});return[n].concat(o).concat([r]).join("\n")}var s;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];null!=o&&(i[o]=!0)}for(r=0;r<t.length;r++){var s=t[r];null!=s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e,n){var i,r,o={},s=(i=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=i.apply(this,arguments)),r}),a=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var i=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}e[t]=i}return e[t]}}(),c=null,l=0,d=[],u=n(4);function p(t,e){for(var n=0;n<t.length;n++){var i=t[n],r=o[i.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](i.parts[s]);for(;s<i.parts.length;s++)r.parts.push(v(i.parts[s],e))}else{var a=[];for(s=0;s<i.parts.length;s++)a.push(v(i.parts[s],e));o[i.id]={id:i.id,refs:1,parts:a}}}}function h(t,e){for(var n=[],i={},r=0;r<t.length;r++){var o=t[r],s=e.base?o[0]+e.base:o[0],a={css:o[1],media:o[2],sourceMap:o[3]};i[s]?i[s].parts.push(a):n.push(i[s]={id:s,parts:[a]})}return n}function f(t,e){var n=a(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=d[d.length-1];if("top"===t.insertAt)i?i.nextSibling?n.insertBefore(e,i.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),d.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=a(t.insertAt.before,n);n.insertBefore(e,r)}}function m(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=d.indexOf(t);e>=0&&d.splice(e,1)}function w(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var i=function(){0;return n.nc}();i&&(t.attrs.nonce=i)}return b(e,t.attrs),f(t,e),e}function b(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function v(t,e){var n,i,r,o;if(e.transform&&t.css){if(!(o="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=o}if(e.singleton){var s=l++;n=c||(c=w(e)),i=g.bind(null,n,s,!1),r=g.bind(null,n,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",b(e,t.attrs),f(t,e),e}(e),i=function(t,e,n){var i=n.css,r=n.sourceMap,o=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||o)&&(i=u(i));r&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var s=new Blob([i],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,e),r=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=w(e),i=function(t,e){var n=e.css,i=e.media;i&&t.setAttribute("media",i);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),r=function(){m(n)});return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else r()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=s()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=h(t,e);return p(n,e),function(t){for(var i=[],r=0;r<n.length;r++){var s=n[r];(a=o[s.id]).refs--,i.push(a)}t&&p(h(t,e),e);for(r=0;r<i.length;r++){var a;if(0===(a=i[r]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete o[a.id]}}}};var y,x=(y=[],function(t,e){return y[t]=e,y.filter(Boolean).join("\n")});function g(t,e,n,i){var r=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=x(e,r);else{var o=document.createTextNode(r),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,i=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r,o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?t:(r=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:i+o.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(t,e,n){"use strict";n.r(e);n(0);class i{constructor(){this.data=""}drawSearchBar(){this.data="";const t=document.createElement("DIV");t.setAttribute("class","wrap");const e=document.createElement("DIV");e.setAttribute("class","search");const n=document.createElement("INPUT");n.setAttribute("class","searchTerm"),n.setAttribute("type","text"),n.setAttribute("placeholder","What are you looking for?"),n.setAttribute("id","searchBar");const i=document.createElement("BUTTON");i.setAttribute("class","searchButton"),i.setAttribute("type","submit");const r=document.createElement("I");r.setAttribute("class","fa fa-search"),t.appendChild(e),e.appendChild(n),e.appendChild(i),i.appendChild(r),document.body.appendChild(t);const o=document.createElement("INPUT");o.setAttribute("id","sendInfo"),o.setAttribute("value",""),o.style.display="none",document.body.appendChild(o)}}class r{constructor(t){this.query=t,this.data={},this.apiKey="AIzaSyBJF6IlnlKKKiAuAWD-zJuG2zhjsvAcdw8"}makeSearchIdUrl(t){return`https://www.googleapis.com/youtube/v3/search?&maxResults=15&type=video&key=${this.apiKey}&part=snippet&q=${t}&fields=items/id/videoId`}async getVideoId(){const t=await fetch(this.makeSearchIdUrl(this.query));return await t.json()}async makeStatisticUrl(){let t=await this.getVideoId();t=t.items;const e=[];return t.forEach(t=>{e.push(t.id.videoId)}),`https://www.googleapis.com/youtube/v3/videos?key=${this.apiKey}&id=${e.join(",")}&part=snippet,statistics`}async getResponceData(){const t=await this.makeStatisticUrl(),e=await fetch(t);return await e.json()}}class o{constructor(t,e){this.data=t,this.number=e,this.basicLink=this.data.items[this.number]}fillDataOfVideoObj(){this.title=this.basicLink.snippet.title,this.id=this.basicLink.id,this.link=`https://www.youtube.com/watch?v=${this.id}`,this.clipPreview=this.basicLink.snippet.thumbnails.medium.url,this.description=this.basicLink.snippet.description,this.channelName=this.basicLink.snippet.channelTitle,this.uploadDate=this.basicLink.snippet.publishedAt.slice(0,10),this.viewCount=this.basicLink.statistics.viewCount}}class s{constructor(){this.data=null}drawMoreClips(){this.data=null;const t=document.createElement("DIV");t.setAttribute("class","slide");const e=document.createElement("DIV");e.setAttribute("class","clip");const n=document.createElement("IMG");n.setAttribute("class","clip-preview"),n.setAttribute("data-new","data-new"),n.setAttribute("width","320"),n.setAttribute("height","180"),n.setAttribute("src","");const i=document.createElement("H2");i.setAttribute("class","clip-title");const r=document.createElement("A");r.setAttribute("class","clip-title-link"),r.setAttribute("data-new","data-new");const o=document.createElement("DIV");o.setAttribute("class","clip-author"),o.setAttribute("data-new","data-new");const s=document.createElement("DIV");s.setAttribute("class","clip-upload"),s.setAttribute("data-new","data-new");const a=document.createElement("DIV");a.setAttribute("class","clip-view-count"),a.setAttribute("data-new","data-new");const c=document.createElement("DIV");c.setAttribute("class","description-module");const l=document.createElement("P");l.setAttribute("class","clip-description"),l.setAttribute("data-new","data-new"),e.appendChild(n),e.appendChild(i),i.appendChild(r),e.appendChild(o),e.appendChild(s),e.appendChild(a),c.appendChild(l),e.appendChild(c),t.appendChild(e);const d=document.querySelector("#items");d.appendChild(t);const u=d.lastElementChild;for(let t=0;t<14;t+=1)d.appendChild(u.cloneNode(!0))}drawSlider(){this.data=null;const t=document.createElement("DIV");t.setAttribute("class","slider"),t.setAttribute("id","slider");const e=document.createElement("DIV");e.setAttribute("class","wrapper");const n=document.createElement("DIV");n.setAttribute("class","items"),n.setAttribute("id","items");const i=document.createElement("DIV");i.setAttribute("class","slide");const r=document.createElement("DIV");r.setAttribute("class","clip");const o=document.createElement("IMG");o.setAttribute("class","clip-preview"),o.setAttribute("data-new","data-new"),o.setAttribute("width","320"),o.setAttribute("height","180"),o.setAttribute("src","");const s=document.createElement("H2");s.setAttribute("class","clip-title");const a=document.createElement("A");a.setAttribute("class","clip-title-link"),a.setAttribute("data-new","data-new");const c=document.createElement("DIV");c.setAttribute("class","clip-author"),c.setAttribute("data-new","data-new");const l=document.createElement("DIV");l.setAttribute("class","clip-upload"),l.setAttribute("data-new","data-new");const d=document.createElement("DIV");d.setAttribute("class","clip-view-count"),d.setAttribute("data-new","data-new");const u=document.createElement("DIV");u.setAttribute("class","description-module");const p=document.createElement("P");p.setAttribute("class","clip-description"),p.setAttribute("data-new","data-new"),r.appendChild(o),r.appendChild(s),s.appendChild(a),r.appendChild(c),r.appendChild(l),r.appendChild(d),u.appendChild(p),r.appendChild(u),i.appendChild(r),n.appendChild(i),e.appendChild(n),t.appendChild(e);for(let t=0;t<14;t+=1)n.appendChild(i.cloneNode(!0));document.body.appendChild(t);const h=document.createElement("DIV");h.setAttribute("class","control-wrap"),h.setAttribute("id","controlWrap");const f=document.createElement("DIV");f.setAttribute("class","control prev"),f.setAttribute("id","prev");const m=document.createElement("DIV");m.setAttribute("class","control current"),m.setAttribute("id","current");const w=document.createElement("DIV");w.setAttribute("class","control next"),w.setAttribute("id","next");const b=document.createElement("DIV");b.setAttribute("class","tipPrev"),b.setAttribute("id","tipPrev");const v=document.createElement("DIV");v.setAttribute("class","tipNext"),v.setAttribute("id","tipNext"),h.appendChild(f),h.appendChild(m),h.appendChild(w),h.appendChild(b),h.appendChild(v),document.body.appendChild(h)}}class a{constructor(){this.slider=document.querySelector("#slider"),this.data=!1}runSlider(){this.slider=document.querySelector("#slider");const t=document.querySelector("#slider"),e=document.querySelector("#items"),n=document.querySelector("#prev"),i=document.querySelector("#current"),r=document.querySelector("#next"),o=document.querySelector("#tipPrev"),s=document.querySelector("#tipNext");let a=0,c=0,l=0,d=4,u=null,p=0,h=350;function f(){const t=document.querySelector("html").offsetWidth,n=document.querySelector(".slide").offsetWidth;p=Math.round(+e.style.left.slice(0,-2)/h*-1),t>1400?(d=4,h=350):t>1080?(d=3,h=360):t>730?(d=2,h=365):(d=1,h=320),d!==u&&(a=Math.floor(p/d),e.style.left=`${a*h*d*-1}px`),console.log(`${t} screanSize - ${e.style.left} items.left`),l=Math.floor(+e.style.left.slice(0,-2)/n*-1),u=d,c=l,i.textContent=`${a+1}`,o.textContent=`${a}`,s.textContent=`${a+2}`}u=d,f(),window.onresize=f,function(){let l,d,u=0,p=0;const h=50;let f=t.offsetWidth,m=!0;function w(t,r){const d=document.querySelector(".slide").offsetWidth;f=document.querySelector(".slider").offsetWidth,e.classList.add("shifting"),m&&(r||(l=e.offsetLeft),1===t?(a+=1,e.style.left=`${a*f*-1}px`):-1===t&&((a-=1)<0&&(a=0),e.style.left=`${a*f*-1}px`),i.textContent=`${a+1}`,o.textContent=`${a}`,s.textContent=`${a+2}`,0===a?(n.style.opacity="0",n.style.cursor="default",o.style.opacity="0"):(n.style.opacity="1",n.style.cursor="pointer"),c=Math.floor(+e.style.left.slice(0,-2)/d*-1)),m=!1}function b(t){"touchmove"===t.type?(p=u-t.touches[0].clientX,u=t.touches[0].clientX):(p=u-t.clientX,u=t.clientX),e.style.left=`${e.offsetLeft-p}px`}function v(){(d=e.offsetLeft)-l<-1*h?w(1,"drag"):d-l>h?w(-1,"drag"):e.style.left=`${l}px`,document.onmouseup=null,document.onmousemove=null}function y(t){t.preventDefault(),l=a*f*-1,e.classList.remove("shifting"),m=!0,"touchstart"===t.type?u=t.touches[0].clientX:(u=t.clientX,document.onmouseup=v,document.onmousemove=b)}function x(){o.style.opacity="0"}function g(){s.style.opacity="0"}n.addEventListener("mousedown",function(){o.style.opacity=0===a?"0":"1"}),r.addEventListener("mousedown",function(){s.style.opacity="1"}),n.addEventListener("mouseup",x),r.addEventListener("mouseup",g),n.addEventListener("mouseout",x),r.addEventListener("mouseout",g),i.textContent=`${a+1}`,o.textContent=`${a}`,s.textContent=`${a+2}`,n.style.position="relative",r.style.position="relative",e.onmousedown=y,e.addEventListener("touchstart",y),e.addEventListener("touchend",v),e.addEventListener("touchmove",b),n.addEventListener("click",()=>{w(-1)}),r.addEventListener("click",()=>{w(1)}),e.addEventListener("transitionend",function(){e.classList.remove("shifting"),m=!0})}()}}class c{constructor(){this.data=null}checking(){this.data=null;const t=document.querySelectorAll(".slide").length,e=+document.querySelector("#current").textContent;let n=4;n=window.outerWidth>1400?4:window.outerWidth>1080?3:window.outerWidth>730?2:1;let i=Math.floor(t/n);return{getMore:i=i-4<=e,deepOfSearch:t/15}}}class l{constructor(t){this.data=t,this.query=document.querySelector("#searchBar").value,this.apiKey="AIzaSyBJF6IlnlKKKiAuAWD-zJuG2zhjsvAcdw8"}makeSearchIdUrl(){const t=document.querySelector("#searchBar").value;return`https://www.googleapis.com/youtube/v3/search?&maxResults=15&type=video&key=${this.apiKey}&part=snippet&q=${t}&fields=items/id/videoId,nextPageToken`}async getPageToken(){const t=await fetch(this.makeSearchIdUrl());return(await t.json()).nextPageToken}makeNextSearchIdUrl(t){const e=document.querySelector("#searchBar").value;return`https://www.googleapis.com/youtube/v3/search?&maxResults=15&type=video&key=${this.apiKey}&part=snippet&pageToken=${t}&q=${e}&fields=items/id/videoId,nextPageToken`}async getNextPageToken(t){const e=await fetch(this.makeNextSearchIdUrl(t));return(await e.json()).nextPageToken}async getNewVideoId(t){const e=await fetch(this.makeNextSearchIdUrl(t));return await e.json()}async makeNewStatisticUrl(t){let e=await this.getNewVideoId(t);e=e.items;const n=[];return e.forEach(t=>{n.push(t.id.videoId)}),`https://www.googleapis.com/youtube/v3/videos?key=${this.apiKey}&id=${n.join(",")}&part=snippet,statistics`}async getNewResponceData(t){const e=await this.makeNewStatisticUrl(t),n=await fetch(e),i=await n.json();return document.querySelector("#sendInfo").value=t,i}async run(t){const e=document.querySelector("#sendInfo").value;let n=null;if(e)n=e;else{n=await this.getPageToken()}for(let e=0;e<t.deepOfSearch;e+=1)n=await this.getNextPageToken(n);return await this.getNewResponceData(n)}}(new class{constructor(){this.controller=new i,this.videoData=[]}async getData(){const t=document.querySelector("#slider"),e=document.querySelector("#controlWrap");t&&t.remove(),e&&e.remove(),this.sliderView=new s,this.slider=new a,this.sliderView.drawSlider(),this.slider.runSlider();const n=document.querySelector("#items"),i=document.querySelector("#next");n.addEventListener("mousedown",this.checkOutForNewVideo),n.addEventListener("touchend",this.checkOutForNewVideo),i.addEventListener("mousedown",this.checkOutForNewVideo),this.videoData=[];const c=document.querySelector("#searchBar").value,l=new r(c),d=await l.getResponceData();for(let t=0;t<15;t+=1)this.videoData.push(new o(d,t)),this.videoData[t].fillDataOfVideoObj();function u(t){let e=t;if(t>=1e3){const n=[" views","K views","M views","B views","T views"],i=Math.floor(`${t}`.length/3);let r="";for(let e=2;e>=1&&!(`${r=parseFloat((0!==i?t/1e3**i:t).toPrecision(e))}`.replace(/[^a-zA-Z 0-9]+/g,"").length<=2);e-=1);r%1!=0&&(r=r.toFixed(1)),e=r+n[i]}return e}const p=document.querySelectorAll('.clip-preview[data-new="data-new"]'),h=document.querySelectorAll('.clip-title-link[data-new="data-new"]'),f=document.querySelectorAll('.clip-author[data-new="data-new"]'),m=document.querySelectorAll('.clip-upload[data-new="data-new"]'),w=document.querySelectorAll('.clip-view-count[data-new="data-new"]'),b=document.querySelectorAll('.clip-description[data-new="data-new"]');document.querySelector("#controlWrap").style.display="flex";for(let t=0;t<15;t+=1)p[t].setAttribute("src",this.videoData[t].clipPreview),h[t].setAttribute("href",this.videoData[t].link),h[t].setAttribute("alt",this.videoData[t].title),h[t].textContent=this.videoData[t].title,f[t].textContent=this.videoData[t].channelName,m[t].textContent=this.videoData[t].uploadDate,w[t].textContent=u(this.videoData[t].viewCount),b[t].textContent=this.videoData[t].description,p[t].removeAttribute("data-new"),h[t].removeAttribute("data-new"),f[t].removeAttribute("data-new"),m[t].removeAttribute("data-new"),w[t].removeAttribute("data-new"),b[t].removeAttribute("data-new")}async checkOutForNewVideo(){this.videoData=[],this.newClips=new c;const t=this.newClips.checking();function e(t){let e=t;if(t>=1e3){const n=[" views","K views","M views","B views","T views"],i=Math.floor(`${t}`.length/3);let r="";for(let e=2;e>=1&&!(`${r=parseFloat((0!==i?t/1e3**i:t).toPrecision(e))}`.replace(/[^a-zA-Z 0-9]+/g,"").length<=2);e-=1);r%1!=0&&(r=r.toFixed(1)),e=r+n[i]}return e}if(t.getMore){this.newAPI=new l;const n=await this.newAPI.run(t);document.querySelector("#controlWrap").style.display="flex";for(let t=0;t<15;t+=1)this.videoData.push(new o(n,t)),this.videoData[t].fillDataOfVideoObj();this.sliderView=new s,this.sliderView.drawMoreClips();const i=document.querySelectorAll('.clip-preview[data-new="data-new"]'),r=document.querySelectorAll('.clip-title-link[data-new="data-new"]'),a=document.querySelectorAll('.clip-author[data-new="data-new"]'),c=document.querySelectorAll('.clip-upload[data-new="data-new"]'),d=document.querySelectorAll('.clip-view-count[data-new="data-new"]'),u=document.querySelectorAll('.clip-description[data-new="data-new"]');for(let t=0;t<15;t+=1)i[t].setAttribute("src",this.videoData[t].clipPreview),r[t].setAttribute("href",this.videoData[t].link),r[t].setAttribute("alt",this.videoData[t].title),r[t].textContent=this.videoData[t].title,a[t].textContent=this.videoData[t].channelName,c[t].textContent=this.videoData[t].uploadDate,d[t].textContent=e(this.videoData[t].viewCount),u[t].textContent=this.videoData[t].description,i[t].removeAttribute("data-new"),r[t].removeAttribute("data-new"),a[t].removeAttribute("data-new"),c[t].removeAttribute("data-new"),d[t].removeAttribute("data-new"),u[t].removeAttribute("data-new")}}run(){const t=document.createElement("LINK");t.rel="stylesheet",t.href="https://use.fontawesome.com/releases/v5.8.2/css/all.css",t.integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay",t.setAttribute("crossorigin","anonymous"),document.head.appendChild(t);const e=document.createElement("META");e.content="width=device-width, initial-scale=1",e.name="viewport",document.head.appendChild(e),this.controller.drawSearchBar();const n=document.querySelector("#searchBar"),i=document.querySelector(".searchButton"),r=this.getData.bind(this);n.addEventListener("change",r),i.addEventListener("click",r)}}).run()}]);
//# sourceMappingURL=app.bundle.js.map