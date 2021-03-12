'use strict'

module.exports = {
  Abstract: require('./abstract'),
}

if (typeof window === 'undefined') {
  module.exports.Tcp = require('./tcp')
  module.exports.Promises = require('./promises')
} else {
  if (typeof window.TCPSocket !== 'undefined') {
    // NOTE: this file does not exist
    module.exports.MozTcp = require('./moz-tcp')
  }
}
