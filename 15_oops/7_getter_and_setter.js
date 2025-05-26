class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    // Getters and Setters are special methods that allow you to define how to access and modify properties of an object.
    // Getter method helps to access the value of a property.
    // Setter method helps to modify the value of a property.
    
    get email(){
        return this._email;
    }

    set email(value){
        this._email = value;
    }

    get password(){
        // return this.password // This will cause an infinite loop, as it calls itself.
        return this._password; // Using a private variable to store the password to avoid infinite loop.
    }

    set password(value){
        // this.password = value // This will cause an infinite loop, as it calls itself.
        this._password = value; // Using a private variable to store the password to avoid infinite loop.
    }
}

const user = new User("email@email.com", "1234")
console.log(user.email)