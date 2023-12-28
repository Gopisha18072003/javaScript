let index = 0
while(index < 10) {
    console.log(`value of index is ${index}`)
    index ++;
}

let myArray = ['flash', 'batman','superman']
let idx = myArray.length -1
while(idx > -1) {
    console.log(myArray[idx]);
    idx --;
}

do {
    console.log("This line will print once");
}while(idx > -1);