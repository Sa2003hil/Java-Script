/*
Truthy :-

"0" , 'false' ," " , [] , {} , function(){}--->empty function

Falsy:-

false, 0, -0, BigInt 0n, "", null, undefined, Nan(Not a Number)

*/


// In case of arrays
const UserEmail = []

if (UserEmail) {
    console.log("valid user email")
}
else {
    console.log("not a valid email")
}

if (UserEmail.length === 0) {
    console.log("empty object")
}


// In case of Objects

const usermailid = {}

if (usermailid) {
    console.log("valid mail id")
}
else {
    console.log("not valid")
}


if (Object.keys(usermailid).length === 0) {    // jaise he hum (Object.key(name))---likhte hai to humare pass array of keys banke aa jata hai
    console.log("empty object")
}



/*
Some Important values to remember useful in CP and interviews

false == 0 ---> true
false == '' ---> true
0 == '' ---> true

*/