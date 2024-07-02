// Synchronous programmimg
// console.log("Hello")
// console.log("Heellloooo")

// ---------------------------------

// Asynchronous programming

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

// A callback is a function which is passed as an argument inside another function and is then invoked inside the outer function to complete some action.

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


// "Callback hell" or "Pyramid of Doom" in JavaScript refers to a situation where callbacks are nested within other callbacks several levels deep, making the code difficult to read and maintain

// ----------------------------------------------------------------
