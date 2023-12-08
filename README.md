# js.es6.jsver
Tests or returns the JavaScript version by (ECMAScript) starting with ES2. (MIT license)

## Examples ##
```JavaScript
const { jsver } = require('jsver'); //const jsver = require('jsver').jsver;
const { jsvero } = require('jsver'); //const jsvero = require('jsver').jsvero //const jsvero = require('jsver').o;
```

## `jsver` vs `jsvero` ##
jsvero: returns Object and written for ES6+
jsver: returns Object<Array> and written for ES2+

```JavaScript
jsvero().name = jsver()[2]
jsvero().ver = jsver()[0]
jsvero().year = jsver()[1]
jsvero().best = jsver(true);
```
## Params ##
```JavaScript
jsver(6) //(jsvero().ver==jsver(6));
jsver('ECMAScript 2023') //(jsvero().name=='ECMAScript 2023');
jsver(false) //or jsver('false') //is latest JavaScript? (false)->yes=>false|no->true or (true)->yes->true|no->false
```
`jsver` and `jsvero` params is equal

## Recepies ##
```JavaScript
if (require('jsver').jsvero()!=4) {
  console.log('this script requires ES4');
  process.exit(0); //terminate node process; .abort() for force terminate
}
```

```JavaScript
//script.src=jsver_path.js or require('jsver')
if (jsver()[0]!=4) {
  console.log('this script requires ES4');
}
```

```JavaScript
if (require('jsver').jsvero()<6) {
  console.log('this script requires ES6+ support');
  process.exit(0);
}
```
