class User {
    // jese hi class se ek object initialize hoga  ya jese hi new keyword use hoga to constructor call hoga
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword() {
        return `${this.password}abc`
    }

    changeUsername() {
        return `${this.username.toUpperCase()}`
    }
}


const chai = new User("chai", "chai@gmail.com", "123")
console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// Behind the scene

function NewUser(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

NewUser.prototype.encryptPassword = function () {
    return `${this.password}abc`
}

NewUser.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`
}

const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());