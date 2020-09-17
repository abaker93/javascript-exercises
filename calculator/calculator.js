function add (x, y) {
	return x + y;
}

function subtract (x, y) {
	return x - y
}

function sum (...args) {
	const array = args[0];
	let sum = 0;

	for (i=0; i<array.length; i++) {
		sum = sum + array[i];
	}

	return sum;
}

function multiply (...args) {
	const array = args[0];
	let product = array[0];
	
	for (i=1; i<array.length; i++) {
		product = product * array[i];
	}
	
	return product;
}

function power(x, y) {
	return Math.pow(x, y);
}

function factorial(x) {
	let array = [];
	let factorial = x;

	if (x === 0) return 1;

	for (i=1; i<x; i++) array.push(i);

	for (i=0; i<array.length; i++) factorial = factorial * array[i];

	return factorial;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}