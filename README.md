# center_popup.js
A library for creating a centered popup window

## Usage

As a native plugin:

```js
var popup = new Popup(document.getElementById('popup'), { width: '400px', height: '300px' });

// Open this popup.
popup.open();
// Close this popup.
popup.close();
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

- **open()**

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
