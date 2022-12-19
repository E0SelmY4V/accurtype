export {
	Transposed,
} from './tool'

// declare const o: [
// 	number[],
// 	string[],
// 	...
// 	number[][]
// ]
// declare const i: Transposed<typeof o>
// declare const j: [number | undefined, string | undefined, ...(number | undefined)[]]
// declare const t: (typeof i) extends (typeof j) ? (typeof j) extends (typeof i) ? 1 : 0 : 0
// declare const b: [
// 	[0, 2, 3, 0.1],
// 	[0.1, 2.1, 5 | 6, 0.2],
// 	[0.2, 2.2, 5 | 6 | undefined, 0.3]
// ]
// declare const d: [
// 	[0, 2, 3 | 0.1, ...(3 | 0.1 | undefined)[]],
// 	[0.1, 2.1, 5 | 6 | 0.2, ...(5 | 6 | 0.2 | undefined)[]],
// 	[0.2, 2.2, 5 | 6 | 0.3 | undefined, ...(5 | 6 | 0.3 | undefined)[]]
// ]
// declare const f: LtdTrsed<[
// 	[0.1, 0.2, 0.3,],
// 	[2.1, ...2.2[], 2.3,],
// ]>
// // type test<T, B extends any[], C extends number, M extends number = LenOfArr<B>> =
// declare const q: MultiedTail<3, [0.1, 2.2 | 2.3]>
// declare const e: [
// 	[0, 2, ...3[]],
// 	[0.1, 2.1, ...(5 | 6)[]],
// 	[0.2, 2.2, ...(5 | 6 | 7)[]],
// 	...
// 	[undefined, undefined, ...(5 | 6 | 7 | undefined)[]][]
// ]
