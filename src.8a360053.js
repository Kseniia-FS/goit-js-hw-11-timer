parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{}],"leU0":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;class t{constructor({selector:t,targetDate:e}){this.targetDate=new Date(e),this.days=document.querySelector(`${t} .value[data-value="days"]`),this.hours=document.querySelector(`${t} .value[data-value="hours"]`),this.minutes=document.querySelector(`${t} .value[data-value="mins"]`),this.seconds=document.querySelector(`${t} .value[data-value="secs"]`)}pad(t){return t<10?`0${t}`:t}countDowm(){const t=new Date;this.createValueForSpan(t)}showTime(){setInterval(()=>this.countDowm(),1e3)}createValueForSpan(t){const e=this.targetDate-t;this.days.textContent=this.pad(Math.floor(e/864e5)),this.hours.textContent=this.pad(Math.floor(e%864e5/36e5)),this.minutes.textContent=this.pad(Math.floor(e%36e5/6e4)),this.seconds.textContent=this.pad(Math.floor(e%6e4/1e3))}}exports.default=t;
},{}],"yCUT":[function(require,module,exports) {
"use strict";var e=t(require("./plagin.js"));function t(e){return e&&e.__esModule?e:{default:e}}const r=new e.default({selector:"#timer-1",targetDate:"2022,07,17"});r.showTime();
},{"./plagin.js":"leU0"}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("./js/timer.js");
},{"./sass/main.scss":"clu1","./js/timer.js":"yCUT"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-11-color-switch/src.8a360053.js.map