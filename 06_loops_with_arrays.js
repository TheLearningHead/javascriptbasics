let num = [1, 2, 3, 4, 5];

// Basic for loop
for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
}

// forEach loop
num.forEach((element)=>{
    console.log(element**2);
})

num.forEach((value, index, arr)=>{
    console.log(value, index, arr)
})

// for-in loop -> used with objects
let obj = {
    a:1,
    b:2,
    c:3,
}

for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key, element)
    }
}

// for-of loop -> used with arrays
for (const iterator of num) {
    console.log(iterator)
}