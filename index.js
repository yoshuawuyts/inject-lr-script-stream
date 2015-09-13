const hyperstream = require('hyperstream')
const assert = require('assert')

module.exports = streamInjectLrScript

// Streamingly inject a livereload script into html
// obj -> null
function streamInjectLrScript (opts) {
  opts = opts || {}

  assert.equal(typeof opts, 'object')

  const port = opts.port || 35729
  const host = opts.host || 'localhost'

  var lrTag = '<script type="text/javascript"'
  lrTag += 'src="http://'
  lrTag += host
  lrTag += ':'
  lrTag += port
  lrTag += '/livereload.js?snipver=1">'
  lrTag += '</script>'

  return hyperstream({ body: { _appendHtml: lrTag } })
}
