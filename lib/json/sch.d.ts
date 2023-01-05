import {
} from '..'
import {
	SchType,
	SchOf,
} from './tool'

interface SchemaObj {
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
type Schema = SchemaObj | boolean
type OfSchema<T> = T extends Schema ? SchOf<T> : any
