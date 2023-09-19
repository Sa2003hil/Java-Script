
/************************    Interesting Example       ********************************/

// Method 1 :


function addone(num) {   // Declaration
    return num + 1
}

console.log(addone(1))  // Definition

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++ 

// This will aslo work properly 

console.log(addone(1)) // Definition

function addone(num) {  // Declaration
    return num + 1
}


// Method 2 :  in this case this addTwo is also called expression

const addTwo = function (num) {
    return num + 2
}

console.log(addTwo(5))



// But if put definition before declaration it'll give an error