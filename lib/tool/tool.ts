import type TypeOptions from '../option'
import type {
	Tostrable,
	SigNumber,
	Repeated,
} from '.'

export type JP<N> = N extends Tostrable ? `${N}` : string
export type Ad<A extends Tostrable, B extends Tostrable> = `${A}${B}`
export type AnyArr = readonly any[]
export type YsIni<N> = N extends string ? '' : N extends number ? 0 : N extends AnyArr ? [] : N extends bigint ? 0n : N
export type Ys<N, A, I = YsIni<N>> = A extends N ? A : I
type StrSubedSub<A extends string, B extends string, R extends string = ''> = B extends `${any}${infer B}` ? A extends `${any}${infer A}` ? StrSubedSub<A, B, R> : StrSubedSub<A, B, `${R}Z`> : { r: R, a: A }
export type StrSubed<A extends string, B extends string> = StrSubedSub<A, B> extends { r: infer R } ? R extends '' ? 0 : R : never
export type Filled<F extends Tostrable, B, R extends string = ''> = B extends `${any}${infer B}` ? Filled<F, B, `${R}${F}`> : R
export type PreAligned<A extends string, B extends string, F extends Tostrable> = `${Filled<F, StrSubed<A, B>>}${A}`
export type PostAligned<A extends string, B extends string, F extends Tostrable> = `${A}${Filled<F, StrSubed<A, B>>}`
export type LeadingLess<F extends Tostrable, N extends string> = N extends `${F}${infer K}` ? K extends '' ? N : LeadingLess<F, K> : N
export type StringReved<N, R extends string = ''> = N extends `${infer I}${infer S}` ? StringReved<S, `${I}${R}`> : R
export type LenCmp<A extends string, B extends string> = PreAligned<A, B, 0> extends A ? PreAligned<B, A, 0> extends B ? 0 : -1 : 1

export type SigT = SigNumber | 's'
export type SigVary<T extends 0 | 9, N extends SigT> = N extends SigNumber ? (T extends 0 ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 's'] : ['s', 0, 1, 2, 3, 4, 5, 6, 7, 8])[N] : 's'
export type Rev<T> = T extends 0 ? 9 : 0
export type Zo = '0'

namespace Xcr {
	type P0<T extends 0 | 9, N, B, E extends 0 | 9 = Rev<T>> = N extends `${E}${infer N}` ? P0<T, N, `${JP<B>}${T}`> : N extends `${infer S extends SigNumber}${infer N}` ? `${JP<B>}${SigVary<T, S>}${N}` : `${JP<B>}${JP<N>}`
	type Uns<T extends 0 | 9, N extends string> = LeadingLess<0, StringReved<P0<T, StringReved<`0${N}`>, ''>>>
	export type Main<T extends 0 | 9, N extends string> = `${T},${N}` extends '0,-1' ? '0' : `${T},${N}` extends '9,0' ? '-1' : N extends `-${infer K}` ? `-${Uns<Rev<T>, K>}` : Uns<T, N>
}
export type Xcr<T extends 0 | 9, N extends string> = Xcr.Main<T, N>
export type Inced<N extends string> = Xcr<0, N>
export type Deced<N extends string> = Xcr<9, N>

namespace Aos {
	type GotQH<Q = any, H = any> = { q: Q, h: H }
	type SigInfl<T extends 0 | 9, A, B extends SigT, E extends 1 | 0> = B extends 0 ? A extends 's' ? GotQH<1, T> : GotQH<E, A> : A extends SigNumber ? SigInfl<T, SigVary<T, A>, SigVary<9, B>, E> : SigInfl<T, T, B, 1>
	type SigTrinfl<T extends 0 | 9, A, B extends SigT, C extends 0 | 1> = SigInfl<T, A, B, 0> extends infer K extends GotQH ? SigInfl<T, K['h'], C, K['q']> : GotQH<0, 0>
	type AosOri<T extends 0 | 9, A extends string, B extends string, J extends 0 | 1, R extends string> = `${A},${B}` extends `${infer A0 extends SigNumber}${infer A},${infer B0 extends SigNumber}${infer B}` ? SigTrinfl<T, A0, B0, J> extends infer S extends GotQH ? AosOri<T, A, B, S['q'], `${R}${S['h']}`> : R : R
	type AosHal<T extends 0 | 9, A extends string, B extends string> = LeadingLess<0, StringReved<AosOri<T, `${StringReved<PreAligned<A, B, 0>>}0`, `${StringReved<PreAligned<B, A, 0>>}0`, 0, ''>>>
	type SntAosUns<T extends 0 | 9, A extends string, B extends string> = `${T},${Cmp.Main<A, B>}` extends '9,1' ? `-${AosHal<T, B, A>}` : AosHal<T, A, B>
	export type Main<T extends 0 | 9, A extends string, B extends string> = A extends `-${infer A}` ? B extends `-${infer B}` ? `${T extends 0 ? '-' : ''}${SntAosUns<T, B, A>}` : `${T extends 9 ? '-' : ''}${SntAosUns<Rev<T>, B, A>}` : B extends `-${infer B}` ? SntAosUns<Rev<T>, A, B> : SntAosUns<T, A, B>
}
export type Aos<T extends 0 | 9, A extends string, B extends string> = Aos.Main<T, A, B>
export type Added<A extends string, B extends string> = Aos<0, A, B>
export type Subed<A extends string, B extends string> = Aos<9, A, B>

