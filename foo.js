/** @flow */

var _ = require('underscore');

var o = {a: 1, b: 2, c: 3};

var cs = _.map(o, x => x.count);

