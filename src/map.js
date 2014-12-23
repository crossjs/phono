'use strict';

var map = module.exports = {

  'CM': {
    'alias': 'ChinaMobile',
    'rules': {
      'regular': /^(134[0-8]|13[5-9]\d|147\d|15[0-27-9]\d|178\d|18[2-47-8]\d)\d{7}$/,
      'virtual': /^1705\d{7}$/
    }
  },

  'CT': {
    'alias': 'ChinaTelecom',
    'rules': {
      'regular': /^(133\d|1349|153\d|177\d|18[0-19]\d)\d{7}$/,
      'virtual': /^1700\d{7}$/
    }
  },

  'CU': {
    'alias': 'ChinaUnicom',
    'rules': {
      'regular': /^(13[0-2]|145|15[5-6]|176|18[5-6])\d{8}$/,
      'virtual': /^1709\d{7}$/
    }
  },

  'VT': {
    'alias': 'Virtual',
    'rules': function() {
      return [map.CM.rules.virtual, map.CT.rules.virtual, map.CU.rules.virtual];
    }
  }

};

// http://zh.wikipedia.org/wiki/中国内地移动终端通讯号码
