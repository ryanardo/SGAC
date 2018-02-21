import * as Lifespan from '../app/js/lifespan.js';
const assert = require('assert');

describe('Lifespan', function () {
	/* * * * * * * * * * Start: Lifespan Class Tests * * * * * * * * * */
	// Display warning if Lifespan is overdue.
	describe('Lifespan overdue', function () {
		it('[Lifespan] should return a warning.', function () {
			assert.equal("warning! You are already passed your expected lifespan, be careful!", Lifespan.lifespan(71, 69));
		});
	});
	// Display message if time left on Lifespan.
	describe('Lifespan OK', function () {
		it('[Lifespan] should return a message letting you know how many years you have left.', function () {
			assert.equal("You have 41 years left to go!", Lifespan.lifespan(28, 69));
		});
	});
	/* * * * * * * * * * End: Lifespan Class Tests * * * * * * * * * */
});
