import {
	NumOfStr,
	SntXcrUns,
	SntXcrNum,
	Tostrable,
	ArrayAccur,
	ArrayLtdSplited,
} from '../..'

type LenOfStr<N extends string, L extends number = 0> = N extends '' ? L : N extends `${any}${infer K}` ? LenOfStr<K, NumOfStr<SntXcrUns<0, `${L}`>, number>> : N extends string ? number : L
declare function strlen<N extends string>(str: N): LenOfStr<N>

type LenOfArr<N extends any[], L extends number = 0> = N extends [] ? L : N extends [any, ...infer S] ? LenOfArr<S, NumOfStr<SntXcrUns<0, `${L}`>, number>> : N extends any[] ? number : L
declare function arrlen<N extends ArrayAccur>(arr: N): LenOfArr<N>

type LenOf<N> = N extends string ? LenOfStr<N> : N extends any[] ? LenOfArr<N> : -1
declare function len<N, S extends string>(n: N | S): LenOf<N>

type Repeated<F extends Tostrable, B extends number | string> = `${B}` extends '0' ? '' : `${F}${Repeated<F, SntXcrUns<9, `${B}`>>}`
declare function repeat<F extends Tostrable, B extends number | string>(str: F, num: B): Repeated<F, B>

type Leading0Filled<N extends Tostrable, B extends number | string> = `${Repeated<0, B>}${N}`
declare function fillLeading0<N extends Tostrable, B extends number | string>(num: N, n0: B): Leading0Filled<N, B>

type LtdIndexOf<W, A extends any[], C extends number = 0, E = -1> = A extends [infer A0, ...infer A1 extends any[]] ? A0 extends W ? W extends A0 ? C : C | LtdIndexOf<W, A1, SntXcrNum<0, C, number>, Exclude<W, A0> extends never ? never : E> : (W extends A0 ? C : never) | LtdIndexOf<W, A1, SntXcrNum<0, C, number>, E> : E
type IndexOf<W, A extends any[]> = ArrayLtdSplited<A> extends [infer K extends any[], ...(infer S)[][]] ? LtdIndexOf<W, K> extends infer I ? -1 extends I ? W extends S ? number : I : I : number : number
declare function indexOf<W, A extends any[]>(search: W, array: A): LtdIndexOf<W, A>
