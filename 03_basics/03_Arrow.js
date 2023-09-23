const user ={
    name : "CyberTech",
    price : 99,
 
    welcomeMessage : function(){
        console.log(`${this.name}, welcome to website `);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.name="CyberBros"
// user.welcomeMessage()

// console.log(this);  // in node this returns an empty object whereas in browser this returns a window object


function tea(){
    let user = "unknownX"
    console.log(this);
    console.log(this.user); // undefined
}
//  tea()



const Arrow = ( ) =>{
    let name = "Tech_Sensei"
    console.log(this);    // return a empty object
}
// Arrow()


const ArrowFunc = (num1,num2) =>  num1 + num2
// const ArrowFunc = (num1,num2) =>  (num1 + num2) will not use return when using parenthesis
// console.log(ArrowFunc(3,4));


// returning an object
const ArrowObj = () => ({name:"TechScorpian"})
// console.log(ArrowObj());

//  when returning an object must put object in parenthesis


