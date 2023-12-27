class User {
    constructor(username) {
        this.username = username
    }
    logMe() {
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }
    addCourse() {
        console.log(`${this.username} added a course`);
    }
}

const chai = new Teacher("chai", "chai@gmail.com", "123")
chai.addCourse();

const masalaChai = new User("masalaChai")
masalaChai.logMe();

// masalaChai.addCourse();

console.log(chai === masalaChai);