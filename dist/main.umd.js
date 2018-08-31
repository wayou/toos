(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Toos = factory());
}(this, (function () { 'use strict';

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

  var css = "#toast {\n  line-height: normal;\n  max-height: 80%;\n  overflow-y: auto;\n  max-width: 300px;\n  word-break: break-word;\n  color: #fff;\n  padding: 15px;\n  background: rgba(0, 0, 0, 0.8);\n  border-radius: 4px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 9999;\n  text-align: center;\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 0.3s linear, opacity 0.3s linear; }\n\n#toast.show {\n  visibility: visible;\n  opacity: 1; }\n";
  styleInject(css);

  /*
   * @author: wayou
   * @date: 2018-08-28 12:12:54
   * @description: a simple toast
   */
  var Toast = /** @class */ (function () {
      function Toast() {
      }
      /**
       * show the toast
       *
       * @static
       * @param {showOption} options
       * @memberof Toast
       */
      Toast.show = function (message, options) {
          var _this = this;
          var _options = Object.assign({}, this.defaultOptions, options);
          var element = document.getElementById("toast");
          if (this.timer) {
              window.clearTimeout(this.timer);
              this.timer = null;
              this._hide(element);
          }
          if (!element) {
              element = this._create(message, _options);
          }
          else {
              this._applyOption(element, message, _options);
          }
          this._show(element);
          this.timer = window.setTimeout(function () {
              _this._hide(element);
          }, _options.duration);
      };
      /**
       * apply options for each show
       * @param element the root element of the toast
       * @param message message to show
       * @param options toast options
       */
      Toast._applyOption = function (element, message, options) {
          element.className = "" + options.class;
          if (options.style) {
              element.style.cssText = options.style + ";";
          }
          element.innerHTML = "" + message;
      };
      /**
       * create toast element and append to page
       * @param message message to show
       * @param options toast options
       */
      Toast._create = function (message, options) {
          var element = document.createElement("div");
          element.setAttribute("id", "toast");
          this._applyOption(element, message, options);
          document.body.appendChild(element);
          return element;
      };
      /**
       * set the `show` class name to show the toast
       * @param element the root element of the toast
       */
      Toast._show = function (element) {
          if (element) {
              element.className += "show";
          }
      };
      /**
       * remove the `show` class name to hide the toast
       * @param element the root element of the toast
       */
      Toast._hide = function (element) {
          if (element) {
              element.className = element.className.replace("show", "");
          }
      };
      Toast.defaultOptions = {
          class: "",
          duration: 3000,
          style: ""
      };
      Toast.timer = null;
      return Toast;
  }());

  return Toast;

})));
