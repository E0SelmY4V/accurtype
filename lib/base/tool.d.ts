import {
	WideNum,
	IsWideWideNum,
	LtdArrayReved,
} from '..'

declare namespace IsWideString {
	type E<N> = unknown extends N ? true : string extends N ? true : N extends `${infer N extends WideNum}` ? IsWideWideNum<N> : false

	type P0<N> = N extends `${infer I}${infer N}` ? E<I> extends true ? true : P0<N> : E<N>

	type P1<N> = N extends `${infer I0}${infer I1}${infer I2}${infer I3}${infer I4}${infer I5}${infer I6}${infer I7}${infer I8}${infer I9}${infer N}`
		? P0<`${I0}${I1}${I2}${I3}${I4}${I5}${I6}${I7}${I8}${I9}`
		> extends true ? true : P1<N> : P0<N>

	type P2<N> = N extends (
		`${infer I00}${infer I01}${infer I02}${infer I03}${infer I04}${infer I05}${infer I06}${infer I07}${infer I08}${infer I09
		}${infer I10}${infer I11}${infer I12}${infer I13}${infer I14}${infer I15}${infer I16}${infer I17}${infer I18}${infer I19
		}${infer I20}${infer I21}${infer I22}${infer I23}${infer I24}${infer I25}${infer I26}${infer I27}${infer I28}${infer I29
		}${infer I30}${infer I31}${infer I32}${infer I33}${infer I34}${infer I35}${infer I36}${infer I37}${infer I38}${infer I39
		}${infer I40}${infer I41}${infer I42}${infer I43}${infer I44}${infer I45}${infer I46}${infer I47}${infer I48}${infer I49
		}${infer I50}${infer I51}${infer I52}${infer I53}${infer I54}${infer I55}${infer I56}${infer I57}${infer I58}${infer I59
		}${infer I60}${infer I61}${infer I62}${infer I63}${infer I64}${infer I65}${infer I66}${infer I67}${infer I68}${infer I69
		}${infer I70}${infer I71}${infer I72}${infer I73}${infer I74}${infer I75}${infer I76}${infer I77}${infer I78}${infer I79
		}${infer I80}${infer I81}${infer I82}${infer I83}${infer I84}${infer I85}${infer I86}${infer I87}${infer I88}${infer I89
		}${infer I90}${infer I91}${infer I92}${infer I93}${infer I94}${infer I95}${infer I96}${infer I97}${infer I98}${infer I99
		}${infer N}`
	) ? P1<
		`${I00}${I01}${I02}${I03}${I04}${I05}${I06}${I07}${I08}${I09
		}${I10}${I11}${I12}${I13}${I14}${I15}${I16}${I17}${I18}${I19
		}${I20}${I21}${I22}${I23}${I24}${I25}${I26}${I27}${I28}${I29
		}${I30}${I31}${I32}${I33}${I34}${I35}${I36}${I37}${I38}${I39
		}${I40}${I41}${I42}${I43}${I44}${I45}${I46}${I47}${I48}${I49
		}${I50}${I51}${I52}${I53}${I54}${I55}${I56}${I57}${I58}${I59
		}${I60}${I61}${I62}${I63}${I64}${I65}${I66}${I67}${I68}${I69
		}${I70}${I71}${I72}${I73}${I74}${I75}${I76}${I77}${I78}${I79
		}${I80}${I81}${I82}${I83}${I84}${I85}${I86}${I87}${I88}${I89
		}${I90}${I91}${I92}${I93}${I94}${I95}${I96}${I97}${I98}${I99}`
	> extends true ? true : P2<N> : P1<N>
}

declare namespace ArrayLtdSplited {
	type P<N, B extends any[]> = { n: N; b: B }

	type P0<N, T, B extends any[]> = N extends readonly [
		...(T extends 0 ? infer N extends any[] : []),
		infer I,
		...(T extends 1 ? infer N extends any[] : []),
	] ? P0<N, T, [...B, I]> : P<N, T extends 1 ? B : LtdArrayReved<B>>

	type P2<N, T, B extends any[]> = N extends readonly [
		...(T extends 0 ? infer N extends any[] : []),
		infer I00, infer I01, infer I02, infer I03, infer I04, infer I05, infer I06, infer I07, infer I08, infer I09,
		infer I10, infer I11, infer I12, infer I13, infer I14, infer I15, infer I16, infer I17, infer I18, infer I19,
		...(T extends 1 ? infer N extends any[] : []),
	] ? P2<N, T, [...B,
		I00, I01, I02, I03, I04, I05, I06, I07, I08, I09,
		I10, I11, I12, I13, I14, I15, I16, I17, I18, I19,
	]> : P0<N, T, B>

	type S<N> = P2<N, 1, []> extends { b: infer L; n: infer N } ? P2<N, 0, []> extends { b: infer R; n: infer N } ? [L, N, R] : [L, N, []] : [[], N, []];
}
