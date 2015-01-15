# crip-names

> Get awesome crip names

The name lists are just JSON files and can be used wherever.

## Install

```sh
$ npm install --save crip-names
```

## Usage

```javascript
var cripNames = require('crip-names');

cripNames.cripRandom();
//=> Stephen Hawkings
```

## API

### .crip

Type: `array`

Top crip names sorted by popularity.

### .cripRandom()

Type: `function`

Random crip name.

### .allRandom()

Type: `function`

Random dog name.


## CLI

```
$ npm install --global crip-names
```

```
$ crip-names --help

  Examples
    $ crip-names
    Stephen Hawkings

    $ crip-names --type porn
    Fister Reeves

  Options
    --all   Get all names instead of a random name
    --type  Type of name: all|porn|diagnosis  Default: all
```

## License

MIT © [Crip.io](http://crip.io/)
