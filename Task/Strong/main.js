let word = "infocoder";

// console.log(word.length)
// console.log(word[0])
// console.log(word[2])
// console.log(word[word.length - 1])
// console.log(word[word.length - 2])


// First version 

// function upperCase(num, word) {
// 	let asd;
// 	num -= 1;
// 	for (let char of word) {
// 		asd = word.indexOf(char);

// 		if (asd === num) {
// 			console.log(char[0].toUpperCase());
// 		} else {
// 			console.log(char);
// 		};
// 	};
// };


// Second version

// function upperCase(num, word) {
// 	let asd;
// 	let sdf;
// 	num -= 1;
// 	for (let char of word) {
// 		asd = word.indexOf(char);

// 		if (asd === num) {
// 			sdf += char;
// 			sdf += char[0].toUpperCase()
// 		} else {
// 			sdf += char;
// 		};
// 	};
// 	console.log(sdf)
// };

// upperCase(2, word);

// function showVerticalMessage(word) {
// 	for (let char of word) {
// 		console.log(char);
// 	};
// };

// showVerticalMessage('word');

// function ucFirst(word) {
// 	let first = word[0].toUpperCase();
// 	let others = word.slice(1);
// 	console.log( first + others );
// }

// ucFirst('word');

// function checkSpam(str) {
// 	let lower = str.toLowerCase()
// 	let firstCheck = lower.includes('viagra')
// 	let secondCheck = lower.includes('xxx')
// 	console.log(firstCheck || secondCheck)
// }

// checkSpam("Hello, world")

function truncate(str, maxlength) {
	let length = str.length;
	if (length > maxlength) {
		console.log(str.slice(0, maxlength) + "...");
	} else {
		console.log(str);
	};
};

truncate('1234567890123456789012345678901234567890', 9)


function extractCurrencyValue(str) {
	console.log(+str.slice(1))
}

extractCurrencyValue("$120")