console.log( "2" > 1);
console.log("02" > 1);

// ************** avoid this type of comparisons **********************
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

/* The reason is that an equility check == and comparisons >, <, >=, <= works differently 
than == . Comparisons convert null to a number, treating it as 0.
That's why (0) null >= 0 is true and null > 0 is false. */

console.log(undefined <= 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false

// === 

console.log("2" === 2); // false
