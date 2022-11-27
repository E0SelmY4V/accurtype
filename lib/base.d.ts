export { }
export type SigNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
export type WideNum = number | bigint
export type ArrayAccur = [any, ...any[]] | any[]
export type Tostrable = string | number | WideNum
export type NumOfStr<N extends string, T extends Tostrable = WideNum> = N extends `${infer K extends T}` ? K : T
