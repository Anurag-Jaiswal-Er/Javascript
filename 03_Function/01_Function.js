// FUNCTION
function adition() {
    console.log(5+6);  
}
adition()
// parameter
function addTwoNumber(number1 , number2) {
  console.log(number1+number2)
}
const result = addTwoNumber(5, 9)
console.log("Result : " , result) // function return undefined if we are declare function like this 
function subtract(n1 , n2){
    let ans = n1-n2;
    return ans
}
const ans = subtract(15,3) // in now in result variable show 12 
console.log("Result : " , ans)
function calculateCartPrice(...num1)
{
  return num1;
}
// here return only on value and function is also take a only one parameter but when we use ...num1 it is a rest operator then when we use function in future then we give more than one parameter then its return a array type like next line we see
console.log(calculateCartPrice(500,300,500,400,678))

const user = {
  username:"Anurag",
  price:999
}
const Cart = {
  username:"sam",
  price:399
}
 // function on object how to declare
function handelObject(anyobject)
{
   console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
handelObject(user)//for user object
handelObject(Cart) // for cart object
