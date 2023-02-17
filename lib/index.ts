/**
 * 幻想私社精准类型库
 * @version 2.5.180
 * @link https://github.com/E0SelmY4V/accurtype
 */
declare module "."
import type Check from './tool/check'
export type OptionsCheckList = typeof Check;
export * from './base'
export * from './json'
export * from './sprec'
export * from './snt'
export * from './matrix'
