# point-plane-distance 

[![npm][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![js-standard-style][standard-image]][standard-url]

Computes the distance between a point and a plane

## Install

```sh
$ npm install --save point-plane-distance
```

## Usage

Let

```js
var p = [0, 0, -5]
var a = [0, 0, 0]
var b = [1, 0, 0]
var c = [0, 1, 0]
```

Compute the distance as follows

```js
var ppd = require('point-plane-distance');
ppd(point, a, b, c)  // 5
```

`p` is actually behind the plane `abc`, if you want the signed distance require the file `signed`


```js
var ppdSigned = require('point-plane-distance/signed');
ppdSigned(point, a, b, c)  // -5
```

## API

```js
ppd = require('point-plane-distance')
```

### `ppd(point, a, b, c)`

**params**

* `point` {Array} the target point
* `a`, `b`, `c` {Array} are three points lying on some plane

**returns** {Number}

The distance between `point` and the plane containing `a`, `b`, and `c`

## License

2015 MIT © [Mauricio Poppe](http://maurizzzio.com)

[travis-image]: https://travis-ci.org/maurizzzio/point-plane-distance.svg?branch=master
[travis-url]: https://travis-ci.org/maurizzzio/point-plane-distance
[npm-image]: https://img.shields.io/npm/v/point-plane-distance.svg?style=flat
[npm-url]: https://npmjs.org/package/point-plane-distance
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: http://standardjs.com/
[coveralls-image]: https://coveralls.io/repos/maurizzzio/point-plane-distance/badge.svg?branch=master&service=github
[coveralls-url]: https://coveralls.io/r/maurizzzio/point-plane-distance
