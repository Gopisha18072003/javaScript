// for 

for(let i = 0; i< 10; i++) {
    const element = i;
    if(element == 5){
        console.log("5 is best number");
    }
    console.log(element);
}

// console.log(element);


// nested loops

for (let i = 0; i<5; i++) {
    for(let j = 0; j<5; j++)
    {
        console.log(`Inner Loop ${i} and Outer loop ${j}`);
    }
}

const heroes = ['flash', 'batman', 'superman']
for(let index = 0; index<heroes.length; index++) {
    const element = heroes[index];
    console.log(element);
}

// break and continue

for (let index = 1; index <= 5; index++) {
    if(index == 2) {
        console.log("2 Detected, hence exit");
        break;
    }
    console.log(index);
}

for(let i = 1; i <= 5; i++) {
    for(let j = 1; j <= 5; j++) {
        if(i == j)
            continue;
        else
            console.log(`${i} - ${j}`);
    }
}