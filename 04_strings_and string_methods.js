const myObject = {
    name: "Ayush",
    age: 19,
    city: "Nagpur",
}

// Template string literal
const label = `This is me, ${myObject.name}`;
console.log(label);

// String methods
const myName = "Ayush";

console.log(myName.length);
console.log(myName.toLowerCase());
console.log(myName.toUpperCase());
console.log(myName.slice(2, 4));
console.log(myName.replace("A", "Pi"));

const friend = "Aman"
console.log(myName.concat(" is a friend of ", friend));

const sampleString = "      Jai Shree Ram       "
console.log(sampleString.trim())
// These are some of commonly used methods 
// There are a lot more
