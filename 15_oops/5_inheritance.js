// Inheritance is a mechanism in which one class can inherit properties and methods from another class.

class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    logMe() {
        console.log(`Username: ${this.username}`)
    }
}

class Teacher extends User {
    constructor(username, password, email, course) {
        super(username, password)
        this.email = email
        this.course = course
    }

    addCourse(){
        console.log(`New course is added by ${this.username}`)
    }
}

const teacher = new Teacher("Aman", "1234", "teacher@gmail.com", "Math")
teacher.addCourse() 
teacher.logMe()

console.log(teacher instanceof Teacher)
console.log(teacher instanceof User)
