export const cases = {
	'@stylistic/array-bracket-newline'(n: any) {
		n = [1, 2, 3];
		n = [
			1, 2, 3,
		];
		n = [
			1,
			2,
			3,
		];
		n = [
			123, 321]; // eslint-disable-line @stylistic/array-bracket-newline
		n = [123, 123,
		]; // eslint-disable-line @stylistic/array-bracket-newline
	},
	'@stylistic/array-bracket-spacing'(n: any) {
		n = ['awd', 'ds'];
		n = ['awd', 'ds' ]; // eslint-disable-line @stylistic/array-bracket-spacing
		n = [ 'awd', 'ds']; // eslint-disable-line @stylistic/array-bracket-spacing
		n = [ 'awd', 'ds' ]; // eslint-disable-line @stylistic/array-bracket-spacing
	},
	'@stylistic/array-element-newline'(n: any) {
		n = [
			1, 2, 3,
		];
		n = [
			1,
			2,
			3,
		];
		n = [
			1, 2, // eslint-disable-line @stylistic/array-element-newline
			3,
		];
		n = [
			3,
			1, 2, // eslint-disable-line @stylistic/array-element-newline
		];
	},
	'@stylistic/arrow-parens'(n: any) {
		Promise.resolve<string>('asd').then(a => a + '123');
		n = () => { 1 + 1; };
		n = (n: string) => { n; };
		Promise.resolve<string>('asd').then((a) => a + '123'); // eslint-disable-line @stylistic/arrow-parens
	},
	'@stylistic/arrow-spacing'(n: any) {
		n = (n: string) => { n; };
		n = (n: string) => n;
		n = (n: string)=> { n; }; // eslint-disable-line @stylistic/arrow-spacing
		n = (n: string)=> n; // eslint-disable-line @stylistic/arrow-spacing
		n = (n: string) =>{ n; }; // eslint-disable-line @stylistic/arrow-spacing
		n = (n: string) =>n; // eslint-disable-line @stylistic/arrow-spacing
		n = (n: string)=>{ n; }; // eslint-disable-line @stylistic/arrow-spacing
		n = (n: string)=>n; // eslint-disable-line @stylistic/arrow-spacing
	},
	'@stylistic/block-spacing'(n: any) {
		{ console.log(123); }
		if (require('')) { console.log(123); }
		{require('')} // eslint-disable-line @stylistic/block-spacing
		{ require('')} // eslint-disable-line @stylistic/block-spacing
		{require('') } // eslint-disable-line @stylistic/block-spacing
		if (require('')) {console.log(123); } // eslint-disable-line @stylistic/block-spacing
		if (require('')) { console.log(123);} // eslint-disable-line @stylistic/block-spacing
		if (require('')) {console.log(123);} // eslint-disable-line @stylistic/block-spacing
	},
	'@stylistic/brace-style'(n: any) {
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
	},
	'@stylistic/comma-dangle'(n: any) {
		n = [
			1,
			2,
			3,
		];
		n = [1, 2, 3];
		n = { a: 123, kk: '123' };
		n = {
			a: 123,
			kk: '123',
		};
		n = [
			1,
			2,
			3 // eslint-disable-line @stylistic/comma-dangle
		];
		n = [1, 2, 3,]; // eslint-disable-line @stylistic/comma-dangle
		n = { a: 123, kk: '123', }; // eslint-disable-line @stylistic/comma-dangle
		n = {
			a: 123,
			kk: '123' // eslint-disable-line @stylistic/comma-dangle
		};
	},
	'@stylistic/comma-spacing'(n: any) {
		const ad = 3, op = 'asd';
		const a2 = 3 , o1 = 'asd'; // eslint-disable-line @stylistic/comma-spacing
		const a3 = 3,o2 = 'asd'; // eslint-disable-line @stylistic/comma-spacing
		const a4 = 3 ,o5 = 'asd'; // eslint-disable-line @stylistic/comma-spacing
	},
	'@stylistic/comma-style'(n: any) {
		const pa = 123,
			kc = 'asd';
		const pp = 123
			, kn = 'asd'; // eslint-disable-line @stylistic/comma-style
	},
} as const;
