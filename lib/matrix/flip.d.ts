import {
	ArrayLtdSplited,
	ArrayReved,
	IfredArr,
} from '..'

type FlipedUD<A extends any[][]> = ArrayReved<A>

type LtdFlipedLR<A> = A extends [infer S extends any[], ...infer AL] ? [ArrayReved<S>, ...LtdFlipedLR<AL>] : []
type FlipedLR<A extends any[][]> = ArrayLtdSplited<A> extends [infer A0, infer A1 extends any[], infer A2] ? [...LtdFlipedLR<A0>, ...(A1 extends [] ? [] : ArrayReved<IfredArr<A1>>[]), ...LtdFlipedLR<A2>] : []
