// singleton
// Object.create()  //  through constructor method


// object literatals

const Sym =  Symbol("key1")

const Obj = {
    name:"Unknown",
    "title nickname":"Tech Gen",
    age:99,
    city:"Tech city",
    email:"notAvailable@gmail.com",
    loggedIn:false,
    detail:["busy","24/7"],
    [Sym]: "key1"
}

// console.log(Obj.name);
// console.log(Obj["email"]);
// console.log(Obj["title nickname"]);  // special case
// console.log( Obj[Sym]);


// console.log(Obj);
// Obj.email="NotAvailabletoFANG.com"
// console.log(Obj);
// Object.freeze(Obj)  //freezes the object
// Obj.email="AvailableAtTech.com"
// console.log(Obj);


Obj.greeting = function(){
    console.log("Welcome to Objects in Js");
}

console.log(Obj.greeting());


Obj.greeting2=function(){
    console.log("Welcome to Js " + this.name);
}
console.log(Obj.greeting2());