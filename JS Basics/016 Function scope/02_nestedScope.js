// Nested scopes in case of functions 

/*
Note :-

In case of nested functions child functions can access the parent function variable
*/


function one() {

    const username = "sahil"

    function two() {
        const website = "YouTube"
        console.log(username)  // sahil
    }

    // console.log(website)   ---> this will give error because it is out of two scope

    two()
}
one()