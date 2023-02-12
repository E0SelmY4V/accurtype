import {
	NumOfStr,
	SntCmpUns,
	MayNum,
	EachOfUnion,
	IndexOf,
	ArrayLtdSplited,
	ALRslt,
	TypeOr,
	IfredArr,
} from '..'
import {
	opn,
	xcr,
} from './tool'

export type SntAosUns<T extends 0 | 9, A extends string, B extends string> = `${T},${SntCmpUns<A, B>}` extends '9,1' ? `-${opn.AosHal<T, B, A>}` : opn.AosHal<T, A, B>

export type SntAos<T extends 0 | 9, A extends string, B extends string> = A extends `-${infer A}` ? B extends `-${infer B}` ? `${T extends 0 ? '-' : ''}${SntAosUns<T, B, A>}` : `${T extends 9 ? '-' : ''}${SntAosUns<xcr.R<T>, B, A>}` : B extends `-${infer B}` ? SntAosUns<xcr.R<T>, A, B> : SntAosUns<T, A, B>

export type SntAosNum<T extends 0 | 9, A extends MayNum, B extends MayNum, K extends MayNum> = NumOfStr<SntAos<T, `${A}`, `${B}`>, K>

type LtdAnyElementExtends<A extends any[], E> = A extends [infer N, ...infer A] ? N extends E ? true : LtdAnyElementExtends<A, E> : false
type AnyElementExtends<A extends any[], E> = ArrayLtdSplited<A> extends ALRslt<infer X, infer Y, infer Z> ? TypeOr<LtdAnyElementExtends<X, E> | (Y extends [] ? never : IfredArr<Y> extends E ? true : false) | LtdAnyElementExtends<Z, E>> : false
type AnyExtends<A, E> = LtdAnyElementExtends<EachOfUnion<A>, E>

function getF(a: MayNum, b: MayNum) {
	return (typeof a === 'bigint' || typeof a === 'string' || typeof b === 'bigint' || typeof b === 'string' ? BigInt : Number) as (n: MayNum) => number
}

export type Added<A extends MayNum, B extends MayNum> = SntAosNum<0, A, B, AnyExtends<A | B, bigint | string> extends true ? bigint : number>
export function add<A extends MayNum, B extends MayNum>(a: A, b: B) {
	const f = getF(a, b);
	return f(a) + f(b) as Added<A, B>
}

export type Subed<A extends MayNum, B extends MayNum> = SntAosNum<9, A, B, AnyExtends<A | B, bigint | string> extends true ? bigint : number>
export function sub<A extends MayNum, B extends MayNum>(a: A, b: B) {
	const f = getF(a, b);
	return f(a) - f(b) as Subed<A, B>
}
