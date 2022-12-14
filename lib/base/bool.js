const _this = module.exports = {
	not: (n) => !n,
	and: (a, b) => a && b,
	or: (a, b) => a || b,
	nand: (a, b) => !(a && b),
	nor: (a, b) => !(a || b),
	xor: (a, b) =>  (a || b) && !(a && b),
	xnor: (a, b) => (a && b) || !(a || b),
};
