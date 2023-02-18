import type {
	IsWideBoolean,
} from '..'

export type Not<N extends boolean> = N extends true ? false : true
export function not<N extends boolean>(n: N) {
	return !n as Not<N>
}

export type And<A extends boolean, B extends boolean> = A extends true ? B extends true ? true : false : false
export type TypeAnd<N extends boolean> = IsWideBoolean<N> extends true ? false : N
export function and<A extends boolean, B extends boolean>(a: A, b: B) {
	return (a && b) as And<A, B>
}

export type Or<A extends boolean, B extends boolean> = A extends false ? B extends false ? false : true : true
export type TypeOr<N extends boolean> = IsWideBoolean<N> extends true ? true : N
export function or<A extends boolean, B extends boolean>(a: A, b: B) {
	return (a || b) as Or<A, B>
}

export type Nand<A extends boolean, B extends boolean> = Not<And<A, B>>
export type TypeNand<N extends boolean> = Not<TypeAnd<N>>
export function nand<A extends boolean, B extends boolean>(a: A, b: B) {
	return !(a && b) as Nand<A, B>
}

export type Nor<A extends boolean, B extends boolean> = Not<Or<A, B>>
export type TypeNor<N extends boolean> = Not<TypeOr<N>>
export function nor<A extends boolean, B extends boolean>(a: A, b: B) {
	return !(a || b) as Nor<A, B>
}

export type Xor<A extends boolean, B extends boolean> = And<Nand<A, B>, Or<A, B>>
export type TypeXor<N extends boolean> = IsWideBoolean<N>
export function xor<A extends boolean, B extends boolean>(a: A, b: B) {
	return ((a || b) && !(a && b)) as Xor<A, B>
}

export type Xnor<A extends boolean, B extends boolean> = Not<Xor<A, B>>
export type TypeXnor<N extends boolean> = Not<TypeXor<N>>
export function xnor<A extends boolean, B extends boolean>(a: A, b: B) {
	return ((a && b) || !(a || b)) as Xnor<A, B>
}
