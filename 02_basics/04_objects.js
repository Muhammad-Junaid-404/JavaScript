
// const twitterUser = new Obj()  //singleton user

const twitterUser ={}

twitterUser.name = "Bob"
twitterUser.id = 23
twitterUser.logedIn = false

// console.log(twitterUser);

const nestedobj = {
    id:99,
    name:{
        fullName:{
            FirstName:"Js",
            LastName:"sensei"
        }
    }
}
// console.log(nestedobj.name.fullName.FirstName);


const obj1={1:"a",2:"b",3:"c"}
const obj2={4:"a",5:"b",6:"c"}
const obj3={7:"a",8:"b",9:"c"}

// const obj4 ={obj1,obj2}
// const obj4 = Object.assign({},obj1,obj2,obj3);   // source -- target
const obj4 = {...obj1,...obj2,...obj3}
console.log(obj4);



// keys & values
console.log(Object.keys(twitterUser));
console.log(Object.values(twitterUser));
console.log(Object.entries(twitterUser));

// checking if value exist
console.log(twitterUser.hasOwnProperty("logedIn"));

