/**
 * 比较器
 * @version 0.1.0
 * @license MIT
 */
declare module './compare';
const Test = true; Test;

import { Stepped } from './step';

type DigitalCompare<
	A extends number,
	B extends number>
	= A extends B ? 0 :
	A extends 0 ? 1 :
	B extends 0 ? -1 :
	DigitalCompare<Stepped<9, A>, Stepped<9, B>>;
namespace Test {
	// $ExpectType 0
	export type AS = DigitalCompare<0, 0>;
	// $ExpectType -1
	export type EF = DigitalCompare<3, 0>;
	// $ExpectType -1
	export type AD = DigitalCompare<9, 0>;
	// $ExpectType 1
	export type AZ = DigitalCompare<8, 9>;
	// $ExpectType 1
	export type NF = DigitalCompare<2, 9>;
}
// type LenCmp<A extends string, B extends string> = PreAligned<A, B> extends A ? PreAligned<B, A> extends B ? 0 : -1 : 1;

// type P0<A extends string, B extends string> = `${A},${B}` extends (
// 	`${infer A0 extends SigNumber
// 	}${infer A}${','
// 	}${infer B0 extends SigNumber
// 	}${infer B}`
// ) ? DigitalCompare<A0, B0> extends infer K extends -1 | 1 ? K : P0<A, B> : 0;

// type P1<A extends string, B extends string> = `${A},${B}` extends (
// 	`${infer A0}${infer A1}${infer A2}${infer A3}${infer A4}${infer A5}${infer A6}${infer A7}${infer A8}${infer A9
// 	}${infer A}${','
// 	}${infer B0}${infer B1}${infer B2}${infer B3}${infer B4}${infer B5}${infer B6}${infer B7}${infer B8}${infer B9
// 	}${infer B}`
// ) ? P0<
// 	`${A0}${A1}${A2}${A3}${A4}${A5}${A6}${A7}${A8}${A9}`,
// 	`${B0}${B1}${B2}${B3}${B4}${B5}${B6}${B7}${B8}${B9}`
// > extends infer K extends -1 | 1 ? K : P1<A, B> : P0<A, B>;

