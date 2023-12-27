// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
    return number1 + number2
}
addTwoNumbers(3, 4)
// addTwoNumbers(4, "a")

// addTwoNumbers(3, null)

const result = addTwoNumbers(3, 5)
console.log(result) 

function loginMessage(userName = "default") {
    if(userName === undefined) {
        console.log("Please enter a userName");
        return
    }
    return `${userName} just logged In`
}

console.log(loginMessage("Gopi"));
console.log(loginMessage())

function calculateCartPrice(val1, val2, ...rest) {
    return rest;
}

console.log(calculateCartPrice(200, 400, 500, 1200));


const myObj = {
    userName: "Gopi",
    age: 20,
    location: "Jaipur"
}

// function handleObject(user) {
//     return `Hello ${user.userName}!`
// }
function handleObject({userName, location}) {
    return `Hello ${userName}! from ${location}.`
}

console.log(handleObject(myObj))
console.log(handleObject(
    {
        userName: "Arun",
        age: 12,
        location: "Asansol"
    }
));

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([10, 20, 30, 40]));