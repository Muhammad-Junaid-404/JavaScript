// loops

//for loop
// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(element);
// }


// nested loop
// for (let index = 0; index < 10; index++) {
//     console.log(`Outer loop value : ${index}`);
//     for (let x = 0; x < 10; x++) {
//         // console.log(`inner loop value : ${x}  and outer loop value : ${index}`);
//         console.log(`${index} * ${x} = ${x*index}`);
//     }
// }




// Array
let Arr = ["lambo","bugati","ford","dodge"]
console.log(Arr.length);
for (let index = 0; index < Arr.length; index++) {
    const element = Arr[index];
     console.log(element);
}


// break & continue
for (let index = 0; index < 10; index++) {
    if(index == 5){
        console.log("Detected 5");
        // break;  // breaks(exits) the loop
        continue;  // skips 
    }
    console.log(`Value of index is ${index}`);
}