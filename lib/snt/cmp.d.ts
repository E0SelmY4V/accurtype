import {
	ArrayAccur,
	IndexOf,
	IsArrayOfLtd,
	IsLongArray,
	IsWideArray,
	ArrayLtdSplited,
	TypeAnd,
	SntXcrNum,
	SntAosNum,
	IsWideString,
	MayNum,
} from '..'
import {
	cmp,
} from './tool'

type SntCmpUns<A extends string, B extends string> = IsWideString<`${A}${B}`> extends true ? 1 | -1 | 0 : cmp.LenCmp<A, B> extends infer K extends -1 | 1 ? K : cmp.P2<A, B>

type SntCmp<A extends string, B extends string> = A extends `-${infer A}` ? B extends `-${infer B}` ? SntCmpUns<B, A> : 1 : B extends `-${any}` ? -1 : SntCmpUns<A, B>

type SntCmpNum<A extends MayNum, B extends MayNum> = SntCmp<`${A}`, `${B}`>

declare namespace Cmp {
	type Less = cmp.Obj<0, 0, 1>
	type Notgreater = cmp.Obj<0, 1, 1>
	type Greater = cmp.Obj<1, 0, 0>
	type Notless = cmp.Obj<1, 1, 0>
	type Equal = cmp.Obj<0, 1, 0>
	type Notequal = cmp.Obj<1, 0, 1>
}
type Cmp<A extends MayNum, W extends { [I in -1 | 0 | 1]: boolean }, B extends MayNum> = W[SntCmp<`${A}`, `${B}`>];

type IsLess<A extends MayNum, B extends MayNum> = Cmp<A, Cmp.Less, B>
declare function isLess<A extends MayNum, B extends MayNum>(a: A, b: B): IsLess<A, B>

type IsNotgreater<A extends MayNum, B extends MayNum> = Cmp<A, Cmp.Notgreater, B>
declare function isNotgreater<A extends MayNum, B extends MayNum>(a: A, b: B): IsNotgreater<A, B>

type IsGreater<A extends MayNum, B extends MayNum> = Cmp<A, Cmp.Greater, B>
declare function isGreater<A extends MayNum, B extends MayNum>(a: A, b: B): IsGreater<A, B>

type IsNotless<A extends MayNum, B extends MayNum> = Cmp<A, Cmp.Notless, B>
declare function isNotless<A extends MayNum, B extends MayNum>(a: A, b: B): IsNotless<A, B>

type IsEqual<A extends MayNum, B extends MayNum> = Cmp<A, Cmp.Equal, B>
declare function isEqual<A extends MayNum, B extends MayNum>(a: A, b: B): IsEqual<A, B>

type IsAllLess<A extends readonly MayNum[], E extends MayNum> = A extends readonly (infer K extends MayNum)[] ? TypeAnd<IsLess<K, E>> : false
type MayUpNum<T extends number, S extends number = 100000, C extends number = 0> = TypeAnd<IsLess<T, C>> extends true ? cmp.MayUpNumDn<T, S, C> : cmp.MayUpNumUp<T, S, C>
type UpNum<T extends number, S extends 10 = 10, R extends number = 15, N extends number = 0> = R extends -1 ? SntXcrNum<0, N, number> :
	UpNum<T, S, SntXcrNum<9, R, number>, SntAosNum<9, MayUpNum<T, cmp.PowerList[R], N>, cmp.PowerList[R], number>>

type LtdMaxIn<A extends readonly MayNum[], M extends false | MayNum = false> = A extends readonly [infer K extends MayNum, ...infer E extends readonly MayNum[]] ? LtdMaxIn<E, M extends MayNum ? IsGreater<K, M> extends true ? K : M : K> : M
// type MaxIn<A extends WideNum[]> = ArrayLtdSplited<A> extends [infer A0 extends WideNum[], (infer S extends WideNum)[], infer A2 extends WideNum[]] ?
// type LtdMaxIndexIn<A extends WideNum[], M extends WideNum, I extends number> = 1
// type MaxIndexOf<A extends WideNum[], M extends number = -1> = ArrayLtdSplited<A> extends [infer K extends any[], ...(infer S)[][]] ?
// declare function max<A extends ArrayAccur<T>, T extends WideNum>(n: A): MaxIn<A>
