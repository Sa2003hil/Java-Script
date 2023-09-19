// Arrow functions :- are anonymous functions that can be used as a callback function 


// old syntax of function

const func = function () {
    /* Function values  */
}


// In ES6 Arrow functions are introduced 

const funct = () => {
    /* Function values  */
}


// There are two ways of writing arrow functions


// method 1:  explicit return ---> here we need to write return keyword and also we need to write curly braces
const chai = (parameter1, parameter2) => {
    let username = "sahil"
    console.log(` ${this.username}`)
}

chai()

// method 2: (****  Implicit return  **** )---> Here we don't need to write return keyword and also we don't need to write curly braces

// Trick : jab curly braces use karte hai to return ka use hoga and jab paranthesis use karte hai to return ka use nhi hoga
const sum = (num1, num2) => (num1 + num2)

console.log(sum(2, 2))




// Arrow function with foreach loop

const arr = [1, 2, 3, 4, 5]
arr.forEach((ele) => {
    console.log(ele)
})