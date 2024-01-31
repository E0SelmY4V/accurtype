/**
 * 复杂类型
 * @version 1.0.0
 * @license MIT
 */
declare module './complex';
const Test = true; Test;

import { Digit } from './static';

/**断言为单个数字 */
export type Digitify<T> = Extract<T, Digit>;
namespace Test {
	// $ExpectType 1
	export type AS = Digitify<1 | 91 | [1, 2]>;
	// $ExpectType never
	export type GS = Digitify<91 | 'asd' | { a: 123; }>;
}
