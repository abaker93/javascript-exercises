const palindromes = function(word) {
    let string = word.replace(/[.,\/#!$%\^&\*;:{}=\-	_`~()]/g,"");
	string = string.replace(/\s/g, '');
	string = string.toLowerCase();
	let reversedString = '';

	for (i=string.length-1; i>=0; i--) {
		reversedString = reversedString.concat(string.charAt(i));
	}

	if (string === reversedString) return true
	else return false;
}

module.exports = palindromes
