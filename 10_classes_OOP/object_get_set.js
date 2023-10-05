const User ={
    _email : 'unknown@gmail.com',
    _password : 'abcde',

    get email(){
        return this._email.toLowerCase()
    },
    set email(val){
        this._email = val
    }
}

const user  = Object.create(User)
console.log(user.email);