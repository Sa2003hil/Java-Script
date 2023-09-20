myObj = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}


// For in loop is used to loop through objects
for (const key in myObj) {
    console.log(`${key} shortcut is for ${myObj[key]}`)
}

// for in loop also can be used in case of arrays

const myarr = ["js", "ruby", "cpp", "c", "swift", "mongoDB"]

for (const key in myarr) {
    console.log(key) // from here we can conclude that arrays also have keys (index values 0-based)

    // in order to print values same as object values method

    console.log(myarr[key])
}


// Imp :- for in loop don't work in for in loop it desn't give an error but it cant print the values

const map = new Map()

map.set('IN', "India")
map.set('US', "United State of America")
map.set('FR', "France")
map.set('IN', "India")


for (const key in map) {
    console.log(key)
}