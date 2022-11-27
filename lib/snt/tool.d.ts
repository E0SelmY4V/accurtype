import {
	SigNumber,
	Leading0less,
	RevString,
} from '../..'
type SntR<T extends 0 | 9> = T extends 0 ? 9 : 0
type SntSigT = SigNumber | 's'
type SntSigVary<T extends 0 | 9, N extends SntSigT> = T extends 0
	? N extends 0 ? 1 : N extends 1 ? 2 : N extends 2 ? 3 : N extends 3 ? 4 : N extends 4 ? 5 : N extends 5 ? 6 : N extends 6 ? 7 : N extends 7 ? 8 : N extends 8 ? 9 : 's'
	: N extends 2 ? 1 : N extends 3 ? 2 : N extends 4 ? 3 : N extends 5 ? 4 : N extends 6 ? 5 : N extends 7 ? 6 : N extends 8 ? 7 : N extends 9 ? 8 : N extends 1 ? 0 : 's'
type SntXcrOri<T extends 0 | 9, N extends string> = N extends `${infer K extends SigNumber
	}${infer S}` ? S extends '' ? `${SntSigVary<T, K>}` : SntXcrOri<T, S> extends infer E
	extends string ? `${E extends `s${any}` ? SntSigVary<T, K> : K}${E}` : 'NaN' : 'NaN'
