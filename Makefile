# Makefile

install:
	npm install --save-dev @babel/core @babel/cli @babel/node @babel/preset-env @babel/register

install_eslint:
	npm install --save-dev eslint eslint-config-airbnb-base eslint-plugin-babel babel-eslint eslint-plugin-import

start:
	npx babel-node src/bin/brain-games.js

publish:
	npm publish

lint:
	npx eslint src/.

brain-even:
	npx babel-node src/bin/brain-even.js

brain-calc:
	npx babel-node src/bin/brain-calc.js

brain-gcd:
	npx babel-node src/bin/brain-gcd.js

brain-progression:
	npx babel-node src/bin/brain-progression.js

brain-prime:
	npx babel-node src/bin/brain-prime.js
