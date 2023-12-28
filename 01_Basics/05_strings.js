const name = "Gopi"
const repoCount = 50

// console.log(name + repoCount + "value");
console.log(`Hello my name is ${name} and my reppo count is ${repoCount}`);

const gameName = new String('Gopi');

console.log(gameName[0]);
console.log(gameName.__proto__); // to check all the methods of string in console

console.log(gameName.length); // 4
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));
