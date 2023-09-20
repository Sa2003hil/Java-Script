// How to for loops works internally

for (let i = 1; i <= 10; i++) {
    console.log(`Outer Loop : ${i}`)
    for (let j = 1; j <= 10; j++) {
        console.log(`Inner Loop value ${j} and Inner Loop ${i}`)
    }
}


// Printing Tables upto 10

for (let i = 1; i <= 10; i++) {
    console.log(`Outer Loop : ${i}`)
    for (let j = 1; j <= 10; j++) {
        console.log(i + '*' + j + ' = ' + i * j)
    }
}