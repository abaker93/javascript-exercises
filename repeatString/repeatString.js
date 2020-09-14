const repeatString = function(string, num) {
    let newString = "";

    if (num < 0) {
        return 'ERROR';
    }

    for (i=0; i<num; i++) {
        newString = newString.concat(string);
    }

    return newString;
}

module.exports = repeatString;