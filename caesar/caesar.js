const caesar = function(str, num) {
    var newStr = ''
	for (var i=0; i<str.length; i++) {
        var charCode = str.charCodeAt(i)
        var newNum = 0

        if (num >= 26) {
			newNum = num % 26
		} else {
			newNum = num
		}

		if (charCode >= 65 && charCode <= 90) {
			var newCharCode = charCode + newNum
			if (newCharCode > 90) {
				newCharCode = newCharCode - 26
			} else if (newCharCode < 65) {
				newCharCode = newCharCode + 26
			} else {
				newCharCode
			}
			var newChar = String.fromCharCode(newCharCode)
		} else if (charCode >= 97 && charCode <= 122) {
			var newCharCode = charCode + newNum
			if (newCharCode > 122) {
				newCharCode = newCharCode - 26
			} else if (newCharCode < 97) {
				newCharCode = newCharCode + 26
			} else {
				newCharCode
			}
			var newChar = String.fromCharCode(newCharCode)
		} else {
			var newChar = String.fromCharCode(charCode)
		}

		newStr = newStr.concat(newChar)
	}
	return newStr
}

module.exports = caesar
