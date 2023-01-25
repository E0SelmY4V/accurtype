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

declare namespace xcr {
	type R<T extends 0 | 9> = T extends 0 ? 9 : 0
	type SigT = SigNumber | 's'
	type SigVary<T extends 0 | 9, N extends SigT> = N extends SigNumber ? (T extends 0 ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 's'] : ['s', 0, 1, 2, 3, 4, 5, 6, 7, 8])[N] : 's'
	type Ori<T extends 0 | 9, N extends string> = N extends `${infer K extends SigNumber}${infer S}` ? S extends '' ? `${SigVary<T, K>}` : Ori<T, S> extends infer E extends string ? `${E extends `s${any}` ? SigVary<T, K> : K}${E}` : 'NaN' : 'NaN'
}

declare namespace opn {
	type SigInfl<T extends 0 | 9, A extends xcr.SigT, B extends xcr.SigT, E extends 1 | 0 = 0> = B extends 0 ? A extends 's' ? [1, T] : [E, A] : A extends SigNumber ? SigInfl<T, xcr.SigVary<T, A>, xcr.SigVary<9, B>, E> : SigInfl<T, T, B, 1>
	type SigTrinfl<T extends 0 | 9, A extends SigNumber, B extends SigNumber, C extends 0 | 1> = SigInfl<T, A, B> extends infer K extends readonly [0 | 1, SigNumber] ? SigInfl<T, K[1], C, K[0]> : [0, 0]
	type AosOri<T extends 0 | 9, A extends string, B extends string, J extends 0 | 1 = 0> = `${A},${B}` extends `${infer KA extends SigNumber}${infer NA},${infer KB extends SigNumber}${infer NB}`
		? SigTrinfl<T, KA, KB, J> extends infer S extends readonly [1 | 0, SigNumber] ? `${S[1]}${AosOri<T, NA, NB, S[0]>}` : '' : ''
	type AosHdl<A extends string, B extends string> = { [P in 'A' | 'B']: `${StringReved<BothPreAligned<A, B, '0'>[P]>}0` }
	type AosHal<T extends 0 | 9, A extends string, B extends string> = Leading0less<StringReved<AosOri<T, AosHdl<A, B>['A'], AosHdl<A, B>['B']>>>
}

declare module cmp {
	type SigCmp<A extends xcr.SigT, B extends xcr.SigT> = A extends B ? 0 : A extends 's' ? -1 : B extends 's' ? 1 : SigCmp<xcr.SigVary<0, A>, xcr.SigVary<0, B>>
	type LenCmp<A extends string, B extends string> = `${A},${B}` extends `${any}${infer A1},${any}${infer B1}` ? LenCmp<A1, B1> : A extends B ? 0 : B extends '' ? -1 : 1
	type Ori<A extends string, B extends string> = Or<IsWideString<A>, IsWideString<B>> extends true ? 1 | -1 | 0 :
		`${A},${B}` extends `${infer A0 extends SigNumber}${infer A1},${infer B0 extends SigNumber}${infer B1}` ? SigCmp<A0, B0> extends infer K extends -1 | 1 ? K : Ori<A1, B1> : 0
	type Obj<L, E, G, A extends WideNum, B extends WideNum> = { '-1': L, '0': E, '1': G }[`${SntCmpNum<A, B>}`]
	type MayUpNumUp<T extends number, S extends number, C extends number> = TypeOr<IsLess<C, T>> extends true ? MayUpNumUp<T, S, SntAosNum<0, C, S, number>> : C
	type MayUpNumDn<T extends number, S extends number, C extends number> = IsNotless<C, T> extends true ? MayUpNumDn<T, S, SntAosNum<9, C, S, number>> : SntAosNum<0, C, S, number>
	type PowerList = [1, 10, 1e2, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13, 1e14, 1e15]
}
