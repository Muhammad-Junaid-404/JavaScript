// Dates


const myDate = new Date()
// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


// let CreatedDate = new Date(2024,2,9)
// let CreatedDate = new Date(2024,2,9,8,30)
// let CreatedDate = new Date("2024-05-16")
let CreatedDate = new Date("02-24-2025")

// console.log(CreatedDate);
// console.log(CreatedDate.toString());
// console.log(CreatedDate.toLocaleString());



// timestamps

const myTimeStamps = Date.now();
// console.log(myTimeStamps);
// console.log(CreatedDate.getTime());

// console.log(Math.round(Date.now()/1000))




const methods  = new Date()
// console.log(methods.getDay());
// console.log(methods.getFullYear());
// console.log(methods.getMonth());
// console.log(methods.getHours());



// localeString

const locale = new Date()
console.log(locale.toLocaleString('default',{
    weekday: "long",
    day:"2-digit"
}))