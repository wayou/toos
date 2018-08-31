toos
===

![MIT LICENSE](https://img.shields.io/github/license/mashape/apistatus.svg)
[![npm package](https://img.shields.io/npm/v/toos.svg)](https://www.npmjs.com/package/toos)
[![npm package](https://img.shields.io/npm/dt/toos.svg)](https://www.npmjs.com/package/toos)


A simple toast.

Toos pronouses the same as Chinese word 「吐司」.


### preview

![toos preview](./assets/preview.gif)


### install

```bash
$ npm i -S toos
# or
$ yarn add toos
```


### usage

```js
import Toos from 'toos';

Toos.show('Allo!');

Toos.show('Allo!', {
    style: 'color:red;'
});
```


### methods

- `show: (message: string | number ,options:  ToastOptions) => void`: show the toast
    - `message`: the message to show
        - type: `string`,
        - default: N/A
    - `options`: use the option object to custumize the toast
        - `style`: style for the toast
            - type: `string`
            - default: ` `
        - `class`: class name to customize the style
            - type: `string`
            - default: ` `
        - `duration?: number`: toast duration in ms
            - type: `number`
            - default: `300`







