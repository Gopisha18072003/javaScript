const user= {
    username: "Gopi",
    loginCount: 8,
    signIn: true,
    getUserDetails: function() {
        // console.log("Got user Details");
        // console.log(`Username: ${username}`);
        console.log(`Username: ${this.username}`);
    }
}

console.log(user.username);
user.getUserDetails();

console.log(this); // in node environment in globat context this has empty object
// in browser env in global context this has Window object


// Construction function

// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    return this;
}

// const userOne = User("Gopi", 12, true);
// const userTwo = User("Abhay", 92, false);
// console.log(userOne);

const userOne = new User("Gopi", 12, true);
const userTwo = new User("Abhay", 92, false);
console.log(userOne);
console.log(userTwo);