# superkoa

koa with [supertest](https://github.com/visionmedia/supertest) for [ava](https://github.com/avajs/ava) or [mocha](https://github.com/mochajs/mocha)

[![npm version](https://badge.fury.io/js/superkoa.svg)](http://badge.fury.io/js/superkoa)
[![Build](https://travis-ci.org/i5ting/superkoa.svg?branch=master)](https://travis-ci.org/i5ting/superkoa)

## Usages

```
var superkoa = require('superkoa')

test.cb("superkoa()", t => {
  superkoa('./koa.app.js')
    .get("/")
    .expect(200, function (err, res) {
      t.ifError(err)
      var userId = res.body.id;
      t.is(res.text, 'Hello Koa', 'res.text == Hello Koa')
      t.end()
    });
});
```

## Test

```
$ npm test
```

with watch mode

```
npm test -- -w 
```


## Document

see http://visionmedia.github.io/superagent/

