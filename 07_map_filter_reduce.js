let arr = [32, 13, 34, 15, 19];

// forEach loop accepts 3 arguments
arr.forEach((value, index, array) => {
    if (index % 2 === 0) {
        console.log(value)
    }
})
// forEach loop doesnot return anything
// It is used to iterate over an array

// The main difference between forEach and map is that forEach doesnot create a new array but map does

// Array map method
// It creates an entirely new array with the values that are returned by the map function
// It does not modify the original array
let arr2 = arr.map((value) => value + 2)
console.log(arr2);

let arr3 = arr.map((value, index, array) => {
    console.log(value, index, array);
    return value + index;
});
console.log(arr3);


// Array filter method
// It returns a new array with the values that satisfy the condition
// It is used to filter out the values from an array
// It does not modify the original array
let a2 = arr.filter((value) => {
    return value < 20;
});
console.log(a2);

// Array filter method with an object array
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 2001, edition: 2006 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 2005, edition: 2010 },
    { title: 'Book Three', genre: 'Fiction', publish: 2010, edition: 2015 },
    { title: 'Book Four', genre: 'Science', publish: 2015, edition: 2020 },
    { title: 'Book Five', genre: 'Fiction', publish: 2020, edition: 2025 },
    { title: 'Book Six', genre: 'Non-Fiction', publish: 2025, edition: 2030 },
    { title: 'Book Seven', genre: 'Science', publish: 2030, edition: 2035 },
    { title: 'Book Eight', genre: 'Fiction', publish: 2035, edition: 2040 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 2040, edition: 2045 },
    { title: 'Book Ten', genre: 'Science', publish: 2045, edition: 2050 }
]

let userBooks = books.filter((book) => book.genre === 'Fiction')
console.log(userBooks)

let userBooks2 = books.filter((book) => book.publish >= 2017)
console.log(userBooks2)


// Chaining filter and map methods
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newNumbers = numbers.map((value) => value * 10)
                            .map((value) => value + 1)
                                .filter((value) => value > 40)
console.log(newNumbers);


// Array reduce method
// It reduces the array to a single value
// It takes a callback function and an initial value
// The callback function takes two arguments: accumulator and currentValue
// The accumulator is the value that is returned by the previous iteration
// The currentValue is the value of the current iteration
// The initial value is the value that is passed to the accumulator in the first iteration
let newArr = [1, 2, 3, 4, 5];
const initialValue = 0;
let arr4 = newArr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, initialValue);
console.log(arr4);

// If the initial value is not passed, the first element of the array is used as the initial value and the second element is used as the current value
let arr5 = newArr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});
console.log(arr5);