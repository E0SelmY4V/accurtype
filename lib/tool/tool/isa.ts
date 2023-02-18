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
} from '.'

type Any<T extends 0 | 1> = [string, AnyArr][T]
export type ISAFmw<T extends 0 | 1, A extends Any<T> = Any<T>, B extends Any<T> = Any<T>> = { a: A, b: B }
type Ini<T extends 0 | 1, Z extends 0 | 1 = 1> = Z extends 0 ? ['', []][T] : ISAFmw<T, Ini<T, 0>, Ini<T, 0>>
type Fst<T extends 0 | 1, K extends 0 | 1, N extends Any<T>>
	= (T extends 0
		? N extends `${infer N}${infer K}` ? ISAFmw<0, N, K> : ISAFmw<0, '', ''>
		: N extends (K extends 0
			? readonly [infer N, ...infer S]
			: readonly [...infer S, infer N]
		) ? ISAFmw<1, [N], S> : ISAFmw<1, [], []>
	)
type Add<T extends 0 | 1, K extends 0 | 1, N extends ISAFmw<T>, A extends Any<T> = Ini<T, 0>>
	= (T extends 0
		? ISAFmw<0, `${Ys<string, N['a']>}${Ys<string, A>}`, Ys<string, N['b']>>
		: ISAFmw<1, [...Ys<AnyArr, [N['a'], A][K]>, ...Ys<AnyArr, [A, N['a']][K]>], Ys<AnyArr, N['b']>>
	) extends ISAFmw<T, infer A, infer B> ? ISAFmw<T, A, B> : Ini<T>
export type ISACut<
	T extends 0 | 1,
	S extends Any<T>,
	W extends string,
	K extends 0 | 1 = 0,
	L extends string = T extends 0 ? LvNum<W> : LvArr,
	R extends ISAFmw<T> = Ini<T>>
	= (Cmp<W, Cmp.Notless, LvGot<L>> extends true
		? (S extends `${any}${string}` | [readonly [any, ...any[]], readonly [...any[], any]][K]
			? (L extends Zo
				? Fst<T, K, S>
				: ISACut<T, S, LvGot<L>, K, Deced<L>>
			)
			: {}
		) extends ISAFmw<T, infer A, infer S> ? ISACut<T, S, Subed<W, LvGot<L>>, K, L, Add<T, K, R, A>> : {}
		: (L extends Zo
			? ISAFmw<T, Ys<Any<T>, R['a'], Ini<T, 0>>, S>
			: ISACut<T, S, W, K, Deced<L>, R>
		)
	)
