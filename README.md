# center-popup.js
A library for creating a centered popup window

## Usage

As a native plugin:

```js
// 1. Use for type "custom"

// define the html element to use
<div id="popup">Hello World</div>

// custom's opts sets the target choose for creating instance(which is ID popup element)
var opts = { 'width': '400px', 'height': '300px' };
var popup = new Popup(document.getElementById('popup'), opts);

// Open this popup.
popup.open('custom');
// or
popup.fadeIn(0.3, 'custom');

// Close this popup.
popup.close();
// or
popup.fadeOut(0.3);



// 2. Use for type "image"

// define the html element to use
<div id="popup" data-src="./example.jpg">Hello World</div>

// custom's opts sets the image's wrapper(also can be set by default class is 'popup_image_wrapper')
var opts = { 'border': '5px solid black', 'box-sizing': 'border-box' };
var popup = new Popup(document.getElementById('popup'), opts);

// Open this popup.
popup.open('image');
// or
popup.fadeIn(0.3, 'image');

// Close this popup.
popup.close();
// or
popup.fadeOut(0.3);
```

## Options(CSS3)

- **width**

  Type: `Number` Default: `500`

  The popup css width.

- **height**

  Type: `Number` Default: `400`

  The popup css height.
  
- **background**

  Type: `color` Default: `white`

  The popup css background setting
  
## Methods

- **open(type)**

  Type: `String` Default: `image`(can only use: `image` or `custom`)

  Display a centered popup window.
  
- **close()**

  Close the centered popup window.
  
- **fadeIn(seconds, type)**

  seconds => Type: `Number` Default: `0.3`

  type => Type: `String` Default: `image`(can only use: `image` or `custom`)

  FadeIn the centered popup window in specific time.

- **fadeOut(seconds)**

  Type: `Number` Default: `0.3`

  FadeOut the centered popup window in specific time.

## License

Under the MIT license.
