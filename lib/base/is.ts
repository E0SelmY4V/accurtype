import {
	TypeOf,
	TostrableType,
	Not,
	And,
	TypeAnd,
	WideNumType,
	TypeName,
	ObjectKey,
	IfredArr,
} from '..'
import {
	IsWideString,
	ArrayLtdSplited,
} from '../tool'

export type IsType<N, T extends TypeName, K = true> = TypeOf<N> extends T ? K : false

export type IsWideNum<N, K = true> = IsType<N, WideNumType, K>
export type IsWideWideNum<N> = IsWideNum<N, number extends N ? true : bigint extends N ? true : false>
export type IsLtdWideNum<N> = IsWideNum<N, Not<IsWideWideNum<N>>>

export type IsBoolean<N, K = true> = IsType<N, 'boolean', K>
export type IsWideBoolean<N> = IsBoolean<N, boolean extends N ? true : false>
export type IsLtdBoolean<N> = IsBoolean<N, boolean extends N ? false : true>

export type IsString<N, K = true> = IsType<N, 'string', K>
export type IsWideString<N> = IsString<N, IsWideString.Main<N>>
export type IsLtdString<N> = IsString<N, Not<IsWideString.Main<N>>>

export type IsArray<N, K extends boolean = true> = TypeAnd<N extends readonly any[] ? K : false>
export type IsWideArray<N> = TypeAnd<N extends readonly (infer T)[] ? T[] extends N ? true : false : false>
export type IsLongArray<N> = N extends readonly any[] ? number extends N['length'] ? true : false : false
export type ArrayLtdSplited<A> = ArrayLtdSplited.Main<A>
export type ArrayLtdCombed<A extends readonly any[]> = ArrayLtdSplited<A> extends ALRslt<infer A0, infer A1, infer A2> ? [...A0, ...(A1 extends [] ? [] : [IfredArr<A1>]), ...A2] : []
export type ALRslt<A extends any[], B extends any[], C extends any[]> = [A, B, C]

export type IsTostrable<N, K = true> = IsType<N, TostrableType, K>
export type IsWideTostrable<N> = IsTostrable<N,
	IsWideBoolean<N> extends true ? true :
	IsWideWideNum<N> extends true ? true :
	IsWideString<N>>
export type IsLtdTostrable<N> = IsTostrable<N, Not<IsWideTostrable<N>>>

export type IsFunction<N, K = true> = IsType<N, 'function', K>
export type IsLtdFunction<N> = IsFunction<N, N extends (...args: infer P) => infer R ? And<IsArrayOfLtd<P>, IsLtd<R>> : false>
export type IsWideFunction<N> = IsFunction<N, Not<IsLtdFunction<N>>>

export type IsObject<N, K = true> = IsType<N, 'object', K>
export type IsLtdObject<N> = TypeOf<N> extends 'object' ? [keyof N] extends [never] ? true : And<IsLtd<keyof N>, IsLtd<N[keyof N]>> : false
export type IsWideObject<N> = IsObject<N, Not<IsLtdObject<N>>>
export type IsDefedObject<N, P = null | void> = { [x: ObjectKey]: false } & { [I in keyof N]-?: N extends { [X in I]-?: N[I] } ? N[I] extends P ? false : true : boolean }

export type IsArrayOfLtd<N> = IsLongArray<N> extends true ? N extends readonly (infer K)[] ? IsLtd<K> : false : N extends readonly [infer N0, ...infer N1] ? IsLtd<N0> extends true ? IsArrayOfLtd<N1> : false : true

export type IsLtd<N, T = TypeOf<N>> = TypeAnd<
	T extends 'never' ? true :
	T extends 'null' ? true :
	T extends 'undefined' ? true :
	T extends 'void' ? true :
	T extends 'unknown' ? false :
	T extends 'boolean' ? true :
	T extends 'symbol' ? IsLtdObject<N> :
	T extends 'string' ? IsLtdString<N> :
	T extends 'object' ? IsLtdObject<N> :
	T extends 'number' ? IsLtdWideNum<N> :
	T extends 'bigint' ? IsLtdWideNum<N> :
	T extends 'function' ? IsLtdFunction<N> :
	false
>
