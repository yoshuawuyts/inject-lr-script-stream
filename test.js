const fromString = require('from2-string')
const concat = require('concat-stream')
const test = require('tape')

const lr = require('./')

test('should assert input types', function (t) {
  t.plan(1)
  t.throws(lr.bind(null, 'foo'), /object/)
})

test('should inject a livereload script', function (t) {
  t.plan(1)
  fromString('<html><body></body></html>')
    .pipe(lr())
    .pipe(concat(function (buf) {
      const str = buf.toString()
      t.ok(/livereload/.test(str), 'script injected')
    }))
})

test('should have custom opts', function (t) {
  t.plan(3)
  fromString('<html><body></body></html>')
    .pipe(lr({ port: 1337, host: 'ipfs.io', protocol: 'https' }))
    .pipe(concat(function (buf) {
      const str = buf.toString()
      t.ok(/https/.test(str), 'protocol configured')
      t.ok(/ipfs/.test(str), 'host configured')
      t.ok(/1337/.test(str), 'port configured')
    }))
})
