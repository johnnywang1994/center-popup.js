/*!
 * center-popup.js v1.0.8
 * (c) 2019 Johnny Wang
 * Released under the MIT License.
 */
(function (global, factory){
  // Nodejs 環境
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  // AMD 環境
  typeof define === 'function' && define.amd ? define(factory) :
  // Browser 環境
  (global = global || self, global.Popup = factory());
}(this, function() { 'use strict';

  /*  */

  const error = msg => {
    if (typeof console !== 'undefined' && console.error) {
      return console.error.call(console, msg);
    }
  }

  const isObject = v => {
    return v !== null && typeof v === 'object';
  }

  const isFn = v => {
    return typeof v === 'function';
  }

  /*  */

  const getNode = str => {
    return new DOMParser().parseFromString(str, 'text/html').body.childNodes[0];
  }

  const getWrapper = () => {
    return document.querySelectorAll('.popup-wrapper')[0];
  }

  const removeNode = w => {
    return w.parentNode.removeChild(w);
  }

  const appendToBody = t => {
    return document.body.insertAdjacentElement('beforeend', t);
  }

  const setStyle = function() {
    var e = ".popup-wrapper{position:fixed;width:100vw;height:100vh;top:0;left:0;background:rgba(0, 0, 0, 0.7)}.popup-wrapper .popup-inner{position:absolute;top:50%;transform:translateY(-50%);left:0;right:0;margin:auto;background:#fff;max-width:576px;max-height:90%;overflow:auto}@media (max-width: 768px){.popup-wrapper .popup-inner{max-width:320px}}@keyframes popupFadeIn{0%{opacity:0}100%{opacity:1}}@keyframes popupFadeOut{0%{opacity:1}100%{opacity:0}}@keyframes popupFadeInDown{0%{opacity:0;transform:translateY(-100%)}100%{opacity:1}}",
        t = document.createElement("style");

    t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)), document.getElementsByTagName("head")[0].appendChild(t);
  }

  /*  */

  const Popup = function(node, options = {}) {
    const self = this;

    self.openStatus = false; // 開啟狀態
    self.node = isObject(node) ? node : getNode(node);
    self.options = Object.assign({
      display: 'block', // 目標顯示類型，預設 block
      success: function() {} // 事件處理，對自創元素添加事件使用
    }, options);

    // Auto Hide
    self.node.style.display = 'none';

    // Add Events on Node
    self.options.success.call(self);

    // Set CSS Styles
    setStyle();


    // Create popup's element
    const temp = node => {
      const wrapper = getNode('<div class="popup-wrapper"></div>'),
            inner = getNode('<div class="popup-inner"></div>');
  
      node.style.display = self.options.display;
  
      inner.insertAdjacentElement('beforeend', node);
      wrapper.insertAdjacentElement('beforeend', inner);
  
      return wrapper;
    }


    // 事件 Events
    self.open = function(fn) {
      if (self.openStatus) return error('Popup is now openned!');

      const template = temp(self.node);
      self.openStatus = true;
      isFn(fn) && fn(template);
      return appendToBody(template);
    }

    self.close = function(fn) {
      if (!self.openStatus) return error('Popup is now closed!');

      const wrapper = getWrapper();
      self.openStatus = false;
      (isFn(fn)) ? fn(wrapper) : removeNode(wrapper);
    }

    self.fadeIn = function(s = .3) {
      self.open(template => {
        template.style.animation = 'popupFadeIn '+s+'s';
      });
    }

    self.fadeInDown = function(s = .3) {
      self.open(template => {
        template.style.animation = 'popupFadeIn '+s+'s';
        self.node.parentNode.style.animation = 'popupFadeInDown '+s+'s';
      });
    }

    self.fadeOut = function(s = .3) {
      self.close(wrapper => {
        wrapper.addEventListener('animationend', function() {
          removeNode(wrapper);
        })
        wrapper.style.animation = 'PopupFadeOut '+s+'s';
      })
    }

  }
  

  return Popup;
}));
