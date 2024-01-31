import type {
	IsLtdString,
	isWideNum,
} from '..'

// js
export interface TypeMapJS {
	bigint: bigint
	boolean: boolean
	function: Function
	number: number
	object: Object
	string: string
	symbol: Symbol
	undefined: undefined
}
export type TypeNameJS = keyof TypeMapJS
export const TYPE_MAP: TypeMapJS = {
	bigint: 0n,
	boolean: false,
	function() { },
	number: 0,
	object: {},
	string: '',
	symbol: Symbol(),
	undefined: void 0,
}
export function str2type<N extends TypeNameJS>(str: N) {
	return TYPE_MAP[str]
}

export type AllTypeJS = TypeMapJS[keyof TypeMapJS]

export type TypeOfJS<N> =
	N extends bigint ? 'bigint' :
	N extends boolean ? 'boolean' :
	N extends Function ? 'function' :
	N extends number ? 'number' :
	N extends string ? 'string' :
	N extends Symbol ? 'symbol' :
	N extends Object | null ? 'object' :
	N extends undefined ? 'undefined' :
	never

export type TypeNameObjJS<T extends TypeNameJS, E = 1> = { [I in T]: E }

export type IsTypeNameJS<N, M extends TypeNameJS = TypeNameJS> = IsLtdString<N> extends true ? N extends M ? true : false : boolean
export function isTypeNameJS<N, T extends string, M extends TypeNameJS = TypeNameJS>(n: N | T, range: TypeNameObjJS<M, any> = TYPE_MAP) {
	return (typeof n === 'string' && n in range) as IsTypeNameJS<N, M>
}

// ts
export interface TypeMap extends TypeMapJS {
	unknown: unknown
	never: never
	void: void
	null: null
}
export type TypeName = keyof TypeMap
const TYPE_MAP_TS = {
	null: null,
	unknown: 1 as unknown,
	never: void 0 as never,
	'void': void 0 as void,
	...TYPE_MAP,
}

export type TypeOf<N> =
	N extends undefined ? 'undefined' :
	N extends void ? 'void' :
	N extends null ? 'null' :
	TypeOfJS<N> extends never ?
	'unknown' :
	TypeOfJS<N>
export type NameOfType<N> = TypeOf<N>

export type TypeNameObj<T extends TypeName, E = 0> = { [I in T]: E }

export type IsTypeName<N, M extends TypeName = TypeName> = IsLtdString<N> extends true ? N extends M ? true : false : boolean
export function isTypeName<N, T extends string, M extends TypeName = TypeName>(n: N | T, range: TypeNameObj<M, any> = TYPE_MAP_TS) {
	return (typeof n === 'string' && n in range) as IsTypeName<N, M>
}
