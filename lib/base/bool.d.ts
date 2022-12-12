import {
} from '..'

type Not<N extends boolean> = N extends true ? false : true
declare function not<N extends boolean>(n: N): Not<N>

type And<A extends boolean, B extends boolean> = A extends true ? B extends true ? true : false : false
declare function and<A extends boolean, B extends boolean>(a: A, b: B): And<A, B>

type Or<A extends boolean, B extends boolean> = A extends false ? B extends false ? false : true : true
declare function or<A extends boolean, B extends boolean>(a: A, b: B): Or<A, B>

type Nand<A extends boolean, B extends boolean> = Not<And<A, B>>
declare function nand<A extends boolean, B extends boolean>(a: A, b: B): Nand<A, B>

type Nor<A extends boolean, B extends boolean> = Not<Or<A, B>>
declare function nor<A extends boolean, B extends boolean>(a: A, b: B): Nor<A, B>

type Xor<A extends boolean, B extends boolean> = And<Nand<A, B>, Or<A, B>>
declare function xor<A extends boolean, B extends boolean>(a: A, b: B): Xor<A, B>

type Xnor<A extends boolean, B extends boolean> = Not<Xor<A, B>>
declare function xnor<A extends boolean, B extends boolean>(a: A, b: B): Xnor<A, B>
