const calc = document.querySelector('.calc');
const result = document.querySelector('.calc__screen');

const myltiply = document.querySelector('.calc__btn-myltiply').innerText
const division = document.querySelector('.calc__btn-division').innerText

calc.addEventListener('click', function (event) {
	if (!event.target.classList.contains('calc-inner__btn')) return;

	const value = event.target.innerText;

	switch (value) {
		case 'C':
			result.innerText = '0';
			console.log('clear')
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

		case "":
			result.innerText = result.innerText.slice(0, result.innerText.length - 1)
			break;

		default:
			if(result.innerText == 0){
				result.innerText = ''
			}
			result.innerText += value;
			console.log(value)
			break;
	}
});