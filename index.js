'use strict';
/**
 * crip-names.js
 * Copyright © 2015 Johnie Hjelm
 */

var uniqueRandomArray = require('unique-random-array');
var cripNames         = require('./crip-names.json');
var diagnoses         = require('./diagnoses.json');
var nameCreator       = require('./name-creator.js');
var naughtyness       = require('./naughtyness.json');

// Export variables
exports.all       = cripNames;
exports.diagnoses = diagnoses;
exports.pornstar  = naughtyness;

// Export functions
exports.allRandom       = uniqueRandomArray(cripNames);
exports.diagnosesRandom = uniqueRandomArray(diagnoses);
exports.pornstarRandom  = function () {
	return nameCreator.cripPornStar;
}
