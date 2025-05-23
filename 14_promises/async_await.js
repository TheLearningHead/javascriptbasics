// One way to handle the promise

// function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         })
//     })
// }

// console.log("Task Begin")
// console.log("Gathering data")
// console.log("Loading data")

// let data = getData()

// data.then((value) => {
//     console.log(data) 
//     console.log("Process data")
//     console.log("Task End")
// })



// Another way to handle the promise

// Example 1
// using async/await

// function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 4000)
//     })
// }

// async function main() {
//     console.log("Task Begin")
//     console.log("Gathering data")
//     console.log("Loading data")

//     let data = await getData() // wait for the promise to resolve

//     console.log(data)
//     console.log("Process data")
//     console.log("Task End")
// }
// main()


// Example 2
// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // let error = false // change this to true to simulate an error
//         let error = true
//         if (!error) {
//             resolve({ username: "Ayush", password: "1234" })
//         }
//         else {
//             reject("ERROR: Some error has occured")
//         }
//     }, 2000)
// })

// async function consumeMyPromise() {
//     try {
//         const value = await myPromise
//         console.log(value)
//     } catch (error) {
//         console.log("ERROR: ", error);
//     }
// }
// consumeMyPromise()
