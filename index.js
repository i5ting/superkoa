"use strict";

const request = require("supertest");
const debug = require('debug')('superkoa')

module.exports = (app_path) => {
  let _path = app_path ? app_path : '../../app.js'
  debug(_path);
  
  var koa = require(_path);
  
  debug(koa)
  return request(koa.listen());
}