let arr = [32, 13, 34, 15, 19];

// Array map method
// It creates an entirely new array with the values that are returned by the map function
let a = arr.map((value, index, array) => {
    console.log(value, index, array);
    return value + index;
});
console.log(a);

// Array filter method
// filters the array as per the condition given inside the function
let a2 = arr.filter((value) => {
    return value < 20;
});
console.log(a2);

// Array reduce method
let a3 = arr.reduce((value1, value2) => {
    return value1 + value2;
});
console.log(a3);