import type {
	IsWideString,
	ArrayLtdSplited,
	ALRslt,
	IfredArr,
	Repeated,
} from '../..'
import type {
	Tostrable,
	LvStr,
	LvGot,
	ISACut,
	ISAFmw,
	Zo,
	Deced,
	En,
	JP,
	Ad,
	Cmp,
	LvNum,
	Subed,
} from '../tool'

export namespace Leading0less {
	export type Ex<
		S extends string,
		L extends string = LvStr<S>>
		= (S extends `${Repeated<0, LvGot<L>>}${infer S}`
			? Ex<S, L>
			: L extends Zo ? S : Ex<S, Deced<L>>
		)
}

export namespace StringReved {
	export type Ex<
		S extends string,
		L extends string = LvStr<S>,
		R extends string = ''>
		= (ISACut<0, S, LvGot<L>> extends ISAFmw<0, infer A, infer S>
			? Ex<S, L, Ad<L extends '0' ? A : Ex<A, Deced<L>>, R>>
			: L extends Zo ? R : Ex<S, Deced<L>, R>
		)
}

export namespace Replaced {
	type Pu<N extends Fm, A extends string, T extends string> = Fm<`${N['a']}${A}${T}`, N['b']>
	type Fm<A extends string = string, B extends string = string> = { a: A, b: B }
	type Cu<
		S extends string,
		F extends string,
		T extends string,
		W extends string,
		L extends string = LvNum<W>,
		R extends Fm = Fm<'', ''>>
		= (Cmp<W, Cmp.Notless, LvGot<L>> extends true
			? (S extends `${infer A}${F}${infer B}`
				? (L extends Zo
					? Fm<A, B>
					: Cu<S, F, T, LvGot<L>, Deced<L>>
				)
				: {}
			) extends Fm<infer A, infer S> ? Cu<S, F, T, Subed<W, LvGot<L>>, L, Pu<R, A, T>> : {}
			: (L extends Zo
				? Fm<R['a'], S>
				: Cu<S, F, T, W, Deced<L>, R>
			)
		)
	type Do<
		S extends string,
		F extends string,
		T extends string,
		L extends string = LvStr<S>,
		R extends string = ''>
		= (Cu<S, F, T, LvGot<L>> extends Fm<infer A, infer S>
			? Do<S, F, T, L, `${R}${A}`>
			: L extends '0' ? `${R}${S}` : Do<S, F, T, Deced<L>, R>
		)
	// type D = Do<Repeated<0, 999>, '0', 'Z', '10'>
	// type D0<
	// 	S extends string,
	// 	F extends string,
	// 	T extends string,
	// 	L extends string = '0',
	// 	R extends string = '',
	// 	E extends string = LvStep>
	// 	= (S extends `${Repeated<`${any}${F}`, LvGot<L>>}${infer K}`
	// 		? (E extends '1'
	// 			? `${R}${Gi<S, F>}${T}`
	// 			: D0<K, F, T, L, Ad<R, L extends Zo
	// 				? `${Gi<S, F>}${T}`
	// 				: D0<S, F, T, Deced<L>>
	// 			>, Deced<E>>
	// 		)
	// 		: L extends Zo ? `${R}${S}` : D0<S, F, T, Deced<L>, R>
	// 	)
	/*
	type P1<
		S extends string,
		F extends string,
		T extends string,
		E extends string = '0',
		R extends string = ''>
		= (S extends `${Repeated<`${any}${F}`, '10'>}${infer K}`
			? P1<K, F, T, Deced<E>, Ad<R, P0<S, F, T, '10'>>>
			: P0<S, F, T, '0', R>
		)

	type Do<
		S extends string,
		F extends string,
		T extends string,
		L extends string = LvStr<S>,
		R extends string = '',
		E extends string = LvStep>
		= (S extends `${Repeated<`${any}${F}`, LvGot<L>>}${infer K}`
			? (E extends '1'
				? `${R}${I}${T}`
				: Do<K, F, T, L, Ad<R, L extends '0'
					? `${I}${T}`
					: Do<S, F, T, Deced<L>>
				>, Deced<E>>
			)
			: L extends '0' ? `${R}${S}` : Do<S, F, T, Deced<L>, R>
		)
	type A = D0<'1-11-111-1111-11111-111111', '1', '2', '1'>
	type B = P0<'111-111-111-111', '1', '2', '4'>
	*/
}

