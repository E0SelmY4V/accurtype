import {
	WideNum,
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
} from '..'
import {
	cmp,
} from './tool'

type SntCmpUns<A extends string, B extends string> = IsWideString<`${A}${B}`> extends true ? 1 | -1 | 0 : cmp.LenCmp<A, B> extends infer K extends -1 | 1 ? K : cmp.P2<A, B>

type SntCmp<A extends string, B extends string> = A extends `-${infer A}` ? B extends `-${infer B}` ? SntCmpUns<B, A> : 1 : B extends `-${any}` ? -1 : SntCmpUns<A, B>

type SntCmpNum<A extends WideNum, B extends WideNum> = SntCmp<`${A}`, `${B}`>

type IsLess<A extends WideNum, B extends WideNum> = cmp.Obj<false, false, true, A, B>
declare function isLess<A extends WideNum, B extends WideNum>(a: A, b: B): IsLess<A, B>

type IsNotgreater<A extends WideNum, B extends WideNum> = cmp.Obj<false, true, true, A, B>
declare function isNotgreater<A extends WideNum, B extends WideNum>(a: A, b: B): IsNotgreater<A, B>

type IsGreater<A extends WideNum, B extends WideNum> = cmp.Obj<true, false, false, A, B>
declare function isGreater<A extends WideNum, B extends WideNum>(a: A, b: B): IsGreater<A, B>

type IsNotless<A extends WideNum, B extends WideNum> = cmp.Obj<true, true, false, A, B>
declare function isNotless<A extends WideNum, B extends WideNum>(a: A, b: B): IsNotless<A, B>

type IsEqual<A extends WideNum, B extends WideNum> = cmp.Obj<false, true, false, A, B>
declare function isEqual<A extends WideNum, B extends WideNum>(a: A, b: B): IsEqual<A, B>

type IsAllLess<A extends readonly WideNum[], E extends WideNum> = A extends readonly (infer K extends WideNum)[] ? TypeAnd<IsLess<K, E>> : false
type MayUpNum<T extends number, S extends number = 100000, C extends number = 0> = TypeAnd<IsLess<T, C>> extends true ? cmp.MayUpNumDn<T, S, C> : cmp.MayUpNumUp<T, S, C>
type UpNum<T extends number, S extends 10 = 10, R extends number = 15, N extends number = 0> = R extends -1 ? SntXcrNum<0, N, number> :
	UpNum<T, S, SntXcrNum<9, R, number>, SntAosNum<9, MayUpNum<T, cmp.PowerList[R], N>, cmp.PowerList[R], number>>

type LtdMaxIn<A extends readonly WideNum[], M extends false | WideNum = false> = A extends readonly [infer K extends WideNum, ...infer E extends readonly WideNum[]] ? LtdMaxIn<E, M extends WideNum ? IsGreater<K, M> extends true ? K : M : K> : M
// type MaxIn<A extends WideNum[]> = ArrayLtdSplited<A> extends [infer A0 extends WideNum[], (infer S extends WideNum)[], infer A2 extends WideNum[]] ?
// type LtdMaxIndexIn<A extends WideNum[], M extends WideNum, I extends number> = 1
// type MaxIndexOf<A extends WideNum[], M extends number = -1> = ArrayLtdSplited<A> extends [infer K extends any[], ...(infer S)[][]] ?
// declare function max<A extends ArrayAccur<T>, T extends WideNum>(n: A): MaxIn<A>
