import {
	IfredArr,
} from '..'

type SchTypeList = [
	"array",
	"boolean",
	"integer",
	"null",
	"number",
	"object",
	"string"
]
type SchTypeStr = IfredArr<SchTypeList>
type SchType = SchTypeStr[] | SchTypeStr
type OfSchType<T extends SchType> = T extends (infer S)[] ? S : T
