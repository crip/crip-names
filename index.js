'use strict';
/**
 * crip-names.js
 * Copyright © 2015 Johnie Hjelm
 */

var uniqueRandomArray = require('unique-random-array');
var cripNames 		= require('./crip-names.json');
var diagnoses 		= require('./diagnoses.json');

// Export variables
exports.all = cripNames;
exports.diagnoses = diagnoses;

// Export functions
exports.allRandom = uniqueRandomArray(cripNames);
exports.diagnosesRandom = uniqueRandomArray(diagnoses);
