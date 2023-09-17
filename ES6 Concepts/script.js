


// case 1: if we are making our variable with var then in that case the scope of the variable becomes global
// means var function scoped hota hai hum use apne parent fucntion mein kabhi bhi use kar sakte hai
// var ab = 20;
// if (true) {
//     var ab = 20;
//     console.warn(ab);
// }
// console.warn(ab);



function abcd() {
    for (var i = 1; i < 12; i++) {
        console.log(i);
    }
    consol.log(i);
}
abcd();
// here the output will be 20 20 because the scope of the variable is global


//case 2: if we are making our varibale with let then the scope becomes block level

// let bb = 10;
// if (true) {
//     let bb = 20;
//     console.warn(ab);
// }
// console.warn(bb);
// use of using let is that if we want to use the same variable name in different blocks then we can use let
// here the output will be 20 10 because the scope of the variable is block level

// for (var i = 0; i < 10; i++) {
//     console.warn(i);
// }
// here the answer will be 0 1 2 3 4 5 6 7 8 9 10 because the scope of the variable is global


// for (var i = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.warn(i);
//     }, 1000)
// }
// here by using var 10 times 10 will be printed because the scope of the variable is block level

