import { SigNumber, NumOfStr, WideNum, Tostrable } from './base'
import { Leading0less, Replaced } from './sprec'
export { }
type SntR<T extends 0 | 9> = T extends 0 ? 9 : 0
type SntSigT = SigNumber | 's'
type SntSigVary<T extends 0 | 9, N extends SntSigT> = T extends 0
	? N extends 0 ? 1 : N extends 1 ? 2 : N extends 2 ? 3 : N extends 3 ? 4 : N extends 4 ? 5 : N extends 5 ? 6 : N extends 6 ? 7 : N extends 7 ? 8 : N extends 8 ? 9 : 's'
	: N extends 2 ? 1 : N extends 3 ? 2 : N extends 4 ? 3 : N extends 5 ? 4 : N extends 6 ? 5 : N extends 7 ? 6 : N extends 8 ? 7 : N extends 9 ? 8 : N extends 1 ? 0 : 's'
type SntXcrOri<T extends 0 | 9, N extends string> = N extends `${infer K extends SigNumber
	}${infer S}` ? S extends '' ? `${SntSigVary<T, K>}` : SntXcrOri<T, S> extends infer E
	extends string ? `${E extends `s${any}` ? SntSigVary<T, K> : K}${E}` : 'NaN' : 'NaN'
export type SntXcrUns<T extends 0 | 9, N extends string> = Leading0less<Replaced<SntXcrOri<T, `0${N}`>, 's', T>>
export type SntXcr<T extends 0 | 9, N extends string> = `${T},${N}` extends '0,-1' ? '0' : `${T},${N}` extends '9,0' ? '-1' :
	N extends `-${infer K}` ? `-${SntXcrUns<SntR<T>, K>}` : SntXcrUns<T, N>
export type SntXcrNum<T extends 0 | 9, N extends WideNum, K extends WideNum> = NumOfStr<SntXcr<T, `${N}`>, K>
export type Increase<N extends WideNum> = SntXcrNum<0, N, N extends number ? number : bigint>
export type Decrease<N extends WideNum> = SntXcrNum<9, N, N extends number ? number : bigint>

export type LenOfStr<N extends string, C extends boolean = false, L extends number = 0> = C extends false
	? string extends N ? number : LenOfStr<N, true>
	: N extends `${any}${infer K}` ? LenOfStr<K, true, NumOfStr<SntXcrUns<0, `${L}`>, number>> : L
export type LenOfArr<N extends any[], C extends boolean = false, L extends number = 0> = N extends never[] ? 0 : C extends false
	? LenOfArr<N, true> extends infer K ? K extends 0 ? N extends [] ? 0 : number : K : 0
	: N extends [any, ...infer S] ? LenOfArr<S, true, NumOfStr<SntXcrUns<0, `${L}`>, number>> : L
export type Leading0Filled<N extends Tostrable, B extends Tostrable> = `${B}` extends '0' ? N : `0${Leading0Filled<N, SntXcrUns<9, `${B}`>>}`
export type Filled0toSame<N extends string, B extends string, I extends string = '0'> = N[NumOfStr<I, number>] extends void ? 1 : 0
