

const getData = () =>{
    return test((resolve,reject)=>{
            resolve("response data")
    })
}


const test = (func) =>{
    func(res,rej)
}

