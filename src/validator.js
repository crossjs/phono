'use strict';

var rules =require('./rules');

var Validator = function(number) {
  this.number = number;
};

Validator.prototype.check = function(rule) {
  if (typeof rule === 'function') {
    rule = rule();
  }

  return rule.test(this.number);
};

var p;

function mixin(p, obj) {
  Validator.prototype['is' + p] = function() {
    var i, n, rules = obj.rules;

    if (!(rules instanceof Array)) {
      rules = [rules];
    }

    for (i = 0, n = rules.length; i < n; i++) {
      if (this.check(rules[i])) {
        return true;
      }
    }

    return false;
  };

  if (obj.alias) {
    Validator.prototype['is' + obj.alias] = Validator.prototype['is' + p];
  }
}

for (p in rules) {
  if (rules.hasOwnProperty(p)) {
    mixin(p, rules[p]);
  }
}

module.exports = Validator;
