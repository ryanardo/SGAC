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


	/* * * * * * * * * * End: SGAC Class Tests * * * * * * * * * */
});
