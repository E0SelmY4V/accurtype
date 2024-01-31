/**
 * 静态类型
 * @version 1.0.1
 * @license MIT
 */
declare module './static';
const Test = true; Test;

/**单独的数字 */
export type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

/**可放在模板字符串里的类型 */
export type Templateable = string | number | bigint | boolean | null | undefined;
namespace Test {
	// $ExpectType string
	export type A = `${Templateable}`;
}
