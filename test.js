'use strict';
var test 			= require('ava');
var cripNames = require('./');

test(function (t) {
	t.assert(cripNames.all.length > 0);
	t.assert(cripNames.allRandom());
	t.assert(cripNames.allRandom() !== cripNames.allRandom());
	t.assert(cripNames.all[0] === 'Johnie Hjelm');
	t.assert(cripNames.all[1] === 'Viktor Johansson');
	t.end();
});
