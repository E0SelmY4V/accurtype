module.exports = {
	isTostrable: (n) => {
		switch (typeof n) {
			case 'function': case 'symbol': return false;
			case 'object': return n === null;
			default: return true;
		}
	},
	str2num: (str, to = 'number') => {
		switch (to) {
			case 'string': return str;
			case 'number': return str.indexOf('.') === -1 ? parseInt(str) : parseFloat(str);
			case 'bigint': return BigInt(str);
			case 'boolean': return str === 'true' ? true : false;
			case 'undefined': return void 0;
			case 'null': return null;
		}
	},
	num2bool: (n) => !!n,
	cnvNum: (num, to = 'number') => (to === 'number' ? parseInt : BigInt)(num),
	bool2num: (n, to = 'number') => to === 'number' ? 0 + n : n ? 1n : 0n,
	tostrable2bool: (n) => !!n,
};
