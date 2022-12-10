const _this = module.exports = {
	TYPE_MAP: {
		bigint: 0n,
		boolean: false,
		function() { },
		number: 0,
		object: {},
		string: '',
		symbol: Symbol(),
		undefined: void 0,
	},
	str2type: (str) => _this.TYPE_MAP[str],
	isTypeNameJS: (n) => n in _this.TYPE_MAP,
	isTypeName: (n) => n in _this.TYPE_MAP || n in { never: 0, 'void': 0 },
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
}
