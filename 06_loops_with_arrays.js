let num = [1, 2, 3, 4, 5];

// Basic for loop
for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
}

// forEach loop
// It doesn't return anything
// It is used to iterate over an array
num.forEach((element)=>{
    console.log(element**2);
})

num.forEach((value, index, arr)=>{
    console.log(value, index, arr)
})

const myCoding = [
    {
        name: 'JavaScript',
        level: 'Intermediate'
    },
    {
        name: 'Python',
        level: 'Beginner'
    },
    {
        name: 'Java',
        level: 'Advanced'
    }
]

myCoding.forEach((item)=>{
    console.log(item.name, item.level)
})

// for-in loop -> used with objects
// It iterates over the keys of the object
// It is not recommended to use for-in loop with arrays as it iterates over the keys of the array i.e. the index
let obj = {
    a:1,
    b:2,
    c:3,
}

for (const key in obj) {
    const element = obj[key];
    console.log(key, element)
}

// for-of loop -> used with arrays and strings
// It iterates over the values of the array
for (const iterator of num) {
    console.log(iterator)
}