var c = 0
let a = 300
if(true) {
    let a = 10
    const b = 20
    var c = 30
    console.log("Inner = ", a);
}

console.log("Outside = ", a);
// console.log(b);
console.log(c);

// global scope in node environment is different from global scope in browser environment

function outer() {
    const userName = "Gopi"
    
    function inner() {
        const innerVar = "Hello"
        console.log(`Hello ${userName}!`)
    }
    // console.log(innerVar);
    inner();
}

outer()

// +++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++
console.log(addOne(5));
function addOne(num) {
    return num + 1;
}

// console.log(addTwo(5));
const addTwo = function(num) {
    return num + 2;
}