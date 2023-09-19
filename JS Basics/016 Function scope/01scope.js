
/*

Var --> Global scope hota hai
Let --> local scope hota hai

*/

// Example 1
let a = 20;
var b = 3;
if (true) {
    var b = 30;

}
console.log(b);


// Example 2

let ab = 1;
if (true) {
    let ab = 3;
    console.log("inner: ", ab);  // local scope
}
console.log(ab);