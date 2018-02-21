export function ageEarth(dateOfBirth) {
	let now = Date.now();
	let dob = new Date(dateOfBirth);
	let age = new Date(now - dob);

	return Math.abs(age.getUTCFullYear() - 1970);
}

export function ageMercury(ageEarth) {
	let converstionRate = 0.24;
	let age = ageEarth / converstionRate;
	return age;
}

export function ageVenus(ageEarth) {
	let converstionRate = 0.62;
	let age = ageEarth / converstionRate;
	return age;
}

export function ageMars(ageEarth) {
	let converstionRate = 1.88;
	let age = ageEarth / converstionRate;
	return age;
}

export function ageJupiter(ageEarth) {
	let converstionRate = 11.86;
	let age = ageEarth / converstionRate;
	return age;
}
