import {
	WideNum,
} from '..'
import {
	SntLenCmp,
	SntCmpOri,
	SntCmpObj,
} from './tool'

type SntCmpUns<A extends string, B extends string> = SntLenCmp<A, B> extends infer K extends -1 | 1 ? K : SntCmpOri<A, B>

type SntCmp<A extends string, B extends string> = A extends `-${infer A}` ? B extends `-${infer B}` ? SntCmpUns<B, A> : 1 : B extends `-${any}` ? -1 : SntCmpUns<A, B>

type SntCmpNum<A extends WideNum, B extends WideNum> = SntCmp<`${A}`, `${B}`>

type IsLess<A extends WideNum, B extends WideNum> = SntCmpObj<false, false, true, A, B>
declare function isLess<A extends WideNum, B extends WideNum>(a: A, b: B): IsLess<A, B>

type IsNotless<A extends WideNum, B extends WideNum> = SntCmpObj<false, true, true, A, B>
declare function isNotless<A extends WideNum, B extends WideNum>(a: A, b: B): IsNotless<A, B>

type IsGreater<A extends WideNum, B extends WideNum> = SntCmpObj<true, false, false, A, B>
declare function isGreater<A extends WideNum, B extends WideNum>(a: A, b: B): IsGreater<A, B>

type IsNotgreater<A extends WideNum, B extends WideNum> = SntCmpObj<true, true, false, A, B>
declare function isNotgreater<A extends WideNum, B extends WideNum>(a: A, b: B): IsNotgreater<A, B>

type IsEqual<A extends WideNum, B extends WideNum> = SntCmpObj<false, true, false, A, B>
declare function isEqual<A extends WideNum, B extends WideNum>(a: A, b: B): IsEqual<A, B>
