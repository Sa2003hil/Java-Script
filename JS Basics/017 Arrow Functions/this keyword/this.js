// this keyword in javascript is used to define the current context of the function and it will work in object not in functions


// In objects:-
const user = {
    username: 'sahil',
    price: 1000,

    welcomeMessage: function () {
        console.log(`Hello ${this.username} , welcome to the course`)
        console.log(this) // {username: "sahil", price: 1000, welcomeMessage: ƒ}
    }
}

user.welcomeMessage() // Hello sahil , welcome to the course


// In function:-

const chai = function () {
    let usernamee = "sahil"
    console.log(` ${this.usernamee}`)
}

chai() // undefined because this keyword is not working in functions


/*-----------------------------------------------------------------------------------*/

/****  Important   ******/

// in case of windows/node there is no current context available in Global environment 
console.log(this) // output --> {}  --> empty object

// but in case of browser current context is window object like if we do this in browser console

console.log(this) // window object  -->Window {window: Window, self: Window, document: document, name: '', location: Location, …}


/*-----------------------------------------------------------------------------------*/
// if we change the current context --> the output will also change

user.username = "sahil Dhiman"
user.welcomeMessage() // Hello sahil Dhiman , welcome to the course

