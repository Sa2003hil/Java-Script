var istatus = document.querySelector("h4")
var addFriend = document.querySelector("#add")
var removeFriend = document.querySelector("#remover")
var check = 0

// document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red";

addFriend.addEventListener("click", function () {
    if (check == 0) {
        istatus.innerHTML = "Friends"
        istatus.style.color = "green"
        istatus.style.backgroundColor = "white"
        istatus.style.padding = "10px"
        istatus.style.borderRadius = "20px"
        istatus.style.width = "100px"
        istatus.style.textAlign = "center"
        check = 1
    }
    else {
        istatus.innerHTML = "Stranger"
        istatus.style.color = "black"
        check = 0

    }
})
// addFriend.addEventListener("click", function () {
//     istatus.innerHTML = "Friends"
//     istatus.style.color = "green"
//     istatus.style.backgroundColor = "white"
//     istatus.style.padding = "10px"
//     istatus.style.borderRadius = "20px"
//     istatus.style.width = "100px"
//     istatus.style.textAlign = "center"

// })

// removeFriend.addEventListener("click", function () {
//     istatus.innerHTML = "Stranger"

// })




