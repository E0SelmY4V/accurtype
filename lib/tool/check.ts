/// <reference path="../option.ts" />
import type {
	PType,
	WideNum,
} from '.'

namespace Check {
	export namespace Iteration {
		/**若报错，则 {@link TypeOptions.Iteration.P|`Iteration.P`} 的类型不合法 */
		export const P: PType = TypeOptions.Iteration.P

		/**若报错，则 {@link TypeOptions.Iteration.L|`Iteration.L`} 的类型不合法 */
		export const L: WideNum = TypeOptions.Iteration.L
	}
}

export default Check
