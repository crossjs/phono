'use strict';

var expect = require('expect.js');
var phono = require('../index');

/*globals describe,it*/

describe('phono', function() {

  it('should be china mobile', function() {
    expect(phono('13418888888').isCM()).to.be.ok();
    expect(phono('13418888888').isChinaMobile()).to.be.ok();
    expect(phono('13418888888').isCT()).not.to.be.ok();
    expect(phono('13418888888').isCU()).not.to.be.ok();
  });

  it('should be china telecom', function() {
    expect(phono('13498888888').isCT()).to.be.ok();
    expect(phono('13498888888').isChinaTelecom()).to.be.ok();
    expect(phono('13498888888').isCM()).not.to.be.ok();
    expect(phono('13498888888').isCU()).not.to.be.ok();
  });

  it('should be china unicom', function() {
    expect(phono('14518888888').isCU()).to.be.ok();
    expect(phono('14518888888').isChinaUnicom()).to.be.ok();
    expect(phono('14518888888').isCM()).not.to.be.ok();
    expect(phono('14518888888').isCT()).not.to.be.ok();
  });

  it('should be virtual', function() {
    expect(phono('17058888888').isVT()).to.be.ok();
    expect(phono('17058888888').isVirtual()).to.be.ok();
    expect(phono('17058888888').isCM()).to.be.ok();

    expect(phono('17008888888').isVT()).to.be.ok();
    expect(phono('17008888888').isVirtual()).to.be.ok();
    expect(phono('17008888888').isCT()).to.be.ok();

    expect(phono('17098888888').isVT()).to.be.ok();
    expect(phono('17098888888').isVirtual()).to.be.ok();
    expect(phono('17098888888').isCU()).to.be.ok();
  });

});
