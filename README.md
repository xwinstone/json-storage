# json-storage
storage json data using localStorage or sessionStorage for daily usage.

## Usage
### import from npm
```shell script
npm i json-storage
```

### example

```js
// use localStorage

import jsonStorage from "json-storage";

const data = {
  name: 'xwinstone'
}
// set data
jsonStorage.setItem('info', data)
// get data
jsonStorage.getItem('info') // {name: 'xwinstone'}
// remove 
jsonStorage.remove('info')
```

```js
// to use sessionStorage, please set the last parameter to true
import jsonStorage from "json-storage";

const data = {
  name: 'xwinstone'
}
// set data
jsonStorage.setItem('info', data, true)
// get data
jsonStorage.getItem('info', true) // {name: 'xwinstone'}
// remove 
jsonStorage.remove('info', true)
```
