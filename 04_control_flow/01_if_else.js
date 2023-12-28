// if

let isLoggedIn = false

if(isLoggedIn){
    console.log("Log in Successful");
} else {
    console.log("log in Unsuccessful");
}

// comparison operators
// <, >, <=, >=, !=, ===. !==

let temperature = "21"
if(temperature > 22) {
    console.log("Good Weather");
} else {
    console.log("Cold Weather");
}


const cgpa = 6.7

if(cgpa > 7.0)
{
    const key = "r14G"
    console.log("You have been qualified!");
    console.log(`Your is ${key}`);
}
// console.log(`key for the logIn is ${key}`);

let balance = 600
// not suggested
if(balance> 500) console.log("You can withdraw"), console.log("Your balance will be too low");

// if else if else

let marks = 86
let grade = null
if(marks > 90)
{
    grade = "A"
} else if(marks > 80)
{
    grade = "B"
} else if(marks >70)
{
    grade = "C"
} else if(marks >60)
{
    grade = "D"
} else if(marks >33)
{
    grade = "E"
} else {
    grade = "F"
}
console.log(`Your Grade is ${grade}`);

let withdrawAmount = 15001

if(withdrawAmount> 500 && withdrawAmount%5 == 0)
{
    console.log("You can withdraw your money");
} else {
    console.log("Insufficient Balance or Entered amount is not multiple of 500");
}

let loggedInWithEmail = false
let loggedInWithGoogle = true
if(loggedInWithEmail || loggedInWithGoogle)
{
    console.log("login Successful!");
} else {
    console.log("login Unsuccessful! Try Again");
}