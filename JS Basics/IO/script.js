alert("Enter the age of the person !")
let a = prompt("Enter the value :")
a = Number.parseInt(a)
// alert("You enter the value of type" + (typeof a))

if (a < 0) {
    alert("you entered negative number")
}

// let write = confirm("Do you want to wrtie this on the page")

else {
    if (a >= 18) {
        document.write("You can drive the car")
        document.body.style.background = "green"
        document.body.style.color = "white"
    }
    else {
        document.write("you cannot drive the car")
        document.body.style.background = "red"
        document.body.style.color = "white"
    }


    console.log(document.body)
}
// document.body.style.background = "yellow"