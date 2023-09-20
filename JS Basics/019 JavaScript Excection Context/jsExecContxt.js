/*
JavaScript Ecexution Context

1. Global Execution Context 
2. Functional Execution Context
3. Eval Execution Context

*/

let val1 = 10
let val2 = 2

function add(val1, val2) {
    let total = val1 + val2
    return total
    // console.log(total)
}

let result1 = add(val1, val2)
let result2 = add(20, 30)



/*
How javaScript works internally?

1. Global Execution Context is done inside this (current context) --> this step is done always when the js code runs 

2. Memory creation Phase
    In this phase all the variables are place in which undefined is assigned to them.

    Example : 

    val1 = undefined
    val2 = undefined
    add = definition 
    result1 = undefined
    result2 = undefined

this is called first cycle of execution context

3. Code Execution Phase

    val1 = 10
    val2 = 2

    add---> separate execution context is created for add function

                    NEW EXECUTIONAL CONTEXT

            -------------------------------------------
            |                                         |
            |        NEW VARIABLE ENVIRONMENT         |
            |                    +                    |
            |             EXECUTION THREAD            |
            |                                         |
            |                                         |
            -------------------------------------------

    * jitni baar bhi function aaega utni baar memory creation phase aur code execution phase create hogi.
    

            to be continued...
    



*/