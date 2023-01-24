import {
	WideNum,
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
} from './tool'

type IsType<N, T extends TypeName, K = true> = TypeOf<N> extends T ? K : false

type IsWideNum<N, K = true> = IsType<N, WideNumType, K>
type IsWideWideNum<N> = IsWideNum<N, number extends N ? true : bigint extends N ? true : false>
type IsLtdWideNum<N> = IsWideNum<N, Not<IsWideWideNum<N>>>

type IsBoolean<N, K = true> = IsType<N, 'boolean', K>
type IsWideBoolean<N> = IsBoolean<N, boolean extends N ? true : false>
type IsLtdBoolean<N> = IsBoolean<N, boolean extends N ? false : true>

type IsString<N, K = true> = IsType<N, 'string', K>
type IsWideString<N> = IsString<N, IsWideString.P2<N>>
type IsLtdString<N> = IsString<N, Not<IsWideString.P2<N>>>

type IsArray<N, K extends boolean = true> = TypeAnd<N extends readonly any[] ? K : false>
type IsWideArray<N> = TypeAnd<N extends readonly (infer T)[] ? T[] extends N ? true : false : false>
type IsLongArray<N> = N extends readonly any[] ? number extends N['length'] ? true : false : false
type ArrayLtdSplited<A> = ArrayLtdSplited.S<A>
type ArrayLtdCombed<A extends readonly any[]> = ArrayLtdSplited<A> extends ALRslt<infer A0, infer A1, infer A2> ? [...A0, ...(A1 extends [] ? [] : [IfredArr<A1>]), ...A2] : []
type ALRslt<A extends any[], B extends any[], C extends any[]> = [A, B, C]


type IsTostrable<N, K = true> = IsType<N, TostrableType, K>
type IsWideTostrable<N> = IsTostrable<N,
	IsWideBoolean<N> extends true ? true :
	IsWideWideNum<N> extends true ? true :
	IsWideString<N>>
type IsLtdTostrable<N> = IsTostrable<N, Not<IsWideTostrable<N>>>

type IsFunction<N, K = true> = IsType<N, 'function', K>
type IsLtdFunction<N> = IsFunction<N, N extends (...args: infer P) => infer R ? And<IsArrayOfLtd<P>, IsLtd<R>> : false>
type IsWideFunction<N> = IsFunction<N, Not<IsLtdFunction<N>>>

type IsObject<N, K = true> = IsType<N, 'object', K>
type IsLtdObject<N> = TypeOf<N> extends 'object' ? [keyof N] extends [never] ? true : And<IsLtd<keyof N>, IsLtd<N[keyof N]>> : false
type IsWideObject<N> = IsObject<N, Not<IsLtdObject<N>>>
type IsDefedObject<N, P = null | void> = { [x: ObjectKey]: false } & { [I in keyof N]-?: N extends { [X in I]-?: N[I] } ? N[I] extends P ? false : true : boolean }

type IsArrayOfLtd<N> = IsLongArray<N> extends true ? N extends readonly (infer K)[] ? IsLtd<K> : false : N extends readonly [infer N0, ...infer N1] ? IsLtd<N0> extends true ? IsArrayOfLtd<N1> : false : true

type IsLtd<N, T = TypeOf<N>> = TypeAnd<
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
