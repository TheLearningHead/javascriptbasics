// Object literal
// let user = {
//     username: "Ayush",
//     age: 20,
//     loginCount: 4,
//     isLoggedIn: true,
//     getUserDetails: function() {
//         // console.log("Got user details");
//         console.log(this) // 'this' refers to the current object
//         return `Username: ${this.username}`;
//     }
// }

// console.log(user.username)
// console.log(user.getUserDetails())


// Constructor function
function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this; // 'this' refers to the new object being created
}

// const userOne = User("Ayush", 4, true) // This will create a user object
// const userTwo = User("Aman", 6, true); // This will also create a user object which will overwrite userOne as we are not creating a new object
// console.log(userOne)

// Using 'new' keyword to create an instance of User
const userOne = new User("Ayush", 4, true);
const userTwo = new User("Aman", 6, true);
console.log(userOne);
console.log(userTwo);
console.log(userOne.constructor); // This will show the constructor function used to create the object
console.log(userTwo instanceof User) // This will check if userTwo is an instance of User constructor function
