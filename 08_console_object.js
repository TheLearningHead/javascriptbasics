console.table({a:1,a:2})
console.info("info")
console.warn("Warning")
console.error("Error")
console.assert("Error"!=false)
console.assert("Error" == false)

console.time("for")
for(let i=0;i<5;i++){
    console.log("Hello")
}
console.timeEnd("for")
// console.clear()