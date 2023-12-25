// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["shaktiman", "Naagraj"];
const myArr2 = new Array(1, 2, 3, 4)

console.log(myArr[0]);

// Array methods

myArr.push(6)
console.log(myArr);

myArr.pop();
console.log(myArr);

myArr.unshift('first')
console.log(myArr);

myArr.shift()
console.log(myArr);

myArr.shift()
console.log(myArr);

console.log(myArr.includes(8));
console.log(myArr.indexOf(9));

const newHero = myHeroes.join()
console.log(newHero)
console.log(typeof newHero)

// slice, splice

console.log("A ", myArr);
const myn1 = myArr.slice(1, 3)
console.log("B ", myn1)


const myn2 = myArr.splice(1, 3)
console.log("A ", myArr);
console.log("C ", myn2)