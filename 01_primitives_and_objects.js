// Data types in Js
// There are 7 primitive data types in js
// NULL, NUMBER, BOOLEAN, BIG INT, SYMBOL, STRING, UNDEFINED

console.log("Hello World!");

// Not a good practice to use "var"
var name = "Ayush";
var name = "Happy"; // doesnot produce any error


// For variable with mutable value and it has a block level scope
let age = 18;

//let age = 19; // produces error
age = 19;

// For defining a constant
const city = "Nagpur";

// Object creation: Objects are key value pairs (just like dictionaries in python)
const myObject = {
    name: "Ayush",
    age: 19,
    city: "Nagpur",
}

console.log(myObject);
console.log(myObject.name);
