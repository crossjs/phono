DIRECTORY = _site
TESTS = tests/*-spec.js
REPORTER = spec
TIMEOUT = 10000
ISTANBUL = ./node_modules/.bin/istanbul
MOCHA = ./node_modules/mocha/bin/_mocha

test:
	${ISTANBUL} cover --dir ${DIRECTORY} ${MOCHA} -- -R ${REPORTER} -t ${TIMEOUT} ${TESTS} --inline-diffs

.PHONY: test
