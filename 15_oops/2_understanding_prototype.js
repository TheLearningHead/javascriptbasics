// function multipleBy5(num) {
//     return num * 5
// }

// multipleBy5.hello = 2

// console.log(multipleBy5(5));
// console.log(multipleBy5.hello);
// console.log(multipleBy5.prototype); // it gives {} as function does not have prototype by default
// console.log(multipleBy5.__proto__); // it gives {} as function does not have prototype by default


// // Working with basic prototyping in JavaScript
// function CreateUser(username, score) {
//     this.username = username
//     this.score = score
// }

// // Adding methods to the prototype of CreateUser
// CreateUser.prototype.increment = function () {
//     // score++ // this will not work as score is not defined in this scope
//     // Instead, we should use this.score to refer to the score property of the instance
//     this.score++ // incrementing the score by 1
// }

// CreateUser.prototype.printMe = function () {
//     console.log(`Score of ${this.username} is ${this.score}`);
// }

// const user1 = new CreateUser("user1", 25)
// const user2 = new CreateUser("user1", 250)

// user1.increment()
// user1.printMe()
