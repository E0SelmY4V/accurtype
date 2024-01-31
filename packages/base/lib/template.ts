/**
 * 模板字符串相关
 * @version 1.0.1
 * @license MIT
 */
declare module './template';
const Test = true; Test;

import { Templateable } from './static';

/**获取模板字符串里的特定类型 */
export type TemplatedOf<T extends Templateable, S extends Templateable> = `${S}` extends `${infer N extends T}` ? N : never;
/**获取模板字符串中的数字 */
export type NumberOf<S extends Templateable> = TemplatedOf<number, S>;
/**获取模板字符串中的大数字 */
export type BigintOf<S extends Templateable> = TemplatedOf<bigint, S>;
/**获取模板字符串中的布尔值 */
export type BooleanOf<S extends Templateable> = TemplatedOf<boolean, S>;
namespace Test {
	// $ExpectType false
	export type AC = TemplatedOf<boolean, 'false'>;
	// $ExpectType null
	export type BA = TemplatedOf<null, 'null'>;
	// $ExpectType 123n
	export type AA = BigintOf<'123'>;
	// $ExpectType never
	export type AO = BigintOf<'0123'>;
	// $ExpectType number
	export type AZ = NumberOf<'0123'>;
}
