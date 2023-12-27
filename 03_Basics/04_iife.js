// Immediately Invoked Function Expression (IIFE)

// to solve the problem of global scope pollution we use IIFE
//()();

(function connect(){
    // named iife
    console.log("DB CONNECTED");
})();

// unnamed iife
(name => console.log(`${name} CONNECTED`))('Student');