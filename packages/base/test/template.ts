import { TemplatedOf, BigintOf, NumberOf } from '../lib/template';

// $ExpectType false
export type AC = TemplatedOf<boolean, 'false'>;
// $ExpectType null
export type BA = TemplatedOf<null, 'null'>;
// $ExpectType 123n
export type AA = BigintOf<'123'>;
// $ExpectType never
export type AO = BigintOf<'0123'>
// $ExpectType number
export type AZ = NumberOf<'0123'>