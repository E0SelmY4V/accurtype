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
		'no-unused-vars': 'warn',
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
		'@stylistic/computed-property-spacing': ["error", "never"],
		'@stylistic/dot-location': ["error", "property"],
		'@stylistic/eol-last': ["error", "always"],
		'@stylistic/function-call-argument-newline': ["error", "consistent"],
		'@stylistic/function-call-spacing': ["error", "never"],
		'@stylistic/function-paren-newline': ['error', 'consistent'],
		"@stylistic/generator-star-spacing": ["error", { "before": true, "after": false }],
		'@stylistic/implicit-arrow-linebreak': ["error", "beside"],
		"@stylistic/indent": ["error", "tab"],
		'@stylistic/key-spacing': ['error', { "beforeColon": false, "afterColon": true, "mode": "strict" }],
	},
	root: true,
	parserOptions: {
		project: ['./tsconfig.json', './packages/*/tsconfig.json'],
		tsconfigRootDir: __dirname,
	},
};