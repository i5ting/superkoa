'use strict'

const request = require('supertest')
const debug = require('debug')('superkoa')

module.exports = (appPath) => {
  let _path = appPath !== undefined ? appPath : '../../app.js'
  debug(_path)

  var koa = require(_path)

  debug(koa)
  return request(koa.listen())
}
