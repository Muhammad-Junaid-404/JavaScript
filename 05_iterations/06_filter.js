
// const code = ["js","py","php","java","c++"]

// const values = code.forEach((item)=>{
//     console.log(item);
//     return item
// })

// forEach loop dont return any value



// Filter    //returns value

const number = [1,2,3,4,5,6,7,8,9,10]

const myNum =  number.filter((num)=> {
   return num > 5
}
)
console.log(myNum);


// with forEach
const newNum = []
number.forEach((num)=>{
    if(num > 3){
        newNum.push(num)
    }
})
console.log(newNum);

const sports = [
    {
        name : "Cricket",
        type :"Outdoor",
        year : 1960
    },
    {
        name : "Football",
        type :"Outdoor",
        year : 1970
    },
    {
        name : "Basketball",
        type :"Outdoor",
        year : 1890
    },
    {
        name : "Hockey",
        type :"Outdoor",
        year : 1940
    },
    {
        name : "Badminton",
        type :"Indoor",
        year : 1990
    }
]

// let Athletics = sports.filter ((val)=>{
//    return val.type === 'Outdoor' && val.year < 1900
// })
let Athletics = sports.filter ((val)=> val.type === 'Outdoor' )
console.log(Athletics);