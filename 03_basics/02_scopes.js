// scopes

let a = 3;
const b = 7;
// var c = 8;

if(true){
    let a = 45
    const b = 87
// console.log(a);
// console.log(b);

    // var c = 34   // var causes a problem 
}


// console.log(a);
// console.log(b);
// console.log(c);




// nested scope
function one(){
    const user = "TechWarrior"

    function two(){
        const website = "TechWorld.com"
        console.log( user);
    }
    // console.log(website); // will cause an error because it is braces scoped
    two()
}
// one()



if(true){
    const user = "TechValkyrie"
    if(user === "TechValkyrie"){
        const website = "TechCity.com"
        console.log(user + " " +website);
    }
    // console.log(website);
}
// console.log(user);




// **************** interesting ***************** //

console.log(Addone(9))
function Addone(num){
  return num + 1
}


// console.log(Addtwo(4))   // below function cannot be accessed above declaration
const Addtwo = function (num){
  return num + 1
}