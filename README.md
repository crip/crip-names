# crip-names [![Build Status](https://travis-ci.org/crip/crip-names.svg)](https://travis-ci.org/crip/crip-names)

> Get awesome crip names, diangoses and pornstar names

<img src="crip-names.svg" alt="Crip Names">

The name lists are just JSON files and can be used wherever.

_We accept PR for additional names and diagnoses_

## Install

```sh
$ npm install --global crip-names
```

## Usage

```javascript
var cripNames = require('crip-names');

cripNames.allRandom();
//=> Stephen Hawkings

cripNames.diagnosesRandom();
//=> Duchennes

cripNames.pornstarRandom();
//=> Hawking Cutesack
```

## API

### .crip

Type: `array`

Top crip names sorted by popularity.

### .diagnoses

Type: `array`

Small list of diagnoses and physical disabilities

### .porn

Type: `array`

Small list of weird and funny words to build pornstar names

### .allRandom()

Type: `function`

Random crip name.

### .diagnosesRandom()

Type: `function`

Random diagnoses.

### .pornstarRandom()

Type: `function`

Random funny crip pornstar name.


## CLI

```
$ npm install --global crip-names
```

```
$ crip-names --help

  Examples
    $ crip-names
    Stephen Hawkings

    $ crip-names --all
		Johnie Hjelm
		Viktor Johansson
		...

    $ crip-names --type diagnoses
    Spinal Muscular Atrophy

    $ crip-names --type pornstar
		Hawking Cutesack

  Options
    --all   Get all names instead of a random name
    --type  Type of name: all|diagnoses|pornstar  Default: all
```

## Inspired By [Sindre Sorhus](http://sindresorhus.com)

- [`cat-names`](https://github.com/sindresorhus/cat-names) - Get popular cat names
- [`dog-names`](https://github.com/sindresorhus/dog-names) - Get popular dog names

## License

MIT © [Crip.io](http://crip.io/)
