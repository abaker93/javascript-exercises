const getTheTitles = function(arr) {
    let newArr = [];
	arr.forEach((book) => {
        newArr.push(book.title);
	});
	return newArr;
}

module.exports = getTheTitles;
