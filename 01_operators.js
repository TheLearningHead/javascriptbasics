let a = 10;
let b = 4;

// Arithmetic operators
console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a * b);
console.log(a ** b);
console.log(a % b);
console.log(++a);
console.log(a++);
console.log(--a);
console.log(a--);

// Assignment Operators
console.log(a = b);
console.log(a += b);
console.log(a -= b);
console.log(a *= b);
console.log(a /= b);
console.log(a %= b);
console.log(a **= b);

// Comparison Operators
let c = 47;
let d = "47";
console.log(c == d); // checks if the two values are equal
console.log(c != d); // checks if the two values are not equal
console.log(c === d); // checks if the two values and there types are equal
console.log(c !== d); // checks if the two values and there types are not equal
// >
// <
// >=
// <=
let marks = 10;
console.log((marks > 10) ? "Yes" : "No"); // ternary operator

// Logical Operators
let x = 25;
let y = 20;
console.log(x>y && x%5==0);
console.log(x>y || x%5==0);
console.log(!false);
