class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    // Static methods are called on the class itself, not on instances of the class.
    static createId(){
        return `123`
    }
}

const user = new User("Ayush")
// console.log(user.createId()) // This will not work, as createId is a static method and cannot be called on an instance.

console.log(User.createId()) // This will work, as createId is a static method and can be called only on the class itself.

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const newUser = new Teacher("Anil", "email@gmail.com")
// console.log(newUser.createId()); // This will not work, as createId is a static method and cannot be called on an instance.
