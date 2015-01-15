'use strict';
/**
 * crip-names.js
 * Copyright © 2015 Johnie Hjelm
 */

var uniqueRandom 	= require('unique-random');
var cripNames 		= require('./crip-names.json');

var allRandom = uniqueRandom(0, cripNames.length, -1);

exports.all = cripNames;

exports.allRandom = function () {
	return cripNames[allRandom()];
};
