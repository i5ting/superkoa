# superkoa

koa with [supertest](https://github.com/visionmedia/supertest) for [ava](https://github.com/avajs/ava) or [mocha](https://github.com/mochajs/mocha)

## Usages

```
var superkoa = require('superkoa')

test.cb("superkoa()", t => {
  superkoa('./app')
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