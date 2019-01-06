function add (value1, value2) {
	return value1 + value2;
}

function subtract (value1, value2) {
	return value1 - value2;
}

function sum (array) {
	return array.reduce((total, value) => total + value, 0);
}

function multiply (array) {
	return (array.length > 1 ? array.reduce((total, value) => total * value) : "Requires array.length > 2");
	//return array.reduce((total, value) => total * value);
}

function power(number, power) {
	return number ** power;
}

function factorial(value) {
	array = [];
	for (value; value>0; value--) {
		array.push(value);
	};
	return array.reduce((total,value) => total*value, 1);
};

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}