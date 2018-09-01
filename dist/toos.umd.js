'use strict';(function(b,a){"object"===typeof exports&&"undefined"!==typeof module?module.exports=a():"function"===typeof define&&define.amd?define(a):b.toos=a()})(this,function(){(function(b,a){void 0===a&&(a={});a=a.insertAt;if(b&&"undefined"!==typeof document){var d=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css";"top"===a?d.firstChild?d.insertBefore(c,d.firstChild):d.appendChild(c):d.appendChild(c);c.styleSheet?c.styleSheet.cssText=b:
c.appendChild(document.createTextNode(b))}})("#toast {\n  line-height: normal;\n  max-height: 80%;\n  overflow-y: auto;\n  max-width: 300px;\n  word-break: break-word;\n  color: #fff;\n  padding: 15px;\n  background: rgba(0, 0, 0, 0.8);\n  border-radius: 4px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 9999;\n  text-align: center;\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 0.3s linear, opacity 0.3s linear; }\n\n#toast.show {\n  visibility: visible;\n  opacity: 1; }\n");
return function(){function b(){}b.show=function(a,d){var c=this;d=Object.assign({},this.defaultOptions,d);var b=document.getElementById("toast");this.timer&&(window.clearTimeout(this.timer),this.timer=null,this._hide(b));b?this._applyOption(b,a,d):b=this._create(a,d);this._show(b);this.timer=window.setTimeout(function(){c._hide(b)},d.duration)};b._applyOption=function(a,b,c){a.className=""+c.class;c.style&&(a.style.cssText=c.style+";");a.innerHTML=""+b};b._create=function(a,b){var c=document.createElement("div");
c.setAttribute("id","toast");this._applyOption(c,a,b);document.body.appendChild(c);return c};b._show=function(a){a&&(a.className+="show")};b._hide=function(a){a&&(a.className=a.className.replace("show",""))};b.defaultOptions={class:"",duration:3E3,style:""};b.timer=null;return b}()});
//# sourceMappingURL=toos.umd.js.map