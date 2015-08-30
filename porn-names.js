'use strict';
/**
 * porn-names.js
 * Copyright © 2015 Johnie Hjelm Crip™
 *
 * @return {String}
 */

var _ 								= require('lodash');
var uniqueRandomArray = require('unique-random-array');
var cripNames 				= require('./crip-names.json');
var pornstache 				= require('./pornstache.json');

/**
 * Return a random number between specified params
 *
 * @param {Number} min
 * @param {Number} max
 *
 * @return {Number}
 */

var getRandomIntInclusive = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Return first- or lastname from cripNames
 *
 * @return {String}
 */

var getCripName = function () {
	// Look for space in names
	var re = /\s/;
	// Get one name from cripNames
	var name = uniqueRandomArray(cripNames);
	// Split the first- and lastname into an array
	var nameArr = name().split(re);
	// Get the first- or lastname randomly
	var firstOrLast = getRandomIntInclusive(0,1);

	// Return first- or lastname
	return nameArr[firstOrLast];
}


/**
 * Return a porn word
 *
 * @return {String}
 */

var getPornWord = uniqueRandomArray(pornstache);


/**
 * Return a crip pornstar name
 *
 * @return {String}
 */

var cripPornStar = function () {
	var wordArr = [getCripName(), getPornWord()];

	return _.shuffle(wordArr).join(' ');
}

/**
 * Export cripPornStar()
 *
 * @return {Object}
 */

exports.cripPornStar = cripPornStar();