declare namespace Aligned {
	type P0<A extends string, B, R extends string> = B extends `${any}${infer B}`
		? (A extends `${any}${infer A}`
			? P0<A, B, R>
			: P0<A, B, `${R}Z`>
		)
		: { r: R, a: A }

	type P1<A extends string, B, R extends string> = B extends (
		`${any}${any}${any}${any}${any}${any}${any}${any}${any}${any
		}${infer B}`
	) ? P0<A,
		`${'0000000000'
		}`, R
	> extends { r: infer R extends string, a: infer A extends string } ? P1<A, B, R> : never : P0<A, B, R>

	type P2<A extends string, B, R extends string> = B extends (
		`${any}${any}${any}${any}${any}${any}${any}${any}${any}${any
		}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any
		}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any
		}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any
		}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any
		}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any
		}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any
		}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any
		}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any
		}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any
		}${infer B}`
	) ? P1<A,
		`${'0000000000'
		}${'0000000000'
		}${'0000000000'
		}${'0000000000'
		}${'0000000000'
		}${'0000000000'
		}${'0000000000'
		}${'0000000000'
		}${'0000000000'
		}${'0000000000'
		}`, R
	> extends { r: infer R extends string, a: infer A extends string } ? P2<A, B, R> : never : P1<A, B, R>

	type De<A extends string, B> = P2<A, B, ''> extends { r: infer R } ? R extends '' ? 0 : R : never

	type F0<B, F extends Tostrable, R extends string> = B extends (
		`${any
		}${infer B}`
	) ? F0<B, F, `${R
		}${F}`
	> : R

	type F1<B, F extends Tostrable, R extends string> = B extends (
		`${any}${any}${any}${any}${any}${any}${any}${any}${any}${any
		}${infer B}`
	) ? F1<B, F, `${R
		}${F}${F}${F}${F}${F}${F}${F}${F}${F}${F}`
	> : F0<B, F, R>

	type F2<B, F extends Tostrable, R extends string> = B extends (
		`${any}${any}${any}${any}${any}${any}${any}${any}${any}${any
		}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any
		}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any
		}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any
		}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any
		}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any
		}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any
		}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any
		}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any
		}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any
		}${infer B}`
	) ? F2<B, F, `${R
		}${F}${F}${F}${F}${F}${F}${F}${F}${F}${F
		}${F}${F}${F}${F}${F}${F}${F}${F}${F}${F
		}${F}${F}${F}${F}${F}${F}${F}${F}${F}${F
		}${F}${F}${F}${F}${F}${F}${F}${F}${F}${F
		}${F}${F}${F}${F}${F}${F}${F}${F}${F}${F
		}${F}${F}${F}${F}${F}${F}${F}${F}${F}${F
		}${F}${F}${F}${F}${F}${F}${F}${F}${F}${F
		}${F}${F}${F}${F}${F}${F}${F}${F}${F}${F
		}${F}${F}${F}${F}${F}${F}${F}${F}${F}${F
		}${F}${F}${F}${F}${F}${F}${F}${F}${F}${F}`
	> : F1<B, F, R>

	type S<T, A extends string, B, F extends Tostrable> = De<A, B> extends infer C extends string ? T extends 0 ? Ad<A, F2<C, F, ''>, string> : Ad<F2<C, F, ''>, A, string> : A
	type Z<T, A extends string, B extends string, F extends Tostrable> =
		string extends B ? T extends 0 ? `${A}${string}` : `${string}${A}` :
		string extends A ? T extends 0 ? Ad<A, F2<B, F, ''>, string> : Ad<F2<B, F, ''>, A, string> :
		S<T, A, B, F>
}

declare namespace Splited {
	type P0<S extends string, F extends string, R extends string[]> = S extends (
		`${infer I}${F}${infer S}`
	) ? P0<S, F,
		[...R, I]
	> : [...R, S]

	type P2<S extends string, F extends string, R extends string[]> = S extends (
		`${infer I00}${F}${infer I01}${F}${infer I02}${F}${infer I03}${F}${infer I04}${F}${infer I05}${F}${infer I06}${F}${infer I07}${F}${infer I08}${F}${infer I09}${F
		}${infer I10}${F}${infer I11}${F}${infer I12}${F}${infer I13}${F}${infer I14}${F}${infer I15}${F}${infer I16}${F}${infer I17}${F}${infer I18}${F}${infer I19}${F
		}${infer S}`
	) ? P2<S, F, [...R,
		I00, I01, I02, I03, I04, I05, I06, I07, I08, I09,
		I10, I11, I12, I13, I14, I15, I16, I17, I18, I19,
	]> : P0<S, F, R>

