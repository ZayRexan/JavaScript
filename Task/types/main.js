// let number = 0809;
// console.log(typeof number);
// number = String(number);
// console.log(typeof number);

// let bool = false;
// console.log(typeof bool);
// bool = String(bool);
// console.log(typeof bool);

// console.log(Boolean('0'))

// console.log(2 + 2 + '2')

// console.log(+false)

// "" + 1 + 0  // '10'
// "" - 1 + 0  // -1
// true + false  // 1
// 6 / "3"  // 2
// "2" * "3"  // 6
// 4 + 5 + "px"  // '9px'
// "$" + 4 + 5  // '$45'
// "4" - 2  // 2
// "4px" - 2  // NaN
// 7 / 0  // Infinity
// "  -9  " + 5  // '  -9  +5'
// "  -9  " - 5  // -14
// null + 1  // 1
// undefined + 1  // NaN
// " \t \n" - 2  // -2

let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

alert(+a + +b); // 3