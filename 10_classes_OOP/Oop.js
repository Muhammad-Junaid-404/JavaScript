const user= {
    name:"TechBoy",
    loginCount:8,
    signIn:true,

    getUserDetails:function () {
        // console.log("Got user details");
        console.log(`Username: ${this.name}`);
        console.log(this);
    }
}

// console.log(user.name);
// console.log(user.getUserDetails());
// console.log(this);


function User(username,loginCount,isloggedIn) {
    this.username=username;
    this.isloggedIn=isloggedIn;
    this.loginCount=loginCount;

      this.greetings=function () {
        console.log(`Welcome ${this.username}`);
      }

    return this  //implicit return
}


const userOne = new User('TechNation',true,5)
const userTwo = new User('TechGuy',true,9)
console.log(userOne);
console.log(userTwo);
console.log(userOne.constructor);

// by writing new keyword an empty object is created 
// constructor function called due to new keyword
// this keyword is injected
// returned