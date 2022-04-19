function Calc(action, a, b) {

	if (typeof (a) !== 'number' ||
		typeof (b) !== 'number' ||
		action === undefined) {
		return ('Error');

	} else {

		switch (action) {
			case 'sum':
				return (a + b);

			case 'sub':
				return (a - b);

			case 'multi':
				return (a * b);

			case 'div':
				return (a / b);

			case 'deg':
				return (a ** b);

			case 'rem':
				return (a % b);

			default:
				return ('Unknown operation');
		}

	}
}

console.log(Calc('div', 5, 2));