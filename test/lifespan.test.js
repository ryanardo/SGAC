import * as Lifespan from '../app/js/lifespan.js';
const assert = require('assert');

describe('Lifespan', function () {
	/* * * * * * * * * * Start: Lifespan Class Tests * * * * * * * * * */
	// Calculate age on Earth.
	describe('Lifespan overdue', function () {
		it('[Lifespan] should return a warning.', function () {
			assert.equal("warning! You are already passed your expected lifespan, be careful!", Lifespan.lifespan(71, 69));
		});
	});
	/* * * * * * * * * * End: Lifespan Class Tests * * * * * * * * * */
});
