import * as SGAC from '../app/js/SGAC.js';
const assert = require('assert');

describe('SGAC', function () {
	/* * * * * * * * * * Start: SGAC Class Tests * * * * * * * * * */
	// Calculate age on Earth.
	describe('ageEarth', function () {
		it('[ageEarth] shoudl return 28.', function () {
			assert.equal(28, SGAC.ageEarth('1989-03-07'));
		});
	});
	/* * * * * * * * * * End: SGAC Class Tests * * * * * * * * * */
});
