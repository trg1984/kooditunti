# works similar to npm test

REPORTER = spec
TESTS = test/**/*.coffee
#TESTS = test/placeholder.coffee
COMPILERS = coffee:coffee-script/register
#test/*.js
#test/**/**/*.js

test:
	@NODE_ENV=test NODE_PATH=./config:./app/controllers ./node_modules/.bin/mocha \
		--reporter $(REPORTER) \
		--require coffee-script/register \
		--compilers $(COMPILERS) \
		--ui tdd \
		$(TESTS)

.PHONY: test
