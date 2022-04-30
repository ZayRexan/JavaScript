// function printNumbers(from, to) {
// 	let num = from;

// 	let timerId = setInterval(() => {
// 		console.log(num);

// 		if (num == to) {
// 			clearInterval(timerId);
// 		} else {
// 			num++;
// 		}
// 	}, 1000);

// 	let timerId = setTimeout(function time() {
// 		console.log(num);

// 		if (num == to) {
// 			clearInterval(timerId);
// 		} else {
// 			num++;
// 			setTimeout(time, 1000)
// 		}
// 	}, 1000)
// };

// printNumbers(0, 1000)




let timerId = setInterval(() => console.log("Привет, мир"), 500)

clearInterval(timerId)