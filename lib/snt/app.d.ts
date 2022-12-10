import {
	NumOfStr,
	SntXcrUns,
	Tostrable,
	ArrayAccur,
} from '../..'

type LenOfStr<N extends string, L extends number = 0> = N extends '' ? L : N extends `${any}${infer K}` ? LenOfStr<K, NumOfStr<SntXcrUns<0, `${L}`>, number>> : N extends string ? number : L
declare function strlen<N extends string>(str: N): LenOfStr<N>

type LenOfArr<N extends any[], L extends number = 0> = N extends [] ? L : N extends [any, ...infer S] ? LenOfArr<S, NumOfStr<SntXcrUns<0, `${L}`>, number>> : N extends any[] ? number : L
declare function arrlen<N extends ArrayAccur>(arr: N): LenOfArr<N>

type Repeated<F extends Tostrable, B extends number | string> = `${B}` extends '0' ? '' : `${F}${Repeated<F, SntXcrUns<9, `${B}`>>}`
declare function repeat<F extends Tostrable, B extends number | string>(str: F, num: B): Repeated<F, B>

type Leading0Filled<N extends Tostrable, B extends number | string> = `${Repeated<0, B>}${N}`
declare function fillLeading0<N extends Tostrable, B extends number | string>(num: N, n0: B): Leading0Filled<N, B>

// type Filled0toSame<N extends string, B extends string, I extends string = '0'> = N[NumOfStr<I, number>] extends void ? 1 : 0
