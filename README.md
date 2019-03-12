# center_popup
A library for creating a centered popup window

## Usage

As a native plugin:

```js
var popup = new Popup(document.getElementById('popup'), { width: 400, height: 300 });

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

## License

Under the MIT license.
