// singleton
// Object.create()

//object literrals
const mySym = Symbol("key1")
const jsUser = {
    name: "Gopi",
    "full name": "Gopi Shaw",
    [mySym]: "myKey1",
    age: 21,
    loc: "Raniganj",
    email: "gopishaw111@gmail.com",
    isLoggedIn: false,
    lastLogin: ["Monday", "Saturday"]
}

console.log(jsUser.email)
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);

jsUser.email = "gopisha18072003@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "chatgpt18072003@gmail.com"
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS user ${this.name}`);
}

console.log(jsUser.greeting); // undefined
jsUser.greeting();
jsUser.greetingTwo();