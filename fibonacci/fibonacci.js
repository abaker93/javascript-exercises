const fibonacci = function(int) {
    let num = 0;
	if (typeof int !== 'number') {
		num = parseInt(int, 10);
	} else {
		num = int
	}
	if (num <= 0) return 'OOPS';
	let x = 0, y = 1, temp, arr = [];
	arr.push(y);

	for (i=1; i<num; i++) {
		temp = y;
		y = x + y;
		x = temp;
		arr.push(y);
	}

	return arr[num-1];
}

module.exports = fibonacci
