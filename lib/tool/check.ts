import TypeOptions from '../option'

export type SigNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
export type WideNum = number | bigint
export type Tostrable = string | boolean | WideNum | null | undefined
export type NumOfStr<N extends string, T extends Tostrable = WideNum> = N extends `${infer K extends T}` ? K : T
export type PType = NumOfStr<`${Exclude<SigNumber, 0>}${'' | '0' | '00'}`>

export namespace Iteration {
	/**若报错，则 {@link TypeOptions.Iteration.P|`Iteration.P`} 的类型不合法 */
	export const P: PType = TypeOptions.Iteration.P

	/**若报错，则 {@link TypeOptions.Iteration.L|`Iteration.L`} 的类型不合法 */
	export const L: WideNum = TypeOptions.Iteration.L
}