'use strict'
var normal = require('get-plane-normal')
var dot = require('gl-vec3/dot')
var n = []
module.exports = function (p, a, b, c) {
  normal(n, a, b, c)
  return dot(n, p) - dot(n, a)
}

