const topperStudent = new Object();
// singleton object

const buffaloStudent = {};
// non singleton object

buffaloStudent.id = "123abc"
buffaloStudent.name = "Sam"
buffaloStudent.isLoggedIn = false

console.log(buffaloStudent);

const regularStudent = {
    email: "gopishaw111@gmail.com",
    dept: {
        name: "Information Technology",
        floor: "3rd",
        hod: "Dr. A Mukhopadhayay"
    }
}

console.log(regularStudent.dept.name);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1 + obj2}
const obj3 = Object.assign({}, obj1, obj2) // {} is target and others are source
console.log(obj3);

const obj4 = {5: "e", 6: "f"}
const obj5 = Object.assign(obj4, obj1, obj2)
console.log(obj4);

const obj6 = {...obj1, ...obj2}
console.log(obj6);

const placedStudent = [
    {
        id: 1,
        name: "Rajesh",
        CTC: "12"
    },
    {
        id: 4,
        name: "Bishal",
        CTC: "3.6"
    },
    {
        id: 2,
        name: "Arun",
        CTC: "24"
    },
    {
        id: 6,
        name: "Sharan",
        CTC: "7.5"
    }
]

console.log(placedStudent[2].name);

console.log(Object.entries(buffaloStudent));
console.log(Object.keys(buffaloStudent));
console.log(Object.values(buffaloStudent));

console.log(buffaloStudent.hasOwnProperty("email"));


// ++++++++++++++++++++++++ object Destructuring ++++++++++++++++++++++++++++++++++
const course = {
    courseName: "javaScript",
    price: "999",
    duration: "26"
}

// const {courseName} = course;
// console.log(courseName);

const {courseName: name} = course
console.log(name);

