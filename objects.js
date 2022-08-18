 const car ={
    model: "suv",
    year: 2002,
    price: 50000,
    company: "twin"

 };

console.log(car.model);
console.log(car.year);
console.log(car.price);
console.log(car.company);
console.log(car);



// objects keys

const object1 = {
    a: 'somestring',
    b: 42,
    c: false
  };
  
  console.log(Object.keys(object1));
  // expected output: Array ["a", "b", "c"]
  


  // objects values
  const object2 = {
    a: 'somestring',
    b: 42,
    c: false
  };
  
  console.log(Object.values(object2));
  // expected output: Array ["somestring", 42, false]
  


  //objects entities
  const object3 = {
    a: 'somestring',
    b: 42
  };
  
  for (const [key, value] of Object.entries(object3)) {
    console.log(`${key}: ${value}`);
  }
  
  // expected output:
  // "a: somestring"
  // "b: 42"
  