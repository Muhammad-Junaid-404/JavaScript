// -- Primitive
// 7 Types: number , string , boolean , null , undefined , symbol,BigInt 

const score = 100
const scoreVal = 10.5

let loggedIn = false
let outerTemp = null
let email;

let id = Symbol("123")
let id2 = Symbol("123")
console.log(id === id2);

let bigNumber = 428394789890n


// -- Reference (non-Primitive)

Object , Array , Function

let city = ["TechValley","HiddenCave","HackedIsland"]

let bio ={
    name : "Paradox",
    age  : 999
}

const Func = function () {
    console.log("I am function");
}




console.log(typeof bigNumber);



// ********** Stack & Heap Memory ********* //

let variableOne = "unknown@gmail.com"
let variableTwo = variableOne

variableTwo = "Tech@gmail.com"

console.log(variableOne);
console.log(variableTwo);

let Obj1 ={
    name : "TechValley",
    location :"North"
}

let Obj2 = Obj1

Obj2.name = "Tech City"

console.log(Obj1);
console.log(Obj2);