import {
} from '..'

type SigNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
type WideNum = number | bigint
type ArrayAccur = [any, ...any[]] | any[]
type Tostrable = string | number | WideNum
type NumOfStr<N extends string, T extends Tostrable = WideNum> = N extends `${infer K extends T}` ? K : T
