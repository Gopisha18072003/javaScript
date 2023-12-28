const user = {
    userName: "Gopi",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.userName}, Welcome to my website`);
        console.log(this);
    }
}

user.welcomeMessage()
user.userName = "Arun"
user.welcomeMessage()

console.log(this)
// in browser this reffered to window object(global object) and in node environment this reffered to empty object

function chai() {
    let username = "Gopi"
    console.log(this);
    console.log(this.username);
}

chai()

// +++++++++++++++++++++ arrow function +++++++++++++++++++++

const chai2 = () => {
    let username = "Gopi"
    console.log(this);
    console.log(this.username);
}
chai2()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// if {} is used then return keyword is necessary

// const addTwo = (num1, num2) => num1 + num2

const addTwo = (num1, num2) => (num1 + num2)

console.log(addTwo(3,4))

const returnObj = () => ({userName: "Gopi"})
console.log(returnObj());