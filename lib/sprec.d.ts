import { Tostrable, WideNum } from './base'
type Spaceless<N extends string> = Replaced<N, ' ', ''>;
type Leading0less<N extends string> = N extends `0${infer K}` ? K extends '' ? N : Leading0less<K> : N
type RevString<N extends string> = N extends `${infer K}${infer S}` ? `${RevString<S>}${K}` : N
type Replaced<N extends string, F extends Tostrable, T extends Tostrable> = N extends `${infer Q}${F}${infer H}` ? `${Q}${T}${Replaced<H, F, T>}` : N
