import {
	ArrayLtdSplited,
	ArrayReved,
	IfredArr,
} from '..'

type FlipedUD<A extends readonly (readonly any[])[]> = ArrayReved<A>

type LtdFlipedLR<A> = A extends readonly[infer S extends readonly any[], ...infer AL] ? [ArrayReved<S>, ...LtdFlipedLR<AL>] : []
type FlipedLR<A extends readonly (readonly any[])[]> = ArrayLtdSplited<A> extends readonly [infer A0, infer A1 extends readonly any[], infer A2] ? [...LtdFlipedLR<A0>, ...(A1 extends readonly [] ? [] : ArrayReved<IfredArr<A1>>[]), ...LtdFlipedLR<A2>] : []
