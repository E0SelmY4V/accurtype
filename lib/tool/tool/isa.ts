/// <reference path="../../option.ts" />
import type {
	AnyArr,
	Ys,
	LvNum,
	LvArr,
	LvGot,
	Cmp,
	Zo,
	Deced,
	Subed,
	Ex,
} from '.'

export {
	Fmw as ISAFmw,
	Ext as ISAExt,
	Cut as ISACut,
}

type Any<T extends 0 | 1> = [string, AnyArr][T]
type Fmw<T extends 0 | 1, A extends Any<T> = Any<T>, B extends Any<T> = Any<T>> = { a: A, b: B }
type Ini<T extends 0 | 1, Z extends 0 | 1 = 1> = Z extends 0 ? ['', []][T] : Fmw<T, Ini<T, 0>, Ini<T, 0>>
type Fst<T extends 0 | 1, K extends 0 | 1, N extends Any<T>>
	= (T extends 0
		? N extends `${infer N}${infer K}` ? Fmw<0, N, K> : {}
		: N extends (K extends 0
			? readonly [infer N, ...infer S]
			: readonly [...infer S, infer N]
		) ? Fmw<1, [N], S> : {}
	)
type Plu<T extends 0 | 1, K extends 0 | 1, A, B>
	= (T extends 0
		? `${Ys<string, A>}${Ys<string, B>}`
		: [...Ys<AnyArr, [A, B][K]>, ...Ys<AnyArr, [B, A][K]>]
	) extends infer A extends Any<T> ? A : Any<T>
/*
type Add<T extends 0 | 1, K extends 0 | 1, N extends Fmw<T>, A extends Any<T>, B extends Any<T>> = Fmw<T, Plu<T, K, N['a'], A>, B>
type Cut<
	T extends 0 | 1,
	S extends Fmw<T>,
	W extends string,
	K extends 0 | 1 = 0,
	L extends string = T extends 0 ? LvNum<W> : LvArr>
	= (Cmp<W, Cmp.Notless, LvGot<L>> extends true
		? (S['b'] extends [`${any}${string}`, [readonly [any, ...any[]], readonly [...any[], any]][K]][T]
			? (L extends Zo
				? Fst<T, K, S['b']>
				: Cut<T, Fmw<T, Ini<T, 0>, S['b']>, LvGot<L>, K, Deced<L>>
			)
			: {}
		) extends Fmw<T, infer A, infer B> ? Cut<T, Add<T, K, S, A, B>, Subed<W, LvGot<L>>, K, L> : {}
		: (L extends Zo
			? S
			: Cut<T, S, W, K, Deced<L>>
		)
	)
export type ISACut<T extends 0 | 1, S extends Any<T>, W extends string, K extends 0 | 1 = 0> = Cut<T, Fmw<T, Ini<T, 0>, S>, W, K>
// */
// /*
type Jis<L extends string, T extends 0 | 1, K extends 0 | 1, S extends Any<T>>
	= (L extends Zo
		? Fst<T, K, S>
		: Cut<T, S, LvGot<L>, K, Deced<L>>
	)
/**@todo 最大递归次数遇到 {@link https://www.cnblogs.com/QiFande/p/ts-super-recursion.html#%E8%A7%A3%E5%86%B3%E8%AF%A1%E5%BC%82%E7%9A%84%E6%83%85%E5%86%B5 诡异的问题} ，待解决 */
type Cut<
	T extends 0 | 1,
	S extends Any<T>,
	W extends string,
	K extends 0 | 1 = 0,
	L extends string = T extends 0 ? LvNum<W> : LvArr,
	R extends Any<T> = Ini<T, 0>>
	= (Cmp<W, Cmp.Notless, LvGot<L>> extends true
		? (Jis<L, T, K, S> extends Fmw<T, infer A, infer B>
			? Cut<T, B, Subed<W, LvGot<L>>, K, L, Plu<T, K, R, A>>
			: {}
		)
		: (L extends Zo
			? Fmw<T, R, S>
			: Cut<T, S, W, K, Deced<L>, R>
		)
	)
// */
/*
type Le<L extends string, S extends string>
	= (L extends '0'
		? S extends `${infer A}${infer B}` ? Fmw<0, A, B> : {}
		: Te<S, LvGot<L>, Deced<L>>
	)
type Te<
	S extends string,
	W extends string,
	L extends string = LvNum<W>,
	R extends string = ''>
	= (Cmp<W, Cmp.Notless, LvGot<L>> extends true
		? (Le<L, S> extends Fmw<0, infer A, infer B>
			? Te<B, Subed<W, LvGot<L>>, L, Plu<0, 0, R, A>>
			: {}
		)
		: L extends Zo ? Fmw<0, R, S> : Te<S, W, Deced<L>, R>
	)
// */

// type Bu = Ts<C, '100000'>
// type F = Tn<Fmw<0, '', 'abc'>, '3'>
// type F = Te<'abcdefghijklmnopqrstuvwxyz', '25'>
// import { Repeated } from '../snt'
// type C = Repeated.Ex<0, 150000>
// type B = Ext<0, C, '100000'>
// type B = Cut<0, C, '100000'>
// type E = LvNum<'100000'>
// type B = Tn<Fmw<0, '', C>, '100000'>
// type B = Te<C, '100000'>
// type D = Cut<0, C, '50000'>

type Sub<T extends 0 | 1, K extends 0 | 1, N extends Any<T>>
	= (T extends 0
		? N extends `${infer S}${infer N}` ? N : false
		: N extends [[any, ...infer N], [...infer N, any]][K] ? N : false
	)
type Ext<
	T extends 0 | 1,
	S extends Any<T>,
	W extends string,
	K extends 0 | 1 = 0,
	L extends string = LvNum<W>>
	= (Cmp<W, Cmp.Notless, LvGot<L>> extends true
		? (L extends Zo
			? Sub<T, K, S>
			: Ext<T, S, LvGot<L>, K, Deced<L>>
		) extends Ex<infer S, Any<T>> ? Ext<T, S, Subed<W, LvGot<L>>, K, L> : false
		: L extends Zo ? S : Ext<T, S, W, K, Deced<L>>
	)
