let num = [1, 2, 3, 4, 5];

// Basic for loop
for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
}


// forEach loop
// It doesn't return anything
// It is used to iterate over an array
num.forEach((element) => {
    console.log(element ** 2);
})

num.forEach((value, index, arr) => {
    console.log(value, index, arr)
})

// forEach loop with an object array
const myCoding = [
    {
        name: 'JavaScript',
        level: 'Intermediate'
    },
    {
        name: 'Python',
        level: 'Advanced'
    },
    {
        name: 'Java',
        level: 'Beginner'
    }
]

myCoding.forEach((item) => {
    console.log(item.name, item.level)
})


// for-in loop is used with objects
// It iterates over the keys of the object
let obj = {
    a: 1,
    b: 2,
    c: 3,
}
for (const key in obj) {
    const element = obj[key];
    console.log(key, element)
}

// It is not recommended to use for-in loop with arrays as it iterates over the keys of the array i.e. the index
const languages = ['JavaScript', 'Python', 'Java'];
for (const lang in languages) {
    console.log(lang, languages[lang])
}


// for-of loop is used with arrays and strings
// It iterates over the values of the array or string
// It doesn't work with objects
let numbers = [1, 2, 3, 4, 5];
for (const num of numbers) {
    console.log(num)
}

let string = "Hello World";
for (const char of string) {
    console.log(char)
}