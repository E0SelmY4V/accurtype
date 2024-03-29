import {
	ArrayLtdSplited,
	ALRslt,
	SntXcrNum,
	SettedAt,
	FilledWith,
	SntAosNum,
	LenOfArr,
	LtdMaxIn,
	TypeAnd,
	IsNotless,
	SplitedAt,
	UpNum,
} from '..'

type RInfoObj = { r: number, c: number, t: any, a: 0 | 1, m: number, l: any[] }
type RInfo = { l: any[], m: number }
type RInfoO = { l: [], m: 0 }
type RInfoC<N, I extends RInfo> = { [K in keyof RInfo]: K extends keyof N ? N[K] : I[K] }
type ROriS<T extends 0 | 1 = 1> = { R: any, I: any } & (T extends 0 ? { O?: any } : { O: any })
type ROriC<N, I extends ROriS<any>> = { [K in keyof ROriS]: K extends keyof N ? N[K] : I[K] }
type LtdTrsedRow<T extends readonly any[], R extends readonly any[] = [], I extends RInfo = RInfoO, O extends number = 0, C extends number = 0> = C extends I['m'] ? R : LtdTrsedRow<T, SettedAt<RGetted<I, O, C, [...(R[C] extends readonly any[] ? R[C] : FilledWith<undefined, O>), T[C]]>, C, R>, I, O, SntXcrNum<0, C, number>>
type SuperedFrom<A extends readonly any[], N extends number, L extends number> = A[N] | (N extends 0 ? never : SuperedFrom<A, SntXcrNum<9, IsNotless<N, L> extends true ? L : N, number>, L>)
type RGetted<I extends RInfo, O extends number, C extends number, R extends readonly any[] = FilledWith<undefined, O>> = I['l'] extends readonly [...infer D, { r: infer E extends number, c: infer K extends number, t: infer T, a: infer Q, m: infer M extends number, l: infer B extends readonly any[] }] ? RGetted<RInfoC<{ l: D }, I>, O, C,
	[...R, ...FilledWith<undefined, SntAosNum<9, K, O, number>>] extends infer A extends readonly any[] ? IsNotless<C, E> extends true ?
	T | (M extends 0 ? undefined : Exclude<SuperedFrom<B, SntAosNum<9, C, E, number>, M>, B[0]> | B[0]) extends infer T ? Q extends 0 ? SettedAt<T, K, A> : SplitedAt<K, A> extends readonly [infer AB extends readonly any[], any, (infer Y extends any)[]] ? [...AB, ...T[]] : A : A : A : []> : R
type TrsedRow<T extends readonly any[], R extends readonly (readonly any[])[] = [], I extends RInfo = RInfoO, O extends number = 0, J extends 0 | 1 = 0> = ArrayLtdSplited<T> extends ALRslt<infer T0, infer T1, infer T2> ?
	RInfoC<TypeAnd<T1 | T2 extends readonly [] ? true : false> extends true ? { m: UpNum<LtdMaxIn<[LenOfArr<R>, I['m'], LenOfArr<T0>]>, 10, 5> } : { m: UpNum<LtdMaxIn<[LenOfArr<R>, I['m'], LenOfArr<[...T0, ...T2]>]>, 10, 5>, l: [{ r: LenOfArr<T0>, c: O, t: T1 extends readonly (infer S)[] ? S : any, a: J, m: LenOfArr<T2>, l: T2 }, ...I['l']] }, I> extends
	infer I extends RInfo ? { R: LtdTrsedRow<T0, R, I, O>, I: I } : { R: any, I: any } : { R: R, I: I }
type LtdTrsed<T extends readonly (readonly any[])[], R extends readonly (readonly any[])[] = [], I extends RInfo = RInfoO, O extends number = 0> = T extends readonly [infer T0 extends readonly any[], ...infer TL extends readonly (readonly any[])[]]
	? TrsedRow<T0, R, I, O> extends { R: infer R extends readonly (readonly any[])[], I: infer I extends RInfo } ? LtdTrsed<TL, R, I, SntXcrNum<0, O, number>> : { R: R, I: I, O: O } : { R: R, I: I, O: O }
type MultiedTail<T, B extends readonly any[], C extends number = 0, M extends number = LenOfArr<B>> = M extends C ? B extends readonly (infer X)[] ? (T | X | undefined)[] : T[] : [T | (M extends 0 ? undefined : Exclude<SuperedFrom<B, C, M>, B[0]> | B[0]), ...MultiedTail<T, B, SntXcrNum<0, C, number>>]
type LastMultied<S extends number, R extends readonly any[]> = R extends readonly [infer C extends readonly any[], ...infer R extends readonly any[]] ? SplitedAt<S, C> extends readonly [infer CB extends readonly any[], infer D, infer CL extends readonly any[]] ? [[...CB, ...MultiedTail<D, CL>], ...LastMultied<S, R>] : [] : []
type Supered<N extends ROriS<0>, K1, O extends number, R extends readonly (readonly any[])[] = N['R'], I extends RInfo = N['I']> = K1 extends readonly [infer K extends readonly any[], ...infer K1] ? Supered<TrsedRow<K, R, I, O>, K1, SntXcrNum<0, O, number>> : { R: R, I: I, O: O };
type Salt<R extends readonly any[], I extends RInfo, O extends number> = RGetted<I, O, LenOfArr<R>>
type PostHdled<K0 extends readonly any[], K1, N extends ROriS, R extends readonly (readonly any[])[] = N['R'], I extends RInfo = N['I'], O extends number = N['O']> = K0 extends readonly (infer K0 extends readonly any[])[]
	? Supered<TrsedRow<K0, R, I, O>, K1, SntXcrNum<0, O, number>> extends { R: infer R extends any[], I: infer I extends RInfo, O: infer S extends number } ? LastMultied<O, [...R, Salt<R, I, S>]> extends readonly [...infer X, infer D] ? [...X, ...D[]] : R : R : R;
export type Transposed<T extends readonly (readonly any[])[]> = ArrayLtdSplited<T> extends ALRslt<infer K2, infer K0, infer K1> ? TypeAnd<K0 | K1 extends readonly [] ? true : false> extends true
	? LtdTrsed<T> extends { R: infer R extends readonly any[], I: infer I extends RInfo, O: infer O extends number } ? [...R, ...Salt<R, I, O>[]] : [] : PostHdled<K0, K1, LtdTrsed<K2>> : []
