const genNumberRange = (max, min, floor) => {
	if (floor) return Math.floor(Math.random() * (max - min + 1) + min);
	else return Math.random() * (max - min + 1) + min;
};
const generateLicense = () => {
	const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

	var license = '';

	for (var i = 0; i < 2; i++) {
		license += letters.charAt(Math.floor(Math.random() * letters.length));
	}
	license += '-';

	for (var i = 0; i < 4; i++) {
		license += Math.floor(Math.random() * (9 + 1));
		if (i === 1) license += '-';
	}
	return license;
};

const genNif = () => {
	let nif = '';
	// var nif = "";
	let valid = [
		[1, 2, 3, 5, 6, 8],
		[45, 70, 74, 75, 71, 72, 77, 78, 79, 90, 91, 98, 99]
	];
	let OneOrTwo = genNumberRange(1, 0, true);
	if (OneOrTwo === 0) {
		nif += valid[OneOrTwo][genNumberRange(0, valid[OneOrTwo].length, true)];
		nif += Math.floor(Math.random() * 100000000);
	} else {
		nif += valid[OneOrTwo][genNumberRange(0, valid[OneOrTwo].length, true)];
		nif += Math.floor(Math.random() * 10000000);
	}
	return nif;
};
const genLatitude = () => {
	return genNumberRange(-85.05112878, 85.05112878, false);
};
const genLongitude = () => {
	return genNumberRange(-180, 180, false);
};

module.exports = {
	genNumberRange,
	generateLicense,
	genNif,
	genLatitude,
	genLongitude
};
