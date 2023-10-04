class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

     static createId(){          // static restricts the func from being accessed
        return `1 2 3`
    }
}

const client = new User("Unknown")
// console.log(client.createId());  

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}


const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());    //can't access static function