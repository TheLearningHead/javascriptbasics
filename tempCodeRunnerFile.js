let newArr = [1, 2, 3, 4, 5];
let a3 = newArr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});
console.log(a3);