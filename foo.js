/** @flow */
var _ = require('underscore');

function foo(): string {
  var x = _.clone("foo");  // ok
  return _.foo();
}

module.exports = foo;
