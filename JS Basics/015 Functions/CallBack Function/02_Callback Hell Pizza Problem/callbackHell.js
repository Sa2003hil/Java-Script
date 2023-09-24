/*

Callback Hell :-
----------------
The phenomenon which happens when we nest multiple callbacks within a function is called a callback hell. The shape of the resulting code structure resembles a pyramid and hence callback hell is also called the “pyramid of the doom”. It makes the code very difficult to understand and maintain

example img :- https://i.ytimg.com/vi/fr67u98nckk/maxresdefault.jpg

Solution to this problem is Promises
 
*/

// function getcheese() {
//     setTimeout(() => {
//         const cheese = "🧀";
//         console.log("Here is the cheese", cheese);
//         return cheese;  --- here we can use callback function --- jab bhi cheese mil jayega after 2 sec then callback kar dena
//     }, 2000)
// }

// console.log(getcheese());   --- this will return undefined because getcheese() function is returning anything before 2 seconds and console.log() is executed before that here we can use callback function --- jab bhi cheese mil jayega after 2 sec then callback kar dena 


// this is callback function -- creating problem of callback hell or pyramid of doom
function getCheese(callback) {
    setTimeout(() => {
        const cheese = "🧀";
        console.log("here is cheese", cheese);
        callback(cheese);
    }, 2000);
}

function makeDough(cheese, callback) {
    setTimeout(() => {
        const dough = cheese + "🍞";
        console.log("here is the dough", dough);
        callback(dough);
    }, 2000);
}


function bakePizza(dough, callback) {
    setTimeout(() => {
        const pizza = dough + "🍕";
        console.log("here is the pizza", pizza);
        callback(pizza);
    }, 2000);
}

// this is the callback hell or pyramid of doom (creating shape of pyramid)
getCheese((cheese) => {
    makeDough(cheese, (dough) => {
        bakePizza(dough, (pizza) => {
            console.log("got my pizza", pizza);
        });
    });
});

// pizza -> dough -> cheese

// this can be solved by promises (pizza problem solved by promises.js in promises folder)
