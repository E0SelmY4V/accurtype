import type {
	WideNum,
	IsWideWideNum,
} from '../..'
import type {
	LvGot,
	Zo,
	LvStr,
	Deced,
	ISACut,
	ISAFmw,
	LvArr,
	AnyArr,
} from '..'

export namespace IsWideString {
	type Te<N> =
		`${any}` extends N ? true :
		string extends N ? true :
		N extends `${infer N extends WideNum}` ? IsWideWideNum<N> :
		false
	type Do<
		S extends string,
		L extends string = LvStr<S>>
		= (ISACut<0, S, LvGot<L>> extends ISAFmw<0, infer A, infer S>
			? (L extends Zo
				? Te<A>
				: Do<A, Deced<L>>
			) extends true ? true : Do<S, L>
			: L extends Zo ? false : Do<S, Deced<L>>
		)
	export type Main<S> = S extends string ? string extends S ? true : Do<S> extends infer N extends boolean ? N : boolean : false
}

export namespace ArrayLtdSplited {
	type Ob<R extends AnyArr = AnyArr, L extends AnyArr = AnyArr> = [R, L]
	type Mo = [[], [], []]
	type Za<
		S extends AnyArr,
		K extends 0 | 1,
		L extends string = LvArr,
		R extends Ob = Ob<[], []>>
		= (ISACut<1, S, LvGot<L>, K> extends ISAFmw<1, infer A, infer S>
			? Za<S, K, L, Ob<[[...R[0], ...A], [...A, ...R[0]]][K]>>
			: L extends Zo ? Ob<R[0], S> : Za<S, K, Deced<L>, R>
		)
	type Do<S extends AnyArr> = Za<S, 1> extends Ob<infer R0, infer L> ? [...Za<L, 0>, R0] : Mo
	export type Main<S> = S extends AnyArr ? Do<S> extends infer N extends [AnyArr, AnyArr, AnyArr] ? N : Mo : Mo
}
