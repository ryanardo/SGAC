export function ageInMilliseconds(age) {
	let ageDate = new Date(age);
	let ageMilliseconds = ageDate.getTime();
	return ageMilliseconds;
}

export function milliSecondsToSeconds(ms) {
	const convertRatio = 0.001;
	let msToSec = ms * convertRatio;
	return msToSec;
}




/*
ORIGINAL FUNCTIONS/CODE
*/
export function yearsToSeconds(age1) {
	const secondsInAYear = 31536000;
	let ageInSeconds = age1 * secondsInAYear;

	return ageInSeconds
}

export function yearDifferenceInSeconds(age1, age2) {
	let date1 = new Date(age1);
	let date2 = new Date(age2);
	let time1 = date1.getTime();
	let time2 = date2.getTime();
	let dateDifference = milliSecondsToSeconds(time1) - milliSecondsToSeconds(time2);

	return dateDifference;
}

export function ageCalculation(dob) {
	let dobDate = new Date(dob);
	let dobTime = dob.getTime();
	let currentDate = Date.now();

	let age =
}
