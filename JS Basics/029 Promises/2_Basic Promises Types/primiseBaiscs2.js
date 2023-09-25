let promiseP1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log('p1 resolved')
        resolve('p1 resolved')
    }, 1000)
})

let promiseP2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // console('p2 resolved')
        resolve('p2 resolved')
    }, 2000)
})

let promiseP3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // console('p3 resolved')
        resolve('p3 resolved ')
    }, 3000)
})

// promiseP1.then((value1) => {
//     console.log(value1)
//     // return promiseP1
// })

// promiseP2.then((value2) => {
//     console.log(value2)
//     // return promiseP2
// })

// promiseP3.then((value3) => {
//     console.log(value3);
//     // return promiseP3
// }).finally(() => {
//     console.log('All Promises Resolved');
// })



// this will the array of all promises after completing the timeout
// let promise_all = Promise.all([promiseP1, promiseP2, promiseP3])
// promise_all.then((value) => {
//     console.log(value);
// })



// this will return the status of the promises if somehow any promise will reject then it will show its status 
// let promise_all = Promise.allSettled([promiseP1, promiseP2, promiseP3])
// promise_all.then((value) => {
//     console.log(value);
// })


// jo bhi promise sbse pehle resolve ho rhi hai ye uski value de dega
let promise_all = Promise.race([promiseP1, promiseP2, promiseP3])
promise_all.then((value) => {
    console.log(value);
})