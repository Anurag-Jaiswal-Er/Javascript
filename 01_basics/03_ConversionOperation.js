let score = 33 // this is a int value
console.log(typeof (score))
let newScore = String(score) // but in this line i convert int into string 
console.log(typeof (newScore))

// lets see another example

let temp = "33abc"  // in this line it is a string but when we convert into a int value then 
//see what will be output

let newtemp = Number(temp)
console.log(typeof (newtemp)) // still output will give number but we know "33abc" is not a int
// value lets see through console.log(newtemp)

console.log(newtemp) // output will be NaN (means "Not a Number")


