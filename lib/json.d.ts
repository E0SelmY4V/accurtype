import { SigNumber, NumOfStr, WideNum } from './base'
export { }
export type JsonBaseType = `"${any}"` | `${SigNumber}${any}` | 'true' | 'false' | 'null' | `{${any}}` | `[${any}]`
export type Mixed<A, B> = { [p in keyof A | keyof B]: p extends keyof B ? B[p] : p extends keyof A ? A[p] : never }
type ArrayFSS<N extends string> = N extends `${infer E extends JsonBaseType},${infer S}`
	? [ParsedJson<E>, ...ArrayFSS<S>] : N extends '' ? [] : [ParsedJson<N>]
type ObjectFSS<N extends string> = N extends `"${infer K}":${infer D extends JsonBaseType},${infer S}`
	? Mixed<{ [p in K]: ParsedJson<D> }, ObjectFSS<S>> : N extends `"${infer K}":${infer D}` ? { [p in K]: ParsedJson<D> }
	: {}
export type ParsedJson<N> = N extends `"${infer K}"` ? `${K}` :
	N extends `${SigNumber}${any}` ? NumOfStr<N, WideNum> :
	N extends 'true' ? true :
	N extends 'false' ? false :
	N extends 'null' ? null :
	N extends `[${infer K}]` ? ArrayFSS<K> :
	N extends `{${infer K}}` ? ObjectFSS<K> :
	void
