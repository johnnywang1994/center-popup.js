/*!
 * center-popup.js
 * https://github.com/johnnywang1994/center-popup.js
 * Under the MIT License | (c) 2019 Johnny Wang
 */
class Popup {
  constructor(dom, opts) {
    this.dom = dom;
    this.opts = opts;
    Popup.template = '<div class="popup_out_wrapper"><div class="popup_in_wrapper"></div></div>';
    Popup.initiate(opts);
  }
  
  open() {
    const self = this;
    Popup.layout(self.dom, self.opts);
    document.querySelectorAll('.popup_out_wrapper')[0].style.opacity = '1.0';
  }
  
  fadeIn(s = 0.3) {
    const self = this;
    Popup.layout(self.dom, self.opts);
    document.querySelectorAll('.popup_out_wrapper')[0].style.transition = s + 's ';
    setTimeout(function(){ document.querySelectorAll('.popup_out_wrapper')[0].style.opacity = '1.0'; }, 0);
  }
  
  close() {
    let target = document.querySelectorAll('.popup_out_wrapper')[0];
    target.parentNode.removeChild(target);
  }
  
  fadeOut(s = 0.3) {
    let target = document.querySelectorAll('.popup_out_wrapper')[0];
    document.querySelectorAll('.popup_out_wrapper')[0].style.transition = s + 's ';
    setTimeout(function(){ document.querySelectorAll('.popup_out_wrapper')[0].style.opacity = '0'; }, 0);
    setTimeout(function(){ target.parentNode.removeChild(target); }, s * 1000);
  }
  
  static initiate(opts) {
    var e = ".popup_out_wrapper{opacity:0;position:fixed;top:0;width:100%;height:100%;background:rgba(0, 0, 0, 0.4)}.popup_out_wrapper .popup_in_wrapper{text-align:center;height:100%}.popup_out_wrapper .popup_in_wrapper::before{content:'';display:inline-block;height:100%;width:0;vertical-align:middle}.popup_out_wrapper .popup_in_wrapper .popup_image_wrapper{width:auto;height:auto;display:inline-block;vertical-align:middle;padding:20px;}.popup_image_wrapper .popup_image{display: block;max-height:600px;object-fit:scale-down;box-sizing:border-box;}",
        t = document.createElement("style");
    if (opts.type === 'custom') {
      e += opts.target + ' {width:500px;height:400px;background:#fff;text-align:left;display:inline-block;vertical-align:middle;}';
    }
    t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)), document.getElementsByTagName("head")[0].appendChild(t);
  }
  
  static layout(dom, opts) {
    if (opts.type === 'image') {
      Popup.image(dom);
    } else if (opts.type === 'custom') {
      Popup.custom(dom);
    }
  }
  
  static image(dom) {
    let image = '<div class="popup_image_wrapper"><img class="popup_image" src="#" alt="#"></div>';
    
    document.body.insertAdjacentHTML('beforeend', Popup.template);
    document.querySelectorAll('.popup_in_wrapper')[0].insertAdjacentHTML('beforeend', image);
    
    let popup_image = document.querySelectorAll('.popup_image')[0];
    popup_image.src = dom.dataset.src;
    popup_image.addEventListener('load', function(){
      this.style.maxWidth = this.width + 'px';
      this.style.width = '100%';
    });
  }
  
  static custom(dom) {
    document.body.insertAdjacentHTML('beforeend', Popup.template);
    document.querySelectorAll('.popup_in_wrapper')[0].insertAdjacentElement('beforeend', dom);
  }
}
