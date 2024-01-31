/**
 * 模板字符串相关
 * @version 1.0.0
 * @license MIT
 */
declare module './template';

import { Templateable } from './static';

/**获取模板字符串里的特定类型 */
export type TemplatedOf<T extends Templateable, S extends Templateable> = `${S}` extends `${infer N extends T}` ? N : never;

/**获取模板字符串中的数字 */
export type NumberOf<S extends Templateable> = TemplatedOf<number, S>;

/**获取模板字符串中的大数字 */
export type BigintOf<S extends Templateable> = TemplatedOf<bigint, S>;

/**获取模板字符串中的布尔值 */
export type BooleanOf<S extends Templateable> = TemplatedOf<boolean, S>;
