let a = "45";
console.log(typeof a);
a = Number.parseInt(a); // converts the string to number
console.log(typeof a);

let marks = 10;
console.log((marks > 10) ? "Yes" : "No") // ternary operator


// Conditionals
if (marks == 10) {
    console.log("You aced the exam");
}
else if(marks>5){
    console.log("Passed");
}
else {
    console.log("Failed");
}


// Different types of for loops
// 1. for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// 2. for-in loop
let myobj = {
    Ayush: 90,
    Aman: 50,
    Anuj: 60,
};
for (let a in myobj) {
    console.log(a); // prints the keys in myobj
}

// 3. for-of loop
for (let b of "Ayush") {
    console.log(b); // prints each element in the given iterable which may be a string or an array
}

// while loop
let c = 1;
while (c <= 5) {
    console.log(c);
    c += 1;
}