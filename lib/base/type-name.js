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
	isTypeNameJS: (n, range = _this.TYPE_MAP) => n in range,
	isTypeName: (n, range = { null: 1, unknown: 1, never: 1, 'void': 1, ..._this.TYPE_MAP }) => n in range,
};
