/* eslint-env node */
// @ts-check
/**@type {import('eslint/lib/shared/types').ConfigData} */
module.exports = {
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	root: true,
};