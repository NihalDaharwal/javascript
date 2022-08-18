
const arr = [2,4,6,8,10];
const data =  arr.map((item,index,arr1)=>{
        console.log(item," ",index," ",arr1);
        return item * 3;
    })


    console.log(data);