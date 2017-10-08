"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = platzom;
function platzom(str) {
	var translation = str;

	if (str.toLowerCase().endsWith("ar")) {
		translation = str.slice(0, -2);
	}

	if (str.toLowerCase().startsWith("z")) {
		translation += "pe";
	}

	var length = translation.length;
	if (length >= 10) {
		var firstHalf = translation.slice(0, Math.round(length / 2));
		var secondHalf = translation.slice(Math.round(length / 2));
		translation = firstHalf + "-" + secondHalf;
	}

	function minMay(str) {
		var length = str.length;
		var translation = '';
		for (var i = 0; i < length; i++) {
			var char = str.charAt(i);
			translation += i % 2 == 0 ? char.toUpperCase() : char.toLowerCase();
		}
		return translation;
	}

	function reverse(str) {
		return str.split('').reverse().join('');
	}

	if (str == reverse(str)) {
		return minMay(str);
	}

	return translation;
}