const lang = ['js', 'py', 'ruby', 'java']

lang.forEach(function (item){
    console.log(item);
    }
)

lang.forEach((val) => {
    console.log(val.toUpperCase());
})

function printMe(item) {
    console.log(item);
}

lang.forEach(printMe);

lang.forEach((item, index, arr) => 
    {
        index = index +1
        console.log(`${index}. ${item.toUpperCase()} from ${arr}`);
    }
)


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

students.forEach((student) => {
    console.log(student.name);
})