// Classes 



class User {
    constructor(name,email,password){
        this.name = name;
        this.email = email;
        this.password = password;
    }
     
    encryptPassword(){
        return `${this.password}123`
    }
    userName(){
        return `${this.name.toUpperCase()}`
    }

}

const Tech = new User("TechPro","Tech@gmail.com","abc")
console.log(Tech);
console.log(Tech.encryptPassword());
console.log(Tech.userName());





// behind the scene

function Client(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

Client.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
Client.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new Client("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());