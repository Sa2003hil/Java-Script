// Nulish Coalescing Operator (??): sirf null or undefined ke liye bnaya gya hai

// iska mainly use ye hai ki agar bychance koi bhi value null ya undefined ho jaati hai to use koi valid function ya value se replace kar diya jaye  --- usecase : error handling 




let val1

val1 = null ?? 4  // 4

val1 = undefined ?? 12  // 12

val1 = 5 ?? 10;  // 5 (iss case mein jo bhi value first pe hogi vo assign ho jayegi)

val1 = null ?? 12 ?? 10 // 12


console.log(val1)

