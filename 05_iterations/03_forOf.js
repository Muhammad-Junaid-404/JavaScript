// for of loop    // works on array
let Arr = [1,2,3,4,5]
for (const index of Arr) {
    console.log(index);
}

const welcome = "Welcome to loops"
for (const charac of welcome) {
    console.log(`Characters in Welcome : ${charac}`);
}




// Maps
const map = new Map()
map.set('PK',"Pakistan")
map.set('US',"United states")
map.set('GR',"Germany")
map.set('RS',"Russia")
map.set('PK',"Pakistan")

console.log(map);


// for of loop on map          // it prints the whole object
for (const [key,value] of map) { 
         console.log(`${key} :: ${value}`);
}


// let game ={
//     game1 : "Ashphalt",
//     game2:  "CODMW",
//     game3:   "StrongHold"
// }
// for (const [key,value] of game) {
//     console.log(`${key} :: ${value}`);
// }

// for of loop dont work on objects