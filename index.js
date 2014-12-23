/**
 * Description: index.js
 * Author: crossjs <liwenfu@crossjs.com>
 * Date: 2014-12-23 16:28:54
 */

'use strict';

var Validator = require('./src/validator');

module.exports = function(number) {
  return new Validator(number);
};
