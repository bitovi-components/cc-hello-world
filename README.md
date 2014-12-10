# <cc-hello-world>

This is a simple example component. This is the documentation.

## Installation

`bower install --save canjs/cc-hello-world`

## Usage

In your javascript:

```js
import "bower_components/cc-hello-world/cc-hello-world";
```

In your template:

```html
<cc-hello-world greeting="Hi"></cc-hello-world>
```

## API

### Attributes

* `{String} greeting="Hello"` - The greeting
* `{String} target="World"` - The target being greeted.
* `{Boolean} excited=false` - Whether to be really excited

### Methods

* `logGreeting()` - Prints the greeting message into the console.

### Events

* `greeted` - Fired whenever a greeting is complete.

### Content

* `select=""` - Inserted under the greeting. Background color and styles
  changed.

## Developing

* `npm install`
* `grunt serve [--port PORT=8125]`
* Go to [demo page](http://localhost:8125)
