// how data is stored and access in the memory data types are categorized into two types

// 1. Primitive
// 7 types : Stirng, Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId) // false

const bigNumber = 321213787872121n;

// 2. Reference (Non Primitive)
//  Array, Objects, Functions

const heroes = ["Ironman", "Spiderman"];
let myObj = {
    name: "Thor",
    age: 22
}

const myFunction = function(){
    console.log("hello world");
}
// javaScript is a dynamically typed language because before initializing a variable we don't have to state or declare the data type


// typeOf operator result

// Undefined => "undefined"
// Null => "object"
// Boolean => "Boolean"
// Number => "Number"
// String => "String"
// Object => "object"
console.log(myFunction); // "[Function: myfuncton]"

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Stack (Primitive), Heap ( Non Primitive)

let myName = "Gopi"; // stored in stack
let anotherName;
anotherName = myName;
console.log(anotherName); // Gopi

anotherName = "Rahul";

console.log(myName); // Gopi
console.log(anotherName); // Rahul

let userOne = {
    userName : "Gopi@123",
    email : "gopishaw111@gmail.com",
    upid : "gopi@ybl"
}

let userTwo = userOne

userTwo.upid = "gopi@apl";
console.log(userOne);
console.log(userTwo);
