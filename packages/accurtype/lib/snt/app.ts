import type {
	Tostrable,
	Accur,
	IsGreater,
	MayNum,
} from '..'
import type {
	LenOfStr,
	Repeated,
	FilledWith,
	SplitedAt,
	IndexOf,
} from '../tool/snt'
import type {
	Ys,
	AnyArr,
} from '../tool/tool'

export type LenOfStr<N extends string> = LenOfStr.Ex<N>
export function strlen<N extends string>(str: N) {
	return str.length as LenOfStr<N>
}

export type LenOfArr<N extends AnyArr> = Ys<number, N['length'], number>
export function arrlen<T extends Accur<T>, N extends T[]>(arr: readonly [...N]) {
	return arr.length as LenOfArr<N>
}

export type LenOf<N> = N extends string ? LenOfStr<N> : N extends AnyArr ? LenOfArr<N> : -1
export function len<T extends Accur<T>, N extends T[], S extends string>(n: readonly [...N] | S) {
	return n.length as LenOf<N>
}

export type Repeated<F extends Tostrable, B extends MayNum> = Repeated.Ex<F, B>
export function repeat<F extends Tostrable, B extends MayNum>(str: F, num: B) {
	return `${str}`.repeat(Number(num)) as Repeated<F, B>
}

export type Leading0Filled<N extends Tostrable, B extends MayNum> = `${Repeated<0, B>}${N}`
export function fillLeading0<N extends Tostrable, B extends MayNum>(num: N, n0: B) {
	return ('0'.repeat(Number(n0)) + num) as Leading0Filled<N, B>
}

export type LtdIndexOf<W, A extends AnyArr> = IndexOf.Ex<W, A>
export type IndexOf<W, A extends AnyArr> = IndexOf.Ex<W, A>
export function indexOf<W, A extends any[]>(search: W, array: readonly [...A]) {
	return array.indexOf(search) as IndexOf<W, A>
}

export type FilledWith<N, L extends MayNum> = FilledWith.Ex<N, L>

export type SplitedAt<I extends MayNum, A extends AnyArr> = SplitedAt.Ex<I, A>
export type SettedAt<N, I extends number, A extends AnyArr> = SplitedAt<I, A> extends readonly [infer P extends AnyArr, any, infer L extends AnyArr] ? [...P, N, ...L] : [N]

export type LtdMaxIn<A extends readonly MayNum[], M extends false | MayNum = false> = A extends readonly [infer K extends MayNum, ...infer E extends readonly MayNum[]] ? LtdMaxIn<E, M extends MayNum ? IsGreater<K, M> extends true ? K : M : K> : M

// type SpedUnionNumObj<K extends { F: any, U: any }, U0 extends any[] = K['U'], N extends number = K['F'], U extends number = UpNum<N>, S extends { F: any, U: any } = SpedUnionHal<N, U, number>> = {F: S['F'], U: [...U0, ...S['U']]}
// type SpedUnionHal<N, U extends S, S> = N extends U | infer F extends Exclude<N, U> ? { F: F, U: [U] } : { F: never, U: [] }
// export const a: UpNum<1|2|3>
// export const b: SpedUnionNumObj<SpedUnionNumObj<SpedUnionNumObj<{F:1 | 2 | 3,U:[]}>>>['U']
