/**
 * *精准类型* 配置选项
 */
declare module './option'
export default TypeOptions

import type {
	PType,
} from './tool/check'

declare namespace TypeOptions {

	/**递归相关 */
	export namespace Iteration {

		/**
		 * 单层栈空间内的尾递归最大次数。属于 {@link PType|`PType`} 类型
		 *
		 * 本常量只用于 TS 的类型推断
		 * @see {@link https://github.com/E0SelmY4V/accurtype/blob/master/doc/options/README.md#单层栈空间内尾递归最大次数 查看在线说明}
		 */
		export const P = 10

		/**
		 * 最大尾递归栈数。属于 `bigint | number` 类型
		 *
		 * 本常量只用于 TS 的类型推断
		 * @see {@link https://github.com/E0SelmY4V/accurtype/blob/master/doc/options/README.md#最大尾递归栈数 查看在线说明}
		 */
		export const L = 3

	}

}
