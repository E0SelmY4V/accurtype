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
}
