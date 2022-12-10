import {
	Tostrable,
	IsWideTostrable,
	ArrayAccur,
} from '..'

type Spaceless<N extends string> = Replaced<N, ' ', ''>;
declare function removeSpace<N extends string>(str: N): Spaceless<N>

type Leading0less<N extends string> = N extends `0${infer K}` ? K extends '' ? N : Leading0less<K> : N
declare function removeLeading0<N extends string>(str: N): Leading0less<N>

type StringReved<N extends string> = N extends `${infer K}${infer S}` ? `${StringReved<S>}${K}` : N
declare function revString<N extends string>(str: N): StringReved<N>;

type Replaced<N extends string, F extends Tostrable, T extends Tostrable> = N extends `${infer Q}${F}${infer H}` ? `${Q}${T}${Replaced<H, F, T>}` : N
declare function replace<N extends string, F extends Tostrable, T extends Tostrable>(str: N, findStr: F, withStr: T): Replaced<N, F, T>

type PostAligned<A extends string, B extends string, F extends Tostrable = ' '> = string extends A | B ? string : B extends `${any}${infer BT}` ? A extends `${infer AH}${infer AT}` ? `${AH}${PostAligned<AT, BT, F>}` : `${F}${PostAligned<A, BT, F>}` : A
declare function postAlign<A extends string, B extends string, F extends Tostrable = ''>(str: A, withStr: B, filler?: F): PostAligned<A, B, F>

type PreAligned<A extends string, B extends string, F extends Tostrable = ' ', E extends string = ''> = string extends A | B ? string : B extends `${any}${infer BT}` ? A extends `${infer AH}${infer AT}` ? PreAligned<AT, BT, F, `${E}${AH}`> : `${PostAligned<'', B, F>}${E}` : `${E}${A}`
declare function preAlign<A extends string, B extends string, F extends Tostrable = ''>(str: A, withStr: B, filler?: F): PreAligned<A, B, F>

type Splited<N extends string, F extends Tostrable> = IsWideTostrable<F> extends true ? string[] : N extends `${infer N0}${F}${infer N1}` ? [N0, ...Splited<N1, F>] : string extends N ? string[] : [N]
declare function split<N extends string, F extends Tostrable>(str: N, separator: F): Splited<N, F>

type Joined<A extends string[], F extends Tostrable> = A extends [infer E0] ? `${E0}` : A extends [infer E0, ...infer A1] ? `${E0}${F}${Joined<A1, F>}` : string
declare function join<A extends ArrayAccur<B>, B extends string, F extends Tostrable>(array: A, separator: F): Joined<A, F>
