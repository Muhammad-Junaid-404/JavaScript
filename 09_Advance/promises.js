 // promise
 const promiseOne = new Promise(function(resolve,reject){
    //DB calls cryptography network
    //Do any async task
    setTimeout(() => {
        console.log("Async task is complete");
        resolve()
    }, 1000);
 })
promiseOne.then(()=>{
    console.log("Promise consumed");
})



// promise 2
new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("Async task 2");
        resolve()
    }, 1000);
}).then(()=>{
    console.log("Async 2 resolved");
})



// promise 3
const promiseThree= new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve({name:"TechBoy",email:"Unknown@gmail.com"})
    },1000)
})

promiseThree.then((user)=>{
    console.log(user);
})



// promise 4
const promiseFour= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({name:"Tech Island",email:"Tech@gmail.com"})
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.name
}).then((name)=>{
    console.log(name);
}).catch((error)=>{
   console.log(error);
}).finally(()=>{
    console.log("Promise finally resolved or rejected");
})


// promise five
const promiseFive= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({name:"Tech Warrior",email:"Pro@gmail.com"})
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
   try {
    const res = await promiseFive
    console.log(res);
   } catch (error) {
    console.log(error);
   }
}

consumePromiseFive()



// using async await
// async function getAllUsers(){
//     try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await res.json()
//         console.log(data);
//     } catch (error) {
//          console.log(error);
//     }     
// }
// getAllUsers()



// using then catch
fetch('https://jsonplaceholder.typicode.com/users')
.then((res)=>res.json())
.then((data)=>console.log(data))
.catch((error)=>console.log(error))
.finally(()=>console.log("Promise finally resolve or rejected"))