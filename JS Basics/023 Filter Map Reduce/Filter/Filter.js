const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Filter method is mainly used to filter out the values from the array based on some condition
const newNums = myNums.filter((num) => (num > 4))
// this is implicit return and we don't need to write return keyword and also we don't need to write curly braces
console.log(newNums)





// if we want to write explicit return then we need to write return keyword and also we need to write curly braces

const myNums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums1 = myNums1.filter((num1) => {
    return num1 > 2;
})

console.log(newNums1)