'use strict';

var RULES = {

  CM: [
    /^(134[0-8]|13[5-9]\d|147\d|15[0-27-9]\d|178\d|18[2-47-8]\d)\d{7}$/,
    /^1705\d{7}$/
  ],

  CT: [
    /^(133\d|1349|153\d|177\d|18[0-19]\d)\d{7}$/,
    /^1700\d{7}$/
  ],

  CU: [
    /^(13[0-2]|145|15[5-6]|176|18[5-6])\d{8}$/,
    /^1709\d{7}$/
  ]

};

module.exports = {

  Valid: {
    rules: RULES.CM.concat(RULES.CT, RULES.CU)
  },

  CM: {
    alias: 'ChinaMobile',
    rules: RULES.CM
  },

  CT: {
    alias: 'ChinaTelecom',
    rules: RULES.CT
  },

  CU: {
    alias: 'ChinaUnicom',
    rules: RULES.CU
  },

  CV: {
    alias: 'ChinaVirtual',
    rules: [RULES.CM[1], RULES.CT[1], RULES.CU[1]]
  }

};

// http://zh.wikipedia.org/wiki/中国内地移动终端通讯号码
