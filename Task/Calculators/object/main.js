function Calc(action, a, b) {

	const operations = {
		'sub': a - b,
		'sum': a + b,
		'mult': a * b,
		'div': a / b
	}

	if (action in operations) {
		return operations[action];
	} else {
		return ('пошёл нахрен');
	};
};

console.log(Calc('sub', 143, 3));