import type {
	Tostrable,
} from '.'

export type StrSubedSub<A extends string, B extends string, R extends string = ''> = B extends `${any}${infer B}` ? A extends `${any}${infer A}` ? StrSubedSub<A, B, R> : StrSubedSub<A, B, `${R}Z`> : { r: R, a: A }
export type StrSubed<A extends string, B extends string> = StrSubedSub<A, B> extends { r: infer R } ? R extends '' ? 0 : R : never
export type Filled<F extends Tostrable, B, R extends string = ''> = B extends `${any}${infer B}` ? Filled<F, B, `${R}${F}`> : R
export type PreAligned<A extends string, B extends string, F extends Tostrable> = `${Filled<F, StrSubed<A, B>>}${A}`
// type PostAligned<A extends string, B extends string, F extends Tostrable> = `${A}${Filled<F, StrSubed<A, B>>}`
export type LeadingLess<F extends Tostrable, N extends string> = N extends `${F}${infer K}` ? K extends '' ? N : LeadingLess<F, K> : N
export type StringReved<N, R extends string = ''> = N extends `${infer I}${infer S}` ? StringReved<S, `${I}${R}`> : R
export type LenCmp<A extends string, B extends string> = PreAligned<A, B, 0> extends A ? PreAligned<B, A, 0> extends B ? 0 : -1 : 1
