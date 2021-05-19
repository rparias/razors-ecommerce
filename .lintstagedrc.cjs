module.exports = {
	'*.js': 'eslint --cache --fix',
	'*.{js,css,md}': 'prettier --write',
	'*.svelte': ['prettier --write', 'eslint --fix'],
	'*.cjs': ['prettier --write', 'eslint --fix']
};
