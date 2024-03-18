let arr = [32, 13, 34, 15, 19];

// forEach loop accepts 3 arguments
arr.forEach((value, index, array) => {
    if (index % 2 === 0) {
        console.log(value)
    }
})
// The main difference between forEach anf map is that forEach doesnot create a new array but map does

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
// It returns a value
let a3 = arr.reduce((value1, value2) => {
    return value1 + value2;
});
console.log(a3);