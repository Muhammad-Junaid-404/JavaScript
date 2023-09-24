// Reduce method
const number = [1,3,8,4,5,3,4,6,9]
const total = number.reduce((acc,val)=>{
    console.log(`accomulator: ${acc} and value : ${val}`)
    return acc + val
},0)

console.log(total);



const cart = [
    {
        course : "Javascript",
        price : 99
    },
    {
        course : "Python",
        price : 599
    },
    {
        course : "Rust",
        price : 999
    }
]

const cartTotal = cart.reduce(((acc,val)=> acc + val.price),0)
console.log(cartTotal);