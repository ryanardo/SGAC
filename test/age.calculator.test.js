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


	/* * * * * * * * * * End: SGAC Class Tests * * * * * * * * * */
});
