// let user = {};
// user.name = 'John';
// user.surname = 'Smith';

// user.name = 'Pete';
// delete user.name;



// function isEmpty(obj) {
// 	for (let key in obj) {
// 		return false;
// 	}
// 	return true;

// };

// let schedule = {};

// console.log(isEmpty(schedule)); // true

// schedule["8:30"] = "get up";

// console.log(isEmpty(schedule)); // false



// let salaries = {
// 	John: 100,
// 	Ann: 160,
// 	Pete: 130
// };

// function salary() {
// 	let sum = 0;
// 	for (let key in salaries) {
// 		sum += salaries[key];
// 	}
// 	return sum;
// }

// console.log(salary())



let menu = {
	width: 200,
	height: 300,
	title: "My menu"
};

function multiplyNumeric(obj) {
	for (let key in obj) {
		if (typeof obj[key] == 'number') {
			obj[key] *= 2;
		}
	};
	
};


console.log(menu)
multiplyNumeric(menu)
console.log(menu)