module.exports = {
	isLess: (a, b) => a < b,
	isNotless: (a, b) => a <= b,
	isGreater: (a, b) => a > b,
	isNotgreater: (a, b) => a >= b,
	isEqual: (a, b) => a == b,
	max: (n) => Math.max(...n),
	min: (n) => Math.min(...n),
};
