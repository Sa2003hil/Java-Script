//  map in js is used to iterate over an array and return a new array

const arr = [1, 2, 3, 4, 5, 6]

const newarr = arr.map((ele) => {

    return ele + 10;
})

console.log(newarr)



// by using foreach method

const arr3 = [1, 2, 3, 4, 5, 6]

const newarr3 = arr3.forEach((elem) => {
    return elem + 10;
})


console.log(newarr3)


// Chaining : in js is used to call multiple methods on the same array

const arr4 = [1, 2, 3, 4, 5, 6]

const newarr4 = arr4
    .map((element) => (element * 10))
    .map((element) => (element + 1))
    .filter((ele) => (ele > 40))


console.log(newarr4)




