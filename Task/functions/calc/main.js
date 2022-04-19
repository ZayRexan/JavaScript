function Calc(action, a, b) {

	if (typeof (a) !== 'number' ||
		typeof (b) !== 'number' ||
		action === undefined) {

		return ('Error');

	} else if (action === 'sum') {
		return (a + b);
	} else if (action === 'sub') {
		return (a - b);
	} else if (action === 'multi') {
		return (a * b);
	} else if (action === 'div') {
		return (a / b);
	} else if (action === 'deg') {
		return (a ** b);
	} else if (action === 'rem') {
		return (a % b);
	} else {
		return ('Unknown operation');
	}

}

console.log(Calc('rem', 5, 0));
