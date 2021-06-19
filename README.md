# fast-pass-gen [![NPM version][npm-image]][npm-url]

Fast password generator.

# Description

This module will help you generate passwords with a specific length and alphabet. 

# Table of Contents

* [Install](#install)
* [Usage](#usage)
* [API](#api)
* [Contacts](#contacts)

<div id='install'></div>

# Install

```bash
$ npm install fast-pass-gen
```

<div id='usage'></div>

# Usage

```javascript

const passGen = require("fast-pass-gen");

console.log(passGen(), passGen(20), passGen(10, "num"), passGen(15, ["num", "eng"]));

```

```bash

ЛD[пEo4эДК$hТоЫ)-dд, hHrWN8$AqF[ёТея.%ж&д 7815893489 7zf3tw5y6ii1v3g

```

<div id='api'></div>

# API

Types: [HERE!](https://github.com/StormExecute/fast-pass-gen/blob/master/index.d.ts)

### passGen(length?: number, ownAlphabet?: ownAlphabet) => string
The main function.

<div id='contacts'></div>

# Contacts

**Yandex Mail** - vladimirvsevolodovi@yandex.ru

**Github** - https://github.com/StormExecute/

# Platforms

**Github** - https://github.com/StormExecute/fast-pass-gen/

**NPM** - https://www.npmjs.com/package/fast-pass-gen/

# License

**MIT** - https://mit-license.org/

[npm-url]: https://www.npmjs.com/package/fast-pass-gen
[npm-image]: https://img.shields.io/npm/v/fast-pass-gen.svg