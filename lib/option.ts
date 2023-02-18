/**配置选项 */
declare namespace TypeOptions {
    /**递归相关 */
    namespace Iteration {
        /**{@link P|`P`} 的类型 */
        type PType = import('./tool').PType
        /**
         * 单层栈空间内的尾递归最大次数。属于 {@link PType|`PType`} 类型
         *
         * 本常量只用于 TS 的类型推断
         * @see {@link https://github.com/E0SelmY4V/accurtype/blob/master/doc/options/README.md#单层栈空间内尾递归最大次数 在线说明}
         */
        const P = 10
        /**
         * 最大尾递归栈数。属于 `bigint | number` 类型
         *
         * 本常量只用于 TS 的类型推断
         * @see {@link https://github.com/E0SelmY4V/accurtype/blob/master/doc/options/README.md#最大尾递归栈数 在线说明}
         */
        const L = 7
    }
}
