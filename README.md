# superkoa

koa with [supertest](https://github.com/visionmedia/supertest) for [ava](https://github.com/avajs/ava) or [mocha](https://github.com/mochajs/mocha)

[![npm version](https://badge.fury.io/js/superkoa.svg)](http://badge.fury.io/js/superkoa)
[![Build](https://travis-ci.org/i5ting/superkoa.svg?branch=master)](https://travis-ci.org/i5ting/superkoa)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)


## Usages

```
import app from './app'
import superkoa from './superkoa'

test.cb("superkoa()", t => {
  superkoa(app)
    .get("/")
    .expect(200, function (err, res) {
      t.ifError(err)
      var userId = res.body.id;
      t.is(res.text, 'Hello Koa', 'res.text == Hello Koa')
      t.end()
    });
});
```

with generator

```
test('yield superkoa()', function * (t) {
  let res = yield superkoa(app)
    .get('/')

  t.is(200, res.status)
  t.is(res.text, 'Hello Koa', 'res.text == Hello Koa')
})
```

with async/await

```
test('async superkoa()', async (t) => {
  let res = await superkoa(app)
    .get('/')

  t.is(200, res.status)
  t.is(res.text, 'Hello Koa', 'res.text == Hello Koa')
})
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

