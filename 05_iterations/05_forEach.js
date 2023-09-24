// forEach loop

const prog = ["js","py","php","java","c++"]

prog.forEach((lang)=>{
     console.log(lang);
})

//  prog.forEach(ref)
// function ref( val ) {
//     console.log(val);
// }



// forEach loop also return the index and the whole array
prog.forEach((val,index,arr)=>{
    console.log(`${index} of ${val} :: ${arr}`);
}
)


// objects in array
const Api = [
    {
        name : "Alex",
        age : 17,
    },
    {
        name : "Arthur",
        age : 37,
    },
    {
        name : "Charly",
        age : 16,
    },

    {
        name : "Allen",
        age : 27,
    },
    {
        name : "Richy",
        age : 15,
    },
    {
        name : "Bob",
        age : 19,
    }
]

Api.forEach((val)=>{
    console.log(`${val.name} is ${val.age} year old`);
})