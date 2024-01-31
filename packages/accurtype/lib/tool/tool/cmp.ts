import type {
	LenCmp,
} from './tool'
import type {
	SigT,
	SigNumber,
	SigVary,
} from '.'

type Sig<A extends SigT, B extends SigT> = A extends B ? 0 : A extends 's' ? -1 : B extends 's' ? 1 : Sig<SigVary<0, A>, SigVary<0, B>>
type P0<A extends string, B extends string> = `${A},${B}` extends `${infer A0 extends SigNumber}${infer A},${infer B0 extends SigNumber}${infer B}` ? Sig<A0, B0> extends infer K extends -1 | 1 ? K : P0<A, B> : 0
type Uns<A extends string, B extends string> = string extends A | B ? 1 | -1 | 0 : LenCmp<A, B> extends infer K extends -1 | 1 ? K : P0<A, B>
type N2B<N> = N extends 1 ? true : false
type Obj<L = 0 | 1, E = 0 | 1, G = 0 | 1> = { [-1]: N2B<L>, 0: N2B<E>, 1: N2B<G> }
export type CmpEx<A extends string, B extends string> = A extends `-${infer A}` ? B extends `-${infer B}` ? Uns<B, A> : 1 : B extends `-${any}` ? -1 : Uns<A, B>
export namespace Cmp {
	export type Less = Obj<0, 0, 1>
	export type Notgreater = Obj<0, 1, 1>
	export type Greater = Obj<1, 0, 0>
	export type Notless = Obj<1, 1, 0>
	export type Equal = Obj<0, 1, 0>
	export type Notequal = Obj<1, 0, 1>
}
export type Cmp<A extends string, W extends Obj, B extends string> = W[CmpEx<`${A}`, `${B}`>]
export type Max<A extends string, B extends string> = Cmp<A, Cmp.Less, B> extends true ? B : A
export type Min<A extends string, B extends string> = Cmp<A, Cmp.Less, B> extends true ? A : B
