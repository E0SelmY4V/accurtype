import {
} from '..'

type SigNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
type WideNum = number | bigint

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
declare const TYPE_MAP: TypeMapJS
declare function str2type<N extends TypeNameJS>(str: N): TypeMapJS[N]
type TypeNameJS = keyof TypeMapJS
type IsTypeNameJS<N> = N extends keyof TypeMapJS ? true : false
declare function isTypeNameJS(n: keyof TypeMapJS): true
declare function isTypeNameJS(n: any): boolean

interface TypeMap extends TypeMapJS {
	never: never,
	void: void,
}
type TypeName = keyof TypeMap
type IsTypeName<N> = N extends keyof TypeMap ? true : false
declare function isTypeName(n: keyof TypeMap): true
declare function isTypeName(n: any): boolean

type TypeOf<N> =
	N extends bigint ? 'bigint' :
	N extends boolean ? 'boolean' :
	N extends Function ? 'function' :
	N extends never ? 'never' :
	N extends number ? 'number' :
	N extends string ? 'string' :
	N extends Symbol ? 'symbol' :
	N extends Object ? 'object' :
	N extends undefined ? 'undefined' :
	N extends void ? 'void' :
	never
type NameOfType<N> = TypeOf<N>

type ArrayAccur = [any, ...any[]] | any[]
type Tostrable = string | number | WideNum
type NumOfStr<N extends string, T extends Tostrable = WideNum> = N extends `${infer K extends T}` ? K : T
