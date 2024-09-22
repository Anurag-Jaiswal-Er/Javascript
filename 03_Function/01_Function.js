// FUNCTION
function adition() {
  console.log(5 + 6);
}
adition();
// parameter
function addTwoNumber(number1, number2) {
  console.log(number1 + number2);
}
const result = addTwoNumber(5, 9);
console.log("Result : ", result); // function return undefined if we are declare function like this
function subtract(n1, n2) {
  let ans = n1 - n2;
  return ans;
}
const ans = subtract(15, 3); // in now in result variable show 12
console.log("Result : ", ans);
function calculateCartPrice(...num1) {
  return num1;
}
// here return only on value and function is also take a only one parameter but when we use ...num1 it is a rest operator then when we use function in future then we give more than one parameter then its return a array type like next line we see
console.log(calculateCartPrice(500, 300, 500, 400, 678));

const user = {
  username: "Anurag",
  price: 999,
};
const Cart = {
  username: "sam",
  price: 399,
};
// function on object how to declare
function handelObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}
handelObject(user); //for user object
handelObject(Cart); // for cart object

// **************** Arrow Function **********************

const family = {
  Name: "anurag jaiswal",
  fatherName: "Baijnath Jaiswal",
  MotherName: "Parvati jaiswal",
  Member: 5,
  // this is use for current context means {} bracekt ke andar ho means aap current context mai ho
  welcomeMessage: function () {
    console.log(
      `${this.Name} , welcome to the family of ${this.Member} in this house owner of this home is ${this.fatherName} and ${this.MotherName}`
    );
    console.log(this);
  },
};

family.welcomeMessage();
family.Name = "Rebanshu";
console.log(this); // return empty object because we are  outside the context

function desi() {
  let usern = "rhohan";
  console.log(this); // bauth sari value aayegi
  console.log(this.usern); // output will be undefined because this keyword alway work with object not with function
}
desi();

const f = () => {
  let temp = "rohit";
  console.log(this); // output will be empty
  console.log(this.temp); // not work here also output will be undefined
};
f()(
  // Immediately invoked function expressions (IIFEE)

  //  function chai(){
  //   // console.log(`DB CONNECTED`)
  //  }() // its gives error because scope ke andar ni h to hum ek paranthesis laga ke wrap kr denge jisse a ek scope mai aa jayega
