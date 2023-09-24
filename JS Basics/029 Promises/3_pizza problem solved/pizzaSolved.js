function getCheese() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cheese = '🧀';
            // console.log("Here is the cheese", cheese);
            resolve(cheese);
        }, 2000);
    })
}



function makeDough(cheese) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dough = cheese + '🍞';
            // console.log("Here is the Dough", dough);
            resolve(dough);
            // reject('Bad cheese');
        }, 2000);
    })
}




function bakePizza(dough) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pizza = dough + '🍕';
            // console.log("Here is the pizza", pizza);
            resolve(pizza);
        }, 2000);
    })
}


// Method 1:  These then and catch methods are old methods of promises we can also do the same thing using async await functions
/*

.then :- is used to handle the success case of a promise
.catch :- is used to handle the failure case of a promise
.finally :- is used to handle the final case of a promise it will execute in    both the cases whether the promise is fulfilled or rejected

*/


getCheese()
    .then((cheese) => {
        console.log("Here is the cheese", cheese);
        //now make the dough
        return makeDough(cheese);
    })
    .then((dough) => {
        console.log("Here is the Dough", dough);
        // now make the pizza
        return bakePizza(dough);
    })
    .then((pizza) => {
        console.log("Here is the pizza", pizza);
    })
    .catch((data) => {
        console.log("Error Occured", data);   // this will excecute if some promise rejects somehow (like uncomment the reject in makedough function to see the result )
    })
    .finally(() => {
        console.log('Process Ended !');
    })


// Method 2: this can also be done using async await functions

/*
Imp Points :-

async function is used to make a function asynchronous. It means a function will return a promise and we can use await keyword to wait for the promise to resolve or reject. 

await keyword is used to wait for a promise to resolve or reject. It can only be used inside an async function.


*>  For error handling in async ans await functions we can use try catch block

like this :-


async function name() {
    try {
        here we can write our code
    } catch (error) {
        console.log("Error Occured", error);
    }
}


*/

async function orderPizza() {
    try {
        const cheese = await getCheese();
        console.log("Here is the cheese", cheese);
        const dough = await makeDough(cheese);
        console.log("Here is the Dough", dough);
        const pizza = await bakePizza(dough);
        console.log('Here is the pizza', pizza);
    } catch (error) {
        console.log("Error Occured", error);
    }
}

orderPizza();

