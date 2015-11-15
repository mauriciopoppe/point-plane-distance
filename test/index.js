'use strict'

var pointPlaneDistance = require('../')
var pointPlaneDistanceSigned = require('../signed')
var test = require('tape')

var EPS = 1e-6
function almostEqual (a, b, t) {
  t.assert(
    Math.abs(a - b) < EPS
  )
}

test('should compute the signed distance between a plane and a point', function (t) {
  almostEqual(
    pointPlaneDistanceSigned([0, 0, -5], [0, 0, 0], [1, 0, 0], [0, 1, 0]),
    -5,
    t
  )
  almostEqual(
    pointPlaneDistanceSigned([10, 0, 0], [0, 0, 0], [0, 0, 1], [0, 1, 0]),
    -10,
    t
  )
  t.end()
})

test('should compute the distance between a plane and a point', function (t) {
  almostEqual(
    pointPlaneDistance([10, 0, 0], [0, 0, 0], [0, 0, 1], [0, 1, 0]),
    10,
    t
  )
  // from http://tutorial.math.lamar.edu/Classes/CalcIII/EqnsOfPlanes.aspx
  almostEqual(
    pointPlaneDistance([5, 5, 3], [1, -2, 0], [3, 1, 4], [0, -1, 2]),
    11 * Math.sqrt(93) / 31,
    t
  )
  t.end()
})
