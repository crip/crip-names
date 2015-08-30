#!/usr/bin/env node
'use strict';
var meow = require('meow');
var cripNames = require('./');

var cli = meow({
  help: [
	'Examples',
	'  $ crip-names',
	'  Stephen Hawkings',
	'',
	'  $ crip-names --all',
	'  Johnie Hjelm',
	'  Viktor Johansson',
	'  ...',
	'',
	'  $ crip-names --type diagnoses',
	'  Spinal Muscular Atrophy',
	'',
	'',
	'  $ crip-names --type pornstar',
	'  Hawking Cutesack',
	'',
	'Options',
	'  --all   Get all names instead of a random name',
	'  --type  Type of name: all|diagnoses|pornstar Default: all'
  ].join('\n')
});

var type = cli.flags.type || 'all';
console.log(cli.flags.all ? cripNames[type].join('\n') : cripNames[type + 'Random']());
