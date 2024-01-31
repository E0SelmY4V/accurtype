import { Templateable } from '../lib/static';

// $ExpectType string
export type A = `${Templateable}`;
