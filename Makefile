install:
	npm ci
publish:
	npm publish --dry-run
lint:
	npx eslint .
link:
	npm link
setup: install publish
brain-games:
	node bin/brain-games.js