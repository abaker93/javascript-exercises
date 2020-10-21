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


document.getElementById('caesar1').innerText = caesar('A', 1)
document.getElementById('caesar2').innerText = caesar('Aaa', 1)
document.getElementById('caesar3').innerText = caesar('Hello, World!', 5)
document.getElementById('caesar4').innerText = caesar('Mjqqt, Btwqi!', -5)
document.getElementById('caesar5').innerText = caesar('Z', 1)
document.getElementById('caesar6').innerText = caesar('Hello, World!', 75)
document.getElementById('caesar7').innerText = caesar('Hello, World!', -29)

document.getElementById('calc1').innerText = add(0,0)
document.getElementById('calc2').innerText = add(2,2)
document.getElementById('calc3').innerText = add(2,6)
document.getElementById('calc4').innerText = subtract(10,4)
document.getElementById('calc5').innerText = sum([])
document.getElementById('calc6').innerText = sum([7])
document.getElementById('calc7').innerText = sum([7,11])
document.getElementById('calc8').innerText = sum([1,3,5,7,9])
document.getElementById('calc9').innerText = multiply([2,4])
document.getElementById('calc10').innerText = multiply([2,4,6,8,10,12,14])
document.getElementById('calc11').innerText = power(4,3)
document.getElementById('calc12').innerText = factorial(0)
document.getElementById('calc13').innerText = factorial(1)
document.getElementById('calc14').innerText = factorial(2)
document.getElementById('calc15').innerText = factorial(3)
document.getElementById('calc16').innerText = factorial(10)

document.getElementById('fib1').innerText = fibonacci(4)
document.getElementById('fib2').innerText = fibonacci(6)
document.getElementById('fib3').innerText = fibonacci(10)
document.getElementById('fib4').innerText = fibonacci(15)
document.getElementById('fib5').innerText = fibonacci(25)
document.getElementById('fib6').innerText = fibonacci(-25)
document.getElementById('fib7').innerText = fibonacci('1')
document.getElementById('fib8').innerText = fibonacci('2')
document.getElementById('fib9').innerText = fibonacci('8')