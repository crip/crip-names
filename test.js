'use strict';
var test 			= require('ava');
var cripNames = require('./');

test(function (t) {
	t.assert(cripNames.crip.length > 0);
	t.assert(cripNames.all.length > 0);
	t.assert(cripNames.cripRandom());
	t.assert(cripNames.allRandom());
	t.assert(cripNames.allRandom() !== cripNames.allRandom());
	t.assert(cripNames.crip[0] === 'Johnie Hjelm');
	t.assert(cripNames.crip[1] === 'Viktor Johansson');
	t.end();
});
