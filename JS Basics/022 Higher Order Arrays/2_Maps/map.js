// map in javascript is a data structure that we can use to keep key value pairs

const map = new Map()

map.set('IN', "India")
map.set('US', "United State of America")
map.set('FR', "France")
map.set('IN', "India")


console.log(map)


// for of loop in map (imp points : maps are iteratable in for of loop but in case of objects this loop doesnt works  )

for (const [key, value] of map) {   // here passing [key, value] is known as destructuring of array
    console.log(key, ':-', value)
}

// In case of objects 

const myObj = {
    'game1': 'NFC',
    'game2': 'spiderman'
}

for (const [key, value] of object) {
    console.log(key, ":-", value); // this will give an error here the concept of for in loops comes out
}



