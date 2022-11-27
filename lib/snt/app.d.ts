import {
	NumOfStr,
	SntXcrUns,
	Tostrable,
} from '../..'
type LenOfStr<N extends string, C extends boolean = false, L extends number = 0> = C extends false
	? string extends N ? number : LenOfStr<N, true>
	: N extends `${any}${infer K}` ? LenOfStr<K, true, NumOfStr<SntXcrUns<0, `${L}`>, number>> : L
type LenOfArr<N extends any[], C extends boolean = false, L extends number = 0> = N extends never[] ? 0 : C extends false
	? LenOfArr<N, true> extends infer K ? K extends 0 ? N extends [] ? 0 : number : K : 0
	: N extends [any, ...infer S] ? LenOfArr<S, true, NumOfStr<SntXcrUns<0, `${L}`>, number>> : L
type Leading0Filled<N extends Tostrable, B extends Tostrable> = `${B}` extends '0' ? N : `0${Leading0Filled<N, SntXcrUns<9, `${B}`>>}`
type Filled0toSame<N extends string, B extends string, I extends string = '0'> = N[NumOfStr<I, number>] extends void ? 1 : 0
