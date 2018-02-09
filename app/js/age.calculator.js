export function ageInMilliseconds(age) {
	let ageDate = new Date(age);
	let ageMilliseconds = ageDate.getTime();
	return ageMilliseconds;
}
