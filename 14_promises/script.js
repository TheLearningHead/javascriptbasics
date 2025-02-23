// Promises:

// Promises are objects that represent the eventual completion or failure of an asynchronous operation and its resulting value. They provide a cleaner, more readable way to handle asynchronous operations compared to traditional callbacks.

// -------------
// Key Concepts of Promises:

// States:

// Pending: The initial state, neither fulfilled nor rejected.
// Fulfilled: The operation completed successfully.
// Rejected: The operation failed.

// ------
// Creating a Promise:
// A promise is created using the Promise constructor, which takes a function with two arguments: resolve and reject. These arguments are themselves functions used to change the state of the promise.

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("I am a console log inside promise")
//         // resolve("Fulfilled") // operation completed successfully and returned the value inside the bracket
//         // reject("Rejected") // operation failed and returned the value inside the bracket
//     }, 2000)
// })

// console.log("I am console log present after the promise")
// console.log(promise)

// ---------------
// Methods:

// then(): Attaches callbacks for the resolution (fulfilled) or rejection of the promise.
// catch(): Attaches a callback for only the rejection of the promise.
// finally(): Attaches a callback that will be executed regardless of the promise's outcome.

// let p1 = new Promise((resolve, reject) => {
//     console.log("Promise 1 is pending")
//     setTimeout(() => {
//         resolve(true)
//     }, 5000)
// })

// let p2 = new Promise((resolve, reject) => {
//     console.log("Promise 2 is pending")
//     setTimeout(() => {
//         reject(new Error("Promise 2 got rejected"))
//     }, 5000)
// })

// p1.then((value) => {
//     console.log(value)
// })

// // p2.catch((error) => {
// //     console.log("Some error has occured in Promise 2: " + error)
// // })

// // p2.then((value) => {
// //     console.log(value)
// // }, (error) => {
// //     console.log("Some error has occured in Promise 2: " + error)
// // })

// Most common wayfor doing the above
// // p2.then((value) => {
// //     console.log(value)
// // }).catch((error) => {
// //     console.log("Some error has occured in Promise 2: " + error)
// // })

// p1.finally(() => {
//     console.log("finally method executed")
// })

// ---------------------

// Promise chaining

// let p1 = new Promise((resolve, reject) => {
//     console.log("Resolving...")
//     setTimeout(() => {
//         resolve("Promise 1")
//     }, 2000)
// })

// p1.then((value) => {
//     console.log(`We are done with ${value}`)
//     let p2 = new Promise((resolve, reject) => {
//         setTimeout(() => { resolve("Promise 2") }, 2000)
//     })
//     return p2
// }).then((value) => {
//     console.log(`We are done with ${value}`)
//     return true
// }).then((value)=>{
//     console.log("Finally done")
// }).catch((error)=>{
//     console.log("Some error occured")
// })

// -----------------------------------

// Attaching multiple handlers to a promise

// We can attach multiple handlers to a promise. This is completely different from promise chaining as in promise chaining the handlers have to wait for the previous handler to resolve after which they can be executed. But here all the handlers work independently in the sequence in which they are written in the code.

// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Promise not resolved")
//         resolve(5)
//     }, 4000)
// })

// p1.then(()=>{
//     console.log("Promise resolved")
// })

// p1.then(()=>{
//     console.log("Hurray")
// })