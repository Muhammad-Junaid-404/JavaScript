// let myName = "Unknown"
// let field = "Developer     "

// console.log(myName.length);
// console.log(field.length);

let Arr = ["Ford","Dodge","Camaro"]

let Obj={
    name:"Ninja H2r",
    engine:"1000cc",
    speed:"400kph"
}

Object.prototype.TechVilla = function(){
    console.log("Welcome to Tech Nation");
}

// Obj.TechVilla()
// Arr.TechVilla()


Array.prototype.TechCity = function () {
     console.log("Welcome to Land of programmers");
}


// Arr.TechCity()
// Obj.TechCity()  can't access




// inheritance 

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__:TeachingSupport
}

Teacher.__proto__= User





// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)



// problem at top
let profession = "Soft_Dev    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

profession.trueLength()
"CyberSecurity   ".trueLength()