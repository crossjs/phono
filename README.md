# phono

[![spm version](http://spmjs.io/badge/phono)](http://spmjs.io/package/phono)
[![NPM version](https://img.shields.io/npm/v/phono.svg?style=flat-square)](https://npmjs.org/package/phono)

> SPM and NPM module, phone number validator.

## 安装

```
$ spm install phono --save
$ npm install phono --save
```

## 使用

```js
var phono = require('phono');
// use phono
// China Mobile
phono('17058888888').isCM();
// Chila Telecom
phono('17008888888').isCT();
// Chila Unicom
phono('17098888888').isCU();
// Virtual
phono('17058888888').isVT();
phono('17008888888').isVT();
phono('17098888888').isVT();
```
