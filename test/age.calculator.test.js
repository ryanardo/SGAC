import * as SGAC from '../app/js/age.calculator.js';
const assert = require('assert');

describe('SGAC', function () {
	// Calculate seconds in a year
	describe('yearsToSeconds', function () {
		it('[yearsToSeconds] should return 31536000 seconds.', function () {
			assert.equal(31536000, SGAC.yearsToSeconds(1));
		});
	});
	// Can calculate difference in seconds between two dates
	describe('yearDifferenceInSeconds', function () {
		it('[yearDifferenceInSeconds] should return 31536000 seconds.', function () {
			assert.equal(31536000, SGAC.yearDifferenceInSeconds('1971-01-01', '1970-01-01'));
		});
	});

}); //End: SGAC Class Tests
