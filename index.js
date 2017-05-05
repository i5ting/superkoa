'use strict'

const request = require('supertest')
const debug = require('debug')('superkoa')

module.exports = (app) => {
  return request(app.listen())
}
