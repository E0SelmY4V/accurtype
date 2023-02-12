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

export type SntCmpUns<A extends string, B extends string> = IsWideString<`${A}${B}`> extends true ? 1 | -1 | 0 : cmp.LenCmp<A, B> extends infer K extends -1 | 1 ? K : cmp.P2<A, B>

export type SntCmp<A extends string, B extends string> = A extends `-${infer A}` ? B extends `-${infer B}` ? SntCmpUns<B, A> : 1 : B extends `-${any}` ? -1 : SntCmpUns<A, B>

export type SntCmpNum<A extends MayNum, B extends MayNum> = SntCmp<`${A}`, `${B}`>

export namespace Cmp {
	export type Less = cmp.Obj<0, 0, 1>
	export type Notgreater = cmp.Obj<0, 1, 1>
	export type Greater = cmp.Obj<1, 0, 0>
	export type Notless = cmp.Obj<1, 1, 0>
	export type Equal = cmp.Obj<0, 1, 0>
	export type Notequal = cmp.Obj<1, 0, 1>
}
export type Cmp<A extends MayNum, W extends { [I in -1 | 0 | 1]: boolean }, B extends MayNum> = W[SntCmp<`${A}`, `${B}`>];

export type IsLess<A extends MayNum, B extends MayNum> = Cmp<A, Cmp.Less, B>
export function isLess<A extends MayNum, B extends MayNum>(a: A, b: B) {
	return (BigInt(a) < BigInt(b)) as IsLess<A, B>
}

export type IsNotgreater<A extends MayNum, B extends MayNum> = Cmp<A, Cmp.Notgreater, B>
export function isNotgreater<A extends MayNum, B extends MayNum>(a: A, b: B) {
	return (BigInt(a) <= BigInt(b)) as IsNotgreater<A, B>
}

export type IsGreater<A extends MayNum, B extends MayNum> = Cmp<A, Cmp.Greater, B>
export function isGreater<A extends MayNum, B extends MayNum>(a: A, b: B) {
	return (BigInt(a) > BigInt(b)) as IsGreater<A, B>
}

export type IsNotless<A extends MayNum, B extends MayNum> = Cmp<A, Cmp.Notless, B>
export function isNotless<A extends MayNum, B extends MayNum>(a: A, b: B)  {
	return (BigInt(a) >= BigInt(b)) as IsNotless<A, B>
}

export type IsEqual<A extends MayNum, B extends MayNum> = Cmp<A, Cmp.Equal, B>
export function isEqual<A extends MayNum, B extends MayNum>(a: A, b: B)  {
	return (BigInt(a) === BigInt(b)) as IsEqual<A, B>
}

export type IsAllLess<A extends readonly MayNum[], E extends MayNum> = A extends readonly (infer K extends MayNum)[] ? TypeAnd<IsLess<K, E>> : false
export type MayUpNum<T extends number, S extends number = 100000, C extends number = 0> = TypeAnd<IsLess<T, C>> extends true ? cmp.MayUpNumDn<T, S, C> : cmp.MayUpNumUp<T, S, C>
export type UpNum<T extends number, S extends 10 = 10, R extends number = 15, N extends number = 0> = R extends -1 ? SntXcrNum<0, N, number> :
	UpNum<T, S, SntXcrNum<9, R, number>, SntAosNum<9, MayUpNum<T, cmp.PowerList[R], N>, cmp.PowerList[R], number>>

// type MaxIn<A extends WideNum[]> = ArrayLtdSplited<A> extends [infer A0 extends WideNum[], (infer S extends WideNum)[], infer A2 extends WideNum[]] ?
// type LtdMaxIndexIn<A extends WideNum[], M extends WideNum, I extends number> = 1
// type MaxIndexOf<A extends WideNum[], M extends number = -1> = ArrayLtdSplited<A> extends [infer K extends any[], ...(infer S)[][]] ?
// export function max<A extends ArrayAccur<T>, T extends WideNum>(n: A): MaxIn<A>
