/// <reference path="../../option.ts" />
import type {
	Added,
	Subed,
	Cmp,
	AnyArr,
	Deced,
	Inced,
	ISACut,
	ISAFmw,
} from '.'

export type Zo = '0'
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
type Gened<
	A extends string,
	R0 extends string = '1',
	R1 extends string = '',>
	= (Cmp<A, Cmp.Notless, '1'> extends true
		? Gened<Subed<A, '1'>, Times<R0>, `${R1}${PSplited['h']}`>
		: `${R0}${R1}`
	)
type ListGened<
	A extends string = LvMax,
	R extends AnyArr<string> = []>
	= (Cmp<A, Cmp.Notless, Zo> extends true
		? ListGened<Deced<A>, [Gened<A>, ...R]>
		: R
	)
type List = ListGened
type ListLast = List extends [...any[], infer N] ? N : '1'
type ListObj = List & { [x: string]: ListLast }
export type LvGot<L extends string> = ListObj[L]
export type LvNum<
	S extends string,
	R extends string = Zo>
	= (Cmp<S, Cmp.Greater, LvGot<R>> extends true
		? R extends LvMax ? R : LvNum<S, Inced<R>>
		: R extends Zo ? R : Deced<R>
	)
export type LvArr = LvNum<'1000'>
export type LvStr<
	S extends string,
	R extends string = Zo>
	= (ISACut<0, S, Inced<LvGot<R>>> extends ISAFmw<0>
		? R extends LvMax ? R : LvStr<S, Inced<R>>
		: R extends Zo ? R : Deced<R>
	)
