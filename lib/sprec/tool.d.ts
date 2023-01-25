import {
	Tostrable,
	IsWideString,
	ArrayLtdSplited,
	ALRslt,
	IfredArr,
} from '..'

type JP<N> = N extends Tostrable ? `${N}` : string

declare namespace Leading0less {
	type P0<N extends string> = N extends `0${infer K}` ? K extends '' ? N : P0<K> : N

	type P1<N extends string> = N extends `0000000000${infer N}` ? P1<N> : P0<N>

	type P2<N extends string> = N extends (
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
		}${infer N}`
	) ? P2<N> : P1<N>
}

declare namespace StringReved {
	type P0<N, R extends string> = N extends (
		`${infer I}${infer S}`
	) ? P0<S,
		`${I}${R}`
	> : R

	type P1<N, R extends string> = N extends (
		`${infer I0}${infer I1}${infer I2}${infer I3}${infer I4}${infer I5}${infer I6}${infer I7}${infer I8}${infer I9
		}${infer N}`
	) ? P1<N,
		`${I9}${I8}${I7}${I6}${I5}${I4}${I3}${I2}${I1}${I0
		}${R}`
	> : P0<N, R>

	type P2<N, R extends string> = N extends (
		`${infer I00}${infer I01}${infer I02}${infer I03}${infer I04}${infer I05}${infer I06}${infer I07}${infer I08}${infer I09
		}${infer I10}${infer I11}${infer I12}${infer I13}${infer I14}${infer I15}${infer I16}${infer I17}${infer I18}${infer I19
		}${infer I20}${infer I21}${infer I22}${infer I23}${infer I24}${infer I25}${infer I26}${infer I27}${infer I28}${infer I29
		}${infer I30}${infer I31}${infer I32}${infer I33}${infer I34}${infer I35}${infer I36}${infer I37}${infer I38}${infer I39
		}${infer I40}${infer I41}${infer I42}${infer I43}${infer I44}${infer I45}${infer I46}${infer I47}${infer I48}${infer I49
		}${infer I50}${infer I51}${infer I52}${infer I53}${infer I54}${infer I55}${infer I56}${infer I57}${infer I58}${infer I59
		}${infer I60}${infer I61}${infer I62}${infer I63}${infer I64}${infer I65}${infer I66}${infer I67}${infer I68}${infer I69
		}${infer I70}${infer I71}${infer I72}${infer I73}${infer I74}${infer I75}${infer I76}${infer I77}${infer I78}${infer I79
		}${infer I80}${infer I81}${infer I82}${infer I83}${infer I84}${infer I85}${infer I86}${infer I87}${infer I88}${infer I89
		}${infer I90}${infer I91}${infer I92}${infer I93}${infer I94}${infer I95}${infer I96}${infer I97}${infer I98}${infer I99
		}${infer N}`
	) ? P2<N,
		`${I99}${I98}${I97}${I96}${I95}${I94}${I93}${I92}${I91}${I90
		}${I89}${I88}${I87}${I86}${I85}${I84}${I83}${I82}${I81}${I80
		}${I79}${I78}${I77}${I76}${I75}${I74}${I73}${I72}${I71}${I70
		}${I69}${I68}${I67}${I66}${I65}${I64}${I63}${I62}${I61}${I60
		}${I59}${I58}${I57}${I56}${I55}${I54}${I53}${I52}${I51}${I50
		}${I49}${I48}${I47}${I46}${I45}${I44}${I43}${I42}${I41}${I40
		}${I39}${I38}${I37}${I36}${I35}${I34}${I33}${I32}${I31}${I30
		}${I29}${I28}${I27}${I26}${I25}${I24}${I23}${I22}${I21}${I20
		}${I19}${I18}${I17}${I16}${I15}${I14}${I13}${I12}${I11}${I10
		}${I09}${I08}${I07}${I06}${I05}${I04}${I03}${I02}${I01}${I00
		}${R}`
	> : P1<N, R>
}

declare namespace Replaced {
	type P0<S extends string, F extends Tostrable, T extends Tostrable, R extends string> = S extends (
		`${infer I}${F}${infer S}`
	) ? P0<S, F, T,
		`${R}${I}${T}`
	> : `${R}${S}`

	type P1<S extends string, F extends Tostrable, T extends Tostrable, R extends string> = S extends (
		`${infer I0}${F}${infer I1}${F}${infer I2}${F}${infer I3}${F}${infer I4}${F}${infer I5}${F}${infer I6}${F}${infer I7}${F}${infer I8}${F}${infer I9}${F
		}${infer S}`
	) ? P1<S, F, T, `${R
		}${I0}${T}${I1}${T}${I2}${T}${I3}${T}${I4}${T}${I5}${T}${I6}${T}${I7}${T}${I8}${T}${I9}${T}`
	> : P0<S, F, T, R>

	type P2<S extends string, F extends Tostrable, T extends Tostrable, R extends string> = S extends (
		`${infer I00}${F}${infer I01}${F}${infer I02}${F}${infer I03}${F}${infer I04}${F}${infer I05}${F}${infer I06}${F}${infer I07}${F}${infer I08}${F}${infer I09}${F
		}${infer I10}${F}${infer I11}${F}${infer I12}${F}${infer I13}${F}${infer I14}${F}${infer I15}${F}${infer I16}${F}${infer I17}${F}${infer I18}${F}${infer I19}${F
		}${infer I20}${F}${infer I21}${F}${infer I22}${F}${infer I23}${F}${infer I24}${F}${infer I25}${F}${infer I26}${F}${infer I27}${F}${infer I28}${F}${infer I29}${F
		}${infer I30}${F}${infer I31}${F}${infer I32}${F}${infer I33}${F}${infer I34}${F}${infer I35}${F}${infer I36}${F}${infer I37}${F}${infer I38}${F}${infer I39}${F
		}${infer I40}${F}${infer I41}${F}${infer I42}${F}${infer I43}${F}${infer I44}${F}${infer I45}${F}${infer I46}${F}${infer I47}${F}${infer I48}${F}${infer I49}${F
		}${infer I50}${F}${infer I51}${F}${infer I52}${F}${infer I53}${F}${infer I54}${F}${infer I55}${F}${infer I56}${F}${infer I57}${F}${infer I58}${F}${infer I59}${F
		}${infer I60}${F}${infer I61}${F}${infer I62}${F}${infer I63}${F}${infer I64}${F}${infer I65}${F}${infer I66}${F}${infer I67}${F}${infer I68}${F}${infer I69}${F
		}${infer I70}${F}${infer I71}${F}${infer I72}${F}${infer I73}${F}${infer I74}${F}${infer I75}${F}${infer I76}${F}${infer I77}${F}${infer I78}${F}${infer I79}${F
		}${infer I80}${F}${infer I81}${F}${infer I82}${F}${infer I83}${F}${infer I84}${F}${infer I85}${F}${infer I86}${F}${infer I87}${F}${infer I88}${F}${infer I89}${F
		}${infer I90}${F}${infer I91}${F}${infer I92}${F}${infer I93}${F}${infer I94}${F}${infer I95}${F}${infer I96}${F}${infer I97}${F}${infer I98}${F}${infer I99}${F
		}${infer S}`
	) ? P2<S, F, T, `${R
		}${I00}${T}${I01}${T}${I02}${T}${I03}${T}${I04}${T}${I05}${T}${I06}${T}${I07}${T}${I08}${T}${I09}${T
		}${I10}${T}${I11}${T}${I12}${T}${I13}${T}${I14}${T}${I15}${T}${I16}${T}${I17}${T}${I18}${T}${I19}${T
		}${I20}${T}${I21}${T}${I22}${T}${I23}${T}${I24}${T}${I25}${T}${I26}${T}${I27}${T}${I28}${T}${I29}${T
		}${I30}${T}${I31}${T}${I32}${T}${I33}${T}${I34}${T}${I35}${T}${I36}${T}${I37}${T}${I38}${T}${I39}${T
		}${I40}${T}${I41}${T}${I42}${T}${I43}${T}${I44}${T}${I45}${T}${I46}${T}${I47}${T}${I48}${T}${I49}${T
		}${I50}${T}${I51}${T}${I52}${T}${I53}${T}${I54}${T}${I55}${T}${I56}${T}${I57}${T}${I58}${T}${I59}${T
		}${I60}${T}${I61}${T}${I62}${T}${I63}${T}${I64}${T}${I65}${T}${I66}${T}${I67}${T}${I68}${T}${I69}${T
		}${I70}${T}${I71}${T}${I72}${T}${I73}${T}${I74}${T}${I75}${T}${I76}${T}${I77}${T}${I78}${T}${I79}${T
		}${I80}${T}${I81}${T}${I82}${T}${I83}${T}${I84}${T}${I85}${T}${I86}${T}${I87}${T}${I88}${T}${I89}${T
		}${I90}${T}${I91}${T}${I92}${T}${I93}${T}${I94}${T}${I95}${T}${I96}${T}${I97}${T}${I98}${T}${I99}${T}`
	> : P1<S, F, T, R>
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

	type Ad<A extends string, B extends string> = `${A}${B}`

	type S<T, A extends string, B, F extends Tostrable> = De<A, B> extends infer C extends string ? T extends 0 ? Ad<A, F2<C, F, ''>> : Ad<F2<C, F, ''>, A> : A
	type Z<T, A extends string, B extends string, F extends Tostrable> =
		string extends B ? T extends 0 ? `${A}${string}` : `${string}${A}` :
		string extends A ? T extends 0 ? Ad<A, F2<B, F, ''>> : Ad<F2<B, F, ''>, A> :
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