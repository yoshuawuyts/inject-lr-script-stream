# inject-lr-script-stream
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![Downloads][downloads-image]][downloads-url]
[![js-standard-style][standard-image]][standard-url]

Streamingly inject a livereload script into html.

## Installation
```sh
$ npm install inject-lr-script-stream
```

## Usage
```js
const lr = require('inject-lr-script-stream')
const filed = require('filed')
const http = require('http')

http.createServer((req, res) => {
  filed(__dirname + '/index.html')
    .pipe(lr())
    .pipe(res)
})
```

## API
### lr(opts)
Create a duplex inject stream. Expects a `<body>` tag to be present. The
following opts are available:
- __port__: livereload port, defaults to `35729`
- __host__: livereload host, defaults to `localhost`

## See Also
- [inject-lr-script](https://github.com/mattdesl/inject-lr-script)
- [tiny-lr](https://github.com/mklabs/tiny-lr)

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/inject-lr-script-stream.svg?style=flat-square
[npm-url]: https://npmjs.org/package/inject-lr-script-stream
[travis-image]: https://img.shields.io/travis/yoshuawuyts/inject-lr-script-stream/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/inject-lr-script-stream
[codecov-image]: https://img.shields.io/codecov/c/github/yoshuawuyts/inject-lr-script-stream/master.svg?style=flat-square
[codecov-url]: https://codecov.io/github/yoshuawuyts/inject-lr-script-stream
[downloads-image]: http://img.shields.io/npm/dm/inject-lr-script-stream.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/inject-lr-script-stream
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
