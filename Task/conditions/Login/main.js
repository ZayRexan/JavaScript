// let login = prompt('Кто там?', '');

// if (login == null) {
// 	alert('Отменено');
// } else if (login == 'Админ') {
// 	let password = prompt('А пароль хде?', '');
// 	if (password == null) {
// 		alert('Отменено');
// 	} else if (password == 'Я Главный') {
// 		alert('Здравствуйте!');
// 	} else {
// 	alert('Неверный пароль');
// 	}
// } else {
// 	alert('Я вас не знаю :(');
// };

// let name = prompt('Какое "официальное название" JavaScript?', '');

// if (name === 'ECMAScript') {
// 	alert('Верно!');
// } else {
// 	alert('Не знаете? “ECMAScript”!');
// };

// let num = +prompt('Введите число', '');

// if (num > 0) {
// 	alert('1');
// } else if (num < 0) {
// 	alert('-1');
// } else {
// 	alert('0');
// };

// let result;

// if (a + b < 4) {
// 	result = 'Мало';
// } else {
// 	result = 'Много';
// }

// let result = (a + b < 4) ? 'Мало' : 'Много';

// let message;

// if (login == 'Сотрудник') {
// 	message = 'Привет';
// } else if (login == 'Директор') {
// 	message = 'Здравствуйте';
// } else if (login == '') {
// 	message = 'Нет логина';
// } else {
// 	message = '';
// }

let login;

let message = (login == 'Сотрудник') ? 'Привет' : 
(login == 'Директор') ? 'Здравствуйте' :
(login == '') ? 'Нет логина' : '';