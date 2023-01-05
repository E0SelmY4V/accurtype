import {
	SntXcrNum,
	SntCmp,
	ArrayLtdCombed
} from '..'

type MinItems<N extends number, T> = SntCmp<`${N}`, '1'> extends 1 ? T[] : [T, ...MinItems<SntXcrNum<9, N, number>, T>]

type LtdUniqueItems<L extends any[], B extends any[] = []> = L extends [infer S, ...infer K] ? [S, ...LtdUniqueItems<[...B, ...K]>] | LtdUniqueItems<K, [S, ...B]> : []
type UniqueItems<L extends any[]> = LtdUniqueItems<ArrayLtdCombed<L>>
