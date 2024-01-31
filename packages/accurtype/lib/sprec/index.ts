import {
	Tostrable,
	IsWideArray,
	Accur,
	ArrayLtdSplited,
	ALRslt,
	IfredArr,
} from '..'
import {
	Leading0less,
	StringReved,
	Replaced,
	Aligned,
	Splited,
	Joined,
	LtdArrayReved,
	Concated,
	PostVoidLess,
} from './tool'

export type Spaceless<N extends string> = Replaced<N, ' ', ''>
export function removeSpace<N extends string>(str: N) {
	let a: any = replace(str, ' ', '')
	return a as Spaceless<N>
}

export type Leading0less<N extends string> = Leading0less.P2<N>
export function removeLeading0<N extends string>(str: N) {
	return ['', ...str.split('0')].reduce((p, c) => p || c ? p + '0' + c : '').slice(1) as Leading0less<N>
}

export type StringReved<N extends string> = StringReved.P2<N, ''>
export function revString<N extends string>(str: N) {
	return str.split('').reverse().join('') as StringReved<N>
}

export type Replaced<N extends string, F extends Tostrable, T extends Tostrable> = Replaced.P2<N, F, T, ''>
export function replace<N extends string, F extends Tostrable, T extends Tostrable>(str: N, findStr: F, withStr: T) {
	return str.replaceAll(`${findStr}`, `${withStr}`) as Replaced<N, F, T>
}

export type PostAligned<A extends string, B extends string, F extends Tostrable = ' '> = Aligned.Z<0, A, B, F>
export function postAlign<A extends string, B extends string, F extends Tostrable = ''>(str: A, withStr: B, filler?: F) {
	return (withStr.length - str.length < 0 ? str : str + `${filler}`.repeat(withStr.length - str.length)) as PostAligned<A, B, F>
}

export type PreAligned<A extends string, B extends string, F extends Tostrable = ' '> = Aligned.Z<1, A, B, F>
export function preAlign<A extends string, B extends string, F extends Tostrable = ''>(str: A, withStr: B, filler?: F) {
	return (withStr.length - str.length < 0 ? str : `${filler}`.repeat(withStr.length - str.length) + str) as PreAligned<A, B, F>
}

export type BothPreAligned<A extends string, B extends string, F extends Tostrable = ' '> = Aligned.Z<1, A, B, F> extends A ? { A: A, B: Aligned.Z<1, B, A, F> } : { A: Aligned.Z<1, A, B, F>, B: B }

export type BothPostAligned<A extends string, B extends string, F extends Tostrable = ' '> = Aligned.Z<0, A, B, F> extends A ? { A: A, B: Aligned.Z<0, B, A, F> } : { A: Aligned.Z<0, A, B, F>, B: B }

export type Splited<N extends Tostrable, F extends Tostrable> = Splited.T<N, F>
export function split<N extends string, F extends Tostrable>(str: N, separator: F) {
	return str.split(`${separator}`) as Splited<N, F>
}

export type Joined<A extends readonly Tostrable[], F extends Tostrable> = Joined.P2<A, F, ''>
export function join<A extends B[], B extends string, F extends Tostrable>(array: readonly [...A], separator: F) {
	return array.join(`${separator}`) as Joined<A, F>
}

export type Concated<A extends readonly (readonly any[])[]> = ArrayLtdSplited<A> extends ALRslt<infer A0, infer A1, infer A2> ? [...Concated.P2<A0, []>, ...(A1 extends [] ? [] : IfredArr<IfredArr<A1>>[]), ...Concated.P2<A2, []>] : []
export function concat<T extends Accur<T>, S extends (readonly T[])[]>(...arr: readonly [...S]) {
	return ([] as T[]).concat(...arr) as Concated<S>
}

export type PostVoidLess<A extends readonly any[]> = PostVoidLess.T<A>

export type LtdArrayReved<A extends readonly any[]> = LtdArrayReved.P2<A, []>
export type ArrayReved<T extends readonly any[]> = ArrayLtdSplited<T> extends ALRslt<infer T0, infer T1, infer T2> ? [...LtdArrayReved<T2>, ...T1, ...LtdArrayReved<T0>] : []
export function revArray<T extends Accur<T>, A extends T[]>(...ele: A) {
	return ele.reverse() as ArrayReved<A>
}
