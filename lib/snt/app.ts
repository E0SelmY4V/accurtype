import {
	NumOfStr,
	SntXcrUns,
	SntXcrNum,
	Tostrable,
	ArrayLtdSplited,
	Accur,
	IsGreater,
	SntAosNum,
	Shifted,
	UpNum,
	MayNum,
	IsWideString,
	ALRslt,
} from '..'
import {
	LenOfStr,
	Repeated,
} from './tool'

export type LenOfStr<N extends string> = IsWideString<N> extends true ? number : NumOfStr<LenOfStr.P2<N, '0'>>
export function strlen<N extends string>(str: N) {
	return str.length as LenOfStr<N>
}

export type LenOfArr<N extends readonly any[]> = N['length'] extends number ? N['length'] : number
export function arrlen<T extends Accur<T>, N extends T[]>(arr: readonly [...N]) {
	return arr.length as LenOfArr<N>
}

export type LenOf<N> = N extends string ? LenOfStr<N> : N extends readonly any[] ? LenOfArr<N> : -1
export function len<T extends Accur<T>, N extends T[], S extends string>(n: readonly [...N] | S) {
	return n.length as LenOf<N>
}

export type Repeated<F extends Tostrable, B extends number | string> = `${B}` extends '0' ? '' : `${F}${Repeated<F, SntXcrUns<9, `${B}`>>}`
export function repeat<F extends Tostrable, B extends number | string>(str: F, num: B) {
	return `${str}`.repeat(Number(num)) as Repeated<F, B>
}

export type Leading0Filled<N extends Tostrable, B extends number | string> = `${Repeated<0, B>}${N}`
export function fillLeading0<N extends Tostrable, B extends number | string>(num: N, n0: B) {
	return ('0'.repeat(Number(n0)) + num) as Leading0Filled<N, B>
}

export type LtdIndexOf<W, A extends readonly any[], C extends number = 0, E = -1> = A extends readonly [infer A0, ...infer A1 extends readonly any[]] ? A0 extends W ? W extends A0 ? C : C | LtdIndexOf<W, A1, SntXcrNum<0, C, number>, Exclude<W, A0> extends never ? never : E> : (W extends A0 ? C : never) | LtdIndexOf<W, A1, SntXcrNum<0, C, number>, E> : E
export type IndexOf<W, A extends readonly any[]> = ArrayLtdSplited<A> extends [infer K extends any[], ...(infer S)[][]] ? LtdIndexOf<W, K> extends infer I ? -1 extends I ? W extends S ? number : I : I : number : number
export function indexOf<W, A extends any[]>(search: W, array: readonly [...A]) {
	return array.indexOf(search) as LtdIndexOf<W, A>
}

export type FilledWith<N, L extends number> = IsGreater<L, 0> extends true ? [N, ...FilledWith<N, SntXcrNum<9, L, number>>] : []

export type SplitedAt<I extends number, A extends readonly any[], C extends number = 0, H extends readonly any[] = [], L extends readonly any[] = A, M extends number = LenOfArr<A>> = C extends M ? [[...A, ...FilledWith<never, SntAosNum<9, I, M, number>>], never, []] : C extends I ? [H, A[C], Shifted<L>] : SplitedAt<I, A, SntXcrNum<0, C, number>, [...H, A[C]], Shifted<L>, M>
export type SettedAt<N, I extends number, A extends readonly any[]> = SplitedAt<I, A> extends readonly [infer P extends readonly any[], any, infer L extends readonly any[]] ? [...P, N, ...L] : [N]

export type LtdMaxIn<A extends readonly MayNum[], M extends false | MayNum = false> = A extends readonly [infer K extends MayNum, ...infer E extends readonly MayNum[]] ? LtdMaxIn<E, M extends MayNum ? IsGreater<K, M> extends true ? K : M : K> : M

// type SpedUnionNumObj<K extends { F: any, U: any }, U0 extends any[] = K['U'], N extends number = K['F'], U extends number = UpNum<N>, S extends { F: any, U: any } = SpedUnionHal<N, U, number>> = {F: S['F'], U: [...U0, ...S['U']]}
// type SpedUnionHal<N, U extends S, S> = N extends U | infer F extends Exclude<N, U> ? { F: F, U: [U] } : { F: never, U: [] }
// export const a: UpNum<1|2|3>
// export const b: SpedUnionNumObj<SpedUnionNumObj<SpedUnionNumObj<{F:1 | 2 | 3,U:[]}>>>['U']
