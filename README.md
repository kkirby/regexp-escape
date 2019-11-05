# @kkirbatski/regexp-escape

A super simple, zero dependency library to escape regular expressions.

## Install

```shell
npm install @kkirbatski/regexp-escape --save-dev
```

## Usage

```javascript
const escapeRegExp = require('@kkirbatski/regexp-escape');

console.log(escapeRegExp('q[ O_O ]p'))
```

## Source

```javascript
const specialChars = [
	'^',
	'$',
	'\\',
	'.',
	'*',
	'+',
	'?',
	'(',
	')',
	'[',
	']',
	'{',
	'}',
	'|'
].map(specialChar => '\\' + specialChar);

const specialCharsRegExp = new RegExp(`[${specialChars.join('')}]`,'g');

module.exports = function escapeRegExpString(subject){
	return subject.replace(specialCharsRegExp,'\\$&');
}
```