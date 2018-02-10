import * as SGAC from '../app/js/age.calculator.js';
const assert = require('assert');

describe('SGAC', function () {
	/* * * * * * * * * * Start: SGAC Class Tests * * * * * * * * * */

	// Calculate seconds in a year
	describe('ageInMilliseconds', function () {
		it('[ageInMilliseconds] should return 31536000000 seconds.', function () {
			assert.equal(31536000000, SGAC.ageInMilliseconds('1971-01-01'));
		});
	});
	// Convert milliseconds to seconds
	describe('milliSecondsToSeconds', function () {
		it('[milliSecondsToSeconds] should return 31536000 seconds.', function () {
			assert.equal(31536000, SGAC.milliSecondsToSeconds(31536000000));
		});
	});
	// Calculate difference between two dates.
	describe('dateDifference', function () {
		it('[dateDifference] should return 31536000 seconds.', function () {
			assert.equal(31536000, SGAC.dateDifference('1971-01-01', '1970-01-01'));
		});
	});
	// Calculate age if born on Mercury.
	describe('mercury', function () {
		it('[mercury] should return 79 years old.', function () {
			assert.equal(79, SGAC.mercury('1989-03-07'));
		});
	});
	// Calculate age if born on Venus.
	describe('venus', function () {
		it('[venus] should return 30 years old.', function () {
			assert.equal(30, SGAC.venus('1989-03-07'));
		});
	});
	// Calculate age if born on Mars.
	describe('mars', function () {
		it('[mars] should return 10 years old.', function () {
			assert.equal(10, SGAC.mars('1989-03-07'));
		});
	});

	// Calculate age if born on Jupiter.
	describe('jupiter', function () {
		it('[jupiter] should return 1 years old.', function () {
			assert.equal(1, SGAC.jupiter('1989-03-07'));
		});
	});

	/* * * * * * * * * * End: SGAC Class Tests * * * * * * * * * */
});
