export { }
export type SigNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
export type WideNum = number | bigint
export type ArrayAccur = [any, ...any[]] | any[]
export type Tostrable = string | number | WideNum

export type Spaceless<N extends string> = N extends `${infer H} ${infer K}` ? `${H}${Spaceless<K>}` : N
export type Leading0less<N extends string> = N extends `0${infer K}` ? K extends '' ? N : Leading0less<K> : N
export type RevString<N extends string> = N extends `${infer K}${infer S}` ? `${RevString<S>}${K}` : N
export type Replaced<N extends string, F extends Tostrable, T extends Tostrable> = N extends `${infer Q}${F}${infer H}` ? `${Q}${T}${Replaced<H, F, T>}` : N
export type NumOfStr<N extends string, T extends Tostrable = WideNum> = N extends `${infer K extends T}` ? K : T
