# center-popup.js
A library for creating a centered popup window

## Install

```
npm i center_popup
```

```js
const Popup = require('center_popup');
```

## Usage

define the html element to use

```html
<div id="popup">Hello World</div>
```

Create Instance

```js
// will automatically hide the target
var popup = new Popup(document.getElementById('popup'));

// easily open it by
popup.open();
// or
popup.fadeIn();

// easily close it by
popup.close();
// or
popup.fadeOut();
```

You can also use string HTML as input

```js
var popup = new Popup('<p>Hello World</p>');

popup.open();
```

Add event to string input, and dont have to addEvent every time you open 

the popup window.

```js
var popup = new Popup('<p>Hello World</p>', {
  success() {
    console.log(this); // Popup instance
    this.node.addEventListener('click', function() {
      alert('Trigger!');
    });
  }
})
```


## Options

default: {}

- **display**

  Type: `String`

  Default: block

  CSS display property for target to show.

- **success**

  Type: `Function`

  function which execute after node has been created, you can use this to 

  add events to you string input element

  
## Methods

- **open(fn)**

  Type: `String`

  Display a centered popup window.

  fn => A function, which execute before append popup window into body, 

  you can use this function to do anything you like to the popup window.

  it receives one argument, that argument is the popup window you are going to append.

  ```js
  const popup = new Popup('<p>Hello World</p>');

  popup.open(template => {
    console.log(template);
  })

  // <div class="popup-wrapper">...</div>
  ```
  
- **close()**

  Close the centered popup window.
  
- **fadeIn()**

  FadeIn the centered popup window in specific time.

- **fadeInDown()**

  FadeInDown the centered popup window in specific time.

- **fadeOut()**

  FadeOut the centered popup window in specific time.

## License

Under the MIT license.
