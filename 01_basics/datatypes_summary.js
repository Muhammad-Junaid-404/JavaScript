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