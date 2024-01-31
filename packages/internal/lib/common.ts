/**
 * 内部通用工具
 * @version 1.0.0
 * @license MIT
 */
declare module './common';

export type ReversedString<
	T extends string,
	R extends string = ''>
	= (T extends `${infer N}${infer B}`
		? ReversedString<B, `${N}${R}`>
		: R
	);

export type Zeroless<
	T extends string>
	= (T extends `${infer N}0`
		? Zeroless<N>
		: T extends '' ? '0' : T
	);

