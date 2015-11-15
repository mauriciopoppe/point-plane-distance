/*
 * point-plane-distance
 *
 * Copyright (c) 2015 Mauricio Poppe
 * Licensed under the MIT license.
 */

'use strict'

var signedPointPlaneDistance = require('./signed')

module.exports = function (p, a, b, c) {
  return Math.abs(signedPointPlaneDistance(p, a, b, c))
}
