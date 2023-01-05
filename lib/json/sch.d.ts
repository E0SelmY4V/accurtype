import {
	IfredArr,
	ObjectKey,
} from '..'
import {
	SchType,
} from './tool'

interface Schema {
	$id?: string
	$schema?: string
	$ref?: string
	$comment?: string
	title?: string
	description?: string
	default?: any,
	readOnly?: boolean
	writeOnly?: boolean
	examples?: any[]
	multipleOf?: number
	maximum?: number
	exclusiveMaximum?: number
	minimum?: number
	exclusiveMinimum?: number
	maxLength?: number
	minLength?: number
	pattern?: string
	additionalItems?: Schema
	items?: Schema
	maxItems?: number
	minItems?: number
	uniqueItems?: boolean
	contains?: Schema
	maxProperties?: number
	minProperties?: number
	required?: string[]
	additionalProperties?: Schema
	definitions?: { [definition: string]: Schema }
	properties?: { [property: string]: Schema }
	patternProperties?: { [patternProperty: string]: Schema }
	dependencies?: { [dependency: string]: Schema | string[] }
	propertyNames?: Schema
	const?: any,
	enum?: any[]
	type?: SchType
	format?: string
	contentMediaType?: string
	contentEncoding?: string
	if?: Schema
	then?: Schema
	else?: Schema
	allOf?: Schema[]
	anyOf?: Schema[]
	oneOf?: Schema[]
	not?: Schema
}
// type SchArr<T extends Schema> = T['items'] extends Schema ? OfSchema<T['items']>[] : any[]
// type SchBool<T extends Schema> = boolean
// type SchInt<T extends Schema> = number
// type SchNull<T extends Schema> = null
// type SchNum<T extends Schema> = number
// type SchObj<T extends Schema> = {}
// type SchStr<T extends Schema> = string
// type OfSchema<T extends Schema> = T['type'] extends SchType ? OfSchType<T['type']> extends infer K ?
// 	('array' extends K ? SchArr<T> : never) |
// 	('boolean' extends K ? SchBool<T> : never) |
// 	('integer' extends K ? SchInt<T> : never) |
// 	('null' extends K ? SchNull<T> : never) |
// 	('number' extends K ? SchNum<T> : never) |
// 	('object' extends K ? SchObj<T> : never) |
// 	('string' extends K ? SchStr<T> : never) : any : any
// declare const a: Schema;
// declare const b: OfSchema<typeof a>
// declare const c: null | boolean