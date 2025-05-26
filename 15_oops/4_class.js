// Classes in JavaScript are a syntactical sugar over the prototype-based inheritance.

// Class definition in JavaScript
class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    // Method definition
    displayInfo() {
        return (`Username: ${this.username}, \nEmail: ${this.email}`);
    }
}

const user = new User("Ayush", "email@gmail.com", "1234")
console.log(user.displayInfo())