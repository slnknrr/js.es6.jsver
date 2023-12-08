# js.es6.jsver
Tests or returns the JavaScript version by (ECMAScript) starting with ES2. (MIT license)
## Why 'js.**es6**.jsver' when 'starting with ES2'? ##
- jsver() support ES2+ (index.js#jsver())
- jsvero() support ES6+ and requires jsver()
- jsver.js in **Releases** uses ES6+ code for `module:main` with `jsvero()` and can be uses from web-browser, node (interactive, command-line and require(), eval);

## Examples ##
```JavaScript
const { jsver } = require('jsver'); //const jsver = require('jsver').jsver;
const { jsvero } = require('jsver'); //const jsvero = require('jsver').jsvero //const jsvero = require('jsver').o;
```

## `jsver` vs `jsvero` ##
jsvero: returns Object{} and written for ES6+
jsver: returns Object[] and written for ES2+

```JavaScript
jsvero().name == jsver()[2];
jsvero().ver == jsver()[0];
jsvero().year == jsver()[1];
jsvero().best == jsver(true); //is best version that jsver() known?
```
## Params ##
```JavaScript
jsver(6) //(jsvero().ver==jsver(6));
jsver(2023) //(jsvero().year==2023)
jsver('ECMAScript 2023') //(jsvero().name=='ECMAScript 2023');
jsver(false) //or jsver('false') //is latest JavaScript? (false)->yes=>false|no->true or (true)->yes->true|no->false
jsver() //returns [in_standard_ver,standard_year,standard_name];
```
see jsver docstring
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
if (jsvero()<6) {
  console.log('this script requires ES6+ support');
  process.exit(0);
}
```
