//functions

// function sum (num1,num2){
//     console.log(num1 + num2);
// }
// sum(5,6)

function sum (num1,num2){
        //  let result = num1 + num2;
        //  return result; 
          return num1 + num2
    }

const result = sum(6,4)
// console.log("Result: ",result);



function loginMessage (username = "user"){   // with a default value
    // if(username === undefined){
        if(!username){
    console.log("Please enter a user name!");
        return
    }
    return `${username} just logged in`
} 
// console.log( loginMessage("TechBoy"));
// console.log( loginMessage());





function  itemsCart (val1,val2,...num1){
    return  num1
}
// console.log( itemsCart(23,34,35,34,2,3,32,66));

// with object
const user ={
    name : "TechGuy",
    price : 34
}
function customer(user){
    return `Username is ${user.name} and price  is ${user.price}`
}
// function customer({name,price}){
//     return `Username is ${name} and price  is ${price}`
// }
console.log(customer(user));
console.log(customer({name : "TechBudy",price:"98"}));


// with array
const numArray = [20,3,5,13,89]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(numArray));