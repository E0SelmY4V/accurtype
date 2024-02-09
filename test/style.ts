// @stylistic/array-bracket-newline
export const as = [1, 2, 3];
export const ba = [
	1, 2, 3,
];
export const cq = [
	1,
	2,
	3,
];
export const kq = [
	123, 321]; // eslint-disable-line @stylistic/array-bracket-newline
export const sq = [123, 123,
]; // eslint-disable-line @stylistic/array-bracket-newline

// @stylistic/array-bracket-spacing
export const qk = ['awd', 'ds'];
export const qe = ['awd', 'ds' ]; // eslint-disable-line @stylistic/array-bracket-spacing
export const qq = [ 'awd', 'ds']; // eslint-disable-line @stylistic/array-bracket-spacing
export const qp = [ 'awd', 'ds' ]; // eslint-disable-line @stylistic/array-bracket-spacing

// @stylistic/array-element-newline
export const bu = [
	1, 2, 3,
];
export const cw = [
	1,
	2,
	3,
];
export const p1 = [
	1, 2, // eslint-disable-line @stylistic/array-element-newline
	3,
];
export const p3 = [
	3,
	1, 2, // eslint-disable-line @stylistic/array-element-newline
];

// @stylistic/arrow-parens
Promise.resolve<string>('asd').then(a => a + '123');
export const qa = () => { 1 + 1; };
export const qb = (n: string) => { n; };
Promise.resolve<string>('asd').then((a) => a + '123'); // eslint-disable-line @stylistic/arrow-parens

// @stylistic/arrow-spacing
export const eb = (n: string) => { n; };
export const nb = (n: string) => n;
export const e2 = (n: string)=> { n; }; // eslint-disable-line @stylistic/arrow-spacing
export const n3 = (n: string)=> n; // eslint-disable-line @stylistic/arrow-spacing
export const e4 = (n: string) =>{ n; }; // eslint-disable-line @stylistic/arrow-spacing
export const n5 = (n: string) =>n; // eslint-disable-line @stylistic/arrow-spacing
export const e7 = (n: string)=>{ n; }; // eslint-disable-line @stylistic/arrow-spacing
export const n6 = (n: string)=>n; // eslint-disable-line @stylistic/arrow-spacing

// @stylistic/block-spacing
{ console.log(123); }
if (require('')) { console.log(123); }
{require('')} // eslint-disable-line @stylistic/block-spacing
{ require('')} // eslint-disable-line @stylistic/block-spacing
{require('') } // eslint-disable-line @stylistic/block-spacing
if (require('')) {console.log(123); } // eslint-disable-line @stylistic/block-spacing
if (require('')) { console.log(123);} // eslint-disable-line @stylistic/block-spacing
if (require('')) {console.log(123);} // eslint-disable-line @stylistic/block-spacing

// @stylistic/brace-style
if (require('')) {
	console.log(123);
} else {
	console.log(123);
}
try {
	1 + 1;
} catch {
	2 + 2;
} finally {
	3 + 3;
}
if (require('')) {
	1 + 1;
} // eslint-disable-line @stylistic/brace-style
else {
	3 + 2;
}

// @stylistic/comma-dangle
export const ca = [
	1,
	2,
	3,
];
export const kx = [1, 2, 3];
export const oq = { a: 123, kk: '123' };
export const oz = {
	a: 123,
	kk: '123',
};
export const c3 = [
	1,
	2,
	3 // eslint-disable-line @stylistic/comma-dangle
];
export const k3 = [1, 2, 3,]; // eslint-disable-line @stylistic/comma-dangle
export const o3 = { a: 123, kk: '123', }; // eslint-disable-line @stylistic/comma-dangle
export const o4 = {
	a: 123,
	kk: '123' // eslint-disable-line @stylistic/comma-dangle
};

// @stylistic/comma-spacing
export const ad = 3, op = 'asd';
export const a2 = 3 , o1 = 'asd'; // eslint-disable-line @stylistic/comma-spacing
export const a3 = 3,o2 = 'asd'; // eslint-disable-line @stylistic/comma-spacing
export const a4 = 3 ,o5 = 'asd'; // eslint-disable-line @stylistic/comma-spacing

// @stylistic/comma-style
export const pa = 123,
	kc = 'asd';
export const pp = 123
	, kn = 'asd'; // eslint-disable-line @stylistic/comma-style
