require('../../modules/es.regexp.split');
var SPLIT = require('core-js-internals/well-known-symbol')('split');

module.exports = function (it, str, limit) {
  return RegExp.prototype[SPLIT].call(it, str, limit);
};