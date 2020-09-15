const sumAll = function(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') return 'ERROR';
	if (num1 < 0 || num2 < 0) return 'ERROR';
	const numbers = [];
	let sum = 0;

	if (num1 < num2) {
		for (i=num1; i<num2+1; i++) numbers.push(i);
	} else {
		for (i=num2; i<num1+1; i++) numbers.push(i);
	}

    numbers.forEach((number) => { sum = sum + number; })
    
    return sum;
}

module.exports = sumAll
