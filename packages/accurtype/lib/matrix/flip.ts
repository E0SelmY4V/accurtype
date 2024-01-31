import {
	ArrayLtdSplited,
	ALRslt,
	ArrayReved,
	IfredArr,
} from '..'

export type FlipedUD<A extends readonly (readonly any[])[]> = ArrayReved<A>

export type LtdFlipedLR<A> = A extends readonly [infer S extends readonly any[], ...infer AL] ? [ArrayReved<S>, ...LtdFlipedLR<AL>] : []
export type FlipedLR<A extends readonly (readonly any[])[]> = ArrayLtdSplited<A> extends ALRslt<infer A0, infer A1, infer A2> ? [...LtdFlipedLR<A0>, ...(A1 extends readonly [] ? [] : ArrayReved<IfredArr<A1>>[]), ...LtdFlipedLR<A2>] : []
