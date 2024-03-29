import {
	IfredArr,
	IfredObj,
	Schema,
	SemiUnpartial,
	SchemaObj,
	IsDefedObject,
	TypeOr,
	SemiRequired,
	EqualTo,
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
type SchType = readonly SchTypeStr[] | SchTypeStr
type SchTS0 = 'max' | 'min' | 'additional'
type SchTypeSep = {
	array: 'items' | `${SchTS0 | 'unique'}${'Items' | 'Length'}` | 'contains'
	boolean: never
	integer: 'multipleOf'
	null: never
	number: `${`exclusive${'Max' | 'Min'}` | SchTS0}imum`
	object: `${`${SchTS0 | 'pattern'}P` | 'p'}ropert${'yNames' | 'ies'}` | 'required' | 'dependencies'
	string: 'pattern' | 'format' | `content${'MediaType' | 'Encoding'}`
}
type SchOfType<T extends SchemaObj> = (true extends IsDefedObject<T>['type'] ? IfredObj<T, never>['type'] & {} extends readonly (infer S)[] | infer S ? S : never : never)
	| (false extends IsDefedObject<T>['type'] ? { [E in keyof SchTypeSep]: TypeOr<IsDefedObject<T>[SchTypeSep[E]]> extends true ? E : never }[keyof SchTypeSep] : never)
type SchArr<T extends SchemaObj> = T['items'] extends Schema ? SchOf<T['items']>[] : unknown[]
type SchBool<T extends SchemaObj> = boolean
type SchInt<T extends SchemaObj> = number
type SchNull<T extends SchemaObj> = null
type SchNum<T extends SchemaObj> = number
type SchOriObj<P extends { [property: string]: Schema }> = { [I in keyof P]: SchOf<P[I]> }
type SchObj<T extends SchemaObj> = SemiUnpartial<SchOriObj<IfredObj<T, {}>['properties']>, IfredArr<T['required'], never>>
type SchStr<T extends SchemaObj> = string
type SchOf<T extends Schema> = T extends SchemaObj ? T['enum'] extends readonly (infer K)[] ? K : SchOfType<T> extends infer K ?
	('array' extends K ? SchArr<T> : never) | ('boolean' extends K ? SchBool<T> : never) |
	('integer' extends K ? SchInt<T> : never) | ('null' extends K ? SchNull<T> : never) |
	('number' extends K ? SchNum<T> : never) | ('object' extends K ? SchObj<T> extends infer Y ? { [I in keyof Y]: Y[I] } : {} : never) |
	('string' extends K ? SchStr<T> : never) : unknown : any
