// Function definition
function sum(a,b){
    return a+b;
}
console.log(sum(4,5));

// Function defination and storing reference in a constant
const show = function(num) {
    console.log(`Number is ${num}`);
    return num + 2;
}

const num1 = show(3);
console.log(`Now the number is ${num1}`); 

// Another way of writing a function is Arrow Function
// Most common way of using function in js
const addNum = (a,b)=>{
    return a+b;
}
console.log(addNum(4,5));

// Function returning a function
const addMe = function(num1){
    return function(num2){
        return num1+num2;
    }
}
// reference to a function which has num1 = 1 fixed value in closure scope
const addOne = addMe(1);
const addTwo = addMe(2);
console.log(addOne(6));
console.log(addTwo(4));

console.log( addMe(1)(2));