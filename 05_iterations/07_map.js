// map

const number = [1,6,2,8,4,5,34,6,65,56,6,57,]

const NewNum =  number.map((val) =>{
return val+5
} )
console.log(NewNum);



//chaining
const chaining = number
.map((num)=> num * 10)
.map((num)=> num + 1)
.filter((val)=> val > 100)

console.log(chaining);