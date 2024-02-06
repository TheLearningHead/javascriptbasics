let marks = [42, 50, 60, 53, 86, 94];

for (let i = 0; i < marks.length; i++) {  // length method tells the length of the array
    console.log(marks[i]); // accessing the elements of an array
}

marks[0] = 78; // updating a value in the array
console.log(`Updated mark list : ${marks}`);


// Some commonly used Array Methods
let arr = [42, 50, 60, 53, 86, 94];

let a = arr.toString();  // arr is converted into string
console.log(a, typeof a);

let b = arr.join("-");  // joins the elements of the array with the symbol specified
console.log(b, typeof b);

// Methods that modify the original array
let c = arr.pop(); // removes the last element of the array
console.log(c);

let d = arr.push(56); // add the given number at the end of the array and returns the new array length
console.log(d, arr);

let e = arr.shift(); // removes the first element from the array
console.log(e, arr);

let f = arr.unshift(45); // adds the given element at the start of the array and returns the new array length
console.log(f, arr);

delete arr[0]; // this deletes the element at the specified index but doesn't affect the length of the array
console.log(arr, arr.length);

let n1 = [1, 2, 3, 4, 5];
let n2 = [6, 7, 8, 9, 10];
let n = n1.concat(n2); // merges the two arrays
console.log(n);

let compare = (a, b) => {
    // return a-b;  // for ascending order
    return b - a; // for descending order
}
let num = [111, 22, 3, 1, 67, 43];
//console.log(num.sort()); // sorts the array alphabetically
console.log(num.sort(compare));

console.log(num.reverse()); // reverses the array

// splice is used to add new elements the array on a particular position by removing some existing elements
num.splice(2, 3, 101, 102, 103, 104); // returns deleted elements when assigned to a variable
// 2 is the start index, 3 is the number of elements to be removed starting from index 2
console.log(num);

// slice creates an array of the elements from the specified index
let new_num = num.slice(2); 
console.log(new_num);

let new_num1 = num.slice(2,4); 
console.log(new_num1);
