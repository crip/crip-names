'use strict';
/**
 * crip-names.js
 * Copyright © 2015 Johnie Hjelm
 */

var uniqueRandom 	= require('unique-random');
var cripNames 		= require('./crip-names.json');
var diagnoses 		= require('./diagnoses.json');

var allRandom = uniqueRandom(0, cripNames.length, -1);
var diagnosesRandom = uniqueRandom(0, diagnoses.length, -1);

exports.all = cripNames;

exports.allRandom = function () {
	return cripNames[allRandom()];
};

exports.diagnosesRandom = function () {
	return diagnoses[diagnosesRandom()];
}
