/* eslint-disable no-unused-vars */
export let n: any;
export const cases = {
	'@stylistic/array-bracket-newline'() {
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
	'@stylistic/array-bracket-spacing'() {
		n = ['awd', 'ds'];
		n = ['awd', 'ds' ]; // eslint-disable-line @stylistic/array-bracket-spacing
		n = [ 'awd', 'ds']; // eslint-disable-line @stylistic/array-bracket-spacing
		n = [ 'awd', 'ds' ]; // eslint-disable-line @stylistic/array-bracket-spacing
	},
	'@stylistic/array-element-newline'() {
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
	'@stylistic/arrow-parens'() {
		Promise.resolve<string>('asd').then(a => a + '123');
		n = () => { 1 + 1; };
		n = (n: string) => { n; };
		Promise.resolve<string>('asd').then((a) => a + '123'); // eslint-disable-line @stylistic/arrow-parens
	},
	'@stylistic/arrow-spacing'() {
		n = (n: string) => { n; };
		n = (n: string) => n;
		n = (n: string)=> { n; }; // eslint-disable-line @stylistic/arrow-spacing
		n = (n: string)=> n; // eslint-disable-line @stylistic/arrow-spacing
		n = (n: string) =>{ n; }; // eslint-disable-line @stylistic/arrow-spacing
		n = (n: string) =>n; // eslint-disable-line @stylistic/arrow-spacing
		n = (n: string)=>{ n; }; // eslint-disable-line @stylistic/arrow-spacing
		n = (n: string)=>n; // eslint-disable-line @stylistic/arrow-spacing
	},
	'@stylistic/block-spacing'() {
		{ console.log(123); }
		if (n()) { console.log(123); }
		{n()} // eslint-disable-line @stylistic/block-spacing
		{ n()} // eslint-disable-line @stylistic/block-spacing
		{n() } // eslint-disable-line @stylistic/block-spacing
		if (n()) {console.log(123); } // eslint-disable-line @stylistic/block-spacing
		if (n()) { console.log(123);} // eslint-disable-line @stylistic/block-spacing
		if (n()) {console.log(123);} // eslint-disable-line @stylistic/block-spacing
	},
	'@stylistic/brace-style'() {
		if (n()) {
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
		if (n()) {
			1 + 1;
		} // eslint-disable-line @stylistic/brace-style
		else {
			3 + 2;
		}
	},
	'@stylistic/comma-dangle'() {
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
	'@stylistic/comma-spacing'() {
		const ad = 3, op = 'asd';
		const a2 = 3 , o1 = 'asd'; // eslint-disable-line @stylistic/comma-spacing
		const a3 = 3,o2 = 'asd'; // eslint-disable-line @stylistic/comma-spacing
		const a4 = 3 ,o5 = 'asd'; // eslint-disable-line @stylistic/comma-spacing
	},
	'@stylistic/comma-style'() {
		const pa = 123,
			kc = 'asd';
		const pp = 123
			, kn = 'asd'; // eslint-disable-line @stylistic/comma-style
	},
	'@stylistic/computed-property-spacing'() {
		n[n]
		n['foo'.split('s').join('')]
		n = { [n]: n }
		n[n[n]]
		const { [n]: as } = n;
		({ [n]: n } = n);
		n[n ] // eslint-disable-line @stylistic/computed-property-spacing
		n[ 'foo'.split('s').join('')] // eslint-disable-line @stylistic/computed-property-spacing
		n = { [ n ]: n } // eslint-disable-line @stylistic/computed-property-spacing
		n[n[ n ]] // eslint-disable-line @stylistic/computed-property-spacing
		const { [ n ]: someProp } = n; // eslint-disable-line @stylistic/computed-property-spacing
		({ [ n ]: n } = n); // eslint-disable-line @stylistic/computed-property-spacing
	},
	'@stylistic/dot-location'() {
		n = n. // eslint-disable-line @stylistic/dot-location
			galaxy;
		n = n
			.galaxy;
	},
	'@stylistic/function-call-argument-newline'() {
		n(1, 2, 3);
		n(
			1,
			2,
			3,
		);
		n(1, 2, // eslint-disable-line @stylistic/function-call-argument-newline
			3);
	},
	'@stylistic/function-call-spacing'() {
		n(13);
		n(1, 2, 3);
		n (1); // eslint-disable-line @stylistic/function-call-spacing
		n (1, 2, 3); // eslint-disable-line @stylistic/function-call-spacing
	},
	'@stylistic/function-paren-newline'() {
		n();
		n(1, 2, 3);
		n(1,
			2);
		n(1,
			2,
		); // eslint-disable-line @stylistic/function-paren-newline
		n(
			1,
			2); // eslint-disable-line @stylistic/function-paren-newline
	},
	'@stylistic/generator-star-spacing'() {
		n = function *a() { yield 1 + 1; }
		n = { *asd() { yield 2 + 2; } };
		n = function* b() { yield 1 + 1; } // eslint-disable-line @stylistic/generator-star-spacing
		n = function * c() { yield 1 + 1; } // eslint-disable-line @stylistic/generator-star-spacing
		n = function*d() { yield 1 + 1; } // eslint-disable-line @stylistic/generator-star-spacing
		n = { * asd() { yield 2 + 2; } }; // eslint-disable-line @stylistic/generator-star-spacing
	},
	'@stylistic/implicit-arrow-linebreak'() {
		n = () => () => 123;
		n = () => { 1 + 1; };
		n = () =>
			() => // eslint-disable-line  @stylistic/implicit-arrow-linebreak
				123; // eslint-disable-line  @stylistic/implicit-arrow-linebreak
	},
	'@stylistic/key-spacing'() {
		n = { a: 123 };
		n = { [n]: 123 };
		n = { [n] :123 }; // eslint-disable-line @stylistic/key-spacing
		n = { [n] : 123 }; // eslint-disable-line @stylistic/key-spacing
		n = { [n]:123 }; // eslint-disable-line @stylistic/key-spacing
	},
	'@stylistic/keyword-spacing'() {
		do { 1 + 1; } while (n());
		do { 1 + 1; } while(n()); // eslint-disable-line @stylistic/keyword-spacing
		do { 1 + 1; }while (n()); // eslint-disable-line @stylistic/keyword-spacing
		do { 1 + 1; }while(n()); // eslint-disable-line @stylistic/keyword-spacing
	},
	'@stylistic/lines-between-class-members'() {
		n = class {
			static asd = 123;
			private lkls = 321;
			constructon() { 1 + 1; }
			protected asdlk() { return this.lkls; }
			protected po = 'asd'; // eslint-disable-line @stylistic/lines-between-class-members
		}
		n = class {
			static asd = 123;

			private lkls = 321;

			constructon() { 1 + 1; }

			protected asdlk() { return this.lkls; }

			protected po = 'asd';
		}
	},
	'@stylistic/max-len'() {
		'||||||||||----------||||||||||----------||||||||||----------||||||||||----------||||||||||----------||||||||||----------||||||||||----------|||||||||';
		'||||||||||----------||||||||||----------||||||||||----------||||||||||----------||||||||||----------||||||||||----------||||||||||----------||||||||||'; // eslint-disable-line @stylistic/max-len
	},
	'@stylistic/member-delimiter-style'() {
		interface n {
			a: 123;
			b: 123;
		}
		interface n { d: 0; e: 0 }
		interface n {
			f: 123, // eslint-disable-line @stylistic/member-delimiter-style
			g: 123, // eslint-disable-line @stylistic/member-delimiter-style
		}
		interface n { h: 0, j: 0 } // eslint-disable-line @stylistic/member-delimiter-style
		interface n {
			k: 123 // eslint-disable-line @stylistic/member-delimiter-style
			l: 123 // eslint-disable-line @stylistic/member-delimiter-style
		}
		interface n {
			m: 123 // eslint-disable-line @stylistic/member-delimiter-style
			n: 123;
		}
		interface n {
			o: 123;
			p: 123 // eslint-disable-line @stylistic/member-delimiter-style
		}
		interface n { c: 0; i: 0; } // eslint-disable-line @stylistic/member-delimiter-style
	},
	'@stylistic/multiline-ternary'() {
		n() ? 1 : 2;
		n()
			? 1
			: 2;
		n() ? 1 // eslint-disable-line @stylistic/multiline-ternary
			: 2;
		n()
			? 1 : 2; // eslint-disable-line @stylistic/multiline-ternary
	},
	'@stylistic/new-parens'() {
		n = new n();
		n = new class n { a = 123 }();
		n = new n; // eslint-disable-line @stylistic/new-parens
		n = new class n { a = 123 }; // eslint-disable-line @stylistic/new-parens
	},
	'@stylistic/newline-per-chained-call'() {
		n;
		n.asd();
		n.ad().asd();
		n
			.asd();
		n
			.ad().asd()
			.asd();
		n.aks().dkls().sl(); // eslint-disable-line @stylistic/newline-per-chained-call
		n.aks().dkls().sl().pso(); // eslint-disable-line @stylistic/newline-per-chained-call
		n
			.ad().asd().kls() // eslint-disable-line @stylistic/newline-per-chained-call
			.asd();
	},
	'@stylistic/no-confusing-arrow'() {
		let x: (a: any) => number;
		x = a => (a() ? 2 : 3);
		x = a => a() ? 2 : 3; // eslint-disable-line @stylistic/no-confusing-arrow
	},
	'@stylistic/no-extra-parens'() {
		n = (1 * 2) + n;
		n = n()
			? (
				n
				+ 2
				+ 3
			)
			: 234;
		const x: (a: any) => number = a => (a() ? 2 : 3);
		n = (new n(1, 2, 3)).asd;
		n = (2 + 2 + 3); // eslint-disable-line @stylistic/no-extra-parens
	},
	'@stylistic/no-multi-spaces'() {
		while (n()) 1 + 1;
		while    (n())   1 + 1; // eslint-disable-line @stylistic/no-multi-spaces
	},
} as const;
// @stylistic/eol-last
