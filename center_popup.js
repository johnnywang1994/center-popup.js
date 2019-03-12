/*!
 * center_popup.js
 * https://github.com/johnnywang1994/center_popup
 * Under the MIT License | (c) 2019 Johnny Wang
 */
(function(global){
  // set popup_wrapper CSS stylesheet
  var e = ".popup_out_wrapper{opacity:0;position:fixed;top:0;width:100%;height:100%;background:rgba(0, 0, 0, 0.4)}.popup_out_wrapper .popup_in_wrapper{text-align:center;height:100%}.popup_out_wrapper .popup_in_wrapper::before{content:'';display:inline-block;height:100%;width:0;vertical-align:middle}", t = document.createElement("style");
  t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)), document.getElementsByTagName("head")[0].appendChild(t);

  // instance create
  var Popup = function(dom, opts){
    var self = this;
    self.dom = dom;
    self.opts = opts;
    return self;
  };

  // callout name defined
  global.Popup = Popup;
  
  // default settings
  var template = '<div class="popup_out_wrapper"><div class="popup_in_wrapper"></div></div>';
  var d_opts = {
    'width': '500px',
    'height': '400px',
    'background': 'white',
    'text-align': 'left',
    'display': 'inline-block',
    'vertical-align': 'middle'
  };

  // library methods
  var methods = {
    open: function(){
      document.body.insertAdjacentHTML('beforeend', template);
      document.querySelectorAll('.popup_in_wrapper')[0].insertAdjacentElement('beforeend', this.dom);
      var o = Object.assign({}, d_opts, this.opts);
      for (let p in o) {
        this.dom.style[p] = o[p];
      }
      document.querySelectorAll('.popup_out_wrapper')[0].style.opacity = '1.0';
    },
    fadeIn: function(s = 0.3){
      document.body.insertAdjacentHTML('beforeend', template);
      document.querySelectorAll('.popup_in_wrapper')[0].insertAdjacentElement('beforeend', this.dom);
      var o = Object.assign({}, d_opts, this.opts);
      for (let p in o) {
        this.dom.style[p] = o[p];
      }
      document.querySelectorAll('.popup_out_wrapper')[0].style.transition = 'all ease-in-out '+s+'s';
      setTimeout(function(){ document.querySelectorAll('.popup_out_wrapper')[0].style.opacity = '1.0'; }, 0);
    },
    close: function(){
      var target = document.querySelectorAll('.popup_out_wrapper')[0];
      target.parentNode.removeChild(target);
    },
    fadeOut: function(s = 0.3){
      var target = document.querySelectorAll('.popup_out_wrapper')[0];
      document.querySelectorAll('.popup_out_wrapper')[0].style.transition = 'all ease-in-out '+s+'s';
      setTimeout(function(){ document.querySelectorAll('.popup_out_wrapper')[0].style.opacity = '0'; }, 0);
      setTimeout(function(){ target.parentNode.removeChild(target); }, s * 1000);
    }
  };

  // set methods to prototype
  for (let p in methods) {
    Popup.prototype[p] = methods[p];
  };
})(window);