const myarr = ["js", "ruby", "cpp", "c", "swift", "mongoDB"]

/*
syntax of for each loop
-------------------------------
array_name.forEach(  () => {} )    |
-------------------------------

array_name.forEach(function(item, index, arr) {   
    // statements
}

*/


// Example
myarr.forEach((item, index, myarr) => {

    console.log(item, index, myarr)

})


// imp example array of object basicly used in case of database (jo bhi value database se aati hai vo array of object mein aati hai)


const myarr2 = [
    {
        languageName: "javascript",
        languagefilename: "js"
    },
    {
        languageName: "c++",
        languagefilename: "cpp"
    },
    {
        languageName: "python",
        languagefilename: "py"
    },
]


// here we are using forEach loop to print the values of array of object  

myarr2.forEach((item) => {
    console.log(item.languageName)
})