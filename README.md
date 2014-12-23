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

// Valid
phono('13800138000').isValid();

// China Mobile
phono('17050000000').isCM();
phono('17050000000').isChinaMobile();

// China Telecom
phono('17000000000').isCT();
phono('17000000000').isChinaTelecom();

// China Unicom
phono('17090000000').isCU();
phono('17090000000').isChinaUnicom();

// China Virtual
phono('17050000000').isCV();
phono('17050000000').isChinaVirtual();
phono('17000000000').isCV();
phono('17000000000').isChinaVirtual();
phono('17090000000').isCV();
phono('17090000000').isChinaVirtual();
```
