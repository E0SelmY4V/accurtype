import {
	IfredArr,
	Schema,
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
type SchArr<T extends Schema> = T['items'] extends Schema ? SchOf<T['items']>[] : any[]
type SchBool<T extends Schema> = boolean
type SchInt<T extends Schema> = number
type SchNull<T extends Schema> = null
type SchNum<T extends Schema> = number
type SchObj<T extends Schema> = T['properties'] extends {} ? { [I in keyof T['properties']]: SchOf<T['properties'][I]> } : {}
type SchStr<T extends Schema> = string
type SchOf<T extends Schema> = T['enum'] extends (infer K)[] ? K :
	T['type'] extends SchType ? (OfSchType<T['type']> extends infer K ?
		('array' extends K ? SchArr<T> : never) | ('boolean' extends K ? SchBool<T> : never) |
		('integer' extends K ? SchInt<T> : never) | ('null' extends K ? SchNull<T> : never) |
		('number' extends K ? SchNum<T> : never) | ('object' extends K ? SchObj<T> : never) |
		('string' extends K ? SchStr<T> : never) : any
	) : any