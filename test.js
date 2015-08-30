'use strict';
var test 			= require('ava');
var cripNames = require('./');

test('Crip Names', function (t) {
	t.plan(5);
	t.assert(cripNames.all.length > 0);
	t.assert(cripNames.allRandom());
	t.assert(cripNames.allRandom() !== cripNames.allRandom());
	t.assert(cripNames.all[0] === 'Johnie Hjelm');
	t.assert(cripNames.all[1] === 'Viktor Johansson');
	t.end();
});

test('Crip Diagnoses', function (t) {
	t.plan(3);
	t.assert(cripNames.diagnosesRandom() !== cripNames.diagnosesRandom());
	t.assert(cripNames.diagnoses[0] === 'Spinal Muscular Atrophy');
	t.assert(cripNames.diagnoses[1] === 'Muscular Dystrophy');
	t.end();
});

test('Crip Pornstar', function (t) {
	t.plan(1);
	t.assert(/\w\s\w/g.test(cripNames.pornstarRandom()));
	t.end();
});
