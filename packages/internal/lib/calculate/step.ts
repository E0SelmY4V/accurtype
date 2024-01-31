/**
 * 步进器
 * @version 1.0.1
 * @license MIT
 */
declare module './step';
const Test = true; Test;

import { Digit, NumberOf } from '@accurtype/base';
import { ReversedString, Zeroless } from '../common';
import { Direction } from './base';

type SigVary<D, N extends Digit> = (D extends 0
	? [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
	: [9, 0, 1, 2, 3, 4, 5, 6, 7, 8]
)[N];
type SteppedString<
	D extends Direction,
	N extends string,
	B extends string = '',
	E extends Direction = Exclude<Direction, D>>
	= (N extends `${E}${infer N}`
		? SteppedString<D, N, `${B}${D}`>
		: (
			N extends `${infer S extends Digit}${infer N}`
			? `${B}${SigVary<D, S>}${N}`
			: `${B}${N}`
		)
	);
export type Stepped<D extends Direction, N extends number> = NumberOf<ReversedString<Zeroless<SteppedString<D, ReversedString<`0${N}`>>>>>;

export type Decreased<N extends number> = Stepped<9, N>;
namespace Test {
	// $ExpectType 0
	export type EQ = Decreased<1>;
	// $ExpectType 4
	export type SZ = Decreased<5>;
	// $ExpectType 9
	export type GT = Decreased<10>;
	// $ExpectType 9999
	export type HU = Decreased<10000>;
	// $ExpectType 190379909999
	export type SD = Decreased<190379910000>;
}

export type Increased<N extends number> = Stepped<0, N>;
namespace Test {
	// $ExpectType 1
	export type AK = Increased<0>;
	// $ExpectType 2
	export type AS = Increased<1>;
	// $ExpectType 10000
	export type EZ = Increased<9999>;
	// $ExpectType 1023200
	export type FR = Increased<1023199>;
	// $ExpectType 918936199000
	export type HG = Increased<918936198999>;
}
