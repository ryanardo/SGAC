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

export function dateDifference(date1, date2) {
	let d1 = ageInMilliseconds(date1);
	let d2 = ageInMilliseconds(date2);

	return milliSecondsToSeconds(d1 - d2);
}

export function mercury(age) {
	const conversionRateMercury = 0.24;
	let ageEarth = ageInMilliseconds(age);
	let ageMercury = new Date(ageEarth / conversionRateMercury);

	return Math.abs(ageMercury.getFullYear() - 1970);
}
