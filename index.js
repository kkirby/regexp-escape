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