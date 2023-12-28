// for of

// ["", "", ""]
// [{}, {}, {}]

const integers = [1, 2, 3, 4, 5]
for(const integer of integers) {
    console.log(integer);
}

const message = "Hello World!"
for(const char of message) {
    console.log(char);
}

// maps

const map = new Map();
map.set('IN', "India")
map.set('USA', "United states of america")
map.set("FR", 'France')
map.set('IN', 'India')

for(const [key, value] of map) {
    console.log(key, ': ', value);
}

const topper = {
    name: "Gopi",
    roll: 1075,
    dept: "IT"
}

// objects are not iteratable

// for(const [name, roll, dept] of topper) {
//     console.log(name, " ", roll, " ", dept);
// }

const datas = [["gopi", 12, "IT"], ["Arun", 16, "CSE"]];
for(const data of datas ) {
    console.log(data);
}

const students = [
    {
        name: "Gopi",
        roll: 121
    },
    {
        name: "Abhay",
        roll: 191
    }
]

for(const student of students){
    console.log(student);
}