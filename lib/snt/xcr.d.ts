import {
	NumOfStr,
	MayNum,
} from '../..'
import {
	xcr,
} from './tool'

type SntXcrUns<T extends 0 | 9, N extends string> = xcr.Ori<T, N>

type SntXcr<T extends 0 | 9, N extends string> = `${T},${N}` extends '0,-1' ? '0' : `${T},${N}` extends '9,0' ? '-1' :
	N extends `-${infer K}` ? `-${SntXcrUns<xcr.R<T>, K>}` : SntXcrUns<T, N>

type SntXcrNum<T extends 0 | 9, N extends MayNum, K extends MayNum> = NumOfStr<SntXcr<T, `${N}`>, K>

type Increase<N extends MayNum> = SntXcrNum<0, N, N extends number ? number : bigint>
declare function increase<N extends MayNum>(num: N): Increase<N>

type Decrease<N extends MayNum> = SntXcrNum<9, N, N extends number ? number : bigint>
declare function decrease<N extends MayNum>(num: N): Decrease<N>
