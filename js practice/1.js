// console.log(1)
// console.log(2)

// console.log(3)
// console.log(4)




// callback
// const runForLoop = (func) =>{
//     func();
// }

// const printHello = () =>{
//     console.log("hello");
// }

// runForLoop(printHello);


// const one = () =>{
//     console.log("i am one");
// }

// const two = () =>{
//     setTimeout(()=>{
//         console.log("whoooooooo");
//     },3000)
//     console.log("i am two");
// }

// const three = () =>{
//     console.log("i am three");
// }

// one();
// two();
// three();

////////////////////////////////////////// promise

// const getData = () =>{
//     return new Promise((resolve,reject)=>{
//         reject("error data")   
//         // resolve("response data")   
//     })
// }

// getData()
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error);
// })


//////////////////////////////////////// lopop issue

const getData = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("response data")
        },3000)
})
}

console.log(1)
console.log(2)
getData()
.then((data)=>{
    console.log(3)
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})

console.log(4)
