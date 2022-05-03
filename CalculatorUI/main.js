const calc = document.querySelector('.calc');
const result = document.querySelector('.calc__screen');

const backspace = document.querySelector('.calc__btn-backspace')
const myltiply = document.querySelector('.calc__btn-myltiply').innerText
const division = document.querySelector('.calc__btn-division').innerText

let firstNum = '';
let secondNum = '';

calc.addEventListener('click', function (event) {
	if (!event.target.classList.contains('calc-inner__btn')) return;

	backspace.onclick = () => {
		result.innerText = result.innerText.slice(0, result.innerText.length - 1)
		if (result.innerText == "") {
			result.innerText = '0'
		}
	}

	let value = event.target.innerText;

	let last = result.innerText[result.innerText.length - 1]

	if (value == "+" || value == "-" || value == "÷" || value == "×") {
		if (last == "+" || last == "-" || last == "÷" || last == "×") {
			result.innerText = result.innerText.slice(0, result.innerText.length - 1)
		};
	};

	switch (value) {
		case 'C':
			result.innerText = '0';
			result.style.fontSize = '96px'
			break;

		case '=':
			for (let char of result.innerText) {
				if (char == '÷') {
					let arr = result.innerText.split('÷')
					firstNum = arr.shift()
					secondNum = arr.pop()
					result.innerText = firstNum / secondNum;
				} else if (char == '×') {
					let arr = result.innerText.split('×')
					firstNum = arr.shift()
					secondNum = arr.pop()
					result.innerText = firstNum * secondNum;
				} else if (char == '+') {
					let arr = result.innerText.split('+')
					firstNum = arr.shift()
					secondNum = arr.pop()
					result.innerText = +firstNum + +secondNum;
				} else if (char == '-') {
					let arr = result.innerText.split('-')
					firstNum = arr.shift()
					secondNum = arr.pop()
					result.innerText = firstNum - secondNum;
				}
			}
			break;
		default:
			if (result.innerText == 0) {
				result.innerText = ''
			}
			result.innerText += value;
			break;


	}

	if (result.innerText.length >= 6) result.style.fontSize = '85px'
	if (result.innerText.length >= 8) result.style.fontSize = '65px'
	if (result.innerText.length >= 11) result.style.fontSize = '47px'
	if (result.innerText.length >= 14) result.style.fontSize = '35px'
});

document.addEventListener('keydown', function (event) {

	let value = event.target.innerText;

	let last = result.innerText[result.innerText.length - 1]

	if (value == "+" || value == "-" || value == "÷" || value == "×") {
		if (last == "+" || last == "-" || last == "÷" || last == "×") {
			result.innerText = result.innerText.slice(0, result.innerText.length - 1)
		};
	};

	if (event.keyCode == 8) {
		result.innerText = result.innerText.slice(0, result.innerText.length - 1)
	} else if (event.keyCode >= 48 && event.keyCode <= 57 || event.keyCode >= 96 && event.keyCode <= 105) {
		if (result.innerText == 0) {
			result.innerText = ''
		}
		result.innerText += event.key;
	} else if (event.keyCode == 191 || event.keyCode == 111) {
		result.innerText += '÷';
	} else if (event.keyCode == 106) {
		result.innerText += '×';
	} else if (event.keyCode == 107) {
		result.innerText += '+';
	} else if (event.keyCode == 109) {
		result.innerText += '-';
	} else if (event.keyCode == 13) {
		for (let char of result.innerText) {
			if (char == '÷') {
				let arr = result.innerText.split('÷')
				firstNum = arr.shift()
				secondNum = arr.pop()
				result.innerText = firstNum / secondNum;
			} else if (char == '×') {
				let arr = result.innerText.split('×')
				firstNum = arr.shift()
				secondNum = arr.pop()
				result.innerText = firstNum * secondNum;
			} else if (char == '+') {
				let arr = result.innerText.split('+')
				firstNum = arr.shift()
				secondNum = arr.pop()
				result.innerText = +firstNum + +secondNum;
			} else if (char == '-') {
				let arr = result.innerText.split('-')
				firstNum = arr.shift()
				secondNum = arr.pop()
				result.innerText = firstNum - secondNum;
			}
		}
	}

	if (result.innerText.length >= 6) result.style.fontSize = '85px'
	if (result.innerText.length >= 8) result.style.fontSize = '65px'
	if (result.innerText.length >= 11) result.style.fontSize = '47px'
	if (result.innerText.length >= 14) result.style.fontSize = '35px'

})