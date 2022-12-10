import {
} from '..'

type SigNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

type Not<N extends boolean> = N extends true ? false : true

type WideNum = number | bigint
type IsWideWideNum<N> = N extends WideNum ? number extends N ? true : bigint extends N ? true : false : false
type IsLtdWideNum<N> = N extends WideNum ? Not<IsWideWideNum<N>> : false

type IsWideBoolean<N> = TypeOf<N> extends 'boolean' ? boolean extends N ? true : false : false
type IsLtdBoolean<N> = TypeOf<N> extends 'boolean' ? boolean extends N ? false : true : false

type IsWideString<N> = N extends string ? string extends N ? true : N extends `${infer N0}${infer N1}` ? (
	N0 extends `${infer H extends WideNum}` ? IsWideWideNum<H> extends true ? true : IsWideString<N1> :
	string extends N0 ? true : IsWideString<N1>
) : false : false
type IsLtdString<N> = N extends string ? Not<IsWideString<N>> : false

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
type IsTypeNameJS<N> = IsLtdString<N> extends true ? N extends keyof TypeMapJS ? true : false : boolean
declare function isTypeNameJS<N, T extends string>(n: N | T): IsTypeNameJS<N>
declare const TYPE_MAP: TypeMapJS
declare function str2type<N extends TypeNameJS>(str: N): TypeMapJS[N]
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

interface TypeMap extends TypeMapJS {
	never: never,
	void: void,
}
type TypeName = keyof TypeMap
type IsTypeName<N> = IsLtdString<N> extends true ? N extends keyof TypeMap ? true : false : boolean
declare function isTypeName<N, T extends string>(n: N | T): IsTypeName<N>
type TypeOf<N> =
	N extends never ? 'never' :
	N extends undefined ? 'undefined' :
	N extends void ? 'void' :
	N extends null ? 'null' :
	TypeOfJS<N>
type NameOfType<N> = TypeOf<N>

type ArrayAccur = [any, ...any[]] | any[]

type IsWideArray<N> = N extends (infer T)[] ? T[] extends N ? true : false : false
type IsLongArray<N> = N extends any[] ? IsWideArray<N> extends true ? true : N extends [any, ...infer K] ? IsLongArray<K> : N extends [] ? false : true : false

type Tostrable = string | boolean | WideNum | null | undefined
type TostrableType = TypeOf<Tostrable>
type IsWideTostrable<N> = TypeOf<N> extends TostrableType ? (
	IsWideBoolean<N> extends true ? true :
	IsWideWideNum<N> extends true ? true :
	IsWideString<N>
) : false
type IsLtdTostrable<N> = TypeOf<N> extends TostrableType ? Not<IsWideTostrable<N>> : false

type NumOfStr<N extends string, T extends Tostrable = WideNum> = N extends `${infer K extends T}` ? K : T
