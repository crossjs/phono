'use strict';

var map =require('./map');

var Validator = function(number) {
  this.number = number;
};

var p;

function mixin(p, obj) {
  Validator.prototype['is' + p] =
  Validator.prototype['is' + obj.alias] = function() {
    var i, n, rules = [];

    if (typeof obj.rules === 'function') {
      rules = obj.rules();
    }

    // object, not array, duck typing
    if (typeof obj.rules === 'object' &&
        typeof obj.rules.length === 'undefined') {

      for (i in obj.rules) {
        if (obj.rules.hasOwnProperty(i)) {
          rules.push(obj.rules[i]);
        }
      }
    }

    for (i = 0, n = rules.length; i < n; i++) {
      if (rules[i].test(this.number)) {
        return true;
      }
    }

    return false;
  };
}

for (p in map) {
  if (map.hasOwnProperty(p)) {
    mixin(p, map[p]);
  }
}

module.exports = Validator;