// type P2<A extends string, B extends string> = `${A},${B}` extends (
// 	`${infer A00}${infer A01}${infer A02}${infer A03}${infer A04}${infer A05}${infer A06}${infer A07}${infer A08}${infer A09
// 	}${infer A10}${infer A11}${infer A12}${infer A13}${infer A14}${infer A15}${infer A16}${infer A17}${infer A18}${infer A19
// 	}${infer A20}${infer A21}${infer A22}${infer A23}${infer A24}${infer A25}${infer A26}${infer A27}${infer A28}${infer A29
// 	}${infer A30}${infer A31}${infer A32}${infer A33}${infer A34}${infer A35}${infer A36}${infer A37}${infer A38}${infer A39
// 	}${infer A40}${infer A41}${infer A42}${infer A43}${infer A44}${infer A45}${infer A46}${infer A47}${infer A48}${infer A49
// 	}${infer A50}${infer A51}${infer A52}${infer A53}${infer A54}${infer A55}${infer A56}${infer A57}${infer A58}${infer A59
// 	}${infer A60}${infer A61}${infer A62}${infer A63}${infer A64}${infer A65}${infer A66}${infer A67}${infer A68}${infer A69
// 	}${infer A70}${infer A71}${infer A72}${infer A73}${infer A74}${infer A75}${infer A76}${infer A77}${infer A78}${infer A79
// 	}${infer A80}${infer A81}${infer A82}${infer A83}${infer A84}${infer A85}${infer A86}${infer A87}${infer A88}${infer A89
// 	}${infer A90}${infer A91}${infer A92}${infer A93}${infer A94}${infer A95}${infer A96}${infer A97}${infer A98}${infer A99
// 	}${infer A}${','
// 	}${infer B00}${infer B01}${infer B02}${infer B03}${infer B04}${infer B05}${infer B06}${infer B07}${infer B08}${infer B09
// 	}${infer B10}${infer B11}${infer B12}${infer B13}${infer B14}${infer B15}${infer B16}${infer B17}${infer B18}${infer B19
// 	}${infer B20}${infer B21}${infer B22}${infer B23}${infer B24}${infer B25}${infer B26}${infer B27}${infer B28}${infer B29
// 	}${infer B30}${infer B31}${infer B32}${infer B33}${infer B34}${infer B35}${infer B36}${infer B37}${infer B38}${infer B39
// 	}${infer B40}${infer B41}${infer B42}${infer B43}${infer B44}${infer B45}${infer B46}${infer B47}${infer B48}${infer B49
// 	}${infer B50}${infer B51}${infer B52}${infer B53}${infer B54}${infer B55}${infer B56}${infer B57}${infer B58}${infer B59
// 	}${infer B60}${infer B61}${infer B62}${infer B63}${infer B64}${infer B65}${infer B66}${infer B67}${infer B68}${infer B69
// 	}${infer B70}${infer B71}${infer B72}${infer B73}${infer B74}${infer B75}${infer B76}${infer B77}${infer B78}${infer B79
// 	}${infer B80}${infer B81}${infer B82}${infer B83}${infer B84}${infer B85}${infer B86}${infer B87}${infer B88}${infer B89
// 	}${infer B90}${infer B91}${infer B92}${infer B93}${infer B94}${infer B95}${infer B96}${infer B97}${infer B98}${infer B99
// 	}${infer B}`
// ) ? P1<
// 	`${A00}${A01}${A02}${A03}${A04}${A05}${A06}${A07}${A08}${A09
// 	}${A10}${A11}${A12}${A13}${A14}${A15}${A16}${A17}${A18}${A19
// 	}${A20}${A21}${A22}${A23}${A24}${A25}${A26}${A27}${A28}${A29
// 	}${A30}${A31}${A32}${A33}${A34}${A35}${A36}${A37}${A38}${A39
// 	}${A40}${A41}${A42}${A43}${A44}${A45}${A46}${A47}${A48}${A49
// 	}${A50}${A51}${A52}${A53}${A54}${A55}${A56}${A57}${A58}${A59
// 	}${A60}${A61}${A62}${A63}${A64}${A65}${A66}${A67}${A68}${A69
// 	}${A70}${A71}${A72}${A73}${A74}${A75}${A76}${A77}${A78}${A79
// 	}${A80}${A81}${A82}${A83}${A84}${A85}${A86}${A87}${A88}${A89
// 	}${A90}${A91}${A92}${A93}${A94}${A95}${A96}${A97}${A98}${A99}`,
// 	`${B00}${B01}${B02}${B03}${B04}${B05}${B06}${B07}${B08}${B09
// 	}${B10}${B11}${B12}${B13}${B14}${B15}${B16}${B17}${B18}${B19
// 	}${B20}${B21}${B22}${B23}${B24}${B25}${B26}${B27}${B28}${B29
// 	}${B30}${B31}${B32}${B33}${B34}${B35}${B36}${B37}${B38}${B39
// 	}${B40}${B41}${B42}${B43}${B44}${B45}${B46}${B47}${B48}${B49
// 	}${B50}${B51}${B52}${B53}${B54}${B55}${B56}${B57}${B58}${B59
// 	}${B60}${B61}${B62}${B63}${B64}${B65}${B66}${B67}${B68}${B69
// 	}${B70}${B71}${B72}${B73}${B74}${B75}${B76}${B77}${B78}${B79
// 	}${B80}${B81}${B82}${B83}${B84}${B85}${B86}${B87}${B88}${B89
// 	}${B90}${B91}${B92}${B93}${B94}${B95}${B96}${B97}${B98}${B99}`
// > extends infer K extends -1 | 1 ? K : P2<A, B> : P1<A, B>;

// type N2B<N> = N extends 1 ? true : false;
// type Obj<L, E, G> = { '-1': N2B<L>, '0': N2B<E>, '1': N2B<G>; };
// type MayUpNumUp<T extends number, S extends number, C extends number> = TypeOr<IsLess<C, T>> extends true ? MayUpNumUp<T, S, SntAosNum<0, C, S, number>> : C;
// type MayUpNumDn<T extends number, S extends number, C extends number> = IsNotless<C, T> extends true ? MayUpNumDn<T, S, SntAosNum<9, C, S, number>> : SntAosNum<0, C, S, number>;
// type PowerList = [1, 10, 1e2, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13, 1e14, 1e15];
