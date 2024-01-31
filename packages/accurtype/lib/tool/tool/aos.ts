import type {
	LeadingLess,
	StringReved,
	PreAligned,
} from './tool'
import type {
	SigT,
	SigNumber,
	CmpEx,
	SigVary,
	Rev,
} from '.'

type GotQH<Q = any, H = any> = { q: Q, h: H }
type SigInfl<T extends 0 | 9, A, B extends SigT, E extends 1 | 0> = B extends 0 ? A extends 's' ? GotQH<1, T> : GotQH<E, A> : A extends SigNumber ? SigInfl<T, SigVary<T, A>, SigVary<9, B>, E> : SigInfl<T, T, B, 1>
type SigTrinfl<T extends 0 | 9, A, B extends SigT, C extends 0 | 1> = SigInfl<T, A, B, 0> extends infer K extends GotQH ? SigInfl<T, K['h'], C, K['q']> : GotQH<0, 0>
type AosOri<T extends 0 | 9, A extends string, B extends string, J extends 0 | 1, R extends string> = `${A},${B}` extends `${infer A0 extends SigNumber}${infer A},${infer B0 extends SigNumber}${infer B}` ? SigTrinfl<T, A0, B0, J> extends infer S extends GotQH ? AosOri<T, A, B, S['q'], `${R}${S['h']}`> : R : R
type AosHal<T extends 0 | 9, A extends string, B extends string> = LeadingLess<0, StringReved<AosOri<T, `${StringReved<PreAligned<A, B, 0>>}0`, `${StringReved<PreAligned<B, A, 0>>}0`, 0, ''>>>
type SntAosUns<T extends 0 | 9, A extends string, B extends string> = `${T},${CmpEx<A, B>}` extends '9,1' ? `-${AosHal<T, B, A>}` : AosHal<T, A, B>
type Ex<T extends 0 | 9, A extends string, B extends string> = A extends `-${infer A}` ? B extends `-${infer B}` ? `${T extends 0 ? '-' : ''}${SntAosUns<T, B, A>}` : `${T extends 9 ? '-' : ''}${SntAosUns<Rev<T>, B, A>}` : B extends `-${infer B}` ? SntAosUns<Rev<T>, A, B> : SntAosUns<T, A, B>
export type Aos<T extends 0 | 9, A extends string, B extends string> = Ex<T, A, B>
export type Added<A extends string, B extends string> = Aos<0, A, B>
export type Subed<A extends string, B extends string> = Aos<9, A, B>
