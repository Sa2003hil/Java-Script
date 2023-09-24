const newPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({ user: "sahil", password: "123abc" })
        }
        else {
            reject("Error : Something went wrong !")
        }
    })
})



newPromise.then(() => {
    console.log(user);
    return user.username
}).then((username) => {    // we have to do chaining of promises here to print the username
    console.log(username);
}).catch((error) => {
    console.log(error);
})

// async function consumePromise() {
//     try {
//         const response = await newPromise
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromise();



