export function lifespan(ageNow, ageMax) {
	if (ageNow > ageMax) {
		let warning = "warning! You are already passed your expected lifespan, be careful!"
		return warning;
	} else if (ageNow < ageMax) {
		let timeleft = ageMax - ageNow;
		return `You have ${timeleft} years left to go!`;
	}
}
