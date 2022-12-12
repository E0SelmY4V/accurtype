import {
	Leading0less,
	StringReved,
} from '..'
import {
	SntOpnOri,
	SntOpnHdl,
} from './tool'

type SntOpnUns<T extends 0 | 9, A extends string, B extends string> = Leading0less<StringReved<SntOpnOri<T, SntOpnHdl<A, B>['A'], SntOpnHdl<A, B>['B']>>>
