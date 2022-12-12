import {
	WideNum,
	TypeOf,
	TostrableType,
	Not,
} from '..'

type IsWideWideNum<N> = N extends WideNum ? number extends N ? true : bigint extends N ? true : false : false
type IsLtdWideNum<N> = N extends WideNum ? Not<IsWideWideNum<N>> : false

type IsWideBoolean<N> = TypeOf<N> extends 'boolean' ? boolean extends N ? true : false : false
type IsLtdBoolean<N> = TypeOf<N> extends 'boolean' ? boolean extends N ? false : true : false

type IsWideString<N> = N extends string ? string extends N ? true : N extends `${infer N0}${infer N1}` ? (
	N0 extends `${infer H extends WideNum}` ? IsWideWideNum<H> extends true ? true : IsWideString<N1> :
	string extends N0 ? true : IsWideString<N1>
) : false : false
type IsLtdString<N> = N extends string ? Not<IsWideString<N>> : false

type IsWideArray<N> = N extends (infer T)[] ? T[] extends N ? true : false : false
type IsLongArray<N> = N extends any[] ? IsWideArray<N> extends true ? true : N extends [any, ...infer K] ? IsLongArray<K> : N extends [] ? false : true : false

type IsWideTostrable<N> = TypeOf<N> extends TostrableType ? (
	IsWideBoolean<N> extends true ? true :
	IsWideWideNum<N> extends true ? true :
	IsWideString<N>
) : false
type IsLtdTostrable<N> = TypeOf<N> extends TostrableType ? Not<IsWideTostrable<N>> : false
