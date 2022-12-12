import {
	TypeOf,
	IsWideWideNum,
	IsWideString,
	TypeMap,
} from '..'

type SigNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

type WideNum = number | bigint
type WideNumType = TypeOf<WideNum>

type ArrayAccur<T = any> = [T, ...T[]] | T[]

type Tostrable = string | boolean | WideNum | null | undefined
type TostrableType = TypeOf<Tostrable>
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