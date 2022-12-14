import {
	IsWideBoolean,
} from '..'

type Not<N extends boolean> = N extends true ? false : true
declare function not<N extends boolean>(n: N): Not<N>

type And<A extends boolean, B extends boolean> = A extends true ? B extends true ? true : false : false
type TypeAnd<N extends boolean> = IsWideBoolean<N> extends true ? false : N
declare function and<A extends boolean, B extends boolean>(a: A, b: B): And<A, B>

type Or<A extends boolean, B extends boolean> = A extends false ? B extends false ? false : true : true
type TypeOr<N extends boolean> = IsWideBoolean<N> extends true ? true : N
declare function or<A extends boolean, B extends boolean>(a: A, b: B): Or<A, B>

type Nand<A extends boolean, B extends boolean> = Not<And<A, B>>
type TypeNand<N extends boolean> = Not<TypeAnd<N>>
declare function nand<A extends boolean, B extends boolean>(a: A, b: B): Nand<A, B>

type Nor<A extends boolean, B extends boolean> = Not<Or<A, B>>
type TypeNor<N extends boolean> = Not<TypeOr<N>>
declare function nor<A extends boolean, B extends boolean>(a: A, b: B): Nor<A, B>

type Xor<A extends boolean, B extends boolean> = And<Nand<A, B>, Or<A, B>>
type TypeXor<N extends boolean> = IsWideBoolean<N>
declare function xor<A extends boolean, B extends boolean>(a: A, b: B): Xor<A, B>

type Xnor<A extends boolean, B extends boolean> = Not<Xor<A, B>>
type TypeXnor<N extends boolean> = Not<TypeXor<N>>
declare function xnor<A extends boolean, B extends boolean>(a: A, b: B): Xnor<A, B>
