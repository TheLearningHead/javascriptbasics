// Synchronous programming -> The code is executed in the order it is written.

// console.log("Hello")
// console.log("Heellloooo")

// ---------------------------------

// Asynchronous programming -> The code is executed in a non-blocking manner, allowing other code to run while waiting for a task to complete.

// An asynchronous function gets executed after the execution of the entire script 
// In other words the execution of the asynchronous script is paused until the remaining script gets executed

// console.log("Hello")
// console.log("Heellloooo")
// setTimeout(()=>{
//     console.log("I am an asynchronous function")
// }, 2000)
// console.log("Hiii")

// ----------------------------------

// Callbacks:

// A callback function is a function that is passed as an argument to another function and is executed after the completion of that function

// const callback = (arg) => {
//     console.log(arg)
// }

// const loadScript = (src, callback) => {
//     let sc = document.createElement("script")
//     sc.src = src
//     sc.onload = () => callback("Hello World")
//     sc.onerror = () => callback("Error loading script with src: " + src)
//     document.body.append(sc)
// }

// loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)


// "Callback hell" or "Pyramid of Doom" in JavaScript refers to the situation where multiple nested callbacks make the code difficult to read and maintain.

// ----------------------------------------------------------------
