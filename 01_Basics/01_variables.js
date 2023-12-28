const accountId = 144553;
let accountEmail = "gopishaw9191@hotmail.com";
var accountPassword = "1234";
accountCity = "Jaipur";
let accountState;

// accountId = 2 //not allowed
accountEmail = "hc@hc.com"
accountPassword = "121212"
accountCity = "Bengal";
console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
    Prefer not to use var
    beacuse of issue in block scope and 
    functional scope
*/
let bigNum = 123456789211n
console.log(typeof bigNum);