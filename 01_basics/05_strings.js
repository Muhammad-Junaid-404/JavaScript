

let name = "Unknown";
let score = 999

// console.log("Score of " + name + " is " + score);  // old way

// console.log(`Score of ${name} is ${score}`);

const CityName = new String('Tech Valley')
// console.log(CityName[5]);
// console.log(CityName.__proto__);


//---- string methods
// console.log(CityName.length);
// console.log(CityName.toUpperCase());
// console.log(CityName.charAt(5));
// console.log(CityName.indexOf("V"));

const subStr = CityName.substring(0,5)
console.log(subStr);


const Slice = CityName.slice(-11,5)  // can be in negative
console.log(Slice);

const Tri = "   Wonderful   "
console.log(Tri);
console.log(Tri.trim());

const Rep = "www.Unknown.com/blogs%10tech"
console.log(Rep.replace("%10","-"));

console.log(Rep.includes("com"));

console.log(Rep.split(".",2));