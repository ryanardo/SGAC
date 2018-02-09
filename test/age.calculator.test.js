import * as SGAC from '../app/js/age.calculator.js';
const assert = require('assert');

describe('SGAC', function () {

	describe('yearsToSeconds', function () {
		it('[yearsToSeconds] should return 31536000 seconds.', function () {
			assert.equal(31536000, SGAC.yearsToSeconds(1));
		});
	});

});
