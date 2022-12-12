import {
} from '..'

type Not<N extends boolean> = N extends true ? false : true
