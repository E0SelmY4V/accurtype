/* eslint-env node */
// @ts-check
/**@type {import('eslint').ESLint.ConfigData} */
module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/stylistic-type-checked',
		'plugin:expect-type/recommended',
	],
	parser: '@typescript-eslint/parser',
	plugins: [
		'@typescript-eslint',
		'eslint-plugin-expect-type',
		'@stylistic',
	],
	rules: {
		'@stylistic/array-bracket-newline': ['error', 'consistent'],
		'@stylistic/array-bracket-spacing': ['error', 'never'],
		'@stylistic/array-element-newline': ['error', 'consistent'],
		'@stylistic/arrow-parens': ['error', 'as-needed'],
		'@stylistic/arrow-spacing': 'error',
		'@stylistic/block-spacing': "error",
		'@stylistic/brace-style': ["warn", "1tbs", { "allowSingleLine": true }],
		'@stylistic/comma-dangle': ["error", "always-multiline"],
		'@stylistic/comma-spacing': ["error", { "before": false, "after": true }],
		'@stylistic/comma-style': ["error", "last"],
	},
	root: true,
	parserOptions: {
		project: ['./tsconfig.json', './packages/*/tsconfig.json'],
		tsconfigRootDir: __dirname,
	},
};