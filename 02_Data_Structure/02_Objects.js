// obeject literals
const mysym = Symbol("key1") // declare the symbol data type
const jsuser = {
    Name: "Anurag",
    [mysym]: "mykey1",
    age: 23,
    location: "Uttar pradesh",
    gmail: "anuragjaiswal7355@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday" , "saturday"]
} // object are declare
// how to access the object 
console.log(jsuser.gmail) // one method but not recomded to use this method to acess the object
console.log(jsuser["gmail"]) // this method is good one to use for code readable because in object thing are treate like string so we use "email" like string
console.log(jsuser[mysym])
jsuser.age = 24
console.log(jsuser["age"])
// Object.freeze(jsuser) // freeze the object then the value is not change in further
jsuser.Name = "ragni" // output will not change
console.log(jsuser["Name"])
console.log(jsuser)
jsuser.greeting = function() // use function
{
    console.log("Hello JS user")
}
console.log(jsuser.greeting())
console.log(jsuser.greeting)
const obj1 = {1:"a" , 2: "b"}
const obj2 = {3:"c" , 4: "d"}
const obj3 = {5:"e" , 6: "f"}
const result = Object.assign({} , obj1 ,obj2 , obj3) // combine all object and return new object
console.log(result)
// another method for combinde obj using spreed operator
const result1 = {...obj1 , ...obj2 , ...obj3}
console.log(result1)
const course = {
    courseName:"javascript",
    courseInstructor: "Anurag",
    chanel: "Desi_coder"
}
// exctrate the value in another way like
const {courseName : Cname} = course // destruture courseName in only Cname
console.log(Cname)


// ********************** API ********************
