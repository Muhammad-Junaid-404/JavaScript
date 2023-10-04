// Math . Pi

 const descriptor =  Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 4;
// console.log(Math.PI);


const tea = {
    name : "green tea",
    price : 25,
    isAvailable : true,
    
    orderChai: function(){
        console.log("chai nhi bni");
    }
}

// console.log(tea);
// console.log(Object.getOwnPropertyDescriptor(tea, "price"))

console.log("---------------");

//  defining properties
Object.defineProperty(tea,"price",{
    writable: false,
    enumerable : false
})
// console.log(Object.getOwnPropertyDescriptor(tea, "price"))


for (const [key,value] of Object.entries(tea)) {
     if ( typeof value !== 'function') {
        console.log(`${key } : ${value}`);
     }
}

//  Cannot redefine property: PI

// Object.defineProperty(Math,"PI",{
//     writable: true,
//     enumerable: true,
//     configurable: true
// })

// Math.PI = 4;
// console.log(math.PI);