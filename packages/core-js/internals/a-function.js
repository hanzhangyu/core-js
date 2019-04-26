/**
 * @file 确认是个函数
 * @param it
 * @returns {Function}
 */

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};
