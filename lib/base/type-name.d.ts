import {
	IsLtdString,
} from '..'

// js
interface TypeMapJS {
	bigint: bigint,
	boolean: boolean,
	function: Function,
	number: number,
	object: Object,
	string: string,
	symbol: Symbol,
	undefined: undefined,
}
type TypeNameJS = keyof TypeMapJS
declare const TYPE_MAP: TypeMapJS
declare function str2type<N extends TypeNameJS>(str: N): TypeMapJS[N]

type AllTypeJS = TypeMapJS[keyof TypeMapJS]

type TypeOfJS<N> =
	N extends bigint ? 'bigint' :
	N extends boolean ? 'boolean' :
	N extends Function ? 'function' :
	N extends number ? 'number' :
	N extends string ? 'string' :
	N extends Symbol ? 'symbol' :
	N extends Object | null ? 'object' :
	N extends undefined ? 'undefined' :
	never

type TypeNameObjJS<T extends TypeNameJS, E = 1> = { [I in T]: E }

type IsTypeNameJS<N, M extends TypeNameJS = TypeNameJS> = IsLtdString<N> extends true ? N extends M ? true : false : boolean
declare function isTypeNameJS<N, T extends string, M extends TypeNameJS = TypeNameJS>(n: N | T, range?: TypeNameObjJS<M, any>): IsTypeNameJS<N, M>

// ts
interface TypeMap extends TypeMapJS {
	unknown: unknown,
	never: never,
	void: void,
	null: null,
}
type TypeName = keyof TypeMap

type TypeOf<N> =
	N extends undefined ? 'undefined' :
	N extends void ? 'void' :
	N extends null ? 'null' :
	TypeOfJS<N> extends never ?
	'unknown' :
	TypeOfJS<N>
type NameOfType<N> = TypeOf<N>

type TypeNameObj<T extends TypeName, E = 0> = { [I in T]: E }

type IsTypeName<N, M extends TypeName = TypeName> = IsLtdString<N> extends true ? N extends M ? true : false : boolean
declare function isTypeName<N, T extends string, M extends TypeName = TypeName>(n: N | T, range?: TypeNameObj<M, any>): IsTypeName<N, M>
