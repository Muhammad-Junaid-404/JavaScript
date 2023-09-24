// for in loop    //works on both object and array

let language = {
    js :"Javascript",
    cpp:"C++",
    rb:"Ruby",
    Py:"Python"
}

for (const key in language) {
    console.log(`${key} :: is for ${language[key]}`);
}


const Arr = [1,2,3,4,7,5]
for (const key in Arr) {
    console.log(`${key} is index of ${Arr[key]}`);
}



// for in loop dont iterate on map
const map = new Map()
map.set('PK',"Pakistan")
map.set('US',"United states")
map.set('GR',"Germany")
map.set('RS',"Russia")
map.set('PK',"Pakistan")

// console.log(map);

for (const key in map) {
     console.log(key);
}