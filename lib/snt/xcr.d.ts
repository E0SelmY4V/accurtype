import {
	NumOfStr,
	WideNum,
	Leading0less,
	Replaced,
} from '../..'
import {
	SntXcrOri,
	SntR,
} from './tool'

type SntXcrUns<T extends 0 | 9, N extends string> = Leading0less<Replaced<SntXcrOri<T, `0${N}`>, 's', T>>

type SntXcr<T extends 0 | 9, N extends string> = `${T},${N}` extends '0,-1' ? '0' : `${T},${N}` extends '9,0' ? '-1' :
	N extends `-${infer K}` ? `-${SntXcrUns<SntR<T>, K>}` : SntXcrUns<T, N>

type SntXcrNum<T extends 0 | 9, N extends WideNum, K extends WideNum> = NumOfStr<SntXcr<T, `${N}`>, K>

type Increase<N extends WideNum> = SntXcrNum<0, N, N extends number ? number : bigint>
declare function increase<N extends WideNum>(num: N): Increase<N>

type Decrease<N extends WideNum> = SntXcrNum<9, N, N extends number ? number : bigint>
declare function decrease<N extends WideNum>(num: N): Decrease<N>
