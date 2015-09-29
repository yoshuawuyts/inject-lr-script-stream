const hyperstream = require('hyperstream')
const assert = require('assert')

module.exports = streamInjectLrScript

// Streamingly inject a livereload script into html
// obj -> stream
function streamInjectLrScript (opts) {
  opts = opts || {}

  assert.equal(typeof opts, 'object')

  const protocol = opts.protocol || 'http'
  const host = opts.host || 'localhost'
  const port = opts.port || 35729

  var lrTag = '<script type="text/javascript"'
  lrTag += 'src="'
  lrTag += protocol
  lrTag += '://'
  lrTag += host
  lrTag += ':'
  lrTag += port
  lrTag += '/livereload.js?snipver=1">'
  lrTag += '</script>'

  return hyperstream({ body: { _appendHtml: lrTag } })
}
