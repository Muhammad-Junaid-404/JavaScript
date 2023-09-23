// truthy and falsy

// falsy values ::
// false -- "" -- null -- undefined -- 0 -- -0 --  NaN -- BigInt 0n

// truthy values ::
// "0" -- 'false' -- " "  -- []  -- {} -- function(){}
// all remaining values are truthy values


let arr = [];
if(arr.length === 0 ){
    console.log("Array is empty");
}

let obj = {}
if(Object.keys(obj).length === 0){
    console.log("Object is empty");
}


//Nullish coalescing  (??) null undefined
// designed for null and undefined values

let name;
name = "Alex" ?? "user"
name = null ?? "user"
console.log(name);
name = undefined ?? "user"
console.log(name);
name = undefined ?? "user" ?? "admin"



// ternary operator
// condition ? statement : statement

let marks = 70;
(marks < 80) ? console.log("Grade B") : console.log("Good");