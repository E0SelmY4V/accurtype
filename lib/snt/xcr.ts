import {
	NumOfStr,
	MayNum,
} from '..'
import {
	xcr,
} from './tool'

export type SntXcrUns<T extends 0 | 9, N extends string> = xcr.Ori<T, N>

export type SntXcr<T extends 0 | 9, N extends string> = `${T},${N}` extends '0,-1' ? '0' : `${T},${N}` extends '9,0' ? '-1' :
	N extends `-${infer K}` ? `-${SntXcrUns<xcr.R<T>, K>}` : SntXcrUns<T, N>

export type SntXcrNum<T extends 0 | 9, N extends MayNum, K extends MayNum> = NumOfStr<SntXcr<T, `${N}`>, K>

export type Increase<N extends MayNum> = SntXcrNum<0, N, N extends number ? number : bigint>
export function increase<N extends MayNum>(num: N) {
	return (typeof num === 'number' ? num + 1 : BigInt(num) + 1n) as Increase<N>
}

export type Decrease<N extends MayNum> = SntXcrNum<9, N, N extends number ? number : bigint>
export function decrease<N extends MayNum>(num: N) {
	return (typeof num === 'number' ? num - 1 : BigInt(num) - 1n) as Decrease<N>
}
