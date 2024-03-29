import {
	SntXcrNum,
	SntCmp,
	ArrayLtdCombed
} from '..'

export type MinItems<N extends number, T> = SntCmp<`${N}`, '1'> extends 1 ? T[] : [T, ...MinItems<SntXcrNum<9, N, number>, T>]

export type LtdUniqueItems<L extends any[], B extends readonly any[] = []> = L extends readonly [infer S, ...infer K] ? [S, ...LtdUniqueItems<[...B, ...K]>] | LtdUniqueItems<K, [S, ...B]> : []
export type UniqueItems<L extends readonly any[]> = LtdUniqueItems<ArrayLtdCombed<L>>
