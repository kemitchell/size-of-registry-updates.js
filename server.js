var ChangesStream = require('changes-stream')
var fs = require('fs')
var pump = require('pump')
var writer = require('flush-write-stream')

var log = process.env.LOG || 'sizes.log'

pump(
  new ChangesStream({
    db: 'https://replicate.npmjs.com',
    include_docs: true,
    highWaterMark: 8
  }),
  writer.obj(function (chunk, _, done) {
    var sequence = chunk.seq
    var name = chunk.id || '(None)'
    console.log('%s %s', name, sequence)
    var size = JSON.stringify(chunk).length
    var line = '' + sequence + ' ' + name + ' ' + size + '\n'
    fs.appendFile(log, line, done)
  })
)
