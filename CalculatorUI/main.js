const calc = document.querySelector('.calc');
const result = document.querySelector('.calc__screen');

const backspace = document.querySelector('.calc__btn-backspace')
const myltiply = document.querySelector('.calc__btn-myltiply').innerText
const division = document.querySelector('.calc__btn-division').innerText

calc.addEventListener('click', function (event) {
	if (!event.target.classList.contains('calc-inner__btn')) return;

	backspace.onclick = () => {
		result.innerText = result.innerText.slice(0, result.innerText.length - 1)
		if (result.innerText == "") {
			result.innerText = '0'
		}
	}

	const value = event.target.innerText;

	switch (value) {
		case 'C':
			result.innerText = '0';
			console.log('clear')
			result.style.fontSize = '96px'
			break;

		case '=':
			let rez = '';

			function qwe() {
				for (let char of result.innerText) {
					if (char == '÷') {
						let arr = result.innerText.split('÷')
						rez += arr.join('/')
					} else if (char == '×') {
						let arr = result.innerText.split('×')
						rez += arr.join('*')
					} else if (char == '+') {
						let arr = result.innerText.split('+')
						rez += arr.join('+')
					} else if (char == '-') {
						let arr = result.innerText.split('-')
						rez += arr.join('-')
					}
				}
			};
			qwe();
			result.innerText = eval(rez);

			break;

		default:
			if (result.innerText == 0) {
				result.innerText = ''
			}
			result.innerText += value;
			console.log(value)
			break;


	}
	if (result.innerText.length >= 6) {
		result.style.fontSize = '85px'
	};
	if (result.innerText.length >= 8) {
		result.style.fontSize = '65px'
	}
	if (result.innerText.length >= 11) {
		result.style.fontSize = '47px'
	}
	if (result.innerText.length >= 14) {
		result.style.fontSize = '35px'
	}
});

document.addEventListener('keydown', function (event) {

	console.log('keyCode:' + event.keyCode)



	if (event.keyCode == 8) {
		result.innerText = result.innerText.slice(0, result.innerText.length - 1)
	} else if (event.keyCode >= 48 && event.keyCode <= 57) {
		if (result.innerText == 0) {
			result.innerText = ''
		}
		result.innerText += event.key;
		console.log(event.key)
	}

	if (result.innerText.length >= 6) {
		result.style.fontSize = '85px'
	};
	if (result.innerText.length >= 8) {
		result.style.fontSize = '65px'
	}
	if (result.innerText.length >= 11) {
		result.style.fontSize = '47px'
	}
	if (result.innerText.length >= 14) {
		result.style.fontSize = '35px'
	}

})