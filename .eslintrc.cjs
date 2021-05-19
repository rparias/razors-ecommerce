module.exports = {
	root: true,
	extends: ['eslint:recommended', 'eslint-config-prettier'],
	plugins: ['svelte3'],
	ignorePatterns: ['*.cjs'],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3', plugins: ['svelte3'] }],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2019
	},
	env: {
		browser: true,
		es2017: true,
		node: true,
		jest: true
	},
	rules: {
		semi: ['error', 'always'],
		quotes: ['error', 'single']
	}
};
