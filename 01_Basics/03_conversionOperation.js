let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);

// "33" => 33
// "33abc" => NaN which is a number type
// true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // true

// 1 => true; 0 => false
// "" => false
// "abc" => true

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);

// ************************** Opeartions ******************************

let value = 3
let negValue = -value
// console.log(negValue);

let str1 = "hello"
let str2 = " world"

let str3 = str1 + str2
console.log(str3);

console.log("1" +2 ); // 12
console.log(1 + "2"); // 12
console.log("1" + "2"); // 12
console.log( "1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32

console.log(+true); // 1
console.log(+"") // 0

let num1, num2, num3
num1 = num2 = num3 = 2+2

let gameCounter = 100
gameCounter ++; // post increment
console.log(gameCounter);

