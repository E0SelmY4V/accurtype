import {
	WideNum,
	TypeOf,
	TostrableType,
	Not,
	And,
	TypeAnd,
	WideNumType,
	TypeName,
} from '..'

type IsType<N, T extends TypeName, K = true> = TypeOf<N> extends T ? K : false

type IsWideNum<N, K = true> = IsType<N, WideNumType, K>
type IsWideWideNum<N> = IsWideNum<N, number extends N ? true : bigint extends N ? true : false>
type IsLtdWideNum<N> = IsWideNum<N, Not<IsWideWideNum<N>>>

type IsBoolean<N, K = true> = IsType<N, 'boolean', K>
type IsWideBoolean<N> = IsBoolean<N, boolean extends N ? true : false>
type IsLtdBoolean<N> = IsBoolean<N, boolean extends N ? false : true>

type IsString<N, K = true> = IsType<N, 'string', K>
type IsWideString<N> = IsString<N, string extends N ? true : N extends `${infer N0}${infer N1}` ? (
	N0 extends `${infer H extends WideNum}` ? IsWideWideNum<H> extends true ? true : IsWideString<N1> :
	string extends N0 ? true : IsWideString<N1>
) : false>
type IsLtdString<N> = IsString<N, Not<IsWideString<N>>>

type IsArray<N, K extends boolean = true> = TypeAnd<N extends any[] ? K : false>
type IsWideArray<N> = TypeAnd<N extends (infer T)[] ? T[] extends N ? true : false : false>
type IsLongArray<N> = IsArray<N, IsWideArray<N> extends true ? true : N extends [any, ...infer K] ? IsLongArray<K> : N extends [] ? false : true>
type ArrayLtdSplited<A extends any[], R extends [any[], any[]] = [[], []]> = A extends [infer K, ...infer L] ? ArrayLtdSplited<L, [[...R[0], K], R[1]]> : A extends [...infer L, infer K] ? ArrayLtdSplited<L, [R[0], [K, ...R[1]]]> : [R[0], A, R[1]]
type ArrayLtdCombed<A extends any[]> = ArrayLtdSplited<A> extends [infer A0 extends any[], infer A1, infer A2 extends any[]] ? [...A0, ...(A1 extends [] ? [] : [A1 extends (infer S)[] ? S : any]), ...A2] : []

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
type IsLtdObject<N> = TypeOf<N> extends 'object' ? And<IsLtd<keyof N>, IsLtd<N[keyof N]>> : false
type IsWideObject<N> = IsObject<N, Not<IsLtdObject<N>>>

type IsArrayOfLtd<N> = IsLongArray<N> extends true ? N extends (infer K)[] ? IsLtd<K> : false : N extends [infer N0, ...infer N1 extends any[]] ? IsLtd<N0> extends true ? IsArrayOfLtd<N1> : false : true

type IsLtd<N> = TypeAnd<{
	never: true,
	null: true,
	undefined: true,
	void: true,
	unknown: false,
	boolean: true,
	symbol: IsLtdObject<N>,
	string: IsLtdString<N>,
	object: IsLtdObject<N>,
	number: IsLtdWideNum<N>,
	bigint: IsLtdWideNum<N>,
	function: IsLtdFunction<N>,
}[TypeOf<N>]>
