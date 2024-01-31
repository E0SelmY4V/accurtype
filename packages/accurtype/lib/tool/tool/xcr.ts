import type {
	LeadingLess,
	StringReved,
} from './tool'
import type {
	JP,
	SigNumber,
} from '.'

export type SigT = SigNumber | 's'
export type Rev<T> = T extends 0 ? 9 : 0
export type SigVary<T extends 0 | 9, N extends SigT> = N extends SigNumber ? (T extends 0 ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 's'] : ['s', 0, 1, 2, 3, 4, 5, 6, 7, 8])[N] : 's'
type P0<T extends 0 | 9, N, B, E extends 0 | 9 = Rev<T>> = N extends `${E}${infer N}` ? P0<T, N, `${JP<B>}${T}`> : N extends `${infer S extends SigNumber}${infer N}` ? `${JP<B>}${SigVary<T, S>}${N}` : `${JP<B>}${JP<N>}`
type Uns<T extends 0 | 9, N extends string> = LeadingLess<0, StringReved<P0<T, StringReved<`0${N}`>, ''>>>
type Ex<T extends 0 | 9, N extends string> = `${T},${N}` extends '0,-1' ? '0' : `${T},${N}` extends '9,0' ? '-1' : N extends `-${infer K}` ? `-${Uns<Rev<T>, K>}` : Uns<T, N>
export type Xcr<T extends 0 | 9, N extends string> = Ex<T, N>
export type Inced<N extends string> = Xcr<0, N>
export type Deced<N extends string> = Xcr<9, N>
