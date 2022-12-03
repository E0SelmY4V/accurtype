import { Tostrable, WideNum } from './base'

type Spaceless<N extends string> = Replaced<N, ' ', ''>;
declare function removeSpace<N extends string>(str: N): Spaceless<N>

type Leading0less<N extends string> = N extends `0${infer K}` ? K extends '' ? N : Leading0less<K> : N
declare function removeLeading0<N extends string>(str: N): Leading0less<N>

type StringReved<N extends string> = N extends `${infer K}${infer S}` ? `${StringReved<S>}${K}` : N
declare function revString<N extends string>(str: N): StringReved<N>;

type Replaced<N extends string, F extends Tostrable, T extends Tostrable> = N extends `${infer Q}${F}${infer H}` ? `${Q}${T}${Replaced<H, F, T>}` : N
declare function replace<N extends string, F extends Tostrable, T extends Tostrable>(str: N, findStr: F, withStr: T): Replaced<N, F, T>
