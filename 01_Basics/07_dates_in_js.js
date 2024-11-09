let myDate = new Date()
console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString('en-IN'));

// Date is a object

let myCreatedDate = new Date(2023, 0, 23) // months started from 0 in js
console.log(myCreatedDate.toDateString());

let myCreatedDate1 = new Date("2023-01-12") // yy-mm-dd
console.log(myCreatedDate1.toDateString());

let myCreatedDate2 = new Date("01-01-1970") // mm-dd-yy
console.log(myCreatedDate2.toDateString());

let myTimeStamp = Date.now();
console.log(myTimeStamp); // milliseconds from 01-01-1970 to now

let newTimeStamp = myCreatedDate2.getTime();
console.log(newTimeStamp); // milliseconds from 01-01-1970 till the createdDate

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()); // 0 - 11
console.log(newDate.getDay()); // 1-7
console.log(newDate.getTime());

console.log(newDate.toLocaleString('default', {
    weekday: 'long',
}));