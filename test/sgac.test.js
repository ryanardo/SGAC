import * as SGAC from '../app/js/SGAC.js';
const assert = require('assert');

describe('SGAC', function () {
	/* * * * * * * * * * Start: SGAC Class Tests * * * * * * * * * */
	// Calculate age on Earth.
	describe('ageEarth', function () {
		it('[ageEarth] should return 28.', function () {
			assert.equal(28, SGAC.ageEarth('1989-03-07'));
		});
	});
	// Calculate age on Mercury.
	describe('ageMercury', function () {
		it('[ageMercury] should return 117.', function () {
			let age = SGAC.ageEarth('1989-03-07');
			assert.equal(117, SGAC.ageMercury(age));
		});
	});
	// Calculate age on Venus.
	describe('ageVenus', function () {
		it('[ageVenus] should return 45.', function () {
			let age = SGAC.ageEarth('1989-03-07');
			assert.equal(45, SGAC.ageVenus(age));
		});
	});
	/* * * * * * * * * * End: SGAC Class Tests * * * * * * * * * */
});
