import {
	TypeOf,
	IsWideWideNum,
	IsWideString,
	TypeMap,
	TypeNameObj,
	AllTypeJS,
} from '..'

export type SigNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

export type ObjectKey = keyof any

export function toTypeNameObj<T extends string>(...n: T[]) {
	return ((n as any[]).push({}), (n as any[]).reduceRight((p, n) => (p[n] = 1, p))) as { [I in T]: 1 }
}

export type WideNum = number | bigint
export type WideNumType = TypeOf<WideNum>
export const WIDE_NUM_TYPE = toTypeNameObj('bigint', 'number')
export function isWideNum(n: any): n is WideNum {
	return typeof n === 'bigint' || typeof n === 'number'
}

export type ArrayAccur<T = any> = readonly [T, ...T[]] | readonly T[]
export type ObjectAccur<T = any> = { [n: ObjectKey]: T }
export type FunctionAccur<T = any> = (...args: ArrayAccur<T>) => T
export type Accur<T = any> = AllTypeJS | ArrayAccur<T> | ObjectAccur<T> | FunctionAccur<T>

export type Tostrable = string | boolean | WideNum | null | undefined
export type TostrableType = TypeOf<Tostrable>
export const TOSTRABLE_TYPE = toTypeNameObj('string', 'boolean', 'bigint', 'number', 'null', 'undefined')
export function isTostrable(n: any): n is Tostrable {
	switch (typeof n) {
		case 'function': case 'symbol': return false
		case 'object': return n === null
		default: return true
	}
}

export type NumOfStr<N extends string, T extends Tostrable = WideNum> = N extends `${infer K extends T}` ? K : T
export function str2num<N extends string, T extends TostrableType = 'number'>(str: N, to: T | TostrableType = 'number') {
	return (() => {
		switch (to) {
			case 'string': return str
			case 'number': return str.indexOf('.') === -1 ? parseInt(str) : parseFloat(str)
			case 'bigint': return BigInt(str)
			case 'boolean': return str === 'true' ? true : false
			case 'undefined': return void 0
			default: return null
		}
	})() as NumOfStr<N, TypeMap[T]>
}

export type BoolOfNum<N extends WideNum> = IsWideWideNum<N> extends true ? boolean : N extends 0 | 0n ? false : true
export function num2bool<N extends WideNum>(n: N) {
	return !!n as BoolOfNum<N>
}

export type CnvedNum<N extends WideNum, T extends WideNum> = NumOfStr<`${N}`, T>
export function cnvNum<N extends WideNum, T extends WideNumType = 'number'>(num: N, to: T | WideNumType = 'number') {
	return (to === 'number' ? parseInt : BigInt)(`${num}`) as CnvedNum<N, TypeMap[T]>
}

export type NumOfBool<N extends boolean, T extends WideNum = number> = CnvedNum<N extends false ? 0 : 1, T>
export function bool2num<N extends boolean, T extends WideNumType = 'number'>(n: N, to: T | WideNumType = 'number') {
	return (to === 'number' ? Number(n) : n ? 1n : 0n) as NumOfBool<N, TypeMap[T]>
}

export type BoolOfTostrable<N extends Tostrable> =
	N extends string ? IsWideString<N> extends true ? boolean : N extends '' ? false : true :
	N extends WideNum ? IsWideWideNum<N> extends true ? boolean : N extends 0 | 0n ? false : true :
	N extends boolean ? N : false
export function tostrable2bool<N extends Tostrable>(n: N) {
	return !!n as BoolOfTostrable<N>
}

export type Poped<A extends readonly any[]> = A extends readonly [...infer H, any] ? H : A
export type Pushed<N, A extends readonly any[]> = [...A, N]
export type Shifted<A extends readonly any[]> = A extends readonly [any, ...infer H] ? H : A
export type Unshifted<N, A extends readonly any[]> = [N, ...A]

export type IfredArr<A, B = any> = A extends readonly (infer K)[] ? K : B
export type IfredObj<A, B = any> = { [x: ObjectKey]: B } & { [I in keyof A]: A[I] extends null | void ? B : A[I] }

export type SemiRequired<T, K extends ObjectKey, B extends 0 | 1 = 1> = { [I in K & keyof T]-?: B extends 1 ? T[I] & {} : T[I] } & Omit<T, K>
export type SemiUnrequired<T, K extends ObjectKey, B extends 0 | 1 = 1> = SemiRequired<T, Exclude<keyof T, K>, B>
export type SemiPartial<T, K extends ObjectKey> = { [I in K & keyof T]?: T[I] } & Omit<T, K>
export type SemiUnpartial<T, K extends ObjectKey> = SemiPartial<T, Exclude<keyof T, K>>

export type EqualTo<A, B> = (<F>() => F extends A ? 1 : 0) extends <F>() => F extends B ? 1 : 0 ? true : false

export type InterOfUnion<N> = (N extends N ? (n: N) => 0 : 0) extends (n: infer K) => 0 ? K : never
export type OneOfUnion<N> = InterOfUnion<N extends N ? () => N : 0> extends () => infer K ? K : N
export type EachOfUnion<N, R extends any[] = []> = [N] extends [never] ? R : OneOfUnion<N> extends infer K ? EachOfUnion<Exclude<N, K>, [...R, K]> : []

export type MayNum = WideNum | string
