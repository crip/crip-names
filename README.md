# crip-names [![Build Status](https://travis-ci.org/crip/crip-names.svg)](https://travis-ci.org/crip/crip-names)

> Get awesome crip names

The name lists are just JSON files and can be used wherever.

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
```

## API

### .crip

Type: `array`

Top crip names sorted by popularity.

### .diagnoses

Type: `array`

Small list of diagnoses and physical disabilities

### .allRandom()

Type: `function`

Random crip name.

### .diagnosesRandom()

Type: `function`

Random diagnoses.


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

  Options
    --all   Get all names instead of a random name
    --type  Type of name: all|diagnoses  Default: all
```

## Inspired By [Sindre Sorhus](http://sindresorhus.com)

- [`cat-names`](https://github.com/sindresorhus/cat-names) - Get popular cat names
- [`dog-names`](https://github.com/sindresorhus/dog-names) - Get popular dog names

## License

MIT © [Crip.io](http://crip.io/)
