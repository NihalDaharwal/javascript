// array

// properties
// methods
// how to sort


//An array is a special variable, which can hold more than one value:
// const cars = ["Saab", "Volvo", "BMW"];

//......................

// Why Use Arrays?
// If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:

// let car1 = "Saab";
// let car2 = "Volvo";
// let car3 = "BMW";
// However, what if you want to loop through the cars and find a specific one? And what if you had not 3 cars, but 300?

// The solution is an array!

// An array can hold many values under a single name, and you can access the values by referring to an index number.

//....................


// Creating an Array
// Using an array literal is the easiest way to create a JavaScript Array.

// Syntax:

// const array_name = [item1, item2, ...];      
// It is a common practice to declare arrays with the const keyword.


//..............

// Spaces and line breaks are not important. A declaration can span multiple lines:

// Example
// const cars = [
//   "Saab",
//   "Volvo",
//   "BMW"
// ];


//....


// You can also create an array, and then provide the elements:

// Example
// const cars = [];
// cars[0]= "Saab";
// cars[1]= "Volvo";
// cars[2]= "BMW";


//....



// Accessing Array Elements
// You access an array element by referring to the index number:

// const cars = ["Saab", "Volvo", "BMW"];
// let car = cars[0];



//...

// Changing an Array Element
// This statement changes the value of the first element in cars:

// cars[0] = "Opel";
// Example
// const cars = ["Saab", "Volvo", "BMW"];
// cars[0] = "Opel";


// Access the Full Array
// With JavaScript, the full array can be accessed by referring to the array name:

// Example
// const cars = ["Saab", "Volvo", "BMW"];
// document.getElementById("demo").innerHTML = cars;



// Array Elements Can Be Objects
// JavaScript variables can be objects. Arrays are special kinds of objects.

// Because of this, you can have variables of different types in the same Array.

// You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:

// myArray[0] = Date.now;
// myArray[1] = myFunction;
// myArray[2] = myCars;



// Array Properties and Methods
// The real strength of JavaScript arrays are the built-in array properties and methods:

// cars.length   // Returns the number of elements
// cars.sort()   // Sorts the array


