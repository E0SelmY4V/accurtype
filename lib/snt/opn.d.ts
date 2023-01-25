import {
	NumOfStr,
	SntCmpUns,
	WideNum,
} from '..'
import {
	opn,
	xcr,
} from './tool'

type SntAosUns<T extends 0 | 9, A extends string, B extends string> = `${T},${SntCmpUns<A, B>}` extends '9,1' ? `-${opn.AosHal<T, B, A>}` : opn.AosHal<T, A, B>

type SntAos<T extends 0 | 9, A extends string, B extends string> = A extends `-${infer A}` ? B extends `-${infer B}` ? `${T extends 0 ? '-' : ''}${SntAosUns<T, B, A>}` : `${T extends 9 ? '-' : ''}${SntAosUns<xcr.R<T>, B, A>}` : B extends `-${infer B}` ? SntAosUns<xcr.R<T>, A, B> : SntAosUns<T, A, B>

type SntAosNum<T extends 0 | 9, A extends WideNum, B extends WideNum, K extends WideNum> = NumOfStr<SntAos<T, `${A}`, `${B}`>, K>

type Added<A extends WideNum, B extends WideNum> = SntAosNum<0, A, B, A | B extends bigint ? bigint : number>
declare function add<A extends WideNum, B extends WideNum>(a: A, b: B): Added<A, B>

type Subed<A extends WideNum, B extends WideNum> = SntAosNum<9, A, B, A | B extends bigint ? bigint : number>
declare function sub<A extends WideNum, B extends WideNum>(a: A, b: B): Subed<A, B>
