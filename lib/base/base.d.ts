import {
	TypeOf,
	IsWideWideNum,
	IsWideString,
	TypeMap,
	TypeNameObj,
	AllTypeJS,
} from '..'

type SigNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

type ObjectKey = keyof any

declare function toTypeNameObj<A extends string[]>(...n: A): A extends (infer K extends string)[] ? { [I in K]: 1 } : {}

type WideNum = number | bigint
type WideNumType = TypeOf<WideNum>
declare const WIDE_NUM_TYPE: TypeNameObj<WideNumType>
declare function isWideNum(n: any): n is WideNum

type ArrayAccur<T = any> = readonly [T, ...T[]] | readonly T[]
type ObjectAccur<T = any> = { [n: ObjectKey]: T }
type FunctionAccur<T = any> = (...args: ArrayAccur<T>) => T
type Accur<T = any> = AllTypeJS | ArrayAccur<T> | ObjectAccur<T> | FunctionAccur<T>

type Tostrable = string | boolean | WideNum | null | undefined
type TostrableType = TypeOf<Tostrable>
declare const TOSTRABLE_TYPE: TypeNameObj<TostrableType>
declare function isTostrable(n: any): n is Tostrable

type NumOfStr<N extends string, T extends Tostrable = WideNum> = N extends `${infer K extends T}` ? K : T
declare function str2num<N extends string, T extends TostrableType = 'number'>(str: N, to?: T | TostrableType): NumOfStr<N, TypeMap[T]>

type BoolOfNum<N extends WideNum> = IsWideWideNum<N> extends true ? boolean : N extends 0 | 0n ? false : true
declare function num2bool<N extends WideNum>(n: N): BoolOfNum<N>

type CnvedNum<N extends WideNum, T extends WideNum> = NumOfStr<`${N}`, T>
declare function cnvNum<N extends WideNum, T extends WideNumType = 'number'>(num: N, to?: T | WideNumType): CnvedNum<N, TypeMap[T]>

type NumOfBool<N extends boolean, T extends WideNum = number> = CnvedNum<N extends false ? 0 : 1, T>
declare function bool2num<N extends boolean, T extends WideNumType = 'number'>(n: N, to?: T | WideNumType): NumOfBool<N, TypeMap[T]>

type BoolOfTostrable<N extends Tostrable> =
	N extends string ? IsWideString<N> extends true ? boolean : N extends '' ? false : true :
	N extends WideNum ? IsWideWideNum<N> extends true ? boolean : N extends 0 | 0n ? false : true :
	N extends boolean ? N : false
declare function tostrable2bool<N extends Tostrable>(n: N): BoolOfTostrable<N>

type Poped<A extends readonly any[]> = A extends readonly [...infer H, any] ? H : A
type Pushed<N, A extends readonly any[]> = [...A, N]
type Shifted<A extends readonly any[]> = A extends readonly [any, ...infer H] ? H : A
type Unshifted<N, A extends readonly any[]> = [N, ...A]

type IfredArr<A, B = any> = A extends readonly (infer K)[] ? K : B
type IfredObj<A, B = any> = { [x: ObjectKey]: B } & { [I in keyof A]: A[I] extends null | void ? B : A[I] }

type SemiRequired<T, K extends ObjectKey, B extends 0 | 1 = 1> = { [I in K & keyof T]-?: B extends 1 ? T[I] & {} : T[I] } & Omit<T, K>
type SemiUnrequired<T, K extends ObjectKey, B extends 0 | 1 = 1> = SemiRequired<T, Exclude<keyof T, K>, B>
type SemiPartial<T, K extends ObjectKey> = { [I in K & keyof T]?: T[I] } & Omit<T, K>
type SemiUnpartial<T, K extends ObjectKey> = SemiPartial<T, Exclude<keyof T, K>>

type EqualTo<A, B> = (<F>() => F extends A ? 1 : 0) extends <F>() => F extends B ? 1 : 0 ? true : false

type InterOfUnion<N> = (N extends N ? (n: N) => 0 : 0) extends (n: infer K) => 0 ? K : 0
type OneOfUnion<N> = InterOfUnion<N extends N ? () => N : 0> extends () => infer K ? K : N
type EachOfUnion<N, R extends any[] = []> = [N] extends [never] ? R : OneOfUnion<N> extends infer K ? EachOfUnion<Exclude<N, K>, [...R, K]> : 0

type MayNum = WideNum | string
