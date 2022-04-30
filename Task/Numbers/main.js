// let firstNum = +prompt('Введите первое число', '');
// let secondNum = +prompt('Введите второе число', '');
// alert(firstNum + secondNum)

// function readNumber() {
// 	let num;
// 	do {
// 		num = +prompt('Введите число', '');
// 	} while (!isFinite(num));

// 	if (num == null || num == '') return null

// 	return num
// };

// alert('Число: ' + readNumber())

function random(min, max) {
	let answer = min;
	while (answer < max - 1) {
		let random = Math.random();
		answer += random
	}
	console.log(answer);
};

random(5, 10);