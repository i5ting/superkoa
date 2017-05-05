import test from 'ava'
import app from './app'
import superkoa from '.'

test.cb('superkoa()', t => {
  superkoa(app)
    .get('/')
    .expect(200, function (err, res) {
      t.ifError(err)
      t.is(res.text, 'Hello Koa', 'res.text == Hello Koa')
      t.end()
    })
})

test('yield superkoa()', function * (t) {
  let res = yield superkoa(app)
    .get('/')

  t.is(200, res.status)
  t.is(res.text, 'Hello Koa', 'res.text == Hello Koa')
})

test('async superkoa()', async (t) => {
  let res = await superkoa(app)
    .get('/')

  t.is(200, res.status)
  t.is(res.text, 'Hello Koa', 'res.text == Hello Koa')
})
