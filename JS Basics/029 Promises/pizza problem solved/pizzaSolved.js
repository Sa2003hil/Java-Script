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