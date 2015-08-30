#!/usr/bin/env node
'use strict';
/**
 * crip-names.js
 * Copyright © 2015 Johnie Hjelm
 */

var uniqueRandomArray = require('unique-random-array');
var cripNames         = require('./crip-names.json');
var diagnoses         = require('./diagnoses.json');
var pornstache        = require('./pornstache.json');
var pornNames         = require('./porn-names.js');

// Export variables
exports.all       = cripNames;
exports.diagnoses = diagnoses;
exports.porn      = pornstache;

// Export functions
exports.allRandom       = uniqueRandomArray(cripNames);
exports.diagnosesRandom = uniqueRandomArray(diagnoses);
exports.pornstarRandom  = function () {
	return pornNames.cripPornStar;
}
