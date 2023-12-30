class User {
    constructor(email, password){
        this.email = email.toUpperCase();
        this.password = password.toUpperCase();
    }

    get email(){
        return this._email
    }
    set email(value){
        this._email = value + 'a'
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value + 'a'
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email, hitesh._email);
console.log(hitesh.password, hitesh._password);

hitesh.email = "dummy@funmail.com"
// hitesh._email = "funny@gmail.com"
console.log(hitesh.email, hitesh._email);