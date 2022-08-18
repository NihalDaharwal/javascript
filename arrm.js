const array=[1,2,3,4,5];
array.push(8);
console.log(array,"pushed value 8");


const array2=[1,2,3,4,5,6];
array2.pop(6);
console.log(array2,"pop value 6");


const array3=[1,2,3,4,5,6];
array3.shift(1)
console.log(array3,"shift value (removet value at start) is 1");



const array4=[2,3,4,5,6];
array4.unshift(1);
console.log(array4,"unshift value, added value at begning 1");



const array5=[2,3,4,5,6];
array5.length;
console.log(array5.length," is the length ");




const array6= [2,3,4,5,6,7];
// array6.slice(3,6);
// console.log(array6, "slice part is");
console.log(array6.slice(2,5));
//counting start from 0 


// const array7 =[2,3,4,5,6,7];
// console.log(array7.splice(0,1,5));


// array sort
// by default  sort value as sting
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);

//  numeric sort
// ascending order
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
console.log(points,"ascending");


//numeric sort
//desending order
const points1 = [40, 100, 1, 5, 25, 10];
points1.sort(function(a, b){return b - a});
console.log(points1,"descending");


