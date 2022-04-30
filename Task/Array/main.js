// let styles = [
// 	'Джаз',
// 	'Блюз',
// ];

// console.log(styles);

// styles.push('Рок-н-ролл');

// console.log(styles);

// styles[Math.round((styles.length - 1) / 2)] = "Классика";

// console.log(styles);

// console.log(styles.shift())

// console.log(styles);

// styles.unshift('Рэп', 'Регги');

// console.log(styles);


// let words = ["Я", "изучаю", "JavaScript"];

// words.splice(1, 1);

// console.log(words);


// let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];

// console.log(arr);

// arr.splice(0, 3, "Давай", "танцевать");

// console.log(arr);


// let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];

// console.log(arr);

// let removed = arr.splice(0, 2);

// console.log(arr);

// console.log(removed);




function camelize(str) {
	let arr = str.split('-')
	let asd = arr.map(item => {
		let index = arr.indexOf(item);
		if (index != 0) {
			return item[0].toUpperCase() + item.slice(1)
		} else {
			return item
		}
	});
	return asd.join('')
};

// console.log(camelize("background-color-adsdasdsa"));



// let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
	return String(arr.filter(item => (a <= item && item <= b)));
};

// console.log(filterRange(arr, 1, 4))




// function filterRangeInPlace(arr, a, b) {
// 	for (let num in arr) {
// 		if (a <= num <= b) {
// 			arr.splice(num, 1)
// 		}
// 	};
// }

// filterRangeInPlace(arr, 1, 4);

// console.log(String(arr));



// arr.sort((a, b) => b - a);

// console.log(String(arr));

let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
	let sortedArr =  arr.slice();
	return sortedArr.sort()
};

console.log(copySorted(arr)) 