export namespace Cmp {
	type Sig<A extends SigT, B extends SigT> = A extends B ? 0 : A extends 's' ? -1 : B extends 's' ? 1 : Sig<SigVary<0, A>, SigVary<0, B>>
	type P0<A extends string, B extends string> = `${A},${B}` extends `${infer A0 extends SigNumber}${infer A},${infer B0 extends SigNumber}${infer B}` ? Sig<A0, B0> extends infer K extends -1 | 1 ? K : P0<A, B> : 0
	type Uns<A extends string, B extends string> = string extends A | B ? 1 | -1 | 0 : LenCmp<A, B> extends infer K extends -1 | 1 ? K : P0<A, B>
	export type Main<A extends string, B extends string> = A extends `-${infer A}` ? B extends `-${infer B}` ? Uns<B, A> : 1 : B extends `-${any}` ? -1 : Uns<A, B>
	type N2B<N> = N extends 1 ? true : false
	export type Obj<L = 0 | 1, E = 0 | 1, G = 0 | 1> = { [-1]: N2B<L>, 0: N2B<E>, 1: N2B<G> }
	export type Less = Obj<0, 0, 1>
	export type Notgreater = Obj<0, 1, 1>
	export type Greater = Obj<1, 0, 0>
	export type Notless = Obj<1, 1, 0>
	export type Equal = Obj<0, 1, 0>
	export type Notequal = Obj<1, 0, 1>
}
export type Cmp<A extends string, W extends Cmp.Obj, B extends string> = W[Cmp.Main<`${A}`, `${B}`>]
export type Max<A extends string, B extends string> = Cmp<A, Cmp.Less, B> extends true ? B : A
export type Min<A extends string, B extends string> = Cmp<A, Cmp.Less, B> extends true ? A : B

export type LvStep = `${typeof TypeOptions.Iteration.P}`
export type LvMax = `${typeof TypeOptions.Iteration.L}`
type PMb<Q extends number, H extends '' | '0' | '00'> = `${Q}${H}`
type PBody<Q extends number = number, H extends string = string> = { h: H, q: Q }
type PSplited = LvStep extends PMb<infer Q, infer H> ? PBody<Q, H> : PBody
type Times<N extends string, C extends number = PSplited['q']> =
	C extends 2 ? Added<N, N> :
	C extends 3 ? Added<Times<N, 2>, N> :
	C extends 4 ? Added<Times<N, 2>, Times<N, 2>> :
	C extends 5 ? Added<Times<N, 3>, Times<N, 2>> :
	C extends 6 ? Subed<Times<N, 8>, Times<N, 2>> :
	C extends 7 ? Subed<Times<N, 9>, Times<N, 2>> :
	C extends 8 ? Subed<Times<N, 9>, N> :
	C extends 9 ? Subed<`${N}0`, N> :
	N
export type LvGot<
	A extends string,
	R0 extends string = '1',
	R1 extends string = ''>
	= (Cmp<A, Cmp.Notless, '1'> extends true
		? LvGot<Subed<A, '1'>, Times<R0>, `${R1}${PSplited['h']}`>
		: `${R0}${R1}`
	)
export type LvArr = Cmp<LvStep, Cmp.Notless, '20'> extends true ? '1' : '2'
export type LvNum<
	S extends string,
	R extends string = Zo>
	= (Cmp<S, Cmp.Greater, LvGot<R>> extends true
		? R extends LvMax ? R : LvNum<S, Inced<R>>
		: R extends Zo ? R : Deced<R>
	)
export type LvStr<
	S extends string,
	R extends string = Zo>
	= (ISACut<0, S, Inced<LvGot<R>>> extends ISAFmw<0>
		? R extends LvMax ? R : LvStr<S, Inced<R>>
		: R extends Zo ? R : Deced<R>
	)

type ISAAny<T extends 0 | 1> = [string, AnyArr][T]
type ISAIni<T extends 0 | 1, K extends 0 | 1 = 1> = K extends 0 ? ['', []][T] : ISAFmw<T, ISAIni<T, 0>, ISAIni<T, 0>>
export type ISAFmw<T extends 0 | 1, A extends ISAAny<T> = ISAAny<T>, B extends ISAAny<T> = ISAAny<T>> = { a: A, b: B }
type ISAFst<T extends 0 | 1, N extends ISAAny<T>>
	= (T extends 0
		? N extends `${infer N}${infer K}` ? ISAFmw<0, N, K> : ISAFmw<0, '', ''>
		: N extends readonly [infer N, ...infer K] ? ISAFmw<1, [N], K> : ISAFmw<1, [], []>
	)
type ISAAdd<T extends 0 | 1, N extends ISAFmw<T>, A extends ISAAny<T> = ISAIni<T, 0>, B extends ISAAny<T> = ISAIni<T, 0>>
	= (T extends 0
		? ISAFmw<0, `${Ys<string, N['a']>}${Ys<string, A>}`, `${Ys<string, N['b']>}${Ys<string, B>}`>
		: ISAFmw<1, [...Ys<AnyArr, N['a']>, ...Ys<AnyArr, A>], [...Ys<AnyArr, N['b']>, ...Ys<AnyArr, B>]>
	) extends ISAFmw<T, infer A, infer B> ? ISAFmw<T, A, B> : ISAIni<T>
export type ISACut<
	T extends 0 | 1,
	S extends ISAAny<T>,
	W extends string,
	L extends string = T extends 0 ? LvNum<W> : LvArr,
	R extends ISAFmw<T> = ISAIni<T>>
	= (Cmp<W, Cmp.Notless, LvGot<L>> extends true
		? (S extends '' | readonly [] ? {} : L extends Zo
			? ISAFst<T, S>
			: ISACut<T, S, LvGot<L>, Deced<L>>
		) extends ISAFmw<T, infer A, infer S> ? ISACut<T, S, Subed<W, LvGot<L>>, L, ISAAdd<T, R, A>> : {}
		: (L extends Zo
			? ISAFmw<T, Ys<ISAAny<T>, R['a'], ISAIni<T, 0>>, S>
			: ISACut<T, S, W, Deced<L>, R>
		)
	)
