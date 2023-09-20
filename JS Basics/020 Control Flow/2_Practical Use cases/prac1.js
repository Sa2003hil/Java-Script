const isLoggedin = true
const hasDebitCard = true

const LoggedInfromGoogle = false
const LoggedInfromEmail = true


// multiple condition checking
if (isLoggedin && hasDebitCard) {
    console.log("Allow for shopping")
}


// this mainly used in conditional rendering
if (LoggedInfromEmail || LoggedInfromGoogle) {
    console.log("Logged In")
}
