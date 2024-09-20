const score = 400 // here javascript automatically detect the value is number (int)
console.log(score)
const newscore = new Number(100) // but here we assinged value is a number then output will be diffrent
console.log(newscore)
console.log(newscore.toString().length) // find the length of a string or a number 
console.log(newscore.toFixed(2)) // 2 is a digit after the decimal like precision value
const num = 23.4567
console.log(num.toPrecision(3)) // ist give the value round of like if pricision is 3 ans = 23.5 but is number is 123.4567 then pricision is 3 then ans will be 124 because its show the 3 digit only
console.log(Math.abs(-4))
console.log(Math.round(4.6)) // round off value give if less than 4.5 then value is 4 other wise value 5
console.log(Math.ceil(4.2)) // its give upper value like 5
console.log(Math.floor(4.2)) // its give lower value like 4

// math.random 0 to 1 ke bich mai value deta h 

// ******************* DATE *******************

// all are date formate
let my_date = new Date()
console.log(my_date.toString())
console.log(my_date.toDateString())
console.log(my_date.toLocaleDateString())
