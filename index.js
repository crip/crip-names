'use strict';
/**
 * crip-names.js
 * Copyright © 2015 Johnie Hjelm
 */

var uniqueRandom 	= require('unique-random');
var cripNames 		= require('./crip-names.json');


var allCripNames = [];

cripNames.forEach(function (el, i) {
	allCripNames.push(el, cripNames[i]);
});

var cripRandom = uniqueRandom(0, cripNames.length, -1);
var allRandom = uniqueRandom(0, allCripNames.length, -1);

exports.crip = cripNames;
exports.all = allCripNames;

exports.cripRandom = function () {
	return cripNames[cripRandom()];
};

exports.allRandom = function () {
	return allCripNames[allRandom()];
};
