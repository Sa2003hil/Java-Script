// callback function is a function that is passed to another function as an argument and is executed after some operation has been completed. 


const calculate = (a, b, operation) => {
    return operation(a, b);
}

const result = calculate(3, 4, function (num1, num2) { // this is called anonymous function  (don't have name)
    return num1 + num2
});


console.log(result)


// for subtracting two numbers

const subtract = (a, b) => a - b;

const result1 = calculate(3, 4, subtract);

console.log(result1)


// ------------------------------------------------------------------

function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

//call back function

function callMe() {
    console.log('I am callback function');
}


//passing function as an argument
greet('sahil', callMe);  