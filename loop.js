// arr sort mannual
//

let arr = [53, 10, 45, 82, 35, 93];

//loop for sorting
//first for loop passing arr element i
for (let i = 0; i <= arr.length - 1; i++) {
    // second loop for comparing element j
     for(let j = i+1; j <= arr.length-1; j++){
        // put comdition to compare here we are using if
          if (arr[i]>arr[j]){
             // swap use method 
             temp = arr[i];
             arr[i]= arr[j];
             arr[j]=temp;
          }
     }

}
// lopp for the printing
for(i=0; i<=arr.length-1;i++){
   console.log(arr[i]);
}
