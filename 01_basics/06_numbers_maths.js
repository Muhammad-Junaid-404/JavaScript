// *************** Numbers **********//

const num = 400
// console.log(num);

const Digits = new Number(500)
// console.log(Digits);
// console.log(Digits.toFixed(2));
// console.log(Digits.toString().length);

const prec = 435.5678
// console.log(prec.toPrecision(3));



// *************** Maths **********//
console.log(Math);
console.log(Math.abs(-35));
console.log(Math.PI);
console.log(Math.pow(2,6));
console.log(Math.round(5.3));
console.log(Math.ceil(5.1));
console.log(Math.floor(5.9));
console.log(Math.min(4,42,5,64));
console.log(Math.max(4,42,5,64));

console.log(Math.random());
// console.log(Math.random()*10 + 1);
// console.log(Math.ceil(Math.random()*10 + 5));

const min = 20
const max = 30

console.log(Math.floor(Math.random() * (max - min + 1) + min));