/* the default behaviour of JavaScript is to search for the property in the object itself and if it is not found then it will search for the property in the prototype of the object and if it is not found there then it will search for the property in the prototype of the prototype of the object and so on until it reaches the end of the prototype chain.*/

function multiplyBy5(num) {
    this.num = num
    return num * 5;
}

multiplyBy5.power = 2;
console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);


function createUser(username, score) {
    this.username = username
    this.score = score
}

createUser.prototype.increment = function () {
    this.score++;
}

createUser.prototype.printMe = function () {
    console.log(`Price of ${this.username} is ${this.score}`);
}


// the main purpose of new keyword is to create a new object and then call the function with this keyword pointing to the newly created object
const chai = new createUser("chai", 25)
const tea = new createUser("tea", 250)


chai.printMe();


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

javascript new keyword ke through constructor function deti hai 

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
