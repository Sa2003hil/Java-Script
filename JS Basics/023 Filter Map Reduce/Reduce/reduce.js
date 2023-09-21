/*
The reduce method is a JavaScript array method used for reducing the elements of an array to a single value
Data Aggregation: 
if you have an array of products with prices and you want to calculate the total price of all products, you can use reduce to sum up the prices.



Syntax  :

int initialvalue = 0;
const sumwithInitial = array.reduce(function(accumulator, currentValue){
        return accumator+currentValue
},intialValue)


syntax using arrow functions

const sumwithInitial = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

*/

const arr = [1, 2, 3, 4, 5, 6]

const sum = arr.reduce(function (acc, curentVal) {
    console.log(`acc: ${acc}  curentvalue: ${curentVal}`)
    return acc + curentVal
}, 0)

console.log(sum)

// Here you have given an cart array of objects and you have to calculate the total price of all products

const cart = [
    {
        name: 'product1',
        price: 100,
        quantity: 2
    },
    {
        name: 'product2',
        price: 270,
        quantity: 2
    },
    {
        name: 'product3',
        price: 20,
        quantity: 2
    },
    {
        name: 'product4',
        price: 100,
        quantity: 2
    },
]


// without using arrow functions

// const calculatePrice = cart.reduce((previousValue, Currentvalue) => {
//     return previousValue + Currentvalue.price
// }, 0)

// const totalPrice = calculatePrice

// console.log(totalPrice)



// using arrow functions

const mytotal = cart.reduce((acc, currenValue) => acc + currenValue.price, 0);

console.log(mytotal)