// for in
// returns keys at each iteration

const topper = {
    name: "Gopi",
    roll: 1075,
    dept: "IT"
}

// for(const key in topper) {
//     console.log(`${key} - ${topper.key}`);
// }

for(const key in topper) {
    console.log(`${key} - ${topper[key]}`);
}

// notthing will be printed
const map = new Map();
map.set('IN', "India")
map.set('USA', "United states of america")
map.set("FR", 'France')
map.set('IN', 'India')

for(const key in map) {
    console.log(key);
}

const heroes = ['flash', 'batman', 'Raone'];
for(const hero in heroes) {
    console.log(hero); // gives index
    console.log(heroes[hero])
}

const datas = [["gopi", 12, "IT"], ["Arun", 16, "CSE"]];
for(const data in datas ) {
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

for(const student in students){
    console.log(student);
    for(const val in students[student]) {
        console.log(`${val} - ${students[student][val]}`);
    }
}