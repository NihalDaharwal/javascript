const arr = [2,4,6,8,10];

const Filtereddata =  arr.filter((item,index)=>{
    if(item==4) return false;
    else return true
})


console.log(Filtereddata)


