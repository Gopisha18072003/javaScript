const score = 100;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString());
console.log(balance.toFixed(2));

const otherNumber = 23.866
console.log(otherNumber.toPrecision(3))

const otherNumber2 = 123.896
console.log(otherNumber2.toPrecision(3));

const num = 10000000
console.log(num.toLocaleString('en-IN'));

// +++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++

console.log(Math.abs(4));
console.log(Math.abs(-4));
console.log(Math.round(4.2));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));

console.log(Math.max(4,2, 6, 7));
console.log(Math.min(6, 7,1 ,4));

console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max- min + 1)) + min);