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
