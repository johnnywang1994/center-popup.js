# center-popup.js
A library for creating a centered popup window

## Usage

As a native plugin:

```js
// 1. Use for type "custom"

// define the html element to use
<div id="popup">Hello World</div>

// custom's opts sets the target choose for creating instance(which is ID popup element)
var opts = { target: '#popup', type: 'custom' };
var popup = new Popup(document.getElementById('popup'), opts);

// Open this popup.
popup.open();
// or
popup.fadeIn(0.3);

// Close this popup.
popup.close();
// or
popup.fadeOut(0.3);



// 2. Use for type "image"

// define the html element to use
<div id="popup" data-src="./example.jpg">Hello World</div>

// custom's opts sets the image's style(also can be set by default class is 'popup_image')
var opts = { target: '#popup', type: 'image' };
var popup = new Popup(document.getElementById('popup'), opts);

// Open this popup.
popup.open();
// or
popup.fadeIn(0.3);

// Close this popup.
popup.close();
// or
popup.fadeOut(0.3);
```

## Options(CSS3)

- **target**

  Type: `String`

  set for target's dom name, eg. '#popup'

- **type**

  Type: `String` Value: `custom` or `image`

  choose type of the popup window, now only support 'custom' & 'image'.

  
## Methods

- **open()**

  Type: `String`

  Display a centered popup window.
  
- **close()**

  Close the centered popup window.
  
- **fadeIn(seconds)**

  Type: `Number` Default: `0.3`

  FadeIn the centered popup window in specific time.

- **fadeOut(seconds)**

  Type: `Number` Default: `0.3`

  FadeOut the centered popup window in specific time.

## License

Under the MIT license.
