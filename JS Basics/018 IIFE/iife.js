// IIEE :- Immediately Invoked Function Expression :- It is mainly used to avoid global scope pollution.

// function chai() {
//     console.log(`DB CONNECTED`)
// }

// chai()

// IIFE is used to avoid global scope pollution and it is used to create private scope.To immediatly invoke a function we need to wrap the function in parenthesis and then call it.


/*
 
Syntax:-
 
 
--->  (function () {
    // …
     
   })();
 


--->   In case of Arrow functions
 
    (() => {
    // …


    })();

 
--->   (async () => {


    // …
    })();
    
*/

// Method 1: Named IIFE

(function chaii() {
    console.log(`DB CONNECTED`)
})();  // always put semi-colon at the end of IIFE it is mandatory.





// Method 2:
// Anonymous IIFE

((name) => {
    console.log(`DB CONNECTED to ${name}`)
})("sahil")





