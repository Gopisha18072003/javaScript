const myNums = [1, 2, 3, 4, 5, 6]
const newNums = myNums.map((num) => num+10)
console.log(newNums);

const evenNums = [2, 6, 8, 12, 4.2, 18, 26]
const divBy11 = evenNums
                        .map((num) => num *10)
                        .map((num) => num + 2)
                        .filter((num) => !(num%11))

console.log(divBy11);