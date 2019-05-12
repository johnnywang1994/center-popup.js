/*!
 * center-popup.js
 * https://github.com/johnnywang1994/center-popup.js
 * Under the MIT License | (c) 2019 Johnny Wang
 */
(function(global){
  // set popup_wrapper CSS stylesheet
  var e = ".popup_out_wrapper{opacity:0;position:fixed;top:0;width:100%;height:100%;background:rgba(0, 0, 0, 0.4)}.popup_out_wrapper .popup_in_wrapper{text-align:center;height:100%}.popup_out_wrapper .popup_in_wrapper::before{content:'';display:inline-block;height:100%;width:0;vertical-align:middle}.popup_out_wrapper .popup_in_wrapper .popup_image_wrapper{width:auto;height:auto;display:inline-block;vertical-align:middle;padding:20px;}", t = document.createElement("style");
  t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)), document.getElementsByTagName("head")[0].appendChild(t);

  // instance create
  var Popup = function(dom, opts = {}){
    var self = this;
    self.dom = dom;
    self.opts = opts;
    return self;
  };

  // callout name defined
  global.Popup = Popup;
  
  // default settings
  var template = '<div class="popup_out_wrapper"><div class="popup_in_wrapper"></div></div>';
  var w_resize = function(f) {
    var o = global.onresize;
    if (typeof o != 'function'){
      global.onresize = f;
    } else {
      global.onresize = function(){
        if (o) o();
        f();
      };
    }
  };

  // type method
  var image = function(dom, opts) {
    var d_opts = {
      'display': 'block',
      'max-height': '600px',
      'object-fit': 'scale-down',
      'box-sizing': 'border-box'
    };
    var image = '<div class="popup_image_wrapper"><img class="popup_image" src="#" alt="#"></div>';
    document.body.insertAdjacentHTML('beforeend', template);
    document.querySelectorAll('.popup_in_wrapper')[0].insertAdjacentHTML('beforeend', image);
    var popup_image = document.querySelectorAll('.popup_image')[0];
    var o = Object.assign({}, d_opts, opts);
    for (let p in o) {
      popup_image.style[p] = o[p];
    }
    popup_image.src = dom.dataset.src;
    popup_image.onload = function(){
      this.style.maxWidth = this.width + 'px';
      this.style.width = '100%';
    }
  };

  var custom = function(dom, opts) {
    var d_opts = {
      'width': '500px',
      'height': '400px',
      'background': 'white',
      'text-align': 'left',
      'display': 'inline-block',
      'vertical-align': 'middle'
    };
    document.body.insertAdjacentHTML('beforeend', template);
    document.querySelectorAll('.popup_in_wrapper')[0].insertAdjacentElement('beforeend', dom);
    var o = Object.assign({}, d_opts, opts);
    for (let p in o) {
      dom.style[p] = o[p];
    }
  };

  var layout = function(dom, opts, t) {
    if (t === 'image') {
      image(dom, opts);
    } else if (t = 'custom') {
      custom(dom, opts);
    }
  };

  // library methods
  Popup.prototype = Object.assign({}, {
    open: function(t = 'image'){
      layout(this.dom, this.opts, t);
      document.querySelectorAll('.popup_out_wrapper')[0].style.opacity = '1.0';
    },
    fadeIn: function(s = 0.3, t = 'image'){
      layout(this.dom, this.opts, t);
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
  })
})(window);