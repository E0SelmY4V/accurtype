import {
	IfredArr,
	IfredObj,
	Schema,
	SemiUnpartial,
	SchemaObj,
} from '..'

// sch
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
type SchArr<T extends SchemaObj> = T['items'] extends Schema ? SchOf<T['items']>[] : any[]
type SchBool<T extends SchemaObj> = boolean
type SchInt<T extends SchemaObj> = number
type SchNull<T extends SchemaObj> = null
type SchNum<T extends SchemaObj> = number
type SchOriObj<P extends { [property: string]: Schema }> = { [I in keyof P]: SchOf<P[I]> }
type SchObj<T extends SchemaObj> = SemiUnpartial<SchOriObj<IfredObj<T, {}>['properties']>, IfredArr<T['required'], never>>
type SchStr<T extends SchemaObj> = string
type SchOf<T extends Schema> = T extends SchemaObj ? T['enum'] extends (infer K)[] ? K :
	T['type'] extends SchType ? (OfSchType<T['type']> extends infer K ?
		('array' extends K ? SchArr<T> : never) | ('boolean' extends K ? SchBool<T> : never) |
		('integer' extends K ? SchInt<T> : never) | ('null' extends K ? SchNull<T> : never) |
		('number' extends K ? SchNum<T> : never) | ('object' extends K ? SchObj<T> : never) |
		('string' extends K ? SchStr<T> : never) : any
	) : any : any
