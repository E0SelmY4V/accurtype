import type {
	Tostrable,
} from '../check'
import type {
	LvMax,
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
} from '..'

export namespace Repeated {
	export type Main<
		F extends Tostrable,
		A extends string,
		L extends string = LvNum<A>,
		R extends string = '',
	> = Cmp<A, Cmp.Notless, LvGot<L>> extends true
		? Main<F, Subed<A, LvGot<L>>, L, Ad<R, L extends Zo ? F : Main<F, LvGot<L>, Deced<L>>>>
		: L extends Zo ? R : Main<F, A, Deced<L>, R>
}

export namespace LenOfStr {
	export type Main<
		S extends string,
		L extends string = LvStr<S>,
		R extends string = Zo,
	> = S extends `${Repeated.Main<`${any}`, LvGot<L>>}${infer S}`
		? Main<S, L, Added<R, LvGot<L>>>
		: L extends Zo ? R : Main<S, Deced<L>, R>
}

export namespace FilledWith {
	export type Main<
		N,
		C extends string,
		R extends any[] = [],
		L extends string = LvArr
	> = Cmp<C, Cmp.Notless, LvGot<L>> extends true
		? Main<N, Subed<C, LvGot<L>>, [...(L extends Zo ? [N] : Main<N, LvGot<L>, [], Deced<L>>), ...R], L>
		: L extends Zo ? R : Main<N, C, R, Deced<L>>
}
