function SetUsername(name) {
    //complex DB calls
    this.name = name
}


function createUser(name,email,password) {
    SetUsername.call(this, name)

    this.email = email
    this.password = password
}

const Tech = new createUser("TechBoy","Tech@gmail.com",21478234)

console.log(Tech);