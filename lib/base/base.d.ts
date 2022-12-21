import {
	TypeOf,
	IsWideWideNum,
	IsWideString,
	TypeMap,
	TypeNameObj,
	AllTypeJS,
} from '..'

type SigNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

type ObjectKey = string | number | symbol

declare function toTypeNameObj<A extends string[]>(...n: A): A extends (infer K extends string)[] ? { [I in K]: 1 } : {}

type WideNum = number | bigint
type WideNumType = TypeOf<WideNum>
declare const WIDE_NUM_TYPE: TypeNameObj<WideNumType>
declare function isWideNum(n: any): n is WideNum

type ArrayAccur<T = any> = [T, ...T[]] | T[]
type ObjectAccur<T = any> = { [n: ObjectKey]: T }
type FunctionAccur<T = any> = (...args: any[]) => T
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

type Poped<A extends any[]> = A extends [...infer H, any] ? H : A
type Pushed<N, A extends any[]> = [...A, N]
type Shifted<A extends any[]> = A extends [any, ...infer H] ? H : A
type Unshifted<N, A extends any[]> = [N, ...A]

type IfredArr<A extends any[], B = any> = A extends (infer K)[] ? K : B
