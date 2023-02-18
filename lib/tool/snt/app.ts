import type {
	IsWideString,
	MayNum,
	NumOfStr,
	EqualTo,
	Tostrable,
	ArrayLtdSplited,
	ALRslt,
	IfredArr,
} from '../..'
import type {
	LvArr,
	LvGot,
	Cmp,
	Deced,
	Subed,
	Added,
	Ad,
	Zo,
	LvNum,
	LvStr,
	ISACut,
	ISAFmw,
	AnyArr,
} from '..'

export namespace Repeated {
	type Do<
		F extends Tostrable,
		A extends string,
		L extends string = LvNum<A>,
		R extends string = ''>
		= (Cmp<A, Cmp.Notless, LvGot<L>> extends true
			? Do<F, Subed<A, LvGot<L>>, L, Ad<R, L extends Zo
				? F
				: Do<F, LvGot<L>, Deced<L>>
			>>
			: L extends Zo ? R : Do<F, A, Deced<L>, R>
		)
	export type Ex<F extends Tostrable, B extends MayNum> = IsWideString<`${B}`> extends true ? string : Do<F, `${B}`>
}

export namespace LenOfStr {
	type Do<
		S extends string,
		L extends string = LvStr<S>,
		R extends string = Zo>
		= (ISACut<0, S, LvGot<L>> extends ISAFmw<0, any, infer S>
			? Do<S, L, Added<R, LvGot<L>>>
			: L extends Zo ? R : Do<S, Deced<L>, R>
		)
	export type Ex<N extends string> = IsWideString<N> extends true ? number : NumOfStr<Do<N>, number>
}

export namespace FilledWith {
	type Do<
		N,
		C extends string,
		R extends any[] = [],
		L extends string = LvArr>
		= (Cmp<C, Cmp.Notless, LvGot<L>> extends true
			? Do<N, Subed<C, LvGot<L>>, [
				...(L extends Zo ? [N] : Do<N, LvGot<L>, [], Deced<L>>),
				...R,
			], L>
			: L extends Zo ? R : Do<N, C, R, Deced<L>>
		)
	export type Ex<N, L extends MayNum> = IsWideString<`${L}`> extends true ? N[] : Do<N, `${L}`>
}

export namespace IndexOf {
	type Eq<
		W,
		S extends AnyArr,
		L extends string = LvArr,
		R extends string = '0'>
		= (ISACut<1, S, LvGot<L>> extends ISAFmw<1, infer A, infer S>
			? (L extends Zo
				? EqualTo<W, A[0]>
				: Eq<W, A, Deced<L>, R>
			) extends true ? NumOfStr<R, number> : Eq<W, S, L, Added<R, LvGot<L>>>
			: L extends Zo ? -1 : Eq<W, S, Deced<L>, R>
		)
	export type Ex<W, A extends AnyArr>
		= ArrayLtdSplited<A> extends ALRslt<infer X, infer Y, infer Z> ? Eq<W, X> extends infer I ? (-1 extends I
			? (EqualTo<W, IfredArr<Y>> extends true
				? number
				: EqualTo<-1, Eq<W, Z>> extends true
				? I
				: number
			)
			: I
		) : number : number
}

export namespace SplitedAt {
	type Do<I extends string, A extends AnyArr> = ISACut<1, A, I> extends ISAFmw<1, infer A, infer B>
		? [A, ...(ISACut<1, B, '1'> extends ISAFmw<1, infer A, infer B>
			? [...A, B]
			: [never, []]
		)]
		: [[...A, ...FilledWith.Ex<never, Subed<I, `${A['length']}`>>], never, []]
	export type Ex<I extends MayNum, A extends AnyArr> = ArrayLtdSplited<A> extends ALRslt<infer A, any[], any[]> ? Do<`${I}`, A> : [[], never, []]
}

// export namespace MaxIn {
// 	/*
// 	type Do<
// 		S extends AnyArr<MayNum>,
// 		L extends string = LvArr,
// 		R extends false | string = false>
// 		= (ISACut<1, S, LvGot<L>> extends ISAFmw<1, infer A, infer S>
// 			?
// 			: L extends Zo ? MayNum : Eq<W, S, Deced<L>, R>
// 		)
// 	*/
// 	// type A = Cmp<`${number}`, Cmp.Greater, '3'>
// }
