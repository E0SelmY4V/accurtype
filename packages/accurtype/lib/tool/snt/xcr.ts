import type {
	IsWideString,
	MayNum,
	NumOfStr,
	EqualTo,
	Tostrable,
	ArrayLtdSplited,
	ALRslt,
	IfredArr,
} from '../..'
import type {
	LvArr,
	LvGot,
	Cmp,
	Deced,
	Subed,
	Added,
	Ad,
	Zo,
	LvNum,
	LvStr,
	ISACut,
	ISAFmw,
	AnyArr,
	SigNumber,
	JP,
} from '../tool'


// export namespace xcr {
// 	type Re<T> = T extends 0 ? 9 : 0
// 	type SigT = SigNumber | 's'
// 	type SigVary<T, N> = N extends SigNumber ? (T extends 0 ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 's'] : ['s', 0, 1, 2, 3, 4, 5, 6, 7, 8])[N] : 's'
// 	type P0<T extends 0 | 9, N, B, E extends 0 | 9 = Re<T>> = N extends (
// 		`${E
// 		}${infer N}`
// 	) ? P0<T, N, `${JP<B>
// 		}${T}`
// 	> : N extends `${infer S extends SigNumber}${infer N}` ? `${JP<B>}${SigVary<T, S>}${N}` : `${JP<B>}${JP<N>}`

// 	type P1<T extends 0 | 9, N, B, E extends 0 | 9 = Re<T>> = N extends (
// 		`${E}${E}${E}${E}${E}${E}${E}${E}${E}${E
// 		}${infer S}`
// 	) ? P1<T, S, `${JP<B>
// 		}${T}${T}${T}${T}${T}${T}${T}${T}${T}${T}`
// 	> : P0<T, N, B>

// 	type P2<T extends 0 | 9, N, B, E extends 0 | 9 = Re<T>> = N extends (
// 		`${E}${E}${E}${E}${E}${E}${E}${E}${E}${E
// 		}${E}${E}${E}${E}${E}${E}${E}${E}${E}${E
// 		}${E}${E}${E}${E}${E}${E}${E}${E}${E}${E
// 		}${E}${E}${E}${E}${E}${E}${E}${E}${E}${E
// 		}${E}${E}${E}${E}${E}${E}${E}${E}${E}${E
// 		}${E}${E}${E}${E}${E}${E}${E}${E}${E}${E
// 		}${E}${E}${E}${E}${E}${E}${E}${E}${E}${E
// 		}${E}${E}${E}${E}${E}${E}${E}${E}${E}${E
// 		}${E}${E}${E}${E}${E}${E}${E}${E}${E}${E
// 		}${E}${E}${E}${E}${E}${E}${E}${E}${E}${E
// 		}${infer S}`
// 	) ? P2<T, S, `${JP<B>
// 		}${T}${T}${T}${T}${T}${T}${T}${T}${T}${T
// 		}${T}${T}${T}${T}${T}${T}${T}${T}${T}${T
// 		}${T}${T}${T}${T}${T}${T}${T}${T}${T}${T
// 		}${T}${T}${T}${T}${T}${T}${T}${T}${T}${T
// 		}${T}${T}${T}${T}${T}${T}${T}${T}${T}${T
// 		}${T}${T}${T}${T}${T}${T}${T}${T}${T}${T
// 		}${T}${T}${T}${T}${T}${T}${T}${T}${T}${T
// 		}${T}${T}${T}${T}${T}${T}${T}${T}${T}${T
// 		}${T}${T}${T}${T}${T}${T}${T}${T}${T}${T
// 		}${T}${T}${T}${T}${T}${T}${T}${T}${T}${T}`
// 	> : P1<T, N, B>

// 	type Ori<T extends 0 | 9, N extends string> = Leading0less<StringReved<P2<T, StringReved<`0${N}`>, ''>>>
// }
