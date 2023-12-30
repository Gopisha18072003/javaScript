function User(email, password){
    this._email = email.toUpperCase();
    this._password = password.toUpperCase();

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email+'x'
        },
        set: function(value){
            this._email = value + 'a'
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return `${this._password}hitesh`
        },
        set: function(value){
            this._password = value + 'a'
        }
    })

}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email, hitesh._email);
console.log(hitesh.password, hitesh._password);

hitesh.email = "dummy@funmail.com"
hitesh._email = "funny@gmail.com"
console.log(hitesh.email, hitesh._email);