import test from 'ava';

var superkoa = require('.')

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