	type T<S extends Tostrable, F extends Tostrable> = IsWideString<`${S}${F}`> extends true ? string[] : P2<`${S}`, `${F}`, []>
}

declare namespace Joined {
	type P0<S extends readonly any[], F extends Tostrable, R extends string> = S extends readonly [
		infer I,
		...infer S extends [any, ...any[]]
	] ? P0<S, F,
		`${R}${JP<I>}${F}`
	> : `${R}${S[0]}`

	type P2<S extends readonly any[], F extends Tostrable, R extends string> = S extends readonly [
		infer I19, infer I18, infer I17, infer I16, infer I15, infer I14, infer I13, infer I12, infer I11, infer I10,
		infer I09, infer I08, infer I07, infer I06, infer I05, infer I04, infer I03, infer I02, infer I01, infer I00,
		...infer S extends [any, ...any[]]
	] ? P2<S, F, `${R
		}${JP<I19>}${JP<I18>}${JP<I17>}${JP<I16>}${JP<I15>}${JP<I14>}${JP<I13>}${JP<I12>}${JP<I11>}${JP<I10>
		}${JP<I09>}${JP<I08>}${JP<I07>}${JP<I06>}${JP<I05>}${JP<I04>}${JP<I03>}${JP<I02>}${JP<I01>}${JP<I00>}`
	> : P0<S, F, R>
}

declare namespace Concated {
	type P<A> = A extends readonly any[] ? A : []

	type P0<A extends readonly any[], R extends any[]> = A extends [
		infer I,
		...infer A
	] ? P0<A, [...R,
		...P<I>,
	]> : R

	type P2<A extends readonly any[], R extends any[]> = A extends [
		infer I00, infer I01, infer I02, infer I03, infer I04, infer I05, infer I06, infer I07, infer I08, infer I09,
		infer I10, infer I11, infer I12, infer I13, infer I14, infer I15, infer I16, infer I17, infer I18, infer I19,
		...infer A
	] ? P2<A, [...R,
		...P<I00>, ...P<I01>, ...P<I02>, ...P<I03>, ...P<I04>, ...P<I05>, ...P<I06>, ...P<I07>, ...P<I08>, ...P<I09>,
		...P<I10>, ...P<I11>, ...P<I12>, ...P<I13>, ...P<I14>, ...P<I15>, ...P<I16>, ...P<I17>, ...P<I18>, ...P<I19>,
	]> : P0<A, R>
}

declare namespace PostVoidLess {
	type P = undefined;

	type P0<A extends readonly any[]> = A extends readonly [...infer Z, P] ? P0<Z> : A

	type P2<A extends readonly any[]> = A extends readonly [...infer Z,
		P, P, P, P, P, P, P, P, P, P,
		P, P, P, P, P, P, P, P, P, P,
	] ? P2<Z> : P0<A>

	type T<A extends readonly any[]> = ArrayLtdSplited<A> extends ALRslt<infer A0, infer A1, infer A2>
		? P2<A2> extends infer K extends any[] ? (K extends []
			? (A1 extends []
				? P2<A0>
				: (IfredArr<A1> extends undefined
					? P2<A0>
					: [...A0, ...A1]
				)
			)
			: [...A0, ...A1, ...K]
		) : [] : []
}

declare namespace LtdArrayReved {
	type P0<N, B extends any[]> = N extends readonly [
		infer I,
		...infer N
	] ? P0<N, [
		I,
		...B
	]> : B

	type P2<N, B extends any[]> = N extends readonly [
		infer I00, infer I01, infer I02, infer I03, infer I04, infer I05, infer I06, infer I07, infer I08, infer I09,
		infer I10, infer I11, infer I12, infer I13, infer I14, infer I15, infer I16, infer I17, infer I18, infer I19,
		...infer N
	] ? P2<N, [
		I19, I18, I17, I16, I15, I14, I13, I12, I11, I10,
		I09, I08, I07, I06, I05, I04, I03, I02, I01, I00,
		...B,
	]> : P0<N, B>
}