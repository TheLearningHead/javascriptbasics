// Understanding how a function can be called with a different context using `call` method
function SetUsername(username) {
    this.username = username
    console.log("called");
}

function createUser(username, email, password) {
    // SetUsername(username) // This will not set `this.username` in the context of `createUser`
    
    // To set `this.username` in the context of `createUser`, we need to use `call`
    // SetUsername.call(username) // This will not work as expected, as `this` in SetUsername will not refer to the instance of createUser
    
    // Correct way to set `this.username` in the context of createUser by passing `this` as the first argument
    SetUsername.call(this, username) // This will set `this.username` in the context of createUser

    this.email = email
    this.password = password
}

const user = new createUser("user", "user@gmail.com", "123")
console.log(user);