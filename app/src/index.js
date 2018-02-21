import 'bootstrap/dist/css/bootstrap.min.css';
import * as SGAC from './../js/SGAC.js';
import * as Lifespan from './../js/lifespan.js';
// import { ageEarth, ageMercury, ageVenus, ageMars, ageJupiter } from './../js/SGAC.js';
// import { lifespan } from './../js/lifespan.js';

$(document).ready(function () {

	/* * * * * * * * * * * FORM SUBMIT * * * * * * * * * * */
	$("#sgac-form").submit(function (event) {
		event.preventDefault();
		let dateOfBirth = $("#age").val();
		console.log(`dateOfBirth: ${dateOfBirth}`);
		let dob = new Date(dateOfBirth);
		console.log(`dob: ${dob}`);
		let lifeExpectancy = $("#life-expectancy").val();
		// Age(s)
		let earthAge = SGAC.ageEarth(dob);
		let mercuryAge = SGAC.ageMercury(earthAge);
		let venusAge = SGAC.ageVenus(earthAge);
		let marsAge = SGAC.ageMars(earthAge);
		let jupiterAge = SGAC.ageJupiter(earthAge);
		console.log(`earthAge: ${earthAge}`);
		console.log(`mercuryAge: ${mercuryAge}`);
		console.log(`venusAge: ${venusAge}`);
		console.log(`marsAge: ${marsAge}`);
		console.log(`jupiterAge: ${jupiterAge}`);
		//Lifespans
		let earthLifespan = Lifespan.lifespan(earthAge, lifeExpectancy);
		let mercuryLifespan = Lifespan.lifespan(mercuryAge, lifeExpectancy);
		let venusLifespan = Lifespan.lifespan(venusAge, lifeExpectancy);
		let marsLifespan = Lifespan.lifespan(marsAge, lifeExpectancy);
		let jupiterLifespan = Lifespan.lifespan(jupiterAge, lifeExpectancy);
		console.log(`earthLifespan: ${earthLifespan}`);
		console.log(`mercuryLifespan: ${mercuryLifespan}`);
		console.log(`venusLifespan: ${venusLifespan}`);
		console.log(`marsLifespan: ${marsLifespan}`);
		console.log(`jupiterLifespan: ${jupiterLifespan}`);
		// EARTH
		$(".earth-header").text(`EARTH`);
		$(".earth-age").text(`AGE: Your age on Earth is ${earthAge}`);
		$(".earth-lifespan").text(`LIFESPAN: ${earthLifespan}`);
		// MERCURY
		$(".mercury-header").text(`MERCURY`);
		$(".mercury-age").text(`AGE: Your age on Earth is ${mercuryAge}`);
		$(".mercury-lifespan").text(`LIFESPAN: ${mercuryLifespan}`);
		// VENUS
		$(".venus-header").text(`VENUS`);
		$(".venus-age").text(`AGE: Your age on Earth is ${venusAge}`);
		$(".venus-lifespan").text(`LIFESPAN: ${venusLifespan}`);
		// MARS
		$(".mars-header").text(`MARS`);
		$(".mars-age").text(`AGE: Your age on Earth is ${marsAge}`);
		$(".mars-lifespan").text(`LIFESPAN: ${marsLifespan}`);
		// JUPITER
		$(".jupiter-header").text(`JUPITER`);
		$(".jupiter-age").text(`AGE: Your age on Earth is ${jupiterAge}`);
		$(".jupiter-lifespan").text(`LIFESPAN: ${jupiterLifespan}`);
	});
});
