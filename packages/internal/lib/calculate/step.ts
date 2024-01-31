/**
 * 步进器
 * @version 1.0.0
 * @license MIT
 */
declare module './step';

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
export type Stepped<D extends Direction, N extends number> = NumberOf<ReversedString<Zeroless<SteppedString<D, ReversedString<`${N}`>>>>>;;
export type Decreased<N extends number> = Stepped<9, N>;
export type Increased<N extends number> = Stepped<0, N>;

