const userEmails = []
if(userEmails) {
    console.log("Got UserEmail");
} else {
    console.log("Did not get UserEmail");
}

// falsy values

// false, 0, -0, Bigint 0n, "", null, undefined, NaN

//truthly values
// "0", 'false', " ". [], {}, function(){}

if(userEmails.length == 0) {
    console.log("UserEmail not found!!");
}

const user = {}

if(Object.keys(user).length) {
    console.log("Got user details");
} else {
    console.log("User details not found");
}

// Nullish Coalescing Operator (??): null undefined

let val;
val = val ?? 10
console.log(val);

let grade = null
grade = grade ?? "F"
console.log(grade);

// Ternary Operator

// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");