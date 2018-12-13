# Makefile

publish:
	@npm publish --access public

patch:
	@npm version patch

minor:
	@npm version minor

major:
	@npm version major