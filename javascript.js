const arr = [2,4,6,8,10];

// arr.forEach((item,index)=>{
//     console.log(item," ",index," ");
// })

// const data =  arr.map((item,index)=>{
//     console.log(item," ",index," ");
//     return item * 3;
// })

const Filtereddata =  arr.filter((item,index)=>{
    if(item ==8) return false;
    else return true
})


console.log(Filtereddata)


