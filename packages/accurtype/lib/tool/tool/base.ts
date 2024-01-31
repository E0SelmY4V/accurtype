export type JP<N> = N extends Tostrable ? `${N}` : string
export type Ad<A extends N, B extends N, N extends Tostrable = Tostrable> = `${A}${B}`
export type AnyArr<T = any> = readonly T[]
export type YsIni<N> = N extends string ? '' : N extends number ? 0 : N extends AnyArr ? [] : N extends bigint ? 0n : N
export type Ys<N, A, I = YsIni<N>> = A extends N ? A : I
export type Ex<I extends N, N = any> = I
export type En<I extends N, N = any, E = never> = I extends E ? never : I
export type SigNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
export type WideNum = number | bigint
export type Tostrable = string | boolean | WideNum | null | undefined
export type NumOfStr<N extends string, T extends Tostrable = WideNum> = N extends `${infer K extends T}` ? K : T
export type PType = NumOfStr<`${Exclude<SigNumber, 0>}${'' | '0' | '00'}`>
