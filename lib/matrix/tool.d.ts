import {
	ArrayLtdSplited,
	SntXcrNum,
	SettedAt,
	FilledWith,
	SntAosNum,
	LenOfArr,
	LtdMaxIn,
	TypeAnd,
	IsNotless,
	SplitedAt,
	IsLongArray,
	UpNum,
} from '..'

// trsed
type RInfoObj = { r: number, c: number, t: any, a: 0 | 1, m: number, l: any[] }
type RInfo = { l: any[], m: number }
type RInfoO = { l: [], m: 0 }
type RInfoC<N, I extends RInfo> = { [K in keyof RInfo]: K extends keyof N ? N[K] : I[K] }
type ROriS<T extends 0 | 1 = 1> = { R: any, I: any } & (T extends 0 ? { O?: any } : { O: any })
type ROriC<N, I extends ROriS<any>> = { [K in keyof ROriS]: K extends keyof N ? N[K] : I[K] }
type LtdTrsedRow<T extends any[], R extends any[] = [], I extends RInfo = RInfoO, O extends number = 0, C extends number = 0> = C extends I['m'] ? R : LtdTrsedRow<T, SettedAt<RGetted<I, O, C, [...(R[C] extends any[] ? R[C] : FilledWith<undefined, O>), T[C]]>, C, R>, I, O, SntXcrNum<0, C, number>>
type SuperedFrom<A extends any[], N extends number, L extends number> = A[N] | (N extends 0 ? never : SuperedFrom<A, SntXcrNum<9, IsNotless<N, L> extends true ? L : N, number>, L>)
type RGetted<I extends RInfo, O extends number, C extends number, R extends any[] = FilledWith<undefined, O>> = I['l'] extends [...infer D, { r: infer E extends number, c: infer K extends number, t: infer T, a: infer Q, m: infer M extends number, l: infer B extends any[] }] ? RGetted<RInfoC<{ l: D }, I>, O, C,
	[...R, ...FilledWith<undefined, SntAosNum<9, K, O, number>>] extends infer A extends any[] ? IsNotless<C, E> extends true ?
	T | (M extends 0 ? undefined : Exclude<SuperedFrom<B, SntAosNum<9, C, E, number>, M>, B[0]> | B[0]) extends infer T ? Q extends 0 ? SettedAt<T, K, A> : SplitedAt<K, A> extends [infer AB extends any[], any, (infer Y extends any)[]] ? [...AB, ...T[]] : A : A : A : []> : R
type TrsedRow<T extends any[], R extends any[][] = [], I extends RInfo = RInfoO, O extends number = 0, J extends 0 | 1 = 0> = ArrayLtdSplited<T> extends [infer T0 extends any[], infer T1 extends any[], infer T2 extends any[]] ?
	RInfoC<TypeAnd<T1 | T2 extends [] ? true : false> extends true ? { m: UpNum<LtdMaxIn<[LenOfArr<R>, I['m'], LenOfArr<T0>]>, 10, 5> } : { m: UpNum<LtdMaxIn<[LenOfArr<R>, I['m'], LenOfArr<[...T0, ...T2]>]>, 10, 5>, l: [{ r: LenOfArr<T0>, c: O, t: T1 extends (infer S)[] ? S : any, a: J, m: LenOfArr<T2>, l: T2 }, ...I['l']] }, I> extends
	infer I extends RInfo ? { R: LtdTrsedRow<T0, R, I, O>, I: I } : { R: any, I: any } : { R: R, I: I }
type LtdTrsed<T extends any[][], R extends any[][] = [], I extends RInfo = RInfoO, O extends number = 0> = T extends [infer T0 extends any[], ...infer TL extends any[][]]
	? TrsedRow<T0, R, I, O> extends { R: infer R extends any[][], I: infer I extends RInfo } ? LtdTrsed<TL, R, I, SntXcrNum<0, O, number>> : { R: R, I: I, O: O } : { R: R, I: I, O: O }
type MultiedTail<T, B extends any[], C extends number = 0, M extends number = LenOfArr<B>> = M extends C ? B extends (infer X)[] ? (T | X | undefined)[] : T[] : [T | (M extends 0 ? undefined : Exclude<SuperedFrom<B, C, M>, B[0]> | B[0]), ...MultiedTail<T, B, SntXcrNum<0, C, number>>]
type LastMultied<S extends number, R extends any[]> = R extends [infer C extends any[], ...infer R extends any[]] ? SplitedAt<S, C> extends [infer CB extends any[], infer D, infer CL extends any[]] ? [[...CB, ...MultiedTail<D, CL>], ...LastMultied<S, R>] : [] : []
type Supered<N extends ROriS<0>, K1, O extends number, R extends any[][] = N['R'], I extends RInfo = N['I']> = K1 extends [infer K extends any[], ...infer K1] ? Supered<TrsedRow<K, R, I, O>, K1, SntXcrNum<0, O, number>> : { R: R, I: I, O: O };
type Salt<R extends any[], I extends RInfo, O extends number> = RGetted<I, O, LenOfArr<R>>
type PostHdled<K0 extends any[], K1, N extends ROriS, R extends any[][] = N['R'], I extends RInfo = N['I'], O extends number = N['O']> = K0 extends (infer K0 extends any[])[]
	? Supered<TrsedRow<K0, R, I, O>, K1, SntXcrNum<0, O, number>> extends { R: infer R extends any[], I: infer I extends RInfo, O: infer S extends number } ? LastMultied<O, [...R, Salt<R, I, S>]> extends [...infer X, infer D] ? [...X, ...D[]] : R : R : R;
type Transposed<T extends any[][]> = ArrayLtdSplited<T> extends [any, infer K0 extends any[], infer K1 extends any[]] ? TypeAnd<K0 | K1 extends [] ? true : false> extends true ? LtdTrsed<T>['R'] : PostHdled<K0, K1, LtdTrsed<T>> : []
