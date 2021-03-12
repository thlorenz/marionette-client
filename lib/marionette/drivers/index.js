'use strict'

module.exports = {
  Abstract: require('./abstract'),
}

if (!process.browser) {
  module.exports.Tcp = require('./tcp')
  module.exports.Promises = require('./promises')
} else {
  if (typeof window.TCPSocket !== 'undefined') {
    // NOTE: this file does not exist also if windows is not defined it'll just
    // quietly fail
    module.exports.MozTcp = require('./moz-tcp')
  }
}
