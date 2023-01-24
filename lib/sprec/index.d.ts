import {
	Tostrable,
	IsWideArray,
	Accur,
	ArrayLtdSplited,
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

type Spaceless<N extends string> = Replaced<N, ' ', ''>;
declare function removeSpace<N extends string>(str: N): Spaceless<N>

type Leading0less<N extends string> = Leading0less.P2<N>
declare function removeLeading0<N extends string>(str: N): Leading0less<N>

type StringReved<N extends string> = StringReved.P2<N, ''>
declare function revString<N extends string>(str: N): StringReved<N>;

type Replaced<N extends string, F extends Tostrable, T extends Tostrable> = Replaced.P2<N, F, T, ''>
declare function replace<N extends string, F extends Tostrable, T extends Tostrable>(str: N, findStr: F, withStr: T): Replaced<N, F, T>

type PostAligned<A extends string, B extends string, F extends Tostrable = ' '> = Aligned.Z<0, A, B, F>
declare function postAlign<A extends string, B extends string, F extends Tostrable = ''>(str: A, withStr: B, filler?: F): PostAligned<A, B, F>

type PreAligned<A extends string, B extends string, F extends Tostrable = ' '> = Aligned.Z<1, A, B, F>
declare function preAlign<A extends string, B extends string, F extends Tostrable = ''>(str: A, withStr: B, filler?: F): PreAligned<A, B, F>

type BothPreAligned<A extends string, B extends string, F extends Tostrable = ' '> = Aligned.Z<1, A, B, F> extends A ? { A: A, B: Aligned.Z<1, B, A, F> } : { A: Aligned.Z<1, A, B, F>, B: B }

type BothPostAligned<A extends string, B extends string, F extends Tostrable = ' '> = Aligned.Z<0, A, B, F> extends A ? { A: A, B: Aligned.Z<0, B, A, F> } : { A: Aligned.Z<0, A, B, F>, B: B }

type Splited<N extends Tostrable, F extends Tostrable> = Splited.T<N, F>
declare function split<N extends string, F extends Tostrable>(str: N, separator: F): Splited<N, F>

type Joined<A extends readonly Tostrable[], F extends Tostrable> = Joined.P2<A, F, ''>
declare function join<A extends B[], B extends string, F extends Tostrable>(array: readonly [...A], separator: F): Joined<A, F>

type Concated<A extends readonly (readonly any[])[]> = Concated.P2<A, []>
declare function concat<T extends Accur<T>, S extends (readonly T[])[]>(...arr: readonly [...S]): Concated<S>

type PostVoidLess<A extends readonly any[]> = PostVoidLess.P2<A>

type LtdArrayReved<A extends readonly any[]> = LtdArrayReved.P2<A, []>
type ArrayReved<T extends readonly any[]> = ArrayLtdSplited<T> extends readonly [infer T0 extends readonly any[], infer T1 extends readonly any[], infer T2 extends readonly any[]] ? [...LtdArrayReved<T2>, ...T1, ...LtdArrayReved<T0>] : []
declare function revArray<T extends Accur<T>, A extends T[]>(...ele: A): ArrayReved<A>
