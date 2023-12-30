const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value + 'a'
    }
}

const tea = Object.create(User)
tea.email = "dummy@gmail.com"
console.log(tea._email);