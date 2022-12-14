import {
	SigNumber,
	StringReved,
	BothPreAligned,
	Or,
	IsWideString,
	WideNum,
	Leading0less,
	SntAosNum,
	TypeOr,
	IsLess,
	IsNotless,
} from '..'
import {
	SntCmpNum,
} from './cmp'

// scr
type SntR<T extends 0 | 9> = T extends 0 ? 9 : 0
type SntSigT = SigNumber | 's'
type SntSigVary<T extends 0 | 9, N extends SntSigT> = T extends 0
	? N extends 0 ? 1 : N extends 1 ? 2 : N extends 2 ? 3 : N extends 3 ? 4 : N extends 4 ? 5 : N extends 5 ? 6 : N extends 6 ? 7 : N extends 7 ? 8 : N extends 8 ? 9 : 's'
	: N extends 2 ? 1 : N extends 3 ? 2 : N extends 4 ? 3 : N extends 5 ? 4 : N extends 6 ? 5 : N extends 7 ? 6 : N extends 8 ? 7 : N extends 9 ? 8 : N extends 1 ? 0 : 's'
type SntXcrOri<T extends 0 | 9, N extends string> = N extends `${infer K extends SigNumber
	}${infer S}` ? S extends '' ? `${SntSigVary<T, K>}` : SntXcrOri<T, S> extends infer E
	extends string ? `${E extends `s${any}` ? SntSigVary<T, K> : K}${E}` : 'NaN' : 'NaN'

// opn
type SntSigInfl<T extends 0 | 9, A extends SntSigT, B extends SntSigT, E extends 1 | 0 = 0> = B extends 0 ? A extends 's' ? [1, T] : [E, A] : A extends SigNumber ? SntSigInfl<T, SntSigVary<T, A>, SntSigVary<9, B>, E> : SntSigInfl<T, T, B, 1>
type SntSigTrinfl<T extends 0 | 9, A extends SigNumber, B extends SigNumber, C extends 0 | 1> = SntSigInfl<T, A, B> extends infer K extends [0 | 1, SigNumber] ? SntSigInfl<T, K[1], C, K[0]> : [0, 0]
type SntAosOri<T extends 0 | 9, A extends string, B extends string, J extends 0 | 1 = 0> = `${A},${B}` extends `${infer KA extends SigNumber}${infer NA},${infer KB extends SigNumber}${infer NB}`
	? SntSigTrinfl<T, KA, KB, J> extends infer S extends [1 | 0, SigNumber] ? `${S[1]}${SntAosOri<T, NA, NB, S[0]>}` : '' : ''
type SntAosHdl<A extends string, B extends string> = { [P in 'A' | 'B']: `${StringReved<BothPreAligned<A, B, '0'>[P]>}0` }
type SntAosHal<T extends 0 | 9, A extends string, B extends string> = Leading0less<StringReved<SntAosOri<T, SntAosHdl<A, B>['A'], SntAosHdl<A, B>['B']>>>

// cmp
type SntSigCmp<A extends SntSigT, B extends SntSigT> = A extends B ? 0 : A extends 's' ? -1 : B extends 's' ? 1 : SntSigCmp<SntSigVary<0, A>, SntSigVary<0, B>>
type SntLenCmp<A extends string, B extends string> = `${A},${B}` extends `${any}${infer A1},${any}${infer B1}` ? SntLenCmp<A1, B1> : A extends B ? 0 : B extends '' ? -1 : 1
type SntCmpOri<A extends string, B extends string> = Or<IsWideString<A>, IsWideString<B>> extends true ? 1 | -1 | 0 :
	`${A},${B}` extends `${infer A0 extends SigNumber}${infer A1},${infer B0 extends SigNumber}${infer B1}` ? SntSigCmp<A0, B0> extends infer K extends -1 | 1 ? K : SntCmpOri<A1, B1> : 0
type SntCmpObj<L, E, G, A extends WideNum, B extends WideNum> = { '-1': L, '0': E, '1': G }[`${SntCmpNum<A, B>}`]
type MayUpNumUp<T extends number, S extends number, C extends number> = TypeOr<IsLess<C, T>> extends true ? MayUpNumUp<T, S, SntAosNum<0, C, S, number>> : C
type MayUpNumDn<T extends number, S extends number, C extends number> = IsNotless<C, T> extends true ? MayUpNumDn<T, S, SntAosNum<9, C, S, number>> : SntAosNum<0, C, S, number>
type PowerList = [1, 10, 1e2, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13, 1e14, 1e15]
